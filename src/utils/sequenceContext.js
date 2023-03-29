import { createContext , useState } from "react";

export const SequenceContext= createContext([]);

export const SequenceProvider = ({children}) => {
    
    const [humanSequence, setHumanSequence] = useState([]);
    const [machineSequence, setMachineSequence] = useState([]);
    
    return (
        <SequenceContext.Provider 
        value={{humanSequence, setHumanSequence, machineSequence, setMachineSequence}}>
            {children}
        </SequenceContext.Provider>
    );
};