import { FC, useEffect, useRef, useState } from "react";
import { Blurhash } from "react-blurhash";
import STYLE from "./LazyLoad.module.scss";

interface LazyImageProps {
    src: string;
    hash: string | null;
    alt: string | null;
}

const LazyImage: FC<LazyImageProps> = ({ src, hash = "", alt = "" }) => {
    const [loaded, setLoaded] = useState<boolean>(false);
    const imageContainer = useRef<HTMLImageElement>(null);

    const lazyLoad = () => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (!imageContainer.current?.querySelector('img')) {
            if (imageContainer.current && imageContainer.current.offsetTop < (window.innerHeight + scrollTop) && imageContainer.current.offsetTop + imageContainer.current.offsetHeight > scrollTop && !loaded) {
                let image = document.createElement("img");
                image.src = src;
                image.onload = () => {
                    setLoaded(true);
                    image.classList.add(STYLE.show);
                }
                imageContainer.current.appendChild(image);
            }
        }
    }

    useEffect(() => {
        lazyLoad();
        document.addEventListener("scroll", lazyLoad);
        window.addEventListener("resize", lazyLoad);
        window.addEventListener("orientationChange", lazyLoad);
        return () => {
            document.removeEventListener("scroll", lazyLoad);
            window.removeEventListener("resize", lazyLoad);
            window.removeEventListener("orientationChange", lazyLoad);
        }
    }, [])

    return (
        <>
            <div className={STYLE["image"]} ref={imageContainer}>
                {hash !== "" ? <Blurhash className={loaded ? `${STYLE['image--canvas']} ${STYLE['hide']}` : STYLE['image--canvas']} hash={hash || ""} height={'100%'} width={'100%'} resolutionX={32} resolutionY={32} punch={1} /> : <div className={loaded ? `${STYLE['image--canvas']} ${STYLE['hide']}` : STYLE['image--canvas']}></div>}
            </div>
        </>
    )
}

export default LazyImage