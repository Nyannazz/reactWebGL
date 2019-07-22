import React, { Component } from 'react'
import './styles/main.css';
import vertexShaderSource from './shaders/vertex-shader.js';
import fragmentShaderSource from './shaders/fragment-shader.js';

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
    this.createShaderProgram(this.webGlContext, vertexShaderSource, fragmentShaderSource);    
    
    /* this.drawLoop(this.webGlContext, program); */
  }





  createWebGlContext=()=>{
    console.log(this.canvasRef.current)
    this.webGlContext=this.canvasRef.current.getContext("webgl");
    if(!this.webGlContext){
      alert("your machine does not support webGl")
    }
  }
  createShaderProgram=(gl, vertexShaderSource, fragmentShaderSource)=>{

    const vertexShader=this.createShader(gl,gl.VERTEX_SHADER,vertexShaderSource)
    const fragmentShader=this.createShader(gl,gl.FRAGMENT_SHADER,fragmentShaderSource)

    const program=this.createProgram(gl,vertexShader,fragmentShader);

    const positionAttributeLocation=gl.getAttribLocation(program, "a_position");
    const positionBuffer=gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER,positionBuffer);

    const positions=[
      0,0,
      0,0.5,
      0.7,0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);
    

    gl.viewport(0,0,gl.canvas.width, gl.canvas.height);
    gl.clearColor(0,0,0,0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.enableVertexAttribArray(positionAttributeLocation);


    // Bind the position buffer.
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    
    // Tell the attribute how to get data out of positionBuffer (ARRAY_BUFFER)
    const size = 2;          // 2 components per iteration
    const type = gl.FLOAT;   // the data is 32bit floats
    const normalize = false; // don't normalize the data
    const stride = 0;        // 0 = move forward size * sizeof(type) each iteration to get the next position
    let offset = 0;        // start at the beginning of the buffer
    gl.vertexAttribPointer(positionAttributeLocation, size, type, normalize, stride, offset)
    
    
    const primitiveType = gl.TRIANGLES;
    offset = 0;
    const count = 3;
    gl.drawArrays(primitiveType, offset, count);
  }

  resizeCanvas=(canvas)=>{
    canvas.width=canvas.displayWidth;
    canvas.height=canvas.displayHeight;
    console.log(canvas.canvas.height, canvas.width);
  }
/*   drawLoop=(gl, program)=>{
    gl.viewport(0,0,gl.canvas.width, gl.canvas.height);
    gl.clearColor(0,0,0,0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.useProgram(program);
    gl.enableVertexAttribArray(positionAttributeLocation);
  } */



  createShader=(gl, type, source)=>{
    const shader=gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    const succes=gl.getShaderParameter(shader, gl.COMPILE_STATUS);
    if(succes){
      return shader;
    }
    
    console.log(gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
  }

  createProgram=(gl, vertexShader, fragmentShader)=> {
    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    const success = gl.getProgramParameter(program, gl.LINK_STATUS);
    if (success) {
      return program;
    }
   
    console.log(gl.getProgramInfoLog(program));
    gl.deleteProgram(program);
  }

  render() {
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
