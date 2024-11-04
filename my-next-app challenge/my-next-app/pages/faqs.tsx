import React, { useState } from 'react';
import styles from './faqs.module.css';
import Link from 'next/link';

interface Question {
    question: string;
    answer: string;
}

const questions: Question[] = [
    {
        question: "O que está coberto pelo seguro de automóveis?",
        answer: "O seguro pode cobrir danos a terceiros, roubo, colisão, incêndio e assistência em viagem. As coberturas variam conforme a apólice."
    },
    {
        question: "Como faço para acionar o seguro em caso de acidente?",
        answer: "Reporte o sinistro à seguradora, forneça documentos como boletim de ocorrência e fotos do acidente, e siga as instruções da empresa."
    },
    {
        question: "Quais são os critérios para calcular o valor do seguro?",
        answer: "O valor do seguro depende da idade do motorista, tipo de veículo, uso do carro e histórico de sinistros. Cada fator pode aumentar ou reduzir o prêmio."
    },
    {
        question: "Posso adicionar motoristas ao meu seguro?",
        answer: "Sim, você pode adicionar motoristas à sua apólice. Isso pode afetar o custo do seguro e depende das regras da seguradora."
    },
    {
        question: "O que fazer se meu carro for roubado?",
        answer: "Notifique a polícia e registre um boletim de ocorrência. Em seguida, informe a seguradora e forneça a documentação necessária para o processo de indenização."
    }
];

export default function Faqs() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const handleClick = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className={styles.content}>
            
            <h1 className={styles.titulo}>FAQs</h1>
            <p>Perguntas Frequentes:</p>
            <div className={styles.perguntas}>
                {questions.map((item, index) => (
                    <div key={index} className={styles.pergunta}>
                        <div className={styles.perguntaHeader} onClick={() => handleClick(index)}>
                            <h1>{item.question}</h1>
                            <span className={styles.toggleIcon}>
                                {expandedIndex === index ? '-' : '+'}
                            </span>
                        </div>
                        {expandedIndex === index && (
                            <p className={styles.resposta}>{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
            <Link href="/home" className="link-home">Voltar ao início</Link>
        </div>
        
    );
}
