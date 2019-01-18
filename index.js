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
