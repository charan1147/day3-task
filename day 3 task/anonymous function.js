/* Print odd numbers in an array*/



let arr=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];
let oddnumbers=[]
let odd=function(num){
    
        return num%2!=0
    }

for(let i=0;i<arr.length;i++){
if(odd(arr[i])){
    oddnumbers.push(arr[i])
}
}
console.log(oddnumbers);







/*Convert all the strings to title caps in a string array*/

let arr1=[`ram`,`seetha`,`lakshman`,`bharat`,`shatrughan`]



let titlecapital=function (str){
    return str.charAt(0).toUpperCase()+str.slice(1).toLowerCase()
}
let title=arr1.map(titlecapital);
console.log(title);





 /*Sum of all numbers in an array*/

let arr2=[1,2,3,4,5,6,7,8,9,10,11,12,13];;



let sumof=function (num){
let sum=0;
for(let i=0;i<arr2.length;i++){
    sum=sum+num[i];

}
return sum;
}
sum=sumof(arr2);
let newarr=[]
newarr.push(sum);
console.log(newarr);








/* Return all the prime numbers in an array */

let arr3=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31];




let primenumber=function (num){
    if(num<=1)return false;
    for(let i=2;i*i<=num;i++){
        if(num%i==0)return false
    }
    return true;
}
let primenumbers=[]
for(let i=0;i<arr3.length;i++){
    if(primenumber(arr3[i]))

    primenumbers.push(arr3[i])
}
console.log(primenumbers);






/* Return all the palindromes in an array */

let arr4=[`kayak`,`deified`,`rotator`,`charan`,`ram`,`repaper`,`deed`,`peep`,`wow`,`noon`]
let palindromes=function (str){
    let reverrsedstr=str.split(``).reverse().join(``)
    return str===reverrsedstr
}
let palindrome=[];
for(let i=0;i<arr4.length;i++){
    if(palindromes(arr4[i])){
        palindrome.push(arr4[i])
    }
}
console.log(palindrome);





/* Return median of two sorted arrays of the same size */

let arr5=[1,2,3,4,5 ];
let arr6=[3,4,5,6,7];
let concatarr=[];

let medianof=function (arr5,arr6){
if(arr5.length!=arr6.length){
    return `Arrays are not in ssme size`
}

   concatarr=arr5.concat(arr6)
concatarr.sort((a,b)=>a-b)

let n = concatarr.length
if(n%2==0){
        return ((n/2)+((n/2)+1))
    }
}

let median=medianof(arr5,arr6);
console.log(median);






/*Remove duplicates from an array */


let arr7=[1,2,3,2,8,9,7,5,6,3,2,1,5];
let removeduplicates=function(arr){
    return [...new Set(arr7)]
}
let arr8=removeduplicates(arr7);
console.log(arr8);






 /* Rotate an array by k times */


let arr9=[11,12,13,14,15,16];
let k=2
let rotatearr=function (arr9,k){
    let n= arr9.length;
    k=k%n

    if(k==0)return arr9;

    let firstarr=arr9.splice(-k);
    let secondarr=arr9.splice(0,n-k)
return firstarr.concat(secondarr)

}
let rotate=rotatearr(arr9,k);
console.log(rotate);

