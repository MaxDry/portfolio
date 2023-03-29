import Project from '../../containers/project/Project';

const Tokite = () => {
    const description = "Tokite est une application qui vient supporter le principe de guilde et d'obtention des pépites(ressources) dans le jeu Dofus. Les joueurs ont eux mêmes instaurés des règles d'actions(activités) -> récompenses(pépites) dans le but d'inciter les membres d'une guilde à participer à l'effort collectif. Les pépites sont ensuites convertis en Kamas (monnaie du jeu). Jusqu'alors, ce concept était géré avec un tableau excel dans chaque guidle, j'ai décidé d'en faire une application web pour optimiser le concept."
    const features = [
        "Inscription/Connexion",
        "Calculs et historiques de transactions",
        "Conversions",
        "CRUD pépites",
        "CRUD guilde",
        "CRUD Transactions",
        "CRUD de ses membres"
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
                name="Tokite"
                description={description}
                features={features}
                screens={screens}
                technos={technos}
                color="#10b36c"
            />
        </div>
    )
}

export default Tokite;