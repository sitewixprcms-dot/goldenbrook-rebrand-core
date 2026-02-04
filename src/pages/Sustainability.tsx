import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Leaf, Sun, Droplets, Recycle, ThermometerSun, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import heroImage from "@/assets/hero-sustainability.jpg";

const initiatives = [
  {
    icon: Sun,
    title: "Solar Integration",
    description: "We design and install solar panel systems that reduce your energy bills and carbon footprint for decades to come.",
  },
  {
    icon: ThermometerSun,
    title: "Heat Pump Technology",
    description: "Air and ground source heat pumps provide efficient, low-carbon heating and cooling for modern properties.",
  },
  {
    icon: Droplets,
    title: "Rainwater Harvesting",
    description: "Capture and reuse rainwater for gardens and non-potable uses, reducing mains water consumption.",
  },
  {
    icon: Zap,
    title: "High-Efficiency Insulation",
    description: "Superior insulation materials that dramatically reduce heat loss and energy consumption.",
  },
  {
    icon: Recycle,
    title: "Sustainable Materials",
    description: "We source eco-friendly, recycled, and responsibly manufactured materials wherever possible.",
  },
  {
    icon: Leaf,
    title: "Green Building Standards",
    description: "Our projects meet or exceed current environmental building standards and regulations.",
  },
];

const Sustainability = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 bg-primary">
        <div className="absolute inset-0 opacity-30">
          <img
            src={heroImage}
            alt="Sustainable Building"
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
              <Leaf className="w-8 h-8 text-secondary" />
            </div>
            <h1 className="gb-heading-xl text-primary-foreground mb-6">
              Sustainability
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Building for the future. We believe sustainable construction is not just good for the planet—it's essential for creating homes and spaces that stand the test of time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Commitment */}
      <section className="gb-section bg-card">
        <div className="gb-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="gb-gold-line mb-6" />
              <h2 className="gb-heading-lg text-foreground mb-6">
                Our commitment to sustainability
              </h2>
              <p className="gb-text-body mb-6">
                At Golden Brook, sustainability isn't an afterthought—it's built into every project from the start. We understand that the choices we make today will impact generations to come.
              </p>
              <p className="gb-text-body mb-6">
                From material selection to energy systems, we integrate sustainable solutions that reduce environmental impact while delivering tangible benefits to our clients through lower running costs and improved comfort.
              </p>
              <p className="gb-text-body">
                Our approach combines proven technologies with innovative solutions, always prioritising quality and longevity over short-term savings.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={heroImage}
                alt="Sustainable home with solar panels"
                className="rounded-sm w-full aspect-[4/3] object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="gb-section bg-muted">
        <div className="gb-container">
          <div className="text-center mb-12">
            <div className="gb-gold-line mx-auto mb-6" />
            <h2 className="gb-heading-lg text-foreground mb-4">Sustainable Solutions</h2>
            <p className="gb-text-body max-w-2xl mx-auto">
              We offer a range of sustainable technologies and practices that can be incorporated into your project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-sm shadow-sm hover:shadow-lg transition-shadow"
              >
                <initiative.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground">
                  {initiative.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="gb-section bg-primary">
        <div className="gb-container">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="gb-heading-lg text-primary-foreground mb-6">
                The benefits of building sustainably
              </h2>
              <p className="text-lg text-primary-foreground/80 leading-relaxed">
                Investing in sustainable construction delivers benefits that extend far beyond environmental responsibility.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Lower Running Costs",
                  description: "Energy-efficient homes and buildings significantly reduce utility bills year after year.",
                },
                {
                  title: "Increased Property Value",
                  description: "Sustainable features are increasingly valued by buyers and can command premium prices.",
                },
                {
                  title: "Future-Proof Investment",
                  description: "Stay ahead of evolving regulations and rising energy costs with forward-thinking design.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <h3 className="font-serif text-xl font-medium text-primary-foreground mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-primary-foreground/70">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="gb-section bg-card">
        <div className="gb-container">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="gb-heading-lg text-foreground mb-6">
              Ready to build sustainably?
            </h2>
            <p className="gb-text-body mb-8">
              Contact us to discuss how we can incorporate sustainable solutions into your project.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg">
                <Link to="/contact">
                  Contact us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link to="/our-approach">View our services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Sustainability;
