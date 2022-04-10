import { FaUserCircle } from 'react-icons/fa';
import { SideBarContainer, UserMenu, Avatar, Username } from './AppBar.styled';
export const AppBar = ({ user }) => {
  return (
    <SideBarContainer>
      <UserMenu>
        <Avatar isOnline={user.isOnline}>
          <FaUserCircle size="40" />
        </Avatar>
        <Username>{user.username}</Username>
      </UserMenu>
    </SideBarContainer>
  );
};
