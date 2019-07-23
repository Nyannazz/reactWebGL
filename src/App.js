import React, { Component } from 'react'
import './styles/main.css';
import vertexShaderSource from './shaders/vertex-shader.js';
import fragmentShaderSource from './shaders/fragment-shader.js';
import createWebGlCanvas from './createCanvas.js';

export default class App extends Component {
  constructor(props) {
    super(props)
    this.canvasRef=React.createRef();
    this.webGlContext=null;

    this.state = {
       
    }
  }

  componentDidMount(){
    this.createWebGlContext();
    this.resizeCanvas(this.webGlContext);
    createWebGlCanvas(this.webGlContext, vertexShaderSource, fragmentShaderSource);
  }

  createWebGlContext=()=>{
    console.log(this.canvasRef.current)
    this.webGlContext=this.canvasRef.current.getContext("webgl");
    if(!this.webGlContext){
      alert("your machine does not support webGl")
    }
  }


  resizeCanvas=(canvas)=>{
    canvas.canvas.width=canvas.displayWidth;
    canvas.canvas.height=canvas.displayHeight;
    
    canvas.canvas.width=800;
    canvas.canvas.height=600;

  }




  render() {
    console.log(this.webGlContext?this.webGlContext.canvas.width: "nothing yet")
    return (
      <div className="App">
        <header className="App-header">
     
        </header>
        <canvas ref={this.canvasRef}/>
        <main>
        </main>
        
      </div>
    )
  }
}
