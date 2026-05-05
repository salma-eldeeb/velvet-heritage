
const themeToggleBtn = document.getElementById('theme-switch');
const currentTheme = localStorage.getItem('theme');
 
  if (currentTheme === 'light') {
    document.body.classList.add("light"); 
  } else{
    document.body.classList.remove("light");

  }
themeToggleBtn.onclick= function(){
  document.body.classList.toggle("light");

  if (document.body.classList.contains("light")){
    localStorage.setItem("theme","light");
  }else{
    localStorage.setItem("theme","dark");
  }
}
