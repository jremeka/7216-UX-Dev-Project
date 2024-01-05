let val = document.getElementsByClassName("accordion");
let but1s = document.getElementsByClassName("but1");
let but2s = document.getElementsByClassName("but2");
let tests = document.getElementsByClassName("test");
let show = false;

for (i = 0; i < val.length; i++) {
  (function (index) {
    val[index].onclick = function () {
      // These things happen to an already open accordion after it is clicked
      if (show === true) {
        this.classList.toggle("feature-add");
        but1s[index].style.display = "block";
        but2s[index].style.display = "none";
        tests[index].style.display = "none";
        show = !show;
      }
      // these things happen to a currently closed accordion after clicked
      else {
        this.classList.toggle("feature-add");
        but1s[index].style.display = "none";
        but2s[index].style.display = "block";
        tests[index].style.display = "block";
        show = !show;
      }    
    };
  })(i);
}
