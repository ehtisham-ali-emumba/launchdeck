import { ImageBannerBackgroundWrapper } from "./elements";
import SearchBox from "./SearchBox";
import { PopularSearch } from "./PopularSearch";

export const Explore = () => {
  return (
    <>
      <ImageBannerBackgroundWrapper>
        <SearchBox />
      </ImageBannerBackgroundWrapper>
      <PopularSearch />
    </>
  );
};
