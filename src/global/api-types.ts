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

export interface CreateStudentDto {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  phoneNumber: string;
  isParent: boolean;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface LoginResponseDto {
  id: number;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  createdAt?: string;
  email: string;
  firstname: string;
  lastname: string;
  enabled: boolean;
  locked: boolean;
  profileImageUrl?: string;
  phoneNumber: string;
  role: "admin" | "tutor" | "student";
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
  role: "admin" | "tutor" | "student";
  id: number;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  createdAt?: string;
}

export interface UpdateUserDto {
  password?: string;
  firstname?: string;
  lastname?: string;
  phoneNumber?: string;
}

export interface Subject {
  name: string;
  id: number;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  createdAt?: string;
}

export interface Tutor {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  enabled: boolean;
  locked: boolean;
  profileImageUrl?: string;
  phoneNumber: string;
  role: "admin" | "tutor" | "student";
  id: number;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  createdAt?: string;
  subjects: Subject[];
}

export interface Student {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  enabled: boolean;
  locked: boolean;
  profileImageUrl?: string;
  phoneNumber: string;
  role: "admin" | "tutor" | "student";
  id: number;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  createdAt?: string;
  isParent: boolean;
  tutors: Tutor[];
}

export interface UpdateStudentDto {
  tutorsIds: number[];
  firstname?: string;
  lastname?: string;
  phoneNumber?: string;
  isParent?: boolean;
}

export interface CreateTutorDto {
  email: string;
  password: string;
  firstname: string;
  lastname: string;
  profileImageUrl?: string;
  phoneNumber: string;
  subjects: Subject[];
}

export interface UpdateTutorDto {
  email?: string;
  password?: string;
  firstname?: string;
  lastname?: string;
  profileImageUrl?: string;
  phoneNumber?: string;
  subjects?: Subject[];
}

export type UpdateAdminDto = object;

export type CreateBookingDto = object;

export type UpdateBookingDto = object;

export interface CreateChatDto {
  userId: number;
}

export interface Chat {
  tutor: User;
  student: User;
  id: number;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  createdAt?: string;
}

export interface UpdateChatDto {
  userId?: number;
}

export interface CreateMessageDto {
  receiverId: number;
  text: string;
}

export interface Message {
  text: string;
  sender: User;
  receiver: User;
  id: number;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  createdAt?: string;
}

export interface UpdateMessageDto {
  text?: string;
  receiverId?: number;
}

export type CreateSubjectDto = object;

export type UpdateSubjectDto = object;

export type CreateLessonDto = object;

export interface SubjectLevel {
  name: string;
  id: number;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  createdAt?: string;
}

export interface Lesson {
  subject: Subject;
  level: SubjectLevel;
  tutor: Tutor;
  students: Student[];
  id: number;

  /** @format date-time */
  deletedAt?: string;

  /** @format date-time */
  updatedAt?: string;

  /** @format date-time */
  createdAt?: string;
}

export type UpdateLessonDto = object;

export namespace Auth {
  /**
   * No description
   * @name AuthControllerRegister
   * @request POST:/auth/register
   * @response `201` `void`
   */
  export namespace AuthControllerRegister {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateStudentDto;
    export type RequestHeaders = {};
    export type ResponseBody = void;
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

export namespace Users {
  /**
   * No description
   * @name UserControllerFindAll
   * @request GET:/users
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
   * @request GET:/users/{id}
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
   * @request PATCH:/users/{id}
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
   * @request DELETE:/users/{id}
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

export namespace Students {
  /**
   * No description
   * @name StudentControllerFindAll
   * @request GET:/students
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
   * @request GET:/students/{id}
   * @response `200` `Student`
   */
  export namespace StudentControllerFindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Student;
  }
  /**
   * No description
   * @name StudentControllerUpdate
   * @request PATCH:/students/{id}
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
   * @request DELETE:/students/{id}
   * @response `200` `string`
   */
  export namespace StudentControllerRemove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name StudentControllerAssignTutorToStudent
   * @request PATCH:/students/{studentId}/assign-tutor/{tutorId}
   * @response `200` `Student`
   */
  export namespace StudentControllerAssignTutorToStudent {
    export type RequestParams = { studentId: number; tutorId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Student;
  }
}

export namespace Me {
  /**
   * No description
   * @name MeControllerGetMe
   * @request GET:/me
   * @response `200` `VerifyEmailResponse`
   */
  export namespace MeControllerGetMe {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = VerifyEmailResponse;
  }
}

export namespace Tutors {
  /**
   * No description
   * @name TutorControllerRegisterTutor
   * @request POST:/tutors
   * @response `201` `Tutor`
   */
  export namespace TutorControllerRegisterTutor {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateTutorDto;
    export type RequestHeaders = {};
    export type ResponseBody = Tutor;
  }
  /**
   * No description
   * @name TutorControllerFindAll
   * @request GET:/tutors
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
   * @name TutorControllerGetStudents
   * @request GET:/tutors/my-students
   * @response `200` `(Student)[]`
   */
  export namespace TutorControllerGetStudents {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Student[];
  }
  /**
   * No description
   * @name TutorControllerUpdate
   * @request PATCH:/tutors/{id}
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
   * @request DELETE:/tutors/{id}
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

export namespace Admin {
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

export namespace Chats {
  /**
   * No description
   * @name ChatControllerCreate
   * @request POST:/chats
   * @response `201` `(Chat)[]`
   */
  export namespace ChatControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateChatDto;
    export type RequestHeaders = {};
    export type ResponseBody = Chat[];
  }
  /**
   * No description
   * @name ChatControllerFindAll
   * @request GET:/chats
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
   * @request GET:/chats/{id}
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
   * @request PATCH:/chats/{id}
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
   * @request DELETE:/chats/{id}
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

export namespace Messages {
  /**
   * No description
   * @name MessageControllerSendMessage
   * @request POST:/messages
   * @response `201` `Message`
   */
  export namespace MessageControllerSendMessage {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateMessageDto;
    export type RequestHeaders = {};
    export type ResponseBody = Message;
  }
  /**
   * No description
   * @name MessageControllerFindAll
   * @request GET:/messages
   * @response `200` `(Message)[]`
   */
  export namespace MessageControllerFindAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Message[];
  }
  /**
   * No description
   * @name MessageControllerFindAllMessagesWithUser
   * @request GET:/messages/user/{userId}
   * @response `200` `(Message)[]`
   */
  export namespace MessageControllerFindAllMessagesWithUser {
    export type RequestParams = { userId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Message[];
  }
  /**
   * No description
   * @name MessageControllerFindOne
   * @request GET:/messages/{id}
   * @response `200` `Message`
   */
  export namespace MessageControllerFindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Message;
  }
  /**
   * No description
   * @name MessageControllerUpdate
   * @request PATCH:/messages/{id}
   * @response `200` `string`
   */
  export namespace MessageControllerUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateMessageDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name MessageControllerRemove
   * @request DELETE:/messages/{id}
   * @response `200` `string`
   */
  export namespace MessageControllerRemove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}

export namespace Subjects {
  /**
   * No description
   * @name SubjectsControllerCreate
   * @request POST:/subjects
   * @response `201` `string`
   */
  export namespace SubjectsControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateSubjectDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name SubjectsControllerFindAll
   * @request GET:/subjects
   * @response `200` `string`
   */
  export namespace SubjectsControllerFindAll {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name SubjectsControllerFindOne
   * @request GET:/subjects/{id}
   * @response `200` `string`
   */
  export namespace SubjectsControllerFindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name SubjectsControllerUpdate
   * @request PATCH:/subjects/{id}
   * @response `200` `string`
   */
  export namespace SubjectsControllerUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateSubjectDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name SubjectsControllerRemove
   * @request DELETE:/subjects/{id}
   * @response `200` `string`
   */
  export namespace SubjectsControllerRemove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}

export namespace Lessons {
  /**
   * No description
   * @name LessonsControllerCreate
   * @request POST:/lessons
   * @response `201` `string`
   */
  export namespace LessonsControllerCreate {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = CreateLessonDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name LessonsControllerGetMyLessons
   * @request GET:/lessons
   * @response `200` `(Lesson)[]`
   */
  export namespace LessonsControllerGetMyLessons {
    export type RequestParams = {};
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Lesson[];
  }
  /**
   * No description
   * @name LessonsControllerEnrolStudentInLesson
   * @request PATCH:/lessons/{lessonId}/enrol/students/{studentId}
   * @response `200` `Lesson`
   */
  export namespace LessonsControllerEnrolStudentInLesson {
    export type RequestParams = { studentId: number; lessonId: number };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = Lesson;
  }
  /**
   * No description
   * @name LessonsControllerFindOne
   * @request GET:/lessons/{id}
   * @response `200` `string`
   */
  export namespace LessonsControllerFindOne {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name LessonsControllerUpdate
   * @request PATCH:/lessons/{id}
   * @response `200` `string`
   */
  export namespace LessonsControllerUpdate {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = UpdateLessonDto;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
  /**
   * No description
   * @name LessonsControllerRemove
   * @request DELETE:/lessons/{id}
   * @response `200` `string`
   */
  export namespace LessonsControllerRemove {
    export type RequestParams = { id: string };
    export type RequestQuery = {};
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = string;
  }
}

import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  ResponseType,
} from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams
  extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
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

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown>
  extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null
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

  constructor({
    securityWorker,
    secure,
    format,
    ...axiosConfig
  }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  private mergeRequestParams(
    params1: AxiosRequestConfig,
    params2?: AxiosRequestConfig
  ): AxiosRequestConfig {
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
          : `${property}`
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

    if (
      type === ContentType.FormData &&
      body &&
      body !== null &&
      typeof body === "object"
    ) {
      requestParams.headers.common = { Accept: "*/*" };
      requestParams.headers.post = {};
      requestParams.headers.put = {};

      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(type && type !== ContentType.FormData
          ? { "Content-Type": type }
          : {}),
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
export class Api<
  SecurityDataType extends unknown
> extends HttpClient<SecurityDataType> {
  auth = {
    /**
     * No description
     *
     * @name AuthControllerRegister
     * @request POST:/auth/register
     * @response `201` `void`
     */
    authControllerRegister: (
      data: CreateStudentDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/auth/register`,
        method: "POST",
        body: data,
        type: ContentType.Json,
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
  users = {
    /**
     * No description
     *
     * @name UserControllerFindAll
     * @request GET:/users
     * @response `200` `string`
     */
    userControllerFindAll: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/users`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserControllerFindOne
     * @request GET:/users/{id}
     * @response `200` `User`
     */
    userControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<User, any>({
        path: `/users/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UserControllerUpdate
     * @request PATCH:/users/{id}
     * @response `200` `void`
     */
    userControllerUpdate: (
      id: string,
      data: UpdateUserDto,
      params: RequestParams = {}
    ) =>
      this.request<void, any>({
        path: `/users/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        ...params,
      }),

    /**
     * No description
     *
     * @name UserControllerRemove
     * @request DELETE:/users/{id}
     * @response `200` `string`
     */
    userControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/users/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  students = {
    /**
     * No description
     *
     * @name StudentControllerFindAll
     * @request GET:/students
     * @response `200` `string`
     */
    studentControllerFindAll: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/students`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StudentControllerFindOne
     * @request GET:/students/{id}
     * @response `200` `Student`
     */
    studentControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Student, any>({
        path: `/students/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StudentControllerUpdate
     * @request PATCH:/students/{id}
     * @response `200` `string`
     */
    studentControllerUpdate: (
      id: string,
      data: UpdateStudentDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/students/${id}`,
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
     * @request DELETE:/students/{id}
     * @response `200` `string`
     */
    studentControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/students/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name StudentControllerAssignTutorToStudent
     * @request PATCH:/students/{studentId}/assign-tutor/{tutorId}
     * @response `200` `Student`
     */
    studentControllerAssignTutorToStudent: (
      studentId: number,
      tutorId: number,
      params: RequestParams = {}
    ) =>
      this.request<Student, any>({
        path: `/students/${studentId}/assign-tutor/${tutorId}`,
        method: "PATCH",
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
     * @response `200` `VerifyEmailResponse`
     */
    meControllerGetMe: (params: RequestParams = {}) =>
      this.request<VerifyEmailResponse, any>({
        path: `/me`,
        method: "GET",
        format: "json",
        ...params,
      }),
  };
  tutors = {
    /**
     * No description
     *
     * @name TutorControllerRegisterTutor
     * @request POST:/tutors
     * @response `201` `Tutor`
     */
    tutorControllerRegisterTutor: (
      data: CreateTutorDto,
      params: RequestParams = {}
    ) =>
      this.request<Tutor, any>({
        path: `/tutors`,
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
     * @request GET:/tutors
     * @response `200` `string`
     */
    tutorControllerFindAll: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/tutors`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TutorControllerGetStudents
     * @request GET:/tutors/my-students
     * @response `200` `(Student)[]`
     */
    tutorControllerGetStudents: (params: RequestParams = {}) =>
      this.request<Student[], any>({
        path: `/tutors/my-students`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name TutorControllerUpdate
     * @request PATCH:/tutors/{id}
     * @response `200` `string`
     */
    tutorControllerUpdate: (
      id: string,
      data: UpdateTutorDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/tutors/${id}`,
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
     * @request DELETE:/tutors/{id}
     * @response `200` `string`
     */
    tutorControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/tutors/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  admin = {
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
    adminControllerUpdate: (
      id: string,
      data: UpdateAdminDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/admin/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
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
    bookingControllerCreate: (
      data: CreateBookingDto,
      params: RequestParams = {}
    ) =>
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
    bookingControllerUpdate: (
      id: string,
      data: UpdateBookingDto,
      params: RequestParams = {}
    ) =>
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
  chats = {
    /**
     * No description
     *
     * @name ChatControllerCreate
     * @request POST:/chats
     * @response `201` `(Chat)[]`
     */
    chatControllerCreate: (data: CreateChatDto, params: RequestParams = {}) =>
      this.request<Chat[], any>({
        path: `/chats`,
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
     * @request GET:/chats
     * @response `200` `string`
     */
    chatControllerFindAll: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/chats`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ChatControllerFindOne
     * @request GET:/chats/{id}
     * @response `200` `string`
     */
    chatControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/chats/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ChatControllerUpdate
     * @request PATCH:/chats/{id}
     * @response `200` `string`
     */
    chatControllerUpdate: (
      id: string,
      data: UpdateChatDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/chats/${id}`,
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
     * @request DELETE:/chats/{id}
     * @response `200` `string`
     */
    chatControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/chats/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  messages = {
    /**
     * No description
     *
     * @name MessageControllerSendMessage
     * @request POST:/messages
     * @response `201` `Message`
     */
    messageControllerSendMessage: (
      data: CreateMessageDto,
      params: RequestParams = {}
    ) =>
      this.request<Message, any>({
        path: `/messages`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MessageControllerFindAll
     * @request GET:/messages
     * @response `200` `(Message)[]`
     */
    messageControllerFindAll: (params: RequestParams = {}) =>
      this.request<Message[], any>({
        path: `/messages`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MessageControllerFindAllMessagesWithUser
     * @request GET:/messages/user/{userId}
     * @response `200` `(Message)[]`
     */
    messageControllerFindAllMessagesWithUser: (
      userId: number,
      params: RequestParams = {}
    ) =>
      this.request<Message[], any>({
        path: `/messages/user/${userId}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MessageControllerFindOne
     * @request GET:/messages/{id}
     * @response `200` `Message`
     */
    messageControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<Message, any>({
        path: `/messages/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MessageControllerUpdate
     * @request PATCH:/messages/{id}
     * @response `200` `string`
     */
    messageControllerUpdate: (
      id: string,
      data: UpdateMessageDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/messages/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name MessageControllerRemove
     * @request DELETE:/messages/{id}
     * @response `200` `string`
     */
    messageControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/messages/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  subjects = {
    /**
     * No description
     *
     * @name SubjectsControllerCreate
     * @request POST:/subjects
     * @response `201` `string`
     */
    subjectsControllerCreate: (
      data: CreateSubjectDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/subjects`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubjectsControllerFindAll
     * @request GET:/subjects
     * @response `200` `string`
     */
    subjectsControllerFindAll: (params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/subjects`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubjectsControllerFindOne
     * @request GET:/subjects/{id}
     * @response `200` `string`
     */
    subjectsControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/subjects/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubjectsControllerUpdate
     * @request PATCH:/subjects/{id}
     * @response `200` `string`
     */
    subjectsControllerUpdate: (
      id: string,
      data: UpdateSubjectDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/subjects/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SubjectsControllerRemove
     * @request DELETE:/subjects/{id}
     * @response `200` `string`
     */
    subjectsControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/subjects/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  lessons = {
    /**
     * No description
     *
     * @name LessonsControllerCreate
     * @request POST:/lessons
     * @response `201` `string`
     */
    lessonsControllerCreate: (
      data: CreateLessonDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/lessons`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LessonsControllerGetMyLessons
     * @request GET:/lessons
     * @response `200` `(Lesson)[]`
     */
    lessonsControllerGetMyLessons: (params: RequestParams = {}) =>
      this.request<Lesson[], any>({
        path: `/lessons`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LessonsControllerEnrolStudentInLesson
     * @request PATCH:/lessons/{lessonId}/enrol/students/{studentId}
     * @response `200` `Lesson`
     */
    lessonsControllerEnrolStudentInLesson: (
      studentId: number,
      lessonId: number,
      params: RequestParams = {}
    ) =>
      this.request<Lesson, any>({
        path: `/lessons/${lessonId}/enrol/students/${studentId}`,
        method: "PATCH",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LessonsControllerFindOne
     * @request GET:/lessons/{id}
     * @response `200` `string`
     */
    lessonsControllerFindOne: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/lessons/${id}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LessonsControllerUpdate
     * @request PATCH:/lessons/{id}
     * @response `200` `string`
     */
    lessonsControllerUpdate: (
      id: string,
      data: UpdateLessonDto,
      params: RequestParams = {}
    ) =>
      this.request<string, any>({
        path: `/lessons/${id}`,
        method: "PATCH",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name LessonsControllerRemove
     * @request DELETE:/lessons/{id}
     * @response `200` `string`
     */
    lessonsControllerRemove: (id: string, params: RequestParams = {}) =>
      this.request<string, any>({
        path: `/lessons/${id}`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
}
