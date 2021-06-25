import React, { Component } from 'react';
import './demo.css'
import ImageUploader from 'react-images-upload';
export default class Demo extends Component {

    state:{
        flag:false,
    }

    constructor(props) {
            super(props);
             this.state = { pictures: [] };
             this.onDrop = this.onDrop.bind(this);
             this.handleClick = this.handleClick.bind(this);
        }

        onDrop(picture) {
                this.setState({
                    pictures: this.state.pictures.concat(picture),
                });
            }

            handleClick() {
                this.setState(prevState => ({
                  flag: true,
                }));
              }


    render() {
      let datascienceData = this.props.dataScience;
      const isLoggedIn = this.state.flag;
      return (
        <div class="demo">
        <h2 class = "title"> Capstone project demo</h2>
            {isLoggedIn ? <div>
            <h2 class="videoTitle">Generated Video</h2>
                <video class ="videoplayer" width="200" controls="controls">
                  <source src="images/demo.mp4" type="video/mp4"/>
                  Sorry, your browser doesn't support embedded videos.
                </video>
            </div>
            : <div>
                  <div class="row">
                  <div class="column" >
                    <h2 class="subheading">Upload driving video</h2>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                  </div>
                  <div class="column" >
                    <h2 class="subheading">upload image</h2>
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose images'
                        onChange={this.onDrop}
                        imgExtension={['.jpg', '.gif', '.png', '.gif']}
                        maxFileSize={5242880}
                    />
                  </div>
                </div>

                <button class="button" onClick={this.handleClick}> Generate </button>
                </div>
            }
        </div>

      );
    }
}