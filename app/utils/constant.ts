// utils/constants.ts
import { Playfair_Display, Inter, Montserrat } from "next/font/google";

export const playfair = Playfair_Display({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
});

export const colors = {
  gold: {
    primary: "#e4cd7f",
    light: "#f0e2b6",
    dark: "#d4b95a",
    gradient: "linear-gradient(135deg, #e4cd7f 0%, #d4b95a 100%)",
  },
  cream: {
    primary: "#f2f1ee",
    light: "#faf9f7",
    dark: "#e8e6e1",
  },
  charcoal: {
    primary: "#2a2a2a",
    light: "#3a3a3a",
    dark: "#1a1a1a",
  },
};
