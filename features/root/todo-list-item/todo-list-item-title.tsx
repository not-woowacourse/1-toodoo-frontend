type TodoListItemTitleProps = {
  title: string;
};

const TodoListItemTitle = ({ title }: TodoListItemTitleProps) => {
  return <p>{title}</p>;
};

export default TodoListItemTitle;
