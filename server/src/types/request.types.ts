import { Request } from "express";

export interface TypedRequest<Q, T> {
    params: Q;
    body: T;
}

export interface TypedRequestBody<T> extends Request {
    body: T;
}

export interface TypedRequestParams<T> {
    params: T;
}
