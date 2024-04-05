interface HeaderProps {
  title: string;
  description?: string;
}
export default function Header({ title, description }: HeaderProps) {
  return (
    <header className="flex justify-between items-center">
      <div className="py-4 flex flex-col gap-y-1">
        <h3 className="text-4xl font-bold bg-gradient-to-r from-black to-gray-50 text-transparent bg-clip-text">
          {title}
        </h3>
        {description && <p className="text-gray-500">{description}</p>}
      </div>
      <div className="w-16 h-16 flex flex-col items-center justify-center bg-gray-100 rounded-full text-[40px]">
        👩🏻‍💻
      </div>
    </header>
  );
}
