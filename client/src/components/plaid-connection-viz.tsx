import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Building2, Shield, Check, ArrowRight } from "lucide-react";

export function PlaidConnectionViz() {
  const [step, setStep] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStep((prev) => (prev + 1) % 4);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const steps = [
    { title: "Select Your Bank", icon: Building2, color: "text-accentStrong" },
    { title: "Secure Connection", icon: Shield, color: "text-primaryStrong" },
    { title: "Link Account", icon: ArrowRight, color: "text-accentStrong" },
    { title: "Connected!", icon: Check, color: "text-green-600" },
  ];

  return (
    <Card className="p-8 bg-card relative overflow-hidden">
      <div className="relative z-10">
        <h3 className="font-serif text-2xl text-card-foreground mb-6 text-center">
          Bank Connection Process
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
                  <div className={`absolute top-6 left-[50%] w-full h-0.5 transition-all duration-500 ${
                    isPast || isActive ? 'bg-primaryStrong' : 'bg-muted'
                  }`} />
                )}
                
                {/* Step circle */}
                <div className={`relative z-10 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 mb-2 ${
                  isActive 
                    ? 'bg-primaryStrong scale-110 shadow-lg' 
                    : isPast
                    ? 'bg-primaryStrong'
                    : 'bg-muted'
                }`}>
                  <StepIcon className={`h-6 w-6 transition-all duration-500 ${
                    isActive || isPast ? 'text-white' : 'text-muted-foreground'
                  }`} />
                </div>
                
                {/* Step label */}
                <span className={`text-xs font-medium transition-all duration-300 text-center max-w-[80px] ${
                  isActive ? 'text-card-foreground' : 'text-muted-foreground'
                }`}>
                  {s.title}
                </span>
              </div>
            );
          })}
        </div>

        {/* Description */}
        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            {step === 0 && "Choose from 10,000+ supported banks"}
            {step === 1 && "256-bit encrypted connection via Plaid"}
            {step === 2 && "Authorize read-only access to your account"}
            {step === 3 && "Your finances synced automatically!"}
          </p>
        </div>
      </div>

      {/* Animated background pulse */}
      <div className={`absolute inset-0 bg-gradient-to-r from-primaryLight/5 to-accentLight/5 transition-opacity duration-1000 ${
        step === 1 ? 'opacity-100' : 'opacity-0'
      }`} />
    </Card>
  );
}
