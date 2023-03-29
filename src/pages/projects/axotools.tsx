import Project from '../../containers/project/Project';

const Axotools = () => {
    const description = "Axotools est une solution digitale type CRM pour les associations E-Sportives. Découpé en 2 parties, d'un coté le site vitrine et de l'autre l'application web. L’objectif est de proposer  une application qui permet de centraliser les données globales (joueurs, équipes, documents…), organiser des événements et créer des roles sur mesure afin de faciliter la gestion de la structure et de ses membres. Afin d'assurer l'analyse de ses données des KPI sont présentes sur le tableau de bord."
    const features = [
        "Inscription/Connexion",
        "Abonnement payant par Stripe",
        "Dashboard précis : KPI, graphs, Twitch",
        "Gestion des roles/droits sur mesure",
        "Double authentification",
        "Traduction avec i18n",
        "CRUD sur chaque entité"
    ]
    const technos = [
        {
            label: "ApiPlatform",
            icon: "../img/skills/frameworks/apiplatform_icon.png"
        },
        {
            label: "React",
            icon: "../img/skills/frameworks/react_icon.png"
        },
        {
            label: "POstgres",
            icon: "../img/skills/databases/pgsql_icon.png"
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
                name="Axotools"
                description={description}
                features={features}
                screens={screens}
                technos={technos}
                color="#10b36c"
            />
        </div>
    )
}

export default Axotools;