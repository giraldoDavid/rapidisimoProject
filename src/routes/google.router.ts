import express from "express";
import { uploadFile } from "./../config/google-cloud/storage";

export const googleRouter = express.Router();

googleRouter.post("/uploadFile", uploadFile);