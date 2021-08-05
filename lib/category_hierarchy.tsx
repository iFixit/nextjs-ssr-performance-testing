interface Hierarchy extends Record<string, Hierarchy> {}
interface CategoryHierarchyInterface {
  hierarchy: Hierarchy;
  date: string;
}
export function CategoryHierarchy({
  hierarchy,
  date
}: CategoryHierarchyInterface) {
  return (
    <>
      <p>{date}</p>
      <CategoryHierarchyCategory hierarchy={hierarchy} />
    </>
  );
}

function CategoryHierarchyCategory({ hierarchy }: { hierarchy: Hierarchy }) {
  return (
    <ol>
      {Object.entries(hierarchy).map(([key, value]) => {
        return (
          <li key={key}>
            <p>{key}</p>
            <Category value={value} />
          </li>
        );
      })}
    </ol>
  );
}

function Category({ value }: { value: Hierarchy }) {
  if (value == {}) {
    return null;
  } else {
    return <CategoryHierarchyCategory hierarchy={value} />;
  }
}
