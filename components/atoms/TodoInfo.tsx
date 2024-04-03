type TodoInfoProps = {
  title: string;
  description: string | null;
};

const TodoInfo = ({ title, description }: TodoInfoProps) => {
  return (
    <>
      <p className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
        {title}
      </p>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
    </>
  );
};

export default TodoInfo;
