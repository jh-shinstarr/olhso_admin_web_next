/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { SortOrder } from './sortOrder';
import type { TruckOrderControllerFindManyByTruckIdFindOrderType } from './truckOrderControllerFindManyByTruckIdFindOrderType';

export type TruckOrderControllerFindManyByTruckIdParams = {
sortOrder?: SortOrder[];
sortBy?: string[];
findOrderType: TruckOrderControllerFindManyByTruckIdFindOrderType;
startDate: string;
endDate: string;
};
