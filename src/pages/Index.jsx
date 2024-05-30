import { Container, Text, VStack, Heading, Button, IconButton, Image } from "@chakra-ui/react";
import { FaRocket, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">
          Welcome to Heysan
        </Heading>
        <Image src="https://images.unsplash.com/photo-1557804506-669a67965ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxzdGFydHVwJTIwdGVhbXxlbnwwfHx8fDE3MTcwNTAyMzh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Heysan Team" borderRadius="md" />
        <Text fontSize="lg" textAlign="center">
          Heysan is a startup focused on revolutionizing the way people communicate. Join us on our journey to make the world a more connected place.
        </Text>
        <Button colorScheme="teal" size="lg">
          Get Started
        </Button>
        <VStack spacing={4}>
          <Text fontSize="md">Follow us on:</Text>
          <VStack direction="row" spacing={4}>
            <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" />
            <IconButton aria-label="LinkedIn" icon={<FaLinkedin />} size="lg" />
            <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" />
          </VStack>
        </VStack>
      </VStack>
    </Container>
  );
};

export default Index;
