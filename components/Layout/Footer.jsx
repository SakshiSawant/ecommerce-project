import { Text, TextLink } from '@/components/Text';
import { ThemeSwitcher } from '@/components/ThemeSwitcher';
import styles from './Footer.module.css';
import Spacer from './Spacer';
import Wrapper from './Wrapper';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        <Text>
        Copyright © 2022 Helping Hands Pvt Ltd. All Rights Reserved.
        </Text> 
        {/* <Spacer size={1} axis="vertical" />
        <ThemeSwitcher /> */}
      </Wrapper>
    </footer>
  );
};

export default Footer;
