import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Building2, BarChart3, Wand2, MessageSquare } from "lucide-react";

export function PlaidConnectionViz() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    { title: "Link Accounts", icon: Building2, color: "text-accentStrong" },
    { title: "Track Finances", icon: BarChart3, color: "text-primaryStrong" },
    { title: "Find Write-Offs", icon: Wand2, color: "text-accentStrong" },
    {
      title: "Get Instant Answers",
      icon: MessageSquare,
      color: "text-green-600",
    },
  ];

  return (
    <Card className="p-8 bg-card relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="font-serif text-2xl text-card-foreground mb-6 text-center">
          How Centax Works for You
        </h3>

        <div className="flex justify-between items-center mb-8">
          {steps.map((s, index) => {
            const StepIcon = s.icon;
            const isActive = index === step;
            const isPast = index < step;

            return (
              <div key={index} className="flex flex-col items-center relative">
                {/* Connecting line */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-6 left-[50%] w-full h-0.5 transition-all duration-500 ${
                      isPast || isActive ? "bg-primaryStrong" : "bg-muted"
                    }`}
                  />
                )}

                {/* Step circle */}
                <div
                  className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 mb-2 ${
                    isActive
                      ? "bg-primaryStrong scale-110 shadow-lg"
                      : isPast
                      ? "bg-primaryStrong"
                      : "bg-muted"
                  }`}
                >
                  <StepIcon
                    className={`h-6 w-6 transition-all duration-500 ${
                      isActive || isPast
                        ? "text-white"
                        : "text-muted-foreground"
                    }`}
                  />
                </div>

                {/* Step label */}
                <span
                  className={`text-xs font-medium transition-all duration-300 text-center max-w-[80px] ${
                    isActive ? "text-card-foreground" : "text-muted-foreground"
                  }`}
                >
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {step === 0 &&
              "Connect your accounts securely and start fresh with clarity."}
            {step === 1 &&
              "See every transaction, expense, and cash flow in one place."}
            {step === 2 &&
              "Centax automatically identifies every eligible tax deduction."}
            {step === 3 &&
              "Ask anything — your AI financial companion has the answer."}
          </p>
        </div>
      </div>

      {/* Animated background pulse */}
      <div
        className={`absolute inset-0 bg-gradient-to-r from-primaryLight/5 to-accentLight/5 transition-opacity duration-1000 ${
          step === 1 ? "opacity-100" : "opacity-0"
        }`}
      />
    </Card>
  );
}
