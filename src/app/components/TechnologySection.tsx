import { Activity, Brain, Shield } from 'lucide-react';

export function TechnologySection() {
  const technologies = [
    {
      icon: Brain,
      title: 'AI SaMD',
      subtitle: 'Software as a Medical Device',
      description: '의료기기로 인정받은 AI 소프트웨어로 정확한 진단과 치료를 지원합니다.',
      gradient: 'from-amber-500 to-amber-600',
      bgGradient: 'from-amber-50 to-amber-100'
    },
    {
      icon: Activity,
      title: 'AI CDSS',
      subtitle: 'Clinical Decision Support System',
      description: '임상 의사결정을 지원하는 지능형 시스템으로 최적의 치료 방향을 제시합니다.',
      gradient: 'from-gray-700 to-gray-900',
      bgGradient: 'from-gray-50 to-gray-100'
    },
    {
      icon: Shield,
      title: 'BC-FL',
      subtitle: 'Blockchain Federated Learning',
      description: '블록체인 기반 연합학습으로 데이터 보안과 AI 성능을 동시에 확보합니다.',
      gradient: 'from-red-500 to-red-600',
      bgGradient: 'from-red-50 to-red-100'
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black text-gray-900 mb-4">
            핵심 기술
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            혁신적인 AI 기술로 의료 현장의 패러다임을 변화시킵니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Card */}
              <div className={`relative h-full p-8 rounded-2xl bg-gradient-to-br ${tech.bgGradient} border border-gray-200 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2`}>
                {/* Icon */}
                <div className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${tech.gradient} mb-6 shadow-lg`}>
                  <tech.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {tech.title}
                </h3>
                <p className="text-sm font-semibold text-gray-600 mb-4">
                  {tech.subtitle}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {tech.description}
                </p>

                {/* Decorative element */}
                <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${tech.gradient} opacity-10 rounded-bl-full`} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
