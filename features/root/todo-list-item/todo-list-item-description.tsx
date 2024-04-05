type TodoListItemDescriptionProps = {
  description: string;
};

const TodoListItemDescription = ({
  description,
}: TodoListItemDescriptionProps) => {
  return <p className="text-xs text-neutral-500">{description}</p>;
};

export default TodoListItemDescription;
