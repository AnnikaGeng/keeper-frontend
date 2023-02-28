import React from "react";

import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
//import notes from "../notes";
import CreateArea from "./CreateArea";
import NodeList from "./noteList";

export const URL = process.env.REACT_APP_SERVER_URL;

function App() {

    return (
        <div>
            <Header />
            <Routes>
                <Route exact path="/" element={<NodeList />}></Route>
                <Route path="/CreateArea" element={<CreateArea />}></Route>
            </Routes>
            <Footer />
        </div>
    );
}

export default App;