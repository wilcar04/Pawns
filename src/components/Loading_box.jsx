import React from 'react';



class Box extends React.Component {
  state = {
    gifPlayed: true
  };
  
  componentDidMount() {
    setTimeout(() => {
      this.setState({ gifPlayed: false });
    }, 1000);
  };

  render() {
    const { gifPlayed } = this.state;

    return (
      <div>
        {gifPlayed ? (
          <img src="../../public/anim.gif" style={{width:"150px",height:"300px"}} className="center" alt="Gif"  />
        ) : null}  
      </div>
    );
  }
}

export default Box;

