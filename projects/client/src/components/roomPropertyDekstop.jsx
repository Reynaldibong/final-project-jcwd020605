import {
  Box,
  Drawer,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  useDisclosure,
  Link,
  Text,
  Flex,
  IconButton,
  Icon,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  Avatar,
  Grid,
  Image,
  Menu,
  MenuButton,
  Divider,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";

import { useState } from "react";
import { BsList, BsFillPersonFill } from "react-icons/bs";
import { LuLayoutDashboard } from "react-icons/lu";
import { HiHomeModern } from "react-icons/hi2";
import { AiOutlineDollarCircle } from "react-icons/ai";
import { TbReportAnalytics } from "react-icons/tb";
import { BiLogOutCircle, BiDotsHorizontalRounded } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { useSelector } from "react-redux";

import { BiPencil } from "react-icons/bi";
import "react-datepicker/dist/react-datepicker.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { SlTrash } from "react-icons/sl";
import { ImLocation } from "react-icons/im";
import { MdOutlineBedroomChild, MdApartment } from "react-icons/md";

import "@fontsource/barlow";
import FooterLandingPage from "./footerLandingPage";
import PaginationRoom from "./Pagination_room";
import EditRooms from "./editRoom";
import DeleteRooms from "./deleteRoom";

import { api } from "../api/api";
import bgContent from "../assets/bgcontent.jpg";
import { motion } from "framer-motion";

import { useEffect } from "react";
import "@fontsource/barlow";
import "@fontsource/gilda-display";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/effect-cards";

import "../styles/sliderLocation.css";
import "../styles/sliderCard.css";

import { FreeMode, Pagination } from "swiper/modules";
import { useFetchRoom } from "../hooks/useRoom";

export default function RoomPropertyDekstop() {
  const EditRoom = useDisclosure();
  const DeleteRoom = useDisclosure();

  const userSelector = useSelector((state) => state.auth);

  const [roomId, setRoomId] = useState();
  const [selectedRoom, setSelectedRoom] = useState();
  const { rooms, totalPage, handlePageClick, fetch } = useFetchRoom();

  useEffect(() => {
    fetch();
  }, []);

  return (
    <>
      <Box
        flexDir={"column"}
        bgColor={"#edf2f9"}
        h={"100vh"}
        display={{ base: "none", lg: "flex" }}
      >
        {/* navbar + sidebar + profile */}
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
                <Link _hover={{ color: "#ab854f" }}>Dashboard</Link>
              </Flex>

              <Flex align={"center"} gap={"1em"} _hover={{ color: "#ab854f" }}>
                <Icon as={HiHomeModern} />
                <Link _hover={{ color: "#ab854f" }} href="/propertiestenant">
                  Property
                </Link>
              </Flex>

              <Flex align={"center"} gap={"1em"} _hover={{ color: "#ab854f" }}>
                <Icon as={MdOutlineBedroomChild} />
                <Link
                  _hover={{ color: "#ab854f" }}
                  href="/roompropertiestenant"
                >
                  Room
                </Link>
              </Flex>

              <Flex align={"center"} gap={"1em"} _hover={{ color: "#ab854f" }}>
                <Icon as={AiOutlineDollarCircle} />
                <Link _hover={{ color: "#ab854f" }}>Transaction</Link>
              </Flex>

              <Flex align={"center"} gap={"1em"} _hover={{ color: "#ab854f" }}>
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
                <PopoverBody
                  display={"flex"}
                  alignItems={"center"}
                  gap={"0.8em"}
                >
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

        {/* bg */}
        <Box py={"5%"}>
          <Flex
            // pt={"4em"}
            flexDir={"column"}
            pos={"relative"}
            h={"20vh"}
            align={"center"}
            transition="transform 0.5s ease"
            _hover={{ transform: "translateY(-10px)" }}
          >
            <Image
              src={bgContent}
              pos={"absolute"}
              objectFit={"cover"}
              h={"100%"}
              w={"90%"}
              boxShadow={"lg"}
              borderRadius={"1em"}
            />
            <Text
              color={"#2c7be5"}
              pos={"absolute"}
              display={"flex"}
              alignItems={"center"}
              gap={"2%"}
              h={"100%"}
              w={"95%"}
              justifyContent={"center"}
              fontSize={{ base: "1.5em", lg: "3em" }}
              fontFamily={`'Gilda Display', sans-serif`}
              textAlign={"center"}
              fontWeight={"bold"}
              transition="transform 0.5s ease"
              _hover={{ transform: "translateX(20px)" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                Manage
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                Your
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.5 }}
              >
                Rooms
              </motion.div>
            </Text>
          </Flex>
        </Box>

        {/* room */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} // Efek muncul dari bawah
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box
            display={"flex"}
            justifyContent={"center"}
            bgColor={"#edf2f9"}
            w={"100%"}
          >
            <Text
              fontSize={"20px"}
              display={"flex"}
              w={"50%"}
              justifyContent={"center"}
              fontFamily={`'Barlow', sans-serif`}
              py={"1em"}
              bgColor={"white"}
              borderRadius={"5px"}
              fontWeight={"bold"}
              border={"1px solid #dbdbdb"}
              boxShadow={"md"}
              transition="transform 0.5s ease"
              _hover={{ transform: "translateY(-10px)" }}
            >
              Rooms
            </Text>
          </Box>
        </motion.div>

        {/* room card */}
        <Grid
          templateColumns="repeat(1, 1fr)"
          pb={"1em"}
          mt={"1em"}
          gap={10}
          bgColor={"#edf2f9"}
        >
          {rooms?.map((val) => (
            <Box align={"center"} bgColor={"#edf2f9"}>
              <Box
                w={"50%"}
                bgColor={"white"}
                display={"flex"}
                alignItems={"center"}
                borderRadius={"md"}
                border={"1px solid #dbdbdb"}
                py={"1.5em"}
                px={"1em"}
                boxShadow={"md"}
                fontFamily={`'Barlow', sans-serif`}
                transition="transform 0.5s ease"
                _hover={{ transform: "translateY(-10px)" }}
              >
                {/* edit/delete */}

                <Box
                  flex={2}
                  // width={"250"} height={"250px"}
                >
                  <Image
                    src={`${process.env.REACT_APP_API_BASE_URL}${val.room_picture}`}
                    h={"250px"}
                    objectFit={"cover"}
                    borderRadius={"md"}
                    border={"1px solid #dbdbdb"}
                  ></Image>
                </Box>

                <Flex flex={2} flexDir={"column"}>
                  <Box
                    pt={1}
                    pr={1}
                    display={"flex"}
                    w={"100%"}
                    justifyContent={"right"}
                  >
                    <Menu>
                      <MenuButton>
                        <Image as={BiDotsHorizontalRounded} boxSize={5} />
                      </MenuButton>
                      <MenuList minW={"100px"}>
                        <MenuItem
                          onClick={() => {
                            EditRoom.onOpen();
                            setRoomId(val?.id);
                            setSelectedRoom(val);
                          }}
                          display={"flex"}
                          gap={"10px"}
                        >
                          <Icon as={BiPencil} />
                          Edit Room
                        </MenuItem>

                        <Divider />

                        <MenuItem
                          onClick={() => {
                            DeleteRoom.onOpen();
                            setRoomId(val?.id);
                            // setProperty(val);
                          }}
                          display={"flex"}
                          gap={"10px"}
                          color={"red"}
                        >
                          <Icon as={SlTrash} />
                          Delete
                        </MenuItem>
                      </MenuList>
                    </Menu>
                  </Box>

                  <Box px={"1em"}>
                    <Box
                      mb={"1em"}
                      display={"flex"}
                      justifyContent={"left"}
                      fontWeight={"bold"}
                      fontSize={"1.5em"}
                    >
                      {val.room_name}
                    </Box>

                    <Box display={"flex"}>
                      <Flex
                        flex={3}
                        flexDir={"column"}
                        textAlign={"left"}
                        gap={"1em"}
                      >
                        <Text
                          display={"flex"}
                          fontSize={"0.8em"}
                          gap={"0.5em"}
                          alignItems={"center"}
                        >
                          <Icon as={MdApartment} />{" "}
                          {val?.Property?.property_name}
                        </Text>

                        <Text
                          display={"flex"}
                          fontSize={"0.8em"}
                          gap={"0.5em"}
                          alignItems={"center"}
                        >
                          <Icon as={BsFillPersonFill} /> {val?.max_guest} Guests
                        </Text>

                        <Text
                          display={"flex"}
                          fontSize={"0.8em"}
                          gap={"0.5em"}
                          alignItems={"center"}
                        >
                          <Icon as={BsList} /> {val?.details}
                        </Text>

                        <Text
                          fontSize={"1.5em"}
                          color={"red.500"}
                          display={"flex"}
                          gap={"0.2em"}
                        >
                          Rp
                          <Text>
                            {val.main_price ? val.main_price : "0"} / day
                          </Text>
                        </Text>
                      </Flex>

                      <Flex
                        flex={1}
                        flexDir={"column"}
                        textAlign={"right"}
                        align={"end"}
                        justify={"end"}
                        gap={"1em"}
                      >
                        <Text>
                          {val?.room_status ? val?.room_status : "Status"}
                        </Text>
                      </Flex>
                    </Box>
                  </Box>
                </Flex>
              </Box>
            </Box>
          ))}

          <EditRooms
            isOpen={EditRoom.isOpen}
            onClose={() => {
              EditRoom.onClose();
              setSelectedRoom(null);
            }}
            id={roomId}
            data={selectedRoom}
            fetch={fetch}
          />

          <DeleteRooms
            isOpen={DeleteRoom.isOpen}
            onClose={DeleteRoom.onClose}
            id={roomId}
            fetch={fetch}
          />
        </Grid>
        <PaginationRoom data={{ totalPage, handlePageClick }} />
        <FooterLandingPage></FooterLandingPage>
      </Box>
    </>
  );
}
