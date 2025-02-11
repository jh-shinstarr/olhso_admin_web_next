/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */

export type TruckEventType = typeof TruckEventType[keyof typeof TruckEventType];


// eslint-disable-next-line @typescript-eslint/no-redeclare
export const TruckEventType = {
  ACCIDENT: 'ACCIDENT',
  FIXABLE: 'FIXABLE',
  WOK_FIXABLE: 'WOK_FIXABLE',
  WOK_UNAVAILABLE: 'WOK_UNAVAILABLE',
  ADMIN_STOP: 'ADMIN_STOP',
  WOK_FIXABLE_TO_UNAVAILABLE: 'WOK_FIXABLE_TO_UNAVAILABLE',
  BACK_DOOR_OPEN: 'BACK_DOOR_OPEN',
  WATER_TANK_EMPTY: 'WATER_TANK_EMPTY',
  TRUCK_LOCATION_UPDATE_UNAVAILABLE: 'TRUCK_LOCATION_UPDATE_UNAVAILABLE',
  INFO: 'INFO',
} as const;
