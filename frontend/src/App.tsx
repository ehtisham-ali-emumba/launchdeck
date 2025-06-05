import "@ant-design/v5-patch-for-react-19";
import { ConfigProvider } from "antd";
import { BrowserRouter as Router, useRoutes } from "react-router-dom";

import { QueryProvider } from "./providers/ReactQueryProvider";
import routes from "./routes";
import { theme } from "./styles/theme";

const AppRoutes = () => {
  return useRoutes(routes);
};

function MainApp() {
  return (
    <ConfigProvider theme={theme}>
      <QueryProvider>
        <Router>
          <AppRoutes />
        </Router>
      </QueryProvider>
    </ConfigProvider>
  );
}

export default MainApp;
