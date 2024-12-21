import React from 'react';
import styled from 'styled-components';

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, auto);
    gap: 10px;
`;

const Button = styled.button`
    padding: 10px;
    font-size: 16px;
    border-radius: 8px;
    border: none;
    background-color: #ffffff;
    cursor: pointer;
    &:hover {
        background-color: #ffd1d1;
    }
`;

const Input = styled.input`
    padding: 5px;
    font-size: 16px;
    border: 1px solid #ccc;
    border-radius: 8px;
`;

interface ButtonGridProps {
    buttons: string[];
    isEditMode: boolean;
    onTextChange: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void;
    onButtonClick: (text: string) => void;
}

const ButtonGrid: React.FC<ButtonGridProps> = ({ buttons, isEditMode, onTextChange, onButtonClick }) => (
    <GridContainer>
        {buttons.map((text, index) => (
        <div key={`button-${index}`}>
            {isEditMode ? (
            <Input
                value={text}
                onChange={(e) => onTextChange(e, index)}
            />
            ) : (
            <Button onClick={() => onButtonClick(text)}>{text}</Button>
            )}
        </div>
        ))}
    </GridContainer>
);

export default ButtonGrid;
