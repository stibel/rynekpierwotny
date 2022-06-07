import { CityTile } from "../../components/city";
import { Page } from "../../components/page";
import { CAPITAL_CITIES } from "../../constants";

export const HomePage = () => {
  return (
    <Page>
      <main
        style={{
          width: "90vw",
          height: "100%",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          columnGap: "3vw",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {CAPITAL_CITIES.map((name: string) => {
          return <CityTile key={name} name={name} />;
        })}
      </main>
    </Page>
  );
};
