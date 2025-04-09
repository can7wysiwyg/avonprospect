 import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Script from "next/script";
import Menu from "./components/menu/Menu";
import Footer from "./components/pages/Footer";
import { ReduxProvider } from "@/redux/Provider";





export const metadata = {
  title: "Avon Ecommerce",
  description: "Demo Website for Avon Ecommerce",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" /> 
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"   />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />




      </head>
      <body>
      <ReduxProvider>
      <Menu />
        <div className="container">
         
        {children}


<Footer />



        </div>

        </ReduxProvider>



        <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />

      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.js"
      
      strategy="afterInteractive" 
      />

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />


      


      </body>
    </html>
  );
}

