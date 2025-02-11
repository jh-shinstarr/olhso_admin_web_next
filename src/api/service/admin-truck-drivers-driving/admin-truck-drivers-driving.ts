/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * OLHSO API
 * The OLHSO API description
 * OpenAPI spec version: 0.1
 */
import axios from 'axios'
import type {
  AxiosRequestConfig,
  AxiosResponse
} from 'axios'
import type {
  AdminTruckDriverDrivingControllerFindManyParams,
  TruckDriverDriving,
  TruckDriverDrivingList
} from '../../model'



  /**
 * @summary 전체 트럭 운전자 운행 목록 조회
 */
export const adminTruckDriverDrivingControllerFindMany = <TData = AxiosResponse<TruckDriverDrivingList>>(
    params?: AdminTruckDriverDrivingControllerFindManyParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/admin/truck-drivers/driving`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }
/**
 * @summary 트럭 운전자 운행 목록 조회
 */
export const adminTruckDriverDrivingControllerFindManyByTruckId = <TData = AxiosResponse<TruckDriverDrivingList>>(
    driverId: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/admin/truck-drivers/${driverId}/driving`,options
    );
  }
/**
 * @summary 트럭 운전자 운행 상세 조회
 */
export const adminTruckDriverDrivingControllerFindOne = <TData = AxiosResponse<TruckDriverDriving>>(
    driverId: string,
    id: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/admin/truck-drivers/${driverId}/driving/${id}`,options
    );
  }
export type AdminTruckDriverDrivingControllerFindManyResult = AxiosResponse<TruckDriverDrivingList>
export type AdminTruckDriverDrivingControllerFindManyByTruckIdResult = AxiosResponse<TruckDriverDrivingList>
export type AdminTruckDriverDrivingControllerFindOneResult = AxiosResponse<TruckDriverDriving>
