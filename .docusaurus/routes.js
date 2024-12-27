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
    component: ComponentCreator('/playbooks/playbooks/clustering-automation', 'e7f'),
    routes: [
      {
        path: '/playbooks/playbooks/clustering-automation/CHANGELOG',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/CHANGELOG', 'bc9'),
        exact: true
      },
      {
        path: '/playbooks/playbooks/clustering-automation/guide/clustering',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/guide/clustering', 'b07'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/clustering-automation/guide/playbook',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/guide/playbook', '801'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/clustering-automation/guide/recommendation',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/guide/recommendation', '8a9'),
        exact: true,
        sidebar: "clusteringautomation"
      },
      {
        path: '/playbooks/playbooks/clustering-automation/guide/results',
        component: ComponentCreator('/playbooks/playbooks/clustering-automation/guide/results', '0a5'),
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
    path: '/playbooks/',
    component: ComponentCreator('/playbooks/', '980'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
