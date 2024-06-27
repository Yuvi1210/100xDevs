const fs = require('fs');

fs.readFile('C:\\Users\\KIIT\\Desktop\\Cohort Web\\100xDevs-Assignments\\week-2\\01-async-js\\easy\\a.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data);
});

let count = 0;

function increment() {
    count++;
    console.log(count);
    setTimeout(increment, 1000);
}

increment();