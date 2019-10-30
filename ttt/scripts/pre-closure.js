/*
Do not run this file, this is only to serve as a backup for pre-closure compiler compiled code
Any of the code in this file is prone to being outdated
https://closure-compiler.appspot.com
*/

  // index.html secret
  function onKonamiCode(cb) {
    var input = '';
    var key = '38384040373937396665';
    document.addEventListener('keydown', function (e) {
      input += ("" + e.keyCode);
      if (input === key) {
        return cb();
      }
      if (!key.indexOf(input)) return;
      input = ("" + e.keyCode);
    });
  }
  var overlay = document.getElementById('overlay');
  var close = document.getElementById("close");
  onKonamiCode(function () {overlay.style.display = "block";});
  close.onclick = function() {
      overlay.style.display = "none";
  }
  window.onclick = function(event) {
      if (event.target == overlay) {
          overlay.style.display = "none";
      }
  }



  // index.html onload
  window.onload = function () {
    if(getUrlParameter("tab")) {
      document.getElementById(getUrlParameter("tab")).click();
    } else {
      document.getElementById("home").click();
    }
  }



  // index.html opentab
  function openTab(evt, tabName) {
    var i, articles, tab;
    articles = document.getElementsByTagName("article");
    for (i = 0; i < articles.length; i++) {
      articles[i].style.display = "none";
    }
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].className = tab[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }



  // index.html geturlparameter
  function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    var regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    var results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
  };



  // image lazy load (old)
  window.addEventListener('load', function(){
    var allimages= document.getElementsByTagName('img');
    for (var i=0; i<allimages.length; i++) {
        if (allimages[i].getAttribute('data-src')) {
            allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
        }
    }
  }, false)

  

  // image lazy load 2
  window.onload = function () {
    var imgs = document.getElementsByTagName('img');
    for (var i=0; i<imgs.length; i++) {
        if (imgs[i].getAttribute('data-src')) {
          imgs[i].setAttribute('src', imgs[i].getAttribute('data-src'));
        }
    }
  }



  /* image lazy load v3 (works fine, but syntax highlighting thinks otherwise..)
  [].forEach.call(document.querySelectorAll('img[data-src]'),    function(img) {
  img.setAttribute('src', img.getAttribute('data-src'));
  img.onload = function() {
    img.removeAttribute('data-src');
  };
  });
  */


  // DownloadingFile function (outdated, only by a few characters though.)
  function DownloadingFile(a) {
    c = document.getElementById("footer");
    if (a.length < 55) {
      c.innerHTML = a;
    } else {
      c.innerHTML = a.substring(0, 50) + "..>"
    }
  }



  // SetFilesNeeded function
  function SetFilesNeeded(a){
    if (a < 2) {
      document.getElementById("footer").innerHTML="Done!";
    }
  }



  // hide
  function hide(){document.getElementById("frame").style.display="none"};