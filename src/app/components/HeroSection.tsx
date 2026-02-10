import businessCard from 'figma:asset/934ce757f3da65f645a32d65f04e6e1956faa931.png';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 via-white to-red-50 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-amber-300 to-amber-100 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-red-300 to-red-100 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <h1 className="text-7xl font-black tracking-tight text-gray-900">
                  TIROSH
                </h1>
                <p className="text-xl tracking-wide text-gray-600 mt-2">
                  PILLAR OF FIRE, PILLAR OF CLOUD
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-3xl font-bold text-gray-800">
                상모와 테야를 위한 의료 인공지능
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                최첨단 AI 기술로 의료의 미래를 선도하는 혁신적인 솔루션을 제공합니다.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="px-6 py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg shadow-lg">
                <div className="text-sm font-semibold">AI SaMD</div>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-gray-800 to-gray-900 text-white rounded-lg shadow-lg">
                <div className="text-sm font-semibold">AI CDSS</div>
              </div>
              <div className="px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white rounded-lg shadow-lg">
                <div className="text-sm font-semibold">BC-FL</div>
              </div>
            </div>
          </div>

          {/* Right content - Business card */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 via-red-400 to-amber-400 rounded-2xl blur-xl opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse" />
              <img 
                src={businessCard} 
                alt="TIROSH Business Card" 
                className="relative w-full max-w-2xl rounded-2xl shadow-2xl transform transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-gray-400 rounded-full flex justify-center">
          <div className="w-1.5 h-2 bg-gray-400 rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}
