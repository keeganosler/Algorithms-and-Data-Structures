function permAlone(str) {
  var res = 0
  var f = [1]
  for(var i=1; i<=str.length; i++) {
    f[i] = i*f[i-1]
  }
  for(var i=0; i<f[str.length]; i++) {
    var perm = ""
    var tmp = str
    var code = i
    for(var pos= str.length; pos>0; pos--) {
      var s = code / f[pos-1]
      perm = perm + tmp.charAt(s)
      code = code % f[pos-1]
      tmp = tmp.substring(0,s) + tmp.substring(s+1)
    }
    if(!perm.match(/(.)\1/g)){
      res = res + 1
    }
  }
  return res
}
