interface HeaderProps {
  title: string;
  description?: string;
}
export default function Header({ title, description }: HeaderProps) {
  return (
    <h3 className="py-4 text-4xl font-bold bg-gradient-to-r from-black to-gray-50 text-transparent bg-clip-text">
      {title}
    </h3>
  );
}
