import { AppBar } from './AppBar/AppBar';

export const App = () => {
  return (
    <AppBar
      user={{
        username: 'Mango',
        isOnline: true,
        points: { total: 700, required: 200 },
      }}
    />
  );
};
