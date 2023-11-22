import { HStack, IconButton, List, ListItem } from "@/components/ChakraUI";
import Link from "next/link";
import { FaHome } from "react-icons/fa";

export function index() {
  return (
    <HStack
      py={"12px"}
      w={"full"}
      align={"center"}
      mb={"24px"}
      justifyContent={"space-between"}
      borderBottom={"1px"}
      borderColor={"gray.300"}
    >
      <HStack>
        <Link href={"/"}>
          <IconButton
            aria-label="home-icon"
            icon={<FaHome size={"50%"} />}
            bg={"transparent"}
            size={"lg"}
          />
        </Link>
      </HStack>
      <HStack>
        <List>
          <Link href={"/blogs"}>
            <ListItem
              fontWeight={"bold"}
              _hover={{
                textDecoration: "underline",
                textUnderlineOffset: "4px",
              }}
            >
              Blogs
            </ListItem>
          </Link>
        </List>
      </HStack>
    </HStack>
  );
}
