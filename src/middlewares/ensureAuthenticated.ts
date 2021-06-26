import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authToken = req.headers.authorization

    if (!authToken) {
        return res.status(401).end();
    }
    const [, token] = authToken.split(" ");

    try {
        const { sub } = verify(token, "4b6f7cee35b5b1f1817eb64ad02c53bc")
        req.user_id = sub;

        return next()
    } catch (error) {
        return res.status(401).end()
    }

}




// export {EnsureAuthenticated}