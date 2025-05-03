type Question = {
    id: string;
    text: string;
    options: {
        id: string;
        text: string;
        value: {
            estrategia: number;
            competitivo: number;
            fiel: number;
            analitico: number;
            apaixonado: number;
        };
    }[];
};

export const questions: Question[] = [
    {
        id: "q1",
        text: "Como você prefere que seu time jogue?",
        options: [
            {
                id: "q1a1",
                text: "Com estratégias bem definidas e execução precisa",
                value: {
                    estrategia: 10,
                    competitivo: 2,
                    fiel: 5,
                    analitico: 8,
                    apaixonado: 4,
                },
            },
            {
                id: "q1a2",
                text: "De forma agressiva, buscando dominar o adversário",
                value: {
                    estrategia: 3,
                    competitivo: 10,
                    fiel: 5,
                    analitico: 2,
                    apaixonado: 8,
                },
            },
            {
                id: "q1a3",
                text: "Adaptando-se ao estilo do adversário",
                value: {
                    estrategia: 8,
                    competitivo: 4,
                    fiel: 6,
                    analitico: 10,
                    apaixonado: 3,
                },
            },
            {
                id: "q1a4",
                text: "Com paixão e entrega total",
                value: {
                    estrategia: 4,
                    competitivo: 7,
                    fiel: 8,
                    analitico: 3,
                    apaixonado: 10,
                },
            },
        ],
    },
    {
        id: "q2",
        text: "O que você mais valoriza em um jogador?",
        options: [
            {
                id: "q2a1",
                text: "Habilidade mecânica e reflexos rápidos",
                value: {
                    estrategia: 5,
                    competitivo: 9,
                    fiel: 3,
                    analitico: 6,
                    apaixonado: 7,
                },
            },
            {
                id: "q2a2",
                text: "Inteligência de jogo e tomada de decisões",
                value: {
                    estrategia: 10,
                    competitivo: 4,
                    fiel: 5,
                    analitico: 9,
                    apaixonado: 3,
                },
            },
            {
                id: "q2a3",
                text: "Lealdade ao time e espírito de equipe",
                value: {
                    estrategia: 6,
                    competitivo: 3,
                    fiel: 10,
                    analitico: 5,
                    apaixonado: 8,
                },
            },
            {
                id: "q2a4",
                text: "Capacidade de se adaptar a diferentes situações",
                value: {
                    estrategia: 8,
                    competitivo: 6,
                    fiel: 7,
                    analitico: 10,
                    apaixonado: 5,
                },
            },
        ],
    },
    {
        id: "q3",
        text: "Como você reage quando seu time perde?",
        options: [
            {
                id: "q3a1",
                text: "Analiso o que deu errado para entender os problemas",
                value: {
                    estrategia: 7,
                    competitivo: 3,
                    fiel: 6,
                    analitico: 10,
                    apaixonado: 4,
                },
            },
            {
                id: "q3a2",
                text: "Fico frustrado, mas continuo apoiando",
                value: {
                    estrategia: 5,
                    competitivo: 6,
                    fiel: 10,
                    analitico: 4,
                    apaixonado: 8,
                },
            },
            {
                id: "q3a3",
                text: "Quero que o time seja mais agressivo na próxima",
                value: {
                    estrategia: 4,
                    competitivo: 10,
                    fiel: 5,
                    analitico: 3,
                    apaixonado: 7,
                },
            },
            {
                id: "q3a4",
                text: "Sofro intensamente com cada derrota",
                value: {
                    estrategia: 3,
                    competitivo: 5,
                    fiel: 7,
                    analitico: 2,
                    apaixonado: 10,
                },
            },
        ],
    },
    {
        id: "q4",
        text: "O que você mais gosta de fazer durante as partidas?",
        options: [
            {
                id: "q4a1",
                text: "Analisar as estratégias e movimentações",
                value: {
                    estrategia: 10,
                    competitivo: 3,
                    fiel: 5,
                    analitico: 9,
                    apaixonado: 4,
                },
            },
            {
                id: "q4a2",
                text: "Torcer e vibrar com cada jogada",
                value: {
                    estrategia: 3,
                    competitivo: 7,
                    fiel: 6,
                    analitico: 2,
                    apaixonado: 10,
                },
            },
            {
                id: "q4a3",
                text: "Compartilhar o momento com outros fãs",
                value: {
                    estrategia: 5,
                    competitivo: 6,
                    fiel: 10,
                    analitico: 4,
                    apaixonado: 8,
                },
            },
            {
                id: "q4a4",
                text: "Observar as estatísticas e desempenho individual",
                value: {
                    estrategia: 7,
                    competitivo: 4,
                    fiel: 5,
                    analitico: 10,
                    apaixonado: 3,
                },
            },
        ],
    },
    {
        id: "q5",
        text: "Qual aspecto do esports mais te atrai?",
        options: [
            {
                id: "q5a1",
                text: "A competição e a busca pela vitória",
                value: {
                    estrategia: 6,
                    competitivo: 10,
                    fiel: 5,
                    analitico: 7,
                    apaixonado: 8,
                },
            },
            {
                id: "q5a2",
                text: "As histórias e a jornada dos jogadores",
                value: {
                    estrategia: 5,
                    competitivo: 4,
                    fiel: 9,
                    analitico: 6,
                    apaixonado: 10,
                },
            },
            {
                id: "q5a3",
                text: "A evolução das táticas e meta do jogo",
                value: {
                    estrategia: 10,
                    competitivo: 5,
                    fiel: 6,
                    analitico: 9,
                    apaixonado: 4,
                },
            },
            {
                id: "q5a4",
                text: "A comunidade e o sentimento de pertencimento",
                value: {
                    estrategia: 4,
                    competitivo: 3,
                    fiel: 10,
                    analitico: 5,
                    apaixonado: 8,
                },
            },
        ],
    },
];