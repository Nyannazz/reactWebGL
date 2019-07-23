export default`
    attribute vec2 a_position;
    uniform vec2 offset;

    varying vec2 pos_color;

    void main(){
        gl_Position=vec4(a_position,1,1);
        gl_Position.x=gl_Position.x+offset.x;
        gl_Position.y=gl_Position.y+offset.y;
        pos_color=a_position;
    }
`