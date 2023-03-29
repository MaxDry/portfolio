import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useState } from 'react';
import styles from '@/styles/components/Accordion.module.scss';
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { accordionActionsClasses } from '@mui/material';

const CustomAccordion = ({title, date, time, localisation="/", logo, technos=[], children}) => {

    const  [expanded, setExpanded] = useState(false);

    return (
        <Accordion className={styles.full_accordion} expanded={expanded} onChange={() => setExpanded((actualExpanded) => !actualExpanded)}>
            <AccordionSummary
                className={styles.accordion}
                expandIcon={<ExpandMoreIcon style={{ color: "white" }} />}
                aria-controls="panel1bh-content"
                id="panel1bh-header"
            >
                <div className={styles.accordion_header}>
                    <div>
                        <span className={styles.accordion_header_title}>{title}</span>
                        <span className={styles.accordion_time}>{time}</span>
                    </div>
                    <span className={styles.accordion_header_date}>{date}</span>
                </div>
            </AccordionSummary>
            <AccordionDetails
                className={styles.accordion_content}
            >
                <div className={styles.part_left}>
                    <div className={styles.accordion_text}>
                        <FmdGoodIcon />
                        <span>{localisation}</span>
                    </div>
                    <div>
                        {children}
                    </div>
                    <div className={styles.accordion_tags}>
                        {technos.map(element => {
                            return (
                                <span>{element}</span>
                            )
                        })}
                    </div>
                </div>
                <div className={styles.part_right}>
                    {logo}
                </div>
                
            </AccordionDetails>
        </Accordion>
    )
}

export default CustomAccordion;