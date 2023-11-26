type DataType = {
  name: string;
};

function func() {
  fetch('some api')
    .then((res) => res.json())
    .then((data) => data as DataType)
    .then((data) => data.name);
}

const a = 2;
// (a as string).length;

const b = a as number;

b;
