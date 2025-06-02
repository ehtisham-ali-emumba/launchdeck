import { Link } from "react-router-dom";

import {
  ResultsList,
  ResultItem,
  ResultImage,
  ResultContent,
  ResultTitle,
  ResultDescription,
  ResultCategory,
} from "./elements";
import type { SearchResultsListProps } from "./type";

export const SearchResultsList: React.FC<SearchResultsListProps> = ({
  results,
  onItemClick,
}) => {
  if (results.length === 0) return null;

  return (
    <ResultsList>
      {results.map(result => (
        <>
          <Link
            key={result._id}
            to={`/products/${result._id}`}
            onClick={onItemClick}
            style={{ textDecoration: "none" }}
          >
            <ResultItem>
              <ResultImage src={result.image} alt={result.name} />
              <ResultContent>
                <div>
                  <ResultTitle>{result.name}</ResultTitle>
                  <ResultDescription>{result.description}</ResultDescription>
                </div>
                {result.categoryId?.name && (
                  <ResultCategory to={`/categories/${result.categoryId._id}`}>
                    {result.categoryId.name}
                  </ResultCategory>
                )}
              </ResultContent>
            </ResultItem>
          </Link>
        </>
      ))}
    </ResultsList>
  );
};
