import { useMemo, useState } from 'react';
import {
  ArrowRight,
  Bell,
  Clock,
  Loader2,
  Mic,
  Plus,
  RotateCw,
  Sliders,
  Sparkles,
  Type,
  User,
  Video,
  Volume2,
  Wand2,
  ZoomIn,
  Image as ImageIcon,
} from 'lucide-react';

const modelOptions = ['v1.0 Standard', 'v1.5 Pro', 'Turbo'] as const;
const styleOptions = ['通用', '3D动画', '日系动漫', '写实电影', '像素风', '油画', '黏土动画', '科幻'] as const;
const aspectRatios = ['16:9', '9:16', '1:1', '2.35:1'] as const;
const durations = ['4s', '8s'] as const;
const resolutions = ['1080P', '4K'] as const;

const historyCards = [1, 2, 3];

export default function CreateCenter() {
  const [activeTab, setActiveTab] = useState<'text' | 'image'>('text');
  const [modelType, setModelType] = useState<(typeof modelOptions)[number]>('v1.5 Pro');
  const [style, setStyle] = useState<(typeof styleOptions)[number]>('通用');
  const [aspectRatio, setAspectRatio] = useState<(typeof aspectRatios)[number]>('16:9');
  const [duration, setDuration] = useState<(typeof durations)[number]>('4s');
  const [resolution, setResolution] = useState<(typeof resolutions)[number]>('1080P');
  const [soundEnabled, setSoundEnabled] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [isEnhancing, setIsEnhancing] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);

  const promptPlaceholder = useMemo(() => {
    return activeTab === 'text'
      ? '描述你想要生成的画面... 例如：电影镜头，雨中的东京街头，慢动作特写'
      : '描述要让图片动起来的效果...';
  }, [activeTab]);

  const handleEnhance = () => {
    if (isEnhancing) return;
    setIsEnhancing(true);
    const suggestions = [
      '电影镜头，雨中的东京街头，慢动作特写，霓虹灯在水洼中的倒影闪烁，未来主义风格的雨衣人物背影',
      '一只巨大的发光鲸鱼在赛博朋克城市的上空游动，霓虹灯光映照在它透明的皮肤上，4K电影质感',
      '微观世界的水滴，内部有完整的生态系统，阳光折射出彩虹，昆虫在其中游动',
    ];
    setTimeout(() => {
      setPrompt((prev) => (prev ? `${prev}，镜头缓缓拉远，光影层次丰富，电影级质感` : suggestions[0]));
      setIsEnhancing(false);
    }, 900);
  };

  const handleGenerate = () => {
    if (isGenerating) return;
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <div className="sticky top-0 z-30 border-b border-white/5 bg-[#050505]/80 backdrop-blur-xl">
        <div className="flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <h2 className="text-lg font-bold text-white">创作中心</h2>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 rounded-full border border-white/5 bg-white/5 px-4 py-1.5 transition-all hover:bg-white/10">
              <div className="h-2 w-2 rounded-full bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.6)]" />
              <span className="text-xs text-zinc-300">
                积分: <span className="font-mono font-bold text-white">1,250</span>
              </span>
              <Plus className="h-3 w-3 text-zinc-500" />
            </div>
            <div className="relative">
              <Bell className="h-5 w-5 text-zinc-500" />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full border border-black bg-red-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-8">
        <div className="mb-8 flex flex-col items-center">
          <h1 className="mb-3 text-center text-4xl font-extrabold tracking-tight text-white md:text-5xl">
            用 AI 导演你的 <span className="text-gradient">视觉奇迹</span>
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-2 rounded-full border border-white/5 bg-zinc-900/80 p-1">
            {modelOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setModelType(option)}
                className={`rounded-full px-4 py-1 text-xs font-medium transition-all ${
                  modelType === option ? 'bg-zinc-700 text-white shadow-sm' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                {option}
                {option.includes('Pro') && (
                  <span className="ml-1 rounded bg-indigo-500 px-1 text-[9px] text-white">HOT</span>
                )}
              </button>
            ))}
          </div>
        </div>

        <div className="group relative mx-auto max-w-4xl rounded-3xl border border-white/10 bg-[#101012] p-1.5 shadow-2xl">
          <div className="flex items-center justify-between px-4 py-2">
            <div className="flex gap-1 rounded-xl border border-white/5 bg-black/40 p-1">
              <button
                type="button"
                onClick={() => setActiveTab('text')}
                className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                  activeTab === 'text' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <Type className="h-3.5 w-3.5" /> 文生视频
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('image')}
                className={`flex items-center gap-2 rounded-lg px-4 py-1.5 text-xs font-medium transition-all ${
                  activeTab === 'image' ? 'bg-zinc-800 text-white shadow' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                <ImageIcon className="h-3.5 w-3.5" /> 图生视频
              </button>
            </div>
            <button
              type="button"
              onClick={() => setSoundEnabled((prev) => !prev)}
              className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors ${
                soundEnabled
                  ? 'border-indigo-500/30 bg-indigo-500/10 text-indigo-400'
                  : 'border-white/5 bg-transparent text-zinc-500 hover:text-zinc-300'
              }`}
            >
              {soundEnabled ? <Volume2 className="h-3.5 w-3.5" /> : <Mic className="h-3.5 w-3.5" />}
              AI音效 {soundEnabled ? 'On' : 'Off'}
            </button>
          </div>

          <div className="flex flex-col rounded-2xl border border-white/5 bg-[#18181b]">
            {activeTab === 'image' && (
              <div className="grid grid-cols-1 gap-4 p-4 pb-0 md:grid-cols-3">
                {['首帧参考', '角色参考', '尾帧控制'].map((label, index) => (
                  <div
                    key={label}
                    className="relative flex h-32 flex-col items-center justify-center rounded-xl border border-dashed border-zinc-700 bg-zinc-900/30 text-zinc-500 transition-colors hover:border-indigo-500/50 hover:bg-zinc-800/50"
                  >
                    <div className="absolute left-2 top-2 rounded bg-black/60 px-2 py-0.5 text-[10px] text-white">
                      {label}
                    </div>
                    {index === 0 && <Sparkles className="mb-1 h-5 w-5 text-zinc-400" />}
                    {index === 1 && <User className="mb-1 h-5 w-5 text-zinc-400" />}
                    {index === 2 && <ArrowRight className="mb-1 h-5 w-5 text-zinc-400" />}
                    <span className="text-[10px] text-zinc-600">点击上传</span>
                  </div>
                ))}
              </div>
            )}

            <textarea
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              className={`min-h-[160px] w-full resize-none bg-transparent px-5 py-4 text-lg font-light leading-relaxed text-white placeholder-zinc-600 outline-none ${
                activeTab === 'image' ? 'min-h-[100px]' : ''
              }`}
              placeholder={promptPlaceholder}
            />

            <div className="flex gap-2 overflow-x-auto px-5 pb-2">
              {styleOptions.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setStyle(item)}
                  className={`whitespace-nowrap rounded-full border px-2.5 py-1 text-[10px] transition-colors ${
                    style === item
                      ? 'border-white bg-white text-black'
                      : 'border-zinc-800 bg-transparent text-zinc-500 hover:border-zinc-600'
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-4 rounded-b-2xl border-t border-white/5 bg-[#141417] p-3">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setShowSettings((prev) => !prev)}
                  className={`flex items-center gap-2 rounded-lg p-2 text-xs font-medium transition-colors ${
                    showSettings ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:bg-zinc-800/50 hover:text-white'
                  }`}
                >
                  <Sliders className="h-4 w-4" /> 参数
                </button>
                <div className="mx-1 h-4 w-px bg-white/10" />
                <div className="flex gap-2 text-xs text-zinc-500">
                  <span className="rounded border border-white/5 bg-zinc-900 px-2 py-1">{aspectRatio}</span>
                  <span className="rounded border border-white/5 bg-zinc-900 px-2 py-1">{duration}</span>
                  <span className="rounded border border-indigo-500/20 bg-zinc-900 px-2 py-1 text-indigo-400">
                    {resolution}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={handleEnhance}
                  disabled={isEnhancing}
                  className="flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium text-indigo-400 transition-colors hover:bg-indigo-500/10 disabled:opacity-50"
                >
                  {isEnhancing ? (
                    <Loader2 className="h-3.5 w-3.5 animate-spin" />
                  ) : (
                    <Wand2 className="h-3.5 w-3.5" />
                  )}
                  {prompt ? 'AI 润色' : '灵感'}
                </button>
                <button
                  type="button"
                  onClick={handleGenerate}
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-2 text-sm font-bold text-white shadow-[0_0_20px_rgba(79,70,229,0.3)] transition-all active:scale-95"
                >
                  {isGenerating ? (
                    <Loader2 className="h-4 w-4 animate-spin" />
                  ) : (
                    <Sparkles className="h-4 w-4 fill-white" />
                  )}
                  立即生成
                </button>
              </div>
            </div>
          </div>

          {showSettings && (
            <div className="mt-2 rounded-xl border border-white/10 bg-[#18181b] p-5">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                      画幅比例
                    </label>
                    <div className="grid grid-cols-4 gap-2">
                      {aspectRatios.map((ratio) => (
                        <button
                          key={ratio}
                          type="button"
                          onClick={() => setAspectRatio(ratio)}
                          className={`flex flex-col items-center justify-center gap-1 rounded-lg border py-2 text-[9px] font-medium transition-all ${
                            aspectRatio === ratio
                              ? 'border-indigo-500 bg-zinc-800 text-indigo-400'
                              : 'border-zinc-800 text-zinc-500 hover:border-zinc-700 hover:text-zinc-400'
                          }`}
                        >
                          <div className="h-3 w-5 rounded-[1px] border border-current" />
                          {ratio}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div>
                    <label className="mb-2 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                      负向提示词
                    </label>
                    <input
                      type="text"
                      placeholder="例如：模糊，变形，低画质，水印..."
                      className="w-full rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-2 text-xs text-white placeholder-zinc-600 focus:border-zinc-600 focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-zinc-500">生成规格</label>
                  <div className="space-y-4">
                    <div>
                      <span className="mb-1 block text-xs text-zinc-400">时长</span>
                      <div className="flex rounded-lg border border-zinc-800 bg-zinc-900 p-1">
                        {durations.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setDuration(item)}
                            className={`flex-1 rounded-md py-1.5 text-xs font-medium transition-all ${
                              duration === item ? 'bg-zinc-700 text-white shadow' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            {item}
                            {item === '8s' && <span className="ml-1 text-[9px] text-amber-500">PRO</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <span className="mb-1 block text-xs text-zinc-400">分辨率</span>
                      <div className="flex rounded-lg border border-zinc-800 bg-zinc-900 p-1">
                        {resolutions.map((item) => (
                          <button
                            key={item}
                            type="button"
                            onClick={() => setResolution(item)}
                            className={`flex-1 rounded-md py-1.5 text-xs font-medium transition-all ${
                              resolution === item ? 'bg-zinc-700 text-white shadow' : 'text-zinc-500 hover:text-zinc-300'
                            }`}
                          >
                            {item}
                            {item === '4K' && <span className="ml-1 text-[9px] text-amber-500">PRO</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <label className="mb-3 block text-xs font-bold uppercase tracking-wider text-zinc-500">
                    AI 运镜控制
                  </label>
                  <div className="flex flex-col items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-900/50 p-4">
                    <div className="grid w-full grid-cols-3 gap-2">
                      <button className="flex aspect-square items-center justify-center rounded bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white">
                        <RotateCw className="h-4 w-4 -rotate-45" />
                      </button>
                      <button className="flex aspect-square items-center justify-center rounded bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white">
                        <ArrowRight className="h-4 w-4 -rotate-90" />
                      </button>
                      <button className="flex aspect-square items-center justify-center rounded bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white">
                        <RotateCw className="h-4 w-4 rotate-45" />
                      </button>
                      <button className="flex aspect-square items-center justify-center rounded bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white">
                        <ArrowRight className="h-4 w-4 rotate-180" />
                      </button>
                      <div className="flex aspect-square items-center justify-center rounded border border-indigo-500/50 bg-indigo-500/20 text-indigo-400">
                        <Video className="h-4 w-4" />
                      </div>
                      <button className="flex aspect-square items-center justify-center rounded bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white">
                        <ArrowRight className="h-4 w-4" />
                      </button>
                      <button className="flex aspect-square items-center justify-center rounded bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white">
                        <ZoomIn className="h-4 w-4" />
                      </button>
                      <button className="flex aspect-square items-center justify-center rounded bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white">
                        <ArrowRight className="h-4 w-4 rotate-90" />
                      </button>
                      <button className="flex aspect-square items-center justify-center rounded bg-zinc-800 text-zinc-400 transition-colors hover:bg-zinc-700 hover:text-white">
                        <ZoomIn className="h-4 w-4 scale-75" />
                      </button>
                    </div>
                    <div className="text-center text-[10px] text-zinc-500">点击方向键控制镜头移动</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="flex items-center gap-2 font-bold text-white">
              <Clock className="h-4 w-4 text-zinc-500" /> 生成队列
            </h3>
            <button className="text-xs text-zinc-500 hover:text-white">管理全部</button>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="relative flex aspect-video flex-col items-center justify-center gap-2 overflow-hidden rounded-xl border border-indigo-500/30 bg-zinc-900/50">
              <div className="absolute left-0 top-0 h-1 w-full animate-[loading_2s_ease-in-out_infinite] bg-indigo-500" />
              <Loader2 className="h-6 w-6 animate-spin text-indigo-400" />
              <span className="text-xs font-medium text-indigo-300">生成中 45%...</span>
            </div>
            {historyCards.map((item) => (
              <div
                key={item}
                className="group relative flex aspect-video items-center justify-center rounded-xl border border-white/5 bg-gradient-to-br from-purple-900/30 to-indigo-900/30 text-zinc-500 transition-colors hover:border-zinc-700"
              >
                <span className="text-xs">历史记录 #{item}</span>
                <div className="absolute inset-x-0 bottom-0 flex translate-y-full items-center justify-around bg-black/80 p-2 text-[10px] text-white transition-transform group-hover:translate-y-0">
                  <button className="hover:text-indigo-400">下载</button>
                  <button className="hover:text-indigo-400">高清化</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
