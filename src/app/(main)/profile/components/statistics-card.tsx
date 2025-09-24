import { users, userServices } from "@/lib/placeholder-data";

const StatisticsCard = () => {
  return (
    <>
      {users.isWorker && (
        <div className="bg-secondary rounded-xl shadow-sm border border-gray-200 p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Estadísticas
          </h3>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-blue-200 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">
                {userServices.length}
              </div>
              <div className="text-sm text-gray-600">Servicios</div>
            </div>

            <div className="text-center p-3 bg-green-200 rounded-lg">
              <div className="text-2xl font-bold text-green-600">
                {users.totalReviews}
              </div>
              <div className="text-sm text-gray-600">Reseñas</div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default StatisticsCard;
