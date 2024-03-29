import type { Priority } from '@/types/unions/priority';

type PriorityStylingInfo = {
  color: string;
  text: string;
};

const getPriorityStylingInfo = (
  priority: Priority,
): PriorityStylingInfo | never => {
  switch (priority) {
    case 'LOW':
      return { color: 'text-red-400', text: '!' };
    case 'MEDIUM':
      return { color: 'text-red-600', text: '!!' };
    case 'HIGH':
      return { color: 'text-red-800', text: '!!!' };
    default:
      throw new Error('Invalid priority: ', priority);
  }
};

export default getPriorityStylingInfo;
