import { Request, Response, NextFunction } from "express";

class TControl {
  static async init(req: Request, res: Response, next: NextFunction) {
    try {
      res.status(200).json({ message: "The server is ready" });
    } catch (err) {
      next(err);
    }
  }
}

export default TControl;
