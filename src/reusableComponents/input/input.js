
const Input = ({type, handleChange, value, placeholder, name, id, className}) =>{
    return (
        <input
        type={type}
        onChange={handleChange}
        defaultValue={value}
        placeholder={placeholder}
        name={name}
        id={id}
        className={className}
        />
    );
}
export default Input;