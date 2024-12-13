/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { OrderListDrivingStatus } from './orderListDrivingStatus';
import type { Order } from './order';
import type { PaginationMeta } from './paginationMeta';
import type { TruckModalAssignment } from './truckModalAssignment';

export interface OrderList {
  drivingStatus?: OrderListDrivingStatus;
  items: Order[];
  meta: PaginationMeta;
  modalAssignment?: TruckModalAssignment;
}
