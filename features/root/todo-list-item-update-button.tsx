import { PencilLine } from 'lucide-react';
import { MouseEventHandler } from 'react';

import { Button } from '@/components/ui/button';

type TodoListItemUpdateButtonProps = {
  onClick?: MouseEventHandler<HTMLButtonElement>;
};

const TodoListItemUpdateButton = ({
  onClick,
}: TodoListItemUpdateButtonProps) => {
  return (
    <Button variant="slient" size="none" onClick={onClick}>
      <PencilLine className="h-5 w-5 text-neutral-500" />
    </Button>
  );
};

export default TodoListItemUpdateButton;
