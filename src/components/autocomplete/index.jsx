import { useEffect, useState } from "react";
import Input from "../input";
import { Container, OptionAutoComplete, OptionAutoCompleteContainer } from "./styles";

const AutocompleteComponent = ({ text, items, setDataId, valueIsUpdate = null, ...rest }) => {
  const [suggestions, setSuggestions] = useState([]);
  const [value, setValue] = useState("");

  console.log("valueIsUpdate", valueIsUpdate);

  useEffect(() => {
    if (valueIsUpdate) {
      const value = items?.find((item) => item.id === valueIsUpdate);

      setValue(value?.name);
      setDataId(value?.id);
    }
  }, [valueIsUpdate]);

  const onTextChange = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if (value.length > 0) {
      const regex = new RegExp(`^${value}`, "i");
      suggestions = items.sort().filter((v) => regex.test(v.name));
    }

    setSuggestions(suggestions);
    setValue(value);
  };

  const suggestionSelected = (value) => {
    setValue(value?.name);
    setDataId(value?.id);
    setSuggestions([]);
  };

  const renderSuggestions = () => {
    if (suggestions.length === 0) {
      return null;
    }

    return (
      <OptionAutoCompleteContainer>
        {suggestions?.map((item) => (
          <OptionAutoComplete onClick={() => suggestionSelected(item)}>
            {item?.name}
          </OptionAutoComplete>
        ))}
      </OptionAutoCompleteContainer>
    );
  };

  return (
    <Container>
      <label style={{ color: "#a9a9a9" }}>{text}</label>

      <Input type="text" onChange={onTextChange} value={value} {...rest} />
      {renderSuggestions()}
    </Container>
  );
};

export default AutocompleteComponent;
