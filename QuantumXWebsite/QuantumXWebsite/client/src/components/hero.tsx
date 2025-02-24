import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-[#23272A]">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[#7289DA] rounded-full mix-blend-multiply filter blur-xl animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[#99AAB5] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#7289DA] rounded-full mix-blend-multiply filter blur-xl animate-blob animation-delay-4000" />
        </div>
      </div>

      <div className="container mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <motion.div
            className="inline-block"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 relative">
              <span className="bg-gradient-to-r from-[#7289DA] via-[#99AAB5] to-[#7289DA] text-transparent bg-clip-text bg-size-200 animate-gradient">
                QuantumV3
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-[#7289DA] to-[#99AAB5] rounded-lg opacity-20 blur-lg group-hover:opacity-30 transition duration-1000"></div>
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-lg md:text-xl text-[#99AAB5] mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Experience the next generation of exploit development and scripting tools with our advanced features and intuitive interface.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button
              asChild
              className="bg-gradient-to-r from-[#7289DA] to-[#99AAB5] hover:opacity-90 text-white px-8 py-6 text-lg transform hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              <a
                href="https://dsc.gg/getquantumx"
                target="_blank"
                rel="noopener noreferrer"
              >
                Join Our Discord
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}