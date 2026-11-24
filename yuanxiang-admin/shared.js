// 元象小店 · 后台体验版 共享数据层
// 体验版： 数据保存在浏览器 localStorage; 正式版把这里换成服务器数据库即可
var YX_KEY = 'yx_products_v1';
var YX_SEED = [
  {id:1, type:'service', name:'独立站 · 网址看板', price:99, unit:'起', desc:'把你的产品、行情、数据做成一个网址，手机电脑打开就能看，还能自动更新。', img:''},
  {id:2, type:'service', name:'PPT 美化', price:59, unit:'起', desc:'发我你的旧 PPT，还你一份能拿得出手的：统一风格、配图排版、重点突出。', img:''},
  {id:3, type:'service', name:'数据看板定制', price:99, unit:'起', desc:'销售、库存、经营数据变成一页看懂的图表看板，适合小店、团队日常盯数。', img:''},
  {id:4, type:'service', name:'Excel 公式代写', price:39, unit:'起', desc:'不会写的公式、做不出的统计表，发需求给我，做好发你，能直接用。', img:''},
  {id:5, type:'service', name:'文案润色', price:39, unit:'起', desc:'朋友圈文案、产品介绍、简历润色，改得顺口又得体，不假大空。', img:''},
  {id:6, type:'service', name:'粤语配音', price:39, unit:'起', desc:'地道粤语配音，适合短视频、广告、店内广播，标准发音。', img:''},
  {id:7, type:'digital', name:'Excel 函数速查表', price:9.9, unit:'', desc:'20 个最常用公式，哪里不会查哪里，PDF 版打开就能对照着用。', img:''},
  {id:8, type:'digital', name:'小店记账模板', price:9.9, unit:'', desc:'打开就能用的 Excel 记账表，每天花 1 分钟，月底自动出汇总。', img:''},
  {id:9, type:'digital', name:'数据看板模板', price:19.9, unit:'', desc:'填上你自己的数字就是一个经营看板，附使用说明。', img:''}
];
function yxLoad(){ try { var d = JSON.parse(localStorage.getItem(YX_KEY)); if (Array.isArray(d) && d.length) return d; } catch(e){} return JSON.parse(JSON.stringify(YX_SEED)); }
function yxSave(list){ localStorage.setItem(YX_KEY, JSON.stringify(list)); }
function yxCover(p){ if (p.img) return '<img src="'+p.img+'" alt="">'; var c = p.type==='digital' ? 'linear-gradient(135deg,#C4CDB4,#A9B795)' : 'linear-gradient(135deg,#A9BCC4,#7FA3AE)'; return '<div class="ph" style="background:'+c+'">'+p.name.slice(0,1)+'</div>'; }
