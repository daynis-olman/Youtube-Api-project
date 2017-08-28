<template>
  <div>
    <div class="row">
      <div class="col-sm-4 col-xs-12 text-right pull-right">
        <select class="form-control sorting">
          <option> Date Added</option>
          <option> By Name</option>
          <option> Popularity</option>
        </select>
        <button class="btn icon-btn thumbnails active"></button>
        <button class="btn icon-btn listview"></button>
      </div>
      <div class="col-sm-8 col-xs-12">
        <h1 class="section-title">Trending Videos</h1>
        <p>Original Music Videos featuring music written and produced by Boyce Avenue. </p>
      </div>
    </div>
    <!-- make visible when user click on video -->
    <div class="row" v-if="videoId!=0">
      <div class="col-xs-12">
        <h1 class="section-title">There's Nothing Holdin' Me out there</h1>
        <p>boyceavenue </p>
        <youtube :video-id="videoId"></youtube>
      </div>
      <div class="clear-fix"></div>
      <br>
      <br>
    </div>
    <!-- make visible when user click on video -->
    <div class="row">
      <div class="col-md-3 col-sm-4 col-xs-6 " v-for="video in listVideos.items" @click="videoId=video.id.videoId">
        <div class="media-block">
          <figure class="video-block"><img :src="video.snippet.thumbnails.default.url" alt=""></figure>
          <div class="details">
            <h4 class="title-video">{{video.snippet.title}}</h4>
            <p>{{video.snippet.channelTitle}}</p>
            <div class="row">
              <div class="col-sm-7 col-xs-6 viewers">
                <span class="icon"><img src="img/ic-obsever.png" alt=""></span> 3,22,000</div>
              <div class="col-sm-5 col-xs-6 viewers text-right">5 days ago</div>
            </div>
            <div class="clear-fix"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  // Param : videoId : Used to select the particular video//
  data: function () {
    return { videoId: 0, listVideos: [] }
  },
  // Accessing the You Tube API //
  created () {
    // Used AXIOS to access the You Tube API //
    axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyBqEwtwZvfUEJ4OotqCz_jjHDMm7PwXJDI&maxResults=4`)
      .then(response => { this.listVideos = response.data })
      .catch(e => {
        this.errors.push(e)
      })
  }
}
</script>


