import React from 'react';
import { Button, Menu, Text, useMantineTheme } from '@mantine/core';
import {  ChevronDown } from 'tabler-icons-react';

function ButtonMenu() {
  const theme = useMantineTheme();
  return (
    <Menu
      control={
        <Button  variant="default" rightIcon={<ChevronDown size={18} />} sx={{ paddingRight: 12 }}>
          Popular
        </Button>
      }
      transition="pop-top-right"
      placement="end"
      size="lg"
    >
      <Menu.Item
        rightSection={
          <Text size="xs" transform="uppercase" weight={700} color="dimmed">
            Ctrl + P
          </Text>
        }
      >
        Project
      </Menu.Item>
    </Menu>
  );
}

export default ButtonMenu