import { NextFunction, Request, Response } from "express";
import { AcceptInvitationService } from "../services/accept-invitation.service.js";
import { QueryInterface } from "@src/database/connection.js";
import { db } from "@src/database/database.js";
import { UserRepository } from "@src/modules/users/repositories/user.repository.js";

export const acceptInvitation = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const session = db.startSession();

    db.startTransaction();
    console.log(req.query.code);
    const query: QueryInterface = {
      fields: "",
      filter: { emailVerificationCode: req.query.code },
      page: 1,
      pageSize: 1,
      sort: "",
    };

    const userRepository = new UserRepository(db);
    const result = (await userRepository.readMany(query)) as any;
    console.log(result);
    const user = result.data[0];

    if (!user) {
      return res.json({ error: "verification email failed" });
    }

    const acceptInvitationService = new AcceptInvitationService(db);
    await acceptInvitationService.handle(user._id, {}, session);

    await db.commitTransaction();

    return res.redirect("https://merlion.pointhub.app");
  } catch (error) {
    await db.abortTransaction();
    next(error);
  } finally {
    await db.endSession();
  }
};
