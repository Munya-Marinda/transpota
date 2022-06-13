import { ChakraProvider } from "@chakra-ui/react";
import MainApp from "../components/MainApp.tsx";

export default function Home() {
  return (
    <ChakraProvider>
      <MainApp />
    </ChakraProvider>
  );
}
