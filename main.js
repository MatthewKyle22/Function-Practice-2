// #1
var myObj = {
    name: 'Matt',
    age: 23,
};
function getName(){
	
        return(myObj.name);
}
getName(myObj);

//#2
function totalLetters(array){
	var joined = array.join('').length;
	return joined;
}
console.log(totalLetters(['javascript', 'is', 'awesome']));

//#3
function keyValues (key, value) {
	this[key] = value;
}
console.log(new keyValues('city', 'Denver'));

//#4
function negativeIndex(arry, negNum){
	var positionFinder = arry.length + negNum;
    return array[positionFinder];
}
console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -3));

//#5
function removeM (string) {
    var removeMs = '';
    for (var i = 0; i < string.length; i++) {
        if (string[i] === 'm'){
            
        } else {
            removeMs += string[i];
        }
    }
    console.log(removeMs);
}
removeM('memory');

//#6
//come back to it

//#7