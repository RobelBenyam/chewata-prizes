import React from "react";
import PrizeCard from "../components/PrizeCard";
import styled from "styled-components";
import laptopScreenImg from "../assets/laptop-screen.png";
import money from "../assets/money.png";
import gameconsole from "../assets/game-console.png";
import drone from "../assets/drone.png";
import smartwatch from "../assets/watch.png";
import headset from "../assets/headphones.png";
import vr from "../assets/headset.png";

const PageContainer = styled.div`
  padding: 2rem;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageTitle = styled.h1`
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 2rem;
  text-align: center;
  color: #333;
  padding: 1rem 0;
`;

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

const PrizeListPage = () => {
  const prizes = [
    {
      id: 1,
      title: "10000 Birr",
      description: "Win Ten Thousend Birr",
      imageUrl: money, // Use the imported image
      locked: false,
    },
    {
      id: 2,
      title: "Smartwatch",
      description: "Latest model smartwatch with advanced features.",
      imageUrl: smartwatch,
      locked: true,
    },
    {
      id: 3,
      title: "Headphones",
      description: "Noise-cancelling wireless headphones.",
      imageUrl: headset,
      locked: true,
    },
    {
      id: 4,
      title: "Gaming Console",
      description: "Top-of-the-line gaming console.",
      imageUrl: gameconsole,
      locked: true,
    },
    {
      id: 5,
      title: "VR Headset",
      description: "Immersive virtual reality experience.",
      imageUrl: vr,
      locked: true,
    },
    {
      id: 6,
      title: "Drone",
      description: "High-tech aerial photography drone.",
      imageUrl: drone,
      locked: true,
    },
  ];

  return (
    <PageContainer>
      <PageTitle>Available Prizes</PageTitle>
      <CardContainer>
        {prizes.map((prize) => (
          <PrizeCard
            key={prize.id}
            title={prize.title}
            description={prize.description}
            imageUrl={prize.imageUrl}
            locked={prize.locked}
          />
        ))}
      </CardContainer>
    </PageContainer>
  );
};

export default PrizeListPage;
