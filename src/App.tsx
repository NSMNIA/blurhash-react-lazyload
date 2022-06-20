import LazyImage from "./components/LazyImage"

function App() {
    return (
        <>
            <div className="cards">
                <div className="card">
                    <div className="card--image">
                        <LazyImage src="/src/assets/images/test.jpg" hash="LEE2Xu%100%1~WWB9Zxa.8R*D%of" alt="Test" />
                    </div>
                    <div className="card--title">
                        <h2>Test</h2>
                    </div>
                </div>

                <div className="card">
                    <div className="card--image">
                        <LazyImage src="/src/assets/images/test2.jpg" hash="LTEf$qXTWBaelVWAjYf6IAV?kCkC" alt="Test 2" />
                    </div>
                    <div className="card--title">
                        <h2>Test 2</h2>
                    </div>
                </div>

                <div className="card">
                    <div className="card--image">
                        <LazyImage src="/src/assets/images/test3.jpg" hash="UKAA,R-pRQt8~n%2oLof$wt6xtaet2f6jsay" alt="Test 3" />
                    </div>
                    <div className="card--title">
                        <h2>Test 3</h2>
                    </div>
                </div>

                <div className="card">
                    <div className="card--image">
                        <LazyImage src="/src/assets/images/test3.jpg" hash="" alt="Test 4" />
                    </div>
                    <div className="card--title">
                        <h2>Test 4</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
