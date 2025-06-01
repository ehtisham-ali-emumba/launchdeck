import { useState } from "react";

import { SearchOutlined } from "@ant-design/icons";

import { colors } from "~/constants";

import { AbsoluteDiv, SearchBarContainer, SearchInput } from "./elements";
import { SearchModal } from "./SearchModal";

export const SearchBar = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchBarClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <SearchBarContainer>
        <SearchInput
          inputProps={{
            placeholder: "Search products...",
            prefix: (
              <SearchOutlined
                style={{ marginRight: "4px", color: colors.text.light }}
              />
            ),
          }}
        />
        <AbsoluteDiv onClick={handleSearchBarClick} />
      </SearchBarContainer>

      <SearchModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
