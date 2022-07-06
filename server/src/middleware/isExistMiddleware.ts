import { NextFunction, Request, Response } from "express";
import { Model } from "mongoose";

const isExist = <T>(model: Model<T>) => {
    return async (req: Request, _: Response, next: NextFunction) => {
        const { id } = req.params;
        try {
            await model.findById(id);
        }
        catch {
            next(new Error(`No document found`));
        }
        next();
    };
};

export default isExist;