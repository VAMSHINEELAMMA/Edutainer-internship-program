import { useState } from "react";

function Promote() {
    const [employees, setEmployees] = useState([
        'John Doe',
        'Vamshi',
        'Anu',
        'Pragathi',
        'Sonu',
        'Neelamma',
        'Janaki',
        'Harish'
    ]);

    return (
        <>
            <h1>Employee Promotion Module</h1>
            <table>
                <thead>
                    <tr>
                        <th >Serial Number</th>
                        <th>Employee Name</th>
                        <th>Promotion</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((emp, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{emp}</td>
                            <td><button>Promote</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default Promote;
