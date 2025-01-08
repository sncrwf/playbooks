---
id: recommendation
title: "4. Quantificar o Valor e Gerar Recomendações"
sidebar_label: "4. Quantificar o Valor e Gerar Recomendações"
hide_table_of_contents: true
---

## Introdução

A **Clustering Recommendations Utility** auxilia no cálculo dos benefícios potenciais de incidentes e requisições em termos de:
- Desvio de Volume de Incidentes
- Desvio de Volume de Requisições
- Desvio de Volume de Casos
- Desvio de Volume de Casos de RH
- Desvio de Volume de Incidentes de Segurança
- Desvio de Volume de Chamadas
- Desvio de Volume de Interações
- Redução do Esforço Manual com Automção

## Configurar a Clustering Recommendations Utility

1. Abra **Clustering Recommendations > Financial Factors**.
2. Verifique os valores padrão nos registros de configuração.

3. Altere os valores padrão para **Desvio de Volume de Incidentes** conforme o impacto esperado com a implementação das recomendações do cliente.

**Definições Padrão:**
- **Custo por Incidente (Agente):** Custo médio considerado para o gerenciamento de incidentes pela organização de suporte.
- **Horas estimadas trabalhadas por ano:** Número estimado de horas anuais de trabalho por país. Pode ser selecionado em uma lista.
- **Salário anual estimado por Funcionário/Solicitante:** Usado para calcular o custo para o funcionário/solicitante, considerando o salário anual completo.
- **Salário por Hora do Funcionário/Solicitante:** 
  - Cálculo: [Salário anual estimado] / [Horas estimadas trabalhadas por ano].
- **% de Horas Reclamadas pelo Funcionário/Solicitante:** Melhoria estimada em termos de horas economizadas.
- **Custo economizado por Funcionário/Solicitante:** 
  - Cálculo: [Salário por hora do Funcionário/Solicitante] / [% de Horas Reclamadas].
- **Campo de Hora de Término para cálculo de duração:** Usado para calcular o tempo de duração para Incidentes. Para outras tabelas (casos, requisições, etc.), o campo "closed_at" é usado.
- **% de Melhoria Ano 1-3 (para Cumpridores):** Representa a melhoria incremental ao longo do tempo para os responsáveis. Por exemplo, 25% no Ano 1 significa que 25% dos incidentes serão desviados devido à introdução da automação e do agente virtual.
- **% de Melhoria Ano 1-3 (para Funcionários/Solicitantes):** Representa a melhoria incremental ao longo do tempo para os usuários finais.

4. Altere os valores padrão para **Desvio de Volume de Requisições** e outras categorias conforme aplicável.

---

### Parâmetros de Entrada Padrão para:

**Incidentes de Segurança:**
- Configurações específicas baseadas em riscos de segurança.

**Casos de CSM:**
- Ajustados conforme os custos associados a serviços ao cliente.

**Casos de RH:**
- Parâmetros de custo para automação de processos relacionados a RH.

**Chamadas e Interações:**
- Baseados em cenários de desvio de chamadas e automação de interações.

**Redução de Esforço Manual:**
- Direcionados para o impacto da automação no esforço de agentes.

---

## Selecionar Recomendações e Capacidades

Você pode selecionar as **Recomendações** da biblioteca de recomendações disponível nesta aplicação (como Desvio de Volume ou Redução de Esforço Manual).

1. Caso precise criar uma nova recomendação, use o botão **New** na janela de dados de recomendação.
2. Escolha as **Capacidades** que habilitam o caso de uso de automação recomendado.
3. As Capacidades possuem links diretos para a documentação do ServiceNow.

---

## Criar Tarefas de Melhoria Contínua

1. Clique no link **Create Improvement Task**.
2. Uma nova tarefa de **Continual Improvement Management (CIM)** será criada automaticamente.
3. Atribua a tarefa CIM a um responsável.
4. A tarefa CIM será associada ao registro de recomendação.

---

## Calcular os Benefícios

1. Para cada registro de Recomendação de Clustering, selecione o **Benefício Principal** que se aplica ao cluster.
2. Defina as condições para identificar os registros com palavras-chave que se aplicam ao cluster. Exemplo: 
   - short_description LIKE "account" AND short_description LIKE "new" para incidentes relacionados a "nova conta".
3. Salve o registro.
4. Clique no botão **Calculate Benefit**.
5. Revise o resultado. Você pode ajustar os valores padrão (campos editáveis na seção de Benefício Potencial) e executar novamente o cálculo.

**Notas Importantes:**
- Altere o Benefício Principal ou as palavras-chave e salve antes de recalcular o benefício.
- Configure os Fatores Financeiros pelo link **Configure Financial Factors**.
- Resete os fatores financeiros padrão clicando em **Reset Financial Factors**.

**Exemplo de Benefícios Calculados:**
- **Redução de Custos:** [Custo total por Cumpridores] * [% Melhoria por Ano].
- **Melhoria de Produtividade:** [Impacto de produtividade do usuário final] * [% Melhoria por Ano para Funcionários].
- **Benefício Total Quantificado (3 anos):** Soma da Redução de Custos e Melhoria de Produtividade.
