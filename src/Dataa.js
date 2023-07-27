import React, { useState } from "react";
import "./Data.css";
import { RiDeleteBin6Line } from "react-icons/ri";

function Dataa() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);
  const [show, toggleShow] = useState(true);
  const [search, setSearch] = useState("");

  const [con, setCon] = useState();
  function addItem() {
    if (!newItem) {
      alert("Press enter an item.");
      return;
    }

    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
      convalue: con,
    };

    setItems((oldList) => [...oldList, item]);

    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="app">
      <button
        onClick={() => toggleShow(!show)}
        className="btn btn-success mt-3"
      >
        {show ? "hide contact" : "create contact"}
      </button>
      {show && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="text-center">phoneBook</h1>

          <input
            type="text"
            placeholder="Enter Name"
            class="form-control w-50 text-center d"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <br />
          <input
            type="text"
            class="form-control w-50 text-center d"
            placeholder="Enter Contact"
            value={con}
            onChange={(e) => setCon(e.target.value)}
          />
          <br />
          <button onClick={() => addItem()} className="btn btn-info texts">
            Add
          </button>
        </form>
      )}

      <ul>
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search contacts"
          className="form-control w-50 d mt-3"
        />
        {items
          .sort((a, b) => (a.value > b.value ? 1 : -1))
          .filter((item) => {
            // typeof str === 'string' ? str.toLowerCase() : '';
            return search.toLowerCase() === ""
              ? item
              : item.value.toLowerCase().includes(search);
          })
          .map((item) => {
            return (
              <div className="border">
                <li key={item.id}>
                  <span className="data">
                    <span className="bold">Name: </span>
                    {item.value}
                  </span>
                  <span className="data1">
                    <span className="bold">Contact:</span> {item.convalue}
                  </span>
                  <button
                    className="delete-button"
                    onClick={() => deleteItem(item.id)}
                  >
                    <RiDeleteBin6Line className="red" />
                  </button>
                </li>
              </div>
            );
          })}
      </ul>
    </div>
  );
}

export default Dataa;
