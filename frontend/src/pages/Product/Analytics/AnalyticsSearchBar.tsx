import React, { useCallback, useState } from "react";
import { Space, Tag } from "antd";
import { SearchOutlined, ClearOutlined } from "@ant-design/icons";
import { Button, Input } from "~/components";
import type { AnalyticsSearchBarProps } from "./type";
import { suggestedQueries } from "./utils";
import { uiStrings } from "~/constants";

export const AnalyticsSearchBar: React.FC<AnalyticsSearchBarProps> = ({
  onSearch,
  loading = false,
  placeholder = uiStrings.askAI,
}) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  const handleClear = useCallback(() => {
    setQuery("");
    onSearch("");
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div style={{ marginBottom: "24px" }}>
      <Space.Compact style={{ width: "100%", marginBottom: "12px" }}>
        <Input
          inputProps={{
            size: "large",
            placeholder,
            value: query,
            onChange: e => setQuery(e.target.value),
            onKeyPress: handleKeyPress,
            prefix: <SearchOutlined style={{ color: "#bfbfbf" }} />,
          }}
        />
        <Button
          onClick={handleSearch}
          loading={loading}
          disabled={!query.trim()}
        >
          Analyze
        </Button>
        {query ? (
          <Button onClick={handleClear} icon={<ClearOutlined />}>
            Clear
          </Button>
        ) : null}
      </Space.Compact>

      <div>
        <span style={{ marginRight: "8px", color: "#666", fontSize: "12px" }}>
          Try these:
        </span>
        {suggestedQueries.map((suggestion, index) => (
          <Tag
            key={index}
            style={{ cursor: "pointer", margin: "2px" }}
            onClick={() => setQuery(suggestion)}
            color="blue"
          >
            {suggestion}
          </Tag>
        ))}
      </div>
    </div>
  );
};
