import { Button, ComboBox, Flex, Item } from "@adobe/react-spectrum";
import { useNavigate } from "react-router-dom";
import { flexCenterPage } from "../../constants/constants";

export const Welcome = () => {
  const navigate = useNavigate();
  return (
    <Flex {...flexCenterPage}>
      <ComboBox label="Favorite Animal">
        <Item key="red panda">Red Panda</Item>
        <Item key="cat">Cat</Item>
        <Item key="dog">Dog</Item>
        <Item key="aardvark">Aardvark</Item>
        <Item key="kangaroo">Kangaroo</Item>
        <Item key="snake">Snake</Item>
      </ComboBox>
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
