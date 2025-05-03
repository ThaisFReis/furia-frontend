export const botResponses: Record<string, string> = {
    // --- COMANDOS BÁSICOS --- //
    '/start': `🟡 **Bem-vindo ao FURIA FAN CHAT!** 🟢\n\nDigite um comando:\n\n📰 Notícias: /news\n🎮 Elenco: /elenco\n📅 Jogos: /proximojogo\n📊 Estatísticas: /stats\n\n💬 Ou explore: /quiz, /vaifuria, /clip`,

    '/help': `🆘 **COMANDOS DISPONÍVEIS**\n\n🔥 **Torcida**:\n/vaifuria - Ativa o HypeMode\n/grito - Grito da torcida\n\n📌 **Time**:\n/elenco - Elenco atual\n/proximojogo - Próximos jogos\n/resultados - Últimos resultados\n\n🎮 **Interação**:\n/quiz - Quiz "Qual jogador é você?"\n/meuperfil - Seu perfil de fã\n\n💡 Dica: Tente /news para últimas notícias!`,

    // --- NOTÍCIAS E ATUALIZAÇÕES --- //
    '/news': `📰 **ÚLTIMAS NOTÍCIAS DA FURIA** (25/05/2024):\n\n🔥 **FURIA vence Heroic e avança para a final do BLAST!**\n- KSCERATO com 1.45 rating no jogo\n- Próximo adversário: Vitality\n\n🔗 Leia mais: [furia.gg/news](https://furia.gg)`,

    '/patrocinadores': `🏢 **PATROCINADORS OFICIAIS**:\n\n- 🎮 **Redragon** (Periféricos)\n- 💻 **Pichau** (Hardware)\n- 🥤 **Gatorade** (Energético)\n\n📌 Parceria nova? Digite /news`,

    // --- ELENCO E JOGADORES --- //
    '/elenco': `🇧🇷 **ELENCO FURIA CS2** (2024):\n\n🔫 **Awper**: KSCERATO\n🎤 **IGL**: FalleN\n💣 **Entry Fragger**: arT\n🕶️ **Clutcher**: yuurih\n🔫 **Rifler**: chelo\n\n💡 Digite /stats [jogador] para detalhes!`,

    '/stats KSCERATO': `📊 **KSCERATO em 2024** (HLTV):\n\n⭐ Rating: **1.28** (#5 mundial)\n🔫 Headshots: **63.5%**\n💥 Dano/round: **86.1**\n🏆 MVP: **4 vezes**\n\n📌 *"Melhor AWPer do Brasil!"* - Gaules`,

    // --- JOGOS E RESULTADOS --- //
    '/proximojogo': `🎮 **PRÓXIMO JOGO**:\n\n🆚 FURIA vs. Team Vitality\n📅 28/05 - 19h (BRT)\n🏆 BLAST Premier 2024\n📺 Transmissão: [Twitch FURIA](https://twitch.tv/furiagg)\n\n💬 Digite /vaifuria para hype!`,

    '/resultados': `📅 **ÚLTIMOS 3 JOGOS**:\n\n✅ **FURIA 2-1 Heroic** (Mirage 16-12)\n❌ **FURIA 0-2 FaZe** (Inferno 14-16)\n✅ **FURIA 2-0 NAVI** (Nuke 16-8)\n\n📊 Estatísticas completas: /stats`,

    // --- TORCIDA E ENGAGEMENT --- //
    '/vaifuria': `🚨 **HYPEMODE ATIVADO!**\n\n👇 **TORCEDORES, DIGITEM #VAIFURIA** 👇\n\n[Contagem regressiva: 3... 2... 1...]\n\n🔥 **FURIA GANHOU O ROUND COM 1v3 DO yuurih!** 🔥\n\n🎉 Reaja com 🐺 para celebrar!`,

    '/grito': `🎤 **GRITO OFICIAL DA TORCIDA**:\n\n"*FURIA, EU TÔ AQUI!\nME OUVE GRITAR!\nSE VOCÊ PERDER,\nEU VOU TORCER!*\n\n👉 Reaja com 🔊 para participar!`,

    // --- QUIZ E PERFIL --- //
    '/quiz': `🎮 **QUIZ: QUAL JOGADOR DA FURIA É SEU ESTILO?**\n\nResponda:\n1. Prefere jogar de AWP ou Rifler?\n2. Clutch ou Entry fragger?\n3. Estilo: Agressivo ou Calculista?\n\nDigite /quiz 1,2,3 (ex: /quiz 1,2,1)`,

    '/meuperfil': `👤 **SEU PERFIL DE FÃ**:\n\nNome: [Usuário]\n📅 Torcedor desde: 2022\n🌟 Nível: **FURIOZO** (Top 10%)\n🎮 Quiz: **Estilo: FalleN (IGL)**\n\n🔗 Vincule redes: /vincular`,

    // --- EXTRAS --- //
    '/clip': `🎥 **CLIPE DO DIA**:\n\n"KSCERATO 1v4 vs. G2 no Major!"\n🔗 [Assista aqui](https://youtube.com/clip)\n\n💬 *"Isso foi ABSURDO!"* - Gaules`,

    '/curiosidade': `🤯 **SABIA QUE?**\n\nA FURIA já teve:\n- 27 vitórias seguidas em Mirage (2022)\n- 5 títulos internacionais em 2023\n- Primeiro time BR a vencer FaZe na Europa\n\n📌 Fonte: HLTV.org`,

    // --- FALLBACK --- //
    'default': `❌ Comando não reconhecido. Digite /help para ver a lista.`
};

// Tipagem para respostas dinâmicas (ex: stats de jogadores)
export const dynamicResponses: Record<string, (arg?: string) => string> = {
    '/stats': (player = '') => {
        const stats: Record<string, string> = {
            'KSCERATO': '📊 KSCERATO: 1.28 rating (Top 5 HLTV)',
            'FalleN': '📊 FalleN: 1.10 rating (78% ADR)',
            'default': '⚠️ Jogador não encontrado. Tente /elenco'
        };
        return stats[player] || stats['default'];
    }
};
