import React from "react";
import {
  Tabs,
  Button,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge,
  Flex,
  Text,
  Box,
  Avatar,
  Spacer,
  Divider,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  Kbd,
  AvatarBadge
} from "@chakra-ui/react";
import {
  LayoutGrid,
  Menu,
  Kanban,
  Search,
  ChevronsUpDown,
  Hexagon,
  Dot
} from "lucide-react";

export const Sidebar = () => {
  return (
    <Flex w="full" direction="column" height="100vh">
      <Button
        px="4"
        py="9"
        bg="none"
        borderRadius="0"
        width="full"
        justifyContent="flex-start"
        _hover={{ color: "gray.900", bg: "gray.200" }}
        _selected={{
          color: "gray.900",
          bg: "white"
        }}
      >
        <Flex align="center">
          <Avatar
            size="sm"
            bg="white"
            borderWidth="1px"
            boxShadow="sm"
            borderColor="gray.200"
            icon={<Hexagon size={20} style={{ color: "black" }} />}
            src="ścieżka_do_obrazka_avatar"
            mr={3}
            borderRadius="md"
          />
          <Box align="left">
            <Text
              fontSize="xs"
              color="gray.500"
              fontSize="xs"
              fontWeight="normal"
              mb="1"
            >
              Team
            </Text>
            <Text fontSize="sm" fontWeight="normal">
              Magento
            </Text>
          </Box>
        </Flex>
        <Spacer />
        <ChevronsUpDown size={13} />
      </Button>

      <Divider borderColor="gray.200" />

      <Box px="4" pb="1" pt="4">
        <InputGroup size="md" boxShadow="sm">
          <InputLeftElement pointerEvents="none">
            <Search size={14} />
          </InputLeftElement>
          <Input
            type="text"
            placeholder="Search..."
            borderRadius="md"
            fontSize="sm"
            bg="white"
          />
          <InputRightElement pointerEvents="none">
            <Box
              h="100%"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Kbd>/</Kbd>
            </Box>
          </InputRightElement>
        </InputGroup>
      </Box>

      <Tabs
        variant="unstyled"
        orientation="vertical"
        variant="enclosed"
        size="md"
        width="197%"
      >
        <TabList p="4" gap="2px" w="full">
          <Text fontSize="xs" color="gray.500" pb="3">
            Menu
          </Text>

          <Tab
            color="gray.500"
            _hover={{ color: "gray.900", bg: "gray.100" }}
            _selected={{
              color: "gray.900",
              bg: "white",
              borderColor: "gray.200",
              boxShadow: "sm",
              borderWidth: "1px"
            }}
            borderRadius="md"
            borderWidth="1px"
            borderColor="transparent"
            fontSize="sm"
            w="full"
          >
            <Flex w="full" alignItems="center">
              <LayoutGrid size={13} />
              <Text ml="2">Grid</Text>
              <Spacer />
              <Box justifyContent="flex-start">
                <Badge
                  ml="1"
                  fontSize="xs"
                  fontWeight="normal"
                  bg="transparent"
                  color="gray.600"
                  border="1px"
                  borderColor="gray.300"
                  borderStyle="solid"
                  px="2"
                  borderRadius="full"
                >
                  15
                </Badge>
              </Box>
            </Flex>
          </Tab>

          <Tab
            color="gray.500"
            _hover={{ color: "gray.900", bg: "gray.100" }}
            _selected={{
              color: "gray.900",
              bg: "white",
              borderColor: "gray.200",
              boxShadow: "sm",
              borderWidth: "1px"
            }}
            borderRadius="md"
            borderWidth="1px"
            borderColor="transparent"
            fontSize="sm"
            w="full"
          >
            <Flex w="full" alignItems="center">
              <Menu size={13} />
              <Text ml="2">Table</Text>
              <Spacer />
              <Box justifyContent="flex-start">
                <Badge
                  ml="1"
                  fontSize="xs"
                  fontWeight="normal"
                  bg="transparent"
                  color="gray.600"
                  border="1px"
                  borderColor="gray.300"
                  borderStyle="solid"
                  px="2"
                  borderRadius="full"
                >
                  4
                </Badge>
              </Box>
            </Flex>
          </Tab>

          <Tab
            color="gray.500"
            _hover={{ color: "gray.900", bg: "gray.100" }}
            _selected={{
              color: "gray.900",
              bg: "white",
              borderColor: "gray.200",
              boxShadow: "sm",
              borderWidth: "1px"
            }}
            borderRadius="md"
            borderWidth="1px"
            borderColor="transparent"
            fontSize="sm"
            w="full"
          >
            <Flex w="full" alignItems="center">
              <Kanban size={13} />
              <Text ml="2">Kanban</Text>
              <Spacer />
              <Box justifyContent="flex-start">
                <Badge
                  ml="1"
                  fontSize="xs"
                  fontWeight="normal"
                  bg="transparent"
                  color="gray.600"
                  border="1px"
                  borderColor="gray.300"
                  borderStyle="solid"
                  px="2"
                  borderRadius="full"
                >
                  0
                </Badge>
              </Box>
            </Flex>
          </Tab>

          <Divider pt="3" />

          <Text fontSize="xs" color="gray.500" pt="4" pb="3">
            Resources
          </Text>

          <Tab
            color="gray.500"
            _hover={{ color: "gray.900", bg: "gray.100" }}
            _selected={{
              color: "gray.900",
              bg: "white",
              borderColor: "gray.200",
              boxShadow: "sm",
              borderWidth: "1px"
            }}
            borderRadius="md"
            borderWidth="1px"
            borderColor="transparent"
            fontSize="sm"
            w="full"
          >
            <Flex w="full" alignItems="center">
              <LayoutGrid size={13} />
              <Text ml="2">Grid</Text>
              <Spacer />
              <Box justifyContent="flex-start">
                <Badge
                  ml="1"
                  fontSize="xs"
                  fontWeight="normal"
                  bg="transparent"
                  color="gray.600"
                  border="1px"
                  borderColor="gray.300"
                  borderStyle="solid"
                  px="2"
                  borderRadius="full"
                >
                  15
                </Badge>
              </Box>
            </Flex>
          </Tab>

          <Tab
            color="gray.500"
            _hover={{ color: "gray.900", bg: "gray.100" }}
            _selected={{
              color: "gray.900",
              bg: "white",
              borderColor: "gray.200",
              boxShadow: "sm",
              borderWidth: "1px"
            }}
            borderRadius="md"
            borderWidth="1px"
            borderColor="transparent"
            fontSize="sm"
            w="full"
          >
            <Flex w="full" alignItems="center">
              <Menu size={13} />
              <Text ml="2">Table</Text>
              <Spacer />
              <Box justifyContent="flex-start">
                <Badge
                  ml="1"
                  fontSize="xs"
                  fontWeight="normal"
                  bg="transparent"
                  color="gray.600"
                  border="1px"
                  borderColor="gray.300"
                  borderStyle="solid"
                  px="2"
                  borderRadius="full"
                >
                  4
                </Badge>
              </Box>
            </Flex>
          </Tab>

          <Tab
            color="gray.500"
            _hover={{ color: "gray.900", bg: "gray.100" }}
            _selected={{
              color: "gray.900",
              bg: "white",
              borderColor: "gray.200",
              boxShadow: "sm",
              borderWidth: "1px"
            }}
            borderRadius="md"
            borderWidth="1px"
            borderColor="transparent"
            fontSize="sm"
            w="full"
          >
            <Flex w="full" alignItems="center">
              <Kanban size={13} />
              <Text ml="2">Kanban</Text>
              <Spacer />
              <Box justifyContent="flex-start">
                <Badge
                  ml="1"
                  fontSize="xs"
                  fontWeight="normal"
                  bg="transparent"
                  color="gray.600"
                  border="1px"
                  borderColor="gray.300"
                  borderStyle="solid"
                  px="2"
                  borderRadius="full"
                >
                  0
                </Badge>
              </Box>
            </Flex>
          </Tab>

          <Divider pt="3" pb="4" />
          <Text fontSize="xs" color="gray.500" pt="4" pb="3">
            Tags
          </Text>

          <Tab
            color="gray.500"
            _hover={{ color: "gray.900", bg: "gray.100" }}
            _selected={{
              color: "gray.900",
              bg: "white",
              borderColor: "gray.200",
              boxShadow: "sm",
              borderWidth: "1px"
            }}
            borderRadius="md"
            borderWidth="1px"
            borderColor="transparent"
            fontSize="sm"
            w="full"
          >
            <Flex w="full" alignItems="center">
              <Text fontSize={10} color="red">
                {" "}
                ●{" "}
              </Text>
              <Text ml="4">Projects</Text>
              <Spacer />
              <Box justifyContent="flex-start">
                <Badge
                  ml="1"
                  fontSize="xs"
                  fontWeight="normal"
                  bg="transparent"
                  color="gray.600"
                  border="1px"
                  borderColor="gray.300"
                  borderStyle="solid"
                  px="2"
                  borderRadius="full"
                >
                  15
                </Badge>
              </Box>
            </Flex>
          </Tab>

          <Tab
            color="gray.500"
            _hover={{ color: "gray.900", bg: "gray.100" }}
            _selected={{
              color: "gray.900",
              bg: "white",
              borderColor: "gray.200",
              boxShadow: "sm",
              borderWidth: "1px"
            }}
            borderRadius="md"
            borderWidth="1px"
            borderColor="transparent"
            fontSize="sm"
            w="full"
          >
            <Flex w="full" alignItems="center">
              <Text fontSize={10} color="green">
                {" "}
                ●{" "}
              </Text>
              <Text ml="4">Files</Text>
              <Spacer />
              <Box justifyContent="flex-start">
                <Badge
                  ml="1"
                  fontSize="xs"
                  fontWeight="normal"
                  bg="transparent"
                  color="gray.600"
                  border="1px"
                  borderColor="gray.300"
                  borderStyle="solid"
                  px="2"
                  borderRadius="full"
                >
                  4
                </Badge>
              </Box>
            </Flex>
          </Tab>

          <Tab
            color="gray.500"
            _hover={{ color: "gray.900", bg: "gray.100" }}
            _selected={{
              color: "gray.900",
              bg: "white",
              borderColor: "gray.200",
              boxShadow: "sm",
              borderWidth: "1px"
            }}
            borderRadius="md"
            borderWidth="1px"
            borderColor="transparent"
            fontSize="sm"
            w="full"
          >
            <Flex w="full" alignItems="center">
              <Text fontSize={10} color="orange">
                {" "}
                ●{" "}
              </Text>
              <Text ml="4">Kanban</Text>
              <Spacer />
              <Box justifyContent="flex-start">
                <Badge
                  ml="1"
                  fontSize="xs"
                  fontWeight="normal"
                  bg="transparent"
                  color="gray.600"
                  border="1px"
                  borderColor="gray.300"
                  borderStyle="solid"
                  px="2"
                  borderRadius="full"
                >
                  0
                </Badge>
              </Box>
            </Flex>
          </Tab>
        </TabList>
        <TabPanels></TabPanels>
      </Tabs>
      <Spacer />
      <Divider borderColor="gray.200" />

      <Button
        px="4"
        py="9"
        borderRadius="0"
        width="full"
        bg="none"
        justifyContent="flex-start"
        _hover={{ color: "gray.900", bg: "gray.200" }}
        _selected={{
          color: "gray.900",
          bg: "white",
          borderColor: "gray.200",
          boxShadow: "sm",
          borderWidth: "1px"
        }}
      >
        <Flex align="center">
          <Avatar
            size="sm"
            icon={<Hexagon size={20} style={{ color: "black" }} />}
            mr={3}
            borderRadius="full"
            src="https://bit.ly/ryan-florence"
          >
            <AvatarBadge borderColor="white" bg="red" boxSize=".9em" />
          </Avatar>
          <Box align="left">
            <Text fontSize="sm" fontWeight="normal" mb="1">
              Jane Fonda
            </Text>
            <Text
              fontSize="xs"
              color="gray.500"
              fontSize="xs"
              fontWeight="normal"
            >
              jane@fonda.co.uk
            </Text>
          </Box>
        </Flex>
        <Spacer />
        <ChevronsUpDown size={13} />
      </Button>
    </Flex>
  );
};

export default Sidebar;
