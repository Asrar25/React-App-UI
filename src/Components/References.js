import { useState } from "react";
export default function References({ referencedata, setReferencedata, preStep, nextStep }) {

    const [referenceErrror, setReferenceErrror] = useState([{}]);
    const onChangeName = (index, e) => {
        const newReferenceData = [...referencedata];
        newReferenceData[index] = { ...newReferenceData[index], [e.target.name]: e.target.value };
        setReferencedata(newReferenceData);

        const newReferenceErrors = [...referenceErrror];
        if (newReferenceErrors[index]) { newReferenceErrors[index] = { ...newReferenceErrors[index], [e.target.name]: "" }; }
        setReferenceErrror(newReferenceErrors);
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const newReferenceErrors = referencedata.map((row, index) => {
            const newReferenceErrors = {};
            if (row.Name) {
                if (!row.Organization) newReferenceErrors.Organization = "Organization is Required";
                if (!row.Relationship) newReferenceErrors.Relationship = "Relatioship Field is Required";
                if (!row.Telephonic) newReferenceErrors.Telephonic = "Telephonic is Required";

            } else if (index === 0) {
                newReferenceErrors.Name = "Name Field is Required";
            }
            return newReferenceErrors;
        });
        // validation
        if (newReferenceErrors.every(row => Object.keys(row).length === 0)) {
            console.log(referencedata);
            nextStep();
        } else {
            console.log(newReferenceErrors);
            setReferenceErrror(newReferenceErrors);
        }
    }
    const Referencecolumns = [
        { name: "Name" },
        { name: "Organization" },
        { name: "Relationship" },
        { name: "Telephonic" }
    ];

    return (
        <div className="overflow-hidden px-20">
            <label htmlFor="responsibility" className="block text-gray-700 text-center text-sm font-bold mb-2">PLEASE IDENTIFY ANY ADDITIONAL KNOWLEDGE,SKILLS,QUALIFICATION OR AWARDS THAT WILL BE HELPDUL TOMAS IN CONSIDERING YOUR APPLICATION FOR EMPLOYEMENT</label>
            <table className="min-w-500 min-h-400 bg-white border border-gray-200 mx-auto">

                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Name/title</th>
                        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Organization</th>
                        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Relationship</th>
                        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Telephonic Number</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {referencedata.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {Referencecolumns.map((Referencecolumn, colIndex) => (
                                <td key={colIndex} className="px-4 py-2">
                                    <input
                                        type="text"
                                        className="w-full text-center text-sm text-gray-900"
                                        name={Referencecolumn.name}
                                        value={row[Referencecolumn.name]}
                                        onChange={(e) => onChangeName(rowIndex, e)}
                                    />
                                    {referenceErrror[rowIndex] && referenceErrror[rowIndex][Referencecolumn.name] && (
                                        <p className="text-red-500 text-xs italic">{referenceErrror[rowIndex][Referencecolumn.name]}</p>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div class="flex items-center justify-between mt-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>Back</button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>Next</button>
            </div>
        </div>

    )
}