function myFunction() {
    var dots = document.getElementById("buttonplaceholder");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      buttonplaceholder.style.display = "inline";
      btnText.innerHTML = "read more...";
      moreText.style.display = "none";
    } else {
      buttonplaceholder.style.display = "none";
      btnText.innerHTML = "read less...";
      moreText.style.display = "inline";
    }
  } 