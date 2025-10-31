import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Mail, Loader2, Check } from "lucide-react";

interface EmailWaitlistFormProps {
  variant?: "hero" | "inline";
  placeholder?: string;
}

export function EmailWaitlistForm({
  variant = "inline",
  placeholder = "Enter your email",
}: EmailWaitlistFormProps) {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const mutation = useMutation({
    mutationFn: async (email: string) => {
      return await apiRequest("POST", "/api/waitlist", { email });
    },
    onSuccess: (data: any) => {
      if (data.alreadyExists) {
        toast({
          title: "Already on the list!",
          description: "You're already signed up for early access.",
        });
      } else {
        toast({
          title: "Welcome to the waitlist!",
          description: "We'll notify you when Centax launches.",
        });
      }
      setEmail("");
    },
    onError: (error: any) => {
      toast({
        title: "Something went wrong",
        description: error.message || "Please try again later.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      mutation.mutate(email.trim());
    }
  };

  const isHero = variant === "hero";

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex ${isHero ? "flex-col sm:flex-row" : "flex-row"} gap-3 ${
        isHero ? "max-w-md mx-auto" : "w-full"
      }`}
      data-testid="form-waitlist"
    >
      <div className="flex-1 relative">
        <Mail
          className={`absolute left-3 ${
            isHero ? "top-1/2 -translate-y-1/2" : "top-1/2 -translate-y-1/2"
          } h-5 w-5 text-muted-foreground pointer-events-none`}
        />
        <Input
          type="email"
          placeholder={placeholder}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          disabled={mutation.isPending}
          className={`${isHero ? "h-12 text-base" : "h-10"} pl-10 ${
            isHero ? "bg-white/90 backdrop-blur-sm border-white/30" : ""
          }`}
          data-testid="input-waitlist-email"
        />
      </div>
      <Button
        type="submit"
        disabled={mutation.isPending || !email.trim()}
        size={isHero ? "lg" : "default"}
        className={`${isHero ? "rounded-full px-8" : ""} font-bold text-lg`}
        style={
          isHero
            ? {
                background:
                  "linear-gradient(135deg, hsl(var(--primary-strong)) 0%, hsl(var(--accent-strong)) 100%)",
                color: "white",
                border: "none",
                boxShadow:
                  "0 4px 20px rgba(255, 255, 255, 0.2), 0 0 20px rgba(255, 100, 50, 0.3)",
              }
            : undefined
        }
        data-testid="button-waitlist-submit"
      >
        {mutation.isPending ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Joining...
          </>
        ) : mutation.isSuccess ? (
          <>
            <Check className="mr-2 h-4 w-4" />
            Joined!
          </>
        ) : (
          "Join Now"
        )}
      </Button>
    </form>
  );
}
