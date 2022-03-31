import { ButtonLink } from '@/components/Button';
import { Container, Spacer, Wrapper } from '@/components/Layout';
import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <Wrapper>
      <div>
        <h2 className={styles.title}>
          <span className={styles.nextjs}>Helping</span>
          <span className={styles.mongodb}>Hands</span>
          <span className={styles.subtitle}>Make India Smile :)</span>
        </h2>
        
        <Container justifyContent="center" className={styles.buttons}>
          <Container>
            <Link passHref href="/login">
              <ButtonLink className={styles.button}>Log In</ButtonLink>
            </Link>
          </Container>
          <Spacer axis="horizontal" size={1} />
          <Container>
            <ButtonLink
              href="/sign-up"
              type="secondary"
              className={styles.button}
            >
              Sign Up
            </ButtonLink>
          </Container>
        </Container>
        {/* <p className={styles.subtitle}>
          A Next.js and MongoDB web application, designed with simplicity for
          learning and real-world applicability in mind.
        </p> */}
      </div>
    </Wrapper>
  );
};

export default Hero;
