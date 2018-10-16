/*var fibonacci = (function() {
    var memo = {};
    function f(n) {
      var value;
  
      if (n in memo) {
        value = memo[n];
      } else {
        if (n === 0 || n === 1)
          value = n;
        else
          value = f(n - 1) + f(n - 2);
  
        memo[n] = value;
      }
  
      return value;
    }
  
    return f;
  })();

console.log(fibonacci(1000))*/

//counting Votes
const votes = (arr) => {
  //only in a tie get the first initial of the name. If the initial being the last letter alphabetically then that person wins.
  //the winner has the most names in the ballot
  //do a for loop to find the who's are the ballot. push the name into a new array
  //once the names I do another for loop to count how they in the array,

  
  let highest = '';
  let cache = 0;
  const tied = [];

  var countedNames = arr.reduce((allNames, name) => {
    if (name in allNames) {
      allNames[name]++;
    }
    else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});

  let names = Object.keys(countedNames);
  for (let i = 0; i < names.length; i++) {
    if (cache === countedNames[names[i]]) {
      tied.push(names[i])
      tied.push(highest);
    }
    if (countedNames[names[i]] > cache) {
      cache = countedNames[names[i]];
      highest = names[i];
    }
  }
  if (tied.length > 0) {
    highest = tied.sort().reverse()[0];
  }
  console.log(highest);
}

votes(['roland', 'roland', 'zerik', 'zerik', 'roland', 'zerik']);

/*
const stairs = (int) => {
  //get stairs;
  
}

console.log(stairs(3));*/

