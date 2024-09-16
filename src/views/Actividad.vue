<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    #Actividad                
      <Actividad :cuestionario="cuestionario" />

</template>

<script>
import Actividad from '@/components/actividad/Actividad'
export default {
  name: 'ActividadDidactica',
  components: { Actividad },
  data: () => ({
    cuestionario: {
      tema: 'Manejo de los residuos sólidos en la producción avícola.',
      titulo: 'Cuestionario',
      introduccion:
        'Lea cada enunciado y luego seleccione la respuesta correcta según corresponda.',
      barajarPreguntas: false,
      preguntas: [
        {
          id: 1,
          texto: '¿Cuál es el propósito principal de Adobe Photoshop?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            { id: 'a', texto: 'Crear documentos de texto.', esCorrecta: false },
            {
              id: 'b',
              texto: 'Edición y tratamiento de imágenes.',
              esCorrecta: true,
            },
            { id: 'c', texto: 'Gestión de bases de datos.', esCorrecta: false },
            {
              id: 'd',
              texto: 'Desarrollo de aplicaciones web.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            '¿Qué función principal cumple el modo de color RGB en Photoshop?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Se utiliza en pantallas y dispositivos electrónicos.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Es utilizado para la impresión de alta calidad.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Se aplica exclusivamente en fotografía en blanco y negro.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Es el modo de color predeterminado para la impresión.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            '¿Qué herramienta permite eliminar objetos de una imagen con un solo clic en la versión 24.0 de Photoshop?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lazo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Selección rápida.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar y rellenar.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Recortar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            '¿Qué permite la herramienta “Pincel corrector puntual” en Photoshop?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar el fondo de una imagen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Quitar manchas y objetos no deseados.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ajustar la luminosidad.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ajustar la luminosidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            '¿Qué formato de archivo permite guardar un trabajo en capas y canales en Photoshop sin modificación?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'JPEG.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'GIF.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'PSD.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'PNG.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            '¿Cuál de las siguientes opciones describe mejor el propósito del panel de pictogramas en Photoshop?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear mesas de trabajo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Almacenar imágenes de alta resolución.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Ampliar la variedad de herramientas de texto con símbolos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Exportar imágenes en diferentes formatos.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Qué acción realiza la herramienta “Tampón de clonar” en Photoshop?',
          imagen: require('@/assets/curso/img3.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Suavizar bordes de la imagen.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Pintar con una muestra de la imagen.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ajustar la saturación de color.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Cambiar el tamaño de un objeto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto: '¿Qué función cumple el panel de muestras en Photoshop?',
          imagen: require('@/assets/curso/img4.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Crear nuevas capas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Editar texto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Ajustar la resolución de imágenes.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Almacenar colores de uso frecuente.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Qué opción describe mejor la herramienta “Sobreexponer” en Photoshop?',
          imagen: require('@/assets/curso/img1.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aclara áreas de una imagen.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Oscurece áreas de una imagen.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cambia la saturación de color.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Elimina el fondo de una imagen.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            '¿Qué característica principal distingue a las imágenes en modo de color “Mapa de bits” en Photoshop?',
          imagen: require('@/assets/curso/img2.png'),
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Utilizan una mezcla de cian, magenta, amarillo y negro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Tienen una profundidad de bits de 1, utilizando blanco o negro.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Se utilizan principalmente para pantallas digitales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Son ideales para la impresión de alta resolución.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
  computed: {},
  methods: {},
}
</script>
