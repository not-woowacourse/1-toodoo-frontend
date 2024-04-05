import dayjs from 'dayjs';

export default function formatDate(value?: string | null) {
  if (value === null) return '-';

  return value ? dayjs(value).format('YYYY.MM.DD (ddd) HH:mm:ss') : '';
}
