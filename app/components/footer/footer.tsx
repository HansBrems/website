import styles from './footer.css';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
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
        icon={<FaTwitter />}
        to="https://twitter.com/hansbrems"
      />
    </footer>
  );
}
