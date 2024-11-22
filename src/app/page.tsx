"use client";
import { getPosts } from "@/lib/reduxStore/postsSlice";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { rootStore, storeDispatch } from "@/lib/reduxStore/dataStore";
import Container from '@mui/material/Container';
import Card from "./posts/page";


export default function Home() {

  let {allPosts} = useSelector((store: rootStore)=> store.postsReducer);
  
  let dispatch = useDispatch<storeDispatch>();

  useEffect(() => {
    dispatch(getPosts());
  },[]);
  return (
    <>
    <Container maxWidth="sm">
        <Card postsData={allPosts}/>
    </Container>
    </>
  );
}
