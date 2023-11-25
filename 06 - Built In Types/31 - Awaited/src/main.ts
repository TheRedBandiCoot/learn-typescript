async function doSomething() {
  return 3;
}
type Value = Awaited<ReturnType<typeof doSomething>>;
