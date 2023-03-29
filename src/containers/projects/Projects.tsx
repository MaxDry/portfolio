import * as React from 'react';
import Card from '../../components/card/Card';
import styles from '@/styles/containers/Projects.module.scss';
import skills from '../skills/skills.json';

export default function Projects() {

  return (
    <div className={styles.projects}>
      <div className={styles.one}>
        <Card 
          name="Bimind"
          background="./img/project_screens/bimind/bimind_background.png"
          url="/projects/bimind"
          skills={[
            {
                label: "React Native",
                icon: "../img/skills/frameworks/reactnative_icon.png"
            },
            {
                label: "Nodejs",
                icon: "../img/skills/frameworks/nodejs_icon.png"
            }
        ]}
        />
      </div>
      <div className={styles.two}>
        <Card 
          name="Tokite"
          background="./img/wallpaper.jpg"
          url="/projects/tokite"
          skills={[
            {
                label: "React",
                icon: "../img/skills/frameworks/react_icon.png"
            },
            {
                label: "Nodejs",
                icon: "../img/skills/frameworks/nodejs_icon.png"
            }
        ]}
        />
      </div>
      <div className={styles.three}>
        <Card 
          name="Axotools v1"
          background="./img/wallpaper.jpg"
          url="/projects/axotools-v1"
          skills={[
            {
                label: "Symfony",
                icon: "../img/skills/frameworks/symfony_icon.png"
            }
        ]}
        />
      </div>
      <div className={styles.four}>
        <Card 
          name="Axotools"
          background="./img/project_screens/axotools/site-vitrine.png"
          url="/projects/axotools"
          skills={[
            {
                label: "React",
                icon: "../img/skills/frameworks/react_icon.png"
            },
            {
                label: "Api Platform",
                icon: "../img/skills/frameworks/apiplatform_icon.png"
            }
        ]}
        />
      </div>
      <div className={styles.five}>
        <Card 
          name="Axotools Mobile"
          background="./img/project_screens/axotools_mobile/wallpaper_project_mobile_axotools.png"
          url="/projects/axotools-mobile"
          skills={[
            {
                label: "React Native",
                icon: "../img/skills/frameworks/reactnative_icon.png"
            }
        ]}
        />
      </div>=
      <div className={styles.six}>
        <Card 
          name="GreenCode"
          background="./img/wallpaper.jpg"
          url="/projects/green-code"
          skills={[
            {
                label: "React",
                icon: "../img/skills/frameworks/react_icon.png"
            },
            {
                label: "Nodejs",
                icon: "../img/skills/frameworks/nodejs_icon.png"
            }
        ]}
        />
      </div>
      <div className={styles.seven}>
        <Card 
          name="TodoGift"
          background="./img/wallpaper.jpg"
          url="/projects/todogift"
          skills={[
            {
              label: "Symfony",
              icon: "../img/skills/frameworks/symfony_icon.png"
            },
            {
                label: "Vue",
                icon: "../img/skills/frameworks/vue_icon.png"
            }
        ]}
        />
      </div>
      <div className={styles.height}>
        <Card 
          name="Kcorp Matches"
          background="./img/wallpaper.jpg"
          url="/projects/kcorp-matches"
          skills={[
            {
                label: "Nextjs",
                icon: "../img/skills/frameworks/nextjs_icon.webp"
            }
        ]}
        />
      </div>
    </div>
  );
}