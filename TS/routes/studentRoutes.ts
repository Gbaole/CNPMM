import { Router } from "express";
import * as studentController from "../controllers/studentController";

const router = Router();

router.get("/", studentController.getStudents);
router.post("/", studentController.createStudent);
router.get("/:id", studentController.getStudentById);
router.put("/:id/info", studentController.updateStudentInfo);
router.post("/:id/exam-participation", studentController.addExamParticipation);
router.put("/:id/status", studentController.updateStudentStatus);
router.get(
  "/violations/2025",
  studentController.getStudentsWithSevereViolations2025
);

export default router;
