function findDist (lat1, lng1, lat2, lng2) {
  
  var earth_radius = 6371000
  var lat1_rad = toRadians(lat1)
  var lat2_rad = toRadians(lat2)
  var diff_lat = toRadians(lat2-lat1)
  var diff_lng = toRadians(lng2-lng1)
  
  var pt1 = Math.sin(diff_lat/2)*Math.sin(diff_lat/2) 
            + Math.cos(lat1_rad)*Math.cos(lat2_rad) 
            + Math.sin(diff_lng/2)*Math.sin(diff_lng/2)
    
  var pt2 = 2*Math.atan2(Math.sqrt(pt1),Math.sqrt(1-pt1))
  
  var dist = earth_radius*pt2
  
  console.log(dist)
  
}

function toRadians (deg) {
  return deg*(Math.PI/180)
}

findDist(51.53315361390426,-109.12109895678782,51.53315361377447,-109.12092421338343)
