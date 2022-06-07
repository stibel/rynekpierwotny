import { useParams } from "react-router-dom";
import { Comparison } from "../../components/comparison";
import { Page } from "../../components/page";

interface CityPageProps {}

// eslint-disable-next-line no-empty-pattern
export const CityPage = ({}: CityPageProps) => {
  const { city } = useParams();

  return (
    <Page>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Comparison cityToCompare={city as string} />
      </div>
    </Page>
  );
};
