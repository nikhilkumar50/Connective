import { Avatar, Divider, Flex, Text } from "@chakra-ui/react";
import { useRecoilState, useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";
import { DeleteIcon } from "@chakra-ui/icons";
import postsAtom from "../atoms/postsAtom";
import useShowToast from "../hooks/useShowToast";

const Comment = ({ reply, lastreply }) => {
  const currentUser = useRecoilValue(userAtom);
  const [posts, setPosts] = useRecoilState(postsAtom);
  const showToast=useShowToast();
  

  return (
    <>
      <Flex gap={4} py={2} my={2} w={"full"}>
        <Avatar src={reply.userProfilePic} size={"sm"} />
        <Flex gap={1} w={"full"} flexDirection={"column"}>
          <Flex
            w={"full"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Text fontSize="sm" fontWeight={"bold"}>
              {reply.username}
            </Text>
            {currentUser?._id === reply.userId && (
              <DeleteIcon size={20} cursor={"pointer"} />
            )}
          </Flex>
          <Text>{reply.text}</Text>
        </Flex>
      </Flex>
      {!lastreply ? <Divider /> : null}
    </>
  );
};

export default Comment;
