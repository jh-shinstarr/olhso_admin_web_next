/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { MainItemRes } from './mainItemRes';
import type { ReserveOrderMenu } from './reserveOrderMenu';
import type { ReceiveType } from './receiveType';
import type { TruckArea } from './truckArea';

export interface ReserveOrderDetail {
  clientPhoneNum: string;
  createdAt: string;
  customerAddr: string;
  driverTip: number;
  lat: number;
  lng: number;
  note?: string;
  orderItems: MainItemRes[];
  orderMenus: ReserveOrderMenu[];
  receiveType: ReceiveType;
  reserveOrderId: string;
  totalPrice: number;
  truckArea?: TruckArea;
  updatedAt: string;
  usePointAmount: number;
}
