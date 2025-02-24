import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Shield, Zap, Laptop, Palette, Terminal, Lock, Gift } from "lucide-react";

const features = [
  {
    icon: Code2,
    title: "Advanced Scripting",
    description: "Support for multiple scripting languages and frameworks",
  },
  {
    icon: Shield,
    title: "Anti-Detection System",
    description: "Sophisticated protection against unwanted detection",
  },
  {
    icon: Zap,
    title: "Fast Execution",
    description: "Lightning-fast script execution and injection",
  },
  {
    icon: Laptop,
    title: "Multi-Platform",
    description: "Compatible across different platforms and systems",
  },
  {
    icon: Palette,
    title: "Custom Interface",
    description: "Fully customizable UI with multiple themes",
  },
  {
    icon: Terminal,
    title: "Debug Console",
    description: "Advanced debugging tools and console features",
  },
  {
    icon: Lock,
    title: "Secure Updates",
    description: "Regular security updates and patches",
  },
  {
    icon: Gift,
    title: "Premium Scripts",
    description: "Access to exclusive premium scripts",
  },
];

export default function Download() {
  return (
    <section id="download" className="py-20 px-4 bg-[#2C2F33] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[#7289DA] rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute bottom-0 -right-4 w-72 h-72 bg-[#99AAB5] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
        </div>
      </div>

      <div className="container mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-[#7289DA] via-[#99AAB5] to-[#7289DA] text-transparent bg-clip-text bg-size-200 animate-gradient">
              Download QuantumV3
            </span>
          </h2>
          <p className="text-lg text-[#99AAB5] max-w-2xl mx-auto">
            Experience the power of advanced exploitation with our feature-rich executor. 
            Get access to premium scripts, debugging tools, and regular updates.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-[#23272A] border-[#99AAB5]/20 h-full group hover:bg-[#23272A]/80 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="h-8 w-8 mx-auto mb-4 text-[#7289DA] group-hover:text-[#99AAB5] transition-colors duration-300" />
                  </motion.div>
                  <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-[#7289DA] to-[#99AAB5] text-transparent bg-clip-text">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-[#99AAB5] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            asChild
            className="bg-gradient-to-r from-[#7289DA] to-[#99AAB5] hover:opacity-90 text-white px-12 py-6 text-lg transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <a
              href="https://dark42342.github.io/quantum-site/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2"
            >
              Download Now
              <Zap className="w-5 h-5" />
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
