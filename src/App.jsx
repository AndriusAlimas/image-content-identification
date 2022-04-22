import styled from "styled-components";
import { ObjectDetector } from "./components/objectDetector/ObjectDetector.component";

const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(110deg, #4b4453 60%, #c34a36 60%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

function App() {
  return (
    <AppContainer>
      <ObjectDetector />
    </AppContainer>
  );
}

export default App;
