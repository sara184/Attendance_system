import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import StudentList from './components/StudentList';
import AttendanceSummary from './components/AttendanceSummary';

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: 'Student 1', present: false },
    { id: 2, name: 'Student 2', present: false },
    // Add more students as needed
  ]);

  const toggleAttendance = (studentId) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.id === studentId
          ? { ...student, present: !student.present }
          : student
      )
    );
  };

  return (
    <div className="App">
      <Header />
      <StudentList students={students} toggleAttendance={toggleAttendance} />
      <AttendanceSummary students={students} />
    </div>
  );
}

export default App;
