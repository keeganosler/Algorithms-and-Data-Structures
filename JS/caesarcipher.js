function caesarcipher(str) {
  //split input string into an array of chars
  return str.split('')
  //iterate over each char in the array
  .map.call(str, function(char) {
    //convert each char to corresponding character code
    var x=char.charCodeAt(0);
    //check if the char in question is between A and Z, put back into string and return if not
    if(x<65 || x>90) {
      return String.fromCharCode(x);
    }
    //if the character code is less that 78, shift it forward by 13 places
    else if (x<78) {
      return String.fromCharCode(x + 13);
    }
    //if not, shift the character 13 places backwards
    return String.fromCharCode(x-13);
      //make the array into a string again to return
  }).join('');
}
