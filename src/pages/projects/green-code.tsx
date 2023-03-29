import Project from '../../containers/project/Project';

const GreenCode = () => {
    const description = "L'objectif de ce projet était de nous initier à l'écologie et économie des ressources d'une application. Nous avons donc développé cette application dans un esprit d'éco conception en suivant des conseils/normes vu en cours."
    const features = [
        "Optimisation des ressources d'affichage des images",
        "Barre de recherche avec debounce",
        "Utilisation du cache navigateur avec e-tag",
        "Utilisation du cache serveur",
        "Achat d'un serveur avec normes ISO 500001",
        "Tests de performance K6",
        "Utilisation de 3 outils de benchemark d'éco-conception"
    ]
    const technos = [
        {
            label: "Nodejs",
            icon: "../img/skills/frameworks/nodejs_icon.png"
        },
        {
            label: "React",
            icon: "../img/skills/frameworks/react_icon.png"
        },
        {
            label: "Mongodb",
            icon: "../img/skills/databases/mongodb_icon.png"
        }
    ]
    const screens = [
        "../img/project_screens/axotools/site-vitrine.png",
        "../img/project_screens/axotools/login.png",
        "../img/project_screens/axotools/formules.png",
        "../img/project_screens/axotools/dashboard_2.png",
        "../img/project_screens/axotools/dashboard_3.png",
        "../img/project_screens/axotools/account_3.png",
        "../img/project_screens/axotools/profiles_2.png",
        "../img/project_screens/axotools/postulate_5.png",
        "../img/project_screens/axotools/postulate_2.png",
        "../img/project_screens/axotools/member.png"
    ]

    return (
        <div>
            <Project
                name="GreenCode"
                description={description}
                features={features}
                screens={screens}
                technos={technos}
                color="#10b36c"
            />
        </div>
    )
}

export default GreenCode;