import './App.css';
import LeftPane from './components/LeftPane';
import RightPane from './components/RightPane';
const App = () =>
(
  <div className="main flex flex-row">
    <LeftPane className="left" />
    <RightPane className="right" />
  </div>
)


export default App;
