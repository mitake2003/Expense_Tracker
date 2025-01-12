# Expense Tracker

## Overview
This is a simple Expense Tracker web application built using React for the frontend and Local Storage for data persistence. The application allows users to track their budget and expenses in a structured and user-friendly way. All data is saved locally in the browser, ensuring that user information is retained even after refreshing or closing the application.

## Features
- **Add Transactions**: Users can add transactions as either expenses or budgets by specifying the amount and type.
- **Expense and Budget Overview**: Displays the total expense and budget amounts in real time.
- **Transaction History**: Shows a table of all transactions with options to remove individual entries.
- **Persistent Data**: Utilizes Local Storage to save transactions, ensuring data is available on page reload.

## Technologies Used
- **React**: For building the user interface and managing state.
- **Local Storage**: For storing and retrieving transaction data.

## Application Structure
1. **Input Fields**:
   - Input for the transaction amount.
   - Input for the transaction type (e.g., salary, groceries).
   - Selection between "Expense" and "Budget" categories.
   - "Add" button to add the transaction to the list.

2. **Expense and Budget Display**:
   - Displays the total expenses and the budget values dynamically as transactions are added or removed.

3. **Transaction Table**:
   - Lists all added transactions with columns for type, amount, and an option to remove.
   - Each transaction has a "Remove" button to delete it from the list and update the totals.

## Installation and Setup
1. Clone the repository to your local machine:
   ```bash
   git clone git@github.com:mitake2003/Expense_Tracker.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Expense_Tracker
   ```

3. Install the required dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## How to Use
1. Enter the amount and type of the transaction in the respective input fields.
2. Select whether the transaction is an "Expense" or a "Budget".
3. Click the "Add" button to save the transaction.
4. View the updated totals in the "Expense" and "Budget" sections.
5. To remove a transaction, click the "Remove" button in the transaction table.

## Screenshot
![Expense Tracker](./public/Screenshot%20(70).png)

## Future Improvements
- Include a filter/search feature for transactions.
- Implement user authentication to sync data across devices.
- Add a visual representation of expenses (e.g., pie charts or bar graphs).

## License
This project is open-source and available under the [MIT License](./LICENSE).

