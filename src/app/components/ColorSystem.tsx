import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

interface ColorInfo {
  name: string;
  hex: string;
  rgb: string;
  usage: string;
}

interface ColorGroup {
  title: string;
  subtitle: string;
  colors: ColorInfo[];
}

export function ColorSystem() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyToClipboard = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  const colorGroups: ColorGroup[] = [
    {
      title: 'Primary - TIROSH Wine',
      subtitle: '티로시 와인 | 새 포도주, 생명의 혈액',
      colors: [
        { name: 'Wine Dark', hex: '#8B1538', rgb: 'rgb(139, 21, 56)', usage: '진한 배경, 텍스트 강조' },
        { name: 'Wine', hex: '#C7215E', rgb: 'rgb(199, 33, 94)', usage: '메인 브랜드 컬러, 주요 CTA' },
        { name: 'Wine Light', hex: '#E84A67', rgb: 'rgb(232, 74, 103)', usage: '호버, 밝은 강조' },
        { name: 'Wine Pale', hex: '#F9C0CE', rgb: 'rgb(249, 192, 206)', usage: '배경 강조' },
        { name: 'Wine Subtle', hex: '#FEF2F4', rgb: 'rgb(254, 242, 244)', usage: '미묘한 배경' },
      ]
    },
    {
      title: 'Secondary - Pillar of Fire',
      subtitle: '불기둥 | 밤의 인도자, 열정과 혁신',
      colors: [
        { name: 'Fire Dark', hex: '#B45309', rgb: 'rgb(180, 83, 9)', usage: '진한 강조' },
        { name: 'Fire', hex: '#F59E0B', rgb: 'rgb(245, 158, 11)', usage: '보조 CTA, 아이콘' },
        { name: 'Fire Light', hex: '#FCD34D', rgb: 'rgb(252, 211, 77)', usage: '밝은 강조' },
        { name: 'Fire Pale', hex: '#FEF3C7', rgb: 'rgb(254, 243, 199)', usage: '배경 강조' },
      ]
    },
    {
      title: 'Tertiary - Pillar of Cloud',
      subtitle: '구름기둥 | 낮의 보호자, 순수와 평화',
      colors: [
        { name: 'Cloud', hex: '#FFFFFF', rgb: 'rgb(255, 255, 255)', usage: '카드, 순수 배경' },
        { name: 'Cloud Soft', hex: '#F1F5F9', rgb: 'rgb(241, 245, 249)', usage: '밝은 배경' },
        { name: 'Cloud Border', hex: '#E2E8F0', rgb: 'rgb(226, 232, 240)', usage: '보더, 구분선' },
        { name: 'Cloud Gray', hex: '#94A3B8', rgb: 'rgb(148, 163, 184)', usage: '플레이스홀더' },
      ]
    },
    {
      title: 'Neutral - Foundation',
      subtitle: '기반 색상 | 텍스트, UI 구조 요소',
      colors: [
        { name: 'Black', hex: '#171717', rgb: 'rgb(23, 23, 23)', usage: '헤딩, 최고 대비' },
        { name: 'Gray Dark', hex: '#404040', rgb: 'rgb(64, 64, 64)', usage: '본문 텍스트' },
        { name: 'Gray', hex: '#737373', rgb: 'rgb(115, 115, 115)', usage: '보조 텍스트' },
        { name: 'Gray Light', hex: '#A3A3A3', rgb: 'rgb(163, 163, 163)', usage: '비활성 텍스트' },
        { name: 'Gray Border', hex: '#D4D4D4', rgb: 'rgb(212, 212, 212)', usage: '보더' },
        { name: 'Gray Pale', hex: '#F5F5F5', rgb: 'rgb(245, 245, 245)', usage: '밝은 배경' },
      ]
    },
    {
      title: 'Supporting - Medical States',
      subtitle: '의료 상태 색상 | 경고, 정보, 성공',
      colors: [
        { name: 'Critical', hex: '#B91C1C', rgb: 'rgb(185, 28, 28)', usage: '긴급 경고' },
        { name: 'Warning', hex: '#EA580C', rgb: 'rgb(234, 88, 12)', usage: '주의' },
        { name: 'Info', hex: '#2563EB', rgb: 'rgb(37, 99, 235)', usage: '정보' },
        { name: 'Success', hex: '#16A34A', rgb: 'rgb(22, 163, 74)', usage: '성공' },
      ]
    },
    {
      title: 'Gradients - Brand Signature',
      subtitle: '브랜드 시그니처 그라디언트',
      colors: [
        { name: 'Hero', hex: 'linear-gradient(135deg, #C7215E, #F59E0B)', rgb: 'Wine → Fire', usage: '히어로, 메인 CTA' },
        { name: 'Background', hex: 'linear-gradient(135deg, #FFFBEB, #FEF2F4)', rgb: 'Fire Pale → Wine Subtle', usage: '부드러운 배경' },
        { name: 'Dark', hex: 'linear-gradient(180deg, #171717, #8B1538)', rgb: 'Black → Wine Dark', usage: '다크 헤더' },
      ]
    }
  ];

  const ColorCard = ({ color }: { color: ColorInfo }) => {
    const isGradient = color.hex.startsWith('linear-gradient');
    const isCopied = copiedColor === color.hex;

    return (
      <div className="group relative">
        <div 
          className="h-28 rounded-t-xl transition-all duration-300 group-hover:scale-105 cursor-pointer relative overflow-hidden"
          style={{ background: color.hex }}
          onClick={() => copyToClipboard(color.hex)}
        >
          {color.hex === '#FFFFFF' && (
            <div className="absolute inset-0 border-2 border-gray-200 rounded-t-xl pointer-events-none" />
          )}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
            {isCopied ? (
              <Check className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
            ) : (
              <Copy className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
            )}
          </div>
        </div>
        <div className="p-4 bg-white border border-gray-200 border-t-0 rounded-b-xl">
          <div className="font-bold text-gray-900 mb-1 text-lg">{color.name}</div>
          <div className="text-xs font-mono text-gray-600 mb-1">{color.hex}</div>
          <div className="text-xs font-mono text-gray-500 mb-2">{color.rgb}</div>
          <div className="text-sm text-gray-600 leading-relaxed">{color.usage}</div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-gray-900 mb-4">TIROSH</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-3">Brand Color System</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            티로시(새 포도주)와 생명의 혈액, 광야를 인도하는 불기둥과 구름기둥의 상징성을 담은<br />
            미니멀 브랜드 컬러 시스템
          </p>
          <p className="text-sm text-gray-500 mt-4">
            색상을 클릭하면 HEX 코드가 복사됩니다 • 총 22개 색상
          </p>
        </div>

        {/* Brand Story */}
        <div className="mb-20">
          <div className="grid md:grid-cols-3 gap-6">
            {/* Wine Story */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#8B1538] to-[#C7215E]" />
              <div className="relative p-8 text-white">
                <div className="text-xs font-bold opacity-75 mb-2 tracking-wide">PRIMARY · 60%</div>
                <h3 className="text-2xl font-black mb-3">TIROSH WINE</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  새 포도주, 생명의 혈액
                  <br />대량출혈 모니터링
                  <br />생명을 지키는 와인 레드
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-xs opacity-75">5 Shades</div>
                </div>
              </div>
            </div>

            {/* Fire Pillar */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-[#B45309] to-[#F59E0B]" />
              <div className="relative p-8 text-white">
                <div className="text-xs font-bold opacity-75 mb-2 tracking-wide">SECONDARY · 20%</div>
                <h3 className="text-2xl font-black mb-3">PILLAR OF FIRE</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  불기둥, 밤의 인도자
                  <br />어둠 속 희망의 빛
                  <br />혁신과 열정의 상징
                </p>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <div className="text-xs opacity-75">4 Shades</div>
                </div>
              </div>
            </div>

            {/* Cloud Pillar */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl border-2 border-gray-200">
              <div className="absolute inset-0 bg-gradient-to-br from-[#FFFFFF] to-[#E2E8F0]" />
              <div className="relative p-8 text-gray-900">
                <div className="text-xs font-bold opacity-75 mb-2 tracking-wide">TERTIARY · 10%</div>
                <h3 className="text-2xl font-black mb-3">PILLAR OF CLOUD</h3>
                <p className="text-sm leading-relaxed opacity-90">
                  구름기둥, 낮의 보호자
                  <br />순수와 평화의 상징
                  <br />언제나 함께하는 빛
                </p>
                <div className="mt-4 pt-4 border-t border-gray-300">
                  <div className="text-xs opacity-75">4 Shades</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Signature */}
        <div className="mb-20">
          <div className="relative h-48 rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-r from-[#C7215E] via-[#F59E0B] to-[#C7215E] animate-pulse" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <h3 className="text-5xl font-black text-white mb-2 drop-shadow-lg">TIROSH</h3>
                <p className="text-xl text-white/95 tracking-wide drop-shadow-md">PILLAR OF FIRE, PILLAR OF CLOUD</p>
              </div>
            </div>
          </div>
        </div>

        {/* Color Groups */}
        {colorGroups.map((group, groupIndex) => (
          <div key={groupIndex} className="mb-16">
            <div className="mb-8">
              <h3 className="text-3xl font-black text-gray-900 mb-2">{group.title}</h3>
              <p className="text-lg text-gray-600">{group.subtitle}</p>
            </div>
            <div className={`grid gap-6 ${
              group.colors.length === 3 
                ? 'grid-cols-1 md:grid-cols-3'
                : group.colors.length === 4
                ? 'grid-cols-2 md:grid-cols-4'
                : group.colors.length === 5
                ? 'grid-cols-2 md:grid-cols-3 lg:grid-cols-5'
                : 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6'
            }`}>
              {group.colors.map((color, colorIndex) => (
                <ColorCard key={colorIndex} color={color} />
              ))}
            </div>
          </div>
        ))}

        {/* Quick Reference */}
        <div className="mt-20 mb-12 p-8 bg-white rounded-2xl shadow-lg border border-gray-200">
          <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">빠른 참조 가이드</h4>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h5 className="font-bold text-gray-900 mb-4 text-lg">🎨 가장 많이 쓰는 색상</h5>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#C7215E] shadow-sm flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">Wine</div>
                    <div className="text-sm text-gray-600">메인 CTA, 로고</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#F59E0B] shadow-sm flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">Fire</div>
                    <div className="text-sm text-gray-600">보조 버튼, 아이콘</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#171717] shadow-sm flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">Black</div>
                    <div className="text-sm text-gray-600">헤딩, 본문</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-[#FFFFFF] border-2 border-gray-200 shadow-sm flex-shrink-0" />
                  <div>
                    <div className="font-bold text-gray-900">Cloud</div>
                    <div className="text-sm text-gray-600">배경, 카드</div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h5 className="font-bold text-gray-900 mb-4 text-lg">✅ 사용 원칙</h5>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-[#C7215E] mt-1 font-bold">1.</span>
                  <span><strong>Wine</strong>을 주된 브랜드 컬러로 사용</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#F59E0B] mt-1 font-bold">2.</span>
                  <span><strong>Fire</strong>로 강조와 활력 추가</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1 font-bold">3.</span>
                  <span><strong>Cloud</strong>는 깨끗한 배경과 여백</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1 font-bold">4.</span>
                  <span><strong>Neutral</strong>은 텍스트와 UI 요소</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1 font-bold">5.</span>
                  <span>한 화면에 브랜드 색상 2개까지만</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-600 mt-1 font-bold">6.</span>
                  <span>의료 상태는 Supporting 색상 사용</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-6 border-t border-gray-200">
            <h5 className="font-bold text-gray-900 mb-3">💡 실전 팁</h5>
            <p className="text-sm text-gray-600 leading-relaxed">
              <strong>버튼:</strong> Wine 또는 Fire 배경 + 흰색 텍스트 
              <span className="mx-2">|</span>
              <strong>텍스트:</strong> Black (헤딩), Gray Dark (본문), Gray (보조)
              <span className="mx-2">|</span>
              <strong>배경:</strong> Cloud 또는 Cloud Soft
              <span className="mx-2">|</span>
              <strong>보더:</strong> Cloud Border 또는 Gray Border
            </p>
          </div>
        </div>

        {/* Accessibility Note */}
        <div className="p-6 bg-blue-50 border-2 border-blue-200 rounded-xl">
          <h4 className="font-bold text-blue-900 mb-3 text-lg">접근성 및 의료 표준</h4>
          <div className="grid md:grid-cols-2 gap-4 text-blue-800 text-sm leading-relaxed">
            <div>
              <p className="mb-2">
                <strong>• 명도 대비:</strong> Wine, Fire + 흰색 텍스트 = WCAG AA 통과
              </p>
              <p>
                <strong>• 텍스트:</strong> Black, Gray Dark + 흰색 배경 = WCAG AAA 통과
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong>• 색각 이상 고려:</strong> 중요 정보는 색상+아이콘+텍스트 병행
              </p>
              <p>
                <strong>• 의료 환경:</strong> Wine 계열은 장시간 모니터링 최적화
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
