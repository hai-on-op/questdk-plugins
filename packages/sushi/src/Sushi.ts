import {
  type TransactionFilter,
  type SwapActionParams,
  compressJson,
} from '@rabbitholegg/questdk'
import { type Address, zeroAddress as NATIVE_TOKEN } from 'viem'
import { CHAIN_TO_CONTRACTS, INTERNAL_ETHER_ADDRESS } from './contract-addresses'
import { PROCESS_ROUTE_ABI, ROUTER_ABI } from './abi'
import { WNATIVE_ADDRESS } from '@sushiswap/core-sdk'
import { buildV2PathQuery } from './utils'

export const swap = async (
  swap: SwapActionParams,
): Promise<TransactionFilter> => {
  const {
    chainId,
    contractAddress,
    tokenIn,
    tokenOut,
    amountIn,
    amountOut,
    recipient,
  } = swap

  const swapContracts = CHAIN_TO_CONTRACTS[chainId]?.map((address) =>
    address.toLowerCase(),
  )

  const to =
    contractAddress ?? swapContracts ? { $or: swapContracts } : undefined

  const nativeIn = tokenIn === NATIVE_TOKEN
  const nativeOut = tokenOut === NATIVE_TOKEN

  return compressJson({
    chainId,
    to,
    value: nativeIn ? amountIn : undefined,
    input: {
      $or: [
        {
          //  RouteProcessor
          $abi: PROCESS_ROUTE_ABI,
          to: recipient,
          tokenIn: nativeIn ? INTERNAL_ETHER_ADDRESS : tokenIn,
          tokenOut: nativeOut ? INTERNAL_ETHER_ADDRESS : tokenOut,
          amountIn: amountIn,
          amountOutMin: amountOut
        },
        {
          // V2 Router
          $abi: ROUTER_ABI,
          $and: [
            {
              to: recipient,
              path: buildV2PathQuery(
                nativeIn ? WNATIVE_ADDRESS[chainId] : tokenIn,
                nativeOut ? WNATIVE_ADDRESS[chainId] : tokenOut,
              ),
            },
            {
              $or: [
                {
                  amountIn: nativeIn ? undefined : amountIn,
                  amountOutMin: amountOut,
                },
                { amountOut: amountOut },
              ],
            },
          ],
        },
      ],
    },
  })
}

export const getSupportedTokenAddresses = async (
  _chainId: number,
): Promise<Address[]> => {
  return []
}

export const getSupportedChainIds = async (): Promise<number[]> => {
  return []
}
