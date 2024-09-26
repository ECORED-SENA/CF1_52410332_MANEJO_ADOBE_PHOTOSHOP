export default {
  global: {
    componenteFormativo: 'Conceptos básicos de Photoshop',
    descripcionCurso:
      'El componente formativo presenta una guía detallada sobre el manejo de Adobe Photoshop, incluyendo conceptos básicos, personalización del área de trabajo, manejo de herramientas y opciones de edición avanzada. Se enfoca en describir cómo utilizar las funcionalidades de Photoshop para diseñadores, fotógrafos e ilustradores, con énfasis en la mejora continua de las imágenes y la eficiencia en el proceso de edición gráfica.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-2.png'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-3.png'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-4.png'),
      },
      {
        clases: ['banner-principal-decorativo-5', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/banner-principal-decorativo-5.png'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Conceptos básicos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: '¿Para qué sirve?',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Manejo del color',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Resolución de imágenes',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Formatos',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Espacios de trabajo',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Personalización del área de trabajo',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Disposición de paneles',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo: 'Crear un nuevo documento con Photoshop',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo: 'Abrir imágenes',
            hash: 't_2_4',
          },
          {
            numero: '2.5',
            titulo: 'Menú contextual',
            hash: 't_2_5',
          },
          {
            numero: '2.6',
            titulo: 'Tamaño y peso de los archivos',
            hash: 't_2_6',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Herramientas',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/52410332_CF01_DU.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Espacios de trabajo',
      referencia:
        'Tripiyon Tutoriales - Photoshop en español. (2018). Cómo organizar los espacios de trabajo en Photoshop (video). Youtube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=gtXCRZgIygg',
    },
    {
      tema: 'Herramientas',
      referencia:
        'Designare Studio. (2021). Como usar la Caja de Herramientas en Photoshop Categorías Distribución y Funciones (video). YouTube.',
      tipo: 'Video',
      link:
        'https://www.youtube.com/watch?v=Rph2FqS4SIg&list=PLH_xXLCrZ_TmKkYwerSdDYtgqXvxvDvzi',
    },
  ],
  glosario: [
    {
      termino: 'Canales',
      significado:
        'imágenes en escala de grises que almacenan diferentes tipos de datos sobre los colores de una imagen.',
    },
    {
      termino: 'Capas',
      significado:
        'herramientas que permiten organizar diferentes elementos de una imagen en Photoshop, similares a acetatos transparentes.',
    },
    {
      termino: 'Color Lab',
      significado:
        'modo de color que se basa en la percepción humana, con un espacio de luminosidad que varía entre 0 y 100.',
    },
    {
      termino: 'DPI',
      significado:
        'puntos por pulgada que indican la cantidad de gotas de tinta en una pulgada, utilizado en impresoras.',
    },
    {
      termino: 'Formato PSD',
      significado:
        'formato de archivo propio de Photoshop que permite guardar el trabajo en capas, canales y más sin modificaciones.',
    },
    {
      termino: 'Píxeles por pulgada (PPI)',
      significado:
        'medida de la resolución de una imagen, indicando la cantidad de píxeles en una pulgada.',
    },
    {
      termino: 'RGB',
      significado:
        'modo de color predeterminado en Photoshop, utilizado principalmente en pantallas digitales.',
    },
    {
      termino: 'Selección rápida',
      significado:
        'herramienta que permite crear selecciones de manera rápida utilizando una punta de pincel redonda ajustable.',
    },
    {
      termino: 'Trazados',
      significado:
        'segmentos rectos o curvos en Photoshop, formados por puntos de ancla y líneas de dirección.',
    },
    {
      termino: 'Varita mágica',
      significado:
        'herramienta que selecciona áreas de colores similares en una imagen con un solo clic.',
    },
  ],
  referencias: [
    {
      referencia: 'Adobe Community Help. (s.f.). Modos de color. ',
      link: 'https://helpx.adobe.com/es/photoshop/using/color-modes.html',
    },
    {
      referencia:
        'Adobe Community Help. (s.f.). Tamaño y resolución de imágenes. ',
      link:
        'https://helpx.adobe.com/es/photoshop/using/image-size-resolution.html',
    },
    {
      referencia:
        'Adobe Systems Software Ireland Ltd. (2015). Formación y asistencia de Adobe Stock / Preguntas frecuentes. ',
      link: 'https://helpx.adobe.com/es/stock/faq.html',
    },
    {
      referencia:
        'Adobe Systems Software Ireland Ltd. (2015). Formación y asistencia de Adobe Stock / Preguntas frecuentes. ',
      link: 'https://helpx.adobe.com/es/stock/faq.html',
    },
    {
      referencia: 'Adobe. (2023). Galerías de herramientas. ',
      link: 'https://helpx.adobe.com/co/photoshop/using/tools.html ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Olga Constanza Bermúdez Jaimes',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Carlos Andrés Díaz Botero',
          cargo: 'Experto temático',
          centro: 'Centro Agroindustrial - Regional Quindío',
        },
        {
          nombre: 'Ana Catalina Córdoba Sus',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Juan Daniel Polanco Muñoz',
          cargo: 'Diseñador de contenidos digitales ',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Jhon Jairo Urueta Álvarez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        //{
        //  nombre: 'Nombre',
        //  cargo: 'Animador y productor audiovisual',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        //{
        //  nombre: 'Luis Gabriel Urueta Alvarez',
        //  cargo: 'Validador y vinculador de recursos educativos digitales',
        //  centro: 'Centro de Servicios de Salud - Regional Antioquia',
        //},
        {
          nombre: 'Jaime Hernán Tejada Llano',
          cargo: 'Validador y vinculador de recursos educativos digitales',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
        {
          nombre: 'Margarita Marcela Medrano Gómez',
          cargo: 'Evaluador de contenidos inclusivos y accesibles',
          centro: 'Centro de Servicios de Salud - Regional Antioquia',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
