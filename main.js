
// Given a string, return it in reverse
function challengeOne(str){
  // need to iterate through the string starting from the end, and take each character and put it into a new string.
  let reverseString = ""
  for(i = 0; i < str.length; i++){
    reverseString += str[str.length - (i + 1)]
  }
  document.getElementById("challenge1").innerHTML = reverseString
}

// Given a number, return even if the number is even and odd if the number is odd
function challengeTwo(num){
  //need to check if number is divisble by 2, or is zero for even. Otherwise, odd.
  return num % 2 == 0 || num == 0 ? "even" : "odd"
}

// Given an array of strings, return the string in snake casing, i.e this_is_snake_casing
function challengeThree(arr){
  // starting with the second word, need to have the make sure each string is lower case with a "_" in front of it.
let snakeString = arr[0].toLowerCase()

for(i=1; i < arr.length; i++){
  snakeString += ("_" + arr[i].toLowerCase())
}
document.getElementById("challenge3").innerHTML = snakeString
}

challengeOne("eseehc")
document.getElementById("challenge2a").innerHTML= challengeTwo(6)
document.getElementById("challenge2b").innerHTML= challengeTwo(3)
document.getElementById("challenge2c").innerHTML= challengeTwo(0)

const arr = ["Marry", "had", "a", "Little", "lamb"]
challengeThree(arr)