import { users } from "@/lib/placeholder-data";
import { formatDate } from "@/lib/utils";
import { Calendar, Mail, MapPin, Phone } from "lucide-react";

const PersonalInfo = () => {
  return (
    <>
      <div className="bg-secondary rounded-xl shadow-sm border border-gray-200 p-6">
        <p className="text-lg font-semibold text-gray-900 mb-4">
          Información Personal
        </p>

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
              <p className="text-gray-900">{formatDate(users.createdAt)}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalInfo;
