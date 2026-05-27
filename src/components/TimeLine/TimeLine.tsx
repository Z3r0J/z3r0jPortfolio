import Text from '@/i18n/Text';
import { education } from '@/data/education';
import CardTimeLine from './CardTimeLine/CardTimeLine';
import styles from './TimeLine.module.css';

export default function TimeLine() {
  return (
    <div className="row mt-4" id="education">
      <div className={styles.timeline}>
        <h3 className="text-white text-center mb-4">
          <Text tid="education" />
        </h3>
        {education.map((ed) => (
          <CardTimeLine education={ed} key={ed.id} />
        ))}
      </div>
    </div>
  );
}
