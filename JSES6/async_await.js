/* Async_await*/
const promise = new Promise((resolve, reject) => {
  const dataFetchStatus = true;
  const dbData = {
    userName: "Suraj",
    phone: 9869353681,
  };
  if (dataFetchStatus) {
    resolve(dbData);
  } else {
    reject("Failed to retrieve data");
  }
});
function validation(response) {
  return Promise.resolve({ ...response, isValid: true });
}
async function getData() {
  try {
    const response = await promise;
    const response2 = await validation(response);
    console.log(response);
    console.log(response2);
  } catch (error) {
    console.log(error);
  }
}
getData();

// promise
//   .then((response) => console.log(response))
//   .catch((err) => console.error(err));

const dbData = {
  userName: "Suraj",
  phone: 9869353681,
};
console.log(JSON.stringify(dbData));
console.log(JSON.parse(JSON.stringify(dbData)));
