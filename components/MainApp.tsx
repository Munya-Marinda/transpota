import {
  Container,
  HStack,
  Button,
  Link,
  Stack,
  Text,
  Image,
  Avatar,
  Center,
  Box,
} from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar";
import { animated, useSpring } from "react-spring";
import { useEffect, useState } from "react";
import { useRef } from "react";

const MainApp = () => {
  //TranspotaData
  const TranspotaData = {
    routes: "Cape Town to Zimbabwe  -  Zimbabwe to Cape Town",
    whatsapp: "https://wa.me/+2760017870",
    email: "mailto:munyadesign@yahoo.com",
  };
  // Testimonie data
  const TestimonyData = [
    {
      avatar_src: "https>//bit.ly/dan-abramov",
      name: "Evelyn Justice",
      quote: "I love this business. We arrived saftely in Zim.",
    },
    {
      avatar_src: "https>//bit.ly/dan-abramov",
      name: "Jacob Maurice",
      quote: "Great service!",
    },
    {
      avatar_src: "https>//bit.ly/dan-abramov",
      name: "Steven Yasive",
      quote:
        "I was happy when the luagage I sent home was recieved. Very reliable",
    },
    {
      avatar_src: "https>//bit.ly/dan-abramov",
      name: "Lawrence O.",
      quote:
        "It was my first time going to Zim in years, the ride was very comfortable and we arrived saftely. Thanks guys.",
    },
  ];

  //
  //
  //
  //
  //
  // Color change Test Starts

  const AnimatedText = animated(Text);
  const TextColorChange = () => {
    const [colorChange, setconstProps] = useState(false);
    const [colorChange2, setconstProps2] = useState(false);
    const [colorChange3, setconstProps3] = useState(false);

    const constProps = useSpring({
      to: { color: "#B28900" },
      from: { color: "green" },
      reverse: colorChange,
      delay: 1000,
      onRest: () => setconstProps(!colorChange),
    });
    const constProps2 = useSpring({
      to: { color: "maroon" },
      from: { color: "#B28900" },
      reverse: colorChange2,
      delay: 2000,
      onRest: () => setconstProps2(!colorChange2),
    });
    const constProps3 = useSpring({
      to: { color: "green" },
      from: { color: "#B28900" },
      reverse: colorChange3,
      delay: 3000,
      onRest: () => setconstProps3(!colorChange3),
    });

    return (
      <Stack spacing={1}>
        <Center my={"10vw"}>
          <Image src={"/assets/svg/quote-currency.svg"} w={"80vw"} />
        </Center>
        <Stack spacing={"-2"} fontSize={"xxx-large"} fontWeight={"black"}>
          <HStack justify={"space-between"}>
            <Stack>
              <AnimatedText
                spacing={"-2"}
                fontSize={"17vw"}
                fontWeight={"black"}
                style={constProps}
              >
                Easy.
              </AnimatedText>
            </Stack>
            <Stack>
              <AnimatedText
                spacing={"-2"}
                fontSize={"17vw"}
                fontWeight={"black"}
                style={constProps2}
              >
                Safe.
              </AnimatedText>
            </Stack>
          </HStack>
          <AnimatedText
            spacing={"-2"}
            fontSize={"20vw"}
            fontWeight={"black"}
            style={constProps3}
          >
            Reliable.
          </AnimatedText>
        </Stack>
      </Stack>
    );
  };

  const BookNowCTA = (props) => {
    return (
      <Stack justify={"space-evenly"}>
        <Center>
          <Image src={"/assets/svg/quote-chat.svg"} w={"80vw"} />
        </Center>
        <Center
          borderBottom={"1px"}
          borderBottomColor={"black"}
          pb={"35px"}
          mb={"20px"}
        >
          <Button
            w={"fit-content"}
            size={"lg"}
            variant={"solid"}
            color={"white"}
            bg={"#800000"}
            borderWidth={"4px"}
            borderStyle={"double"}
            borderColor={"white"}
            _hover={{ background: "black" }}
            onClick={() => {
              props.return_func_gotoContactUs();
            }}
          >
            BOOK NOW
          </Button>
        </Center>
      </Stack>
    );
  };
  const contactCTA = useRef(null);
  //
  //

  const Gallary = () => {
    return (
      <Stack>
        <HStack justify={"space-between"}>
          <Stack>
            <Text fontSize={"15vw"} fontWeight={"black"} textAlign={"center"}>
              GALARY
            </Text>
            <HStack>
              <Stack>
                <Image w={"50vw"} src={"/assets/photos/busfront-1x1.jpg"} />
              </Stack>
              <Stack>
                <Image w={"50vw"} src={"/assets/photos/busfront-2-1x1.jpg"} />
              </Stack>
              <Stack>
                <Image w={"50vw"} src={"/assets/photos/busANDtrailer-1.jpg"} />
              </Stack>
              <Center pos={"relative"} justify={"center"} alignItems={"center"}>
                <Box
                  w={"17vw"}
                  h={"17vw"}
                  bg={"black"}
                  opacity={0.9}
                  pos={"absolute"}
                  justify={"center"}
                  alignItems={"center"}
                >
                  <Center h={"inherit"}>
                    <Text fontSize={"xx-large"} color={"white"}>
                      +
                    </Text>
                  </Center>
                </Box>
                <Image w={"50vw"} src={"/assets/photos/busside-1x1.jpg"} />
              </Center>
            </HStack>
          </Stack>
        </HStack>
        <Stack
          alignItems={"center"}
          pb={"30px"}
          fontWeight={"Bold"}
          fontSize={"25px"}
        >
          <Image src={"/assets/svg/bus-on-road.svg"} w={"95vw"} />
        </Stack>
      </Stack>
    );
  };

  const Testimonies = () => {
    return (
      <Stack alignItems={"center"} spacing={"3"}>
        {TestimonyData.map((user, index) => (
          <HStack
            key={index}
            w={"95%"}
            p={"4px"}
            bg={"white"}
            borderWidth={"1px"}
            boxShadow={"2xl"}
            borderRadius={"lg"}
          >
            <Avatar size={"sm"} src={user.avatar_src} />
            <Stack spacing={"-1"}>
              <Text fontWeight={"bold"}>{user.name}</Text>
              <Text fontSize={"sm"}>{user.quote}</Text>
            </Stack>
          </HStack>
        ))}
      </Stack>
    );
  };

  const WhatsAppLink = () => {
    return (
      <HStack
        p={"15px"}
        bg={"whatsapp.700"}
        borderWidth={"1px"}
        boxShadow={"2xl"}
        borderRadius={"lg"}
        color={"white"}
      >
        <Image src="/assets/svg/whatsapp_nobg.svg" w={"40%"} />
        <Stack pl={"15px"}>
          <Link href={TranspotaData.whatsapp} isExternal>
            <Text fontSize={"large"}>Let's Chat On </Text>
            <Text fontSize={"x-large"} fontWeight={"bold"}>
              Whatsapp!
            </Text>
          </Link>
          <Link href={TranspotaData.email}>
            <Text fontSize={"medium"} fontWeight={"bold"}>
              Or <u>email us</u>
            </Text>
          </Link>
        </Stack>
      </HStack>
    );
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //

  return (
    <>
      <Navbar navData={TranspotaData} />

      <Container borderWidth={"1px"} borderColor={"gray"}>
        <Stack spacing={10} py={"20px"}>
          {/* Color change */}
          <TextColorChange />

          {/* Book Now CTA */}
          <BookNowCTA
            return_func_gotoContactUs={() => {
              contactCTA.current.scrollIntoView({ behavior: "smooth" });
            }}
          />

          {/* Service Information */}
          <Gallary />

          {/* Service Information */}
          <Testimonies />

          {/* Book Now CTA */}
          <Stack ref={contactCTA}>
            <WhatsAppLink />
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default MainApp;
