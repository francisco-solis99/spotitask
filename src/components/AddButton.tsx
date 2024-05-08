import { Button } from "@chakra-ui/react";
import { CreateIcon } from "./icons/CreateIcon";

export default function AddButton() {
  const handleClickAddTask = () => {};

  return (
    <>
      <Button
        leftIcon={<CreateIcon />}
        colorScheme="green"
        variant="solid"
        title="Create a new task"
        onClick={handleClickAddTask}
      >
        Create
      </Button>
    </>
  );
}
