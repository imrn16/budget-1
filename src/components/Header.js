import React, { useEffect, useState } from "react";
import "../css/Header.css";
import AddBudgetModal from "./AddBudgetModal";
import AddExpenseModal from "./AddExpenseModal";
import { useBudgets } from "../contexts/BudgetsContext";


function Header(show, showEx, handleClose, children) {
	const [showABM, setShowABM] = useState(false);
	//const { } = useBudgets()
	const [ showHeadAEM, setShowHeadAEM] = useState(false)

	function handleAEM(val) {
		setShowHeadAEM(val)
	}


	return (
		<>
			<div style={{ display: "flex", justifyContent: "space-between" }}>
				<h1
					className={"Title"}
					style={{ display: "flex", justifyContent: "flex-start" }}>
					Budgets
				</h1>

				<div style={{ display: "flex", justifyContent: "space-between", margin: "0px 50px" }}>
					<button
						className="button"
						onClick={() => setShowABM(true)}>
						Add Budget
					</button>
					<button className="button"
					onClick={() => handleAEM(true)}>Add Expense</button>
				</div>
			</div>
			<AddBudgetModal
				show={showABM}
				handleClose={() => setShowABM(false)}
			/>
			<AddExpenseModal
				// id={}
				show={showHeadAEM}
				handleClose={() => handleAEM(false)}
				header={true}
				/>
		</>
	);
}

export default Header;
