
/* Print odd numbers in an array*/

let arr10=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
let oddfiltered=arr10.filter(key=>key%2!==0);
console.log(oddfiltered);



 


/*Convert all the strings to title caps in a string array
*/
let arr11=[`chair`,`table`,`pump`,`stool`, `mobile`];
let arr12=str=>str.split(` `).map(word=>word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()).join(` `)
let totalcap=arr11.map(arr12);
console.log(totalcap);






/*Sum of all numbers in an array*/

let arr13=[1,2,3,4,5,6,7,8,9,10,11,12,13,14];
let sum=arr13.reduce((a,b)=>a+b)
console.log(sum);





/*Return all the prime numbers in an array*/


let arr14=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99];


let primen=[]

let primenum=num=>{
    if(num<=1)return false;
    for(let i=2;i*i<=num;i++){
        if(num%i==0)return false;
    }
    return true;
}

for(let i=0;i<arr14.length;i++){
    if(primenum(arr14[i]))
     primen.push(arr14[i]);
}
console.log(primen);






/*Return all the palindromes in an array */

let arr15=[`kayak`,`deified`,`rotator`,`lord`,`shiva`,`repaper`,`deed`,`peep`,`wow`,`noon`]

let palindrom=str=>{
    let reverrsedst=str.split(``).reverse().join(``);
    return str===reverrsedst
}

let palindro=[];
for(let i=0;i<arr15.length;i++){
    if(palindrom(arr15[i])){
        palindro.push(arr15[i])
    }
}
console.log(palindro);
