

        function logout() {
            let msg = document.getElementById("mess");
            msg.classList.remove("hidden");
            msg.classList.add("show");

            setTimeout(function () {
                window.location.href = "../SIGN IN/sign-in.html";
            }, 2000);
        }


  const pages = [
    { name: "Home", url: "../home/index.html" },
    { name: "About", url: "../ABOUT US/about us.html" },
    { name: "fashion icon", url: "../fashionicon/fashion-icon.html" },
    { name: "fashion eras", url: "../fashionera/fashoin-era.html" },
    { name: " aura-lifestyle", url: "../aura/auralifestyle.html" },
    { name: "trends-revival", url: "../trend/trend-revival.html" },
    { name: "Contact-us", url: "../contact/contact-us.html" },
    
  ];

  const input = document.getElementById("searchInput");
  const resultsDiv = document.getElementById("results");

  input.addEventListener("input", function () {
    const query = input.value.toLowerCase();
    resultsDiv.innerHTML = "";

    const filtered = pages.filter(page =>
      page.name.toLowerCase().includes(query)
    );

    filtered.forEach(page => {
      const div = document.createElement("div");
      div.classList.add("result");
      div.textContent = page.name;

      div.onclick = () => {
        window.location.href = page.url;
      };

      resultsDiv.appendChild(div);
    });
  });




            function layout(){
                let x=document.getElementById("ul");
                x.classList.add("ul1");
                x.classList.remove("ul");
                let a = document.getElementById("layout");
                let b = document.getElementById("layout1");
                a.classList.add("mod");
                b.classList.remove("mod");
                localStorage.setItem("lay","layout1");
            }
            function layout1(){
                let x=document.getElementById("ul");
                x.classList.remove("ul1");
                x.classList.add("ul");
                let a = document.getElementById("layout");
                let b = document.getElementById("layout1");
                a.classList.remove("mod");
                b.classList.add("mod");
                localStorage.setItem("lay","layout");
            }
            window.onload=function(){
            let save=localStorage.getItem("lay");
            if (save === "layout")
            {
                layout();
            }
            else{
                layout1();
            }
        } 
