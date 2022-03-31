import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './CoopDashboard.module.css';

const CoopDashboard = () => {
  return (
    <Wrapper>
      <div className={styles.root}>
        <h1>Welcome to the shop!</h1>
      </div>
    </Wrapper>
  );
};

export default CoopDashboard;
