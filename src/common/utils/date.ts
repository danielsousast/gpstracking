export function timestampToFormattedDate(time: number) {
  const date = new Date(time);
  const formattedDate = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`;
  return formattedDate;
}
