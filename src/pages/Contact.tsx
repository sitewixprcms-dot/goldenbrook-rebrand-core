import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Layout } from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "Thank you for your enquiry. We'll be in touch shortly.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

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
              Contact Us
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Creating a new space can be a big step, and finding the right partner is crucial. Get in touch and we'll arrange a short call to introduce ourselves and discuss your project goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="gb-section bg-card">
        <div className="gb-container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="gb-heading-md text-foreground mb-8">
                Send us a message
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name *</Label>
                    <Input id="firstName" name="firstName" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name *</Label>
                    <Input id="lastName" name="lastName" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email address *</Label>
                  <Input id="email" name="email" type="email" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone number</Label>
                  <Input id="phone" name="phone" type="tel" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="projectType">Project type</Label>
                  <select
                    id="projectType"
                    name="projectType"
                    className="w-full h-10 rounded-sm border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <option value="">Select a project type</option>
                    <option value="residential-extension">Residential Extension</option>
                    <option value="residential-renovation">Residential Renovation</option>
                    <option value="loft-conversion">Loft Conversion</option>
                    <option value="garden-room">Garden Room</option>
                    <option value="commercial-fitout">Commercial Fit-Out</option>
                    <option value="commercial-refurb">Commercial Refurbishment</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Tell us about your project *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Please describe your project, including any specific requirements or questions you have."
                  />
                </div>

                <Button type="submit" size="lg" disabled={isSubmitting} className="w-full md:w-auto">
                  {isSubmitting ? "Sending..." : "Send message"}
                  <Send className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="gb-heading-md text-foreground mb-8">
                Get in touch
              </h2>

              <div className="space-y-8 mb-12">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-secondary/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                      Location
                    </h3>
                    <p className="text-muted-foreground">
                      The Midlands, United Kingdom
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-secondary/10 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                      Email
                    </h3>
                    <a
                      href="mailto:info@goldenbrook.co.uk"
                      className="text-muted-foreground hover:text-secondary transition-colors"
                    >
                      info@goldenbrook.co.uk
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-sm bg-secondary/10 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-serif text-lg font-medium text-foreground mb-2">
                      Phone
                    </h3>
                    <p className="text-muted-foreground">
                      Contact us for details
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-muted p-8 rounded-sm">
                <h3 className="font-serif text-xl font-medium text-foreground mb-4">
                  What happens next?
                </h3>
                <ol className="space-y-4">
                  {[
                    "We'll review your enquiry and get back to you within 24 hours",
                    "We'll arrange a convenient time for an initial call or meeting",
                    "We'll discuss your project in detail and provide tailored advice",
                    "If we're a good fit, we'll provide a detailed proposal",
                  ].map((step, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="font-serif text-secondary font-semibold">
                        {index + 1}.
                      </span>
                      <span className="text-muted-foreground">{step}</span>
                    </li>
                  ))}
                </ol>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
