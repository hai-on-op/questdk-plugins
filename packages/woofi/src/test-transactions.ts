import {
  type SwapActionParams,
  GreaterThanOrEqual,
} from '@rabbitholegg/questdk'
import { parseEther, parseUnits, zeroAddress as NATIVE_TOKEN } from 'viem'
import { type TestParams, Chains, createTestCase } from '@rabbitholegg/questdk-plugin-utils'

const SWAP_NATIVE: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0x9a67df384ec63f6cf960ef7e33287ea61491e415',
    to: '0x4c4af8dbc524681930a27b2f1af5bcc8062e6fb7',
    hash: '0x245cb83dff8fb3d52f334e021c19db9089f1bd99002e201997c522b227183f0c',
    input:
      '0x7dc20382000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc80000000000000000000000000000000000000000000000000314b3d2e4230000000000000000000000000000000000000000000000000000000000001dd50a060000000000000000000000009a67df384ec63f6cf960ef7e33287ea61491e4150000000000000000000000009a67df384ec63f6cf960ef7e33287ea61491e415',
    value: '222000000000000000',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    tokenIn: NATIVE_TOKEN, // ETH
    tokenOut: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', // USDC.e
    amountIn: GreaterThanOrEqual(parseEther('0.222')),
    amountOut: GreaterThanOrEqual(parseUnits('500', 6)),
    recipient: '0x9a67df384ec63f6cf960ef7e33287ea61491e415',
  },
}

const EXTERNAL_SWAP_NATIVE: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 10,
    from: '0x64932054aa75da578146a8b2e107c19d307cc35a',
    to: '0x4c4af8dbc524681930a27b2f1af5bcc8062e6fb7',
    hash: '0xb6925e122938cd52a2ffae6ae7d76a1271f7a32596626a92693396a1252a7278',
    input:
      '0x199b83fa0000000000000000000000001111111254eeb25477b68fb85ed929f73a9605820000000000000000000000001111111254eeb25477b68fb85ed929f73a960582000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff85000000000000000000000000000000000000000000000000003c6568f12e80010000000000000000000000000000000000000000000000000000000002456d1600000000000000000000000064932054aa75da578146a8b2e107c19d307cc35a0000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000048812aa3caf000000000000000000000000b63aae6c353636d66df13b89ba4425cfe13d10ba000000000000000000000000eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee0000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff85000000000000000000000000b63aae6c353636d66df13b89ba4425cfe13d10ba000000000000000000000000eaf1ac8e89ea0ae13e0f03634a4ff23502527024000000000000000000000000000000000000000000000000003c6568f12e80010000000000000000000000000000000000000000000000000000000002456d16000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000002f00000000000000000000000000000000000000000000000000000000002d200a007e5c0d20000000000000000000000000000000002ae0001be0001a40000ea00001a40414200000000000000000000000000000000000006d0e30db05120c35dadb65012ec5796536bd9864ed8773abc74c44200000000000000000000000000000000000006006402b9446c0000000000000000000000004200000000000000000000000000000000000006000000000000000000000000b63aae6c353636d66df13b89ba4425cfe13d10ba0000000000000000000000001e31a2c6e6614273d740358affb46bef180efb7b0000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000040201e31a2c6e6614273d740358affb46bef180efb7b627dd56a000000000000000000000000000000000000000000000000000000000000002000000000000000000000000000000000000000000000000000000000000000600000000000000000000000004200000000000000000000000000000000000006000000000000000000000000b63aae6c353636d66df13b89ba4425cfe13d10ba00000000000000000000000000000000000000000000000000000000000000010020d6bdbf787f5c764cbc14f9669b88837ca1490cca17c31607512050a39b94b1dc8472faa08c36a3ef5b0a01c5bd107f5c764cbc14f9669b88837ca1490cca17c3160700449908fc8b0000000000000000000000007f5c764cbc14f9669b88837ca1490cca17c316070000000000000000000000000b2c639c533813f4aa9d7837caf62653d097ff85000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010000000000000000000000001111111254eeb25477b68fb85ed929f73a960582000000000000000000000000000000000000000000000000000000006574f1560000000000000000000000000000000031eb0e2e000000000000000000000000000000000000000000000000',
    value: '17000000000000000',
  },
  params: {
    chainId: Chains.OPTIMISM,
    tokenIn: NATIVE_TOKEN, // ETH
    tokenOut: '0x0b2c639c533813f4aa9d7837caf62653d097ff85', // USDC
    amountIn: GreaterThanOrEqual(parseEther('0.017')),
    amountOut: GreaterThanOrEqual(parseUnits('38', 6)),
    recipient: '0x64932054aa75da578146a8b2e107c19d307cc35a',
  },
}

const SWAP_ERC20: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 137,
    from: '0x4c86fcfa1fea0f2f929ad7f22fb0d8bd15423bfb',
    to: '0x4c4af8dbc524681930a27b2f1af5bcc8062e6fb7',
    hash: '0x7510e0d01204ce30e4bdbddaca861239e779a1423443c6588fd478cae635925a',
    input:
      '0x7dc203820000000000000000000000002791bca1f2de4661ed88a30c99a7a9449aa841740000000000000000000000007ceb23fd6bc0add59e62ac25578270cff1b9f61900000000000000000000000000000000000000000000000000000000ee77dd6200000000000000000000000000000000000000000000000018803cf470e337000000000000000000000000004c86fcfa1fea0f2f929ad7f22fb0d8bd15423bfb0000000000000000000000004c86fcfa1fea0f2f929ad7f22fb0d8bd15423bfb',
    value: '0',
  },
  params: {
    chainId: Chains.POLYGON_POS,
    tokenIn: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174', // USDC.e
    tokenOut: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619', // WETH
    amountIn: GreaterThanOrEqual(parseUnits('4000', 6)),
    amountOut: GreaterThanOrEqual(parseUnits('1.765', 18)),
    recipient: '0x4c86fcfa1fea0f2f929ad7f22fb0d8bd15423bfb',
  },
}

const EXTERNAL_SWAP_ERC20: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 324,
    from: '0xcff9be4d47e3c5b4652e4fbe8f2f3f1e475d5ff2',
    to: '0x09873bfECA34F1Acd0a7e55cDA591f05d8a75369',
    hash: '0xed92426c6f9444a43bcdffaffb182b479d9bc5195e61fff9e80624cc591a7ecc',
    input:
      '0x199b83fa0000000000000000000000006e2b76966cbd9cf4cc2fa0d76d24d5241e0abc2f0000000000000000000000006e2b76966cbd9cf4cc2fa0d76d24d5241e0abc2f0000000000000000000000003355df6d4c9c3035724fd0e3914de96a5a83aaf4000000000000000000000000493257fd37edb34451f62edf8d2a0c418852ba4c00000000000000000000000000000000000000000000000000000000069db9c00000000000000000000000000000000000000000000000000000000006943446000000000000000000000000cff9be4d47e3c5b4652e4fbe8f2f3f1e475d5ff20000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000034812aa3caf000000000000000000000000a9305c3c14757bae2e73ef7f66fe241f5f6bf3470000000000000000000000003355df6d4c9c3035724fd0e3914de96a5a83aaf4000000000000000000000000493257fd37edb34451f62edf8d2a0c418852ba4c000000000000000000000000a9305c3c14757bae2e73ef7f66fe241f5f6bf347000000000000000000000000fd505702b37ae9b626952eb2dd736d904587641700000000000000000000000000000000000000000000000000000000069db9c00000000000000000000000000000000000000000000000000000000006943446000000000000000000000000000000000000000000000000000000000000000400000000000000000000000000000000000000000000000000000000000001400000000000000000000000000000000000000000000000000000000000000160000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001ae00000000000000000000000000000000000000000000000000000000019051268b791913eb07c32779a16750e3868aa8495f59643355df6d4c9c3035724fd0e3914de96a5a83aaf40004c694d55d000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000068bbda900000000000000000000000000000000000000000000000000000000000000c00000000000000000000000006e2b76966cbd9cf4cc2fa0d76d24d5241e0abc2f000000000000000000000000000000000000000000000000000000006577f806000000000000000000000000000000000000000000000000000000000000012000000000000000000000000000000000000000000000000000000000000000020000000000000000000000003355df6d4c9c3035724fd0e3914de96a5a83aaf4000000000000000000000000493257fd37edb34451f62edf8d2a0c418852ba4c0000000000000000000000000000000000000000000000000000000000000001000000000000000000000000000000000000000000000000000000000000000100000000000000000000000000000000000031eb0e2e000000000000000000000000000000000000000000000000',
    value: '0',
  },
  params: {
    chainId: Chains.ZK_SYNC_ERA,
    tokenIn: '0x3355df6D4c9C3035724Fd0e3914dE96A5a83aaf4', // USDC
    tokenOut: '0x493257fD37EDB34451f62EDf8D2a0C418852bA4C', // USDT
    amountIn: GreaterThanOrEqual(parseUnits('111', 6)),
    amountOut: GreaterThanOrEqual(parseUnits('110', 6)),
    recipient: '0xcff9be4d47e3c5b4652e4fbe8f2f3f1e475d5ff2',
  },
}

const WOO_ROUTER_V2_UPDATE: TestParams<SwapActionParams> = {
  transaction: {
    chainId: 42161,
    from: '0x3efd1fa3d4e5784648adf7396c3478999ec90249',
    to: '0x4c4af8dbc524681930a27b2f1af5bcc8062e6fb7',
    hash: '0x188c91e8cc904443226450ba9569d5fadbed03ac139ffa9e9c4e41aad80ae045',
    input: '0x7dc20382000000000000000000000000ff970a61a04b1ca14834a43f5de4533ebddb5cc8000000000000000000000000fd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9000000000000000000000000000000000000000000000000000000000bbfe31b000000000000000000000000000000000000000000000000000000000b9ec1c60000000000000000000000003efd1fa3d4e5784648adf7396c3478999ec902490000000000000000000000003efd1fa3d4e5784648adf7396c3478999ec90249',
    value: '0',
  },
  params: {
    chainId: Chains.ARBITRUM_ONE,
    tokenIn: '0xff970a61a04b1ca14834a43f5de4533ebddb5cc8', // USDC.e
    tokenOut: '0xfd086bc7cd5c481dcc9c85ebe478a1c0b69fcbb9', // USDT
    amountIn: GreaterThanOrEqual(parseUnits('190', 6)),
    amountOut: GreaterThanOrEqual(parseUnits('190', 6)),
    recipient: '0x3efd1fa3d4e5784648adf7396c3478999ec90249',
  }
}

export const passingTestCases = [
  createTestCase(SWAP_NATIVE, 'when swapping using the native token (ie. ETH)'),
  createTestCase(
    EXTERNAL_SWAP_NATIVE,
    'when using the external swap method with native token',
  ),
  createTestCase(SWAP_ERC20, 'when swapping using an ERC20 token'),
  createTestCase(
    EXTERNAL_SWAP_ERC20,
    'when using the external swap method with ERC20 tokens',
  ),
  createTestCase(WOO_ROUTER_V2_UPDATE, 'when using the WOO_ROUTER_V2_UPDATE method'),
  createTestCase(SWAP_ERC20, 'when tokenIn is set to "any"', {
    tokenIn: undefined,
  }),
  createTestCase(EXTERNAL_SWAP_ERC20, 'when tokenOut is set to "any"', {
    tokenOut: undefined,
  }),
  createTestCase(EXTERNAL_SWAP_ERC20, 'when tokens are set to "any/any"', {
    tokenIn: undefined,
    tokenOut: undefined,
  }),
]

export const failingTestCases = [
  createTestCase(SWAP_NATIVE, 'when chainId is incorrect', { chainId: 324 }),
  createTestCase(EXTERNAL_SWAP_NATIVE, 'when contract address is incorrect', {
    contractAddress: '0x00CBcF7B3d37844e44b888Bc747bDd75FCf4E555',
  }),
  createTestCase(SWAP_ERC20, 'when tokenIn is not correct', {
    tokenIn: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  }),
  createTestCase(EXTERNAL_SWAP_ERC20, 'when tokenOut is not correct', {
    tokenOut: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  }),
  createTestCase(SWAP_ERC20, 'when amountIn is not sufficient', {
    amountIn: GreaterThanOrEqual(parseEther('100000')),
  }),
  createTestCase(EXTERNAL_SWAP_ERC20, 'when amountOut is not sufficient', {
    amountOut: GreaterThanOrEqual(parseEther('100000')),
  }),
  createTestCase(EXTERNAL_SWAP_NATIVE, 'when recipient is incorrect', {
    recipient: '0x59b2f6b797Ee4A69C92EEc21e980D4AF187A84BB',
  }),
]
