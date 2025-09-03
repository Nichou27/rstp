import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { services } from "@/lib/placeholder-data";

export default function Categories() {
  return (
    <main>
      <div className="min-h-screen bg-pimary py-2 px-4 mb-16 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service) => {
              const ComponentIcon = service.icon;

              return (
                <Card
                  key={service.id}
                  className="group p-0 hover:shadow-xl transition-all duration-300 cursor-pointer border-0 bg-primary backdrop-blur-sm hover:scale-105"
                >
                  <CardHeader className="p-0">
                    <div className="relative overflow-hidden rounded-t-lg">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-32 sm:h-40 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />
                      <div
                        className={`absolute top-3 right-3 p-2 rounded-full ${service.color}`}
                      >
                        <ComponentIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {service.description}
                    </CardDescription>

                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <button className="text-blue-600 text-sm font-medium hover:text-blue-800 hover:cursor-pointer transition-colors flex items-center gap-1">
                        Ver profesionales
                        <span className="group-hover:translate-x-1 transition-transform">
                          →
                        </span>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="text-center mt-16">
            <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 sm:p-12 border border-white/20 shadow-xl">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
                ¿Eres un profesional?
              </h2>
              <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
                Únete a nuestra plataforma y conecta con clientes que necesitan
                tus servicios.
              </p>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors shadow-lg hover:shadow-xl">
                Registrate como Profesional
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
