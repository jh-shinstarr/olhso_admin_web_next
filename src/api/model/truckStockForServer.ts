/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { Recipe } from './recipe';
import type { Truck } from './truck';

export interface TruckStockForServer {
  createdAt: string;
  id: string;
  menuQty: number;
  recipe: Recipe;
  truck: Truck;
  updatedAt: string;
}
