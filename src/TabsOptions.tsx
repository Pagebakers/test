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

export const TabsOptions = () => {
  return (
    /* START Tabs */
    <Tabs variant="unstyled" width="auto">
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
          <LayoutGrid size={13} />{" "}
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
          <Menu size={13} />
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
          <Kanban size={13} />
        </Tab>
      </TabList>
    </Tabs>
  );
};

export default TabsOptions;
