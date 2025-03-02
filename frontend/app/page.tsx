import Link from "next/link"
import Image from "next/image"
import { Shield, Lock, Eye, Users, BarChart, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Protect Your Family & Business with Advanced Content Filtering
              </h1>
              <p className="text-muted-foreground md:text-xl">
                SafeGuard provides powerful, easy-to-use content filtering to block inappropriate content and create a
                safer online experience.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link href="/signup">
                  <Button size="lg">Start Free Trial</Button>
                </Link>
                <Link href="/demo">
                  <Button variant="outline" size="lg">
                    Request Demo
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Dashboard preview"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Comprehensive Protection Features
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              Our content filtering solution offers powerful features to keep your online experience safe and
              productive.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Real-time Protection</h3>
              <p className="text-muted-foreground">
                Blocks inappropriate content in real-time before it reaches your screen.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Lock className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Multi-device Support</h3>
              <p className="text-muted-foreground">
                Protect all your devices with a single subscription - computers, tablets, and smartphones.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered Filtering</h3>
              <p className="text-muted-foreground">
                Advanced AI algorithms detect and block inappropriate content with high accuracy.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Family Controls</h3>
              <p className="text-muted-foreground">
                Create individual profiles with customized filtering levels for each family member.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <BarChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Usage Reports</h3>
              <p className="text-muted-foreground">
                Detailed reports on browsing activity and blocked content to keep you informed.
              </p>
            </div>
            <div className="flex flex-col items-center text-center p-6 bg-muted rounded-lg">
              <div className="p-3 bg-primary/10 rounded-full mb-4">
                <Settings className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Customizable Filters</h3>
              <p className="text-muted-foreground">
                Tailor filtering settings to your specific needs with easy-to-use controls.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Trusted by Thousands</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              See what our customers have to say about SafeGuard's content filtering solution.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-background p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Customer"
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Sarah Johnson</h4>
                  <p className="text-sm text-muted-foreground">Parent of three</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "SafeGuard gives me peace of mind knowing my children are protected from inappropriate content online.
                The customizable filters for different age groups are perfect for our family."
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Customer"
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Michael Chen</h4>
                  <p className="text-sm text-muted-foreground">IT Director</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Implementing SafeGuard across our company network was seamless. The admin controls and reporting
                features are robust, and employee productivity has improved significantly."
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow">
              <div className="flex items-center mb-4">
                <Image
                  src="/placeholder.svg?height=60&width=60"
                  width={60}
                  height={60}
                  alt="Customer"
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h4 className="font-bold">Lisa Rodriguez</h4>
                  <p className="text-sm text-muted-foreground">School Administrator</p>
                </div>
              </div>
              <p className="text-muted-foreground">
                "Our school district relies on SafeGuard to create a safe learning environment for students. The
                filtering accuracy is impressive, and the support team is always responsive."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="bg-primary text-primary-foreground rounded-lg p-8 md:p-12 shadow-lg">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Create a Safer Online Experience?
                </h2>
                <p className="mt-4 text-primary-foreground/90 md:text-xl">
                  Join thousands of satisfied customers who trust SafeGuard for their content filtering needs.
                </p>
              </div>
              <div className="bg-primary-foreground/10 p-6 rounded-lg">
                <div className="text-center space-y-4">
                  <h3 className="text-2xl font-bold">Start Your Free 14-Day Trial</h3>
                  <p>No credit card required. Cancel anytime.</p>
                  <Link href="/signup">
                    <Button size="lg" variant="secondary" className="w-full">
                      Get Started Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

