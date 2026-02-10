import { Flame, Cloud } from 'lucide-react';

export function VisionSection() {
  return (
    <section className="relative py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-white mb-6">
            PILLAR OF FIRE, PILLAR OF CLOUD
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            낮에는 구름기둥으로, 밤에는 불기둥으로 길을 인도하듯
            <br />
            TIROSH는 의료 현장에 언제나 함께하는 신뢰할 수 있는 동반자입니다
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Pillar of Fire */}
          <div className="group relative">
            <div className="relative p-10 rounded-2xl bg-gradient-to-br from-amber-900/40 to-red-900/40 backdrop-blur-sm border border-amber-500/30 hover:border-amber-500/60 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-amber-500 to-red-600 shadow-lg">
                  <Flame className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">불기둥</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                혁신과 열정으로 의료 AI의 새로운 길을 개척합니다. 
                끊임없는 연구개발로 의료 현장에 빛을 밝힙니다.
              </p>
            </div>
          </div>

          {/* Pillar of Cloud */}
          <div className="group relative">
            <div className="relative p-10 rounded-2xl bg-gradient-to-br from-gray-900/40 to-blue-900/40 backdrop-blur-sm border border-gray-500/30 hover:border-gray-400/60 transition-all duration-500 hover:shadow-2xl hover:shadow-gray-400/20">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-4 rounded-xl bg-gradient-to-br from-gray-600 to-gray-800 shadow-lg">
                  <Cloud className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white">구름기둥</h3>
              </div>
              <p className="text-gray-300 leading-relaxed text-lg">
                안정적이고 신뢰할 수 있는 기술로 의료진을 보호합니다. 
                언제 어디서나 함께하는 든든한 동반자가 됩니다.
              </p>
            </div>
          </div>
        </div>

        {/* Mission statement */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20">
            <p className="text-2xl font-bold text-white mb-2">Our Mission</p>
            <p className="text-lg text-gray-300 max-w-2xl">
              인공지능 기술로 의료진과 환자를 연결하고, <br />
              더 나은 의료 서비스의 미래를 만들어갑니다
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
