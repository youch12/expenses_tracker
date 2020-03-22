export const ADD_NDF = "ADD_NDF";

export function createData(date, name, description, paymentMethod, amount) {
    return { date, name, description, paymentMethod, amount };
}

const expensesData = [
    createData(new Date(), 'Elvis Presley', 'Taxi toto', 'Cash', 312.44),
    createData(new Date(2019, 1, 1), 'Paul McCartney', 'Train toto', 'Cash', 866.99),
    createData(new Date(2019, 7, 10), 'Tom Scholz', 'Avion titi', 'Carte', 100.81),
    createData(new Date(), 'Michael Jackson', 'Frais visas', 'Cheque', 654.39),
    createData(new Date(), 'Bruce Springsteen', 'Repas client', 'Cheque', 212.79),
]



export default function reducer(state = {
    expenses: expensesData,
}, action) {
    switch (action.type) {
        case ADD_NDF:
            return {
                ...state,
                expenses: [...state.expenses, action.newExpense]
            };
        default:
            return state;
    }
}

export const addNdf = (newExpense) => ({ type: ADD_NDF, newExpense })