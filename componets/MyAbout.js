import db from "../db/db.js"

export default{
    showAbout(){
        document.addEventListener("DOMContentLoaded",(e)=>{
            const about = document.querySelector("#About")
            about.style.background = "yellow"
            about.insertAdjacentHTML("beforeend", `
            
                <div style="position: absolute; width: 90%; margin-top: 40px">
                    <h1 class="cyberpunk glitched">${db.main.content_About.title}</h1>
                    <div class="cont-about">
                        <ul>
                            ${
                                db.main.content_About.text.map((item) => {
                                    return `<li><p>${item.text}</p></li>`
                                }).join('')
                            }
                            
                            <li>
                            <p>
                                ${db.main.content_About.text_importante(db.main.alinzas.length)}
                            </p>
                            </li>
                        </ul>
                    </div>
                </div>

            `)
        })

        
    }
}