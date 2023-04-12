import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Nav = styled.nav`
  flex-wrap: wrap;
  display: flex;
  justify-content: center;
  align-items: baseline;
`;

export const LinkStyled = styled(NavLink)`
  margin-right: 20px;
  font-size: 16px;
  text-decoration: none;
  font-weight: 700;
  color: #fff;

  &.active {
    color: #ff9800;
  }
`;

export const HomeLink = styled.span`
  display: flex;
  align-items: baseline;
  gap: 4px;
`;
