function func(a: number, b: number, cb: (num: number) => void) {
  cb(a + b);
}

func(1, 2, (num) => {
  console.log(num);
});
