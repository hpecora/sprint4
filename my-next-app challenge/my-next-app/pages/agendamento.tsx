import React, { useState } from 'react';
import styles from './agendamento.module.css';

const AgendamentoForm = () => {
  const [dataAgendamento, setDataAgendamento] = useState('');
  const [placaVeiculo, setPlacaVeiculo] = useState('');
  const [oficinaProxima, setOficinaProxima] = useState('');

  const handleAgendar = (e: React.FormEvent) => {
    e.preventDefault();
    // Função de envio do formulário
    console.log('Agendamento realizado:', { dataAgendamento, placaVeiculo, oficinaProxima });
  };

  return (
    <div className={styles.pageBackground}>
      <form onSubmit={handleAgendar} className={styles.divForm}>
        <h2 className={styles.title}>Agendamento de Serviço Oficina Porto</h2>

        <label className={styles.label} htmlFor="dataAgendamento">Data de Agendamento</label>
        <input
          type="date"
          id="dataAgendamento"
          value={dataAgendamento}
          onChange={(e) => setDataAgendamento(e.target.value)}
          className={styles.select}
          required
        />

        <label className={styles.label} htmlFor="placaVeiculo">Placa do Veículo</label>
        <input
          type="text"
          id="placaVeiculo"
          placeholder="Ex.: ABC-1234"
          value={placaVeiculo}
          onChange={(e) => setPlacaVeiculo(e.target.value)}
          className={styles.select}
          required
        />

        <label className={styles.label} htmlFor="oficinaProxima">Oficina Mais Próxima</label>
        <input
          type="text"
          id="oficinaProxima"
          placeholder="Ex.: Oficina Centro"
          value={oficinaProxima}
          onChange={(e) => setOficinaProxima(e.target.value)}
          className={styles.select}
          required
        />

        <button type="submit" className={styles.submitButton}>Agendar</button>
        <a href="/home" className={styles.cancelLink}>Voltar ao Início</a>
      </form>
    </div>
  );
};

export default AgendamentoForm;
