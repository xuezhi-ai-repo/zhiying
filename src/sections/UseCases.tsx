import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

const tabs = [
  { id: 'anime', label: '动漫创作', image: '/images/reference-2.jpg' },
  { id: 'marketing', label: '广告营销', image: '/images/template-4.jpg' },
  { id: 'entertainment', label: '互动娱乐', image: '/images/template-6.jpg' },
  { id: 'tourism', label: '文旅宣传', image: '/images/reference-1.jpg' },
  { id: 'film', label: '影视制作', image: '/images/template-7.jpg' },
];

const caseData: Record<string, { title: string; description: string; stats: { label: string; value: string }[] }> = {
  anime: {
    title: '动漫创作',
    description: '为动漫创作者提供强大的AI视频生成能力，支持角色一致性保持、流畅动作生成，让二次元角色栩栩如生。',
    stats: [
      { label: '合作创作者', value: '50万+' },
      { label: '生成视频', value: '1000万+' },
    ],
  },
  marketing: {
    title: '广告营销',
    description: '快速生成高质量广告视频，支持产品展示、品牌宣传等多种场景，大幅降低视频制作成本和时间。',
    stats: [
      { label: '服务企业', value: '10万+' },
      { label: '营销视频', value: '500万+' },
    ],
  },
  entertainment: {
    title: '互动娱乐',
    description: '为社交媒体创作者提供丰富的视频模板和特效，轻松制作病毒式传播的短视频内容。',
    stats: [
      { label: '日活用户', value: '100万+' },
      { label: '爆款视频', value: '200万+' },
    ],
  },
  tourism: {
    title: '文旅宣传',
    description: '将静态风景照片转化为动态视频，展示目的地魅力，吸引更多游客关注和到访。',
    stats: [
      { label: '合作景区', value: '5000+' },
      { label: '宣传视频', value: '50万+' },
    ],
  },
  film: {
    title: '影视制作',
    description: '辅助影视前期制作，快速生成概念视频、分镜预览，提高创作效率和沟通效果。',
    stats: [
      { label: '合作工作室', value: '2000+' },
      { label: '项目应用', value: '10万+' },
    ],
  },
};

export default function UseCases() {
  const [activeTab, setActiveTab] = useState('anime');

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-blue/5 to-transparent" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            智影AI <span className="text-gradient">场景案例</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            探索 智影AI 在各行业的创新应用
          </p>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'text-white'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {activeTab === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-brand rounded-full"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10">{tab.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid lg:grid-cols-2 gap-8 items-center"
          >
            {/* Image */}
            <div className="relative group">
              <div className="relative rounded-2xl overflow-hidden glass-strong">
                <img
                  src={tabs.find(t => t.id === activeTab)?.image}
                  alt={caseData[activeTab].title}
                  className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                    <Play className="w-6 h-6 text-white ml-1" />
                  </div>
                </div>
              </div>
              {/* Decorative */}
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-brand-purple/30 rounded-full blur-[40px]" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-brand-blue/30 rounded-full blur-[40px]" />
            </div>

            {/* Info */}
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                {caseData[activeTab].title}
              </h3>
              <p className="text-white/60 mb-8 leading-relaxed">
                {caseData[activeTab].description}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6">
                {caseData[activeTab].stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + index * 0.1 }}
                    className="p-4 rounded-xl glass"
                  >
                    <div className="text-2xl lg:text-3xl font-bold text-gradient mb-1">
                      {stat.value}
                    </div>
                    <div className="text-white/50 text-sm">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
