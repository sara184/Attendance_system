import React from 'react';

const StudentList = ({ students, toggleAttendance }) => {
  return (
    <div className="student-list">
      <h2>Mark Attendance</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <label>
              <input
                type="checkbox"
                checked={student.present}
                onChange={() => toggleAttendance(student.id)}
              />
              {student.name}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
