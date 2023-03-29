import { Routes, Route, Navigate} from "react-router-dom";
import Main from "./pages/Main";
import Play from "./pages/Play/Play";
// import PrivateRoute from "./components/PrivateRoute";
import { SequenceProvider } from "./utils/sequenceContext";

const MyRoutes = () => {
    return (
        <>
            <SequenceProvider>
                <Routes>
                    <Route path="/" element={<Main/>}/>
                    <Route path="/play" element={<Play/>}/>
                    <Route path="*" element={<Navigate to='/'/>}/>
                </Routes>
            </SequenceProvider>
       </>
    );
};

export default MyRoutes;
