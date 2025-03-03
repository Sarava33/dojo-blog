import {useEffect, useState} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);

    const [isPending, setIsPending] = useState(true);

    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => {
                if(!res.ok){
                    throw Error('Could not fetch data');
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                setError(err.message);
                setIsPending(false);
            })
    }, [url]); //array dependency called upon first render

    return {data, isPending, error};
}

export default useFetch;
