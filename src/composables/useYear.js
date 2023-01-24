export function useYear() {
  const options = { year: 'numeric' };
  const tmpDate = new Date();
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(
    tmpDate
  );

  return formattedDate;
}
