let inputArray = ['p', 'e', 'r', 'f', 'e', 'c', 't', ' ', 'm','a', 'k', 'e', 's', ' ',  'p','r', 'a', 'c', 't', 'i', 'c', 'e'];

function myFunction(inputArray){
	return inputArray.join('').split(' ').reverse().join(' ').split('');
}

console.log(inputArray.join(''));
console.log(inputArray.join('').split(' '));
console.log(inputArray.join('').split(' ').reverse());
console.log(inputArray.join('').split(' ').reverse().join(' '));
console.log(inputArray.join('').split(' ').reverse().join(' ').split(''))

//.join removes commas
//.split return array with strings separated by seperator (' ')
//.reverse returns array with items reversed in order
//.join removes commas and turns into string
//.split returns array with each letter and space as singular array element

console.log(myFunction(inputArray))
