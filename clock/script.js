// funtion calls when div clock is onload

  function currentTime() {
    
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    let session = ' AM ';

    if(hh == 0) {
      hh = 12;
    }
    if(hh > 12) {
      hh = hh-12;
      session = ' PM ';
    }

    hh = (hh < 10) ? '0' + hh : hh;

    mm = (mm < 10) ? '0' + mm : mm;

    ss = (ss < 10) ? '0' + ss : ss;

    let time = hh + ' : ' + mm + ' : ' + ss + session;

    document.getElementById('clock').innerText = time;
    
    let t = setTimeout(function(){
      currentTime()
    }, 1000);
    
  }

  currentTime();



  var i = 2;

  document.getElementById('add-new').onclick = function() {
    i++;
    var list = document.getElementById('list');
    var newEl = document.createElement('div');
    newEl.setAttribute("id", "item" + i + "");
    newEl.innerHTML = 'Item ' + i;
    newEl.setAttribute("onclick", "remove(this)");
    list.appendChild(newEl);
  }
  
  function remove(el) {
    var element = el;
    element.remove();
  }