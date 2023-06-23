function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    var element = document.getElementById("main-sec");
    element.classList.add("dark-mode");
    element.classList.remove("light-mode");
  }
  
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    var element = document.getElementById("main-sec");
    element.classList.add("light-mode");
    element.classList.remove("dark-mode");
    
  }