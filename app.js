var i = 0;
function move(){
    if(i == 0) {
        i = 1;
    var elem = document.getElementById("loaad");
    var width = 10;
    var id = setInterval(frame, 48);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.innerHTML = width  + "%";
      }
    }
    }
}
