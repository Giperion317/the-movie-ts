import { Box, Input, IconButton } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

import { useState } from 'react';

import {
  mainFont,
  accentFontColor,
  secondaryAccentColor,
} from "../../styles/variables";

import { IPropForm } from '../../types/props';

export const SearchEngineForm: React.FC<IPropForm> = ({onSubmit}) => {
    const [searchQuery, setSearchQuery] = useState('')

     const queryHendler = (e:React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value.toLowerCase())
  };

  const submitHendler = (e:React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim() === '') {
      return alert('Please enter name movie');
    }
    onSubmit(searchQuery);
    reset();
  };

  const reset = () => {
    setSearchQuery('');
  };
  return (
    <Box as={"form"} onSubmit={submitHendler} mb={"40px"}>
      <IconButton
        type="submit"
  colorScheme='blue'
  aria-label='Search database'
  icon={<SearchIcon />}
/>
      <Input
        // type="text"
        // autoComplete="off"
        // autoFocus
        // placeholder="Search movie name"
        // onChange={queryHendler}
        // name="searchQuery"
        // value={searchQuery}
        borderColor={secondaryAccentColor}
        fontFamily={mainFont}
        fontSize={"22px"}
        color={accentFontColor}
        placeholder="Search movie name"
        name={"searchQuery"}
        _placeholder={{
          color: secondaryAccentColor,
          fontSize: "26px",
        }}
        onChange={queryHendler}
        value={searchQuery}
      />
    </Box>
    )
}

// export const SearchEngineInput = ({ submitHandler, inputHandler }) => {
//   return (
//     <Box as={"form"} onSubmit={submitHandler} mb={"40px"}>
//       <Input
//         borderColor={secondaryAccentColor}
//         fontFamily={mainFont}
//         fontSize={"22px"}
//         color={accentFontColor}
//         placeholder="Search"
//         name={"input"}
//         _placeholder={{
//           color: secondaryAccentColor,
//           fontSize: "26px",
//         }}
//       />
//     </Box>
//   );
// };