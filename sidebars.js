/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation
 The sidebars can be generated from the filesystem, or explicitly defined here.
 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  bittensorSidebar: [
    "index",
    "whats-new-in-docs",
    {
      type: "category",
      label: "Learn Bittensor Concepts",
      collapsible: true,
      collapsed: false,
      items: [
        "learn/introduction", 
        "learn/bittensor-building-blocks",
        "learn/anatomy-of-incentive-mechanism",
      ],
    },
    {
      type: "category",
      label: "Get Started",
      collapsible: true,
      collapsed: false,
      items: [
        "getting-started/installation", 
        "getting-started/wallets",
      ],
    },
    {
      type: "category",
      label: "Subnets",
      collapsible: true,
      collapsed: false,
      items: [
        "subnets/create-a-subnet", 
        "subnets/preparing-for-subnet",
        "subnets/run-a-subnet-miner",
        "subnets/run-a-subnet-validator",
        "subnets/working-with-subnets",
        "subnets/code-walkthrough-text-prompting",
      ],
    },
    // "clients/clients",
    "staking-and-delegation/staking-and-delegation",
    "reference/btcli",
    "reference/bittensor-api-ref",
    "validating/yuma-consensus",
    "governance/protocol",
    "governance/senate",
    "reference/testnet",
   // "bittensor-api/index",
    "glossary/glossary",
  ],
};

module.exports = sidebars;
