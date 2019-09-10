import React, { useState, useEffect } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [type, setType] = useState("Pastry");

  useEffect(() => {
    fetch("/item_generation", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        type
      })
    }).then(res => {
      console.log(res);
    });
  }, [name, type]);

  const onSubmit = async e => {
    e.preventDefault();
    console.log(name);
    console.log(type);
    // $.ajax({
    //   url: "/item_generation/new",
    //   type: "POST",
    //   data: { name, type },
    //   success: () => console.log("Success !")
    // });
    // const response = await fetch("/item_generation/new", {
    //   headers: {
    //     "Content-Type": "application/json"
    //   },
    //   method: "POST",
    //   body: JSON.stringify({
    //     name,
    //     type
    //   })
    // });
    console.log(response);
    const data = response.json();
    console.log(data);
  };

  return (
    <form onSubmit={e => onSubmit(e)} className="form">
      <h3>Create a new pastry/fruit</h3>
      <input
        type="text"
        placeholder="title"
        onChange={e => setName(e.target.value)}
        required
      />
      <select
        onChange={e => setType(e.target.value)}
        required
        defaultValue={type}
      >
        <option value="Pastry">Pastry</option>
        <option value="Fruit">Fruit</option>
      </select>
      <button type="submit">Create</button>
    </form>
  );
};

export default Form;
