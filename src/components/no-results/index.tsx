import { ImCross } from "react-icons/im";

export const NoResults = () => {
  return (
    <div style={{ display: "flex", flexFlow: "column", textAlign: "center" }}>
      <ImCross size={250} />
      <h1>No results</h1>
    </div>
  );
};
