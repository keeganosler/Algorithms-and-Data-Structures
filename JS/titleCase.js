function titleCase(str) {
  var smStr = str.toLowerCase().split(' ')
  for(var i=0; i<smStr.length; i++) { 
    if(smStr.length[i] < smStr.length) {
      smStr[i].charAt(0).toUpperCase()
    }
    str = smStr.join(' ')
  }
  return str;
}

console.log(titleCase("I'm a little tea pot"))
