import { Button, Flex } from "@adobe/react-spectrum";
import { useNavigate } from "react-router-dom";
import { flexCenterPage } from "../../constants/constants";

export const Welcome = () => {

  const navigate = useNavigate();
  return (
    <Flex {...flexCenterPage}>
      <h1>Welcome to BoringChat!</h1>
      <Flex>
        <Button
          marginX="size-75"
          variant="primary"
          onPress={() => navigate("/login")}
        >
          Login
        </Button>
        <Button
          marginX="size-75"
          variant="primary"
          onPress={() => navigate("/register")}
        >
          Register
        </Button>
      </Flex>
    </Flex>
  );
};
