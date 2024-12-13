/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { MenuOption } from './menuOption';
import type { FileObject } from './fileObject';
import type { ReviewQuestion } from './reviewQuestion';
import type { Recipe } from './recipe';
import type { MenuType } from './menuType';

export interface Menu {
  allergyList: string[];
  cookingTime: number;
  createdAt: string;
  description?: string;
  id: string;
  isActive: boolean;
  kcal?: number;
  menuOptions?: MenuOption[];
  menuSeq: number;
  name: string;
  nameKor?: string;
  picture?: FileObject;
  price: number;
  questions?: ReviewQuestion[];
  recipe?: Recipe;
  requireCooking: boolean;
  servedContent?: string;
  subPicture?: FileObject[];
  type: MenuType;
  updatedAt: string;
}
