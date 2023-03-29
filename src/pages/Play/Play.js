import './Play.css';
import Button from '../../components/Button/Button';
import { useActivateButton } from '../../hooks/useActivateButton';
import { useMachineSequence } from '../../hooks/useMachineSequence';
import { useHumanSequence } from '../../hooks/useHumanSequence';
import { useNavigate } from 'react-router-dom';
import { SequenceContext } from '../../utils/sequenceContext';
import { useContext } from 'react';

export default function Play () {

    const navigate = useNavigate();
    const { machineSequence, setMachineSequence } = useContext(SequenceContext);
    const { mainRef , activateButton , activeButton } = useActivateButton();
    const { activateMachineSequence } = useMachineSequence(activateButton, mainRef);
    const {watchHumanSequence , gameStatus, setGameStatus} = useHumanSequence(activateMachineSequence, mainRef);

    const restartGame = () => {
        setMachineSequence([]);
        setGameStatus('');
        mainRef.current.classList.remove('youlose');
    };

    return (

        <>
            <div className='container-geral'>

                <main className='container-game' ref={mainRef}>
                    <Button color='green' onClick={() => { activateButton('green'); watchHumanSequence('green')}} active={activeButton === 'green'} disabled={gameStatus}/>
                    <Button color='blue' onClick={() => { activateButton('blue'); watchHumanSequence('blue')}} active={activeButton === 'blue'} disabled={gameStatus}/>
                    <Button color='red' onClick={() => { activateButton('red'); watchHumanSequence('red')}} active={activeButton === 'red'} disabled={gameStatus}/>
                    <Button color='yellow' onClick={() => { activateButton('yellow'); watchHumanSequence('yellow')}} active={activeButton === 'yellow'} disabled={gameStatus}/>
                    {machineSequence.length === 0 && <section className='game-info'>
                        <button className='btn-start' onClick={() => activateMachineSequence()}>START</button>
                        <button className='btn-exit' onClick={() => navigate('/')}>X</button>
                    </section>}
                </main>

                {gameStatus && (
                    <div className='game-status'>
                        <span>{gameStatus}</span>
                        <button onClick={() => restartGame()}>Jogar</button>
                        <button onClick={() => { restartGame(); navigate('/')}}>Sair</button>
                    </div>
                )}

            </div>
        </>
    )
};