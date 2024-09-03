import React, { useEffect, useState } from 'react';
import dataMock from '../utils/dataMockUserInfos.js';

export default function UserInfos({ id }) { 
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const result = await dataMock(id);
                setData(result);
            } catch (err) {
                setError('Failed to fetch user data.');
                console.error('Error fetching data:', err);
            }
        };
        getData();
    }, [id]);

    if (error) {
        return <p>{error}</p>;
    }

    if (!data) {
        return <p>Loading...</p>;
    }

    return (
        <div className="user-infos">
            <h1>Bonjour <span className="first-name">{data.data.userInfos.firstName}</span></h1> {/* Adjusted the data access */}
            <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p>
        </div>
    );
}