import { Plus } from 'lucide-react';
import { MouseEventHandler } from 'react';

import { Button } from '@/components/ui/button';

type CreateTodoFabProps = {
  onClick: MouseEventHandler<HTMLButtonElement>;
};

const CreateTodoFab = ({ onClick }: CreateTodoFabProps) => {
  return (
    <Button className="fixed bottom-4 left-4" onClick={onClick}>
      <Plus className="mr-2 h-4 w-4" />
      New Reminder
    </Button>
  );
};

export default CreateTodoFab;
