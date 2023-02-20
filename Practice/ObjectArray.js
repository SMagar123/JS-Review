//mapping object to array
const meroObject = {
  date: "2010/06/11",
  description:
    " July 11 ampndash The 2010 FIFA World Cup is held in South Africa, and is won by Spain, with the runner-up being Holland.",
  lang: "en",
  category1: "June",
  granularity: "year",
};

// console.log(Object.values(meroObject));
// console.log(Object.keys(meroObject));
const meroObjectKoArray=Object.entries(meroObject);
const meroObjectLaiArray=Object.keys(meroObject).map((each)=>{
    return [each,meroObject[each]];
})
console.log(meroObjectLaiArray);
// console.log(meroObjectKoArray);

const meroCopyObject={...meroObject};
meroCopyObject.category1="February";
// console.log(meroCopyObject);
for(let x in meroObject){
    console.log(meroObject[x]);
}

//converting the array to object
let key;
let value;
const meroArray=[12,34,53,767,"home","house",true];
const meroArrayKoObject={...meroArray};

console.log(meroArrayKoObject);
