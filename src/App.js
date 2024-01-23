import styled from 'styled-components';
import FormPage from './components/FormPage';

function App() {
  return (
    <StyledApp>
      <Decoration>
        <div className="container">
          <div className="ring ring-1"></div>
          <div className="ring ring-2"></div>
          <div className="ring ring-3"></div>
        </div>
      </Decoration>
      <main>
        <FormPage />
      </main>
    </StyledApp>
  );
}
const Decoration = styled.div`
position: absolute;
top:0;
bottom:0;
right:0;
left:0;
width: 100vw;
height: 100vh;
.container{
  position: relative;
  width: 100%;
  height: 100%;
  .ring{
    background-color: red;
    border-radius:50%;
    position: absolute;
    bottom:10%;
    right: 5%;
    height: 200px;
    width: 200px;
    z-index: 2;
  }
}

`

const StyledApp = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #171f38;
  color: whitesmoke;
  display: flex;
  justify-content: center;
  align-items: center;
  main{
    z-index: 9;
    width: 80%;
    height: 75%;
    background-color:#242e4cc9;
    border-radius: 8px ;
  }
`

export default App;
