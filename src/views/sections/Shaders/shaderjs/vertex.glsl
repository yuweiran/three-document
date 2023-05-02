uniform mat4 projectionMatrix;
uniform mat4 viewMatrix;
uniform mat4 modelMatrix;
//属性
attribute vec3 position;
attribute float aRandom;
//varying 这里传给片元着色器使用
varying float vRandom;

void main(){
  vec4 modelPosition = modelMatrix * vec4(position,1);
  modelPosition.z += aRandom*2.0;

  vec4 viewPosition = viewMatrix * modelPosition;
  vec4 projecedPosition = projectionMatrix * viewPosition;
  gl_Position = projecedPosition;

  vRandom = aRandom;
}