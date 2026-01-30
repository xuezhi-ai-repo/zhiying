import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: '闲人一坤',
    role: '动画导演',
    avatar: '/images/community-1.jpg',
    content: '智影AI在动画制作方面表现出色，特别是二维动画。它对动作的理解和处理特别合理，生成的动画效果很自然，不会出现那种机械、生硬的感觉。',
    rating: 5,
  },
  {
    name: 'AI创业者',
    role: '内容创作者',
    avatar: '/images/community-2.jpg',
    content: '生成速度特别快，几十秒就可以生成一条高质量视频。当时我想追求的是效率短平快，这个维度在效率上其实是能满足我的。二次元动画效果也能满足我的需求。',
    rating: 5,
  },
  {
    name: '王之海',
    role: '特效师',
    avatar: '/images/community-3.jpg',
    content: '很好的通过文生、图生视频完成部分大动作戏份的补充，丰富表情的补充，参考生视频的2-3种元素控制视频生成的一致性。',
    rating: 5,
  },
  {
    name: 'Mashiro',
    role: '独立创作者',
    avatar: '/images/community-4.jpg',
    content: '让我实现成为动画师的梦想！运作速度非常快，使用也很简单。智影AI的模型在动画方面比市场上大多数其他AI产品更为出色，能够让我实现梦想！',
    rating: 5,
  },
  {
    name: '陈刘芳',
    role: '概念设计师',
    avatar: '/images/reference-2.jpg',
    content: '动态幅度相对比较大，能够帮助我们生成多角度、丰富动作的角色参考。Vidu是继Sora发布后第一个同级别模型，因此申请了首批内测。',
    rating: 5,
  },
  {
    name: '柔数特效',
    role: '视频制作',
    avatar: '/images/template-3.jpg',
    content: '二次元人物动态有很好的流畅性，这个是当时很多AI平台不能控制的。智影AI的出现让我在人物的编辑上节省了不少时间，大大提高了工作效率。',
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-purple/10 rounded-full blur-[150px]" />
      </div>

      {/* Decorative Quote */}
      <div className="absolute top-20 left-10 opacity-5">
        <Quote className="w-40 h-40 text-white" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            用户<span className="text-gradient">声音</span>
          </h2>
          <p className="text-white/60">听听创作者们怎么说</p>
        </motion.div>

        {/* Testimonial Carousel */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <div className="glass-strong rounded-3xl p-8 lg:p-12">
                <div className="flex flex-col lg:flex-row items-center gap-8">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 lg:w-32 lg:h-32 rounded-2xl object-cover"
                      />
                      <div className="absolute -bottom-2 -right-2 w-10 h-10 rounded-full bg-gradient-brand flex items-center justify-center">
                        <Quote className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 text-center lg:text-left">
                    {/* Rating */}
                    <div className="flex justify-center lg:justify-start gap-1 mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="text-lg lg:text-xl text-white/80 leading-relaxed mb-6">
                      "{testimonials[currentIndex].content}"
                    </p>

                    {/* Author */}
                    <div>
                      <div className="font-semibold text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-white/50">{testimonials[currentIndex].role}</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-brand'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
