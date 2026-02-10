import { Copy, Check } from 'lucide-react';
import { useState } from 'react';

interface FontOption {
  name: string;
  import: string;
  description: string;
  weights: number[];
  usage: string;
}

interface TypeScale {
  name: string;
  size: string;
  lineHeight: string;
  weights: {
    primary: string;
    secondary?: string;
    usage: string;
  };
  usage: string;
  example: string;
}

export function TypographySystem() {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(text);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Font Recommendations
  const koreanFonts: FontOption[] = [
    {
      name: 'Pretendard',
      import: '@import url("https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css");',
      description: '한국어 최적화, 모던하고 깔끔한 sans-serif',
      weights: [400, 600, 700, 900],
      usage: '모든 한글 텍스트에 사용 (추천)'
    },
    {
      name: 'Noto Sans KR',
      import: '@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;700;900&display=swap");',
      description: 'Google Fonts, 안정적이고 전문적',
      weights: [400, 500, 700, 900],
      usage: 'Pretendard 대안'
    }
  ];

  const englishFonts: FontOption[] = [
    {
      name: 'Inter',
      import: '@import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap");',
      description: '가독성 최고, UI/UX 표준',
      weights: [400, 600, 700, 900],
      usage: '모든 영문 텍스트에 사용 (추천)'
    },
    {
      name: 'Manrope',
      import: '@import url("https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&display=swap");',
      description: '둥근 느낌, 친근하고 모던',
      weights: [400, 600, 700, 800],
      usage: 'Inter 대안'
    },
    {
      name: 'Space Grotesk',
      import: '@import url("https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600;700&display=swap");',
      description: '기하학적, 기술적 느낌',
      weights: [400, 600, 700],
      usage: '브랜드 로고, 헤드라인'
    }
  ];

  // Type Scale
  const typeScale: TypeScale[] = [
    {
      name: 'Display',
      size: '56px / 3.5rem',
      lineHeight: '1.1',
      weights: {
        primary: '900 (Black)',
        secondary: '700 (Bold)',
        usage: '기본 900 | 대안 700'
      },
      usage: '히어로 타이틀, 대형 헤드라인',
      example: 'TIROSH'
    },
    {
      name: 'Heading 1',
      size: '40px / 2.5rem',
      lineHeight: '1.2',
      weights: {
        primary: '900 (Black)',
        secondary: '700 (Bold)',
        usage: '기본 900 | 대안 700'
      },
      usage: '페이지 메인 제목',
      example: '대량출혈 모니터링 시스템'
    },
    {
      name: 'Heading 2',
      size: '32px / 2rem',
      lineHeight: '1.3',
      weights: {
        primary: '700 (Bold)',
        secondary: '600 (Semibold)',
        usage: '기본 700 | 대안 600'
      },
      usage: '섹션 제목',
      example: '핵심 기술 소개'
    },
    {
      name: 'Heading 3',
      size: '24px / 1.5rem',
      lineHeight: '1.4',
      weights: {
        primary: '700 (Bold)',
        secondary: '600 (Semibold)',
        usage: '기본 700 | 대안 600'
      },
      usage: '카드 제목, 서브섹션',
      example: 'AI CDSS 솔루션'
    },
    {
      name: 'Body Large',
      size: '18px / 1.125rem',
      lineHeight: '1.6',
      weights: {
        primary: '400 (Regular)',
        secondary: '600 (Semibold)',
        usage: '기본 400 | 강조 600'
      },
      usage: '중요한 본문, 리드 텍스트',
      example: 'TIROSH는 의료 인공지능 기술로 생명을 지킵니다.'
    },
    {
      name: 'Body',
      size: '16px / 1rem',
      lineHeight: '1.6',
      weights: {
        primary: '400 (Regular)',
        secondary: '600 (Semibold)',
        usage: '기본 400 | 강조 600'
      },
      usage: '기본 본문 텍스트',
      example: '대량출혈 모니터링 서비스는 실시간으로 환자의 상태를 분석하여 의료진에게 즉각적인 알림을 제공합니다.'
    },
    {
      name: 'Body Small',
      size: '14px / 0.875rem',
      lineHeight: '1.5',
      weights: {
        primary: '400 (Regular)',
        secondary: '600 (Semibold)',
        usage: '기본 400 | 강조 600'
      },
      usage: '보조 설명, 캡션',
      example: '2026년 1월 기준, 100개 이상의 의료기관에서 사용 중'
    },
    {
      name: 'Caption',
      size: '12px / 0.75rem',
      lineHeight: '1.4',
      weights: {
        primary: '400 (Regular)',
        usage: '400만 사용 (고정)'
      },
      usage: '라벨, 메타 정보',
      example: 'Updated: 2026.01.29'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-gray-900 mb-4">TIROSH</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-3">Typography System</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            전문성과 신뢰감을 전달하는 타이포그래피 시스템
          </p>
        </div>

        {/* Recommended Setup */}
        <div className="mb-20">
          <div className="bg-gradient-to-br from-[#8B1538] to-[#C7215E] rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-8 text-white">
              <h3 className="text-3xl font-black mb-6">추천 폰트 조합</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-sm font-bold opacity-75 mb-2">한글</div>
                  <div className="text-4xl font-black mb-2">Pretendard</div>
                  <p className="text-sm opacity-90 mb-4">
                    한국어에 최적화된 모던 sans-serif. 가독성이 뛰어나고 다양한 웨이트 제공.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors"
                       onClick={() => copyToClipboard(koreanFonts[0].import)}>
                    {copiedText === koreanFonts[0].import ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span className="text-sm font-mono">Import 코드 복사</span>
                  </div>
                </div>
                <div>
                  <div className="text-sm font-bold opacity-75 mb-2">영문</div>
                  <div className="text-4xl font-black mb-2">Inter</div>
                  <p className="text-sm opacity-90 mb-4">
                    UI/UX 디자인의 표준. 뛰어난 가독성과 모던한 느낌.
                  </p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/20 rounded-lg backdrop-blur-sm cursor-pointer hover:bg-white/30 transition-colors"
                       onClick={() => copyToClipboard(englishFonts[0].import)}>
                    {copiedText === englishFonts[0].import ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    <span className="text-sm font-mono">Import 코드 복사</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Type Scale */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-3xl font-black text-gray-900 mb-2">타입 스케일</h3>
            <p className="text-lg text-gray-600">8단계 타이포그래피 시스템</p>
          </div>

          {/* Weight Usage Rules */}
          <div className="mb-8 bg-gradient-to-br from-[#C7215E] to-[#F59E0B] rounded-2xl p-8 text-white shadow-2xl">
            <h4 className="text-2xl font-black mb-6">🎯 전체 굵기 조합 규칙</h4>
            
            {/* Complete Table */}
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm mb-6">
              <div className="space-y-3">
                {/* Display */}
                <div className="pb-3 border-b border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Display (56px)</span>
                    <span className="text-sm opacity-75">히어로 타이틀</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/30 rounded font-mono text-sm">900 기본</span>
                    <span className="opacity-75">|</span>
                    <span className="px-3 py-1 bg-white/20 rounded font-mono text-sm">700 대안</span>
                  </div>
                </div>

                {/* H1 */}
                <div className="pb-3 border-b border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Heading 1 (40px)</span>
                    <span className="text-sm opacity-75">페이지 메인 제목</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/30 rounded font-mono text-sm">900 기본</span>
                    <span className="opacity-75">|</span>
                    <span className="px-3 py-1 bg-white/20 rounded font-mono text-sm">700 대안</span>
                  </div>
                </div>

                {/* H2 */}
                <div className="pb-3 border-b border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Heading 2 (32px)</span>
                    <span className="text-sm opacity-75">섹션 제목</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/30 rounded font-mono text-sm">700 기본</span>
                    <span className="opacity-75">|</span>
                    <span className="px-3 py-1 bg-white/20 rounded font-mono text-sm">600 대안</span>
                  </div>
                </div>

                {/* H3 */}
                <div className="pb-3 border-b border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Heading 3 (24px)</span>
                    <span className="text-sm opacity-75">카드 제목, 서브섹션</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/30 rounded font-mono text-sm">700 기본</span>
                    <span className="opacity-75">|</span>
                    <span className="px-3 py-1 bg-white/20 rounded font-mono text-sm">600 대안</span>
                  </div>
                </div>

                {/* Body Large */}
                <div className="pb-3 border-b border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Body Large (18px)</span>
                    <span className="text-sm opacity-75">리드 텍스트</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/30 rounded font-mono text-sm">400 기본</span>
                    <span className="opacity-75">|</span>
                    <span className="px-3 py-1 bg-white/20 rounded font-mono text-sm">600 강조</span>
                  </div>
                </div>

                {/* Body */}
                <div className="pb-3 border-b border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Body (16px)</span>
                    <span className="text-sm opacity-75">기본 본문</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/30 rounded font-mono text-sm">400 기본</span>
                    <span className="opacity-75">|</span>
                    <span className="px-3 py-1 bg-white/20 rounded font-mono text-sm">600 강조</span>
                  </div>
                </div>

                {/* Body Small */}
                <div className="pb-3 border-b border-white/20">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Body Small (14px)</span>
                    <span className="text-sm opacity-75">보조 설명</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/30 rounded font-mono text-sm">400 기본</span>
                    <span className="opacity-75">|</span>
                    <span className="px-3 py-1 bg-white/20 rounded font-mono text-sm">600 강조</span>
                  </div>
                </div>

                {/* Caption */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-lg">Caption (12px)</span>
                    <span className="text-sm opacity-75">라벨, 메타 정보</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="px-3 py-1 bg-white/30 rounded font-mono text-sm">400 고정</span>
                    <span className="text-sm opacity-75">(변경 금지)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h5 className="font-bold mb-3">📐 굵기별 사용처</h5>
                <div className="space-y-2 text-sm">
                  <div><span className="font-mono font-bold">900</span> → Display, H1</div>
                  <div><span className="font-mono font-bold">700</span> → H1~H3 (대안)</div>
                  <div><span className="font-mono font-bold">600</span> → 모든 텍스트 강조</div>
                  <div><span className="font-mono font-bold">400</span> → 모든 본문 기본</div>
                </div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 backdrop-blur-sm">
                <h5 className="font-bold mb-3">✅ 조합 예시</h5>
                <div className="space-y-2 text-sm">
                  <div>• 900 + 400 (강렬한 대비)</div>
                  <div>• 900 + 600 + 400 (균형)</div>
                  <div>• 700 + 600 + 400 (차분함)</div>
                  <div className="pt-2 text-xs opacity-75">⚠️ 한 화면에 최대 3가지</div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {typeScale.map((type, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="grid md:grid-cols-3 gap-6 p-6">
                  {/* Specs */}
                  <div className="space-y-2">
                    <h4 className="font-bold text-gray-900 text-lg">{type.name}</h4>
                    <div className="space-y-1 text-sm">
                      <div className="flex gap-2">
                        <span className="text-gray-500 w-24">크기:</span>
                        <span className="font-mono text-gray-900">{type.size}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-gray-500 w-24">행간:</span>
                        <span className="font-mono text-gray-900">{type.lineHeight}</span>
                      </div>
                      <div className="flex gap-2">
                        <span className="text-gray-500 w-24">굵기:</span>
                        <span className="font-mono text-gray-900">{type.weights.primary}</span>
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="text-xs text-gray-500 mb-1">사용처:</div>
                      <div className="text-sm text-gray-700">{type.usage}</div>
                    </div>
                  </div>

                  {/* Example */}
                  <div className="md:col-span-2 flex items-center">
                    <div 
                      className="text-gray-900"
                      style={{
                        fontSize: type.size.split(' / ')[1],
                        lineHeight: type.lineHeight,
                        fontWeight: type.weights.primary.split(' ')[0]
                      }}
                    >
                      {type.example}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Font Weight Guide */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-3xl font-black text-gray-900 mb-2">폰트 굵기 가이드</h3>
            <p className="text-lg text-gray-600">4가지 굵기만 사용</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="text-5xl font-normal mb-3 text-gray-900">Aa</div>
              <h4 className="font-bold text-gray-900 mb-1">Regular</h4>
              <div className="text-sm font-mono text-gray-600 mb-2">400</div>
              <p className="text-sm text-gray-700">본문 텍스트</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="text-5xl font-semibold mb-3 text-gray-900">Aa</div>
              <h4 className="font-bold text-gray-900 mb-1">Semibold</h4>
              <div className="text-sm font-mono text-gray-600 mb-2">600</div>
              <p className="text-sm text-gray-700">강조, 버튼</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="text-5xl font-bold mb-3 text-gray-900">Aa</div>
              <h4 className="font-bold text-gray-900 mb-1">Bold</h4>
              <div className="text-sm font-mono text-gray-600 mb-2">700</div>
              <p className="text-sm text-gray-700">소제목</p>
            </div>

            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-6">
              <div className="text-5xl font-black mb-3 text-gray-900">Aa</div>
              <h4 className="font-bold text-gray-900 mb-1">Black</h4>
              <div className="text-sm font-mono text-gray-600 mb-2">900</div>
              <p className="text-sm text-gray-700">대제목, 로고</p>
            </div>
          </div>
        </div>

        {/* Other Font Options */}
        <div className="mb-20">
          <div className="mb-8">
            <h3 className="text-3xl font-black text-gray-900 mb-2">다른 폰트 옵션</h3>
            <p className="text-lg text-gray-600">상황에 따라 선택</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Korean Alternatives */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">한글 폰트</h4>
              {koreanFonts.map((font, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h5 className="text-2xl font-bold text-gray-900 mb-1">{font.name}</h5>
                      <p className="text-sm text-gray-600">{font.description}</p>
                    </div>
                    {index === 0 && (
                      <span className="px-3 py-1 bg-[#C7215E] text-white text-xs font-bold rounded-full">추천</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="text-xs text-gray-500 mb-1">사용 웨이트:</div>
                    <div className="flex gap-2">
                      {font.weights.map(weight => (
                        <span key={weight} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-mono rounded">
                          {weight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-3 text-sm text-gray-700">{font.usage}</div>
                  <button
                    onClick={() => copyToClipboard(font.import)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold transition-colors"
                  >
                    {copiedText === font.import ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    Import 코드 복사
                  </button>
                </div>
              ))}
            </div>

            {/* English Alternatives */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-900">영문 폰트</h4>
              {englishFonts.map((font, index) => (
                <div key={index} className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h5 className="text-2xl font-bold text-gray-900 mb-1">{font.name}</h5>
                      <p className="text-sm text-gray-600">{font.description}</p>
                    </div>
                    {index === 0 && (
                      <span className="px-3 py-1 bg-[#C7215E] text-white text-xs font-bold rounded-full">추천</span>
                    )}
                  </div>
                  <div className="mb-3">
                    <div className="text-xs text-gray-500 mb-1">사용 웨이트:</div>
                    <div className="flex gap-2">
                      {font.weights.map(weight => (
                        <span key={weight} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs font-mono rounded">
                          {weight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-3 text-sm text-gray-700">{font.usage}</div>
                  <button
                    onClick={() => copyToClipboard(font.import)}
                    className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg text-sm font-semibold transition-colors"
                  >
                    {copiedText === font.import ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                    Import 코드 복사
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mb-12">
          <div className="mb-8">
            <h3 className="text-3xl font-black text-gray-900 mb-2">실전 예시</h3>
            <p className="text-lg text-gray-600">실제 사용 예</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Example 1: Hero */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="text-xs text-gray-500 mb-4 font-semibold">히어로 섹션</div>
              <h1 className="text-5xl font-black text-gray-900 mb-3">TIROSH</h1>
              <p className="text-xl text-gray-600 mb-4">PILLAR OF FIRE, PILLAR OF CLOUD</p>
              <p className="text-lg text-gray-700 leading-relaxed">
                상모와 테야를 위한 의료 인공지능
              </p>
            </div>

            {/* Example 2: Card */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="text-xs text-gray-500 mb-4 font-semibold">카드 컴포넌트</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">AI SaMD</h3>
              <p className="text-sm font-semibold text-gray-600 mb-3">Software as a Medical Device</p>
              <p className="text-base text-gray-700 leading-relaxed">
                의료기기로 인정받은 AI 소프트웨어로 정확한 진단과 치료를 지원합니다.
              </p>
            </div>

            {/* Example 3: Button Group */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="text-xs text-gray-500 mb-4 font-semibold">버튼 그룹</div>
              <div className="space-y-3">
                <button className="w-full px-6 py-3 bg-[#C7215E] text-white text-base font-semibold rounded-lg">
                  서비스 시작하기
                </button>
                <button className="w-full px-6 py-3 bg-white text-gray-900 text-base font-semibold border-2 border-gray-300 rounded-lg">
                  자세히 알아보기
                </button>
              </div>
            </div>

            {/* Example 4: List */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 p-8">
              <div className="text-xs text-gray-500 mb-4 font-semibold">정보 리스트</div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">핵심 기능</h4>
              <ul className="space-y-2">
                <li className="text-base text-gray-700">실시간 모니터링</li>
                <li className="text-base text-gray-700">AI 기반 예측 분석</li>
                <li className="text-base text-gray-700">즉각적인 알림 시스템</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Quick Tips */}
        <div className="p-6 bg-amber-50 border-2 border-amber-200 rounded-xl">
          <h4 className="font-bold text-amber-900 mb-3 text-lg">💡 타이포그래피 팁</h4>
          <div className="grid md:grid-cols-2 gap-4 text-amber-800 text-sm leading-relaxed">
            <div>
              <p className="mb-2">
                <strong>• 가독성 우선:</strong> 본문은 16px 이상, 행간 1.6 유지
              </p>
              <p className="mb-2">
                <strong>• 계층 구조:</strong> 크기, 굵기, 색상으로 구분
              </p>
              <p>
                <strong>• 일관성:</strong> 한 페이지에 폰트 사이즈 5개 이하
              </p>
            </div>
            <div>
              <p className="mb-2">
                <strong>• 대비:</strong> 텍스트와 배경의 명도 대비 4.5:1 이상
              </p>
              <p className="mb-2">
                <strong>• 행 길이:</strong> 한글 45-75자, 영문 60-80자 권장
              </p>
              <p>
                <strong>• 굵기:</strong> 400, 600, 700, 900만 사용
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}