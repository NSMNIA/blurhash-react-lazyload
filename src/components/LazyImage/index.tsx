import { FC, useState } from "react";
import { Blurhash } from "react-blurhash";
import STYLE from "./LazyLoad.module.scss";

interface LazyImageProps {
    src: string;
    hash: string | null;
    alt: string | null;
}

const LazyImage: FC<LazyImageProps> = ({ src, hash = "", alt = "" }) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    return (
        <>
            <div className={STYLE["image"]}>
                {hash !== "" ? <Blurhash
                    className={loaded ? `${STYLE['image--canvas']} ${STYLE['hide']}` : STYLE['image--canvas']}
                    hash={hash || ""}
                    height={'100%'}
                    width={'100%'}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                /> : <div className={loaded ? `${STYLE['image--canvas']} ${STYLE['hide']}` : STYLE['image--canvas']}></div>}
                <img src={src} alt={alt || ""} className={loaded ? STYLE['show'] : ''} onLoad={() => setLoaded(true)} />
            </div>
        </>
    )
}

export default LazyImage