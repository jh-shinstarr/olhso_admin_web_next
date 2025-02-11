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
  OkResponseDto
} from '../../model'



  /**
 * @summary 트럭 모달 닫기 요청
 */
export const truckModalControllerCloseTruckModal = <TData = AxiosResponse<OkResponseDto>>(
    id: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.delete(
      `/olhso/truck-modal/${id}`,options
    );
  }
export type TruckModalControllerCloseTruckModalResult = AxiosResponse<OkResponseDto>
