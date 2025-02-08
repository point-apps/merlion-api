import { Router } from "express";
import * as controller from "./controllers/index.js";

const router = Router();

router.get("/", controller.readMany);
router.get("/:id", controller.read);
router.post("/", controller.invite);
router.patch("/:id", controller.update);
router.patch("/:id/suspend", controller.suspend);
router.patch("/:id/activate", controller.activate);
router.delete("/:id", controller.destroy);
router.post("/update-password", controller.updatePassword);

export default router;
