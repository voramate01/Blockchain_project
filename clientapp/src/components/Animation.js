import React, { useState, Component } from 'react'

class  Animation extends Component {

	constructor(props) {
    super(props)
    this.state = {
      classNames: "",
      animationFinished: false,
      showAnimationStartLabel: false

    }

    this.startStopAnimation = this.startStopAnimation.bind(this)
    this.onAnimationStart =this.onAnimationStart.bind(this)
    this.onAnimationEnd=this.onAnimationEnd.bind(this)

  	}

  	startStopAnimation() {
    	const { classNames } = this.state;

    	this.setState({ classNames: classNames ? "" : "animation" });
    	document.getElementById('submit').click()

  	};


  	onAnimationStart() {
    	this.setState({
      		animationFinished: false,
      		showAnimationStartLabel: true
    	});
  	};

  	onAnimationEnd(){
    	this.setState({
      		animationFinished: true,
      		showAnimationStartLabel: false
    	});
  	};


	render() {
		const { animationFinished, showAnimationStartLabel } = this.state;
    	const displayState = animationFinished ? "block" : "none";
    	const displayStateAnimationStart =
      		!animationFinished && showAnimationStartLabel ? "block" : "none";

		return( 
	        <div className="App">
	          <button onClick={this.startStopAnimation}>
	            SEND !
	          </button>


	          <div style={{ display: displayStateAnimationStart }}>
	            <h1>On the way. . .</h1>
	          </div>
	          <div style={{ display: displayState }}>
	            <h1>Delivered.</h1>
	          </div>

	          <div className="demo">
	            <div
	              className={`car ${this.state.classNames}`}
	              onAnimationEnd={this.onAnimationEnd}
	              onAnimationStart={this.onAnimationStart}
	            />
	          </div>
	          <p><br/><br/><br/><br/><br/><br/><br/><br/><br/></p>
          	</div>
		)
	}	
}

export default Animation;