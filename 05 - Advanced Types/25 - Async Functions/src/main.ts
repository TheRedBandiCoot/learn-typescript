function wait(duration: number) {
  return new Promise<string>((resolve) => {
    setTimeout(() => resolve('Hi'), duration);
  });
}

wait(1000).then((res) => console.log(res.length));

async function asyncWait(): Promise<Response> {
  const res = await fetch('https://api.github.com/users/theredbandicoot');
  return res;
}

asyncWait()
  .then((res) => res.json())
  .then((data) => console.log(data['login']));
