import styled from 'styled-components';

export const Nav = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

export const UserName = styled.p`
  margin: 5px 10px;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
`;

export const LogoutBtn = styled.button`
  padding: 5px 10px;
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 700;
  color: #fff;
  background-color: #42a5f5;
  border: 1px solid #1769aa;
  border-radius: 4px;
`;
