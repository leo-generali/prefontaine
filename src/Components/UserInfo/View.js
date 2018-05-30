import React from 'react';
import Icon from '../Helper/Icon';

// Styles
import * as Text from '../../styles/typography';
import styled from 'styled-components';

const ProfileWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
`;

const ImageWrapper = styled.div`
  max-width: 5rem;
  margin-left: 1.5rem;
  transition: 0.3s;
`;

const IconWrapper = styled.a`
  border-radius: 0.6rem;
  background-color: #fc4c02;
  margin-left: auto;
  max-width: 5rem;
  max-height: 5rem;
  transition: 0.3s;

  :hover {
    background-color: #e24401;
    transform: translateY(-0.2rem);
    box-shadow: 0 7px 14px rgba(50,50,93,.1),0 3px 6px rgba(0,0,0,.08);
  }
`;

const Image = styled.img`
  border-radius: 0.6rem;
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
      <IconWrapper href={url} target='_blank'>
        <Icon logo='strava' height={'100%'} width={'100%'} />
      </IconWrapper>
    </ProfileWrapper>
  );
}

export default View;