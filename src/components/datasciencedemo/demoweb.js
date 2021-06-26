import React, { Component } from 'react';
import './demo.css'
import ImageUploader from 'react-images-upload';
import Webcam from "react-webcam";
export default class DemoWeb extends Component {

    state:{
        flag:false,
        uploadImageName:''
    }

    constructor(props) {
            super(props);
             this.state = { pictures: [] };
             this.onDrop = this.onDrop.bind(this);
             this.handleClick = this.handleClick.bind(this);
             this.capture = this.capture.bind(this);
        }

        onDrop(event) {
//        console.log()
                this.setState({
                    uploadImageName:event.target.files[0].name,
                    pictures: event.target.files[0],
                });

            }

            handleClick() {
                this.setState(prevState => ({
                  flag: true,
                }));
              }

              capture() {
                const imageSrc = this.webcamRef.current.getScreenshot();
                [this.webcamRef]
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
                    default:
                      return (<p class="videoTitle"><strong>Please upload driving video and image</strong></p>);
                  }

              }


    render() {
      let datascienceData = this.props.dataScience;
      const isLoggedIn = this.state.flag;
      console.log(this.state.uploadImageName)
      return (
        <div class="demo">
        <h2 class = "title"> Capstone project demo</h2>
            {isLoggedIn ? <div>
            <h2 class="videoTitle">Generated Video</h2>
              {this.checkVideoCondition(this.state.uploadImageName)}

            </div>
            : <div>
                  <div class="row">
                  <div class="column" >
                    <h2 class="subheading">Upload driving video</h2>

                    <label class="custom-file-upload">
                        <input type="file" onChange={this.onDrop}/>
                        <i class="fa fa-cloud-upload"></i> Custom Upload
                    </label>
                  </div>
                  <div class="column" >
                    <h2 class="subheading">Upload image</h2>
                    <label class="custom-file-upload">
                        <input type="file" onChange={this.onDrop}/>
                        <i class="fa fa-cloud-upload"></i> Custom Upload
                    </label>
                  </div>
                  <div class="column" >
                    <h2 class="subheading">WebCam</h2>
                    <Webcam
                        audio={false}
                        height={220}
                        width={20}
                        screenshotFormat="image/jpeg"
                        width={1280}
                        ref={this.webcamRef}
                        class="webcam"
                      />
                      <button class="button">Capture video</button>
                  </div>
                </div>

                <button class="button"> Generate </button>
                </div>
            }
        </div>

      );
    }
}