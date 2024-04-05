import { Eye, EyeOff } from 'lucide-react';

import { Toggle } from '@/components/ui/toggle';

type ShowCompletedToggleProps = {
  defaultPressed: boolean;
  onPressedChange: (pressed: boolean) => void;
};

const ShowCompletedToggle = ({
  defaultPressed,
  onPressedChange,
}: ShowCompletedToggleProps) => {
  return (
    <Toggle defaultPressed={defaultPressed} onPressedChange={onPressedChange}>
      {defaultPressed ? (
        <Eye className="h-4 w-4" />
      ) : (
        <EyeOff className="h-4 w-4" />
      )}
    </Toggle>
  );
};

export default ShowCompletedToggle;
