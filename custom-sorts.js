function ageSort(users) {
  // Your code here
  users.sort(function compareFn(a,b){
    return a.age - b.age
  })
  return users
}

function oddEvenSort(arr) {
  // Your code here
  arr.sort(function compareFn(a,b){
    if(a % 2 === 0 && b % 2=== 1 ){
      return 1
    }
    if(a % 2 === 1 && b % 2 === 0 ){
      return -1
    }
    return a - b
  })
  return arr
}

function validAnagrams(s, t) {
  // Your code here
  // first convert to array
  let anagram1 = s.split('')
  let anagram2 = t.split('')

  anagram1.sort()
  anagram2.sort()
  return (anagram1.join('') ==  anagram2.join(''))
}

function reverseBaseSort(arr) {
  // Your code here
  arr.sort((a, b) => {
    strA = a.toString();
    strB = b.toString();

    if (strA.length === strB.length) {
      return a - b;
    } else {
      return strB.length - strA.length;
    }
  });

  return arr;
}

function frequencySort(arr) {
  // Your code here
  let frequency = (num) =>  arr.filter(el => el === num).length ;

  arr.sort(function compareFn(a, b) {
    let freqA = frequency(a);
    let freqB = frequency(b);

    if (freqA !== freqB) {
      return freqA - freqB;
    } else {
      return b - a;
    }
  });

  return arr;

}

module.exports = [
  oddEvenSort,
  validAnagrams,
  reverseBaseSort,
  frequencySort,
  ageSort,
];
