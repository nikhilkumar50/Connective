import React, { useState } from "react";
import UserHeader from "../components/UserHeader";
import UserPost from "../components/UserPost";
import { useParams } from "react-router-dom";
import useShowToast from "../hooks/useShowToast";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { Flex, Spinner } from "@chakra-ui/react";

const UserPage = () => {
  const[user,setUser]=useState(null);
  const {username}=useParams();
  const showToast=useShowToast();
  const[loading,setLoading]=useState(true);
  
  useEffect(()=>{
    const getUser=async()=>{
      try{
        const res=await fetch(`/api/users/profile/${username}`);
        const data= await res.json();
        if(data.error){
          showToast("Error",data.error,"error");
          return;
        }
        setUser(data);
      }catch(error){
        showToast("Error",error,"error");
      }finally{
        setLoading(false);
      }
    }
    getUser();
  },[username,showToast]);

  if (!user && loading) {
		return (
			<Flex justifyContent={"center"}>
				<Spinner size={"xl"} />
			</Flex>
		);
	}


 if (!user && !loading) return <h1>User not found</h1>;


  return <>
    <UserHeader user={user}/>
    <UserPost likes={"1.5K"} replies={208} postImg="/post1.png" postTitle="Let Talks about Connectives"/>
    <UserPost likes={"2K"} replies={500} postImg="/post3.png" postTitle="This  guy is genius"/>
    <UserPost likes={"10K"} replies={1200} postTitle="This is my first connective"/>
    
    
  </>;
};

export default UserPage;