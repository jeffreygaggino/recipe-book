type Props = {
  tags: string[];
  onSelectTag?: (tag: string) => void;
};

export function TagList({ tags, onSelectTag }: Props) {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag}>
          {onSelectTag ? (
            <button type="button" onClick={() => onSelectTag(tag)}>
              {tag}
            </button>
          ) : (
            tag
          )}
        </li>
      ))}
    </ul>
  );
}
