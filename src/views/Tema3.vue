<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Herramientas
    p.mb-5(data-aos="fade-right") Al abrir Photoshop, el panel de herramientas se muestra en el lado izquierdo de la pantalla. Varias de las herramientas en este panel tienen opciones adicionales que se despliegan en la barra de opciones contextuales:
    .row.align-items-center.mb-5
      .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
        .p-4.bg-c16
          figure
            img(src="@/assets/curso/tema3/img2.png", style="width: 300px", alt="").m-auto
      .col-lg-9(data-aos="fade-left")
        .row
          .col-12
            .p-4.p-lg-5
              .tarjeta.tarjeta--azul1.shadow
                .p-5
                  SlyderA
                    .row
                      .col-12
                        figure
                          img(src="@/assets/curso/tema3/img3.png", style="width: 360px", alt="").m-auto
                    .row
                      .col-12
                        figure
                          img(src="@/assets/curso/tema3/img4.png", style="width: 350px", alt="").m-auto
                    .row
                      .col-12
                        figure
                          img(src="@/assets/curso/tema3/img5.png", style="width: 330px", alt="").m-auto
                    .row
                      .col-12
                        figure
                          img(src="@/assets/curso/tema3/img8.png", style="width: 330px", alt="").m-auto
                    .row
                      .col-12
                        figure
                          img(src="@/assets/curso/tema3/img7.png", style="width: 330px", alt="").m-auto
                    .row
                      .col-12
                        figure
                          img(src="@/assets/curso/tema3/img6.png", style="width: 330px", alt="").m-auto
    p.mb-5(data-aos="fade-up") Conozcamos más sobre algunas de ellas (Adobe, 2023):
    .row.bg-c11
      .col-12
        .px-5
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/img1.svg", style="width: 300px", alt="").m-auto
            .col-lg-9(data-aos="fade-left")
              p #[b Herramientas de selección]
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img9.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img14.png", style="width: 190px", alt="").m-auto
                        p.text-center.mb-0 Las herramientas de Marco rectangular realizan selecciones rectangulares, elípticas, de fila única y de columna única.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img10.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img15.png", style="width: 95px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Mover mueve selecciones, capas y guías.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img11.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img16.png", style="width: 95px", alt="").m-auto
                        p.text-center.mb-0 Las herramientas de Lazo realizan selecciones a mano alzada, poligonales (rectilíneas) y magnéticas (ajustables).
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img12.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img17.png", style="width: 170px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Selección rápida permite "pintar" una selección de manera rápida mediante una punta de pincel redonda ajustable.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img13.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img18.png", style="width: 155px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Varita mágica selecciona áreas de colores similares.
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/img2.svg", style="width: 300px", alt="").m-auto
            .col-lg-9(data-aos="fade-left")
              p #[b Herramientas para cortar y crear sectores]
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img19.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img22.png", style="width: 160px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Recortar separa imágenes.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img20.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img23.png", style="width: 100px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Sector crea sectores.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img21.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img24.png", style="width: 180px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Seleccionar sector selecciona sectores.
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/img3.svg", style="width: 300px", alt="").m-auto
            .col-lg-9(data-aos="fade-left")
              p #[b Herramientas de retoque]
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img25.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img39.png", style="width: 160px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Pincel corrector puntual quita manchas y objetos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img26.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img40.png", style="width: 100px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Parche repara las imperfecciones del área seleccionada en una imagen utilizando una muestra o motivo.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img27.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img41.png", style="width: 190px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Pincel de ojos rojos elimina el reflejo rojo del flash.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img28.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img42.png", style="width: 180px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Tampón de clonar pinta con una muestra de la imagen.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img29.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img43.png", style="width: 180px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Tampón de motivo pinta tomando una parte de la imagen como motivo.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img30.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img44.png", style="width: 120px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Borrador borra píxeles y restaura partes de la imagen a un estado guardado previamente.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img31.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img45.png", style="width: 190px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Borrador de fondos borra áreas y las deja transparentes con tan solo arrastrar.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img32.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img46.png", style="width: 170px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Borrador mágico borra áreas con colores uniformes y las deja transparentes con tan solo hacer clic.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img33.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img47.png", style="width: 140px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Desenfocar suaviza los bordes duros de la imagen.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img34.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img48.png", style="width: 115px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Enfocar enfoca los bordes suaves de una imagen.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img35.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img49.png", style="width: 100px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Dedo difumina partes de una imagen.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img36.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img50.png", style="width: 150px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Sobreexponer aclara áreas de una imagen.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img37.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img51.png", style="width: 140px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Subexponer oscurece áreas de una imagen.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img38.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img52.png", style="width: 120px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Esponja cambia la saturación de color de un área.
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/img4.svg", style="width: 300px", alt="").m-auto
            .col-lg-9(data-aos="fade-left")
              p #[b Herramientas de pintura]
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img53.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img61.png", style="width: 100px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Pincel pinta trazos de pincel.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img54.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img62.png", style="width: 95px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Lápiz pinta líneas con bordes duros.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img55.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img63.png", style="width: 190px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Sustitución de color sustituye un color seleccionado por uno nuevo.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img56.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img64.png", style="width: 170px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Pincel mezclador simula las técnicas de pintura realista como mezclar los colores del lienzo y variar la humedad de la pintura.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img57.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img65.png", style="width: 170px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Pincel de historia pinta una copia del estado o la instantánea seleccionados en la ventana de la imagen actual.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img58.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img66.png", style="width: 170px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Pincel histórico pinta con trazos estilizados que simulan el aspecto de diferentes estilos de pintura utilizando el estado o la instantánea seleccionados.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img59.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img67.png", style="width: 140px", alt="").m-auto
                        p.text-center.mb-0 Las herramientas de Degradado crean fusiones rectilíneas, radiales, angulares, reflejadas y de diamante entre colores.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img60.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img68.png", style="width: 160px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Bote de pintura rellena áreas de colores similares con el color frontal.
          .row.align-items-center.mb-5
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/img5.svg", style="width: 300px", alt="").m-auto
            .col-lg-9(data-aos="fade-left")
              p #[b Herramientas de pintura]
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img69.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img75.png", style="width: 190px", alt="").m-auto
                        p.text-center.mb-0 Las herramientas de selección de trazado realizan selecciones de formas o segmentos y muestran los puntos de ancla, las líneas de dirección y los puntos de dirección.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img70.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img76.png", style="width: 95px", alt="").m-auto
                        p.text-center.mb-0 Las herramientas de Texto insertan texto en una imagen.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img71.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img77.png", style="width: 180px", alt="").m-auto
                        p.text-center.mb-0 Las herramientas de Máscara de texto crean una selección en forma de texto.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img72.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img78.png", style="width: 110px", alt="").m-auto
                        p.text-center.mb-0 Las herramientas de Pluma dibujan trazados de borde suaves.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img73.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img79.png", style="width: 160px", alt="").m-auto
                        p.text-center.mb-0 Las herramientas Forma y Línea dibujan formas y líneas en una capa normal o en una capa de formas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img74.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img80.png", style="width: 190px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Forma personalizada realiza formas personalizadas seleccionadas de una lista de formas personalizadas.
          .row.align-items-center
            .col-lg-3.mb-4.mb-lg-0(data-aos="fade-right")
              figure
                img(src="@/assets/curso/tema3/img6.svg", style="width: 300px", alt="").m-auto
            .col-lg-9(data-aos="fade-left")
              p #[b Herramientas de pintura]
              SlyderF(columnas="col-md-6 col-xl-4")
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img81.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img89.png", style="width: 100px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Mano mueve la imagen en la ventana.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img82.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img90.png", style="width: 140px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Rotar vista rota el lienzo de manera no destructiva.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img83.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img91.png", style="width: 100px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Zoom aumenta y reduce la vista de una imagen.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img84.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img92.png", style="width: 90px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Nota crea notas que se pueden incluir en la imagen.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img85.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img93.png", style="width: 150px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Cuentagotas toma muestras de colores en una imagen.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img86.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img94.png", style="width: 180px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Muestra de color muestra los valores de color de hasta cuatro áreas.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img87.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img95.png", style="width: 100px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Regla mide distancias, ubicaciones y ángulos.
                .tarjeta.color-acento-botones
                  .row.justify-content-center
                    .col-12
                      img(src='@/assets/curso/tema3/img88.png' alt='AvatarTop')
                  .row
                    .col-12
                      .p-4
                        figure.mb-4
                          img(src="@/assets/curso/tema3/img96.png", style="width: 130px", alt="").m-auto
                        p.text-center.mb-0 La herramienta Recuento cuenta los objetos de una imagen.

</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
