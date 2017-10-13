class ManTorso extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    }
    this.hoverState = this.hoverState.bind(this);
    }
    hoverState(){
      if (this.state.hover){
        this.setState({hover: false});
      }
      else{
        this.setState({hover: true});
      }
    }
    render() {
      var fillColor = this.props.selected_gender == "male" ? "#207fd3" : "#bfbfbf";
      var imgStyle = {
        width: "130px",
        fill: this.state.hover ? '#207fd3' : fillColor
      };
      return(
        <svg onMouseEnter={this.hoverState} onMouseLeave={this.hoverState} style={imgStyle} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 648 864">
            <path className="st0" d="M529.8,482.8c-2.6-26.8-19.1-41-15.8-81.5c3.3-40.5-7.8-79.5-7.8-79.5s8-39.5-3.5-74.4
            c-3.1-8.9-8.1-17-14.6-23.7l0.1-0.3c-15.9-16.4-35.7-25-35.7-25l-13.1-6.6c0,0-62.3-25.4-67.7-30.8s-7.5-47.9-7.5-63.2h-80.4
            c0,15.3-2,57.8-7.5,63.2s-67.7,30.8-67.7,30.8l-13.1,6.6c0,0-19.9,8.6-35.7,25l0.1,0.3c-6.6,6.7-11.5,14.8-14.6,23.7
            c-11.4,34.9-3.5,74.4-3.5,74.4s-11.1,39-7.8,79.5s-13.2,54.7-15.8,81.5c-4.6,47.8-0.9,114.2,2.2,152.1c1.4,16.9-0.1,48.9,1.3,66.5
            c1,12.2,4.4,33,11.3,42.1c6.8,9.1,21.8,23.4,26,21.5c3.4,2.9,23,0.9,19.6-6.6s-14.5-9.5-19.3-17.3s-5.1-30.9-1.2-31.2
            s12,6.6,12.7,14.9s3.4,20.5,13.6,20.9c7.1,0.2,2.2-9.2,1.5-18.5c-0.7-9.1,0.2-27.6-12.7-46.6s-14.7-37.1-13-57.2s26.2-79.7,29-113.7
            s-6.3-50-1.6-65.5s16.2-65.1,14.4-87.3l-0.2-1l5.4-67c-0.1,0,14.1,81,14.1,81c3.6,13.7,4.8,69.4,4.8,99c0,24,3.2,45.7,1,60.2
            l96.7,0.2h0.1l96.7-0.2c-2.2-14.6,1-36.2,1-60.2c0-29.6,1.1-85.3,4.8-99c0,0,14.2-81,14.1-81l5.4,67l-0.2,1
            c-1.8,22.1,9.8,71.7,14.4,87.3s-4.4,31.5-1.6,65.5s27.3,93.5,29,113.7s-0.1,38.2-13,57.2s-11.9,37.5-12.7,46.5
            c-0.8,9.3-5.6,18.8,1.5,18.5c10.1-0.4,12.9-12.6,13.5-20.9s8.7-15.2,12.7-14.9s3.6,23.5-1.2,31.2s-15.9,9.8-19.3,17.3
            s16.2,9.5,19.6,6.6c4.2,1.9,19.2-12.5,26-21.5s10.3-29.9,11.3-42.1c1.4-17.5,0-49.6,1.3-66.5C530.7,597.1,534.3,530.6,529.8,482.8z"/>
        </svg>
      )
    }
  };