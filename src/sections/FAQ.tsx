import { motion } from 'framer-motion';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: '什么是 智影AI？',
    answer: '智影AI 是下一代AI视频生成平台，由学智AI平台团队联合广东技术师范大学团队联合打造出品。可以将文本和图片转化为高质量视频。支持多种创作模式，包括文生视频、图生视频和参考生视频。专为独立创作者和团队打造，简化了动态视频、2D动画及多种艺术风格的制作流程。',
  },
  {
    question: '智影AI 的用途是什么？',
    answer: '智影AI 是一款强大的AI视频生成工具，以卓越的主体一致性和高速生成能力闻名，广泛应用于多个行业，包括社交媒体内容创作、专业视频制作和商业广告等。许多创作者使用智影AI生成病毒式传播的短视频，影视工作室利用它制作电影级动画，企业使用它优化营销视频。',
  },
  {
    question: '参考生视频和图生视频有什么区别？',
    answer: '图生视频允许用户从静态图片生成AI视频，让画面动起来。用户还可以自定义视频的首帧和尾帧，优化视频的流畅度。参考生视频允许用户上传多张参考图片，智影AI会根据提示词将多个视觉元素融合，生成一个无缝衔接的视频，确保视频中的主体一致性。',
  },
  {
    question: 'VisionFlow 是免费的吗？',
    answer: '所有用户可获得一定数量的免费积分，无需付费即可生成视频。我们还提供错峰模式无限积分，在指定时间段内可以无限次免费生成视频。如需更多功能，可以选择我们的订阅套餐。',
  },
  {
    question: 'VisionFlow 是否安全？',
    answer: '是的，VisionFlow完全安全可用。我们高度重视用户数据安全和隐私，确保所有上传的内容都保持机密。我们采用业界领先的加密技术保护用户数据，并严格遵守相关隐私法规。',
  },
  {
    question: '如果我对智影AI有更多问题，应该如何联系你们？',
    answer: '您可以通过以下方式联系我们：加入我们的官方微信群社区，与其他用户和团队直接交流，获取最新动态和支持。也可以访问我们的帮助中心获取答案和支持，或发送邮件至 support@zhiying.ai。',
  },
];

export default function FAQ() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-brand-blue/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-brand-purple/10 rounded-full blur-[120px]" />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            常见<span className="text-gradient">问答</span>
          </h2>
          <p className="text-white/60">
            您可以在这里找到关于 智影AI 的常见问题解答
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 + index * 0.08 }}
              >
                <AccordionItem
                  value={`item-${index}`}
                  className="glass rounded-xl border-none px-6 data-[state=open]:bg-white/10"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="text-white/90 font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-white/60 pb-5 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
