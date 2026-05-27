import { FaUniversity } from 'react-icons/fa';
import { EducationEntry } from '@/types';
import styles from '../TimeLine.module.css';

interface CardTimeLineProps {
  education: EducationEntry;
}

export default function CardTimeLine({ education }: CardTimeLineProps) {
  return (
    <div className={styles.timelineRow}>
      <div className={styles.timelineTime}>
        {education.startYear}
        <small>{education.endYear}</small>
      </div>
      <div className={`${styles.timelineContent} bg-dark`}>
        <i className="icon-attachment text-white">
          <FaUniversity />
        </i>
        <h4 className="text-white">{education.school}</h4>
        <small className="text-white mb-2">{education.degree}</small>
        <p className="text-white text-center">{education.description}</p>
      </div>
    </div>
  );
}
