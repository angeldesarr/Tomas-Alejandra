//* ============================================================ 
// EXPERIENCIA CINEMATOGRÁFICA (VERSIÓN CORREGIDA)
// =========================================== */
(function() {
  console.log("🚀 App iniciando...");
  
  // ---------- 1. CONFIGURACIÓN ----------
  let CONFIG = window.CONFIG_BODA;
  
  if (!CONFIG && typeof CONFIG_BODA !== 'undefined') {
    CONFIG = CONFIG_BODA;
    console.log("📦 CONFIG encontrada como variable global directa");
  }
  
  if (!CONFIG) {
    console.error("❌ CONFIG_BODA no encontrada. Verifica que config.js se cargue primero.");
    return;
  }
  
  console.log("✅ Config cargada exitosamente:", CONFIG.novios.el);

  // Elementos dinámicos
  const setText = (id, text) => { 
    const el = document.getElementById(id); 
    if(el) el.innerText = text; 
    else console.warn(`⚠️ Elemento no encontrado: ${id}`);
  };
  
  const setHtml = (id, html) => { 
    const el = document.getElementById(id); 
    if(el) el.innerHTML = html; 
    else console.warn(`⚠️ Elemento no encontrado: ${id}`);
  };

  // Nombres y texto
  const nombresHero = `${CONFIG.novios.el.split(" ")[0]} & ${CONFIG.novios.ella.split(" ")[0]}`;
  setText("introCinemaNames", nombresHero);
  setHtml("heroNamesCinema", `${CONFIG.novios.el.split(" ")[0]} <span style="font-weight:300;">&</span> ${CONFIG.novios.ella.split(" ")[0]}`);
  setText("heroVerseCinema", CONFIG.novios.frase);
  setText("giftMessageText", CONFIG.sugerenciaRegalos);
  setText("heroMensajePreTitulo", CONFIG.mensajeInvitados.preTitulo);
  setText("heroMensajeEmotivo", CONFIG.mensajeInvitados.mensajeEmotivo);
  setText("heroFraseRevelacion", CONFIG.mensajeInvitados.fraseRevelacion);

  const nombresNoviosTexto = `${CONFIG.novios.el.split(" ")[0]} & ${CONFIG.novios.ella.split(" ")[0]}`;
  const heroNombresNovios = document.getElementById("heroNombresNovios");

  if (heroNombresNovios) {
    heroNombresNovios.innerText = nombresNoviosTexto;
    if (CONFIG.estilosNombres) {
      heroNombresNovios.style.fontFamily = CONFIG.estilosNombres.fuente;
      heroNombresNovios.style.color = CONFIG.estilosNombres.color;
      heroNombresNovios.style.textShadow = CONFIG.estilosNombres.sombra;
      heroNombresNovios.style.fontSize = CONFIG.estilosNombres.tamaño;
    }
  }

  // imagenes
  const setImg = (id, src) => { 
    const img = document.getElementById(id); 
    if(img && src) img.src = src; 
    else console.warn(`⚠️ Imagen no encontrada: ${id}`);
  };
  
  setImg("imagenPersonalizada", CONFIG.rutasImagenes.imagenDebajoSello);
  setImg("sobreBackImg", CONFIG.rutasImagenes.sobreCapaTrasera);
  setImg("sobreFlapImg", CONFIG.rutasImagenes.sobreSolapa);
  setImg("selloDoradoImg", CONFIG.rutasImagenes.selloDorado);
  setImg("fotoNoviosPortadaCinema", CONFIG.rutasImagenes.fotoNoviosPortadaCinema);
  setImg("fotoGaleriaCinema", CONFIG.rutasImagenes.fotoGaleriaPrincipal);
  setImg("fotoCierreCinema", CONFIG.rutasImagenes.fotoNoviosCierre);
  setImg("florTopLeft", CONFIG.rutasImagenes.floresDecorativas);
  setImg("florBottomRight", CONFIG.rutasImagenes.floresDecorativas);
  setImg("florEsquinaSI", CONFIG.rutasImagenes.florEsquinaSuperiorIzquierda);
  setImg("florEsquinaSD", CONFIG.rutasImagenes.florEsquinaSuperiorDerecha);
  setImg("heroFotoNovios", CONFIG.fotoNoviosHero);

  // ============================================================
  // IMÁGENES DE LA SECCIÓN DE FOTOS RASGADAS (gifts)
  // ============================================================
  
  // Foto de fondo (la de los novios)
  const giftBackgroundImg = document.getElementById("giftBackgroundImg");
  if (giftBackgroundImg && CONFIG.rutasImagenes.fotoRasgadaFondo) {
    giftBackgroundImg.src = CONFIG.rutasImagenes.fotoRasgadaFondo;
    console.log("✅ Foto rasgada de fondo cargada:", CONFIG.rutasImagenes.fotoRasgadaFondo);
  }

  // Borde superior rasgado
  const giftTearTopImg = document.getElementById("giftTearTopImg");
  if (giftTearTopImg && CONFIG.rutasImagenes.bordeRasgadoSuperior) {
    giftTearTopImg.src = CONFIG.rutasImagenes.bordeRasgadoSuperior;
    console.log("✅ Borde rasgado superior cargado:", CONFIG.rutasImagenes.bordeRasgadoSuperior);
  }

  // Borde inferior rasgado
  const giftTearBottomImg = document.getElementById("giftTearBottomImg");
  if (giftTearBottomImg && CONFIG.rutasImagenes.bordeRasgadoInferior) {
    giftTearBottomImg.src = CONFIG.rutasImagenes.bordeRasgadoInferior;
    console.log("✅ Borde rasgado inferior cargado:", CONFIG.rutasImagenes.bordeRasgadoInferior);
  }

  // Ubicaciones
  setText("ceremoniaHour", CONFIG.ceremonia.hora);
  setText("ceremoniaName", CONFIG.ceremonia.lugar);
  setText("ceremoniaAddress", CONFIG.ceremonia.direccion);
  const ceremoniaLink = document.getElementById("ceremoniaMapLink");
  if(ceremoniaLink) ceremoniaLink.href = CONFIG.ceremonia.mapaUrl;

  setText("recepcionHour", CONFIG.recepcion.hora);
  setText("recepcionName", CONFIG.recepcion.lugar);
  setText("recepcionAddress", CONFIG.recepcion.direccion);
  const recepcionLink = document.getElementById("recepcionMapLink");
  if(recepcionLink) recepcionLink.href = CONFIG.recepcion.mapaUrl;

  // ============================================================
  // ITINERARIO DINÁMICO CON ICONOS PERSONALIZADOS
  // ============================================================

  const timelineContainer = document.getElementById("timelineCinema");

  if (timelineContainer && CONFIG.itinerario) {
    timelineContainer.innerHTML = "";
    CONFIG.itinerario.forEach(item => {
      const iconSrc = CONFIG.iconosItinerario[item.icono];
      const div = document.createElement("div");
      div.className = "timeline-item";
      div.innerHTML = `
        <div class="timeline-icon">
          <img src="${iconSrc}" alt="${item.evento}">
        </div>
        <div>
          <strong>${item.evento}</strong>
          <br>
          ${item.hora}
        </div>
      `;
      timelineContainer.appendChild(div);
    });
    console.log("✅ itinerario generado");
  } else {
    console.warn("⚠️ timelineContainer no encontrado");
  }

  // ============================================================
  // RECOMENDACIONES DINÁMICAS
  // ============================================================
  
  function cargarRecomendaciones() {
    const recomendacionesContainer = document.getElementById('recomendacionesLista');
    if (!recomendacionesContainer) return;
    
    recomendacionesContainer.innerHTML = '';
    
    if (CONFIG.recomendaciones && CONFIG.recomendaciones.items) {
      const container = document.querySelector('.recomendaciones-container');
      if (container) {
        container.style.setProperty('--recomendaciones-fondo', CONFIG.recomendaciones.colorFondo || '#f9f7f4');
        container.style.setProperty('--recomendaciones-borde', CONFIG.recomendaciones.colorBorde || CONFIG.colores.primario);
      }
      
      const tituloElement = document.querySelector('.recomendaciones-titulo');
      if (tituloElement && CONFIG.recomendaciones.titulo) {
        tituloElement.innerHTML = `<span>${CONFIG.recomendaciones.iconoGeneral || '📋'}</span> ${CONFIG.recomendaciones.titulo} <span>${CONFIG.recomendaciones.iconoGeneral || '💒'}</span>`;
      }
      
      CONFIG.recomendaciones.items.forEach(item => {
        const div = document.createElement('div');
        div.className = 'recomendacion-item';
        let textoFormateado = item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
        div.innerHTML = textoFormateado;
        recomendacionesContainer.appendChild(div);
      });
    } else {
      recomendacionesContainer.innerHTML = '<div class="recomendacion-item">Próximamente más detalles...</div>';
    }
  }

  // ============================================================
  // IMÁGENES DE UBICACIONES
  // ============================================================
  
  function cargarImagenesUbicaciones() {
    const imgIglesia = document.getElementById('ceremoniaImagen');
    const imgSalon = document.getElementById('recepcionImagen');
    
    if (imgIglesia && CONFIG.ceremonia.imagen) {
      imgIglesia.src = CONFIG.ceremonia.imagen;
    }
    if (imgSalon && CONFIG.recepcion.imagen) {
      imgSalon.src = CONFIG.recepcion.imagen;
    }
  }

  // ============================================================
  // FORMULARIO DE CONFIRMACIÓN
  // ============================================================
  
  function inicializarFormulario() {
    const form = document.getElementById('formConfirmacion');
    const nombreInput = document.getElementById('nombreInvitado');
    const errorMsg = document.getElementById('errorMsg');
    const papelMensaje = document.getElementById('papelMensaje');
    
    if (CONFIG.confirmacionMensaje) {
      papelMensaje.textContent = CONFIG.confirmacionMensaje.mensaje;
    } else {
      papelMensaje.textContent = "Tu presencia es muy importante para nosotros. Por favor confirma tu asistencia.";
    }
    
    if (form) {
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = nombreInput.value.trim();
        const asistencia = document.querySelector('input[name="asistencia"]:checked');
        
        if (!nombre || !asistencia) {
          errorMsg.style.display = 'block';
          setTimeout(() => { errorMsg.style.display = 'none'; }, 3000);
          return;
        }
        
        errorMsg.style.display = 'none';
        const mensajeAgradecimiento = CONFIG.confirmacionMensaje?.agradecimiento;
        alert(`${mensajeAgradecimiento} ${nombre}!`);
        
        const mensajeWhatsApp = construirMensajeWhatsApp(nombre, asistencia.value);
        const numeroWhatsApp = CONFIG.contactoWhatsApp;
        const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensajeWhatsApp)}`;
        window.open(urlWhatsApp, '_blank');
        form.reset();
      });
    }
  }
  
  function construirMensajeWhatsApp(nombre, asistencia) {
    const novio = CONFIG.novios.el.split(' ')[0];
    const novia = CONFIG.novios.ella.split(' ')[0];
    let mensaje = `- ${novio} & ${novia} -\n`;
    mensaje += `Hola, soy ${nombre}\n`;
    if (asistencia === 'si') {
      mensaje += `${CONFIG.confirmacionMensaje.radioSi}`;
    } else {
      mensaje += `${CONFIG.confirmacionMensaje.radioNo}`;
    }
    mensaje += `\n---------------------------------------\n\nConfirmación enviada desde la invitación digital.`;
    return mensaje;
  }

  // WhatsApp
  const whatsBtn = document.getElementById("confirmWhatsappBtn");
  if(whatsBtn) {
    const msg = encodeURIComponent("¡Hola! Confirmo mi asistencia a la boda de Tomas y Alejandra");
    whatsBtn.href = `https://wa.me/${CONFIG.contactoWhatsApp}?text=${msg}`;
    console.log("✅ WhatsApp configurado");
  }

  // ---------- 2. MÚSICA ----------
  const audio = document.getElementById("weddingAudioCinema");
  const musicOrb = document.getElementById("musicOrbBtn");
  const musicIconSpan = document.getElementById("musicIconInner");
  const musicMainBtn = document.getElementById("cinemaMusicMainBtn");
  
  if(audio) {
    audio.src = CONFIG.rutasImagenes.musicaAudio;
    console.log("✅ Audio configurado");
  } else {
    console.warn("⚠️ Elemento audio no encontrado");
  }

  let isMusicPlaying = false;
  const toggleMusic = () => {
    if(!audio) return;
    if(isMusicPlaying) {
      audio.pause();
      if(musicIconSpan) musicIconSpan.innerText = "▶";
      if(musicMainBtn) musicMainBtn.innerHTML = "⟳ Escuchar";
    } else {
      audio.play().catch(e => console.log("autoplay bloqueado:", e));
      if(musicIconSpan) musicIconSpan.innerText = "❚❚";
      if(musicMainBtn) musicMainBtn.innerHTML = "❚❚ Pausar";
    }
    isMusicPlaying = !isMusicPlaying;
  };
  
  if(musicOrb) musicOrb.addEventListener("click", toggleMusic);
  if(musicMainBtn) musicMainBtn.addEventListener("click", toggleMusic);

  // ---------- 3. APERTURA DEL SOBRE CON SCROLL BLOQUEADO AL INICIO ----------
  const envelopeScene = document.querySelector(".envelope-scene");
  const openBtn = document.getElementById("openCinemaBtn");
  const sceneEnvelope = document.getElementById("sceneEnvelope");

  localStorage.removeItem('sobreAbierto');
  
  function resetEnvelope() {
    if (envelopeScene) envelopeScene.classList.remove("open-flap");
    if (sceneEnvelope) sceneEnvelope.classList.remove("open");
  }
  
  resetEnvelope();
  
  document.body.style.overflow = "hidden";
  document.body.classList.add('no-scroll');
  window.scrollTo(0, 0);
  
  const mainScenes = document.getElementById("cinemaScenes");
  if (mainScenes) {
    mainScenes.style.overflowY = "hidden";
    mainScenes.style.height = "100vh";
  }

  function activateCurrentScenes() {
    const scenes = document.querySelectorAll(".scene");
    scenes.forEach(scene => {
      const rect = scene.getBoundingClientRect();
      if(rect.top < window.innerHeight - 100) {
        scene.classList.add("revealed-scene");
        const staggers = scene.querySelectorAll(".reveal-stagger");
        staggers.forEach(s => s.classList.add("active"));
      }
    });
  }

  if(openBtn && envelopeScene) {
    console.log("✅ Configurando evento de apertura del sobre");
    const newOpenBtn = openBtn.cloneNode(true);
    openBtn.parentNode.replaceChild(newOpenBtn, openBtn);
    const finalOpenBtn = document.getElementById("openCinemaBtn");
    
    finalOpenBtn.addEventListener("click", () => {
      console.log("🎯 Botón de abrir CLICKEADO!");
      envelopeScene.classList.add("open-flap");
      if(sceneEnvelope) sceneEnvelope.classList.add("open");
      
      setTimeout(() => {
        if(audio && !isMusicPlaying) {
          audio.play().then(() => {
            isMusicPlaying = true;
            if(musicIconSpan) musicIconSpan.innerText = "❚❚";
            if(musicMainBtn) musicMainBtn.innerHTML = "❚❚ Pausar";
            console.log("🎵 Música iniciada");
          }).catch(e => console.log("Error en autoplay:", e));
        }
      }, 600);
      
      setTimeout(() => {
        document.body.style.overflow = "auto";
        document.body.classList.remove('no-scroll');
        if (mainScenes) {
          mainScenes.style.overflowY = "auto";
          mainScenes.style.height = "auto";
        }
        activateCurrentScenes();
        console.log("🎬 Scroll habilitado, animaciones de secciones activadas");
      }, 1500);
    });
  } else {
    console.error("❌ No se pudo configurar el botón de apertura.");
  }

  // ============================================================
  // CALENDARIO DINÁMICO
  // ============================================================

  function generarCalendario() {
    const calendario = CONFIG.calendario;
    const container = document.getElementById("calendarContainer");
    if (!container) return;
    const fecha = new Date(CONFIG.fechaEvento);
    const año = fecha.getFullYear();
    const mes = fecha.getMonth();
    const primerDia = new Date(año, mes, 1).getDay();
    const diasMes = new Date(año, mes + 1, 0).getDate();
    const diasSemana = ["L","M","M","J","V","S","D"];
    let offset = primerDia === 0 ? 6 : primerDia - 1;
    let html = `<h2 class="calendar-title">${calendario.titulo}</h2>
      <div class="calendar-header">
        <span>${calendario.mes}</span>
        <div class="divider"></div>
        <span>${calendario.año}</span>
      </div>
      <div class="calendar-grid weekdays">`;
    diasSemana.forEach(d => { html += `<span>${d}</span>`; });
    html += `</div><div class="calendar-grid days">`;
    for(let i=0;i<offset;i++){ html += `<span></span>`; }
    for(let d=1; d<=diasMes; d++){
      if(d === calendario.diaEspecial){
        html += `<span class="special-day">${d}</span>`;
      } else {
        html += `<span>${d}</span>`;
      }
    }
    html += `</div>`;
    container.innerHTML = html;
  }
  generarCalendario();

  // ---------- SCROLL REVEAL PREMIUM ----------
  const revealElements = document.querySelectorAll(".reveal-stagger");
  const scenes = document.querySelectorAll(".scene");
  
  const observerStagger = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) entry.target.classList.add("active");
    });
  }, { threshold: 0.2, rootMargin: "0px 0px -50px 0px" });
  
  revealElements.forEach(el => observerStagger.observe(el));
  
  const sceneObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        entry.target.classList.add("revealed-scene");
        const staggers = entry.target.querySelectorAll(".reveal-stagger");
        staggers.forEach(s => s.classList.add("active"));
      }
    });
  }, { threshold: 0.3 });
  
  scenes.forEach(scene => sceneObserver.observe(scene));
  
  console.log("🏁 App inicializada correctamente - Scroll bloqueado hasta abrir el sobre");

  window.addEventListener('load', function() {
    window.scrollTo(0, 0);
    if (document.body.classList.contains('no-scroll')) {
      document.body.style.overflow = "hidden";
    }
  });

  // ===== GOOGLE CALENDAR =====
  function initGoogleCalendar() {
    setTimeout(() => {
      const calendarBtn = document.getElementById('googleCalendarBtn');
      if (!calendarBtn) {
        console.warn("⚠️ Botón googleCalendarBtn no encontrado, reintentando...");
        setTimeout(initGoogleCalendar, 500);
        return;
      }
      console.log("✅ Botón de Google Calendar encontrado");
      const nuevoBtn = calendarBtn.cloneNode(true);
      calendarBtn.parentNode.replaceChild(nuevoBtn, calendarBtn);
      nuevoBtn.addEventListener('click', (e) => {
        e.preventDefault();
        console.log("📅 Click en Google Calendar");
        const startDate = new Date(CONFIG.fechaEvento);
        const endDate = new Date(startDate);
        endDate.setHours(endDate.getHours() + 6);
        const formatDate = (date) => date.toISOString().replace(/-|:|\.\d+/g, '');
        const start = formatDate(startDate);
        const end = formatDate(endDate);
        const title = encodeURIComponent(`Boda de ${CONFIG.novios.el} y ${CONFIG.novios.ella}`);
        const description = encodeURIComponent(`Ceremonia: ${CONFIG.ceremonia.lugar}\nDirección: ${CONFIG.ceremonia.direccion}\n\nRecepción: ${CONFIG.recepcion.lugar}\nDirección: ${CONFIG.recepcion.direccion}\n\n${CONFIG.novios.frase}`);
        const location = encodeURIComponent(`${CONFIG.ceremonia.lugar}, ${CONFIG.ceremonia.direccion}`);
        const url = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&details=${description}&location=${location}&dates=${start}/${end}`;
        window.open(url, '_blank');
      });
      console.log("✅ Google Calendar inicializado");
    }, 100);
  }
  setTimeout(initGoogleCalendar, 1500);

  // ============================================================
  // COUNTDOWN CON HOJAS QUE CAEN
  // ============================================================
  function initCountdownHojas() {
    const calendarioImg = document.getElementById('calendarioImagenEvento');
    if (calendarioImg && CONFIG.rutasImagenes.imagenCalendario) {
      calendarioImg.src = CONFIG.rutasImagenes.imagenCalendario;
      console.log("📸 Imagen de calendario cargada");
    }
    
    const fechaEvento = new Date(CONFIG.fechaEvento);
    const fechaRecepcion = new Date(fechaEvento);
    fechaRecepcion.setHours(fechaRecepcion.getHours() + 2);
    
    let valoresAnteriores = { dias: null, horas: null, minutos: null, segundos: null };
    
    const daysSpan = document.getElementById('daysCountTear');
    const flipDays = document.getElementById('flip-dias-hoja');
    const flipHours = document.getElementById('flip-horas-hoja');
    const flipMinutes = document.getElementById('flip-minutos-hoja');
    const flipSeconds = document.getElementById('flip-segundos-hoja');
    
    if (!daysSpan) {
      console.warn("⚠️ Countdown de hojas no encontrado");
      return;
    }
    
    function actualizarTarjeta(elemento, nuevoValor, viejoValor) {
      if (!elemento) return;
      const nuevoStr = String(nuevoValor).padStart(2, '0');
      const viejoStr = String(viejoValor).padStart(2, '0');
      const numeroEl = elemento.querySelector('.flip-number-hoja');
      const hojaEl = elemento.querySelector('.hoja-cayendo');
      if (!numeroEl) return;
      if (viejoValor === null || viejoValor === undefined) {
        numeroEl.textContent = nuevoStr;
        if (hojaEl) hojaEl.style.opacity = '0';
        return;
      }
      if (nuevoStr === viejoStr) return;
      if (hojaEl) {
        hojaEl.textContent = viejoStr;
        hojaEl.classList.remove('animar');
        hojaEl.style.opacity = '1';
        void hojaEl.offsetWidth;
        hojaEl.classList.add('animar');
        numeroEl.textContent = nuevoStr;
        setTimeout(() => {
          hojaEl.style.opacity = '0';
          hojaEl.classList.remove('animar');
        }, 500);
      } else {
        numeroEl.textContent = nuevoStr;
      }
    }
    
    function actualizarContador() {
      const ahora = new Date();
      let nuevoValor = {};
      if (ahora < fechaEvento) {
        const diferencia = fechaEvento - ahora;
        nuevoValor = {
          dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
          horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((diferencia / (1000 * 60)) % 60),
          segundos: Math.floor((diferencia / 1000) % 60)
        };
      } else if (ahora >= fechaEvento && ahora < fechaRecepcion) {
        const diferencia = fechaRecepcion - ahora;
        nuevoValor = {
          dias: 0,
          horas: Math.floor((diferencia / (1000 * 60 * 60)) % 24),
          minutos: Math.floor((diferencia / (1000 * 60)) % 60),
          segundos: Math.floor((diferencia / 1000) % 60)
        };
      } else {
        nuevoValor = { dias: 0, horas: 0, minutos: 0, segundos: 0 };
      }
      actualizarTarjeta(flipDays, nuevoValor.dias, valoresAnteriores.dias);
      actualizarTarjeta(flipHours, nuevoValor.horas, valoresAnteriores.horas);
      actualizarTarjeta(flipMinutes, nuevoValor.minutos, valoresAnteriores.minutos);
      actualizarTarjeta(flipSeconds, nuevoValor.segundos, valoresAnteriores.segundos);
      valoresAnteriores = { ...nuevoValor };
    }
    actualizarContador();
    setInterval(actualizarContador, 1000);
    console.log("🍃 Countdown con hojas que caen iniciado");
  }
  
  setTimeout(() => { initCountdownHojas(); }, 500);

  // ============================================================
  // EFECTO ZIGZAG EN ITINERARIO
  // ============================================================
  function initTimelineAnimation() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    const timelineContainer = document.querySelector('.timeline-cinema');
    if (!timelineItems.length) return;
    console.log("🎬 Inicializando animación zigzag del itinerario");
    const options = { threshold: 0.3, rootMargin: "0px 0px -30px 0px" };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          if (entry.target === timelineItems[0] && timelineContainer) {
            setTimeout(() => { timelineContainer.classList.add('line-animated'); }, 200);
          }
          observer.unobserve(entry.target);
        }
      });
    }, options);
    timelineItems.forEach(item => { observer.observe(item); });
    timelineItems.forEach((item, index) => { item.style.transitionDelay = `${index * 0.1}s`; });
  }
  
  function initAllAnimations() {
    const checkInterval = setInterval(() => {
      if (!document.body.classList.contains('no-scroll')) {
        initTimelineAnimation();
        clearInterval(checkInterval);
      }
    }, 500);
  }
  
  initAllAnimations();
  
  // Ejecutar funciones adicionales
  cargarRecomendaciones();
  cargarImagenesUbicaciones();
  inicializarFormulario();

})();