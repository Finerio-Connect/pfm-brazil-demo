import { memo } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Header from './header/Header';
import { AccountsPage, CardsPage, MyInvestmentsPage, MyLoansPage, MyProductsPage, PFMPage } from './pages/subpages';

import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import AccountsComponent from './pages/accounts/Accounts';
import ConsumeConsentPage from './pages/subpages/ConsumeConsentPage';
import TransactionsComponent from './pages/transactions/Transactions';
import ConsentComponent from './pages/consentimiento/Consentimiento';
import BudgetsComponent from './pages/budgets/Budgets';
import CategoriesComponent from './pages/categories/Categories';
/* import CategoriesComponent from './pages/categories/Categories';
import SummaryComponent from './pages/summary/Summary'; */

function App() {
  const { pathname } = useLocation();
  return (
    <>
      {pathname !== '/consume-consent' && <Header />}
      <div className="main-container">
        <Routes>
          <Route path="/" element={<MyProductsPage />} />
          <Route path="/meus-produtos" element={<MyProductsPage />} />
          <Route path="/contas" element={<AccountsPage />} />
          <Route path="/cartoes" element={<CardsPage />} />
          <Route path="/meus-emprestimos" element={<MyLoansPage />} />
          <Route path="/meus-investimentos" element={<MyInvestmentsPage />} />
          <Route path="/consume-consent" element={<ConsumeConsentPage />} />
          <Route path="/pfm" element={<PFMPage />}>
            <Route path="" element={<ConsentComponent />} />
            <Route path="cuentas" element={<AccountsComponent />} />
            <Route path="movimientos" element={<TransactionsComponent />} />
            {/** <Route path="resumen" element={<SummaryComponent />} /> */}
            <Route path="categorias" element={<CategoriesComponent />} />
            <Route path="presupuestos" element={<BudgetsComponent />} />
          </Route>
        </Routes>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          closeOnClick
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </>
  );
}

export default memo(App);
