const CONFIG_BODA = {
  novios: {
    el: "Tomas Pérez Lorenzo",
    ella: "Alejandra Cervantes Morales",
    frase: "Así que ya no son dos, sino una sola carne. Por tanto, lo que Dios ha unido, que no lo separe nadie. Mateo 19:6."
  },

  estilosNombres: {
    fuente: "'Great Vibes', cursive",
    color: "#202643",
    sombra: "0 2px 10px rgba(0,0,0,0.3)",
    tamaño: "clamp(3rem, 8vw, 4.5rem)"
  },

  mensajeInvitados: {
    preTitulo: "Con el corazón lleno de felicidad",
    mensajeEmotivo: "Queremos compartir con ustedes el día más importante de nuestras vidas. Su amor, apoyo y compañía han sido fundamentales en nuestro camino. Gracias por ser parte de esta historia que hoy celebra su capítulo más hermoso.",
    fraseRevelacion: "✨ Los esperamos para brindar juntos por este amor eterno ✨"
  },

  fotoNoviosHero: "./assets/2.jpg",
  fechaEvento: "2026-08-22T14:00:00",

  calendario: {
    titulo: "¡Reserva la fecha!",
    mes: "Agosto",
    año: "2026",
    diaEspecial: 22
  },
  
  colores: {
    primario: "#202643",
    secundario: "#202643",
    acentoOcasional: "#9195A0",
    fondoContraste: "#FFFFFF"
  },
  
  ceremonia: {
    hora: "14:00 hrs",
    lugar: "Parroquia y Ex Convento San Francisco de Asís",
    direccion: "Av. Gral. Maximino Ávila Camacho 75200 Col. Centro Tepeaca, Pue.",
    mapaUrl: "https://maps.app.goo.gl/c25b1xfJ7rR4WLP1A",
    imagen: "./assets/igle.jpg"  // imagen de la iglesia
  },
  
  recepcion: {
    hora: "15:30 hrs",
    lugar: "Salón de Eventos",
    direccion: "Av. Reforma número 62 esquina calle 6 pte Candelaria Purificación Tepeaca, Puebla.",
    mapaUrl: "https://maps.app.goo.gl/BbYiMDqbVdV2NsL3A",
    imagen: "./assets/sal.jpg"  // imagen del salón
  },
  
  // ✅ NUEVA SECCIÓN DE RECOMENDACIONES
  recomendaciones: {
    titulo: "Recomendaciones",
    items: [
      " **Celular en modo vibración:** Te pedimos usar tu celular en modo vibración para no interrumpir la ceremonia.",
      " **Puntualidad:** Te invitamos a llegar a las 3:30 pm para tener tiempo de acomodación en orden antes de la ceremonia en la capilla.",
      " **Estacionamiento:** Dentro del salon hay un espacio de estacionamiento para vehículos donde puedes dejar tu carro."
    ],
    colorFondo: "#f9f7f4",      // Color de fondo 
    colorBorde: "#202643",      // Color del borde
    iconoGeneral: "-"          // Icono decorativo
  },
  
  itinerario: [
    { hora: "14:00 PM", evento: "Ceremonia", icono: "iglesia" },
    { hora: "15:30 PM", evento: "Recepción", icono: "copas" },
    { hora: "16:30 PM", evento: "Comida / Banquete", icono: "plato" },
    { hora: "18:00 PM", evento: "Vals de los Novios", icono: "baile" },
    { hora: "19:00 PM", evento: "¡A Bailar!", icono: "musica" }
  ],
  
  sugerenciaRegalos: "Tu presencia es nuestro mejor regalo. Si deseas hacernos un detalle, contaremos con una lluvia de sobres en la recepción.",
  contactoWhatsApp: "5535697179",
  
  rutasImagenes: {
    sobreCapaTrasera: "./assets/sobreabierto.png",
    sobreSolapa: "./assets/solapa.png",
    selloDorado: "./assets/sello.png",
    //fotoNoviosPortada: "./assets/1.jpg", //AUN NO SEEEEEEEEEEEEEEEEEEEEEEEEE
    fotoNoviosPortadaCinema: "./assets/1.4.jpg",
    fotoNoviosCierre: "./assets/abierto.png",
    musicaAudio: "./assets/teregalo.mp3",
    florEsquinaSuperiorIzquierda: "./assets/floriz.png",
    florEsquinaSuperiorDerecha: "./assets/flordere.png",
    imagenDebajoSello: "./assets/ovalo.png",
    fotoGaleriaPrincipal: "./assets/3.jpg",
    imagenCalendario: "./assets/bod.jpeg",   
      // ✅ NUEVAS RUTAS PARA LA SECCIÓN DE FOTOS RASGADAS
  fotoRasgadaFondo: "./assets/4.jpg",        // ← La foto principal de los novios
  bordeRasgadoSuperior: "./assets/rasgado1.png",  // ← Borde superior
  bordeRasgadoInferior: "./assets/rasgado2.png"   // ← Borde inferior
  },

  iconosItinerario: {
    iglesia: "./assets/iglesia.png",
    copas: "./assets/salon.png",
    plato: "./assets/comida.png",
    baile: "./assets/bailenovios.png",
    musica: "./assets/baile.png"
  },

// Agrega esto a tu CONFIG_BODA
confirmacionMensaje: {
  titulo: "Confirmar Asistencia",
  mensaje: "Tu presencia es muy importante para nosotros. Por favor confirma tu asistencia para poder organizar los detalles de nuestro gran día.",
  botonTexto: "Enviar confirmación",
  placeholderNombre: "Nombre y apellido",
  //confiracion si
  radioSi: " Muchas gracias por hacerme parte de su momento especial. Nos vemos alla, les deseo muchas bendiciones",
  //confiracion no
  radioNo: "Muchas gracias por hacerme parte de su momento especial. Lamento no poder asistir. Aun asi les deseo muchas bendiciones",
  agradecimiento: "Gracias por confirmar"
}




};
