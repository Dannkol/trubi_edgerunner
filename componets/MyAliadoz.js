import db from "../db/db.js";

export default {
    showAliados(){
        const alianzas = document.querySelector("#Aliados");
        alianzas.style.backgroundColor = "yellow";
        alianzas.insertAdjacentHTML("beforeend",
             `
                <div style="position: absolute; width: 90%; margin-top: 84px">
                    <h1 class="cyberpunk glitched">Aliados</h1>
                    <div class="cont-about">
                    ${db.main.alinzas.map((items) => {
                        return `
                        <div class="card">
                            <div class="card_body">
                                <img class="cyberpunk" width="200" height="120" src="${items.image}" alt="formadera soluciones" />
                                <h3>${items.title}</h3>
                                <p>${items.subtitle}</p>
                            </div>
                        </div>
                        `     
                    }).join("")}
                    </div>
                </div>
            
            `
        )
    }
}