import { Fragment } from 'react';
import { publicRoutes } from '~/routes';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DefaultLayout } from '~/components/Layout';
function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    {publicRoutes.map((element, index) => {
                        const Page = element.component;
                        let Layout = DefaultLayout;
                        if (element.layout) {
                            Layout = element.layout;
                        } else if (element.layout === null) {
                            Layout = Fragment;
                        }
                        return (
                            <Route
                                path={element.path}
                                key={index}
                                element={
                                    <Layout>
                                        <Page />
                                    </Layout>
                                }
                            ></Route>
                        );
                    })}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
