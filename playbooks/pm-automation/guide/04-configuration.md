---
id: configuration
title: "4. Configurando o Process Mining"
sidebar_label: "4. Configurando o Process Mining"
hide_table_of_contents: true
---

## Configurando um Projeto Personalizado

Além dos projetos sample carregados automaticamente, você pode configurar um projeto de **Process Mining** com filtros personalizados e tabelas específicas. Isso permite uma análise detalhada de diferentes processos e conjuntos de dados.

### 1️⃣ Criando um Novo Projeto

1. Acesse **Process Mining Workspace**.
2. Clique em `New Project` e escolha `Custom Process Mining Project`.
3. Selecione a **tabela principal** para análise:
   - `Incident` para análise de suporte e incidentes.
   - `HR Case` para processos de RH.
   - `Change Request` para mudanças operacionais.
   - Outras tabelas customizadas da sua instância.

4. **Defina os filtros de escopo**, como:
   - `Data de criação` (ex.: incidentes dos últimos 6 meses).
   - `Status` (ex.: somente incidentes resolvidos).
   - `Grupo Responsável` (ex.: somente chamados do time de Suporte Nível 2).

5. Ajuste as **definições de atividade**:
   - Ativação do rastreamento de estados (`State`).
   - Análise de reatribuições (`Assignment Group`).
   - Outras transições importantes para o fluxo do processo.

6. Confirme a criação do projeto e aguarde o processamento dos dados.

---

### 2️⃣ Aplicando Filtros Avançados

Para análises mais detalhadas, você pode personalizar os filtros conforme o contexto do processo:

| Tipo de Filtro           | Exemplo de Configuração |
|-------------------------|------------------------|
| **Período de Análise**  | Últimos 3, 6 ou 12 meses |
| **Status**              | Resolvido, Em Andamento, Fechado |
| **Grupo Responsável**   | Suporte N1, Suporte N2, Equipe de RH |
| **Canal de Abertura**   | E-mail, Chat, Portal, Automação |
| **Motivo de Espera**    | Aguardando Cliente, Aguardando Aprovador |

---

### 3️⃣ Executando a Descoberta de Automação

1. Acesse **Automation Discovery Reports**.
2. Clique em `New Report` e selecione a **tabela do seu projeto** como fonte de dados.
3. Escolha a **taxonomia de análise**, como:
   - `ITSM` para processos de suporte.
   - `Predictive AIOps` para operações automatizadas.
   - `HR Service Delivery` para fluxos de RH.

4. Execute a análise e aguarde a geração do relatório.
5. Avalie as **oportunidades de automação detectadas**, incluindo:
   - **Deflections possíveis** (incidentes que poderiam ser resolvidos automaticamente).
   - **Oportunidades Virtual Agent Ready** (prontas para automação via Virtual Agent).
   - **Tempo médio de resolução estimado e impacto na produtividade**.

---

### 🎯 **Conclusão**
Seguindo esses passos, você pode configurar projetos personalizados para analisar **qualquer processo dentro da organização**, garantindo insights mais precisos e acionáveis para automação e otimização.
