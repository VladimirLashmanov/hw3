import {Routes, Route, Navigate} from "react-router-dom";

import MainLayout from "./layoutes/MainLayout/MainLayout";
import HomePage from "./pages/HomePage/HomePage";
import UsersPage from "./pages/UsersPage/UsersPage";
import PostsPage from "./pages/PostsPage/PostsPage";
import AboutPage from "./pages/AboutPage/AboutPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import SinglPostPage from "./pages/SinglPostPage/SinglPostPage";
import SinglUserPage from "./pages/SinglUserPage/SinglUserPage";
import './App.css'


const App = () => {
    return (
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'home'}/>}/>
                <Route path={'home'} element={<HomePage/>}/>
                <Route path={'users'} element={<UsersPage/>}>

                    <Route path={':userId'} element={<SinglUserPage/>}>

                        <Route path={'posts'} element={<PostsPage/>}/>


                        </Route>

                    </Route>

                    <Route path={'posts'} element={<PostsPage/>}>

                        <Route path={':id'} element={<SinglPostPage/>}/>

                    </Route>

                    <Route path={'about'} element={<AboutPage/>}/>
                    <Route path={'*'} element={<NotFoundPage/>}/>
                    </Route>
        </Routes>
)
};

export default App;