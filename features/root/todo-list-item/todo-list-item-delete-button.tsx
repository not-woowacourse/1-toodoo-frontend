import { Trash } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';

import { Button } from '@/components/ui/button';

/**
 * This component uses props of `Button` component.
 * See @/components/ui/button.tsx
 */
type TodoListItemDeleteButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
>;

const TodoListItemDeleteButton = (props: TodoListItemDeleteButtonProps) => {
  return (
    <Button variant="silent" size="none" {...props}>
      <Trash className="h-5 w-5 text-neutral-500" />
    </Button>
  );
};

export default TodoListItemDeleteButton;
