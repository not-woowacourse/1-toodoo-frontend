import { PencilLine } from 'lucide-react';
import type { ButtonHTMLAttributes } from 'react';

import { Button } from '@/components/ui/button';

/**
 * This component uses props of `Button` component.
 * See @/components/ui/button.tsx
 */
type TodoListItemUpdateButtonProps = Pick<
  ButtonHTMLAttributes<HTMLButtonElement>,
  'onClick'
>;

const TodoListItemUpdateButton = (props: TodoListItemUpdateButtonProps) => {
  return (
    <Button variant="silent" size="none" {...props}>
      <PencilLine className="h-5 w-5 text-neutral-500" />
    </Button>
  );
};

export default TodoListItemUpdateButton;
