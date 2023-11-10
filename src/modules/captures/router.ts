import { Router } from "express";
import multer from "multer";
import * as controller from "./controllers/index.js";

const router = Router();
const upload = multer();

router.get("/", controller.readMany);
router.get("/new", controller.check);
router.get("/:id", controller.read);
router.post("/", controller.create);
router.post("/upload", upload.any(), controller.upload);
router.patch("/:id", controller.update);
router.delete("/:id", controller.destroy);
router.post("/:id/delete-upload", controller.deleteUpload);

export default router;
