import Project from '../../containers/project/Project';

const Axotools_v1 = () => {
    const description = "Axotools V1 est la première version aboutie du projet Axotools, seulement le framework Symfony s'est retrouvé inadapté à notre solution, c'est pourquoi un autre projet porte le même nom avec des technos differentes. Axotools V1 est une solution digitale type CRM pour les associations E-Sportives présente sous forme d'application web. L’objectif est de proposer une application qui permet de centraliser les données globales (joueurs, équipes, documents…), organiser des événements et créer des roles sur mesure afin de faciliter la gestion de la structure et de ses membres. Afin d'assurer l'analyse de ses données des KPI sont présentes sur le tableau de bord."
    const features = [
        "Inscription/Connexion",
        "Dashboard : KPI, graphs, Twitch",
        "Gestion des roles/droits sur mesure",
        "Traduction avec i18n",
        "CRUD sur chaque entité",
        "notifications"
    ]
    const technos = [
        {
            label: "Symfony",
            icon: "../img/skills/frameworks/symfony_icon.png"
        },
        {
            label: "Postgres",
            icon: "../img/skills/databases/pgsql_icon.png"
        }
    ]
    const screens = [
        "../img/project_screens/axotools/site-vitrine.png"
    ]

    return (
        <div>
            <Project
                name="Axotools v1"
                description={description}
                features={features}
                screens={screens}
                technos={technos}
                color="#10b36c"
            />
        </div>
    )
}

export default Axotools_v1;