import React from "react";
import { useBudgets } from "../contexts/BudgetsContext";
import { useState, useRef, useEffect } from "react";

function AddExpenseModal({ show, setShow, budgetID, handleClose, header }) {
	const [desc, setDesc] = useState("");
	const [amt, setAmt] = useState();
	const { budgets, addExpense, showAEM, expenses } = useBudgets();
	const [option, setOption] = useState();

	function handleSubmit() {
		addExpense({desc: desc, val: amt, budgID: option});
        console.log(expenses)
        setShow(false)
        setDesc('')
        setAmt('')
	}

    useEffect(() => {
        if (!header) {
            setOption(budgetID);
        }
    }, [budgetID, header]);


	return (
		<div style={{ display: show ? "block" : "none" }}>
			<button onClick={handleClose}>X</button>
			<h1>Add Expense</h1>
			<h3>Description</h3>
			<input
				type="text"
				onChange={(e) => setDesc(e.target.value)}
				value={desc}
			/>
			<h3>Expense</h3>
			<input
				type="number"
				onChange={(e) => setAmt(e.target.value)}
				value={amt}></input>

			<div>
				{header ? (
					<>
						<h3>Budget</h3>
						<select
							value={option}
							onChange={(e) => setOption(e.target.value)}>
							{budgets.map((indiv) => {
								return <option value={indiv.id}>{`${indiv.name}`}</option>;
							})}
						</select>
					</>
				) : null}

                {/*Use this button to add desc and val to expenses under the existing ID.
                for card - current id
                for header - selected id */}
				<button  onClick={handleSubmit}>Add</button>
			</div>
		</div>
	);
}

export default AddExpenseModal;
