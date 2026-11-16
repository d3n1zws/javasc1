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



//task37

// let a = prompt("eded daxil edin");
// let b = prompt("eded daxil edin");
// let arr = [], j = 0;
// for (let i = a; i <= b; i++)
// {
//     let flag = 0;
//     for (let j = 2; j * j <= i; j++)
//     {
//         if (i % j == 0)
//         {
//             flag = 1;
//         }
//     }
//     if (!flag)
//     {
//         arr[j] = i;
//         j++;
//     }
// }
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }




//task 38

// function func(arr, k)
// {
//     let a = [], x = 0;
//     for (let i = arr.length - k; i < arr.length; i++)
//     {
//         a[x] = arr[i];
//         x++;
//     }
//     for (let i = 0; i < arr.length - k; i++)
//     {
//         a[x] = arr[i];
//         x++;
//     }
//     return a;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let k = prompt("eded daxil edin");
// arr = func(arr, k);
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }



//task39

// function func(arr)
// {
//     let a = [], x = 0;
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] == 0) {continue;}
//         a[x] = arr[i];
//         x++;
//     }
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] != 0) {continue;}
//         a[x] = arr[i];
//         x++;
//     }
//     return a;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// arr = func(arr);
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }



//task40

// function func(arr)
// {
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] == i + 1) {continue;}
//         return i + 1;
//     }
//     return arr.length + 1;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// arr.sort((a, b) => a - b);
// console.log(func(arr));





//task41

// function func(arr, a)
// {
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] != a[i])
//             return false;
//     }
//     return true;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let a = [];
// for (let i = 0; i < arr.length; i++)
// {
//     a[i] = arr[i];
// }
// arr.sort((a, b) => a - b);
// console.log(func(arr, a));




//task42

// function func(arr, a)
// {
//     let i = 0, j = 0, x = 0;
//     let newa = [];
//     while (i < arr.length || j < a.length)
//     {
//         if (i == arr.length)
//         {
//             newa[x] = a[j];
//             j++;
//             x++;
//             continue;
//         }
//         if (j == a.length)
//         {
//             newa[x] = arr[i];
//             i++;
//             x++;
//             continue;
//         }
//         if (arr[i] > a[j])
//         {
//             newa[x] = a[j];
//             j++;
//         }
//         else
//         {
//             newa[x] = arr[i];
//             i++;
//         }
//         x++;
//     }
//     return newa;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let a = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let newa = func(arr, a);
// for (let i = 0; i < newa.length; i++)
// {
//     console.log(newa[i]);
// }



//task43

// function func(arr)
// {
//     let obj = 
//     {
//         even: [],
//         odd: []
//     };
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] % 2 == 0) {obj.even.push(arr[i]);}
//         else {obj.odd.push(arr[i]);}
//     }
//     return obj;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// console.log(func(arr));




//task44

// function func(arr)
// {
//     let a = [];
//     for (let i = 0; i < arr.length; i++)
//     {
//         let flag = true;
//         for (let j = 0; j < arr.length; j++)
//         {
//             if (i == j) {continue;}
//             if (arr[i] == arr[j])
//             {
//                 flag = false;
//                 break;
//             }
//         }
//         if (flag)
//         {
//             a.push(arr[i]);
//         }
//     }
//     return a;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// console.log(func(arr));




//task45

// function func(arr)
// {
//     let a = [], x = 0;
//     for (let i = 0; i < arr.length; i++)
//     {
//         x += arr[i];
//     }
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] > x / arr.length)
//         {
//             a.push(arr[i]);
//         }
//     }
//     return a;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// console.log(func(arr));




//task46

// function func(arr, a)
// {
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] != a[i])
//             return false;
//     }
//     return true;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let a = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// console.log(func(arr, a));






// task47

// function func(arr)
// {
//     let a = [], x = 0;
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] > 0) {continue;}
//         a[x] = arr[i];
//         x++;
//     }
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i] < 0) {continue;}
//         a[x] = arr[i];
//         x++;
//     }
//     return a;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// arr = func(arr);
// for (let i = 0; i < arr.length; i++)
// {
//     console.log(arr[i]);
// }




//task48

// function func(str)
// {
//     let s = "aeiouəöüı";
//     let cnt = 0;
//     for (let i = 0; i < str.length; i++)
//     {
//         if (s.includes(str[i].toLowerCase()))
//         {
//             cnt++;
//         }
//     }
//     return cnt;
// }
// let str = prompt("String daxil edin");
// console.log(func(str));




//task49

// function func(str)
// {
//     let cnt = 0;
//     str = str + ' ';
//     for (let i = 0; i < str.length - 1; i++)
//     {
//         if (str[i] != ' ' && str[i + 1] == ' ')
//         {
//             cnt++;
//         }
//     }
//     return cnt;
// }
// let str = prompt("String daxil edin");
// console.log(func(str));




//task50

// function func(str)
// {
//     let obj = {};
//     for (let i = 0; i < str.length; i++)
//     {
//         let c = str[i];
//         if (obj[c] === undefined)
//         {
//             obj[c] = 0;
//         }
//         obj[c]++;
//     }
//     return obj;
// }
// let str = prompt("String daxil edin");
// console.log(func(str));



// task51

// function func(arr)
// {
//     let x = 0, str = "";
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i].length > x)
//         {
//             str = arr[i];
//             x = arr[i].length;
//         }
//     }
//     return str;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ");
// console.log(func(arr));




//task52

// function func(str, s)
// {
//     if (str.length != s.length)
//         return false;
//     for (let i = 0; i < str.length; i++)
//     {
//         if (str[i] != s[i])
//             return false;
//     }
//     return true;
// }
// let str = prompt("string daxil edin");
// let s = prompt("string daxil edin");
// str = str.split("").reverse().join("");
// console.log(func(str, s));



//task53


// function func(str)
// {
//     let s = str[0].toUpperCase();
//     for (let i = 1; i < str.length; i++)
//     {
//         if (str[i - 1] == ' ' && str[i] != ' ')
//         {
//             s += str[i].toUpperCase();
//         }
//         else
//         {
//             s += str[i];
//         }
//     }
//     return s;
// }
// let str = prompt("string daxil edin");
// console.log(func(str));




// task54

// function func(arr, search)
// {
//     let cnt = 0;
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (arr[i].toLowerCase() == search.toLowerCase())
//         {
//             cnt++;
//         }
//     }
//     return cnt;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ");
// let search = prompt("search daxil edin");
// console.log(func(arr, search));




//task55


// let users = [
//     { name: "Kamran", age: 17 },
//     { name: "Aysel", age: 22 },
//     { name: "Rəşad", age: 19 }
// ];
// function func(users)
// {
//     let arr = [];
//     for (let i = 0; i < users.length; i++)
//     {
//         if (users[i].age > 18)
//         {
//             arr.push(users[i].name);
//         }
//     }
//     return arr;
// }
// console.log(func(users));



//task56

// function func(products)
// {
//     let arr = [];
//     for (let i = 0; i < products.length; i++)
//     {
//         arr.push(products[i].price * 1.18);
//     }
//     return arr;
// }
// let products = [
//     { name: "Phone", price: 1000 },
//     { name: "Laptop", price: 2000 },
//     { name: "Mouse", price: 50 }
// ];
// console.log(func(products));




//task57

// function func(employees)
// {
//     let obj = {};
//     for (let i = 0; i < employees.length; i++)
//     {
//         let dep = employees[i].department;
//         if (obj[dep] === undefined)
//         {
//             obj[dep] = [];
//         }
//         obj[dep].push(employees[i].name);
//     }
//     return obj;
// }
// let employees = 
// [
//     { name: "Elvin", department: "IT" },
//     { name: "Günay", department: "HR" },
//     { name: "Tural", department: "IT" }
// ];
// console.log(func(employees));




//task58

// function func(arr)
// {
//     let obj = {};
//     let maks = 0, ans;
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (obj[arr[i]] === undefined)
//         {
//             obj[arr[i]] = 0;
//         }
//         obj[arr[i]]++;
//         if (obj[arr[i]] > maks)
//         {
//             maks = obj[arr[i]];
//             ans = arr[i];
//         }
//     }
//     return ans;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// console.log(func(arr));




//task59

// function func(arr)
// {
//     let a = [], b = [];
//     let mid = Math.floor(arr.length / 2);
//     for (let i = 0; i < mid; i++)
//     {
//         a.push(arr[i]);
//     }
//     for (let i = mid; i < arr.length; i++)
//     {
//         b.push(arr[i]);
//     }
//     return [a, b];
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// console.log(func(arr));




//task60


// function func(arr, a)
// {
//     let b = [];
//     for (let i = 0; i < arr.length; i++)
//     {
//         for (let j = 0; j < a.length; j++)
//         {
//             if (arr[i] == a[j])
//             {
//                 b.push(arr[i]);
//                 break;
//             }
//         }
//     }
//     return b;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let a = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// console.log(func(arr, a));




//task61

// function func(arr)
// {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (obj[arr[i]] === undefined)
//         {
//             obj[arr[i]] = 0;
//         }
//         obj[arr[i]]++;
//     }
//     return obj;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// console.log(func(arr));



//task62

// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// for (let i = 0; i < arr.length - 1; i++)
// {
//     if (arr[i] == arr[i + 1])
//     {
//         console.log(arr[i]);
//     }
// }



//task63

// let students = [
//     { name: "Ali", age: 20, grade: 75 },
//     { name: "Murad", age: 19, grade: 45 },
//     { name: "Leyla", age: 21, grade: 90 },
//     { name: "Nigar", age: 20, grade: 60 }
// ];
// let maks = students[0];
// for (let i = 1; i < students.length; i++)
// {
//     if (students[i].grade > max.grade)
//     {
//         max = students[i];
//     }
// }
// console.log(max);



//task64


// let products = [
//     { name: "Mouse", price: 40 },
//     { name: "Keyboard", price: 80 },
//     { name: "Monitor", price: 300 },
//     { name: "Headset", price: 120 }
// ];
// let newp = [];
// for (let i = 0; i < products.length; i++)
// {
//     if (products[i].price < 100)
//     {
//         newp.push(products[i]);
//     }
// }
// console.log(newp);



//task65


// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// let cnt = 1, max = 1;
// for (let i = 1; i < arr.length; i++)
// {
//     if (arr[i] > arr[i - 1])
//     {
//         cnt++;
//     }
//     else
//     {
//         if (cnt > max)
//         {
//             max = cnt;
//         }
//         cnt = 1;
//     }
// }
// console.log(max);


//task66

// function func(arr)
// {
//     let obj = {};
//     for (let i = 0; i < arr.length; i++)
//     {
//         if (obj[arr[i]] == undefined)
//         {
//             obj[arr[i]] = 0;
//         }
//         obj[arr[i]]++;
//     }
//     return obj;
// }
// let arr = prompt("Array elementlerini daxil edin").split(" ").map(Number);
// console.log(func(arr));
clg