import { Inter } from "next/font/google";
import "./globals.css";
import {CategoryProvider} from "../context/CategoryContext";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Root Integrated Technologies Pvt. Ltd. - Halfway There",
  description: "Root Integrated Technologies Pvt. Ltd. - Halfway There",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <CategoryProvider>
          <div>{children}</div>
        </CategoryProvider>
        {/* <div>{children}</div> */}
      </body>
    </html>
  );
}
