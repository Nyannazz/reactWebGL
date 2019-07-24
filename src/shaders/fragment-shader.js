export default`
precision mediump float;

uniform vec2 u_resolution;

uniform vec2 u_zoomCenter;
varying vec2 clipSpace;

uniform float u_zoomSize;

uniform int u_maxIterations;



void main() {
  // adjust for resolution
  //vec2 uv=gl_FragCoord.xy / u_resolution;
  //vec2 uv=gl_FragCoord.xy / vec2(u_resolution.x);
  //vec2 uv=gl_FragCoord.xy;
  //vec2 c = u_zoomCenter + (uv * 4.0 - vec2(2.0)) * (u_zoomSize / 4.0);
  //vec2 c = u_zoomCenter + (uv) * (u_zoomSize);
  //vec2 uv=gl_FragCoord.xy;
  vec2 uv=clipSpace;

  gl_FragColor = uv.y>0.0? vec4(1.0) : vec4(vec3(0.0), 1.0);

}
`