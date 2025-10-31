import { useEffect, useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { EmailWaitlistForm } from "@/components/email-waitlist-form";
import { PlaidConnectionViz } from "@/components/plaid-connection-viz";
import {
  Smartphone,
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
  Shield,
  Sparkles,
} from "lucide-react";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "@/lib/firebase"; // ✅ your storage export
// import { collection, onSnapshot, query } from "firebase/firestore";
// import { firestore as db } from "@/lib/firebase";

export default function Home() {
  const [showStickyFooter, setShowStickyFooter] = useState(false);
  const [aiMessageIndex, setAiMessageIndex] = useState(0);
  const [dashboardScreen, setDashboardScreen] = useState(0);
  const [resolvedScreens, setResolvedScreens] = useState<any[]>([]);

  // 🔹 Replace with your Firestore fetch later if desired
  const dashboardScreens = [
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jg-tax-professional-services.firebasestorage.app/o/taxdeductionscarousel.png?alt=media&token=8915074e-b818-4dd5-9dd3-bc76d3d8c815",
      title: "Stay on Top of Your Finances",
      subtitle:
        "Track your income, categorize spending transactions, and see all your investments in one place",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jg-tax-professional-services.firebasestorage.app/o/chat.png?alt=media&token=37b0a274-9be4-466b-8804-60b18af14ac4",
      title: "Tax Pro & Money Therapist",
      subtitle:
        "A personalized AI financial companion for smarter financial conversations.",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jg-tax-professional-services.firebasestorage.app/o/taxdeductions.png?alt=media&token=e0eed0c4-075d-49e6-a526-c31a00fb325d",
      title: "Money You Didn’t Know You Had",
      subtitle:
        "Most freelancers miss up to 30% of eligible deductions, Centax spots them before you lose them.",
    },
    {
      imageUrl:
        "https://firebasestorage.googleapis.com/v0/b/jg-tax-professional-services.firebasestorage.app/o/quarterly.png?alt=media&token=e30c0467-bcce-4d6f-9f3f-fe3caaf5cda4",
      title: "Quarterly Taxes Without the Panic",
      subtitle:
        "Avoid costly surprises and reduce your tax obligations. We’ll guide you through every tax deadline.",
    },
  ];

  // ✅ Resolve image URLs from Firebase Storage
  useEffect(() => {
    setResolvedScreens(dashboardScreens);
  }, []);
  // ✅ Auto-advance carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setDashboardScreen((prev) => (prev + 1) % (resolvedScreens.length || 1));
    }, 8000);
    return () => clearInterval(interval);
  }, [resolvedScreens]);

  // ✅ Scroll and animation observers
  useEffect(() => {
    const handleScroll = () => {
      const scrollPercent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100;
      setShowStickyFooter(scrollPercent > 80);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("animate-in");
        }),
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );

    document
      .querySelectorAll(".fade-in-section")
      .forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // ✅ Typing animation sequence
  useEffect(() => {
    const interval = setInterval(() => {
      setAiMessageIndex((prev) => (prev < 2 ? prev + 1 : prev));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen relative bg-transparent">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-[#FFF9F5] via-[#FFF4F0] to-[#FFECE5] overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,120,90,0.25)_0%,transparent_60%)]" />
        <header className="flex items-center justify-between px-12 py-6 backdrop-blur-md bg-white/70 border-b border-white/40 rounded-t-[40px] shadow-sm mx-auto max-w-6xl mt-8">
          <h1 className="font-serif text-[36px] text-[#222] tracking-tight">
            Centax
          </h1>
          <nav className="hidden md:flex items-center space-x-10 text-[#444] font-medium">
            <a className="hover:text-[#000] transition-colors">
              For Business Owners
            </a>
            <a className="hover:text-[#000] transition-colors">How it works</a>
            <a className="hover:text-[#000] transition-colors">Blog</a>
            <a className="hover:text-[#000] transition-colors">FAQ</a>
          </nav>
          <Button
            size="lg"
            className="rounded-full bg-[#111] text-white hover:bg-[#000] transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Join Waitlist
          </Button>
        </header>

        <section className="relative flex flex-col items-center justify-center text-center max-w-3xl mx-auto px-8 pt-20 pb-10 md:pt-24 md:pb-12">
          <h2 className="font-serif text-5xl md:text-6xl text-[#1C1C1C] mb-8 leading-tight tracking-[-0.01em]">
            Be smart with your money — without the effort.
          </h2>
          <p className="text-lg md:text-xl text-[#555] leading-relaxed mb-10">
            Centax keeps your finances, investments and tax obligations
            organized, so you stay in control from one place.
          </p>
          <div className="max-w-md w-full">
            <EmailWaitlistForm
              variant="hero"
              placeholder="Enter your email for early access"
            />
          </div>
        </section>
      </div>

      {/* Problem → Solution Section */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-1000">
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
                Managing money can be complicated. <br />
                <span className="text-primaryStrong">
                  Centax makes good money habits automatic.
                </span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Money shouldn’t be messy. Centax helps you separate business and
                personal finances, track your tax obligations, and plan your
                financial life — so you know where every dollar is going.
              </p>
            </div>

            {/* 🔹 Updated Image Carousel */}
            <div className="fade-in-section opacity-0 translate-x-10 transition-all duration-1000 delay-200">
              <Card className="p-0 bg-card border-card-border shadow-lg relative overflow-hidden flex flex-col md:flex-row items-center justify-center min-h-[550px]">
                {resolvedScreens.length === 0 ? (
                  <div className="flex items-center justify-center h-[400px] text-muted-foreground">
                    Loading images...
                  </div>
                ) : (
                  resolvedScreens.map((screen, index) => {
                    const isActive = index === dashboardScreen;
                    return (
                      <div
                        key={index}
                        className={`absolute inset-0 flex flex-col md:flex-row items-center justify-center transition-all duration-3000 ${
                          isActive
                            ? "opacity-100 scale-100"
                            : "opacity-0 scale-95 pointer-events-none"
                        }`}
                      >
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex items-center justify-center bg-background">
                          <img
                            src={screen.imageUrl}
                            alt={screen.title}
                            className="object-contain md:object-cover w-full h-auto md:h-full max-h-[500px] rounded-lg"
                            loading="lazy"
                          />
                        </div>

                        {/* Text Section */}
                        <div className="w-full md:w-1/2 flex flex-col justify-center items-center md:items-start text-center md:text-left p-8 md:p-12">
                          <h3 className="font-serif text-2xl md:text-3xl text-card-foreground mb-4">
                            {screen.title}
                          </h3>
                          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                            {screen.subtitle}
                          </p>

                          {/* Progress Dots */}
                          <div className="flex gap-2 mt-6 justify-center md:justify-start">
                            {resolvedScreens.map((_, dotIndex) => (
                              <div
                                key={dotIndex}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                  dotIndex === dashboardScreen
                                    ? "w-8 bg-primaryStrong"
                                    : "w-2 bg-muted"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })
                )}
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
                    All of Your Money — One App
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Stop logging in everywhere. Centax provides a personalized
                    view of your income, spending, and investments in one simple
                    app.
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
                    Never Lose Money Already Earned
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Stop losing money on hidden deductions that apply to you —
                    from coffee meetings to client trips, Centax spots them so
                    you don't have to.
                  </p>
                </div>
              </div>
            </Card>

            {/* Pillar 3 */}
            <Card className="p-8 md:p-10 fade-in-section opacity-0 translate-x-10 transition-all duration-1000 delay-300 shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="bg-accentStrong/10 p-4 rounded-xl">
                  <Sparkles className="h-10 w-10 text-accentStrong" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-2xl md:text-3xl text-card-foreground mb-4">
                    Personalized Money Tips
                  </h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Centax answers your financial questions, provides tips
                    tailored to your financial life, and reminds you of
                    important tax deadlines.
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
              Your entire money flow, simplified. Everything you need to stay in
              control:
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Powerful features designed to make managing your finances
              effortless.
            </p>
          </div>

          {/* Plaid Connection Visualization */}
          <div className="mb-16 fade-in-section opacity-0 scale-95 transition-all duration-1000 max-w-3xl mx-auto">
            <PlaidConnectionViz />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Feature 1 */}
            <Card
              className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 hover:shadow-lg transition-shadow"
              data-testid="card-feature-bank-linking"
            >
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
            <Card
              className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-100 hover:shadow-lg transition-shadow"
              data-testid="card-feature-categorization"
            >
              <div className="flex gap-4">
                <div className="bg-primaryStrong/10 p-3 rounded-lg h-fit">
                  <Calculator className="h-6 w-6 text-primaryStrong" />
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
            <Card
              className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-200 hover:shadow-lg transition-shadow"
              data-testid="card-feature-tax-detection"
            >
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
            <Card
              className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-300 hover:shadow-lg transition-shadow"
              data-testid="card-feature-budgeting"
            >
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
            <Card
              className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-400 hover:shadow-lg transition-shadow"
              data-testid="card-feature-ai-chatbot"
            >
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

            {/* Feature 6 */}
            <Card
              className="p-6 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-500 hover:shadow-lg transition-shadow"
              data-testid="card-feature-alerts"
            >
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
            <Card
              className="p-6 md:col-span-2 fade-in-section opacity-0 translate-y-10 transition-all duration-1000 delay-600 hover:shadow-lg transition-shadow"
              data-testid="card-feature-reports"
            >
              <div className="flex gap-4">
                <div className="bg-accentStrong/10 p-3 rounded-lg h-fit">
                  <MessageSquare className="h-6 w-6 text-accentStrong" />
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-xl text-card-foreground mb-2">
                    24/7 Financial Companion
                  </h3>
                  <p className="text-muted-foreground">
                    CentaxAI can answer questions to like "How can I increase my
                    income?" or "How much can I deduct from this purchse?" and
                    provide you instant and personalized answers.
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
              Ask CentaxAI anything — from "What can I deduct from my last
              trip?" to "How do I plan for quarterly taxes?" Your AI-personal
              accountant learns from your activity, guides you through every
              decision, and gives you personalized insights built around your
              profession.
            </p>
          </div>

          <Card className="p-8 md:p-12 fade-in-section opacity-0 scale-95 transition-all duration-1000 delay-300 shadow-xl">
            <div className="space-y-4">
              {/* User Message */}
              <div
                className={`flex justify-end transition-all duration-500 ${
                  aiMessageIndex >= 0
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
              >
                <div className="max-w-md bg-primaryStrong text-white px-6 py-4 rounded-2xl rounded-br-sm shadow-md">
                  <p className="text-base">Can I write off my laptop?</p>
                </div>
              </div>

              {/* Typing Indicator */}
              {aiMessageIndex === 1 && (
                <div className="flex justify-start">
                  <div className="bg-card px-6 py-4 rounded-2xl rounded-bl-sm shadow-md">
                    <div className="flex gap-1">
                      <div
                        className="w-2 h-2 bg-accentStrong rounded-full animate-bounce"
                        style={{ animationDelay: "0ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-accentStrong rounded-full animate-bounce"
                        style={{ animationDelay: "150ms" }}
                      />
                      <div
                        className="w-2 h-2 bg-accentStrong rounded-full animate-bounce"
                        style={{ animationDelay: "300ms" }}
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* AI Response */}
              {aiMessageIndex >= 2 && (
                <div className="flex justify-start transition-all duration-500 opacity-100 translate-y-0">
                  <div className="max-w-lg bg-accentStrong text-white px-6 py-4 rounded-2xl rounded-bl-sm shadow-md">
                    <p className="text-base leading-relaxed">
                      Yes, if used primarily for business. According to IRS
                      guidelines, you can deduct the business-use percentage of
                      your laptop. Keep receipts and document how you use it for
                      work. I can help you track this expense!
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
              Centax uses encrypted connections for bank linking, and securely
              stores your data. Your financial information is protected, and
              your insights are personalized, never shared.
            </p>

            <div className="flex flex-wrap justify-center gap-8 opacity-60">
              <div className="flex items-center gap-2">
                <Cloud className="h-6 w-6 text-accentStrong" />
                <span className="font-medium text-foreground">
                  Google Cloud
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-accentStrong" />
                <span className="font-medium text-foreground">
                  256-bit Encryption
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Lock className="h-6 w-6 text-accentStrong" />
                <span className="font-medium text-foreground">
                  Plaid Certified
                </span>
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
              Take control of your finances with confidence.
            </h2>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Centax helps you manage your money, maximize deductions, and
              simplify your taxes.
            </p>

            <div className="mb-8">
              <EmailWaitlistForm
                variant="hero"
                placeholder="Enter your email to get started"
              />
            </div>

            {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 py-6 rounded-full bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20"
                data-testid="button-download-app-cta"
              >
                <Download className="mr-2 h-5 w-5" />
                Download the App
              </Button>
            </div> */}
          </div>
        </div>
      </section>

      {/* Sticky Footer CTA */}
      <div
        className={`fixed bottom-0 left-0 right-0 bg-white dark:bg-card border-t border-border shadow-2xl transition-transform duration-500 z-50 ${
          showStickyFooter ? "translate-y-0" : "translate-y-full"
        }`}
        data-testid="sticky-footer-cta"
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <p className="font-serif text-xl md:text-2xl text-foreground">
              Ready to simplify your finances?
            </p>
            <p className="text-sm text-muted-foreground">
              Join thousands of self-employed, professionals and families using
              Centax.
            </p>
          </div>
          <Button
            size="lg"
            className="text-base px-8 rounded-full shrink-0"
            style={{
              background: `linear-gradient(135deg, hsl(var(--button-gradient-start)), hsl(var(--button-gradient-end)))`,
              color: "white",
              border: "none",
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
