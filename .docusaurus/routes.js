import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/playbooks/__docusaurus/debug',
    component: ComponentCreator('/playbooks/__docusaurus/debug', 'b6b'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/config',
    component: ComponentCreator('/playbooks/__docusaurus/debug/config', 'dc3'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/content',
    component: ComponentCreator('/playbooks/__docusaurus/debug/content', '749'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/globalData',
    component: ComponentCreator('/playbooks/__docusaurus/debug/globalData', '221'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/metadata',
    component: ComponentCreator('/playbooks/__docusaurus/debug/metadata', '886'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/registry',
    component: ComponentCreator('/playbooks/__docusaurus/debug/registry', 'ca9'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/routes',
    component: ComponentCreator('/playbooks/__docusaurus/debug/routes', 'bb7'),
    exact: true
  },
  {
    path: '/playbooks/search',
    component: ComponentCreator('/playbooks/search', 'e78'),
    exact: true
  },
  {
    path: '/playbooks/playbooks/clustering-automation',
    component: ComponentCreator('/playbooks/playbooks/clustering-automation', 'a14'),
    routes: [
      {
        path: '/playbooks/playbooks/clustering-automation/CHANGELOG',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/CHANGELOG', 'bc9'),
        exact: true
      },
      {
        path: '/playbooks/playbooks/clustering-automation/guide/clustering',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/guide/clustering', '249'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/clustering-automation/guide/preparacao',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/guide/preparacao', 'f85'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/clustering-automation/guide/recommendation',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/guide/recommendation', '7db'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/clustering-automation/guide/results',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/guide/results', '0b2'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/clustering-automation/playbook-guide-pdf',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/playbook-guide-pdf', 'db1'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/clustering-automation/Survey',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/Survey', '006'),
        exact: true
      }
    ]
  },
  {
    path: '/playbooks/playbooks/itsm-manual-automation',
    component: ComponentCreator('/playbooks/playbooks/itsm-manual-automation', '8a5'),
    routes: [
      {
        path: '/playbooks/playbooks/itsm-manual-automation/CHANGELOG',
        component: ComponentCreator('/playbooks/playbooks/itsm-manual-automation/CHANGELOG', 'ffe'),
        exact: true
      },
      {
        path: '/playbooks/playbooks/itsm-manual-automation/guide/action-plan',
        component: ComponentCreator('/playbooks/playbooks/itsm-manual-automation/guide/action-plan', 'bb7'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/itsm-manual-automation/guide/analysis',
        component: ComponentCreator('/playbooks/playbooks/itsm-manual-automation/guide/analysis', 'ab7'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/itsm-manual-automation/guide/dashboards',
        component: ComponentCreator('/playbooks/playbooks/itsm-manual-automation/guide/dashboards', '0e0'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/itsm-manual-automation/guide/definition',
        component: ComponentCreator('/playbooks/playbooks/itsm-manual-automation/guide/definition', 'f64'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/itsm-manual-automation/guide/preparation',
        component: ComponentCreator('/playbooks/playbooks/itsm-manual-automation/guide/preparation', 'aea'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/itsm-manual-automation/guide/prioritization-roi',
        component: ComponentCreator('/playbooks/playbooks/itsm-manual-automation/guide/prioritization-roi', '0af'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/itsm-manual-automation/playbook-guide-pdf',
        component: ComponentCreator('/playbooks/playbooks/itsm-manual-automation/playbook-guide-pdf', 'ef8'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/itsm-manual-automation/Survey',
        component: ComponentCreator('/playbooks/playbooks/itsm-manual-automation/Survey', '23b'),
        exact: true
      }
    ]
  },
  {
    path: '/playbooks/',
    component: ComponentCreator('/playbooks/', 'd85'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
