import React from 'react';

const AttendanceSummary = ({ students }) => {
  const totalStudents = students.length;
  const presentStudents = students.filter((student) => student.present).length;

  return (
    <div className="attendance-summary">
      <h2>Attendance Summary</h2>
      <p>Total Students: {totalStudents}</p>
      <p>Present Students: {presentStudents}</p>
    </div>
  );
};

export default AttendanceSummary;
