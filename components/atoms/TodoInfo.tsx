type TodoInfoProps = {
  title: string;
  description: string | null;
};

const TodoInfo = ({ title, description }: TodoInfoProps) => {
  return (
    <div className="flex flex-col gap-1 flex-1">
      <p className="text-md font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {title}
      </p>
      {description && (
        <p className="text-xs text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default TodoInfo;
