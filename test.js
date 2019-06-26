
var array1 = ["a", "b", "c", "d", "e"];
var array2= ["d", "c", "b", "a", "f", "e"];
var result = [];

for(let metric in array2) {
  let index = array1.indexOf(array2[metric]);
  
  if( index == -1 || result.length == 0)
    result.push(array2[metric]);
  else{
    let r;
    for(r in result){
      let rindex = array1.indexOf(result[r]);
      if(rindex == -1 || index < rindex){
        result.splice(r, 0, array2[metric]);
        flag = 1;
        break;
      }
    }
    if(r >= result.length)
      result.push(array2[metric]);
  }
}

console.log(JSON.stringify(result));
