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
  AdminReviewQuestionControllerFindManyParams,
  CreateReviewQuestionDto,
  Menu,
  OkResponseDto,
  ReviewQuestion,
  ReviewQuestionList,
  UpdateMenuQuestionDto,
  UpdateReviewQuestionDto
} from '../../model'



  /**
 * @summary 리뷰 질문지에 메뉴 할당하기
 */
export const adminReviewQuestionControllerAssignMenu = <TData = AxiosResponse<Menu>>(
    updateMenuQuestionDto: UpdateMenuQuestionDto, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.put(
      `/olhso/admin/review-question/menu-assignments`,
      updateMenuQuestionDto,options
    );
  }
/**
 * @summary 리뷰 질문지 목록 조회하기
 */
export const adminReviewQuestionControllerFindMany = <TData = AxiosResponse<ReviewQuestionList>>(
    params?: AdminReviewQuestionControllerFindManyParams, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.get(
      `/olhso/admin/review-question`,{
    ...options,
        params: {...params, ...options?.params},}
    );
  }
/**
 * @summary 리뷰 질문지 생성하기
 */
export const adminReviewQuestionControllerCreate = <TData = AxiosResponse<ReviewQuestion>>(
    createReviewQuestionDto: CreateReviewQuestionDto, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.post(
      `/olhso/admin/review-question`,
      createReviewQuestionDto,options
    );
  }
/**
 * @summary 리뷰 질문지 수정하기 또는 활성화 변경
 */
export const adminReviewQuestionControllerUpdate = <TData = AxiosResponse<ReviewQuestion>>(
    id: string,
    updateReviewQuestionDto: UpdateReviewQuestionDto, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.put(
      `/olhso/admin/review-question/${id}`,
      updateReviewQuestionDto,options
    );
  }
/**
 * @summary 리뷰 질문지 삭제하기
 */
export const adminReviewQuestionControllerDelete = <TData = AxiosResponse<OkResponseDto>>(
    id: string, options?: AxiosRequestConfig
 ): Promise<TData> => {
    return axios.delete(
      `/olhso/admin/review-question/${id}`,options
    );
  }
export type AdminReviewQuestionControllerAssignMenuResult = AxiosResponse<Menu>
export type AdminReviewQuestionControllerFindManyResult = AxiosResponse<ReviewQuestionList>
export type AdminReviewQuestionControllerCreateResult = AxiosResponse<ReviewQuestion>
export type AdminReviewQuestionControllerUpdateResult = AxiosResponse<ReviewQuestion>
export type AdminReviewQuestionControllerDeleteResult = AxiosResponse<OkResponseDto>
