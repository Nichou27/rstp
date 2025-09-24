import StarRating from "@/components/ui/star-rating";
import { users } from "@/lib/placeholder-data";
import { Camera, Edit3, Shield } from "lucide-react";

const ProfileHeader = () => {
  return (
    <>
      <div className="bg-secondary rounded-xl shadow-sm border border-gray-200 overflow-hidden">
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

                <button className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primary-hover active:bg-primary-active text-secondary rounded-lg transition-colors">
                  <Edit3 size={16} />
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfileHeader;
