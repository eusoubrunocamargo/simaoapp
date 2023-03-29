import Sound1 from '../../assets/simonSound1.mp3';
import Sound2 from '../../assets/simonSound2.mp3';
import Sound3 from '../../assets/simonSound3.mp3';
import Sound4 from '../../assets/simonSound4.mp3';
import WinningSound from '../../assets/winningSound.wav';
import LosingSound from '../../assets/losingSound.wav';

export const colorData = {
    green: { index: 0, sound: Sound1},
    blue: { index: 1, sound: Sound2},
    red: { index: 2, sound: Sound3},
    yellow: { index: 3, sound: Sound4},
};

export const gameSounds = {
    winningSound: new Audio(WinningSound),
    losingSound: new Audio(LosingSound),
};

export function getRandomColor () {
    const colorArray = Object.keys(colorData);
    const randomIndex = Math.floor(Math.random() * colorArray.length);
    return colorArray[randomIndex];
};

