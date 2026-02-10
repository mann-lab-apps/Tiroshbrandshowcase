export function StatsSection() {
  const stats = [
    {
      number: '99.9%',
      label: '진단 정확도',
      description: 'AI 모델의 높은 정확도'
    },
    {
      number: '1M+',
      label: '처리된 데이터',
      description: '안전하게 분석된 의료 데이터'
    },
    {
      number: '100+',
      label: '협력 기관',
      description: '국내외 의료 기관'
    },
    {
      number: '24/7',
      label: '서비스 운영',
      description: '언제나 이용 가능한 시스템'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 via-white to-red-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-5xl font-black bg-gradient-to-r from-amber-600 via-red-600 to-amber-600 bg-clip-text text-transparent mb-3">
                {stat.number}
              </div>
              <div className="text-xl font-bold text-gray-900 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
