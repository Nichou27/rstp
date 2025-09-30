import { services } from "@/lib/placeholder-data";
import { CategoryCard } from "@/app/(main)/categories/components/category-card";

export default function Categories() {
  return (
    <main>
      <div className="min-h-screen pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {services.map((service) => (
              <CategoryCard key={service.id} service={service} />
            ))}
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
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg cursor-pointer transition-colors shadow-lg hover:shadow-xl">
                Registrate como Profesional
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
