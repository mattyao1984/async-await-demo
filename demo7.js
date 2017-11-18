Symbol.asyncIterator = Symbol.asyncIterator || Symbol('asyncIterator');

const delay = (ms) => new Promise(resolve => {
  setTimeout(resolve, ms);
});

async function* myGenerator() {
  await delay(3000);
  yield 1;
  await delay(4000);
  yield 2;
  await delay(5000);
  yield 3;
}

async function forLoop() {
  for await(const val of myGenerator()) {
    console.log('value: ', val);
  }
}

async function whileLoop() {
  const generator = myGenerator();
  while(true) {
    const { value, done } = await generator.next();
    if(done) {
      break;
    }
    console.log('value: ', value);
  }
}