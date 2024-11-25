const array1 = [1,2,3,4,5,6]
const array2 = [1,3,5,7]

const resultArr = array1.filter(value => array2.includes(value))

console.log(resultArr)