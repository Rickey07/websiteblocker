import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PricingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Simple, Transparent Pricing
          </h1>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Choose the plan that's right for you and your family or business. All plans include our core protection
            features.
          </p>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Basic Plan */}
            <div className="flex flex-col p-6 bg-background rounded-lg shadow-lg border border-muted">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Basic</h3>
                <p className="text-muted-foreground mt-2">Perfect for individuals</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$4.99</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Protection for 1 device</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Basic content filtering</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Web browsing protection</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Email support</span>
                </li>
              </ul>
              <Link href="/signup?plan=basic">
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Family Plan */}
            <div className="flex flex-col p-6 bg-primary text-primary-foreground rounded-lg shadow-lg relative">
              <div className="absolute top-0 right-0 -mt-4 mr-4 bg-yellow-500 text-black text-xs font-bold px-3 py-1 rounded-full">
                MOST POPULAR
              </div>
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Family</h3>
                <p className="text-primary-foreground/80 mt-2">Ideal for families</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$9.99</span>
                  <span className="ml-1 text-primary-foreground/80">/month</span>
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Protection for up to 5 devices</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Advanced content filtering</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Web, app, and social media protection</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Screen time management</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Individual user profiles</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2" />
                  <span>Priority email support</span>
                </li>
              </ul>
              <Link href="/signup?plan=family">
                <Button variant="secondary" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>

            {/* Business Plan */}
            <div className="flex flex-col p-6 bg-background rounded-lg shadow-lg border border-muted">
              <div className="mb-6">
                <h3 className="text-2xl font-bold">Business</h3>
                <p className="text-muted-foreground mt-2">For organizations of all sizes</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">$19.99</span>
                  <span className="ml-1 text-muted-foreground">/month</span>
                </div>
              </div>
              <ul className="space-y-3 flex-1 mb-6">
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Protection for 10+ devices</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Enterprise-grade content filtering</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Comprehensive protection across all platforms</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Advanced reporting and analytics</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Admin dashboard</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>24/7 priority support</span>
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 text-primary mr-2" />
                  <span>Custom deployment options</span>
                </li>
              </ul>
              <Link href="/signup?plan=business">
                <Button variant="outline" className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Comparison */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Compare Features</h2>
          <div className="overflow-x-auto">
            <table className="w-full bg-background rounded-lg shadow">
              <thead>
                <tr className="border-b">
                  <th className="text-left p-4">Feature</th>
                  <th className="p-4 text-center">Basic</th>
                  <th className="p-4 text-center bg-primary/10">Family</th>
                  <th className="p-4 text-center">Business</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-4 font-medium">Number of devices</td>
                  <td className="p-4 text-center">1</td>
                  <td className="p-4 text-center bg-primary/10">Up to 5</td>
                  <td className="p-4 text-center">10+</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Web filtering</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center bg-primary/10">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">App filtering</td>
                  <td className="p-4 text-center">✓</td>
                  <td className="p-4 text-center bg-primary/10">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Social media monitoring</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center bg-primary/10">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Screen time management</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center bg-primary/10">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Individual user profiles</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center bg-primary/10">✓</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Admin dashboard</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center bg-primary/10">Basic</td>
                  <td className="p-4 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Reporting and analytics</td>
                  <td className="p-4 text-center">Basic</td>
                  <td className="p-4 text-center bg-primary/10">Standard</td>
                  <td className="p-4 text-center">Advanced</td>
                </tr>
                <tr className="border-b">
                  <td className="p-4 font-medium">Customer support</td>
                  <td className="p-4 text-center">Email</td>
                  <td className="p-4 text-center bg-primary/10">Priority Email</td>
                  <td className="p-4 text-center">24/7 Priority</td>
                </tr>
                <tr>
                  <td className="p-4 font-medium">Custom deployment</td>
                  <td className="p-4 text-center">-</td>
                  <td className="p-4 text-center bg-primary/10">-</td>
                  <td className="p-4 text-center">✓</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I change plans later?</h3>
              <p className="text-muted-foreground">
                Yes, you can upgrade or downgrade your plan at any time. Changes will be applied to your next billing
                cycle.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Is there a free trial?</h3>
              <p className="text-muted-foreground">
                Yes, we offer a 14-day free trial for all plans. No credit card required to start.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">How does billing work?</h3>
              <p className="text-muted-foreground">
                We offer monthly and annual billing options. Annual plans come with a 20% discount.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Can I cancel anytime?</h3>
              <p className="text-muted-foreground">
                Yes, you can cancel your subscription at any time. You'll continue to have access until the end of your
                current billing period.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">Do you offer educational discounts?</h3>
              <p className="text-muted-foreground">
                Yes, we offer special pricing for schools and educational institutions. Please contact our sales team
                for details.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold">What payment methods do you accept?</h3>
              <p className="text-muted-foreground">
                We accept all major credit cards, PayPal, and bank transfers for business plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
            Ready to Create a Safer Online Experience?
          </h2>
          <p className="text-primary-foreground/90 md:text-xl max-w-3xl mx-auto mb-8">
            Join thousands of satisfied customers who trust SafeGuard for their content filtering needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/signup">
              <Button variant="secondary" size="lg">
                Start Your Free Trial
              </Button>
            </Link>
            <Link href="/contact">
              <Button
                variant="outline"
                size="lg"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Contact Sales
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

