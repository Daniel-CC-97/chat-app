import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark Mode Background and Foreground
        background: "hsl(220, 14%, 10%)", // Dark background
        foreground: "hsl(220, 20%, 95%)", // Light foreground for text

        // Primary and Secondary colours for UI elements
        primary: "hsl(220, 100%, 60%)", // Blue primary colour (for buttons, active elements)
        secondary: "hsl(220, 100%, 50%)", // Slightly darker blue for secondary elements
        accent: "hsl(38, 100%, 60%)", // Orange accent colour for buttons, highlights

        // Background and text colours for messages
        messageBackground: "hsl(220, 14%, 15%)", // Darker message background
        messageText: "hsl(220, 20%, 85%)", // Lighter text inside messages

        // Input fields, borders and separators
        inputBackground: "hsl(220, 14%, 20%)", // Dark input field background
        inputBorder: "hsl(220, 20%, 50%)", // Border colour for input
        inputText: "hsl(220, 20%, 90%)", // Text inside input

        // Header and Navbar
        navbarBackground: "hsl(220, 14%, 12%)", // Dark header background
        navbarText: "hsl(220, 20%, 90%)", // Lighter navbar text

        // Other UI components (like message sender/receiver distinction)
        senderMessageBackground: "hsl(220, 100%, 40%)", // Sender's message background
        receiverMessageBackground: "hsl(220, 100%, 50%)", // Receiver's message background
        senderText: "hsl(0, 0%, 100%)", // White text for sender messages
        receiverText: "hsl(0, 0%, 90%)", // Light grey text for receiver messages

        // Scrollbars and overlays
        scrollbarTrack: "hsl(220, 14%, 12%)",
        scrollbarThumb: "hsl(220, 20%, 30%)",
        overlay: "rgba(0, 0, 0, 0.6)", // Overlay for modals and popups
      },
    },
  },
  plugins: [],
} satisfies Config;
