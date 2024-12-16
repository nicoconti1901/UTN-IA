document.addEventListener("DOMContentLoaded", () => {
  const idolosLista = document.getElementById("lista-idolos");
  const API_URL = "http://localhost:3000/api/idolos";

  //fetch de datos de la url
  fetch(API_URL)
    .then((response) => response.json())
    .then((idolos) => {
      console.log(idolos);
      idolos.forEach((idolo) => {
        const {
          nombre,
          apodo,
          posicion,
          fechaNacimiento,
          LugarNacimiento,
          nacionalidad,
          imagen,
        } = idolo;
        const card = document.createElement("div");
        card.className = "idolo-card";
        card.innerHTML = `
            <img src="${imagen}" alt="imagen de ${nombre}">
            <h2>${nombre}</h2>
            <p><strong>Apodo:</strong> ${apodo}</p>
            <p><strong>Posicion:</strong> ${posicion}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento}</p>
            <p><strong>Lugar de Nacimiento:</strong> ${LugarNacimiento}</p>
            <p><strong>Nacionalidad:</strong> ${nacionalidad}</p>
        `;
        idolosLista.appendChild(card);
      });
    })
    .catch((error) => {
      console.log("Error de fechin data;", error);
    });
});

document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".header-content-idolos h2");
  const text = header.textContent;
  header.textContent = "";

  text.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.className = "letter";
    span.style.animationDelay = `${index * 0.1}s`;
    header.appendChild(span);
  });

  setInterval(() => {
    header.textContent = "";
    text.split("").forEach((char, index) => {
      const span = document.createElement("span");
      span.textContent = char;
      span.className = "letter";
      span.style.animationDelay = `${index * 0.1}s, ${3 + index * 0.1}s`;
      header.appendChild(span);
    });
  }, (text.length * 0.1 + 3) * 1000);
});