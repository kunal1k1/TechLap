import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { getProductById, formatPrice } from "@/lib/products"
import {
  ArrowLeft,
  Star,
  ShoppingCart,
  Heart,
  Share2,
  Cpu,
  Monitor,
  Battery,
  Wifi,
  Zap,
  Shield,
  CheckCircle,
  Truck,
  RotateCcw,
  Headphones,
} from "lucide-react"

interface ProductPageProps {
  params: {
    category: string
    id: string
  }
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = getProductById(params.id)

  if (!product) {
    notFound()
  }

  const categoryNames = {
    gaming: "Gaming",
    business: "Business",
    "ultra-portable": "Ultra-Portable",
  }

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
              <Link href={`/products/${params.category}`} className="hover:text-cyan-400 transition-colors">
                {categoryNames[product.category as keyof typeof categoryNames]}
              </Link>
              <span>/</span>
              <span className="text-white">{product.name}</span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Product Hero */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Images */}
            <ScrollReveal animation="slideLeft">
              <div className="space-y-4">
                <div className="relative aspect-[4/3] bg-gray-800/50 rounded-2xl overflow-hidden">
                  <Image
                    src={product.images[0] || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                  {product.badge && (
                    <Badge className="absolute top-4 left-4 bg-cyan-400 text-gray-950">{product.badge}</Badge>
                  )}
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {product.images.slice(1).map((image, index) => (
                    <div
                      key={index}
                      className="relative aspect-[4/3] bg-gray-800/50 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-cyan-400 transition-all"
                    >
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${product.name} view ${index + 2}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Product Info */}
            <ScrollReveal animation="slideRight">
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-2 mb-2">
                    <Badge variant="outline" className="border-cyan-400 text-cyan-400">
                      {categoryNames[product.category as keyof typeof categoryNames]}
                    </Badge>
                    {product.inStock ? (
                      <Badge className="bg-green-500/10 text-green-400 border-green-400/20">In Stock</Badge>
                    ) : (
                      <Badge className="bg-red-500/10 text-red-400 border-red-400/20">Out of Stock</Badge>
                    )}
                  </div>
                  <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">{product.name}</h1>
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-5 w-5 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                        />
                      ))}
                      <span className="text-white font-semibold ml-2">{product.rating}</span>
                      <span className="text-gray-400">({product.reviewCount} reviews)</span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">{product.description}</p>
                </div>

                {/* Pricing */}
                <div className="flex items-center space-x-4">
                  <span className="text-3xl font-bold text-cyan-400">{formatPrice(product.price)}</span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-400 line-through">{formatPrice(product.originalPrice)}</span>
                  )}
                  {product.originalPrice && (
                    <Badge className="bg-red-500/10 text-red-400 border-red-400/20">
                      Save {formatPrice(product.originalPrice - product.price)}
                    </Badge>
                  )}
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {product.keyFeatures.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Color Options */}
                {product.colors.length > 1 && (
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-3">Available Colors</h3>
                    <div className="flex space-x-2">
                      {product.colors.map((color, index) => (
                        <Button
                          key={index}
                          variant="outline"
                          size="sm"
                          className="border-gray-600 text-gray-300 hover:border-cyan-400 hover:text-cyan-400 bg-transparent"
                        >
                          {color}
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex space-x-4">
                  <Button
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="mr-2 h-5 w-5" />
                    {product.inStock ? "Add to Cart" : "Out of Stock"}
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Heart className="h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    <Share2 className="h-5 w-5" />
                  </Button>
                </div>

                {/* Guarantees */}
                <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-800">
                  <div className="text-center">
                    <Truck className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">Free Shipping</p>
                  </div>
                  <div className="text-center">
                    <RotateCcw className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">30-Day Returns</p>
                  </div>
                  <div className="text-center">
                    <Headphones className="h-6 w-6 text-cyan-400 mx-auto mb-2" />
                    <p className="text-sm text-gray-300">24/7 Support</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Details */}
      <section className="py-20 bg-gray-950/50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fadeIn">
            <Tabs defaultValue="specifications" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 bg-gray-800 mb-8">
                <TabsTrigger
                  value="specifications"
                  className="data-[state=active]:bg-cyan-400 data-[state=active]:text-gray-950"
                >
                  Specifications
                </TabsTrigger>
                <TabsTrigger
                  value="features"
                  className="data-[state=active]:bg-cyan-400 data-[state=active]:text-gray-950"
                >
                  Features & Benefits
                </TabsTrigger>
                <TabsTrigger
                  value="reviews"
                  className="data-[state=active]:bg-cyan-400 data-[state=active]:text-gray-950"
                >
                  Reviews
                </TabsTrigger>
                <TabsTrigger
                  value="support"
                  className="data-[state=active]:bg-cyan-400 data-[state=active]:text-gray-950"
                >
                  Support
                </TabsTrigger>
              </TabsList>

              <TabsContent value="specifications" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Cpu className="mr-2 h-5 w-5 text-cyan-400" />
                        Performance
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Processor</h4>
                          <p className="text-gray-300 text-sm">{product.specs.processor}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Memory</h4>
                          <p className="text-gray-300 text-sm">{product.specs.ram}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Graphics</h4>
                          <p className="text-gray-300 text-sm">{product.specs.graphics}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Storage</h4>
                          <p className="text-gray-300 text-sm">{product.specs.storage}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Monitor className="mr-2 h-5 w-5 text-cyan-400" />
                        Display & Design
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Display</h4>
                          <p className="text-gray-300 text-sm">{product.specs.display}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Dimensions</h4>
                          <p className="text-gray-300 text-sm">{product.specs.dimensions}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Weight</h4>
                          <p className="text-gray-300 text-sm">{product.specs.weight}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Keyboard</h4>
                          <p className="text-gray-300 text-sm">{product.specs.keyboard}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Wifi className="mr-2 h-5 w-5 text-cyan-400" />
                        Connectivity
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Wireless</h4>
                          <p className="text-gray-300 text-sm">{product.specs.connectivity.join(", ")}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Ports</h4>
                          <p className="text-gray-300 text-sm">{product.specs.ports.join(", ")}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Audio</h4>
                          <p className="text-gray-300 text-sm">{product.specs.audio}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Webcam</h4>
                          <p className="text-gray-300 text-sm">{product.specs.webcam}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white flex items-center">
                        <Battery className="mr-2 h-5 w-5 text-cyan-400" />
                        Power & OS
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-3">
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Battery</h4>
                          <p className="text-gray-300 text-sm">{product.specs.battery}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-cyan-400 mb-1">Operating System</h4>
                          <p className="text-gray-300 text-sm">{product.specs.os}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="features" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Target Audience</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300">{product.targetAudience}</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Key Benefits</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        {product.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-300 text-sm">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="reviews" className="space-y-6">
                <div className="text-center py-12">
                  <h3 className="text-2xl font-bold text-white mb-4">Customer Reviews</h3>
                  <p className="text-gray-300 mb-8">See what our customers are saying about the {product.name}</p>
                  <div className="flex items-center justify-center space-x-4 mb-8">
                    <div className="flex items-center space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-400"}`}
                        />
                      ))}
                    </div>
                    <span className="text-2xl font-bold text-white">{product.rating}</span>
                    <span className="text-gray-400">out of 5 ({product.reviewCount} reviews)</span>
                  </div>
                  <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                    Read All Reviews
                  </Button>
                </div>
              </TabsContent>

              <TabsContent value="support" className="space-y-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <Card className="bg-gray-800/50 border-gray-700 text-center">
                    <CardHeader>
                      <Shield className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Warranty</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">3-year comprehensive warranty with international coverage</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700 text-center">
                    <CardHeader>
                      <Headphones className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Support</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">24/7 technical support via chat, phone, and email</p>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700 text-center">
                    <CardHeader>
                      <Zap className="h-8 w-8 text-cyan-400 mx-auto mb-2" />
                      <CardTitle className="text-white">Setup</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-300 text-sm">Free setup assistance and data migration service</p>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      {/* Back to Category */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="slideUp">
            <Link
              href={`/products/${params.category}`}
              className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to {categoryNames[product.category as keyof typeof categoryNames]} Laptops
            </Link>
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
