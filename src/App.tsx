import LazyImage from "./components/LazyImage"

function App() {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <div className="card--image">
                        <LazyImage src="/src/assets/images/test.jpg" hash="LEE2Xu%100%1~WWB9Zxa.8R*D%of" alt="Test" />
                    </div>
                </div>

                <div className="card">
                    <div className="card--image">
                        <LazyImage src="/src/assets/images/test2.jpg" hash="LTEf$qXTWBaelVWAjYf6IAV?kCkC" alt="Test 2" />
                    </div>
                </div>

                <div className="card">
                    <div className="card--image">
                        <LazyImage src="/src/assets/images/test3.jpg" hash="UKAA,R-pRQt8~n%2oLof$wt6xtaet2f6jsay" alt="Test 3" />
                    </div>
                </div>

                <div className="card">
                    <div className="card--image">
                        <LazyImage src="/src/assets/images/test4.jpg" hash="" alt="Test 4" />
                    </div>
                </div>

                <div className="card">
                    <div className="card--image">
                        <LazyImage src="/src/assets/images/test5.jpg" hash="L97dwJIoRlt6~oM{WXj@xbIot7Rk" alt="Test 5" />
                    </div>
                </div>

                <div className="card">
                    <div className="card--image">
                        <LazyImage src="/src/assets/images/test6.jpg" hash="L76[BgxvkCRj_NxuM{ofxut7V@xu" alt="Test 6" />
                    </div>
                </div>

            </div>
        </>
    )
}

export default App
