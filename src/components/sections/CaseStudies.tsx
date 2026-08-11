"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const studies = [
  {
    client: "Scénario E-Commerce Illustratif",
    enClient: "Illustrative E-Commerce Scenario",
    results: [
      { label: "Revenu", enLabel: "Revenue", before: "200k MAD/mo", after: "850k MAD/mo", color: "text-[#00f0ff]", bg: "bg-[#00f0ff]/20", fill: "bg-[#00f0ff]", percent: 100 },
      { label: "Coût Par Lead", enLabel: "Cost Per Lead", before: "145 MAD", after: "12 MAD", color: "text-[#b026ff]", bg: "bg-[#b026ff]/20", fill: "bg-[#b026ff]", percent: 85 },
      { label: "Taux de Conversion", enLabel: "Conversion Rate", before: "1.2%", after: "4.8%", color: "text-emerald-400", bg: "bg-emerald-400/20", fill: "bg-emerald-400", percent: 90 }
    ]
  },
  {
    client: "Scénario B2B Illustratif",
    enClient: "Illustrative B2B Scenario",
    results: [
      { label: "Leads Qualifiés", enLabel: "Qualified Leads", before: "10/mo", after: "150/mo", color: "text-[#00f0ff]", bg: "bg-[#00f0ff]/20", fill: "bg-[#00f0ff]", percent: 100 },
      { label: "Coût d'Acquisition Client", enLabel: "Client Acquisition Cost", before: "8000 MAD", after: "150 MAD", color: "text-[#b026ff]", bg: "bg-[#b026ff]/20", fill: "bg-[#b026ff]", percent: 95 },
      { label: "Taux de Conversion", enLabel: "Conversion Rate", before: "2.1%", after: "6.5%", color: "text-emerald-400", bg: "bg-emerald-400/20", fill: "bg-emerald-400", percent: 85 }
    ]
  }
];

export default function CaseStudies() {
  const { lang } = useLanguage();
  const isFr = lang === "FR";

  return (
    <section className="py-32 relative z-10 bg-[#02020a] overflow-hidden" id="case-studies">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#00f0ff]/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#b026ff]/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-24 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-white/70 text-sm font-medium mb-6"
          >
            <TrendingUp className="w-4 h-4 text-[#00f0ff]" />
            <span>{isFr ? "Scénarios de Croissance" : "Growth Scenarios"}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white via-white/90 to-white/60 mb-6 drop-shadow-lg"
          >
            {isFr ? "Scénarios de Croissance." : "Growth Scenarios."}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl"
          >
            {isFr 
              ? "Exemples de ce qu'un système d'acquisition bien conçu peut débloquer. Les résultats réels dépendent de l'entreprise, du marché, de l'offre, de la stratégie et de l'exécution."
              : "Examples of what a well-designed acquisition system can unlock. Actual results depend on the business, market, offer, strategy and execution."}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-12">
          {studies.map((study, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2, type: "spring", stiffness: 40 }}
              className="relative group"
            >
              {/* Card glowing border effect */}
              <div className="absolute -inset-[2px] bg-gradient-to-br from-[#00f0ff]/50 via-transparent to-[#b026ff]/50 rounded-[2rem] opacity-30 group-hover:opacity-100 blur-sm transition-all duration-700" />
              
              <div className="relative h-full bg-[#0a0a16] border border-white/10 rounded-[2rem] p-8 md:p-12 overflow-hidden backdrop-blur-xl">
                
                {/* Large Background Icon */}
                <div className="absolute -top-12 -right-12 text-[#00f0ff]/5 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-700">
                  <ArrowUpRight className="w-64 h-64" />
                </div>

                <div className="relative z-10">
                  <div className="flex justify-between items-center mb-12">
                    <h3 className="text-3xl md:text-4xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-colors duration-300">
                      {isFr ? study.client : study.enClient}
                    </h3>
                  </div>
                  
                  <div className="space-y-10">
                    {study.results.map((res, j) => (
                      <div key={j} className="relative">
                        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 gap-2">
                          <div className="text-white/70 font-medium text-lg uppercase tracking-wider">{isFr ? res.label : res.enLabel}</div>
                          <div className="flex items-center gap-4">
                            <span className="text-white/30 line-through text-lg decoration-red-500/50">{res.before}</span>
                            <div className="w-8 h-[2px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
                            <span className={`font-black text-3xl md:text-4xl drop-shadow-[0_0_15px_rgba(255,255,255,0.2)] ${res.color}`}>{res.after}</span>
                          </div>
                        </div>
                        {/* Animated progress bar */}
                        <div className={`w-full h-3 rounded-full overflow-hidden ${res.bg}`}>
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ width: `${res.percent}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 + (j * 0.2), ease: "easeOut" }}
                            className={`h-full ${res.fill} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent opacity-50" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
