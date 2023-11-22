import { Plus_Jakarta_Sans, Poppins } from "next/font/google";
const poppins = Poppins({ subsets: ["latin"], weight: ["500"] });
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
});

/** App Fonts */
export const fonts = {
  body: plus_jakarta_sans.style.fontFamily,
  heading: poppins.style.fontFamily,
};
