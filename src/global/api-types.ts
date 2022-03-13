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

export interface RegisterDto {
  email: string;
  password: string;
}

export interface LoginDto {
  email: string;
  password: string;
}

export type LoginResponse = object;

export type VerifyEmailResponse = object;

export type ForgotPasswordResponse = object;

export type ResetPasswordResponse = object;

export interface CreateUserDto {
  email: string;
  password: string;
}

export interface User {
  id: number;
  email: string;
  password: string;
  hashedRefreshToken?: string;
}

export interface UpdateUserDto {
  hashedRefreshToken?: string;
}

export namespace Auth {
  /**
   * No description
   * @name AuthControllerRegister
   * @request POST:/auth/register
   * @response `201` `LoginResponse`
   */
  export namespace AuthControllerRegister {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = RegisterDto;
    export type RequestHeaders = {};
    export type ResponseBody = LoginResponse;
  }
  /**
   * No description
   * @name AuthControllerLogin
   * @request POST:/auth/login
   * @response `200` `LoginResponse`
   */
  export namespace AuthControllerLogin {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = LoginDto;
    export type RequestHeaders = {};
    export type ResponseBody = LoginResponse;
  }
  /**
   * No description
   * @name AuthControllerLogout
   * @request POST:/auth/logout
   * @response `200` `void`
   */
  export namespace AuthControllerLogout {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
  }
  /**
   * No description
   * @name AuthControllerRefreshTokens
   * @request POST:/auth/refresh
   * @response `200` `void`
   */
  export namespace AuthControllerRefreshTokens {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = void;
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
   * @name UserControllerCreate
   * @request POST:/user
   * @response `201` `LoginResponse`
   */
  export namespace UserControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateUserDto;
    export type RequestHeaders = {};
    export type ResponseBody = LoginResponse;
  }
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
     * @response `201` `LoginResponse`
     */
    authControllerRegister: (data: RegisterDto, params: RequestParams = {}) =>
      this.request<LoginResponse, any>({
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
     * @response `200` `LoginResponse`
     */
    authControllerLogin: (data: LoginDto, params: RequestParams = {}) =>
      this.request<LoginResponse, any>({
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
     * @name AuthControllerLogout
     * @request POST:/auth/logout
     * @response `200` `void`
     */
    authControllerLogout: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/logout`,
        method: "POST",
        ...params,
      }),

    /**
     * No description
     *
     * @name AuthControllerRefreshTokens
     * @request POST:/auth/refresh
     * @response `200` `void`
     */
    authControllerRefreshTokens: (params: RequestParams = {}) =>
      this.request<void, any>({
        path: `/auth/refresh`,
        method: "POST",
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
     * @name UserControllerCreate
     * @request POST:/user
     * @response `201` `LoginResponse`
     */
    userControllerCreate: (data: CreateUserDto, params: RequestParams = {}) =>
      this.request<LoginResponse, any>({
        path: `/user`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

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
}
