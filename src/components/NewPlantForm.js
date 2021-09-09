import React, {useState} from "react";

function NewPlantForm({issueRequest, setIssueRequest}) {
const [newPlant, setNewPlant] = useState({
  name: '',
  image: '',
  price: 0,
})

function handleChange(event) {
  setNewPlant({
    ...newPlant,
    [event.target.name]: event.target.value
  });
}

function handleNewPlant(event) {
  event.preventDefault()
  fetch('http://localhost:6001/plants', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(newPlant)
  }).then(setIssueRequest(!issueRequest));
  setNewPlant({
    name: '',
    image: '',
    price: 0,
  })
}

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleNewPlant}>
        <input onChange={handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange={handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange={handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button onChange={handleChange} type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
