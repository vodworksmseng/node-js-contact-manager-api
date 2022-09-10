import { Router } from "express";
const router = Router();

import {
  getPeople,
  getPeopleById,
  createPeople,
  updatePeople,
  deletePeople,
} from "../controllers/index.controller";

router.get("/people", getPeople);
router.get("/people/:id", getPeopleById);
router.post("/people", createPeople);
router.put("/people/:id", updatePeople);
router.delete("/people/:id", deletePeople);

export default router;