import { FC, useRef } from "react";
import { Blurhash } from "react-blurhash";
import STYLE from "./LazyLoad.module.scss";

interface LazyImageProps {
    src: string;
    hash: string | null;
    alt: string | null;
}

const LazyImage: FC<LazyImageProps> = ({ src, hash = "", alt = "" }) => {
    const image = useRef<HTMLImageElement>(null);

    return (
        <>
            <div className={STYLE["image"]}>
                {hash !== null && <Blurhash
                    hash={hash}
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />}
                <img src={src} alt="" ref={image} />
            </div>
        </>
    )
}

export default LazyImage