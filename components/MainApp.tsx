import {
  Container,
  HStack,
  Stack,
  Text,
  Image,
  Avatar,
  Center,
  Box,
  Divider,
} from "@chakra-ui/react";
import Navbar from "./Navbar/Navbar.jsx";
import Footer from "./Footer/Footer.jsx";
import ContactModal from "./ContactModal/ContactModal.jsx";
import Gallery from "./Gallery/Gallery";
import { animated, useSpring } from "react-spring";
import { useRef, useState } from "react";

const MainApp = () => {
  //TranspotaData
  const TranspotaData = {
    routes: "Cape Town to Zimbabwe  -  Zimbabwe to Cape Town",
    whatsappLink: "https://wa.me/+2760017870",
    whatsappNumber: "+2760017870",
    emailLink: "mailto:munyadesign@yahoo.com",
    emailAddress: "munyadesign@yahoo.com",
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
      delay: 7000,
      onRest: () => setconstProps(!colorChange),
    });
    const constProps2 = useSpring({
      to: { color: "maroon" },
      from: { color: "#B28900" },
      reverse: colorChange2,
      delay: 13000,
      onRest: () => setconstProps2(!colorChange2),
    });
    const constProps3 = useSpring({
      to: { color: "green" },
      from: { color: "#B28900" },
      reverse: colorChange3,
      delay: 15000,
      onRest: () => setconstProps3(!colorChange3),
    });

    return (
      <Stack
        spacing={1}
        direction={{ base: "column", md: "row" }}
        justify={"space-evenly"}
      >
        <Center my={{ base: "10vw", md: "2vw" }}>
          <Image
            src={"/assets/svg/quote-currency.svg"}
            w={{ base: "80vw", md: "70vh" }}
          />
        </Center>
        <Stack
          spacing={"-2"}
          fontWeight={"black"}
          justify={"center"}
          alignItems={{ base: "center", md: "start" }}
        >
          <HStack>
            <Stack>
              <AnimatedText
                spacing={"-2"}
                fontSize={{ base: "12vw", md: "7vw" }}
                fontWeight={"black"}
                style={constProps}
              >
                Easy.
              </AnimatedText>
            </Stack>
            <Stack>
              <AnimatedText
                spacing={"-2"}
                fontSize={{ base: "12vw", md: "7vw" }}
                fontWeight={"black"}
                style={constProps2}
              >
                Safe.
              </AnimatedText>
            </Stack>
          </HStack>
          <AnimatedText
            spacing={"-2"}
            fontSize={{ base: "13vw", md: "8vw" }}
            fontWeight={"black"}
            style={constProps3}
          >
            Reliable.
          </AnimatedText>
        </Stack>
      </Stack>
    );
  };

  const ChatToUs = (props) => {
    const [usAnimation, setusAnimation] = useState(false);

    const usAnimationProps = useSpring({
      to: { color: "#800000" },
      from: { color: "green" },
      reverse: usAnimation,
      delay: 3000,
      onRest: () => setusAnimation(!usAnimation),
    });

    return (
      <Stack
        justify={"center"}
        bg={{ base: "transparent", md: "#B28900" }}
        direction={{ base: "column", md: "row" }}
        py={{ md: "13vh" }}
      >
        {/* moblie quote-chat */}
        <Center>
          <Image
            src={"/assets/svg/quote-chat.svg"}
            w={"80vw"}
            display={{ base: "block", md: "none" }}
          />
        </Center>

        {/* wideview quote-chatv2 left */}
        <Center>
          <Image
            mr={"5vw"}
            src={"/assets/svg/quote-chatv2.svg"}
            display={{ base: "none", md: "block" }}
            w={{ base: "80vw", md: "50vh" }}
          />
        </Center>

        {/* hybrid Button */}
        <Center
          borderBottom={{ base: "2px", md: "0px" }}
          borderBottomColor={{ base: "#800000", md: "0px" }}
          pb={{ base: "30px" }}
          pt={{ base: "10px" }}
          mb={{ base: "20px" }}
          p={{ md: "3vw" }}
        >
          <Stack
            color={"black"}
            fontWeight={"bold"}
            fontSize={{ base: "13vw", md: "15vh" }}
          >
            <HStack justify={{ base: "center", md: "left" }}>
              <Text>Chat to</Text>
              <AnimatedText style={usAnimationProps}>us.</AnimatedText>
            </HStack>
            <Stack spacing={{ base: 6, md: 10 }}>
              <Text
                fontSize={{ base: "7vw", md: "2xl" }}
                textAlign={{ base: "center", md: "left" }}
              >
                Our great team is waiting to answer all of your questions.
              </Text>
              <ContactModal
                whatsappLink={TranspotaData.whatsappLink}
                emailLink={TranspotaData.emailLink}
              />
            </Stack>
          </Stack>
        </Center>
      </Stack>
    );
  };
  //
  //

  const Testimonies = () => {
    return (
      <Box
        borderColor={"#800000"}
        p={{ base: "4px", md: "10px" }}
        bg={"white"}
        borderWidth={"1px"}
        boxShadow={"2xl"}
        borderRadius={"lg"}
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-evenly"}
        w={{ base: "100%", md: "70%" }}
      >
        {TestimonyData.map((user, index) => (
          <>
            {index !== 0 ? (
              <Divider w={"75%"} display={{ base: "block", md: "none" }} />
            ) : null}
            <HStack
              my={"15px"}
              key={index}
              w={{ base: "95%", md: "25vw" }}
              px={"20px"}
              bg={"white"}
            >
              <Avatar size={"sm"} src={user.avatar_src} />
              <Stack spacing={"-1"}>
                <Text fontWeight={"bold"}>{user.name}</Text>
                <Text fontSize={"sm"}>{user.quote}</Text>
              </Stack>
            </HStack>
          </>
        ))}
      </Box>
    );
  };

  // E v e r y t h i n g
  const MainAppContent = () => {
    return (
      <Stack spacing={10}>
        {/* Color change */}
        <TextColorChange />

        {/* Book Now CTA */}
        <ChatToUs />

        {/* Service Information */}
        <Gallery />

        {/* Service Information */}
        <Stack alignItems={"center"} p={"4px"}>
          <Testimonies />
        </Stack>
      </Stack>
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
    <Stack fontFamily={'"Raleway", sans-serif'} spacing={0}>
      <Navbar navData={TranspotaData} />
      <Center>
        <Stack>
          {/* Mobile View */}
          <Container display={{ base: "block", md: "none" }} py={"50px"}>
            <MainAppContent />
          </Container>

          {/* Wide View */}
          <Stack display={{ base: "none", md: "block" }} py={"50px"}>
            <MainAppContent />
          </Stack>
        </Stack>
      </Center>

      {/* Footer */}
      <Footer
        whatsappLink={TranspotaData.whatsappLink}
        whatsappNumber={TranspotaData.whatsappNumber}
        emailLink={TranspotaData.emailLink}
        emailAddress={TranspotaData.emailAddress}
      />
    </Stack>
  );
};

export default MainApp;
