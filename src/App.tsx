/* eslint-disable no-nested-ternary */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Input, Card, Loader, Error } from './components';
import { API } from './utils/constants';
import { Notif } from './utils/interfaces';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
`;

function App() {
    const [searchText, setSearchText] = useState('');
    const [isLoading, setLoading] = useState(true);
    const [results, setResults] = useState<null | Notif[]>([]);

    const effect = async () => {
        try {
            setLoading(true);
            // sending the search text as upper case to retrieve proper response
            const res = await fetch(
                `${API}/search?q=${searchText?.toUpperCase()}`
            );
            const data = await res.json();
            setResults(data && data.length ? data : []);
            // we just wait for data, even if it fails or is undefined
            // we have to stop loading
            setLoading(false);
        } catch (e) {
            setLoading(false);
            setResults([]);
        }
    };

    useEffect(() => {
        // adding a debounce to wait every 1.5 seconds
        // calling an api every time something is typed is bad performance
        const timer = setTimeout(() => effect(), 1500);
        return () => clearTimeout(timer);
    }, [searchText]);

    return (
        <Container>
            <Input
                value={searchText}
                onChange={setSearchText}
                placeholder="Type to filter events"
            />
            {isLoading ? (
                <Loader />
            ) : results?.length ? (
                results?.map((result: Notif) => (
                    <Card
                        type={result.type}
                        asset={result.data.unit}
                        amount={result.data.amount}
                        name={result.data.name}
                        receiver={result.data.to}
                        sender={result.data.from}
                        key={result.id}
                    />
                ))
            ) : (
                <Error
                    message="No data found"
                    onClick={() => setSearchText('')}
                />
            )}
        </Container>
    );
}

export default App;
