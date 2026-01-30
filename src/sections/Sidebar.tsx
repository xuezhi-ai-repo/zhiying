import { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Sparkles,
  Compass,
  LayoutGrid,
  FolderKanban,
  Shapes,
  Heart,
  Crown,
  Settings,
  Menu,
  X,
  PlayCircle,
} from 'lucide-react';

const sections = [
  {
    title: '创作中心',
    items: [
      { label: '首页', path: '/', icon: PlayCircle },
      { label: '开始创作', path: '/create', icon: Sparkles, badge: 'New' },
      { label: '社区发现', path: '/community', icon: Compass },
      { label: '模板库', path: '/templates', icon: LayoutGrid },
    ],
  },
  {
    title: '我的资产',
    items: [
      { label: '作品管理', path: '/works', icon: FolderKanban },
      { label: '主体库', path: '/subjects', icon: Shapes, badge: 'Beta' },
      { label: '收藏夹', path: '/favorites', icon: Heart },
    ],
  },
  {
    title: '设置与服务',
    items: [
      { label: '会员计划', path: '/membership', icon: Crown, badge: 'PRO' },
      { label: '系统设置', path: '/settings', icon: Settings },
    ],
  },
];

type SidebarProps = {
  activePath: string;
  onNavigate: (path: string) => void;
};

function isModifiedClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  return event.metaKey || event.altKey || event.ctrlKey || event.shiftKey || event.button !== 0;
}

export default function Sidebar({ activePath, onNavigate }: SidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const normalizedPath = useMemo(() => (activePath === '/home' ? '/' : activePath), [activePath]);

  const handleNavigate = (path: string) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    if (isModifiedClick(event)) return;
    event.preventDefault();
    onNavigate(path);
    setMobileOpen(false);
  };

  const sidebarContent = (
    <div className="flex h-full flex-col">
      <div className="px-5 pt-6 pb-4">
        <a
          href="/"
          onClick={handleNavigate('/')}
          className="flex items-center gap-3"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-brand shadow-glow">
            <PlayCircle className="h-6 w-6 text-white" />
          </div>
          <div>
            <div className="text-lg font-semibold">智影AI</div>
            <div className="text-xs text-white/50">创作中心</div>
          </div>
        </a>
      </div>

      <div className="flex-1 overflow-y-auto px-4 pb-6">
        {sections.map((section) => (
          <div key={section.title} className="mb-6">
            <div className="px-2 text-xs uppercase tracking-[0.2em] text-white/40">
              {section.title}
            </div>
            <div className="mt-3 flex flex-col gap-1">
              {section.items.map((item) => {
                const isActive = normalizedPath === item.path;
                const Icon = item.icon;
                return (
                  <a
                    key={item.label}
                    href={item.path}
                    onClick={handleNavigate(item.path)}
                    className={`group flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all duration-200 ${
                      isActive
                        ? 'bg-white/10 text-white shadow-[0_0_25px_rgba(124,58,237,0.25)]'
                        : 'text-white/65 hover:bg-white/5 hover:text-white'
                    }`}
                  >
                    <span
                      className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                        isActive ? 'bg-white/10 text-white' : 'bg-white/5 text-white/70'
                      }`}
                    >
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="flex-1 font-medium">{item.label}</span>
                    {item.badge && (
                      <Badge
                        variant="secondary"
                        className="border border-white/10 bg-white/10 text-white/70"
                      >
                        {item.badge}
                      </Badge>
                    )}
                  </a>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-white/10 px-4 py-4">
        <div className="flex items-center gap-3 rounded-xl bg-white/5 px-3 py-2.5">
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/10">
            <span className="text-sm font-semibold">U</span>
          </div>
          <div className="flex-1">
            <div className="text-sm font-medium">User_888</div>
            <div className="text-xs text-white/50">在线</div>
          </div>
          <span className="h-2 w-2 rounded-full bg-emerald-400" />
        </div>
      </div>
    </div>
  );

  return (
    <>
      <button
        type="button"
        onClick={() => setMobileOpen(true)}
        className="fixed left-4 top-4 z-50 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur lg:hidden"
        aria-label="打开侧边栏"
      >
        <Menu className="h-5 w-5" />
      </button>

      <aside className="fixed inset-y-0 left-0 z-40 hidden w-72 border-r border-white/10 bg-black/95 backdrop-blur-xl lg:block">
        {sidebarContent}
      </aside>

      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-black/70 backdrop-blur-sm"
            onClick={() => setMobileOpen(false)}
          />
          <div className="relative h-full w-72 border-r border-white/10 bg-black/95">
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="absolute right-4 top-4 rounded-full bg-white/10 p-2 text-white"
              aria-label="关闭侧边栏"
            >
              <X className="h-5 w-5" />
            </button>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
