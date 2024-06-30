import React from "react";
import styled, { css } from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrophy,
  faStar,
  faCrown,
  faLock,
} from "@fortawesome/free-solid-svg-icons";

const lockedCardStyles = css`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1),
    0 0 10px 2px rgba(192, 192, 192, 0.8);
  border: 2px solid #c0c0c0;
`;

const Container = styled.div`
  background-color: #fff;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 10px 2px rgba(255, 215, 0, 0.8);
  margin-bottom: 1.5rem;
  position: relative;
  border: 2px solid #ffd700;
  width: 280px;
  height: 320px;
  ${({ locked }) => locked && lockedCardStyles}
`;

const Title = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #333;
  text-align: center;
`;

const Description = styled.p`
  font-size: 0.85rem;
  color: #555;
  margin-bottom: 1rem;
`;

const Image = styled.img`
  width: 100%;
  max-height: 130px;
  object-fit: contain;
  border-radius: 4px;
  margin-top: 1rem;
`;

const IconContainer = styled.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const IconWrapper = styled.div`
  background-color: #007bff;
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const StyledIcon = styled(FontAwesomeIcon)`
  color: #ffd700;
`;

const LockIcon = styled(StyledIcon)`
  position: absolute;
  top: 1rem;
  left: 1rem;
  background-color: #dc3545;
  border-radius: 50%;
  padding: 0.5rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const OverlayText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: bold;
  text-transform: uppercase;
`;

const LockedOverlay = styled(OverlayText)`
  background-color: rgba(0, 0, 0, 0.5);
  color: rgba(255, 255, 255, 0.5);
  ${({ locked }) => !locked && "display: none;"}
`;

const UnlockedOverlay = styled(OverlayText)`
  background-color: rgba(0, 124, 0, 0.5);
  color: rgba(255, 255, 255, 0.5);
  ${({ locked }) => locked && "display: none;"}
`;

const PrizeCard = ({ title, description, imageUrl, locked }) => {
  return (
    <Container locked={locked}>
      <LockedOverlay locked={locked}>LOCKED</LockedOverlay>
      <UnlockedOverlay locked={locked}>UNLOCKED</UnlockedOverlay>
      {locked && <LockIcon icon={faLock} size="lg" />}
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Image src={imageUrl} alt={title} />
    </Container>
  );
};

export default PrizeCard;
