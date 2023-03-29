import './styles.css';
// import Logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';

function Main() {

  const navigate = useNavigate();

  return (
  <div className='container-geral-main'>

    <figure className='container-game-logo'>
      <div className='green-bar blink-1'></div>
      <div className='blue-bar blink-2'></div>
      <div className='red-bar blink-3'></div>
      <div className='yellow-bar blink-4'></div>
    </figure>

    <h1>SIMÃO</h1>

    <nav>
      <button onClick={()=> navigate('/play')}>JOGAR</button>
      <button>RANKING</button>
    </nav>

  </div>
  );
}

export default Main;
