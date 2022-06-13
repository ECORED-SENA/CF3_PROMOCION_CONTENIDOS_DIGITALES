export default {
  global: {
    componenteFormativo: 'Fundamentos del <i>Community Management</i>',
    descripcionCurso:
      'Como transcender y consolidar una audiencia y seguidores se ha convertido en un reto para toda empresa en el escenario digital, este documento contempla los fundamentos básicos del community management como herramienta del mercadeo para posicionar la marca (empresa) en Internet, a través de la producción y promoción de contenidos digitales.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Comunidad virtual',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Concepto de comunidad virtual',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tipos de comunidades virtuales',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estrategias para la creación de comunidades virtuales',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Posicionamiento y crecimiento de la comunidad virtual',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo:
              'Contenido, optimización y moderación de la comunidad virtual',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Plan de marketing online',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Construcción del plan de marketing online',
            hash: 't_1_7',
          },
        ],
      },

      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Medios digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Concepto de medios digitales',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Características de los medios digitales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Tipos de medios digitales',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Plataformas digitales',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Redes sociales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Concepto de red social',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de redes sociales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Importancia de la red social',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Audiencia',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Tipos de audiencia',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Diferencia entre audiencia y comunidad',
            hash: 't_4_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.3',
            titulo:
              'Conceptualización y contextualización de valoración, la reacción y la interacción de la audiencia',
            hash: 't_4_3',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Seguidores',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Características de un seguidor',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Tipos de seguidores',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Diferencia entre seguidor y cliente',
            hash: 't_5_3',
          },
        ],
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
      tema: 'Fundamentos de marketing',
      referencia:
        'Kotler, P. & Armstrong, G. (2003). Fundamentos de <i>marketing</i>. Pearson Educación.',
      tipo: 'Libro',
      descarga: '/downloads/Fundamentos_De_Marketing_Kotler_Armstrong.pdf',
    },
    {
      tema: 'Dirección de <i>marketing</i>',
      referencia:
        'Lane, K. & Kotler, P. (2006). Dirección de <i>marketing</i>. Duodécima Edición. Editorial Pearson.',
      tipo: 'Libro',
      descarga: '/downloads/Direccionde_Marketing_Kotler_edi12.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Alcance orgánico',
      significado:
        'Es un porcentaje o dato numérico que evalúa el impacto y el número de personas que han visto una publicación de manera natural, sin ningún tipo de promoción o publicidad de pago. Se puede averiguar el alcance orgánico de las publicaciones a través de las estadísticas de la <i>fanpage</i> de Facebook.',
    },
    {
      termino: 'Alcance viral',
      significado:
        'Es una unidad de medida que calcula el número de personas que han visto una publicación a través de otros contactos. Mide la evolución y la repercusión de una publicación en cualquier tipo de formato. Redes sociales como Facebook, Twitter o Google Plus, por ejemplo, muestran el alcance viral de una publicación indicando cómo y qué personas han compartido un contenido.',
    },
    {
      termino: 'Analítica web',
      significado:
        'Es la forma de medir y analizar los datos de tráfico de un sitio web, a través del cual va a permitir tomar las mejores decisiones y optimizar los objetivos del negocio.',
    },
    {
      termino: '<i>Blog post</i>',
      significado:
        'Es el nombre técnico que recibe la acción de publicar una entrada o un artículo en un <i>blog</i>.',
    },
    {
      termino: '<i>Blog roll</i>',
      significado:
        'Es un <i>widget</i> (programa integrado de una Web externa) que se puede instalar en los <i>blogs</i> y visualiza en forma de lista los <i>blogs</i> que se siguen y que se recomiendan a los lectores.',
    },
    {
      termino: 'Comunidad <i>online</i>',
      significado:
        'Conjunto de personas con presencia en medios digitales y redes sociales que comparten y dialogan en el entorno 2.0, generalmente en torno a una marca o temática.',
    },
    {
      termino: '<i>Cookies</i>',
      significado:
        'Son pequeños fragmentos de información que quedan registrados en el navegador cuando se visita un sitio web y que permiten a este sitio seguir el rastro de la actividad de los usuarios.',
    },
    {
      termino: '<i>Crowdsourcing</i>',
      significado:
        'Acción por la cual las empresas y marcas generan contenido creativo a través de los propios clientes, <i>fans</i> o usuarios de Internet. Este término se ha generalizado y puesto en práctica sobre todo para fomentar la participación en redes sociales.',
    },
    {
      termino: '<i>Dashboard</i>',
      significado:
        'Es el área de administración de un <i>blog</i>, conocido por todos como escritorio, desde donde se pueden gestionar todas las opciones.',
    },
    {
      termino: '<i>Engagement</i>',
      significado:
        'Es la sensación de pertenencia y unión emocional entre una marca y un usuario. Es el objetivo de toda marca o empresa en redes sociales, a través de basar la estrategia en <i>marketing</i> de contenidos y generar en cada una de las redes la mayor participación posible.',
    },
    {
      termino: '<i>Fanpage</i>',
      significado:
        'También llamada “página de fans”, es la plataforma que ofrece Facebook a las empresas, marcas u organizaciones para visibilizar y conectar con los usuarios. A diferencia de un perfil, una <i>fanpage</i> no tiene límite de <i>fans</i> y es posible tener acceso a la información estadística de la página.',
    },
    {
      termino: '<i>Feed</i>',
      significado:
        'También conocido como RSS (Really Simple Syndication) es el formato en el que se comparte el contenido de los <i>blogs</i>.',
    },
    {
      termino: 'Geolocalización',
      significado:
        'Término que hace referencia al posicionamiento y a la localización geográfica de un negocio, una persona o un lugar a través de coordenadas que permiten situar cualquier elemento en el mapa. Es una herramienta fundamental para aplicaciones y comerciar a través del <i>mobile marketing</i>.',
    },
    {
      termino: '<i>Hashtag</i>',
      significado:
        'Es una etiqueta formada por una palabra o un conjunto de palabras precedidas por el símbolo numeral (#) que transmite una idea, un nombre o un concepto que normalmente va asociado con un mensaje o texto. Su uso se ha extendido principalmente en redes sociales como Twitter, Instagram o Google Plus.',
    },
    {
      termino: 'Influenciador',
      significado:
        'En <i>social media</i> es aquella persona que tiene capacidad para viralizar y compartir contenidos con un amplio número de personas',
    },
    {
      termino: 'Infografía',
      significado:
        'Es una imagen que, con un conjunto de gráficos y textos, conforman un esquema visual que transmite, de forma rápida e intuitiva, conceptos e información.',
    },
    {
      termino: 'KPI',
      significado:
        'Son las siglas de Key Performance Indicator; son indicadores y herramientas de medición de los cuales se obtiene información útil del nivel de rendimiento de una campaña o estrategia de social media <i>marketing</i>.',
    },
    {
      termino: '<i>Marketing</i> de contenidos',
      significado:
        'Son estrategias de <i>marketing</i> enfocadas en ofrecer contenidos útiles y de ayuda a los usuarios principalmente a través del <i>blog</i> y del <i>social media marketing</i>.',
    },
    {
      termino: 'Metadatos',
      significado:
        'Es un código que se estructura al inicio de un sitio web para clasificar el tipo de información que describe a su vez otro elemento, del cual se puede obtener información detallada de sus características.',
    },
    {
      termino: 'Reputación <i>online</i>',
      significado:
        'Es el conjunto de opiniones y experiencias (positivas o negativas) de usuarios y consumidores que giran en torno a una marca, un producto o una empresa, generados en el entorno 2.0 y en las redes sociales.',
    },
    {
      termino: '<i>Retargeting</i>',
      significado:
        'Es una nueva técnica de publicidad que consiste en mostrar al usuario productos afines, una especie de filtro personalizado de productos y servicios en los que se está más receptivo a recibir información. Este tipo de prácticas se hacen posible si y solo si, los usuarios admiten voluntariamente que aceptan cookies cuando navegan en determinado sitio.',
    },
    {
      termino: 'ROI',
      significado:
        'Son las siglas en inglés de Return On Investment, que significa retorno de la inversión. Es un indicador que mide el beneficio frente al gasto de la inversión de un proyecto de <i>social media marketing</i> en función de los objetivos y las metas logrados.',
    },
    {
      termino: 'Segmentar',
      significado:
        'En redes sociales, es la acción por la cual se dirige una publicación a un grupo de personas con un perfil determinado. Se utilizan variables demográficas, pero las conductuales se convierten en las más relevantes porque determinan el comportamiento de los usuarios al interior de la red. Las marcas y empresas usan la segmentación en Facebook para aumentar la efectividad de la publicación entre su público objetivo.',
    },
    {
      termino: '<i>Status report</i>',
      significado:
        'Documento informativo del estado de los planes de acción en las diferentes estrategias de <i>social media</i>, que incluye datos cuantitativos y cualitativos provenientes del resultado de la analítica web.',
    },
    {
      termino: '<i>Storytelling</i>',
      significado:
        'Técnica de <i>marketing</i> cuyo objetivo es conectar y vincular al usuario directamente con el contenido contado en forma de historia gráfica o audiovisual.',
    },
    {
      termino: 'TT',
      significado:
        'Son las siglas de Trending Topic; es una de las abreviaturas más famosas de Twitter para asignar los temas más importantes e influyentes del momento. Se pueden ver los Trending Topic según el país o la ciudad a través de http://www.trends 24.in.',
    },
    {
      termino: 'Viral',
      significado:
        'Un contenido viral, del tipo que sea, es aquel que se difunde y se comparte como la pólvora entre diferentes usuarios y a través de diferentes medios y redes sociales. El objetivo de cualquier campaña de <i>marketing</i> es “viralizar” sus contenidos.',
    },
    {
      termino: '<i>Webinars</i>',
      significado:
        'También llamados <i>webminars</i>, son eventos o conferencias que tienen lugar en el medio <i>online</i>. Es una muy buena estrategia para enganchar nuevos seguidores en las redes sociales.',
    },
    {
      termino: '<i>Youtubers</i>',
      significado:
        'Son las personas que crean y suben videos a YouTube y han convertido su canal en algo más que una afición. El <i>Youtuber</i> gana dinero por los anuncios de los videos o por mostrar productos patrocinados.',
    },
  ],
  referencias: [
    {
      referencia:
        'Baym, N. (2005). Dimensiones intergrupales de Internet. Comunicación intergrupal: Múltiples perspectivas, p. 213-238.',
    },
    {
      referencia:
        'Jiménez, O. y Martínez, R. (2002). Comunidades virtuales: un modelo de aprendizaje para la nueva economía. Formación XXI, 3, p. 29-31.',
    },
    {
      referencia:
        'Jonassen, D., Carr, C. y Yueh, H. (1998). Las computadoras como herramientas mentales para involucrar a los estudiantes en el pensamiento crítico. Tech Trends , 43 (2), p. 24-32.',
    },
    {
      referencia:
        'Kotler, P. (1967). Marketing management: analysis, planning and control. Prentice Hall.',
    },
    {
      referencia:
        'Maya, I. (2004). Sentido de comunidad y potenciación comunitaria. Apuntes de Psicología, 22 (2), p. 187-211.',
    },
    {
      referencia:
        'Pazos, M. y otros. (2002). Comunidades virtuales: de las listas de discusión a las comunidades de aprendizaje.',
    },
    {
      referencia: 'Pierre, L. (2010). Cibercultura. Editora 34.',
    },
    {
      referencia:
        'Polo, M. (1998). Las comunidades educativas. Aldea Educativa.',
      link: 'http://www.aldeaeducativa.com/',
    },
    {
      referencia:
        'Salinas, J. (2003). Acceso a la información y aprendizaje informal en Internet. Comunicar Revista Científica Iberoamericana de Comunicación y Educación.',
    },
    {
      referencia:
        'Segura, M. (2015). Plataformas educativas y redes docentes. Los desafíos de las TIC para un cambio educativo, OEI. Fundación Santillana.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gustavo Navarro Macias',
        cargo: 'Experto temático',
        centro: 'Centro CIES Norte de Santander',
      },
      {
        nombre: 'Adriana López',
        cargo: 'Diseñadora instruccional',
        centro: 'Regional Distrito Capital - Centro de Gestión Industrial',
      },
      {
        nombre: 'Carolina Coca Salazar ',
        cargo: 'Asesora metodológica',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'Julia Isabel Roberto',
        cargo: 'Correctora de estilo',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Blanca Flor Tinoco Torres',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Edward Leonardo Pico Cabra',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
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
