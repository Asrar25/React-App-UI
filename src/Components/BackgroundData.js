import { useState } from "react";
export default function BackgroundData({ addressData, setAddressData, setBackgroundData, backgroundData, preStep, nextStep }) {

    const [backgroundErrors, setBackgroundErrors] = useState({});
    const [addressErrors, setAddressErrors] = useState([]);
    const handlechange = (e) => {
        setBackgroundData({
            ...backgroundData,
            [e.target.name]: e.target.value
        });
        console.log(backgroundData)
    }
    const handlechange2 = (index, e) => {
        const { name, value } = e.target;
        const newAddressData = [...addressData];
        newAddressData[index] = { ...newAddressData[index], [name]: value };
        setAddressData(newAddressData);

        const newAddressErrors = { ...addressErrors };
        if (newAddressErrors[index]) {
            delete newAddressErrors[index][name];
        }



    }
    const handleSubmit = (e) => {
        e.preventDefault();
        const backgroundErrors = {};
        if (!backgroundData.firstName) {
            backgroundErrors.firstName = "First Name is required";
        }
        if (!backgroundData.lastName) {
            backgroundErrors.lastName = "Last Name is required";
        }
        if (!backgroundData.securityNo) {
            backgroundErrors.securityNo = "Security is required";
        }
        if (!backgroundData.mi) {
            backgroundErrors.mi = " M.I field is required";
        }
        if (!backgroundData.usedName) {
            backgroundErrors.usedName = "Used Name is required";
        }
        setBackgroundErrors(backgroundErrors);

        const newAddressErrors = addressData.map((row, index) => {
            const newAddressErrors = {};
            if (row.street) {
                if (!row.address) newAddressErrors.address = "Address Field is Required";
                if (!row.fromTo) newAddressErrors.fromTo = "Date FromTo Field is Required";
            } else if (index === 0) {
                newAddressErrors.street = "streetField is Required";
            }
            return newAddressErrors;
        })
        if (Object.keys(backgroundErrors).length == 0) {
            if (newAddressErrors.every((errors) => Object.keys(errors).length === 0)) {
                console.log(backgroundData)
                nextStep();
            } else {
                console.log(newAddressErrors);
                setAddressErrors(newAddressErrors);
            }
        } else {
            console.log(backgroundErrors);
            setBackgroundErrors(backgroundErrors);
        }
    }
    const AddressColumns = [
        { name: "street" },
        { name: "address" },
        { name: "fromTo" },
    ];
    return (


        <div class="px-20">

            <div class="flex flex-col md:flex-row mb-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">FIRST NAME</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${backgroundErrors.firstName && 'border-red-500'}`} type="text" name="firstName" value={backgroundData.firstName} onChange={handlechange} />
                    {backgroundErrors.firstName && <p className="text-red-500 text-xs italic">{backgroundErrors.firstName}</p>}
                </div>
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4" >
                    <label class="block text-gray-700 text-sm font-bold mb-2">LAST NAME</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${backgroundErrors.lastName && 'border-red-500'}`} type="text" name="lastName" value={backgroundData.lastName} onChange={handlechange} />
                    {backgroundErrors.lastName && <p className="text-red-500 text-xs italic">{backgroundErrors.lastName}</p>}
                </div>
                <div class="w-full md:w-1/2">
                    <label class="block text-gray-700 text-sm font-bold mb-2">SOCIAL SECURITU NO</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${backgroundErrors.securityNo && 'border-red-500'}`} type="text" name="securityNo" value={backgroundData.securityNo} onChange={handlechange} />
                    {backgroundErrors.securityNo && <p className="text-red-500 text-xs italic">{backgroundErrors.securityNo}</p>}
                </div>
            </div>

            <div class="flex flex-col md:flex-row mb-4">
                <div class="w-full md:w-1/2 mb-4 md:mb-0 md:mr-4">
                    <label class="block text-gray-700 text-sm font-bold mb-2">M.I</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${backgroundErrors.mi && 'border-red-500'}`} type="text" name="mi" value={backgroundData.mi} onChange={handlechange} />
                    {backgroundErrors.mi && <p className="text-red-500 text-xs italic">{backgroundErrors.mi}</p>}
                </div>
                <div class="w-full md:w-1/2">
                    <label class="block text-gray-700 text-sm font-bold mb-2">OTHERS USED NAMES</label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${backgroundErrors.usedName && 'border-red-500'}`} type="text" name="usedName" value={backgroundData.usedName} onChange={handlechange} />
                    {backgroundErrors.usedName && <p className="text-red-500 text-xs italic">{backgroundErrors.usedName}</p>}
                </div>
            </div>

            <div class="mb-4">
                <label class="block text-gray-700 text-sm font-bold mb-2 text-center uppercase">Please list the address of place you have lived ever the previous five year</label>
            </div>

            <table className="min-w-500 min-h-400 bg-white border border-gray-200 mx-auto">

                <thead>
                    <tr className="bg-gray-100">
                        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Street</th>
                        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Address</th>
                        <th className="px-6 py-3 text-center uppercase text-gray-700 text-sm font-bold">Date From to</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {addressData.map((row, index) => (
                        <tr key={index}>
                            {AddressColumns.map((column) => (
                                <td key={column.name} className="px-4 py-3">
                                    <input
                                        type="text"
                                        name={column.name}
                                        value={row[column.name]}
                                        onChange={(e) => handlechange2(index, e)}
                                        className={`border  text-center rounded-md p-1 w-full ${addressErrors[index] && addressErrors[index][column.name]
                                                ? "border-red-500"
                                                : ""
                                            }`}
                                    />
                                    {addressErrors[index] && addressErrors[index][column.name] && (
                                        <p className="text-red-500 text-xs italic">
                                            {addressErrors[index][column.name]}
                                        </p>
                                    )}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <div class="flex items-center justify-between mt-4">
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={preStep}>
                    Back
                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button" onClick={handleSubmit}>
                    Next
                </button>
            </div>



        </div>

    )
}