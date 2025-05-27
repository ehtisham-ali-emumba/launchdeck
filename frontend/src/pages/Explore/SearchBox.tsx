import { useState, useMemo } from "react";
import { Col } from "antd";
import {
  EnvironmentOutlined,
  CalendarOutlined,
  DollarOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Input } from "../../components";
import { CustomRangePicker } from "../../components";
import { Select } from "../../components/FormSelect/Select";
import {
  CardUI,
  ItemWrapper,
  IconCircle,
  HeaderText,
  Divider,
  SearchButton,
  SearchFlexBox,
} from "./elements";
import { generateParams, priceRanges } from "./utils";
import { useNavigate } from "react-router-dom";
import { uiStrings } from "../../constants";
import type { DatePickerOnChangeType } from "../../components/DatePickers/type";

const SearchBox = () => {
  const [location, setLocation] = useState<string>("");
  const [dateRange, setDateRange] = useState<[string, string] | []>([]);
  const [priceRange, setPriceRange] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleSearch = () => {
    const params = generateParams({
      city: location,
      start_date: dateRange?.[0],
      end_date: dateRange?.[1],
      price: priceRange,
    });
    navigate(`/tours?${params}`);
  };

  const dateHandler: DatePickerOnChangeType = (dates, dateStrings) => {
    if (!dates) setDateRange([]);
    else setDateRange([dateStrings[0], dateStrings[1]]);
  };

  const isSearchDisabled = useMemo(() => {
    return !location && dateRange.length === 0 && !priceRange;
  }, [location, dateRange, priceRange]);

  return (
    <CardUI>
      <SearchFlexBox>
        <Col flex="1">
          <ItemWrapper>
            <IconCircle>
              <EnvironmentOutlined style={{ fontSize: 20, color: "grey" }} />
            </IconCircle>
            <div>
              <HeaderText>{uiStrings.location}</HeaderText>
              <Input
                inputProps={{
                  placeholder: uiStrings.whereYouWantToGo,
                  variant: "borderless",
                  value: location,
                  onChange: (e) => setLocation(e.target.value),
                }}
              />
            </div>
          </ItemWrapper>
        </Col>
        <Divider />
        <Col flex="1">
          <ItemWrapper>
            <IconCircle>
              <CalendarOutlined style={{ fontSize: 18, color: "grey" }} />
            </IconCircle>
            <div>
              <HeaderText>{uiStrings.chooseDate}</HeaderText>
              <CustomRangePicker
                dateProps={{
                  onChange: dateHandler,
                  needConfirm: true,
                }}
              />
            </div>
          </ItemWrapper>
        </Col>
        <Divider />
        <Col flex="1">
          <ItemWrapper>
            <IconCircle>
              <DollarOutlined style={{ fontSize: 18, color: "grey" }} />
            </IconCircle>
            <div>
              <HeaderText>{uiStrings.priceRange}</HeaderText>
              <Select
                selectProps={{
                  variant: "borderless",
                  placeholder: uiStrings.chooseHere,
                  size: "small",
                  value: priceRange,
                  onChange: (value) => setPriceRange(value),
                  options: priceRanges,
                }}
              />
            </div>
          </ItemWrapper>
        </Col>
        <Col>
          <SearchButton onClick={handleSearch} disabled={isSearchDisabled}>
            <SearchOutlined style={{ fontSize: 28, color: "#fff" }} />
          </SearchButton>
        </Col>
      </SearchFlexBox>
    </CardUI>
  );
};

export default SearchBox;
