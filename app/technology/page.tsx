import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowLeft, Cpu, HardDrive, Monitor, Battery, Zap, Shield, Award, Microscope } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { StaggeredReveal } from "@/components/animations/StaggeredReveal"

export default function TechnologyPage() {
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
              <Link
                href="/products"
                className="relative group text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                <span className="relative z-10">Products</span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -m-2"></div>
              </Link>
              <Link href="/technology" className="relative group text-cyan-400 transition-all duration-300">
                <span className="relative z-10">Technology</span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-100 transition-transform duration-300 -m-2"></div>
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
                <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400/20">Innovation & Research</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  Our{" "}
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent blur-sm animate-pulse">
                      Technology
                    </span>
                    <span className="relative bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
                      Technology
                    </span>
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Dive deep into the cutting-edge technologies that power TechLap laptops. From advanced processors to
                  revolutionary cooling systems.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Technology Deep Dive */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="fadeIn" delay={0.2}>
            <Tabs defaultValue="processor" className="max-w-6xl mx-auto">
              <TabsList className="grid w-full grid-cols-5 bg-gray-800 mb-8">
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
                <TabsTrigger
                  value="cooling"
                  className="data-[state=active]:bg-cyan-400 data-[state=active]:text-gray-950"
                >
                  Cooling
                </TabsTrigger>
              </TabsList>

              <TabsContent value="processor" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                          <Cpu className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white">Next-Gen Processors</CardTitle>
                          <CardDescription>The brain of your laptop</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-300">
                        Our laptops feature the latest Intel Core and AMD Ryzen processors, built on advanced 4nm and
                        5nm manufacturing processes that deliver exceptional performance per watt.
                      </p>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-400">Architecture Innovations</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Hybrid core design with Performance and Efficiency cores</li>
                            <li>• Advanced branch prediction and speculative execution</li>
                            <li>• Integrated AI acceleration units</li>
                            <li>• Enhanced security features with hardware-level protection</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-400">Performance Metrics</h4>
                          <div className="grid grid-cols-2 gap-4 text-sm">
                            <div className="bg-gray-900/50 p-3 rounded-lg">
                              <div className="text-cyan-400 font-semibold">Up to 24 Cores</div>
                              <div className="text-gray-400">32 Threads</div>
                            </div>
                            <div className="bg-gray-900/50 p-3 rounded-lg">
                              <div className="text-cyan-400 font-semibold">5.8 GHz</div>
                              <div className="text-gray-400">Max Boost Clock</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Benchmark Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">Cinebench R23 (Multi-Core)</span>
                            <span className="text-cyan-400">28,500+</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">Geekbench 6 (Single-Core)</span>
                            <span className="text-cyan-400">2,800+</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2 rounded-full"
                              style={{ width: "92%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">PassMark CPU</span>
                            <span className="text-cyan-400">45,000+</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-cyan-400 to-blue-600 h-2 rounded-full"
                              style={{ width: "98%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="graphics" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                          <Monitor className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white">Advanced Graphics</CardTitle>
                          <CardDescription>Visual computing powerhouse</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-300">
                        Featuring the latest NVIDIA RTX 40-series and AMD RDNA 3 graphics cards with advanced ray
                        tracing, AI acceleration, and high-performance computing capabilities.
                      </p>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-400">Ray Tracing Technology</h4>
                          <p className="text-sm text-gray-300">
                            3rd generation RT cores deliver up to 2.8x the ray tracing performance, enabling
                            photorealistic lighting and reflections in real-time.
                          </p>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-400">AI Acceleration</h4>
                          <p className="text-sm text-gray-300">
                            4th generation Tensor cores provide up to 5x AI performance for DLSS 3, content creation,
                            and machine learning workloads.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Gaming Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">Cyberpunk 2077 (4K, RT Ultra)</span>
                            <span className="text-cyan-400">75+ FPS</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full"
                              style={{ width: "85%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">Call of Duty (1440p, Max)</span>
                            <span className="text-cyan-400">165+ FPS</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">Blender Cycles (GPU Render)</span>
                            <span className="text-cyan-400">3.2x Faster</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-purple-400 to-pink-600 h-2 rounded-full"
                              style={{ width: "90%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="memory" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
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
                    <CardContent className="space-y-6">
                      <p className="text-gray-300">
                        Our laptops feature the latest DDR5 memory and PCIe 5.0 NVMe SSDs, delivering unprecedented
                        speed and responsiveness for demanding applications.
                      </p>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-400">DDR5 Memory Technology</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Up to 5600 MT/s transfer rates</li>
                            <li>• 50% higher bandwidth than DDR4</li>
                            <li>• Improved power efficiency</li>
                            <li>• Enhanced error correction</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-400">NVMe SSD Performance</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Sequential read speeds up to 7,400 MB/s</li>
                            <li>• Sequential write speeds up to 6,900 MB/s</li>
                            <li>• Random 4K read/write up to 1M IOPS</li>
                            <li>• Advanced wear leveling and error correction</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Performance Impact</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">Boot Time</span>
                            <span className="text-cyan-400">8.2 seconds</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-400 to-emerald-600 h-2 rounded-full"
                              style={{ width: "95%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">Application Launch</span>
                            <span className="text-cyan-400">3x Faster</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-400 to-emerald-600 h-2 rounded-full"
                              style={{ width: "88%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">File Transfer (Large Files)</span>
                            <span className="text-cyan-400">6.9 GB/s</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-green-400 to-emerald-600 h-2 rounded-full"
                              style={{ width: "92%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="display" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-600 rounded-lg flex items-center justify-center">
                          <Monitor className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white">Display Innovation</CardTitle>
                          <CardDescription>Your window to digital content</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-300">
                        Our displays feature cutting-edge panel technologies including OLED, Mini-LED, and high refresh
                        rate IPS panels with exceptional color accuracy and brightness.
                      </p>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-400">OLED Technology</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• True blacks with infinite contrast ratio</li>
                            <li>• 100% DCI-P3 color gamut coverage</li>
                            <li>• 0.2ms response time</li>
                            <li>• HDR10 and Dolby Vision support</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-400">High Refresh Rate</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Up to 240Hz refresh rate</li>
                            <li>• Variable refresh rate (G-Sync/FreeSync)</li>
                            <li>• Low input lag for competitive gaming</li>
                            <li>• Smooth scrolling and animations</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Display Specifications</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="bg-gray-900/50 p-3 rounded-lg">
                            <div className="text-cyan-400 font-semibold">4K OLED</div>
                            <div className="text-gray-400">3840 x 2160</div>
                          </div>
                          <div className="bg-gray-900/50 p-3 rounded-lg">
                            <div className="text-cyan-400 font-semibold">240Hz</div>
                            <div className="text-gray-400">Refresh Rate</div>
                          </div>
                          <div className="bg-gray-900/50 p-3 rounded-lg">
                            <div className="text-cyan-400 font-semibold">1000 nits</div>
                            <div className="text-gray-400">Peak Brightness</div>
                          </div>
                          <div className="bg-gray-900/50 p-3 rounded-lg">
                            <div className="text-cyan-400 font-semibold">100% sRGB</div>
                            <div className="text-gray-400">Color Accuracy</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-400">Professional Calibration</h4>
                          <p className="text-sm text-gray-300">
                            Each display is factory calibrated to Delta E &lt; 1 for professional color accuracy, making
                            them ideal for content creation and design work.
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="cooling" className="space-y-8">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <div className="flex items-center space-x-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-cyan-600 rounded-lg flex items-center justify-center">
                          <Zap className="h-6 w-6 text-white" />
                        </div>
                        <div>
                          <CardTitle className="text-white">Advanced Cooling</CardTitle>
                          <CardDescription>Thermal management excellence</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <p className="text-gray-300">
                        Our proprietary cooling systems feature advanced heat pipes, liquid metal thermal interface, and
                        intelligent fan control for optimal performance under load.
                      </p>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-400">Vapor Chamber Technology</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• Large vapor chamber for even heat distribution</li>
                            <li>• Liquid metal thermal interface material</li>
                            <li>• Multiple heat pipes with optimized routing</li>
                            <li>• Dedicated cooling for CPU and GPU</li>
                          </ul>
                        </div>
                        <div className="space-y-2">
                          <h4 className="font-semibold text-cyan-400">Smart Fan Control</h4>
                          <ul className="text-sm text-gray-300 space-y-1">
                            <li>• AI-powered thermal management</li>
                            <li>• Dynamic fan curve adjustment</li>
                            <li>• Ultra-quiet operation under light loads</li>
                            <li>• Maximum cooling when needed</li>
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-700">
                    <CardHeader>
                      <CardTitle className="text-white">Thermal Performance</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">CPU Temperature (Load)</span>
                            <span className="text-cyan-400">72°C</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-400 to-cyan-600 h-2 rounded-full"
                              style={{ width: "75%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">GPU Temperature (Gaming)</span>
                            <span className="text-cyan-400">68°C</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-400 to-cyan-600 h-2 rounded-full"
                              style={{ width: "70%" }}
                            ></div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-300">Fan Noise (Idle)</span>
                            <span className="text-cyan-400">25 dBA</span>
                          </div>
                          <div className="w-full bg-gray-700 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-blue-400 to-cyan-600 h-2 rounded-full"
                              style={{ width: "30%" }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </ScrollReveal>
        </div>
      </section>

      {/* Innovation Section */}
      <section className="py-20 bg-gray-950/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              Continuous{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                Innovation
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our commitment to research and development drives breakthrough technologies that shape the future of
              computing.
            </p>
          </div>

          <StaggeredReveal
            staggerDelay={0.15}
            animation="rotateIn"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto">
                <Microscope className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">R&D Investment</h3>
              <p className="text-gray-300">
                15% of revenue invested in research and development for next-generation technologies.
              </p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto">
                <Battery className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Battery Innovation</h3>
              <p className="text-gray-300">Advanced battery chemistry and power management for all-day productivity.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Security First</h3>
              <p className="text-gray-300">Hardware-level security features and biometric authentication systems.</p>
            </div>

            <div className="text-center space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">Industry Recognition</h3>
              <p className="text-gray-300">
                Multiple awards for innovation, design excellence, and environmental responsibility.
              </p>
            </div>
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
