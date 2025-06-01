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

interface SearchResult {
  _id: number;
  name: string;
  description: string;
  image: string;
  category: string;
}

interface SearchResultsListProps {
  results: SearchResult[];
  onItemClick: () => void;
}

export const SearchResultsList: React.FC<SearchResultsListProps> = ({
  results,
  onItemClick,
}) => {
  if (results.length === 0) return null;

  return (
    <ResultsList>
      {results.map(result => (
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
              <ResultCategory>{result.category}</ResultCategory>
            </ResultContent>
          </ResultItem>
        </Link>
      ))}
    </ResultsList>
  );
};
