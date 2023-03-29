import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from '@/styles/containers/Skills.module.scss';
import CropIcon from '@mui/icons-material/Crop';
import RuleIcon from '@mui/icons-material/Rule';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import StorageIcon from '@mui/icons-material/Storage';
import MoveDownIcon from '@mui/icons-material/MoveDown';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CodeIcon from '@mui/icons-material/Code';
import { motion, AnimatePresence } from "framer-motion";
import mySkills from "./skills.json";

export default function Skills() {
  const [value, setValue] = React.useState('langage');

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0, // this will set a delay before the children start animating
        staggerChildren: 0.07// this will set the time inbetween children animation
      }
    }
  };

  const dropUpVariants = {
    hidden: {
      y: "2vw",
      opacity: 0
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        mass: 0.5
      }
    }
  }

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <div>
      <TabContext value={value}>
        <Box sx={{
          borderBottom: 1,
          borderColor: 'divider',
            '& .MuiTab-root': { color: "#ffffff80" },
            '& .MuiTabs-indicator': { backgroundColor: '#d47073' },
            '& .Mui-selected': { color: "#d47073 !important" },
          }}>
          <TabList className={styles.tabList} onChange={handleChange}>
            <Tab value="langage" className={styles.tab_skill} icon={<CodeIcon />} label="Langages" />
            <Tab value="framework" className={styles.tab_skill} icon={<CropIcon />} label="Frameworks" />
            <Tab value="database" className={styles.tab_skill} icon={<StorageIcon />} label="Base de données" />
            <Tab value="testing" className={styles.tab_skill} icon={<RuleIcon />} label="Testing" />
            <Tab value="versioning" className={styles.tab_skill} icon={<MoveDownIcon />} label="Versioning" />
            <Tab value="plus" className={styles.tab_skill} icon={<AddCircleOutlineIcon />} label="Plus" />
          </TabList>
        </Box>
      </TabContext>
      <AnimatePresence mode='wait'>
        <motion.div
          key={value ? value : "empty"}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className={styles.skill_list}
        >
          {mySkills[value].map(element => {
            return (
              <motion.div key={element} className={styles.skill_element} variants={dropUpVariants}>
                <img src={element.icon_url} alt=""/>
                <span>{element.label}</span>
              </motion.div>
            )
          })}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}