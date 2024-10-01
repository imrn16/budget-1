import logo from "./logo.svg";
import "./App.css";
import BudgetCard from "./components/BudgetCard";
import AddBudgetModal from "./components/AddBudgetModal";
import Header from "./components/Header";
import { useState } from "react";
import { useBudgets } from "./contexts/BudgetsContext";

function App() {
	const [showExpense, setShowExpense] = useState(false);
	const { budgets } = useBudgets();

	const showModalExpense = () => {
		setShowExpense(true);
	};

	return (
		<div className="App">
			<Header></Header>
			<div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', padding: '10px'}}>
			{budgets
				.slice()
				.reverse()
				.map((indiv) => {
					return (
						<BudgetCard
							ident={indiv.id}
							title={indiv.name}
							maxMoney={indiv.max}
							>
							
            </BudgetCard>
					);
				})}
				</div>
		</div>
	);
}

export default App;
