---
id: preparacao
title: "2. Preparando o Ambiente"
sidebar_label: "2. Preparando o Ambiente"
hide_table_of_contents: true
---

## Ativar o Plugin Process Mining

Process Mining é uma solução que irá apoiar o time em analisar processos e idenficar ineficências utilizando informações e atividades de tabelas.

1. Acesse a instância de sub-prod clonada com perfil de Administrador.
2. Navegue até os Plugins (**All > System Definition > Plugins**).
3. Caso sua instância seja anterior à versão Xanadu, clique em `Sync now` para sincronizar os plugins disponíveis.
4. Aguarde a sincronização finalizar.
5. Pesquise por **"Process Mining"** na barra de pesquisa e filtre apenas por **Products**.
6. Clique no produto **Process Mining**.

   :::info
   Caso o produto com nome **APENAS** de **Process Mining** não apareça, clique em `View more`.
   :::

7. Se sua instância for anterior a Xanadu, clique no botão `Install` ou `Proceed to update`.
8. Clique em `Proceed`.
9. Selecione `Install now` e `Install`.
10. Aguarde o processo de instalação finalizar.

## Ativar o Plugin Automation Discovery (Opcional) 

O Automation Discovery é complementar ao process mining e ajudará a identificar automaticamente oportunidades de automação com modelos pré-carregados.

1. Acesse a instância de sub-prod clonada com perfil de Administrador.
2. Navegue até **All > System Applications > All Available Applications > All**.
3. Pesquise por **"Automation Discovery"** usando a barra de pesquisa.
4. Clique no produto **Automation Discovery (sn_auto_discovery)**.
5. No diálogo de instalação, revise as dependências listadas.
6. O **Automation Discovery** depende dos plugins **Predictive Intelligence (com.glide.platform_ml)** e **NLU Workbench (com.glide.nlu)**, que serão ativados automaticamente caso não estejam instalados.
7. Clique em `Install` e aguarde a instalação ser concluída.

## Ativar o Plugin Automation Center (Opcional) 

O Automation Center auxilia no gerenciamento das automações, gerenciando a ideias, implementação e controles das automações ativas, além de demonstrar KPIs de ganho.

1. Acesse a instância de sub-prod clonada com perfil de Administrador.
2. Navegue até **All > System Applications > All Available Applications > All**.
3. Pesquise por **"Automation Center"** usando a barra de pesquisa.
4. Clique no produto **Automation Center (sn_automation_center)**.
5. No diálogo de instalação, revise as dependências listadas.
6. O **Automation Center** pode depender de outros plugins relacionados à automação, que serão ativados automaticamente caso não estejam instalados.
7. Clique em `Install` e aguarde a instalação ser concluída.

