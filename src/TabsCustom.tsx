import React from "react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Badge
} from "@chakra-ui/react";

import { LayoutGrid, Menu, Kanban } from "lucide-react";

export const TabsCustom = () => {
  return (
    /* START Tabs */
    <Tabs variant="unstyled" width="auto" size="sm">
      <TabList bg="gray.50" p="1" borderRadius="md" gap="1px">
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
        >
          All
          <Badge
            ml="1"
            fontSize="xs"
            fontWeight="normal"
            bg="transparent"
            color="gray.500"
          >
            15
          </Badge>
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
        >
          Leads
          <Badge
            ml="1"
            fontSize="xs"
            fontWeight="normal"
            bg="transparent"
            color="gray.500"
          >
            4
          </Badge>
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
        >
          Customers
          <Badge
            ml="1"
            fontSize="xs"
            fontWeight="normal"
            bg="transparent"
            color="gray.500"
          >
            0
          </Badge>
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default TabsCustom;
