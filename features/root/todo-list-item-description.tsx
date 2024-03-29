type TodoListItemDescriptionProps = {
  description: string;
};

const TodoListItemDescription = ({
  description,
}: TodoListItemDescriptionProps) => {
  return <p>{description}</p>;
};

export default TodoListItemDescription;
