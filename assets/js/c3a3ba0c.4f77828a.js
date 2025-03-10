"use strict";(self.webpackChunkCreatorWorkflowsNow=self.webpackChunkCreatorWorkflowsNow||[]).push([[236],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>k});var o=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)a=r[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=o.createContext({}),s=function(e){var t=o.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,k=u["".concat(p,".").concat(c)]||u[c]||m[c]||r;return a?o.createElement(k,i(i({ref:t},d),{},{components:a})):o.createElement(k,i({ref:t},d))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var s=2;s<r;s++)i[s]=a[s];return o.createElement.apply(null,i)}return o.createElement.apply(null,a)}c.displayName="MDXCreateElement"},80:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var o=a(7462),n=(a(7294),a(3905));const r={id:"configuration",title:"4. Configurando o Process Mining",sidebar_label:"4. Configurando o Process Mining",hide_table_of_contents:!0},i=void 0,l={unversionedId:"guide/configuration",id:"guide/configuration",title:"4. Configurando o Process Mining",description:"Configurando um Projeto Personalizado",source:"@site/playbooks/pm-automation/guide/04-configuration.md",sourceDirName:"guide",slug:"/guide/configuration",permalink:"/playbooks/playbooks/pm-automation/guide/configuration",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"configuration",title:"4. Configurando o Process Mining",sidebar_label:"4. Configurando o Process Mining",hide_table_of_contents:!0},sidebar:"pmautomation",previous:{title:"3. Utilizando Projeto Sample",permalink:"/playbooks/playbooks/pm-automation/guide/sample"},next:{title:"3. An\xe1lise dos Resultados",permalink:"/playbooks/playbooks/pm-automation/guide/results"}},p={},s=[{value:"Configurando um Projeto Personalizado",id:"configurando-um-projeto-personalizado",level:2},{value:"1\ufe0f\u20e3 Criando um Novo Projeto",id:"1\ufe0f\u20e3-criando-um-novo-projeto",level:3},{value:"2\ufe0f\u20e3 Aplicando Filtros Avan\xe7ados",id:"2\ufe0f\u20e3-aplicando-filtros-avan\xe7ados",level:3},{value:"3\ufe0f\u20e3 Executando a Descoberta de Automa\xe7\xe3o",id:"3\ufe0f\u20e3-executando-a-descoberta-de-automa\xe7\xe3o",level:3},{value:"\ud83c\udfaf <strong>Conclus\xe3o</strong>",id:"-conclus\xe3o",level:3}],d={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,o.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"configurando-um-projeto-personalizado"},"Configurando um Projeto Personalizado"),(0,n.kt)("p",null,"Al\xe9m dos projetos sample carregados automaticamente, voc\xea pode configurar um projeto de ",(0,n.kt)("strong",{parentName:"p"},"Process Mining")," com filtros personalizados e tabelas espec\xedficas. Isso permite uma an\xe1lise detalhada de diferentes processos e conjuntos de dados."),(0,n.kt)("h3",{id:"1\ufe0f\u20e3-criando-um-novo-projeto"},"1\ufe0f\u20e3 Criando um Novo Projeto"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Acesse ",(0,n.kt)("strong",{parentName:"p"},"Process Mining Workspace"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clique em ",(0,n.kt)("inlineCode",{parentName:"p"},"New Project")," e escolha ",(0,n.kt)("inlineCode",{parentName:"p"},"Custom Process Mining Project"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Selecione a ",(0,n.kt)("strong",{parentName:"p"},"tabela principal")," para an\xe1lise:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Incident")," para an\xe1lise de suporte e incidentes."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HR Case")," para processos de RH."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Change Request")," para mudan\xe7as operacionais."),(0,n.kt)("li",{parentName:"ul"},"Outras tabelas customizadas da sua inst\xe2ncia."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Defina os filtros de escopo"),", como:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Data de cria\xe7\xe3o")," (ex.: incidentes dos \xfaltimos 6 meses)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Status")," (ex.: somente incidentes resolvidos)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Grupo Respons\xe1vel")," (ex.: somente chamados do time de Suporte N\xedvel 2)."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Ajuste as ",(0,n.kt)("strong",{parentName:"p"},"defini\xe7\xf5es de atividade"),":"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Ativa\xe7\xe3o do rastreamento de estados (",(0,n.kt)("inlineCode",{parentName:"li"},"State"),")."),(0,n.kt)("li",{parentName:"ul"},"An\xe1lise de reatribui\xe7\xf5es (",(0,n.kt)("inlineCode",{parentName:"li"},"Assignment Group"),")."),(0,n.kt)("li",{parentName:"ul"},"Outras transi\xe7\xf5es importantes para o fluxo do processo."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Confirme a cria\xe7\xe3o do projeto e aguarde o processamento dos dados."))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"2\ufe0f\u20e3-aplicando-filtros-avan\xe7ados"},"2\ufe0f\u20e3 Aplicando Filtros Avan\xe7ados"),(0,n.kt)("p",null,"Para an\xe1lises mais detalhadas, voc\xea pode personalizar os filtros conforme o contexto do processo:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Tipo de Filtro"),(0,n.kt)("th",{parentName:"tr",align:null},"Exemplo de Configura\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Per\xedodo de An\xe1lise")),(0,n.kt)("td",{parentName:"tr",align:null},"\xdaltimos 3, 6 ou 12 meses")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Status")),(0,n.kt)("td",{parentName:"tr",align:null},"Resolvido, Em Andamento, Fechado")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Grupo Respons\xe1vel")),(0,n.kt)("td",{parentName:"tr",align:null},"Suporte N1, Suporte N2, Equipe de RH")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Canal de Abertura")),(0,n.kt)("td",{parentName:"tr",align:null},"E-mail, Chat, Portal, Automa\xe7\xe3o")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Motivo de Espera")),(0,n.kt)("td",{parentName:"tr",align:null},"Aguardando Cliente, Aguardando Aprovador")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"3\ufe0f\u20e3-executando-a-descoberta-de-automa\xe7\xe3o"},"3\ufe0f\u20e3 Executando a Descoberta de Automa\xe7\xe3o"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Acesse ",(0,n.kt)("strong",{parentName:"p"},"Automation Discovery Reports"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Clique em ",(0,n.kt)("inlineCode",{parentName:"p"},"New Report")," e selecione a ",(0,n.kt)("strong",{parentName:"p"},"tabela do seu projeto")," como fonte de dados.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Escolha a ",(0,n.kt)("strong",{parentName:"p"},"taxonomia de an\xe1lise"),", como:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ITSM")," para processos de suporte."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"Predictive AIOps")," para opera\xe7\xf5es automatizadas."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"HR Service Delivery")," para fluxos de RH."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Execute a an\xe1lise e aguarde a gera\xe7\xe3o do relat\xf3rio.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Avalie as ",(0,n.kt)("strong",{parentName:"p"},"oportunidades de automa\xe7\xe3o detectadas"),", incluindo:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Deflections poss\xedveis")," (incidentes que poderiam ser resolvidos automaticamente)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Oportunidades Virtual Agent Ready")," (prontas para automa\xe7\xe3o via Virtual Agent)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Tempo m\xe9dio de resolu\xe7\xe3o estimado e impacto na produtividade"),".")))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"-conclus\xe3o"},"\ud83c\udfaf ",(0,n.kt)("strong",{parentName:"h3"},"Conclus\xe3o")),(0,n.kt)("p",null,"Seguindo esses passos, voc\xea pode configurar projetos personalizados para analisar ",(0,n.kt)("strong",{parentName:"p"},"qualquer processo dentro da organiza\xe7\xe3o"),", garantindo insights mais precisos e acion\xe1veis para automa\xe7\xe3o e otimiza\xe7\xe3o."))}m.isMDXComponent=!0}}]);