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
    background: rgb(255,105,163);
    background: linear-gradient(90deg,rgba(255,33,138,1)  33%, rgba(255,105,163,1) 84%);
    border-radius:50%;
    position: absolute;
    bottom:10%;
    right: 5%;
    height: 200px;
    width: 200px;
    z-index: 2;
  }
  .ring-1{
    border-radius:33% 67% 47% 53% / 41% 66% 34% 59%;
    left:2%;
    bottom:40%;
    width: 100px;
    height: 100px;
  }
  .ring-2{
    left:5%;
    bottom:10%;
    border-radius: 56% 44% 47% 53% / 50% 54% 46% 50% ;
    width: 250px;
    height: 250px;
  }
  .ring-3{
    border-radius: 56% 44% 47% 53% / 50% 54% 46% 50% ;
    width: 300px;
    height: 300px;
    bottom: 2%;
    right: -2%;
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
    width: 90%;
    height: 80%;
    background-color:#242e4cc9;
    border-radius: 8px ;
    padding: 16px;
  }
`

export default App;
