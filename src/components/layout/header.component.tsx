import React from 'react';
import {
  Menu,
  Center,
  Header,
  Container,
  Group,
} from '@mantine/core';
import ButtonMenu from '../shared/button-with-menu';
import { HeaderActionProps } from './header.interfaces';
import { HEADER_HEIGHT, useLayoutStyles } from './useLayoutStyles';
import { ButtonWithIcon } from '../shared/button-with-icon';

export function HeaderActionComponent({ links }: HeaderActionProps) {
  const { classes } = useLayoutStyles();
  const items = links.map((link) => {
    const menuItems = link.links?.map((item) => (
      <Menu.Item key={item.link}>{item.label}</Menu.Item>
    ));

    if (menuItems) {
      return (
        <Menu
          key={link.label}
          trigger="hover"
          delay={0}
          transitionDuration={0}
          placement="end"
          gutter={1}
          control={
            <a
              href={link.link}
              className={classes.link}
              onClick={(event) => event.preventDefault()}
            >
              <Center>
                <span className={classes.linkLabel}>{link.label}</span>
              </Center>
            </a>
          }
        >
          {menuItems}
        </Menu>
      );
    }

    return (
      <a
        key={link.label}
        href={link.link}
        className={classes.link}
        onClick={(event) => event.preventDefault()}
      >
        {link.label}
      </a>
    );
  });

  return (
    <Header height={HEADER_HEIGHT} sx={{ borderBottom: 0 }} mb={120}>
      <Container className={classes.inner} fluid>
        <Group>
          <ButtonMenu/>
        </Group>
        <Group spacing={5} className={classes.links}>
          {items}
        </Group>
        <ButtonWithIcon/>
      </Container>
    </Header>
  );
}

