import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Wand2, Play, Film, Sparkles, Palette, ShoppingBag, Loader2, Download, Share2 } from 'lucide-react';
import { gsap } from 'gsap';

const quickTags = [
  { label: '电影质感', icon: Film, prompt: '一位年轻女性在海边漫步，夕阳余晖洒在脸上，电影级画面质感' },
  { label: '动漫风格', icon: Sparkles, prompt: '可爱的动漫女孩在樱花树下微笑，花瓣飘落，日系动漫风格' },
  { label: '产品展示', icon: ShoppingBag, prompt: '一款精致的智能手表在黑色背景上旋转，专业产品摄影灯光' },
  { label: '广告创意', icon: Palette, prompt: '跑车在赛道上飞驰，速度感强烈，商业广告画面' },
];

const videoCards = [
  { image: '/images/hero-video-1.jpg', delay: 0.6 },
  { image: '/images/hero-video-2.jpg', delay: 0.75 },
  { image: '/images/hero-video-3.jpg', delay: 0.9 },
];

// Simulated video generation results
const generatedVideos = [
  '/images/reference-1.jpg',
  '/images/reference-2.jpg',
  '/images/reference-3.jpg',
  '/images/reference-4.jpg',
  '/images/reference-5.jpg',
  '/images/reference-6.jpg',
];

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [inputFocused, setInputFocused] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedVideo, setGeneratedVideo] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to('.video-card-1', {
        y: -15,
        duration: 4,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
      });
      gsap.to('.video-card-2', {
        y: -20,
        duration: 5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1,
      });
      gsap.to('.video-card-3', {
        y: -10,
        duration: 3.5,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 0.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleGenerate = async () => {
    if (!prompt.trim()) return;
    
    setIsGenerating(true);
    setShowResult(false);
    
    // Simulate generation process
    await new Promise(resolve => setTimeout(resolve, 3000));
    
    // Randomly select a generated video
    const randomVideo = generatedVideos[Math.floor(Math.random() * generatedVideos.length)];
    setGeneratedVideo(randomVideo);
    setIsGenerating(false);
    setShowResult(true);
  };

  const handleTagClick = (tagPrompt: string) => {
    setPrompt(tagPrompt);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-purple/30 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-blue/30 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-pink/20 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
            >
              <Sparkles className="w-4 h-4 text-brand-purple" />
              <span className="text-sm text-white/80">学智AI平台团队联合广东技术师范大学团队联合打造出品</span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6"
            >
              <span className="text-gradient">智影AI</span>
              <br />
              <span className="text-white">让想象绽放</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg text-white/60 mb-8 max-w-xl mx-auto lg:mx-0"
            >
              10秒将创意转化为电影级视频，支持文生视频、图生视频、参考生视频等多种创作模式
            </motion.p>

            {/* Large Creative Input Box */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="relative max-w-xl mx-auto lg:mx-0 mb-6"
            >
              <div
                className={`relative rounded-3xl transition-all duration-300 overflow-hidden ${
                  inputFocused ? 'shadow-glow-lg ring-2 ring-brand-purple/50' : 'ring-1 ring-white/10'
                }`}
              >
                <Textarea
                  placeholder="描述您想要的视频画面，例如：一位雀斑女孩望向镜头，缓缓绽放温暖微笑..."
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  className="w-full min-h-[120px] p-5 pr-36 bg-white/5 border-0 text-white placeholder:text-white/40 resize-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
                  onFocus={() => setInputFocused(true)}
                  onBlur={() => setInputFocused(false)}
                />
                <div className="absolute bottom-4 right-4 flex items-center gap-2">
                  <span className="text-xs text-white/30">
                    {prompt.length}/500
                  </span>
                  <Button
                    onClick={handleGenerate}
                    disabled={isGenerating || !prompt.trim()}
                    className="bg-gradient-brand hover:opacity-90 text-white rounded-xl px-6 py-5 disabled:opacity-50"
                  >
                    {isGenerating ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        生成中...
                      </>
                    ) : (
                      <>
                        <Wand2 className="w-4 h-4 mr-2" />
                        创作
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Quick Tags */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-2 justify-center lg:justify-start"
            >
              {quickTags.map((tag, index) => (
                <motion.button
                  key={tag.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  onClick={() => handleTagClick(tag.prompt)}
                  className="flex items-center gap-2 px-4 py-2 rounded-full glass hover:bg-white/10 transition-colors text-sm text-white/70 hover:text-white"
                >
                  <tag.icon className="w-4 h-4" />
                  {tag.label}
                </motion.button>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Video Display Area */}
          <div className="relative">
            <AnimatePresence mode="wait">
              {showResult && generatedVideo ? (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  className="relative"
                >
                  {/* Generated Video Result */}
                  <div className="rounded-3xl overflow-hidden glass-strong shadow-glow-lg">
                    <div className="relative aspect-video">
                      <img
                        src={generatedVideo}
                        alt="Generated Video"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      
                      {/* Video Controls */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-10 h-10 rounded-full bg-brand-purple/80 flex items-center justify-center">
                            <Play className="w-5 h-5 text-white ml-0.5" />
                          </div>
                          <div>
                            <p className="text-sm font-medium">AI生成视频</p>
                            <p className="text-xs text-white/60">刚刚生成</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20">
                            <Download className="w-4 h-4 mr-1" />
                            下载
                          </Button>
                          <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20">
                            <Share2 className="w-4 h-4 mr-1" />
                            分享
                          </Button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Prompt Display */}
                    <div className="p-4 border-t border-white/10">
                      <p className="text-sm text-white/60 line-clamp-2">
                        <span className="text-white/40">提示词：</span>
                        {prompt}
                      </p>
                    </div>
                  </div>
                  
                  {/* Success Badge */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="absolute -top-3 -right-3 px-3 py-1 rounded-full bg-green-500 text-white text-xs font-medium"
                  >
                    生成成功
                  </motion.div>
                </motion.div>
              ) : (
                <motion.div
                  key="cards"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative h-[500px] perspective-1000 hidden lg:block"
                >
                  {videoCards.map((card, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, z: -500, rotateY: index % 2 === 0 ? -30 : 30 }}
                      animate={{ opacity: 1, z: 0, rotateY: 0 }}
                      transition={{ duration: 1, delay: card.delay, ease: [0.16, 1, 0.3, 1] }}
                      className={`absolute video-card-${index + 1} ${
                        index === 0
                          ? 'top-0 left-0 w-64'
                          : index === 1
                          ? 'top-20 right-0 w-72 z-10'
                          : 'bottom-0 left-20 w-60'
                      }`}
                    >
                      <div className="group relative rounded-2xl overflow-hidden glass-strong hover:scale-105 transition-transform duration-500">
                        <img
                          src={card.image}
                          alt={`AI Video ${index + 1}`}
                          className="w-full h-auto object-cover"
                        />
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur flex items-center justify-center">
                            <Play className="w-5 h-5 text-white ml-1" />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            
            {/* Loading Overlay */}
            <AnimatePresence>
              {isGenerating && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <div className="glass-strong rounded-3xl p-8 text-center">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                      className="w-16 h-16 mx-auto mb-4 rounded-full border-4 border-brand-purple/30 border-t-brand-purple"
                    />
                    <p className="text-lg font-medium mb-2">AI正在创作中...</p>
                    <p className="text-sm text-white/60">预计需要10-15秒</p>
                    
                    {/* Progress Bar */}
                    <div className="mt-4 w-48 h-1 bg-white/10 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: '100%' }}
                        transition={{ duration: 3, ease: 'easeInOut' }}
                        className="h-full bg-gradient-brand"
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/30 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
