import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import {
  SpecItem,
  SpecLabel,
  SpecValue,
  SpecActions,
  Divider,
} from "./elements";
import { deleteIconStyle, editIconStyle, getAutoSpecs } from "./utils";
import {
  FixedSizeList as List,
  type ListChildComponentProps,
} from "react-window";
import { uiStrings } from "../../../constants";
import type { CarSpecsGridType } from "./type";

export const CarSpecsGrid: React.FC<CarSpecsGridType> = ({
  auto,
  handleAddEditClick,
  handleDeleteClick,
}) => {
  const carSpecs = getAutoSpecs(auto);

  const Row = ({ index, style }: ListChildComponentProps) => {
    const spec = carSpecs[index];
    return (
      <div style={style} key={spec.label}>
        <SpecItem>
          <SpecLabel>{spec.label}</SpecLabel>
          <SpecValue>{spec.value}</SpecValue>
          <SpecActions>
            <EditOutlined
              style={editIconStyle}
              onClick={() => handleAddEditClick(true, spec.label, spec.value!)}
            />
            <DeleteOutlined
              style={deleteIconStyle}
              onClick={() => handleDeleteClick(spec.label)}
            />
          </SpecActions>
        </SpecItem>
        {index < carSpecs.length - 1 && <Divider />}
      </div>
    );
  };

  const listHeight = Math.max(carSpecs.length * 56, 200);

  return carSpecs.length ? (
    <List
      height={listHeight}
      itemCount={carSpecs.length}
      itemSize={56}
      width="100%"
    >
      {Row}
    </List>
  ) : (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <p>{uiStrings.noSpecsFound}</p>
    </div>
  );
};
