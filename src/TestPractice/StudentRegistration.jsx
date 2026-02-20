import React, { useState } from "react";
import "../TestPractice/StudentRegistration.css";

function StudentRegistration() {
    const [step, setStep] = useState(1);

    const [student, setStudent] = useState({
        name: "",
        email: "",
        age: "",
        course: ""
    });

    const [college, setCollege] = useState({
        collegeName: "",
        city: "",
        year: ""
    });

    const [submittedData, setSubmittedData] = useState(null);

    // student form change
    const handleStudentChange = (e) => {
        const { name, value } = e.target;
        setStudent({ ...student, [name]: value });
    };

    // college form change
    const handleCollegeChange = (e) => {
        const { name, value } = e.target;
        setCollege({ ...college, [name]: value });
    };

    // Step 1 submit → go to step 2
    const handleStudentSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    // Final submit
    const handleFinalSubmit = (e) => {
        e.preventDefault();

        const fullData = {
            student,
            college
        };

        const existing =
            JSON.parse(localStorage.getItem("students")) || [];

        existing.push(fullData);
        localStorage.setItem("students", JSON.stringify(existing));

        setSubmittedData(fullData);
        setStep(3);
    };

    const resetForm = () => {
        setStudent({ name: "", email: "", age: "", course: "" });
        setCollege({ collegeName: "", city: "", year: "" });
        setSubmittedData(null);
        setStep(1);
    };

    return (
        <div className="main">
            <div className="form-control">

                {/* STEP 1: STUDENT FORM */}
                {step === 1 && (
                    <>
                        <h2>Student Details</h2>
                        <form onSubmit={handleStudentSubmit}>
                            <label>Name</label>
                            <input type="text" name="name" value={student.name} onChange={handleStudentChange} required />

                            <label>Email</label>
                            <input type="email" name="email" value={student.email} onChange={handleStudentChange} required />

                            <label>Age</label>
                            <input type="number" name="age" value={student.age} onChange={handleStudentChange} required />

                            <label>Course</label>
                            <input type="text" name="course" value={student.course} onChange={handleStudentChange} required />

                            <button type="submit">Next</button>
                        </form>
                    </>
                )}

                {/* STEP 2: COLLEGE FORM */}
                {step === 2 && (
                    <>
                        <h2>College Details</h2>
                        <form onSubmit={handleFinalSubmit}>
                            <label>College Name</label>
                            <input type="text" name="collegeName" value={college.collegeName} onChange={handleCollegeChange} required />

                            <label>City</label>
                            <input type="text" name="city" value={college.city} onChange={handleCollegeChange} required />

                            <label>Year</label>
                            <input type="number" name="year" value={college.year} onChange={handleCollegeChange} required />

                            <button type="submit">Submit</button>
                        </form>
                    </>
                )}

                {/* STEP 3: SUMMARY */}
                {step === 3 && submittedData && (
                    <>
                        <h2>Registration Summary</h2>

                        <div className="summary">
                            <div>
                                <h3>Student Details</h3>
                                <p><b>Name:</b> {submittedData.student.name}</p>
                                <p><b>Email:</b> {submittedData.student.email}</p>
                                <p><b>Age:</b> {submittedData.student.age}</p>
                                <p><b>Course:</b> {submittedData.student.course}</p>
                            </div>

                            <div>
                                <h3>College Details</h3>
                                <p><b>College:</b> {submittedData.college.collegeName}</p>
                                <p><b>City:</b> {submittedData.college.city}</p>
                                <p><b>Year:</b> {submittedData.college.year}</p>
                            </div>
                        </div>

                        <button onClick={resetForm}>New Registration</button>
                    </>
                )}

            </div>
        </div>
    );
}

export default StudentRegistration;
