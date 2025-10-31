import type { Config } from "tailwindcss";
import { lightTheme } from "./client/src/constants/lightTheme"; // adjust the path

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: ".5625rem" /* 9px */,
        md: ".375rem" /* 6px */,
        sm: ".1875rem" /* 3px */,
      },
      fontSize: {
        hero: [
          "clamp(2.75rem, 6vw, 4.5rem)",
          { lineHeight: "1.1", fontWeight: "600" },
        ], // Centax main title
        headline: [
          "clamp(2rem, 4.5vw, 3.5rem)",
          { lineHeight: "1.15", fontWeight: "500" },
        ], // Section titles (Your AI-Assisted..., etc.)
        section: [
          "clamp(1.75rem, 3.5vw, 2.75rem)",
          { lineHeight: "1.2", fontWeight: "500" },
        ], // Sub-sections like "Self-employed finances..."
        subheadline: [
          "clamp(1.25rem, 2.5vw, 1.75rem)",
          { lineHeight: "1.4", fontWeight: "400" },
        ], // Supporting text under hero/section
        cardTitle: ["1.25rem", { lineHeight: "1.4", fontWeight: "600" }], // Card headings like “All Your Finances, Unified”
        cardBody: ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // Paragraphs inside cards

        // 💬 CHAT / CTA / SMALL TEXT
        message: ["1rem", { lineHeight: "1.5", fontWeight: "400" }], // AI chat message text
        button: ["1rem", { lineHeight: "1.4", fontWeight: "500" }], // Buttons like “Download the App”
        footerTitle: ["1.25rem", { lineHeight: "1.3", fontWeight: "500" }], // “Ready to simplify…” text in sticky footer
        footerSub: ["0.875rem", { lineHeight: "1.4", fontWeight: "400" }], // “Join thousands…” smaller text
        caption: ["0.875rem", { lineHeight: "1.4", fontWeight: "400" }], // small text elements

        // 🧭 SYSTEM TEXT / UTILITIES
        base: ["1rem", { lineHeight: "1.6", fontWeight: "400" }], // default paragraph text
        lg: ["1.125rem", { lineHeight: "1.6", fontWeight: "400" }], // slightly larger body
        sm: ["0.875rem", { lineHeight: "1.5", fontWeight: "400" }], // small detailsa
      },

      colors: {
        // Flat / base colors (regular buttons)
        company: lightTheme.colors.company,

        secondaryLight: lightTheme.colors.secondaryLight,
        secondaryMedium: lightTheme.colors.secondaryMedium,
        secondaryStrong: lightTheme.colors.secondaryStrong,

        success: lightTheme.colors.success,
        warning: lightTheme.colors.warning,
        error: lightTheme.colors.error,

        background: lightTheme.colors.background,

        textPrimary: lightTheme.colors.textPrimary,
        textSecondary: lightTheme.colors.textSecondary,

        foreground: "hsl(var(--foreground) / <alpha-value>)",
        border: "hsl(var(--border) / <alpha-value>)",
        input: "hsl(var(--input) / <alpha-value>)",
        card: {
          DEFAULT: "hsl(var(--card) / <alpha-value>)",
          foreground: "hsl(var(--card-foreground) / <alpha-value>)",
          border: "hsl(var(--card-border) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "hsl(var(--popover) / <alpha-value>)",
          foreground: "hsl(var(--popover-foreground) / <alpha-value>)",
          border: "hsl(var(--popover-border) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "hsl(var(--primary) / <alpha-value>)",
          foreground: "hsl(var(--primary-foreground) / <alpha-value>)",
          border: "var(--primary-border)",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary) / <alpha-value>)",
          foreground: "hsl(var(--secondary-foreground) / <alpha-value>)",
          border: "var(--secondary-border)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted) / <alpha-value>)",
          foreground: "hsl(var(--muted-foreground) / <alpha-value>)",
          border: "var(--muted-border)",
        },
        accent: {
          DEFAULT: "hsl(var(--accent) / <alpha-value>)",
          foreground: "hsl(var(--accent-foreground) / <alpha-value>)",
          border: "var(--accent-border)",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
          border: "var(--destructive-border)",
        },
        ring: "hsl(var(--ring) / <alpha-value>)",
        chart: {
          "1": "hsl(var(--chart-1) / <alpha-value>)",
          "2": "hsl(var(--chart-2) / <alpha-value>)",
          "3": "hsl(var(--chart-3) / <alpha-value>)",
          "4": "hsl(var(--chart-4) / <alpha-value>)",
          "5": "hsl(var(--chart-5) / <alpha-value>)",
        },
        sidebar: {
          ring: "hsl(var(--sidebar-ring) / <alpha-value>)",
          DEFAULT: "hsl(var(--sidebar) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-foreground) / <alpha-value>)",
          border: "hsl(var(--sidebar-border) / <alpha-value>)",
        },
        "sidebar-primary": {
          DEFAULT: "hsl(var(--sidebar-primary) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-primary-foreground) / <alpha-value>)",
          border: "var(--sidebar-primary-border)",
        },
        "sidebar-accent": {
          DEFAULT: "hsl(var(--sidebar-accent) / <alpha-value>)",
          foreground: "hsl(var(--sidebar-accent-foreground) / <alpha-value>)",
          border: "var(--sidebar-accent-border)",
        },
        status: {
          online: "rgb(34 197 94)",
          away: "rgb(245 158 11)",
          busy: "rgb(239 68 68)",
          offline: "rgb(156 163 175)",
        },
        primaryLight: "hsl(var(--primary-light) / <alpha-value>)",
        primaryMedium: "hsl(var(--primary-medium) / <alpha-value>)",
        primaryStrong: "hsl(var(--primary-strong) / <alpha-value>)",
        primarySuperLight: "hsl(var(--primary-super-light) / <alpha-value>)",
        accentStrong: "hsl(var(--accent-strong) / <alpha-value>)",
        accentLight: "hsl(var(--accent-light) / <alpha-value>)",
        backgroundSecondary: "hsl(var(--background-secondary) / <alpha-value>)",
      },
      fontFamily: {
        sans: ["var(--font-sans)"],
        serif: ["var(--font-serif)"],
        mono: ["var(--font-mono)"],
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
