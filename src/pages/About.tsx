import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Target, Award, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import residentialImage from "@/assets/residential-kitchen.jpg";

const values = [
  {
    icon: Target,
    title: "Quality First",
    description: "We never compromise on materials, craftsmanship, or attention to detail.",
  },
  {
    icon: Heart,
    title: "Client Focused",
    description: "Your vision drives every decision. We listen, advise, and deliver.",
  },
  {
    icon: Users,
    title: "Expert Team",
    description: "Our experienced project managers bring decades of combined expertise.",
  },
  {
    icon: Award,
    title: "Trusted Partner",
    description: "Financial security and transparent processes you can rely on.",
  },
];

const About = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative py-32 bg-primary">
        <div className="gb-container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="gb-gold-line mb-6" />
            <h1 className="gb-heading-xl text-primary-foreground mb-6">
              About Us
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We care about the quality of your project as much as you do
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="gb-section bg-card">
        <div className="gb-container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="gb-heading-md text-foreground mb-6">
                A business driven by the need for a more trusted way to create stunning spaces
              </h2>
              <p className="gb-text-body mb-6">
                In 2022, Golden Brook Developments emerged to realise the vision of its philanthropic founder, Bob Harbey. Driven by a family passion for property innovation, quality and sustainability, this venture embarked on a quest for integrity in crafting spaces that resonate with purpose and precision.
              </p>
              <p className="gb-text-body mb-8">
                Our expertise and commitment allow us to break from accepted norms of uncontrolled timelines and excess expenditure to give you complete peace of mind.
              </p>
              <Button asChild>
                <Link to="/contact">Speak to our experts</Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src={residentialImage}
                alt="Our work"
                className="rounded-sm w-full aspect-[4/3] object-cover shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="gb-section bg-muted">
        <div className="gb-container">
          <div className="text-center mb-12">
            <div className="gb-gold-line mx-auto mb-6" />
            <h2 className="gb-heading-lg text-foreground mb-4">Our Values</h2>
            <p className="gb-text-body max-w-2xl mx-auto">
              Everything we do is guided by our commitment to excellence, integrity, and client satisfaction.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-card p-8 rounded-sm text-center shadow-sm hover:shadow-lg transition-shadow"
              >
                <value.icon className="w-10 h-10 text-secondary mx-auto mb-4" />
                <h3 className="font-serif text-xl font-medium text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Financial Security */}
      <section className="gb-section bg-primary">
        <div className="gb-container">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="gb-heading-lg text-primary-foreground mb-6">
                Complete financial security
              </h2>
              <p className="text-xl text-primary-foreground/80 leading-relaxed mb-8">
                With financial backing from the Harbey Family Trust and no reliance on external financial support from 3rd parties, we can ensure that client funds are protected and well-managed throughout each project.
              </p>
              <Button asChild variant="secondary">
                <Link to="/our-approach">
                  How it works
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
              Ready to discuss your project?
            </h2>
            <p className="gb-text-body mb-8">
              Get in touch to learn how we can help bring your vision to life.
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

export default About;
