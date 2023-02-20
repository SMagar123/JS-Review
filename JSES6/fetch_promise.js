//fetch with promise

const apiURL = "https://anapioficeandfire.com/api/characters/585";
// const apiURL = "https://raw.githubusercontent.com/nisipshrestha/Javascript-Practice/main/Example%203/dataSet.json";
// fetch(apiURL)
//   .then((response) => response.json())
//   .then((data) => console.log(data));

//Fetch with AsyncAwait
async function asyncResult(userNumber) {
  try {
    const response = await fetch(`https://anapioficeandfire.com/api/characters/${userNumber}`); //get request by default
    const data=await response.json();
    console.log(data);    
  } catch (err) {
    console.error(err);
  }
}
asyncResult(584);

//Asynchronous function returns promise;
(async (userNumber)=> {
  try {
    const response = await fetch(`https://anapioficeandfire.com/api/characters/${userNumber}`); //get request by default
    const data=await response.json();
    console.log(data);    
  } catch (err) {
    console.error(err);
  }
})(585)
