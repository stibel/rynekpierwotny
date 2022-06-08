import Select from "react-select";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectCity,
  setCityToCompare,
} from "../../redux/slices/comparison-slice";

interface CitySelectProps {
  options: Array<{ value: string; label: string }>;
}

export const CitySelect = ({ options }: CitySelectProps) => {
  const dispatch = useAppDispatch();
  const city = useAppSelector(selectCity);

  return (
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
        options={options}
        onChange={(e) => dispatch(setCityToCompare(e?.value as string))}
        isDisabled={!options.length || !city}
      />
      <span>:</span>
    </div>
  );
};
