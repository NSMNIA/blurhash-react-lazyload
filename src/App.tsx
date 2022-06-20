import { useEffect, useState } from "react";
import LazyImage from "./components/LazyImage";
import { data } from './data';

function App() {
    const [renderedData, setRenderedData] = useState(data);

    const cloneItems = () => {
        let clonedItems = [...renderedData].map((target: any) => target);
        setRenderedData([...renderedData, ...clonedItems]);
    }

    useEffect(() => {
        cloneItems();
    }, [])

    return (
        <>
            <div className="cards">
                {renderedData?.map((item, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="card--image">
                                <LazyImage src={item?.src} hash={item?.hash} alt={item?.alt} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default App
