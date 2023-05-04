

const camiones = [
  new Camion("Volvo", "FH16", 2000, "RG-17", "Juan Perez"),
  new Camion("Scania", "GA01", 2007, "EJ-02", "Pedro Laguna"),
  new Camion("Nissan", "NF78", 2018, "FN-45", "Jorge Lopez"),
];

const HojasRutas = [
  new HojaRuta(
    "Juan Perez",
    "FH16",
    "fragil",
    "Santiago",
    "Talca",
    "Luis Rodriguez",
    "21/05/2020"
  ),
];

function CargarApp() {
  cargarCamiones();
  cargarRutas();
}

function cargarCamiones() {
  let camionesHtml = "";
  for (let camion of camiones) {
    camionesHtml += crearCamionHtml(camion);
  }
  document.getElementById("lista-camiones").innerHTML = camionesHtml;
}

function crearCamionHtml(camion) {
  let listaCamion = `

    <div class="contenedor-camion">
       <span>
       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-truck" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <circle cx="7" cy="17" r="2" />
       <circle cx="17" cy="17" r="2" />
       <path d="M5 17h-2v-11a1 1 0 0 1 1 -1h9v12m-4 0h6m4 0h2v-6h-8m0 -5h5l3 5" />
       </span>
       <p> Marca: ${camion._marca}</p>
        <p> Modelo: ${camion._modelo}</p>
         <p> Año: ${camion._ano}</p>
          <p> Placa: ${camion._placa}</p>
           <p> Conductor: ${camion._conductor}</p>
           <button class="boton" onclick="hojaRuta(${camion._id})">Elegir Trasnporte</button>
    </div>

    `;
  return listaCamion;
}

function cargarRutas() {
  let rutasHtml = "";
  for (let ruta of HojasRutas) {
    rutasHtml += crearRutaHtml(ruta);
  }
  document.getElementById("lista-rutas").innerHTML = rutasHtml;
}

function crearRutaHtml(ruta) {
  let listaRutas = `

    <div class="contenedor-rutas">
       <span>
       <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-report" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
       <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
       <path d="M8 5h-2a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h5.697" />
       <path d="M18 14v4h4" />
       <path d="M18 11v-4a2 2 0 0 0 -2 -2h-2" />
       <rect x="8" y="3" width="6" height="4" rx="2" />
       <circle cx="18" cy="18" r="4" />
       <path d="M8 11h4" />
       <path d="M8 15h3" />
       </svg>
       </span>
        <p>Fecha: ${ruta._fecha}</p>
        <p>Cliente: ${ruta._cliente}</p>
        <label class="boton btn-label" for="doc" id="doclabel">Rellenar word</label>
          <input type="file" class="file-rutas" id="doc""/>
          <button type="submit" class="boton-guardar" onclick="crearWord(${ruta._id})">Guardar Ruta</button>
    </div>

    `;
  return listaRutas;
}

function hojaRuta(id) {
  lista.style.display = "none";
  let indiceCamion = camiones.findIndex((camion) => camion.id === id);
  let camion = camiones[indiceCamion];
  rellenarRuta(camion);
}

function rellenarRuta(camion) {
  ruta.style.display = "block";
  const formaRuta = document.forms["formularioRuta"];
  const camionero = formaRuta["camionero"];
  const placa = formaRuta["placa"];
  //relleno
  camionero.value = camion._conductor;
  placa.value = camion._placa;
}

function crearRuta() {
  const formaRuta = document.forms["formularioRuta"];
  const camionero = formaRuta["camionero"];
  const placa = formaRuta["placa"];
  const carga = formaRuta["tipo"];
  const origen = formaRuta["ciudadO"];
  const destino = formaRuta["ciudadD"];
  const cliente = formaRuta["nombreC"];
  const fecha = formaRuta["fecha"];
  if (
    camionero.value !== "" &&
    placa.value !== "" &&
    carga.value !== "" &&
    origen.value !== "" &&
    destino.value !== "" &&
    cliente.value !== "" &&
    fecha.value !== ""
  ) {
    HojasRutas.push(
      new HojaRuta(
        camionero.value,
        placa.value,
        carga.value,
        origen.value,
        destino.value,
        cliente.value,
        fecha.value
      )
    );
    camionero.value = "";
    placa.value = "";
    carga.value = "";
    origen.value = "";
    destino.value = "";
    cliente.value = "";
    fecha.value = "";
    cargarRutas();
    alert("Hoja de ruta creada");
  } else {
    alert("Rellene los campos para crear la Hoja de Ruta ");
  }
}

function agregarCamion() {
  const camion = document.forms["formularioCamion"];
  const marca = camion["marca"];
  const modelo = camion["modelo"];
  const ano = camion["ano"];
  const placa = camion["placa"];
  const conductor = camion["conductor"];

  if (
    marca.value !== "" &&
    modelo.value !== "" &&
    ano.value !== "" &&
    placa.value !== "" &&
    conductor.value !== ""
  ) {
    camiones.push(
      new Camion(
        marca.value,
        modelo.value,
        +ano.value,
        placa.value,
        conductor.value
      )
    );
    marca.value = "";
    modelo.value = "";
    ano.value = "";
    placa.value = "";
    conductor.value = "";
    cargarCamiones();
    alert("Camion Agregado");
  } else {
    alert("Rellene los campos para agrear un camion");
  }
}
