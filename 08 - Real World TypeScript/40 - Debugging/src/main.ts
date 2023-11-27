type Options = {
  debug: boolean;
  format: {
    tabs: boolean;
    tabWidth?: number;
  };
};

function printNumber(num: number, options?: Options) {
  console.log(num);
}

printNumber(4, { debug: true, format: { tabs: true, tabWidth: true } });

//@ts-ignore: format property not initialized
printNumber(4, { debug: true });

//@ts-expect-error
printNumber(4, { debug: true, format: { tabs: true, tabWidth: 4 } });
