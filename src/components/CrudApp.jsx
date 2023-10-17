import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";
import React, { useState } from "react";

const initialDb = [
  {
    id: 1,
    name: "Seiya",
    constelacion: "Pegaso",
    armadura: "Armadura de Bronce de Pegaso",
    descripcion: "El protagonista principal de la serie, es valiente y determinado.",
  },
  {
    id: 2,
    name: "Shiryu",
    constelacion: "Dragón",
    armadura: "Armadura de Bronce de Dragón",
    descripcion: "Es conocido por su gran fuerza y resistencia.",
  },
  {
    id: 3,
    name: "Hyoga",
    constelacion: "Cisne",
    armadura: "Armadura de Bronce de Cisne",
    descripcion: "Controla el hielo y es un estratega brillante.",
  },
  {
    id: 4,
    name: "Shun",
    constelacion: "Andrómeda",
    armadura: "Armadura de Bronce de Andrómeda",
    descripcion: "Es gentil y compasivo, posee cadenas que puede usar como armas.",
  },
  {
    id: 5,
    name: "Ikki",
    constelacion: "Fénix",
    armadura: "Armadura de Bronce de Fénix",
    descripcion: "Es el hermano de Shun y es conocido por su temperamento explosivo.",
  },
];
const CrudApp = () => {
  const [db, setDb] = useState(initialDb);
  const [dataToEdit, setDataToEdit] = useState(null);
  const createData = (data) => {
    data.id = Date.now();
    setDb([...db, data]);
  };
  const updateData = (data) => {
    let newData = db.map((el) => (el.id === data.id ? data : el));
    setDb(newData);
  };
  const deleteData = (id) => {
    let isDelete = confirm(`Estas seguro de eliminar el id ${id}?`);
    if (isDelete) {
      let newData = db.filter((el) => el.id !== id);
      setDb(newData);
    } else {
      return;
    }
  };
  return (
    <>
      <h2>CRUD App</h2>
      <CrudForm
        createData={createData}
        updateData={updateData}
        dataToEdit={dataToEdit}
        setDataToEdit={setDataToEdit}
      />
      <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData} />
    </>
  );
};

export default CrudApp;
