![](https://i.imgur.com/mR5CsOr.png)

# Modifications for Vivid Wallet
* Support for Vivid-Wallet bundling operations. Added vividAccount.ts in src/preset/builder
* Split JsonRPCProvider API for node and bundler so that the standalone bunlder can be used (i.e. without integration with Ethereum node) 
# Getting started

A simple JS library for building ERC-4337 UserOperations.

> **🚀 Looking for access to hosted infrastructure to build your Smart Accounts? Check out [stackup.sh](https://www.stackup.sh/)!**

# Usage

See the `userop` documentation at [docs.stackup.sh](https://docs.stackup.sh/docs/useropjs).

# Contributing

## Prerequisites

- Node 16 or later

## Setup

Install dependencies:

```bash
yarn install
```

Run tests:

```bash
yarn test
```

# License

Distributed under the MIT License. See [LICENSE](./LICENSE) for more information.

# Contact

Feel free to direct any technical related questions to the `dev-hub` channel in the [Stackup Discord](https://discord.gg/VTjJGvMNyW).
