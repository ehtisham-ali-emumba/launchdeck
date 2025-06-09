import React, { useCallback, useState } from "react";

import { SearchOutlined, ClearOutlined } from "@ant-design/icons";
import { Space, Tag } from "antd";

import { Button, Input, Spacer } from "~/components";
import { uiStrings } from "~/constants";

import { TryTheseText } from "./elements";
import type { AnalyticsSearchBarProps } from "./type";
import { spacerStyles, suggestedQueries, tagStyles } from "./utils";

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
    <div>
      <Space.Compact style={spacerStyles}>
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
          {uiStrings.analyze}
        </Button>
        {query ? (
          <Button onClick={handleClear} icon={<ClearOutlined />}>
            {uiStrings.clear}
          </Button>
        ) : null}
      </Space.Compact>

      <div>
        <TryTheseText>{uiStrings.tryThese}</TryTheseText>
        {suggestedQueries.map((suggestion, index) => (
          <Tag
            key={index}
            style={tagStyles}
            onClick={() => setQuery(suggestion)}
            color={query.trim() === suggestion ? "orange" : "blue"}
          >
            {suggestion}
          </Tag>
        ))}
      </div>
      <Spacer top="20px" />
    </div>
  );
};
