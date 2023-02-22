import './App.css';
import Counter from './Component/counter/Counter';
import Lucky from './Component/lucky/Lucky';
import Menu from './Component/menu/Menu';
import ChangeBg from './Component/use-Effect/backgroundChange';
import MousePosition from './Component/use-Effect/mousePosition';

function App() {
  
  return (
    <>
      <Menu />
      <Counter />
      <Lucky />
      <ChangeBg />
      <MousePosition />
    </>
  );
}

export default App;
