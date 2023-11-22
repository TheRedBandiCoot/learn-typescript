let a: any = false;

a = 'Five';
a = 5;
a = null;

const b = JSON.parse('5');
const req = fetch('https://api.github.com/users/theredbandicoot')
  .then((res) => res.json())
  .then((data) => console.log(data));
console.log(b);
