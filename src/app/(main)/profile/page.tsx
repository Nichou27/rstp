"use client";

import React, { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Star,
  Calendar,
  Clock,
  Tag,
  DollarSign,
  Eye,
  EyeOff,
  Edit3,
  Camera,
  Shield,
} from "lucide-react";
import { users, userServices } from "@/lib/placeholder-data";

const UserProfile = () => {
  const [showServices, setShowServices] = useState(true);

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  const formatPrice = (price: string | number | bigint) => {
    let numericPrice: number | bigint;

    if (typeof price === "string") {
      const parsed = Number(price);
      numericPrice = isNaN(parsed) ? 0 : parsed;
    } else {
      numericPrice = price;
    }

    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(numericPrice);
  };

  const StarRating = ({
    rating,
    totalReviews,
  }: {
    rating: number;
    totalReviews: number;
  }) => {
    const stars = Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < Math.floor(rating)
            ? "fill-yellow-400 text-yellow-400"
            : index < rating
            ? "fill-yellow-400/50 text-yellow-400"
            : "text-gray-300"
        }`}
      />
    ));

    return (
      <div className="flex items-center gap-2 sm:mt-4">
        <div className="flex">{stars}</div>
        <span className="text-sm text-gray-600">
          {rating} ({totalReviews} reseñas)
        </span>
      </div>
    );
  };

  return (
    <div className="min-h-screen mb-10">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        {/* Header del Perfil */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="h-32 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

          <div className="px-6 pb-6">
            <div className="flex flex-col sm:flex-row gap-6 -mt-16">
              <div className="relative">
                <div className="w-32 h-32 rounded-full border-4 border-white bg-white shadow-lg overflow-hidden">
                  <img
                    src={users.profileImage}
                    alt="Profile"
                    className="w-full h-full object-cover"
                  />
                </div>
                <button className="absolute bottom-2 right-2 p-2 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors">
                  <Camera size={16} />
                </button>
              </div>

              <div className="flex-1 pt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <h1 className="text-2xl font-bold text-gray-900">
                        {users.firstName} {users.lastName}
                      </h1>
                      {users.isVerified && (
                        <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-700 rounded-full text-xs">
                          <Shield size={12} />
                          Verificado
                        </div>
                      )}
                    </div>

                    {users.isWorker && users.rating && (
                      <StarRating
                        rating={users.rating}
                        totalReviews={users.totalReviews}
                      />
                    )}

                    <p className="text-gray-600 mt-3 max-w-2xl leading-relaxed">
                      {users.bio}
                    </p>
                  </div>

                  <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors">
                    <Edit3 size={16} />
                    Editar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Información Personal */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                Información Personal
              </h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <p className="text-gray-900">{users.email}</p>
                  </div>
                </div>

                {users.phoneNumber && (
                  <div className="flex items-center gap-3">
                    <Phone size={18} className="text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Teléfono</p>
                      <p className="text-gray-900">{users.phoneNumber}</p>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Ubicación</p>
                    <p className="text-gray-900">
                      {users.direction.street}, {users.direction.city},{" "}
                      {users.direction.province}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Calendar size={18} className="text-gray-500" />
                  <div>
                    <p className="text-sm text-gray-500">Miembro desde</p>
                    <p className="text-gray-900">
                      {formatDate(users.createdAt)}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Estadísticas */}
            {users.isWorker && (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Estadísticas
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-blue-50 rounded-lg">
                    <div className="text-2xl font-bold text-blue-600">
                      {userServices.length}
                    </div>
                    <div className="text-sm text-gray-600">Servicios</div>
                  </div>

                  <div className="text-center p-3 bg-green-50 rounded-lg">
                    <div className="text-2xl font-bold text-green-600">
                      {users.totalReviews}
                    </div>
                    <div className="text-sm text-gray-600">Reseñas</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Servicios */}
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {userServices.map((service) => (
                      <div
                        key={service.id}
                        className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
                      >
                        <div className="h-48 bg-gray-200 overflow-hidden">
                          <img
                            src={service.imageUrl[0]}
                            alt={service.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>

                        <div className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h3 className="font-semibold text-gray-900 line-clamp-1">
                              {service.name}
                            </h3>
                            <div
                              className={`px-2 py-1 rounded-full text-xs ${
                                service.isActive
                                  ? "bg-green-100 text-green-700"
                                  : "bg-gray-100 text-gray-700"
                              }`}
                            >
                              {service.isActive ? "Activo" : "Inactivo"}
                            </div>
                          </div>

                          <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                            {service.description}
                          </p>

                          <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <DollarSign size={14} />
                              <span className="font-semibold text-green-600">
                                {formatPrice(service.price)}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <Clock size={14} />
                              <span>{service.duration} días</span>
                            </div>
                          </div>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {service.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="inline-flex items-center gap-1 px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-full"
                              >
                                <Tag size={10} />
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="text-xs text-gray-500">
                            Categoría: {service.category.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
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
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
