import React, { Component } from 'react';
import './demo.css'
import ImageUploader from 'react-images-upload';
import Loader from "react-loader-spinner";
export default class Demo extends Component {

    state:{
        flag:false,
        uploadImageName:'',
        loader:false
    }

    constructor(props) {
            super(props);
             this.state = { pictures: [] };
             this.onDrop = this.onDrop.bind(this);
             this.handleClick = this.handleClick.bind(this);
             this.refresh = this.refresh.bind(this);
        }

/*
        async componentDidMount() {

            const response = await fetch('https://geolocation-db.com/json/');
            const data = await response.json();
            console.log(data)
            this.setState({ ip: data.IPv4 })
            if(this.state.ip == '103.196.53.89'){
//                alert(this.state.ip)
                   alert('You dont have access to it')
            }
        }*/

        refresh() {
          console.log("Clicked");
          window.location.reload();
        }

        onDrop(event) {
//        console.log()
                this.setState({
                    uploadImageName:event.target.files[0].name,
                    pictures: event.target.files[0],
                });

            }

            handleClick() {
                /*this.setState(prevState => ({
                  flag: true,
                  loader:true,
                }));*/
                alert('Please switch to zoom, user is showing on localhost')
               /* setTimeout(function() { //Start the timer
                      this.setState({loader: false}) //After 1 second, set render to true
                  }.bind(this), 3000)*/
              }


              checkVideoCondition(imageName) {
                switch(imageName) {
                    case 'frame.png':
                      return (<video class ="videoplayer" width="400" controls="controls">
                                <source src="images/output.mp4" type="video/mp4"/>
                                Sorry, your browser doesn't support embedded videos.
                              </video>);
                    case 'obama.jpg':
                      return (<video class ="videoplayer" width="400" controls="controls">
                                <source src="images/obama.mp4" type="video/mp4"/>
                                Sorry, your browser doesn't support embedded videos.
                              </video>);

                    case 'self.png':
                      return (<video class ="videoplayer" width="400" controls="controls">
                                <source src="images/integrated.mp4" type="video/mp4"/>
                                Sorry, your browser doesn't support embedded videos.
                              </video>);

                    case 'scarydoll.png':
                      return (<video class ="videoplayer" width="400" controls="controls">
                                <source src="images/animated.mp4" type="video/mp4"/>
                                Sorry, your browser doesn't support embedded videos.
                              </video>);
                    default:
                      return (<p class="videoTitle"><strong>Please upload driving video and image</strong></p>);
                  }

              }


    render() {
      let datascienceData = this.props.dataScience;
      const isLoggedIn = this.state.flag;
//      console.log(this.state.uploadImageName)
      return (
        <div class="demo">
        <h2 class = "title">Capstone Project</h2>
            {isLoggedIn ? <div>
            <button class="refresh" onClick={ this.refresh.bind(this) }> Refresh </button>
            <h2 class="videoTitle">Generated Video</h2>
                {this.state.loader ?
                <Loader
                        type="ThreeDots"
                        color="#00BFFF"
                        height={50}
                        width={50}
                        className="loader"
                      />
                      : <div>{this.checkVideoCondition(this.state.uploadImageName)}</div>}
            </div>
            : <div>
                <button class="refresh" onClick={ this.refresh.bind(this) }> Refresh </button>
                  <div class="row">
                  <div class="column" >
                    <h2 class="subheading">Upload driving video</h2>
                    <label class="custom-file-upload">
                        <input type="file" onChange={this.onDrop}/>
                        <i class="fa fa-cloud-upload"></i> Driving Video
                    </label>
                  </div>
                  <div class="column" >
                    <h2 class="subheading">Upload image</h2>
                    <label class="custom-file-upload">
                        <input type="file" onChange={this.onDrop}/>
                        <i class="fa fa-cloud-upload"></i> Initial Frame
                    </label>
                  </div>
                </div>

                <button class="button" onClick={this.handleClick}> Generate </button>
                </div>
            }
        </div>

      );
    }
}