function Anagram(str1,str2){
    if(str1.length!==str2.length){
        return false
    }
    let charCount={}
    for(let char1 of str1){
        charCount[char1]?charCount[char1]+=1:charCount[char1]=1
        console.log(charCount)
    }
    for(let char2 of str2){
        if(!charCount[char2]){
            return false
        }else{
            charCount[char2]-=1
        }
        console.log(charCount)
    }
    return true
}
Anagram("amzz","zazz")

// function Anagram(str1,str2){
//     let obj1={}
//     let obj2={}
//     for(let char of str1){
//         if(obj1[char]>0){
//             obj1[char]++
//         }else{
//             obj1[char]=1
//         }
//     }
//      for(let char of str2){
//         if(obj2[char]>0){
//             obj2[char]++
            
//         }else{
//             obj2[char]=1
//         }
//     }
//     for(let char in obj1){
//         if(obj1[char]!==obj2[char]){
//             return false
//         }
//     }
//     return true
// }