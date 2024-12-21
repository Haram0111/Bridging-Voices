import React from 'react';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  background-color: #ff8080;
  color: white;
  position: relative;  // 상대 위치 설정
  height: 100%;  // 전체 높이 유지
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;  // 간격 추가
  position: absolute;  // 하단 고정
  bottom: 10px;  // 10px 떨어지게 설정
  left: 50%;  // 정중앙
  transform: translateX(-50%);  // 왼쪽 이동 보정
  width: 100%;
  padding: 0 20px;
`;

const Button = styled.button`
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  color: #ff8080;
  border: none;
  cursor: pointer;
`;

interface HeaderProps {
  onEditModeToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onEditModeToggle }) => (
  <HeaderContainer>
    <p>사용자 이름</p>
    <ButtonGroup>
      <Button onClick={onEditModeToggle}>수정하기</Button>
      <Button>로그아웃</Button>
    </ButtonGroup>
  </HeaderContainer>
);

export default Header;
