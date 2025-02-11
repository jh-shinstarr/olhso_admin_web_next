/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { Menu } from './menu';
import type { OrderMenuStatus } from './orderMenuStatus';
import type { OrderMenuSubOptionItem } from './orderMenuSubOptionItem';

export interface OrderMenu {
  cookingFinishTime?: string;
  cookingStartTime?: string;
  createdAt: string;
  menuId: Menu;
  orderId: string;
  orderSeq: number;
  slotNum?: string;
  status: OrderMenuStatus;
  subOption: OrderMenuSubOptionItem[];
  trayArrivalTime?: string;
  updatedAt: string;
  wokNum?: number;
}
