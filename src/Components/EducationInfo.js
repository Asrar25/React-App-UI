import React, { useState } from "react";

export default function EducationInfo({
  setCourseData,
  setResultVerbalData,
  resultVerbalData,
  setMathData,
  resultMathData,
  resultTotalData,
  setTotalData,
  cpaData,
  setCpaData,
  setScholarshipData,
  scholarshipData,
  courseData,
  educationData,
  setEducationData,
  preStep,
  nextStep,
}) {
  // State Initialization
  const [educationErrors, setEducationErrors] = useState({});
  const [courseErrors, setCourseErrors] = useState({});
  const [resultVerbalErrors, setResultVerbalErrors] = useState({});
  const [resultMathErrors, setResultMathErrors] = useState({});
  const [resultTotalErrors, setTotalErrors] = useState({});
  const [scholarshipErrors, setScholarshipErrors] = useState({});
  const [cpaErrors, setCpaErrors] = useState({});

  // Handle Function for Education and Course Data
  const onChangeName = (index, e) => {
    const { name, value } = e.target;
    
    const newEducationData = [...educationData];
    newEducationData[index] = { ...newEducationData[index], [name]: value };
    setEducationData(newEducationData);

    const newEducationErrors = { ...educationErrors };
    if (newEducationErrors[index]) {
      delete newEducationErrors[index][name];
    }
    setEducationErrors(newEducationErrors);

    const newCourseData = [...courseData];
    newCourseData[index] = { ...newCourseData[index], [name]: value };
    setCourseData(newCourseData);

    const newCourseErrors = { ...courseErrors };
    if (newCourseErrors[index]) {
      delete newCourseErrors[index][name];
    }
    setCourseErrors(newCourseErrors);
  };

  // Handle Function for Verbal, Math, Total, Scholarship, CPA Data


  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Education Data
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
    setEducationErrors(newEducationErrors);

    // Validate Course Data
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
    setCourseErrors(newCourseErrors);

    // Validate Verbal Results
    const newResultVerbalErrors = {};
    if (!resultVerbalData.SatVerbal) newResultVerbalErrors.SatVerbal = "SatVerbal is required";
    if (!resultVerbalData.GreVerbal) newResultVerbalErrors.GreVerbal = "GreVerbal is required";
    if (!resultVerbalData.Act) newResultVerbalErrors.Act = "Act is required";
    setResultVerbalErrors(newResultVerbalErrors);

    // Validate Math Results
    const newResultMathErrors = {};
    if (!resultMathData.SatMath) newResultMathErrors.SatMath = "SatMath is required";
    if (!resultMathData.GreMath) newResultMathErrors.GreMath = "GreMath is required";
    if (!resultMathData.Lsat) newResultMathErrors.Lsat = "Lsat is required";
    setResultMathErrors(newResultMathErrors);

    // Validate Total Results
    const newResultTotalErrors = {};
    if (!resultTotalData.SatTotal) newResultTotalErrors.SatTotal = "SatTotal is required";
    if (!resultTotalData.GreTotal) newResultTotalErrors.GreTotal = "GreTotal is required";
    if (!resultTotalData.Gmat) newResultTotalErrors.Gmat = "Gmat is required";
    setTotalErrors(newResultTotalErrors);

    // Validate Scholarship Data
    const newScholarshipErrors = {};
    if (!scholarshipData.Scholarship) newScholarshipErrors.Scholarship = "Scholarship is required";
    setScholarshipErrors(newScholarshipErrors);

    // Validate CPA Data
    const newCpaErrors = {};
    if (!cpaData.partTaken) newCpaErrors.partTaken = "partTaken is required";
    if (!cpaData.cpaState) newCpaErrors.cpaState = "cpaState is required";
    if (!cpaData.licenseNumber) newCpaErrors.licenseNumber = "licenseNumber is required";
    if (!cpaData.Active) newCpaErrors.Active = "Active is required";
    setCpaErrors(newCpaErrors);

    // Check if all errors are empty
    if (
      newEducationErrors.every((errors) => Object.keys(errors).length === 0) &&
      newCourseErrors.every((errors) => Object.keys(errors).length === 0) &&
      Object.keys(newResultVerbalErrors).length === 0 &&
      Object.keys(newResultMathErrors).length === 0 &&
      Object.keys(newResultTotalErrors).length === 0 &&
      Object.keys(newScholarshipErrors).length === 0 &&
      Object.keys(newCpaErrors).length === 0
    ) {
      nextStep(); // Proceed to next step if all validations pass
    } else {
      console.log("Form has errors. Please check.");
    }
  };
  const handleEducationChange = (event, index) => {
    const { name, value } = event.target;
    const updatedEducationData = [...educationData];
    updatedEducationData[index] = { ...updatedEducationData[index], [name]: value };
    setEducationData(updatedEducationData);
  };

  // Handle Course Data Change
  const handleCourseChange = (event, index) => {
    const { name, value } = event.target;
    const updatedCourseData = [...courseData];
    updatedCourseData[index] = { ...updatedCourseData[index], [name]: value };
    setCourseData(updatedCourseData);
  };


  // Column Definitions
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
    { name: "Course", label: "Course" },
    { name: "School", label: "School" },
    { name: "creditHour", label: "CreditHours" },
    { name: "Grade", label: "Grade" },
  ];

  const ResultVerbalcolumns = [
    { name: "SatVerbal" },
    { name: "GreVerbal" },
    { name: "Act" },
  ];

  const ResultMathcolumns = [
    { name: "SatMath" },
    { name: "GreMath" },
    { name: "Lsat" },
  ];

  const ResultTotalcolumns = [
    { name: "SatTotal" },
    { name: "GreTotal" },
    { name: "Gmat" },
  ];

  const Scholarshipcolumns = [{ name: "Scholarship" }];

  const Cpacolumns = [
    { name: "partTaken" },
    { name: "cpaState" },
    { name: "licenseNumber" },
    { name: "Active" },
  ];

  return (
    <div className="px-20">
      <div className="container mx-auto py-8">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200 text-gray-700">
            <tr>
              {Educationcolumns.map((column) => (
                <th key={column.name} className="px-4 py-2 uppercase">
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {educationData.map((row, index) => (
              <tr key={index}>
                {Educationcolumns.map((column) => (
                  <td key={column.name} className="px-4 py-3">
                    <input
                      type="text"
                      name={column.name}
                      value={row[column.name]}
                      onChange={(e) => handleEducationChange(e, index)}
                      className={`border border-gray-300 text-center rounded-md p-1 w-full ${educationErrors[index] && educationErrors[index][column.name]
                          ? "border-red-500"
                          : ""
                        }`}
                    />
                    {educationErrors[index] && educationErrors[index][column.name] && (
                      <p className="text-red-500 text-xs italic">
                        {educationErrors[index][column.name]}
                      </p>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="py-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                {Coursecolumns.map((column) => (
                  <th key={column.name} className="px-4 py-2 uppercase">
                    {column.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {courseData.map((row, index) => (
                <tr key={index}>
                  {Coursecolumns.map((column) => (
                    <td key={column.name} className="px-4 py-3">
                      <input
                        type="text"
                        name={column.name}
                        value={row[column.name]}
                        onChange={(e) => handleCourseChange(e, index)}
                        className={`border border-gray-300 text-center rounded-md p-1 w-full ${courseErrors[index] && courseErrors[index][column.name]
                            ? "border-red-500"
                            : ""
                          }`}
                      />
                      {courseErrors[index] && courseErrors[index][column.name] && (
                        <p className="text-red-500 text-xs italic">
                          {courseErrors[index][column.name]}
                        </p>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="py-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                {ResultVerbalcolumns.map((column) => (
                  <th key={column.name} className="px-4 py-2 uppercase">
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                {ResultVerbalcolumns.map((column) => (
                  <td key={column.name} className="px-4 py-3">
                    <input
                      type="text"
                      name={column.name}
                      value={resultVerbalData[column.name]}
                      onChange={(event) => {
                        const { name, value } = event.target; // Extract the name and value from the event target
                        setResultVerbalData({ ...resultVerbalData, [name]: value });
                      }}
                      className={`border text-center border-gray-300 rounded-md p-1 w-full ${resultVerbalErrors[column.name] ? "border-red-500" : ""
                        }`}
                    />
                    {resultVerbalErrors[column.name] && (
                      <p className="text-red-500 text-xs italic">
                        {resultVerbalErrors[column.name]}
                      </p>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                {ResultMathcolumns.map((column) => (
                  <th key={column.name} className="px-4 py-2 uppercase">
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                {ResultMathcolumns.map((column) => (
                  <td key={column.name} className="px-4 py-3">
                    <input
                      type="text"
                      name={column.name}
                      value={resultMathData[column.name]}
                      onChange={(event) => {
                        const { name, value } = event.target; // Extract the name and value from the event target
                        setMathData({ ...resultMathData, [name]: value });
                      }}
                      className={`border border-gray-300 text-center rounded-md p-1 w-full ${resultMathErrors[column.name] ? "border-red-500" : ""
                        }`}
                    />
                    {resultMathErrors[column.name] && (
                      <p className="text-red-500 text-xs italic">
                        {resultMathErrors[column.name]}
                      </p>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                {ResultTotalcolumns.map((column) => (
                  <th key={column.name} className="px-4 py-2 uppercase">
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                {ResultTotalcolumns.map((column) => (
                  <td key={column.name} className="px-4 py-3">
                    <input
                      type="text"
                      name={column.name}
                      value={resultTotalData[column.name]}
                      onChange={(event) => {
                        const { name, value } = event.target; // Extract the name and value from the event target
                        setTotalData({ ...resultTotalData, [name]: value });
                      }}
                      className={`border border-gray-300  text-center rounded-md p-1 w-full ${resultTotalErrors[column.name] ? "border-red-500" : ""
                        }`}
                    />
                    {resultTotalErrors[column.name] && (
                      <p className="text-red-500 text-xs italic">
                        {resultTotalErrors[column.name]}
                      </p>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                {Scholarshipcolumns.map((column) => (
                  <th key={column.name} className="px-4 py-2 uppercase">
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                {Scholarshipcolumns.map((column) => (
                  <td key={column.name} className="px-4 py-3">
                    <input
                      type="text"
                      name={column.name}
                      value={scholarshipData[column.name]}
                      onChange={(event) => {
                        const { name, value } = event.target; // Extract the name and value from the event target
                        setScholarshipData({ ...scholarshipData, [name]: value });
                      }}
                      className={`border  border-gray-300 text-center rounded-md p-1 w-full ${scholarshipErrors[column.name] ? "border-red-500" : ""
                        }`}
                    />
                    {scholarshipErrors[column.name] && (
                      <p className="text-red-500 text-xs italic">
                        {scholarshipErrors[column.name]}
                      </p>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
        <div className="py-4">
          <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead className="bg-gray-200 text-gray-700">
              <tr>
                {Cpacolumns.map((column) => (
                  <th key={column.name} className="px-4 py-2 uppercase">
                    {column.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
            <tr>
  {Cpacolumns.map((column) => (
    <td key={column.name} className="px-4 py-3 text-center">
      {column.name === 'Active' ? (
        <div className="flex gap-3 justify-center items-center">
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name={column.name}
              value="yes"
              checked={cpaData.Active === 'yes'}
              onChange={(event) => {
                const { name, value } = event.target;
                setCpaData({ ...cpaData, [name]: value });
              }}
              className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            /> 
            YES
          </label>
          <label className="flex items-center gap-1">
            <input
              type="radio"
              name={column.name}
              value="no"
              checked={cpaData.Active === 'no'}
              onChange={(event) => {
                const { name, value } = event.target;
                setCpaData({ ...cpaData, [name]: value });
              }}
              className="form-radio h-3 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
            /> 
            NO
          </label>
          {cpaErrors[column.name] && (
            <p className="text-red-500 text-xs italic">{cpaErrors[column.name]}</p>
          )}
        </div>
      ) : (
        <div>
          <input
            type="text"
            name={column.name}
            value={cpaData[column.name]}
            onChange={(event) => {
              const { name, value } = event.target;
              setCpaData({ ...cpaData, [name]: value });
            }}
            className={`border border-gray-300 text-center rounded-md p-1 w-full ${
              cpaErrors[column.name] ? "border-red-500" : ""
            }`}
          />
          {cpaErrors[column.name] && (
            <p className="text-red-500 text-xs italic">{cpaErrors[column.name]}</p>
          )}
        </div>
      )}
    </td>
  ))}
</tr>

</tbody>

          </table>
        </div>
        <div className="mt-6 flex justify-between">
          <button
            onClick={preStep}
            className="bg-blue-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded mr-2"
          >
            Back
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
