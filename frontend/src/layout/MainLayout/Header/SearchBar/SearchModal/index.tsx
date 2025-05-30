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
  const [searchResults, setSearchResults] = useState<any[]>([]);

  // Use mutation for search
  const { mutate: searchProducts, isPending: isLoading } =
    useLLMProductSearch();

  // Perform search with debouncing
  useEffect(() => {
    if (!searchQuery.trim()) {
      setSearchResults([]);
      return;
    }

    const debounceTimer = setTimeout(() => {
      searchProducts(searchQuery, {
        onSuccess: (data) => {
          console.log("🚀 ~ Search results:", data);
          setSearchResults(data?.data || []);
        },
        onError: (error) => {
          console.error("Search error:", error);
          setSearchResults([]);
        },
      });
    }, 500);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery, searchProducts]);

  const handleModalClose = () => {
    setSearchQuery("");
    setSearchResults([]);
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
            placeholder:
              "Search: 'health products', 'recent launches', 'popular tools'...",
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
        ) : searchQuery && searchResults.length === 0 ? (
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
