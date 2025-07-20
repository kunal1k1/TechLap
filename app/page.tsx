import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { StaggeredReveal } from "@/components/animations/StaggeredReveal"
import {
  Cpu,
  HardDrive,
  Monitor,
  Battery,
  Gamepad2,
  Briefcase,
  Plane,
  ChevronRight,
  Shield,
  Zap,
  Award,
} from "lucide-react"

export default function TechLapWebsite() {
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
        <div
          className="absolute top-1/2 left-1/2 w-36 h-36 bg-blue-400/10 rounded-full blur-xl animate-bounce"
          style={{ animationDuration: "9s", animationDelay: "3s" }}
        ></div>
      </div>
      {/* Enhanced Navigation */}
      <nav className="border-b border-gray-800/50 bg-gray-950/95 backdrop-blur-xl supports-[backdrop-filter]:bg-gray-950/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg blur-sm opacity-75 animate-pulse"></div>
                <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">TL</span>
                </div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                TechLap
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="/products"
                className="relative group text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                <span className="relative z-10">Products</span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -m-2"></div>
              </a>
              <a
                href="/technology"
                className="relative group text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                <span className="relative z-10">Technology</span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -m-2"></div>
              </a>
              <a
                href="/support"
                className="relative group text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                <span className="relative z-10">Support</span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -m-2"></div>
              </a>
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
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-black to-gray-900"></div>
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=800&width=1200')] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <ScrollReveal animation="slideRight">
                <div className="space-y-4">
                  <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400/20">Next-Gen Computing</Badge>
                  <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                    Redefining
                    <span className="relative inline-block ml-2">
                      <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent blur-sm animate-pulse">
                        Performance
                      </span>
                      <span className="relative bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
                        Performance
                      </span>
                    </span>
                  </h1>
                  <p className="text-xl text-gray-300 leading-relaxed">
                    Experience the future of mobile computing with TechLap's revolutionary laptop lineup. Engineered for
                    professionals, gamers, and innovators who demand excellence.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="slideUp" delay={0.2}>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                  >
                    Explore Products
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                  >
                    Watch Demo
                  </Button>
                </div>
              </ScrollReveal>
              <ScrollReveal animation="fadeIn" delay={0.4}>
                <div className="flex items-center space-x-8 pt-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">50K+</div>
                    <div className="text-sm text-gray-400">Happy Customers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">99.9%</div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-cyan-400">24/7</div>
                    <div className="text-sm text-gray-400">Support</div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
            <ScrollReveal animation="slideLeft" delay={0.3}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-blue-600/20 blur-3xl"></div>
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="TechLap Gaming Laptop"
                  width={800}
                  height={600}
                  className="relative z-10 rounded-2xl shadow-2xl"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section id="products" className="py-20 bg-gray-950/50 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Our{" "}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent blur-sm animate-pulse">
                    Product Line
                  </span>
                  <span className="relative bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
                    Product Line
                  </span>
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover laptops engineered for every need - from high-performance gaming to ultra-portable business
                solutions.
              </p>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={0.2} animation="scaleUp" className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Gamepad2 className="h-8 w-8 text-white" />,
                title: "Gaming Series",
                description: "Unleash your gaming potential with cutting-edge graphics and lightning-fast performance.",
                gradient: "from-red-500 to-orange-600",
                buttonGradient: "from-red-500 to-orange-600 hover:from-red-600 hover:to-orange-700",
                features: ["RTX 4080 GPU", "144Hz Display", "RGB Keyboard"],
                buttonText: "Explore Gaming",
              },
              {
                icon: <Briefcase className="h-8 w-8 text-white" />,
                title: "Business Series",
                description: "Professional-grade laptops built for productivity, security, and reliability.",
                gradient: "from-blue-500 to-indigo-600",
                buttonGradient: "from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700",
                features: ["Enterprise Security", "16+ Hour Battery", "Thunderbolt 4"],
                buttonText: "Explore Business",
              },
              {
                icon: <Plane className="h-8 w-8 text-white" />,
                title: "Ultra-Portable",
                description: "Featherlight design meets powerful performance for the mobile professional.",
                gradient: "from-green-500 to-emerald-600",
                buttonGradient: "from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700",
                features: ["Under 2.5 lbs", "All-Day Battery", "4K OLED Display"],
                buttonText: "Explore Ultra-Portable",
              },
            ].map((product, index) => (
              <Card
                key={index}
                className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group"
              >
                <CardHeader className="text-center pb-4">
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${product.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform`}
                  >
                    {product.icon}
                  </div>
                  <CardTitle className="text-2xl text-white">{product.title}</CardTitle>
                  <CardDescription className="text-gray-300">{product.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Image
                    src="/placeholder.svg?height=200&width=350"
                    alt={product.title}
                    width={350}
                    height={200}
                    className="w-full rounded-lg"
                  />
                  <div className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex justify-between text-sm">
                        <span className="text-gray-400">{feature}</span>
                        <span className="text-cyan-400">✓</span>
                      </div>
                    ))}
                  </div>
                  <Button className={`w-full bg-gradient-to-r ${product.buttonGradient}`}>{product.buttonText}</Button>
                </CardContent>
              </Card>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* Technology Education Section */}
      <section id="technology" className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Understanding{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Laptop Technology
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Learn about the cutting-edge technologies that power our laptops and make informed decisions.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal animation="fadeIn" delay={0.2}>
            <Tabs defaultValue="processor" className="max-w-4xl mx-auto">
              <TabsList className="grid w-full grid-cols-4 bg-gray-800 mb-8">
                <TabsTrigger
                  value="processor"
                  className="data-[state=active]:bg-cyan-400 data-[state=active]:text-gray-950"
                >
                  Processor
                </TabsTrigger>
                <TabsTrigger
                  value="graphics"
                  className="data-[state=active]:bg-cyan-400 data-[state=active]:text-gray-950"
                >
                  Graphics
                </TabsTrigger>
                <TabsTrigger
                  value="memory"
                  className="data-[state=active]:bg-cyan-400 data-[state=active]:text-gray-950"
                >
                  Memory
                </TabsTrigger>
                <TabsTrigger
                  value="display"
                  className="data-[state=active]:bg-cyan-400 data-[state=active]:text-gray-950"
                >
                  Display
                </TabsTrigger>
              </TabsList>

              <TabsContent value="processor" className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                        <Cpu className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">CPU Technology</CardTitle>
                        <CardDescription>The brain of your laptop</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Modern processors are the foundation of laptop performance. Our laptops feature the latest Intel
                      Core and AMD Ryzen processors, built on advanced manufacturing processes that deliver exceptional
                      performance per watt.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-cyan-400">Core Count & Threading</h4>
                        <p className="text-sm text-gray-300">
                          More cores enable better multitasking and parallel processing for demanding applications like
                          video editing and 3D rendering.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-cyan-400">Clock Speed & Boost</h4>
                        <p className="text-sm text-gray-300">
                          Higher base and boost frequencies deliver faster single-threaded performance for gaming and
                          responsive everyday use.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="graphics" className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                        <Monitor className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">Graphics Processing</CardTitle>
                        <CardDescription>Visual computing powerhouse</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Graphics processing units (GPUs) handle everything from basic display output to complex 3D
                      rendering and AI acceleration. Our laptops feature both integrated and discrete graphics
                      solutions.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-cyan-400">Ray Tracing</h4>
                        <p className="text-sm text-gray-300">
                          Real-time ray tracing creates photorealistic lighting and reflections in modern games and
                          professional applications.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-cyan-400">AI Acceleration</h4>
                        <p className="text-sm text-gray-300">
                          Dedicated AI cores accelerate machine learning workloads and enable features like intelligent
                          upscaling.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="memory" className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                        <HardDrive className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">Memory & Storage</CardTitle>
                        <CardDescription>Speed and capacity combined</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Memory and storage technologies directly impact system responsiveness and multitasking capability.
                      Our laptops feature high-speed DDR5 RAM and NVMe SSD storage for optimal performance.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-cyan-400">DDR5 RAM</h4>
                        <p className="text-sm text-gray-300">
                          Latest generation memory provides higher bandwidth and improved power efficiency for demanding
                          applications.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-cyan-400">NVMe SSD</h4>
                        <p className="text-sm text-gray-300">
                          Ultra-fast solid-state drives deliver instant boot times and rapid file transfers with no
                          moving parts.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="display" className="space-y-6">
                <Card className="bg-gray-800/50 border-gray-700">
                  <CardHeader>
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center">
                        <Monitor className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-white">Display Technology</CardTitle>
                        <CardDescription>Your window to digital content</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-300">
                      Display quality affects everything from productivity to entertainment. Our laptops feature
                      advanced panel technologies including OLED, Mini-LED, and high refresh rate displays for every use
                      case.
                    </p>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <h4 className="font-semibold text-cyan-400">Color Accuracy</h4>
                        <p className="text-sm text-gray-300">
                          Professional-grade color reproduction with wide gamut coverage for creative work and content
                          consumption.
                        </p>
                      </div>
                      <div className="space-y-2">
                        <h4 className="font-semibold text-cyan-400">Refresh Rate</h4>
                        <p className="text-sm text-gray-300">
                          High refresh rates up to 240Hz provide smooth motion for gaming and responsive interaction.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  TechLap
                </span>
              </h2>
            </div>
          </ScrollReveal>

          <StaggeredReveal
            staggerDelay={0.15}
            animation="rotateIn"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                icon: <Zap className="h-8 w-8 text-white" />,
                title: "Lightning Fast",
                description: "Optimized performance for demanding workloads and seamless multitasking.",
                gradient: "from-cyan-400 to-blue-600",
              },
              {
                icon: <Battery className="h-8 w-8 text-white" />,
                title: "All-Day Battery",
                description: "Advanced power management for extended productivity without compromise.",
                gradient: "from-green-400 to-emerald-600",
              },
              {
                icon: <Shield className="h-8 w-8 text-white" />,
                title: "Enterprise Security",
                description: "Military-grade encryption and biometric authentication for data protection.",
                gradient: "from-purple-400 to-pink-600",
              },
              {
                icon: <Award className="h-8 w-8 text-white" />,
                title: "Award Winning",
                description: "Recognized by industry experts for innovation and design excellence.",
                gradient: "from-orange-400 to-red-600",
              },
            ].map((feature, index) => (
              <div key={index} className="text-center space-y-4">
                <div
                  className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </StaggeredReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <ScrollReveal animation="scaleUp">
            <div className="max-w-3xl mx-auto space-y-8">
              <h2 className="text-3xl lg:text-5xl font-bold">
                Ready to Experience the{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Future?
                </span>
              </h2>
              <p className="text-xl text-gray-300">
                Join thousands of satisfied customers who've made TechLap their trusted computing partner.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700"
                >
                  Shop Now
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-gray-600 text-gray-300 hover:bg-gray-800 bg-transparent"
                >
                  Schedule Demo
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 bg-gray-950 py-12">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="slideUp">
            <div className="grid md:grid-cols-4 gap-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">TL</span>
                  </div>
                  <span className="text-xl font-bold">TechLap</span>
                </div>
                <p className="text-gray-400">
                  Pioneering the future of mobile computing with innovative laptop solutions.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Products</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Gaming Laptops
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Business Laptops
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Ultra-Portable
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Accessories
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Support</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Documentation
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Warranty
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Repairs
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Contact
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Company</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      About Us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Careers
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Press
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:text-cyan-400 transition-colors">
                      Investors
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal animation="fadeIn" delay={0.2}>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
              <p>&copy; 2024 TechLap. All rights reserved.</p>
            </div>
          </ScrollReveal>
        </div>
      </footer>
    </div>
  )
}
