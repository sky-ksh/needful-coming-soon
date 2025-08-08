import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, HelpCircle, ExternalLink, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import { blogPosts } from "@/data/blogPosts";
const FAQ = () => {
  const guides = [{
    title: "Passport Surrender Guide",
    description: "Complete guide for surrendering your Indian passport after obtaining foreign citizenship",
    type: "guide",
    href: "/faq/passport-surrender"
  }, {
    title: "OCI Guide",
    description: "Step-by-step guide for Overseas Citizen of India applications",
    type: "guide",
    href: "/guides/oci-guide"
  }, {
    title: "PAN Card Guide",
    description: "Easy instructions for PAN card applications and corrections",
    type: "guide",
    href: "/faq/pan-card-guide"
  }, {
    title: "NRI Taxes Guide",
    description: "Tax obligations and filing requirements for Non-Resident Indians",
    type: "guide",
    href: "/faq/nri-taxes"
  }];
  
  const faqs = [{
    title: "OCI Application",
    description: "Frequently asked questions about OCI process and requirements",
    type: "faq",
    href: "/faq/oci-applications"
  }, {
    title: "PAN Card",
    description: "Common questions and answers about PAN card services",
    type: "faq",
    href: "/faq/pan-card"
  }, {
    title: "NRI Banking",
    description: "Frequently asked questions about banking for NRIs",
    type: "faq",
    href: "/faq/nri-banking"
  }];

  const blogPostsPreview = blogPosts.slice(0, 3);
  return <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <header className="border-b bg-background/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="flex items-center gap-2 text-brand-purple hover:text-brand-purple/80" asChild>
              <Link to="/nri-solutions">
                <ArrowLeft className="w-4 h-4" />
                Back to NRI Solutions
              </Link>
            </Button>
            <Navigation variant="inline" />
          </div>
        </div>
      </header>

      <section className="py-16 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="animate-fade-in mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-brand-purple mb-6">
              Resources
            </h1>
            <p className="text-xl text-muted-foreground max-w-5xl">Find step-by-step guides, frequently asked questions, and helpful articles for NRIs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* DIY Guides Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <FileText className="w-8 h-8 md:w-10 md:h-10 text-brand-purple" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  DIY Guides
                </h2>
              </div>
              <div className="space-y-4">
                {guides.slice(0, 3).map(guide => (
                  <div key={guide.title} className="group">
                    <Link to={guide.href} className="block">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-purple transition-colors mb-2">
                        {guide.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {guide.description}
                      </p>
                    </Link>
                  </div>
                ))}
                <Link to="/guides" className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple/80 font-medium">
                  View all guides
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* FAQ Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <HelpCircle className="w-8 h-8 md:w-10 md:h-10 text-brand-purple" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  FAQ
                </h2>
              </div>
              <div className="space-y-4">
                {faqs.map(faq => (
                  <div key={faq.title} className="group">
                    <Link to={faq.href} className="block">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-purple transition-colors mb-2">
                        {faq.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {faq.description}
                      </p>
                    </Link>
                  </div>
                ))}
                <Link to="/faqs" className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple/80 font-medium">
                  View all FAQs
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Blog Column */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-brand-purple" />
                <h2 className="text-2xl md:text-3xl font-bold text-foreground">
                  Blog
                </h2>
              </div>
              <div className="space-y-4">
                {blogPostsPreview.map(post => (
                  <div key={post.title} className="group">
                    <Link to={post.href} className="block">
                      <h3 className="text-lg font-semibold text-foreground group-hover:text-brand-purple transition-colors mb-2">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {post.description}
                      </p>
                    </Link>
                  </div>
                ))}
                <Link to="/blog" className="inline-flex items-center gap-2 text-brand-purple hover:text-brand-purple/80 font-medium">
                  View all articles
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </div>
            </div>
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
export default FAQ;