/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */

export type OrderCookingStatus = typeof OrderCookingStatus[keyof typeof OrderCookingStatus];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const OrderCookingStatus = {
  DISPATCH_WAITING: 'DISPATCH_WAITING',
  COOKING_WAITING: 'COOKING_WAITING',
  COOKING: 'COOKING',
  FINISH: 'FINISH',
} as const;
