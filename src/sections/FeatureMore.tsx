import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Button } from '@/components/ui/button';
import { ArrowRight, Frame, BookOpen, Type } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    icon: Frame,
    title: '首尾帧功能',
    description: '上传首帧和尾帧图片，智影AI自动填充流畅过渡，创造完美动画序列。让您的创意从开始到结束都保持一致性。',
    image: '/images/template-5.jpg',
    color: 'purple',
  },
  {
    icon: BookOpen,
    title: '漫画图片生成动画',
    description: '将漫画图片转化为角色动作流畅自然的动画视频，让您的二次元角色活起来。支持多种动漫风格和动作效果。',
    image: '/images/template-6.jpg',
    color: 'pink',
  },
  {
    icon: Type,
    title: '文生视频',
    description: '仅需文字描述，即可生成高质量视频内容。支持多种风格、场景和动作描述，让文字瞬间变为视觉盛宴。',
    image: '/images/template-7.jpg',
    color: 'blue',
  },
];

export default function FeatureMore() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray<HTMLElement>('.feature-card');
      
      cards.forEach((card) => {
        gsap.fromTo(card,
          { opacity: 0.3, scale: 0.9, rotateY: 10 },
          {
            opacity: 1,
            scale: 1,
            rotateY: 0,
            duration: 0.8,
            scrollTrigger: {
              trigger: card,
              start: 'top 80%',
              end: 'top 50%',
              scrub: 1,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-purple/5 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            更多<span className="text-gradient">强大功能</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            探索智影AI的完整功能套件，满足您的各种创作需求
          </p>
        </motion.div>

        {/* Features Grid */}
        <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="feature-card group relative"
            >
              <div className="relative rounded-2xl overflow-hidden glass-strong hover:bg-white/10 transition-all duration-500">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Icon Badge */}
                  <div className={`absolute top-4 left-4 w-12 h-12 rounded-xl flex items-center justify-center ${
                    feature.color === 'purple' ? 'bg-brand-purple/30' :
                    feature.color === 'pink' ? 'bg-brand-pink/30' :
                    'bg-brand-blue/30'
                  }`}>
                    <feature.icon className={`w-6 h-6 ${
                      feature.color === 'purple' ? 'text-brand-purple' :
                      feature.color === 'pink' ? 'text-brand-pink' :
                      'text-brand-blue'
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-white/60 text-sm mb-4 line-clamp-3">
                    {feature.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="p-0 h-auto text-white/70 hover:text-white group/btn"
                  >
                    立即体验
                    <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
