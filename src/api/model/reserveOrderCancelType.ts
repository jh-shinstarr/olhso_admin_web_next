/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */

export type ReserveOrderCancelType = typeof ReserveOrderCancelType[keyof typeof ReserveOrderCancelType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const ReserveOrderCancelType = {
  NONE: 'NONE',
  CLIENT_CANCEL: 'CLIENT_CANCEL',
  ADMIN_CANCEL: 'ADMIN_CANCEL',
  OUT_OF_STOCK: 'OUT_OF_STOCK',
  SYSTEM_ERROR: 'SYSTEM_ERROR',
  DISPATCHED_TRUCK_NOT_FOUND: 'DISPATCHED_TRUCK_NOT_FOUND',
  DISPATCHED_TRUCK_NOT_DRIVING: 'DISPATCHED_TRUCK_NOT_DRIVING',
} as const;
