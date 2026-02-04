import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-extension.jpg";
import kitchenImage from "@/assets/residential-kitchen.jpg";
import commercialImage from "@/assets/hero-commercial.jpg";
import sustainabilityImage from "@/assets/hero-sustainability.jpg";

const blogPosts = [
  {
    id: 1,
    title: "5 Popular Home Extension Ideas for 2024",
    excerpt: "Discover the most sought-after home extension styles that add value and space to your property.",
    image: heroImage,
    category: "Residential",
    author: "Golden Brook Team",
    date: "January 15, 2024",
    readTime: "5 min read",
  },
  {
    id: 2,
    title: "How to Plan Your Kitchen Extension",
    excerpt: "A comprehensive guide to planning a kitchen extension that transforms your home's heart.",
    image: kitchenImage,
    category: "Extensions",
    author: "Golden Brook Team",
    date: "January 10, 2024",
    readTime: "7 min read",
  },
  {
    id: 3,
    title: "Commercial Fit-Out Trends for Modern Workspaces",
    excerpt: "Explore the latest trends in commercial office design that boost productivity and wellbeing.",
    image: commercialImage,
    category: "Commercial",
    author: "Golden Brook Team",
    date: "January 5, 2024",
    readTime: "6 min read",
  },
  {
    id: 4,
    title: "The Benefits of Sustainable Home Improvements",
    excerpt: "Learn how eco-friendly renovations can reduce bills and increase your property value.",
    image: sustainabilityImage,
    category: "Sustainability",
    author: "Golden Brook Team",
    date: "December 28, 2023",
    readTime: "4 min read",
  },
  {
    id: 5,
    title: "Loft Conversion: Everything You Need to Know",
    excerpt: "Your complete guide to loft conversions, from planning permission to design ideas.",
    image: kitchenImage,
    category: "Residential",
    author: "Golden Brook Team",
    date: "December 20, 2023",
    readTime: "8 min read",
  },
  {
    id: 6,
    title: "Choosing the Right Builder for Your Project",
    excerpt: "Essential tips for finding and selecting a trustworthy construction partner.",
    image: heroImage,
    category: "Advice",
    author: "Golden Brook Team",
    date: "December 15, 2023",
    readTime: "5 min read",
  },
];

const categories = ["All", "Residential", "Commercial", "Extensions", "Sustainability", "Advice"];

const Inspiration = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-32 bg-primary">
        <div className="gb-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="gb-gold-line mb-6" />
            <h1 className="gb-heading-xl text-primary-foreground mb-6">
              Inspiration
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Ideas, insights and expert advice to help you plan your next project. From home extensions to commercial fit-outs, discover inspiration for every space.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-card border-b border-border sticky top-20 z-40">
        <div className="gb-container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 text-sm font-medium rounded-sm transition-colors ${
                  category === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="gb-section bg-background">
        <div className="gb-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-sm">
              <img
                src={blogPosts[0].image}
                alt={blogPosts[0].title}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-sm mb-4">
                {blogPosts[0].category}
              </span>
              <h2 className="gb-heading-md text-foreground mb-4">
                {blogPosts[0].title}
              </h2>
              <p className="gb-text-body mb-6">
                {blogPosts[0].excerpt}
              </p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {blogPosts[0].author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {blogPosts[0].date}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {blogPosts[0].readTime}
                </span>
              </div>
              <Button variant="outline">
                Read article
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="gb-section bg-muted">
        <div className="gb-container">
          <div className="text-center mb-12">
            <h2 className="gb-heading-lg text-foreground mb-4">Latest Articles</h2>
            <p className="gb-text-body max-w-2xl mx-auto">
              Expert insights and practical advice for your next construction project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card rounded-sm overflow-hidden shadow-sm hover:shadow-lg transition-shadow group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-sm mb-3">
                    {post.category}
                  </span>
                  <h3 className="font-serif text-xl font-medium text-foreground mb-3 group-hover:text-secondary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {post.readTime}
                    </span>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load more articles
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="gb-section bg-primary">
        <div className="gb-container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="gb-heading-lg text-primary-foreground mb-6">
              Stay inspired
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Subscribe to our newsletter for the latest project ideas, industry insights, and expert tips delivered to your inbox.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-sm bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:outline-none focus:ring-2 focus:ring-secondary"
              />
              <Button variant="secondary">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gb-section bg-card">
        <div className="gb-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="gb-heading-lg text-foreground mb-6">
              Ready to start your project?
            </h2>
            <p className="gb-text-body mb-8">
              Get in touch to discuss your ideas and receive expert guidance on bringing your vision to life.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Contact us
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Inspiration;
