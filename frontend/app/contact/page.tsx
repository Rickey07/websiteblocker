import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Contact Us</h1>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Have questions or need assistance? Our team is here to help you with any inquiries about our content
            filtering solutions.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Get in Touch</h2>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">First name</Label>
                    <Input id="first-name" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">Last name</Label>
                    <Input id="last-name" placeholder="Doe" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Please provide details about your inquiry..."
                    className="min-h-[150px]"
                    required
                  />
                </div>
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tighter mb-6">Contact Information</h2>
                <p className="text-muted-foreground mb-8">
                  Our support team is available Monday through Friday, 9am to 5pm EST. We strive to respond to all
                  inquiries within 24 hours.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <p className="text-muted-foreground">support@safeguard.com</p>
                    <p className="text-muted-foreground">sales@safeguard.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Call Us</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                    <p className="text-muted-foreground">Mon-Fri, 9am-5pm EST</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-bold">Visit Us</h3>
                    <p className="text-muted-foreground">123 Tech Park Drive</p>
                    <p className="text-muted-foreground">Suite 400</p>
                    <p className="text-muted-foreground">Boston, MA 02110</p>
                  </div>
                </div>
              </div>
              <div className="p-6 bg-muted rounded-lg">
                <h3 className="font-bold mb-4">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium">How quickly can I get set up?</h4>
                    <p className="text-sm text-muted-foreground">
                      Most customers are up and running within minutes of signing up.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Do you offer educational discounts?</h4>
                    <p className="text-sm text-muted-foreground">
                      Yes, we offer special pricing for schools and educational institutions.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-medium">Can I try before I buy?</h4>
                    <p className="text-sm text-muted-foreground">
                      We offer a 14-day free trial with no credit card required.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

