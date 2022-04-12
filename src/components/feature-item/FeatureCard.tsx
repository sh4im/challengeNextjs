import React from "react";
import { Eye, Heart } from "tabler-icons-react";
import {
  Card,
  Image,
  Text,
  Group,
  Center,
  Avatar,
  useMantineTheme,
  ActionIcon,
} from "@mantine/core";
import { useFeatureCardStyles } from "./useFeatureCardStyles";

interface FeatureCardProps {
  image: string;
  isLiked: boolean;
  views: number;
  likes: number;
  author: {
    name: string;
    image: string;
  };
}

export function FeatureCard({
  image,
  author,
  likes,
  views,
  isLiked,
  ...others
}: FeatureCardProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof FeatureCardProps>) {
  const { classes, cx } = useFeatureCardStyles();
  const theme = useMantineTheme();
  async function like() {
  }
  return (
    <Card withBorder radius="md" className={cx(classes.card)} {...others}>
      <Card.Section>
        <a>
          <Image src={image} alt={""} height={180} />
        </a>
      </Card.Section>
      <Group position="apart" className={classes.footer} spacing="xs">
        <Center>
          <Avatar src={author.image} size={24} radius="xl" mr="xs" />
          <Text size="sm" inline>
            {author.name}
          </Text>
        </Center>
        <Group spacing="xs">
          <Center>
            <ActionIcon size="xs" onClick={() => like()}>
              <Heart
                color={isLiked ? theme.colors.dark[2] : theme.colors.red[6]}
              />
            </ActionIcon>
            <Text size="xs" className={classes.bodyText}>
              {likes}
            </Text>
          </Center>
          <Center>
            <ActionIcon size="sm">
              <Eye color={theme.colors.dark[2]} />
            </ActionIcon>
            <Text size="sm" className={classes.bodyText}>
              {views}
            </Text>
          </Center>
        </Group>
      </Group>
    </Card>
  );
}
