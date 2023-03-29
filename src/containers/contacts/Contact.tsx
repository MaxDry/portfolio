import * as React from 'react';
import styles from '@/styles/containers/Contacts.module.scss';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import ContactPageIcon from '@mui/icons-material/ContactPage';

export default function Contact() {

  return (
    <div className={styles.contacts}>
      <a href="https://twitter.com/Maxx_DRY" target="_blank" className={styles.icon}>
        <TwitterIcon/>
        @Maxx_DRY
      </a>
      <a href="https://www.linkedin.com/in/maxime-duroyon/" target="_blank" className={styles.icon}>
        <LinkedInIcon/>
        maxime-duroyon
      </a>
      <a href="https://github.com/MaxDry" target="_blank" className={styles.icon}>
        <GitHubIcon/>
        MaxDry
      </a>
      <a href="mailto:maxime.duroyonJR@gmail.com" target="_blank" className={styles.icon}>
        <EmailIcon/>
        maxime.duroyonJR@gmail.com
      </a>
      <a href="" target="_blank" className={styles.icon}>
        <ContactPageIcon/>
        CV
      </a>
    </div>
  );
}