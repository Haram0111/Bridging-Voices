import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
    background-color: #ff8080;
    color: white;
`;

const ThemeButton = styled.button<{ isSelected?: boolean }>`
    padding: 10px;
    border-radius: 10px;
    background-color: ${(props) => (props.isSelected ? 'rgba(255, 128, 128, 0.5)' : 'white')};
    color: ${(props) => (props.isSelected ? 'white' : '#ff8080')};
    border: none;
    cursor: pointer;
    &:hover {
        background-color: ${(props) => (props.isSelected ? 'rgba(255, 128, 128, 0.5)' : '#ffd1d1')};
    }
`;

const ThemeInput = styled.input`
    padding: 10px;
    border-radius: 10px;
    border: 1px solid #ccc;
    width: 70%;
`;

interface FooterProps {
    currentTheme: string;
    onThemeChange: (theme: string) => void;
    onAddTheme: (newTheme: string) => void;
    themes: string[];
}

const Footer: React.FC<FooterProps> = ({ currentTheme, onThemeChange, onAddTheme, themes }) => {
    const [newTheme, setNewTheme] = React.useState<string>('');

    const handleAddTheme = (): void => {
        if (newTheme && newTheme.trim() !== '' && onAddTheme) {
        onAddTheme(newTheme.trim());
        setNewTheme('');
        }
    };

    return (
        <FooterContainer>
        {themes.map((theme) => (
            <ThemeButton
            key={theme}
            isSelected={currentTheme === theme}
            onClick={() => onThemeChange(theme)}
            >
            {theme}
            </ThemeButton>
        ))}

        <div>
            <ThemeInput
            type="text"
            placeholder="새 테마 추가"
            value={newTheme}
            onChange={(e) => setNewTheme(e.target.value)}
            />
            <ThemeButton onClick={handleAddTheme}>추가</ThemeButton>
        </div>
        </FooterContainer>
    );
};

export default Footer;
