(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["actividad"],{"0b0d":function(e,t,a){"use strict";a("4cb3")},"27ba":function(e,t,a){},4298:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticClass:"curso-main-container pb-3"},[t("BannerInterno",{attrs:{icono:"far fa-question-circle",titulo:"Actividad didáctica"}}),t("div",{staticClass:"container tarjeta tarjeta--blanca p-4 p-md-5"},[t("div",{attrs:{id:"Actividad"}},[t("Actividad",{attrs:{cuestionario:e.cuestionario}})],1)])],1)},r=[],o=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta--blanca"},[t("div",{staticClass:"row align-items-center mb-4"},[e._m(0),t("div",{staticClass:"col"},[t("h2",{staticClass:"titulo-tercero mb-0"},[e._v(" "+e._s(e.cuestionario.titulo)+" ")]),t("p",{staticClass:"mb-0"},[e._v(" "+e._s(e.cuestionario.introduccion)+" ")])])]),t("div",{staticClass:"tarjeta tarjeta--lightest-gray p-4 p-md-5"},[e.respuestas.length===e.preguntas.length?t("ActividadResultados",{attrs:{respuestas:e.respuestas}}):t("ActividadPregunta",{attrs:{pregunta:e.preguntaSelected},on:{respuestaSelected:e.onRrespuestaSelected}})],1),t("ActividadBarraAvance",{staticClass:"mx-4 mx-md-5",attrs:{"pregunta-index":e.preguntaSelectedIdx,"preguntas-count":e.preguntas.length,"respuestas-length":e.respuestas.length,"continuar-disabled":e.continuarDisabled},on:{continuar:e.onContinuar,reiniciar:e.onReiniciar}})],1)},i=[function(){var e=this,t=e._self._c;return t("div",{staticClass:"col-auto"},[t("img",{attrs:{src:a("8da0"),alt:""}})])}],n=(a("14d9"),function(){var e=this,t=e._self._c;return t("div",[t("p",{staticClass:"mb-4 pb-4"},[t("b",[e._v(e._s(e.pregunta.texto))])]),t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col-4"},[t("img",{attrs:{src:e.pregunta.imagen,alt:""}})]),t("div",{staticClass:"col"},e._l(e.opcionesComputed,(function(a,s){return t("div",{key:a.id,staticClass:"tarjeta tarjeta--azul tarjeta-respuesta p-4",class:{"mb-3":s!==e.opcionesComputed.length-1,"tarjeta-respuesta--correcta":a.correcta,"tarjeta-respuesta--incorrecta":a.incorrecta,"tarjeta-respuesta--disabled":a.disabled},on:{click:function(t){return e.onRespuestaSelected(a)}}},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"col-auto"},[t("div",{staticClass:"tarjeta-respuesta__icon",class:[e.respuestaSelected.id===a.id?a.esCorrecta?"tarjeta-respuesta__icon--correcto":"tarjeta-respuesta__icon--incorrecto":""]})]),t("div",{staticClass:"col"},[e._v(" "+e._s(a.texto)+" ")])])])})),0)]),e.respuestaSelected.id?[t("hr"),e.respuestaSelected.esCorrecta?t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-success h3 ma-0"},[e._v("¡Correcto!")]),e._v(" "+e._s(e.pregunta.mensaje_correcto)+" ")]):t("div",{staticClass:"pt-2"},[t("span",{staticClass:"text-danger h3 ma-0"},[e._v("¡Incorrecto!")]),e._v(" "+e._s(e.pregunta.mensaje_incorrecto)+" ")])]:e._e()],2)}),c=[],d={name:"ActividadPregunta",props:{pregunta:{type:Object,required:!0}},data:()=>({respuestaSelected:{}}),computed:{opcionesComputed(){if(!this.pregunta.opciones.length)return[];const e=this.respuestaSelected.id;return this.pregunta.opciones.map(t=>({...t,correcta:e===t.id&&t.esCorrecta,incorrecta:e===t.id&&!t.esCorrecta,disabled:!!e}))}},watch:{pregunta(){this.respuestaSelected={}}},methods:{onRespuestaSelected(e){this.respuestaSelected=e,this.$emit("respuestaSelected",e.esCorrecta)}}},u=d,l=(a("b098"),a("2877")),p=Object(l["a"])(u,n,c,!1,null,"0d69232e",null),m=p.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tarjeta-avance"},[t("div",{staticClass:"row align-items-center"},[t("div",{staticClass:"d-none d-md-block col"},[t("div",{staticClass:"tarjeta-avance__barra-container ms-4"},[t("div",{staticClass:"tarjeta-avance__barra",style:{width:e.avanceWidth}})])]),t("div",{staticClass:"col col-md-auto text-center"},[e._v(" Pregunta "+e._s(e.preguntaIndex+1)+" de "+e._s(e.preguntasCount)+" ")]),t("div",{staticClass:"col-auto"},[e.respuestasLength===e.preguntasCount?t("button",{staticClass:"boton btn-lg boton--b py-3 px-5",on:{click:function(t){return e.$emit("reiniciar")}}},[t("span",[e._v("Reiniciar")])]):t("button",{staticClass:"boton btn-lg boton--b py-3 px-4",class:{"boton--disabled":e.continuarDisabled},on:{click:function(t){return e.$emit("continuar")}}},[t("span",[e._v("Continuar")]),t("i",{staticClass:"fas fa-arrow-right"})])])])])},g=[],C={name:"ActividadBarraAvance",props:{preguntaIndex:{type:Number,required:!0},preguntasCount:{type:Number,required:!0},continuarDisabled:{type:Boolean,default:!1},respuestasLength:{type:Number,default:0}},computed:{avanceWidth(){return(this.preguntaIndex+1)/this.preguntasCount*100+"%"}}},h=C,v=(a("c2dc"),Object(l["a"])(h,b,g,!1,null,"7a0121ad",null)),x=v.exports,_=function(){var e=this,t=e._self._c;return t("div",{staticClass:"row align-items-center justify-content-around"},[t("div",{staticClass:"col-5"},[(e.aprobado,t("img",{attrs:{src:a("a46c"),alt:""}}))]),t("div",{staticClass:"col-4"},[t("div",{staticClass:"d-flex align-items-center flex-column"},[t("div",{staticClass:"resultados__icono mb-4",class:["resultados__icono--"+(e.aprobado?"correcto":"incorrecto")]}),e.aprobado?[t("h3",[e._v("¡BUEN TRABAJO!")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se evidencia un buen manejo de los conceptos estudiados en esta unidad. ")])]:[t("h3",[e._v("VUELVE A INTENTARLO")]),t("p",{staticClass:"mb-0 text-center"},[e._v(" Se recomienda revisar el contenido de la unidad para clarificar conceptos. ")])],t("hr",{staticClass:"w-100"}),t("p",{staticClass:"mb-0"},[e._v("Aciertos: "+e._s(e.rtas.correctas)+" / "+e._s(e.rtas.total))])],2)])])},j=[],f={name:"ActividadResultados",props:{respuestas:{type:Array,required:!0}},computed:{rtas(){const e={correctas:0,incorrectas:0,total:this.respuestas.length,porcentaje:0};return this.respuestas.forEach(t=>{t.esCorrecta?e.correctas++:e.incorrectas++}),e.porcentaje=e.correctas/e.total*100,e},aprobado(){return this.rtas.porcentaje>=70}}},A=f,y=(a("4d40"),Object(l["a"])(A,_,j,!1,null,"360ec089",null)),S=y.exports,R={name:"Actividad",components:{ActividadPregunta:m,ActividadBarraAvance:x,ActividadResultados:S},props:{cuestionario:{type:Object,required:!0},mezclarRespuestas:{type:Boolean,default:!1}},data:()=>({intentos:0,preguntaSelectedIdx:0,respuestaActual:{},respuestas:[],continuarDisabled:!0}),computed:{preguntas(){const{preguntas:e,barajarPreguntas:t}=this.cuestionario;if(!e)return[];const a=t?this.shuffle(e):e;return a.map(e=>({...e,opciones:e.barajarRespuestas?this.shuffle(e.opciones):e.opciones,intentos:this.intentos}))},preguntaSelected(){return this.preguntas[this.preguntaSelectedIdx]}},methods:{shuffle(e){let t,a=e.length;while(a>0)t=Math.floor(Math.random()*a),a--,[e[a],e[t]]=[e[t],e[a]];return e},onRrespuestaSelected(e){this.continuarDisabled=!1,this.respuestaActual={id:this.preguntaSelected.id,esCorrecta:e}},onContinuar(){if(this.continuarDisabled=!0,this.respuestaActual.id){const e=this.respuestas.findIndex(e=>e.id===this.preguntaSelected.id);-1===e?this.respuestas.push(this.respuestaActual):this.respuestas[e]=this.respuestaActual}this.preguntaSelectedIdx<this.preguntas.length-1&&(this.preguntaSelectedIdx+=1)},onReiniciar(){this.preguntaSelectedIdx=0,this.respuestas=[],this.respuestaActual={},this.intentos+=1}}},P=R,w=(a("0b0d"),Object(l["a"])(P,o,i,!1,null,"1bb53ccc",null)),L=w.exports,E={name:"ActividadDidactica",components:{Actividad:L},data:()=>({cuestionario:{tema:"Manejo de los residuos sólidos en la producción avícola.",titulo:"Cuestionario",introduccion:"Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.",barajarPreguntas:!1,preguntas:[{id:1,texto:"¿Cuál es el propósito principal de Adobe Photoshop?",imagen:a("5295"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Crear documentos de texto.",esCorrecta:!1},{id:"b",texto:"Edición y tratamiento de imágenes.",esCorrecta:!0},{id:"c",texto:"Gestión de bases de datos.",esCorrecta:!1},{id:"d",texto:"Desarrollo de aplicaciones web.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:2,texto:"¿Qué función principal cumple el modo de color RGB en Photoshop?",imagen:a("9399"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Se utiliza en pantallas y dispositivos electrónicos.",esCorrecta:!0},{id:"b",texto:"Es utilizado para la impresión de alta calidad.",esCorrecta:!1},{id:"c",texto:"Se aplica exclusivamente en fotografía en blanco y negro.",esCorrecta:!1},{id:"d",texto:"Es el modo de color predeterminado para la impresión.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:3,texto:"¿Qué herramienta permite eliminar objetos de una imagen con un solo clic en la versión 24.0 de Photoshop?",imagen:a("db97"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Lazo.",esCorrecta:!1},{id:"b",texto:"Selección rápida.",esCorrecta:!1},{id:"c",texto:"Eliminar y rellenar.",esCorrecta:!0},{id:"d",texto:"Recortar.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:4,texto:"¿Qué permite la herramienta “Pincel corrector puntual” en Photoshop?",imagen:a("9bb4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Eliminar el fondo de una imagen.",esCorrecta:!1},{id:"b",texto:"Quitar manchas y objetos no deseados.",esCorrecta:!0},{id:"c",texto:"Ajustar la luminosidad.",esCorrecta:!1},{id:"d",texto:"Ajustar la luminosidad.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:5,texto:"¿Qué formato de archivo permite guardar un trabajo en capas y canales en Photoshop sin modificación?",imagen:a("5295"),barajarRespuestas:!0,opciones:[{id:"a",texto:"JPEG.",esCorrecta:!1},{id:"b",texto:"GIF.",esCorrecta:!1},{id:"c",texto:"PSD.",esCorrecta:!0},{id:"d",texto:"PNG.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:6,texto:"¿Cuál de las siguientes opciones describe mejor el propósito del panel de pictogramas en Photoshop?",imagen:a("9399"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Crear mesas de trabajo.",esCorrecta:!1},{id:"b",texto:"Almacenar imágenes de alta resolución.",esCorrecta:!1},{id:"c",texto:"Ampliar la variedad de herramientas de texto con símbolos.",esCorrecta:!0},{id:"d",texto:"Exportar imágenes en diferentes formatos.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:7,texto:"¿Qué acción realiza la herramienta “Tampón de clonar” en Photoshop?",imagen:a("db97"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Suavizar bordes de la imagen.",esCorrecta:!1},{id:"b",texto:"Pintar con una muestra de la imagen.",esCorrecta:!0},{id:"c",texto:"Ajustar la saturación de color.",esCorrecta:!1},{id:"d",texto:"Cambiar el tamaño de un objeto.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:8,texto:"¿Qué función cumple el panel de muestras en Photoshop?",imagen:a("9bb4"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Crear nuevas capas.",esCorrecta:!1},{id:"b",texto:"Editar texto.",esCorrecta:!1},{id:"c",texto:"Ajustar la resolución de imágenes.",esCorrecta:!1},{id:"d",texto:"Almacenar colores de uso frecuente.",esCorrecta:!0}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:9,texto:"¿Qué opción describe mejor la herramienta “Sobreexponer” en Photoshop?",imagen:a("5295"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Aclara áreas de una imagen.",esCorrecta:!0},{id:"b",texto:"Oscurece áreas de una imagen.",esCorrecta:!1},{id:"c",texto:"Cambia la saturación de color.",esCorrecta:!1},{id:"d",texto:"Elimina el fondo de una imagen.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."},{id:10,texto:"¿Qué característica principal distingue a las imágenes en modo de color “Mapa de bits” en Photoshop?",imagen:a("9399"),barajarRespuestas:!0,opciones:[{id:"a",texto:"Utilizan una mezcla de cian, magenta, amarillo y negro.",esCorrecta:!1},{id:"b",texto:"Tienen una profundidad de bits de 1, utilizando blanco o negro.",esCorrecta:!0},{id:"c",texto:"Se utilizan principalmente para pantallas digitales.",esCorrecta:!1},{id:"d",texto:"Son ideales para la impresión de alta resolución.",esCorrecta:!1}],mensaje_correcto:"¡Muy bien! Ha acertado la respuesta.",mensaje_incorrecto:"Lo sentimos, su respuesta no es la correcta."}],mensaje_final_aprobado:"¡Excelente! Ha superado la actividad.",mensaje_final_reprobado:"Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica."}}),computed:{},methods:{}},I=E,M=Object(l["a"])(I,s,r,!1,null,null,null);t["default"]=M.exports},"4cb3":function(e,t,a){},"4d40":function(e,t,a){"use strict";a("27ba")},5295:function(e,t,a){e.exports=a.p+"img/img1.fe39bc43.png"},"8ba4":function(e,t,a){},"8da0":function(e,t,a){e.exports=a.p+"img/icon-actividad.3d896e1e.svg"},9399:function(e,t,a){e.exports=a.p+"img/img2.f00a06e6.png"},"9bb4":function(e,t,a){e.exports=a.p+"img/img4.ba28c99b.png"},a46c:function(e,t,a){e.exports=a.p+"img/cuestionario-resultado.a5584db8.svg"},b098:function(e,t,a){"use strict";a("8ba4")},c2dc:function(e,t,a){"use strict";a("f4e0")},db97:function(e,t,a){e.exports=a.p+"img/img3.63b8558c.png"},f4e0:function(e,t,a){}}]);
//# sourceMappingURL=actividad.a02018ca.js.map