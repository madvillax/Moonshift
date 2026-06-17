"use client";

const blocks = [
  { x: 0,   y: 30,  w: 200, h: 80,  color: "#7DD3FC" },
  { x: 270, y: 0,   w: 300, h: 110, color: "#38BDF8" },
  { x: 370, y: 110, w: 120, h: 90,  color: "#0EA5E9" },
  { x: 0,   y: 120, w: 230, h: 100, color: "#2563EB" },
  { x: 230, y: 200, w: 220, h: 90,  color: "#60A5FA" },
  { x: 270, y: 300, w: 170, h: 80,  color: "#3B82F6" },
  { x: 0,   y: 300, w: 210, h: 80,  color: "#93C5FD" },
];

function Demo({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h2 className="text-xl font-medium text-white mb-1" style={{ fontFamily: "var(--font-dm-sans)" }}>{title}</h2>
        <p className="text-sm text-[#A0A0A0]">{description}</p>
      </div>
      <div className="relative overflow-hidden bg-[#0A0A0A] border border-[#222] h-[440px] w-full">{children}</div>
    </div>
  );
}

// ─── I3 ORIGINAL (reference) ──────────────────────────────────────────────
const cssRef = `
@keyframes ref-step {
  0%   {transform:translate(0,0)}   12.5%{transform:translate(8px,0)}
  25%  {transform:translate(8px,-8px)} 37.5%{transform:translate(0,-8px)}
  50%  {transform:translate(-8px,-8px)} 62.5%{transform:translate(-8px,0)}
  75%  {transform:translate(-8px,8px)} 87.5%{transform:translate(0,8px)}
  100% {transform:translate(0,0)}
}
@keyframes ref-blink { 0%,49%,51%,100%{opacity:1} 50%{opacity:0} }
`;
function Ref() {
  return (
    <div className="absolute inset-0">
      <style>{cssRef}</style>
      {blocks.map((b, i) => (
        <div key={i} className="absolute" style={{ left:b.x, top:b.y, width:b.w, height:b.h, backgroundColor:b.color, animation:`ref-step ${1.6+i*0.2}s steps(1) infinite`, animationDelay:`${i*0.18}s` }}>
          <div className="absolute top-0 right-0 w-[8px] h-[8px] bg-white/60" style={{ animation:`ref-blink ${0.4+i*0.1}s step-start infinite`, animationDelay:`${i*0.2}s` }} />
        </div>
      ))}
    </div>
  );
}

// ─── J1: SIGNAL WAVE — shift propagates block-to-block like a pulse ────────
const cssJ1 = `
@keyframes j1-pulse {
  0%,15%,100% { transform:translate(0,0); }
  3%  { transform:translate(6px,0); }
  6%  { transform:translate(6px,-6px); }
  10% { transform:translate(0,-6px); }
}
@keyframes j1-color {
  0%,15%,100% { filter:brightness(1); }
  3%,10%      { filter:brightness(1.15); }
}
`;
function J1() {
  return (
    <div className="absolute inset-0">
      <style>{cssJ1}</style>
      {blocks.map((b, i) => (
        <div key={i} className="absolute" style={{
          left:b.x, top:b.y, width:b.w, height:b.h, backgroundColor:b.color,
          animation:`j1-pulse 7s steps(1) infinite, j1-color 7s steps(1) infinite`,
          animationDelay:`${i * 0.55}s`,
        }} />
      ))}
    </div>
  );
}

// ─── J2: GLITCH BURST — long idle then sudden multi-step spasm ────────────
const cssJ2 = `
@keyframes j2-burst {
  0%,60%,100%  { transform:translate(0,0); }
  62%  { transform:translate(24px,0); }
  64%  { transform:translate(24px,16px); }
  66%  { transform:translate(-16px,16px); }
  68%  { transform:translate(-16px,-8px); }
  70%  { transform:translate(8px,-8px); }
  72%  { transform:translate(8px,0); }
  74%  { transform:translate(0,0); }
}
@keyframes j2-flash {
  0%,60%,75%,100% { opacity:1; }
  61%,63%,65%,67%,69%,71%,73% { opacity:0.3; }
  62%,64%,66%,68%,70%,72%     { opacity:1; }
}
`;
function J2() {
  return (
    <div className="absolute inset-0">
      <style>{cssJ2}</style>
      {blocks.map((b, i) => (
        <div key={i} className="absolute" style={{
          left:b.x, top:b.y, width:b.w, height:b.h, backgroundColor:b.color,
          animation:`j2-burst ${2.4+i*0.15}s steps(1) infinite, j2-flash ${2.4+i*0.15}s steps(1) infinite`,
          animationDelay:`${i*0.22}s`,
        }} />
      ))}
    </div>
  );
}

// ─── J3: COUNTER-MARCH — odd/even blocks shift in opposite directions ──────
const cssJ3 = `
@keyframes j3-odd {
  0%   {transform:translate(0,0)}    16%{transform:translate(12px,0)}
  33%  {transform:translate(12px,-12px)} 50%{transform:translate(0,-12px)}
  66%  {transform:translate(-12px,-12px)} 83%{transform:translate(-12px,0)}
  100% {transform:translate(0,0)}
}
@keyframes j3-even {
  0%   {transform:translate(0,0)}    16%{transform:translate(-12px,0)}
  33%  {transform:translate(-12px,12px)} 50%{transform:translate(0,12px)}
  66%  {transform:translate(12px,12px)}  83%{transform:translate(12px,0)}
  100% {transform:translate(0,0)}
}
`;
function J3() {
  return (
    <div className="absolute inset-0">
      <style>{cssJ3}</style>
      {blocks.map((b, i) => (
        <div key={i} className="absolute" style={{
          left:b.x, top:b.y, width:b.w, height:b.h, backgroundColor:b.color,
          animation:`${i%2===0?"j3-odd":"j3-even"} ${2+i*0.1}s steps(1) infinite`,
          animationDelay:`${i*0.1}s`,
        }} />
      ))}
    </div>
  );
}

// ─── J4: TYPEWRITER ROW — blocks build left→right 1 row at a time ─────────
const cssJ4 = `
@keyframes j4-type {
  0%,100% { transform:scaleX(0); opacity:0; transform-origin:left center; }
  10%     { transform:scaleX(1); opacity:1; transform-origin:left center; }
  80%     { transform:scaleX(1); opacity:1; }
  90%     { transform:scaleX(0); opacity:0; transform-origin:right center; }
}
@keyframes j4-cursor {
  0%,49%,51%,100%{opacity:1} 50%{opacity:0}
}
`;
function J4() {
  return (
    <div className="absolute inset-0">
      <style>{cssJ4}</style>
      {blocks.map((b, i) => (
        <div key={i} className="absolute overflow-hidden" style={{ left:b.x, top:b.y, width:b.w, height:b.h }}>
          <div style={{
            position:"absolute", inset:0, backgroundColor:b.color,
            animation:`j4-type 3s steps(1) infinite`,
            animationDelay:`${i*0.38}s`,
            transformOrigin:"left center",
          }} />
          {/* blinking cursor bar at right edge */}
          <div style={{
            position:"absolute", top:0, right:0, width:4, height:"100%", backgroundColor:"white",
            animation:`j4-cursor 0.5s step-start infinite`,
            animationDelay:`${i*0.38}s`,
          }} />
        </div>
      ))}
    </div>
  );
}

export default function TestAnimationsPage() {
  return (
    <div className="min-h-screen bg-[#050505] px-8 py-16">
      <div className="max-w-[1100px] mx-auto">
        <div className="mb-12">
          <p className="text-[11px] font-mono tracking-[0.2em] text-[#555] uppercase mb-3">Bit shift — variations</p>
          <h1 className="text-4xl font-medium text-white" style={{ fontFamily:"var(--font-dm-sans)" }}>4 variations</h1>
        </div>
        <div className="grid grid-cols-1 gap-16">
          <Demo title="I3 — Original (reference)" description="8px grid march, clockwise, steps(1). The one you liked."><Ref /></Demo>
          <Demo title="J1 — Signal wave" description="Shift propagates block-to-block sequentially — like a pulse travelling through the grid."><J1 /></Demo>
          <Demo title="J2 — Glitch burst" description="Long idle, then sudden 7-step spasm with opacity flicker, then snap back to rest."><J2 /></Demo>
          <Demo title="J3 — Counter-march" description="Odd blocks orbit clockwise, even blocks orbit counter-clockwise simultaneously."><J3 /></Demo>
          <Demo title="J4 — Typewriter" description="Each block types in left→right with steps(1), holds, then erases right→left. Cursor blinks at edge."><J4 /></Demo>
        </div>
      </div>
    </div>
  );
}
