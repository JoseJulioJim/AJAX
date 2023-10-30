async function obtenerDatosLocales() {
  let response = await fetch("./data.json");
  console.log(response);
  let data = await response.json();
  console.log(data);


  let $subject = document.querySelector("#info-shida");
  let Materias = "";

  data.Materias.forEach(function (el) {
    Materias += `
      <div class="col-12 col-sm-6 col-md-4 col-lg-3">
        <div class="card" style="width: 18rem;">          
          <div class="card-body">
            <h5 class="card-title">${el.Materia}</h5>
            <p class="card-text">${el.Docente}</p>
            <p class="card-text">${el.descripcion}</p>
          </div>
        </div>
      </div>
    `;
  });

  $subject.innerHTML = Materias;
}

obtenerDatosLocales();