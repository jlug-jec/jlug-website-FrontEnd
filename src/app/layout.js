// src/app/layout.jsx
import "./globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "JLUG-JEC Linux User Group",
  icons:{
    icon: "/JLUGLogo.svg", 
  },
  description: "Official JLUG Registration Website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} bg-primary w-full overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
