import Image from 'next/image';
import { InputTelephoneWidget } from './InputTelephoneWidget';
import { InputSMSWidget } from './InputSMSWidget';

export const LoginWidget = () => {
  return (
    <div>
      <Image
        className="justify-self-center"
        src={'/logo.png'}
        alt="Logo"
        width={300}
        height={300}
      />
      <div className="mt-4 flex flex-col gap-8">
        <p className="text-bold text-balance text-center text-2xl sm:text-2xl md:text-3xl xl:text-4xl">
          Вход в систему домофонии
        </p>
        <InputTelephoneWidget />
        <InputSMSWidget />
      </div>
    </div>
  );
};
