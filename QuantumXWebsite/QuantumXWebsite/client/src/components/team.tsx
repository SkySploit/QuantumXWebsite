import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { motion } from "framer-motion";

const team = [
  { name: "chxyz", role: "Bot Creator, Website Developer and Owner" },
  { name: "maks26102011", role: "Head LUA Developer" },
  { name: "ch4nc3_1", role: "Quantum X President" },
  { name: "wy2x", role: "Owner of Vault Locker, Quantum X, and Hydro" },
  { name: "itsscarlbaby", role: "Quantum X Owner and Founder" },
  { name: "blackiger_40462", role: "Head of Lua Developer" },
  { name: "zlxnary", role: "Manager" },
  { name: "dark42342", role: "Owner of Quantum X" },
];

export default function Team() {
  return (
    <section id="team" className="py-20 px-4 relative overflow-hidden">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#7289DA]/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          <span className="bg-gradient-to-r from-[#7289DA] to-[#99AAB5] text-transparent bg-clip-text">
            Our Team
          </span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <Card className="bg-[#2C2F33] border-[#99AAB5]/20 h-full group hover:bg-[#2C2F33]/80 transition-colors duration-300">
                <CardContent className="p-6 text-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7289DA]/0 via-[#7289DA]/5 to-[#7289DA]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <Avatar className="h-20 w-20 mx-auto mb-4 ring-2 ring-[#7289DA]/20 group-hover:ring-[#7289DA]/40 transition-all duration-300">
                      <AvatarFallback className="bg-gradient-to-br from-[#7289DA] to-[#99AAB5] text-white">
                        {member.name.slice(0, 2).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </motion.div>

                  <h3 className="text-lg font-semibold mb-2 bg-gradient-to-r from-[#7289DA] to-[#99AAB5] text-transparent bg-clip-text">
                    {member.name}
                  </h3>
                  <p className="text-sm text-[#99AAB5] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {member.role}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}