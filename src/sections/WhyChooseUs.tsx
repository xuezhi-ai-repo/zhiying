import { motion } from 'framer-motion';
import { Zap, Film, Infinity } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: '极速生成',
    description: '10秒生成视频——快速、轻松、高效。行业领先的推理速度，让创意零等待。',
    stat: '10s',
    statLabel: '生成时间',
    color: 'purple',
  },
  {
    icon: Film,
    title: '流畅动漫',
    description: '高品质动漫动画视频，角色动作自然流畅。专为二次元创作者优化的AI模型。',
    stat: '4K',
    statLabel: '输出画质',
    color: 'blue',
  },
  {
    icon: Infinity,
    title: '错峰无限',
    description: '错峰模式无限积分，无限次免费生成视频。创作不受限制，灵感随时释放。',
    stat: '∞',
    statLabel: '免费生成',
    color: 'pink',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-brand-purple/10 via-transparent to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-5xl font-bold mb-4">
            为什么选择 <span className="text-gradient">VisionFlow</span>？
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            智影AI实现他人所不能——全球数千万创作者信赖的选择
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, rotateY: -30 }}
              whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.15, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full rounded-2xl glass-strong p-8 hover:bg-white/10 transition-all duration-500 overflow-hidden">
                {/* Glow Effect */}
                <div className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-30 group-hover:opacity-50 transition-opacity ${
                  feature.color === 'purple' ? 'bg-brand-purple' :
                  feature.color === 'blue' ? 'bg-brand-blue' :
                  'bg-brand-pink'
                }`} />

                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    feature.color === 'purple' ? 'bg-brand-purple/20' :
                    feature.color === 'blue' ? 'bg-brand-blue/20' :
                    'bg-brand-pink/20'
                  }`}
                >
                  <feature.icon className={`w-8 h-8 ${
                    feature.color === 'purple' ? 'text-brand-purple' :
                    feature.color === 'blue' ? 'text-brand-blue' :
                    'text-brand-pink'
                  }`} />
                </motion.div>

                {/* Stat */}
                <div className="mb-4">
                  <span className={`text-4xl font-bold ${
                    feature.color === 'purple' ? 'text-brand-purple' :
                    feature.color === 'blue' ? 'text-brand-blue' :
                    'text-brand-pink'
                  }`}>
                    {feature.stat}
                  </span>
                  <span className="text-white/40 text-sm ml-2">{feature.statLabel}</span>
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-white/60 text-sm leading-relaxed">
                  {feature.description}
                </p>

                {/* Border Glow */}
                <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none ${
                  feature.color === 'purple' ? 'shadow-[inset_0_0_0_1px_rgba(124,58,237,0.5)]' :
                  feature.color === 'blue' ? 'shadow-[inset_0_0_0_1px_rgba(59,130,246,0.5)]' :
                  'shadow-[inset_0_0_0_1px_rgba(236,72,153,0.5)]'
                }`} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
