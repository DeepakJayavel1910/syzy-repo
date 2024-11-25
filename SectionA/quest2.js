const arr = [1,5,8,6,7,9,9]
const arr2 = []

for(i=0; i<arr.length; i++){
    if(!(arr2.includes(arr[i]))){
        arr2.push(arr[i])
    }
}

for(i=0;i<arr2.length-1;i++){
    for(j=i+1;j<arr2.length;j++){
        if(arr2[i]<arr2[j]){
            temp = arr2[i]
            arr2[i] = arr2[j]
            arr2[j] = temp
        }
    }
}

console.log(`Sum of Largest three numbers: ${arr2[0] + arr2[1] + arr2[2]}`)
