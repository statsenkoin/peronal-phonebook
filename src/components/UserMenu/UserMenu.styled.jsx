import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: baseline;
`;

export const UserName = styled.p`
  margin: 0 10px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 700;
  color: #fff;
`;

export const LogoutBtn = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  font-weight: 700;
  color: #fff;
  background-color: #42a5f5;
  border-width: 0;
  border-radius: 4px;

  transition: 300ms;
  &:hover,
  &:focus {
    color: #ff9800;
    background-color: #4dabf5;
    cursor: pointer;
  }
`;
