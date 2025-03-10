---
id: sample
title: "3. Utilizando Projeto Sample"
sidebar_label: "3. Utilizando Projeto Sample"
hide_table_of_contents: true
---
O process mining já trás pré-configurado um projeto de sample para avaliação da tabela de incidentes com limite de 3.6k registros para incidentes do últimos 7 dias. Iremos utilizar este projeto inicialmente.

## Configurando o Projeto de Avaliação

1. Navegue até **Process Mining Workspace**.
2. Selecione o projeto `Incident Management Evaluation` na aba shared.
3. Selecione a opção Mine (Sample) e confirme.
4. Aguarde o processo de mining finalizar.

:::note
Caso o processo de sample apresente erro ao realizar o mining, é provavel que os filtros do projeto sample não retornem resultados (Ex: Não existem incidentes abertos nos últimos 7 dias)
:::

## Executando a Descoberta de Automação

1. Acesse **Automation Discovery Reports**.
2. Selecione `New Report` e escolha a tabela de incidentes como fonte de dados.
3. Defina a **taxonomia** apropriada para análise (ITSM ou Predictive AIOps).
4. Execute o relatório e aguarde a análise ser concluída.
5. Avalie as oportunidades de automação detectadas, incluindo:
   - **Possíveis Deflections** (incidentes que poderiam ter sido resolvidos automaticamente).
   - **Oportunidades Virtual Agent Ready** (prontas para automação via VA).
   - **Tempo Médio de Resolução estimado**.
