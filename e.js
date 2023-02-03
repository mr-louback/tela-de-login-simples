const data = new Date();
const formatter = Intl.DateTimeFormat("pt-br", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});
const showData = document.querySelector("#data");
const dataFormatada = formatter.format(data);
showData.innerHTML = dataFormatada;
