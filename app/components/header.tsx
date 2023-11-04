import { Avatar } from './avatar';
import { Brand } from './brand';

export function Header() {
  return (
    <header className="flex items-center justify-between bg-gradient-to-r from-primary to-secondary">
      <Brand />
      <Avatar />
    </header>
  );
}
