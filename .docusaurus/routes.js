import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
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
    path: '/playbooks/',
    component: ComponentCreator('/playbooks/', '980'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
