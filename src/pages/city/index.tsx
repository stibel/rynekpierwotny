import { useParams } from "react-router-dom";
import { CityTile } from "../../components/city";
import { CitySelect } from "../../components/city-select";
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
          width: "100",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          margin: "0 1rem",
          gap: "10vw",
        }}
      >
        <CityTile name={city as string} />
        <CitySelect //most populated cities in Poland
          options={[
            { value: "Warsaw", label: "Warsaw" },
            { value: "Krakow", label: "Kraków" },
            { value: "Lodz", label: "Łódź" },
            { value: "Wroclaw", label: "Wrocław" },
            { value: "Poznan", label: "Poznań" },
            { value: "Gdansk", label: "Gdańsk" },
            { value: "Szczecin", label: "Szczecin" },
            { value: "Bydgoszcz", label: "Bydgoszcz" },
          ]}
        />
        <Comparison />
      </div>
    </Page>
  );
};
