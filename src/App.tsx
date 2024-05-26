import React from 'react';
import AppRouter from './presentation/router/AppRouter';
import { Container } from './styles/StyledComponents';
import { AppContextProvider } from './presentation/context/AppContext';
const App: React.FC = () => {
  return (
    <AppContextProvider>
      <Container>
        <AppRouter />
      </Container>
    </AppContextProvider>
  );
};

export default App;