type Props = {
  tags: string[];
};

export function TagList(props: Props) {
  return (
    <ul>
      {props.tags.map((tag) => (
        <li key={tag}>{tag}</li>
      ))}
    </ul>
  );
}
