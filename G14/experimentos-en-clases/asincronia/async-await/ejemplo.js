function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, ms);
  });
}

function ejemplo() {
  console.log(1);
  delay(5000).then(() => {
    console.log(2);
  });
  console.log(3);
}

async function ejemplo2() {
  console.log(1);
  await delay(5000)
  console.log(2);
  console.log(3);
}
