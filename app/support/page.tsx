import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, MessageCircle, Phone, Mail, Clock, Shield, Wrench, BookOpen } from "lucide-react"
import { ScrollReveal } from "@/components/animations/ScrollReveal"
import { StaggeredReveal } from "@/components/animations/StaggeredReveal"

export default function SupportPage() {
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
              <Link
                href="/technology"
                className="relative group text-gray-300 hover:text-cyan-400 transition-all duration-300"
              >
                <span className="relative z-10">Technology</span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -m-2"></div>
              </Link>
              <Link href="/support" className="relative group text-cyan-400 transition-all duration-300">
                <span className="relative z-10">Support</span>
                <div className="absolute inset-0 bg-cyan-400/10 rounded-lg scale-100 transition-transform duration-300 -m-2"></div>
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
                <Badge className="bg-cyan-400/10 text-cyan-400 border-cyan-400/20">24/7 Customer Support</Badge>
                <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
                  We're Here to{" "}
                  <span className="relative inline-block">
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent blur-sm animate-pulse">
                      Help
                    </span>
                    <span className="relative bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent animate-pulse">
                      Help
                    </span>
                  </span>
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                  Get expert support for your TechLap products. From technical assistance to warranty services, our team
                  is ready to help you succeed.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Quick Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <StaggeredReveal
            staggerDelay={0.1}
            animation="scaleUp"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
          >
            <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-400/50 transition-all duration-300 group text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <MessageCircle className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Live Chat</CardTitle>
                <CardDescription>Get instant help from our support team</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                  Start Chat
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-green-400/50 transition-all duration-300 group text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Phone Support</CardTitle>
                <CardDescription>Speak directly with our experts</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700">
                  Call Now
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-400/50 transition-all duration-300 group text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Email Support</CardTitle>
                <CardDescription>Send us your questions anytime</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700">
                  Send Email
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700 hover:border-orange-400/50 transition-all duration-300 group text-center">
              <CardHeader>
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-white">Knowledge Base</CardTitle>
                <CardDescription>Find answers in our documentation</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-600 hover:to-red-700">
                  Browse Articles
                </Button>
              </CardContent>
            </Card>
          </StaggeredReveal>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-20 bg-gray-950/50 relative">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="slideUp">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-bold mb-4">
                Support{" "}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-600 bg-clip-text text-transparent">
                  Categories
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">Find the right support for your specific needs</p>
            </div>
          </ScrollReveal>

          <StaggeredReveal staggerDelay={0.2} animation="slideUp" className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                    <Wrench className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Technical Support</CardTitle>
                    <CardDescription>Hardware and software assistance</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-300">
                  <li>• Driver installation and updates</li>
                  <li>• Performance optimization</li>
                  <li>• Troubleshooting guides</li>
                  <li>• System diagnostics</li>
                  <li>• BIOS and firmware updates</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-cyan-400/50 text-cyan-400 hover:bg-cyan-400 hover:text-gray-950 bg-transparent"
                >
                  Get Technical Help
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Warranty & Repairs</CardTitle>
                    <CardDescription>Coverage and repair services</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-300">
                  <li>• Warranty status check</li>
                  <li>• Repair service requests</li>
                  <li>• Extended warranty options</li>
                  <li>• Replacement parts</li>
                  <li>• Return merchandise authorization</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-green-400/50 text-green-400 hover:bg-green-400 hover:text-gray-950 bg-transparent"
                >
                  Check Warranty
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-gray-700">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center">
                    <BookOpen className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Documentation</CardTitle>
                    <CardDescription>Manuals and guides</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-2 text-gray-300">
                  <li>• User manuals and guides</li>
                  <li>• Quick start tutorials</li>
                  <li>• Video demonstrations</li>
                  <li>• FAQ and common issues</li>
                  <li>• Software documentation</li>
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-purple-400/50 text-purple-400 hover:bg-purple-400 hover:text-gray-950 bg-transparent"
                >
                  Browse Docs
                </Button>
              </CardContent>
            </Card>
          </StaggeredReveal>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal animation="scaleUp">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl lg:text-4xl font-bold mb-4 text-white">Contact Our Support Team</h2>
                <p className="text-gray-300">
                  Can't find what you're looking for? Send us a message and we'll get back to you within 24 hours.
                </p>
              </div>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="firstName" className="text-sm font-medium text-gray-300">
                          First Name
                        </label>
                        <Input
                          id="firstName"
                          placeholder="Enter your first name"
                          className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="lastName" className="text-sm font-medium text-gray-300">
                          Last Name
                        </label>
                        <Input
                          id="lastName"
                          placeholder="Enter your last name"
                          className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium text-gray-300">
                        Email
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email address"
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium text-gray-300">
                        Subject
                      </label>
                      <Input
                        id="subject"
                        placeholder="What can we help you with?"
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium text-gray-300">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Please describe your issue or question in detail..."
                        rows={6}
                        className="bg-gray-900/50 border-gray-600 text-white placeholder:text-gray-400 focus:border-cyan-400 resize-none"
                      />
                    </div>
                    <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Support Hours */}
      <section className="py-20 bg-gray-950/50 relative">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-bold mb-8 text-white">Support Hours</h2>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Live Chat</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300">24/7 Available</p>
                  <p className="text-sm text-gray-400 mt-2">
                    Instant responses from our AI assistant, escalation to human agents during business hours
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Phone Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300">Mon-Fri: 8AM-8PM EST</p>
                  <p className="text-gray-300">Sat-Sun: 10AM-6PM EST</p>
                  <p className="text-sm text-gray-400 mt-2">Direct access to technical specialists</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-800/50 border-gray-700">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-white">Email Support</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-300">24 Hour Response</p>
                  <p className="text-sm text-gray-400 mt-2">Detailed responses to complex technical questions</p>
                </CardContent>
              </Card>
            </div>
          </div>
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
