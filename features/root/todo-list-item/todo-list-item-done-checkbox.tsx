
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import type { ComponentPropsWithoutRef } from 'react';

import { Checkbox } from '@/components/ui/checkbox';

/**
 * This component uses props of `Checkbox` component.
 * See @/components/ui/checkbox.tsx
 */
type TodoListItemDoneCheckboxProps = Pick<
  ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>,
  'defaultChecked' | 'onCheckedChange'
>;

const TodoListItemDoneCheckbox = (props: TodoListItemDoneCheckboxProps) => {
  return <Checkbox className="mt-1" {...props} />;
};

export default TodoListItemDoneCheckbox;
