import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Home, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-extension.jpg";
import residentialImage from "@/assets/residential-kitchen.jpg";
import commercialImage from "@/assets/hero-commercial.jpg";

const processSteps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We discuss your vision, requirements, and budget to understand your project goals.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description: "Our team creates detailed designs and manages all planning applications.",
  },
  {
    number: "03",
    title: "Project Management",
    description: "Dedicated project managers oversee every aspect of the build process.",
  },
  {
    number: "04",
    title: "Quality Delivery",
    description: "We complete your project to the highest standards, on time and on budget.",
  },
];

const benefits = [
  "Only pay once value has been created",
  "Transparent pricing with no hidden costs",
  "Dedicated project manager throughout",
  "Regular progress updates and communication",
  "Quality materials and craftsmanship",
  "Full warranty on all completed work",
];

const OurApproach = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 bg-primary">
        <div className="absolute inset-0 opacity-20">
          <img
            src={heroImage}
            alt="Our Approach"
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
            <div className="gb-gold-line mb-6" />
            <h1 className="gb-heading-xl text-primary-foreground mb-6">
              Our Approach
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Discover the Golden Brook difference. We combine exceptional design, material selection, and build quality to create beautiful, sustainable spaces our clients love.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Types */}
      <section className="gb-section bg-card">
        <div className="gb-container">
          <div className="text-center mb-12">
            <div className="gb-gold-line mx-auto mb-6" />
            <h2 className="gb-heading-lg text-foreground mb-4">How We Work</h2>
            <p className="gb-text-body max-w-2xl mx-auto">
              We offer comprehensive construction and development services for both residential and commercial clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Residential Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-muted rounded-sm overflow-hidden group gb-card-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={residentialImage}
                  alt="Residential projects"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Home className="w-6 h-6 text-secondary" />
                  <h3 className="font-serif text-2xl font-medium text-foreground">
                    Residential
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  From kitchen extensions to complete home renovations, we help homeowners create their ideal living spaces. Our residential services include extensions, loft conversions, garden rooms, and interior refurbishments.
                </p>
                <Button asChild variant="outline">
                  <Link to="/our-approach/residential">
                    View residential services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>

            {/* Commercial Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-muted rounded-sm overflow-hidden group gb-card-hover"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={commercialImage}
                  alt="Commercial projects"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <Building2 className="w-6 h-6 text-secondary" />
                  <h3 className="font-serif text-2xl font-medium text-foreground">
                    Commercial
                  </h3>
                </div>
                <p className="text-muted-foreground mb-6">
                  We deliver professional commercial fit-outs and refurbishments for offices, retail spaces, and hospitality venues. Our team understands the unique requirements of commercial projects and delivers on time.
                </p>
                <Button asChild variant="outline">
                  <Link to="/our-approach/commercial">
                    View commercial services
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="gb-section bg-background">
        <div className="gb-container">
          <div className="text-center mb-16">
            <div className="gb-gold-line mx-auto mb-6" />
            <h2 className="gb-heading-lg text-foreground mb-4">Our Process</h2>
            <p className="gb-text-body max-w-2xl mx-auto">
              From first conversation to project completion, we guide you through every step.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative"
              >
                <span className="font-serif text-6xl font-bold text-secondary/20 block mb-4">
                  {step.number}
                </span>
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="gb-section bg-primary">
        <div className="gb-container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="gb-heading-lg text-primary-foreground mb-6">
                The Golden Brook Guarantee
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
                We stand behind every project with our commitment to quality, transparency, and client satisfaction.
              </p>
              <div className="grid gap-4">
                {benefits.map((benefit) => (
                  <div key={benefit} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-secondary shrink-0" />
                    <span className="text-primary-foreground/90">{benefit}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-primary-foreground/10 rounded-sm p-8"
            >
              <h3 className="font-serif text-2xl text-primary-foreground mb-4">
                No Risk Finance Model
              </h3>
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Unlike traditional builders, you only pay once value has been created. This means you never pay upfront for work that hasn't been completed, giving you complete financial protection throughout your project.
              </p>
              <Button asChild variant="secondary">
                <Link to="/contact">
                  Learn more
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </motion.div>
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
              Get in touch for a free consultation and discover how we can help transform your space.
            </p>
            <Button asChild size="lg">
              <Link to="/contact">
                Contact us today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default OurApproach;
