"use client"
import type React from "react"
import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

interface Product {
  _id: string
  name: string
  price: number
  discountPercentage: number
  imageUrl: string
  slug: { current: string }
  description?: string
}

const PopularProducts: React.FC = () => {
  const products: Product[] = [
    {
      _id: "1",
      name: "High-Performance Gaming Laptop",
      price: 1299.99,
      discountPercentage: 15,
      imageUrl: "/1.jpg",
      slug: { current: "high-performance-gaming-laptop" },
      description: "Powerful gaming laptop with the latest GPU and high refresh rate display.",
    },
    {
      _id: "2",
      name: "Wireless Noise-Cancelling Headphones",
      price: 249.99,
      discountPercentage: 10,
      imageUrl: "/2.webp",
      slug: { current: "wireless-noise-cancelling-headphones" },
      description: "Premium wireless headphones with active noise cancellation for immersive audio experience.",
    },
    {
      _id: "3",
      name: "4K Ultra HD Smart TV",
      price: 799.99,
      discountPercentage: 20,
      imageUrl: "/5.webp",
      slug: { current: "4k-ultra-hd-smart-tv" },
      description: "Large 4K smart TV with HDR and built-in streaming apps for the ultimate home entertainment.",
    },
  ]

  useEffect(() => {
    if (typeof window !== "undefined" && window.Snipcart) {
      window.Snipcart.refresh()
    }
  }, [])

  return (
    <div id="popular">
      <section className="py-16 px-4 bg-black">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-4xl font-bold text-white font-orbitron">
              Most Popular <span className="text-green-500">Products</span>
            </h2>
            <Link href="/products" className="text-green-500 hover:text-green-400 transition-colors">
              View All Products
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <motion.div
                key={product._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-[#111] rounded-lg overflow-hidden relative group"
              >
                <Link href={`/products/${product.slug.current}`} className="block">
                  <div className="aspect-square relative">
                    <Image
                      src={product.imageUrl || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    {product.discountPercentage > 0 && (
                      <span className="absolute top-4 left-4 bg-green-500 text-white px-2 py-1 rounded-md text-sm">
                        {product.discountPercentage}% OFF
                      </span>
                    )}
                  </div>
                </Link>

                <div className="p-4">
                  <Link
                    href={`/products/${product.slug.current}`}
                    className="block hover:text-green-500 transition-colors"
                  >
                    <h3 className="text-white font-semibold mb-2 truncate">{product.name}</h3>
                  </Link>
                  <div className="flex items-center gap-2">
                    <span className="text-green-500 font-bold">${product.price.toFixed(2)}</span>
                    {product.discountPercentage > 0 && (
                      <span className="text-gray-400 line-through text-sm">
                        ${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}
                      </span>
                    )}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="snipcart-add-item w-full mt-4 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors"
                    data-item-id={product._id}
                    data-item-price={product.price}
                    data-item-url={`/products/${product.slug.current}`}
                    data-item-description={product.description}
                    data-item-image={product.imageUrl}
                    data-item-name={product.name}
                  >
                    Add To Cart
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default PopularProducts
