import { Link, HStack, Stack, Text, Image } from "@chakra-ui/react";

const Navbar = (props) => {
  //
  //
  //
  // Nav text

  return (
    <>
      <Stack bg={"red.900"} p={2} color={"white"}>
        <Text
          fontSize={"small"}
          fontWeight={"bold"}
          letterSpacing={"2px"}
          fontFamily={'"Raleway", sans-serif'}
        >
          <marquee>
            {props.navData.routes.map((element) => element + " | ")}
          </marquee>
        </Text>
      </Stack>
      <HStack
        bg={"#B28900"}
        justify={"space-between"}
        borderTop={"1px"}
        borderTopColor={"white"}
        color={"white"}
        spacing={0}
      >
        <Stack py={1} pl={"2"} bg={"#B28900"} w={"50%"} justify={"right"}>
          <Link href={props.navData.emailLink} isExternal>
            <Text
              fontSize={"small"}
              fontWeight={"bold"}
              fontFamily={'"Raleway", sans-serif'}
              letterSpacing={"1px"}
            >
              Email Now!
            </Text>
          </Link>
        </Stack>
        <HStack py={1} pr={"2"} bg={"whatsapp.700"} w={"50%"} justify={"right"}>
          <Link href={props.navData.whatsappLink} isExternal>
            <Text
              fontSize={"small"}
              fontWeight={"bold"}
              fontFamily={'"Raleway", sans-serif'}
              letterSpacing={"1px"}
            >
              WhatsApp Now!
            </Text>
          </Link>
          <Image src="/assets/svg/whatsapp_nobg.svg" w={"15px"} />
        </HStack>
      </HStack>
    </>
  );
};

export default Navbar;
