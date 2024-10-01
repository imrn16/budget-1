import React, { useState } from "react";
import "../css/BudgetCard.css";
import "../css/Header.css";
import { useBudgets } from "../contexts/BudgetsContext";
import ViewExpensesModal from "./ViewExpensesModal";
import AddExpenseModal from "./AddExpenseModal";

function BudgetCard({ title, maxMoney, curMoney, ident }) {
	const { budgets, deleteBudget, } = useBudgets();
	const [showVEM, setShowVEM, ] = useState(false)

	const [showAEM, setShowAEM] = useState(false);

	function handleAEM( val ) {
		setShowAEM(val);
	}


	function handleClose() {
	}

	return (
		<>
		<div style={{ borderRadius: "10px", border: "1px solid #000", width: "28%", padding: "10px", margin: '10px', display: "flex", flexDirection: "column", justifyContent: "left" }}>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<button onClick={() => deleteBudget(ident)}>X</button>
				<h2>{title}</h2>
				<div style={{ display: "flex", justifyContent: "row" }}>
					<h2>$ </h2>
					<h3>/ {maxMoney}</h3>
				</div>
			</div>

			<h3>Progress Bar</h3>
			<div style={{ display: "flex", justifyContent: "space-around" }}>
				<button className="button" onClick={() => handleAEM(true)}>Add Expense</button>
				<button className="button" onClick={() => setShowVEM(true)}>View Expense</button>
			</div>
		</div>

		<ViewExpensesModal
			budgetID={ident}
			show={showVEM}
			handleClose={() => setShowVEM(false)}

		 />

		 <AddExpenseModal 
		 	budgetID={ident}
			show={showAEM}
			setShow={setShowAEM}
			header={false}
			handleClose={() => handleAEM(false)}

		 />
		</>
	);
}

export default BudgetCard;
