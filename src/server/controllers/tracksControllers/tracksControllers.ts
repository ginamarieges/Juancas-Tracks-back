import "../../../loadEnvironment.js";
import { type NextFunction, type Request, type Response } from "express";
import createDebug from "debug";
import { Track } from "../../../database/models/Track.js";
import errorMessages from "../../../utils/errorMessages/errorMessages.js";

const debug = createDebug(
  "juancas-tracks-api:server:controllers:tracksControllers:tracksControllers.js",
);
export const getTracks = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const tracks = await Track.find().limit(10).exec();

    res.status(200).json({ tracks });
  } catch (error) {
    const customError = errorMessages.serverError;
    debug((error as Error).message);
    next(customError);
  }
};
