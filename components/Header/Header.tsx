interface HeaderProps {
  title: string;
  description?: string;
}
export default function Header({ title, description }: HeaderProps) {
  return (
    <div className="py-4 border-b border-gray-700">
      <h3 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-50 text-transparent bg-clip-text">
        {title}
      </h3>
    </div>
  );
}
