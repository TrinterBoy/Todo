import { Request, Response , NextFunction } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(req: Request, res: Response, next: NextFunction ) {
        try {
            const token = req.headers?.authorization?.split(" ")[1];
            if (!token) throw new Error("Not authorize");
            const decoded = jwt.verify(token, "Dudnyk");
            req.app.set("user", decoded);
            next();
        } catch (e: any) {
            next(res.status(404).json({ message: e.message }));
        }
}
