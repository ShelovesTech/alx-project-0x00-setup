import { ButtonProps } from "@/interfaces";

const Button: React.FC<ButtonProps> = ({ title, onClick }) => {

    return (
        <button
        className="bg-[#F9F9F9] px-3 py-1 rounded-full text-sm hover:bg-gray-200 transition-colors"
        onClick={onClick}
        >
        {title}
        </button>
    );
}
export default Button;
