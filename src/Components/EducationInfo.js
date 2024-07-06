import { useState } from "react";
export default function EducationInfo({ setCourseData, setResultVerbalData, resultVerbalData, setMathData, resultMathData, resultTotalData, setTotalData, cpaData, setCpaData, setScholarshipData, scholarshipData, courseData, educationData, setEducationData, preStep, nextStep }) {

    //-----State Inintailize
    const [educationErrors, setEducationErrors] = useState([{}]);
    const [courseErrors, setCourseErrors] = useState([{}]);
    const [resultVerbalErrors, setResultVerbalErrors] = useState([{}]);
    const [resultMathErrors, setResultMathErrors] = useState([{}]);
    const [resultTotalErrors, setTotalErrors] = useState([{}]);
    const [scholarshipErrors, setScholarshipErrors] = useState([{}]);
    const [cpaErrors, setCpaErrors] = useState([{}]);

    //-----Handle Function


    const onChangeName = (index,e) => {
        const newEducationData = [...educationData];
        newEducationData[index] = { ...newEducationData[index], [e.target.name]: e.target.value };
        setEducationData(newEducationData);

        const newEducationErrors = [...educationErrors];
        if (newEducationErrors[index]) { newEducationErrors[index] = { ...newEducationErrors[index], [e.target.name]: "" }; }
        setEducationErrors(newEducationErrors);

        const newcourseData = [...courseData];
        newcourseData[index] = { ...newcourseData[index], [e.target.name]: e.target.value };
        setCourseData(newcourseData);

        const newCourseErrors = [...courseErrors];
        if (newCourseErrors[index]) { newCourseErrors[index] = { ...newCourseErrors[index], [e.target.name]: "" }; }
        setCourseErrors(newCourseErrors);


        const newresultVerbalData = [...resultVerbalData];
        newresultVerbalData[index] = { ...newresultVerbalData[index], [e.target.name]: e.target.value };
        setResultVerbalData(newresultVerbalData);

        const newResultVerbalErrors = [...resultVerbalErrors];
        if (newResultVerbalErrors[index]) { newResultVerbalErrors[index] = { ...newResultVerbalErrors[index], [e.target.name]: "" }; }
        setResultVerbalErrors(newResultVerbalErrors);

        const newresultMathData = [...resultMathData];
        newresultMathData[index] = { ...newresultMathData[index], [e.target.name]: e.target.value };
        setMathData(newresultMathData);

        const newresultMathErrors = [...resultMathErrors];
        if (newresultMathErrors[index]) { newresultMathErrors[index] = { ...newresultMathErrors[index], [e.target.name]: "" }; }
        setResultMathErrors(newresultMathErrors);

        const newResultTotalData = [...resultTotalData];
        newResultTotalData[index] = { ...newResultTotalData[index], [e.target.name]: e.target.value };
        setTotalData(newResultTotalData);

        const newresultTotalErrors = [...resultTotalErrors];
        if (newresultTotalErrors[index]) { newresultTotalErrors[index] = { ...newresultTotalErrors[index], [e.target.name]: "" }; }
        setTotalErrors(newresultTotalErrors);

        const newscholarshipData = [...scholarshipData];
        newscholarshipData[index] = { ...newscholarshipData[index], [e.target.name]: e.target.value };
        setScholarshipData(newscholarshipData);

        const newscholarshipErrors = [...scholarshipErrors];
        if (newscholarshipErrors[index]) { newscholarshipErrors[index] = { ...newscholarshipErrors[index], [e.target.name]: "" }; }
        setScholarshipErrors(newscholarshipErrors);

        const newcpaData = [...cpaData];
        newcpaData[index] = { ...newcpaData[index], [e.target.name]: e.target.value };
        setCpaData(newcpaData);

        const newcpaErrors = [...cpaErrors];
        if (newcpaErrors[index]) { newcpaErrors[index] = { ...newcpaErrors[index], [e.target.name]: "" }; }
        setCpaErrors(newcpaErrors);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEducationErrors = educationData.map((row, index) => {
            const newEducationErrors = {};
            if (row.Education) {
                if (!row.State) newEducationErrors.State = "State Field is Required";
                if (!row.DateAttend) newEducationErrors.DateAttend = "DateAttend Field is Required";
                if (!row.Degree) newEducationErrors.Degree = "Degree Field is Required";
                if (!row.GraduationDate) newEducationErrors.GraduationDate = "GraduationDate Field is Required";
                if (!row.Major) newEducationErrors.Major = "Major Field is Required";
                if (!row.Minor) newEducationErrors.Minor = "Minor Field is Required";
                if (!row.OverallGPA) newEducationErrors.OverallGPA = "OverallGPA Field is Required";
                if (!row.GpaMajor) newEducationErrors.GpaMajor = "GpaMajor Field is Required";
                if (!row.HrsWork) newEducationErrors.HrsWork = "HrsWork Field is Required";
            } else if (index === 0) {
                newEducationErrors.Education = "College/Education Field is Required";
            }
            return newEducationErrors;
        });
        const newCourseErrors = courseData.map((row, index) => {
            const newCourseErrors = {};
            if (row.Course) {
                if (!row.School) newCourseErrors.School = "School Field is Required";
                if (!row.creditHour) newCourseErrors.creditHour = "creditHour Field is Required";
                if (!row.Grade) newCourseErrors.Grade = "Grade Field is Required";
            } else if (index === 0) {
                newCourseErrors.Course = "Course Field is Required";
            }
            return newCourseErrors;
        });
        const newResultVerbalErrors = resultVerbalData.map(row => {
            const newResultVerbalErrors = {};
            if (!row.SatVerbal) { newResultVerbalErrors.SatVerbal = "SAT Verbal Field is Required"; }
            if (!row.GreVerbal) { newResultVerbalErrors.GreVerbal = "GRE Verbal Field is Required"; }
            if (!row.Act) { newResultVerbalErrors.Act = "ACT Field is Required"; }

            return newResultVerbalErrors;
        }); const newresultMathErrors = resultMathData.map(row => {
            const newresultMathErrors = {};
            if (!row.SatMath) { newresultMathErrors.SatMath = "SAT Math Field is Required"; }
            if (!row.GreMath) { newresultMathErrors.GreMath = "GRE Math Field is Required"; }
            if (!row.Lsat) { newresultMathErrors.Lsat = "LSAT Field is Required"; }
            return newresultMathErrors;
        }); const newresultTotalErrors = resultTotalData.map(row => {
            const newresultTotalErrors = {};
            if (!row.SatTotal) { newresultTotalErrors.SatTotal = "SAT Total Field is Required"; }
            if (!row.GreTotal) { newresultTotalErrors.GreTotal = "GRE Total Field is Required"; }
            if (!row.Gmat) { newresultTotalErrors.Gmat = "GMAT Field is Required"; }
            return newresultTotalErrors;
        }); const newscholarshipErrors = scholarshipData.map(row => {
            const newscholarshipErrors = {};
            if (!row.Scholarship) {
                newscholarshipErrors.Scholarship = "Scholarship Field is Required";
            }
            return newscholarshipErrors;
        }); const newcpaErrors = cpaData.map(row => {
            const newcpaErrors = {};
            if (row.partTaken) {
                if (!row.cpaState) newcpaErrors.cpaState = "State Field is Required";
                if (!row.licenseNumber) newcpaErrors.licenseNumber = "licenseNumber Field is Required";
                if (!row.Active) newcpaErrors.Active = "Active Field is Required";
            }
            return newcpaErrors;
        });
        if (newEducationErrors.every(row => Object.keys(row).length === 0)) {
            console.log(educationData);
            if (newCourseErrors.every(row => Object.keys(row).length === 0)) {
                console.log(courseData);
                if (newResultVerbalErrors.every(row => Object.keys(row).length === 0)) {
                    console.log(resultVerbalData);
                    if (newresultMathErrors.every(row => Object.keys(row).length === 0)) {
                        console.log(resultMathData);
                        if (newresultTotalErrors.every(row => Object.keys(row).length === 0)) {
                            console.log(newresultTotalErrors);
                            if (newscholarshipErrors.every(row => Object.keys(row).length === 0)) {
                                console.log(scholarshipData);
                                if (newcpaErrors.every(row => Object.keys(row).length === 0)) {
                                    console.log(cpaData);
                                    nextStep();
                                } else {
                                    console.log(newcpaErrors);
                                    setCpaErrors(newcpaErrors);
                                }
                            } else {
                                console.log(newscholarshipErrors);
                                setScholarshipErrors(newscholarshipErrors);
                            }
                        } else {
                            console.log(newresultTotalErrors);
                            setTotalErrors(newresultTotalErrors);
                        }
                    } else {
                        console.log(newresultMathErrors);
                        setResultMathErrors(newresultMathErrors);
                    }
                }
                else {
                    console.log(newResultVerbalErrors);
                    setResultVerbalErrors(newResultVerbalErrors);
                }
            } else {
                console.log(newCourseErrors);
                setCourseErrors(newCourseErrors);
            }
        } else {
            console.log(newEducationErrors);
            setEducationErrors(newEducationErrors);
        }
    }
    const Educationcolumns = [
        { name: "Education", label: "College/University" },
        { name: "State", label: "State" },
        { name: "DateAttend", label: "Dates Attended" },
        { name: "Degree", label: "Degree" },
        { name: "GraduationDate", label: "Graduation Date" },
        { name: "Major", label: "Major" },
        { name: "Minor", label: "Minor" },
        { name: "OverallGPA", label: "Overall GPA" },
        { name: "GpaMajor", label: "GPA in Major" },
        { name: "HrsWork", label: "No_Of_Hrs_Work" },
    ];
    const Coursecolumns = [
        { name: "Course" },
        { name: "School" },
        { name: "creditHour" },
        { name: "Grade" }
    ];
    const ResultVerbalcolumns = [
        { name: "SatVerbal" },
        { name: "GreVerbal" },
        { name: "Act" }
    ];
    const ResultMathcolumns = [
        { name: "SatMath" },
        { name: "GreMath" },
        { name: "Lsat" }
    ];
    const ResultTotalcolumns = [
        { name: "SatTotal" },
        { name: "GreTotal" },
        { name: "Gmat" }
    ];
    const Scholarshipcolumns = [
        { name: "Scholarship" }
    ];
    const Cpacolumns = [
        { name: "partTaken" },
        { name: "cpaState" },
        { name: "licenseNumber" },
        { name: "Active" }
    ];
    return (
        <div className="px-20">
            <div className="container mx-auto py-8">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 uppercase">College/University</th>
                            <th className="px-4 py-2 uppercase">State</th>
                            <th className="px-4 py-2 uppercase">Dates Attended</th>
                            <th className="px-4 py-2 uppercase">Degree</th>
                            <th className="px-4 py-2 uppercase">Graduation Date</th>
                            <th className="px-4 py-2 uppercase">Major</th>
                            <th className="px-4 py-2 uppercase">Minor</th>
                            <th className="px-4 py-2 uppercase">Overall GPA</th>
                            <th className="px-4 py-2 uppercase">GPA in Major</th>
                            <th className="px-4 py-2 uppercase">No_Of_Hrs_Work</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {educationData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Educationcolumns.map((Educationcolumn, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2">
                                        <input
                                            type="text"
                                            className="w-full text-center text-sm text-gray-900"
                                            name={Educationcolumn.name}
                                            value={row[Educationcolumn.name]}
                                            onChange={(e) => onChangeName(rowIndex, e)}
                                        />
                                        {educationErrors[rowIndex] && educationErrors[rowIndex][Educationcolumn.name] && (<p className="text-red-500 text-xs italic">{educationErrors[rowIndex][Educationcolumn.name]}</p>)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="container mt-1">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 uppercase">Course</th>
                            <th className="px-4 py-2 uppercase">School</th>
                            <th className="px-4 py-2 uppercase">Credit Hour</th>
                            <th className="px-4 py-2 uppercase">Grade</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {courseData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Coursecolumns.map((Coursecolumn, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2">
                                        <input
                                            type="text"
                                            className="w-full text-center text-sm text-gray-900"
                                            name={Coursecolumn.name}
                                            value={row[Coursecolumn.name]}
                                            onChange={(e) => onChangeName(rowIndex, e)}
                                        />
                                        {courseErrors[rowIndex] && courseErrors[rowIndex][Coursecolumn.name] && (<p className="text-red-500 text-xs italic">{courseErrors[rowIndex][Coursecolumn.name]}</p>)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="container mt-10">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 uppercase">SAT Verbal</th>
                            <th className="px-4 py-2 uppercase">GRE Verbal</th>
                            <th className="px-4 py-2 uppercase">ACt</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {resultVerbalData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {ResultVerbalcolumns.map((ResultVerbalcolumn, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2">
                                        <input
                                            type="text"
                                            className="w-full text-center text-sm text-gray-900"
                                            name={ResultVerbalcolumn.name}
                                            value={row[ResultVerbalcolumn.name]}
                                            onChange={(e) => onChangeName(rowIndex, e)}
                                        />
                                        {resultVerbalErrors[rowIndex] && resultVerbalErrors[rowIndex][ResultVerbalcolumn.name] && (
                                            <p className="text-red-500 text-xs italic">{resultVerbalErrors[rowIndex][ResultVerbalcolumn.name]}</p>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="container mt-10">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 uppercase">SAT Math</th>
                            <th className="px-4 py-2 uppercase">GRE Math</th>
                            <th className="px-4 py-2 uppercase">LSAT</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {resultMathData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {ResultMathcolumns.map((ResultMathcolumn, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2">
                                        <input
                                            type="text"
                                            className="w-full text-center text-sm text-gray-900"
                                            name={ResultMathcolumn.name}
                                            value={row[ResultMathcolumn.name]}
                                            onChange={(e) => onChangeName(rowIndex, e)}
                                        />
                                        {resultMathErrors[rowIndex] && resultMathErrors[rowIndex][ResultMathcolumn.name] && (
                                            <p className="text-red-500 text-xs italic">{resultMathErrors[rowIndex][ResultMathcolumn.name]}</p>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="container mt-10">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 uppercase">Sat Total</th>
                            <th className="px-4 py-2 uppercase">GRE Total</th>
                            <th className="px-4 py-2 uppercase">GMAT</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {resultTotalData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {ResultTotalcolumns.map((ResultTotalcolumn, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2">
                                        <input
                                            type="text"
                                            className="w-full text-center text-sm text-gray-900"
                                            name={ResultTotalcolumn.name}
                                            value={row[ResultTotalcolumn.name]}
                                            onChange={(e) => onChangeName(rowIndex, e)}
                                        />
                                        {resultTotalErrors[rowIndex] && resultTotalErrors[rowIndex][ResultTotalcolumn.name] && (<p className="text-red-500 text-xs italic">{resultTotalErrors[rowIndex][ResultTotalcolumn.name]}</p>)}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="container mt-10">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 uppercase">Scholastic honours and scholarships</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {scholarshipData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Scholarshipcolumns.map((Scholarshipcolumn, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2">
                                        <input
                                            type="text"
                                            className="w-full text-center text-sm text-gray-900"
                                            name={Scholarshipcolumn.name}
                                            value={row[Scholarshipcolumn.name]}
                                            onChange={(e) => onChangeName(rowIndex, e)}
                                        />
                                        {scholarshipErrors[rowIndex] && scholarshipErrors[rowIndex][Scholarshipcolumn.name] && (
                                            <p className="text-red-500 text-xs italic">{scholarshipErrors[rowIndex][Scholarshipcolumn.name]}</p>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="container mt-10">
                <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
                    <thead className="bg-gray-200 text-gray-700">
                        <tr>
                            <th className="px-4 py-2 uppercase">Parts Taken Passed</th>
                            <th className="px-4 py-2 uppercase">State</th>
                            <th className="px-4 py-2 uppercase">License Number</th>
                            <th className="px-4 py-2 uppercase">Active</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {cpaData.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {Cpacolumns.map((Cpacolumn, colIndex) => (
                                    <td key={colIndex} className="px-4 py-2">
                                        <input
                                            type="text"
                                            className="w-full text-center text-sm text-gray-900"
                                            name={Cpacolumn.name}
                                            value={row[Cpacolumn.name]}
                                            onChange={(e) => onChangeName(rowIndex, e)}
                                        />
                                        {cpaErrors[rowIndex] && cpaErrors[rowIndex][Cpacolumn.name] && (
                                            <p className="text-red-500 text-xs italic">{cpaErrors[rowIndex][Cpacolumn.name]}</p>
                                        )}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div class="flex items-center justify-between container mt-10">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>Next</button>
            </div>
        </div>
    )
}