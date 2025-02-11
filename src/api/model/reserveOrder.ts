/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { ReserveOrderCancelType } from './reserveOrderCancelType';
import type { Client } from './client';
import type { ReserveOrderDetail } from './reserveOrderDetail';
import type { PaymentTransaction } from './paymentTransaction';
import type { ReserveDeliveryTime } from './reserveDeliveryTime';
import type { Truck } from './truck';
import type { TruckZone } from './truckZone';

export interface ReserveOrder {
  cancellation: boolean;
  cancelType: ReserveOrderCancelType;
  client: Client;
  confirmed: boolean;
  createdAt: string;
  detail?: ReserveOrderDetail;
  id: string;
  orderDate: string;
  payment?: PaymentTransaction;
  reserveDeliveryTime: ReserveDeliveryTime;
  reserveTime?: string;
  sendToLive: boolean;
  slot: number;
  truck?: Truck;
  truckZone?: TruckZone;
  updatedAt: string;
}
