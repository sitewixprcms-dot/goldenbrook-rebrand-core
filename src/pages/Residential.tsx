import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Home, CheckCircle, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-extension.jpg";
import kitchenImage from "@/assets/residential-kitchen.jpg";

const services = [
  {
    title: "Home Extensions",
    description: "Expand your living space with a beautifully designed extension that seamlessly integrates with your existing home.",
    features: ["Kitchen extensions", "Side return extensions", "Rear extensions", "Wrap-around extensions"],
  },
  {
    title: "Loft Conversions",
    description: "Transform unused attic space into functional living areas, bedrooms, or home offices.",
    features: ["Dormer conversions", "Velux conversions", "Hip-to-gable", "L-shaped dormers"],
  },
  {
    title: "Renovations",
    description: "Complete interior renovations to modernise your home and create the space you've always wanted.",
    features: ["Kitchen refurbishments", "Bathroom renovations", "Open plan conversions", "Interior redesign"],
  },
  {
    title: "Garden Rooms",
    description: "Create additional living space in your garden, perfect for home offices, studios, or guest accommodation.",
    features: ["Home offices", "Garden studios", "Guest annexes", "Gym rooms"],
  },
];

const projectImages = [
  heroImage,
  kitchenImage,
];

const Residential = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 bg-primary">
        <div className="absolute inset-0 opacity-30">
          <img
            src={heroImage}
            alt="Residential Extension"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="gb-container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <Home className="w-8 h-8 text-secondary" />
              <span className="text-secondary font-medium">Our Approach</span>
            </div>
            <h1 className="gb-heading-xl text-primary-foreground mb-6">
              Residential
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Transform your home with expertly crafted extensions, renovations, and improvements. We bring your vision to life with quality craftsmanship and attention to detail.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      <section className="gb-section bg-card">
        <div className="gb-container">
          <div className="text-center mb-12">
            <div className="gb-gold-line mx-auto mb-6" />
            <h2 className="gb-heading-lg text-foreground mb-4">Our Residential Services</h2>
            <p className="gb-text-body max-w-2xl mx-auto">
              From small renovations to complete home transformations, we deliver quality on every project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-muted p-8 rounded-sm"
              >
                <h3 className="font-serif text-2xl font-medium text-foreground mb-4">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Projects */}
      <section className="gb-section bg-background">
        <div className="gb-container">
          <div className="text-center mb-12">
            <div className="gb-gold-line mx-auto mb-6" />
            <h2 className="gb-heading-lg text-foreground mb-4">Example Projects</h2>
            <p className="gb-text-body max-w-2xl mx-auto">
              See examples of our residential work across the Midlands.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projectImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group overflow-hidden rounded-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={image}
                    alt={`Residential project ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability */}
      <section className="gb-section bg-muted">
        <div className="gb-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Leaf className="w-10 h-10 text-secondary mb-4" />
              <h2 className="gb-heading-md text-foreground mb-6">
                Sustainable by design
              </h2>
              <p className="gb-text-body mb-6">
                Every residential project incorporates sustainable practices and energy-efficient solutions. We help you reduce your environmental impact while lowering long-term running costs.
              </p>
              <Button asChild variant="outline">
                <Link to="/sustainability">
                  Learn about our sustainability approach
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={kitchenImage}
                alt="Sustainable home design"
                className="rounded-sm w-full aspect-[4/3] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gb-section bg-primary">
        <div className="gb-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="gb-heading-lg text-primary-foreground mb-6">
              Ready to transform your home?
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8">
              Get in touch for a free consultation and let's discuss how we can bring your vision to life.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/contact">
                Get a free quote
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Residential;
