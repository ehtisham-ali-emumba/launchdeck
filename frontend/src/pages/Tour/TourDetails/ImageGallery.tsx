import { Flex1 } from "../../../styles";
import { GroupImageCol, ImageUI, SmallImage, WrapperImages } from "./elements";
import type { ImageGalleryType } from "./type";

export const ImageGallery = ({ tour }: ImageGalleryType) => {
  const { imageSrc, images } = tour;
  return (
    <WrapperImages>
      <Flex1>
        <ImageUI src={imageSrc} />
      </Flex1>
      <Flex1>
        <GroupImageCol>
          <SmallImage src={images[3]} />
          <SmallImage src={images[3]} />
        </GroupImageCol>
        <GroupImageCol>
          <SmallImage src={images[3]} />
          <SmallImage src={images[3]} />
        </GroupImageCol>
      </Flex1>
    </WrapperImages>
  );
};
