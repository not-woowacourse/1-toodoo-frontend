import { Trash } from 'lucide-react';
import type { MouseEventHandler } from 'react';

import { Button } from '@/components/ui/button';

type TodoListItemDeleteButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const TodoListItemDeleteButton = ({
  onClick,
}: TodoListItemDeleteButtonProps) => {
  return (
    <Button variant="slient" size="none" onClick={onClick}>
      <Trash className="h-5 w-5 text-neutral-500" />
    </Button>
  );
};

export default TodoListItemDeleteButton;
