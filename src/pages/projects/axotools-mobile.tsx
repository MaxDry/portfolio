import Project from '../../containers/project/Project';

const AxotoolsMobile = () => {
    const description = "Axotools Mobile utilise les routes API de l'application Axotools Web. Cette application est actuellement disponible sur le Google Play Store. Elle permet essentiellement de pouvoir consulter l'activité de sa structure ou de ses candidatures."
    const features = [
        "Inscription/Connexion",
        "KPI, graphs",
        "Double authentification",
        "Postuler pour une équipe",
        "Constultation de toutes les entités"
    ]
    const technos = [
        {
            label: "ReactNative",
            icon: "../img/skills/frameworks/reactnative_icon.png"
        }
    ]
    const screens = [
        "../img/project_screens/axotools_mobile/homepage.jpg",
        "../img/project_screens/axotools_mobile/login.jpg",
        "../img/project_screens/axotools_mobile/register.jpg",
        "../img/project_screens/axotools_mobile/double_authentication.jpg",
        "../img/project_screens/axotools_mobile/dashboard_1.jpg",

        "../img/project_screens/axotools_mobile/dashboard_2.jpg",
        "../img/project_screens/axotools_mobile/members.jpg",
        "../img/project_screens/axotools_mobile/player.jpg",
        "../img/project_screens/axotools_mobile/teams.jpg",
        "../img/project_screens/axotools_mobile/postulate.jpg",
        "../img/project_screens/axotools_mobile/postulate_2.jpg",
        "../img/project_screens/axotools_mobile/candidatures.jpg",
    ]

    return (
        <div>
            <Project
                name="Axotools Mobile"
                description={description}
                features={features}
                screens={screens}
                technos={technos}
                color="#10b36c"
                isMobile={true}
            />
        </div>
    )
}

export default AxotoolsMobile;