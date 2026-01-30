import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageCircle, Users } from 'lucide-react';

const communityImages = [
  '/images/community-1.jpg',
  '/images/community-2.jpg',
  '/images/community-3.jpg',
  '/images/community-4.jpg',
  '/images/reference-1.jpg',
  '/images/reference-2.jpg',
  '/images/template-1.jpg',
  '/images/template-2.jpg',
];

export default function Community() {
  const topRowImages = [...communityImages, ...communityImages];
  const bottomRowImages = [...communityImages.slice().reverse(), ...communityImages.slice().reverse()];

  return (
    <section id="community" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/5 via-transparent to-brand-pink/5" />

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
              加入 智影AI <span className="text-gradient">创意社区</span>
            </h2>
            <p className="text-white/60 max-w-xl">
              与全球创作者交流经验，获取灵感，展示您的作品
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-3 mt-6 lg:mt-0"
          >
            <Button
              variant="outline"
              className="border-white/20 hover:bg-white/10"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              加入微信群
            </Button>
            <Button
              className="bg-gradient-brand hover:opacity-90"
            >
              <Users className="w-4 h-4 mr-2" />
              加入Discord
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Infinite Scroll Gallery */}
      <div className="relative space-y-4 overflow-hidden">
        {/* Top Row - Scroll Left */}
        <div className="relative">
          <div className="flex gap-4 animate-scroll-left hover:[animation-play-state:paused]">
            {topRowImages.map((image, index) => (
              <motion.div
                key={`top-${index}`}
                className="flex-shrink-0 w-48 h-48 group"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden glass-strong">
                  <img
                    src={image}
                    alt={`Community work ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/80">@创作者</span>
                      <span className="text-xs text-white/60">1.2k</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Row - Scroll Right */}
        <div className="relative">
          <div className="flex gap-4 animate-scroll-right hover:[animation-play-state:paused]">
            {bottomRowImages.map((image, index) => (
              <motion.div
                key={`bottom-${index}`}
                className="flex-shrink-0 w-48 h-48 group"
              >
                <div className="relative w-full h-full rounded-xl overflow-hidden glass-strong">
                  <img
                    src={image}
                    alt={`Community work ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-white/80">@创作者</span>
                      <span className="text-xs text-white/60">856</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Fade Edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent pointer-events-none" />
      </div>
    </section>
  );
}
