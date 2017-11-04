

function addTwo(n1 , n2) {
  return n1+n2
}

function addThree(n1, n2,n3) {

  return n1+n2+n3
}

function multiplyTwo(n1,n2) {
  return n1*n2
}

function increaseByPercentage(total, percentage) {
  return (total/100)*(percentage+100)
}

function reverseWord(word) {
  return word.split("").reverse().join("")
}

function celciusToFahrenheit(celcius) {
  return (celcius*1.8) +32
}

function fahrenheitToCelcius(fahr) {
  return ((fahr-32)*5)/9
}

// BONUS QUESTION
// function stripVowels(word) {
//   return word.replace(/[aeiou]/gi, '');
// }

function stripVowels(word){
  var vowelList = ['a','e','i','o','u'];
  var wordArray = word.split('');
  for (var i = 0; i < wordArray.length; i++) {
    for (var x = 0; x < wordArray.length; x++) {
      if (wordArray[i] === vowelList[x]){
        delete wordArray[i]
      }
    }
  }
  return wordArray.join('')
}

runTests();
