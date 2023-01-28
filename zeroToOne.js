let arr = [0,1,0,1,0,1,0]


function zeroToOne(arr){
    for(let i = 0 ;i<arr.length;i++){
        arr[i] = (!arr[i] * 1)
    }
    return arr
}

let a = zeroToOne(arr)
console.log(a);



