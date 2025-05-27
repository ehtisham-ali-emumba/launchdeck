import "@ant-design/v5-patch-for-react-19";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";
import routes from "./routes";
import { QueryProvider } from "./providers/ReactQueryProvider";

const AppRoutes = () => {
  return useRoutes(routes);
};

function MainApp() {
  return (
    <QueryProvider>
      <Router>
        <AppRoutes />
      </Router>
    </QueryProvider>
  );
}

export default MainApp;
