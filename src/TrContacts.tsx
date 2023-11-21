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
  Td,
  Tr,
  Link,
  Icon
} from "@chakra-ui/react";
import { Hexagon, Star, MoreHorizontal } from "lucide-react";

export const TrContacts = () => {
  const names = [
    "John Doe",
    "Monica Richardson",
    "Thomas Anderson",
    "Xiu Mano"
  ];
  const emails = ["tom@jones.co.uk", "john@doe.com", "email@example.com"];
  const dates = ["Jun 28, 2023", "May 7, 2018", "Dec 30, 2006"];
  const statuses = ["red", "green", "orange", "gray"];
  const tags = [
    "CSS",
    "Javascript",
    "UI",
    "Project Managment",
    "React",
    "Vue",
    "Figma"
  ];
  const tagsColors = ["pink.500", "teal.500", "blue.500", "yellow.500"];

  function getContactNames() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return names[randomIndex];
  }

  function getContactEmails() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return emails[randomIndex];
  }

  function getContactDates() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return dates[randomIndex];
  }

  function getContactStatus() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return statuses[randomIndex];
  }

  function getContactTags() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return tags[randomIndex];
  }

  function getContactTagsColors() {
    const randomIndex = Math.floor(Math.random() * names.length);
    return tagsColors[randomIndex];
  }

  const randomNumber = Math.floor(Math.random() * 46) + 5;
  const avatarUrl = `https://airframe.vercel.app/images/avatars/${randomNumber}.jpg`;

  return (
    <Tr>
      <Td>
        <Checkbox colorScheme="gray" />
      </Td>
      <Td>
        <IconButton
          aria-label="Search database"
          icon={<Icon as={Star} size="14" color="gray.400" />}
          size="sm"
          colorScheme="gray"
          variant="ghost"
        />
      </Td>
      <Td>
        <Flex align="center">
          <Avatar size="sm" mr={3} borderRadius="full" src={avatarUrl}>
            <AvatarBadge
              borderColor="white"
              bg={getContactStatus()}
              boxSize=".9em"
            />
          </Avatar>
          <Box align="left">
            <Link fontSize="sm" fontWeight="normal" href="#">
              {getContactNames()}
            </Link>
            <Text
              fontSize="xs"
              color="gray.500"
              fontSize="xs"
              fontWeight="normal"
              pt="1"
            >
              {getContactEmails()}
            </Text>
          </Box>
        </Flex>
      </Td>
      <Td color="gray.500">{getContactDates()}</Td>
      <Td color="gray.500">{getContactEmails()}</Td>
      <Td color="gray.500">
        <Badge
          bg="transparent"
          borderWidth="1px"
          borderColor="gray.200"
          px="3"
          py="1"
          borderRadius="full"
          fontWeight="normal"
          textTransform="none"
          letterSpacing="none"
          fontSize="xs"
          color="gray.900"
          boxShadow="sm"
          mr="2"
        >
          <Flex justifyContent="center">
            <Text fontSize={10} color={getContactTagsColors()} mr="1">
              ●
            </Text>
            <Text>{getContactTags()}</Text>
          </Flex>
        </Badge>

        <Badge
          bg="transparent"
          borderWidth="1px"
          borderColor="gray.200"
          px="3"
          py="1"
          borderRadius="full"
          fontWeight="normal"
          textTransform="none"
          letterSpacing="none"
          fontSize="xs"
          color="gray.900"
          boxShadow="sm"
          mr="2"
        >
          <Flex justifyContent="center">
            <Text fontSize={10} color={getContactTagsColors()} mr="1">
              ●
            </Text>
            <Text>{getContactTags()}</Text>
          </Flex>
        </Badge>

        <Badge
          bg="transparent"
          borderWidth="1px"
          borderColor="gray.200"
          px="3"
          py="1"
          borderRadius="full"
          fontWeight="normal"
          textTransform="none"
          letterSpacing="none"
          fontSize="xs"
          color="gray.900"
          boxShadow="sm"
          mr="2"
        >
          <Flex justifyContent="center">
            <Text fontSize={10} color={getContactTagsColors()} mr="1">
              ●
            </Text>
            <Text>{getContactTags()}</Text>
          </Flex>
        </Badge>
      </Td>
      <Td textAlign="end">
        <IconButton
          aria-label="Search database"
          icon={<MoreHorizontal size="14" color="gray" />}
          size="sm"
          colorScheme="gray"
          variant="ghost"
        />
      </Td>
    </Tr>
  );
};

export default TrContacts;
