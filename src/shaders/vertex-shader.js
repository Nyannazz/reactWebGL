export default`
    attribute vec2 a_position;
    varying vec2 clipSpace;


    void main(){
        gl_Position=vec4(a_position,1,1);
        clipSpace=a_position;
    }
`