import { useState, useEffect } from "react";
import { Modal } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { SearchResultsList } from "./SearchResultsList";
import { ModalSearchInput, NoResults } from "./elements";

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
  const [isLoading, setIsLoading] = useState(false);

  // Mock search function - replace with your backend call
  const performSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsLoading(true);

    // Simulate API call - replace with actual backend integration
    setTimeout(() => {
      const mockResults = [
        {
          id: 1,
          name: "Next.js",
          description: "The React Framework for Production",
          image: "https://img.icons8.com/color/48/brain.png",
          category: "Framework",
        },
        {
          id: 2,
          name: "React",
          description: "A JavaScript library for building user interfaces",
          image: "https://img.icons8.com/color/48/brain.png",
          category: "Library",
        },
        {
          id: 3,
          name: "TypeScript",
          description: "JavaScript with syntax for types",
          image: "https://img.icons8.com/color/48/brain.png",
          category: "Language",
        },
      ]
        .filter(
          (item) =>
            item.name.toLowerCase().includes(query.toLowerCase()) ||
            item.description.toLowerCase().includes(query.toLowerCase())
        )
        .slice(0, 5); // Max 5 items

      setSearchResults(mockResults);
      setIsLoading(false);
    }, 300);
  };

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      performSearch(searchQuery);
    }, 300);

    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

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
            placeholder: "Search for products...",
            prefix: <SearchOutlined style={{ marginRight: "4px" }} />,
            value: searchQuery,
            onChange: (e) => setSearchQuery(e.target.value),

            size: "large",
          }}
        />

        {isLoading ? (
          <div style={{ padding: "20px", textAlign: "center" }}>Loading...</div>
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
