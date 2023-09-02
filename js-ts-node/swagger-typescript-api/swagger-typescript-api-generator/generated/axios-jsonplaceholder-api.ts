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

export interface Post {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  userId?: number;
  title?: string;
  body?: string;
}

export interface Comment {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  postId?: number;
  name?: string;
  /** @format email */
  email?: string;
  body?: string;
}

export interface Album {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  userId?: number;
  title?: string;
}

export interface Photo {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  albumId?: number;
  title?: string;
  /** @format uri */
  url?: string;
  /** @format uri */
  thumbnailUrl?: string;
}

export interface Todo {
  /** @format int64 */
  id?: number;
  /** @format int64 */
  userId?: number;
  title?: string;
  completed?: boolean;
}

export interface User {
  /** @format int64 */
  id?: number;
  name?: string;
  username?: string;
  /** @format email */
  email?: string;
  phone?: string;
  website?: string;
  company?: {
    name?: string;
    catchPhrase?: string;
    bs?: string;
  };
  address?: {
    street?: string;
    suite?: string;
    city?: string;
    zipcode?: string;
    geo?: {
      lat?: string;
      lng?: string;
    };
  };
}

export type NotFoundError = object;

import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";

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
    this.instance = axios.create({
      ...axiosConfig,
      baseURL: axiosConfig.baseURL || "https://jsonplaceholder.typicode.com",
    });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

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
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type && type !== ContentType.FormData ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title JSON Placeholder
 * @version 1.0.0
 * @baseUrl https://jsonplaceholder.typicode.com
 *
 * Fake Online REST API for Testing and Prototyping
 */
export class Api<SecurityDataType extends unknown> extends HttpClient<SecurityDataType> {
  posts = {
    /**
     * No description
     *
     * @tags posts
     * @name GetPosts
     * @summary Get all available posts
     * @request GET:/posts
     */
    getPosts: (
      query?: {
        /** Filter by post ID */
        id?: number;
        /** Filter by user ID */
        userId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Post[], any>({
        path: `/posts`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags posts
     * @name PostsDetail
     * @summary Get specific post
     * @request GET:/posts/{id}
     */
    postsDetail: (id: number, params: RequestParams = {}) =>
      this.request<Post, NotFoundError>({
        path: `/posts/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags posts
     * @name CommentsDetail
     * @summary Get comments for a specific post
     * @request GET:/posts/{id}/comments
     */
    commentsDetail: (id: number, params: RequestParams = {}) =>
      this.request<Comment[], NotFoundError>({
        path: `/posts/${id}/comments`,
        method: "GET",
        ...params,
      }),
  };
  comments = {
    /**
     * No description
     *
     * @tags comments
     * @name GetComments
     * @summary Get all available comments
     * @request GET:/comments
     */
    getComments: (
      query?: {
        /** Filter by comment ID */
        id?: number;
        /** Filter by post ID */
        postId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Comment[], any>({
        path: `/comments`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags comments
     * @name GetComment
     * @summary Get specific comment
     * @request GET:/comments/{id}
     */
    getComment: (id: number, params: RequestParams = {}) =>
      this.request<Comment, NotFoundError>({
        path: `/comments/${id}`,
        method: "GET",
        ...params,
      }),
  };
  albums = {
    /**
     * No description
     *
     * @tags albums
     * @name GetAlbums
     * @summary Get all available albums
     * @request GET:/albums
     */
    getAlbums: (
      query?: {
        /** Filter by album ID */
        id?: number;
        /** Filter by user ID */
        userId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Album[], any>({
        path: `/albums`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags albums
     * @name AlbumsDetail
     * @summary Get specific album
     * @request GET:/albums/{id}
     */
    albumsDetail: (id: number, params: RequestParams = {}) =>
      this.request<Album, NotFoundError>({
        path: `/albums/${id}`,
        method: "GET",
        ...params,
      }),

    /**
     * No description
     *
     * @tags albums
     * @name PhotosDetail
     * @summary Get photos for a specific album
     * @request GET:/albums/{id}/photos
     */
    photosDetail: (id: number, params: RequestParams = {}) =>
      this.request<Photo[], NotFoundError>({
        path: `/albums/${id}/photos`,
        method: "GET",
        ...params,
      }),
  };
  photos = {
    /**
     * No description
     *
     * @tags photos
     * @name GetPhotos
     * @summary Get all available photos
     * @request GET:/photos
     */
    getPhotos: (
      query?: {
        /** Filter by photo ID */
        id?: number;
        /** Filter by album ID */
        albumId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Photo[], any>({
        path: `/photos`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags photos
     * @name GetPhoto
     * @summary Get specific photo
     * @request GET:/photos/{id}
     */
    getPhoto: (id: number, params: RequestParams = {}) =>
      this.request<Photo, NotFoundError>({
        path: `/photos/${id}`,
        method: "GET",
        ...params,
      }),
  };
  todos = {
    /**
     * No description
     *
     * @tags todos
     * @name GetTodos
     * @summary Get all available todos
     * @request GET:/todos
     */
    getTodos: (
      query?: {
        /** Filter by todo ID */
        id?: number;
        /** Filter by user ID */
        userId?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<Todo[], any>({
        path: `/todos`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags todos
     * @name GetTodo
     * @summary Get specific todo
     * @request GET:/todos/{id}
     */
    getTodo: (id: number, params: RequestParams = {}) =>
      this.request<Todo, NotFoundError>({
        path: `/todos/${id}`,
        method: "GET",
        ...params,
      }),
  };
  users = {
    /**
     * No description
     *
     * @tags users
     * @name GetUsers
     * @summary Get all available users
     * @request GET:/users
     */
    getUsers: (
      query?: {
        /** Filter by user ID */
        id?: number;
        /** Filter by user email address */
        email?: number;
      },
      params: RequestParams = {},
    ) =>
      this.request<User[], any>({
        path: `/users`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags users
     * @name GetUser
     * @summary Get specific user
     * @request GET:/users/{id}
     */
    getUser: (id: number, params: RequestParams = {}) =>
      this.request<User, NotFoundError>({
        path: `/users/${id}`,
        method: "GET",
        ...params,
      }),
  };
}
