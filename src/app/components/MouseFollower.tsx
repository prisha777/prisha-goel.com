import { useEffect, useRef } from 'react';

/** Decorative only: keyboard, touch and reduced-motion visitors retain native controls. */
export function MouseFollower() {
  const dot=useRef<HTMLDivElement>(null), ring=useRef<HTMLDivElement>(null);
  useEffect(()=>{
    const query=matchMedia('(hover: hover) and (pointer: fine) and (prefers-reduced-motion: no-preference)');
    let cleanup=()=>{};
    const configure=()=>{
      cleanup();
      if(!query.matches)return;
      let x=0,y=0,rx=0,ry=0,frame=0;
      const hide=()=>{document.documentElement.classList.remove('cursor-ready');cancelAnimationFrame(frame);frame=0;};
      const animate=()=>{
        rx+=(x-rx)*.2;ry+=(y-ry)*.2;
        if(ring.current)ring.current.style.transform=`translate3d(${rx}px,${ry}px,0)`;
        frame=Math.abs(x-rx)+Math.abs(y-ry)>.1?requestAnimationFrame(animate):0;
      };
      const move=(event:PointerEvent)=>{
        if(event.pointerType!=='mouse')return;
        x=event.clientX;y=event.clientY;
        if(!document.documentElement.classList.contains('cursor-ready')){rx=x;ry=y;document.documentElement.classList.add('cursor-ready');}
        if(dot.current)dot.current.style.transform=`translate3d(${x}px,${y}px,0)`;
        if(!frame)frame=requestAnimationFrame(animate);
        const target=event.target instanceof Element?event.target:null;
        ring.current?.classList.toggle('cursor-link',!!target?.closest('a,button,input,textarea,select'));
        ring.current?.classList.toggle('cursor-view',!!target?.closest('[data-cursor="view"]'));
      };
      document.addEventListener('pointermove',move,{passive:true});
      document.addEventListener('pointerleave',hide);
      window.addEventListener('blur',hide);
      cleanup=()=>{hide();document.removeEventListener('pointermove',move);document.removeEventListener('pointerleave',hide);window.removeEventListener('blur',hide);};
    };
    configure();query.addEventListener('change',configure);
    return ()=>{cleanup();query.removeEventListener('change',configure);};
  },[]);
  return <><div ref={dot} className="cursor-dot" aria-hidden="true"/><div ref={ring} className="cursor-ring" aria-hidden="true"><span>View</span></div></>;
}
