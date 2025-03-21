import{b as o,c as z,d as P,j as d}from"./react-three-BQ8--DpI.js";import{e as S,J as h,_ as T,$ as _}from"./three-core-DRk8PRKa.js";const a=50,g=30,b=1,R=3,w=.1,E=.07;function j(){const n=o.useRef(),v=z(_,"white.png"),x=new S("rgb(255, 255, 255)"),p=o.useRef(new Float32Array(a*3)),M=o.useRef(new Float32Array(a)),f=o.useRef(new Float32Array(a)),m=o.useRef(new Float32Array(a)),A=o.useCallback(()=>{const e=p.current,s=M.current,i=f.current,t=m.current;for(let r=0;r<a;r++){const l=r*3,u=Math.random()*Math.PI*2,c=Math.random()*g+b,C=c/g*R;i[r]=u,t[r]=c,e[l]=c*Math.cos(u),e[l+1]=c*Math.sin(u),e[l+2]=(Math.random()-.5)*C*2,s[r]=Math.random()<.01?.6:.05+Math.random()*.5}n.current&&(n.current.setAttribute("position",new h(e,3)),n.current.setAttribute("size",new h(s,1)))},[]),y=o.useCallback(()=>{if(!n.current)return;const e=p.current,s=f.current,i=m.current;for(let t=0;t<a;t++){const r=t*3;s[t]+=Math.sqrt(w/i[t])*E,e[r]=i[t]*Math.cos(s[t]),e[r+1]=i[t]*Math.sin(s[t])}n.current.attributes.position.needsUpdate=!0},[]);return o.useLayoutEffect(()=>{A()},[A]),P(e=>{y(e)}),d.jsxs("points",{children:[d.jsx("bufferGeometry",{ref:n}),d.jsx("shaderMaterial",{uniforms:{pointTexture:{value:v},particleColor:{value:x}},vertexShader:`
          attribute float size;
          varying float vSize;
          void main() {
            vSize = size;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,fragmentShader:`
          uniform sampler2D pointTexture;
          uniform vec3 particleColor;
          varying float vSize;
          void main() {
            float alpha = vSize * 3.0;
            gl_FragColor = vec4(particleColor, alpha);
            gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
          }
        `,blending:T,depthTest:!1,transparent:!0})]})}export{j as default};
