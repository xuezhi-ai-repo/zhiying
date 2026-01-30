import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Play } from 'lucide-react';

const templates = [
  { name: '浪漫亲吻', uses: '12.5万', image: '/images/template-1.jpg' },
  { name: '温暖拥抱', uses: '9.8万', image: '/images/template-2.jpg' },
  { name: '万物生花', uses: '15.2万', image: '/images/template-3.jpg' },
  { name: 'AI换装', uses: '8.6万', image: '/images/template-4.jpg' },
  { name: '时光倒流', uses: '6.3万', image: '/images/template-5.jpg' },
  { name: '梦幻变身', uses: '7.1万', image: '/images/template-6.jpg' },
  { name: '电影片头', uses: '5.4万', image: '/images/template-7.jpg' },
  { name: '魔法特效', uses: '4.9万', image: '/images/template-8.jpg' },
];

export default function TemplateLibrary() {
  return (
    <section id="templates" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-pink/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              爆款<span className="text-gradient">模板库</span>
            </h2>
            <p className="text-white/60 max-w-xl">
              尝试 智影AI 的爆款视频模板。亲吻、拥抱、万物生花、AI换装等趣味玩法，轻松制作爆款短视频
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-6 lg:mt-0"
          >
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/10 group"
            >
              浏览全部模板
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </motion.div>

        {/* Templates Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {templates.map((template, index) => (
            <motion.div
              key={template.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.08 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-xl overflow-hidden glass-strong">
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={template.image}
                    alt={template.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 rounded-full bg-gradient-brand flex items-center justify-center"
                    >
                      <Play className="w-5 h-5 text-white ml-1" />
                    </motion.div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-3 lg:p-4">
                  <h3 className="font-medium text-sm lg:text-base mb-1">{template.name}</h3>
                  <p className="text-white/50 text-xs">{template.uses}次使用</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
