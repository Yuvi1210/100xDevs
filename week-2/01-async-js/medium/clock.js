function counter() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  let ampm = hours >= 12 ? 'PM' : 'AM';
  let hours2 = hours % 12;
  hours2 = hours2 ? hours2 : 12;
  let time = `${hours2}:${minutes}:${seconds} ${ampm} / ${hours}:${minutes}:${seconds}`;
  console.log(time);
}

setInterval(counter, 1000);