"use client";

import { users, userServices } from "@/lib/placeholder-data";
import { Eye, EyeOff, Tag, User } from "lucide-react";
import { useState } from "react";
import ServiceCard from "../../components/service-card";

const ServiceList = () => {
  const [showServices, setShowServices] = useState(true);

  return (
    <>
      {users.isWorker && (
        <div className="lg:col-span-2 mb-12">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Mis Servicios
              </h2>
              <button
                onClick={() => setShowServices(!showServices)}
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
              >
                {showServices ? <EyeOff size={18} /> : <Eye size={18} />}
                {showServices ? "Ocultar" : "Mostrar"}
              </button>
            </div>

            {showServices && (
              <>
                {userServices.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {userServices.map((service) => (
                      // ¡Aquí la usas!
                      <ServiceCard key={service.id} service={service} />
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500">
                    <Tag size={48} className="mx-auto mb-4 text-gray-300" />
                    <p>No hay servicios disponibles</p>
                  </div>
                )}
              </>
            )}

            {showServices && userServices.length === 0 && (
              <div className="text-center py-8 text-gray-500">
                <User size={48} className="mx-auto mb-4 text-gray-300" />
                <p>Aún no has creado ningún servicio</p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ServiceList;
