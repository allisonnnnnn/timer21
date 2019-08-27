const args = process.argv.slice(2).filter(b => b > 0);
// console.log(args);

for (let arg of args) {
  setTimeout(() => {
    process.stdout.write(".");
  }, Number(arg) * 1000);
}
