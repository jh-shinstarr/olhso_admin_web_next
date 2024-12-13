/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { SortOrder } from './sortOrder';
import type { OrderSortBy } from './orderSortBy';
import type { ClientReserveOrderControllerMyReserveOrdersReceiveType } from './clientReserveOrderControllerMyReserveOrdersReceiveType';

export type ClientReserveOrderControllerMyReserveOrdersParams = {
sortOrder?: SortOrder[];
sortBy?: OrderSortBy[];
clientId?: string;
startDate?: string;
endDate?: string;
startDateTime?: string;
endDateTime?: string;
customerAddr?: string;
clientEmail?: string;
clientPhoneNum?: string;
receiveType?: ClientReserveOrderControllerMyReserveOrdersReceiveType;
cancellation?: boolean;
confirmed?: boolean;
sendToLive?: boolean;
};
