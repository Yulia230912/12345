var p = document.createElement('p')
p.innerHTML = "МОЙ ПРОЭКТ"
document.body.appendChild(p)
function doSelected (event){
  switch(event.target.value){
    case "confirm":
      var z = confirm ("Подтвердите, что Юлечка - умничка")
      var a = z?"Юлечка - умничка" : "Не правильный выбор";
      document.body.innerHTML += a + "<br/>"
      break;
    case "pictures":
      var btn = document.createElement ('button')
      document.body.appendChild (btn)
      btn.innerHTML = "Времена года"
      btn.onclick = function (e){
        var pictures
        var request = new XMLHttpRequest()
        request.onreadystatechange = function (event){
            if (this.readyState === 4)
                if (this.status === 200){
                  pictures = JSON.parse(this.responseText)
                  pictures.forEach(function (x) {
                    var picture = document.createElement ('img')
                    picture.src = x.ref
                    document.body.appendChild (picture)
                    picture.title = x.title
                    picture.width = "300"
                  })
                }
        }
        request.open("GET", "lables.json")
        request.send()
      }
      break;
    case "animation":
    function animation (){
      var delay = 40,
          i = 0
      var startTimer = function(pixels) {
        var elem = document.getElementById("circle"),
            bottom = elem.offsetTop;
        if ((pixels>0 && bottom > 250) || (pixels <0 && bottom < 50)){
         clearInterval(timer)
         timer = setInterval(function (){
        startTimer(pixels * -1)
      }, delay);
        }
        elem.style.top = bottom + pixels + 'px'
        i++;
      };
      var timer = setInterval(function (){
        startTimer(20)
      }, delay);
      }
      animation ()
      break;
  }
}
var s = document.createElement ('p')
p.innerHTML = "Кликни на солнышко"
document.body.appendChild (s)
var sun = document.createElement ('img')
document.body.appendChild (sun)
sun.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO8VPsoy8d-O_GGnT_HsgEJrWr8OFlrpDUM9Z1SZKpwm0AX7zx"
sun.style = `
   position: relative;
   cursor: pointer;
`
var timer = setInterval(function() {
  var timePassed = Date.now() - start;
  if (timePassed >= 2000) {
    clearInterval(timer);
    return;
  }
  draw(timePassed);
}, 20);
function draw(timePassed) {
  sun.style.left = timePassed / 5 + 'px';
}
sun.onclick = function() {
      var start = Date.now();
      var timer = setInterval(function() {
        var timePassed = Date.now() - start;
        sun.style.left = timePassed / 5 + 'px';
        if (timePassed > 2000) clearInterval(timer);
      }, 20);
    }
