import { Request, Response, NextFunction } from "express";
import Joi from "joi";
import ResponseErr from "../error/responseErr";

const errorHandling = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (!error) {
    next();
    return;
  } else if (error instanceof Joi.ValidationError) {
    return res.status(400).json({ errors: error.message.split(".") });
  } else if (error instanceof ResponseErr) {
    return res.status(error.getStatus).json({ errors: [error.message] });
  }

  return res.status(500).json({ errors: [error.message] });
};

export default errorHandling;
