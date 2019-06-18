function bouncer(arr) {
  var falsyArr = [false, null, 0, "", undefined, NaN]
  for(var i=0; i<falsyArr.length; i++) {
    if(arr.includes(falsyArr[i])) {
      arr.splice(arr.indexOf(falsyArr[i]), 1)
    }
  }
  return arr;
}

bouncer([7, "ate", "", false, 9]);
