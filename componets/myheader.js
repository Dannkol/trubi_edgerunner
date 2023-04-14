import db from "../db/db.js";

export default {
  showHeader() {
    document.addEventListener("DOMContentLoaded", (e) => {
      const nav = document.querySelector("nav");
      const banner = document.querySelector("#inicio")
      nav.insertAdjacentHTML(
        "beforeend",
        `
                <div class="container">
                    <div class="logo">
                        <a href="#" class="glitch">
                            <span aria-hidden="true">${db.header.title}</span>
                            ${db.header.title}
                            <span aria-hidden="true">${
                              db.header.title
                            }</span></a
                        >
                    </div>
                    <div id="mainListDiv" class="main_list">
                        <ul class="navlinks">
                            ${db.header.nav.map((item, index) => {
                              return `<li><a href="${item[1]}">${item[0]}</a></li>`;
                            })}
                        </ul>
                    </div>
                    <span class="navTrigger">
                    <i></i>
                    <i></i>
                    <i></i>
                    </span>
              </div>
                `
      );
      
      const navTrigger = document.querySelector(".navTrigger");
      const mainListDiv = document.querySelector("#mainListDiv");
      navTrigger.addEventListener("click", function () {
        navTrigger.classList.toggle("active");
        mainListDiv.classList.toggle("show_list");
        mainListDiv.style.display = "block";
      });
      console.log(db.header.banner[0].image)
      banner.style.backgroundImage = `url(${db.header.banner[0].image})` 
      banner.insertAdjacentHTML("beforeend", `
      
        <div class="content">
          <h1>${db.header.banner[0].title}</h1>
          <p>${db.header.banner[0].subtitle}</p>
        </div>

      `)
    });

  },
};
