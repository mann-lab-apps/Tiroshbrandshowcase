import { Maximize2, Circle, Droplet, Grid3x3 } from 'lucide-react';

export function DesignTokens() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-black text-gray-900 mb-4">Design Tokens</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            디자이너 없이도 일관성 있는 선택을 위한 <strong>최소화된 토큰 시스템</strong>
          </p>
        </div>

        {/* Spacing System */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 mb-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Maximize2 className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Spacing System</h2>
            </div>
            <p className="text-blue-100">8pt 기반 간격 시스템. 레이아웃 일관성 유지</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Scale */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Spacing Scale</h3>
              <div className="space-y-4">
                {[
                  { name: 'xs', value: '4px', use: '매우 작은 여백 (아이콘-텍스트 간격)' },
                  { name: 'sm', value: '8px', use: '작은 여백 (버튼 내부 패딩)' },
                  { name: 'md', value: '16px', use: '기본 여백 (카드 패딩, 요소 간격)' },
                  { name: 'lg', value: '24px', use: '큰 여백 (섹션 내부)' },
                  { name: 'xl', value: '32px', use: '매우 큰 여백 (섹션 간격)' },
                  { name: '2xl', value: '48px', use: '특대 여백 (페이지 섹션)' },
                  { name: '3xl', value: '64px', use: '초대형 여백 (히어로 섹션)' },
                ].map((spacing) => (
                  <div key={spacing.name} className="flex items-center gap-4">
                    <div className="w-16 text-sm font-bold text-gray-700">{spacing.name}</div>
                    <div 
                      className="bg-[#C7215E] rounded"
                      style={{ width: spacing.value, height: '32px' }}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-mono text-gray-500">{spacing.value}</div>
                      <div className="text-xs text-gray-400">{spacing.use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">사용 예시</h3>
              
              {/* Card Example */}
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Card Component</div>
                <div className="border-2 border-gray-300 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-10 h-10 rounded-full bg-[#F59E0B]"></div>
                    <div>
                      <div className="font-bold text-gray-900">타이틀</div>
                      <div className="text-sm text-gray-600">서브 텍스트</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-700 leading-relaxed">
                    카드 내부 콘텐츠는 md(16px) 패딩 사용
                  </div>
                </div>
                <div className="text-xs text-gray-400 mt-2">padding: md (16px)</div>
              </div>

              {/* Button Example */}
              <div className="mb-6">
                <div className="text-sm text-gray-500 mb-2">Button Component</div>
                <button className="bg-[#C7215E] text-white px-4 py-2 rounded-lg font-semibold">
                  버튼 텍스트
                </button>
                <div className="text-xs text-gray-400 mt-2">
                  padding: sm (8px) vertical, md (16px) horizontal
                </div>
              </div>

              {/* Section Example */}
              <div>
                <div className="text-sm text-gray-500 mb-2">Section Spacing</div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
                  <div className="text-sm text-gray-700">Section 1</div>
                </div>
                <div className="h-8 bg-gradient-to-b from-blue-100 to-blue-200 flex items-center justify-center">
                  <div className="text-xs font-mono text-blue-900">xl (32px)</div>
                </div>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 bg-gray-50">
                  <div className="text-sm text-gray-700">Section 2</div>
                </div>
                <div className="text-xs text-gray-400 mt-2">섹션 간격: xl (32px)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Border Radius */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-purple-600 to-pink-700 rounded-2xl p-6 mb-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Circle className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Border Radius</h2>
            </div>
            <p className="text-purple-100">요소의 모서리 둥글기. 미니멀하고 현대적인 느낌</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Scale */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Radius Scale</h3>
              <div className="space-y-6">
                {[
                  { name: 'none', value: '0px', use: '직각 (데이터 테이블, 격자)' },
                  { name: 'sm', value: '4px', use: '작은 요소 (태그, 배지)' },
                  { name: 'md', value: '8px', use: '기본 (버튼, 인풋)' },
                  { name: 'lg', value: '12px', use: '카드, 모달' },
                  { name: 'xl', value: '16px', use: '큰 카드, 섹션' },
                  { name: 'full', value: '9999px', use: '완전 원형 (아바타, 알림 점)' },
                ].map((radius) => (
                  <div key={radius.name} className="flex items-center gap-4">
                    <div className="w-16 text-sm font-bold text-gray-700">{radius.name}</div>
                    <div 
                      className="bg-gradient-to-br from-[#F59E0B] to-[#C7215E] w-24 h-16 shadow-md"
                      style={{ borderRadius: radius.value }}
                    />
                    <div className="flex-1">
                      <div className="text-sm font-mono text-gray-500">{radius.value}</div>
                      <div className="text-xs text-gray-400">{radius.use}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Examples */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">컴포넌트별 추천</h3>
              
              <div className="space-y-6">
                {/* Buttons */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Buttons</div>
                  <div className="flex gap-3 flex-wrap">
                    <button className="bg-[#C7215E] text-white px-4 py-2 rounded-md font-semibold text-sm">
                      md (8px)
                    </button>
                    <button className="bg-[#F59E0B] text-white px-4 py-2 rounded-lg font-semibold text-sm">
                      lg (12px)
                    </button>
                    <button className="bg-gray-600 text-white px-4 py-2 rounded-full font-semibold text-sm">
                      full
                    </button>
                  </div>
                </div>

                {/* Cards */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Cards</div>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-xl p-4 border border-gray-300">
                    <div className="text-sm text-gray-700 font-semibold mb-2">카드 타이틀</div>
                    <div className="text-xs text-gray-600">xl (16px) 추천</div>
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Tags / Badges</div>
                  <div className="flex gap-2 flex-wrap">
                    <span className="bg-[#C7215E] text-white px-3 py-1 rounded-sm text-xs font-semibold">
                      sm (4px)
                    </span>
                    <span className="bg-[#F59E0B] text-white px-3 py-1 rounded-md text-xs font-semibold">
                      md (8px)
                    </span>
                    <span className="bg-gray-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      full
                    </span>
                  </div>
                </div>

                {/* Avatars */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Avatars</div>
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#F59E0B] to-[#C7215E]"></div>
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#94A3B8] to-[#475569]"></div>
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#C7215E] to-[#9C1750]"></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">항상 full (완전 원형)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shadows */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-slate-700 to-slate-900 rounded-2xl p-6 mb-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Droplet className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Shadows</h2>
            </div>
            <p className="text-slate-200">요소의 깊이와 계층 표현. 기본 2가지만 사용</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Scale */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">기본 Shadow</h3>
              <div className="space-y-6">
                {[
                  { 
                    name: 'md', 
                    value: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                    css: 'shadow-md',
                    use: '기본 요소 (버튼, 카드, 입력 필드)'
                  },
                  { 
                    name: 'lg', 
                    value: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    css: 'shadow-lg',
                    use: '떠있는 요소 (모달, 드롭다운, 팝업)'
                  },
                ].map((shadow) => (
                  <div key={shadow.name}>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-16 text-sm font-bold text-gray-700">{shadow.name}</div>
                      <div 
                        className="bg-white border border-gray-200 w-40 h-24 rounded-lg flex items-center justify-center"
                        style={{ boxShadow: shadow.value }}
                      >
                        <div className="text-sm text-gray-600 font-semibold">{shadow.name}</div>
                      </div>
                    </div>
                    <div className="ml-20 space-y-1">
                      <div className="text-xs font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded inline-block">{shadow.css}</div>
                      <div className="text-sm text-gray-700">{shadow.use}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-amber-50 border-2 border-amber-300 rounded-lg">
                <div className="text-sm font-bold text-amber-900 mb-2">📏 사용 원칙</div>
                <div className="text-xs text-amber-800 space-y-1">
                  <div>• 기본은 <strong>md</strong> 사용</div>
                  <div>• 강조가 필요하면 <strong>lg</strong></div>
                  <div>• 한 화면에 lg는 1-2개만</div>
                </div>
              </div>
            </div>

            {/* Examples */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">적용 예시</h3>
              
              <div className="space-y-8">
                {/* Cards */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Cards & Buttons</div>
                  <div className="space-y-3">
                    <div className="bg-white rounded-lg p-4 shadow-md border border-gray-100">
                      <div className="text-sm font-semibold mb-1">카드 컴포넌트</div>
                      <div className="text-xs text-gray-500">shadow-md 사용</div>
                    </div>
                    <button className="bg-[#C7215E] text-white px-6 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-shadow">
                      버튼 (shadow-md)
                    </button>
                  </div>
                </div>

                {/* Modal */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Modal & Dropdown</div>
                  <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                    <div className="text-sm font-semibold mb-2">모달 창</div>
                    <div className="text-xs text-gray-500 mb-3">shadow-lg 사용</div>
                    <div className="flex gap-2">
                      <button className="bg-[#F59E0B] text-white px-4 py-2 rounded-lg text-xs font-semibold">확인</button>
                      <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg text-xs font-semibold">취소</button>
                    </div>
                  </div>
                </div>

                {/* Brand Shadow */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">브랜드 색상 그림자 (선택)</div>
                  <div className="flex gap-3 flex-wrap">
                    <div 
                      className="bg-[#F59E0B] text-white px-6 py-3 rounded-lg font-semibold text-sm"
                      style={{ boxShadow: '0 4px 14px 0 rgba(245, 158, 11, 0.4)' }}
                    >
                      Fire Pillar
                    </div>
                    <div 
                      className="bg-[#C7215E] text-white px-6 py-3 rounded-lg font-semibold text-sm"
                      style={{ boxShadow: '0 4px 14px 0 rgba(199, 33, 94, 0.4)' }}
                    >
                      Wine
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-2">강조용으로만 사용</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Layout Grid */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-emerald-600 to-teal-700 rounded-2xl p-6 mb-8 text-white">
            <div className="flex items-center gap-3 mb-2">
              <Grid3x3 className="w-8 h-8" />
              <h2 className="text-3xl font-bold">Layout Grid</h2>
            </div>
            <p className="text-emerald-100">반응형 레이아웃 기본 설정</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Breakpoints */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Breakpoints</h3>
              <div className="space-y-4">
                {[
                  { name: 'Mobile', size: '< 768px', cols: '1 column', gap: '16px' },
                  { name: 'Desktop', size: '≥ 768px', cols: '2-4 columns', gap: '24px' },
                ].map((bp) => (
                  <div key={bp.name} className="border-2 border-gray-300 rounded-xl p-6 bg-gradient-to-br from-gray-50 to-white">
                    <div className="flex items-center justify-between mb-3">
                      <div className="font-bold text-xl text-gray-900">{bp.name}</div>
                      <div className="text-xs font-mono text-white bg-gray-700 px-3 py-1 rounded-full">
                        {bp.size}
                      </div>
                    </div>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Grid:</span>
                        <span className="font-semibold">{bp.cols}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-gray-500">Gap:</span>
                        <span className="font-semibold">{bp.gap}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 p-6 bg-emerald-50 border-2 border-emerald-300 rounded-xl">
                <div className="text-sm font-bold text-emerald-900 mb-3">📦 Container 기본값</div>
                <div className="text-sm text-emerald-800 space-y-2">
                  <div className="flex items-center justify-between">
                    <span>Max Width:</span>
                    <span className="font-mono font-bold">1280px</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Padding:</span>
                    <span className="font-mono font-bold">16px (md)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Center:</span>
                    <span className="font-mono font-bold">margin: 0 auto</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid Examples */}
            <div className="bg-white rounded-2xl shadow-xl border-2 border-gray-200 p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Grid 예시</h3>
              
              <div className="space-y-6">
                {/* 1 Column */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Mobile (1 Column)</div>
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-gradient-to-r from-[#F59E0B] to-[#C7215E] rounded-lg h-20 flex items-center justify-center text-white font-semibold">
                      Full Width
                    </div>
                  </div>
                </div>

                {/* 2 Columns */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Desktop (2 Columns)</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-gradient-to-r from-[#F59E0B] to-[#C7215E] rounded-lg h-20 flex items-center justify-center text-white text-sm font-semibold">
                      Col 1
                    </div>
                    <div className="bg-gradient-to-r from-[#94A3B8] to-[#64748B] rounded-lg h-20 flex items-center justify-center text-white text-sm font-semibold">
                      Col 2
                    </div>
                  </div>
                </div>

                {/* 3 Columns */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Desktop (3 Columns)</div>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-gradient-to-r from-[#F59E0B] to-[#C7215E] rounded-lg h-20"></div>
                    <div className="bg-gradient-to-r from-[#94A3B8] to-[#64748B] rounded-lg h-20"></div>
                    <div className="bg-gradient-to-r from-[#C7215E] to-[#9C1750] rounded-lg h-20"></div>
                  </div>
                </div>

                {/* 4 Columns */}
                <div>
                  <div className="text-sm font-semibold text-gray-700 mb-3">Desktop (4 Columns)</div>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="bg-gradient-to-r from-[#F59E0B] to-[#C7215E] rounded-lg h-16"></div>
                    <div className="bg-gradient-to-r from-[#94A3B8] to-[#64748B] rounded-lg h-16"></div>
                    <div className="bg-gradient-to-r from-[#C7215E] to-[#9C1750] rounded-lg h-16"></div>
                    <div className="bg-gradient-to-r from-[#F59E0B] to-[#EF7D00] rounded-lg h-16"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Summary */}
        <div className="bg-gradient-to-br from-gray-900 to-slate-800 rounded-2xl shadow-2xl p-12 text-white">
          <h3 className="text-4xl font-black mb-8 text-center">🎯 Design Token 요약</h3>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl mb-3">📐</div>
              <div className="font-bold text-xl mb-2 text-amber-300">Spacing</div>
              <div className="text-sm text-slate-200 space-y-1">
                <div>• 8pt 기반 시스템</div>
                <div>• xs (4px) ~ 3xl (64px)</div>
                <div>• 기본: md (16px)</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl mb-3">⭕</div>
              <div className="font-bold text-xl mb-2 text-purple-300">Radius</div>
              <div className="text-sm text-slate-200 space-y-1">
                <div>• none ~ full</div>
                <div>• 버튼: md (8px)</div>
                <div>• 카드: xl (16px)</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl mb-3">💧</div>
              <div className="font-bold text-xl mb-2 text-blue-300">Shadows</div>
              <div className="text-sm text-slate-200 space-y-1">
                <div>• 2가지만: md, lg</div>
                <div>• 카드: md</div>
                <div>• 모달: lg</div>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur rounded-xl p-6">
              <div className="text-3xl mb-3">📱</div>
              <div className="font-bold text-xl mb-2 text-emerald-300">Grid</div>
              <div className="text-sm text-slate-200 space-y-1">
                <div>• Mobile / Desktop</div>
                <div>• max-width: 1280px</div>
                <div>• gap: 16px 기본</div>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center text-slate-300">
            디자이너 없어도 <strong className="text-amber-300">이 토큰들만</strong> 지키면<br/>
            일관성 있는 TIROSH 브랜드 경험 구축 가능! 🎨
          </div>
        </div>
      </div>
    </div>
  );
}
