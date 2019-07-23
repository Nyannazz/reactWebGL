export default`
    attribute vec2 a_position;
    uniform vec2 canvas_resolution;

    varying vec2 pos_color;

    void main(){
        vec2 zeroToOne = a_position / canvas_resolution;
 
        vec2 zeroToTwo = zeroToOne * 2.0;
 
        vec2 clipSpace = zeroToTwo - 1.0;
        gl_Position=vec4(clipSpace,0,1);
        pos_color=vec2(gl_Position.x,gl_Position.y);
    }
`