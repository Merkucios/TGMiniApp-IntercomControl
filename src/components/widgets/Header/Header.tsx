import Image from 'next/image';
import { Avatar } from './Avatar';

export const Header = () => {
  return (
    <header className="relative w-full">
      <Image
        src={'/header.png'}
        alt={'Главная'}
        width={500}
        height={500}
        className="w-full"
      />
      <div className="absolute left-8 top-6">
        <Avatar />
      </div>
    </header>
  );
};
