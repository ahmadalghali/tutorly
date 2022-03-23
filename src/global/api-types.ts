/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

export interface RegisterUserDto {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  id: number;

  /** @format date-time */
  createdAt: string;

  /** @format date-time */
  deletedAt: string;

  /** @format date-time */
  updatedAt: string;
  email: string;
  firstname: string;
  lastname: string;
  enabled: boolean;
  locked: boolean;
  profileImageUrl?: string;
  phoneNumber: string;
  role: "admin" | "tutor" | "student" | "guest";
}

export type VerifyEmailResponse = object;

export type ForgotPasswordResponse = object;

export type ResetPasswordResponse = object;

export interface User {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  enabled: boolean;
  locked: boolean;
  profileImageUrl?: string;
  phoneNumber: string;
  role: "admin" | "tutor" | "student" | "guest";
  id: number;

  /** @format date-time */
  createdAt: string;

  /** @format date-time */
  deletedAt: string;

  /** @format date-time */
  updatedAt: string;
}

export interface UpdateUserDto {
  password?: string;
  firstname?: string;
  lastname?: string;
  phoneNumber?: string;
}

export type CreateTutorDto = object;

export type UpdateTutorDto = object;

export type CreateStudentDto = object;

export type UpdateStudentDto = object;

export type CreateAdminDto = object;

export type UpdateAdminDto = object;

export type CreateBookingDto = object;

export type UpdateBookingDto = object;

export type CreateChatDto = object;

export type UpdateChatDto = object;

export namespace Auth {
  /**
   * No description
   * @name AuthControllerRegister
   * @request POST:/auth/register
   * @response `201` `VerifyEmailResponse`
   */
  export namespace AuthControllerRegister {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RegisterUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = VerifyEmailResponse;
  }
  /**
   * No description
   * @name AuthControllerLogin
   * @request POST:/auth/login
   * @response `200` `LoginResponseDto`
   */
  export namespace AuthControllerLogin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginDto;
    export type RequestHeaders = {};
    export type ResponseBody = LoginResponseDto;
  }
  /**
   * No description
   * @name AuthControllerProtected
   * @request GET:/auth/protected
   * @response `200` `VerifyEmailResponse`
   */
  export namespace AuthControllerProtected {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VerifyEmailResponse;
  }
  /**
   * No description
   * @name AuthControllerLogout
   * @request POST:/auth/logout
   * @response `200` `VerifyEmailResponse`
   */
  export namespace AuthControllerLogout {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VerifyEmailResponse;
  }
  /**
   * No description
   * @name AuthControllerVerifyEmail
   * @request POST:/auth/verify-email
   * @response `200` `VerifyEmailResponse`
   */
  export namespace AuthControllerVerifyEmail {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VerifyEmailResponse;
  }
  /**
   * No description
   * @name AuthControllerForgotPassword
   * @request POST:/auth/forgot-password
   * @response `200` `ForgotPasswordResponse`
   */
  export namespace AuthControllerForgotPassword {
    export type RequestParams = { email: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ForgotPasswordResponse;
  }
  /**
   * No description
   * @name AuthControllerResetPassword
   * @request POST:/auth/reset-password
   * @response `200` `ResetPasswordResponse`
   */
  export namespace AuthControllerResetPassword {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = ResetPasswordResponse;
  }
}

export namespace User {
  /**
   * No description
   * @name UserControllerFindAll
   * @request GET:/user
   * @response `200` `string`
   */
  export namespace UserControllerFindAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name UserControllerFindOne
   * @request GET:/user/{id}
   * @response `200` `User`
   */
  export namespace UserControllerFindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = User;
  }
  /**
   * No description
   * @name UserControllerUpdate
   * @request PATCH:/user/{id}
   * @response `200` `void`
   */
  export namespace UserControllerUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name UserControllerRemove
   * @request DELETE:/user/{id}
   * @response `200` `string`
   */
  export namespace UserControllerRemove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}

export namespace Me {
  /**
   * No description
   * @name MeControllerGetMe
   * @request GET:/me
   * @response `200` `string`
   */
  export namespace MeControllerGetMe {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}

export namespace Tutor {
  /**
   * No description
   * @name TutorControllerCreate
   * @request POST:/tutor
   * @response `201` `string`
   */
  export namespace TutorControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTutorDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name TutorControllerFindAll
   * @request GET:/tutor
   * @response `200` `string`
   */
  export namespace TutorControllerFindAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name TutorControllerFindOne
   * @request GET:/tutor/{id}
   * @response `200` `string`
   */
  export namespace TutorControllerFindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name TutorControllerUpdate
   * @request PATCH:/tutor/{id}
   * @response `200` `string`
   */
  export namespace TutorControllerUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateTutorDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name TutorControllerRemove
   * @request DELETE:/tutor/{id}
   * @response `200` `string`
   */
  export namespace TutorControllerRemove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}

export namespace Student {
  /**
   * No description
   * @name StudentControllerCreate
   * @request POST:/student
   * @response `201` `string`
   */
  export namespace StudentControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateStudentDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name StudentControllerFindAll
   * @request GET:/student
   * @response `200` `string`
   */
  export namespace StudentControllerFindAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name StudentControllerFindOne
   * @request GET:/student/{id}
   * @response `200` `string`
   */
  export namespace StudentControllerFindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name StudentControllerUpdate
   * @request PATCH:/student/{id}
   * @response `200` `string`
   */
  export namespace StudentControllerUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateStudentDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name StudentControllerRemove
   * @request DELETE:/student/{id}
   * @response `200` `string`
   */
  export namespace StudentControllerRemove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}

export namespace Admin {
  /**
   * No description
   * @name AdminControllerCreate
   * @request POST:/admin
   * @response `201` `string`
   */
  export namespace AdminControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateAdminDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name AdminControllerFindAll
   * @request GET:/admin
   * @response `200` `string`
   */
  export namespace AdminControllerFindAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name AdminControllerFindOne
   * @request GET:/admin/{id}
   * @response `200` `string`
   */
  export namespace AdminControllerFindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name AdminControllerUpdate
   * @request PATCH:/admin/{id}
   * @response `200` `string`
   */
  export namespace AdminControllerUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateAdminDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name AdminControllerRemove
   * @request DELETE:/admin/{id}
   * @response `200` `string`
   */
  export namespace AdminControllerRemove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}

export namespace Booking {
  /**
   * No description
   * @name BookingControllerCreate
   * @request POST:/booking
   * @response `201` `string`
   */
  export namespace BookingControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateBookingDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name BookingControllerFindAll
   * @request GET:/booking
   * @response `200` `string`
   */
  export namespace BookingControllerFindAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name BookingControllerFindOne
   * @request GET:/booking/{id}
   * @response `200` `string`
   */
  export namespace BookingControllerFindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name BookingControllerUpdate
   * @request PATCH:/booking/{id}
   * @response `200` `string`
   */
  export namespace BookingControllerUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateBookingDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name BookingControllerRemove
   * @request DELETE:/booking/{id}
   * @response `200` `string`
   */
  export namespace BookingControllerRemove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}

export namespace Chat {
  /**
   * No description
   * @name ChatControllerCreate
   * @request POST:/chat
   * @response `201` `string`
   */
  export namespace ChatControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateChatDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name ChatControllerFindAll
   * @request GET:/chat
   * @response `200` `string`
   */
  export namespace ChatControllerFindAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name ChatControllerFindOne
   * @request GET:/chat/{id}
   * @response `200` `string`
   */
  export namespace ChatControllerFindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name ChatControllerUpdate
   * @request PATCH:/chat/{id}
   * @response `200` `string`
   */
  export namespace ChatControllerUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateChatDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name ChatControllerRemove
   * @request DELETE:/chat/{id}
   * @response `200` `string`
   */
  export namespace ChatControllerRemove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, ResponseType } from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.instance.defaults.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  private createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      formData.append(
        key,
        property instanceof Blob
          ? property
          : typeof property === "object" && property !== null
          ? JSON.stringify(property)
          : `${property}`,
      );
      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = (format && this.format) || void 0;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
        ...(requestParams.headers || {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title London Tuition Academy Api
 * @version 1.0.0
 * @contact
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @name AuthControllerRegister
     * @request POST:/auth/register
     * @response `201` `VerifyEmailResponse`
     */
    authControllerRegister: (data: RegisterUserDto, params: RequestParams = {}) =>
      this.request<VerifyEmailResponse, any>({
        path: `/auth/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AuthControllerLogin
     * @request POST:/auth/login
     * @response `200` `LoginResponseDto`
     */
    authControllerLogin: (data: LoginDto, params: RequestParams = {}) =>
      this.request<LoginResponseDto, any>({
        path: `/auth/login`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AuthControllerProtected
     * @request GET:/auth/protected
     * @response `200` `VerifyEmailResponse`
     */
    authControllerProtected: (params: RequestParams = {}) =>
      this.request<VerifyEmailResponse, any>({
        path: `/auth/protected`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AuthControllerLogout
     * @request POST:/auth/logout
     * @response `200` `VerifyEmailResponse`
     */
    authControllerLogout: (params: RequestParams = {}) =>
      this.request<VerifyEmailResponse, any>({
        path: `/auth/logout`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AuthControllerVerifyEmail
     * @request POST:/auth/verify-email
     * @response `200` `VerifyEmailResponse`
     */
    authControllerVerifyEmail: (params: RequestParams = {}) =>
      this.request<VerifyEmailResponse, any>({
        path: `/auth/verify-email`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AuthControllerForgotPassword
     * @request POST:/auth/forgot-password
     * @response `200` `ForgotPasswordResponse`
     */
    authControllerForgotPassword: (email: string, params: RequestParams = {}) =>
      this.request<ForgotPasswordResponse, any>({
        path: `/auth/forgot-password`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AuthControllerResetPassword
     * @request POST:/auth/reset-password
     * @response `200` `ResetPasswordResponse`
     */
    authControllerResetPassword: (params: RequestParams = {}) =>
      this.request<ResetPasswordResponse, any>({
        path: `/auth/reset-password`,
        method: "POST",
        format: "json",
        ...params,
      }),
  };
  user = {
    /**
     * No description
     *
     * @name UserControllerFindAll
     * @request GET:/user
     * @response `200` `string`
     */
    userControllerFindAll: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/user`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserControllerFindOne
     * @request GET:/user/{id}
     * @response `200` `User`
     */
    userControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/user/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserControllerUpdate
     * @request PATCH:/user/{id}
     * @response `200` `void`
     */
    userControllerUpdate: (id: string, data: UpdateUserDto, params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/user/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name UserControllerRemove
     * @request DELETE:/user/{id}
     * @response `200` `string`
     */
    userControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/user/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  me = {
    /**
     * No description
     *
     * @name MeControllerGetMe
     * @request GET:/me
     * @response `200` `string`
     */
    meControllerGetMe: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/me`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  tutor = {
    /**
     * No description
     *
     * @name TutorControllerCreate
     * @request POST:/tutor
     * @response `201` `string`
     */
    tutorControllerCreate: (data: CreateTutorDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/tutor`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TutorControllerFindAll
     * @request GET:/tutor
     * @response `200` `string`
     */
    tutorControllerFindAll: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/tutor`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TutorControllerFindOne
     * @request GET:/tutor/{id}
     * @response `200` `string`
     */
    tutorControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/tutor/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TutorControllerUpdate
     * @request PATCH:/tutor/{id}
     * @response `200` `string`
     */
    tutorControllerUpdate: (id: string, data: UpdateTutorDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/tutor/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TutorControllerRemove
     * @request DELETE:/tutor/{id}
     * @response `200` `string`
     */
    tutorControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/tutor/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  student = {
    /**
     * No description
     *
     * @name StudentControllerCreate
     * @request POST:/student
     * @response `201` `string`
     */
    studentControllerCreate: (data: CreateStudentDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/student`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StudentControllerFindAll
     * @request GET:/student
     * @response `200` `string`
     */
    studentControllerFindAll: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/student`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StudentControllerFindOne
     * @request GET:/student/{id}
     * @response `200` `string`
     */
    studentControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/student/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StudentControllerUpdate
     * @request PATCH:/student/{id}
     * @response `200` `string`
     */
    studentControllerUpdate: (id: string, data: UpdateStudentDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/student/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StudentControllerRemove
     * @request DELETE:/student/{id}
     * @response `200` `string`
     */
    studentControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/student/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  admin = {
    /**
     * No description
     *
     * @name AdminControllerCreate
     * @request POST:/admin
     * @response `201` `string`
     */
    adminControllerCreate: (data: CreateAdminDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/admin`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AdminControllerFindAll
     * @request GET:/admin
     * @response `200` `string`
     */
    adminControllerFindAll: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/admin`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AdminControllerFindOne
     * @request GET:/admin/{id}
     * @response `200` `string`
     */
    adminControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/admin/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AdminControllerUpdate
     * @request PATCH:/admin/{id}
     * @response `200` `string`
     */
    adminControllerUpdate: (id: string, data: UpdateAdminDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/admin/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AdminControllerRemove
     * @request DELETE:/admin/{id}
     * @response `200` `string`
     */
    adminControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/admin/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  booking = {
    /**
     * No description
     *
     * @name BookingControllerCreate
     * @request POST:/booking
     * @response `201` `string`
     */
    bookingControllerCreate: (data: CreateBookingDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/booking`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name BookingControllerFindAll
     * @request GET:/booking
     * @response `200` `string`
     */
    bookingControllerFindAll: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/booking`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name BookingControllerFindOne
     * @request GET:/booking/{id}
     * @response `200` `string`
     */
    bookingControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/booking/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name BookingControllerUpdate
     * @request PATCH:/booking/{id}
     * @response `200` `string`
     */
    bookingControllerUpdate: (id: string, data: UpdateBookingDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/booking/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name BookingControllerRemove
     * @request DELETE:/booking/{id}
     * @response `200` `string`
     */
    bookingControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/booking/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  chat = {
    /**
     * No description
     *
     * @name ChatControllerCreate
     * @request POST:/chat
     * @response `201` `string`
     */
    chatControllerCreate: (data: CreateChatDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/chat`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ChatControllerFindAll
     * @request GET:/chat
     * @response `200` `string`
     */
    chatControllerFindAll: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/chat`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ChatControllerFindOne
     * @request GET:/chat/{id}
     * @response `200` `string`
     */
    chatControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/chat/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ChatControllerUpdate
     * @request PATCH:/chat/{id}
     * @response `200` `string`
     */
    chatControllerUpdate: (id: string, data: UpdateChatDto, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/chat/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ChatControllerRemove
     * @request DELETE:/chat/{id}
     * @response `200` `string`
     */
    chatControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/chat/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
}
