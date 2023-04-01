import * as React from 'react';
import CustomAccordion from '../../components/accordion/Accordion';
import styles from '@/styles/containers/Presentation.module.scss';
import Carousel from 'react-material-ui-carousel'
import { Paper, Button } from '@mui/material';
import RandomIcon from '@mui/icons-material/ArrowBack';

export default function Parcours() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const displayCarousel = (img) => {
    return (
      <div>
        {img}
      </div>
    )
  }

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <div className={styles.presentation}>
        <div className={styles.presentation_text}>
          <p>Je doute que vous soyez passé à coté du titre juste au dessus mais je me présente, je m'appelle Maxime et j'ai 24 ans.</p>
          <p>
            Mis à part l'informatique, j'aime jouer au basket, dessiner, jouer aux jeux vidéos, voyager, innover et bien entendu passer du temps avec les personnes que j'aime.
            De temps en temps je test la sécurité des applications pour ma satisfaction personnel puis j'en informe le propriétaire.
            <br/>
            Lorsque j'ai une idée de projet (manuel ou informatique) je vérifie la faisabilité et je me lance.
          </p>
          <p>
          L'esprit d'équipe est une valeur essentielle pour moi. J'aime apprendre des autres, apprendre aux autres mais surtout cette sensation qu'un projet évolue grace à l'effort collectif.
          </p>
        </div>
        <div className={styles.presentation_carousel}>
          <Carousel
            NextIcon={<RandomIcon/>}
            PrevIcon={<RandomIcon/>}
          >
            {
                [
                  "../img/wallpaper.jpg",
                  "../img/project_screens/axotools/site-vitrine.png",
                  "../img/project_screens/bimind/bimind_background.png"
                ].map( (img) => {
                  return (
                    <div className={styles.carousel_element}>
                      <img src={img} alt="" />
                    </div>
                  )
                } )
            }
          </Carousel>
        </div>
        {/* photoos : Vacances islande *2 / logo / dessin /  */}
      </div>
    </div>
  );
}