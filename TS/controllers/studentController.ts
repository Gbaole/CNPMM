import { Request, Response } from "express";
import Student from "../models/student";
// @route   GET /api/students
// @desc    Lấy tất cả sinh viên hoặc lọc theo trạng thái
export const getStudents = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const status = req.query.status as string;
    let students;
    if (status) {
      students = await Student.find({ "status.examEligibility": status });
    } else {
      students = await Student.find();
    }
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Lấy thông tin một sinh viên theo ID
// @route   GET /api/students/:id
export const getStudentById = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const student = await Student.findById(id).select("+infoHistory");
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }
    res.json({
      currentInfo: student.currentInfo,
      infoHistory: student.infoHistory,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// @desc    Tạo mới một sinh viên
// @route   POST /api/students
export const createStudent = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { studentId, currentInfo } = req.body;
    const newStudent = await Student.create({
      studentId,
      currentInfo,
      infoHistory: [],
      examParticipations: [],
      status: { examEligibility: "active" },
    });
    res.status(201).json(newStudent);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// @desc    Cập nhật thông tin sinh viên (current_info và thêm vào info_history)
// @route   PUT /api/students/:id/info
export const updateStudentInfo = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const updatedInfo = req.body; // Thông tin mới

    // Tìm sinh viên
    const student = await Student.findById(id);
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }

    // Lưu thông tin cũ vào infoHistory
    student.infoHistory.push({
      ...student.currentInfo,
      updatedAt: new Date(),
    });

    // Cập nhật currentInfo
    student.currentInfo = updatedInfo;

    await student.save();
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Thêm kỳ thi mới vào exam_participations
// @route   POST /api/students/:id/exam-participation
export const addExamParticipation = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const newExam = req.body; // Đảm bảo body đúng schema
    const student = await Student.findByIdAndUpdate(
      id,
      { $push: { examParticipations: newExam } },
      { new: true }
    );
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
// @desc    Cập nhật trạng thái cấm thi
// @route   PUT /api/students/:id/status
export const updateStudentStatus = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { id } = req.params;
    const { status } = req.body; // { examEligibility, reason }
    const student = await Student.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );
    if (!student) {
      res.status(404).json({ message: "Student not found" });
      return;
    }
    res.json(student);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Tìm sinh viên có vi phạm "cảnh cáo" trở lên trong năm 2025 (ví dụ Aggregate)
// @route   GET /api/students/violations/2025
export const getStudentsWithSevereViolations2025 = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const students = await Student.find({
      examParticipations: {
        $elemMatch: {
          examDate: {
            $gte: new Date("2025-01-01"),
            $lte: new Date("2025-12-31"),
          },
          "violation.level": { $in: ["cảnh cáo", "đình chỉ", "đuổi học"] },
        },
      },
    });
    res.json(students);
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};
