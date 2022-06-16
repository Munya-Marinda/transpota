import {
  Stack,
  HStack,
  Text,
  Image,
  Circle,
  Box,
  Link,
  Divider,
  Center,
} from "@chakra-ui/react";

const Footer = (props) => {
  return (
    <>
      <Stack
        py={"40px"}
        color={"white"}
        bg={"#800000"}
        px={{ base: "15px", md: "20px" }}
        spacing={{ base: 10, md: 2 }}
      >
        <Stack
          direction={{ base: "column", md: "row" }}
          justify={"space-evenly"}
          spacing={{ base: 10, md: 2 }}
        >
          <Stack>
            <Box w={"150px"}>
              <Image src="/assets/svg/company_logo.svg" w={"100%"} />
            </Box>
            <Divider w={"50%"} />
            <Text>Whatsapp/Call: {props.whatsappNumber}</Text>
            <Text>Email: {props.emailAddress}</Text>
          </Stack>

          <Stack>
            <Text>Contact and Social Media</Text>
            <Divider w={"50%"} />
            <HStack>
              <Link href={props.whatsappLink} isExternal>
                <Circle p={1} w={"45px"} h={"45px"}>
                  <Image
                    src="/assets/svg/social_media_icon_whatsapp.svg"
                    w={"100%"}
                  />
                </Circle>
              </Link>
              <Link href={props.emailLink} isExternal>
                <Circle p={1} w={"45px"} h={"45px"}>
                  <Image
                    src="/assets/svg/social_media_icon_email.svg"
                    w={"100%"}
                  />
                </Circle>
              </Link>
              <Circle p={1} w={"45px"} h={"45px"}>
                <Image
                  src="/assets/svg/social_media_icon_facebook.svg"
                  w={"100%"}
                />
              </Circle>
              <Circle p={1} w={"45px"} h={"45px"}>
                <Image
                  src="/assets/svg/social_media_icon_instagram.svg"
                  w={"100%"}
                />
              </Circle>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
      <Center bg={"black"} py={"15px"} color={"gray"}>
        <Text fontSize={"small"}>
          &copy; 2022 MUNYA Design. All Rights Reserved.
        </Text>
      </Center>
    </>
  );
};

export default Footer;
