export default`
    precision mediump float;
    varying vec2 pos_color;


    void main(){
        float myColor=length(pos_color)<0.5? 1.0 : 0.0;

        gl_FragColor=vec4(vec3(myColor),1);
    }
`