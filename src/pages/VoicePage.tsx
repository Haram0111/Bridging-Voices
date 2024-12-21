import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ButtonGrid from '../components/ButtonGrid';
import themes from '../data/themes';

const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  background-color: #f5a9a9;
`;

const LeftBox = styled.div`
  width: 10%;
  background-color: #ff8080;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const RightBox = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
`;

const VoicePage: React.FC = () => {
  const [currentTheme, setCurrentTheme] = useState<string>('daily');
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [buttons, setButtons] = useState<string[]>(themes['daily']);

  const handleThemeChange = (theme: string): void => {
    setCurrentTheme(theme);
    setButtons(themes[theme]);
  };

  const handleEditModeToggle = (): void => {
    setIsEditMode(!isEditMode);
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>, index: number): void => {
    const newButtons = [...buttons];
    newButtons[index] = e.target.value;
    setButtons(newButtons);
  };

  const handleButtonClick = (text: string): void => {
    const utterance = new SpeechSynthesisUtterance(text);
    window.speechSynthesis.speak(utterance);
  };

  return (
    <MainContainer>
      <LeftBox>
        <Header onEditModeToggle={handleEditModeToggle} />
      </LeftBox>
      <RightBox>
        <ButtonGrid
          buttons={buttons}
          isEditMode={isEditMode}
          onTextChange={handleTextChange}
          onButtonClick={handleButtonClick}
        />
        <Footer currentTheme={currentTheme} onThemeChange={handleThemeChange} />
      </RightBox>
    </MainContainer>
  );
};

export default VoicePage;
