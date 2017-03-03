const parseNote = function(string){
  let array = string.split("*");
  let newobject ={};
  newobject["pitch"] = array[0];
  newobject["beats"] = parseInt(array[1]);

  if(array[1] == undefined){
  newobject["beats"] = 1;
  }else {
  newobject["beats"] = array [1];
  }
  return newobject;
}

const parseSong = function(string) {
 let array = string.split(" ");
 let newarray = [];
 let value;
 for (i=0; i<array.length; i++) {
   value = parseNote(array[i]);
   newarray.push(value);
 }
  return newarray;
}
const onComplete = function () {
  let songstring = window.prompt("Please enter a song");
  let notes = parseSong(songstring);
  playSong(notes, 400, onComplete);
}
onComplete();
