//find the element which does not fit the pattern(even,odd)
var arr = [1,1,3,5,8,7]
var binarySearch = []

  for(var i = 0; i< arr.length; i++){
    if(arr[i] % 2 == 0){
      binarySearch.push(0)
  } else{
      binarySearch.push(1)
  }
}

var result = ''
 let sortedArr = binarySearch.sort(function(a, b){return a - b})
 if(sortedArr[1] == 0){
    result = "odd"
 } else {
  result = "even"
 }
 for(var i = 0; i< arr.length; i++){
   if(result == "odd" && arr[i] % 2 != 0){
    console.log(arr.indexOf(arr[i]) + 1)
  }
  else if(result == "even" && arr[i] % 2 == 0){
    console.log(arr.indexOf(arr[i]) + 1)
 }
 }
 //-------------------String to camelcase and combined-------------------------
let str = "The_stealth_warrior" //Output: TheStealthWarrior
let capitalizedArr = []
 function toCamelCase(str){
 if(str.includes('-')==true){
 let arr = str.split('-')
 capitalizedArr.push(arr[0])
 for(var i=1;i<arr.length;i++){
   capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
 }

 console.log(capitalizedArr.join(''))
} else if(str.includes('_')==true){
let arr = str.split('_')
capitalizedArr.push(arr[0])
for(var i=1;i<arr.length;i++){
  capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
}

console.log(capitalizedArr.join(''))
}
}
toCamelCase(str)
//-------------------- Sort a given string including numbers -------------

let word = "is2 Thi1s T4est 3a"
let newarr = []
function convertStringToArray(word){
  let splittedWord = word.split(' ')
  //console.log(splittedWord)
  for(var count = 1;count < splittedWord.length+1;count++){
  for(i=0;i<splittedWord.length;i++){
    if(splittedWord[i].includes(count)==true){
        newarr.push(splittedWord[i])
    }

  }
}
console.log(newarr.join(' '))
console.log(newarr)
}
convertStringToArray(word)

//find the element which does not fit the pattern(even,odd)
var arr = [1,1,3,5,8,7]
var binarySearch = []

 for(var i = 0; i< arr.length; i++){
   if(arr[i] % 2 == 0){
     binarySearch.push(0)
 } else{
     binarySearch.push(1)
 }
}

var result = ''
let sortedArr = binarySearch.sort(function(a, b){return a - b})
if(sortedArr[1] == 0){
   result = "odd"
} else {
 result = "even"
}
for(var i = 0; i< arr.length; i++){
  if(result == "odd" && arr[i] % 2 != 0){
   console.log(arr.indexOf(arr[i]) + 1)
 }
 else if(result == "even" && arr[i] % 2 == 0){
   console.log(arr.indexOf(arr[i]) + 1)
}
}
//-------------------String to camelcase and combined------------------------------------
let str = "The-stealth-warrior" //Output: TheStealthWarrior
let capitalizedArr = []
function toCamelCase(str){
if(str.includes('-')==true){
  console.log(str.split('-'))
let arr = str.split('-')
capitalizedArr.push(arr[0])
for(var i=1;i<arr.length;i++){
  capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
}

console.log(capitalizedArr.join(''))
} else if(str.includes('_')==true){
let arr = str.split('_')
capitalizedArr.push(arr[0])
for(var i=1;i<arr.length;i++){
 capitalizedArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1))
}

console.log(capitalizedArr.join(''))
}
}
toCamelCase(str)
//-------------------Equal sum of each side of an index-----------------------------------------------------
let array = [1,2,3,4,3,2,1] //Outcome: 3.index and number is 4.
let result1;
function findEvenIndex(array){
 for(var i=0;i<array.length;i++){
   let leftarray = array.slice(0,i)
   let rigtharray = array.slice(i+1)
   let leftSum= leftarray.reduce((a,b)=> a+b,0)
   let rigthSum= rigtharray.reduce((a,b)=> a+b,0)
   if(leftSum==rigthSum){
      result1 = i
   }
 }
 return result1
}
findEvenIndex(array)
//-----------------------Remove smallest number in an array, get smallest index if there are more than 1---------------------------------------
let arry = [6,2,3,2,4,5]

let min = Math.min(...arry)
let index=[1]

for(var i = 0; i<arry.length;i++){
 if(arry[i]==min && index.length==0){
   index.push(arry.indexOf(arry[i]))
 }
}
let newArry = arry.slice(0,index[0]).concat(arry.slice(index[0]+1))
console.log(newArry)

//---------------------- Pallindrome -----------------------------------
function isPalindrome(word){
  let reversedWord = []
  let splittedWord = word.split('')
  let count = splittedWord.length - 1
  console.log(splittedWord)
   for(var index = count;index>-1;index--){
   reversedWord.push(splittedWord[index])
   console.log(reversedWord)
   }
   let newWord = reversedWord.join('')
   console.log(newWord)
   if(word == newWord){
     return true
   } else{
     return false
   }
}
//isPalindrome(word)
console.log(isPalindrome('beyza'))

//-------------- Fizz-Buzz -----------------------------
function isFizzBuzz(number){
  if(number % 15 == 0){
    return "FizzBuzz"
  } else if(number % 3 == 0){
      return "Fizz"
  } else if(number % 5 == 0){
      return "Buzz"
  } else {
     return "Neither"
  }
}
console.log(isFizzBuzz(120))
// -------------- Pallindrome ------------------

#third trial
number = int(input("Enter a number: "))
def isPrime(n):
    if n < 2:
        return False

    for i in range(2, n, 1):
        if n % i == 0:
            return False

    return True

print(isPrime(number))

// -------------- code bat -------------------------
// Given a string, return a new string where "not " has been added to the front. However, if the string already begins with "not", return the string unchanged. Note: use .equals() to compare 2 strings.

notString("candy") → "not candy"
notString("x") → "not x"
notString("not bad") → "not bad"

public String notString(String str) {

}
function String(string){
  let arr = string.split(' ')
  if(arr[0]=='not'){
    return string;
  } else {
    return 'not ' + string;
  }
}

// -------- Combining .map(), .reduce(), and .filter() ---------
var personnel = [
  {
    id: 5,
    name: "Luke Skywalker",
    pilotingScore: 98,
    shootingScore: 56,
    isForceUser: true,
  },
  {
    id: 82,
    name: "Sabine Wren",
    pilotingScore: 73,
    shootingScore: 99,
    isForceUser: false,
  },
  {
    id: 22,
    name: "Zeb Orellios",
    pilotingScore: 20,
    shootingScore: 59,
    isForceUser: false,
  },
  {
    id: 15,
    name: "Ezra Bridger",
    pilotingScore: 43,
    shootingScore: 67,
    isForceUser: true,
  },
  {
    id: 11,
    name: "Caleb Dume",
    pilotingScore: 71,
    shootingScore: 85,
    isForceUser: true,
  },
];

//Our objective: get the total score of force users only. Let’s do it step by step!
//First, we need to filter out the personnel who can’t use the force:

var jediPersonnel = personnel.filter(function (person) {
  return person.isForceUser;
});
// Result: [{...}, {...}, {...}] (Luke, Ezra and Caleb)
//With that we have 3 elements left in our resulting array. We now need to create an array containing the total score of each Jedi.

var jediScores = jediPersonnel.map(function (jedi) {
  return jedi.pilotingScore + jedi.shootingScore;
});
// Result: [154, 110, 156]
//And let’s use reduce to get the total:

var totalJediScore = jediScores.reduce(function (acc, score) {
  return acc + score;
}, 0);
// Result: 420
//And now here’s the fun part… we can chain all of this to get what we want in a single line:

var totalJediScore = personnel
  .filter(function (person) {
    return person.isForceUser;
  })
  .map(function (jedi) {
    return jedi.pilotingScore + jedi.shootingScore;
  })
  .reduce(function (acc, score) {
    return acc + score;
  }, 0);
//And look how pretty it is with arrow functions:

const totalJediScore = personnel
  .filter(person => person.isForceUser)
  .map(jedi => jedi.pilotingScore + jedi.shootingScore)
  .reduce((acc, score) => acc + score, 0);


//------Equal sum of each side of an index--
let array = [1,2,3,4,3,2,1] //Outcome: 3.index and number is 4.
let result1;
function findEvenIndex(array){
  for(var i=0;i<array.length;i++){
    let leftarray = array.slice(0,i)
    let rigtharray = array.slice(i+1)
    let leftSum= leftarray.reduce((a,b)=> a+b,0)
    let rigthSum= rigtharray.reduce((a,b)=> a+b,0)
    if(leftSum==rigthSum){
       result1 = i
    }
  }
  return result1
}
findEvenIndex(array)
//---Remove smallest number in an array, get smallest index if there are more than 1-----
let arry = [6,2,3,2,4,5]

let min = Math.min(...arry)
let index=[1]

for(var i = 0; i<arry.length;i++){
  if(arry[i]==min && index.length==0){
    index.push(arry.indexOf(arry[i]))
  }
}
let newArry = arry.slice(0,index[0]).concat(arry.slice(index[0]+1))
console.log(newArry)
//-----------------------------Palindrome----------------------------
let string = "emre"
function isPalindrome(string){
let stringarr = string.toLowerCase().split('')
let reversedstringarr = stringarr.reverse()
let reversedstring=reversedstringarr.join('')
if(string == reversedstring){
  return true
} else{
  return false
}
}
console.log(isPalindrome(string))
//--------------------------------FizzBuzz---------------------------
function isFizzBuzz(number){
  if(number % 15 ==0){
    return 'fizzbuzz'
  }else if(number % 5 ==0){
    return 'fizz'
  } else if(number % 3 == 0){
    return 'buzz'
  } else {
    return 'neither'
  }

}
console.log(isFizzBuzz(32))
//-------------------------------------------------------

function orderString(string){
  let orderedarr = []
  let arr = string.split(' ')
  console.log(arr)
  for(var i = 1;i<10;i++){
    arr.forEach(function(each){
        if(each.includes(i)){
           orderedarr.push(each)
        }
    })
  }
  console.log(orderedarr.join(' '))
   return orderedarr.join(' ')
}
orderString("4of Fo1r pe6ople g3ood th5e the2")
//------------------------------------------------
let friends = ["Ryan", ,"Mark","Jimmy", "123", "4", "Cool Man"]
function pickMyFriends(arr){
  let filteredarr= arr.filter((each)=>{
     if(each.length==4 && isNaN(each)==true){
       return each
     }

  })
  console.log(filteredarr)
  return filteredarr
}
pickMyFriends(friends)

// Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).


missingChar("kitten", 1) → "ktten"
missingChar("kitten", 0) → "itten"
missingChar("kitten", 4) → "kittn"

public String missingChar(String str, int n) {
  String front = str.substring(0, n);

  // Start this substring at n+1 to omit the char.
  // Can also be shortened to just str.substring(n+1)
  // which goes through the end of the string.
  String back = str.substring(n+1, str.length());

  return front + back;
}

// -----------no one like this --------------------
//  example tests
 // should return correct text
// Test Passed: Value == 'no one likes this'
// Test Passed: Value == 'Peter likes this'
// Test Passed: Value == 'Jacob and Alex like this'
// Test Passed: Value == 'Max, John and Mark like this'
// Test Passed: Value == 'Alex, Jacob and 2 others like this'

function likes(names) {

  if(names==""){
  return 'no one likes this'
  } else if(names.length == 1){
  return names[0] + ' likes this'
  } else if(names.length == 2){
   for(var i=0; i<names.length; i++){
    return names[i] + ' and ' + names[i+1] + ' like this'
   }
  } else if(names.length == 3){
   for(var i=0; i<names.length; i++){
    return names[i]  +', '+  names[i+1] + ' and ' + names[i+2] + ' like this'
  }
 } else if(names.length >= 4){
   for(var i=0; i<names.length; i++){
     return names[i]  +', '+  names[i+1] + ' and ' +  names.slice(2).length  + ' others like this'
   }
 }
}

// ---------- write digits of a large number in descending order ---------
//Test.assertEquals(descendingOrder(0), 0)
//Test.assertEquals(descendingOrder(1), 1)
//Test.assertEquals(descendingOrder(123456789), 987654321)
function descendingOrder(n){
let arr = n.toString().split('')
  let newarr=arr.map((each)=>{return parseInt(each)})
  let sorted= newarr.sort((a,b)=>b-a)
  let result=sorted.join('')
  return parseInt(result)
}

// -------------- lowest & highest numbers -------------
let numbers = "4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"


function highAndLow(numbers){
  let arr = numbers.split(' ')
  console.log(arr)
  let sorted = arr.sort((a,b)=>a-b)
  // console.log(sorted)
  let lowestNumber = sorted[0]
  console.log(lowestNumber)

  let sortedDescending = arr.sort((a,b)=>b-a)
  let highestNumber = sortedDescending[0]
  console.log(highestNumber)
}
highAndLow(numbers)

// ------------------  string   ----------------------

// Given a string, return a version where all the "x" have been removed. Except an "x" at the very start or end should not be removed.
//
// stringX("xxHxix") → "xHix"
// stringX("abxxxcd") → "abcd"
// stringX("xabxxxcdx") → "xabcdx"

public String stringX(String str) {
String result = "";
for (int i=0; i<str.length(); i++) {
  // Only append the char if it is not the "x" case
  if (!(i > 0 && i < (str.length()-1) && str.substring(i, i+1).equals("x"))) {
    result = result + str.substring(i, i+1); // Could use str.charAt(i) here
  }
}
return result;
}

// ------------------ arrayFront ----------------------

// Given an array of ints, return true if one of the first 4 elements in the array is a 9. The array length may be less than 4.
// arrayFront9([1, 2, 9, 3, 4]) → true
// arrayFront9([1, 2, 3, 4, 9]) → false
// arrayFront9([1, 2, 3, 4, 5]) → false

public boolean arrayFront9(int[] nums) {
  // First figure the end for the loop
  int end = nums.length;
  if (end > 4) end = 4;

  for (int i=0; i<end; i++) {
    if (nums[i] == 9) return true;
  }

  return false;
}
// -----------------  frontTimes  ------------------
// Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;

// frontTimes("Chocolate", 2) → "ChoCho"
// frontTimes("Chocolate", 3) → "ChoChoCho"
// frontTimes("Abc", 3) → "AbcAbcAbc"

public String frontTimes(String str, int n) {
  int frontLen = 3;
  if (frontLen > str.length()) {
    frontLen = str.length();
  }
  String front = str.substring(0, frontLen);

  String result = "";
  for (int i=0; i<n; i++) {
    result = result + front;
  }
  return result;
}

// -----------------------  altPairs ---------------------

// Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".
//
//
// altPairs("kitten") → "kien"
// altPairs("Chocolate") → "Chole"
// altPairs("CodingHorror") → "Congrr"

public String altPairs(String str) {
  String result = "";

  // Run i by 4 to hit 0, 4, 8, ...
  for (int i=0; i<str.length(); i += 4) {
    // Append the chars between i and i+2
    int end = i + 2;
    if (end > str.length()) {
      end = str.length();
    }
    result = result + str.substring(i, end);
  }

  return result;
}

// ------------------------- or35 --------------------------

// Return true if the given non-negative number is a multiple of 3 or a multiple of 5. Use the % "mod" operator -- see Introduction to Mod
//
// or35(3) → true
// or35(10) → true
// or35(8) → false

public boolean or35(int n) {
  return (n % 3 == 0) || (n % 5 == 0);
}

// -------------------- array 123 ---------------------------

// Given an array of ints, return true if the sequence of numbers 1, 2, 3 appears in the array somewhere.
//
// array123([1, 1, 2, 3, 1]) → true
// array123([1, 1, 2, 4, 1]) → false
// array123([1, 1, 2, 1, 2, 3]) → true

public boolean array123(int[] nums) {
  // Note: iterate < length-2, so can use i+1 and i+2 in the loop
  for (int i=0; i < (nums.length-2); i++) {
    if (nums[i]==1 && nums[i+1]==2 && nums[i+2]==3) return true;
  }
  return false;
}

// -------------------- array 667 ----------------------------

// Given an array of ints, return the number of times that two 6 s are next to each other in the array. Also count instances where the second "6" is actually a 7.
//
//
// array667([6, 6, 2]) → 1
// array667([6, 6, 2, 6]) → 1
// array667([6, 7, 2, 6]) → 1

public int array667(int[] nums) {
  int count = 0;
  // Note: iterate to length-1, so can use i+1 in the loop
  for (int i=0; i < (nums.length-1); i++) {
    if (nums[i] == 6) {
      if (nums[i+1] == 6 || nums[i+1] == 7) {
        count++;
      }
    }
  }
  return count;
}

// ------------------- stringYAK -------------------
// Suppose the string "yak" is unlucky. Given a string, return a version where all the "yak" are removed, but the "a" can be any char. The "yak" strings will not overlap.
//
// stringYak("yakpak") → "pak"
// stringYak("pakyak") → "pak"
// stringYak("yak123ya") → "123ya"

public String stringYak(String str) {
  String result = "";

  for (int i=0; i<str.length(); i++) {
    // Look for i starting a "yak" -- advance i in that case
    if (i+2<str.length() && str.charAt(i)=='y' && str.charAt(i+2)=='k') {
      i =  i + 2;
    } else { // Otherwise do the normal append
      result = result + str.charAt(i);
    }
  }

  return result;
}

// --------------------- string Splosion ----------------
// Given a non-empty string like "Code" return a string like "CCoCodCode".
//
// stringSplosion("Code") → "CCoCodCode"
// stringSplosion("abc") → "aababc"
// stringSplosion("ab") → "aab"

public String stringSplosion(String str) {
  String result = "";
  // On each iteration, add the substring of the chars 0..i
  for (int i=0; i<str.length(); i++) {
    result = result + str.substring(0, i+1);
  }
  return result;
}

// Given a string, return true if the first instance of "x" in the string is immediately followed by another "x".

// doubleX("axxbb") → true
// doubleX("axaxax") → false
// doubleX("xxxxx") → true

boolean doubleX(String str) {
  int i = str.indexOf("x");
  if (i == -1) return false; // no "x" at all

  // Is char at i+1 also an "x"?
  if (i+1 >= str.length()) return false; // check i+1 in bounds?
  return str.substring(i+1, i+2).equals("x");

  // Another approach -- .startsWith() simplifies the logic
  // String x = str.substring(i);
  // return x.startsWith("xx");
}

// Given a string, return a new string made of every other char starting with the first, so "Hello" yields "Hlo".

// stringBits("Hello") → "Hlo"
// stringBits("Hi") → "H"
// stringBits("Heeololeo") → "Hello"

public String stringBits(String str) {
  String result = "";
  // Note: the loop increments i by 2
  for (int i=0; i<str.length(); i+=2) {
    result = result + str.substring(i, i+1);
    // Alternately could use str.charAt(i)
  }
  return result;
}


//Given two int values, return their sum. Unless the two values are the same, then return double their sum.

// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

public int sumDouble(int a, int b) {
  // Store the sum in a local variable
  int sum = a + b;
  
  // Double it if a and b are the same
  if (a == b) {
    sum = sum * 2;
  }
  
  return sum;
}

// --------------------------------------------


//1.1 Given an array of integers, find the largest product yielded from three of the integers
var unsortedArray = [-10, 7, 29, 30, 5, -10, -70];

computeProduct(unsortedArray); // 21000

function sortIntegers(a, b) {
  return a - b;
}

// Greatest product is either (min1 * min2 * max1 || max1 * max2 * max3)
function computeProduct(unsorted) {
  var sortedArray = unsorted.sort(sortIntegers),
    product1 = 1,
    product2 = 1,
    array_n_element = sortedArray.length - 1;

  // Get the product of three largest integers in sorted array
  for (var x = array_n_element; x > array_n_element - 3; x--) {
      product1 = product1 * sortedArray[x];
  }

  product2 = sortedArray[0] * sortedArray[1] * sortedArray[array_n_element];

  if (product1 > product2) return product1;

  return product2;
}

// ---------------------------------
//Given a string and a non-negative int n, we'll say that the front of the string is the first 3 chars, or whatever is there if the string is less than length 3. Return n copies of the front;

// frontTimes("Chocolate", 2) → "ChoCho"
// frontTimes("Chocolate", 3) → "ChoChoCho"
// frontTimes("Abc", 3) → "AbcAbcAbc"
public String frontTimes(String str, int n) {
  int frontLen = 3;
  if (frontLen > str.length()) {
    frontLen = str.length();
  }
  String front = str.substring(0, frontLen);
  
  String result = "";
  for (int i=0; i<n; i++) {
    result = result + front;
  }
  return result;
}

//Exercise 
//I want this code to log out “hey amy”, but it logs out “hey arnold” - why?
function greet (person) {
  if (person == { name: 'amy' }) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
 }
 greet({ name: 'amy' })

//  -------------------------------------

1.4 Given an array of integers, find the largest difference between two elements such that the element of lesser value must come before the greater element
var array = [7, 8, 4, 9, 9, 15, 3, 1, 10];
// [7, 8, 4, 9, 9, 15, 3, 1, 10] would return `11` based on the difference between `4` and `15`
// Notice: It is not `14` from the difference between `15` and `1` because 15 comes before 1.

findLargestDifference(array);

function findLargestDifference(array) {
  // If there is only one element, there is no difference
  if (array.length <= 1) return -1;

  // currentMin will keep track of the current lowest
  var currentMin = array[0];
  var currentMaxDifference = 0;

  // We will iterate through the array and keep track of the current max difference
  // If we find a greater max difference, we will set the current max difference to that variable
  // Keep track of the current min as we iterate through the array, since we know the greatest
  // difference is yield from `largest value in future` - `smallest value before it`

  for (var i = 1; i < array.length; i++) {
    if (array[i] > currentMin && (array[i] - currentMin > currentMaxDifference)) {
      currentMaxDifference = array[i] - currentMin;
    } else if (array[i] <= currentMin) {
      currentMin = array[i];
    }
  }

  // If negative or 0, there is no largest difference
  if (currentMaxDifference <= 0) return -1;

  return currentMaxDifference;
}

//Find the intersection of two arrays. An intersection would be the common elements that exists within both arrays. In this case, these elements should be unique!
var firstArray = [2, 2, 4, 1];
var secondArray = [1, 2, 0, 2];

intersection(firstArray, secondArray); // [2, 1]

function intersection(firstArray, secondArray) {
  // The logic here is to create a hashmap with the elements of the firstArray as the keys.
  // After that, you can use the hashmap's O(1) look up time to check if the element exists in the hash
  // If it does exist, add that element to the new array.

  var hashmap = {};
  var intersectionArray = [];

  firstArray.forEach(function(element) {
    hashmap[element] = 1;
  });

  // Since we only want to push unique elements in our case... we can implement a counter to keep track of what we already added
  secondArray.forEach(function(element) {
    if (hashmap[element] === 1) {
      intersectionArray.push(element);
      hashmap[element]++;
    }
  });

  return intersectionArray;

  // Time complexity O(n), Space complexity O(n)
}

//Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
// XO("ooxx") => true
// XO("xooxx") => false
function XO(str) {
  let x = str.match(/x/gi);
  let o = str.match(/o/gi);
  return (x && x.length) === (o && o.length);
}
console.log(XO('oxotoxcian'))

// function XO(str) {
//   var a = str.replace(/x/gi, ''),
//       b = str.replace(/o/gi, '');
//   return a.length === b.length;
// }

// -----------------------------------------------
// Make a program that filters a list of strings and returns a list with only your friends name in it.
// If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

// Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]
// 1st way;
function friends(str){
  if(str.length===4){
    return true
  } else{
    false
  }
}
console.log(friends('Zero'))
// -------------------------------------------------
// Check if a number is PRIME;
function isPrime(n){
  var divisor = 2;

  while (n > divisor){
    if(n % divisor == 0){
     return false;
    }
    else
      divisor++;
  }
  return true;
}

console.log(isPrime(137));
console.log(isPrime(237));

// ----------------- Prime Factors ----------------------
//How could you find all prime factors of a number?
function primeFactors(n){
  let factors = []
  let divisor = 2
  while(n>2){
    if(n % divisor == 0){
      factors.push(divisor)
      n = n/divisor
    }else{
      divisor++
    }
  }
    return factors

}
console.log(primeFactors(69))
// ------------------- FIBONACCI NUMBERS ---------------------
//How do get nth Fibonacci number?
function fibonacci(n){
  if(n <= 1){
    return n;
  }else{
    return fibonacci(n-1) + fibonacci(n-2)
  }
}
console.log(fibonacci(12))  //144
// ------------------- Greatest Common Divisor -------------------
function greatestCommonDivisor(a, b){
  var divisor = 2, 
      greatestDivisor = 1;

  //if u pass a -ve number this will not work. fix it dude!!
  if (a < 2 || b < 2)
     return 1;
  
  while(a >= divisor && b >= divisor){
   if(a %divisor == 0 && b% divisor ==0){
      greatestDivisor = divisor;      
    }
   divisor++;
  }
  return greatestDivisor;
}
console.log(greatestCommonDivisor(69, 169))

// -------- Convert military time to standard time in javascript ------


var time = "16:30:00"; // your input

time = time.split(':'); // convert to array

// fetch
var hours = Number(time[0]);
var minutes = Number(time[1]);
var seconds = Number(time[2]);

// calculate
var timeValue;

if (hours > 0 && hours <= 12) {
  timeValue= "" + hours;
} else if (hours > 12) {
  timeValue= "" + (hours - 12);
} else if (hours == 0) {
  timeValue= "12";
}
 
timeValue += (minutes < 10) ? ":0" + minutes : ":" + minutes;  // get minutes
timeValue += (seconds < 10) ? ":0" + seconds : ":" + seconds;  // get seconds
timeValue += (hours >= 12) ? " P.M." : " A.M.";  // get AM/PM

// show
alert(timeValue);
console.log(timeValue);

//------------ slice() --------------
var fruits = ["Banana", "Orange", "Apple", "Mango"];
var pets = ["bird", "cat", "dog", "squarrel"]
document.getElementById("demo").innerHTML = fruits;

function myFunction() {
  fruits.splice(2, 0, "Lemon", "Kiwi");   // first output
  pets.splice(1,3)                       //  second output
  document.getElementById("demo").innerHTML = fruits;
}
console.log(myFunction(fruits))   //Banana,Orange,Lemon,Kiwi,Apple,Mango
console.log(myFunction(pets))   // bird

// ------------ Reverse an array ------------
function reverse(array){
  var output = [],
      i;
  for (i = 0; i < array.length; i++){
    output.unshift(array[i]);
  }
  return output;
}
console.log(reverse([1,2,3,4,5,6,7]));

// ------------ 