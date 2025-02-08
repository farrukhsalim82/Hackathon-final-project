// import { Orbitron, Poppins } from "next/font/google"
// import { CartProvider } from "../app/context/cartContext"
// import { SearchProvider } from "../app/context/searchContext"
// import { WishlistProvider } from "../app/context/wishlistContext"
// import Header from "../app/components/Header"
// import Footer from "../app/components/Footer"

// const orbitron = Orbitron({
//   weight: ["400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
//   display: "swap",
// })

// const poppins = Poppins({
//   weight: ["400", "500", "600", "700"],
//   subsets: ["latin"],
//   display: "swap",
// })

// export default function Layout({ children, products }: any) {
//   return (
//     <html lang="en">
//       <head>
//         <meta charSet="UTF-8" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <title>E-commerce</title>
//       </head>
//       <body className={`${orbitron.variable} ${poppins.variable} font-poppins antialiased`}>
//         <SearchProvider>
//           <CartProvider>
//             <WishlistProvider>
//               <Header products={products} />
//               {children}
//               <Footer />
//             </WishlistProvider>
//           </CartProvider>
//         </SearchProvider>
//       </body>
//     </html>
//   )
// }
import type { Metadata } from "next"
import { Orbitron, Poppins } from "next/font/google"
import "./globals.css"
import { SearchProvider } from "./context/SearchContext"
import { CartProvider } from "./context/CartContext"
import { WishlistProvider } from "./context/WishlistContext"
import Header from "../app/components/Header"
import Footer from "../app/components/Footer"
import type React from "react"
import Script from "next/script"

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-orbitron",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Media Mart",
  description: "Gaming Hackathon Project",
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
      </head>
      <body className={`${orbitron.variable} ${poppins.variable} font-poppins antialiased`}>
        <SearchProvider>
          <CartProvider>
            <WishlistProvider>
              <Header />
              {children}
              <Footer />
            </WishlistProvider>
          </CartProvider>
        </SearchProvider>
        <Script src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js" />
        <div
          hidden
          id="snipcart"
          data-api-key="YTkyZTk5ODQtYjNiNC00ZGQ1LThhNGQtYzM2M2QzZDJkNjI2NjM4NzM1ODAyNTc3NTc0MjUx"
        ></div>
      </body>
    </html>
  )
}