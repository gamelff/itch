function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  let bk = getCookie("block");
  if (bk !== "go" && bk !== "1") {
    var j = prompt("Pass?");
    if (j !== "]") {
      setCookie("block", "1", 30);
    } else {
      setCookie("block", "go", 30);
    }
    block();
  }
}
function block() {
  let b = getCookie("block");
  if (b === "1") {
    alert("So sorry but you cant see dis.");
    window.location.assign("https://google.com");
  }
}
checkCookie();
block();
