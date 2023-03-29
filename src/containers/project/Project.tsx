import * as React from 'react';
import styles from '@/styles/containers/Project.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';
import skills from '../skills/skills.json';

export default function Project({name, description, features, screens, technos, color="red", isMobile=false}) {

  return (
    <div className={styles.project}>
      <Link className={styles.back_button} href="/">
        <ArrowBackIcon/>
      </Link>
      <h1>{name}</h1>
      <div className={styles.skills_list}>
         {
           technos.map(techno => {
             return (
               <div className={styles.skill_element}>
                 <img src={techno.icon} alt=""/>
                 <span>{techno.label}</span>
               </div>
             )
           })
         }
      </div>
      <div className={styles.context_project}>
        <div className={styles.description_project}>
        <h3>Résumé</h3>
          <p>{description}</p>
        </div>
        <div className={styles.features_project}>
          <h3>Quelques fonctionnalités</h3>
          {
            features.map(feature => {
              return (
                <span>- {feature}</span>
              )
            })
          }  
        </div>
      </div>
      <div style={{backgroundColor: color}} className={!isMobile ? styles.screen_project : styles.screen_project_mobile}>
          {
            screens.map(screen => {
              return (
                <img src={screen} alt=""/>
              )
            })
          }
      </div>
    </div>
  );
}