//Components
import Container from "./Container";

//Styles
import { GlobalStyle } from "./GlobalStyle";

//Hooks
import { GenProvider } from "./GenerationState";

function App() {
  return (
    <>
      <GenProvider>
        <Container />
      </GenProvider>
      <GlobalStyle />
    </>
  );
}

export default App;
