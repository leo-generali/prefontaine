import React from 'react';
import Dashboard from '../Dashboard';
import UserInfo from '../../Components/UserInfo';
import Loading from './Loading';

// Styles
import styled from 'styled-components';

const AppContainer = styled.div`
  align-items: center;
  background: linear-gradient(333deg, #38193d 0%, #603866 100%);
  display: flex;
  height: 100vh;
  justify-content: center;
`;

const GraphContainer = styled.div`
  background-color: rgba(244,237,242, 0.85);
  box-shadow: 0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);
  border-radius: 0.5rem;
  padding: 4rem 5rem;
`;

function finishedLoading(data, personalData) {
  const { id, firstname, profile } = personalData;

  return (
    <React.Fragment>
      <UserInfo id={id} firstname={firstname} profile={profile} />
      <Dashboard data={data}/>
    </React.Fragment>
  );
};

const View = ({ loading, data, personalData }) => {

  return (
    <AppContainer>
      <GraphContainer>
        {loading ? <Loading /> : finishedLoading(data, personalData)}
      </GraphContainer>
    </AppContainer>
  );
};

export default View;