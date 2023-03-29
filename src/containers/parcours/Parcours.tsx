import * as React from 'react';
import CustomAccordion from '../../components/accordion/Accordion';
import styles from '@/styles/containers/Parcours.module.scss';

export default function Parcours() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <div className={styles.parcours}>
        <div className={styles.parcours_content}>
          <h3>Ecole</h3>
          <CustomAccordion
            title={"Master Ingénierie du web"}
            time={"2 ans"}
            date={"2020-2022"}
            localisation={"ESGI, Paris"}
            logo={<img src="./img/esgi_logo.png" alt=""/>}
            technos={["Php", "Js", "NodeJs", "React", "Vue", "ReactNative", "Symfony 5", "Api Platform", "Python", "Django", "Go", "PWA", "Firebase", "ELK", "Tests de performance", "Tests unitaires et fonctionnels", "Déploiement continu", "Docker", "Trello", "Git"]}
          >
            <div>
              <span>J'ai réalisé durant cette formation plus de 20 projets différents 
                abordants différentes thématiques avec les technologies et outils cités ci-dessous. 
                Développement écologique, veille technologique, lois sur le droit informatique etc...</span>
            </div>
          </CustomAccordion>
          <CustomAccordion
            title={"Master Web"}
            time={"1 ans"}
            date={"2019-2020"}
            localisation={"CNAM Amiens, Senlis"}
            logo={<img src="./img/cnam_logo.png" alt=""/>}
            technos={["Php", "Js", "Css / Scss", "Html", "Symfony 4", "Angular 7", "Gestion de projet", "Trello", "Git"]}
          >
            <div>
              <span>Spécialisation dans le domaine web. Réalisation plusieurs projets dans un cadre Agile SCRUM.</span>
            </div>
          </CustomAccordion>
          <CustomAccordion
            title={"Licence Web"}
            time={"1 ans"}
            date={"2018-2019"}
            localisation={"CNAM Amiens, Senlis"}
            logo={<img src="./img/cnam_logo.png" alt=""/>}
            technos={["Php", "Js", "Css / Scss", "Html", "Symfony 4", "Angular 7", "Gestion de projet", "Trello", "Git"]}
          >
            <div>
              <span>Spécialisation dans le domaine web. Réalisation plusieurs projets dans un cadre Agile SCRUM.</span>
            </div>
          </CustomAccordion>
          <CustomAccordion
            title={"BTS SIO"} 
            time={"2 ans"}
            date={"2016-2018"}
            localisation={"Jean Rostand, Chantilly"}
            logo={<img src="./img/jeanRostand_logo.png" alt=""/>}
            technos={["C#", "SQL", "Php","Js", "Html", "Css", "Agile", "Ionic", "Symfony 2", "MVC Maison", "Création de MCD", "Git"]}
          >
            <div>
              <span>BTS Service Informatique aux Organisations de 2 ans durant lequel j'ai 
                découvert le développement au sens large. Développement d'application mobile, 
                web, lourde et apprentissage du monde orienté objet.</span>
            </div>
          </CustomAccordion>
        </div>
        <div className={styles.parcours_content}>
          <h3>Travail</h3>
          <CustomAccordion
            title={"Web Developpeur FullStack"} 
            time={"2 ans"}
            date={"2020-2022"}
            localisation={"Appn Digital, Paris"}
            logo={<img src="./img/appn_logo.png" alt=""/>}
            technos={["Php", "JS", "Symfony", "Vue", "React", "NodeJS", "Laravel", "Html", "Css", "Tailwind", "Docker", "Figma", "Trello", "Git"]}
          >
            <div>
              <span>J'étais appelé à travailler sur plusieurs projets parallèles en complète autonomie en fonction des demandes client. 
                J'ai donc travaillé sur du front, du back mais aussi de l'architecture projet avec les technologies citées ci-dessous. </span>
            </div>
          </CustomAccordion>
          <CustomAccordion
            title={"Web Developpeur"} 
            time={"4 mois"}
            date={"2020"}
            localisation={"Mental Works, Compiègne"}
            logo={<img src="./img/mental_works_logo.png" alt=""/>}
            technos={["Php", "Js", "Symfony 4", "Html", "Css", "Docker", "Vagrant", "Git"]}
          >
            <div>
              <span>
                J'ai développé plusieurs fonctionnalités Back et Front au sein d'applications Symfony 4.
              </span>
            </div>
          </CustomAccordion>
          <CustomAccordion
            title={"Web Developpeur"} 
            time={"9 mois"}
            date={"2018-2019"}
            localisation={"Oxylead, Paris"}
            logo={<img src="./img/oxylead_logo.png" alt=""/>}
            technos={["C#", "ASP.Net", "JS", "SQL"]}
          >
            <div>
              <span>
                J'ai réalisé essentiellement de la correction de bugs d'application ASP.NET et JS, de la rédaction de documents techniques et analyse de besoin auprès des clients
              </span>
            </div>
          </CustomAccordion>
          <CustomAccordion
            title={"Développeur"} 
            time={"1 mois"}
            date={"2017"}
            localisation={"Air Liquide, Paris"}
            logo={<img src="./img/air_liquid_logo.png" alt=""/>}
            technos={["HTML", "CSS", "Macros"]}
          >
            <div>
              <span>
                Rédaction de documents techniques, analyse de besoin et développement de scripts d'automatisation.
              </span>
            </div>
          </CustomAccordion>
        </div>
      </div>
    </div>
  );
}