import React from "react";
import {
  Badge,
  Flex,
  Text,
  Box,
  Avatar,
  AvatarBadge,
  Checkbox,
  IconButton,
  TableContainer,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from "@chakra-ui/react";
import TrContacts from "./TrContacts";

export const TableContacts = () => {
  return (
    <TableContainer>
      <Table variant="simple" size="sm">
        <Thead bg="gray.50">
          <Tr>
            <Th w="30px">
              <Checkbox colorScheme="gray" />
            </Th>
            <Th w="30px"></Th>
            <Th
              py="3"
              fontWeight="normal"
              color="gray.500"
              letterSpacing="none"
              textTransform="none"
            >
              Name
            </Th>
            <Th
              py="3"
              fontWeight="normal"
              color="gray.500"
              letterSpacing="none"
              textTransform="none"
            >
              Created at
            </Th>
            <Th
              py="3"
              fontWeight="normal"
              color="gray.500"
              letterSpacing="none"
              textTransform="none"
            >
              Email
            </Th>
            <Th
              py="3"
              fontWeight="normal"
              color="gray.500"
              letterSpacing="none"
              textTransform="none"
            >
              Tags
            </Th>
            <Th py="3" fontWeight="normal" color="gray.500"></Th>
          </Tr>
        </Thead>
        <Tbody>
          {Array.from({ length: 15 }).map((_, index) => (
            <TrContacts key={index} />
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TableContacts;
