import { Card, CardContent } from "@/components/ui/card";
import { Shield, Zap, Palette } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Shield,
    title: "UNC Detection",
    description: "Advanced detection system to keep you secure and protected.",
    gradient: "from-blue-500 to-purple-500"
  },
  {
    icon: Zap,
    title: "Instant Injection",
    description: "Lightning-fast injection capabilities for seamless operation.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Palette,
    title: "Customizable UI",
    description: "Personalize your experience with our flexible interface options.",
    gradient: "from-pink-500 to-blue-500"
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 px-4 bg-[#2C2F33] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#7289DA]/10 to-transparent pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-[#7289DA] to-[#99AAB5] text-transparent bg-clip-text">
            Key Features
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <Card className="bg-[#23272A] border-[#99AAB5]/20 h-full overflow-hidden group relative">
                <div className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                <CardContent className="p-6 relative">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <feature.icon className="h-12 w-12 text-[#7289DA] mb-4" />
                  </motion.div>
                  <h3 className="text-xl font-semibold mb-2 bg-gradient-to-r from-[#7289DA] to-[#99AAB5] text-transparent bg-clip-text">
                    {feature.title}
                  </h3>
                  <p className="text-[#99AAB5]">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}