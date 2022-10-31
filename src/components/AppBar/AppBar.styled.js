import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  font-weight: 600;
  &.active {
    color: orange;
  }

  :hover:not(.active),
  :focus-visible:not(.active) {
    color: red;
  }
`;

export const Header = styled.header`
  padding: 20px 40px;
  box-shadow: 0px 1px 3px rgb(0 0 0 / 12%), 0px 1px 1px rgb(0 0 0 / 14%),
    0px 2px 1px rgb(0 0 0 / 20%);
`;

export const Nav = styled.nav`
  display: flex;
  gap: 30px;
`;
