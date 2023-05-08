import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const NavigatinLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: #2a363b;
  &.active {
    color: #e239;
  }
`;
