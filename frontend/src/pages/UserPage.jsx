import React from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
const UserPage = () => {
  return <>
    <UserHeader/>
    <UserPost likes={"1.5K"} replies={208} postImg="/post1.png" postTitle="Let Talks about Connectives"/>
    <UserPost likes={"2K"} replies={500} postImg="/post3.png" postTitle="This  guy is genius"/>
    <UserPost likes={"10K"} replies={1200} postTitle="This is my first connective"/>
    
    
  </>;
};

export default UserPage;