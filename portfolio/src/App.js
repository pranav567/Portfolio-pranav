import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/AllRoutes";
import { inject } from "@vercel/analytics";

function App() {
  return (
    <BrowserRouter>
      <AllRoutes />
    </BrowserRouter>
  );
}

export default App;
inject();
