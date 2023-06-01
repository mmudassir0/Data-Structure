function prime(num1 ,num2){
    let arr=[]
    for(let i=num1; i<num2;i++){
            if(isPrime(i)){
                arr.push(i)
            }    
    }
    console.log(arr)
}
(prime(3,100))


function isPrime(num){
    if(num<=1){
        return false
    }
    for(let i=2;i<num;i++){
    if(num%i===0){
        return false
    }
}
    return true
}
// isPrime(6)


