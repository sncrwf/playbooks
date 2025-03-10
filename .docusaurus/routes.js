import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/playbooks/__docusaurus/debug',
    component: ComponentCreator('/playbooks/__docusaurus/debug', '474'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/config',
    component: ComponentCreator('/playbooks/__docusaurus/debug/config', '7c8'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/content',
    component: ComponentCreator('/playbooks/__docusaurus/debug/content', '6c6'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/globalData',
    component: ComponentCreator('/playbooks/__docusaurus/debug/globalData', 'f40'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/metadata',
    component: ComponentCreator('/playbooks/__docusaurus/debug/metadata', 'a8e'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/registry',
    component: ComponentCreator('/playbooks/__docusaurus/debug/registry', 'ded'),
    exact: true
  },
  {
    path: '/playbooks/__docusaurus/debug/routes',
    component: ComponentCreator('/playbooks/__docusaurus/debug/routes', '716'),
    exact: true
  },
  {
    path: '/playbooks/search',
    component: ComponentCreator('/playbooks/search', '77b'),
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
    path: '/playbooks/playbooks/manual-automation',
    component: ComponentCreator('/playbooks/playbooks/manual-automation', '29a'),
    routes: [
      {
        path: '/playbooks/playbooks/manual-automation/CHANGELOG',
        component: ComponentCreator('/playbooks/playbooks/manual-automation/CHANGELOG', '18a'),
        exact: true
      },
      {
        path: '/playbooks/playbooks/manual-automation/guide/action-plan',
        component: ComponentCreator('/playbooks/playbooks/manual-automation/guide/action-plan', '6d6'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/manual-automation/guide/analysis',
        component: ComponentCreator('/playbooks/playbooks/manual-automation/guide/analysis', '0b3'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/manual-automation/guide/dashboards',
        component: ComponentCreator('/playbooks/playbooks/manual-automation/guide/dashboards', '104'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/manual-automation/guide/definition',
        component: ComponentCreator('/playbooks/playbooks/manual-automation/guide/definition', '0dc'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/manual-automation/guide/preparation',
        component: ComponentCreator('/playbooks/playbooks/manual-automation/guide/preparation', '4bf'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/manual-automation/guide/prioritization-roi',
        component: ComponentCreator('/playbooks/playbooks/manual-automation/guide/prioritization-roi', '73f'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/manual-automation/playbook-guide-pdf',
        component: ComponentCreator('/playbooks/playbooks/manual-automation/playbook-guide-pdf', 'cd9'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/manual-automation/Survey',
        component: ComponentCreator('/playbooks/playbooks/manual-automation/Survey', '954'),
        exact: true
      }
    ]
  },
  {
    path: '/playbooks/playbooks/pm-automation',
    component: ComponentCreator('/playbooks/playbooks/pm-automation', 'e8b'),
    routes: [
      {
        path: '/playbooks/playbooks/pm-automation/CHANGELOG',
        component: ComponentCreator('/playbooks/playbooks/pm-automation/CHANGELOG', 'b39'),
        exact: true
      },
      {
        path: '/playbooks/playbooks/pm-automation/guide/configuration',
        component: ComponentCreator('/playbooks/playbooks/pm-automation/guide/configuration', 'c9c'),
        exact: true,
        sidebar: "pmautomation"
      },
      {
        path: '/playbooks/playbooks/pm-automation/guide/introducao',
        component: ComponentCreator('/playbooks/playbooks/pm-automation/guide/introducao', '01c'),
        exact: true,
        sidebar: "pmautomation"
      },
      {
        path: '/playbooks/playbooks/pm-automation/guide/preparacao',
        component: ComponentCreator('/playbooks/playbooks/pm-automation/guide/preparacao', '2ad'),
        exact: true,
        sidebar: "pmautomation"
      },
      {
        path: '/playbooks/playbooks/pm-automation/guide/results',
        component: ComponentCreator('/playbooks/playbooks/pm-automation/guide/results', '794'),
        exact: true,
        sidebar: "pmautomation"
      },
      {
        path: '/playbooks/playbooks/pm-automation/guide/sample',
        component: ComponentCreator('/playbooks/playbooks/pm-automation/guide/sample', 'f4e'),
        exact: true,
        sidebar: "pmautomation"
      },
      {
        path: '/playbooks/playbooks/pm-automation/playbook-guide-pdf',
        component: ComponentCreator('/playbooks/playbooks/pm-automation/playbook-guide-pdf', '3c2'),
        exact: true
      },
      {
        path: '/playbooks/playbooks/pm-automation/Survey',
        component: ComponentCreator('/playbooks/playbooks/pm-automation/Survey', '910'),
        exact: true
      }
    ]
  },
  {
    path: '/playbooks/',
    component: ComponentCreator('/playbooks/', '980'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
