import { ReactNode } from 'react';

type MaxWidthWrapperProps = {
  children: ReactNode;
};

export const MaxWidthWrapper: React.FC<MaxWidthWrapperProps> = ({
  children,
}) => {
  return (
    <div className="mx-auto w-full px-4 sm:max-w-[480px] md:max-w-[768px] lg:max-w-[1024px] xl:max-w-[1280px]">
      <div className="grid min-h-screen grid-rows-[auto_1fr_auto] items-center justify-items-center gap-6 p-4 font-[family-name:var(--font-proxima-mono)] sm:gap-16 sm:p-10 md:p-16">
        {children}
      </div>
    </div>
  );
};
