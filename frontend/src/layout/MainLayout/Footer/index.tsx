import { Spacer } from "../../../components";
import { FooterWrapper } from "./elements";

export const Footer = () => (
  <>
    <Spacer top="50px" />
    <FooterWrapper>
      © {new Date().getFullYear()} LaunchDeck &mdash; Built with ❤️
    </FooterWrapper>
  </>
);
