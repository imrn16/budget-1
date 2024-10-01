import React from "react";
import { useBudgets } from "../contexts/BudgetsContext";

function ViewExpensesModal({ show, handleClose, budgetID }) {
	const { budgets, deleteExpense } = useBudgets();
	const { expenses } = useBudgets();

	function handleSubmit() {}

	return (
		<div style={{ display: show ? "block" : "none" }}>
			<h3>Expenses - View</h3>
			<button onClick={handleClose}>x</button>
			{/* List of expenses that have a budget id that matches the id of the selected budget card*/}
			{expenses
				.filter((indiv) => indiv.id === budgetID)
				.map((indiv) => (
					<div style={{display: 'flex', justifyContent: 'space-around'}} key={indiv.id}>
						<span value={indiv.name}>{indiv.name}</span>
                        <div>
                        <span >{`$${indiv.val}`}</span>
						<button onClick={() => deleteExpense(budgetID, indiv.name)}>x</button>
                        </div>
					</div>
				))}
		</div>
	);
}

export default ViewExpensesModal;
