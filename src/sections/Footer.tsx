import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const footerLinks = {
  features: {
    title: '功能',
    links: [
      { label: '参考生视频', href: '#' },
      { label: '图生视频', href: '#' },
      { label: '文生视频', href: '#' },
      { label: '首尾帧', href: '#' },
      { label: '漫画转动画', href: '#' },
    ],
  },
  support: {
    title: '支持',
    links: [
      { label: '帮助中心', href: '#' },
      { label: '教程', href: '#' },
      { label: 'API文档', href: '#' },
      { label: '联系我们', href: '#' },
    ],
  },
  company: {
    title: '公司',
    links: [
      { label: '关于我们', href: '#' },
      { label: '加入我们', href: '#' },
      { label: '新闻动态', href: '#' },
      { label: '合作伙伴', href: '#' },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Top Border */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 lg:gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-2 md:col-span-4 lg:col-span-2"
          >
            <a href="#" className="flex items-center gap-2 mb-4">
              <Sparkles className="w-8 h-8 text-brand-purple" />
              <span className="text-xl font-bold text-gradient">智影AI</span>
            </a>
            <p className="text-white/50 text-sm mb-6 max-w-xs">
              智影AI，让想象绽放。学智AI平台团队联合广东技术师范大学团队联合打造出品，为创作者提供无限可能。
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {['Bilibili', '小红书', '抖音'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:bg-white/10 transition-all"
                >
                  <span className="text-xs">{social[0]}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links */}
          {Object.entries(footerLinks).map(([key, section], sectionIndex) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + sectionIndex * 0.1 }}
            >
              <h3 className="font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/50 hover:text-white text-sm transition-colors inline-flex items-center group"
                    >
                      <span className="group-hover:translate-x-1 transition-transform">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              Copyright © 2025 智影AI®
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                服务协议
              </a>
              <a href="#" className="text-white/40 hover:text-white transition-colors">
                隐私政策
              </a>
              <span className="text-white/40">
                京ICP备xxxxxxxx号
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
