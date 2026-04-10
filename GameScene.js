// Pokemon Familia - GameScene.js
// Fotos cargadas desde /photos/ - sin base64

const PHOTO_KEYS = [‘pedro’,‘raquel’,‘raquelita’,‘gaston’,‘tote’,‘jl’,‘isa’,‘andres’,‘pilar’,‘ana’,‘pilar_m’];

const GYM_LEADERS = [
{ id:‘tote’,   name:‘Tote’,      photo:‘tote’,    color:0x3498db, badge:‘Agua’,
pokemon:{name:‘Gaston’,    hp:90,  atk:55, def:50},
dialog:‘Tote y Gaston os esperaban! Preparaos para mojarse!’,
defeat:‘Increible! Toma la Medalla Ola. Gaston, para de ladrar.’,
moves:[‘Pistola Agua’,‘Piragua Extrema’,‘Ladrido’,‘Surf’] },
{ id:‘jl’,     name:‘Jose Luis’, photo:‘jl’,      color:0xa08060, badge:‘Roca’,
pokemon:{name:‘Chatot’,    hp:75,  atk:50, def:65},
dialog:‘Hoy os explicare la diferencia entre basalto, granito y marmol. Hay examen.’,
defeat:‘Bien… Toma la Medalla Granito. Os explicare el cuarzo otro dia.’,
moves:[‘Lecture’,‘Geologia’,‘Opinion’,‘Roca Afilada’] },
{ id:‘isa’,    name:‘Isa’,       photo:‘isa’,     color:0x27ae60, badge:‘Planta’,
pokemon:{name:‘Chansey’,   hp:200, atk:30, def:45},
dialog:‘Holiii! Un besazo enorme! Vengo desde Plasencia para daros una paliza con carino!’,
defeat:‘Ay que guapos! Medalla Cura. Un besazo a todos!’,
moves:[‘Besazo Toxico’,‘Desde Plasencia’,‘Cura Total’,‘Enredadera’] },
{ id:‘andres’, name:‘Andres’,    photo:‘andres’,  color:0xe74c3c, badge:‘Lucha’,
pokemon:{name:‘Heracross’, hp:95,  atk:85, def:70},
dialog:‘Lleveis 40min de espera. Estaba en quirofano. Empezamos? Tengo guardia a las 20h.’,
defeat:‘Bien luchado. Medalla Fuerza. Tengo que volver al hospital.’,
moves:[‘Mega-cuerno’,‘Bisturi X’,‘Torbellino’,‘Corte Preciso’] },
{ id:‘pilar’,  name:‘Pilar’,     photo:‘pilar’,   color:0xe67e22, badge:‘Fuego’,
pokemon:{name:‘Chansey S’, hp:120, atk:75, def:65},
dialog:‘Lleveis retraso. Yo ya habia terminado, aparque y todo.’,
defeat:‘Bien. Medalla Llama. Yo ya me iba de todas formas.’,
moves:[‘Espada de Fuego’,‘Llamarada’,‘Corte Rapido’,‘Calor’] },
{ id:‘raquel’, name:‘Raquel’,    photo:‘raquel’,  color:0x9b59b6, badge:‘Psiquico’,
pokemon:{name:‘Raquelita’, hp:80,  atk:60, def:55},
dialog:‘Raquelita y yo llevamos 3 semanas preparando esto. Ella dormia pero da igual.’,
defeat:‘Increible! Medalla Psiquica. Raquelita dice babababa.’,
moves:[‘Lanza Comida’,‘Telekinesis’,‘Coco Power’,‘Llanto’] },
];

const ELITE = [
{ id:‘ana’,     name:‘Ana’,    photo:‘ana’,     title:‘Campeona Liga’,
color:0x2c3e50, badge:‘Corona’,
pokemon:{name:‘Dragon Oscuro’, hp:180, atk:90, def:80},
dialog:‘Has derrotado los 6 gimnasios. Nadie llega hasta mi sin arrepentirse. Soy Ana.’,
defeat:‘Impresionante. Toma la Medalla Suprema.’,
moves:[‘Enfado Materno’,‘Mirada Fulminante’,‘Silencio Absoluto’,‘Dragon Maestro’] },
{ id:‘pilar_m’, name:‘Pilar’,  photo:‘pilar_m’, title:‘Gran Campeona’,
color:0x8e44ad, badge:‘Diamante’,
pokemon:{name:‘Leviatan’,      hp:220, atk:100,def:90},
dialog:‘Creias que habias ganado? Las suegras nunca perdemos. Preparate!’,
defeat:‘No puede ser. Eres el Campeon! La Varita de Merlin es tuya.’,
moves:[‘Poder Suegra’,‘Combo Doble’,‘Ola Final’,‘Juicio’] },
];

const POKEMON_DATA = {
slowpoke:  {name:‘Slowpoke’,  hp:90, atk:35,def:60, moves:[‘Confusion’,‘Bofetada’,‘Amnesia’,‘Surf’]},
raquelita: {name:‘Raquelita’, hp:60, atk:45,def:40, moves:[‘Comida suelo’,‘Llanto’,‘Siesta’,‘Coco Power’], photo:‘raquelita’},
gaston:    {name:‘Gaston’,    hp:80, atk:70,def:50, moves:[‘Mordisco’,‘Ladrido’,‘Hueso’,‘Piragua’], photo:‘gaston’},
chatot:    {name:‘Chatot’,    hp:65, atk:55,def:35, moves:[‘Parloteo’,‘Conferencia’,‘Geologia’,‘Opinion’]},
chansey:   {name:‘Chansey’,   hp:250,atk:25,def:30, moves:[‘Egg Bomb’,‘Te hirviendo’,‘Besazo’,‘Desde Plasencia’]},
chansey_s: {name:‘Chansey S’, hp:200,atk:45,def:55, moves:[‘Espada’,‘Curacion’,‘Estrategia’,‘Doble golpe’]},
heracross: {name:‘Heracross’, hp:80, atk:85,def:65, moves:[‘Mega-cuerno’,‘Tijera X’,‘Curacion’,‘Torbellino’]},
};

const TRAINERS = [
{id:‘pedro’,  name:‘Pedro’,    photo:‘pedro’,   pokemon:‘slowpoke’,  color:’#f1c40f’},
{id:‘raquel’, name:‘Raquel’,   photo:‘raquel’,  pokemon:‘raquelita’, color:’#e84040’},
{id:‘tote’,   name:‘Tote’,     photo:‘tote’,    pokemon:‘gaston’,    color:’#9b59b6’},
{id:‘andres’, name:‘Andres’,   photo:‘andres’,  pokemon:‘heracross’, color:’#3498db’},
{id:‘pilar’,  name:‘Pilar’,    photo:‘pilar’,   pokemon:‘chansey_s’, color:’#e74c3c’},
{id:‘jl’,     name:‘Jose Luis’,photo:‘jl’,      pokemon:‘chatot’,    color:’#f39c12’},
{id:‘isa’,    name:‘Isa’,      photo:‘isa’,     pokemon:‘chansey’,   color:’#27ae60’},
];

const PEDRO_LINES = [
‘Consejo: si ves hierba alta ve corriendo. Los Pokemon no te ven. (INCORRECTO)’,
‘El gimnasio de Tote esta al norte. O al sur. Uno de los dos.’,
‘Yo tambien tengo Slowpoke. Una vez me dijo algo importante pero tarde tanto que me fui.’,
‘El truco para las batallas es atacar cuando el rival no ataca. Lo descubri yo solo.’,
‘Mi madre dice que soy muy listo. Aunque no encuentro la chaqueta de esqui.’,
];

const MAP_TOWN = [
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
[1,5,5,5,4,4,4,0,0,0,0,0,0,0,2,2,0,1],
[1,5,5,5,4,0,0,0,0,0,0,0,0,0,2,2,0,1],
[1,6,6,6,4,0,0,0,2,2,0,0,0,0,0,0,0,1],
[1,4,4,4,4,0,0,2,2,2,2,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,2,2,0,0,0,0,0,0,0,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,9,1],
[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1],
[1,3,3,4,0,0,0,0,0,0,0,0,2,2,0,0,0,1],
[1,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4,0,1],
[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
];

const GYM_POS = [{x:1,y:1},{x:4,y:1},{x:8,y:1},{x:2,y:8},{x:12,y:8},{x:15,y:8}];

export class GameScene extends Phaser.Scene {
constructor() { super(‘GameScene’); }

preload() {
PHOTO_KEYS.forEach(k => {
this.load.image(k, ‘/photos/’ + k + ‘.jpg’);
});
}

create() {
this.gs = {
screen: ‘intro’,
trainer: null, pokemon: null, pokeHP: 0,
defeatedGyms: [], gold: 0, score: 0, steps: 0,
inventory: { potion: 3, superPotion: 1 },
battle: null,
playerX: 2, playerY: 6,
};
this.W = this.scale.width;
this.H = this.scale.height;
this.T = 36;
this.showIntro();
}

clearAll() {
this.children.list.slice().forEach(c => c.destroy());
}

addBtn(x, y, label, bg, fgHex, cb, w, h) {
w = w || 200; h = h || 44;
const sh = this.add.graphics();
sh.fillStyle(Math.floor(bg * 0.5), 1);
sh.fillRect(x-w/2+3, y-h/2+3, w, h);
const g = this.add.graphics();
g.fillStyle(bg, 1);
g.fillRect(x-w/2, y-h/2, w, h);
g.setInteractive(new Phaser.Geom.Rectangle(x-w/2, y-h/2, w, h), Phaser.Geom.Rectangle.Contains);
g.on(‘pointerdown’, cb);
this.add.text(x, y, label, {
fontSize: ‘13px’, color: fgHex, fontFamily: ‘Courier New’, fontStyle: ‘bold’, align: ‘center’
}).setOrigin(0.5);
}

photoCircle(x, y, key, r, borderColor) {
try {
if (!this.textures.exists(key)) return null;
const mask = this.add.graphics();
mask.fillCircle(x, y, r);
const img = this.add.image(x, y, key).setDisplaySize(r*2, r*2);
img.setMask(mask.createGeometryMask());
const border = this.add.graphics();
border.lineStyle(3, borderColor || 0xc9a84c, 1);
border.strokeCircle(x, y, r+2);
return img;
} catch(e) { return null; }
}

showIntro() {
this.clearAll();
const W = this.W, H = this.H;
const bg = this.add.graphics();
bg.fillGradientStyle(0x0a0418, 0x0a0418, 0x180830, 0x180830, 1);
bg.fillRect(0, 0, W, H);
for (let i = 0; i < 40; i++) {
const s = this.add.circle(
Phaser.Math.Between(0,W), Phaser.Math.Between(0,H*0.8),
Phaser.Math.Between(1,2), 0xffffff, 0.7
);
this.tweens.add({targets:s, alpha:0.1, yoyo:true, repeat:-1, duration:Phaser.Math.Between(1000,3000)});
}
const wand = this.add.text(W/2, H*0.18, ‘\uD83E\uDE84’, {fontSize:‘64px’}).setOrigin(0.5);
this.tweens.add({targets:wand, y:H*0.18-12, yoyo:true, repeat:-1, duration:2000, ease:‘Sine.easeInOut’});
this.add.text(W/2, H*0.34, ‘Pokemon’, {
fontSize:‘28px’, color:’#c9a84c’, fontFamily:‘Courier New’,
shadow:{blur:20, color:’#c9a84c’, fill:true}
}).setOrigin(0.5);
this.add.text(W/2, H*0.42, ‘Varita de Merlin’, {
fontSize:‘20px’, color:’#a78bfa’, fontFamily:‘Courier New’
}).setOrigin(0.5);
const infos = [
‘6 Gimnasios familiares’,
‘Liga: Ana + Pilar (Las Suegras)’,
‘Hierba alta = Pokemon salvajes’,
‘Pedro el NPC inutil’
];
infos.forEach((t,i) => {
this.add.text(W/2, H*0.54 + i*22, t, {
fontSize:‘12px’, color:’#a8b4c8’, fontFamily:‘Courier New’
}).setOrigin(0.5);
});
this.addBtn(W/2, H*0.84, ‘> NUEVA PARTIDA’, 0xc9a84c, ‘#1a1200’, () => this.showSelect());
this.gs.screen = ‘intro’;
}

showSelect() {
this.clearAll();
const W = this.W, H = this.H;
const bg = this.add.graphics(); bg.fillStyle(0x06020f,1); bg.fillRect(0,0,W,H);
this.add.text(W/2, 22, ‘ELIGE TU ENTRENADOR’, {
fontSize:‘13px’, color:’#c9a84c’, fontFamily:‘Courier New’, letterSpacing:3
}).setOrigin(0.5);
const cardW = (W-48)/2, cardH = 115;
TRAINERS.forEach((t, i) => {
const col = i%2, row = Math.floor(i/2);
const cx = 16 + col*(cardW+16), cy = 50 + row*(cardH+10);
const pk = POKEMON_DATA[t.pokemon];
const sel = this.gs.trainer && this.gs.trainer.id === t.id;
const cg = this.add.graphics();
cg.fillStyle(sel ? 0x1a1a08 : 0x0d0b18, 1);
cg.lineStyle(2, sel ? 0xc9a84c : 0x1e1c2e, 1);
cg.fillRoundedRect(cx,cy,cardW,cardH,8);
cg.strokeRoundedRect(cx,cy,cardW,cardH,8);
cg.setInteractive(new Phaser.Geom.Rectangle(cx,cy,cardW,cardH), Phaser.Geom.Rectangle.Contains);
cg.on(‘pointerdown’, () => {
this.gs.trainer = t;
this.gs.pokemon = POKEMON_DATA[t.pokemon];
this.gs.pokeHP = POKEMON_DATA[t.pokemon].hp;
this.showSelect();
});
this.photoCircle(cx+28, cy+32, t.photo, 22, sel ? 0xc9a84c : 0x2a2438);
this.add.text(cx+56, cy+14, t.name.toUpperCase(), {
fontSize:‘11px’, color:’#f0f0f0’, fontFamily:‘Courier New’, fontStyle:‘bold’
});
this.add.text(cx+56, cy+34, pk.name, {fontSize:‘10px’, color:t.color, fontFamily:‘Courier New’});
this.add.text(cx+8, cy+82, ‘HP:’+pk.hp+’ ATK:’+pk.atk, {
fontSize:‘9px’, color:’#6a6080’, fontFamily:‘Courier New’
});
});
if (this.gs.trainer) {
this.addBtn(W/2, H-52, ‘> EMPEZAR!’, 0xc9a84c, ‘#1a1200’, () => this.startGame());
}
this.gs.screen = ‘select’;
}

startGame() {
this.gs.defeatedGyms = [];
this.gs.gold = 0; this.gs.score = 0; this.gs.steps = 0;
this.gs.inventory = {potion:3, superPotion:1};
this.gs.pokeHP = this.gs.pokemon.hp;
this.gs.playerX = 2; this.gs.playerY = 6;
this.showMap();
}

drawTile(tg, x, y) {
const T = this.T;
const tile = MAP_TOWN[y] ? MAP_TOWN[y][x] : 0;
const COLORS = [0x78c038,0x706858,0x50a020,0x3878f0,0xe8c870,0xb83030,0xe060a0,0x8090b0,0xffffff,0x404060];
tg.fillStyle(COLORS[Math.min(tile,COLORS.length-1)],1);
tg.fillRect(x*T,y*T,T,T);
if (tile===0){tg.fillStyle(0x68b028,1);tg.fillRect(x*T+3,y*T+4,4,3);tg.fillRect(x*T+14,y*T+10,3,3);tg.fillRect(x*T+22,y*T+20,4,3);}
if (tile===2){tg.fillStyle(0x308008,1);tg.fillRect(x*T,y*T+T-8,T,8);[2,7,12,18,24,30].forEach(bx=>{tg.fillStyle(0x40900a,1);tg.fillRect(x*T+bx,y*T+T-22,2,14);tg.fillStyle(0x68b828,1);tg.fillRect(x*T+bx,y*T+T-22,2,3);});}
if (tile===3){tg.fillStyle(0x4888f8,1);tg.fillRect(x*T+2,y*T+2,T-4,T-4);tg.fillStyle(0x98c8ff,0.5);tg.fillRect(x*T+2,y*T+8,T-4,3);tg.fillRect(x*T+2,y*T+20,T-4,3);}
if (tile===4){tg.fillStyle(0xd8b858,1);tg.fillRect(x*T+1,y*T+1,T-2,T-2);}
if (tile===5){const rh=Math.floor(T*0.45);tg.fillStyle(0xb83030,1);tg.fillRect(x*T,y*T,T,rh);for(let r=0;r<rh;r+=3)tg.fillRect(x*T,y*T+r,T,1);tg.fillStyle(0xe8d8b0,1);tg.fillRect(x*T+2,y*T+rh,T-4,T-rh-2);tg.fillStyle(0x88c8f8,1);tg.fillRect(x*T+3,y*T+rh+3,7,6);tg.fillRect(x*T+T-10,y*T+rh+3,7,6);}
if (tile===6){const rh=Math.floor(T*0.42);tg.fillStyle(0xe060a0,1);tg.fillRect(x*T,y*T,T,rh);tg.fillStyle(0xe8d8b0,1);tg.fillRect(x*T+2,y*T+rh,T-4,T-rh-2);tg.fillStyle(0xff4060,1);tg.fillRect(x*T+T/2-1,y*T+rh+4,3,8);tg.fillRect(x*T+T/2-4,y*T+rh+7,8,3);}
if (tile===9){tg.fillStyle(0xf0d020,0.8);tg.fillRect(x*T+8,y*T+T/2-3,T-10,6);tg.fillRect(x*T+T-14,y*T+T/2-8,8,16);}
tg.lineStyle(0.5,0x000000,0.1);tg.strokeRect(x*T,y*T,T,T);
}

showMap() {
this.clearAll();
const W=this.W, H=this.H, T=this.T, gs=this.gs;
const mapAreaY=58, mapAreaH=H-58-165;
const oX=W/2-gs.playerX*T-T/2;
const oY=mapAreaY+mapAreaH/2-gs.playerY*T-T/2;

```
this.drawHUD();

const tg=this.add.graphics();
MAP_TOWN.forEach((row,ty)=>row.forEach((_,tx)=>{
  const px=oX+tx*T, py=oY+ty*T;
  if(py+T<mapAreaY||py>mapAreaY+mapAreaH) return;
  this.drawTile(tg,tx,ty);
}));
// Reposition graphics to offset
tg.x=oX; tg.y=oY;
// Override: draw properly positioned
tg.destroy();
MAP_TOWN.forEach((row,ty)=>row.forEach((_,tx)=>{
  const px=oX+tx*T, py=oY+ty*T;
  if(py+T<mapAreaY||py>mapAreaY+mapAreaH) return;
  const t=this.add.graphics();
  const tile=MAP_TOWN[ty][tx];
  const COLORS=[0x78c038,0x706858,0x50a020,0x3878f0,0xe8c870,0xb83030,0xe060a0,0x8090b0,0xffffff,0x404060];
  t.fillStyle(COLORS[Math.min(tile,COLORS.length-1)],1); t.fillRect(px,py,T,T);
  if(tile===0){t.fillStyle(0x68b028,1);t.fillRect(px+3,py+4,4,3);t.fillRect(px+14,py+10,3,3);t.fillRect(px+22,py+20,4,3);}
  if(tile===2){t.fillStyle(0x308008,1);t.fillRect(px,py+T-8,T,8);[2,7,12,18,24,30].forEach(bx=>{t.fillStyle(0x40900a,1);t.fillRect(px+bx,py+T-22,2,14);t.fillStyle(0x68b828,1);t.fillRect(px+bx,py+T-22,2,3);});}
  if(tile===3){t.fillStyle(0x4888f8,1);t.fillRect(px+2,py+2,T-4,T-4);t.fillStyle(0x98c8ff,0.5);t.fillRect(px+2,py+8,T-4,3);t.fillRect(px+2,py+20,T-4,3);}
  if(tile===4){t.fillStyle(0xd8b858,1);t.fillRect(px+1,py+1,T-2,T-2);}
  if(tile===5){const rh=Math.floor(T*0.45);t.fillStyle(0xb83030,1);t.fillRect(px,py,T,rh);for(let r=0;r<rh;r+=3)t.fillRect(px,py+r,T,1);t.fillStyle(0xe8d8b0,1);t.fillRect(px+2,py+rh,T-4,T-rh-2);t.fillStyle(0x88c8f8,1);t.fillRect(px+3,py+rh+3,7,6);t.fillRect(px+T-10,py+rh+3,7,6);}
  if(tile===6){const rh=Math.floor(T*0.42);t.fillStyle(0xe060a0,1);t.fillRect(px,py,T,rh);t.fillStyle(0xe8d8b0,1);t.fillRect(px+2,py+rh,T-4,T-rh-2);t.fillStyle(0xff4060,1);t.fillRect(px+T/2-1,py+rh+4,3,8);t.fillRect(px+T/2-4,py+rh+7,8,3);}
  if(tile===9){t.fillStyle(0xf0d020,0.8);t.fillRect(px+8,py+T/2-3,T-10,6);t.fillRect(px+T-14,py+T/2-8,8,16);}
  t.lineStyle(0.5,0x000000,0.1);t.strokeRect(px,py,T,T);
}));

GYM_POS.forEach((gp,idx)=>{
  const leader=GYM_LEADERS[idx];
  if(!leader||gs.defeatedGyms.includes(idx)) return;
  const gx=oX+gp.x*T+T/2, gy=oY+gp.y*T+T/2;
  if(gy<mapAreaY||gy>mapAreaY+mapAreaH) return;
  const colors=[0x3498db,0xa08060,0x27ae60,0xe74c3c,0xe67e22,0x9b59b6];
  this.photoCircle(gx,gy,leader.photo,T/2-3,colors[idx]||0xc9a84c);
  this.add.text(gx,gy-T/2+2,leader.badge,{fontSize:'9px',color:'#ffffff',fontFamily:'Courier New',fontStyle:'bold'}).setOrigin(0.5);
});

const npcs=[{x:2,y:2,text:'Bienvenido! Derrota los 6 gimnasios y llega a la Liga.'},{x:7,y:4,text:'Las dos senoras de la Liga son aterradoras...'}];
npcs.forEach(npc=>{
  const nx=oX+npc.x*T+T/2,ny=oY+npc.y*T+T/2;
  if(ny<mapAreaY||ny>mapAreaY+mapAreaH) return;
  this.add.text(nx,ny,'NPC',{fontSize:'10px',color:'#f0e080',fontFamily:'Courier New',fontStyle:'bold'}).setOrigin(0.5);
});

const pdx=oX+10*T+T/2, pdy=oY+5*T+T/2;
if(pdy>=mapAreaY&&pdy<=mapAreaY+mapAreaH){
  this.photoCircle(pdx,pdy-2,'pedro',15,0xf1c40f);
  this.add.text(pdx,pdy-T/2+2,'?',{fontSize:'16px',color:'#f1c40f',fontFamily:'Courier New',fontStyle:'bold'}).setOrigin(0.5);
}

const px=oX+gs.playerX*T+T/2, py=oY+gs.playerY*T+T/2;
this.add.ellipse(px,py+16,24,8,0x000000,0.3);
this.photoCircle(px,py-2,gs.trainer.photo,16,0xf0d080);

this.drawDPad(mapAreaY+mapAreaH);
gs.screen='map';
```

}

drawHUD() {
const W=this.W, gs=this.gs;
const hud=this.add.graphics();
hud.fillStyle(0x202030,1); hud.fillRect(0,0,W,56);
hud.lineStyle(3,0xc9a84c,1); hud.lineBetween(0,56,W,56);
if(!gs.trainer) return;
this.photoCircle(20,28,gs.trainer.photo,18,Phaser.Display.Color.HexStringToColor(gs.trainer.color).color);
this.add.text(46,8,gs.trainer.name+’ - ‘+gs.pokemon.name,{fontSize:‘11px’,color:’#c9a84c’,fontFamily:‘Courier New’,fontStyle:‘bold’});
const pct=gs.pokeHP/gs.pokemon.hp;
this.add.text(46,24,‘HP’,{fontSize:‘9px’,color:’#a8b4c8’,fontFamily:‘Courier New’});
const bb=this.add.graphics(); bb.fillStyle(0x404050,1); bb.fillRect(60,26,80,6);
const bf=this.add.graphics(); bf.fillStyle(pct>0.5?0x48d060:pct>0.2?0xf8c030:0xe82020,1); bf.fillRect(60,26,80*pct,6);
this.add.text(148,24,gs.pokeHP+’/’+gs.pokemon.hp,{fontSize:‘9px’,color:’#808090’,fontFamily:‘Courier New’});
const medals=gs.defeatedGyms.filter(i=>i<GYM_LEADERS.length).length;
this.add.text(W-8,10,‘Medallas: ‘+medals+’/6’,{fontSize:‘10px’,color:’#c9a84c’,fontFamily:‘Courier New’}).setOrigin(1,0);
this.add.text(W-8,28,’$’+gs.gold,{fontSize:‘10px’,color:’#f0d080’,fontFamily:‘Courier New’}).setOrigin(1,0);
}

drawDPad(startY) {
const W=this.W, sz=50, gap=4, cx=W*0.28, cy=startY+80;
[{l:‘U’,dx:0,dy:-1,x:cx,y:cy-sz-gap},{l:‘D’,dx:0,dy:1,x:cx,y:cy+sz+gap},{l:‘L’,dx:-1,dy:0,x:cx-sz-gap,y:cy},{l:‘R’,dx:1,dy:0,x:cx+sz+gap,y:cy}].forEach(d=>{
const bg=this.add.graphics(); bg.fillStyle(0x404060,1); bg.lineStyle(2,0x505070,1);
bg.fillCircle(d.x,d.y,sz/2); bg.strokeCircle(d.x,d.y,sz/2);
bg.setInteractive(new Phaser.Geom.Circle(d.x,d.y,sz/2),Phaser.Geom.Circle.Contains);
bg.on(‘pointerdown’,()=>this.movePlayer(d.dx,d.dy));
const arrows={U:’\u25B2’,D:’\u25BC’,L:’\u25C0’,R:’\u25B6’};
this.add.text(d.x,d.y,arrows[d.l],{fontSize:‘18px’,color:’#c0c8e0’}).setOrigin(0.5);
});
const cb=this.add.graphics(); cb.fillStyle(0x303048,1); cb.fillCircle(cx,cy,sz/2-2);
this.photoCircle(cx,cy,gs && gs.trainer ? gs.trainer.photo : ‘pedro’,16,0xc9a84c);
this.addBtn(W*0.75,cy,‘MOCHILA’,0x384060,0xc9a84c,()=>this.showBag(),90,40);
}

movePlayer(dx,dy) {
const gs=this.gs;
if(gs.screen!==‘map’) return;
const nx=gs.playerX+dx, ny=gs.playerY+dy;
if(ny<0||ny>=MAP_TOWN.length||nx<0||nx>=MAP_TOWN[0].length) return;
const tile=MAP_TOWN[ny][nx];
if(tile===1||tile===3) return;
if(tile===9){this.showDialog(null,‘Zona de Gimnasios coming soon!’,false,null);return;}
const npcs=[{x:2,y:2,text:‘Bienvenido! Derrota los 6 gimnasios.’},{x:7,y:4,text:‘Las dos senoras de la Liga son aterradoras…’}];
const npc=npcs.find(n=>n.x===nx&&n.y===ny);
if(npc){this.showDialog(null,npc.text,false,null);return;}
if(nx===10&&ny===5){this.showDialog(‘pedro’,PEDRO_LINES[Phaser.Math.Between(0,PEDRO_LINES.length-1)],false,null);return;}
const gIdx=GYM_POS.findIndex(g=>g.x===nx&&g.y===ny);
if(gIdx>=0&&!gs.defeatedGyms.includes(gIdx)){
const leader=GYM_LEADERS[gIdx];
this.showDialog(leader.photo,leader.dialog,true,()=>this.startBattle(‘gym’,gIdx));
return;
}
gs.playerX=nx; gs.playerY=ny; gs.steps++;
if(tile===2&&Math.random()<0.25){
const wilds=[{name:‘Serpiente’,hp:40,atk:20,def:15,moves:[‘Mordisco’,‘Veneno’],reward:50},{name:‘Buho’,hp:50,atk:25,def:20,moves:[‘Picotazo’,‘Hipnosis’],reward:60}];
this.startBattle(‘wild’,{…wilds[Phaser.Math.Between(0,wilds.length-1)]});
return;
}
this.showMap();
}

showDialog(photoKey,text,showFight,onFight) {
this.clearAll();
const W=this.W,H=this.H;
const bg=this.add.graphics(); bg.fillStyle(0x1a2810,1); bg.fillRect(0,0,W,H);
const aY=H*0.35;
if(photoKey&&this.textures.exists(photoKey)){this.photoCircle(W/2,aY,photoKey,52,0xc9a84c);}
else{this.add.text(W/2,aY,’?’,{fontSize:‘60px’}).setOrigin(0.5);}
const bY=H*0.56,bH=showFight?130:110;
const bb=this.add.graphics(); bb.fillStyle(0xe8f0c8,1); bb.lineStyle(4,0x303030,1); bb.fillRect(16,bY,W-32,bH); bb.strokeRect(16,bY,W-32,bH);
const inner=this.add.graphics(); inner.lineStyle(2,0x303030,1); inner.strokeRect(22,bY+6,W-44,bH-12);
this.add.text(30,bY+16,’> ‘+text,{fontSize:‘12px’,color:’#202020’,fontFamily:‘Courier New’,wordWrap:{width:W-64},lineSpacing:4});
if(showFight){
this.addBtn(W*0.38,bY+bH+28,‘COMBATIR’,0xb03030,’#ffffff’,onFight,130,38);
this.addBtn(W*0.72,bY+bH+28,‘SALIR’,0x303030,’#e8f0c8’,()=>this.showMap(),100,38);
}else{
this.addBtn(W/2,bY+bH+28,‘CONTINUAR’,0x303030,’#e8f0c8’,()=>this.showMap(),180,38);
}
this.gs.screen=‘dialog’;
}

startBattle(type,data) {
const gs=this.gs;
let enemy;
if(type===‘gym’){const l=GYM_LEADERS[data]; enemy={…l.pokemon,moves:l.moves,reward:200,gymIdx:data,leaderData:l,photo:l.photo};}
else{enemy={…data};}
gs.battle={type,enemy,playerHP:gs.pokeHP,enemyHP:enemy.hp,enemyMaxHP:enemy.hp,log:[‘Ha aparecido ‘+enemy.name+’!’],phase:‘choose’,atkBoost:0,defBoost:0};
this.showBattle();
}

showBattle() {
this.clearAll();
const W=this.W,H=this.H,gs=this.gs,bd=gs.battle,e=bd.enemy,poke=gs.pokemon;
const pPct=Math.max(0,bd.playerHP/poke.hp),ePct=Math.max(0,bd.enemyHP/bd.enemyMaxHP);
const done=[‘win’,‘lose’,‘fled’].includes(bd.phase);
const isLeader=bd.type===‘gym’||bd.type===‘elite’;
const sceneH=H*0.52;
const hpC=p=>p>0.5?0x48d060:p>0.2?0xf8c030:0xe82020;

```
const sky=this.add.graphics(); sky.fillGradientStyle(0x80b8e8,0x80b8e8,0xb8d8f0,0xb8d8f0,1); sky.fillRect(0,0,W,sceneH*0.5);
const gnd=this.add.graphics(); gnd.fillGradientStyle(0x90c848,0x90c848,0x68a030,0x68a030,1); gnd.fillRect(0,sceneH*0.42,W,sceneH*0.58);
const ep=this.add.graphics(); ep.fillStyle(0x90c050,1); ep.fillEllipse(W*0.72,sceneH*0.32,W*0.38,14); ep.fillStyle(0x68a030,1); ep.fillEllipse(W*0.72,sceneH*0.34,W*0.38,8);
const pp=this.add.graphics(); pp.fillStyle(0x78b840,1); pp.fillEllipse(W*0.26,sceneH*0.62,W*0.44,18); pp.fillStyle(0x508030,1); pp.fillEllipse(W*0.26,sceneH*0.65,W*0.44,10);

const ehs=this.add.graphics(); ehs.fillStyle(0x303030,1); ehs.fillRect(11,11,170,56);
const ehb=this.add.graphics(); ehb.fillStyle(0xffffff,0.95); ehb.lineStyle(3,0x303030,1); ehb.fillRect(8,8,170,56); ehb.strokeRect(8,8,170,56); ehb.setDepth(1);
this.add.text(14,14,e.name.toUpperCase(),{fontSize:'12px',color:'#202020',fontFamily:'Courier New',fontStyle:'bold'}).setDepth(2);
const ebb=this.add.graphics().setDepth(2); ebb.fillStyle(0x808080,1); ebb.fillRect(28,34,120,8);
const ebf=this.add.graphics().setDepth(2); ebf.fillStyle(hpC(ePct),1); ebf.fillRect(28,34,120*ePct,8);
this.add.text(14,46,bd.enemyHP+'/'+bd.enemyMaxHP,{fontSize:'9px',color:'#606060',fontFamily:'Courier New'}).setDepth(2);

const eSX=W*0.74,eSY=sceneH*0.2;
if(isLeader&&e.photo&&this.textures.exists(e.photo)){
  const img=this.photoCircle(eSX,eSY,e.photo,44,0xcc2020);
  if(img)img.setAlpha(bd.enemyHP<=0?0.1:1);
}else{
  this.add.text(eSX,eSY,e.name.charAt(0),{fontSize:'52px',color:'#f0f0f0',fontFamily:'Courier New',fontStyle:'bold'}).setOrigin(0.5).setAlpha(bd.enemyHP<=0?0.1:1);
}

const pSX=W*0.22,pSY=sceneH*0.56;
if(poke.photo&&this.textures.exists(poke.photo)){
  const img=this.photoCircle(pSX,pSY,poke.photo,56,0xc9a84c);
  if(img)img.setAlpha(bd.playerHP<=0?0.15:1);
}else{
  this.add.text(pSX,pSY,poke.name.charAt(0),{fontSize:'68px',color:'#f0f0f0',fontFamily:'Courier New',fontStyle:'bold'}).setOrigin(0.5).setAlpha(bd.playerHP<=0?0.15:1);
}

const pHY=sceneH-66;
const phs=this.add.graphics(); phs.fillStyle(0x303030,1); phs.fillRect(W-183,pHY+3,178,62);
const phb=this.add.graphics(); phb.fillStyle(0xffffff,0.95); phb.lineStyle(3,0x303030,1); phb.fillRect(W-186,pHY,178,62); phb.strokeRect(W-186,pHY,178,62); phb.setDepth(1);
this.add.text(W-180,pHY+6,poke.name.toUpperCase(),{fontSize:'12px',color:'#202020',fontFamily:'Courier New',fontStyle:'bold'}).setDepth(2);
const pbb=this.add.graphics().setDepth(2); pbb.fillStyle(0x808080,1); pbb.fillRect(W-162,pHY+26,120,8);
const pbf=this.add.graphics().setDepth(2); pbf.fillStyle(hpC(pPct),1); pbf.fillRect(W-162,pHY+26,120*pPct,8);
this.add.text(W-180,pHY+42,bd.playerHP+'/'+poke.hp,{fontSize:'10px',color:'#404040',fontFamily:'Courier New',fontStyle:'bold'}).setDepth(2);

const uiY=sceneH;
const uiBg=this.add.graphics(); uiBg.fillStyle(0xe8f0c8,1); uiBg.lineStyle(4,0x303030,1); uiBg.fillRect(0,uiY,W,H-uiY); uiBg.lineBetween(0,uiY,W,uiY);
const logBg=this.add.graphics(); logBg.fillStyle(0xf0f8d8,1); logBg.lineStyle(3,0x303030,1); logBg.fillRect(0,uiY,W,54); logBg.strokeRect(0,uiY,W,54);
bd.log.slice(-2).forEach((l,i)=>{this.add.text(12,uiY+8+i*22,(i===0&&bd.log.length>1?'  ':'> ')+l,{fontSize:'11px',color:'#202020',fontFamily:'Courier New',wordWrap:{width:W-24}});});

const aY=uiY+60;
if(!done&&bd.phase==='choose'){
  const moves=poke.moves||['Ataque','Defensa','Especial','Huir'];
  moves.forEach((m,i)=>{
    const col=i%2,row=Math.floor(i/2),bx=col===0?0:W/2,by=aY+row*46;
    const bg=this.add.graphics(); bg.fillStyle(col===0?0xd8e8b0:0xcce0a8,1); bg.fillRect(bx,by,W/2,44);
    bg.setInteractive(new Phaser.Geom.Rectangle(bx,by,W/2,44),Phaser.Geom.Rectangle.Contains);
    bg.on('pointerdown',()=>this.doMove(i));
    this.add.text(bx+8,by+8,'> '+m,{fontSize:'11px',color:'#202020',fontFamily:'Courier New',fontStyle:'bold'});
  });
  const iY=aY+92;
  const p1=this.add.graphics(); p1.fillStyle(gs.inventory.potion>0?0xc8e0a0:0xb8c890,1); p1.fillRect(0,iY,W/2-1,38);
  p1.setInteractive(new Phaser.Geom.Rectangle(0,iY,W/2-1,38),Phaser.Geom.Rectangle.Contains);
  p1.on('pointerdown',()=>gs.inventory.potion>0&&this.useItem('potion'));
  this.add.text(8,iY+8,'Pocion +20HP x'+gs.inventory.potion,{fontSize:'10px',color:'#203010',fontFamily:'Courier New',fontStyle:'bold'});
  const p2=this.add.graphics(); p2.fillStyle(gs.inventory.superPotion>0?0xb0d0e8:0xa0b8c8,1); p2.fillRect(W/2+1,iY,W/2-(bd.type==='wild'?40:2),38);
  p2.setInteractive(new Phaser.Geom.Rectangle(W/2+1,iY,W/2-2,38),Phaser.Geom.Rectangle.Contains);
  p2.on('pointerdown',()=>gs.inventory.superPotion>0&&this.useItem('superPotion'));
  this.add.text(W/2+9,iY+8,'Super +50HP x'+gs.inventory.superPotion,{fontSize:'10px',color:'#102030',fontFamily:'Courier New',fontStyle:'bold'});
  if(bd.type==='wild'){
    const fb=this.add.graphics(); fb.fillStyle(0xe8a8a0,1); fb.fillRect(W-40,iY,40,38);
    fb.setInteractive(new Phaser.Geom.Rectangle(W-40,iY,40,38),Phaser.Geom.Rectangle.Contains);
    fb.on('pointerdown',()=>this.doFlee());
    this.add.text(W-20,iY+19,'Huir',{fontSize:'10px',color:'#601010',fontFamily:'Courier New',fontStyle:'bold'}).setOrigin(0.5);
  }
}else if(bd.phase==='enemy'){
  this.add.text(W/2,aY+30,'...',{fontSize:'28px',color:'#303030'}).setOrigin(0.5);
  this.add.text(W/2,aY+70,e.name.toUpperCase()+' ataca...',{fontSize:'12px',color:'#303030',fontFamily:'Courier New'}).setOrigin(0.5);
}else if(done){
  const rC=bd.phase==='win'?0xc8e8a0:bd.phase==='lose'?0xf0c8c0:0xf0e8a0;
  const rb=this.add.graphics(); rb.fillStyle(rC,1); rb.fillRect(0,aY,W,90);
  this.add.text(W/2,aY+20,bd.phase==='win'?'VICTORIA!':bd.phase==='lose'?'DERROTA':'ESCAPASTE',{fontSize:'18px',color:'#202020',fontFamily:'Courier New',fontStyle:'bold'}).setOrigin(0.5);
  const msg=bd.phase==='win'?e.name+' se debilito!':bd.phase==='lose'?poke.name+' se debilito!':'Has escapado!';
  this.add.text(W/2,aY+52,msg,{fontSize:'12px',color:'#202020',fontFamily:'Courier New'}).setOrigin(0.5);
  if(bd.phase==='win'&&isLeader&&e.leaderData){this.add.text(W/2,aY+74,e.leaderData.defeat,{fontSize:'10px',color:'#304010',fontFamily:'Courier New',wordWrap:{width:W-24}}).setOrigin(0.5);}
  const bb2=this.add.graphics(); bb2.fillStyle(0x303030,1); bb2.fillRect(0,H-50,W,50);
  bb2.setInteractive(new Phaser.Geom.Rectangle(0,H-50,W,50),Phaser.Geom.Rectangle.Contains);
  bb2.on('pointerdown',()=>{if(bd.phase==='lose')gs.pokeHP=Math.max(10,Math.floor(poke.hp*0.1));else gs.pokeHP=bd.playerHP;this.showMap();});
  this.add.text(W/2,H-25,'>> VOLVER AL MAPA',{fontSize:'13px',color:'#e8f0c8',fontFamily:'Courier New',fontStyle:'bold'}).setOrigin(0.5);
}
gs.screen='battle';
```

}

doMove(idx) {
const gs=this.gs,bd=gs.battle;
if(!bd||bd.phase!==‘choose’) return;
const dmgR=[[14,22],[0,0],[20,30],[28,38]];
const m=gs.pokemon.moves[idx]||‘Ataque’;
const dmg=Phaser.Math.Between(dmgR[idx][0],dmgR[idx][1]);
if(dmgR[idx][0]===0){bd.playerHP=Math.min(gs.pokemon.hp,bd.playerHP+30);bd.log.push(gs.pokemon.name+’: +30HP!’);}
else{bd.enemyHP=Math.max(0,bd.enemyHP-dmg);bd.log.push(gs.pokemon.name+’ ‘+m+’: ‘+dmg+’ dmg!’);}
gs.pokeHP=bd.playerHP;
if(bd.enemyHP<=0){
const r=bd.enemy.reward||50;gs.gold+=r;gs.score+=r;
bd.log.push(bd.enemy.name+’ se debilito! +’+r+’$’);
if(bd.type===‘gym’&&bd.enemy.gymIdx!==undefined)gs.defeatedGyms.push(bd.enemy.gymIdx);
bd.phase=‘win’;this.showBattle();return;
}
bd.phase=‘enemy’;this.showBattle();
this.time.delayedCall(900,()=>{
if(!gs.battle||gs.battle.phase!==‘enemy’) return;
const ea=bd.enemy.atk||20;
const ed=Math.max(4,Phaser.Math.Between(Math.floor(ea*0.7),Math.floor(ea*1.3)));
bd.playerHP=Math.max(0,bd.playerHP-ed);gs.pokeHP=bd.playerHP;
const em=(bd.enemy.moves||[‘Ataque’])[Phaser.Math.Between(0,(bd.enemy.moves||[‘Ataque’]).length-1)];
bd.log.push(bd.enemy.name+’ ‘+em+’: ‘+ed+’ dmg!’);
if(bd.playerHP<=0){bd.log.push(gs.pokemon.name+’ se debilito!’);bd.phase=‘lose’;}
else bd.phase=‘choose’;
this.showBattle();
});
}

useItem(item) {
const gs=this.gs,bd=gs.battle;
if(!bd||bd.phase!==‘choose’||gs.inventory[item]<=0) return;
const a=item===‘potion’?20:50;
bd.playerHP=Math.min(gs.pokemon.hp,bd.playerHP+a);gs.pokeHP=bd.playerHP;
gs.inventory[item]–;bd.log.push(‘Pocion: +’+a+‘HP’);bd.phase=‘enemy’;this.showBattle();
this.time.delayedCall(900,()=>{
if(!gs.battle||gs.battle.phase!==‘enemy’) return;
const ea=bd.enemy.atk||20;
const ed=Math.max(4,Phaser.Math.Between(Math.floor(ea*0.7),Math.floor(ea*1.3)));
bd.playerHP=Math.max(0,bd.playerHP-ed);gs.pokeHP=bd.playerHP;
bd.log.push(bd.enemy.name+’: ‘+ed+’ dmg!’);
if(bd.playerHP<=0){bd.log.push(gs.pokemon.name+’ se debilito!’);bd.phase=‘lose’;}
else bd.phase=‘choose’;
this.showBattle();
});
}

doFlee() {
const bd=this.gs.battle;
if(!bd||bd.phase!==‘choose’||bd.type!==‘wild’) return;
if(Math.random()<0.6){bd.log.push(‘Has escapado!’);bd.phase=‘fled’;}
else{bd.log.push(‘No has podido escapar!’);}
this.showBattle();
}

showBag() {
const gs=this.gs,W=this.W,H=this.H;
const ov=this.add.graphics(); ov.fillStyle(0x000000,0.75); ov.fillRect(0,0,W,H);
ov.setInteractive(new Phaser.Geom.Rectangle(0,0,W,H),Phaser.Geom.Rectangle.Contains);
ov.on(‘pointerdown’,()=>{ov.destroy();});
const maxHP=gs.pokemon.hp;
const pb=this.add.graphics(); pb.fillStyle(0xe8f0c8,1); pb.lineStyle(3,0x303030,1); pb.fillRect(16,H*0.55,W-32,H*0.42); pb.strokeRect(16,H*0.55,W-32,H*0.42);
this.add.text(24,H*0.55+14,‘MOCHILA’,{fontSize:‘14px’,color:’#202020’,fontFamily:‘Courier New’,fontStyle:‘bold’});
const p1=this.add.graphics(); p1.fillStyle(gs.inventory.potion>0?0xc8e8a0:0xb8b8a0,1); p1.lineStyle(2,0x303030,1); p1.fillRect(24,H*0.55+46,(W-48)/2,60); p1.strokeRect(24,H*0.55+46,(W-48)/2,60);
p1.setInteractive(new Phaser.Geom.Rectangle(24,H*0.55+46,(W-48)/2,60),Phaser.Geom.Rectangle.Contains);
p1.on(‘pointerdown’,()=>{if(gs.inventory.potion<=0||gs.pokeHP>=maxHP)return;gs.pokeHP=Math.min(maxHP,gs.pokeHP+20);gs.inventory.potion–;ov.destroy();this.showMap();});
this.add.text(32,H*0.55+58,‘Pocion +20HP’,{fontSize:‘12px’,color:’#203010’,fontFamily:‘Courier New’,fontStyle:‘bold’});
this.add.text(32,H*0.55+76,‘x’+gs.inventory.potion+’ restantes’,{fontSize:‘11px’,color:’#505040’,fontFamily:‘Courier New’});
const p2=this.add.graphics(); p2.fillStyle(gs.inventory.superPotion>0?0xb0d8f0:0xb0b8c0,1); p2.lineStyle(2,0x303030,1); p2.fillRect(W/2+8,H*0.55+46,(W-48)/2,60); p2.strokeRect(W/2+8,H*0.55+46,(W-48)/2,60);
p2.setInteractive(new Phaser.Geom.Rectangle(W/2+8,H*0.55+46,(W-48)/2,60),Phaser.Geom.Rectangle.Contains);
p2.on(‘pointerdown’,()=>{if(gs.inventory.superPotion<=0||gs.pokeHP>=maxHP)return;gs.pokeHP=Math.min(maxHP,gs.pokeHP+50);gs.inventory.superPotion–;ov.destroy();this.showMap();});
this.add.text(W/2+16,H*0.55+58,‘Super +50HP’,{fontSize:‘12px’,color:’#102030’,fontFamily:‘Courier New’,fontStyle:‘bold’});
this.add.text(W/2+16,H*0.55+76,‘x’+gs.inventory.superPotion+’ restantes’,{fontSize:‘11px’,color:’#405060’,fontFamily:‘Courier New’});
}

update() {}
}
