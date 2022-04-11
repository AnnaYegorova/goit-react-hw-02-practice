import { SideBarContainer } from './AppBar.styled';
import { UserMenu } from '../UserMenu/UserMenu';
export const AppBar = ({ user }) => {
  return (
    <SideBarContainer>
      <UserMenu user={user} />
    </SideBarContainer>
  );
};
