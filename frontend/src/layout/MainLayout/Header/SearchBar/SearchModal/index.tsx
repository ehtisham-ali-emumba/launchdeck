import { useState, useEffect } from "react";
import { Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SearchResultsList } from "./SearchResultsList";
import { ModalSearchInput, NoResults } from "./elements";
import { useLLMProductSearch } from "~/hooks/queries/useLLMProductSearch";

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [hasSearched, setHasSearched] = useState(false);

  const { mutate: searchProducts, isPending: isLoading } =
    useLLMProductSearch();

  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      setHasSearched(false);
      return;
    }

    setHasSearched(false);
    const debounceTimer = setTimeout(() => {
      searchProducts(searchQuery, {
        onSuccess: (data) => {
          setSearchResults(data?.data || []);
          setHasSearched(true);
        },
        onError: (error) => {
          console.error("Search error:", error);
          setSearchResults([]);
          setHasSearched(true);
        },
      });
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, searchProducts]);

  const handleModalClose = () => {
    setSearchQuery("");
    setSearchResults([]);
    setHasSearched(false);
    onClose();
  };

  return (
    <Modal
      open={isOpen}
      onCancel={handleModalClose}
      footer={null}
      width={600}
      title={null}
    >
      <div style={{ padding: "20px" }}>
        <ModalSearchInput
          inputProps={{
            placeholder: "Search: 'health', 'code', 'ai tools'...",
            prefix: <SearchOutlined style={{ marginRight: "4px" }} />,
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),
            size: "large",
          }}
        />

        {isLoading ? (
          <div style={{ padding: "20px", textAlign: "center" }}>
            🤖 AI is searching...
          </div>
        ) : hasSearched && searchQuery && searchResults.length === 0 ? (
          <NoResults>No results found for "{searchQuery}"</NoResults>
        ) : (
          <SearchResultsList
            results={searchResults}
            onItemClick={handleModalClose}
          />
        )}
      </div>
    </Modal>
  );
};
