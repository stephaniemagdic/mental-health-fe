import { useEffect } from "react";
import { Tag } from "../../interfaces";
import "./tagSearchBar.scss";
import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import TagsContainer from "../../containers/TagsContainer/TagsContainer";

interface TagSearchBarProps {
  tags: Tag[];
  updateQuestions: (tag: string ) => void;
}

const TagSearchBar: React.FC<TagSearchBarProps> = (props) => {
  // const options = props.tags.map(tag => tag.name)
  console.log("tag search bar is being rerendered")
  const options = props.tags
  const [value, setValue] = React.useState<any>(options[0]);
  const [inputValue, setInputValue] = React.useState('');

  const updateQuestionsByTag = (newValue: any) => {
 
      props.updateQuestions(newValue)
    
  }


  return (
    <div className='TagSearchBar'>
      <div>{`${value !== null ? `Search Results for '${value}'` : 'null'}`}</div>
      <br />
      <div className='autocomplete--container'>
        <Autocomplete
          value={value}
          onChange={(event: any, newValue: string | null) => {
            setValue(newValue);
            updateQuestionsByTag(newValue)
          }}
          inputValue={inputValue}
          onInputChange={(event, newInputValue) => {
            setInputValue(newInputValue);
          }}
          id="controllable-states-demo"
          options={options}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="search by tag" />}
        />
      </div>
    </div>
  );
}


export default TagSearchBar;


