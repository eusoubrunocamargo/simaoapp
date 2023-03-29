import './Button.css';

const Button = ({ color , onClick, active, disabled }) => {

    return (
        <button onClick={() => {onClick()}} className={`simon-button ${color} ${active && 'activated'}`} disabled={disabled}></button>
    )
};

export default Button;