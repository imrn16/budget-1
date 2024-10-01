import { createContext, useContext, useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BudgetContext = createContext();

export function useBudgets() {
	return useContext(BudgetContext);
}

export const BudgetProvider = ({ children }) => {
	const [budgets, setBudgets] = useLocalStorage("budgets", [{ id: "1", name: "Total", max: "" }]);
	const [expenses, setExpenses] = useLocalStorage("expenses", [{ id: "", name: "", val: Number }]);


    // function headerAEM({val}) {
    //     if (header == true && )
    // }

	function addBudget({ name, max }) {
		console.log(`${name} has a budget of ${max}`);
		setBudgets((prev) => [...prev, { id: crypto.randomUUID(), name: name, max: max }]);
		console.log(budgets);
	}

	function deleteBudget(id) {
		console.log(`Budget with the id ${id} has been deleted`);

		setBudgets(budgets.filter((prev) => prev.id !== id));
	}

    function deleteExpense(id, name) {
        setExpenses(expenses.filter((indiv) => !(indiv.id === id && indiv.name === name)))
    }

	function addExpense({desc, val, budgID}) {
		console.log(`The expense ${desc} with value $${val} was added to budget with id ${budgID}`);

		setExpenses((prev) => [...prev, { id: budgID, name: desc, val: val }]);
	}

	return <BudgetContext.Provider value={{ addBudget, budgets, setBudgets, deleteBudget, addExpense, expenses, deleteExpense }}>{children}</BudgetContext.Provider>;
};
