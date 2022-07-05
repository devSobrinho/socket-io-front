export const formatDate = (date: Date) => {
  return Intl.DateTimeFormat('pt-br', {
    second: '2-digit',
    minute: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    month: '2-digit',
    year: "2-digit"
  }).format(new Date(date))
}