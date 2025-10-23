import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmailWaitlistForm } from "@/components/email-waitlist-form";
import { PlaidConnectionViz } from "@/components/plaid-connection-viz";
import { 
  Smartphone, 
  Download, 
  Wallet, 
  Receipt, 
  Bot, 
  Link as LinkIcon, 
  Calculator, 
  Wand2, 
  BarChart3, 
  MessageSquare, 
  Bell, 
  TrendingUp,
  Lock,
  Cloud,
  Shield
} from "lucide-react";

export default function Home() {
  const [showStickyFooter, setShowStickyFooter] = useState(false);
  const [aiMessageIndex, setAiMessageIndex] = useState(0);
  const [dashboardScreen, setDashboardScreen] = useState(0);
  const [scrollY, setScrollY] = useState(0);

  const dashboardScreens = [
    { title: "All Accounts Linked", icon: LinkIcon, color: "accentStrong" },
    { title: "Your Tax Deductions Found", icon: Receipt, color: "primaryStrong" },
    { title: "This Month's Insights", icon: TrendingUp, color: "accentStrong" }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      setShowStickyFooter(scrollPercent > 80);
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Set initial value
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    document.querySelectorAll('.fade-in-section').forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAiMessageIndex((prev) => (prev < 2 ? prev + 1 : prev));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setDashboardScreen((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        {/* Five-color gradient background */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(135deg, 
              hsl(var(--primary-light)) 0%, 
              hsl(var(--primary-light)) 25%, 
              hsl(var(--primary-medium)) 50%, 
              hsl(var(--primary-strong)) 75%, 
              hsl(var(--primary)) 100%)`
          }}
        />

        {/* Floating Parallax Elements */}
        <div className="absolute inset-0 -z-5 pointer-events-none overflow-hidden">
          {/* Receipt Card - Top Left */}
          <div 
            className="absolute top-20 left-[5%] opacity-20"
            style={{ 
              transform: `translateY(${scrollY * 0.15}px) rotate(-5deg)`
            }}
          >
            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl w-40">
              <Receipt className="h-8 w-8 text-primaryStrong mb-2" />
              <div className="h-2 bg-gray-300 rounded mb-2" />
              <div className="h-2 bg-gray-200 rounded w-3/4" />
            </Card>
          </div>

          {/* Pie Chart - Top Right */}
          <div 
            className="absolute top-32 right-[8%] opacity-20"
            style={{ 
              transform: `translateY(${scrollY * 0.2}px) rotate(5deg)`
            }}
          >
            <Card className="p-6 bg-white/80 backdrop-blur-sm shadow-xl w-44">
              <div className="relative h-24 w-24 rounded-full border-8 border-accentStrong border-r-transparent border-b-transparent rotate-45" />
            </Card>
          </div>

          {/* Category Icon - Bottom Left */}
          <div 
            className="absolute bottom-40 left-[10%] opacity-15"
            style={{ 
              transform: `translateY(${-scrollY * 0.1}px) rotate(10deg)`
            }}
          >
            <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-xl w-32">
              <Calculator className="h-10 w-10 text-accentStrong" />
            </Card>
          </div>

          {/* Wallet Icon - Bottom Right */}
          <div 
            className="absolute bottom-32 right-[12%] opacity-15"
            style={{ 
              transform: `translateY(${-scrollY * 0.12}px) rotate(-8deg)`
            }}
          >
            <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-xl w-28">
              <Wallet className="h-10 w-10 text-primaryStrong" />
            </Card>
          </div>

          {/* Bar Chart - Middle Right */}
          <div 
            className="absolute top-1/2 right-[5%] opacity-15"
            style={{ 
              transform: `translateY(${scrollY * 0.18}px) rotate(-3deg)`
            }}
          >
            <Card className="p-4 bg-white/80 backdrop-blur-sm shadow-xl w-36">
              <BarChart3 className="h-12 w-12 text-accentStrong" />
            </Card>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 py-20">
          {/* Brand */}
          <div className="mb-8 fade-in-section opacity-0 translate-y-5 transition-all duration-1000">
            <h1 className="font-serif text-5xl md:text-6xl text-white mb-2">Centax</h1>
          </div>

          {/* Headline */}
          <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-6 fade-in-section opacity-0 translate-y-5 transition-all duration-1000 delay-200 leading-tight">
            Your AI-Assisted Personal Accountant
          </h2>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto fade-in-section opacity-0 translate-y-5 transition-all duration-1000 delay-300 leading-relaxed">
            Centax helps you stay in control of your money — effortlessly. Track your business and personal finances in one place, uncover hidden tax write-offs, and get AI-guided insights that make managing money feel easy.
          </p>

          {/* Email Waitlist Form */}
          <div className="fade-in-section opacity-0 translate-y-5 transition-all duration-1000 delay-500 mb-6">
            <EmailWaitlistForm variant="hero" placeholder="Enter your email for early access" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center fade-in-section opacity-0 translate-y-5 transition-all duration-1000 delay-600">
            <Button 
              size="lg" 
              variant="outline"
              className="text-base px-8 py-6 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20"
              data-testid="button-download-app-hero"
            >
              <Download className="mr-2 h-5 w-5" />
              Download the App
            </Button>
          </div>
        </div>
      </section>

      {/* Problem → Solution Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Self-employed finances are complicated. <br />
                <span className="text-primaryStrong">Centax makes them simple.</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Managing income, expenses, and taxes shouldn't feel like a guessing game. Whether you're a freelancer, creator, or small business owner, Centax brings clarity to your finances — so you always know where your money's going and how much to save for taxes.
              </p>
            </div>
            <div className="fade-in-section opacity-0 translate-x-10 transition-all duration-1000 delay-200">
              <Card className="p-8 bg-card border-card-border shadow-lg relative overflow-hidden min-h-[320px] flex items-center justify-center">
                {dashboardScreens.map((screen, index) => {
                  const Icon = screen.icon;
                  const isActive = index === dashboardScreen;
                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 p-8 flex flex-col items-center justify-center transition-all duration-1000 ${
                        isActive 
                          ? 'opacity-100 scale-100' 
                          : 'opacity-0 scale-95 pointer-events-none'
                      }`}
                    >
                      <div className={`mb-6 p-6 rounded-full ${
                        screen.color === 'primaryStrong' 
                          ? 'bg-primaryStrong/10' 
                          : 'bg-accentStrong/10'
                      }`}>
                        <Icon className={`h-16 w-16 ${
                          screen.color === 'primaryStrong' 
                            ? 'text-primaryStrong' 
                            : 'text-accentStrong'
                        }`} />
                      </div>
                      <h3 className="font-serif text-2xl md:text-3xl text-card-foreground text-center mb-4">
                        {screen.title}
                      </h3>
                      <div className="flex gap-2">
                        {dashboardScreens.map((_, dotIndex) => (
                          <div
                            key={dotIndex}
                            className={`h-2 rounded-full transition-all duration-300 ${
                              dotIndex === dashboardScreen
                                ? 'w-8 bg-primaryStrong'
                                : 'w-2 bg-muted'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                  );
                })}
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Core Value Props - Three Pillars */}
      <section className="py-20 bg-backgroundSecondary">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-8">
            {/* Pillar 1 */}
            <Card className="p-8 md:p-10 fade-in-section opacity-0 translate-x-10 transition-all duration-1000 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-accentStrong/10 p-4 rounded-xl">
                  <Wallet className="h-10 w-10 text-accentStrong" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-card-foreground mb-4">
                    All Your Finances, Unified
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Link your bank accounts securely with Plaid and see your personal and business finances together — income, expenses, and balances, all in one clear view.
                  </p>
                </div>
              </div>
            </Card>

            {/* Pillar 2 */}
            <Card className="p-8 md:p-10 fade-in-section opacity-0 translate-x-10 transition-all duration-1000 delay-200 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-primaryStrong/10 p-4 rounded-xl">
                  <Receipt className="h-10 w-10 text-primaryStrong" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-card-foreground mb-4">
                    Smarter Tax Savings
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Centax automatically scans your transactions, finds potential write-offs, and keeps you audit-ready. No spreadsheets. No stress.
                  </p>
                </div>
              </div>
            </Card>

            {/* Pillar 3 */}
            <Card className="p-8 md:p-10 fade-in-section opacity-0 translate-x-10 transition-all duration-1000 delay-300 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-accentStrong/10 p-4 rounded-xl">
                  <Bot className="h-10 w-10 text-accentStrong" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-card-foreground mb-4">
                    AI That Knows You
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Your built-in GPT-powered advisor explains tax rules in plain English, helps plan quarterly taxes, and offers proactive insights so you never miss a deduction or deadline.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Snapshot */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16 fade-in-section opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Everything you need to stay in control
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make managing your finances effortless.
            </p>
          </div>

          {/* Plaid Connection Visualization */}
          <div className="mb-16 fade-in-section opacity-0 scale-95 transition-all duration-1000 max-w-3xl mx-auto">
            <PlaidConnectionViz />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <Card className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 hover:shadow-lg transition-shadow" data-testid="card-feature-bank-linking">
              <div className="flex gap-4">
                <div className="bg-accentStrong/10 p-3 rounded-lg h-fit">
                  <LinkIcon className="h-6 w-6 text-accentStrong" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">
                    Bank Account Linking
                  </h3>
                  <p className="text-muted-foreground">
                    Securely connect your accounts via Plaid.
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 2 */}
            <Card className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-100 hover:shadow-lg transition-shadow" data-testid="card-feature-categorization">
              <div className="flex gap-4">
                <div className="bg-accentStrong/10 p-3 rounded-lg h-fit">
                  <Calculator className="h-6 w-6 text-accentStrong" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">
                    Automatic Categorization
                  </h3>
                  <p className="text-muted-foreground">
                    Smart tagging that separates business and personal spending.
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 3 */}
            <Card className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-200 hover:shadow-lg transition-shadow" data-testid="card-feature-tax-detection">
              <div className="flex gap-4">
                <div className="bg-primaryStrong/10 p-3 rounded-lg h-fit">
                  <Wand2 className="h-6 w-6 text-primaryStrong" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">
                    Tax Deduction Detection
                  </h3>
                  <p className="text-muted-foreground">
                    Identify deductible expenses in real time.
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 4 */}
            <Card className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-300 hover:shadow-lg transition-shadow" data-testid="card-feature-budgeting">
              <div className="flex gap-4">
                <div className="bg-accentStrong/10 p-3 rounded-lg h-fit">
                  <BarChart3 className="h-6 w-6 text-accentStrong" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">
                    Budgeting & Forecasting
                  </h3>
                  <p className="text-muted-foreground">
                    Visual dashboards that show your spending trends.
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 5 */}
            <Card className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-400 hover:shadow-lg transition-shadow" data-testid="card-feature-ai-chatbot">
              <div className="flex gap-4">
                <div className="bg-accentStrong/10 p-3 rounded-lg h-fit">
                  <MessageSquare className="h-6 w-6 text-accentStrong" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">
                    AI Chatbot
                  </h3>
                  <p className="text-muted-foreground">
                    Ask questions like "How much can I deduct for meals?" and get instant answers.
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 6 */}
            <Card className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-500 hover:shadow-lg transition-shadow" data-testid="card-feature-alerts">
              <div className="flex gap-4">
                <div className="bg-primaryStrong/10 p-3 rounded-lg h-fit">
                  <Bell className="h-6 w-6 text-primaryStrong" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">
                    Alerts & Reminders
                  </h3>
                  <p className="text-muted-foreground">
                    Stay on top of tax deadlines and spending limits.
                  </p>
                </div>
              </div>
            </Card>

            {/* Feature 7 */}
            <Card className="p-6 md:col-span-2 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-600 hover:shadow-lg transition-shadow" data-testid="card-feature-reports">
              <div className="flex gap-4">
                <div className="bg-accentStrong/10 p-3 rounded-lg h-fit">
                  <TrendingUp className="h-6 w-6 text-accentStrong" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">
                    Reports & Insights
                  </h3>
                  <p className="text-muted-foreground">
                    See what's driving your cash flow and how to improve it.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* AI Assistant Spotlight */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-backgroundSecondary to-accentStrong/5">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12 fade-in-section opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-4">
              Meet your financial co-pilot.
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ask Centax anything — from "What can I deduct from my last trip?" to "How do I plan for quarterly taxes?" Your AI-powered accountant learns from your activity, guides you through every decision, and gives you personalized insights built around your profession.
            </p>
          </div>

          <Card className="p-8 md:p-12 fade-in-section opacity-0 scale-95 transition-all duration-1000 delay-300 shadow-xl">
            <div className="space-y-4">
              {/* User Message */}
              <div className={`flex justify-end transition-all duration-500 ${aiMessageIndex >= 0 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <div className="max-w-md bg-primaryStrong text-white px-6 py-4 rounded-2xl rounded-br-sm shadow-md">
                  <p className="text-base">Can I write off my laptop?</p>
                </div>
              </div>

              {/* Typing Indicator */}
              {aiMessageIndex === 1 && (
                <div className="flex justify-start">
                  <div className="bg-card px-6 py-4 rounded-2xl rounded-bl-sm shadow-md">
                    <div className="flex gap-1">
                      <div className="w-2 h-2 bg-accentStrong rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                      <div className="w-2 h-2 bg-accentStrong rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                      <div className="w-2 h-2 bg-accentStrong rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                </div>
              )}

              {/* AI Response */}
              {aiMessageIndex >= 2 && (
                <div className="flex justify-start transition-all duration-500 opacity-100 translate-y-0">
                  <div className="max-w-lg bg-accentStrong text-white px-6 py-4 rounded-2xl rounded-bl-sm shadow-md">
                    <p className="text-base leading-relaxed">
                      Yes, if used primarily for business. According to IRS guidelines, you can deduct the business-use percentage of your laptop. Keep receipts and document how you use it for work. I can help you track this expense!
                    </p>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="fade-in-section opacity-0 scale-95 transition-all duration-1000">
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="bg-accentStrong/10 p-6 rounded-full">
                  <Shield className="h-16 w-16 text-accentStrong" />
                </div>
                <div className="absolute -top-2 -right-2 bg-primaryStrong/10 p-3 rounded-full">
                  <Lock className="h-8 w-8 text-primaryStrong" />
                </div>
              </div>
            </div>

            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Bank-level security. Tax-level precision.
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
              Centax uses encrypted connections through Plaid for bank linking, and securely stores your data in Firebase and Google Cloud. Your financial information is protected, and your insights are personalized — never shared.
            </p>

            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <Cloud className="h-6 w-6 text-accentStrong" />
                <span className="font-medium text-foreground">Google Cloud</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-accentStrong" />
                <span className="font-medium text-foreground">256-bit Encryption</span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-accentStrong" />
                <span className="font-medium text-foreground">Plaid Certified</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primaryLight to-primaryMedium">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-6 leading-tight">
              Take control of your finances — with confidence.
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Centax helps you manage your money, maximize deductions, and simplify your taxes. Start today and let AI do the heavy lifting.
            </p>

            <div className="mb-8">
              <EmailWaitlistForm variant="hero" placeholder="Enter your email to get started" />
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="outline"
                className="text-base px-8 py-6 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20"
                data-testid="button-download-app-cta"
              >
                <Download className="mr-2 h-5 w-5" />
                Download the App
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Sticky Footer CTA */}
      <div 
        className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-card border-t border-border shadow-2xl transition-transform duration-500 z-50 ${
          showStickyFooter ? 'translate-y-0' : 'translate-y-full'
        }`}
        data-testid="sticky-footer-cta"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl md:text-2xl text-foreground">
              Ready to simplify your finances?
            </p>
            <p className="text-sm text-muted-foreground">
              Join thousands of self-employed professionals using Centax.
            </p>
          </div>
          <Button 
            size="lg"
            className="text-base px-8 rounded-full shrink-0"
            style={{
              background: `linear-gradient(135deg, hsl(var(--button-gradient-start)), hsl(var(--button-gradient-end)))`,
              color: 'white',
              border: 'none'
            }}
            data-testid="button-join-early-access-sticky"
          >
            <Smartphone className="mr-2 h-5 w-5" />
            Join Early Access
          </Button>
        </div>
      </div>
    </div>
  );
}
