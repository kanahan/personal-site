function setCookie(cname, cvalue, exdays) {
  var date = new Date();
  date.setTime(date.getTime() + exdays * 24 * 60 * 60 * 1000);
  var expires = 'expires=' + date.toUTCString();
  document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
}

function getCookie(cname) {
  var name = cname + '=';
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return '';
}

!(function (d) {
  // cookie
  if (getCookie('night').toLowerCase() === 'true') {
    setCookie('night', 'false', 1);
  } else {
    setCookie('night', 'true', 1);
    // set to display daytime
    d.querySelector('body').className = 'day';
    d.querySelector('.insta-link').style.display = 'none';
    d.querySelector('#title').innerHTML =
      'Devel<div class="div_bounce">o</div>per';
  }

  console.log(`
     _________
    / ======= \\
   / __________\\
  | ___________ |
  | | -       | |  looking for front-end developer?
  | |         | |  https://dev.karson.tk
  | |_________| |________________________
  \\=____________/                        )
  / """"""""""" \\                       /
 / ::::::::::::: \\                  =D-'
(_________________)
  `);

  //hide 000webhost div
  // d.addEventListener('DOMContentLoaded', event => {
  // 	const allDiv = d.querySelectorAll('div');
  // 	if (allDiv != null) allDiv[allDiv.length - 1].style.display = 'none';
  // });
})(document);
