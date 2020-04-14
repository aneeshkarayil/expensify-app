const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is my resolved data");
  }, 1500);
});

console.log("before");

promise.then(
  data => {
    console.log(data);
  },
  error => {
    console.log(error);
  }
);

console.log("after");
