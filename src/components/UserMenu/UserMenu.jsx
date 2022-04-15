import { FaUserCircle } from 'react-icons/fa';
import { Component } from 'react';
import {
  MenuContainer,
  Avatar,
  Username,
  PointsPopover,
  PointsLabel,
  Points,
} from './UserMenu.styled';
export class UserMenu extends Component {
  state = {
    isPopoverVisible: false,
  };
  openPopover = () => this.setState({ isPopoverVisible: true });
  closePopover = () => this.setState({ isPopoverVisible: false });
  render() {
    const { isPopoverVisible } = this.state;
    const { user } = this.props;
    return (
      <MenuContainer
        onMouseEnter={this.openPopover}
        onMouseLeave={this.closePopover}
      >
        <Avatar isOnline={this.props.user.isOnline}>
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
  }
  // const [isPopoverVisible, setIsPopoverVIsible] = useState(false);
}
