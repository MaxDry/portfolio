import Project from '../../containers/project/Project';

const KcorpMatches = () => {
    const description = "Le projet Kcorp Matches permet aux fans de Kcorp d'être au courant des prochains matchs de l'équipe. Au départ pour récupérer mes données j'avais effectué du scrapping sur les pages de Liquipedia mais j'avais l'impression qu'à tout moment mon script pouvait s'arréter de fonctionner. Je me suis alors tourné vers une API classique"
    const features = [
        "Scrapping de donnés",
        "Appels API",
        "Liste des matchs triés par date",
        "Ajout des matchs sur son calendrier Google/Apple/etc..."
    ]
    const technos = [
        {
            label: "Nextjs",
            icon: "../img/skills/frameworks/nextjs_icon.webp"
        }
    ]
    const screens = [
        "../img/project_screens/axotools/site-vitrine.png"
    ]

    return (
        <div>
            <Project
                name="Kcorp Matches"
                description={description}
                features={features}
                screens={screens}
                technos={technos}
            />
        </div>
    )
}

export default KcorpMatches;