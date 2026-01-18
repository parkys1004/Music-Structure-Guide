import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { templates, blockSamples } from './data';
import { Template } from './types';

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const App: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSampleType, setActiveSampleType] = useState<string>('Intro');
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);

  const categories = [
    { id: 'all', label: '전체' },
    { id: 'kpop', label: 'K-Pop' },
    { id: 'trendy', label: '트렌디' },
    { id: 'emotional', label: '감성' },
    { id: 'fusion', label: '퓨전/장르' },
    { id: 'mood', label: '무드/테마' },
  ];

  const filteredTemplates = activeCategory === 'all' 
    ? templates 
    : templates.filter(t => t.cat === activeCategory);

  const blockTypes = Object.keys(blockSamples);

  return (
    <div className="min-h-screen text-slate-900 font-sans selection:bg-indigo-100 selection:text-indigo-900">
      {/* Background Decor */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
         <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-200 rounded-full blur-[100px] opacity-40 animate-pulse"></div>
         <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-200 rounded-full blur-[100px] opacity-40 animate-pulse delay-1000"></div>
      </div>

      <header className="text-center mb-16 relative">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient-x mb-4 tracking-tight drop-shadow-sm"
          style={{ backgroundSize: '200% auto' }}
        >
          🎵 Song Structure Guide
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-500 text-lg md:text-xl font-medium"
        >
          장르별 최적의 음악 구성을 탐색하고 <br className="md:hidden"/>상세 샘플 아이디어를 얻으세요.
        </motion.p>
      </header>

      {/* Tabs */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategory(cat.id)}
            className={`
              relative px-6 py-2.5 rounded-full font-bold text-sm md:text-base transition-all duration-300
              ${activeCategory === cat.id 
                ? 'text-white shadow-lg shadow-indigo-300/50 scale-105' 
                : 'bg-white/60 hover:bg-white text-slate-600 hover:text-indigo-600 shadow-sm border border-slate-200/50'
              }
            `}
          >
            {activeCategory === cat.id && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full -z-10"
              />
            )}
            <span className="relative z-10">{cat.label}</span>
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        key={activeCategory} // Reset animation on category change
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24"
      >
        {filteredTemplates.map((t) => (
          <motion.div
            key={t.id}
            variants={itemVariants}
            onClick={() => setSelectedTemplate(t)}
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group relative bg-white/70 backdrop-blur-xl border border-white/50 p-6 rounded-3xl shadow-lg hover:shadow-2xl hover:shadow-indigo-500/10 transition-all cursor-pointer overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-white shadow-inner flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 border border-indigo-100">
                <i className={`fa-solid ${t.icon} text-2xl`}></i>
              </div>
              <h3 className="text-xl font-bold mb-1 text-slate-800 group-hover:text-indigo-700 transition-colors">{t.title}</h3>
              <p className="text-indigo-500 text-sm font-bold mb-3 tracking-wide">{t.titleKo}</p>
              <p className="text-slate-500 text-sm leading-relaxed">{t.desc}</p>
            </div>
            
            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <i className="fa-solid fa-arrow-right text-indigo-400"></i>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Block Samples Section */}
      <section className="mt-20 border-t border-slate-200/60 pt-16 relative">
        <div className="text-center mb-12">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-block px-4 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-bold uppercase tracking-wider mb-2"
            >
              Inspiration
            </motion.div>
            <h2 className="text-3xl font-bold mb-4 text-slate-800">💡 Block Samples Explorer</h2>
            <p className="text-slate-500">곡의 각 섹션을 채울 구체적인 연출 아이디어를 확인하세요.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-2">
                {blockTypes.map(type => (
                    <button
                        key={type}
                        onClick={() => setActiveSampleType(type)}
                        className={`
                            w-full text-left px-5 py-4 rounded-2xl font-bold transition-all duration-200 relative overflow-hidden group
                            ${activeSampleType === type 
                                ? 'bg-gradient-to-r from-indigo-600 to-indigo-500 text-white shadow-lg shadow-indigo-200 transform scale-105' 
                                : 'bg-white hover:bg-indigo-50 text-slate-600 shadow-sm hover:shadow-md'
                            }
                        `}
                    >
                        <div className="flex justify-between items-center relative z-10">
                            <span>{type}</span>
                            {activeSampleType === type && <i className="fa-solid fa-chevron-right text-xs"></i>}
                        </div>
                    </button>
                ))}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-3 bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/50 min-h-[400px] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-50 rounded-full blur-[80px] -z-10"></div>
                
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeSampleType}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 text-indigo-900">
                             <span className="w-8 h-8 rounded-lg bg-indigo-100 flex items-center justify-center text-indigo-600 text-sm">
                                <i className="fa-solid fa-layer-group"></i>
                             </span>
                            {activeSampleType} Samples
                        </h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {blockSamples[activeSampleType].map((s, idx) => (
                                <motion.div 
                                    key={idx}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: idx * 0.1 }}
                                    whileHover={{ scale: 1.02, backgroundColor: "rgba(248, 250, 252, 1)" }}
                                    className="bg-white border border-slate-100 p-5 rounded-2xl shadow-sm hover:shadow-md hover:border-indigo-200 transition-all cursor-default group"
                                >
                                    <div className="flex items-start gap-3">
                                        <div className="mt-1 text-indigo-400 group-hover:text-yellow-400 transition-colors">
                                            <i className="fa-solid fa-lightbulb"></i>
                                        </div>
                                        <div>
                                            <span className="block font-bold text-slate-800 text-lg mb-1 group-hover:text-indigo-600 transition-colors">{s.name}</span>
                                            <span className="text-sm text-slate-500 font-medium">{s.desc}</span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedTemplate && (
            <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                onClick={() => setSelectedTemplate(null)}
            >
                <motion.div 
                    initial={{ scale: 0.9, y: 20, opacity: 0 }}
                    animate={{ scale: 1, y: 0, opacity: 1 }}
                    exit={{ scale: 0.9, y: 20, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                    className="bg-white rounded-[2rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-8 shadow-2xl relative overflow-hidden"
                >
                    {/* Modal Background Decor */}
                    <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-indigo-50 to-transparent pointer-events-none"></div>

                    <button 
                        onClick={() => setSelectedTemplate(null)}
                        className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center text-slate-500 hover:text-slate-700 transition-colors z-10"
                    >
                        <i className="fa-solid fa-xmark text-lg"></i>
                    </button>

                    <div className="relative z-0">
                        <div className="flex items-center gap-5 mb-8">
                            <motion.div 
                                layoutId={`icon-${selectedTemplate.id}`}
                                className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white shadow-lg shadow-indigo-200"
                            >
                                <i className={`fa-solid ${selectedTemplate.icon} text-3xl`}></i>
                            </motion.div>
                            <div>
                                <motion.h2 className="text-3xl font-extrabold text-slate-900">{selectedTemplate.title}</motion.h2>
                                <p className="text-indigo-600 font-bold text-lg">{selectedTemplate.titleKo}</p>
                            </div>
                        </div>

                        <div className="bg-indigo-50/50 p-6 rounded-2xl border border-indigo-100 mb-8">
                            <p className="text-slate-700 font-medium leading-relaxed">
                                <i className="fa-solid fa-quote-left text-indigo-300 mr-2"></i>
                                {selectedTemplate.desc}
                            </p>
                        </div>

                        <h4 className="font-bold text-slate-900 mb-6 text-xl flex items-center gap-2">
                            <i className="fa-solid fa-list-ol text-indigo-500"></i> Detailed Structure
                        </h4>

                        <div className="space-y-0 pl-2">
                            {selectedTemplate.steps.map((step, index) => (
                                <motion.div 
                                    key={index}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                    className="relative pl-8 pb-8 border-l-2 border-indigo-100 last:border-l-0 last:pb-0 group"
                                >
                                    <span className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-indigo-200 group-hover:border-indigo-500 transition-colors duration-300"></span>
                                    <div className="flex flex-col -mt-1.5">
                                        <span className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-1">Section {index + 1}</span>
                                        <p className="font-bold text-slate-800 text-lg group-hover:text-indigo-700 transition-colors">{step}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <div className="mt-12">
                            <button 
                                onClick={() => setSelectedTemplate(null)}
                                className="w-full py-4 border-2 border-slate-100 rounded-2xl font-bold text-slate-600 hover:bg-slate-50 hover:border-slate-200 transition-colors"
                            >
                                닫기
                            </button>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default App;
