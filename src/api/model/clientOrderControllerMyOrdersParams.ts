/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { SortOrder } from './sortOrder';
import type { OrderSortBy } from './orderSortBy';
import type { ClientOrderControllerMyOrdersFindOrderType } from './clientOrderControllerMyOrdersFindOrderType';

export type ClientOrderControllerMyOrdersParams = {
sortOrder?: SortOrder[];
sortBy?: OrderSortBy[];
findOrderType: ClientOrderControllerMyOrdersFindOrderType;
};
