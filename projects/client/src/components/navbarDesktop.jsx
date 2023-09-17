import {
  Box,
  Link,
  Text,
  Flex,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Avatar,
} from "@chakra-ui/react";

import { LuLayoutDashboard } from "react-icons/lu";
import { HiHomeModern } from "react-icons/hi2";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { BiLogOutCircle } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { MdOutlineBedroomChild } from "react-icons/md";
import { useSelector } from "react-redux";

export default function NavbarDesktop() {
  const userSelector = useSelector((state) => state.auth);

  return (
    <>
      <Box
        display={{ base: "none", lg: "flex" }}
        alignItems={"center"}
        justifyContent={"space-between"}
        px={"0.5em"}
        w={"100%"}
        p={"0.5em"}
        bgColor={"#edf2f9"}
        pos={"fixed"}
        zIndex={3}
      >
        {/* navbar */}
        <Box
          display={"block"}
          textAlign={"center"}
          textTransform={"uppercase"}
          fontFamily={`'Gilda Display', sans-serif`}
        >
          <Text fontSize={"20px"} letterSpacing={"1px"} color={"#ab854f"}>
            The Cappa
          </Text>
          <Text fontSize={"10px"} letterSpacing={"3px"} color={"black"}>
            Luxury Hotel
          </Text>
        </Box>

        <Flex gap={"1.5em"}>
          {/* navigation */}
          <Flex
            textTransform={"uppercase"}
            fontFamily={`'Barlow Condensed', sans-serif`}
            letterSpacing={"2px"}
            fontSize={"15px"}
            gap={"3em"}
            color={"#5e6e82"}
          >
            <Flex align={"center"} gap={"1em"} _hover={{ color: "#ab854f" }}>
              <Icon as={LuLayoutDashboard} />
              <Link _hover={{ color: "#ab854f" }} href="/dashboardtenant">
                Dashboard
              </Link>
            </Flex>

            <Flex align={"center"} gap={"1em"} _hover={{ color: "#ab854f" }}>
              <Icon as={HiHomeModern} />
              <Link _hover={{ color: "#ab854f" }} href="/propertiestenant">
                Property
              </Link>
            </Flex>

            <Flex align={"center"} gap={"1em"} _hover={{ color: "#ab854f" }}>
              <Icon as={MdOutlineBedroomChild} />
              <Link _hover={{ color: "#ab854f" }} href="/roompropertiestenant">
                Room
              </Link>
            </Flex>

            <Flex
              align={"center"}
              gap={"1em"}
              _hover={{ color: "#ab854f" }}
              href="/transaction"
            >
              <Icon as={AiOutlineDollarCircle} />
              <Link _hover={{ color: "#ab854f" }}>Transaction</Link>
            </Flex>

            <Flex
              align={"center"}
              gap={"1em"}
              _hover={{ color: "#ab854f" }}
              href="/report"
            >
              <Icon as={TbReportAnalytics} />
              <Link _hover={{ color: "#ab854f" }}>Report</Link>
            </Flex>
          </Flex>

          {/* avatar profile */}
          <Popover>
            <PopoverTrigger>
              <Avatar size={"sm"}></Avatar>
            </PopoverTrigger>
            <PopoverContent
              w={"100%"}
              textAlign={"center"}
              mt={"1em"}
              border={"1px solid #dbdbdb"}
            >
              <PopoverArrow />
              <PopoverHeader>{userSelector?.first_name}</PopoverHeader>
              <PopoverBody display={"flex"} alignItems={"center"} gap={"0.8em"}>
                <Icon as={CgProfile} /> Profile
              </PopoverBody>
              <PopoverFooter
                display={"flex"}
                alignItems={"center"}
                gap={"0.8em"}
              >
                <Icon as={BiLogOutCircle} /> LogOut
              </PopoverFooter>
            </PopoverContent>
          </Popover>
        </Flex>
      </Box>
    </>
  );
}
