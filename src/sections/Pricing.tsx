import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Crown } from 'lucide-react';
import QRCodeModal from '@/components/QRCodeModal';

const plans = [
  {
    name: '免费版',
    icon: Sparkles,
    price: '¥0',
    period: '/月',
    description: '适合个人用户体验',
    features: [
      '每月100积分',
      '480P视频生成',
      '基础模板使用',
      '错峰无限生成',
      '社区支持',
    ],
    cta: '免费开始',
    popular: false,
    color: 'gray',
    isContactSales: false,
  },
  {
    name: '专业版',
    icon: Zap,
    price: '¥99',
    period: '/月',
    description: '适合专业创作者',
    features: [
      '每月2000积分',
      '1080P高清视频',
      '全部模板使用',
      '优先生成队列',
      '参考生视频功能',
      '首尾帧功能',
      '专属客服支持',
    ],
    cta: '立即订阅',
    popular: true,
    color: 'purple',
    isContactSales: false,
  },
  {
    name: '企业版',
    icon: Crown,
    price: '¥1999',
    period: '/月',
    description: '适合团队和企业',
    features: [
      '无限积分',
      '4K超清视频',
      '全部高级功能',
      'API接口访问',
      '团队协作空间',
      '定制化服务',
      '专属客户经理',
      'SLA保障',
    ],
    cta: '联系销售',
    popular: false,
    color: 'blue',
    isContactSales: true,
  },
];

export default function Pricing() {
  const [isQRModalOpen, setIsQRModalOpen] = useState(false);

  return (
    <section id="pricing" className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            订阅<span className="text-gradient">套餐</span>
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto">
            选择适合您的套餐，开启AI视频创作之旅
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className={`relative group ${plan.popular ? 'md:-mt-4 md:mb-4' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <div className="bg-gradient-brand text-white text-xs font-medium px-4 py-1.5 rounded-full">
                    最受欢迎
                  </div>
                </div>
              )}

              <div
                className={`relative h-full rounded-2xl p-6 lg:p-8 transition-all duration-500 ${
                  plan.popular
                    ? 'glass-strong bg-white/10 shadow-glow-lg'
                    : 'glass hover:bg-white/5'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    plan.color === 'purple'
                      ? 'bg-brand-purple/20'
                      : plan.color === 'blue'
                      ? 'bg-brand-blue/20'
                      : 'bg-white/10'
                  }`}
                >
                  <plan.icon
                    className={`w-6 h-6 ${
                      plan.color === 'purple'
                        ? 'text-brand-purple'
                        : plan.color === 'blue'
                        ? 'text-brand-blue'
                        : 'text-white/60'
                    }`}
                  />
                </div>

                {/* Plan Name */}
                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                <p className="text-white/50 text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="flex items-baseline mb-8">
                  <span className="text-4xl lg:text-5xl font-bold">{plan.price}</span>
                  <span className="text-white/50 ml-1">{plan.period}</span>
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3">
                      <div
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          plan.color === 'purple'
                            ? 'bg-brand-purple/20'
                            : plan.color === 'blue'
                            ? 'bg-brand-blue/20'
                            : 'bg-white/10'
                        }`}
                      >
                        <Check
                          className={`w-3 h-3 ${
                            plan.color === 'purple'
                              ? 'text-brand-purple'
                              : plan.color === 'blue'
                              ? 'text-brand-blue'
                              : 'text-white/60'
                          }`}
                        />
                      </div>
                      <span className="text-white/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  onClick={() => {
                    if (plan.isContactSales) {
                      setIsQRModalOpen(true);
                    }
                  }}
                  className={`w-full ${
                    plan.popular
                      ? 'bg-gradient-brand hover:opacity-90 text-white'
                      : plan.isContactSales
                      ? 'bg-brand-blue/20 hover:bg-brand-blue/30 text-brand-blue border border-brand-blue/50'
                      : 'bg-white/10 hover:bg-white/20 text-white'
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-white/40 text-sm mt-12"
        >
          所有套餐均支持随时升级或降级，企业版可定制专属方案
        </motion.p>
      </div>

      {/* QR Code Modal */}
      <QRCodeModal isOpen={isQRModalOpen} onClose={() => setIsQRModalOpen(false)} />
    </section>
  );
}
