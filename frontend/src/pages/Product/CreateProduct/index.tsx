import { Spacer } from "~/components/Spacer";
import { Flex1, Layout, ContentWrapper as RootWrapper } from "~/styles";

import { ProductSubmitForm } from "../common";

import { ContentWrapper } from "./elements";

export const CreateProductPage = () => {
  return (
    <RootWrapper>
      <Layout>
        <Spacer marginTop="30px" />
        <ContentWrapper>
          <Flex1>
            <ProductSubmitForm
              onSubmit={data => {
                console.log("data, creatform>", data);
              }}
            />
          </Flex1>
        </ContentWrapper>
        <Spacer marginTop="80px" />
      </Layout>
    </RootWrapper>
  );
};
