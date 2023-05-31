import React, {useState} from "react";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(null);

    const request = React.useCallback(async (url, options) => {
        let response;
        let json;

        try {
            setLoading(true);
            setError(null);
            response = await fetch(url, options);
            json = await response.json();
        } catch (erro) {
            json = null;
            setError(erro);
        } finally {
            setData(json);
            setLoading(false);
            return {json, response}
        }
    }, [])

    return {data, error, loading, request};
}

export default useFetch;