import { useNavigate } from "react-router-dom";

import { Result } from "antd";

import { Button } from "~/components";

import { FallbackContainer } from "./elements";
import type { FallbackProps } from "./type";

const FallbackPage: React.FC<FallbackProps> = () => {
  const navigate = useNavigate();
  return (
    <FallbackContainer>
      <Result
        status="404"
        title="404 Not Found"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button variant="outlined" onClick={() => navigate("/")}>
            Back Home
          </Button>
        }
      />
    </FallbackContainer>
  );
};

export default FallbackPage;
