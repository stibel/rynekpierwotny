import Select from "react-select";
import { useAppDispatch } from "../../redux/hooks";
import { setCityToCompare } from "../../redux/slices/comparison-slice";

interface CitySelectProps {
  options: Array<{ value: string; label: string }>;
}

export const CitySelect = ({ options }: CitySelectProps) => {
  const dispatch = useAppDispatch();

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
      />
      <span>:</span>
    </div>
  );
};
