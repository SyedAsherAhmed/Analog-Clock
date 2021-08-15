
// setting an interval 
setInterval(() => {
  let d = new Date();
  let hours = d.getHours();
  let minutes = d.getMinutes();
  let seconds = d.getSeconds();


  // calculate rotation for hour, minute and second hands
  let hRotation = 30 * hours + minutes / 2;
  let minRotation = 6 * minutes;
  let secRotation = 6 * seconds;


  // applying transform rotate property on hands to rotate them
  hour.style.transform = `rotate(${hRotation}deg)`;
  minute.style.transform = `rotate(${minRotation}deg)`;
  second.style.transform = `rotate(${secRotation}deg)`;
}, 1000);
