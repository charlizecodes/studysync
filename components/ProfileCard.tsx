type Props = {
  name: string;
  major: string;
  interests: string;
};

export default function ProfileCard({ name, major, interests }: Props) {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold">{name}</h2>
      <p className="text-gray-600">{major}</p>
      <p className="text-gray-500 text-sm">{interests}</p>
    </div>
  );
}