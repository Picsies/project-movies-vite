import { BrowserRouter } from "react-router-dom";
import routes from "./routes/routes"; 

export const App = () => {
  return (
    <BrowserRouter>
      {routes}
    </BrowserRouter>
  )
};
