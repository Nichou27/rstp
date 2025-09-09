import ServiceList from "./components/service-list";
import ProfileHeader from "./components/profile-header";
import PersonalInfo from "./components/personal-info";
import StatisticsCard from "./components/statistics-card";

const UserProfile = () => {
  return (
    <div className="min-h-screen mb-10">
      <div className="max-w-6xl mx-auto px-4 space-y-6">
        <ProfileHeader />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1 space-y-6">
            <PersonalInfo />
            <StatisticsCard />
          </div>
          <ServiceList />
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
