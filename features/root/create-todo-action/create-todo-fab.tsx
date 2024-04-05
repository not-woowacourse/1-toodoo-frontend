import { Plus } from 'lucide-react';

import { Button } from '@/components/ui/button';

const CreateTodoFab = () => {
  return (
    <Button className="fixed bottom-4 left-4">
      <Plus className="mr-2 h-4 w-4" />
      New Reminder
    </Button>
  );
};

export default CreateTodoFab;
