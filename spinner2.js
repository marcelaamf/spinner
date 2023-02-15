const symbol = '|/-\\|/-\\|';
let i = 0; 

const spinner2 = () => {
  setTimeout(() => {
    process.stdout.write(`\r${symbol[i++]}   `);
    if(i < symbol.length) {
      spinner2();
    }
    if(i === symbol.length) {
      process.stdout.write("\n");
    }
  }, 200)
};

spinner2();