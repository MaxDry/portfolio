import Project from '../../containers/project/Project';

const Bimind = () => {
    const description = "Bimind est une application mobile disponible sur IOS et Android. C'est un réseau social dans lequel il est possible de s'ajouter en ami afin d'avoir à disposition la liste des anniversaires de ses proches."
    const features = [
        "Inscription/Connexion",
        "Oublie de mot de passe",
        "Barre de recherche globale et par ami",
        "Ajout/Suppression/Consultation d'un ami"
    ]
    const technos = [
        {
            label: "React Native",
            icon: "../img/skills/frameworks/reactnative_icon.png"
        },
        {
            label: "Nodejs",
            icon: "../img/skills/frameworks/nodejs_icon.png"
        },
        {
            label: "Postgres",
            icon: "../img/skills/databases/pgsql_icon.png"
        }
    ]
    const screens = [
        "../img/project_screens/bimind/screen1.jpg",
        "../img/project_screens/bimind/screen2.jpg",
        "../img/project_screens/bimind/screen3.jpg",
        "../img/project_screens/bimind/screen4.jpg",
        "../img/project_screens/bimind/screen5.jpg",
        "../img/project_screens/bimind/screen6.jpg"

    ]

    return (
        <div>
            <Project
                name="Bimind"
                color="#bc503d"
                description={description}
                features={features}
                screens={screens}
                technos={technos}
                isMobile={true}
            />
        </div>
    )
}

export default Bimind;