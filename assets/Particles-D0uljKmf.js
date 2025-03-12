import{b as a,u as M,j as f}from"./react-three-CwI-z3rJ.js";import{J as A,_ as x,e as y,$ as C}from"./three-core-DRk8PRKa.js";const s=1e3,h=30,S=1,z=3,_=.1,P=.06;function R(){const o=a.useRef(),d=a.useRef(new Float32Array(s*3)),g=a.useRef(new Float32Array(s)),p=a.useRef(new Float32Array(s)),m=a.useRef(new Float32Array(s));return a.useLayoutEffect(()=>{const e=d.current,n=g.current,i=p.current,t=m.current;for(let r=0;r<s;r++){const u=r*3,l=Math.random()*Math.PI*2,c=Math.random()*h+S,v=c/h*z;i[r]=l,t[r]=c,e[u]=c*Math.cos(l),e[u+1]=c*Math.sin(l),e[u+2]=(Math.random()-.5)*v*2,n[r]=Math.random()<.01?1:.1+Math.random()*.5}o.current&&(o.current.setAttribute("position",new A(e,3)),o.current.setAttribute("size",new A(n,1)))},[]),M(()=>{if(o.current){const e=d.current,n=p.current,i=m.current;for(let t=0;t<s;t++){const r=t*3;n[t]+=Math.sqrt(_/i[t])*P,e[r]=i[t]*Math.cos(n[t]),e[r+1]=i[t]*Math.sin(n[t])}o.current.attributes.position.needsUpdate=!0}}),f.jsxs("points",{children:[f.jsx("bufferGeometry",{ref:o}),f.jsx("shaderMaterial",{uniforms:{pointTexture:{value:new C().load("white.png")},particleColor:{value:new y("rgb(225, 143, 255)")}},vertexShader:`
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
            float alpha = vSize * 2.0;
            gl_FragColor = vec4(particleColor, alpha);
            gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
          }
        `,blending:x,depthTest:!1,transparent:!0})]})}export{R as default};
