import { HTMLProps, PropsWithChildren } from 'react';
import { Iceland } from 'next/font/google';

const font = Iceland({ subsets: ['latin'], weight: '400' });

export const Title = ({
  children,
  style,
  ...rest
}: PropsWithChildren & HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1
      {...rest}
      className={font.className}
      style={{
        fontSize: 36,
        textTransform: 'uppercase',
        color: '#fff',
        letterSpacing: 8,
        fontFamily: '"Iceland", inherit, sans-serif',
        ...style,
      }}
    >
      {children}
    </h1>
  );
};
