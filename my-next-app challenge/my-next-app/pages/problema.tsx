import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "./problema.module.css";

export default function FormProblemas() {
    const router = useRouter();
    const [categoria, setCategoria] = useState("motor");
    const [solucoes, setSolucoes] = useState([]);

    useEffect(() => {
        // Adiciona a classe de fundo ao body
        document.body.classList.add(styles.pageBackground);

        // Remove a classe ao desmontar o componente
        return () => {
            document.body.classList.remove(styles.pageBackground);
        };
    }, []);

    const handleChangeCategoria = async (e) => {
        const novaCategoria = e.target.value;
        setCategoria(novaCategoria);
    
        try {
            const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/problema/${novaCategoria}`);
            if (response.ok) {
                const data = await response.json();
                setSolucoes(data.solucao ? [data.solucao] : []); // Ajuste se `data` não for um array
            } else {
                console.error('Erro na resposta da API:', response.statusText);
                setSolucoes([]);
            }
        } catch (error) {
            console.error('Erro ao fazer fetch:', error);
        }
    };    

    return (
        <div className={styles.divForm}>
            <h1 className={styles.title}>Problema no Veículo</h1>
            <form className={styles.form}>
                <label className={styles.label} htmlFor="categoria">Onde é o problema?:</label>
                <select className={styles.select} name="categoria" value={categoria} onChange={handleChangeCategoria}>
                    <option value="motor">Motor</option>
                    <option value="suspensao">Suspensão</option>
                    <option value="funilaria">Funilaria</option>
                </select>

                <button type="submit" className={styles.submitButton}>
                    Enviar
                </button>
                <Link href="/home" className={styles.cancelLink}>
                    Voltar ao Início
                </Link>
            </form>

            {solucoes.length > 0 && (
                <ul className={styles.solutionList}>
                    <h3 style={{ textAlign: 'center', margin: '1rem 0', color: '#007bff' }}>Soluções para {categoria}</h3>
                    {solucoes.map((solucao, index) => (
                        <li key={index} className={styles.solutionItem}>{solucao}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}
