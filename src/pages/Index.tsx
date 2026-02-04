import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Shield, Users, Leaf, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-extension.jpg";
import residentialImage from "@/assets/residential-kitchen.jpg";
import commercialImage from "@/assets/hero-commercial.jpg";

const features = [
  {
    icon: Shield,
    title: "No Risk Finance Model",
    description: "Only pay once the value has been created",
  },
  {
    icon: Users,
    title: "End-to-End Service",
    description: "We advise and manage from start to finish",
  },
  {
    icon: Clock,
    title: "Experienced Team",
    description: "Expert project managers with meticulous attention to detail",
  },
  {
    icon: Leaf,
    title: "Sustainability as Standard",
    description: "Eco-friendly solutions built into every project",
  },
];

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Modern home extension"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />
        </div>
        
        <div className="gb-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full border-2 border-secondary flex items-center justify-center">
                <span className="text-secondary font-serif text-xl font-semibold">GB</span>
              </div>
            </div>
            <h1 className="gb-heading-xl text-primary-foreground mb-6">
              Create your dream space & love the journey
            </h1>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              Quality construction and development services across the Midlands. From home extensions to commercial fit-outs, we deliver excellence on every project.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild size="lg" variant="secondary" className="group">
                <Link to="/contact">
                  Speak to our team
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                <Link to="/our-approach">Our Approach</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="gb-section bg-card">
        <div className="gb-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="gb-gold-line mb-6" />
              <h2 className="gb-heading-lg text-foreground mb-6">
                Discover excellence
              </h2>
              <p className="gb-text-body mb-6">
                Golden Brook is a trusted development and construction company based in the Midlands, UK. We provide a financially secure property development service to help people create their dream spaces without risk.
              </p>
              <p className="gb-text-body mb-8">
                With sustainable designs and impeccable builds using quality materials, we make transforming your property an enjoyable, rewarding and stress-free experience.
              </p>
              <Button asChild variant="outline">
                <Link to="/about">Learn about us</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-2 gap-4"
            >
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="p-6 bg-muted rounded-sm hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="w-8 h-8 text-secondary mb-4" />
                  <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Service Panels - Residential & Commercial */}
      <section className="gb-section bg-background">
        <div className="gb-container">
          <div className="text-center mb-12">
            <div className="gb-gold-line mx-auto mb-6" />
            <h2 className="gb-heading-lg text-foreground mb-4">Our Services</h2>
            <p className="gb-text-body max-w-2xl mx-auto">
              Whether you're looking to extend your home or transform your commercial space, we deliver quality craftsmanship on every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative overflow-hidden rounded-sm gb-card-hover"
            >
              <Link to="/our-approach/residential">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={residentialImage}
                    alt="Residential extensions"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-2xl text-primary-foreground mb-2">
                    Residential
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    Extensions, renovations & home improvements
                  </p>
                  <span className="inline-flex items-center text-secondary font-medium group-hover:gap-3 transition-all">
                    Explore projects <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>

            {/* Commercial Panel */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="group relative overflow-hidden rounded-sm gb-card-hover"
            >
              <Link to="/our-approach/commercial">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={commercialImage}
                    alt="Commercial fit-outs"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <h3 className="font-serif text-2xl text-primary-foreground mb-2">
                    Commercial
                  </h3>
                  <p className="text-primary-foreground/80 mb-4">
                    Office fit-outs, retail spaces & refurbishments
                  </p>
                  <span className="inline-flex items-center text-secondary font-medium group-hover:gap-3 transition-all">
                    Explore projects <ArrowRight className="ml-2 w-4 h-4" />
                  </span>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sustainability Highlight */}
      <section className="gb-section bg-primary">
        <div className="gb-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Leaf className="w-12 h-12 text-secondary mb-6" />
              <h2 className="gb-heading-lg text-primary-foreground mb-6">
                Sustainability as standard
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-6 leading-relaxed">
                We believe in building for the future. Every project incorporates sustainable practices and energy-efficient solutions, helping you reduce your environmental impact while lowering running costs.
              </p>
              <ul className="space-y-3 mb-8">
                {["Solar panel integration", "Heat pump installations", "High-efficiency insulation", "Sustainable material sourcing"].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-primary-foreground/80">
                    <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button asChild variant="secondary">
                <Link to="/sustainability">Learn more about our approach</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -inset-4 bg-secondary/20 rounded-sm" />
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop"
                alt="Sustainable building"
                className="relative rounded-sm w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="gb-section bg-muted">
        <div className="gb-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="gb-gold-line mx-auto mb-8" />
            <blockquote className="font-serif text-2xl md:text-3xl text-foreground leading-relaxed mb-8">
              "The team gave us confidence from the start and continued to impress. They offered advice where we needed it, and made the whole process seamless. They impressed at every stage and we couldn't be happier with the results."
            </blockquote>
            <p className="text-muted-foreground">— Satisfied Client</p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="gb-section bg-card">
        <div className="gb-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="gb-heading-lg text-foreground mb-6">
              Discuss your project
            </h2>
            <p className="gb-text-body mb-8">
              Creating a new space can be a big step, and finding the right partner is crucial. Get in touch and we'll arrange a short call to introduce ourselves and discuss your project goals.
            </p>
            <Button asChild size="lg" className="bg-primary hover:bg-gb-navy-light">
              <Link to="/contact">
                Speak to our team
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
