import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Gamepad2, Briefcase, Plane, Star } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { StaggeredReveal } from "@/components/animations/StaggeredReveal"

export default function ProductsPage() {
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

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal animation="slideUp">
            <div className="text-center space-y-8">
              <Link href="/" className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Link>
              <div className="space-y-4">
                <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400/20">Complete Product Lineup</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Our{" "}
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent blur-sm animate-pulse">
                      Products
                    </span>
                    <span className="relative bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
                      Products
                    </span>
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w3xl mx-auto">
                  Discover our complete range of cutting-edge laptops designed for every need, from high-performance
                  gaming to ultra-portable business solutions.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Gaming Laptops Section */}
      <section className="py-20 bg-gray-950/50 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="slideRight">
            <div className="mb-16">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-600 rounded-2xl flex items-center justify-center">
                  <Gamepad2 className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">Gaming Series</h2>
                  <p className="text-gray-300">Unleash your gaming potential</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={0.2} animation="scaleUp" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "TechLap Gaming Pro X1",
                price: "$2,499",
                specs: ["RTX 4080", "Intel i9-13900H", "32GB DDR5", "1TB NVMe SSD", '17.3" 240Hz'],
                rating: 4.9,
              },
              {
                name: "TechLap Gaming Elite",
                price: "$1,899",
                specs: ["RTX 4070", "Intel i7-13700H", "16GB DDR5", "512GB NVMe SSD", '15.6" 165Hz'],
                rating: 4.8,
              },
              {
                name: "TechLap Gaming Core",
                price: "$1,299",
                specs: ["RTX 4060", "Intel i5-13500H", "16GB DDR5", "512GB NVMe SSD", '15.6" 144Hz'],
                rating: 4.7,
              },
            ].map((laptop, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-red-400/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt={laptop.name}
                    width={350}
                    height={200}
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">{laptop.name}</CardTitle>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(laptop.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                          />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">{laptop.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-red-400">{laptop.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {laptop.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex justify-between text-sm">
                        <span className="text-gray-400">{spec}</span>
                        <span className="text-cyan-400">✓</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/products/gaming">
                    <Button className="w-full bg-gradient-to-r from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700">
                      Explore Gaming
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* Business Laptops Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="slideRight">
            <div className="mb-16">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center">
                  <Briefcase className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">Business Series</h2>
                  <p className="text-gray-300">Professional-grade performance</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={0.2} animation="scaleUp" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "TechLap Business Pro",
                price: "$1,799",
                specs: ["Intel i7-13700U", "16GB DDR5", "512GB NVMe SSD", '14" 4K Display', "20hr Battery"],
                rating: 4.9,
              },
              {
                name: "TechLap Business Elite",
                price: "$1,399",
                specs: ["Intel i5-13500U", "16GB DDR5", "256GB NVMe SSD", '13.3" FHD', "18hr Battery"],
                rating: 4.8,
              },
              {
                name: "TechLap Business Core",
                price: "$999",
                specs: ["Intel i5-13400U", "8GB DDR5", "256GB NVMe SSD", '13.3" FHD', "16hr Battery"],
                rating: 4.6,
              },
            ].map((laptop, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-blue-400/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt={laptop.name}
                    width={350}
                    height={200}
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">{laptop.name}</CardTitle>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(laptop.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                          />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">{laptop.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-400">{laptop.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {laptop.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex justify-between text-sm">
                        <span className="text-gray-400">{spec}</span>
                        <span className="text-cyan-400">✓</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/products/business">
                    <Button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700">
                      Explore Business
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* Ultra-Portable Section */}
      <section className="py-20 bg-gray-950/50 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="slideRight">
            <div className="mb-16">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center">
                  <Plane className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h2 className="text-3xl lg:text-4xl font-bold text-white">Ultra-Portable Series</h2>
                  <p className="text-gray-300">Mobility meets performance</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={0.2} animation="scaleUp" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "TechLap Ultra Pro",
                price: "$1,599",
                specs: ["Intel i7-13700U", "16GB DDR5", "512GB NVMe SSD", '13.3" 4K OLED', "2.2 lbs"],
                rating: 4.9,
              },
              {
                name: "TechLap Ultra Elite",
                price: "$1,199",
                specs: ["Intel i5-13500U", "16GB DDR5", "256GB NVMe SSD", '13.3" FHD', "2.4 lbs"],
                rating: 4.7,
              },
              {
                name: "TechLap Ultra Core",
                price: "$899",
                specs: ["Intel i5-13400U", "8GB DDR5", "256GB NVMe SSD", '12.5" FHD', "2.1 lbs"],
                rating: 4.6,
              },
            ].map((laptop, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-green-400/50 transition-all duration-300 group"
              >
                <CardHeader>
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt={laptop.name}
                    width={350}
                    height={200}
                    className="w-full rounded-lg mb-4"
                  />
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-white">{laptop.name}</CardTitle>
                      <div className="flex items-center space-x-1 mt-1">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-4 w-4 ${i < Math.floor(laptop.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                          />
                        ))}
                        <span className="text-sm text-gray-400 ml-2">{laptop.rating}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-green-400">{laptop.price}</div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    {laptop.specs.map((spec, specIndex) => (
                      <div key={specIndex} className="flex justify-between text-sm">
                        <span className="text-gray-400">{spec}</span>
                        <span className="text-cyan-400">✓</span>
                      </div>
                    ))}
                  </div>
                  <Link href="/products/ultra-portable">
                    <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                      Explore Ultra-Portable
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </StaggeredReveal>
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
                  <Link href="/products" className="hover:text-cyan-400 transition-colors">
                    Gaming Laptops
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-cyan-400 transition-colors">
                    Business Laptops
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-cyan-400 transition-colors">
                    Ultra-Portable
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="hover:text-cyan-400 transition-colors">
                    Accessories
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
