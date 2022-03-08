// Sobre mi
export const aboutMe = {
	imgProfile:
		"https://avatars.githubusercontent.com/u/28915377?s=400&u=7e1a8f79546e00914598558913ce5d04045fd7dc&v=4",
	fullName: "Duvan Felipe Correa Ardilaa",
	smallName: "Duvan Correa",
	actualProfession: "Estudiante de ING Informática - Desarrollador de software",
	smallDescripion:
		"Actualmente con 25 años de esas soy un apasionado por el desarrollo de sofware y automatizacion de proceso, actualmente estudiante de 8vo semestre pero con los conocimientos necesarios para afrontar cualquier reto y como todos los de mi campo \n ¡Nos encantan solucionar problemas!",
	fullDescription:
		"Apasionado por el desarrollo de sofware y automatizacion de proceso, actualmente estudiante de 8vo semestre pero con los conocimientos necesarios para afrontar cualquier reto y como todos los de mi campo ¡Nos encantan solucionar problemas!",
};

// Estas son las skill actuales
export const skills = [
	{ nameSkill: "JavaScrip", percentage: "60%" },
	{ nameSkill: "HTML", percentage: "60%" },
	{ nameSkill: "CSS", percentage: "40%" },
	{ nameSkill: "ReactJS", percentage: "60%" },
	{ nameSkill: "NodeJS", percentage: "50%" },
	{ nameSkill: "Python", percentage: "35%" },
	{ nameSkill: "Java", percentage: "50%" },
	{ nameSkill: "MySQL", percentage: "35%" },
	{ nameSkill: "MongoDB", percentage: "23%" },
	{ nameSkill: "PostgreSQL", percentage: "30%" },
];

// Estas son mis experiencias
export const experiences = [
	{
		nameExp: "Desarrollador de software",
		description:
			"El primer trabajo formal como desarrollador de software gracias a la empresa HyG Consultores, donde me encargo del desarrollo de diferentes aplicaciones con un enfoque en sistemas de información geográfica, en los proyectos más destacados que he trabajado es en el visor geográfico de mapas Medellín https://www.medellin.gov.co/mapgis9/mapa.jsp?aplicacion=1&css=css/app_mapas_medellin.css o tambien llamado mapgis9 que es uno de los programas estrellas de la empresa, en este puesto he estado en desarrollo tanto de la parte visual como la parte del backend y base de datos donde mejore mis habilidades con bases de datos relacionales, JAVA, Adonis JS entre otros.",
		time: "2021 - Actualmente",
	},
	{
		nameExp: "Página web - empresa de transporte",
		description:
			"Desarrolle un página web para la empresa Forzakargo donde anuncia sus servicios y muestra las ubicaciones de sus oficinas y cobertura, adicional sirve como landing page o página de aterrizaje, el desarrollo fue solo frontend y se utilizaron tecnologías como JavaScrip, React JS, Scss y por supuesto html. https://forzakargo-prueba.000webhostapp.com/ (Demo)",
		time: "2021 - 2022",
	},
	{
		nameExp: "Desarrollo de un sistema posventa",
		description:
			"Se me encomendó la creación de un sistema posventa para una ferretería, este se elaboró desde el backend hasta el frontend, se tenía que gestionar el inventario, alertar sobre stock vacíos, generar e imprimir facturas por medio de una impresora de ticket entre muchas otras funciones, fue hecho con ReactJS, NodeJS y MySql. Fue el primer trabajo freelance y lo hicimos entre dos personas en un periodo muy corto de tiempo mientras estábamos en la universidad el resultado fue aceptable y funcional.",
		time: "2020 - 2020",
	},
];

// mis proyectos
export const proyects = [
	{
		id: 10,
		title: "Gestor de materiales de estudio para docentes",
		img: "/images/proyect-11/1.png",
		imgs: [
			{
				id: 0,
				route: "/images/proyect-11/1.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 1,
				route: "/images/proyect-11/2.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 2,
				route: "/images/proyect-11/3.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 3,
				route: "/images/proyect-11/4.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 4,
				route: "/images/proyect-11/5.png",
				description: "Descripcion de la imagen1",
			},
			,
		],
		technologies: [
			{ name: "JavaScript", icon: "/images/icons/javascripticon.png" },
			{ name: "HTML", icon: "/images/icons/HTMLicon.png" },
			{ name: "CSS", icon: "/images/icons/CSSicon.png" },
			{ name: "Materialize", icon: "/images/icons/materializeicon.png" },
		],
		utilities: [
			{
				utily:
					"Permite a los docentes autentificarse mediante correo y contraseña.",
			},
			{ utily: "Los docentes pueden subir su material de estudio en PDF." },
			{
				utily:
					"Los docentes pueden agregar reconocimientos que les hayan hecho durante su carrera.",
			},
			{
				utily:
					"Los usuarios no necesitan autentificación y pueden descargar el material de estudio en PDF mediante un enlace dinámico.",
			},
			{
				utily:
					"Cada perfil de docente tiene su propio enlace y se puede visualizar sin estar autentificado.",
			},
			{ utily: "Visualizar los archivos PDF sin necesidad de descargarlos." },
		],
		description:
			"Gestor de material de estudio en formato PDF con links dinámicos.",
		cmpleteDescription:
			"Aplicación destinada a docente donde puede subir al servidor el material de estudio en formato PDF, este material puede ser descargado por cualquier usuario por medio de un enlace dinámico, además de tener una previsualización sin descargarlo, el docente también puede agregar reconocimientos y tener un enlace propio a su perfil, el cual puede ser visitado por cualquier usuario que lo posea, por último cabe destacar que se usaron servicios gratuitos para el despliegue, en el caso del servidor se usó Heroku y es allí donde se guardan los documentos, y para la base de datos se usó remotemysql.",
		url: "proyects/10",
		gitHubProyect: "https://github.com/DuvanCorrea/frontend-csw1",
	},
	{
		id: 2,
		title: "Generador de pedidos v1",
		img: "/images/proyect-3/1.png",
		imgs: [
			{
				id: 0,
				route: "/images/proyect-3/1.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 1,
				route: "/images/proyect-3/2.png",
				description: "Descripcion de la imagen2",
			},
			{
				id: 2,
				route: "/images/proyect-3/3.png",
				description: "Descripcion de la imagen2",
			},
			{
				id: 3,
				route: "/images/proyect-3/4.png",
				description: "Descripcion de la imagen2",
			},
			{
				id: 4,
				route: "/images/proyect-3/5.png",
			},
		],
		technologies: [
			{ name: "JavaScript", icon: "/images/icons/javascripticon.png" },
			{ name: "HTML", icon: "/images/icons/HTMLicon.png" },
			{ name: "CSS bootstrap", icon: "/images/icons/CSSBootstrapicon.png" },
		],
		utilities: [
			{
				utily:
					"Generar pedido de una prenda en específico, con su talla, género, descripción y adjuntar imagen de la prenda.",
			},
			{ utily: "Editar prenda agregada" },
			{ utily: "Eliminar prenda agregada" },
			{ utily: "Generar un archivo PDF con las prendas agregadas" },
		],
		description: "Generador de pedidos para empresa de confeccion",
		cmpleteDescription:
			"Este es el prototipo de un generador de pedidos para una empresa de confección de prendas de vestir, se puede encontrar los campos mínimos que se necesitan a la hora de generar un pedido, también se podrá gestionar esta lista editando o eliminando las prendas, por último se genera un PDF con los pedidos para su posterior elaboración (La empresa en la que me inspire les da los pedidos a los operarios en hojas impresas, por ese motivo el sistema funciona de esta forma).",
		url: "proyects/2",
		gitHubProyect: "https://github.com/DuvanCorrea/Generar-Pedido-PDF-v1",
	},
	{
		id: 3,
		title: "Caja de devolución de dinero",
		img: "/images/proyect-4/1.png",
		imgs: [
			{
				id: 0,
				route: "/images/proyect-4/1.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 1,
				route: "/images/proyect-4/2.png",
				description: "Descripcion de la imagen2",
			},
			{
				id: 2,
				route: "/images/proyect-4/3.png",
				description: "Descripcion de la imagen2",
			},
			{
				id: 3,
				route: "/images/proyect-4/4.png",
				description: "Descripcion de la imagen2",
			},
		],
		technologies: [{ name: "Python", icon: "/images/icons/Pythonicon.png" }],
		utilities: [
			{ utily: "Administra la cantidad de billetes que se tienen en caja." },
			{ utily: "Actualizar la cantidad de billetes en caja." },
			{
				utily:
					"Calcular cuantos billetes y de que denominación son necesarios para devolver dinero.",
			},
		],
		description: "Gertor de devolucion de dinero por denominacion de billetes",
		cmpleteDescription:
			"Este es una pequeña herramienta que nos permite gestionar la cantidad de billetes por denominación que tenemos en la caja registradora, también nos calcula con que denominación de billetes debemos hacer la respectiva devolución de dinero necesaria, está hecha en COP y fue echo para un examen de algoritmos.",
		url: "proyects/3",
		gitHubProyect:
			"https://github.com/DuvanCorrea/Caja-de-devolucion-de-dinero",
	},
	{
		id: 4,
		title: "Plantilla para gestión de seguidores",
		img: "/images/proyect-5/1.png",
		imgs: [
			{
				id: 0,
				route: "/images/proyect-5/1.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 1,
				route: "/images/proyect-5/2.png",
				description: "Descripcion de la imagen2",
			},
		],
		technologies: [
			{ name: "JavaScript", icon: "/images/icons/javascripticon.png" },
			{ name: "HTML", icon: "/images/icons/HTMLicon.png" },
			{ name: "CSS", icon: "/images/icons/CSSicon.png" },
		],
		utilities: [{ utily: "Ninguna" }],
		description:
			"Plantilla para gestionar la cantidad de seguidores en redes sociales.",
		cmpleteDescription:
			"Pequeña plantilla para bisualizar en una sola pantalla los seguidores en diversas redes socuales, se hizo con la finalidad de practicar react y css, no tiene un uso practico (El modo dark funciona con el tema que tenga el navegar)",
		url: "proyects/4",
		gitHubProyect:
			"https://github.com/DuvanCorrea/curso_leonidas_react_social_media",
	},
	{
		id: 5,
		title: "Servidor proyecto " + `"Veterinaria APP"`,
		img: "/images/proyect-6/1.png",
		imgs: [
			{
				id: 0,
				route: "/images/proyect-6/1.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 1,
				route: "/images/proyect-6/2.png",
				description: "Descripcion de la imagen2",
			},
			{
				id: 0,
				route: "/images/proyect-6/3.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 1,
				route: "/images/proyect-6/4.png",
				description: "Descripcion de la imagen2",
			},
		],
		technologies: [
			{ name: "JavaScript", icon: "/images/icons/javascripticon.png" },
			{ name: "NodeJS", icon: "/images/icons/nodeJSicon.png" },
			{ name: "MongoDB", icon: "/images/icons/mongoDBicon.png" },
		],
		utilities: [
			{ utily: "Agregar mascotas a una base de datos hecha en MongoDB." },
			{ utily: "Listar las mascotas agragadas a la base de datos MongoDB." },
			{ utily: "Mostrar una sola mascota por id." },
		],
		description: "Servidor para la aplicación Veterinaria app.",
		cmpleteDescription:
			"Este es uno de mis primeros servidores funcionales, se logra hacer conexión con una base de datos hecha en MongoDB por medio de una dependencia llamada mongoose, también destaco que el servidor está hecho en NodeJS.",
		url: "proyects/5",
		gitHubProyect: "https://github.com/DuvanCorrea/NodeJS_MongoDB_Mogoose",
	},
	{
		id: 7,
		title: "Servidor de control de ventas",
		img: "/images/proyect-8/1.png",
		imgs: [
			{
				id: 0,
				route: "/images/proyect-8/1.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 1,
				route: "/images/proyect-8/2.png",
				description: "Descripcion de la imagen2",
			},
			{
				id: 2,
				route: "/images/proyect-8/3.png",
				description: "Descripcion de la imagen1",
			},
		],
		technologies: [
			{ name: "JavaScript", icon: "/images/icons/javascripticon.png" },
			{ name: "NodeJS", icon: "/images/icons/nodeJSicon.png" },
			{ name: "MySql", icon: "/images/icons/MySQLicon.png" },
			{ name: "ExpressJS", icon: "/images/icons/Expressicon.png" },
		],
		utilities: [
			{ utily: "Agregar eliminar y editar productos del inventario." },
			{ utily: "Agregar y eliminar personas de la base de datos." },
			{ utily: "Agregar y eliminar categorías para los productos." },
			{
				utily:
					"Generar Ventas con los productos existentes disminuyendo el stock de cada uno y guardando toda la información en la base de datos.",
			},
		],
		description:
			"Gestor de ventas para prueba tecnica para el puesto backend junior.",
		cmpleteDescription:
			"En definitiva una de los mejores servidores que he hecho en tan corto tiempo (Una noche), este servidor fue hecho para un prueba técnica para el puesto de backend junior, consiste en un pequeño sistema de gestión de productos donde podremos agregar productos categorias y personas al igual que eliminarlos, también podemos generar una venta con los productos y clientes disponibles, solo los que están disponibles, ya que si se intenta generar una venta con productos que no están disponibles el sistema nos dirá que no hay stock suficiente se pueden agregar la cantidad de productos necesarios por cliente y estos serán descontados del stock.\n Este servidor esta conectado a una base de datos MySQL, el script de generacion se encuentra en GitHub.",
		url: "proyects/7",
		gitHubProyect: "https://github.com/DuvanCorrea/prueba-tecnica",
	},
	{
		id: 8,
		title: "Calculadora de media y desviación estándar",
		img: "/images/proyect-9/1.png",
		imgs: [
			{
				id: 0,
				route: "/images/proyect-9/1.png",
				description: "Descripcion de la imagen1",
			},
		],
		technologies: [
			{ name: "JavaScript", icon: "/images/icons/javascripticon.png" },
			{ name: "CSS bootstrap", icon: "/images/icons/CSSBootstrapicon.png" },
			{ name: "HTML", icon: "/images/icons/HTMLicon.png" },
		],
		utilities: [
			{
				utily:
					"Calcular media y desviación estándar de los números que ingresemos.",
			},
		],
		description: "Calcular media y desviacion estandar.",
		cmpleteDescription:
			"Una pequeña herramienta hecha para la clase de desarrollo de software la cual nos permite ver la media y desviación estándar de una sucesión de números ingresados.",
		url: "proyects/8",
		gitHubProyect: "https://github.com/DuvanCorrea/calcular-media-y-desvicion",
	},
	{
		id: 9,
		title:
			"Servidor para el proyecto " +
			`"Gestor de materiales de estudio para docentes"`,
		img: "/images/proyect-10/1.png",
		imgs: [
			{
				id: 0,
				route: "/images/proyect-10/1.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 1,
				route: "/images/proyect-10/2.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 2,
				route: "/images/proyect-10/3.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 3,
				route: "/images/proyect-10/4.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 4,
				route: "/images/proyect-10/5.png",
				description: "Descripcion de la imagen1",
			},
			{
				id: 5,
				route: "/images/proyect-10/6.png",
				description: "Descripcion de la imagen1",
			},
		],
		technologies: [
			{ name: "JavaScript", icon: "/images/icons/javascripticon.png" },
			{ name: "NodeJS", icon: "/images/icons/nodeJSicon.png" },
			{ name: "ExpressJS", icon: "/images/icons/Expressicon.png" },
			{ name: "MySql", icon: "/images/icons/MySQLicon.png" },
		],
		utilities: [
			{
				utily:
					"Recibe materiales de estudio en formato PDF creados por los docentes y los almacena en el servidor, aunque la información y ubicación de este PDF se guarda en una base de datos MySql.",
			},
			{
				utily:
					"Recibe reconocimientos de los docentes y los almacena en una base de datos MySQL.",
			},
			{ utily: "Recibe peticiones de solo el PDF por aparte." },
		],
		description: "Servidor para gestionar material de estudio de los docentes.",
		cmpleteDescription:
			"Servidor para un proyecto el cual consiste en gestionar el material de estudio que crean los docentes para sus alumnos, el sistema permite crear estos materiales recibiendo unos datos mínimos y un archivo en PDF, el cual guarda en el servidor para su posterior descarga, también permite agregar y eliminar reconocimientos de los profesores. Este sistema se conecta a una base de datos MySql la cual está alojada en un servicio gratuito de internet, pero puede ser modificado para que funcione de forma local, además el script de la base de datos está adjunto en el código de GitHub.",
		url: "proyects/9",
		gitHubProyect: "https://github.com/DuvanCorrea/backend-csw1",
	},
];

// technologies: [
//     { name: "JavaScript", icon: "/images/icons/javascripticon.png" },
//     { name: "NodeJS", icon: "/images/icons/nodeJSicon.png" },
//     { name: "ReactJS", icon: "/images/icons/reactJSicon.png" },
//     { name: "HTML", icon: "/images/icons/HTMLicon.png" },
//     { name: "CSS", icon: "/images/icons/CSSicon.png" },
//     { name: "CSS bootstrap", icon: "/images/icons/CSSBootstrapicon.png" }
//     { name: "Python", icon: "/images/icons/Pythonicon.png" },
//     { name: "MySql", icon: "/images/icons/MySQLicon.png" },
//     { name: "ExpressJS", icon: "/images/icons/Expressicon.png" },
//     { name: "Materialize", icon: "/images/icons/materializeicon.png" },
// ],
