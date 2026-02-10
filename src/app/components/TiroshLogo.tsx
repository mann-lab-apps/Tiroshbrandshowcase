export function TiroshLogo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-16">
      <div className="container mx-auto px-4 max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-black text-gray-900 mb-4">TIROSH</h1>
          <h2 className="text-3xl font-bold text-gray-700 mb-3">Final Logo Design</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            브라켓(두 기둥) + T 이니셜 + 웨이브 흐름
          </p>
        </div>

        {/* Brand Concept */}
        <div className="mb-16 bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-2xl shadow-2xl overflow-hidden">
          <div className="p-8 text-white">
            <h3 className="text-2xl font-black mb-4">디자인 컨셉</h3>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-lg font-bold mb-2">[ ] Brackets</div>
                <div className="opacity-90">두 기둥의 보호</div>
                <div className="opacity-75 mt-2">불기둥 + 구름기둥</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-lg font-bold mb-2">T Initial</div>
                <div className="opacity-90">TIROSH 이니셜</div>
                <div className="opacity-75 mt-2">브랜드 정체성</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 backdrop-blur-sm">
                <div className="text-lg font-bold mb-2">~ Wave Flow</div>
                <div className="opacity-90">생명의 흐름</div>
                <div className="opacity-75 mt-2">혈액, 모니터링</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Logo Versions */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Primary Versions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Version 1: Standard */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="text-sm text-gray-500 mb-4">V1 - Standard</div>
              <div className="flex justify-center items-center h-64 bg-gray-50 rounded-xl mb-4">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left Bracket - Cloud Pillar */}
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" 
                        stroke="#94A3B8" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  
                  {/* Right Bracket - Fire Pillar */}
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" 
                        stroke="#F59E0B" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  
                  {/* T Shape with Wave */}
                  {/* T Vertical Stroke */}
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                  
                  {/* T Horizontal Top - Wave Shape */}
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" 
                        stroke="#C7215E" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                        fill="none"/>
                </svg>
              </div>
              <div className="text-xs text-gray-600 leading-relaxed">
                기본형. T의 상단이 웨이브 흐름. 명확한 브랜드 메시지.
              </div>
            </div>

            {/* Version 3: Minimalist */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="text-sm text-gray-500 mb-4">V3 - Minimalist</div>
              <div className="flex justify-center items-center h-64 bg-gray-50 rounded-xl mb-4">
                <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Left Bracket - Thinner */}
                  <path d="M 48 45 L 38 45 L 38 115 L 48 115" 
                        stroke="#94A3B8" 
                        strokeWidth="6" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  
                  {/* Right Bracket - Thinner */}
                  <path d="M 112 45 L 122 45 L 122 115 L 112 115" 
                        stroke="#F59E0B" 
                        strokeWidth="6" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  
                  {/* T Vertical - Thin */}
                  <rect x="76" y="55" width="8" height="50" rx="4" fill="#171717"/>
                  
                  {/* T Top - Single Clean Wave */}
                  <path d="M 58 59 Q 68 54, 80 59 Q 92 64, 102 59" 
                        stroke="#C7215E" 
                        strokeWidth="8" 
                        strokeLinecap="round"
                        fill="none"/>
                </svg>
              </div>
              <div className="text-xs text-gray-600 leading-relaxed">
                미니멀. 얇은 라인으로 작은 사이즈에 최적화. 파비콘/앱 아이콘용.
              </div>
            </div>
          </div>
        </div>

        {/* Alternative Styles */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Style Variations</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Solid Fill Version */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="text-sm text-gray-500 mb-3">Solid Fill</div>
              <div className="flex justify-center items-center h-48 bg-gray-50 rounded-xl mb-3">
                <svg width="120" height="120" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Filled Brackets */}
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120 L 45 110 L 40 110 L 40 50 L 45 50 Z" 
                        fill="#94A3B8"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120 L 115 110 L 120 110 L 120 50 L 115 50 Z" 
                        fill="#F59E0B"/>
                  
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" 
                        stroke="#C7215E" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                        fill="none"/>
                </svg>
              </div>
              <div className="text-xs text-gray-600">브라켓이 면으로 채워짐</div>
            </div>

            {/* Gradient Version */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="text-sm text-gray-500 mb-3">Gradient</div>
              <div className="flex justify-center items-center h-48 bg-gray-50 rounded-xl mb-3">
                <svg width="120" height="120" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" 
                        stroke="url(#gradL)" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" 
                        stroke="url(#gradR)" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="url(#gradT)"/>
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" 
                        stroke="url(#gradW)" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                        fill="none"/>
                  
                  <defs>
                    <linearGradient id="gradL" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#CBD5E1"/>
                      <stop offset="100%" stopColor="#94A3B8"/>
                    </linearGradient>
                    <linearGradient id="gradR" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#FCD34D"/>
                      <stop offset="100%" stopColor="#F59E0B"/>
                    </linearGradient>
                    <linearGradient id="gradT" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="#171717"/>
                      <stop offset="100%" stopColor="#404040"/>
                    </linearGradient>
                    <linearGradient id="gradW" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C7215E"/>
                      <stop offset="50%" stopColor="#E84A67"/>
                      <stop offset="100%" stopColor="#C7215E"/>
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="text-xs text-gray-600">그라디언트 적용</div>
            </div>

            {/* Monochrome */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
              <div className="text-sm text-gray-500 mb-3">Monochrome</div>
              <div className="flex justify-center items-center h-48 bg-gray-50 rounded-xl mb-3">
                <svg width="120" height="120" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" 
                        stroke="#171717" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" 
                        stroke="#171717" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" 
                        stroke="#171717" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                        fill="none"/>
                </svg>
              </div>
              <div className="text-xs text-gray-600">단색 버전</div>
            </div>
          </div>
        </div>

        {/* Dark Mode Options */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Dark Mode Options</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {/* Option 1: All White */}
            <div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 p-6">
              <div className="text-sm text-gray-400 mb-3">Option 1: Pure White</div>
              <div className="flex justify-center items-center h-48 bg-gray-800 rounded-xl mb-3">
                <svg width="120" height="120" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 모든 요소 흰색 */}
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" 
                        stroke="#FFFFFF" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" 
                        stroke="#FFFFFF" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="#FFFFFF"/>
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" 
                        stroke="#FFFFFF" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                        fill="none"/>
                </svg>
              </div>
              <div className="text-xs text-gray-400">가장 심플. 명확한 대비. 다크모드 표준.</div>
            </div>

            {/* Option 2: All Wine */}
            <div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 p-6">
              <div className="text-sm text-gray-400 mb-3">Option 2: Pure Wine</div>
              <div className="flex justify-center items-center h-48 bg-gray-800 rounded-xl mb-3">
                <svg width="120" height="120" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 모든 요소 와인색 */}
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" 
                        stroke="#E84A67" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" 
                        stroke="#E84A67" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="#E84A67"/>
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" 
                        stroke="#E84A67" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                        fill="none"/>
                </svg>
              </div>
              <div className="text-xs text-gray-400">브랜드 색상 강조. 가장 독특. 생명 메시지.</div>
            </div>

            {/* Option 3: All Gray */}
            <div className="bg-gray-900 rounded-2xl shadow-lg border border-gray-700 p-6">
              <div className="text-sm text-gray-400 mb-3">Option 3: Soft Gray</div>
              <div className="flex justify-center items-center h-48 bg-gray-800 rounded-xl mb-3">
                <svg width="120" height="120" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 모든 요소 회색 */}
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" 
                        stroke="#CBD5E1" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" 
                        stroke="#CBD5E1" 
                        strokeWidth="10" 
                        strokeLinecap="round" 
                        strokeLinejoin="round"
                        fill="none"/>
                  
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="#CBD5E1"/>
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" 
                        stroke="#CBD5E1" 
                        strokeWidth="12" 
                        strokeLinecap="round"
                        fill="none"/>
                </svg>
              </div>
              <div className="text-xs text-gray-400">부드러운 대비. 눈에 편함. 미니멀.</div>
            </div>
          </div>

          {/* 비교 분석 */}
          <div className="mt-8 bg-gradient-to-br from-[#C7215E] to-[#8B1538] rounded-2xl shadow-lg p-8 text-white">
            <h4 className="text-xl font-bold mb-6">💡 다크모드 색상 선택 가이드</h4>
            <div className="grid md:grid-cols-3 gap-6 text-sm">
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="font-bold mb-2">✅ Option 1 (흰색)</div>
                <ul className="space-y-1 opacity-90 text-xs">
                  <li>• 가독성 최고</li>
                  <li>• 표준 다크모드</li>
                  <li>• 범용성 우수</li>
                  <li>• 추천: 일반 웹/앱</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="font-bold mb-2">🎨 Option 2 (와인색)</div>
                <ul className="space-y-1 opacity-90 text-xs">
                  <li>• 브랜드 정체성 강함</li>
                  <li>• 생명/의료 메시지</li>
                  <li>• 가장 독특함</li>
                  <li>• 추천: 브랜드 강조 필요시</li>
                </ul>
              </div>
              <div className="bg-white/10 rounded-xl p-4 backdrop-blur-sm">
                <div className="font-bold mb-2">🌙 Option 3 (회색)</div>
                <ul className="space-y-1 opacity-90 text-xs">
                  <li>• 눈에 편안함</li>
                  <li>• 미니멀 디자인</li>
                  <li>• 부드러운 인상</li>
                  <li>• 추천: 프리미엄 감성</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Size Testing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Size Testing (V1 기준)</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12">
            <div className="flex flex-wrap items-end justify-center gap-16">
              {/* 16px - Favicon */}
              <div className="text-center">
                <div className="mb-3 text-xs text-gray-500 font-semibold">16px</div>
                <div className="mb-2">
                  <svg width="16" height="16" viewBox="0 0 160 160" className="mx-auto">
                    <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                    <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#C7215E" strokeWidth="12" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div className="text-xs text-gray-500">Favicon</div>
              </div>

              {/* 32px */}
              <div className="text-center">
                <div className="mb-3 text-xs text-gray-500 font-semibold">32px</div>
                <div className="mb-2">
                  <svg width="32" height="32" viewBox="0 0 160 160" className="mx-auto">
                    <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                    <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#C7215E" strokeWidth="12" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div className="text-xs text-gray-500">App Icon</div>
              </div>

              {/* 48px */}
              <div className="text-center">
                <div className="mb-3 text-xs text-gray-500 font-semibold">48px</div>
                <div className="mb-2">
                  <svg width="48" height="48" viewBox="0 0 160 160" className="mx-auto">
                    <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                    <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#C7215E" strokeWidth="12" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div className="text-xs text-gray-500">Small UI</div>
              </div>

              {/* 64px */}
              <div className="text-center">
                <div className="mb-3 text-xs text-gray-500 font-semibold">64px</div>
                <div className="mb-2">
                  <svg width="64" height="64" viewBox="0 0 160 160" className="mx-auto">
                    <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                    <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#C7215E" strokeWidth="12" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div className="text-xs text-gray-500">Navigation</div>
              </div>

              {/* 96px */}
              <div className="text-center">
                <div className="mb-3 text-xs text-gray-500 font-semibold">96px</div>
                <div className="mb-2">
                  <svg width="96" height="96" viewBox="0 0 160 160" className="mx-auto">
                    <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                    <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#C7215E" strokeWidth="12" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div className="text-xs text-gray-500">Header</div>
              </div>

              {/* 128px */}
              <div className="text-center">
                <div className="mb-3 text-xs text-gray-500 font-semibold">128px</div>
                <div className="mb-2">
                  <svg width="128" height="128" viewBox="0 0 160 160" className="mx-auto">
                    <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                    <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#C7215E" strokeWidth="12" strokeLinecap="round" fill="none"/>
                  </svg>
                </div>
                <div className="text-xs text-gray-500">Hero</div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <div className="text-center text-sm text-gray-600">
                ✅ 모든 사이즈에서 명확하게 인식 가능 • 16px에서도 브라켓 구분 가능
              </div>
            </div>
          </div>
        </div>

        {/* With Logotype */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Logo + Logotype Combinations</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Horizontal */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="text-sm text-gray-500 mb-6">Horizontal Layout</div>
              <div className="flex justify-center items-center h-32 bg-gray-50 rounded-xl">
                <div className="flex items-center gap-4">
                  <svg width="64" height="64" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                    <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#C7215E" strokeWidth="12" strokeLinecap="round" fill="none"/>
                  </svg>
                  <div className="text-5xl font-black text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                    TIROSH
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-4">웹사이트 헤더, 명함 가로 레이아웃</div>
            </div>

            {/* Vertical */}
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
              <div className="text-sm text-gray-500 mb-6">Vertical Layout</div>
              <div className="flex justify-center items-center h-32 bg-gray-50 rounded-xl">
                <div className="flex flex-col items-center gap-2">
                  <svg width="48" height="48" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                    <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                    <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#C7215E" strokeWidth="12" strokeLinecap="round" fill="none"/>
                  </svg>
                  <div className="text-2xl font-black text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
                    TIROSH
                  </div>
                </div>
              </div>
              <div className="text-xs text-gray-600 mt-4">모바일 앱, 세로 명함</div>
            </div>
          </div>
        </div>

        {/* Background Testing */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Background Testing</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {/* White Background */}
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-white p-8 flex justify-center items-center h-48">
                <svg width="80" height="80" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#C7215E" strokeWidth="12" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div className="bg-gray-100 px-4 py-3 text-xs text-gray-700 text-center">White #FFFFFF</div>
            </div>

            {/* Light Gray */}
            <div className="rounded-2xl shadow-lg overflow-hidden">
              <div className="bg-gray-100 p-8 flex justify-center items-center h-48">
                <svg width="80" height="80" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#94A3B8" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#F59E0B" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="#171717"/>
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#C7215E" strokeWidth="12" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div className="bg-gray-200 px-4 py-3 text-xs text-gray-700 text-center">Gray #F5F5F5</div>
            </div>
          </div>

          {/* Wine & Dark Backgrounds - Monochrome Only */}
          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {/* Wine Background - All White */}
            <div className="rounded-2xl shadow-lg overflow-hidden border-2 border-amber-300">
              <div className="bg-[#C7215E] p-8 flex justify-center items-center h-48">
                <svg width="80" height="80" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* 모든 요소 흰색 */}
                  <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                  <rect x="74" y="50" width="12" height="60" rx="6" fill="#FFFFFF"/>
                  <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div className="bg-[#8B1538] px-4 py-3 text-xs text-white text-center font-semibold">
                Wine Background → All White
              </div>
            </div>

            {/* Dark Background - All White or All Wine */}
            <div className="rounded-2xl shadow-lg overflow-hidden border-2 border-amber-300">
              <div className="bg-gray-900 p-8 flex flex-col gap-4 h-48 justify-center">
                <div className="flex justify-center gap-4 items-center">
                  {/* Option A: All White */}
                  <div className="text-center">
                    <svg width="60" height="60" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#FFFFFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <rect x="74" y="50" width="12" height="60" rx="6" fill="#FFFFFF"/>
                      <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#FFFFFF" strokeWidth="12" strokeLinecap="round" fill="none"/>
                    </svg>
                    <div className="text-xs text-gray-400 mt-1">White</div>
                  </div>
                  
                  <div className="text-gray-500 text-sm">or</div>

                  {/* Option B: All Wine */}
                  <div className="text-center">
                    <svg width="60" height="60" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M 45 40 L 35 40 L 35 120 L 45 120" stroke="#E84A67" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <path d="M 115 40 L 125 40 L 125 120 L 115 120" stroke="#E84A67" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
                      <rect x="74" y="50" width="12" height="60" rx="6" fill="#E84A67"/>
                      <path d="M 55 56 Q 65 50, 80 56 Q 95 62, 105 56" stroke="#E84A67" strokeWidth="12" strokeLinecap="round" fill="none"/>
                    </svg>
                    <div className="text-xs text-gray-400 mt-1">Wine</div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-950 px-4 py-3 text-xs text-white text-center font-semibold">
                Dark Background → White or Wine
              </div>
            </div>
          </div>

          {/* 설명 */}
          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-6">
            <h4 className="font-bold text-amber-900 mb-3 text-sm">💡 배경색별 가이드</h4>
            <div className="grid md:grid-cols-2 gap-4 text-xs text-amber-900">
              <div>
                <strong>흰색/밝은 회색 배경:</strong>
                <div className="mt-1 text-amber-800">→ 원본 컬러 (기둥 2가지 색 유지)</div>
              </div>
              <div>
                <strong>와인색/어두운 배경:</strong>
                <div className="mt-1 text-amber-800">→ 단색 전환 (흰색 또는 와인색)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Design Specifications */}
        <div className="mb-16">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">Design Specifications</h3>
          <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">🎨 Colors</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#94A3B8]"></div>
                    <span className="font-mono text-xs">#94A3B8</span>
                    <span className="text-gray-600">Cloud Pillar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#F59E0B]"></div>
                    <span className="font-mono text-xs">#F59E0B</span>
                    <span className="text-gray-600">Fire Pillar</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#C7215E]"></div>
                    <span className="font-mono text-xs">#C7215E</span>
                    <span className="text-gray-600">Wine Wave</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-[#171717]"></div>
                    <span className="font-mono text-xs">#171717</span>
                    <span className="text-gray-600">T Stroke</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">📐 Dimensions</h4>
                <div className="space-y-2 text-sm text-gray-700">
                  <div><strong>Viewbox:</strong> 160×160</div>
                  <div><strong>Bracket Stroke:</strong> 10px</div>
                  <div><strong>T Vertical:</strong> 12px width</div>
                  <div><strong>Wave Stroke:</strong> 10-12px</div>
                  <div><strong>Border Radius:</strong> 6px (T stroke)</div>
                  <div className="pt-2 text-xs text-gray-500">
                    권장 최소 크기: 16×16px<br/>
                    권장 최적 크기: 48×48px 이상
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4 text-lg">✅ Usage Guidelines</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>Clear space: 로고 높이의 25% 이상</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>흰색/밝은 배경: Standard 버전</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>어두운 배경: Dark Mode 버전</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600">•</span>
                    <span>복잡한 배경: Monochrome 버전</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-red-600">✕</span>
                    <span>비율 변경 금지</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Final Recommendation */}
        <div className="bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-200 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-amber-900 mb-6">✨ 최종 추천</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">주 로고: V2 - Refined Wave</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 브랜드 스토리 3가지 모두 포함</li>
                <li>• 웨이브 디테일로 생명의 흐름 강조</li>
                <li>• 그라디언트로 프리미엄 느낌</li>
                <li>• 중대형 사이즈에 최적</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h4 className="font-bold text-gray-900 mb-3 text-lg">보조 로고: V3 - Minimalist</h4>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>• 파비콘, 앱 아이콘용</li>
                <li>• 작은 크기에서도 명확</li>
                <li>• 단순한 라인으로 인쇄 용이</li>
                <li>• 빠른 로딩, 벡터 최적화</li>
              </ul>
            </div>
          </div>

          <div className="bg-amber-100 rounded-xl p-6">
            <h4 className="font-bold text-amber-900 mb-3">💡 다음 단계</h4>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-amber-900">
              <div>
                <strong>즉시:</strong>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• V2를 메인 로고로 확정</li>
                  <li>• 명함에 적용 테스트</li>
                  <li>• SVG 파일 추출</li>
                </ul>
              </div>
              <div>
                <strong>추후:</strong>
                <ul className="mt-2 space-y-1 ml-4">
                  <li>• 디자이너와 웨이브 곡선 미세 조정</li>
                  <li>• 애니메이션 버전 검토</li>
                  <li>• 브랜드 가이드라인 문서화</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}