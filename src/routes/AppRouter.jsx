// AppRouter.jsx

import { BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";

function AppRouter() {
    return (
        <BrowserRouter>
            <MainLayout />
        </BrowserRouter>
    );
}

export default AppRouter;