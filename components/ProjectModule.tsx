import { Box, Text, theme } from "@chakra-ui/react";

const ProjectModule = () => {
  return (
    <Box p={4} border="solid" borderRadius="20px">
      <Box fontWeight="semibold" fontSize="xl">
        <Text>Project Title</Text>
      </Box>
      <Box fontSize="md">
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa dolores
          fuga eveniet adipisci temporibus inventore praesentium animi
          consequatur obcaecati suscipit asperiores, quas quae vel laborum
          dolorum quo quam exercitationem veniam.
        </Text>
      </Box>
    </Box>
  );
};

export default ProjectModule;
