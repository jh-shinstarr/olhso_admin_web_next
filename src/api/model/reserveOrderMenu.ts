/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { Menu } from './menu';
import type { ReserveOrderMenuStatus } from './reserveOrderMenuStatus';
import type { ReserveOrderMenuSubOptionItem } from './reserveOrderMenuSubOptionItem';

export interface ReserveOrderMenu {
  createdAt: string;
  menuId: Menu;
  orderId: string;
  orderSeq: number;
  status: ReserveOrderMenuStatus;
  subOption: ReserveOrderMenuSubOptionItem[];
}
