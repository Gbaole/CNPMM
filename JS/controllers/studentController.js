const Student = require("../models/student");
// @route   GET /api/students
// @desc    Lấy tất cả sinh viên hoặc lọc theo trạng thái
exports.getStudents = async (req, res) => {};

// @desc    Lấy thông tin một sinh viên theo ID
// @route   GET /api/students/:id
exports.getStudentById = async (req, res) => {};

// @desc    Tạo mới một sinh viên
// @route   POST /api/students
exports.createStudent = async (req, res) => {};

// @desc    Cập nhật thông tin sinh viên (current_info và thêm vào info_history)
// @route   PUT /api/students/:id/info
exports.updateStudentInfo = async (req, res) => {};

// @desc    Thêm kỳ thi mới vào exam_participations
// @route   POST /api/students/:id/exam-participation
exports.addExamParticipation = async (req, res) => {};

// @desc    Cập nhật trạng thái cấm thi
// @route   PUT /api/students/:id/status
exports.updateStudentStatus = async (req, res) => {};

// @desc    Tìm sinh viên có vi phạm "cảnh cáo" trở lên trong năm 2025 (ví dụ Aggregate)
// @route   GET /api/students/violations/2025
exports.getStudentsWithSevereViolations2025 = async (req, res) => {};
