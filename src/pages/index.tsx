import type { ReactElement } from 'react';
import styled from 'styled-components';
import BasicLayout from '~/layout/Basic';

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
`;

const Home = (): ReactElement => {
  return (
    <BasicLayout>
      <p>Hallo</p>
      <Title>Title</Title>
    </BasicLayout>
  );
};

export default Home;
