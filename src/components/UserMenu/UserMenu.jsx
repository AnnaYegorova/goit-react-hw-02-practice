import { FaUserCircle } from 'react-icons/fa';
import { useState } from 'react';
import {
  MenuContainer,
  Avatar,
  Username,
  PointsPopover,
  PointsLabel,
  Points,
} from './UserMenu.styled';
export const UserMenu = ({ user }) => {
  const [isPopoverVisible, setIsPopoverVIsible] = useState(false);
  return (
    <MenuContainer
      onMouseEnter={() => setIsPopoverVIsible(true)}
      onMouseLeave={() => setIsPopoverVIsible(false)}
    >
      <Avatar isOnline={user.isOnline}>
        <FaUserCircle size="40" />
      </Avatar>
      <Username>{user.username}</Username>
      {isPopoverVisible && (
        <PointsPopover>
          <PointsLabel>Текущее количество очков:</PointsLabel>
          <Points variant="total">{user.points.total}</Points>
          <PointsLabel>Нужно для след уровня:</PointsLabel>
          <Points variant="required">{user.points.required}</Points>
        </PointsPopover>
      )}
    </MenuContainer>
  );
};
