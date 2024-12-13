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
  CreateClientNotiDto,
  OkResponseDto
} from '../../model'



  /**
 * @summary 사용자의 Noti 토큰 등록
 */
export const clientNotiControllerCreat = <TData = AxiosResponse<OkResponseDto>>(
    createClientNotiDto: CreateClientNotiDto, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/olhso/client-noti`,
      createClientNotiDto,options
    );
  }
export type ClientNotiControllerCreatResult = AxiosResponse<OkResponseDto>
