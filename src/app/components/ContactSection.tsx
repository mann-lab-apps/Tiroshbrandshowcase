import { Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/app/components/ui/button';

export function ContactSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-black text-gray-900 mb-4">
              Contact Us
            </h2>
            <p className="text-xl text-gray-600">
              혁신적인 의료 AI 솔루션에 대해 더 알아보세요
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 mb-4">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600 text-sm">contact@tirosh.ai</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 mb-4">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">+82-2-1234-5678</p>
            </div>

            <div className="text-center p-6 rounded-xl bg-gradient-to-br from-red-50 to-red-100 hover:shadow-lg transition-shadow">
              <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-red-500 to-red-600 mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Location</h3>
              <p className="text-gray-600 text-sm">Seoul, South Korea</p>
            </div>
          </div>

          <div className="text-center">
            <Button 
              size="lg"
              className="bg-gradient-to-r from-amber-500 via-red-500 to-amber-500 text-white px-12 py-6 text-lg font-bold rounded-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
            >
              문의하기
            </Button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="container mx-auto px-4 mt-20 pt-12 border-t border-gray-200">
        <div className="text-center">
          <h3 className="text-4xl font-black text-gray-900 mb-2">TIROSH</h3>
          <p className="text-gray-600 text-sm mb-4">PILLAR OF FIRE, PILLAR OF CLOUD</p>
          <p className="text-gray-500 text-xs">
            © 2026 TIROSH. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}
