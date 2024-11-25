const text = "This is a coding challenge for the interview process";

const dataArray = text.split(" ");
const lengthArray = dataArray.map((data) => data.length);


let i = 0;
let len = lengthArray.length - 1;

for(i=0;i<len-1;i++){
    for(j=i+1;j<len;j++){
        if(lengthArray[i]<lengthArray[j]){
            temp = lengthArray[i]
            lengthArray[i] = lengthArray[j]
            lengthArray[j] = temp
        }
    }
}

const maxLength = lengthArray[0]

const longestWords = dataArray.filter((word)=>word.length === maxLength)
console.log(longestWords);
