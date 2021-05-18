import React, { useState } from 'react';
import Modal from 'react-modal';
import { Dashboard } from './Components/Dashboard';
import { Header } from './Components/Header';
import { NewTransactionModal } from './Components/NewTransactionModal';
import { GlobalStyle } from './styles/global';
import { TransactionProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  function handleOpenNewTransactionModal() {
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }

  return (
    <TransactionProvider>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard />
      <NewTransactionModal  isOpen={isNewTransactionModalOpen} onCloseNewTransactionModal={handleCloseNewTransactionModal} />
      <GlobalStyle />
    </TransactionProvider>  
  );
}
