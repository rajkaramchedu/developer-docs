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
		{
		type: 'link',
		href: 'https://docs.bittensor.com',
		label: "Search",
		className: 'sidebarSearch',
	},
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
      label: "Tutorials",
      collapsible: true,
      collapsed: false,
      items: [
        "tutorials/basic-subnet-tutorials",
      ],
    },
    {
      type: "category",
      label: "Subnets",
      collapsible: true,
      collapsed: false,
      items: [
        "subnets/checklist-for-subnet",
        "subnets/create-a-subnet", 
        "subnets/register-and-participate",
        "subnets/subnet-hyperparameters",
        "subnets/working-with-subnets",
        "subnets/code-walkthrough-text-prompting",
      ],
    },
    "reference/btcli",
    "emissions",
    // "reference/bittensor-api-ref",
    "delegation",
    "yuma-consensus",
    "governance",
    "senate",
    "glossary",
  ],
};

module.exports = sidebars;
