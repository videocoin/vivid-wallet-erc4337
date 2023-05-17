/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../common";
import type { VividAccount, VividAccountInterface } from "../VividAccount";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "anAdmin",
        type: "address",
      },
      {
        internalType: "contract IEntryPoint",
        name: "anEntryPoint",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "contract IEntryPoint",
        name: "entryPoint",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "admin",
        type: "address",
      },
    ],
    name: "VividAccountInitialized",
    type: "event",
  },
  {
    inputs: [],
    name: "addDeposit",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "emailHash",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "entryPoint",
    outputs: [
      {
        internalType: "contract IEntryPoint",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "dest",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "func",
        type: "bytes",
      },
    ],
    name: "execute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address[]",
        name: "dest",
        type: "address[]",
      },
      {
        internalType: "bytes[]",
        name: "func",
        type: "bytes[]",
      },
    ],
    name: "executeBatch",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getDeposit",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getNonce",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_emailHash",
        type: "string",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC721Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "proxiableUUID",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_owner",
        type: "address",
      },
    ],
    name: "setOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "tokensReceived",
    outputs: [],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "address",
            name: "sender",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "nonce",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "initCode",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "callData",
            type: "bytes",
          },
          {
            internalType: "uint256",
            name: "callGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "verificationGasLimit",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "preVerificationGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxFeePerGas",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "maxPriorityFeePerGas",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "paymasterAndData",
            type: "bytes",
          },
          {
            internalType: "bytes",
            name: "signature",
            type: "bytes",
          },
        ],
        internalType: "struct UserOperation",
        name: "userOp",
        type: "tuple",
      },
      {
        internalType: "bytes32",
        name: "userOpHash",
        type: "bytes32",
      },
      {
        internalType: "uint256",
        name: "missingAccountFunds",
        type: "uint256",
      },
    ],
    name: "validateUserOp",
    outputs: [
      {
        internalType: "uint256",
        name: "validationData",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address payable",
        name: "withdrawAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdrawDepositTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60e034620001a157601f6200278e38819003918201601f19168301916001600160401b03831184841017620001a6578084926040948552833981010312620001a1578051906001600160a01b03908183168303620001a157602001519081168103620001a1573060805260c05260a05260005460ff8160081c166200014c5760ff8082161062000110575b6040516125d19081620001bd82396080518181816106ae01528181610eca01526110a7015260a0518181816117d201528181611d230152818161201c0152818161220e01526122b9015260c051818181610b7401528181610c6901528181610d4f0152818161121e01528181611415015281816114fd0152818161203f015261217a0152f35b60ff90811916176000557f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb3847402498602060405160ff8152a1386200008a565b60405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b6064820152608490fd5b600080fd5b634e487b7160e01b600052604160045260246000fdfe6080604052600436101561001b575b361561001957600080fd5b005b60003560e01c806223de29146101be57806301ffc9a7146101b557806313af4035146101ac578063150b7a02146101a357806318dfb3c71461019a5780633659cfe61461019157806336cb8477146101885780633a871cdd1461017f5780634a58db19146101765780634d44560d1461016d5780634f1ef2861461016457806352d1902d1461015b5780638da5cb5b14610152578063b0d691fe14610149578063b61d27f614610140578063bc197c8114610137578063c399ec881461012e578063d087d28814610125578063f23a6e611461011c578063f62d1888146101135763f851a4400361000e5761010e611786565b61000e565b5061010e6115fd565b5061010e61156b565b5061010e61147a565b5061010e61139b565b5061010e6112d3565b5061010e611242565b5061010e6111d2565b5061010e61117c565b5061010e611060565b5061010e610e48565b5061010e610cf0565b5061010e610c26565b5061010e610b0c565b5061010e6109ec565b5061010e610659565b5061010e6104e7565b5061010e610424565b5061010e610395565b5061010e6102a4565b5061010e610218565b73ffffffffffffffffffffffffffffffffffffffff8116036101e557565b600080fd5b9181601f840112156101e55782359167ffffffffffffffff83116101e557602083818601950101116101e557565b50346101e55760c07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e5576102536004356101c7565b61025e6024356101c7565b6102696044356101c7565b67ffffffffffffffff6084358181116101e55761028a9036906004016101ea565b505060a4359081116101e5576100199036906004016101ea565b50346101e55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e5576004357fffffffff0000000000000000000000000000000000000000000000000000000081168091036101e557807f150b7a02000000000000000000000000000000000000000000000000000000006020921490811561036b575b8115610341575b506040519015158152f35b7f01ffc9a70000000000000000000000000000000000000000000000000000000091501438610336565b7f4e2312e0000000000000000000000000000000000000000000000000000000008114915061032f565b50346101e55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e5576004356103d1816101c7565b6103d9611d0c565b7fffffffffffffffffffff0000000000000000000000000000000000000000ffff75ffffffffffffffffffffffffffffffffffffffff00006000549260101b16911617600055600080f35b50346101e55760807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e55761045f6004356101c7565b61046a6024356101c7565b60643567ffffffffffffffff81116101e55761048a9036906004016101ea565b505060206040517f150b7a02000000000000000000000000000000000000000000000000000000008152f35b9181601f840112156101e55782359167ffffffffffffffff83116101e5576020808501948460051b0101116101e557565b50346101e55760407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e55767ffffffffffffffff600480358281116101e55761053890369083016104b6565b60249291929384359081116101e55761055490369084016104b6565b61055c612162565b8083036105fc5760005b83811061056f57005b6105a061058561058083878a611dea565b611e08565b61059a610593848688611e66565b3691610e11565b9061257b565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff81146105cf57600101610566565b866011867f4e487b7100000000000000000000000000000000000000000000000000000000600052526000fd5b6064846013886020604051937f08c379a00000000000000000000000000000000000000000000000000000000085528401528201527f77726f6e67206172726179206c656e67746873000000000000000000000000006044820152fd5b50346101e55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e557600435610695816101c7565b73ffffffffffffffffffffffffffffffffffffffff90817f000000000000000000000000000000000000000000000000000000000000000016916106db833014156117f6565b61070a7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc938285541614611881565b610712611d0c565b6040519061071f8261090d565b600082527f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff161561075957505061001991506119b3565b6020600491604094939451928380927f52d1902d00000000000000000000000000000000000000000000000000000000825286165afa60009181610839575b50610826576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b0390fd5b610019936108349114611928565b611a9f565b61085b91925060203d8111610862575b6108538183610945565b81019061190c565b9038610798565b503d610849565b90600182811c921680156108b2575b602083101461088357565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b91607f1691610878565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b67ffffffffffffffff811161090057604052565b6109086108bc565b604052565b6020810190811067ffffffffffffffff82111761090057604052565b6060810190811067ffffffffffffffff82111761090057604052565b90601f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0910116810190811067ffffffffffffffff82111761090057604052565b60208082528251818301819052939260005b8581106109d8575050507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f8460006040809697860101520116010190565b818101830151848201604001528201610998565b50346101e5576000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610b095760405190806001805491610a3083610869565b80865292828116908115610ac15750600114610a67575b610a6385610a5781870382610945565b60405191829182610986565b0390f35b92508083527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf65b828410610aa9575050508101602001610a5782610a63610a47565b80546020858701810191909152909301928101610a8e565b869550610a6396935060209250610a579491507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001682840152151560051b8201019293610a47565b80fd5b50346101e5577ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc6060813601126101e5576004359067ffffffffffffffff82116101e5576101609082360301126101e55773ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000163303610bc857610bad610a639160243590600401612236565b610bb8604435611cd2565b6040519081529081906020820190565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601c60248201527f6163636f756e743a206e6f742066726f6d20456e747279506f696e74000000006044820152fd5b506000807ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610b095773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001681813b15610b0957602491604051928380927fb760faf900000000000000000000000000000000000000000000000000000000825230600483015234905af18015610ce3575b610cd7575080f35b610ce0906108ec565b80f35b610ceb61191b565b610ccf565b50346101e557600060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc360112610b0957600435610d2e816101c7565b610d36611d0c565b8173ffffffffffffffffffffffffffffffffffffffff807f00000000000000000000000000000000000000000000000000000000000000001692833b15610dc4576044908360405195869485937f205c287800000000000000000000000000000000000000000000000000000000855216600484015260243560248401525af18015610ce357610cd7575080f35b8280fd5b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f60209267ffffffffffffffff8111610e04575b01160190565b610e0c6108bc565b610dfe565b929192610e1d82610dc8565b91610e2b6040519384610945565b8294818452818301116101e5578281602093846000960137010152565b5060407ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e557600435610e7f816101c7565b60243567ffffffffffffffff81116101e557366023820112156101e557610eb0903690602481600401359101610e11565b9073ffffffffffffffffffffffffffffffffffffffff91827f00000000000000000000000000000000000000000000000000000000000000001692610ef7843014156117f6565b610f267f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc948286541614611881565b610f2e611d0c565b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd91435460ff1615610f6457505061001991506119b3565b6020600491604094939451928380927f52d1902d00000000000000000000000000000000000000000000000000000000825286165afa60009181611040575b5061102d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f45524331393637557067726164653a206e657720696d706c656d656e7461746960448201527f6f6e206973206e6f7420555550530000000000000000000000000000000000006064820152608490fd5b6100199361103b9114611928565b611b7e565b61105991925060203d8111610862576108538183610945565b9038610fa3565b50346101e55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e55773ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001630036110f8576040517f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc8152602090f35b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152603860248201527f555550535570677261646561626c653a206d757374206e6f742062652063616c60448201527f6c6564207468726f7567682064656c656761746563616c6c00000000000000006064820152fd5b50346101e55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e557602073ffffffffffffffffffffffffffffffffffffffff60005460101c16604051908152f35b50346101e55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b50346101e55760607ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e55760043561127e816101c7565b60443567ffffffffffffffff81116101e5576000916112ad6112a5849336906004016101ea565b610593612162565b9060208251920190602435905af16112c3611bde565b90156112cb57005b602081519101fd5b50346101e55760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e55761130e6004356101c7565b6113196024356101c7565b67ffffffffffffffff6044358181116101e55761133a9036906004016104b6565b50506064358181116101e5576113549036906004016104b6565b50506084359081116101e55761136e9036906004016101ea565b50506040517fbc197c81000000000000000000000000000000000000000000000000000000008152602090f35b50346101e55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e55760206040517f70a08231000000000000000000000000000000000000000000000000000000008152306004820152818160248173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561146d575b600091611450575b50604051908152f35b6114679150823d8111610862576108538183610945565b38611447565b61147561191b565b61143f565b50346101e55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e557610a636040517f35567e1a0000000000000000000000000000000000000000000000000000000081523060048201526000602482015260208160448173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000165afa90811561155e575b600091611540575b506040519081529081906020820190565b611558915060203d8111610862576108538183610945565b3861152f565b61156661191b565b611527565b50346101e55760a07ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e5576115a66004356101c7565b6115b16024356101c7565b60843567ffffffffffffffff81116101e5576115d19036906004016101ea565b505060206040517ff23a6e61000000000000000000000000000000000000000000000000000000008152f35b50346101e55760207ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e55760043567ffffffffffffffff81116101e557366023820112156101e55761165e903690602481600401359101610e11565b6116c06000549161168660ff8460081c161580948195611778575b8115611758575b50611e90565b826116b760017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff006000541617600055565b61172257611f8f565b6116c657005b6116f37fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff60005416600055565b604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb384740249890602090a1005b6117536101007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff6000541617600055565b611f8f565b303b1591508161176a575b5038611680565b6001915060ff161438611763565b600160ff8216109150611679565b50346101e55760007ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc3601126101e557602060405173ffffffffffffffffffffffffffffffffffffffff7f0000000000000000000000000000000000000000000000000000000000000000168152f35b156117fd57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f64656c656761746563616c6c00000000000000000000000000000000000000006064820152fd5b1561188857565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602c60248201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060448201527f6163746976652070726f787900000000000000000000000000000000000000006064820152fd5b908160209103126101e5575190565b506040513d6000823e3d90fd5b1561192f57565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602960248201527f45524331393637557067726164653a20756e737570706f727465642070726f7860448201527f6961626c655555494400000000000000000000000000000000000000000000006064820152fd5b803b15611a1b5773ffffffffffffffffffffffffffffffffffffffff7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc91167fffffffffffffffffffffffff0000000000000000000000000000000000000000825416179055565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201527f6f74206120636f6e7472616374000000000000000000000000000000000000006064820152fd5b90611aa9826119b3565b73ffffffffffffffffffffffffffffffffffffffff82167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a2805115801590611b76575b611af8575050565b611b739160008060405193611b0c85610929565b602785527f416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c60208601527f206661696c6564000000000000000000000000000000000000000000000000006040860152602081519101845af4611b6d611bde565b91611c0e565b50565b506000611af0565b90611b88826119b3565b73ffffffffffffffffffffffffffffffffffffffff82167fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b600080a2805115801590611bd657611af8575050565b506001611af0565b3d15611c09573d90611bef82610dc8565b91611bfd6040519384610945565b82523d6000602084013e565b606090565b91929015611c895750815115611c22575090565b3b15611c2b5790565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e74726163740000006044820152fd5b825190915015611c9c5750805190602001fd5b610822906040519182917f08c379a000000000000000000000000000000000000000000000000000000000835260048301610986565b80611cda5750565b600080808093337ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff150611b73611bde565b73ffffffffffffffffffffffffffffffffffffffff7f00000000000000000000000000000000000000000000000000000000000000001633148015611db1575b15611d5357565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600a60248201527f6f6e6c792061646d696e000000000000000000000000000000000000000000006044820152fd5b50303314611d4c565b507f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9190811015611dfb575b60051b0190565b611e03611dba565b611df4565b35611e12816101c7565b90565b9035907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe1813603018212156101e5570180359067ffffffffffffffff82116101e5576020019181360383136101e557565b9091611e7f92811015611e83575b60051b810190611e15565b9091565b611e8b611dba565b611e74565b15611e9757565b60846040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a65640000000000000000000000000000000000006064820152fd5b90601f8211611f28575050565b6001916000908382527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf6906020601f850160051c83019410611f85575b601f0160051c01915b828110611f7b5750505050565b8181558301611f6e565b9092508290611f65565b90815167ffffffffffffffff8111612155575b600190611fb881611fb38454610869565b611f1b565b602080601f8311600114612091575081929394600092612086575b50507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82841b9260031b1c19161790555b73ffffffffffffffffffffffffffffffffffffffff807f000000000000000000000000000000000000000000000000000000000000000016907f0000000000000000000000000000000000000000000000000000000000000000167f2936db2b9b8282af837b9f9ec596b11fe45b4c018800d4f048604d6bfc3730ca600080a3565b015190503880611fd3565b907fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08316956120e260016000527fb10e2d527612073b26eecdfd717e6a320cf44b4afac2b0732d9fcbe2b7fa0cf690565b926000905b88821061213e5750508385969710612107575b505050811b019055612004565b01517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff60f88460031b161c191690553880806120fa565b8087859682949686015181550195019301906120e7565b61215d6108bc565b611fa2565b73ffffffffffffffffffffffffffffffffffffffff807f000000000000000000000000000000000000000000000000000000000000000016331490811561220a575b50156121ac57565b60646040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602060248201527f6163636f756e743a206e6f74204f776e6572206f7220456e747279506f696e746044820152fd5b90507f0000000000000000000000000000000000000000000000000000000000000000163314386121a4565b6122969061229061059361229e9460405160208101917f19457468657265756d205369676e6564204d6573736167653a0a3332000000008352603c820152603c815261228181610929565b51902092610140810190611e15565b906124aa565b919091612321565b73ffffffffffffffffffffffffffffffffffffffff809116907f000000000000000000000000000000000000000000000000000000000000000016036122e357600090565b600190565b600511156122f257565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b61232a816122e8565b806123325750565b61233b816122e8565b600181036123a2576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e617475726500000000000000006044820152606490fd5b6123ab816122e8565b60028103612412576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e677468006044820152606490fd5b8061241e6003926122e8565b1461242557565b6040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45434453413a20696e76616c6964207369676e6174757265202773272076616c60448201527f75650000000000000000000000000000000000000000000000000000000000006064820152608490fd5b9060418151146000146124d457611e7f916020820151906060604084015193015160001a906124de565b5050600090600290565b9291907f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0831161256f5791608094939160ff602094604051948552168484015260408301526060820152600093849182805260015afa15612562575b815173ffffffffffffffffffffffffffffffffffffffff81161561255c579190565b50600190565b61256a61191b565b61253a565b50505050600090600390565b600091829182602083519301915af1612592611bde565b90156112cb575056fea2646970667358221220ac9ebc7fe8fa4c7b83c401ab6c6095c66c161a8f687d77bd038e31380ab06cf064736f6c63430008110033";

type VividAccountConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: VividAccountConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class VividAccount__factory extends ContractFactory {
  constructor(...args: VividAccountConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    anAdmin: PromiseOrValue<string>,
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<VividAccount> {
    return super.deploy(
      anAdmin,
      anEntryPoint,
      overrides || {}
    ) as Promise<VividAccount>;
  }
  override getDeployTransaction(
    anAdmin: PromiseOrValue<string>,
    anEntryPoint: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(anAdmin, anEntryPoint, overrides || {});
  }
  override attach(address: string): VividAccount {
    return super.attach(address) as VividAccount;
  }
  override connect(signer: Signer): VividAccount__factory {
    return super.connect(signer) as VividAccount__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): VividAccountInterface {
    return new utils.Interface(_abi) as VividAccountInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VividAccount {
    return new Contract(address, _abi, signerOrProvider) as VividAccount;
  }
}
