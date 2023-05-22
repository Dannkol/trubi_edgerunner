export default {
  header: {
    title: "Space runners",
    nav: [
      ["Home", "#inicio"],
      ["About", "#About"],
      ["Allies", "#Aliados"],
      ["join", "#Form"],
      ["vocabtest", "/vocabtest.html"]
    ],
    banner: [
      {
        title: "Space edgerunners",
        subtitle: "Una tribu sin fronteras",
        image: "./img/banner.png",
      },
    ],
  },
  main: {
    alinzas: [
      {
        title: "Formadera Soluciones (Empresa)",
        subtitle: "Carpinteria y muebleria",
        image: "./img/file.jpeg",
      },
      {
        title: "Tribu de galviz",
        subtitle: "Tribu Alida numero 1",
        image: "https://i.ibb.co/5Y35sJ3/space-runners.png",
      },
    ],

    content_About: {
      title: "¿Qué es la tribu edgerunners?",

      text: [
        {
          text: `
                    En vista de los acontecimeintos en campus se decide crear la tribu space edgerunner 
                    una tribu que buscara la excelencia, el ser, la comunidad y aprendera ingles con fabio.
                `,
        },
        {
          text: `
            Nuestro lema "Una trubi sin fronteras" significa en ir un paso más que los demas y no solo limitarnos a nosotros
            con nuestra habilidades podemos trascender y ni el espacio sera una frontera.
        `,
        },
        {
          text: `
            Los roles nos indispensables en todo momento y todos somos buenos para algo, en Space edgerunners lo sabemos por
            por esa razon el papele que desempeñaras sera el ideal para ti y sera una parte esencial de nuestra tribu.
        `,
        },
        {
          text: `
            Si no quieres ser parte de edgerunners puedes unirte a nuestra comunidades, estar presente en nuestras clases presencial y virtuales
            más que crear rivalidad creemos en Campus y todos los campers, nuestra gran comunidad es campus.
        `,
        },
      ],
      text_importante(e) {
        return `
                    Los lideres y space edgerunner se comprometen a crear alianzas con otras tribus y empresas fuera de campus, para llevar a sus miembros a otro nivel
                    actualmente contamos con ${e} alizas
                `;
      },
    },
  },
};
