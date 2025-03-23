import{b as e,h as S,u as z,j as p}from"./react-three-kig-QZXa.js";import{e as b,J as m,$ as w,a0 as _}from"./three-core-SiBjnJwv.js";const l=200,f=30,E=1,T=3,D=.1,F=1;function L(){const s=e.useRef(),x=S(_,"white.png");e.useMemo(()=>new b("rgb(255, 255, 255)"),[]);const A=e.useRef(new Float32Array(l*3)),C=e.useRef(new Float32Array(l)),v=e.useRef(new Float32Array(l)),g=e.useRef(new Float32Array(l)),h=e.useRef(new Float32Array(l*3)),y=e.useCallback(()=>{const i=A.current,c=C.current,u=v.current,d=g.current,n=h.current;for(let r=0;r<l;r++){const t=r*3,o=Math.random()*Math.PI*2,a=Math.random()*f+E,R=a/f*T,M=a/f;n[t]=1-M,n[t+1]=1-M,n[t+2]=1,u[r]=o,d[r]=a,i[t]=a*Math.cos(o),i[t+1]=a*Math.sin(o),i[t+2]=(Math.random()-.5)*R*2,c[r]=Math.random()<.01?.6:.05+Math.random()*.5}if(s.current){const r=new m(i,3);r.setUsage(w),s.current.setAttribute("position",r),s.current.setAttribute("size",new m(c,1)),s.current.setAttribute("color",new m(n,3))}},[]),P=e.useCallback(i=>{if(!s.current)return;const c=A.current,u=v.current,d=g.current,n=h.current,r=i*F;for(let t=0;t<l;t++){const o=t*3;u[t]+=Math.sqrt(D/d[t])*r,c[o]=d[t]*Math.cos(u[t]),c[o+1]=d[t]*Math.sin(u[t]);const a=d[t]/f;n[o]=1-a,n[o+1]=1-a,n[o+2]=1}s.current.attributes.position.needsUpdate=!0,s.current.attributes.color.needsUpdate=!0},[]);return e.useEffect(()=>{y()},[y]),z((i,c)=>{const u=Math.min(c,.06);P(u)}),p.jsxs("points",{frustumCulled:!0,children:[p.jsx("bufferGeometry",{ref:s}),p.jsx("shaderMaterial",{uniforms:{pointTexture:{value:x}},vertexShader:`
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
