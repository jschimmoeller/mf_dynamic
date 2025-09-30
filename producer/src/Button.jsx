// adding this css line makes the styles work 
import "./index.css";

const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded transition-colors"
    >
      {children}
    </button>
  );
};

export default Button;
