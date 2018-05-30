import React from 'react';
import Icon from '../Helper/Icon';

// Styles
import * as Text from '../../styles/typography';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const ImageWrapper = styled.div`
  max-width: 5rem;
  margin-left: 1.5rem;
  transition: 0.3s;
`;

const IconWrapper = styled.a`
  background: orange;
  max-width: 5rem;
  max-height: 5rem;
`;

const Image = styled.img`
  border-radius: 10%;
  height: 100%;
  width: 100%;
`;

const View = ({ profile, url, firstname }) => {
  return (
    <ProfileWrapper>
      <Text.H5 light uppercase>{`${firstname}'s Running`}</Text.H5>
      <ImageWrapper>
        <Image src={profile} alt={`${firstname}'s Strava Profile Picture`}></Image>
      </ImageWrapper>
      <IconWrapper>
        <Icon logo='strava' height={'100%'} width={'100%'} />
      </IconWrapper>
    </ProfileWrapper>
  );
}

export default View;