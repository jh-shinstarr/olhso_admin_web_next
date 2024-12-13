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
  ClientActivateDto,
  OrderCookingFinishTestDto,
  TestControllerFindTotalDetail2Params
} from '../../model'



  /**
 * @summary 테스트용 조리 완료 처리. body에 트럭 정보를 보내면 트럭에 존재하는 주문이 모두 조리 완료됩니다
 */
export const testControllerCookingFinishForTest = <TData = AxiosResponse<void>>(
    orderCookingFinishTestDto: OrderCookingFinishTestDto, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/olhso/test/cooking-finish`,
      orderCookingFinishTestDto,options
    );
  }
/**
 * @summary 테스트용 주문 더미 데이터 생성에 필요한 데이터 정보를 한 번에 요청합니다
 */
export const testControllerFindManyForOrder = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/test/order-info-for-test`,options
    );
  }
export const testControllerNotiDelay = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/test/noti-delay`,options
    );
  }
export const testControllerNoti = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/test/noti`,options
    );
  }
/**
 * @summary 테스트용 트럭 전체 좌표 수정하기
 */
export const testControllerUpdateAllTruckCoordinates = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.put(
      `/olhso/test/truck/all-coordinates`,undefined,options
    );
  }
/**
 * @summary slack 테스트 메시지 확인
 */
export const testControllerSlack = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/test/slack`,options
    );
  }
/**
 * @summary 기간별 총 주문 수와 총 메뉴 수 금액까지 조회하기
 */
export const testControllerFindTotalDetail2 = <TData = AxiosResponse<void>>(
    params: TestControllerFindTotalDetail2Params, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/test/total-test-2`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }
/**
 * @summary 칼리포니아 시간 조회하기
 */
export const testControllerGetCaliTimes = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/test/get-cali-times`,options
    );
  }
/**
 * @summary 테스트용 클라이언트 비활성화
 */
export const testControllerInactiveClientTest = <TData = AxiosResponse<void>>(
    clientActivateDto: ClientActivateDto, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.delete(
      `/olhso/test/inactive-client-test`,{data:
      clientActivateDto, ...options}
    );
  }
/**
 * @summary 테스트용 OrderMenu 조회
 */
export const testControllerFindOrderMenuTest = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/test/findOrderMenuTest`,options
    );
  }
export const testControllerTestDate = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/test/test-date`,options
    );
  }
export const testControllerTestestset = <TData = AxiosResponse<void>>(
     options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/olhso/test/testestset`,undefined,options
    );
  }
export type TestControllerCookingFinishForTestResult = AxiosResponse<void>
export type TestControllerFindManyForOrderResult = AxiosResponse<void>
export type TestControllerNotiDelayResult = AxiosResponse<void>
export type TestControllerNotiResult = AxiosResponse<void>
export type TestControllerUpdateAllTruckCoordinatesResult = AxiosResponse<void>
export type TestControllerSlackResult = AxiosResponse<void>
export type TestControllerFindTotalDetail2Result = AxiosResponse<void>
export type TestControllerGetCaliTimesResult = AxiosResponse<void>
export type TestControllerInactiveClientTestResult = AxiosResponse<void>
export type TestControllerFindOrderMenuTestResult = AxiosResponse<void>
export type TestControllerTestDateResult = AxiosResponse<void>
export type TestControllerTestestsetResult = AxiosResponse<void>
