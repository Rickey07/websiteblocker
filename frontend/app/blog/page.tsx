import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "5 Ways to Keep Your Children Safe Online",
      excerpt:
        "Practical tips for parents to create a safer internet experience for their children in today's digital world.",
      date: "March 15, 2023",
      author: "Sarah Johnson",
      category: "Parental Guidance",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 2,
      title: "The Impact of Inappropriate Content on Child Development",
      excerpt:
        "Research-based insights into how exposure to inappropriate content affects children's psychological development.",
      date: "February 28, 2023",
      author: "Dr. Michael Chen",
      category: "Research",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 3,
      title: "Content Filtering for Businesses: Boosting Productivity",
      excerpt:
        "How implementing content filtering solutions can increase workplace productivity and reduce security risks.",
      date: "January 12, 2023",
      author: "James Wilson",
      category: "Business",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 4,
      title: "The Evolution of Content Filtering Technology",
      excerpt:
        "A look at how content filtering has evolved from simple blocklists to sophisticated AI-powered solutions.",
      date: "December 5, 2022",
      author: "Maria Rodriguez",
      category: "Technology",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 5,
      title: "Setting Up SafeGuard: A Step-by-Step Guide",
      excerpt:
        "A comprehensive guide to installing and configuring SafeGuard for optimal protection across all your devices.",
      date: "November 18, 2022",
      author: "Tech Support Team",
      category: "Tutorials",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      id: 6,
      title: "Digital Wellness: Beyond Content Filtering",
      excerpt:
        "Strategies for promoting healthy digital habits and balanced screen time in addition to content filtering.",
      date: "October 30, 2022",
      author: "Emily Patel",
      category: "Digital Wellness",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 bg-muted">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Our Blog</h1>
          <p className="text-muted-foreground md:text-xl max-w-3xl mx-auto">
            Insights, tips, and resources for creating a safer online experience for your family and business.
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src="/placeholder.svg?height=600&width=800"
                width={800}
                height={600}
                alt="Featured blog post"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-2 text-sm">
                <span className="text-primary font-medium">Featured</span>
                <span>•</span>
                <span className="text-muted-foreground">Digital Wellness</span>
                <span>•</span>
                <span className="text-muted-foreground">April 10, 2023</span>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter">Creating a Balanced Digital Life for Your Family</h2>
              <p className="text-muted-foreground">
                In today's connected world, finding the right balance between technology use and other activities is
                crucial for family well-being. This comprehensive guide explores strategies for creating healthy digital
                habits while still enjoying the benefits of technology.
              </p>
              <div className="flex items-center space-x-4">
                <Image
                  src="/placeholder.svg?height=50&width=50"
                  width={50}
                  height={50}
                  alt="Author"
                  className="rounded-full"
                />
                <div>
                  <p className="font-medium">David Chen</p>
                  <p className="text-sm text-muted-foreground">Co-Founder & CEO</p>
                </div>
              </div>
              <Link href="/blog/creating-balanced-digital-life">
                <Button>Read Full Article</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-12">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <h2 className="text-3xl font-bold tracking-tighter mb-4 md:mb-0">Latest Articles</h2>
            <div className="w-full md:w-72">
              <div className="relative">
                <Input type="search" placeholder="Search articles..." className="pl-10" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <div key={post.id} className="flex flex-col h-full bg-background rounded-lg shadow overflow-hidden">
                <div className="relative h-48">
                  <Image src={post.image || "/placeholder.svg"} fill alt={post.title} className="object-cover" />
                </div>
                <div className="flex-1 p-6 space-y-4">
                  <div className="flex items-center space-x-2 text-sm">
                    <span className="text-primary font-medium">{post.category}</span>
                    <span>•</span>
                    <span className="text-muted-foreground">{post.date}</span>
                  </div>
                  <h3 className="text-xl font-bold">{post.title}</h3>
                  <p className="text-muted-foreground flex-1">{post.excerpt}</p>
                  <div className="flex items-center space-x-2">
                    <Image
                      src="/placeholder.svg?height=30&width=30"
                      width={30}
                      height={30}
                      alt={post.author}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">{post.author}</span>
                  </div>
                  <Link href={`/blog/${post.id}`}>
                    <Button variant="outline" className="w-full">
                      Read More
                    </Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button variant="outline">Load More Articles</Button>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-12 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-bold tracking-tighter">Subscribe to Our Newsletter</h2>
            <p className="text-muted-foreground">
              Stay updated with the latest articles, tips, and resources for online safety and digital wellness.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-xs text-muted-foreground">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </div>
      </section>
    </>
  )
}

