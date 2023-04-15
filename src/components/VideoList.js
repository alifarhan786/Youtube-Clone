import React from 'react'
import {Grid} from '@material-ui/core'
import VideoiItem from './VideoItem'
const VideoList=({videos, onVideoSelect})=> {
    const listOfVideos = videos.map((video, id)=> <VideoiItem onVideoSelect={onVideoSelect} key={id} video={video}/>)
  return(
    <Grid container spacing={5}>

    {listOfVideos}
    </Grid>
    )
}
export default VideoList;