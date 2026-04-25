import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(res => {
                setData(res)
                // console.log(res);

            })
            .catch(() => setError(true))
            .finally(() => setLoading(false))
    }, [])


    return [data, loading, error]
}

export default useFetch