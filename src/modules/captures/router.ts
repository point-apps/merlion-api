import { Router } from "express";
import multer from "multer";
import * as controller from "./controllers/index.js";

const router = Router();
const upload = multer();

router.get("/", controller.readMany);
router.get("/:id", controller.read);
router.post("/", upload.any(), controller.create);
router.patch("/:id", controller.update);
router.delete("/:id", controller.destroy);

export default router;
