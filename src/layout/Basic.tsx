import { ReactElement, ReactNode } from 'react';
import GlobalStyle from '~/styles/global';

type Props = { children: ReactNode };

const BasicLayout = ({ children }: Props): ReactElement => {
  return (
    <>
      <GlobalStyle />
      {children}
    </>
  );
};

export default BasicLayout;
