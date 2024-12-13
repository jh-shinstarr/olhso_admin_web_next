/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { TruckDriver } from './truckDriver';
import type { Truck } from './truck';
import type { TruckEvent } from './truckEvent';

export interface TruckModalAssignment {
  createdAt: string;
  driver: TruckDriver;
  driverId: string;
  id: string;
  truck: Truck;
  truckEvent: TruckEvent;
  truckEventId?: string;
  truckId: string;
  updatedAt: string;
}
