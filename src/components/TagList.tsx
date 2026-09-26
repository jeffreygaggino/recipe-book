type Props = {
  tags: string[];
};

export function TagList({ tags }: Props) {
  return (
    <ul>
      {tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
