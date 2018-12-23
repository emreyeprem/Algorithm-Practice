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
