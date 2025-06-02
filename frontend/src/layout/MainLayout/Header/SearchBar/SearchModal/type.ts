export interface SearchResult {
  _id: number;
  name: string;
  description: string;
  image: string;
  categoryId: { _id: string; name: string } | null;
}

export interface SearchResultsListProps {
  results: SearchResult[];
  onItemClick: () => void;
}
