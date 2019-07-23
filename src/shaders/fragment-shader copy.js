export default`
    precision mediump float;
    varying vec2 pos_color;


    void main(){

        gl_FragColor=vec4(vec2(pos_color),1.0,1.0);
    }
`