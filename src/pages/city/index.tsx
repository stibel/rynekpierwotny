import { useState } from "react";
import { useParams } from "react-router-dom";
import Select from "react-select";
import { CityTile } from "../../components/city";
import { Page } from "../../components/page";

interface CityPageProps {}

// eslint-disable-next-line no-empty-pattern
export const CityPage = ({}: CityPageProps) => {
  const [comparedCity, setComparedCity] = useState<string>("Warsaw");
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
        <CityTile name={city as string} />
        <div
          style={{
            display: "flex",
            flexFlow: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
          }}
        >
          <span>in comparison to</span>
          <Select
            defaultValue={{ value: "Warsaw", label: "Warsaw" }}
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
            onChange={(e) => setComparedCity(e?.value as string)}
          />
          <span>is</span>
        </div>
        <CityTile name={comparedCity} />
      </div>
    </Page>
  );
};
