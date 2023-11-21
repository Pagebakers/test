import {
  InputLeftElement,
  InputRightElement,
  Box,
  Grid,
  Heading,
  AvatarBadge,
  Text,
  Input,
  InputGroup,
  Badge,
  Button,
  Flex,
  Spacer,
  Table,
  TableCaption,
  TableContainer,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Avatar,
  Checkbox,
  IconButton
} from "@chakra-ui/react";

import Sidebar from "./Sidebar";
import TabsCustom from "./TabsCustom";
import TabsOptions from "./TabsOptions";
import TableContacts from "./TableContacts";
import { Search, Plus, Star, Hexagon } from "lucide-react";

export const App = () => {
  return (
    <Grid templateColumns="15% auto" height="100vh" bg="gray.50">
      <Box>
        <Sidebar />
      </Box>

      <Box pt="15px">
        <Box
          bg="white"
          borderWidth="1px"
          borderColor="gray.200"
          h="100%"
          boxShadow="lg"
          borderRadius="lg"
        >
          <InputGroup>
            <InputLeftElement pointerEvents="none" pb="0" mb="0" height="100%">
              <Box
                h="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Search size={16} />
              </Box>
            </InputLeftElement>
            <Input
              type="text"
              placeholder="Search..."
              borderTopLeftRadius="md"
              borderColor="gray.100"
              bg="white"
              size="lg"
              variant="flushed"
              fontSize="sm"
              pl="10"
            />
            <InputRightElement height="100%">
              <Box
                h="100%"
                display="flex"
                alignItems="center"
                justifyContent="center"
                mr="2"
              >
                <IconButton
                  isRound={true}
                  size="sm"
                  variant="solid"
                  bg="gray.900"
                  aria-label="Done"
                  fontSize="20px"
                  icon={<Plus color="white" size="14" />}
                />
              </Box>
            </InputRightElement>
          </InputGroup>

          <Box p="6">
            <Flex alignItems="center" justifyContent="start" pb="5">
              <Heading as="h3" size="md" fontWeight="500" mb="1">
                Contacts
              </Heading>
              <Spacer />

              <TabsOptions />
            </Flex>

            <Flex w="auto" pb="6">
              <TabsCustom />
            </Flex>

            <TableContacts />
          </Box>
        </Box>
      </Box>
    </Grid>
  );
};
