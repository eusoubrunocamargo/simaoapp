import { useState } from "react";

const useSound = (sound) => {
    
    const [audio] = useState(new Audio(sound));

    const play =  async () => {
        if(audio){
            audio.play();
            await new Promise((resolve) => {
                audio.addEventListener('ended', () => {
                    audio.pause();
                    audio.currentTime = 0;
                    resolve();
                });
            });
        }
    };

    return play;

};

export default useSound;