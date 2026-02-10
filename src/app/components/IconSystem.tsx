import { Copy, Check } from 'lucide-react';
import { useState } from 'react';
import {
  // Medical Core (의료 핵심)
  Activity, Heart, Droplet, Droplets, AlertCircle, HeartPulse, Stethoscope,
  // Navigation (네비게이션)
  Home, Menu, X, ChevronRight, ChevronLeft, ChevronUp, ChevronDown, Settings, User,
  // Actions (액션)
  Plus, Minus, Edit, Save, Trash2, Search, Filter, Download, Upload,
  // Status (상태)
  CheckCircle, XCircle, AlertTriangle, Info, Bell, Clock,
  // Data (데이터)
  LineChart, BarChart3, TrendingUp, Database,
  // Additional for examples
  Eye, BellOff, Wifi, RefreshCw, Thermometer, Zap, Shield
} from 'lucide-react';

interface IconCategory {
  name: string;
  description: string;
  icons: {
    name: string;
    component: React.ComponentType<{ className?: string }>;
    usage: string;
  }[];
}

export function IconSystem() {
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<'sm' | 'md' | 'lg'>('md');

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8'
  };

  const iconCategories: IconCategory[] = [
    {
      name: '의료 핵심',
      description: '대량출혈 모니터링 및 환자 상태',
      icons: [
        { name: 'Heart', component: Heart, usage: '심박, 생명 징후' },
        { name: 'HeartPulse', component: HeartPulse, usage: '심박수 모니터링' },
        { name: 'Activity', component: Activity, usage: '활동 상태, 실시간' },
        { name: 'Droplet', component: Droplet, usage: '출혈, 혈액' },
        { name: 'Droplets', component: Droplets, usage: '대량출혈 경고' },
        { name: 'Stethoscope', component: Stethoscope, usage: '진단, 의료진' },
        { name: 'AlertCircle', component: AlertCircle, usage: '주의 알림' }
      ]
    },
    {
      name: '네비게이션',
      description: '메뉴, 이동, 방향',
      icons: [
        { name: 'Home', component: Home, usage: '홈' },
        { name: 'Menu', component: Menu, usage: '메뉴 열기' },
        { name: 'X', component: X, usage: '닫기' },
        { name: 'Settings', component: Settings, usage: '설정' },
        { name: 'User', component: User, usage: '사용자' },
        { name: 'ChevronRight', component: ChevronRight, usage: '다음' },
        { name: 'ChevronLeft', component: ChevronLeft, usage: '이전' },
        { name: 'ChevronUp', component: ChevronUp, usage: '위로' },
        { name: 'ChevronDown', component: ChevronDown, usage: '아래로' }
      ]
    },
    {
      name: '액션',
      description: '버튼, 컨트롤',
      icons: [
        { name: 'Plus', component: Plus, usage: '추가' },
        { name: 'Minus', component: Minus, usage: '제거' },
        { name: 'Edit', component: Edit, usage: '편집' },
        { name: 'Save', component: Save, usage: '저장' },
        { name: 'Trash2', component: Trash2, usage: '삭제' },
        { name: 'Search', component: Search, usage: '검색' },
        { name: 'Filter', component: Filter, usage: '필터' },
        { name: 'Download', component: Download, usage: '다운로드' },
        { name: 'Upload', component: Upload, usage: '업로드' }
      ]
    },
    {
      name: '상태 & 알림',
      description: '경고, 성공, 정보',
      icons: [
        { name: 'CheckCircle', component: CheckCircle, usage: '성공' },
        { name: 'XCircle', component: XCircle, usage: '오류' },
        { name: 'AlertTriangle', component: AlertTriangle, usage: '경고' },
        { name: 'Info', component: Info, usage: '정보' },
        { name: 'Bell', component: Bell, usage: '알림' },
        { name: 'Clock', component: Clock, usage: '시간' }
      ]
    },
    {
      name: '데이터',
      description: '차트, 분석',
      icons: [
        { name: 'LineChart', component: LineChart, usage: '추세' },
        { name: 'BarChart3', component: BarChart3, usage: '비교' },
        { name: 'TrendingUp', component: TrendingUp, usage: '증가' },
        { name: 'Database', component: Database, usage: '데이터' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-gray-900 mb-4">TIROSH</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-3">Icon System</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            의료 AI 서비스를 위한 명확하고 직관적인 아이콘 라이브러리
          </p>
        </div>

        {/* Recommended Library */}
        <div className="mb-16">
          <div className="bg-gradient-to-br from-[#8B1538] to-[#C7215E] rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 text-white">
              <h3 className="text-3xl font-black mb-6">추천 아이콘 라이브러리</h3>
              
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-2xl font-bold mb-2">Lucide React</h4>
                    <p className="text-sm opacity-90 mb-3">
                      깔끔하고 일관된 디자인의 오픈소스 아이콘 라이브러리. 1,500+ 아이콘 제공.
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-[#F59E0B] text-white text-xs font-bold rounded-full whitespace-nowrap">
                    추천
                  </span>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs opacity-75 mb-1">특징</div>
                    <div className="text-sm font-semibold">미니멀 & 모던</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs opacity-75 mb-1">크기</div>
                    <div className="text-sm font-semibold">~60KB (Tree-shakable)</div>
                  </div>
                  <div className="bg-white/10 rounded-lg p-3">
                    <div className="text-xs opacity-75 mb-1">라이선스</div>
                    <div className="text-sm font-semibold">ISC (상업 이용 가능)</div>
                  </div>
                </div>

                <button
                  onClick={() => copyToClipboard('import { Activity, Heart, AlertCircle } from "lucide-react";')}
                  className="flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors cursor-pointer"
                >
                  {copiedText === 'import { Activity, Heart, AlertCircle } from "lucide-react";' ? (
                    <Check className="w-4 h-4" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                  <span className="text-sm font-mono">Import 예시 복사</span>
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-bold mb-2">✅ 장점</h5>
                  <ul className="space-y-1 opacity-90">
                    <li>• React Native 지원</li>
                    <li>• TypeScript 완벽 지원</li>
                    <li>• 커스터마이징 쉬움 (색상, 크기)</li>
                    <li>• 정기적인 업데이트</li>
                    <li>• 의료 관련 아이콘 다수 포함</li>
                  </ul>
                </div>
                <div className="bg-white/5 rounded-lg p-4">
                  <h5 className="font-bold mb-2">📦 대안 라이브러리</h5>
                  <ul className="space-y-1 opacity-90">
                    <li>• Heroicons (Tailwind 제작사)</li>
                    <li>• Phosphor Icons (다양한 스타일)</li>
                    <li>• Tabler Icons (1,600+ 아이콘)</li>
                    <li>• Feather Icons (클래식한 디자인)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Size Control */}
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h3 className="text-2xl font-black text-gray-900 mb-1">아이콘 카탈로그</h3>
            <p className="text-sm text-gray-600">클릭하여 import 코드 복사</p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => setSelectedSize('sm')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                selectedSize === 'sm'
                  ? 'bg-[#C7215E] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Small (16px)
            </button>
            <button
              onClick={() => setSelectedSize('md')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                selectedSize === 'md'
                  ? 'bg-[#C7215E] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Medium (24px)
            </button>
            <button
              onClick={() => setSelectedSize('lg')}
              className={`px-4 py-2 rounded-lg font-semibold text-sm transition-colors ${
                selectedSize === 'lg'
                  ? 'bg-[#C7215E] text-white'
                  : 'bg-white text-gray-700 border border-gray-300 hover:bg-gray-50'
              }`}
            >
              Large (32px)
            </button>
          </div>
        </div>

        {/* Icon Categories */}
        <div className="space-y-12">
          {iconCategories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="mb-6">
                <h4 className="text-2xl font-bold text-gray-900 mb-1">{category.name}</h4>
                <p className="text-sm text-gray-600">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
                {category.icons.map((icon, iconIndex) => {
                  const IconComponent = icon.component;
                  const importCode = `import { ${icon.name} } from 'lucide-react';`;
                  
                  return (
                    <div
                      key={iconIndex}
                      onClick={() => copyToClipboard(importCode)}
                      className="bg-white rounded-xl border border-gray-200 p-4 hover:shadow-lg hover:border-[#C7215E] transition-all cursor-pointer group"
                    >
                      <div className="flex flex-col items-center text-center">
                        <div className="mb-3 text-gray-700 group-hover:text-[#C7215E] transition-colors">
                          <IconComponent className={sizeClasses[selectedSize]} />
                        </div>
                        <div className="text-sm font-semibold text-gray-900 mb-1">
                          {icon.name}
                        </div>
                        <div className="text-xs text-gray-500 leading-tight">
                          {icon.usage}
                        </div>
                        {copiedText === importCode && (
                          <div className="mt-2 flex items-center gap-1 text-xs text-green-600 font-semibold">
                            <Check className="w-3 h-3" />
                            복사됨
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Usage Guide */}
        <div className="mt-16">
          <h3 className="text-3xl font-black text-gray-900 mb-6">사용 가이드</h3>
          
          {/* Filled State Demo - NEW */}
          <div className="mb-8 bg-gradient-to-br from-[#C7215E] to-[#8B1538] rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 text-white">
              <h4 className="text-2xl font-black mb-6">🎨 Filled (채움) 상태 구현</h4>
              <p className="text-sm opacity-90 mb-6">
                Lucide는 Outline 기본이지만, <code className="bg-white/20 px-2 py-1 rounded">fill</code> 속성으로 Filled 효과를 낼 수 있어요.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Code Example */}
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h5 className="font-bold mb-4 text-lg">코드 예시</h5>
                  <div className="bg-gray-900 rounded-lg p-4 font-mono text-xs mb-4 overflow-x-auto">
                    <pre className="text-green-300">{`// Outline (기본)
<Heart className="w-6 h-6 text-[#C7215E]" />

// Filled (채움)
<Heart 
  className="w-6 h-6 text-[#C7215E] fill-[#C7215E]" 
/>

// 조건부 렌더링
<Heart 
  className={\`w-6 h-6 text-[#C7215E] \${
    isActive ? 'fill-[#C7215E]' : ''
  }\`}
/>`}</pre>
                  </div>
                  <p className="text-sm opacity-90">
                    <code className="bg-white/20 px-2 py-1 rounded text-xs">fill-[color]</code> 클래스 추가만으로 채워진 상태 구현
                  </p>
                </div>

                {/* Visual Demo */}
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h5 className="font-bold mb-4 text-lg">시각적 비교</h5>
                  <div className="grid grid-cols-3 gap-4">
                    {/* Outline */}
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 mb-2">
                        <Heart className="w-8 h-8 text-[#C7215E] mx-auto" />
                      </div>
                      <div className="text-xs">Outline</div>
                      <div className="text-xs opacity-75">기본</div>
                    </div>

                    {/* Filled */}
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 mb-2">
                        <Heart className="w-8 h-8 text-[#C7215E] fill-[#C7215E] mx-auto" />
                      </div>
                      <div className="text-xs">Filled</div>
                      <div className="text-xs opacity-75">활성</div>
                    </div>

                    {/* Animated */}
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 mb-2">
                        <Heart className="w-8 h-8 text-[#C7215E] fill-[#C7215E] animate-pulse mx-auto" />
                      </div>
                      <div className="text-xs">Filled + Pulse</div>
                      <div className="text-xs opacity-75">긴급</div>
                    </div>

                    {/* Bell Outline */}
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 mb-2">
                        <Bell className="w-8 h-8 text-gray-600 mx-auto" />
                      </div>
                      <div className="text-xs opacity-75">알림 없음</div>
                    </div>

                    {/* Bell Filled */}
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 mb-2">
                        <Bell className="w-8 h-8 text-[#F59E0B] fill-[#F59E0B] mx-auto" />
                      </div>
                      <div className="text-xs opacity-75">알림 있음</div>
                    </div>

                    {/* Bell Animated */}
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 mb-2">
                        <Bell className="w-8 h-8 text-[#F59E0B] fill-[#F59E0B] animate-bounce mx-auto" />
                      </div>
                      <div className="text-xs opacity-75">긴급 알림</div>
                    </div>

                    {/* Droplet Outline */}
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 mb-2">
                        <Droplet className="w-8 h-8 text-blue-500 mx-auto" />
                      </div>
                      <div className="text-xs opacity-75">정상</div>
                    </div>

                    {/* Droplet Filled */}
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 mb-2">
                        <Droplet className="w-8 h-8 text-[#C7215E] fill-[#C7215E] mx-auto" />
                      </div>
                      <div className="text-xs opacity-75">경고</div>
                    </div>

                    {/* Droplet Animated */}
                    <div className="text-center">
                      <div className="bg-white rounded-lg p-4 mb-2">
                        <Droplets className="w-8 h-8 text-[#C7215E] fill-[#C7215E] animate-pulse mx-auto" />
                      </div>
                      <div className="text-xs opacity-75">대량출혈</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-white/30">
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-bold mb-1">✅ 적용 가능 아이콘</p>
                    <p className="opacity-90">Heart, Bell, Droplet, Circle 계열</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">⚠️ 제한적 아이콘</p>
                    <p className="opacity-90">Line, Arrow, Chevron 같은 순수 선형</p>
                  </div>
                  <div>
                    <p className="font-bold mb-1">💡 활용 시나리오</p>
                    <p className="opacity-90">즐겨찾기, 알림, 상태 표시, 토글</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Basic Usage */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">기본 사용법</h4>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto">
                <pre className="text-gray-800">{`import { Heart } from 'lucide-react';

function MyComponent() {
  return (
    <Heart className="w-6 h-6 text-red-500" />
  );
}`}</pre>
              </div>
              <p className="text-sm text-gray-600">
                className prop으로 Tailwind CSS 클래스 적용 가능
              </p>
            </div>

            {/* Custom Size & Color */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">크기 & 색상</h4>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto">
                <pre className="text-gray-800">{`<Activity 
  className="w-8 h-8 text-[#C7215E]" 
/>

<AlertCircle 
  size={32}
  color="#F59E0B"
/>`}</pre>
              </div>
              <p className="text-sm text-gray-600">
                Tailwind 또는 직접 size/color props 사용
              </p>
            </div>

            {/* Stroke Width */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">선 굵기 조절</h4>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto">
                <pre className="text-gray-800">{`<Heart 
  strokeWidth={1.5}  // 얇게
/>

<Heart 
  strokeWidth={3}    // 굵게
/>`}</pre>
              </div>
              <p className="text-sm text-gray-600">
                strokeWidth로 선 굵기 조정 (기본값: 2)
              </p>
            </div>

            {/* Animation */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <h4 className="text-xl font-bold text-gray-900 mb-4">애니메이션</h4>
              <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm mb-4 overflow-x-auto">
                <pre className="text-gray-800">{`<RefreshCw 
  className="w-6 h-6 animate-spin"
/>

<Bell 
  className="w-6 h-6 animate-bounce"
/>`}</pre>
              </div>
              <p className="text-sm text-gray-600">
                Tailwind 애니메이션 클래스 활용
              </p>
            </div>
          </div>

          {/* Best Practices */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-xl p-6">
            <h4 className="text-xl font-bold text-amber-900 mb-4">💡 아이콘 사용 원칙</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-800">
              <div>
                <p className="mb-2"><strong>• 일관된 크기:</strong> 한 컨텍스트 내에서 동일한 크기 유지</p>
                <p className="mb-2"><strong>• 명확한 의미:</strong> 직관적으로 이해 가능한 아이콘 선택</p>
                <p className="mb-2"><strong>• 색상 활용:</strong> 상태별 색상 구분 (위험=빨강, 성공=초록)</p>
              </div>
              <div>
                <p className="mb-2"><strong>• 여백 확보:</strong> 아이콘 주변 충분한 터치 영역</p>
                <p className="mb-2"><strong>• 접근성:</strong> 중요 정보는 아이콘만으로 전달 X</p>
                <p className="mb-2"><strong>• 성능:</strong> Tree-shaking으로 필요한 것만 import</p>
              </div>
            </div>
          </div>
        </div>

        {/* Color Examples */}
        <div className="mt-16">
          <h3 className="text-3xl font-black text-gray-900 mb-6">TIROSH 색상 조합</h3>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="text-xs text-gray-500 mb-3">Primary Wine Red</div>
              <div className="flex items-center gap-3 mb-3">
                <Droplets className="w-8 h-8 text-[#C7215E]" />
                <Heart className="w-8 h-8 text-[#C7215E]" />
                <AlertCircle className="w-8 h-8 text-[#C7215E]" />
              </div>
              <p className="text-xs text-gray-600">위험, 중요, 출혈 관련</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="text-xs text-gray-500 mb-3">Fire Gold</div>
              <div className="flex items-center gap-3 mb-3">
                <Zap className="w-8 h-8 text-[#F59E0B]" />
                <Bell className="w-8 h-8 text-[#F59E0B]" />
                <TrendingUp className="w-8 h-8 text-[#F59E0B]" />
              </div>
              <p className="text-xs text-gray-600">경고, 알림, 강조</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="text-xs text-gray-500 mb-3">Success Green</div>
              <div className="flex items-center gap-3 mb-3">
                <CheckCircle className="w-8 h-8 text-green-500" />
                <Shield className="w-8 h-8 text-green-500" />
                <Activity className="w-8 h-8 text-green-500" />
              </div>
              <p className="text-xs text-gray-600">정상, 안전, 성공</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="text-xs text-gray-500 mb-3">Neutral Gray</div>
              <div className="flex items-center gap-3 mb-3">
                <Settings className="w-8 h-8 text-gray-500" />
                <User className="w-8 h-8 text-gray-500" />
                <Menu className="w-8 h-8 text-gray-500" />
              </div>
              <p className="text-xs text-gray-600">일반, 비활성, 보조</p>
            </div>
          </div>
        </div>

        {/* Real Examples */}
        <div className="mt-16">
          <h3 className="text-3xl font-black text-gray-900 mb-6">실전 예시</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Alert Card */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-red-200 p-6">
              <div className="text-xs text-gray-500 mb-3">긴급 알림 카드</div>
              <div className="flex items-start gap-3 mb-3">
                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
                <div>
                  <h5 className="font-bold text-gray-900 mb-1">대량출혈 경고</h5>
                  <p className="text-sm text-gray-600">환자 #1234 - 즉각적인 조치 필요</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-[#C7215E] text-white rounded-lg text-sm font-semibold">
                  <Eye className="w-4 h-4" />
                  확인
                </button>
                <button className="flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm font-semibold">
                  <BellOff className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Status Dashboard */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="text-xs text-gray-500 mb-3">상태 대시보드</div>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Activity className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">시스템 정상</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Wifi className="w-5 h-5 text-green-500" />
                    <span className="text-sm text-gray-700">연결 안정</span>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-500" />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-gray-500" />
                    <span className="text-sm text-gray-700">데이터 동기화 중</span>
                  </div>
                  <RefreshCw className="w-4 h-4 text-gray-400 animate-spin" />
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="text-xs text-gray-500 mb-3">액션 툴바</div>
              <div className="flex items-center gap-2">
                <button className="flex items-center gap-2 px-4 py-2 bg-[#C7215E] text-white rounded-lg text-sm font-semibold">
                  <Plus className="w-4 h-4" />
                  추가
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  <Edit className="w-4 h-4" />
                  편집
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  <Download className="w-4 h-4" />
                  내보내기
                </button>
                <div className="flex-1"></div>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  <Search className="w-4 h-4" />
                </button>
                <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm">
                  <Filter className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Patient Monitor */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-lg p-6 text-white">
              <div className="text-xs text-gray-400 mb-3">환자 모니터</div>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-2">
                  <Heart className="w-6 h-6 text-red-400" />
                  <div>
                    <div className="text-2xl font-bold">78</div>
                    <div className="text-xs text-gray-400">bpm</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Activity className="w-6 h-6 text-green-400" />
                  <div>
                    <div className="text-2xl font-bold">98</div>
                    <div className="text-xs text-gray-400">SpO2</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Thermometer className="w-6 h-6 text-blue-400" />
                  <div>
                    <div className="text-2xl font-bold">36.7</div>
                    <div className="text-xs text-gray-400">°C</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Droplet className="w-6 h-6 text-[#C7215E]" />
                  <div>
                    <div className="text-2xl font-bold">120</div>
                    <div className="text-xs text-gray-400">mmHg</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}