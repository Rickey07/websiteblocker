import Image from "next/image"
import { Shield, Award, Heart, Users } from "lucide-react"

export default function AboutPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">About SafeGuard</h1>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            We're on a mission to create a safer internet experience for families and businesses through innovative
            content filtering technology.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tighter mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  SafeGuard was founded in 2015 by a group of parents and technology experts who were concerned about
                  the increasing exposure of children to inappropriate content online.
                </p>
                <p>
                  What started as a small project to protect our own families has grown into a comprehensive content
                  filtering solution trusted by thousands of families and businesses worldwide.
                </p>
                <p>
                  Our team combines expertise in artificial intelligence, cybersecurity, and child development to create
                  a solution that not only blocks harmful content but also promotes healthy digital habits.
                </p>
              </div>
            </div>
            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Team working together"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Our Values</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              The principles that guide everything we do at SafeGuard.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-background p-6 rounded-lg shadow text-center">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Protection</h3>
              <p className="text-muted-foreground">
                We believe everyone deserves a safe online experience, free from harmful content.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow text-center">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Excellence</h3>
              <p className="text-muted-foreground">
                We strive for excellence in our technology, service, and customer support.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow text-center">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Empathy</h3>
              <p className="text-muted-foreground">
                We understand the challenges families and businesses face in the digital age.
              </p>
            </div>
            <div className="bg-background p-6 rounded-lg shadow text-center">
              <div className="mx-auto p-3 bg-primary/10 rounded-full w-fit mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Community</h3>
              <p className="text-muted-foreground">
                We're building a community committed to creating a safer internet for everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Meet Our Team</h2>
            <p className="mt-4 text-muted-foreground md:text-xl max-w-3xl mx-auto">
              The passionate people behind SafeGuard's mission and technology.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Team member"
                className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
              />
              <h3 className="text-xl font-bold">David Chen</h3>
              <p className="text-muted-foreground">Co-Founder & CEO</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Team member"
                className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
              />
              <h3 className="text-xl font-bold">Maria Rodriguez</h3>
              <p className="text-muted-foreground">Co-Founder & CTO</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Team member"
                className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
              />
              <h3 className="text-xl font-bold">James Wilson</h3>
              <p className="text-muted-foreground">Chief Product Officer</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Team member"
                className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
              />
              <h3 className="text-xl font-bold">Sarah Johnson</h3>
              <p className="text-muted-foreground">Head of Customer Success</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Team member"
                className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
              />
              <h3 className="text-xl font-bold">Michael Brown</h3>
              <p className="text-muted-foreground">Lead AI Engineer</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg?height=300&width=300"
                width={300}
                height={300}
                alt="Team member"
                className="rounded-full mx-auto mb-4 w-40 h-40 object-cover"
              />
              <h3 className="text-xl font-bold">Emily Patel</h3>
              <p className="text-muted-foreground">Marketing Director</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

