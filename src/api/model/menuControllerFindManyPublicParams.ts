/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { SortOrder } from './sortOrder';
import type { MenuType } from './menuType';

export type MenuControllerFindManyPublicParams = {
sortOrder?: SortOrder[];
sortBy?: string[];
name?: string;
price?: number;
kcal?: number;
type?: MenuType;
isActive?: boolean;
recipeName?: string;
cookingTime?: number;
};
