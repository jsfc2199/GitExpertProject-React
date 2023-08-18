/* eslint-disable react/prop-types */
import { useState } from "react";

// const AddCategory = ({setCategories}) => {
  const AddCategory = ({onNewCategory}) => {
  const [inputValue, setinputValue] = useState('');

  const onInputChange = (event) => {    
    setinputValue(event.target.value);
  };

  const onSubmit = (event) =>{
    event.preventDefault() //para prevenir que se refresque la pagina del todo
    
    const newValue = inputValue.trim()

    if(newValue.length<=1) return //si hay menos de una letra no hace el insert

    // setCategories( categories => [inputValue, ...categories])
    onNewCategory(newValue)
    
    setinputValue('') //limpiamos el input
  }

  return (
    <form onSubmit={(event) => onSubmit(event)}>
      <input
        type="text"
        placeholder="Buscar Gifts"
        value={inputValue}
        onChange={(event) => onInputChange(event)} //lo usamos para tener control de los cambios en el input (si no lo usamos es read only)
      />
    </form>
  );
};

export default AddCategory;
