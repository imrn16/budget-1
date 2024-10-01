import React, { useEffect, useState } from "react";
import "../css/Header.css";
import { useBudgets } from "../contexts/BudgetsContext";

function AddBudgetModal({ show, handleClose, children }) {
	const [name, setName] = useState("");
	const [max, setMax] = useState();
	const { addBudget } = useBudgets();

	function handleSubmit() {
		addBudget({ name: name, max: max });
		handleClose();
        setName('')
        setMax('')
	}

	return (
		<div style={{ display: show ? "block" : "none" }}>
			<button onClick={handleClose}>X</button>
			<h1>Add Budget</h1>
			<h3>Name</h3>
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
			/>
			<h3>Budget</h3>
			<input
				type="number"
				onChange={(e) => setMax(e.target.value)}
				value={max}></input>
			<button onClick={handleSubmit}>Add</button>
		</div>
	);
}

export default AddBudgetModal;
