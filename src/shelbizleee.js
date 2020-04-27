import React from 'react';
// Shelbizleee
export default class Home extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        resultyt: []
      };
      this.clicked = this.clicked.bind(this);
    }
  clicked(){
    fetch('https://www.googleapis.com/youtube/v3/search?key=AIzaSyDsudW7P_qTRXZHm9gJ1YQyyjs_CUfeeN4&channelId=UCv2LNRhF34_v1VNC08ZuooA&part=snippet,id&order=date&maxResults=10')
      .then((response) => response.json())
      .then((responseJson) => {
        const resultyt = responseJson.items.map(obj => "https://www.youtube.com/embed/"+obj.id.videoId);
        this.setState({resultyt});
        console.log(this.state.resultyt);
      })
      .catch((error) => {
        console.error(error);
      });
    }
    render() {
      return(
  
        <>
          <title>Shelbizleee</title>
          <p></p>
          <h1 >Shelbizleee</h1>
          <p></p>
          <div>
              <button onClick={this.clicked}>Get YouTube Videos</button>
                {
                  this.state.resultyt.map((link, i) => {
                    var frame = <div key={i} className='youtube'><iframe title='YouTube Video' width="560" height="315" src={link} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen SameSite="None"></iframe></div>
                    return frame;
                  })
                }
                {this.frame}
  
          </div>
        </>
      );
    }
  }
  