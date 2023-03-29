import Project from '../../containers/project/Project';

const Todogift = () => {
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
            label: "Symfony",
            icon: "../img/skills/frameworks/symfony_icon.png"
        },
        {
            label: "Vue",
            icon: "../img/skills/frameworks/vue_icon.png"
        },
        {
            label: "Postgres",
            icon: "../img/skills/databases/pgsql_icon.png"
        }
    ]
    const screens = [
        "../img/project_screens/axotools/site-vitrine.png",
    ]

    return (
        <div>
            <Project
                name="Todogift"
                description={description}
                features={features}
                screens={screens}
                technos={technos}
            />
        </div>
    )
}

export default Todogift;