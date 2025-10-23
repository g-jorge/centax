import { Check } from "lucide-react";

export function AnimatedCheck({ className = "" }: { className?: string }) {
  return (
    <div className={`relative inline-block ${className}`}>
      <div className="relative flex items-center justify-center">
        {/* Outer expanding ring */}
        <div className="absolute inset-0 rounded-full bg-primary/30 animate-ping" style={{ animationDuration: '1.5s' }} />
        
        {/* Static outer circle */}
        <div className="absolute inset-0 rounded-full bg-primary/20" />
        
        {/* Inner circle with check */}
        <div className="relative z-10 flex items-center justify-center w-16 h-16 rounded-full bg-primary">
          <Check className="h-8 w-8 text-primary-foreground animate-in fade-in zoom-in duration-500" />
        </div>
      </div>
    </div>
  );
}

export function LoadingSpinner({ className = "", size = "default" }: { className?: string; size?: "default" | "sm" | "lg" }) {
  const sizeClasses = {
    sm: "w-8 h-8 border-2",
    default: "w-12 h-12 border-3",
    lg: "w-16 h-16 border-4"
  };

  return (
    <div className={`relative inline-block ${className}`}>
      <div className={`${sizeClasses[size]} border-primary/30 border-t-primary rounded-full animate-spin`} />
    </div>
  );
}
