import { Eye } from 'lucide-react';
import * as TogglePrimitive from '@radix-ui/react-toggle';
import type { ComponentPropsWithoutRef } from 'react';

import { Toggle } from '@/components/ui/toggle';

/**
 * This component uses props of `Toggle` component.
 * See @/components/ui/toggle.tsx
 */
type ShowAlreadyDoneToggleProps = Pick<
  ComponentPropsWithoutRef<typeof TogglePrimitive.Root>,
  'defaultPressed' | 'onPressedChange'
>;

const ShowAlreadyDoneToggle = (props: ShowAlreadyDoneToggleProps) => {
  return (
    <Toggle {...props}>
      <Eye className="h-4 w-4" />
    </Toggle>
  );
};

export default ShowAlreadyDoneToggle;
