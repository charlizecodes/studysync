import ProfileCard from '../../components/ProfileCard';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Your Study Buddies</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Placeholder cards */}
        <ProfileCard name="Alice" major="CS" interests="Algorithms" />
        <ProfileCard name="Bob" major="Math" interests="Statistics" />
        <ProfileCard name="Charlie" major="Physics" interests="Quantum" />
      </div>
    </div>
  );
}
