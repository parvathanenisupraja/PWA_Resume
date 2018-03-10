
function functionName() {
  window.open("resume.html","_self",true);
}

function loadjson(file,callback) {
  var rawfile=   new XMLHttpRequest();
rawfile.overridemimeType("application/json");
rawfile.open("GET",file,true)
rawfile.onreadystatechange=function(){
if (readystate===4 && rawfile.status=="200") {
  callback(rawfile.responseText);
       }
   }
rawfile.send();
}

loadjson("resources/resume.json" function (text){
  var data =JSON.parse(text) ;
console.log(data);  
});
