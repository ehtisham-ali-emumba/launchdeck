import { images_png } from "../../../assets";
import { Spacer } from "../../../components/Spacer";
import { Flex1, Layout, ContentWrapper as RootWrapper } from "../../../styles";

import { BookForm } from "./BookForm";
import { Box, ContentWrapper, ImageUI, ImageWrapper } from "./elements";

export const BookTour = () => {
  return (
    <RootWrapper>
      <Layout>
        <Box>
          <Spacer marginTop="20px" />
          <ContentWrapper>
            <Flex1>
              <BookForm />
            </Flex1>
            <ImageWrapper>
              <ImageUI src={images_png.building} preview={false} />
            </ImageWrapper>
          </ContentWrapper>
        </Box>
        <Spacer marginTop="80px" />
      </Layout>
    </RootWrapper>
  );
};
