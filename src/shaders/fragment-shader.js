export default`
    precision mediump float;
    varying vec2 pos_color;
    float averageXY;

    float myMod(float a, float b){
        float myOutput=a / b;
        myOutput=myOutput-floor(myOutput);
        return myOutput;
    }

    void main(){
        averageXY=(myMod(pos_color.x, 0.1)<=0.02)? 1.0 : 0.0,
        gl_FragColor=vec4(pos_color.x,averageXY,pos_color.y/2.0,1);
    }
`