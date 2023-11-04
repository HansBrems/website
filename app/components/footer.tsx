import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ExternalLink from './externalLink';

export function Footer() {
  return (
    <footer className="flex items-center justify-between max-w-prose mx-auto ">
      <div className="flex gap-4">
        <ExternalLink to="https://github.com/HansBrems">
          <FaGithub />
        </ExternalLink>
        <ExternalLink to="https://www.linkedin.com/in/hansbrems">
          <FaLinkedin />
        </ExternalLink>
        <ExternalLink to="https://twitter.com/hansbrems">
          <FaTwitter />
        </ExternalLink>
      </div>

      <div className="text-sm">
        © {new Date().getFullYear()} Longville Software BV
      </div>
    </footer>
  );
}
