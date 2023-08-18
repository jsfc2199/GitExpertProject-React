import { useState } from "react";
import {AddCategory, GiftGrid} from './components';

const GiftExpertApp = () => {
  const [categories, setCategories] = useState(["One Punch"]);

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;

    setCategories([newCategory, ...categories]); //copio las categorias y agrego la nueva y devuelvo el nuevo objeto
    // setCategories(cat => [...cat, 'valorant']) //otra forma
  };

  return (
    <>
      <h1>GiftExpertApp</h1>
      <AddCategory
        // setCategories = {setCategories}
        onNewCategory={(value) => onAddCategory(value)}
      />

      {
        categories.map((category) => (
            <GiftGrid key={category} category={category} />
        ))
      }
    </>
  );
};

export default GiftExpertApp;
