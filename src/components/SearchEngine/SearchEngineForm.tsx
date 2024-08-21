import { Box, Input, IconButton} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { useState } from 'react';

import {
  mainFont,
  accentFontColor,
  secondaryAccentColor,
  accentColor,
} from "../../styles/variables";

import { IPropForm } from '../../types/props';

export const SearchEngineForm: React.FC<IPropForm> = ({onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState('')

     const queryHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase())
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery === '') {
      alert('Please enter a movie name');
      return;
    }
    onSubmit(trimmedQuery);
    reset();
  };

  const reset = () => {
    setSearchQuery('');
  };

  return (
    <Box as={"form"} onSubmit={submitHandler} mb={"40px"} display={"flex"}>
      <IconButton
        type="submit"
  colorScheme="red"
        aria-label='Search database'
        mr={"10px"}
  icon={<SearchIcon />}
/>
      <Input
        borderColor={secondaryAccentColor}
        focusBorderColor={accentColor}
        fontFamily={mainFont}
        fontSize={"22px"}
        color={accentFontColor}
        placeholder="Search movie name"
        name={"searchQuery"}
        _placeholder={{
          color: secondaryAccentColor,
          fontSize: "26px",
        }}
        onChange={queryHandler}
        value={searchQuery}
      />
    </Box>
    )
}
