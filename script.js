//task1 

// let num = prompt("ededi daxil edin");
// if (num % 21 == 0) {console.log("YES");}
// else {console.log("NO");}



// task2

// let a = Number(prompt("birinci ededi daxil edin"));
// let b = Number(prompt("ikinci ededi daxil edin"));
// if (a % 2 == 0) {a++;}
// let ans = 0;
// for (let i = a; i <= b; i += 2)
// {
//     ans++;
// }
// console.log(ans);


//task3

// let a = Number(prompt("birinci ededi daxil edin"));
// let b = Number(prompt("ikinci ededi daxil edin"));
// if (a % 2 == 0) {a++;}
// let ans = 0;
// for (let i = a; i <= b; i += 2)
// {
//     ans += i;
// }
// console.log(ans);


//task4

// let n = prompt("ededi daxil edin");
// let flag = 0;
// for (let i = 2; i * i <= n; i++)
// {
//     if (n % i == 0)
//     {
//         flag = 1;
//         break;
//     }
// }
// if (n == 1) {console.log("eded ne sade ne murekkebdir");}
// else if (flag) {console.log("eded murekkebdir");}
// else {console.log("eded sadedir");}



//task5

// let n = Number(prompt("arrayin size-ni daxil edin"));
// let arr = [n];
// let cnt = 0;
// for (let i = 0; i < n; i++)
// {
//     arr[i] = prompt("arrayin elementlerini daxil edin");
//     if (arr[i] % 2 == 0) {cnt++;}
// }
// console.log(cnt);



//task6

// let n = Number(prompt("arrayin size-ni daxil edin"));
// let arr = [n];
// let ans = 0;
// for (let i = 0; i < n; i++)
// {
//     arr[i] = prompt("arrayin elementlerini daxil edin");
//     if (arr[i] % 2 == 0) {ans += arr[i] ** 2;}
// }
// console.log(ans);




//task7

// let a = prompt("birinci deyeri daxil edin");
// let b = prompt("ikinci deyeri daxil edin"); 
// function sumNumbers(a, b)
// {
//     if (isNaN(a) || isNaN(b)) 
//     {
//         console.log("NO");
//         return;
//     }
//     let sum = 0;
//     for (let i = Number(a); i <= Number(b); i++)
//     {
//         sum += i;
//     }
//     console.log(sum);
// }
// sumNumbers(a, b);




//task8

// let a = prompt("ededi daxil edin");
// if (a < 0) {console.log("menfi");}
// else if (a > 0) {console.log("musbet");}
// else {console.log("0");}


//task9

// let n = Number(prompt("ededi daxil edin"));
// let res = 0;
// while (n > 0)
// {
//     res ++;
//     n /= 10;
//     n = Math.floor(n);
// }
// console.log(res);


//task10


// let n = Number(prompt("ededi daxil edin"));
// console.log(n % 10);


//task11

// let n = Number(prompt("ededi daxil edin"));
// let res = 0;
// while (n > 0)
// {
//     res = n % 10;
//     n /= 10;
//     n = Math.floor(n);
// }
// console.log(res);




//task12

// let n = Number(prompt("ededi daxil edin"));
// for (let i = 5; i <= n; i += 5) {console.log(i);}




//task13

// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// console.log(arr.length);



//task14

// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// for (let i = 0; i < arr.length; i++)
// {
//     if (arr[i] < 0) {console.log(arr[i]);}
// }



//task15

let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
let maks = arr[0];
for (let i = 0; i < arr.length; i++)
{
    maks = Math.max(maks, arr[i]);
}
console.log(maks);