import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, ExternalLink, Calendar, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
const Blog = () => {
  const blogPosts = [{
    title: "Understanding NRI Tax Obligations",
    description: "A comprehensive guide to tax compliance for Non-Resident Indians",
    href: "/blog/nri-tax-obligations",
    date: "March 15, 2024",
    readTime: "8 min read"
  }, {
    title: "OCI vs PIO: Which is Right for You?",
    description: "Compare the benefits and requirements of OCI and PIO status",
    href: "/blog/oci-vs-pio",
    date: "March 10, 2024",
    readTime: "6 min read"
  }, {
    title: "Banking as an NRI: Best Practices",
    description: "Tips for managing your finances across borders",
    href: "/blog/nri-banking-best-practices",
    date: "March 5, 2024",
    readTime: "10 min read"
  }, {
    title: "Navigating Property Investment in India",
    description: "Essential considerations for NRIs looking to invest in Indian real estate",
    href: "/blog/nri-property-investment",
    date: "February 28, 2024",
    readTime: "12 min read"
  }, {
    title: "Digital India: Online Services for NRIs",
    description: "How to leverage digital platforms for Indian paperwork from abroad",
    href: "/blog/digital-india-nri-services",
    date: "February 20, 2024",
    readTime: "7 min read"
  }, {
    title: "Common Mistakes in Indian Paperwork",
    description: "Avoid these pitfalls when dealing with Indian bureaucracy",
    href: "/blog/common-paperwork-mistakes",
    date: "February 15, 2024",
    readTime: "9 min read"
  }];
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-brand-purple hover:text-brand-purple/80" asChild>
              <Link to="/faq">
                <ArrowLeft className="w-4 h-4" />
                Back to Resources
              </Link>
            </Button>
            <Navigation variant="inline" />
          </div>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="animate-fade-in mb-12">
            <div className="flex items-center gap-4 mb-6">
              <BookOpen className="w-12 h-12 md:w-14 md:h-14 text-brand-purple" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-purple">
                Blog
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-3xl">Our latest insights, tips and updates for NRIs.</p>
          </div>

          <div className="grid gap-6">
            {blogPosts.map(post => <Card key={post.title} className="border-0 shadow-lg hover:shadow-xl transition-shadow bg-background/80 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-foreground hover:text-brand-purple transition-colors">
                        <Link to={post.href} className="flex items-center gap-2">
                          {post.title}
                          <ExternalLink className="w-4 h-4" />
                        </Link>
                      </CardTitle>
                      <CardDescription className="text-muted-foreground mt-2">
                        {post.description}
                      </CardDescription>
                      <div className="flex items-center gap-4 mt-3 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>)}
          </div>
        </div>
      </section>

      <footer className="border-t bg-muted/30 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground">
              Kindly doing the needful so you don't have to.
            </p>
            <Link to="/" className="text-sm text-muted-foreground/80 hover:text-muted-foreground transition-colors underline-offset-4 hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>;
};
export default Blog;