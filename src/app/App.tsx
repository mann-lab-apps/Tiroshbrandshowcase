import { useState } from 'react';
import { ColorSystem } from '@/app/components/ColorSystem';
import { TypographySystem } from '@/app/components/TypographySystem';
import { IconSystem } from '@/app/components/IconSystem';
import { TiroshLogo } from '@/app/components/TiroshLogo';
import { DesignTokens } from '@/app/components/DesignTokens';
import { Palette, Type, Sparkles, Flame, Boxes } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<'color' | 'typography' | 'icons' | 'tokens' | 'final'>('color');

  return (
    <div className="size-full min-h-screen bg-gray-50">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex items-center justify-between py-4">
            <h1 className="text-2xl font-black text-gray-900">TIROSH Design System</h1>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('color')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'color'
                    ? 'bg-[#C7215E] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Palette className="w-5 h-5" />
                Color System
              </button>
              <button
                onClick={() => setActiveTab('typography')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'typography'
                    ? 'bg-[#C7215E] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Type className="w-5 h-5" />
                Typography
              </button>
              <button
                onClick={() => setActiveTab('icons')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'icons'
                    ? 'bg-[#C7215E] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Sparkles className="w-5 h-5" />
                Icon System
              </button>
              <button
                onClick={() => setActiveTab('tokens')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'tokens'
                    ? 'bg-[#C7215E] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Boxes className="w-5 h-5" />
                Design Tokens
              </button>
              <button
                onClick={() => setActiveTab('final')}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  activeTab === 'final'
                    ? 'bg-[#C7215E] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Flame className="w-5 h-5" />
                Final Logo
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="size-full">
        {activeTab === 'color' && <ColorSystem />}
        {activeTab === 'typography' && <TypographySystem />}
        {activeTab === 'icons' && <IconSystem />}
        {activeTab === 'tokens' && <DesignTokens />}
        {activeTab === 'final' && <TiroshLogo />}
      </div>
    </div>
  );
}