import { Container, SimpleGrid } from "@mantine/core";
import { FeatureCard } from "components/feature-item/FeatureCard";
import { Image } from "models/image.model";
import { useEffect, useState } from "react";
import { imagesService } from "services";

function FeatureList() {
  const [images, setImages] = useState<Image[]>([]);
  useEffect(() => {
    imagesService.getImages().then((data) => {
      setImages(data);
    });
  }, []);
  return (
    <Container mt={30} mb={30} size="lg">
      <SimpleGrid
        cols={4}
        breakpoints={[
          { maxWidth: 1100, cols: 3, spacing: "md" },
          { maxWidth: 980, cols: 2, spacing: "sm" },
          { maxWidth: 755, cols: 1, spacing: "sm" },
        ]}
      >
        {images.map((x, index) => (
          <FeatureCard
            key={index}
            image={x.urls.regular}
            views={x.views}
            isLiked={false}
            author={{
              name: x.user.name,
              image: x.user.profile_image.small,
            }}
            likes={x.likes}
          />
        ))}
      </SimpleGrid>
    </Container>
  );
}

export default FeatureList;
