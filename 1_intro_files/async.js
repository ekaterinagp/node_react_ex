function ringingUp(name) {
  console.log("ready", name);
}

function itHelpDesk(name, callback) {
  callback(name);
}

function hello(name) {
  console.log("Hello", name);
}

const ringingAgain = name => {
  console.log("What?", name);
};

// itHelpDesk("Bla", ringingAgain);

// new Promise((resolve, reject) => {
//   try {
//     setTimeout(() => {
//       resolve("fine");
//     }, 2000);
//   } catch (error) {
//     reject("wrong");
//   }
// })
//   .then(message => {
//     console.log(message);
//   })
//   .catch(error => console.log(error));

function myPromise() {
  new Promise((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve("fine");
      }, 2000);
    } catch (error) {
      reject("wrong");
    }
  })
    .then(message => {
      console.log(message);
    })
    .catch(error => console.log(error));
}

myPromise();
