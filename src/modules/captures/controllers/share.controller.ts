import { format } from "date-fns";
import { NextFunction, Request, Response } from "express";
import { ReadCaptureService } from "../services/read.service.js";
import { db } from "@src/database/database.js";
import Mailer from "@src/services/mailer/index.js";

export const share = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const readCaptureService = new ReadCaptureService(db);
    const result = await readCaptureService.handle(req.params.id, {});

    const message = {
      to: result.createdBy.email,
      subject: `Checkout ${result.createdBy.name}'s Latest Activity - ${result.activity}`,
      template: "users/email/share",
      context: {
        name: result.createdBy.name,
        activity: result.activity,
        date: format(new Date(result.date), "dd MMM yyyy"),
        link: `${req.body.url}`,
      },
    };

    await Mailer.send(message);

    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};
