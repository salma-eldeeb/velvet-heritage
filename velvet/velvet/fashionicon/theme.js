{const button = document.getElementById("theme-switch");
 const savedTheme = localStorage.getItem("theme");
 const icon = button.querySelector("i");
 if (savedTheme === "light") {
 document.body.classList.add("light");
 if(icon)
 icon.classList.replace('fa-moon','fa-sun');
 } else {
   document.body.classList.remove("light");
   if(icon) 
   icon.classList.replace('fa-moon','fa-sun');
 }

 button.onclick = function(){
     document.body.classList.toggle("light");  
 if (document.body.classList.contains("light") ) {
     localStorage.setItem("theme", "light");
     if(icon)
 icon.classList.replace('fa-moon','fa-sun');

   } else {
     localStorage.setItem("theme", "dark");
     if(icon) 
   icon.classList.replace('fa-moon','fa-sun');
   }
 }};


