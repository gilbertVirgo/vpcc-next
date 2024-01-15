import React from "react"

export default ({limit, intervalInSeconds}: {limit: number, intervalInSeconds: number}) => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => setIndex((index + 1) % limit), intervalInSeconds * 1000);
    }, [index]);

    return index;
}