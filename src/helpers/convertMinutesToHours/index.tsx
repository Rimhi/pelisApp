export const useConvertMinutesToHours = (time: number) => {
  const timeCovert = time / 60;
  const hours = Number.parseInt(timeCovert.toString().split('.')[0]);
  const minutes = Number.parseFloat(
    '0.'.concat(timeCovert.toString().split('.')[1]),
  );
  return `${hours} ${hours > 1 ? 'horas' : 'hora'} y ${Number.parseInt(
    (minutes * 60).toString(),
  )} minutos`;
};
