import styles from '@/styles/components/SkillCard.module.scss';
import Link from 'next/link';

const Card = ({name, background, skills, url}) => {
    return (
        <Link href={url} className={styles.card}>
            <div className={styles.background}>
                <img className={styles.background_image} src={background} alt=""/>
            </div>
            <div className={styles.title}>
                <h3>{name}</h3>
                <div className={styles.skills_list}>
                    {
                        skills.map(element => {
                            return (
                                <div className={styles.skill_element}>
                                    <img src={element.icon} alt=""/>
                                    <span>{element.label}</span>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Link>
    )
}

export default Card;