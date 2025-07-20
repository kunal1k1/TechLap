import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { StaggeredReveal } from "@/components/animations/StaggeredReveal"
import { getProductsByCategory, formatPrice } from "@/lib/products"
import { ArrowLeft, Star, ShoppingCart, Gamepad2, Briefcase, Plane } from "lucide-react"

interface CategoryPageProps {
  params: {
    category: string
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const validCategories = ["gaming", "business", "ultra-portable"]

  if (!validCategories.includes(params.category)) {
    notFound()
  }

  const products = getProductsByCategory(params.category as "gaming" | "business" | "ultra-portable")

  const categoryInfo = {
    gaming: {
      name: "Gaming Laptops",
      description: "Unleash your gaming potential with our high-performance gaming laptops",
      icon: <Gamepad2 className="h-8 w-8 text-white" />,
      gradient: "from-red-500 to-orange-600",
      subtitle: "Built for Victory",
    },
    business: {
      name: "Business Laptops",
      description: "Professional-grade laptops designed for productivity and reliability",
      icon: <Briefcase className="h-8 w-8 text-white" />,
      gradient: "from-blue-500 to-indigo-600",
      subtitle: "Engineered for Success",
    },
    "ultra-portable": {
      name: "Ultra-Portable Laptops",
      description: "Lightweight powerhouses for the mobile professional",
      icon: <Plane className="h-8 w-8 text-white" />,
      gradient: "from-green-500 to-emerald-600",
      subtitle: "Mobility Redefined",
    },
  }

  const category = categoryInfo[params.category as keyof typeof categoryInfo]

  return (
    <div className="min-h-screen bg-black text-white relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "6s" }}
        ></div>
        <div
          className="absolute top-40 right-20 w-24 h-24 bg-cyan-400/10 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-40 left-1/4 w-40 h-40 bg-blue-600/10 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "10s", animationDelay: "4s" }}
        ></div>
        <div
          className="absolute bottom-20 right-1/3 w-28 h-28 bg-cyan-500/10 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "7s", animationDelay: "1s" }}
        ></div>
      </div>

      {/* Enhanced Navigation */}
      <nav className="border-b border-gray-800/50 bg-gray-950/95 backdrop-blur-xl supports-[backdrop-filter]:bg-gray-950/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg blur-sm opacity-75 animate-pulse"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TL</span>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TechLap
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/products" className="relative group text-cyan-400 transition-all duration-300">
                <span className="relative z-10">Products</span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-100 transition-transform duration-300 -m-2"></div>
              </Link>
              <Link
                href="/technology"
                className="relative group text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                <span className="relative z-10">Technology</span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -m-2"></div>
              </Link>
              <Link
                href="/support"
                className="relative group text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                <span className="relative z-10">Support</span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -m-2"></div>
              </Link>
              <Button
                variant="outline"
                className="relative border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-gray-950 bg-transparent backdrop-blur-sm overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="relative z-10">Contact Us</span>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Breadcrumb */}
      <section className="py-6 border-b border-gray-800/50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="slideRight">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <Link href="/" className="hover:text-cyan-400 transition-colors">
                Home
              </Link>
              <span>/</span>
              <Link href="/products" className="hover:text-cyan-400 transition-colors">
                Products
              </Link>
              <span>/</span>
              <span className="text-white">{category.name}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Hero */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="slideUp">
            <div className="text-center space-y-8">
              <Link
                href="/products"
                className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to All Products
              </Link>
              <div className="space-y-4">
                <div
                  className={`w-20 h-20 bg-gradient-to-br ${category.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6`}
                >
                  {category.icon}
                </div>
                <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400/20">{category.subtitle}</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">{category.name}</h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">{category.description}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-950/50 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">
                Choose Your Perfect {category.name.split(" ")[0]} Laptop
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Compare specifications, features, and find the laptop that matches your needs and budget.
              </p>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={0.2} animation="scaleUp" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <Card
                key={product.id}
                className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden"
              >
                <CardHeader className="p-0">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && (
                      <Badge className="absolute top-4 left-4 bg-cyan-400 text-gray-950">{product.badge}</Badge>
                    )}
                    {product.originalPrice && (
                      <Badge className="absolute top-4 right-4 bg-red-500/10 text-red-400 border-red-400/20">
                        Save {formatPrice(product.originalPrice - product.price)}
                      </Badge>
                    )}
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">{product.name}</CardTitle>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="flex items-center space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-400">({product.reviewCount})</span>
                      </div>
                      <p className="text-gray-300 text-sm line-clamp-2">{product.description}</p>
                    </div>

                    {/* Key Specs */}
                    <div className="space-y-2">
                      <div className="grid grid-cols-2 gap-2 text-xs">
                        <div className="text-gray-400">Processor:</div>
                        <div className="text-gray-300">{product.specs.processor.split(" ").slice(0, 3).join(" ")}</div>
                        <div className="text-gray-400">RAM:</div>
                        <div className="text-gray-300">{product.specs.ram.split(" ")[0]}</div>
                        <div className="text-gray-400">Storage:</div>
                        <div className="text-gray-300">{product.specs.storage.split(" ")[0]}</div>
                        <div className="text-gray-400">Display:</div>
                        <div className="text-gray-300">{product.specs.display.split(" ").slice(0, 2).join(" ")}</div>
                      </div>
                    </div>

                    {/* Pricing */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <span className="text-2xl font-bold text-cyan-400">{formatPrice(product.price)}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-gray-400 line-through">
                            {formatPrice(product.originalPrice)}
                          </span>
                        )}
                      </div>
                      {product.inStock ? (
                        <Badge className="bg-green-500/10 text-green-400 border-green-400/20 text-xs">In Stock</Badge>
                      ) : (
                        <Badge className="bg-red-500/10 text-red-400 border-red-400/20 text-xs">Out of Stock</Badge>
                      )}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex space-x-2">
                      <Link href={`/products/${params.category}/${product.id}`} className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                          View Details
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                        disabled={!product.inStock}
                      >
                        <ShoppingCart className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* Comparison CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="scaleUp">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-4xl font-bold">Need Help Choosing?</h2>
              <p className="text-xl text-gray-300">
                Our experts are here to help you find the perfect laptop for your specific needs and budget.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Compare Models
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  Contact Expert
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">TL</span>
                </div>
                <span className="text-xl font-bold">TechLap</span>
              </Link>
              <p className="text-gray-400">
                Pioneering the future of mobile computing with innovative laptop solutions.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Products</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/products/gaming" className="hover:text-cyan-400 transition-colors">
                    Gaming Laptops
                  </Link>
                </li>
                <li>
                  <Link href="/products/business" className="hover:text-cyan-400 transition-colors">
                    Business Laptops
                  </Link>
                </li>
                <li>
                  <Link href="/products/ultra-portable" className="hover:text-cyan-400 transition-colors">
                    Ultra-Portable
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-cyan-400 transition-colors">
                    All Products
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/support" className="hover:text-cyan-400 transition-colors">
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-cyan-400 transition-colors">
                    Warranty
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-cyan-400 transition-colors">
                    Repairs
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-cyan-400 transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Press
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-cyan-400 transition-colors">
                    Investors
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 TechLap. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
