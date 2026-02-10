export function LogoColorComparison() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-gray-900 mb-4">T Stroke Color Analysis</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-3">와인색 vs 검은색</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            어떤 색상이 TIROSH 브랜드에 더 효과적일까?
          </p>
        </div>

        {/* Direct Comparison */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">1. 직접 비교</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Wine Version */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#C7215E] p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-[#C7215E] text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
                  Option A: 와인색 T
                </div>
              </div>
              <div className="flex justify-center items-center h-80 bg-gray-50 rounded-xl mb-6">
                <svg width="200" height="200" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" 
                        stroke="url(#wineGrad1)" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" 
                        stroke="#F59E0B" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  
                  {/* T Vertical - WINE COLOR */}
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="#C7215E"/>
                  
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" 
                        stroke="#C7215E" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                        fill="none"/>
                  
                  <defs>
                    <linearGradient id="wineGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#94A3B8"/>
                      <stop offset="100%" stopColor="#CBD5E1"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">T와 웨이브가 하나로 통합되어 보임</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">브랜드 색상 통일감 강함</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">"생명의 흐름" 메시지 명확</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span className="text-gray-700">T 형태 인식이 약간 덜 명확할 수 있음</span>
                </div>
              </div>
            </div>

            {/* Black Version */}
            <div className="bg-white rounded-2xl shadow-2xl border-2 border-gray-900 p-8">
              <div className="text-center mb-6">
                <div className="inline-block bg-gray-900 text-white px-6 py-2 rounded-full font-bold text-sm mb-4">
                  Option B: 검은색 T
                </div>
              </div>
              <div className="flex justify-center items-center h-80 bg-gray-50 rounded-xl mb-6">
                <svg width="200" height="200" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" 
                        stroke="url(#blackGrad1)" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" 
                        stroke="#F59E0B" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  
                  {/* T Vertical - BLACK */}
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                  
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" 
                        stroke="#C7215E" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                        fill="none"/>
                  
                  <defs>
                    <linearGradient id="blackGrad1" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#94A3B8"/>
                      <stop offset="100%" stopColor="#CBD5E1"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="space-y-3 text-sm">
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">T 이니셜이 즉시 눈에 들어옴</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">구조적 안정감, 명확한 분리</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-600 font-bold mt-0.5">✓</span>
                  <span className="text-gray-700">텍스트 색상과 자연스러운 연계</span>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-red-600 font-bold mt-0.5">✗</span>
                  <span className="text-gray-700">검은색이 브랜드 색상에 없어 이질적</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Size Testing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">2. 다양한 크기에서 비교</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Wine sizes */}
              <div>
                <h4 className="font-bold text-[#C7215E] mb-6 text-lg text-center">와인색 T</h4>
                <div className="flex flex-wrap items-end justify-center gap-8">
                  <div className="text-center">
                    <div className="mb-2 text-xs text-gray-500">16px</div>
                    <svg width="16" height="16" viewBox="0 0 160 160">
                      <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <rect x="74" y="55" width="12" height="55" rx="6" fill="#C7215E"/>
                      <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#C7215E" strokeWidth="10" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-xs text-gray-500">32px</div>
                    <svg width="32" height="32" viewBox="0 0 160 160">
                      <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <rect x="74" y="55" width="12" height="55" rx="6" fill="#C7215E"/>
                      <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#C7215E" strokeWidth="10" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-xs text-gray-500">64px</div>
                    <svg width="64" height="64" viewBox="0 0 160 160">
                      <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <rect x="74" y="55" width="12" height="55" rx="6" fill="#C7215E"/>
                      <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#C7215E" strokeWidth="10" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-600 text-center">
                  작은 크기: 와인색 T가 웨이브와 합쳐져서<br/>
                  <strong className="text-[#C7215E]">하나의 통합된 심볼</strong>처럼 보임
                </div>
              </div>

              {/* Black sizes */}
              <div>
                <h4 className="font-bold text-gray-900 mb-6 text-lg text-center">검은색 T</h4>
                <div className="flex flex-wrap items-end justify-center gap-8">
                  <div className="text-center">
                    <div className="mb-2 text-xs text-gray-500">16px</div>
                    <svg width="16" height="16" viewBox="0 0 160 160">
                      <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <rect x="74" y="55" width="12" height="55" rx="6" fill="#171717"/>
                      <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#C7215E" strokeWidth="10" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-xs text-gray-500">32px</div>
                    <svg width="32" height="32" viewBox="0 0 160 160">
                      <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <rect x="74" y="55" width="12" height="55" rx="6" fill="#171717"/>
                      <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#C7215E" strokeWidth="10" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                  <div className="text-center">
                    <div className="mb-2 text-xs text-gray-500">64px</div>
                    <svg width="64" height="64" viewBox="0 0 160 160">
                      <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <rect x="74" y="55" width="12" height="55" rx="6" fill="#171717"/>
                      <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#C7215E" strokeWidth="10" strokeLinecap="round" fill="none"/>
                    </svg>
                  </div>
                </div>
                <div className="mt-6 text-sm text-gray-600 text-center">
                  작은 크기: 검은색 T가 명확히 분리되어<br/>
                  <strong className="text-gray-900">"T" 글자가 즉시 인식</strong>됨
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Background Testing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">3. 다양한 배경에서 비교</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {/* Wine on White */}
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-white p-6 flex justify-center items-center h-40">
                <svg width="80" height="80" viewBox="0 0 160 160">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="74" y="55" width="12" height="55" rx="6" fill="#C7215E"/>
                  <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#C7215E" strokeWidth="10" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div className="bg-[#C7215E] px-4 py-3 text-xs text-white text-center font-semibold">와인 T / 흰 배경</div>
            </div>

            {/* Black on White */}
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-white p-6 flex justify-center items-center h-40">
                <svg width="80" height="80" viewBox="0 0 160 160">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="74" y="55" width="12" height="55" rx="6" fill="#171717"/>
                  <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#C7215E" strokeWidth="10" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div className="bg-gray-900 px-4 py-3 text-xs text-white text-center font-semibold">검정 T / 흰 배경</div>
            </div>

            {/* Wine on Dark */}
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-900 p-6 flex justify-center items-center h-40">
                <svg width="80" height="80" viewBox="0 0 160 160">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#CBD5E1" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#FCD34D" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="74" y="55" width="12" height="55" rx="6" fill="#E84A67"/>
                  <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#E84A67" strokeWidth="10" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div className="bg-[#C7215E] px-4 py-3 text-xs text-white text-center font-semibold">와인 T / 다크 배경</div>
            </div>

            {/* Black on Dark */}
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-900 p-6 flex justify-center items-center h-40">
                <svg width="80" height="80" viewBox="0 0 160 160">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#CBD5E1" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#FCD34D" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="74" y="55" width="12" height="55" rx="6" fill="#FFFFFF"/>
                  <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#E84A67" strokeWidth="10" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div className="bg-gray-900 px-4 py-3 text-xs text-white text-center font-semibold">검정→흰 T / 다크 배경</div>
            </div>
          </div>
          <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
            <div className="text-sm text-blue-900">
              <strong>배경 대응력:</strong> 와인색은 밝은 배경에서만 효과적. 다크모드에서는 밝게 변경 필요. 
              검은색은 밝은 배경에선 그대로, 다크 배경에선 흰색으로 반전하면 됨 → <strong>검은색이 더 유연</strong>
            </div>
          </div>
        </div>

        {/* Brand Story Analysis */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">4. 브랜드 스토리 전달력</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Wine Analysis */}
            <div className="bg-gradient-to-br from-[#FEF2F4] to-[#F9C0CE] rounded-2xl shadow-lg border-2 border-[#C7215E] p-8">
              <h4 className="text-2xl font-bold text-[#8B1538] mb-6">와인색 T의 의미</h4>
              <div className="space-y-4">
                <div className="bg-white/70 rounded-xl p-4">
                  <div className="font-bold text-[#C7215E] mb-2">💧 생명의 흐름</div>
                  <div className="text-sm text-gray-700">T 전체가 와인색 = 브랜드 전체가 "생명을 지킨다"는 메시지. T와 웨이브가 하나의 유기체처럼 연결.</div>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <div className="font-bold text-[#C7215E] mb-2">🎨 브랜드 통일성</div>
                  <div className="text-sm text-gray-700">와인→금색만 사용. 색상 개수 최소화로 미니멀 디자인 시스템과 일치.</div>
                </div>
                <div className="bg-white/70 rounded-xl p-4">
                  <div className="font-bold text-[#C7215E] mb-2">❤️ 의료적 연상</div>
                  <div className="text-sm text-gray-700">붉은색 = 혈액, 생명. 대량출혈 모니터링 서비스와 직관적 연결.</div>
                </div>
                <div className="bg-white/70 rounded-xl p-4 border-2 border-yellow-400">
                  <div className="font-bold text-yellow-700 mb-2">⚠️ 단점</div>
                  <div className="text-sm text-gray-700">T 이니셜 인식이 약함. "이게 T인가?" 하는 의문 가능. 색이 너무 많아 보일 수 있음.</div>
                </div>
              </div>
            </div>

            {/* Black Analysis */}
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-lg border-2 border-gray-900 p-8">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">검은색 T의 의미</h4>
              <div className="space-y-4">
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-gray-900 mb-2">🔤 명확한 이니셜</div>
                  <div className="text-sm text-gray-700">TIROSH의 T를 즉시 인식. 브랜드명 각인 효과 강함. "아, 이건 T구나" 즉각 이해.</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-gray-900 mb-2">⚖️ 구조적 안정감</div>
                  <div className="text-sm text-gray-700">검은색 = 기초, 프레임워크. 두 기둥 사이의 "중심축" 역할. 기술 회사의 견고함.</div>
                </div>
                <div className="bg-white rounded-xl p-4">
                  <div className="font-bold text-gray-900 mb-2">🎯 역할 분담</div>
                  <div className="text-sm text-gray-700">검은 T (구조) + 와인 웨이브 (생명의 흐름). 각 요소가 명확한 역할. 읽기 쉬움.</div>
                </div>
                <div className="bg-white rounded-xl p-4 border-2 border-yellow-400">
                  <div className="font-bold text-yellow-700 mb-2">⚠️ 단점</div>
                  <div className="text-sm text-gray-700">검은색이 Color System에 없음 (Neutral에는 있지만). 브랜드 색상(와인+금)과 분리됨.</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scoring Matrix */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">5. 종합 평가표</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-bold text-gray-900">평가 기준</th>
                  <th className="px-6 py-4 text-center font-bold text-[#C7215E]">와인색 T</th>
                  <th className="px-6 py-4 text-center font-bold text-gray-900">검은색 T</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">브랜드 색상 통일성</td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★★★</div>
                    <div className="text-xs text-gray-600">5/5 완벽</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★☆☆</div>
                    <div className="text-xs text-gray-600">3/5 Neutral 활용</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">T 이니셜 인식성</td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★☆☆</div>
                    <div className="text-xs text-gray-600">3/5 약간 애매</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★★★</div>
                    <div className="text-xs text-gray-600">5/5 즉시 인식</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">작은 크기 가독성 (16-32px)</td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★★☆</div>
                    <div className="text-xs text-gray-600">4/5 통합 심볼</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★★★</div>
                    <div className="text-xs text-gray-600">5/5 명확한 대비</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">배경 대응력 (라이트/다크)</td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★☆☆</div>
                    <div className="text-xs text-gray-600">3/5 조정 필요</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★★★</div>
                    <div className="text-xs text-gray-600">5/5 흑↔백 전환</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">의료 서비스 연상</td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★★★</div>
                    <div className="text-xs text-gray-600">5/5 혈액/생명</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★☆☆</div>
                    <div className="text-xs text-gray-600">3/5 중립적</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">AI 테크 기업 이미지</td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★☆☆</div>
                    <div className="text-xs text-gray-600">3/5 따뜻함 강조</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★★★</div>
                    <div className="text-xs text-gray-600">5/5 기술적 안정감</div>
                  </td>
                </tr>
                <tr className="hover:bg-gray-50">
                  <td className="px-6 py-4 font-semibold text-gray-900">디자인 시스템 확장성</td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★★☆</div>
                    <div className="text-xs text-gray-600">4/5 색상 변형</div>
                  </td>
                  <td className="px-6 py-4 text-center">
                    <div className="text-2xl mb-1">★★★★★</div>
                    <div className="text-xs text-gray-600">5/5 유연함</div>
                  </td>
                </tr>
                <tr className="bg-gradient-to-r from-amber-50 to-orange-50 font-bold">
                  <td className="px-6 py-4 text-gray-900 text-lg">총점 (35점 만점)</td>
                  <td className="px-6 py-4 text-center text-[#C7215E] text-2xl">27점</td>
                  <td className="px-6 py-4 text-center text-gray-900 text-2xl">31점</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Final Verdict */}
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl p-12 text-white">
          <h3 className="text-4xl font-black mb-8 text-center">💡 최종 분석 결과</h3>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-xl font-bold text-[#E84A67] mb-4">와인색 T를 선택한다면</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✓ 브랜드 정체성을 "생명 보호"에 집중</li>
                <li>✓ 의료적 메시지를 강하게 전달</li>
                <li>✓ 컬러풀하고 따뜻한 이미지</li>
                <li>✓ 명함의 웨이브 디자인과 강력한 연계</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-white/20 text-xs opacity-75">
                적합: 의료 중심 브랜딩, 감성적 어프로치
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border-2 border-[#FCD34D]">
              <h4 className="text-xl font-bold text-[#FCD34D] mb-4">검은색 T를 선택한다면 ⭐</h4>
              <ul className="space-y-2 text-sm opacity-90">
                <li>✓ 브랜드명(TIROSH)을 명확히 각인</li>
                <li>✓ AI 테크 기업 이미지 강화</li>
                <li>✓ 다양한 환경에서 안정적 사용</li>
                <li>✓ T(구조) + 웨이브(흐름) 역할 분담</li>
              </ul>
              <div className="mt-4 pt-4 border-t border-[#FCD34D]/30 text-xs opacity-90 font-semibold">
                적합: 기술 기업 브랜딩, 범용성 중시
              </div>
            </div>
          </div>

          <div className="bg-[#FCD34D] text-gray-900 rounded-xl p-8 text-center">
            <div className="text-sm font-bold mb-2 opacity-75">제 추천</div>
            <div className="text-3xl font-black mb-4">검은색 T (Option B)</div>
            <div className="text-sm leading-relaxed max-w-2xl mx-auto">
              <strong>이유:</strong> TIROSH는 의료 AI <strong>기술</strong> 회사입니다. 
              "생명을 지키는 기술"이 핵심이므로, <strong>T(기술/구조/브랜드명)</strong>는 검은색으로 명확히 하고, 
              <strong>웨이브(생명/흐름)</strong>는 와인색으로 강조하는 것이 메시지를 더 효과적으로 전달합니다.
              <br/><br/>
              게다가 작은 크기에서의 가독성, 다크모드 대응, 확장성 모두 검은색이 우수합니다.
              <br/><br/>
              <span className="text-[#C7215E] font-bold">단, 흰색 배경에서는 T를 검은색, 다크 배경에서는 T를 흰색으로 전환하는 규칙 필요.</span>
            </div>
          </div>
        </div>

        {/* Bonus: Hybrid Option */}
        <div className="mt-16 bg-gradient-to-br from-purple-50 to-pink-50 border-2 border-purple-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-purple-900 mb-6">🎨 보너스: 하이브리드 옵션</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-sm text-purple-700 mb-3 font-semibold">Option C: 그라디언트 T</div>
              <div className="flex justify-center mb-4">
                <svg width="100" height="100" viewBox="0 0 160 160">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="74" y="55" width="12" height="55" rx="6" fill="url(#hybridGrad)"/>
                  <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#C7215E" strokeWidth="10" strokeLinecap="round" fill="none"/>
                  <defs>
                    <linearGradient id="hybridGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#171717"/>
                      <stop offset="100%" stopColor="#C7215E"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-xs text-gray-600">위(검은색) → 아래(와인색) 그라디언트</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-sm text-purple-700 mb-3 font-semibold">Option D: 컨텍스트별 변경</div>
              <div className="text-sm text-gray-700 space-y-2">
                <div>• <strong>메인 로고:</strong> 검은색 T</div>
                <div>• <strong>의료 페이지:</strong> 와인색 T</div>
                <div>• <strong>기술 페이지:</strong> 검은색 T</div>
                <div>• <strong>명함:</strong> 와인색 T (웨이브 연계)</div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-md">
              <div className="text-sm text-purple-700 mb-3 font-semibold">Option E: 아웃라인 T</div>
              <div className="flex justify-center mb-4">
                <svg width="100" height="100" viewBox="0 0 160 160">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="74" y="55" width="12" height="55" rx="6" fill="none" stroke="#171717" strokeWidth="3"/>
                  <path d="M 55 58 Q 68 52, 80 58 Q 92 64, 105 58" stroke="#C7215E" strokeWidth="10" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div className="text-xs text-gray-600">속이 빈 T로 가벼운 느낌</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}