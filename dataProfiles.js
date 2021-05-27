// Sobre mi
export const aboutMe = {
    imgProfile: "https://avatars.githubusercontent.com/u/28915377?s=400&u=7e1a8f79546e00914598558913ce5d04045fd7dc&v=4",
    fullName: "Duvan Felipe Correa Ardila",
    smallName: "Duvan Correa",
    actualProfession: "Estudiante de ING Informática",
    smallDescripion: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit semper ridiculus, aptent turpis praesent vehicula pretium rhoncus sagittis convallis dignissim erat, nostra arcu nec tristique dis parturient nibh condimentum vivamus.",
    fullDescription: "Lorem ipsum dolor sit amet consectetur adipiscing elit velit semper ridiculus, aptent turpis praesent vehicula pretium rhoncus sagittis convallis dignissim erat, nostra arcu nec tristique dis parturient nibh condimentum vivamus. Lorem ipsum dolor sit amet consectetur adipiscing elit velit semper ridiculus, aptent turpis praesent vehicula pretium rhoncus sagittis convallis dignissim erat, nostra arcu nec tristique dis parturient nibh condimentum vivamus. Lorem ipsum dolor sit amet consectetur adipiscing elit velit semper ridiculus, aptent turpis praesent vehicula pretium rhoncus sagittis convallis dignissim erat, nostra arcu nec tristique dis parturient nibh condimentum vivamus.",
}

// Estas son las skill actuales
export const skills = [
    { nameSkill: "skill 1", percentage: "10%" },
    { nameSkill: "skill 2", percentage: "20%" },
    { nameSkill: "skill 3", percentage: "30%" },
    { nameSkill: "skill 4", percentage: "40%" },
    { nameSkill: "skill 5", percentage: "50%" }
]

// Estas son mis experiencias
export const experiences = [
    { nameExp: "Desarropllador web 1", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor lectus quisque scelerisque dictumst hac, diam ante nostra sodales tristique vestibulum.", time: "2000 - 2010" },
    { nameExp: "Desarropllador web 2", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor lectus quisque scelerisque dictumst hac, diam ante nostra sodales tristique vestibulum.", time: "2000 - 2010" },
    { nameExp: "Desarropllador web 3", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor lectus quisque scelerisque dictumst hac, diam ante nostra sodales tristique vestibulum.", time: "2000 - 2010" },
    { nameExp: "Desarropllador web 4", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor lectus quisque scelerisque dictumst hac, diam ante nostra sodales tristique vestibulum.", time: "2000 - 2010" },
    { nameExp: "Desarropllador web 5", description: "Lorem ipsum dolor sit amet consectetur adipiscing elit, tortor lectus quisque scelerisque dictumst hac, diam ante nostra sodales tristique vestibulum.", time: "2000 - 2010" }
]

// mis proyectos 
export const proyects = [
    {
        id: 0,
        title: "Veterinaria App",
        img: "/images/proyect-1/1.png",
        imgs: [{
            id: 0,
            route: "/images/proyect-1/1.png",
            description: "Descripcion de la imagen1"
        },
        {
            id: 1,
            route: "/images/proyect-1/2.png",
            description: "Descripcion de la imagen2"
        },
        {
            id: 2,
            route: "/images/proyect-1/3.png",
            description: "Descripcion de la imagen2"
        }],
        technologies: [
            { name: "JavaScript", icon: "/images/icons/javascripticon.png" },
            { name: "HTML", icon: "/images/icons/HTMLicon.png" },
            { name: "CSS", icon: "/images/icons/CSSicon.png" }
        ],
        utilities: [
            { utily: "Crear una lista de mascotas con su nombre, tipo de mascota y propietario, también podemos crear y eliminar mascotas de esta lista" },
            { utily: "Crear una lista de profesionales veterinarios con su nombre y apellido, id y país, también podemos crear y eliminar profesionales de esta lista" },
            { utily: "Crear una lista de propietarios de mascotas con su nombre y apellido, id y país, también podemos crear y eliminar propietarios de esta lista" }
        ],
        description: "Gestionar lista de mascotas, propietarios y profesionales veterinarios",
        cmpleteDescription: "Pequeña aplicación para gestionar una lista de mascotas de una veterinaria, donde podremos agregar, eliminar y hasta editar las diversas mascotas, propietarios y profesionales veterinarios. Este proyecto se hizo en un bootcamp que realizo el desarrollador Camilo Montoya.",
        url: "proyects/0",
        gitHubProyect: "https://github.com/DuvanCorrea/appVet"
    },
    {
        id: 1,
        title: "Propuesta de novi@",
        img: "/images/proyect-2/1.png",
        imgs: [{
            id: 0,
            route: "/images/proyect-2/1.png",
            description: "Descripcion de la imagen1"
        },
        {
            id: 1,
            route: "/images/proyect-2/2.png",
            description: "Descripcion de la imagen2"
        },
        {
            id: 2,
            route: "/images/proyect-2/3.png",
            description: "Descripcion de la imagen2"
        },
        {
            id: 3,
            route: "/images/proyect-2/4.png",
            description: "Descripcion de la imagen2"
        }],
        technologies: [
            { name: "JavaScript", icon: "/images/icons/javascripticon.png" },
            { name: "HTML", icon: "/images/icons/HTMLicon.png" },
            { name: "CSS", icon: "/images/icons/CSSicon.png" }
        ],
        utilities: [
            { utily: "Hacer propuesta de novi@s sin posibilidad de decir " + `"NO"` },
            { utily: "Diversión" },
        ],
        description: "Divertida propuesta de novi@s",
        cmpleteDescription: "Aplicación sencilla para hacer una propuesta de noviazgo, no existe la posibilidad de pulsar el botón NO, ya que este se mueve cada vez que acercamos el cursor, obligando así a presionar el botón SI, esto lo que hace es mostrar una imagen que se guardó en Google Drive y se accede a ella por medio de la URL publica, está divertido. ",
        url: "proyects/1",
        gitHubProyect: "https://github.com/DuvanCorrea/love-me"
    },
]


// technologies: [
//     { name: "JavaScript", icon: "/images/icons/javascripticon.png" },
//     { name: "NodeJS", icon: "/images/icons/nodeJSicon.png" },
//     { name: "ReactJS", icon: "/images/icons/reactJSicon.png" },
//     { name: "HTML", icon: "/images/icons/HTMLicon.png" },
//     { name: "CSS", icon: "/images/icons/CSSicon.png" }

// ],