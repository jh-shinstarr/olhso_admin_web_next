/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import type { TruckDriver } from './truckDriver';
import type { PromotionBannerToImage } from './promotionBannerToImage';
import type { FileObject } from './fileObject';

export interface PromotionBanner {
  bannerTitle?: string;
  body: string;
  createdAt: string;
  createdBy: TruckDriver;
  endAt: string;
  footer?: string;
  header?: string;
  id: string;
  images?: PromotionBannerToImage[];
  isActive: boolean;
  priority: number;
  startAt: string;
  thumbnail?: FileObject;
  title: string;
  updatedAt: string;
  updatedBy: TruckDriver;
}
