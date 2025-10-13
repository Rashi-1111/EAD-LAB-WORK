import React, { useEffect, useState } from "react";

const ApiCalls = () => {
    const URL = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(URL)
            .then((response) => response.json())
            .then((data) => {
                setUsers(data);
                console.log("Fetched users:", data);
            })
            .catch((error) => console.error("Error fetching users:", error));
    }, []);

    return (
        <div>
            <h2>User List</h2>
            <ul>
                {users.map((user) => (
                    <li key={user.id}>
                        <strong>{user.name}</strong><br />
                        Email: {user.email}<br />
                        Street: {user.address?.street}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ApiCalls;
