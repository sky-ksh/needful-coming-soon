import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, FileText, ExternalLink, Calendar, Clock, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
const Blog = () => {
  const blogPosts = [{
    title: "The Long Reign of VFS in Indian Paperwork: History, Lessons, and What’s Next",
    description: "An in-depth look at VFS Global's dominance in visa processing and its impact on travelers worldwide",
    href: "/blog/vfs-monopoly-history"
  }, {
    title: "What is GIFT City and how can NRIs take advantage of it?",
    description: "Understanding India's financial hub and the opportunities it presents for overseas Indians",
    href: "/blog/gift-city-nri-opportunities"
  }, {
    title: "You've Been Putting Off That OCI Application. When Is the Right Time?",
    description: "Strategic timing considerations for your Overseas Citizen of India application",
    href: "/blog/oci-application-timing"
  }, {
    title: "Why Everyone from Dubai to New Jersey Is Buying Property in Goa (and Why You Be Cautious)",
    description: "The global rush to Goa's real estate market and the risks you need to consider",
    href: "/blog/goa-property-investment-risks"
  }, {
    title: "Ahmedabad Is Quietly Becoming the GIFT City Feeder Town. Should You Bet on It?",
    description: "How Ahmedabad's proximity to GIFT City is reshaping its real estate and investment landscape",
    href: "/blog/ahmedabad-gift-city-investment"
  }, {
    title: "Bangalore's Startup Scene in 2025: Real Signals Amid the Noise",
    description: "Separating genuine opportunities from hype in India's Silicon Valley",
    href: "/blog/bangalore-startup-scene-2025"
  }, {
    title: "India's Tier 2 Cities Are Booming. Here's Where the Smart Money Is Going",
    description: "Investment opportunities in India's emerging urban centers beyond the metros",
    href: "/blog/tier-2-cities-investment-opportunities"
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