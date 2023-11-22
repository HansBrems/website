import styles from './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
export const links = () => [{ rel: 'stylesheet', href: styles }];

export interface SocialMediaLinkProps {
  icon: any;
  to: string;
}

export function SocialMediaLink({ icon, to }: SocialMediaLinkProps) {
  return (
    <a className="link" href={to} target="_blank">
      {icon}
    </a>
  );
}

export function Footer() {
  return (
    <footer className="app-footer">
      <SocialMediaLink icon={<FaGithub />} to="https://github.com/HansBrems" />
      <SocialMediaLink
        icon={<FaLinkedin />}
        to="https://www.linkedin.com/in/hansbrems"
      />
      <SocialMediaLink
        icon={<FaSquareXTwitter />}
        to="https://twitter.com/longvillesw"
      />
    </footer>
  );
}
