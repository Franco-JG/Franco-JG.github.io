import{r as o,h as b,i as T,j as p}from"./react-three-DV1vh2tu.js";import{J as A,$ as E}from"./three-core-C0_18ck3.js";const l=200,d=30,_=1,w=3,F=.1,D=1;function L(){const C=o.useRef(),i=o.useRef(),m=o.useRef(!1),R=b(E,"white.png"),v=o.useRef(new Float32Array(l*3)),z=o.useRef(new Float32Array(l)),g=o.useRef(new Float32Array(l)),h=o.useRef(new Float32Array(l)),y=o.useRef(new Float32Array(l*3)),x=o.useCallback(()=>{if(!i.current)return;const s=v.current,a=z.current,u=g.current,f=h.current,n=y.current;for(let c=0;c<l;c++){const t=c*3,e=Math.random()*Math.PI*2,r=Math.random()*d+_,S=r/d*w,M=r/d;n[t]=1-M,n[t+1]=1-M,n[t+2]=1,u[c]=e,f[c]=r,s[t]=r*Math.cos(e),s[t+1]=r*Math.sin(e),s[t+2]=(Math.random()-.5)*S*2,a[c]=Math.random()<.01?.6:.05+Math.random()*.5}i.current.setAttribute("position",new A(s,3)),i.current.setAttribute("size",new A(a,1)),i.current.setAttribute("color",new A(n,3)),m.current=!0},[]),P=o.useCallback(s=>{if(!i.current||!m.current)return;const a=v.current,u=g.current,f=h.current,n=y.current,c=s*D;for(let t=0;t<l;t++){const e=t*3;u[t]+=Math.sqrt(F/f[t])*c,a[e]=f[t]*Math.cos(u[t]),a[e+1]=f[t]*Math.sin(u[t]);const r=f[t]/d;n[e]=1-r,n[e+1]=1-r,n[e+2]=1}try{const t=i.current.getAttribute("position"),e=i.current.getAttribute("color");if(t&&e){for(let r=0;r<a.length;r++)t.array[r]=a[r];for(let r=0;r<n.length;r++)e.array[r]=n[r];t.needsUpdate=!0,e.needsUpdate=!0}}catch(t){console.error("Error updating particle attributes:",t)}},[]);return o.useEffect(()=>{const s=setTimeout(()=>{x()},0);return()=>clearTimeout(s)},[x]),T((s,a)=>{const u=Math.min(a,.06);P(u)}),p.jsxs("points",{ref:C,frustumCulled:!0,children:[p.jsx("bufferGeometry",{ref:i}),p.jsx("shaderMaterial",{uniforms:{pointTexture:{value:R}},vertexShader:`
          attribute float size;
          varying float vSize;
          varying vec3 vColor;
          void main() {
            vSize = size;
            vColor = color;
            vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
            gl_PointSize = size * (300.0 / -mvPosition.z);
            gl_Position = projectionMatrix * mvPosition;
          }
        `,fragmentShader:`
          uniform sampler2D pointTexture;
          varying float vSize;
          varying vec3 vColor;
          void main() {
            float alpha = vSize * 3.0;
            gl_FragColor = vec4(vColor, alpha);
            gl_FragColor = gl_FragColor * texture2D(pointTexture, gl_PointCoord);
          }
        `,transparent:!0,vertexColors:!0})]})}export{L as default};
