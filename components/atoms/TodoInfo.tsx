import { type } from 'os';

type TodoInfoProps = {
  title: string;
  description: string | null;
  createdAt: Date;
};

const TodoInfo = ({ title, description, createdAt }: TodoInfoProps) => {
  const createdAtText = String(createdAt).split('T')[0];

  return (
    <div className="flex flex-col gap-1 flex-1">
      <p className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {title}
        <span className="text-xs font-light text-muted-foreground ms-2">
          {createdAtText}
        </span>
      </p>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default TodoInfo;
