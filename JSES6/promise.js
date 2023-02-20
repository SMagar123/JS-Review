//promise
//Initialization of Promise
/*--first pending state then either success or failure state */
/* promise has 2 callback paramters
    -resolve
    -reject
*/
const promise = new Promise((resolve, reject) => {
  const dbStatus = "success";
  if (dbStatus === "success") {
    const dbData = { id: 1, name: "NCCS", email: "example@gmail.com" };
    resolve(dbData);
  } else {
    reject("Failed to Fetch data");
  }
});
function validation(response) {
  const newResponse = { ...response, isValid: true };
  return Promise.resolve(newResponse); //---data is sent to next .then otherwise .catch will be called
}
const additionalErrorHandling = (error) => {
  return Promise.reject(`${error}, extra error handling`);
};
promise
  .then(validation)
  .then((response) => {
    console.table(response);
  })
  .catch(additionalErrorHandling)
  .catch((error) => {
    console.log(error);
  });
