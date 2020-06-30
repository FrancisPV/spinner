const spinner = ['|', '/', '-', '\\', '|', '/', '-', '\\', '|'];

/* setTimeout(() => {
  for(let char = 0; char < spinner.length; char ++) {
    process.stdout.write('\r' + spinner[char] );
  }
}, char * 150); */

for (let char = 0; char < spinner.length; char++) {
  setTimeout(() => {
    process.stdout.write('\r' + spinner[char])
  }, char * 150)
};

setTimeout(() => {
  process.stdout.write('\n');
}, spinner.length * 150);

