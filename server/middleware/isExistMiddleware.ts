import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";

const isExist = <T>(model: Model<T>) => {
    return async (req: Request, _: Response, next: NextFunction) => {
        const { id } = req.params;
        const any = await model.findById(id);
        if (!any) {
            next(new Error(`No document found`));
        }
        next();
    };
};

export default isExist;