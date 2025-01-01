import { HTMLProps, PropsWithChildren } from 'react';

export const Title = ({
  children,
  style,
  ...rest
}: PropsWithChildren & HTMLProps<HTMLHeadingElement>) => {
  return (
    <h1
      {...rest}
      style={{
        fontSize: 42,
        textTransform: 'uppercase',
        color: '#fff',
        letterSpacing: 8,
        fontWeight: 'bold',
        fontFamily: '"Karla Bold", inherit, sans-serif',
        ...style,
      }}
    >
      {children}
    </h1>
  );
};
