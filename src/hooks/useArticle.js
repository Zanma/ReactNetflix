import { useState, useEffect } from "react";

function useArticle() {
    const [article, setArticle] = useState("");

    function getArticle(counter) {
        return fetch("https://dummyjson.com/posts/" + counter).then((res) =>
            res.json()
        );
    }

    useEffect(() => {
        getArticle(1).then((data) => setArticle(data));
    }, []);

    return { article }
}

export default useArticle