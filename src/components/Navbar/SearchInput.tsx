import React from "react";
import { Flex, InputGroup, InputLeftElement, Input, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { auth } from "firebase-admin";
import { user } from "firebase-functions/v1/auth";
import { User } from "firebase/auth";
import Link from "next/link";
type SearchInputProps = {
  user: User;
};

const SearchInput: React.FC<SearchInputProps> = ({ user }) => {
  return (
    <Flex
      flexGrow={1}
      maxWidth={user ? "auto" : "700px"}
      mr={2}
      alignItems="center"
    >
      <InputGroup>
        <InputLeftElement
          pointerEvents="none"
          color="gray.400"
          // children={<SearchIcon mb={2} />}
        >
          <SearchIcon mb={2} />
        </InputLeftElement>
        <Input
          placeholder="Search Vasukam"
          fontSize="10pt"
          _placeholder={{ color: "gray.500" }}
          _hover={{
            bg: "white",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          _focus={{
            outline: "none",
            border: "1px solid",
            borderColor: "blue.500",
          }}
          height="34px"
          bg="gray.50"
        />
      </InputGroup>
      <Flex
          mr={1.5}
          ml={1.5}
          padding={1}
          cursor="pointer"
          borderRadius={4}
          _hover={{ bg: "gray.200" }}
        >
          <Link href="https://vasukam-web.vercel.app/">
                  <Button  height="30px">
                    Vasukam Website
                  </Button>
                </Link>
        </Flex>
      
    </Flex>
  );
};
export default SearchInput;
