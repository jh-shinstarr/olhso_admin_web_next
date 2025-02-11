/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { TruckEventType } from './truckEventType';
import type { Truck } from './truck';
import type { TruckDriverDriving } from './truckDriverDriving';

export interface TruckEvent {
  createdAt: string;
  description?: string;
  eventCategory?: string;
  eventMessage?: string;
  eventTime: string;
  eventType: TruckEventType;
  id: string;
  stackTrace?: string;
  truck: Truck;
  truckDriverDriving?: TruckDriverDriving;
  updatedAt: string;
}
