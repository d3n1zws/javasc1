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

// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let maks = arr[0];
// for (let i = 0; i < arr.length; i++)
// {
//     maks = Math.max(maks, arr[i]);
// }
// console.log(maks);




//task16

// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let sum = arr[0] + arr[arr.length - 1];
// arr[arr.length - 1] = arr[0];
// arr[0] = sum - arr[0];
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }




//task17

// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let flag = 0;
// for (let i = 0; i < arr.length; i++)
// {
//     if (arr[i] == 10)
//     {
//         flag = 1;
//         console.log(i + 1);
//         break;
//     }
// }
// if (!flag) {console.log(-1);}




//task18


// let n = Number(prompt("ededi daxil edin"));
// let res = 0;
// while (n > 0)
// {
//     res += n % 10;
//     n /= 10;
//     n = Math.floor(n);
// }
// console.log(res);




//task19

// let n = Number(prompt("ededi daxil edin"));
// let res = 1;
// while (n > 0)
// {
//     res *= n % 10;
//     n /= 10;
//     n = Math.floor(n);
// }
// console.log(res);



//task20

// let n = Number(prompt("ededi daxil edin"));
// let res = 0, nc = n;
// while (n > 0)
// {
//     res = res * 10 + n % 10;
//     n /= 10;
//     n = Math.floor(n);
// }
// if (res == nc) {console.log("palindromdur");}
// else {console.log("palindrom deyil");}





//task21


// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let indmin = -1, indmax = -1, min = arr[0], max = arr[0];
// for (let i = 0; i < arr.length; i++)
// {
//     if (arr[i] >= max)
//     {
//         max = arr[i];
//         indmax = i + 1;
//     }
//     if (arr[i] <= min)
//     {
//         min = arr[i];
//         indmin = i + 1;
//     }
// }
// console.log(indmin, indmax);



//task22


// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let a = [], j = 0;
// for (let i = 0; i < arr.length; i++)
// {
//     if (arr[i] == 0) {continue;}
//     a[j] = arr[i];
//     j++;
// }
// for (let i = 0; i < a.length; i++)
// {
//     console.log(a[i]);
// }




//task23


// function func(arr)
// {
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] >= 0) {continue;}
//         arr[i] = 0;
//     }
//     return arr;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// arr = func(arr);
// for (let i = 0; i < arr.length; i++) {console.log(arr[i]);}



//task24


// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// arr.sort();
// let flag = Boolean(false);
// for (let i = 0; i < arr.length - 1; i++)
// {
//     if (arr[i] == arr[i + 1])
//     {
//         flag = true;
//         break;
//     }
// }
// console.log(flag);





//task25


// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// arr.sort();
// console.log(arr[arr.length - 2]);



//task26

// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// arr.sort();
// let a = [], j = 0;
// arr[arr.length] = arr[arr.length - 1] - 1;
// for (let i = 0; i < arr.length - 1; i++)
// {
//     if (arr[i] == arr[i + 1])
//     {
//         continue;
//     }
//     a[j] = arr[i];
//     j++;
// }

// for (let i = 0; i < a.length; i++)
// {
//     console.log(a[i]);
// }




//task27


// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// function reverseArray(arr)
// {
//     let a = [];
//     for (let i = 0; i < arr.length; i++)
//     {
//         a[i] = arr[arr.length - i - 1];
//     }
//     return a;
// }
// arr = reverseArray(arr);
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }




//task28



// let n = prompt("eded daxil edin");
// let res = 0;
// for (let i = 1; i * i <= n; i++)
// {
//     if (n % i == 0)
//     {
//         res += i;
//         if (n / i != i) {res += n / i;}
//     }
// }
// res -= n;
// if (res == n) {console.log("mukemmel eded");}
// else {console.log("mukemmel eded deyil");}



//task29

// let n = prompt("ededi daxil edin");
// let nc = n, newn = 0;
// while (n > 0)
// {
//     newn += (n % 10) ** 3;
//     n /= 10;
//     n = Math.floor(n);
// }
// if (nc == newn) {console.log("yes");}
// else {console.log("no");}





//task30


// let n = prompt("ededi daxil edin");
// let fact = 1;
// while (n > 0)
// {
//     fact *= n;
//     n--;
// }
// console.log(fact);



//task31


// function getArray(n)
// {
//     let arr = [];
//     arr[0] = 0;
//     arr[1] = 1;
//     for (let i = 2; i < n; i++)
//     {
//         arr[i] = arr[i - 1] + arr[i - 2];
//     }
//     return arr;
// }
// let n = prompt("eded daxil edin");
// let arr = getArray(n);
// for (let i = 0; i < n; i++)
// {
//     console.log(arr[i]);
// }


//task32


// let a = prompt("eded daxil edin");
// let b = prompt("eded daxil edin");
// let res = 1;
// for (let i = 1; i * i <= a; i++)
// {
//     if (b % i == 0 && a % i == 0)
//     {
//         res =  i;
//         if (b % (a / i) == 0 && a % (a / i) == 0)
//         {
//             res = a / i;
//             break;
//         }
//     }
// }
// console.log(res);



//task33


// let a = prompt("eded daxil edin");
// let b = prompt("eded daxil edin");
// let res = 1;
// for (let i = 1; i * i <= a; i++)
// {
//     if (b % i == 0 && a % i == 0)
//     {
//         res =  i;
//         if (b % (a / i) == 0 && a % (a / i) == 0)
//         {
//             res = a / i;
//             break;
//         }
//     }
// }
// console.log(a * b / res);




// task34

// let n = prompt("eded daxil edin");
// let str = "";
// while (n > 0)
// {
//     let x;
//     if (n % 2 == 0)
//     {
//         x = '0';
//     }
//     else
//     {
//         x = '1';
//     }
//     str = x + str;
//     n /= 2;
//     n = Math.floor(n);
// }
// console.log(str);



//task35



// let n = prompt("eded daxil edin");
// let maks = 0;
// while (n > 0)
// {
//     maks = Math.max((n % 10), maks);
//     n /= 10;
//     n = Math.floor(n);
// }
// console.log(maks);


//task36


// let n = prompt("ededi daxil edin");
// let newn = 0;
// while (n > 0)
// {
//     newn = newn * 10 + (n % 10);
//     n /= 10;
//     n = Math.floor(n);
// }
// console.log(newn);