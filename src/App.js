import React from 'react';
import { Grid } from '@material-ui/core';
import { SearchBar, VideoDetail , VideoList } from './components'
import youtube from './api/youtube';
import logo from './api/logo.png';
class App extends React.Component {
    state ={
        videos:[],
        selectedVideo: null,
    }

     componentDidMount(){
         this.handleSubmit('Avatar Trailer')
     }
    onVideoSelect =(video)=>{
        this.setState({
            selectedVideo: video
        })
    }
    handleSubmit = async (searchTerm) => {
        const response = await youtube.get('search', {
            params: {
                part: 'snippet',
                maxResults: 5,
                key: 'AIzaSyC06dXVlT5sqrC1sKTL3yn-a4SYhrEzfts',
                q: searchTerm,
            }
        });
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0],

        });
    }
    render(){
        const {selectedVideo, videos} = this.state;
        return (
            <Grid container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid xs={2}>
                         <img src={logo} alt='logo' width={200} height={100} style={{position: 'relative',left: '50px',top: '50px'}} /> 
                        </Grid>
                        <Grid item xs={10} >
                            <SearchBar onFormSubmit={this.handleSubmit} />
                        </Grid>
                        <Grid item xs={8}>
                            <VideoDetail video={selectedVideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <VideoList videos={videos} onVideoSelect={this.onVideoSelect} />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        )
    }
}

export default App;