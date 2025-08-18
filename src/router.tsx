import { createBrowserRouter } from "react-router-dom";
import Login from "./paginas/login";
import Home from "./paginas/home";
import Genres from "./paginas/generos";
import BookDetais from "./paginas/sobre";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Login />
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/genre/:genero",  // Agora aceita o nome do gênero na URL
        element: <Genres />
    },
    {
        path: "/details/:id",  // Agora aceita o ID do livro na URL
        element: <BookDetais />
    }
]);

export default router;