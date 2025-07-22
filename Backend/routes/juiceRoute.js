import express from "express";
import multer from "multer";
import { addJuice, listJuice,removeJuice } from "../controllers/juiceController.js";

const juiceRouter = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

juiceRouter.post("/add", upload.single("image"), addJuice);
juiceRouter.get("/list",listJuice);
juiceRouter.post("/remove",removeJuice);

export default juiceRouter;
