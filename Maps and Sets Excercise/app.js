// What does the following code return?

// new Set([1,1,2,2,3,4])

{1,2,3,4};

//makes an object

// What does the following code return?

// [...new Set("referee")].join("")

'ref'

// What does the Map m look like after running the following code?

// let m = new Map();
// m.set([1,2,3], true);
// m.set([1,2,3], false);

//ANSWER!!!
// 0: {array{3} => true}
// 1: {array{3} => false}

//************************/

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

// hasDuplicate([1,3,2,1]) // true
// hasDuplicate([1,5,-1,4]) // false

function filterHashTags (tags){
    const bannedHashTags2 = new set(['nofilter', 'justsaying', 'winning', 'yolo']);
    return tags.filter ((tag) => !bannedHashTags2.has(tag));
}

// Write a function called hasDuplicate which accepts an array and returns true or false if that array contains a duplicate

function hasDuplicate (arr) {
    return new Set(arr).size !== arr.length
}

// Write a function called vowelCount which accepts a string and returns a map where the keys are numbers and the values are the count of the vowels in the string.

function vowelCount(string) {
    const vowels = ['a','e','i','o','u'];
    const vowelMap = new Map ();

    for(let char of string) {
        if(vowels.indexOf(char) > -1){
            if(vowelMap.has(char)){
                vowelMap.set(char, vowelMap.get(char) +1);
            }
            else{
                vowelMap.set(char,1);
            }
        }
    }
    return vowelMap;

}