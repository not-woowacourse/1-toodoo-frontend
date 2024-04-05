import { Eye } from 'lucide-react';

import { Toggle } from '@/components/ui/toggle';

type ShowAlreadyDoneToggleProps = {
  defaultPressed: boolean;
  onPressedChange: (pressed: boolean) => void;
};

const ShowAlreadyDoneToggle = ({
  defaultPressed,
  onPressedChange,
}: ShowAlreadyDoneToggleProps) => {
  return (
    <Toggle defaultPressed={defaultPressed} onPressedChange={onPressedChange}>
      <Eye className="h-4 w-4" />
    </Toggle>
  );
};

export default ShowAlreadyDoneToggle;
