import MyInput from "components/UI/input/MyInput";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFilter } from "redux/contacts/selectors";
import { addFilter } from "redux/contacts/slice";

const PhoneFilter = () => {

  const filter = useSelector(getFilter)
  const dispatch = useDispatch();
  
  return (
    <form>
      <MyInput
        placeholder="search..."
        type="text"
        value={filter}
        onChange={e => dispatch(addFilter(e.target.value))}
      />
    </form>
  );
};

export default PhoneFilter;
