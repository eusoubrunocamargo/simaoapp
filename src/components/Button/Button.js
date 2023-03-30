import './Button.css';

const Button = ({ color , onClick, active, disabled }) => {

    return (
        <div onClick={() => onClick()} className={`simon-button ${color} ${active && 'activated'}`} disabled={disabled}></div>
    )
};

export default Button;