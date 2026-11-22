(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Oe(e=window.location.pathname){const t=e.replace(/\/+$/,"")||"/";if(t==="/")return{name:"home"};const n={"/login":"login","/signup":"signup","/bookshelf":"bookshelf","/terms":"terms","/privacy":"privacy","/forgot-password":"forgot","/reset-password":"reset","/admin":"admin","/coins":"coins","/search":"search","/profile":"profile","/purchases":"purchases","/events":"events","/follow":"follow","/report":"report"};if(n[t])return{name:n[t]};let a=t.match(/^\/novel\/([^/]+)$/);return a?{name:"novel",id:decodeURIComponent(a[1])}:(a=t.match(/^\/report\/([^/]+)$/),a?{name:"report",id:decodeURIComponent(a[1])}:(a=t.match(/^\/read\/([^/]+)\/([^/]+)$/),a?{name:"reader",novelId:decodeURIComponent(a[1]),chapterId:decodeURIComponent(a[2])}:{name:"notfound"}))}function w(e){if(e.name==="home")return"/";if(e.name==="login")return e.next?`/login?next=${encodeURIComponent(e.next)}`:"/login";if(e.name==="signup")return e.next?`/signup?next=${encodeURIComponent(e.next)}`:"/signup";if(e.name==="bookshelf")return"/bookshelf";if(e.name==="terms")return"/terms";if(e.name==="privacy")return"/privacy";if(e.name==="forgot")return"/forgot-password";if(e.name==="reset")return e.token?`/reset-password?token=${encodeURIComponent(e.token)}`:"/reset-password";if(e.name==="admin")return"/admin";if(e.name==="coins")return"/coins";if(e.name==="events")return"/events";if(e.name==="follow")return"/follow";if(e.name==="report")return e.id?`/report/${e.id}`:"/report";if(e.name==="profile")return"/profile";if(e.name==="purchases")return"/purchases";if(e.name==="search"){const t=e.q==null?"":String(e.q).trim();return t?`/search?q=${encodeURIComponent(t)}`:"/search"}return e.name==="novel"?`/novel/${e.id}`:e.name==="reader"?`/read/${e.novelId}/${e.chapterId}`:"/"}function I(){return`${window.location.pathname}${window.location.search}`}function h(e,{replace:t=!1}={}){const n=typeof e=="string"?e:w(e);t?history.replaceState({},"",n):history.pushState({},"",n),window.dispatchEvent(new PopStateEvent("popstate"))}const O=[{id:"teen-romance",name:"นิยายรักวัยว้าวุ่น"},{id:"romance",name:"นิยายรัก"},{id:"romantic",name:"นิยายโรมานซ์"},{id:"erotic",name:"นิยายอีโรติก",isAdult:!0}],b={name:"บ้านนิยายของ J.Jusmin และ Mali_810",shortName:"บ้านนิยาย",headerName:"บ้านนิยาย J.Jusmin",penNames:["J.Jusmin","Mali_810"]},Jn=[{id:"school-bell-floor-four",title:"เสียงระฆังที่ชั้นสี่",author:"J.Jusmin",tags:["teen-romance","romance"],secondaryTags:["แอบรัก","วิศวะ","รักในรั้วมหาลัย"],teaser:"ทุกครั้งที่ระฆังดัง เธอจะยืนรออยู่ที่บันไดชั้นสี่ — แต่ปีนี้เขาเดินผ่านไปโดยไม่เหลียวหลัง",synopsis:`นับตั้งแต่มัธยมต้น บันไดหนีไฟชั้นสี่คือพื้นที่ลับของเนยกับนนท์
ทุกวันหลังเลิกเรียนทั้งคู่จะมานั่งฟังเสียงระฆังรอบสุดท้ายด้วยกัน
จนกระทั่งนนท์สอบติดคณะที่ทุกคนฝันถึงแล้วดูเหมือนจะลืมบันไดนั้นไปเลย
เนยบอกตัวเองว่าไม่เป็นไร แต่พอเปิดเทอมใหม่
รุ่นพี่คนนั้นก็เดินผ่านเธอไปในทางเดินเดิม ด้วยสายตาที่ไม่คุ้นเคยอีกต่อไป

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`,cover:{from:"#F7B3BE",to:"#D9788A",motif:"ระฆัง"},chapters:[{id:"1",title:"บันไดที่คุ้นเคย",free:!0,publishedAt:"2026-10-20",content:`เนยถึงบันไดชั้นสี่ก่อนระฆังจะดังตามเคย

เธอวางกระเป๋าลงที่ขั้นบันไดขั้นที่สาม นับในใจช้าๆ แล้วเงยหน้าไปทางประตูหลังอาคารเรียน แสงเย็นทอดยาวบนพื้นซีเมนต์ ลมพัดชายกระโปรงนักเรียนเบาๆ แต่เสียงฝีเท้าที่เธอรอไม่ได้ดังขึ้นมาเลย

ระฆังรอบสุดท้ายดังขึ้นในที่สุด

เนยยิ้มให้ความว่างเปล่าตรงหน้า แล้วกระซิบกับตัวเองว่า ปีนี้เขาคงยุ่งกว่าเดิมแค่นั้นเอง

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`},{id:"2",title:"ระฆังที่ดังช้าลง",free:!0,publishedAt:"2026-10-27",content:`สัปดาห์ต่อมา เนยยังขึ้นมาที่เดิม

ครั้งนี้เธอไม่ได้วางกระเป๋าลงทันที แต่ยืนพิงราวระเบียง มองลงไปยังสนามบาสที่เริ่มมีคนเดินออกจากโรงเรียนเป็นกลุ่มๆ เสียงหัวเราะลอยขึ้นมาเป็นระลอก แล้วจางหาย

เมื่อระฆังดัง เธอได้ยินฝีเท้าจากด้านหลัง

“มายืนนานแล้วนิ” เสียงคุ้นเคยแต่ต่ำกว่าเดิมพูดขึ้น

เนยหันไป พบนนท์ในชุดนักศึกษาสีขาว แว่นที่เคยใส่ประจำหายไป และรอยยิ้มที่เคยง่ายดายก็ดูระมัดระวังขึ้นจนเธอไม่กล้าทักแบบเดิม

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`},{id:"3",title:"คนที่เดินผ่านไป",free:!1,price:5,publishedAt:"2026-11-03",content:`วันต่อมา นนท์เดินสวนกับเนยตรงโถงชั้นหนึ่ง

เธอยกมือขึ้นจะทัก แต่เขาแค่พยักหน้าสั้นๆ แล้วเดินผ่านไปกับเพื่อนคณะใหม่ ราวกับบันไดชั้นสี่ไม่เคยมีอยู่จริง

เย็นนั้นเนยขึ้นไปนั่งคนเดียวอีกครั้ง เธอเปิดสมุดจดและเขียนประโยคเดียวไว้ใต้วันที่วันนี้

“ถ้าเขาลืม ฉันจะจำให้สองคนก็แล้วกัน”

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`}]},{id:"class-president-and-the-glasses-boy",title:"ยัยตัวร้ายกับนายแว่น",author:"Mali_810",tags:["teen-romance"],secondaryTags:["คู่กัด","หวานน่ารัก"],teaser:"เธอคือหัวหน้าห้องที่ทุกคนเกรงใจ เขาคือนายแว่นเก้าอี้หลังสุด — จนครูให้ทั้งคู่ทำป้ายงานกีฬาสีด้วยกัน",synopsis:`พิมพ์ชนกขึ้นชื่อว่าเป็นหัวหน้าห้องปากจัด
แต่เธอแค่ไม่ชอบคนทำงานไม่เสร็จตามเวลา
ส่วนภูมิเป็นคนเงียบที่นั่งท้ายห้องและวาดรูปในสมุดตลอดคาบว่าง
เมื่อครูประกาศให้นักเรียนสองคนนี้ร่วมกันออกแบบป้ายเชียร์กีฬาสี
ห้องเรียนทั้งห้องต่างมองกันตาค้าง
เพราะทุกคนรู้ดีว่าถ้าพิมพ์ชนกไม่พอใจ
ป้ายนั้นคงไม่ได้ไปไกลกว่าถังขยะหน้าห้อง

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`,cover:{from:"#F3C16B",to:"#E8899A",motif:"ป้ายเชียร์"},chapters:[{id:"1",title:"หัวหน้าห้องไม่รับงานลวกๆ",free:!0,publishedAt:"2026-10-18",content:`“สีนี้ใช้ไม่ได้” พิมพ์ชนกวางปากกาเมจิกลงแล้วมองภูมิตรงๆ

ภูมิดันแว่นขึ้น ดูสเกตช์ที่เขาใช้เวลาทั้งคาบว่างทำให้ พื้นหลังเป็นส้มสด ตัวอักษรใหญ่โตจนเต็มหน้ากระดาษ

“สีส้มมองไกลชัด” เขาตอบสั้น

“ชัดจนแสบตาค่ะคุณภูมิ” เธอหยิบสีชมพูอ่อนมาวางข้างหน้าเขา “ลองใหม่ ถ้าไม่สวย ฉันทำให้เอง”

ภูมิมองสีที่เธอเลือก แล้วมองเธออีกครั้ง ก่อนจะพยักหน้าโดยไม่ได้เถียงแม้แต่คำเดียว

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`},{id:"2",title:"สีที่เธอเลือก",free:!0,publishedAt:"2026-10-25",content:`เย็นวันศุกร์ ทั้งคู่ถูกครูให้ใช้ห้องศิลปะต่อหลังเลิกเรียน

พิมพ์ชนกยืนถือกระดาษคราฟต์ยาวเหยียด ส่วนภูมิก้มลงลงสีทีละส่วนอย่างตั้งใจ ห้องเงียบจนได้ยินแค่เสียงพู่กันและเครื่องปรับอากาศ

“นายพูดน้อยจัง” เธอโพล่งขึ้น

“เพราะเธอพูดครบแล้ว” เขาตอบโดยไม่เงยหน้า แต่มุมปากขยับขึ้นนิดหนึ่ง จนพิมพ์ชนกต้องแกล้งไอกลบ

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`},{id:"3",title:"ป้ายที่ยังไม่เสร็จ",free:!1,price:5,publishedAt:"2026-11-01",content:`วันงานกีฬาสี ป้ายยังขาดตัวอักษรตรงมุมขวา

พิมพ์ชนกวิ่งไปหาภูมิที่ใต้ต้นนนทรีหลังโรงอาหาร เขายื่นปากกาเมจิกและรอยยิ้มเล็กๆ ให้โดยไม่ต้องถามว่าเกิดอะไรขึ้น

“ช่วยถือให้หน่อย” เธอสั่ง ทั้งที่เสียงเบาลงกว่าทุกครั้งที่เคยสั่งงานในห้อง

ภูมิถือป้ายให้สูง เธอเขียนตัวสุดท้ายจนเสร็จ แล้วทั้งคู่ก็มองงานที่ทำด้วยกันโดยไม่พูดอะไรอีกสักพัก

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`}]},{id:"unsent-letters",title:"จดหมายที่ไม่ได้ส่ง",author:"Mali_810",tags:["romance","romantic"],secondaryTags:["ดราม่า","แอบรัก"],teaser:"สิบปีแล้วที่เธอเขียนจดหมายถึงเขาโดยไม่เคยส่งสักฉบับ จนกล่องไปรษณีย์เก่าถูกเปิดในวันฝนตก",synopsis:`วินเคยทิ้งเมืองนี้ไปโดยไม่บอกลา
ธาราจึงเขียนจดหมายถึงเขาทุกปีในวันเกิดตัวเอง
แล้วเก็บซ่อนไว้ในกล่องไม้ใต้เตียง
สิบปีผ่านไป
กล่องนั้นถูกน้องสาวเปิดออกโดยไม่ตั้งใจพอดีกับวันที่วินเดินกลับมาทำความเข้าใจกับบ้านหลังเก่า
ธาราต้องเลือกว่าจะแย่งจดหมายเหล่านั้นคืนก่อนที่เขาจะได้อ่าน
หรือจะยอมให้คำที่ไม่ได้ส่งพูดแทนเธอเสียที

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`,cover:{from:"#E8A0B0",to:"#C9849A",motif:"จดหมาย"},chapters:[{id:"1",title:"กล่องไม้ใต้เตียง",free:!0,publishedAt:"2026-09-12",content:`ฝนตกตั้งแต่เช้า และกล่องไม้สีซีดก็ถูกวางไว้บนโต๊ะครัวโดยที่ธาราไม่ได้หยิบมันขึ้นมาเอง

“พี่ขา อันนี้คืออะไร” น้องสาวถาม ทั้งที่ซองจดหมายสองสามซองเล็ดลอดออกมาแล้ว

ธารายื่นมือไปรวบมันเร็วเกินไปจนซองหนึ่งหล่นลงพื้น ลายมือบนซองยังคมชัด คำขึ้นต้นเขียนว่า ‘ถึงวิน’ ตามด้วยวันที่ที่เธอจำได้หมดทุกฉบับ

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`},{id:"2",title:"คนที่กลับมาในวันฝน",free:!0,publishedAt:"2026-09-19",content:`ร้านกาแฟหัวมุมยังมีที่นั่งริมกระจกเหมือนเดิม

วินสั่งกาแฟดำ แล้วนั่งมองฝนโดยไม่ได้เปิดมือถือ ธาราเห็นหลังของเขาก่อนจะเห็นใบหน้า และเกือบเดินสวนไปอีกทาง

แต่เขาหันมาพอดี

“นานแล้วนะ” วินพูด เสียงนั้นต่ำลงและช้าลงกว่าในความทรงจำของเธอ

ธาราพยักหน้า แล้วนั่งลงตรงข้ามโดยยังไม่รู้ว่ามือที่ซ่อนใต้โต๊ะกำลังกำขอบกระเป๋าแน่นแค่ไหน

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`},{id:"3",title:"คำที่ยังไม่อยากให้อ่าน",free:!1,price:5,publishedAt:"2026-09-26",content:`วินไม่ได้ถามถึงจดหมายในวันนั้น

เขาแค่ส่งร่มให้ธาราก่อนจะแยกย้าย และบอกว่าพรุ่งนี้เขาจะแวะบ้านเดิมเพื่อเก็บของบางอย่าง ธารารีบกลับบ้าน แล้วนั่งเรียงซองจดหมายใหม่ทั้งหมด ลังเลว่าจะเผา ทิ้ง หรือยื่นให้เขาด้วยมือตัวเอง

เธอเลือกที่จะยังไม่ตัดสินใจในคืนนั้น แต่เธอเขียนซองใหม่อีกใบ แล้ววางไว้บนสุดของกอง

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`}]},{id:"summer-at-the-horizon",title:"ฤดูร้อนที่ปลายฟ้า",author:"J.Jusmin",tags:["romantic"],secondaryTags:["หวานน่ารัก"],teaser:"บ้านพักริมทะเลแห่งนั้นมีลมและเสียงคลื่นพอจะกลบทุกคำที่ยังไม่กล้าพูด",synopsis:`เกลียวรับงานดูแลบ้านพักครอบครัวตลอดฤดูร้อน
เพื่อหนีความวุ่นในกรุงเทพฯ
ส่วนภาสมาถึงในฐานะแขกของเจ้าของบ้านที่เธอไม่เคยพบหน้า
คืนแรกทั้งคู่แค่แบ่งระเบียงและแก้วน้ำเย็นให้กัน
แต่เมื่อพระอาทิตย์ตกช้าลงทุกวัน
คำที่ไม่ได้พูดก็เริ่มยาวขึ้นกว่าเส้นขอบฟ้า

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`,cover:{from:"#F2C9B8",to:"#E8899A",motif:"ขอบฟ้า"},chapters:[{id:"1",title:"แขกที่มาถึงก่อนน้ำขึ้น",free:!0,publishedAt:"2026-08-02",content:`เกลียวเปิดประตูบ้านพักตั้งแต่พระอาทิตย์ยังไม่สูง

ผู้ชายคนหนึ่งยืนถือกระเป๋าใบเล็กและรองเท้าแตะในมือ อากาศร้อนจัดจนเส้นผมปรกหน้าผาก เขาแนะนำตัวสั้นๆ ว่าภาส แล้วขอโทษที่มาถึงเร็วกว่าที่นัดไว้

“ห้องด้านบนเก็บผ้าปูที่นอนไว้ให้แล้วค่ะ” เธอพูดเป็นทางการ แม้สายลมทะเลจะทำให้ประโยคนั้นฟังอ่อนลงกว่าที่ตั้งใจ

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`},{id:"2",title:"ระเบียงร่วมและแสงเย็น",free:!0,publishedAt:"2026-08-09",content:`เย็นวันนั้นทั้งคู่นั่งที่ระเบียงโดยไม่ได้ชวนกันเอง

ภาสถามถึงงานที่เกลียวทำ เธอตอบเพียงว่าที่นี่เงียบดี แล้วหันไปมองเส้นขอบฟ้าที่เริ่มอมส้ม คลื่นซัดซ้ำๆ จนบทสนทนาไม่จำเป็นต้องต่อเนื่อง

เมื่อฟ้าเริ่มมืด เขาเติมน้ำให้แก้วของเธอโดยไม่ถาม เกลียวมองแก้วน้ำแล้วยิ้มน้อยๆ ในวันที่ยังไม่พร้อมจะเรียกว่าอะไรเกินกว่าความสุภาพ

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`},{id:"3",title:"คำที่ลมกลบไว้",free:!1,price:5,publishedAt:"2026-08-16",content:`คืนหนึ่งไฟที่ระเบียงดับ

ทั้งคู่จึงเดินลงไปจนถึงชายหาดโดยใช้แสงเดือนนำทาง ภาสพูดถึงเหตุผลที่เขาหนีงานในกรุงมาที่นี่ เกลียวฟังจนจบแล้วยังไม่ตอบอะไรทันที

“ถ้าไม่พร้อมพูด ก็แค่เดินด้วยกันก่อนก็ได้” เขาบอก

เธอพยักหน้า แล้วก้าวต่ออีกก้าวในทรายที่ยังอุ่น

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`}]},{id:"apartment-number-eight",title:"ห้องชุดเลขที่ 8",author:"Mali_810",tags:["erotic"],secondaryTags:["มาเฟีย","พระเอกคลั่งรัก"],teaser:"สัญญาเช่าห้องข้างๆ ระบุเพียงชื่อและหมายเลขห้อง แต่คืนแรกที่ผนังบางเกินไป เธอรู้ว่าความเงียบระหว่างทั้งคู่จะอยู่ไม่นาน",synopsis:`อรชีวนาย้ายเข้าห้องชุดเลขที่ 8 ในคืนที่ฝนตกหนัก
เพดานบาง ผนังบาง และผู้เช่าห้องเลขที่ 7
คือชายที่เธอเคยพบเพียงครั้งเดียวในลิฟต์โดยสารโดยไม่ได้แม้แต่ถามชื่อ
สิ่งที่เริ่มจากเสียงฝีเท้าและแสงไฟใต้ประตูค่อยๆ
กลายเป็นคำเชิญที่ทั้งคู่ไม่ได้พูดออกมาตรงๆ
เรื่องนี้เหมาะสำหรับผู้อ่านอายุ 18 ปีขึ้นไป
และเป็นเพียงข้อความตัวอย่างในต้นแบบเว็บ

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`,cover:{from:"#C75D74",to:"#8A3D52",motif:"ห้อง 8"},chapters:[{id:"1",title:"ผนังบางในคืนฝน",free:!0,publishedAt:"2026-10-05",content:`อรชีวไม่ได้ตั้งใจจะฟังเสียงจากห้องข้างๆ

แต่ฝนตกจนหลังคาดัง และผนังคอนกรีตก็บางกว่าที่โฆษณาอ้างไว้ เธอได้ยินเสียงแก้ววางบนโต๊ะ เสียงฝีเท้าหยุดตรงประตู และแสงบางๆ ลอดมาตามร่องพื้น

เธอยืนอยู่ฝั่งนี้ นานเกินกว่าที่ควรจะยืนเพียงเพราะความบังเอิญ

เช้าวันต่อมา ทั้งคู่สวนกันที่ลิฟต์ เขาพยักหน้าให้ เธอพยักกลับ โดยที่ยังไม่มีใครเปิดเรื่องอะไรเกินคำสวัสดี

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`},{id:"2",title:"แสงใต้ประตู",free:!1,price:5,publishedAt:"2026-10-12",content:`คืนต่อมา แสงใต้ประตูห้องเลขที่ 7 ยังติดอยู่หลังเที่ยงคืน

อรชีวเดินออกไปทิ้งขยะ โดยรู้ดีว่านั่นเป็นแค่ข้ออ้าง เมื่อเธอกลับมา เขาเปิดประตูออกมาพอดี ทั้งคู่ยืนในทางเดินแคบๆ ที่มีกลิ่นฝนและสบู่

“เสียงดังไปไหม” เขาถาม

“ผนังบางค่ะ” เธอตอบ แล้วทั้งคู่ก็หัวเราะเบาๆ ก่อนจะเงียบพร้อมกันอีกครั้ง ในระยะที่ใกล้เกินกว่าเพื่อนบ้านทั่วไป

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`},{id:"3",title:"คำเชิญที่ไม่ได้พูด",free:!1,price:5,publishedAt:"2026-10-19",content:`สุดสัปดาห์นั้น เขาเคาะประตูห้องเลขที่ 8 เพื่อคืนจดหมายที่ไปรษณีย์ใส่ผิดช่อง

อรชีวเปิดประตูทั้งที่ผมยังไม่แห้ง และเสื้อตัวในยังเปียกเล็กน้อยจากไอน้ำในห้องน้ำ เขาจับสายตาไว้ที่ซองจดหมายนานกว่าปกติ ก่อนจะยื่นให้เธอ

“ถ้าค่ำนี้ว่าง แวะไปกินอะไรง่ายๆ ที่ห้องผมก็ได้” เขาพูดช้าๆ

เธอไม่ได้ตอบทันที แต่ก็ไม่ได้ปิดประตูใส่เช่นกัน

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`}]}],Nr=["มาเฟีย","วิศวะ","แอบรัก","พระเอกคลั่งรัก","คู่กัด","หวานน่ารัก","ดราม่า","คอมเมดี้","รักในรั้วมหาลัย","ระบบ","ย้อนเวลา","แฟนตาซี","CEO","บอสตัวร้าย","แพทย์","เพื่อนสนิท","ฮีลใจ","ชีวิตในวัยเรียน"];function Ft(e){return O.find(t=>t.id===e)}function be(e,t){return e?.chapters.find(n=>n.id===t)}const Qe="banNiyai_novelMeta",Nt="banNiyai_tagSuggestions",we="banNiyai_chapters",Ae="banNiyai_customNovels",Zn="banNiyai_deletedNovels",kn="banNiyai_unlocks",wn="banNiyai_walletTx",Sn="banNiyai_donations",_n="banNiyai_progress";function U(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function E(e,t){localStorage.setItem(e,JSON.stringify(t))}function Ne(e){return String(e||"").trim().replace(/\s+/g," ")}function $e(){const e=U(Nt,null),t=Array.isArray(e)&&e.length?e:[...Nr],n=new Set;return t.map(Ne).filter(a=>{if(!a)return!1;const r=a.toLowerCase();return n.has(r)?!1:(n.add(r),!0)})}function Ht(e){const t=Ne(e);if(!t)return $e();const n=$e();return n.some(a=>a.toLowerCase()===t.toLowerCase())||n.push(t),E(Nt,n),$e()}function et(){return U(Qe,{})}function xr(e){return Array.isArray(e)?{replace:!1,items:e}:e&&typeof e=="object"&&Array.isArray(e.items)?{replace:!!e.replace,items:e.items}:{replace:!1,items:[]}}function Er(e,t){const{replace:n,items:a}=xr(t);if(n)return(a||[]).filter(i=>i&&i.id!=null&&i.id!=="").map(i=>({...i,id:String(i.id)}));const r=Array.isArray(e)?e:[],o=new Map(r.map(i=>[String(i.id),{...i}]));for(const i of a){if(!i||i.id==null||i.id==="")continue;const d=String(i.id);o.set(d,o.has(d)?{...o.get(d),...i,id:d}:{...i,id:d})}const s=new Set,c=[];for(const i of r){const d=String(i.id);c.push(o.get(d)),s.add(d)}for(const i of a){if(!i||i.id==null||i.id==="")continue;const d=String(i.id);s.has(d)||(c.push(o.get(d)),s.add(d))}return c}function An(e,t,n){const a=t[e.id]||{};return{...e,title:a.title!=null?a.title:e.title,author:a.author!=null?a.author:e.author,teaser:a.teaser!=null?a.teaser:e.teaser,mebUrl:a.mebUrl!=null?a.mebUrl:e.mebUrl||"",cover:a.cover!=null?a.cover:e.cover,tags:Array.isArray(a.tags)?a.tags:e.tags,secondaryTags:Array.isArray(a.secondaryTags)?a.secondaryTags:e.secondaryTags||[],chapters:Er(e.chapters,n[e.id])}}function xe(){const e=U(Ae,[]);return Array.isArray(e)?e:[]}function Wn(){const e=U(Zn,[]);return Array.isArray(e)?e.map(String):[]}function ye(){const e=et(),t=U(we,{}),n=new Set(Wn()),a=Jn.map(o=>An(o,e,t)),r=xe().map(o=>An(o,e,t));return[...a,...r].filter(o=>!n.has(String(o.id)))}function v(e){return ye().find(t=>t.id===e)}function Ir(e){return ye().filter(t=>t.tags.includes(e))}function je(e){return!!e?.tags?.some(t=>Ft(t)?.isAdult)}function Tr(e,{tags:t,secondaryTags:n}){if(!v(e))return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const r=[...new Set((t||[]).filter(u=>O.some(p=>p.id===u)))];if(!r.length)return{ok:!1,error:"กรุณาเลือกหมวดหลักอย่างน้อย 1 หมวด"};const o=new Set,s=[];for(const u of n||[]){const p=Ne(u);if(!p||O.some(g=>g.name===p))continue;const m=p.toLowerCase();o.has(m)||(o.add(m),s.push(p))}const c=et();c[e]={...c[e]||{},tags:r,secondaryTags:s},E(Qe,c);const i=xe(),d=i.findIndex(u=>u.id===e);return d>=0&&(i[d]={...i[d],tags:r,secondaryTags:s},E(Ae,i)),s.forEach(u=>Ht(u)),{ok:!0,novel:v(e)}}function Dr(e){const t=new Set,n=[];for(const a of e||[]){const r=Ne(a);if(!r||O.some(s=>s.name===r))continue;const o=r.toLowerCase();t.has(o)||(t.add(o),n.push(r))}return n}function Gn(e){const t=String(e??"").trim();if(!t)return{ok:!0,url:""};try{const n=new URL(t);if(n.protocol==="https:"||n.protocol==="http:")return{ok:!0,url:n.href}}catch{}return{ok:!1,url:""}}function qr(e={}){const t=String(e.title||"").trim(),n=String(e.author||"").trim(),a={},r=Gn(e.mebUrl);r.ok||(a.mebUrl="กรุณาวางลิงก์ที่ขึ้นต้นด้วย https://"),t||(a.title="กรุณากรอกชื่อเรื่อง"),b.penNames.includes(n)||(a.author="กรุณาเลือกนามปากกา");const o=[...new Set((e.tags||[]).filter(p=>O.some(m=>m.id===p)))];if(Object.keys(a).length)return{ok:!1,errors:a};const s=Dr(e.secondaryTags),c=String(e.coverImage||"").trim(),i=String(e.teaser||"").trim(),d=`n-${Date.now().toString(36)}`,u={id:d,title:t,author:n,tags:o,secondaryTags:s,teaser:i,mebUrl:r.url,synopsis:"",cover:c?{image:c,from:"#F7B3BE",to:"#8A5A9A",motif:""}:{from:"#F7B3BE",to:"#8A5A9A",motif:t},chapters:[],createdAt:new Date().toISOString()};return E(Ae,[...xe(),u]),s.forEach(p=>Ht(p)),{ok:!0,novel:v(d)}}function Nn(e,t,n){return e?{image:e,from:t?.from||"#F7B3BE",to:t?.to||"#8A5A9A",motif:""}:t||{from:"#F7B3BE",to:"#8A5A9A",motif:n||""}}function Lr(e,t={}){const n=v(e);if(!n)return{ok:!1,errors:{title:"ไม่พบนิยายเรื่องนี้"}};const a=String(t.title||"").trim(),r=String(t.author||"").trim(),o=String(t.teaser??n.teaser??"").trim(),s={},c=Object.prototype.hasOwnProperty.call(t,"mebUrl")?Gn(t.mebUrl):{ok:!0,url:n.mebUrl||""};if(c.ok||(s.mebUrl="กรุณาวางลิงก์ที่ขึ้นต้นด้วย https://"),a||(s.title="กรุณากรอกชื่อเรื่อง"),b.penNames.includes(r)||(s.author="กรุณาเลือกนามปากกา"),Object.keys(s).length)return{ok:!1,errors:s};let i=n.cover||Nn("",null,a);if(Object.prototype.hasOwnProperty.call(t,"coverImage")){const g=String(t.coverImage||"").trim();g&&(i=Nn(g,i,a))}const d={title:a,author:r,teaser:o,mebUrl:c.url,cover:i},u=et();u[e]={...u[e]||{},...d},E(Qe,u);const p=xe(),m=p.findIndex(g=>g.id===e);return m>=0&&(p[m]={...p[m],...d},E(Ae,p)),{ok:!0,novel:v(e)}}function Cr(e){if(!v(e))return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};if(E(Ae,xe().filter(r=>r.id!==e)),Jn.some(r=>r.id===e)){const r=Wn();r.includes(e)||E(Zn,[...r,e])}const n=et();delete n[e],E(Qe,n);const a=U(we,{});return delete a[e],E(we,a),{ok:!0}}function Ee(e){if(!e)return null;const t=String(e).trim();if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const a=new Date(`${t}T00:00:00+07:00`);return Number.isNaN(a.getTime())?null:a}const n=new Date(t);return Number.isNaN(n.getTime())?null:n}function ve(e,t=new Date){const n=Ee(e?.publishedAt);return!!(n&&n.getTime()<=t.getTime())}function jt(e,t=new Date){return(e?.chapters||[]).filter(n=>ve(n,t))}function Br(e){let t=0;for(const n of e||[]){const a=Number(n.id);Number.isInteger(a)&&a>t&&(t=a)}return String(t+1)}function tt(e,t){const n=U(we,{});n[e]={replace:!0,items:t},E(we,n)}function Ur(e,t){const n=U(kn,{});let a=!1;for(const u of Object.keys(n||{})){const p=n[u];if(!p||typeof p!="object")continue;const m={...p},g=[];for(const k of Object.keys(p)){const _=p[k];if(!_||!(_.novelId===e||k.startsWith(`${e}:`)))continue;const Ce=_.chapterId!=null?String(_.chapterId):k.slice(e.length+1),W=t[Ce];!W||W===Ce||(delete m[k],g.push({key:`${e}:${W}`,rec:{..._,novelId:e,chapterId:W}}),a=!0)}for(const k of g)m[k.key]=k.rec;n[u]=m}a&&E(kn,n);const r=U(wn,{});let o=!1;for(const u of Object.values(r||{}))if(Array.isArray(u))for(const p of u){if(!p||p.novelId!==e||p.chapterId==null)continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,o=!0)}o&&E(wn,r);const s=U(Sn,{});let c=!1;for(const u of Object.values(s||{}))if(Array.isArray(u))for(const p of u){if(!p||p.novelId!==e||p.chapterId==null||p.chapterId==="")continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,c=!0)}c&&E(Sn,s);const i=U(_n,{});let d=!1;for(const u of Object.values(i||{})){if(!u||typeof u!="object")continue;const p=u[e];if(!p||p.chapterId==null)continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,d=!0)}d&&E(_n,i)}function zn(e,t,n){const a=v(e),r=a?.chapters?.find(s=>String(s.id)===String(t));if(!a||!r)return{ok:!1,errors:{id:"ไม่พบตอนที่ต้องการแก้ไข"}};const o=(a.chapters||[]).map(s=>String(s.id)===String(t)?{...s,...n,id:String(t),updatedAt:new Date().toISOString()}:{...s});return tt(e,o),{ok:!0,chapter:v(e).chapters.find(s=>String(s.id)===String(t)),novel:v(e)}}function Pr(e,t={}){const n=v(e);if(!n)return{ok:!1,errors:{novelId:"ไม่พบนิยายเรื่องนี้"}};const a=String(t.title||"").trim(),r=String(t.content||"").trim(),o={};if(a||(o.title="กรุณากรอกชื่อตอน"),r||(o.content="กรุณากรอกเนื้อหาตอน"),Object.keys(o).length)return{ok:!1,errors:o};const s=(n.chapters||[]).map(d=>({...d})),c=Br(s),i=new Date().toISOString();return s.push({id:c,title:a,content:r,price:0,free:!0,publishedAt:"",createdAt:i,updatedAt:i}),tt(e,s),{ok:!0,chapter:v(e).chapters.find(d=>String(d.id)===c),novel:v(e)}}function Rr(e,t){const n=v(e);if(!n)return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const a=(n.chapters||[]).filter(r=>String(r.id)!==String(t));return a.length===(n.chapters||[]).length?{ok:!1,error:"ไม่พบตอนนี้"}:(tt(e,a),{ok:!0,novel:v(e)})}function Or(e,t){const n=v(e);if(!n)return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const a=new Map((n.chapters||[]).map(c=>[String(c.id),{...c}])),r=(t||[]).map(c=>String(c));if(r.length!==a.size||r.some(c=>!a.has(c)))return{ok:!1,error:"ลำดับตอนไม่ถูกต้อง"};const o={},s=r.map((c,i)=>{const d=String(i+1);return o[c]=d,{...a.get(c),id:d}});return tt(e,s),Ur(e,o),{ok:!0,novel:v(e)}}function Mr(e,t,n){const a=n===""||n==null?0:Number(n);return!Number.isFinite(a)||a<0||!Number.isInteger(a)?{ok:!1,errors:{price:"กรุณากรอกราคาเป็นจำนวนเต็มไม่ติดลบ (0 = ฟรี)"}}:zn(e,t,{price:a,free:a===0})}function Fr(e,t,n={}){const a=n.publishMode==="schedule"?"schedule":"now";let r="";if(a==="now")r=new Date().toISOString();else{const o=Ee(n.publishedAt);if(!o)return{ok:!1,errors:{publishedAt:"กรุณาเลือกวันและเวลาที่จะเผยแพร่"}};r=o.toISOString()}return zn(e,t,{publishedAt:r})}const fe="banNiyai_users",Ie="banNiyai_session",nt="banNiyai_follows",Kt="banNiyai_progress",Se="banNiyai_resetTokens";function K(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function H(e,t){localStorage.setItem(e,JSON.stringify(t))}function ie(e){return String(e||"").trim().toLowerCase()}async function at(e,t){const n=new TextEncoder().encode(`${ie(e)}:${t}:banNiyai-prototype`),a=await crypto.subtle.digest("SHA-256",n);return[...new Uint8Array(a)].map(r=>r.toString(16).padStart(2,"0")).join("")}function ae(){return K(fe,[])}function Te(e){return e?{id:e.id,displayName:e.displayName,email:e.email,avatar:e.avatar||"",isAuthor:!!e.isAuthor}:null}function y(){const e=K(Ie,null);if(!e?.userId)return null;const t=ae().find(n=>n.id===e.userId);return Te(t)}function Hr(e){return e?Te(ae().find(t=>t.id===e)):null}function Vt(e=y()){return!!e?.isAuthor}const X={email:"author@banniyai.demo",password:"author1234",displayName:"J.Jusmin"};async function jr(){const e=ae(),t=X.email,n=e.find(r=>r.email===t),a=await at(t,X.password);if(n){(!n.isAuthor||n.passwordHash!==a)&&(n.isAuthor=!0,n.passwordHash=a,n.displayName=n.displayName||X.displayName,H(fe,e));return}e.push({id:"demo-author",displayName:X.displayName,email:t,passwordHash:a,isAuthor:!0,acceptedTermsAt:new Date().toISOString(),createdAt:new Date().toISOString()}),H(fe,e)}function Xn(e,t="/"){if(!e)return t;const n=String(e);return!n.startsWith("/")||n.startsWith("//")||n.includes("://")?t:n}function Kr({displayName:e,email:t,password:n,confirm:a,acceptTerms:r}){const o={},s=String(e||"").trim(),c=ie(t);return s?s.length<2&&(o.displayName="ชื่อที่แสดงต้องมีอย่างน้อย 2 ตัวอักษร"):o.displayName="กรุณากรอกชื่อที่แสดง",c?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)||(o.email="กรุณากรอกอีเมลให้ถูกต้อง"):o.email="กรุณากรอกอีเมล",n?String(n).length<8&&(o.password="รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"):o.password="กรุณากรอกรหัสผ่าน",a?n!==a&&(o.confirm="รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน"):o.confirm="กรุณายืนยันรหัสผ่าน",r||(o.acceptTerms="กรุณายอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว"),{ok:Object.keys(o).length===0,errors:o}}function Vr({email:e,password:t}){const n={};return ie(e)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ie(e))||(n.email="กรุณากรอกอีเมลให้ถูกต้อง"):n.email="กรุณากรอกอีเมล",t||(n.password="กรุณากรอกรหัสผ่าน"),{ok:Object.keys(n).length===0,errors:n}}function Qn(e){H(Ie,{userId:e.id,startedAt:new Date().toISOString()})}async function Yr({displayName:e,email:t,password:n,confirm:a,acceptTerms:r}){const o=Kr({displayName:e,email:t,password:n,confirm:a,acceptTerms:r});if(!o.ok)return{ok:!1,errors:o.errors};const s=ie(t),c=ae();if(c.some(d=>d.email===s))return{ok:!1,errors:{email:"อีเมลนี้ถูกใช้สมัครแล้ว"}};const i={id:crypto.randomUUID(),displayName:String(e).trim(),email:s,passwordHash:await at(s,n),acceptedTermsAt:new Date().toISOString(),createdAt:new Date().toISOString()};return c.push(i),H(fe,c),Qn(i),{ok:!0,user:Te(i)}}async function Jr({email:e,password:t}){const n=Vr({email:e,password:t});if(!n.ok)return{ok:!1,errors:n.errors};const a=ie(e),r=ae().find(s=>s.email===a),o=await at(a,t);return!r||r.passwordHash!==o?{ok:!1,errors:{form:"อีเมลหรือรหัสผ่านไม่ถูกต้อง"}}:(Qn(r),{ok:!0,user:Te(r)})}function Zr(){localStorage.removeItem(Ie)}function Wr({displayName:e,avatar:t}={}){const n=K(Ie,null);if(!n?.userId)return{ok:!1,errors:{form:"กรุณาเข้าสู่ระบบก่อน"}};const a=ae(),r=a.find(s=>s.id===n.userId);if(!r)return{ok:!1,errors:{form:"ไม่พบบัญชีผู้ใช้"}};const o={};if(e!==void 0){const s=String(e||"").trim();s?s.length<2?o.displayName="ชื่อที่แสดงต้องมีอย่างน้อย 2 ตัวอักษร":r.displayName=s:o.displayName="กรุณากรอกชื่อที่แสดง"}return Object.keys(o).length?{ok:!1,errors:o}:(t!==void 0&&(r.avatar=t||""),H(fe,a),{ok:!0,user:Te(r)})}function Yt(e,t){const n=y();if(!n)return null;const a=K(e,{}),r=a[n.id]||Gr(e),o=t(r);return a[n.id]=o,H(e,a),o}function Gr(e){return e===nt?[]:e===Kt?{}:null}function ea(){const e=y();return e?K(nt,{})[e.id]||[]:[]}function ta(e){return ea().some(t=>t.novelId===e)}function zr(e){return y()?(Yt(nt,n=>n.some(a=>a.novelId===e)?n:[...n,{novelId:e,followedAt:new Date().toISOString()}]),{ok:!0,following:!0}):{ok:!1,reason:"auth"}}function Xr(e){return y()?(Yt(nt,n=>n.filter(a=>a.novelId!==e)),{ok:!0,following:!1}):{ok:!1,reason:"auth"}}function Qr(e){return ta(e)?Xr(e):zr(e)}function eo(e,t){return y()?(Yt(Kt,a=>({...a,[e]:{chapterId:t,updatedAt:new Date().toISOString()}})),{ok:!0}):{ok:!1,reason:"auth"}}function to(){const e=y();if(!e)return[];const t=ea(),n=K(Kt,{})[e.id]||{};return t.slice().sort((a,r)=>String(r.followedAt).localeCompare(String(a.followedAt))).map(a=>({novelId:a.novelId,followedAt:a.followedAt,progress:n[a.novelId]||null}))}function no(e){const t={},n=ie(e);return n?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||(t.email="กรุณากรอกอีเมลให้ถูกต้อง"):t.email="กรุณากรอกอีเมล",{ok:Object.keys(t).length===0,errors:t,email:n}}function ao({password:e,confirm:t}){const n={};return e?String(e).length<8&&(n.password="รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"):n.password="กรุณากรอกรหัสผ่านใหม่",t?e!==t&&(n.confirm="รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน"):n.confirm="กรุณายืนยันรหัสผ่านใหม่",{ok:Object.keys(n).length===0,errors:n}}async function ro({email:e}){const t=no(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=ae().find(r=>r.email===t.email);let a=null;if(n){const r=crypto.randomUUID(),o=K(Se,{});o[r]={userId:n.id,email:n.email,createdAt:new Date().toISOString(),used:!1},H(Se,o),a=`/reset-password?token=${encodeURIComponent(r)}`}return{ok:!0,resetPath:a}}function oo(e){if(!e)return null;const t=K(Se,{})[e];return!t||t.used?null:t}async function so({token:e,password:t,confirm:n}){const a=ao({password:t,confirm:n});if(!a.ok)return{ok:!1,errors:a.errors};const r=K(Se,{}),o=r[e];if(!o||o.used)return{ok:!1,errors:{form:"ลิงก์ตั้งรหัสผ่านใหม่ไม่ถูกต้องหรือถูกใช้ไปแล้ว"}};const s=ae(),c=s.findIndex(i=>i.id===o.userId);return c<0?{ok:!1,errors:{form:"ลิงก์ตั้งรหัสผ่านใหม่ไม่ถูกต้องหรือถูกใช้ไปแล้ว"}}:(s[c]={...s[c],passwordHash:await at(s[c].email,t)},H(fe,s),r[e]={...o,used:!0,usedAt:new Date().toISOString()},H(Se,r),localStorage.removeItem(Ie),{ok:!0})}const Ke="banNiyai_promos",Q="banNiyai_bonusSettings",na="banNiyai_redeemCodes",io="promo-open-house",Jt="4h4",aa="banNiyai_seedVersion";function rt(){try{return localStorage.getItem(aa)!==Jt}catch{return!0}}function co(){localStorage.setItem(aa,Jt)}function j(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function V(e,t){localStorage.setItem(e,JSON.stringify(t))}function Zt(e){return Number(e.thb)||Math.max(0,Number(e.coins)-Number(e.bonus||0))}function lo(e=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(e)}function pe(e){if(e===""||e==null||Number(e)<=0)return null;const t=Number(e);return Number.isFinite(t)?t:null}function ra(e,t){return Math.ceil(e*(Number(t)||0)/100)}function oa(e){if(!e||!e.id)return null;const t=e.packageIds==="all"||e.allPackages?"all":Array.isArray(e.packageIds)?e.packageIds.filter(Boolean):[],n=e.bonusType==="fixed"?"fixed":"percent",a=Math.max(0,Number(e.bonusValue)||0);return{id:e.id,name:String(e.name||"").trim(),packageIds:t,bonusType:n,bonusValue:a,startAt:e.startAt,endAt:e.endAt,enabled:e.enabled!==!1,firstTopUpOnly:!!e.firstTopUpOnly,bonusExpiryDays:pe(e.bonusExpiryDays),image:e.image?String(e.image):"",createdAt:e.createdAt,updatedAt:e.updatedAt}}function sa(){return[{id:io,name:"โปรเปิดบ้านนิยาย",packageIds:"all",bonusType:"percent",bonusValue:20,startAt:"2026-11-01T00:00:00+07:00",endAt:"2026-12-31T23:59:00+07:00",enabled:!0,firstTopUpOnly:!0,bonusExpiryDays:null,createdAt:"2026-11-01T00:00:00+07:00",updatedAt:"2026-11-01T00:00:00+07:00"}]}function L(){const e=rt(),t=j(Ke,null);return(e||!Array.isArray(t))&&V(Ke,sa()),ua(),ya(),le()}function le(){const e=j(Ke,null);return(Array.isArray(e)?e:sa()).map(oa).filter(Boolean)}function ia(e){return V(Ke,e),le()}function ot(e){return le().find(t=>t.id===e)||null}function uo(e){const t={};String(e.name||"").trim()||(t.name="กรุณากรอกชื่อโปรโมชัน");const a=Number(e.bonusValue);return(!Number.isFinite(a)||a<=0)&&(t.bonusValue="กรุณากรอกจำนวนโบนัสที่มากกว่า 0"),e.bonusType==="percent"&&a>100&&(t.bonusValue="โบนัสแบบเปอร์เซ็นต์ต้องไม่เกิน 100"),e.startAt||(t.startAt="กรุณาเลือกวันและเวลาเริ่มต้น"),e.endAt||(t.endAt="กรุณาเลือกวันและเวลาสิ้นสุด"),e.startAt&&e.endAt&&new Date(e.endAt)<=new Date(e.startAt)&&(t.endAt="วันสิ้นสุดต้องอยู่หลังวันเริ่มต้น"),e.packageIds!=="all"&&(!Array.isArray(e.packageIds)||!e.packageIds.length)&&(t.packageIds="กรุณาเลือกแพ็กเกจอย่างน้อย 1 แพ็ก หรือเลือกทั้งหมด"),{ok:Object.keys(t).length===0,errors:t}}function ca(e){const t=uo(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=le(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=oa({...e,id:r,name:String(e.name).trim(),createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return ia(c),{ok:!0,promo:s}}function po(e){return ia(le().filter(t=>t.id!==e)),{ok:!0}}function mo(e,t){const n=ot(e);return n?ca({...n,enabled:!!t}):{ok:!1,error:"ไม่พบโปรโมชัน"}}function la(e,t=new Date){if(!e?.enabled)return!1;const n=new Date(e.startAt),a=new Date(e.endAt);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?!1:t>=n&&t<=a}function fo(e,t){return e.packageIds==="all"?!0:Array.isArray(e.packageIds)&&e.packageIds.includes(t)}function Me(e,t){if(!e||!t)return 0;const n=Zt(t);return e.bonusType==="fixed"?Math.round(Number(e.bonusValue)||0):ra(n,e.bonusValue)}function da(e=new Date){return L(),le().filter(t=>la(t,e))}function ho(e,{isFirstTopUp:t=!1,now:n=new Date}={}){const a=da(n).filter(r=>!fo(r,e.id)||r.firstTopUpOnly&&!t?!1:Me(r,e)>0);return a.length?a.sort((r,o)=>Me(o,e)-Me(r,e))[0]:null}const _e="v1-off",q={signup:{enabled:!0,coins:30,bonusExpiryDays:null},checkin:{enabled:!0,keysPerDay:1,keysRequired:7,coins:7,bonusExpiryDays:null},firstTopUp:{enabled:!1,bonusType:"percent",bonusValue:0,bonusExpiryDays:null}};function xt(e){const t=e&&typeof e=="object"?e:{},n=t.signup||{},a=t.checkin||{},r=t.firstTopUp||{},o={signup:{enabled:n.enabled!==!1,coins:Math.max(0,Math.round(Number(n.coins)||0))||q.signup.coins,bonusExpiryDays:pe(n.bonusExpiryDays)},checkin:{enabled:a.enabled!==!1,keysPerDay:Math.max(1,Math.round(Number(a.keysPerDay)||0))||q.checkin.keysPerDay,keysRequired:Math.max(1,Math.round(Number(a.keysRequired??a.keysPerCoin)||0))||q.checkin.keysRequired,coins:Math.max(1,Math.round(Number(a.coins)||0))||q.checkin.coins,bonusExpiryDays:pe(a.bonusExpiryDays)},firstTopUp:{enabled:r.enabled===!0,bonusType:"percent",bonusValue:Math.max(0,Math.round(Number(r.bonusValue)||0)),bonusExpiryDays:pe(r.bonusExpiryDays)}};return o.checkin.keysPerCoin=o.checkin.keysRequired,o}function go(e){if(e&&e._firstTopUpDefault===_e)return e;const t=e&&typeof e=="object"?e.firstTopUp||{}:{},n=Number(t.bonusValue)===10||t.bonusValue==null||t.bonusValue==="",a={...e&&typeof e=="object"?e:{},...q,signup:e?.signup?{...q.signup,...e.signup}:q.signup,checkin:e?.checkin?{...q.checkin,...e.checkin}:q.checkin,firstTopUp:{enabled:!1,bonusType:"percent",bonusValue:n?0:Math.max(0,Math.round(Number(t.bonusValue)||0)),bonusExpiryDays:t.bonusExpiryDays??null},_firstTopUpDefault:_e};return V(Q,a),a}function ua(){if(rt())return V(Q,{...q,_firstTopUpDefault:_e,_seedVersion:Jt}),xt(q);const e=j(Q,null);return go(e),xt(j(Q,q))}function C(){return ua()}function bo(e,t){const n={};if(e==="firstTopUp"){const a=Number(t.bonusValue);(!Number.isFinite(a)||a<0)&&(n.bonusValue="กรุณากรอกเปอร์เซ็นต์ที่ถูกต้อง"),a>100&&(n.bonusValue="โบนัสแบบเปอร์เซ็นต์ต้องไม่เกิน 100")}else if(e==="checkin"){const a=Number(t.keysPerDay),r=Number(t.keysRequired??t.keysPerCoin),o=Number(t.coins);(!Number.isFinite(a)||a<=0)&&(n.keysPerDay="กรุณากรอกจำนวนกุญแจต่อวันที่มากกว่า 0"),(!Number.isFinite(r)||r<=0)&&(n.keysRequired="กรุณากรอกจำนวนกุญแจที่ต้องครบก่อนแลกที่มากกว่า 0"),(!Number.isFinite(o)||o<=0)&&(n.coins="กรุณากรอกจำนวนเหรียญที่ได้เมื่อแลกที่มากกว่า 0")}else{const a=Number(t.coins);(!Number.isFinite(a)||a<=0)&&(n.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0")}return{ok:Object.keys(n).length===0,errors:n}}function yo(e,t){if(!q[e])return{ok:!1,errors:{form:"ไม่พบโปรเบื้องต้นนี้"}};const n=bo(e,t);if(!n.ok)return{ok:!1,errors:n.errors};const a=C(),r={...a,[e]:{...a[e],...t,enabled:t.enabled!==!1&&t.enabled!=="false"&&t.enabled!=="",bonusExpiryDays:pe(t.bonusExpiryDays),...e==="checkin"?{keysRequired:Number(t.keysRequired??t.keysPerCoin)||a[e].keysRequired,coins:Number(t.coins)||a[e].coins}:{}}},o=j(Q,{});return V(Q,{...o,...xt(r),_firstTopUpDefault:_e}),{ok:!0,settings:C()}}function vo(e,t){const n=C();if(!n[e])return{ok:!1,error:"ไม่พบโปรเบื้องต้นนี้"};const a=j(Q,{});return V(Q,{...a,...n,[e]:{...n[e],enabled:!!t},_firstTopUpDefault:_e}),{ok:!0,settings:C()}}function $o(e,{isFirstTopUp:t=!1}={}){if(!t||!e)return 0;const n=C();return n.firstTopUp.enabled?ra(Zt(e),n.firstTopUp.bonusValue):0}function pa(e,{isFirstTopUp:t=!1,now:n=new Date}={}){L();const a=Zt(e),r=Number(e.bonus||0),o=C().firstTopUp,s=$o(e,{isFirstTopUp:t}),c=ho(e,{isFirstTopUp:t,now:n}),i=c?Me(c,e):0;return{pack:e,paid:a,packageBonus:r,firstTopUp:s>0?o:null,firstTopUpBonus:s,promo:c,promoBonus:i,totalBonus:r+s+i,total:a+r+s+i}}function st(e){return String(e||"").trim().toUpperCase().replace(/\s+/g,"")}function ma(e){if(!e||!e.id)return null;const t=Array.isArray(e.usedBy)?e.usedBy.filter(Boolean):[];return{id:e.id,code:st(e.code),coins:Math.max(0,Math.round(Number(e.coins)||0)),maxUses:Math.max(1,Math.round(Number(e.maxUses)||1)),usedBy:t,expiresAt:e.expiresAt||null,enabled:e.enabled!==!1,bonusExpiryDays:pe(e.bonusExpiryDays),createdAt:e.createdAt,updatedAt:e.updatedAt}}function re(){const e=j(na,[]);return(Array.isArray(e)?e:[]).map(ma).filter(Boolean)}function Wt(e){return V(na,e),re()}function Gt(e){return re().find(t=>t.id===e)||null}function ko(e){const t=st(e);return t&&re().find(n=>n.code===t)||null}function wo(e){const t={},n=st(e.code);(!n||n.length<3)&&(t.code="กรุณากรอกรหัสอย่างน้อย 3 ตัวอักษร");const a=Number(e.coins);(!Number.isFinite(a)||a<=0)&&(t.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0");const r=Number(e.maxUses);return(!Number.isFinite(r)||r<1)&&(t.maxUses="จำนวนครั้งที่ใช้ได้ต้องอย่างน้อย 1"),re().find(s=>s.code===n&&s.id!==e.id)&&(t.code="รหัสนี้ถูกใช้แล้ว กรุณาตั้งรหัสใหม่"),e.expiresAt&&Number.isNaN(new Date(e.expiresAt).getTime())&&(t.expiresAt="วันหมดอายุไม่ถูกต้อง"),{ok:Object.keys(t).length===0,errors:t}}function fa(e){const t=wo(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=re(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=ma({...o,...e,id:r,code:st(e.code),usedBy:o?.usedBy||[],createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return Wt(c),{ok:!0,code:s}}function So(e){return Wt(re().filter(t=>t.id!==e)),{ok:!0}}function _o(e,t){const n=Gt(e);return n?fa({...n,enabled:!!t}):{ok:!1,error:"ไม่พบรหัส"}}function Ao(e,t,n=new Date){const a=ko(e);if(!a||!a.enabled)return{ok:!1,reason:"invalid",error:"ไม่พบรหัสนี้ หรือรหัสไม่ถูกต้อง"};if(a.expiresAt){const r=new Date(a.expiresAt);if(!Number.isNaN(r.getTime())&&r<=n)return{ok:!1,reason:"expired",error:"รหัสนี้หมดอายุแล้ว",record:a}}return t&&a.usedBy.includes(t)?{ok:!1,reason:"already",error:"คุณใช้รหัสนี้ไปแล้ว",record:a}:a.usedBy.length>=a.maxUses?{ok:!1,reason:"used-up",error:"รหัสนี้ถูกใช้ครบจำนวนแล้ว",record:a}:{ok:!0,record:a}}function No(e,t){const a=re().map(r=>r.id===e?{...r,usedBy:[...r.usedBy,t],updatedAt:new Date().toISOString()}:r);return Wt(a),Gt(e)}const Ve="banNiyai_keyPromos",xo="keypromo-happy-new-year",ha=[{id:"rainbow",name:"สีรุ้ง"},{id:"gold",name:"ทอง"},{id:"rose",name:"ชมพู"}];function ga(){return[{id:xo,name:"Happy new year",keyName:"กุญแจสายรุ้ง",keyStyle:"rainbow",keysRequired:7,coins:20,startAt:"2026-12-27T00:00:00+07:00",endAt:"2027-01-02T23:59:00+07:00",enabled:!0,createdAt:"2026-11-01T00:00:00+07:00",updatedAt:"2026-11-01T00:00:00+07:00"}]}function Eo(e){return ha.some(t=>t.id===e)?e:"rainbow"}function ba(e){return!e||!e.id?null:{id:e.id,name:String(e.name||"").trim(),keyName:String(e.keyName||"").trim()||"กุญแจพิเศษ",keyStyle:Eo(e.keyStyle),keyImage:e.keyImage?String(e.keyImage):"",keysRequired:Math.max(1,Math.round(Number(e.keysRequired)||0)||7),coins:Math.max(1,Math.round(Number(e.coins)||0)||1),startAt:e.startAt,endAt:e.endAt,enabled:e.enabled!==!1,createdAt:e.createdAt,updatedAt:e.updatedAt}}function ya(){const e=j(Ve,null);return(rt()||!Array.isArray(e))&&V(Ve,ga()),Y()}function Y(){const e=j(Ve,null);return(Array.isArray(e)?e:ga()).map(ba).filter(Boolean)}function va(e){return V(Ve,e),Y()}function it(e){return Y().find(t=>t.id===e)||null}function zt(e,t=new Date){if(!e?.enabled)return!1;const n=new Date(e.startAt),a=new Date(e.endAt);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?!1:t>=n&&t<=a}function $a(e,t=new Date){if(!e)return!0;const n=new Date(e.endAt);return Number.isNaN(n.getTime())?!1:t>n}function Xt(e=new Date){return ya(),Y().filter(t=>zt(t,e))}function ka(e=new Date){return Xt(e).slice().sort((n,a)=>new Date(n.startAt)-new Date(a.startAt))[0]||null}function Io(e){const t={};String(e.name||"").trim()||(t.name="กรุณากรอกชื่อโปร"),String(e.keyName||"").trim()||(t.keyName="กรุณากรอกชื่อกุญแจพิเศษ");const n=Number(e.keysRequired);(!Number.isFinite(n)||n<=0)&&(t.keysRequired="กรุณากรอกจำนวนกุญแจที่มากกว่า 0");const a=Number(e.coins);return(!Number.isFinite(a)||a<=0)&&(t.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0"),e.startAt||(t.startAt="กรุณาเลือกวันและเวลาเริ่มต้น"),e.endAt||(t.endAt="กรุณาเลือกวันและเวลาสิ้นสุด"),e.startAt&&e.endAt&&new Date(e.endAt)<=new Date(e.startAt)&&(t.endAt="วันสิ้นสุดต้องอยู่หลังวันเริ่มต้น"),{ok:Object.keys(t).length===0,errors:t}}function wa(e){const t=Io(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=Y(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=ba({...e,id:r,name:String(e.name).trim(),keyName:String(e.keyName).trim(),createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return va(c),{ok:!0,promo:s}}function To(e){return va(Y().filter(t=>t.id!==e)),{ok:!0,id:e}}function Do(e,t){const n=it(e);return n?wa({...n,enabled:!!t}):{ok:!1,error:"ไม่พบโปรแจกกุญแจ"}}const Ye="banNiyai_events",xn="promo-open-house",qo="event-promo-open-house",Lo="event-keypromo-happy-new-year",Co="keypromo-happy-new-year",Bo=`เติมเงินครั้งแรก รับเหรียญเพิ่ม 20%
ของยอดที่เติม ใช้ได้กับทุกแพ็กเติมเหรียญ
(ให้สิทธิ์เฉพาะนักอ่านที่เติมครั้งแรกเท่านั้น)`,Uo=`เช็กอินกุญแจสีรุ้งครบ 7 ดอก แลกได้ 20 เหรียญ

หมายเหตุ: หากเช็กอินไม่ครบตามระยะเวลากิจกรรม กุญแจสีรุ้งจะหมดอายุทันที ไม่สามารถสะสมไว้รอบหน้าได้`,Po="/gifts/coin.png",Ro="/images/keys/key-rainbow.webp";function Sa(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function _a(e,t){localStorage.setItem(e,JSON.stringify(t))}function Oo(e){if(!e||!e.id)return null;const t=String(e.title||"").trim();return t?{id:String(e.id),title:t,startAt:e.startAt||"",endAt:e.endAt||"",detail:String(e.detail||"").trim(),image:e.image?String(e.image):"",promoId:e.promoId?String(e.promoId):"",createdAt:e.createdAt,updatedAt:e.updatedAt}:null}function Mo(){L();const e=ot(xn),t=new Date().toISOString();return[{id:qo,title:"โปรเปิดบ้านนิยาย",startAt:e?.startAt||"2026-11-01T00:00:00+07:00",endAt:e?.endAt||"2026-12-31T23:59:00+07:00",detail:Bo,image:Po,promoId:xn,createdAt:e?.createdAt||t,updatedAt:t},{id:Lo,title:"Happy new year",startAt:"2026-12-27T00:00:00+07:00",endAt:"2027-01-02T23:59:00+07:00",detail:Uo,image:Ro,promoId:Co,createdAt:t,updatedAt:t}]}function M({force:e=!1}={}){const t=Sa(Ye,null);return(e||!Array.isArray(t))&&_a(Ye,Mo()),J()}function J(){const e=Sa(Ye,null);return(Array.isArray(e)?e:[]).map(Oo).filter(Boolean)}function Fo(e){return J().find(t=>t.id===e)||null}function Et({promoId:e,title:t}={}){M();const n=J();if(e){const a=n.find(r=>r.promoId===e);if(a)return a}if(t){const a=n.find(r=>r.title===t);if(a)return a}return null}function It(e){return e?`/events#event-${e.id}`:"/events"}function Qt(e){return _a(Ye,e),J()}function Ho(e){const t={},n=String(e.title||"").trim();n||(t.title="กรุณากรอกชื่อกิจกรรม");const a=e.startAt||"",r=e.endAt||"";if(a||(t.startAt="กรุณาเลือกวันเริ่มต้น"),r||(t.endAt="กรุณาเลือกวันสิ้นสุด"),a&&r&&new Date(a)>new Date(r)&&(t.endAt="วันสิ้นสุดต้องไม่ก่อนวันเริ่มต้น"),Object.keys(t).length)return{ok:!1,errors:t};M();const o=J(),s=new Date().toISOString(),c=String(e.id||"").trim()||`event-${Date.now()}`,i=o.find(p=>p.id===c),d={id:c,title:n,startAt:a,endAt:r,detail:String(e.detail||"").trim(),image:String(e.image||"").trim(),promoId:i?.promoId||String(e.promoId||"").trim(),createdAt:i?.createdAt||s,updatedAt:s},u=i?o.map(p=>p.id===c?d:p):[...o,d];return Qt(u),{ok:!0,event:d}}function En(e,t){const n=String(t||"").trim();if(!e||!n)return;M();const a=J();if(!a.some(o=>o.promoId===e))return;const r=new Date().toISOString();Qt(a.map(o=>o.promoId===e?{...o,image:n,updatedAt:r}:o))}function jo(e){return M(),Qt(J().filter(t=>t.id!==e)),{ok:!0}}const Aa="banNiyai_reports",Na=1e3,xa=[{id:"topup",name:"ปัญหาการเติมเหรียญ"},{id:"bonus",name:"ไม่ได้รับโบนัส"},{id:"unlock",name:"ปลดล็อกแล้วเข้าอ่านไม่ได้"},{id:"login",name:"เข้าสู่ระบบไม่ได้"},{id:"checkin",name:"เช็กอินหรือแลกเหรียญไม่ได้"},{id:"balance",name:"เหรียญหายหรือยอดไม่ตรง"},{id:"display",name:"หน้าเว็บแสดงผลผิดปกติ"},{id:"other",name:"อื่นๆ"}],In={author:"แอดมิน J.Jusmin",bot:"แอดมินบอท"};function ct(e){return xa.find(t=>t.id===e)||null}function lt(){try{const e=localStorage.getItem(Aa),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function en(e){localStorage.setItem(Aa,JSON.stringify(e))}function Tn(e,t){const n=(e.messages||[]).filter(a=>!t||t.includes(a.role));return n.length?n[n.length-1]:null}function ue(e){const t=new Date(e||0).getTime();return Number.isNaN(t)?0:t}function tn(e){const t=Array.isArray(e.messages)?e.messages:[],n=t[t.length-1]||null,a=Tn({messages:t},["reader"]),r=Tn({messages:t},["author","bot"]);return{...e,messages:t,topicName:ct(e.topicId)?.name||"อื่นๆ",lastAt:n?n.createdAt:e.createdAt,last:n,authorUnread:!!(a&&ue(a.createdAt)>ue(e.authorSeenAt)),readerUnread:!!(r&&ue(r.createdAt)>ue(e.readerSeenAt))}}function Ko(e,t){return e.role==="author"?In.author:e.role==="bot"?In.bot:t?.userName||"นักอ่าน"}function Ea(e){return String(e??"").replace(/\r\n/g,`
`).trim().slice(0,Na)}function dt(){return lt().map(tn).sort((e,t)=>ue(t.lastAt)-ue(e.lastAt))}function Vo(e){return dt().filter(t=>t.userId===e)}function nn(e){return dt().find(t=>t.id===e)||null}function Yo({topicId:e,text:t}={}){const n=y();if(!n)return{ok:!1,error:"กรุณาเข้าสู่ระบบก่อน"};const a=ct(e);if(!a)return{ok:!1,error:"กรุณาเลือกหัวข้อ"};const r=Ea(t);if(!r)return{ok:!1,error:"กรุณาพิมพ์ข้อความ"};const o=new Date().toISOString(),s={id:`r-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,userId:n.id,userName:n.displayName,userEmail:n.email,topicId:a.id,createdAt:o,updatedAt:o,readerSeenAt:o,authorSeenAt:null,messages:[{id:`m-${Date.now().toString(36)}`,role:"reader",text:r,createdAt:o}]};return en([...lt(),s]),{ok:!0,report:tn(s)}}function Ia(e,t,n){const a=Ea(n);if(!a)return{ok:!1,error:"กรุณาพิมพ์ข้อความ"};const r=lt(),o=r.findIndex(d=>d.id===e);if(o<0)return{ok:!1,error:"ไม่พบเรื่องที่แจ้ง"};const s=new Date().toISOString(),c={id:`m-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,role:t,text:a,createdAt:s},i={...r[o],updatedAt:s,messages:[...r[o].messages||[],c]};return t==="reader"?i.readerSeenAt=s:t==="author"&&(i.authorSeenAt=s),r[o]=i,en(r),{ok:!0,message:c,report:tn(i)}}function Jo(e,t){const n=y(),a=nn(e);return!n||!a||a.userId!==n.id?{ok:!1,error:"ไม่พบเรื่องที่แจ้ง"}:Ia(e,"reader",t)}function Zo(e,t){return Vt()?Ia(e,"author",t):{ok:!1,error:"เฉพาะนักเขียนเท่านั้น"}}function ut(e,t){const n=lt(),a=n.findIndex(s=>s.id===e);if(a<0)return;const r=t==="author"?"authorSeenAt":"readerSeenAt",o=new Date().toISOString();n[a]={...n[a],[r]:o},en(n)}function Ta(){return dt().filter(e=>e.authorUnread)}const Da="banNiyai_notifications";function Wo(e){const t=Number(new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric"}).format(e).slice(0,4));return String((t+543)%100).padStart(2,"0")}function Dn(e){if(!e?.startAt||!e?.endAt)return"";const t=new Date(e.startAt),n=new Date(e.endAt);if(Number.isNaN(t.getTime())||Number.isNaN(n.getTime()))return"";const a={timeZone:"Asia/Bangkok"},r=s=>new Intl.DateTimeFormat("th-TH",{day:"numeric",month:"short",...a}).format(s),o=s=>`${r(s)} ${Wo(s)}`;return`${o(t)} ถึง ${o(n)}`}function an(){try{const e=localStorage.getItem(Da);if(!e)return{seeded:!1,items:[]};const t=JSON.parse(e);if(Array.isArray(t))return{seeded:t.length>0,items:t};const n=Array.isArray(t?.items)?t.items:[];return{seeded:!!t?.seeded,items:n}}catch{return{seeded:!1,items:[]}}}function rn(e){localStorage.setItem(Da,JSON.stringify(e))}function Go(){const e=[],t=v("school-bell-floor-four")||ye().find(a=>a.chapters?.length)||null,n=t?.chapters?.length?t.chapters[t.chapters.length-1]:null;t&&n&&e.push({id:`seed-chapter-${t.id}-${n.id}`,type:"chapter",kindLabel:"อัปเดตตอนใหม่",title:t.title,body:`ตอนที่ ${n.id} ${n.title}`,href:w({name:"reader",novelId:t.id,chapterId:n.id}),createdAt:n.publishedAt||new Date().toISOString(),readAt:null}),L(),M();for(const a of da()){const r=Dn(a),o=Et({promoId:a.id,title:a.name});e.push({id:`seed-promo-${a.id}`,type:"activity",kindLabel:"กิจกรรม",title:a.name,body:r?`โปรเติมเหรียญ ${r}`:"โปรเติมเหรียญ",href:o?It(o):w({name:"coins"}),promoId:a.id,createdAt:a.startAt||new Date().toISOString(),readAt:null})}for(const a of Xt()){const r=Dn(a),o=Et({promoId:a.id,title:a.name});e.push({id:`seed-keypromo-${a.id}`,type:"activity",kindLabel:"กิจกรรม",title:a.name,body:r?`โปรแจกกุญแจ ${r}`:"โปรแจกกุญแจ",href:o?It(o):w({name:"home"}),promoId:a.id,createdAt:a.startAt||new Date().toISOString(),readAt:null})}return e.sort((a,r)=>new Date(r.createdAt)-new Date(a.createdAt)),e}function qa({force:e=!1}={}){const t=an();if(!e&&t.seeded&&Array.isArray(t.items))return t.items;const n=Go();return rn({seeded:!0,items:n}),n}function zo(e){if(e?.type!=="activity")return e?.href;const t=Et({promoId:e.promoId,title:e.title});return t?It(t):e.href}function Xo(){return Vt()?Ta().map(e=>{const t=[...e.messages].reverse().find(r=>r.role==="reader"),n=String(t?.text||"").replace(/\s+/g," "),a=n.length>60?`${n.slice(0,60)}…`:n;return{id:`report-${e.id}`,type:"report",kindLabel:"แจ้งปัญหา",title:e.topicName,body:`${e.userName}: ${a}`,href:`/admin?tab=reports&report=${encodeURIComponent(e.id)}`,createdAt:t?.createdAt||e.createdAt,readAt:null}}):[]}function La(){return M(),[...Xo(),...qa()].sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt)).map(e=>e.type==="report"?e:{...e,href:zo(e)})}function Tt(){return La().filter(e=>!e.readAt).length}function Qo(e){if(!e)return;if(String(e).startsWith("report-")){ut(String(e).slice(7),"author");return}const t=an(),n=new Date().toISOString();let a=!1;for(const r of t.items||[])r.id===e&&!r.readAt&&(r.readAt=n,a=!0);a&&rn(t)}function es(){const e=an(),t=new Date().toISOString();let n=!1;for(const a of e.items||[])a.readAt||(a.readAt=t,n=!0);n&&rn(e)}const Ca="banNiyai_ageConfirmed18",Ba="banNiyai_readerTheme",Ua="banNiyai_readerFontSize";function ts(){return localStorage.getItem(Ca)==="true"}function ns(){localStorage.setItem(Ca,"true")}function Pa(){return localStorage.getItem(Ba)==="night"?"night":"light"}function as(e){localStorage.setItem(Ba,e)}function rs(){const e=Number(localStorage.getItem(Ua));return e>=16&&e<=28?e:18}function os(e){localStorage.setItem(Ua,String(e))}const Dt="banNiyai_wallet",on="banNiyai_walletTx",sn="banNiyai_unlocks",qt="banNiyai_checkins",De=[{id:"pack-50",thb:50,coins:55,bonus:5},{id:"pack-100",thb:100,coins:110,bonus:10},{id:"pack-300",thb:300,coins:330,bonus:30},{id:"pack-500",thb:500,coins:550,bonus:50}];function Z(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function cn(e,t){localStorage.setItem(e,JSON.stringify(t))}function T(){return y()}function Ra(e,t,n){const a=T();if(!a)return null;const r=Z(e,{}),o=r[a.id]??t,s=n(o);return r[a.id]=s,cn(e,r),s}function qn(){return{purchased:0,bonuses:[]}}function qe(){const e=T();if(!e)return qn();const n=Z(Dt,{})[e.id];return typeof n=="number"?{purchased:Number(n)||0,bonuses:[]}:!n||typeof n!="object"?qn():{purchased:Math.max(0,Number(n.purchased)||0),bonuses:Array.isArray(n.bonuses)?n.bonuses:[]}}function pt(e){const t=T();if(!t)return null;const n=Z(Dt,{});return n[t.id]=e,cn(Dt,n),e}function ss(e=qe(),t=new Date){const n=t.getTime();return(e.bonuses||[]).filter(a=>{if(Number(a.remaining)<=0)return!1;if(!a.expiresAt)return!0;const r=new Date(a.expiresAt).getTime();return!Number.isNaN(r)&&r>n})}function B(){const e=qe(),t=ss(e).reduce((n,a)=>n+Number(a.remaining||0),0);return{purchased:e.purchased,bonus:t,total:e.purchased+t}}function he(){return B().total}function Oa(){return mt().some(e=>e.type==="topup")}function Ma(e){const t=qe();let n=e,a=0,r=0;const o=Date.now(),c=[...t.bonuses||[]].sort((d,u)=>!d.expiresAt&&!u.expiresAt?0:d.expiresAt?u.expiresAt?new Date(d.expiresAt)-new Date(u.expiresAt):-1:1).map(d=>{if(n<=0||Number(d.remaining)<=0||d.expiresAt&&new Date(d.expiresAt).getTime()<=o)return d;const u=Math.min(Number(d.remaining),n);return n-=u,a+=u,{...d,remaining:Number(d.remaining)-u}});let i=t.purchased;if(n>0){const d=Math.min(i,n);i-=d,n-=d,r+=d}return{wallet:{purchased:i,bonuses:c},fromBonus:a,fromPurchased:r,left:n}}function mt(){const e=T();return e?(Z(on,{})[e.id]||[]).slice().reverse():[]}function te(e){if(!e||e.free)return 0;const t=Number(e.price);return Number.isFinite(t)&&t>0?t:0}function Fa(e,t){const n=T();return n?!!Z(sn,{})[n.id]?.[`${e}:${t}`]:!1}function me(e,t){return!t||!e||!ve(t)?!1:te(t)<=0?!0:Fa(e.id,t.id)}function ft(e){Ra(on,[],t=>[...t,{id:crypto.randomUUID(),createdAt:new Date().toISOString(),...e}])}function Lt(e){return e?new Date(Date.now()+Number(e)*24*60*60*1e3).toISOString():null}function is(e,{amount:t,source:n,label:a,promoId:r,promoName:o,expiryDays:s}){return!t||t<=0?e:{...e,bonuses:[...e.bonuses||[],{id:crypto.randomUUID(),remaining:t,amount:t,source:n,label:a,promoId:r||null,promoName:o||null,expiresAt:Lt(s),createdAt:new Date().toISOString()}]}}function ht({amount:e,source:t,label:n,expiryDays:a,txType:r,extraTx:o={}}){return T()?(pt(is(qe(),{amount:e,source:t,label:n,expiryDays:a})),ft({type:r||t,coins:e,label:`${n} +${e}`,...o}),{ok:!0,amount:e,balance:he(),breakdown:B()}):{ok:!1,reason:"auth"}}function cs(){if(!T())return{ok:!1,reason:"auth"};L();const t=C().signup;return t.enabled?mt().some(n=>n.type==="signup-bonus")?{ok:!1,reason:"already"}:ht({amount:t.coins,source:"signup",label:"โบนัสสมัครสมาชิก",expiryDays:t.bonusExpiryDays,txType:"signup-bonus"}):{ok:!1,reason:"disabled"}}function Je(){return{lastDate:null,keys:0,special:{},exchanged:{}}}function Ha(e){const t={};if(!e||typeof e!="object")return t;for(const[n,a]of Object.entries(e)){const r=Math.max(0,Math.round(Number(a)||0));r>0&&(t[n]=r)}return t}function ja(e){const t={};if(!e||typeof e!="object")return t;for(const[n,a]of Object.entries(e))a&&(t[n]=!0);return t}function Ze(e){if(!e)return Je();const t=Z(qt,{})[e];return t?typeof t=="string"?{lastDate:t,keys:0,special:{},exchanged:{}}:{lastDate:t.lastDate||null,keys:Math.max(0,Math.round(Number(t.keys)||0)),special:Ha(t.special),exchanged:ja(t.exchanged)}:Je()}function gt(e,t){const n=Z(qt,{});return n[e]={lastDate:t.lastDate||null,keys:Math.max(0,Math.round(Number(t.keys)||0)),special:Ha(t.special),exchanged:ja(t.exchanged)},cn(qt,n),n[e]}const ls="Happy new year",ds="2027-01-03T00:00:00+07:00";function ln(e){return e?.name===ls}function Ka(){return new Date(ds)}function dn(e,t=new Date){if(!e)return Ze(e);L();const n=Ze(e),a=new Map(Y().map(s=>[s.id,s])),r={...n.special};let o=!1;for(const[s,c]of Object.entries(r)){const i=a.get(s);if(!i){delete r[s],o=!0;continue}if(ln(i)){if(t<Ka()||!!!n.exchanged[i.id]&&c>=i.keysRequired)continue;delete r[s],o=!0;continue}$a(i,t)&&(delete r[s],o=!0)}return o?gt(e,{...n,special:r}):n}function us(e=new Date){L();const t=Y().find(c=>ln(c)&&c.enabled!==!1);if(!t)return null;const n=y(),a=n?dn(n.id,e):Je();if(a.exchanged[t.id])return null;const r=new Date(t.startAt);if(Number.isNaN(r.getTime())||e<r)return null;const o=Number(a.special[t.id]||0),s=o>=t.keysRequired;return e>=Ka()&&!s?null:{promo:t,keys:o,keysRequired:t.keysRequired,coins:t.coins,alreadyExchanged:!1,canExchange:s}}function un(e=new Date){L();const t=C().checkin,n=t.keysPerDay,a=t.keysRequired||t.keysPerCoin,r=t.coins||a,o=a,s=T(),c=s?dn(s.id,e):Je(),i=lo(e),d=c.lastDate===i,u=ka(e),p=Xt(e).map(m=>{const g=Number(c.special[m.id]||0),k=!!c.exchanged[m.id];return{promo:m,keys:g,keysRequired:m.keysRequired,coins:m.coins,alreadyExchanged:k,canExchange:!k&&g>=m.keysRequired}});return t.enabled?{enabled:!0,keys:c.keys,keysPerDay:n,keysRequired:a,coins:r,keysPerCoin:o,checkedInToday:d,canExchange:c.keys>=a,currentKeyPromo:u,keyPromos:p,today:i}:{enabled:!1,keys:c.keys,keysPerDay:n,keysRequired:a,coins:r,keysPerCoin:o,checkedInToday:d,canExchange:!1,currentKeyPromo:u,keyPromos:p,today:i}}function ps(e=new Date){const t=T();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนเช็คอิน"};const n=un(e);if(!n.enabled)return{ok:!1,reason:"disabled",error:"เช็คอินรายวันยังไม่เปิดใช้"};if(n.checkedInToday)return{ok:!1,reason:"already",error:"เช็คอินวันนี้แล้ว"};const a=Ze(t.id),r=ka(e);let o=a.keys;const s={...a.special};r?s[r.id]=(s[r.id]||0)+n.keysPerDay:o+=n.keysPerDay;const c=gt(t.id,{...a,lastDate:n.today,keys:o,special:s});return{ok:!0,keys:c.keys,special:c.special,currentKeyPromo:r}}function ms(){const e=T();if(!e)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกเหรียญ"};const t=un();if(!t.enabled)return{ok:!1,reason:"disabled",error:"เช็คอินรายวันยังไม่เปิดใช้"};const n=t.keysRequired||t.keysPerCoin,a=t.coins||n;if(t.keys<n)return{ok:!1,reason:"short",error:`ต้องมีกุญแจเงิน ${n} ดอก จึงจะแลกได้ ${a} เหรียญ`,keys:t.keys,keysRequired:n};const r=Ze(e.id),o=gt(e.id,{...r,keys:r.keys-n});return{...ht({amount:a,source:"key-exchange",label:`แลกกุญแจเงิน ${n} ดอก`,expiryDays:C().checkin.bonusExpiryDays,txType:"key-exchange"}),keys:o.keys,canExchange:o.keys>=n}}function fs(e){const t=T();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกเหรียญ"};const n=it(e),a=new Date,r=dn(t.id,a),o=r.special[n?.id]||0,s=!!(n&&ln(n)&&$a(n,a)&&!r.exchanged[n.id]&&o>=n.keysRequired);if(!n||!zt(n,a)&&!s)return{ok:!1,reason:"inactive",error:"โปรแจกกุญแจนี้ยังไม่เปิดหรือหมดเขตแล้ว"};if(r.exchanged[n.id])return{ok:!1,reason:"already",error:"คุณแลกโปรนี้ไปแล้ว",keys:r.special[n.id]||0};const c=r.special[n.id]||0;if(c<n.keysRequired)return{ok:!1,reason:"short",error:`ต้องมี${n.keyName} ${n.keysRequired} อัน จึงจะแลกได้ ${n.coins} เหรียญ`,keys:c};const i={...r.special,[n.id]:c-n.keysRequired},d={...r.exchanged,[n.id]:!0},u=gt(t.id,{...r,special:i,exchanged:d});return{...ht({amount:n.coins,source:"key-promo-exchange",label:`แลก${n.keyName} ${n.keysRequired} อัน (${n.name})`,txType:"key-promo-exchange",extraTx:{keyPromoId:n.id,promoName:n.name}}),keys:u.special[n.id]||0,alreadyExchanged:!0}}function hs(e){const t=T();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกโค้ด"};const n=Ao(e,t.id);return n.ok?(No(n.record.id,t.id),ht({amount:n.record.coins,source:"redeem",label:`แลกโค้ด ${n.record.code}`,expiryDays:n.record.bonusExpiryDays,txType:"redeem",extraTx:{code:n.record.code,redeemId:n.record.id}})):n}function gs(e){return bs(e)}function bs(e){if(!T())return{ok:!1,reason:"auth"};const n=De.find(c=>c.id===e);if(!n)return{ok:!1,reason:"package"};L();const a=pa(n,{isFirstTopUp:!Oa()}),r=qe(),o=[...r.bonuses||[]];if(a.packageBonus>0&&o.push({id:crypto.randomUUID(),remaining:a.packageBonus,amount:a.packageBonus,source:"package",label:"โบนัสแพ็ก",expiresAt:null,createdAt:new Date().toISOString()}),a.firstTopUpBonus>0){const c=a.firstTopUp?.bonusExpiryDays;o.push({id:crypto.randomUUID(),remaining:a.firstTopUpBonus,amount:a.firstTopUpBonus,source:"first-topup",label:"โบนัสเติมครั้งแรก",expiresAt:Lt(c),createdAt:new Date().toISOString()})}a.promoBonus>0&&a.promo&&o.push({id:crypto.randomUUID(),remaining:a.promoBonus,amount:a.promoBonus,source:"promo",promoId:a.promo.id,promoName:a.promo.name,label:a.promo.name,expiresAt:Lt(a.promo.bonusExpiryDays),createdAt:new Date().toISOString()}),pt({purchased:r.purchased+a.paid,bonuses:o});const s=[`เติม ${a.paid} เหรียญ (${n.thb} บาท) — ทดลอง`];return a.packageBonus&&s.push(`โบนัสแพ็ก +${a.packageBonus}`),a.firstTopUpBonus&&s.push(`โบนัสเติมครั้งแรก +${a.firstTopUpBonus}`),a.promoBonus&&a.promo&&s.push(`${a.promo.name} +${a.promoBonus}`),ft({type:"topup",coins:a.total,paid:a.paid,packageBonus:a.packageBonus,firstTopUpBonus:a.firstTopUpBonus,promoBonus:a.promoBonus,promoId:a.promo?.id||null,promoName:a.promo?.name||null,thb:n.thb,packageId:n.id,method:"mock-trial",label:s.join(" · ")}),{ok:!0,balance:he(),breakdown:B(),quote:a,pack:n}}function ys(e,t){if(!T())return{ok:!1,reason:"auth"};const a=v(e),r=be(a,t);if(!a||!r||!ve(r))return{ok:!1,reason:"notfound"};if(te(r)<=0||Fa(e,t))return{ok:!0,already:!0,balance:he()};const o=te(r),s=B();if(s.total<o)return{ok:!1,reason:"insufficient",balance:s.total,breakdown:s,price:o,novel:a,chapter:r};const c=Ma(o);if(c.left>0)return{ok:!1,reason:"insufficient",balance:s.total,breakdown:s,price:o,novel:a,chapter:r};pt(c.wallet),Ra(sn,{},d=>({...d,[`${e}:${t}`]:{novelId:e,chapterId:t,price:o,unlockedAt:new Date().toISOString()}}));const i=[];return c.fromBonus&&i.push(`ใช้โบนัส ${c.fromBonus}`),c.fromPurchased&&i.push(`ใช้เหรียญ ${c.fromPurchased}`),ft({type:"unlock",coins:-o,fromBonus:c.fromBonus,fromPurchased:c.fromPurchased,novelId:e,chapterId:t,label:`ปลดล็อก ${a.title} ตอนที่ ${r.id} ${r.title}${i.length?` (${i.join(" + ")})`:""}`}),{ok:!0,balance:he(),breakdown:B(),price:o,fromBonus:c.fromBonus,fromPurchased:c.fromPurchased,novel:a,chapter:r}}function vs(e,t={}){if(!T())return{ok:!1,reason:"auth"};const a=Number(e),r=Math.round(a);if(!Number.isFinite(a)||r!==a||r<=0)return{ok:!1,reason:"invalid"};const o=B();if(o.total<r)return{ok:!1,reason:"insufficient",balance:o.total,breakdown:o,amount:r};const s=Ma(r);return s.left>0?{ok:!1,reason:"insufficient",balance:o.total,breakdown:o,amount:r}:(pt(s.wallet),ft({coins:-r,fromBonus:s.fromBonus,fromPurchased:s.fromPurchased,...t}),{ok:!0,amount:r,balance:he(),breakdown:B(),fromBonus:s.fromBonus,fromPurchased:s.fromPurchased})}function $s(){const e=Z(sn,{}),t=[];for(const[n,a]of Object.entries(e||{}))if(!(!a||typeof a!="object"))for(const r of Object.values(a))!r||!r.novelId||r.chapterId==null||t.push({userId:n,novelId:r.novelId,chapterId:String(r.chapterId),coins:Number(r.price)||0,unlockedAt:r.unlockedAt||null});return t}function ks(){const e=Z(on,{}),t=[];for(const[n,a]of Object.entries(e||{}))if(Array.isArray(a))for(const r of a){if(!r||r.type!=="topup")continue;const o=De.find(p=>p.id===r.packageId),s=Number(r.thb),c=Number(r.paid),i=Number(r.packageBonus),d=(Number(r.firstTopUpBonus)||0)+(Number(r.promoBonus)||0),u=Number(r.coins);t.push({id:r.id,userId:n,createdAt:r.createdAt||null,thb:Number.isFinite(s)&&s>0?s:Number(o?.thb)||0,paid:Number.isFinite(c)&&c>=0?c:Number(o?.thb)||0,packageBonus:Number.isFinite(i)&&i>=0?i:Number(o?.bonus)||0,firstTopUpPromo:d,coins:Number.isFinite(u)?u:0,packageId:r.packageId||null})}return t.sort((n,a)=>new Date(a.createdAt||0)-new Date(n.createdAt||0)),t}const We="banNiyai_donations",Ge=[{id:"candy",name:"อมยิ้ม",coins:1},{id:"rose",name:"ดอกกุหลาบ",coins:5},{id:"popcorn",name:"ป๊อปคอร์น",coins:10},{id:"milktea",name:"ชานมไข่มุก",coins:15},{id:"cake",name:"เค้ก",coins:20},{id:"coin",name:"เหรียญ",coins:null}],Ln="banNiyai_walletTx",ws=[["ลูกอม","อมยิ้ม"],["เค้กชิ้นสามเหลี่ยม","เค้ก"]];function Ss(e){return`/gifts/${e}.png`}function _s(){try{for(const[e,t]of ws){const n=localStorage.getItem(We);if(n&&n.includes(e)){const r=JSON.parse(n);let o=!1;for(const s of Object.values(r||{}))if(Array.isArray(s))for(const c of s)c&&c.giftName===e&&(c.giftName=t,o=!0);o&&localStorage.setItem(We,JSON.stringify(r))}const a=localStorage.getItem(Ln);if(a&&a.includes(e)){const r=JSON.parse(a);let o=!1;const s=c=>{if(Array.isArray(c))for(const i of c)i&&(i.giftName===e&&(i.giftName=t,o=!0),typeof i.label=="string"&&i.label.includes(e)&&(i.label=i.label.split(e).join(t),o=!0))};Array.isArray(r)?s(r):r&&typeof r=="object"&&Object.values(r).forEach(s),o&&localStorage.setItem(Ln,JSON.stringify(r))}}}catch{}}_s();function As(e){return Ge.find(t=>t.id===e)||null}function Va(){try{const e=localStorage.getItem(We);return e?JSON.parse(e):{}}catch{return{}}}function Ns(e){localStorage.setItem(We,JSON.stringify(e))}function xs({novelId:e,giftId:t,customAmount:n,chapterId:a}={}){const r=y();if(!r)return{ok:!1,reason:"auth"};const o=v(e);if(!o)return{ok:!1,reason:"notfound"};const s=As(t);if(!s)return{ok:!1,reason:"gift"};let c=s.coins;if(s.coins==null){const g=Number(n);if(c=Math.round(g),!Number.isFinite(g)||c!==g||c<=0)return{ok:!1,reason:"invalid",gift:s,novel:o}}const i=a?be(o,a):null;if(a&&!i)return{ok:!1,reason:"notfound",gift:s,novel:o};const d=i?`โดเนท ${s.name} ให้ ${o.title} ตอนที่ ${i.id} ${i.title}`:`โดเนท ${s.name} ให้ ${o.title}`,u=vs(c,{type:"donate",label:d,novelId:o.id,chapterId:i?i.id:null,giftId:s.id,giftName:s.name});if(!u.ok)return{...u,gift:s,novel:o,chapter:i,amount:c};const p={id:crypto.randomUUID(),userId:r.id,novelId:o.id,novelTitle:o.title,chapterId:i?i.id:null,chapterTitle:i?i.title:null,giftId:s.id,giftName:s.name,coins:c,fromBonus:u.fromBonus,fromPurchased:u.fromPurchased,createdAt:new Date().toISOString()},m=Va();return m[o.id]=[...m[o.id]||[],p],Ns(m),{ok:!0,...u,gift:s,novel:o,chapter:i,record:p}}function Es(){const e=Va(),t=[];for(const n of Object.values(e||{}))Array.isArray(n)&&t.push(...n);return t}function Be(){return{unlocks:0,unlockCoins:0,donations:0,donateCoins:0}}function z(e,{unlocks:t=0,unlockCoins:n=0,donations:a=0,donateCoins:r=0}={}){e.unlocks+=t,e.unlockCoins+=n,e.donations+=a,e.donateCoins+=r}function Is(){const e=ye(),t=new Map(e.map(a=>{const r=(a.chapters||[]).map(o=>({id:String(o.id),title:o.title,totals:Be()}));return[a.id,{id:a.id,title:a.title,author:a.author,totals:Be(),unassignedDonations:Be(),chapters:r,chapterMap:new Map(r.map(o=>[o.id,o]))}]})),n=Be();for(const a of $s()){const r=t.get(a.novelId);if(!r)continue;const o={unlocks:1,unlockCoins:a.coins};z(n,o),z(r.totals,o);const s=r.chapterMap.get(String(a.chapterId));s&&z(s.totals,o)}for(const a of Es()){const r=t.get(a.novelId);if(!r)continue;const s={donations:1,donateCoins:Number(a.coins)||0};if(z(n,s),z(r.totals,s),a.chapterId!=null&&a.chapterId!==""){const c=r.chapterMap.get(String(a.chapterId));z(c?c.totals:r.unassignedDonations,s)}else z(r.unassignedDonations,s)}return{overall:n,novels:e.map(a=>{const r=t.get(a.id);return{id:r.id,title:r.title,author:r.author,totals:r.totals,unassignedDonations:r.unassignedDonations,chapters:r.chapters}})}}function Ts(){const e=ks().map(s=>{const c=Hr(s.userId);return{...s,readerName:(c?.displayName||"").trim()||"นักอ่าน"}}),t=e.reduce((s,c)=>({thb:s.thb+c.thb,coins:s.coins+c.coins,count:s.count+1}),{thb:0,coins:0,count:0}),n=new Map,a=new Map;for(const s of e){const c=Ds(s.createdAt);c&&(n.set(c.monthKey,(n.get(c.monthKey)||0)+s.thb),a.set(c.yearKey,(a.get(c.yearKey)||0)+s.thb))}const r=[...n.entries()].sort((s,c)=>c[0].localeCompare(s[0])).map(([s,c])=>{const[i,d]=s.split("-").map(Number);return{key:s,year:i,month:d,thb:c}}),o=[...a.entries()].sort((s,c)=>c[0].localeCompare(s[0])).map(([s,c])=>({key:s,year:Number(s),thb:c}));return{totals:t,records:e,byMonth:r,byYear:o}}function Ds(e){if(!e)return null;const t=new Date(e);if(Number.isNaN(t.getTime()))return null;const n=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit"}).formatToParts(t),a=Number(n.find(o=>o.type==="year")?.value),r=Number(n.find(o=>o.type==="month")?.value);return!a||!r?null:{year:a,month:r,yearKey:String(a),monthKey:`${a}-${String(r).padStart(2,"0")}`}}const Ct="banNiyai_followChannels";function Ya(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function qs(e,t){localStorage.setItem(e,JSON.stringify(t))}function Ls(e){if(!e||!e.id)return null;const t=String(e.name||"").trim(),n=String(e.url||"").trim();return!t||!n?null:{id:String(e.id),name:t,url:n,enabled:e.enabled!==!1,sortOrder:Number.isFinite(Number(e.sortOrder))?Number(e.sortOrder):0,createdAt:e.createdAt,updatedAt:e.updatedAt}}function Cs(){const e=Ya(Ct,null);return Array.isArray(e)||qs(Ct,[]),Ja()}function Ja({includeDisabled:e=!1}={}){const t=Ya(Ct,null),n=(Array.isArray(t)?t:[]).map(Ls).filter(Boolean);return(e?n:n.filter(r=>r.enabled)).slice().sort((r,o)=>r.sortOrder-o.sortOrder||String(r.id).localeCompare(String(o.id)))}const Bs=[16,18,22],Us='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.4 12 4.8l8 6.6V20a1 1 0 0 1-1 1h-5.2v-6.2H10.2V21H5a1 1 0 0 1-1-1v-8.6Z"/></svg>',Ps='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h4.2v13.5H4V5Zm5.9 2.2h4.2V18.5H9.9V7.2Zm5.9-1.4H20V18.5h-4.2V5.8ZM3 19.4h18V21H3v-1.6Z"/></svg>',Rs='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 5H6v14h4v2H4V3h6v2Zm4.8 3.6-1.4 1.4 2.2 2H9v2h6.6l-2.2 2 1.4 1.4L19.4 12 14.8 8.6Z"/></svg>',Os='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.4 0-8 1.7-8 5v1h16v-1c0-3.3-4.6-5-8-5Z"/></svg>',Ms='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9.4L5 20.4V17H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm7 3v5h2V7h-2Zm0 6.5V15.5h2v-2h-2Z"/></svg>',Fs='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10l1 4H6L7 3Zm-1 6h12v12H6V9Zm3 3v2h6v-2H9Z"/></svg>',Hs='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.4 0-8 1.7-8 5v1h16v-1c0-3.3-4.6-5-8-5Z"/></svg>',js='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Zm1.75 1.1 7.25 5.05 7.25-5.05V17.25c0 .41-.34.75-.75.75H5.5a.75.75 0 0 1-.75-.75V7.6Z"/></svg>',Cn='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.5 3a7.5 7.5 0 0 1 5.8 12.2l4.2 4.2-1.4 1.4-4.2-4.2A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/></svg>',Za='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 9V8a5 5 0 0 0-10 0v1H5v12h14V9h-2Zm-8-1a3 3 0 0 1 6 0v1H9V8Zm3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>',Ks='<svg class="home-daily__icon home-daily__icon--bonus" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="10" width="17" height="10.5" rx="1.8" fill="#d2647a"/><rect x="3" y="7.2" width="18" height="4" rx="1.2" fill="#ec8fa3"/><rect x="11" y="7.2" width="2" height="13.3" fill="#f6d15a"/><path fill="#e8b423" d="M12 7.2c-2.4-3.4-6.2-2.4-6.2.2 0 1.5 2.4 2.5 6.2 3.4 3.8-.9 6.2-1.9 6.2-3.4 0-2.6-3.8-3.6-6.2-.2Z"/></svg>',Bt='<svg class="coin-pack__coin" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#C99212"/><circle cx="12" cy="12" r="10.15" fill="#F3C63A"/><circle cx="12" cy="12" r="8.15" fill="#E8B423"/><circle cx="12" cy="12" r="7.35" fill="none" stroke="#FFE89A" stroke-width="0.85"/><path fill="#8F6508" d="M13.05 6.35h-2.1v1.12c-1.72.28-2.92 1.42-2.92 2.98 0 1.22.76 2.16 2.18 2.56l.74.2v3.32c-.72-.2-1.2-.7-1.36-1.26H7.45c.26 1.48 1.48 2.5 2.5 2.78v1.08h2.1v-1.06c1.78-.26 3.02-1.42 3.02-3.08 0-1.28-.8-2.22-2.2-2.6l-.82-.22V8.88c.66.2 1.12.7 1.24 1.22h1.92c-.22-1.38-1.36-2.34-2.36-2.58V6.35Zm-2.1 5.55c-.7-.18-1.14-.55-1.14-1.16 0-.7.5-1.14 1.14-1.3v2.46Zm2.1 1.16v2.62c-.74.2-1.26.56-1.26 1.22 0 .7.52 1.14 1.26 1.32v-5.16Z"/></svg>',Vs='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 14.93V18h-2v-1.07A4 4 0 0 1 8 14h2a2 2 0 0 0 2 2 2 2 0 0 0 0-4h-1v-2h1a2 2 0 0 0 0-4 2 2 0 0 0-2 2H8a4 4 0 0 1 3-3.93V6h2v1.07A4 4 0 0 1 16 10h-2a2 2 0 0 0-2-2 2 2 0 0 0 0 4h1v2h-1a2 2 0 0 0 0 4 2 2 0 0 0 2-2h2a4 4 0 0 1-3 3.93Z"/></svg>',Wa='<svg class="icon follow-btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a1 1 0 0 1 1 1v17.2l-6-3.4-6 3.4V4a1 1 0 0 1 1-1Z"/></svg>',Ga='<svg class="icon follow-btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 16.6 5 12.4l1.4-1.4 2.8 2.8 8-8L18.6 7.2 9.2 16.6Z"/></svg>',Ys='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.5-5.6-5.6S8.9 6.2 12 6.2c1.8 0 3 .7 3.7 1.3l2.4-2.4C16.7 3.7 14.5 2.8 12 2.8 6.9 2.8 2.8 6.9 2.8 12S6.9 21.2 12 21.2c5.2 0 8.6-3.6 8.6-8.7 0-.6 0-1-.1-1.5H12Z"/></svg>';function l(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const Js=2*1024*1024,Zs="ไฟล์ใหญ่เกินไป กรุณาเลือกรูปที่ไม่เกิน 2MB",Ws="ไม่สามารถอ่านไฟล์รูปนี้ได้ กรุณาเลือกรูปอื่น",ge="พื้นที่เก็บข้อมูลในเบราว์เซอร์เต็ม กรุณาเลือกรูปที่เล็กลง";async function bt(e,{maxSide:t=1024,maxChars:n=35e4,errorMessage:a}={}){if(!e||!String(e.type||"").startsWith("image/"))return{ok:!1,error:"กรุณาเลือกไฟล์ภาพ"};if(e.size>Js)return{ok:!1,error:a||Zs};const r=URL.createObjectURL(e);try{const o=await new Promise((p,m)=>{const g=new Image;g.onload=()=>p(g),g.onerror=()=>m(new Error("unreadable")),g.src=r}),s=o.naturalWidth||300,c=o.naturalHeight||300;let i=Math.min(1,t/Math.max(s,c)),d=.86,u="";for(let p=0;p<6;p+=1){const m=document.createElement("canvas");m.width=Math.max(1,Math.round(s*i)),m.height=Math.max(1,Math.round(c*i));const g=m.getContext("2d");if(u=m.toDataURL("image/webp",d),u.startsWith("data:image/webp")?(g.drawImage(o,0,0,m.width,m.height),u=m.toDataURL("image/webp",d)):(g.fillStyle="#fff",g.fillRect(0,0,m.width,m.height),g.drawImage(o,0,0,m.width,m.height),u=m.toDataURL("image/jpeg",d)),u.length<=n)break;d=Math.max(.5,d-.1),i*=.82}return{ok:!0,dataUrl:u}}catch{return{ok:!1,error:Ws}}finally{URL.revokeObjectURL(r)}}function pn(e){if(!e)return"";const t=String(e),n=/^\d{4}-\d{2}-\d{2}$/.test(t)?new Date(`${t}T00:00:00+07:00`):new Date(t);return Number.isNaN(n.getTime())?"":ce(n)}function Le(e){if(e?.image)return"";const t=e?.from||"#F7B3BE",n=e?.to||"#8A5A9A";return`background: linear-gradient(165deg, ${t} 0%, ${n} 100%);`}function yt(e,{photoClass:t,motifClass:n}={}){const a=e.cover?.image?`<img class="${t}" src="${l(e.cover.image)}" alt="" />`:"",r=e.cover?.image?"":`<span class="${n}">${l(e.cover?.motif||"")}</span>`;return`${za(e)}${a}${r}`}function mn(e,{filledMain:t=!1,maxSecondary:n=null}={}){const a=(e.tags||[]).map(i=>Ft(i)).filter(Boolean).map(i=>`<span class="chip${t?" chip--filled":""}">${l(i.name)}</span>`);let r=e.secondaryTags||[];n!=null&&(r=r.slice(0,n));const o=r.map(i=>`<span class="chip chip--outline">${l(i)}</span>`);if(!a.length&&!o.length)return"";const s=a.length?`<div class="chips__row chips__row--main">${a.join("")}</div>`:"",c=o.length?`<div class="chips__row chips__row--secondary">${o.join("")}</div>`:"";return`<div class="chips">${s}${c}</div>`}function za(e){return e&&(e.isAdult||e.tags&&je(e))?'<span class="badge-18" title="เนื้อหาสำหรับผู้มีอายุ 18 ปีขึ้นไป">18+</span>':""}function ze(){return Xn(new URLSearchParams(window.location.search).get("next"))}function N(e){const t=e==="home"?' aria-current="page"':"",n=e==="login"?' aria-current="page"':"",a=e==="bookshelf"?' aria-current="page"':"",r=y(),o=I()==="/login"||I()==="/signup"?"/":I(),s=w({name:"login",next:o==="/"?void 0:o});let c="";if(r){const u=e==="profile"?' aria-current="page"':"",p=e==="purchases"?' aria-current="page"':"",m=e==="report"?' aria-current="page"':"";c=`
      <div class="account-menu">
        <button class="account-menu__btn" type="button" data-account-toggle aria-expanded="false" aria-haspopup="true" aria-controls="account-menu-list" aria-label="${l(r.displayName)}">
          <span class="avatar" aria-hidden="true">${Ut(r)}</span>
        </button>
        <div class="account-menu__list" id="account-menu-list" hidden>
          <div class="account-menu__profile">
            <span class="avatar avatar--menu" aria-hidden="true">${Ut(r)}</span>
            <p class="account-menu__profile-name">${l(r.displayName)}</p>
          </div>
          <a href="/profile" data-link${u}>${Os}แก้ไขโปรไฟล์</a>
          <a href="/bookshelf" data-link${a}>${Ps}ชั้นหนังสือ</a>
          <a href="/purchases" data-link${p}>${Fs}ประวัติการซื้อ</a>
          <a href="/report" data-link${m}>${Ms}แจ้งปัญหาการใช้งาน</a>
          <button type="button" data-logout>${Rs}ออกจากระบบ</button>
        </div>
      </div>
    `}else c=`
      <a class="header-link" href="${s}" data-link${n}>${Hs}เข้าสู่ระบบ</a>
    `;const i=e==="search"&&new URLSearchParams(window.location.search).get("q")||"",d=e==="search";return`
    <a class="skip-link" href="#main">ข้ามไปเนื้อหา</a>
    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="/" data-link>
          <span class="brand__mark">บ</span>
          <span class="brand__name">
            <span class="brand__name-full">${l(b.headerName)}</span>
            <span class="brand__name-short">${l(b.shortName)}</span>
          </span>
        </a>
        <form class="header-search${d?" is-open":""}" action="/search" method="get" role="search" data-search-form>
          <button class="header-search__toggle" type="button" data-search-toggle aria-expanded="${d?"true":"false"}" aria-label="${d?"ปิดช่องค้นหา":"เปิดช่องค้นหา"}">${Cn}</button>
          <input class="header-search__field" id="header-search-q" type="search" name="q" value="${l(i)}" placeholder="ค้นหานิยาย นามปากกา หรือแท็ก" autocomplete="off" aria-label="ค้นหานิยาย นามปากกา หรือแท็ก">
          <button class="header-search__go" type="submit" aria-label="ค้นหา">${Cn}</button>
        </form>
        <nav class="header-nav" aria-label="เมนูหลัก">
          <a class="header-nav-home" href="/" data-link${t}>${Us}หน้าแรก</a>
          ${Mc()}
          ${c}
        </nav>
      </div>
    </header>
  `}function x(){return`
    <footer class="site-footer">
      <div class="site-footer__inner">
        <p>© ต้นแบบเว็บบ้านนิยายของนามปากกา ${l(b.penNames.join(" และ "))} — ต้นแบบทดลองใช้งาน</p>
        <p>เนื้อหาในหน้านี้เป็นข้อความตัวอย่างทั้งหมด ยังไม่เปิดขายและยังไม่จดโดเมน</p>
        <p class="footer-links"><a href="/terms" data-link>ข้อกำหนดการใช้งาน</a> · <a href="/privacy" data-link>นโยบายความเป็นส่วนตัว</a> · <a href="/admin" data-link>หลังบ้านนักเขียน (ต้นแบบ)</a></p>
      </div>
    </footer>
  `}function Xa(e){return`
    <a class="novel-card" href="${w({name:"novel",id:e.id})}" data-link data-novel-id="${l(e.id)}">
      <div class="novel-card__cover" style="${Le(e.cover)}" aria-hidden="true">
        ${yt(e,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
      </div>
      <div class="novel-card__body">
        <h3 class="novel-card__title">${l(e.title)}</h3>
        <p class="novel-card__author">${l(e.author)}</p>
        ${mn(e,{maxSecondary:2})}
        <p class="novel-card__teaser">${l(e.teaser)}</p>
      </div>
    </a>
  `}function Gs(e){const t=ta(e),n=t?"อยู่ในชั้นหนังสือแล้ว":"เพิ่มเข้าชั้น";return`
    <button class="follow-btn${t?" is-following":""}" type="button" data-follow="${l(e)}" aria-pressed="${t}">
      ${t?Ga:Wa}
      <span data-follow-label>${n}</span>
    </button>
  `}function zs(e){const t=String(e||"").trim();if(!t)return"";try{const n=new URL(t);return n.protocol==="https:"||n.protocol==="http:"?n.href:""}catch{return""}}function Xs(e){const t=zs(e?.mebUrl);return t?`<a class="meb-btn" href="${l(t)}" target="_blank" rel="noopener noreferrer">ซื้ออีบุ๊กที่ MEB</a>`:""}function vt(){return'<p class="proto-note">ระบบสมาชิกนี้เป็นต้นแบบ ข้อมูลถูกเก็บเฉพาะในเบราว์เซอร์นี้ ยังไม่มีการสร้างบัญชีจริงบนเซิร์ฟเวอร์</p>'}function f(e){return`<p class="field-error" data-error-for="${e}" hidden></p>`}function Qa(e){return`
    <div class="auth-divider"><span>หรือ</span></div>
    <button class="btn btn-google" type="button" data-google-placeholder>
      ${Ys}
      ${e}
    </button>
    <p class="form-hint" data-google-message hidden>การเข้าสู่ระบบด้วย Google จะเปิดใช้ในเวอร์ชันถัดไป นี่เป็นเพียงตัวอย่างปุ่ม</p>
  `}function fn({titleId:e}={}){const t=C().signup,n=t.enabled&&t.coins?`<p class="auth-promo__pill-wrap"><span class="auth-promo__pill">รับทันที ${t.coins} เหรียญ</span></p>`:"";return`
    <div class="auth-promo">
      <div class="auth-promo__frame">
        <picture>
          <source type="image/webp" srcset="/images/login-house.webp" />
          <img class="auth-promo__image" src="/images/login-house.jpg" width="1024" height="1024" alt="" />
        </picture>
      </div>
      <p class="auth-promo__title"${e?` id="${l(e)}"`:""}>
        <span class="auth-promo__line">
          <span class="date-part" data-no-wbr>สมัครล็อกอิน</span>
          <span class="date-part" data-no-wbr>บ้านนิยาย</span>
        </span>
        <span class="auth-promo__line auth-promo__line--names">
          <span class="date-part" data-no-wbr>J.Jusmin และ Mali_810</span>
          <span class="auth-promo__once date-part" data-no-wbr>ครั้งแรก</span>
        </span>
      </p>
      ${n}
    </div>`}function er({next:e,compact:t=!1}={}){const n=w({name:"signup",next:e&&e!=="/"?e:void 0});return`
    ${t?"":vt()}
    ${t?"":`<p class="demo-author-note">บัญชีนักเขียนตัวอย่างสำหรับเข้าหลังบ้าน: อีเมล <strong>${l(X.email)}</strong> รหัสผ่าน <strong>${l(X.password)}</strong></p>`}
    <form class="auth-form" data-login-form novalidate>
      <div class="field">
        <label for="login-email">อีเมล</label>
        <input id="login-email" name="email" type="email" autocomplete="email" required />
        ${f("email")}
      </div>
      <div class="field">
        <label for="login-password">รหัสผ่าน</label>
        <input id="login-password" name="password" type="password" autocomplete="current-password" required />
        ${f("password")}
        <p class="forgot-link"><a href="/forgot-password" data-link>ลืมรหัสผ่าน?</a></p>
      </div>
      <p class="field-error" data-error-for="form" hidden></p>
      <button class="btn btn-primary btn-block" type="submit">เข้าสู่ระบบ</button>
    </form>
    ${Qa("เข้าสู่ระบบด้วย Google")}
    <p class="auth-switch">ยังไม่มีบัญชี? <a href="${n}" data-link>สมัครสมาชิก</a></p>
  `}function de(e){return String(e||"").trim().toLowerCase()}function Qs(e){const t=de(e);return t?ye().filter(n=>de(n.title).includes(t)||de(n.author).includes(t)||(n.tags||[]).some(o=>{const s=Ft(o);return de(o).includes(t)||s&&de(s.name).includes(t)})?!0:(n.secondaryTags||[]).some(o=>de(o).includes(t))):[]}function ei(){S("light");const t=(new URLSearchParams(window.location.search).get("q")||"").trim();document.title=t?`ค้นหา “${t}” — ${b.shortName}`:`ค้นหา — ${b.shortName}`;const n=Qs(t);let a;t?n.length?a=`<div class="bookshelf-grid search-results">${n.map(Xa).join("")}</div>`:a=`<p class="empty-state">ไม่พบนิยายที่ตรงกับ “${l(t)}”</p>`:a='<p class="empty-state">กรอกคำค้นเพื่อหานิยายจากชื่อเรื่อง นามปากกา หรือแท็ก</p>';const r=t?`ผลการค้นหา “${l(t)}” · พบ ${n.length} เรื่อง`:"ค้นหานิยาย";return`
    ${N("search")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ผลการค้นหา</h1>
        <p class="muted-note">${r}</p>
        ${a}
      </div>
    </main>
    ${x()}
  `}function ti(){document.title=b.name,S("light");const e=O[0],t=O.map((o,s)=>{const c=s===0;return`
      <button
        class="home-tab${c?" is-active":""}"
        type="button"
        role="tab"
        id="home-tab-${o.id}"
        data-home-tab="${l(o.id)}"
        aria-selected="${c}"
        aria-controls="home-catalog"
      >${l(o.name)}${za(o)}</button>`}).join(""),n=`
      <a class="home-tab home-tab--page" href="/events" data-link>กิจกรรม</a>
      <a class="home-tab home-tab--page" href="/follow" data-link>ติดตามนักเขียน</a>`,r=!y()?'<div class="home-welcome-login"><button type="button" class="btn btn-primary btn-login-prompt home-welcome-login__btn">เข้าสู่ระบบ</button></div>':"";return`
    ${N("home")}
    <main id="main">
      <section class="hero" aria-label="แบนเนอร์หน้าแรก">
        <picture>
          <source media="(max-width: 720px)" srcset="/images/home-banner-mobile.webp" type="image/webp" />
          <source media="(max-width: 720px)" srcset="/images/home-banner-mobile.jpg" type="image/jpeg" />
          <source srcset="/images/home-banner.webp" type="image/webp" />
          <img class="hero__image" src="/images/home-banner.jpg" alt="" width="2048" height="683" />
        </picture>
      </section>
      <div class="container">
        <h1 class="home-welcome">
          <span class="home-welcome__desk"><span class="home-welcome__line">ยินดีต้อนรับเข้าสู่บ้านนิยายหลังเล็กๆ</span><span class="home-welcome__line">ที่พร้อมจะมอบความสุขให้กับนักอ่าน</span></span>
          <span class="home-welcome__mob"><span class="home-welcome__line">ยินดีต้อนรับเข้าสู่บ้านนิยาย</span><span class="home-welcome__line">หลังเล็กๆ ที่พร้อมจะ</span><span class="home-welcome__line">มอบความสุขให้กับนักอ่าน</span></span>
        </h1>
        ${r}
      </div>
      ${ec()}
      <div class="container">
        <hr class="home-divider" />
        <div class="home-tabs">
          <div class="home-tabs__cats" role="tablist" aria-label="หมวดนิยาย">${t}</div>
          ${n}
        </div>
        <section class="home-catalog" id="home-catalog" data-home-catalog role="tabpanel" aria-labelledby="home-tab-${e.id}">
          ${tr(e)}
        </section>
      </div>
    </main>
    ${x()}
  `}function tr(e){const t=Ir(e.id);return t.length?`<div class="home-catalog-grid">${t.map(Xa).join("")}</div>`:'<p class="muted-note">ยังไม่มีนิยายในหมวดนี้</p>'}function ni(){const e=document.querySelector("[data-home-catalog]");e&&document.querySelectorAll("[data-home-tab]").forEach(t=>{t.addEventListener("click",()=>{const n=O.find(a=>a.id===t.dataset.homeTab);n&&(document.querySelectorAll("[data-home-tab]").forEach(a=>{const r=a===t;a.classList.toggle("is-active",r),a.setAttribute("aria-selected",String(r))}),e.setAttribute("aria-labelledby",`home-tab-${n.id}`),e.innerHTML=tr(n),P(e))})})}function hn(e){return`<img class="gift-art" src="${Ss(e)}" alt="" width="256" height="256" />`}function nr(e,t){const n=t?` data-chapter-id="${l(t)}"`:"",a=Ge.map(r=>{const o=r.coins==null?"กำหนดเอง":`${r.coins} เหรียญ`,s=r.coins==null?'<label class="donate-custom"><span>จำนวนเหรียญ</span><input class="donate-custom__input" type="number" min="1" step="1" inputmode="numeric" name="customAmount" placeholder="เช่น 8" aria-label="จำนวนเหรียญที่ต้องการโดเนท"></label>':"";return`
      <button class="donate-gift" type="button" data-donate-gift="${l(r.id)}">
        ${hn(r.id)}
        <span class="donate-gift__name">${l(r.name)}</span>
        <span class="donate-gift__price">${o}</span>
        ${s}
      </button>`}).join("");return`
    <section class="donate-box" data-donate-box data-novel-id="${l(e)}"${n} aria-label="โดเนท">
      <div class="donate-box__row">${a}</div>
      <p class="field-error donate-box__error" data-donate-error hidden></p>
    </section>`}function ai(e){const t=v(e);if(!t)return gn();document.title=`${t.title} — ${b.shortName}`,S("light");const n=jt(t).map(a=>{const r=w({name:"reader",novelId:t.id,chapterId:a.id}),o=me(t,a),s=te(a);let c="",i="";return s<=0?c='<span class="chapter-status chapter-status--free">อ่านฟรี</span>':o?c='<span class="chapter-status chapter-status--unlocked">ปลดล็อกแล้ว</span>':(c=`<span class="chapter-status chapter-status--locked">${Za}${Vs} ${s} เหรียญ</span>`,i=` data-locked-chapter data-chapter-id="${l(a.id)}"`),`
        <a class="chapter-item" href="${r}" data-link data-novel-id="${l(t.id)}"${i}>
          <div>
            <p class="chapter-item__title">ตอนที่ ${l(a.id)} ${l(a.title)}</p>
            <p class="chapter-item__sub">เผยแพร่ ${pn(a.publishedAt)}</p>
          </div>
          ${c}
        </a>
      `}).join("");return`
    ${N()}
    <main id="main" class="page-block">
      <div class="container">
        <a class="back-link" href="/" data-link>← กลับหน้าแรก</a>
        <div class="novel-hero">
          <div class="cover-lg" style="${Le(t.cover)}">
            ${yt(t,{photoClass:"cover-lg__photo",motifClass:"cover-lg__motif"})}
          </div>
          <div class="novel-meta">
            <h1>${l(t.title)}</h1>
            <p class="novel-meta__author">โดย ${l(t.author)}</p>
            ${mn(t,{filledMain:!0})}
            <div class="novel-meta__actions">
              ${Gs(t.id)}
              ${Xs(t)}
            </div>
            <p class="synopsis">${hr(t.synopsis)}</p>
          </div>
        </div>
        ${nr(t.id)}
        <section class="chapter-list" aria-labelledby="toc-heading">
          <h2 id="toc-heading">สารบัญตอน</h2>
          ${n}
        </section>
      </div>
    </main>
    ${x()}
  `}function ri(e,t){const n=v(e),a=be(n,t);if(!n||!a||!ve(a))return gn();document.title=`${a.title} — ${n.title}`;const r=Pa(),o=rs();S(r);const s=jt(n),c=s.findIndex(G=>G.id===a.id),i=s[c-1],d=s[c+1],u=w({name:"novel",id:n.id}),p=i?w({name:"reader",novelId:n.id,chapterId:i.id}):"#",m=d?w({name:"reader",novelId:n.id,chapterId:d.id}):"#",g=Bs.map(G=>`<button class="tool-btn${G===o?" is-active":""}" type="button" data-font-size="${G}" aria-pressed="${G===o}">${{16:"เล็ก",18:"กลาง",22:"ใหญ่"}[G]}</button>`).join(""),k=me(n,a),_=te(a),F=y(),Ce=w({name:"login",next:w({name:"reader",novelId:n.id,chapterId:a.id})});let W="";if(k)W=`<article class="chapter-body">${l(a.content)}</article>`;else{const G=F?`<button class="btn btn-primary" type="button" data-locked-chapter data-novel-id="${l(n.id)}" data-chapter-id="${l(a.id)}">ปลดล็อกด้วย ${_} เหรียญ</button>
         <p class="muted-note">ยอดคงเหลือ ${he()} เหรียญ (${l(kt(B()))})</p>`:`<a class="btn btn-primary btn-login-prompt" href="${Ce}" data-link>เข้าสู่ระบบเพื่อปลดล็อก</a>`;W=`
      <div class="lock-panel">
        <div class="lock-icon-lg">${Za}</div>
        <h2>ตอนนี้ถูกล็อกไว้</h2>
        ${G}
      </div>
    `}return`
    ${N()}
    <div class="reader-toolbar">
      <div class="reader-toolbar__inner">
        <div class="toolbar-group" role="group" aria-label="ขนาดตัวอักษร">
          ${g}
        </div>
        <div class="toolbar-group">
          <button class="tool-btn${r==="night"?" is-active":""}" type="button" data-toggle-night aria-pressed="${r==="night"}">
            ${r==="night"?"โหมดกลางคืน: เปิด":"โหมดกลางคืน"}
          </button>
        </div>
      </div>
    </div>
    <main id="main" class="reader-shell" style="--reader-size: ${o}px">
      <p class="reader-kicker"><a href="${u}" data-link data-novel-id="${l(n.id)}">${l(n.title)}</a> · ${l(n.author)}</p>
      <h1>ตอนที่ ${l(a.id)} ${l(a.title)}</h1>
      ${W}
      <nav class="reader-nav" aria-label="ตอนก่อนหน้าและตอนถัดไป">
        <a class="nav-btn" href="${p}" ${i?`data-link data-novel-id="${l(n.id)}"${me(n,i)?"":` data-locked-chapter data-chapter-id="${l(i.id)}"`}`:'aria-disabled="true"'}>⬅️ ตอนก่อนหน้า</a>
        <a class="nav-btn" href="${m}" ${d?`data-link data-novel-id="${l(n.id)}"${me(n,d)?"":` data-locked-chapter data-chapter-id="${l(d.id)}"`}`:'aria-disabled="true"'}>ตอนต่อไป ➡️</a>
      </nav>
      ${nr(n.id,a.id)}
    </main>
    ${x()}
  `}function gn(){return document.title=`ไม่พบหน้า — ${b.shortName}`,S("light"),`
    ${N()}
    <main id="main" class="page-block">
      <div class="container not-found">
        <h1>ไม่พบหน้าที่ต้องการ</h1>
        <p class="muted-note">ลิงก์นี้อาจไม่ถูกต้องหรือนิยายตัวอย่างถูกลบแล้ว</p>
        <p><a class="back-link" href="/" data-link>กลับหน้าแรก</a></p>
      </div>
    </main>
    ${x()}
  `}function S(e){document.body.classList.toggle("reader-night",e==="night")}function oi(){if(y())return document.title=`เข้าสู่ระบบ — ${b.shortName}`,"";document.title=`เข้าสู่ระบบ — ${b.shortName}`,S("light");const t=ze();return`
    ${N("login")}
    <main id="main" class="page-block">
      <div class="auth-card">
        ${fn()}
        <h1>เข้าสู่ระบบ</h1>
        ${new URLSearchParams(window.location.search).get("reset")==="1"?'<p class="form-success">ตั้งรหัสผ่านใหม่แล้ว กรุณาเข้าสู่ระบบด้วยรหัสผ่านใหม่</p>':""}
        ${er({next:t})}
      </div>
    </main>
    ${x()}
  `}function si(){if(y())return document.title=`สมัครสมาชิก — ${b.shortName}`,"";document.title=`สมัครสมาชิก — ${b.shortName}`,S("light");const e=ze(),t=w({name:"login",next:e==="/"?void 0:e});return`
    ${N("signup")}
    <main id="main" class="page-block">
      <div class="auth-card">
        ${fn()}
        <h1>สมัครสมาชิก</h1>
        ${vt()}
        <form class="auth-form" data-signup-form novalidate>
          <div class="field">
            <label for="signup-name">ชื่อที่แสดง</label>
            <input id="signup-name" name="displayName" type="text" autocomplete="name" required />
            ${f("displayName")}
          </div>
          <div class="field">
            <label for="signup-email">อีเมล</label>
            <input id="signup-email" name="email" type="email" autocomplete="email" required />
            ${f("email")}
          </div>
          <div class="field">
            <label for="signup-password">รหัสผ่าน</label>
            <input id="signup-password" name="password" type="password" autocomplete="new-password" minlength="8" required />
            ${f("password")}
          </div>
          <div class="field">
            <label for="signup-confirm">ยืนยันรหัสผ่าน</label>
            <input id="signup-confirm" name="confirm" type="password" autocomplete="new-password" minlength="8" required />
            ${f("confirm")}
          </div>
          <div class="field field--check">
            <label class="check-label">
              <input id="signup-terms" name="acceptTerms" type="checkbox" required />
              <span>ข้าพเจ้ายอมรับ <a href="/terms" data-link>ข้อกำหนดการใช้งาน</a> และ <a href="/privacy" data-link>นโยบายความเป็นส่วนตัว</a> รวมทั้งยินยอมให้เก็บและใช้ข้อมูลส่วนบุคคลตามที่ระบุในนโยบายดังกล่าว</span>
            </label>
            ${f("acceptTerms")}
          </div>
          <p class="field-error" data-error-for="form" hidden></p>
          <button class="btn btn-primary btn-block" type="submit">สมัครสมาชิก</button>
        </form>
        ${Qa("สมัครด้วย Google")}
        <p class="auth-switch">มีบัญชีอยู่แล้ว? <a href="${t}" data-link>เข้าสู่ระบบ</a></p>
      </div>
    </main>
    ${x()}
  `}function ii(){const e=y();if(!e)return document.title=`ชั้นหนังสือของฉัน — ${b.shortName}`,"";document.title=`ชั้นหนังสือของฉัน — ${b.shortName}`,S("light");const t=to();let n="";return t.length?n=`<div class="bookshelf-grid">${t.map(a=>ci(a)).join("")}</div>`:n='<p class="empty-state">ยังไม่มีเรื่องในชั้นหนังสือ ลองกดเพิ่มเข้าชั้นจากหน้านิยายได้เลย</p>',`
    ${N("bookshelf")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ชั้นหนังสือของฉัน</h1>
        <p class="muted-note">สวัสดีคุณ ${l(e.displayName)} — เรื่องที่คุณเพิ่มเข้าชั้นจะถูกรวบรวมที่นี่</p>
        ${n}
      </div>
    </main>
    ${x()}
  `}function ci(e){const t=v(e.novelId);if(!t)return"";const n=w({name:"novel",id:t.id}),a=jt(t),r=a[0];let o=r?`<p class="bookshelf-continue">ยังไม่เริ่มอ่าน · <a href="${w({name:"reader",novelId:t.id,chapterId:r.id})}" data-link data-novel-id="${l(t.id)}">เริ่มอ่านตอนแรก</a></p>`:'<p class="bookshelf-continue">ยังไม่มีตอนที่เผยแพร่</p>';if(e.progress){const s=a.find(c=>c.id===e.progress.chapterId)||r;s&&(o=`<p class="bookshelf-continue">อ่านต่อ · <a href="${w({name:"reader",novelId:t.id,chapterId:s.id})}" data-link data-novel-id="${l(t.id)}">ตอนที่ ${l(s.id)} ${l(s.title)}</a></p>`)}return`
    <article class="novel-card novel-card--shelf">
      <a class="novel-card__link" href="${n}" data-link data-novel-id="${l(t.id)}">
        <div class="novel-card__cover" style="${Le(t.cover)}" aria-hidden="true">
          ${yt(t,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
        </div>
        <div class="novel-card__body">
          <h3 class="novel-card__title">${l(t.title)}</h3>
          <p class="novel-card__author">${l(t.author)}</p>
          ${mn(t,{maxSecondary:2})}
          <p class="novel-card__teaser">${l(t.teaser)}</p>
        </div>
      </a>
      ${o}
    </article>
  `}function Ut(e,t=""){return e?.avatar?`<img${t?` class="${t}"`:""} src="${l(e.avatar)}" alt="">`:l((e?.displayName||"").trim().charAt(0).toUpperCase()||"น")}function li(){const e=y();if(!e)return document.title=`แก้ไขโปรไฟล์ — ${b.shortName}`,"";document.title=`แก้ไขโปรไฟล์ — ${b.shortName}`,S("light");const t=e.avatar?"เปลี่ยนรูปโปรไฟล์":"อัปโหลดรูปโปรไฟล์";let n=!1;try{n=sessionStorage.getItem("banNiyai_profileSaved")==="1",n&&sessionStorage.removeItem("banNiyai_profileSaved")}catch{}return`
    ${N("profile")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">แก้ไขโปรไฟล์</h1>
        <form class="profile-form" data-profile-form>
          <div class="profile-form__avatar">
            <span class="avatar avatar--profile" data-avatar-preview aria-hidden="true">${Ut(e)}</span>
            <div class="profile-form__avatar-actions">
              <button class="btn" type="button" data-avatar-pick>${t}</button>
              <input type="file" accept="image/*" hidden data-avatar-file />
              <p class="muted-note">ไฟล์ภาพไม่เกิน 2MB</p>
              ${f("avatar")}
            </div>
          </div>
          <label>
            ชื่อที่แสดง
            <input name="displayName" type="text" maxlength="40" value="${l(e.displayName)}" required />
          </label>
          ${f("displayName")}
          ${f("form")}
          <p class="profile-saved" data-profile-saved${n?"":" hidden"}>บันทึกแล้ว</p>
          <button class="btn btn-primary" type="submit">บันทึก</button>
        </form>
      </div>
    </main>
    ${x()}
  `}function di(){const e=document.querySelector("[data-profile-form]");if(!e)return;const t=e.querySelector("[data-avatar-file]"),n=e.querySelector("[data-avatar-preview]"),a=e.querySelector("[data-avatar-pick]");let r;const o=(c,i)=>{const d=e.querySelector(`[data-error-for="${c}"]`);d&&(i?(d.hidden=!1,d.textContent=i):(d.hidden=!0,d.textContent=""))},s=()=>{e.querySelectorAll("[data-error-for]").forEach(c=>{c.hidden=!0,c.textContent=""})};a?.addEventListener("click",()=>t?.click()),t?.addEventListener("change",async()=>{const c=t.files?.[0];if(o("avatar",""),!c)return;const i=await bt(c,{maxSide:512,maxChars:15e4,errorMessage:"ไฟล์ภาพต้องไม่เกิน 2MB"});if(t.value="",!i.ok){o("avatar",i.error);return}r=i.dataUrl,n&&(n.innerHTML=`<img src="${r}" alt="">`),a&&(a.textContent="เปลี่ยนรูปโปรไฟล์")}),e.addEventListener("submit",c=>{c.preventDefault(),s();const i=e.querySelector("[data-profile-saved]");i&&(i.hidden=!0);const u={displayName:new FormData(e).get("displayName")};r!==void 0&&(u.avatar=r);let p;try{p=Wr(u)}catch{o("avatar",ge);return}if(!p.ok){Object.entries(p.errors||{}).forEach(([m,g])=>o(m,g));return}try{sessionStorage.setItem("banNiyai_profileSaved","1")}catch{}h("/profile",{replace:!0})})}function ar(e){return`<p class="empty-state">${l(e)}</p>`}function ui(e){const t=e.filter(a=>a.type==="topup");return t.length?`
    <div class="purchase-table-wrap">
      <table class="purchase-table">
        <thead>
          <tr>
            <th>วันที่</th>
            <th>แพ็ก</th>
            <th>เหรียญที่ได้รับ</th>
          </tr>
        </thead>
        <tbody>${t.map(a=>{const r=`${Number(a.thb)||0} บาท`,o=String(a.coins??0);return`<tr>
      <td data-label="วันที่">${R(pn(a.createdAt))}</td>
      <td data-label="แพ็ก">${l(r)}</td>
      <td class="purchase-table__num" data-label="เหรียญที่ได้รับ">${l(o)}</td>
    </tr>`}).join("")}</tbody>
      </table>
    </div>
  `:ar("ยังไม่มีรายการเติมเหรียญ")}function pi(e){const t=e.filter(a=>a.type==="unlock");return t.length?`
    <div class="purchase-table-wrap">
      <table class="purchase-table">
        <thead>
          <tr>
            <th>วันที่</th>
            <th>นิยาย</th>
            <th>ตอน</th>
            <th>เหรียญ</th>
          </tr>
        </thead>
        <tbody>${t.map(a=>{const r=v(a.novelId),o=r?be(r,a.chapterId):null,s=r?.title||"นิยายที่ถูกลบแล้ว",c=o?`ตอนที่ ${o.id} ${o.title}`:a.chapterId?`ตอนที่ ${a.chapterId}`:"—",i=String(Math.abs(Number(a.coins)||0));return`<tr>
      <td data-label="วันที่">${R(pn(a.createdAt))}</td>
      <td data-label="นิยาย">${l(s)}</td>
      <td data-label="ตอน">${l(c)}</td>
      <td class="purchase-table__num" data-label="เหรียญ">${l(i)}</td>
    </tr>`}).join("")}</tbody>
      </table>
    </div>
  `:ar("ยังไม่มีรายการปลดล็อกตอน")}function mi(){if(!y())return document.title=`ประวัติการซื้อ — ${b.shortName}`,"";document.title=`ประวัติการซื้อ — ${b.shortName}`,S("light");const t=mt();return`
    ${N("purchases")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ประวัติการซื้อ</h1>
        <section class="purchase-section">
          <h2>รายงานการเติมเหรียญ</h2>
          ${ui(t)}
        </section>
        <section class="purchase-section">
          <h2>รายงานการปลดล็อกตอน</h2>
          ${pi(t)}
        </section>
      </div>
    </main>
    ${x()}
  `}function rr(){return'<p class="legal-draft-banner">เอกสารนี้เป็นร่างสำหรับต้นแบบเว็บ ยังไม่ได้ผ่านการตรวจสอบทางกฎหมาย และยังไม่มีผลใช้บังคับจริง</p>'}function fi(){return document.title=`ข้อกำหนดการใช้งาน (ร่าง) — ${b.shortName}`,S("light"),`
    ${N()}
    <main id="main" class="page-block">
      <div class="container legal-page">
        <h1>ข้อกำหนดการใช้งาน</h1>
        ${rr()}
        <p>บ้านนิยายนี้เป็นบ้านหลังเล็กของนักเขียนนามปากกา ${l(b.penNames.join(" และ "))} เว็บนี้ยังอยู่ในขั้นต้นแบบทดลอง ไม่ใช่บริการที่เปิดให้ใช้จริง และยังไม่มีการรับชำระเงิน</p>
        <h2>บัญชีผู้ใช้ในต้นแบบ</h2>
        <p>การสมัครสมาชิกในขั้นนี้เป็นการจำลองเท่านั้น ข้อมูลถูกเก็บไว้ในเบราว์เซอร์ของผู้ใช้ ไม่มีการสร้างบัญชีบนเซิร์ฟเวอร์ และยังไม่สามารถใช้เข้าสู่ระบบจากอุปกรณ์อื่นได้</p>
        <h2>เนื้อหาและการใช้งาน</h2>
        <p>นิยายในเว็บนี้เป็นข้อความตัวอย่าง เนื้อหาที่มีป้าย 18+ จำกัดสำหรับผู้มีอายุ 18 ปีขึ้นไป ผู้ใช้ต้องไม่นำเนื้อหาไปใช้ในทางที่ผิดกฎหมาย หรือทำให้ผู้อื่นเสียหาย</p>
        <h2>ระบบเหรียญและชั้นหนังสือ</h2>
        <p>ชั้นหนังสือและการเพิ่มเรื่องเข้าชั้นเป็นส่วนของต้นแบบสมาชิก ส่วนระบบเหรียญและการขายตอนจะมาในเฟสถัดไป และยังไม่มีผลเป็นการซื้อขายจริงในขณะนี้</p>
        <h2>การเปลี่ยนแปลง</h2>
        <p>เมื่อบริการเปิดจริง จะมีการจัดทำข้อกำหนดฉบับสมบูรณ์ให้ผู้ใช้ยอมรับอีกครั้งก่อนเริ่มใช้งาน</p>
      </div>
    </main>
    ${x()}
  `}function hi(){return document.title=`นโยบายความเป็นส่วนตัว (ร่าง) — ${b.shortName}`,S("light"),`
    ${N()}
    <main id="main" class="page-block">
      <div class="container legal-page">
        <h1>นโยบายความเป็นส่วนตัว</h1>
        ${rr()}
        <p>ร่างนี้จัดทำขึ้นเพื่อให้สอดคล้องแนวทางคุ้มครองข้อมูลส่วนบุคคล (PDPA) ในขั้นต้นแบบเท่านั้น และยังไม่ได้ผ่านการตรวจสอบทางกฎหมาย</p>
        <h2>ข้อมูลที่เก็บในต้นแบบ</h2>
        <p>เมื่อท่านสมัครสมาชิก เว็บนี้จะเก็บบนเบราว์เซอร์ของท่านเท่านั้น ได้แก่ ชื่อที่แสดง อีเมล ค่าแฮชของรหัสผ่าน เวลาที่ยอมรับข้อกำหนด รายการเรื่องในชั้นหนังสือ และตอนล่าสุดที่อ่าน</p>
        <h2>วัตถุประสงค์</h2>
        <p>ข้อมูลดังกล่าวใช้เพื่อจำลองการเข้าสู่ระบบ แสดงชั้นหนังสือ และจดจำความคืบหน้าการอ่านในเครื่องนี้เท่านั้น ไม่ใช้เพื่อการตลาด และไม่ส่งไปยังเซิร์ฟเวอร์ในขั้นนี้</p>
        <h2>สิทธิของเจ้าของข้อมูล</h2>
        <p>ท่านมีสิทธิเข้าถึง แก้ไข และลบข้อมูลที่เก็บในเบราว์เซอร์นี้ รวมถึงการออกจากระบบ ในขั้นต้นแบบการลบข้อมูลทำได้โดยการล้างข้อมูลเว็บไซต์ในเบราว์เซอร์ เมื่อเปิดบริการจริง จะจัดช่องทางใช้สิทธิให้ชัดเจนยิ่งขึ้น</p>
        <h2>การเก็บรักษาและการเปิดเผย</h2>
        <p>ต้นแบบนี้ไม่ส่งข้อมูลส่วนบุคคลออกนอกเครื่องของท่าน ผู้ให้บริการภายนอก เช่น ระบบรับชำระเงินหรือการเข้าสู่ระบบด้วย Google ยังไม่ถูกเชื่อมต่อ</p>
        <h2>การติดต่อ</h2>
        <p>เมื่อเว็บเปิดให้บริการจริง จะระบุช่องทางติดต่อเจ้าของบ้านนิยายและระยะเวลาการตอบกลับคำขอใช้สิทธิไว้ในนโยบายฉบับสมบูรณ์</p>
      </div>
    </main>
    ${x()}
  `}function or(e){e.querySelectorAll("[data-error-for]").forEach(t=>{t.hidden=!0,t.textContent=""})}function A(e,t){or(e),Object.entries(t).forEach(([n,a])=>{const r=e.querySelector(`[data-error-for="${n}"]`);r&&(r.textContent=a,r.hidden=!1)})}function gi(e){const t=document.querySelector(".modal-backdrop");t&&t.remove();const n=w({name:"login",next:e}),a=w({name:"signup",next:e}),r=document.createElement("div");r.className="modal-backdrop",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby","login-prompt-title"),r.innerHTML=`
    <div class="modal">
      <h2 id="login-prompt-title">กรุณาเข้าสู่ระบบ</h2>
      <p>ต้องเข้าสู่ระบบก่อนจึงจะเพิ่มเรื่องเข้าชั้นหนังสือได้</p>
      <div class="modal__actions">
        <a class="btn btn-primary btn-login-prompt" href="${n}" data-link>เข้าสู่ระบบ</a>
        <a class="btn btn-ghost" href="${a}" data-link>สมัครสมาชิก</a>
        <button class="btn btn-ghost" type="button" data-modal-close>ปิด</button>
      </div>
    </div>
  `,document.body.appendChild(r),P(r),r.querySelector("[data-modal-close]").addEventListener("click",()=>r.remove()),r.addEventListener("click",o=>{o.target===r&&r.remove()})}function bi(){return document.title=`ลืมรหัสผ่าน — ${b.shortName}`,S("light"),`
    ${N("login")}
    <main id="main" class="page-block">
      <div class="auth-card">
        <h1>ลืมรหัสผ่าน</h1>
        ${vt()}
        <form class="auth-form" data-forgot-form novalidate>
          <div class="field">
            <label for="forgot-email">อีเมล</label>
            <input id="forgot-email" name="email" type="email" autocomplete="email" required />
            ${f("email")}
          </div>
          <p class="field-error" data-error-for="form" hidden></p>
          <button class="btn btn-primary btn-block" type="submit">ส่งลิงก์ตั้งรหัสผ่านใหม่</button>
        </form>
        <div class="reset-confirm" data-forgot-confirm hidden></div>
        <p class="auth-switch"><a href="/login" data-link>กลับไปเข้าสู่ระบบ</a></p>
      </div>
    </main>
    ${x()}
  `}function yi(){document.title=`ตั้งรหัสผ่านใหม่ — ${b.shortName}`,S("light");const e=new URLSearchParams(window.location.search).get("token")||"",t=oo(e);let n="";return t?n=`
      <form class="auth-form" data-reset-form novalidate>
        <input type="hidden" name="token" value="${l(e)}" />
        <div class="field">
          <label for="reset-password">รหัสผ่านใหม่</label>
          <input id="reset-password" name="password" type="password" autocomplete="new-password" minlength="8" required />
          ${f("password")}
        </div>
        <div class="field">
          <label for="reset-confirm">ยืนยันรหัสผ่านใหม่</label>
          <input id="reset-confirm" name="confirm" type="password" autocomplete="new-password" minlength="8" required />
          ${f("confirm")}
        </div>
        <p class="field-error" data-error-for="form" hidden></p>
        <button class="btn btn-primary btn-block" type="submit">บันทึกรหัสผ่านใหม่</button>
      </form>
    `:n=`
      <p class="field-error">ลิงก์ตั้งรหัสผ่านใหม่ไม่ถูกต้องหรือถูกใช้ไปแล้ว</p>
      <p class="auth-switch"><a href="/forgot-password" data-link>ขอลิงก์ใหม่อีกครั้ง</a></p>
    `,`
    ${N("login")}
    <main id="main" class="page-block">
      <div class="auth-card">
        <h1>ตั้งรหัสผ่านใหม่</h1>
        ${vt()}
        ${n}
      </div>
    </main>
    ${x()}
  `}function vi(){document.title=`หลังบ้านนักเขียน — ${b.shortName}`,S("light");const e=y();if(!Vt(e))return`
      ${N("admin")}
      <main id="main" class="page-block">
        <div class="container admin-gate">
          <h1>หลังบ้านนักเขียน</h1>
          <p>หน้านี้สำหรับนักเขียนเท่านั้น ในต้นแบบใช้บัญชีนักเขียนตัวอย่างด้านล่าง</p>
          <p class="demo-author-note">อีเมล <strong>${l(X.email)}</strong><br />รหัสผ่าน <strong>${l(X.password)}</strong></p>
          <p><a class="btn btn-primary" href="${w({name:"login",next:"/admin"})}" data-link>${e?"บัญชีนี้ไม่ใช่นักเขียน — เข้าสู่ระบบด้วยบัญชีตัวอย่าง":"เข้าสู่ระบบด้วยบัญชีนักเขียนตัวอย่าง"}</a></p>
        </div>
      </main>
      ${x()}
    `;L(),M();const t=new URLSearchParams(window.location.search).get("tab"),n=["promos","events","sales","reports"].includes(t)?t:"studio",a=n==="promos"?Fe():n==="events"?wr():n==="sales"?Uc():n==="reports"?nc(new URLSearchParams(window.location.search).get("report")||""):_c(),r=Ta().length;return`
    ${N("admin")}
    <main id="main" class="page-block">
      <div class="container admin-page">
        <h1 class="page-title">หลังบ้านนักเขียน</h1>
        <nav class="admin-tabs" aria-label="ส่วนหลังบ้าน">
          <a href="/admin" data-link${n==="studio"?' aria-current="page"':""}>ระบบนักเขียน</a>
          <a href="/admin?tab=sales" data-link${n==="sales"?' aria-current="page"':""}>ยอดขายและโดเนท</a>
          <a href="/admin?tab=promos" data-link${n==="promos"?' aria-current="page"':""}>จัดโปรโมชัน</a>
          <a href="/admin?tab=events" data-link${n==="events"?' aria-current="page"':""}>กิจกรรม</a>
          <a href="/admin?tab=reports" data-link${n==="reports"?' aria-current="page"':""}>แจ้งปัญหา${r?`<span class="admin-tabs__count" aria-label="ยังไม่ได้อ่าน ${r} เรื่อง">${r}</span>`:""}</a>
        </nav>
        ${a}
      </div>
    </main>
    ${x()}
  `}function $i(e,{showHeading:t=!0,showSave:n=!0,idSuffix:a}={}){const r=a||e.id,o=O.map(u=>{const p=(e.tags||[]).includes(u.id);return`<button class="admin-chip${p?" is-on":""}" type="button" data-main-tag="${l(u.id)}" aria-pressed="${p}">${l(u.name)}</button>`}).join(""),s=(e.secondaryTags||[]).map(u=>`
        <span class="admin-tag" data-secondary-name="${l(u)}">
          ${l(u)}
          <button type="button" data-remove-tag="${l(u)}" aria-label="ลบแท็ก ${l(u)}">×</button>
        </span>`).join(""),c=$e().map(u=>{const p=(e.secondaryTags||[]).some(m=>m.toLowerCase()===u.toLowerCase());return`<button class="admin-chip admin-chip--ghost${p?" is-on":""}" type="button" data-suggest-tag="${l(u)}" aria-pressed="${p}">${l(u)}</button>`}).join(""),i=t?`<h2>${l(e.title)}</h2>
      <p class="muted-note">นามปากกา ${l(e.author)}</p>`:"",d=n?`<div class="admin-save-row">
        <button class="btn btn-primary" type="button" data-save-tags>บันทึกแท็ก</button>
        <p class="admin-status" data-save-status hidden></p>
      </div>`:`${f("tags")}`;return`
    <section class="admin-novel" data-admin-novel="${l(e.id)}">
      ${i}
      <h3>หมวดหลัก</h3>
      <div class="admin-chip-row" data-main-row>${o}</div>
      <h3>แท็กรอง</h3>
      <div class="admin-selected" data-secondary-row>${s||'<span class="muted-note">ยังไม่มีแท็กรอง</span>'}</div>
      <p class="admin-label">เลือกจากรายการแนะนำ</p>
      <div class="admin-chip-row" data-suggest-row>${c}</div>
      <label class="admin-label" for="new-tag-${l(r)}">พิมพ์แท็กใหม่แล้วกด Enter</label>
      <input class="admin-new-tag" id="new-tag-${l(r)}" type="text" maxlength="30" data-new-tag placeholder="เช่น รุ่นพี่รุ่นน้อง" />
      ${d}
    </section>
  `}function oe(e){return[...e.querySelectorAll("[data-secondary-name]")].map(t=>t.dataset.secondaryName)}function Pt(e,t){const n=e.querySelector("[data-secondary-row]");if(!t.length){n.innerHTML='<span class="muted-note">ยังไม่มีแท็กรอง</span>';return}n.innerHTML=t.map(a=>`
        <span class="admin-tag" data-secondary-name="${l(a)}">
          ${l(a)}
          <button type="button" data-remove-tag="${l(a)}" aria-label="ลบแท็ก ${l(a)}">×</button>
        </span>`).join("")}function Bn(e,t){const n=new Set(t.map(a=>a.toLowerCase()));e.querySelectorAll("[data-suggest-tag]").forEach(a=>{const r=n.has(a.dataset.suggestTag.toLowerCase());a.classList.toggle("is-on",r),a.setAttribute("aria-pressed",String(r))})}function Un(e,t){const n=Ne(t);if(!n||O.some(r=>r.name===n))return;const a=oe(e);a.some(r=>r.toLowerCase()===n.toLowerCase())||(a.push(n),Pt(e,a),Ht(n),wi())}function ki(e){return $e().map(t=>{const n=e.some(a=>a.toLowerCase()===t.toLowerCase());return`<button class="admin-chip admin-chip--ghost${n?" is-on":""}" type="button" data-suggest-tag="${l(t)}" aria-pressed="${n}">${l(t)}</button>`}).join("")}function wi(){document.querySelectorAll("[data-admin-novel]").forEach(e=>{const t=e.querySelector("[data-suggest-row]");t&&(t.innerHTML=ki(oe(e)))})}function Si(){document.querySelectorAll("[data-admin-novel]").forEach(e=>{e.addEventListener("click",a=>{const r=a.target.closest("[data-main-tag]");if(r&&e.contains(r)){r.classList.toggle("is-on"),r.setAttribute("aria-pressed",String(r.classList.contains("is-on")));return}const o=a.target.closest("[data-suggest-tag]");if(o&&e.contains(o)){const c=o.dataset.suggestTag,i=oe(e);if(i.some(d=>d.toLowerCase()===c.toLowerCase()))Pt(e,i.filter(d=>d.toLowerCase()!==c.toLowerCase()));else{Un(e,c);return}Bn(e,oe(e));return}const s=a.target.closest("[data-remove-tag]");if(s&&e.contains(s)){const c=s.dataset.removeTag,i=oe(e).filter(d=>d.toLowerCase()!==c.toLowerCase());Pt(e,i),Bn(e,i)}});const t=e.querySelector("[data-new-tag]");t&&t.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),Un(e,t.value),t.value="")});const n=e.querySelector("[data-save-tags]");n&&n.addEventListener("click",()=>{const a=[...e.querySelectorAll("[data-main-tag].is-on")].map(s=>s.dataset.mainTag),r=Tr(e.dataset.adminNovel,{tags:a,secondaryTags:oe(e)}),o=e.querySelector("[data-save-status]");o&&(o.hidden=!1,r.ok?(o.textContent="บันทึกแท็กแล้ว",o.classList.remove("is-error")):(o.textContent=r.error||"บันทึกไม่สำเร็จ",o.classList.add("is-error")))})})}function _i(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?"":new Intl.DateTimeFormat("sv-SE",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(t).replace(" ","T")}function Ai(e){if(!e)return"";const t=new Date(`${e}:00+07:00`);return Number.isNaN(t.getTime())?"":t.toISOString()}function Ni(e){const t=_i(e);if(!t)return{date:"",time:""};const[n,a=""]=t.split("T");return{date:n,time:a}}function bn(e,t){if(!e)return"";const n=String(t||"00:00").slice(0,5);return Ai(`${e}T${n}`)}function ee(e,t){return bn(e.get(`${t}Date`),e.get(`${t}Time`))}function sr(e,t){const n=bn(e,t||"00:00");return n?yn(new Date(n)):""}function ir(e){if(!e)return"เลือกวันที่";const t=bn(e,"00:00");return t?`${lr(new Date(t))} ${xi(new Date(t))}`:"เลือกวันที่"}function cr(e){if(!e)return"เลือกเวลา";const[t="",n=""]=String(e).split(":");return!t||!n?"เลือกเวลา":`${t}:${n} น.`}function ne({id:e,name:t,value:n="",required:a=!1}){const{date:r,time:o}=Ni(n),s=sr(r,o),c=a?" required":"";return`
    <div class="datetime-field" data-datetime-field>
      <div class="datetime-field__inputs">
        <label class="datetime-field__sub" for="${l(e)}-date">วันที่
          <span class="datetime-field__control"${r?"":' data-empty="true"'}>
            <input id="${l(e)}-date" name="${l(t)}Date" type="date" lang="th"${c} value="${l(r)}" data-datetime-date />
            <span class="datetime-field__hint" data-date-hint aria-hidden="true">${l(ir(r))}</span>
          </span>
        </label>
        <label class="datetime-field__sub" for="${l(e)}-time">เวลา
          <span class="datetime-field__control"${o?"":' data-empty="true"'}>
            <input id="${l(e)}-time" name="${l(t)}Time" type="time" lang="th"${c} value="${l(o)}" data-datetime-time />
            <span class="datetime-field__hint" data-time-hint aria-hidden="true">${l(cr(o))}</span>
          </span>
        </label>
      </div>
      <p class="datetime-field__preview" data-datetime-preview${s?"":" hidden"}>${s?l(s):""}</p>
    </div>`}function ke(e=document){e.querySelectorAll("[data-datetime-field]").forEach(t=>{const n=t.querySelector("[data-datetime-date]"),a=t.querySelector("[data-datetime-time]"),r=t.querySelector("[data-datetime-preview]"),o=t.querySelector("[data-date-hint]"),s=t.querySelector("[data-time-hint]");if(!n||!r)return;const c=(d,u,p)=>{if(!d||!u)return;const m=d.closest(".datetime-field__control");u.textContent=p(d.value),m&&m.toggleAttribute("data-empty",!d.value)},i=()=>{const d=sr(n.value,a?.value||"00:00");r.textContent=d,r.hidden=!d,c(n,o,ir),c(a,s,cr)};n.addEventListener("input",i),n.addEventListener("change",i),a?.addEventListener("input",i),a?.addEventListener("change",i),i()})}function lr(e){return new Intl.DateTimeFormat("th-TH",{day:"numeric",month:"short",timeZone:"Asia/Bangkok"}).format(e)}function $t(e){const t=Number(new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric"}).format(e).slice(0,4));return String((t+543)%100).padStart(2,"0")}function xi(e){return $t(e)}function ce(e){return`${lr(e)} ${$t(e)}`}function dr(e,t=1,n=1){return new Date(`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}T00:00:00+07:00`)}function Ei(e,t){const n=dr(e,t);return Number.isNaN(n.getTime())?"":`${new Intl.DateTimeFormat("th-TH",{month:"short",timeZone:"Asia/Bangkok"}).format(n)} ${$t(n)}`}function Ii(e){const t=dr(e,1);return Number.isNaN(t.getTime())?"":`ปี ${$t(t)}`}function Ti(e){return new Intl.DateTimeFormat("th-TH",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"Asia/Bangkok"}).format(e).replace(/\s*น\.?\s*$/u,"")}function yn(e){return`${ce(e)} ${Ti(e)}`}function R(e){const t=String(e||"").trim();return t?`<span class="date-part" data-no-wbr>${l(t)}</span>`:""}function ur(e,t){return`${R(ce(e))} ${R("ถึง")} ${R(ce(t))}`}function vn(e){if(!e?.startAt||!e?.endAt)return"";const t=new Date(e.startAt),n=new Date(e.endAt);return Number.isNaN(t.getTime())||Number.isNaN(n.getTime())?"":ur(t,n)}function pr(e){const t=new Date(e);return Number.isNaN(t.getTime())?"":R(ce(t))}function mr(e,t){const n=new Date(e),a=new Date(t);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?"":ur(n,a)}const Di="ม\\.ค\\.|ก\\.พ\\.|มี\\.ค\\.|เม\\.ย\\.|พ\\.ค\\.|มิ\\.ย\\.|ก\\.ค\\.|ส\\.ค\\.|ก\\.ย\\.|ต\\.ค\\.|พ\\.ย\\.|ธ\\.ค\\.",qi=new RegExp(`(\\d{1,2}\\s*(?:${Di})(?:\\s+\\d{2,4})?)|(พ\\.ศ\\.\\s*\\d{2,4})`,"g");function Li(e){const t=String(e||"");if(!t)return"";let n="",a=0;for(const r of t.matchAll(qi))n+=l(t.slice(a,r.index)),n+=R(r[0]),a=r.index+r[0].length;return n+=l(t.slice(a)),n}function $(e){return`<p class="field-hint">${l(e)}</p>`}function Ci(e){const t=e.bonusType==="fixed"?`${e.bonusValue} เหรียญ`:`${e.bonusValue}%`;let n;e.packageIds==="all"?n="เติมทุกแพ็ก":n=`เติมแพ็ก ${(e.packageIds||[]).map(s=>{const c=De.find(i=>i.id===s);return c?`${c.thb} บาท`:s}).join(" ")}`;const a=[l(`${n} รับเพิ่ม ${t}`)],r=mr(e.startAt,e.endAt);return r&&a.push(r),e.firstTopUpOnly&&a.push(l("เฉพาะเติมครั้งแรก")),e.bonusExpiryDays&&a.push(l(`โบนัสใช้ได้ ${e.bonusExpiryDays} วัน`)),a.join(" · ")}function Bi(e){const t=[l(`${e.code} ให้ ${e.coins} เหรียญ`),l(`ใช้แล้ว ${e.usedBy.length}/${e.maxUses}`)];return e.expiresAt&&t.push(`${l("หมดอายุ")} ${pr(e.expiresAt)}`),e.bonusExpiryDays&&t.push(l(`โบนัสใช้ได้ ${e.bonusExpiryDays} วัน`)),t.join(" · ")}function Ui(e){return e.bonus?`${e.thb} บาท · เหรียญเพิ่มของแพ็กนี้ ${e.bonus}`:`${e.thb} บาท`}const Pi="input, textarea, script, style, code, pre, kbd, samp, [data-no-wbr], .thai-nowrap";function fr(e){return String(e||"").split(/(\s+)/).map(t=>t?/^\s+$/.test(t)?t:`<span class="thai-nowrap">${l(t)}</span>`:"").join("")}function hr(e){return String(e??"").split(/\r?\n/).map(t=>Ri(t)).join("<br>")}function Ri(e){return e?Oi(e).map(t=>/^\s+$/.test(t)?t:`<span class="thai-nowrap">${l(t)}</span>`).join(""):""}function Oi(e){const t=String(e??"");if(!t)return[];if(typeof Intl>"u"||!Intl.Segmenter)return t.split(/(\s+)/).filter(Boolean);const n=new Intl.Segmenter("th",{granularity:"word"}),a=[];for(const{segment:i}of n.segment(t))i&&a.push(i);const r=/^[(\[{«“‘"']+$/u,o=/^[\p{P}\p{S}]+$/u,s=[];for(const i of a){if(/^\s+$/.test(i)){s.push(i);continue}if(o.test(i)&&!r.test(i)&&s.length&&!/^\s+$/.test(s[s.length-1])){s[s.length-1]+=i;continue}s.push(i)}const c=[];for(let i=0;i<s.length;i+=1){const d=s[i];if(o.test(d)&&r.test(d)&&i+1<s.length&&!/^\s+$/.test(s[i+1])){s[i+1]=d+s[i+1];continue}c.push(d)}return c}const Mi="หมายเหตุ: กดรับครบ 7 ดอก แลกได้ 7 เหรียญ (ให้แลกได้เฉพาะนักอ่านที่เก็บครบเท่านั้น)",Fi="หมายเหตุ: เก็บกุญแจสีรุ้ง ครบ 7 ดอก แลกได้ 20 เหรียญ ตั้งแต่วันที่ 27 ธ.ค. ถึง 2 ม.ค. 70",Hi="(หากเก็บไม่ครบทั้ง 7 วัน จะไม่สามารถสะสมไว้แลกรับเหรียญในกิจกรรมถัดไปได้)",ji=["แลกรับเหรียญ","20 เหรียญ","7 เหรียญ","7 ดอก","7 วัน","27 ธ.ค.","2 ม.ค. 70"];function wt(e){const t=String(e??""),n=ji.slice().sort((o,s)=>s.length-o.length),a=n.map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));return(a.length?t.split(new RegExp(`(${a.join("|")})`,"g")):[t]).flatMap(o=>o?n.includes(o)?[`<span class="thai-nowrap">${l(o)}</span>`]:o.split(/(\s+)/).filter(Boolean).map(s=>/^\s+$/.test(s)?s:`<span class="thai-nowrap">${l(s)}</span>`):[]).join("")}function Pn(e){let t=e.parentElement;for(;t;){const n=getComputedStyle(t).display;if(n!=="inline"&&n!=="contents"&&n!=="inline-block")return t.clientWidth;t=t.parentElement}return 0}function Rn(e){const t=e.style.maxWidth,n=e.style.whiteSpace,a=e.style.overflow;e.style.maxWidth="none",e.style.whiteSpace="nowrap",e.style.overflow="hidden";const r=e.scrollWidth;return e.style.maxWidth=t,e.style.whiteSpace=n,e.style.overflow=a,r}function Ki(e){const t=e.textContent||"";if(!t||typeof Intl>"u"||!Intl.Segmenter)return!1;const n=new Intl.Segmenter("th",{granularity:"word"}),a=[];for(const{segment:u}of n.segment(t))u&&a.push(u);const r=/^[(\[{«“‘"'<<]+$/u,o=/^[\p{P}\p{S}]+$/u,s=[];for(const u of a){if(/^\s+$/.test(u)){s.push(u);continue}if(o.test(u)&&!r.test(u)&&s.length&&!/^\s+$/.test(s[s.length-1])){s[s.length-1]+=u;continue}s.push(u)}const c=[];for(let u=0;u<s.length;u+=1){const p=s[u];if(o.test(p)&&r.test(p)&&u+1<s.length&&!/^\s+$/.test(s[u+1])){s[u+1]=p+s[u+1];continue}c.push(p)}if(c.filter(u=>!/^\s+$/.test(u)).length<=1)return!1;const d=document.createDocumentFragment();for(const u of c){if(/^\s+$/.test(u)){d.appendChild(document.createTextNode(u));continue}const p=document.createElement("span");p.className="thai-nowrap",p.dataset.thaiSplit="1",p.textContent=u,d.appendChild(p)}return e.replaceWith(d),!0}function gr(e){if(!e)return;const t=[...e.querySelectorAll(".thai-nowrap")];for(const n of t){if(!n.isConnected)continue;const a=Pn(n);if(!(a>0))continue;if(Rn(n)<=a+1){n.classList.remove("thai-nowrap--overflow");continue}if(n.dataset.thaiSplit==="1"){n.classList.add("thai-nowrap--overflow");continue}Ki(n)||n.classList.add("thai-nowrap--overflow")}e.querySelectorAll('.thai-nowrap[data-thai-split="1"]').forEach(n=>{const a=Pn(n);if(!(a>0))return;const r=Rn(n);n.classList.toggle("thai-nowrap--overflow",r>a+1)})}function Rt(){if(Rt.bound)return;Rt.bound=!0;let e=0;window.addEventListener("resize",()=>{clearTimeout(e),e=window.setTimeout(()=>{const t=document.getElementById("app")||document.body;gr(t)},100)})}function P(e=document.getElementById("app")||document.body){if(!e)return;Rt();const t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode(r){const o=r.parentElement;return!o||o.closest(Pi)||!r.nodeValue||!/[\u0E00-\u0E7F]/.test(r.nodeValue)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n=[];for(;t.nextNode();)n.push(t.currentNode);for(const r of n){const o=r.nodeValue.split(/(\s+)/),s=document.createDocumentFragment();for(const c of o){if(!c)continue;if(/^\s+$/.test(c)){s.appendChild(document.createTextNode(c));continue}const i=document.createElement("span");i.className="thai-nowrap",i.textContent=c,s.appendChild(i)}r.parentNode.replaceChild(s,r)}const a=()=>gr(e);a(),document.fonts?.ready&&document.fonts.ready.then(a)}const Vi='<svg class="key-icon__svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 14a5.5 5.5 0 1 1 5.13-7.5H22v3h-2v2h-2v2h-2.37A5.5 5.5 0 0 1 8.5 14Zm0-8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/></svg>',Yi={silver:"/images/keys/key-silver.webp",rainbow:"/images/keys/key-rainbow.webp"};function Ji(e,t,n=""){if(n)return`<span class="key-icon key-icon--img key-icon--custom${t?" is-filled":""}"><img src="${l(n)}" alt="" width="32" height="32" /></span>`;const a=Yi[e];return a?`<span class="key-icon key-icon--img key-icon--${e}${t?" is-filled":""}"><img src="${a}" alt="" width="32" height="32" /></span>`:`<span class="key-icon key-icon--${e}${t?" is-filled":""}">${Vi}</span>`}function St({keys:e=0,need:t=7,name:n="กุญแจเงิน",style:a="silver",image:r=""}={}){const o=Math.max(1,Number(t)||7),s=Math.max(0,Number(e)||0),c=Math.min(s,o),i=["rainbow","gold","rose"].includes(a)?a:"silver",d=Array.from({length:o},(u,p)=>Ji(i,p<c,r)).join("");return`
    <p class="key-progress" aria-label="${l(n)} ${s}/${o}">
      <span class="key-row">${d}</span>
      <span class="key-progress__count">${l(n)} ${s}/${o}</span>
    </p>
  `}function kt(e){return`เหรียญ ${e.purchased} / โบนัส ${e.bonus}`}function On(e){return e?String(e):""}function Zi(){const e=C(),t=e.signup,n=e.checkin,a=e.firstTopUp;return`
    <section class="base-promo-section">
      <h2 class="admin-section-title">โปรพื้นฐาน</h2>
      <div class="base-promo-grid">
        <article class="promo-form-card">
          <div class="base-promo-head">
            <h3>โบนัสสมัครสมาชิก</h3>
            <p class="promo-status${t.enabled?" is-on":""}">${t.enabled?"กำลังใช้":"ปิดอยู่"}</p>
          </div>
          <p class="muted-note">สมาชิกใหม่ได้รับเหรียญโบนัสเมื่อสมัครสำเร็จ</p>
          <form class="auth-form" data-base-form="signup" novalidate>
            <div class="field">
              <label for="base-signup-coins">จำนวนเหรียญ</label>
              ${$("จำนวนที่ให้เมื่อสมัครสำเร็จ")}
              <input id="base-signup-coins" name="coins" type="number" min="1" step="1" required value="${l(String(t.coins))}" />
              ${f("coins")}
            </div>
            <div class="field">
              <label for="base-signup-expiry">อายุเหรียญโบนัส (วัน)</label>
              ${$("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
              <input id="base-signup-expiry" name="bonusExpiryDays" type="number" min="1" step="1" placeholder="ไม่บังคับ" value="${l(On(t.bonusExpiryDays))}" />
            </div>
            <div class="admin-save-row">
              <button class="btn btn-primary" type="submit">บันทึก</button>
              <button class="btn btn-ghost" type="button" data-base-toggle="signup" data-enabled="${t.enabled?"1":"0"}">${t.enabled?"ปิดโปร":"เปิดโปร"}</button>
            </div>
          </form>
        </article>
        <article class="promo-form-card">
          <div class="base-promo-head">
            <h3>เช็คอินรายวัน</h3>
            <p class="promo-status${n.enabled?" is-on":""}">${n.enabled?"กำลังใช้":"ปิดอยู่"}</p>
          </div>
          <p class="muted-note">เช็คอินวันละครั้ง รับกุญแจเงิน ไม่ใช่เหรียญ กุญแจใช้ปลดล็อกตอนไม่ได้</p>
          <form class="auth-form" data-base-form="checkin" novalidate>
            <div class="field">
              <label for="base-checkin-keys-day">จำนวนกุญแจต่อวัน</label>
              ${$("สมาชิกรับกุญแจเงินได้วันละครั้งเมื่อเช็คอิน ช่วงโปรแจกกุญแจจะได้กุญแจพิเศษแทน")}
              <input id="base-checkin-keys-day" name="keysPerDay" type="number" min="1" step="1" required value="${l(String(n.keysPerDay))}" />
              ${f("keysPerDay")}
            </div>
            <div class="field">
              <label for="base-checkin-keys-need">จำนวนกุญแจที่ต้องครบก่อนแลก</label>
              ${$("ต้องมีกุญแจเงินครบจำนวนนี้จึงจะแลกเหรียญได้")}
              <input id="base-checkin-keys-need" name="keysRequired" type="number" min="1" step="1" required value="${l(String(n.keysRequired||n.keysPerCoin))}" />
              ${f("keysRequired")}
            </div>
            <div class="field">
              <label for="base-checkin-coins">จำนวนเหรียญที่ได้เมื่อแลก</label>
              ${$("ครบจำนวนกุญแจข้างต้นแล้วจึงแลกได้เหรียญโบนัสตามจำนวนนี้")}
              <input id="base-checkin-coins" name="coins" type="number" min="1" step="1" required value="${l(String(n.coins||7))}" />
              ${f("coins")}
            </div>
            <div class="admin-save-row">
              <button class="btn btn-primary" type="submit">บันทึก</button>
              <button class="btn btn-ghost" type="button" data-base-toggle="checkin" data-enabled="${n.enabled?"1":"0"}">${n.enabled?"ปิดโปร":"เปิดโปร"}</button>
            </div>
          </form>
        </article>
        <article class="promo-form-card">
          <div class="base-promo-head">
            <h3>โบนัสเติมครั้งแรก</h3>
            <p class="promo-status${a.enabled?" is-on":""}">${a.enabled?"กำลังใช้":"ปิดอยู่"}</p>
          </div>
          <p class="muted-note">คิดเป็นเปอร์เซ็นต์ของจำนวนที่จ่าย แล้วบวกเพิ่มจากเหรียญเพิ่มของแพ็กนี้และโปรตามเทศกาล (ปัดขึ้น)</p>
          <form class="auth-form" data-base-form="firstTopUp" novalidate>
            <div class="field">
              <label for="base-first-value">เปอร์เซ็นต์โบนัส</label>
              ${$("เช่น 10 หมายถึงเพิ่ม 10% ของจำนวนที่จ่าย")}
              <input id="base-first-value" name="bonusValue" type="number" min="0" max="100" step="1" required value="${l(String(a.bonusValue))}" />
              ${f("bonusValue")}
            </div>
            <div class="field">
              <label for="base-first-expiry">อายุเหรียญโบนัส (วัน)</label>
              ${$("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
              <input id="base-first-expiry" name="bonusExpiryDays" type="number" min="1" step="1" placeholder="ไม่บังคับ" value="${l(On(a.bonusExpiryDays))}" />
            </div>
            <div class="admin-save-row">
              <button class="btn btn-primary" type="submit">บันทึก</button>
              <button class="btn btn-ghost" type="button" data-base-toggle="firstTopUp" data-enabled="${a.enabled?"1":"0"}">${a.enabled?"ปิดโปร":"เปิดโปร"}</button>
            </div>
          </form>
        </article>
      </div>
    </section>
  `}function Wi(e=""){const t=e?Gt(e):null;return`
    <section class="redeem-admin-section">
      <h2 class="admin-section-title">รหัสแลกเหรียญ</h2>
      <div class="promo-layout">
        <div>${re().map(a=>{const r=a.usedBy.length,o=a.expiresAt&&new Date(a.expiresAt)<=new Date,s=a.enabled?o?"หมดอายุ":r>=a.maxUses?"ใช้ครบแล้ว":"กำลังใช้":"ปิดอยู่",c=a.enabled&&!o&&r<a.maxUses;return`
        <article class="promo-card" data-code-id="${l(a.id)}">
          <div>
            <h3>${l(a.code)}</h3>
            <p class="promo-card__summary">${Bi(a)}</p>
            <p class="promo-status${c?" is-on":""}">${l(s)}</p>
          </div>
          <div class="promo-card__actions">
            <button type="button" class="btn btn-ghost" data-code-edit="${l(a.id)}">แก้ไข</button>
            <button type="button" class="btn btn-ghost" data-code-toggle="${l(a.id)}" data-enabled="${a.enabled?"1":"0"}">${a.enabled?"ปิดรหัส":"เปิดรหัส"}</button>
            <button type="button" class="btn btn-ghost" data-code-delete="${l(a.id)}">ลบ</button>
          </div>
        </article>
      `}).join("")||'<p class="empty-state">ยังไม่มีรหัสแลกเหรียญ</p>'}</div>
        <article class="promo-form-card">
          <h3 id="code-form-title">${t?"แก้ไขรหัส":"สร้างรหัสแลกเหรียญ"}</h3>
          <form class="auth-form" data-code-form novalidate>
            <input type="hidden" name="id" value="${t?l(t.id):""}" />
            <div class="field">
              <label for="code-value">รหัส</label>
              ${$("รหัสที่ผู้อ่านกรอกเพื่อรับเหรียญ เช่น HOUSE10")}
              <input id="code-value" name="code" type="text" required minlength="3" value="${t?l(t.code):""}" placeholder="เช่น HOUSE10" />
              ${f("code")}
            </div>
            <div class="field-row">
              <div class="field">
                <label for="code-coins">จำนวนเหรียญ</label>
                ${$("เหรียญโบนัสที่ได้รับเมื่อแลกสำเร็จ")}
                <input id="code-coins" name="coins" type="number" min="1" step="1" required value="${t?l(String(t.coins)):"10"}" />
                ${f("coins")}
              </div>
              <div class="field">
                <label for="code-max">ใช้ได้กี่ครั้ง</label>
                ${$("จำนวนครั้งรวมของรหัสนี้")}
                <input id="code-max" name="maxUses" type="number" min="1" step="1" required value="${t?l(String(t.maxUses)):"100"}" />
                ${f("maxUses")}
              </div>
            </div>
            <div class="field">
              <label for="code-expires">วันหมดอายุของรหัส</label>
              ${$("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
              ${ne({id:"code-expires",name:"expiresAt",value:t&&t.expiresAt?t.expiresAt:""})}
              ${f("expiresAt")}
            </div>
            <div class="field">
              <label for="code-expiry-days">อายุเหรียญโบนัสหลังแลก (วัน)</label>
              ${$("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
              <input id="code-expiry-days" name="bonusExpiryDays" type="number" min="1" step="1" placeholder="ไม่บังคับ" value="${t&&t.bonusExpiryDays?l(String(t.bonusExpiryDays)):""}" />
            </div>
            <div class="field field--check">
              <label class="check-label"><input type="checkbox" name="enabled" ${!t||t.enabled?"checked":""} /> เปิดใช้รหัส</label>
            </div>
            <p class="field-error" data-error-for="form" hidden></p>
            <div class="admin-save-row">
              <button class="btn btn-primary" type="submit">${t?"บันทึกรหัส":"สร้างรหัส"}</button>
              ${t?'<button class="btn btn-ghost" type="button" data-code-cancel>ยกเลิกการแก้ไข</button>':""}
            </div>
          </form>
        </article>
      </div>
    </section>
  `}function Gi(e){const t=mr(e.startAt,e.endAt),n=`${e.name} · ${e.keyName} ครบ ${e.keysRequired} อัน แลกได้ ${e.coins} เหรียญ`;return`${l(n)}${t?` · ${t}`:""}`}function br({id:e,label:t,hint:n,value:a="",fieldName:r="image"}){const o=!!a;return`
            <div class="field promo-image-field" data-image-upload>
              <label for="${e}">${l(t)}</label>
              ${n?$(n):""}
              <div class="promo-image-field__row">
                <img class="promo-image-field__preview" data-image-preview alt="" ${o?`src="${l(a)}"`:"hidden"} />
                <label class="btn btn-ghost event-form__upload" for="${e}">${o?"เปลี่ยนรูป":"อัปโหลดรูป"}</label>
                <button class="btn btn-ghost" type="button" data-image-clear${o?"":" hidden"}>ลบรูป</button>
              </div>
              <input id="${e}" class="event-form__file" type="file" accept="image/*" data-image-file />
              <input type="hidden" name="${r}" value="${l(a)}" data-image-value />
              <p class="field-error" data-image-error hidden></p>
            </div>`}function zi(e=document,t={}){e.querySelectorAll("[data-image-upload]").forEach(n=>{if(n.dataset.bound)return;n.dataset.bound="1";const a=n.querySelector("[data-image-file]"),r=n.querySelector("[data-image-value]"),o=n.querySelector("[data-image-preview]"),s=n.querySelector("[data-image-clear]"),c=n.querySelector("label.event-form__upload"),i=n.querySelector("[data-image-error]"),d=p=>{i.textContent=p||"",i.hidden=!p},u=p=>{r.value=p,p?(o.src=p,o.hidden=!1):(o.removeAttribute("src"),o.hidden=!0),s.hidden=!p,c.textContent=p?"เปลี่ยนรูป":"อัปโหลดรูป"};a.addEventListener("change",async()=>{const p=a.files?.[0];if(!p)return;const m=await bt(p,t);if(a.value="",!m.ok){d(m.error);return}d(""),u(m.dataUrl)}),s.addEventListener("click",()=>{d(""),u("")})})}function Xi(e=""){const t=e?it(e):null,n=Y().map(r=>{const o=zt(r),s=r.enabled?o?"กำลังใช้":"นอกช่วงเวลา":"ปิดอยู่";return`
        <article class="promo-card" data-key-promo-id="${l(r.id)}">
          <div>
            <h3>${l(r.name)}</h3>
            <p class="promo-card__summary">${Gi(r)}</p>
            <p class="promo-status${o&&r.enabled?" is-on":""}">${l(s)}</p>
          </div>
          <div class="promo-card__actions">
            <button type="button" class="btn btn-ghost" data-key-promo-edit="${l(r.id)}">แก้ไข</button>
            <button type="button" class="btn btn-ghost" data-key-promo-toggle="${l(r.id)}" data-enabled="${r.enabled?"1":"0"}">${r.enabled?"ปิดโปร":"เปิดโปร"}</button>
            <button type="button" class="btn btn-ghost" data-key-promo-delete="${l(r.id)}">ลบ</button>
          </div>
        </article>
      `}).join("")||'<p class="empty-state">ยังไม่มีโปรแจกกุญแจ</p>',a=ha.map(r=>`<option value="${l(r.id)}"${(t?t.keyStyle:"rainbow")===r.id?" selected":""}>${l(r.name)}</option>`).join("");return`
    <section class="key-promo-admin-section">
      <h2 class="admin-section-title">โปรแจกกุญแจ</h2>
      <p class="muted-note">เช็คอินในช่วงโปรจะได้กุญแจพิเศษแทนกุญแจเงิน แลกได้ครั้งเดียวต่อสมาชิก เมื่อโปรหมด กุญแจที่ยังไม่แลกจะนับเป็นกุญแจเงิน</p>
      <div class="promo-layout">
        <div>${n}</div>
        <article class="promo-form-card">
          <h3 id="key-promo-form-title">${t?"แก้ไขโปรแจกกุญแจ":"สร้างโปรแจกกุญแจ"}</h3>
          <form class="auth-form" data-key-promo-form novalidate>
            <input type="hidden" name="id" value="${t?l(t.id):""}" />
            <div class="field">
              <label for="key-promo-name">ชื่อโปร</label>
              ${$("เช่น Happy new year")}
              <input id="key-promo-name" name="name" type="text" required value="${t?l(t.name):""}" />
              ${f("name")}
            </div>
            <div class="field-row">
              <div class="field">
                <label for="key-promo-keyname">ชื่อกุญแจพิเศษ</label>
                ${$("เช่น กุญแจสีรุ้ง")}
                <input id="key-promo-keyname" name="keyName" type="text" required value="${t?l(t.keyName):"กุญแจสีรุ้ง"}" />
                ${f("keyName")}
              </div>
              <div class="field">
                <label for="key-promo-style">รูปแบบกุญแจ</label>
                ${$("ไอคอนที่แสดงให้ผู้อ่านเห็น")}
                <select id="key-promo-style" name="keyStyle">${a}</select>
              </div>
            </div>
            ${br({id:"key-promo-image",label:"รูปกุญแจ (ไม่บังคับ)",hint:"ถ้าอัปโหลด จะใช้แทนไอคอนกุญแจเดิมในช่องสะสมกุญแจและการ์ดกิจกรรม",value:t&&t.keyImage||"",fieldName:"keyImage"})}
            <div class="field-row">
              <div class="field">
                <label for="key-promo-required">กุญแจที่ต้องสะสม</label>
                ${$("ครบจำนวนนี้จึงแลกได้")}
                <input id="key-promo-required" name="keysRequired" type="number" min="1" step="1" required value="${t?l(String(t.keysRequired)):"7"}" />
                ${f("keysRequired")}
              </div>
              <div class="field">
                <label for="key-promo-coins">เหรียญที่ได้เมื่อแลก</label>
                ${$("แลกได้ครั้งเดียวต่อสมาชิก")}
                <input id="key-promo-coins" name="coins" type="number" min="1" step="1" required value="${t?l(String(t.coins)):"5"}" />
                ${f("coins")}
              </div>
            </div>
            <div class="field-row">
              <div class="field">
                <label for="key-promo-start">วันเริ่มต้น</label>
                ${$("นับกุญแจเฉพาะในช่วงนี้")}
                ${ne({id:"key-promo-start",name:"startAt",value:t?t.startAt:"",required:!0})}
                ${f("startAt")}
              </div>
              <div class="field">
                <label for="key-promo-end">วันสิ้นสุด</label>
                ${$("เมื่อหมดเขต กุญแจที่ยังไม่แลกจะเป็นกุญแจเงิน")}
                ${ne({id:"key-promo-end",name:"endAt",value:t?t.endAt:"",required:!0})}
                ${f("endAt")}
              </div>
            </div>
            <div class="field field--check">
              <label class="check-label"><input type="checkbox" name="enabled" ${!t||t.enabled?"checked":""} /> เปิดใช้โปรนี้</label>
            </div>
            <p class="field-error" data-error-for="form" hidden></p>
            <div class="admin-save-row">
              <button class="btn btn-primary" type="submit">${t?"บันทึกโปร":"สร้างโปร"}</button>
              ${t?'<button class="btn btn-ghost" type="button" data-key-promo-cancel>ยกเลิกการแก้ไข</button>':""}
            </div>
          </form>
        </article>
      </div>
    </section>
  `}function Fe(e="",t="",n=""){const a=e?ot(e):null,r=le().map(i=>{const d=la(i),u=i.enabled?d?"กำลังใช้":"นอกช่วงเวลา":"ปิดอยู่";return`
        <article class="promo-card" data-promo-id="${l(i.id)}">
          <div>
            <h3>${l(i.name)}</h3>
            <p class="promo-card__summary">${Ci(i)}</p>
            <p class="promo-status${d&&i.enabled?" is-on":""}">${l(u)}</p>
          </div>
          <div class="promo-card__actions">
            <button type="button" class="btn btn-ghost" data-promo-edit="${l(i.id)}">แก้ไข</button>
            <button type="button" class="btn btn-ghost" data-promo-toggle="${l(i.id)}" data-enabled="${i.enabled?"1":"0"}">${i.enabled?"ปิดโปร":"เปิดโปร"}</button>
            <button type="button" class="btn btn-ghost" data-promo-delete="${l(i.id)}">ลบ</button>
          </div>
        </article>
      `}).join("")||'<p class="empty-state">ยังไม่มีโปรโมชัน</p>',o=a&&a.packageIds!=="all"?a.packageIds:[],s=!a||a.packageIds==="all",c=De.map(i=>{const d=s||o.includes(i.id);return`<label class="check-label"><input type="checkbox" name="packageIds" value="${l(i.id)}" ${d?"checked":""} /> ${l(Ui(i))}</label>`}).join("");return`
    <p class="proto-note">ตั้งโปรพื้นฐาน โปรแจกกุญแจ โปรตามเทศกาล และรหัสแลกเหรียญได้ที่หน้านี้</p>
    ${Zi()}
    ${Xi(n)}
    <section class="festival-promo-section">
      <h2 class="admin-section-title">โปรตามเทศกาล</h2>
      <p class="muted-note">โปรนี้จะบวกเพิ่มจากเหรียญเพิ่มของแพ็กนี้ โดยคิดจากจำนวนที่จ่ายและปัดขึ้น</p>
      <div class="promo-layout">
      <div>
        ${r}
      </div>
      <section class="promo-form-card">
        <h2 class="admin-section-title" id="promo-form-title">${a?"แก้ไขโปรตามเทศกาล":"สร้างโปรตามเทศกาล"}</h2>
        <form class="auth-form" data-promo-form novalidate>
          <input type="hidden" name="id" value="${a?l(a.id):""}" />
          <div class="field">
            <label for="promo-name">ชื่อโปร</label>
            ${$("ชื่อที่แสดงให้ผู้อ่านเห็น")}
            <input id="promo-name" name="name" type="text" required value="${a?l(a.name):""}" />
            ${f("name")}
          </div>
          ${br({id:"promo-image",label:"รูปโปร (ไม่บังคับ)",hint:"ใช้เป็นรูปบนการ์ดกิจกรรมของโปรนี้",value:a&&a.image||""})}
          <fieldset class="field field--packs">
            <legend>ใช้กับแพ็กไหน</legend>
            ${$("เลือกได้ทุกแพ็ก หรือเฉพาะบางแพ็ก")}
            <label class="check-label"><input type="checkbox" name="allPackages" data-all-packages ${s?"checked":""} /> ทุกแพ็ก</label>
            <div class="promo-pack-options" data-pack-options>${c}</div>
            ${f("packageIds")}
          </fieldset>
          <div class="field-row">
            <div class="field">
              <label for="promo-type">ประเภทโบนัส</label>
              ${$("คิดจากจำนวนที่จ่าย หรือให้เป็นจำนวนเหรียญคงที่")}
              <select id="promo-type" name="bonusType">
                <option value="percent"${!a||a.bonusType==="percent"?" selected":""}>เปอร์เซ็นต์ของจำนวนที่จ่าย</option>
                <option value="fixed"${a&&a.bonusType==="fixed"?" selected":""}>จำนวนเหรียญคงที่</option>
              </select>
            </div>
            <div class="field">
              <label for="promo-value">จำนวนโบนัส</label>
              ${$("ถ้าเป็นเปอร์เซ็นต์ ให้ใส่เช่น 15")}
              <input id="promo-value" name="bonusValue" type="number" min="1" step="1" required value="${a?l(String(a.bonusValue)):"15"}" />
              ${f("bonusValue")}
            </div>
          </div>
          <div class="field-row">
            <div class="field">
              <label for="promo-start">วันเริ่มต้น</label>
              ${$("วันและเวลาที่โปรเริ่มใช้")}
              ${ne({id:"promo-start",name:"startAt",value:a?a.startAt:"",required:!0})}
              ${f("startAt")}
            </div>
            <div class="field">
              <label for="promo-end">วันสิ้นสุด</label>
              ${$("วันและเวลาที่โปรหมดอายุ")}
              ${ne({id:"promo-end",name:"endAt",value:a?a.endAt:"",required:!0})}
              ${f("endAt")}
            </div>
          </div>
          <div class="field">
            <label for="promo-expiry">อายุเหรียญโบนัส (วัน)</label>
            ${$("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
            <input id="promo-expiry" name="bonusExpiryDays" type="number" min="1" step="1" placeholder="ไม่บังคับ" value="${a&&a.bonusExpiryDays?l(String(a.bonusExpiryDays)):""}" />
          </div>
          <div class="field field--check">
            <label class="check-label"><input type="checkbox" name="enabled" ${!a||a.enabled?"checked":""} /> เปิดใช้โปรนี้</label>
            <label class="check-label"><input type="checkbox" name="firstTopUpOnly" ${a&&a.firstTopUpOnly?"checked":""} /> ใช้เฉพาะการเติมครั้งแรกของสมาชิก</label>
          </div>
          <p class="field-error" data-error-for="form" hidden></p>
          <div class="admin-save-row">
            <button class="btn btn-primary" type="submit">${a?"บันทึกการแก้ไข":"สร้างโปร"}</button>
            ${a?'<button class="btn btn-ghost" type="button" data-promo-cancel>ยกเลิกการแก้ไข</button>':""}
          </div>
        </form>
      </section>
      </div>
    </section>
    ${Wi(t)}
  `}function Qi(e){const t=new FormData(e),a=t.get("allPackages")==="on"?"all":t.getAll("packageIds");return{id:String(t.get("id")||"").trim()||void 0,name:t.get("name"),packageIds:a,bonusType:t.get("bonusType"),bonusValue:t.get("bonusValue"),startAt:ee(t,"startAt"),endAt:ee(t,"endAt"),enabled:t.get("enabled")==="on",firstTopUpOnly:t.get("firstTopUpOnly")==="on",bonusExpiryDays:t.get("bonusExpiryDays"),image:String(t.get("image")||"")}}function He(){zi(document,{maxSide:1200,maxChars:4e5});const e=document.querySelector("[data-promo-form]"),t=document.querySelector("[data-all-packages]"),n=document.querySelector("[data-pack-options]");if(t&&n){const o=()=>{n.querySelectorAll("input[name=packageIds]").forEach(s=>{s.disabled=t.checked,t.checked&&(s.checked=!0)})};t.addEventListener("change",o),o()}e&&e.addEventListener("submit",o=>{o.preventDefault();const s=Qi(e),c=s.id?ot(s.id):null;let i;try{i=ca(s),i.ok&&i.promo.image&&i.promo.image!==(c?.image||"")&&En(i.promo.id,i.promo.image)}catch{A(e,{form:ge});return}if(!i.ok){A(e,i.errors);return}h("/admin?tab=promos")}),document.querySelectorAll("[data-promo-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Fe(o.dataset.promoEdit,"","")}`,He(),ke(s),P(s),s.querySelector("#promo-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-promo-cancel]")?.addEventListener("click",()=>h("/admin?tab=promos")),document.querySelectorAll("[data-promo-toggle]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.enabled!=="1";mo(o.dataset.promoToggle,s),h("/admin?tab=promos")})}),document.querySelectorAll("[data-promo-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบโปรโมชันนี้หรือไม่?")&&(po(o.dataset.promoDelete),h("/admin?tab=promos"))})}),document.querySelectorAll("[data-base-form]").forEach(o=>{o.addEventListener("submit",s=>{s.preventDefault();const c=o.dataset.baseForm,i=new FormData(o),d={enabled:C()[c]?.enabled!==!1,coins:i.get("coins"),keysPerDay:i.get("keysPerDay"),keysRequired:i.get("keysRequired")||i.get("keysPerCoin"),coins:i.get("coins"),bonusValue:i.get("bonusValue"),bonusExpiryDays:i.get("bonusExpiryDays")},u=yo(c,d);if(!u.ok){A(o,u.errors);return}h("/admin?tab=promos")})}),document.querySelectorAll("[data-base-toggle]").forEach(o=>{o.addEventListener("click",()=>{vo(o.dataset.baseToggle,o.dataset.enabled!=="1"),h("/admin?tab=promos")})});const a=document.querySelector("[data-code-form]");a&&a.addEventListener("submit",o=>{o.preventDefault();const s=new FormData(a),c=fa({id:String(s.get("id")||"").trim()||void 0,code:s.get("code"),coins:s.get("coins"),maxUses:s.get("maxUses"),expiresAt:ee(s,"expiresAt")||null,bonusExpiryDays:s.get("bonusExpiryDays"),enabled:s.get("enabled")==="on"});if(!c.ok){A(a,c.errors);return}h("/admin?tab=promos")}),document.querySelectorAll("[data-code-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Fe("",o.dataset.codeEdit,"")}`,He(),ke(s),P(s),s.querySelector("#code-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-code-cancel]")?.addEventListener("click",()=>h("/admin?tab=promos")),document.querySelectorAll("[data-code-toggle]").forEach(o=>{o.addEventListener("click",()=>{_o(o.dataset.codeToggle,o.dataset.enabled!=="1"),h("/admin?tab=promos")})}),document.querySelectorAll("[data-code-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบรหัสนี้หรือไม่?")&&(So(o.dataset.codeDelete),h("/admin?tab=promos"))})});const r=document.querySelector("[data-key-promo-form]");r&&r.addEventListener("submit",o=>{o.preventDefault();const s=new FormData(r),c=String(s.get("id")||"").trim()||void 0,i=c?it(c):null;let d;try{d=wa({id:c,name:s.get("name"),keyName:s.get("keyName"),keyStyle:s.get("keyStyle"),keyImage:String(s.get("keyImage")||""),keysRequired:s.get("keysRequired"),coins:s.get("coins"),startAt:ee(s,"startAt"),endAt:ee(s,"endAt"),enabled:s.get("enabled")==="on"}),d.ok&&d.promo.keyImage&&d.promo.keyImage!==(i?.keyImage||"")&&En(d.promo.id,d.promo.keyImage)}catch{A(r,{form:ge});return}if(!d.ok){A(r,d.errors);return}h("/admin?tab=promos")}),document.querySelectorAll("[data-key-promo-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Fe("","",o.dataset.keyPromoEdit)}`,He(),ke(s),P(s),s.querySelector("#key-promo-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-key-promo-cancel]")?.addEventListener("click",()=>h("/admin?tab=promos")),document.querySelectorAll("[data-key-promo-toggle]").forEach(o=>{o.addEventListener("click",()=>{Do(o.dataset.keyPromoToggle,o.dataset.enabled!=="1"),h("/admin?tab=promos")})}),document.querySelectorAll("[data-key-promo-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบโปรแจกกุญแจนี้หรือไม่?")&&(To(o.dataset.keyPromoDelete),h("/admin?tab=promos"))})})}function ec(){L();const e=y(),t=un();w({name:"login",next:"/"});let n;if(!e)n=`
      <p class="home-daily__note">เข้าสู่ระบบ<wbr>เพื่อ<wbr>เช็คอิน<wbr>รายวัน รับกุญแจเงิน</p>`;else if(!t.enabled)n='<p class="home-daily__note">เช็คอินรายวันปิดอยู่ตอนนี้</p>';else{const c=t.currentKeyPromo?t.currentKeyPromo.keyName:"กุญแจเงิน",i=t.canExchange?'<button class="btn btn-primary" type="button" data-exchange-keys>แลกรับเหรียญ</button>':"",d=(t.keyPromos||[]).filter(u=>u.promo.name!=="Happy new year").map(u=>{const p=vn(u.promo),m=u.alreadyExchanged?'<button class="btn btn-ghost" type="button" disabled>แลกไปแล้ว</button>':u.canExchange?`<button class="btn btn-primary" type="button" data-exchange-promo="${l(u.promo.id)}">แลกเหรียญ</button>`:"";return`
        <div class="home-daily__promo" data-key-promo="${l(u.promo.id)}">
          <p class="home-daily__promo-name">${l(u.promo.name)}</p>
          ${St({keys:u.keys,need:u.keysRequired,name:u.promo.keyName,style:u.promo.keyStyle,image:u.promo.keyImage})}
          ${p?`<p class="key-promo-dates">${p}</p>`:""}
          ${m}
        </div>`}).join("");n=`
      <div class="checkin-actions">
        <button class="btn ${t.checkedInToday?"btn-ghost":"btn-primary"}" type="button" data-checkin ${t.checkedInToday?"disabled":""}>${t.checkedInToday?"เช็คอินวันนี้แล้ว":`<span class="checkin-btn__text"><span class="checkin-btn__lead">เช็คอิน</span><span class="checkin-btn__rest">รับ${l(c)} +${t.keysPerDay}</span></span>`}</button>
        ${i}
      </div>
      ${St({keys:t.keys,need:t.keysRequired||t.keysPerCoin,name:"กุญแจเงิน",style:"silver"})}
      ${d}`}let a;if(!e)a=`
      <p class="home-daily__note">เข้าสู่ระบบ<wbr>เพื่อ<wbr>เติมเหรียญ</p>`;else{const c=B();a=`
      <ul class="home-daily__balances">
        <li class="home-daily__row">
          ${Bt}
          <span class="home-daily__label">เหรียญของฉัน</span>
          <strong class="home-daily__amount">${c.purchased}</strong>
        </li>
        <li class="home-daily__row">
          ${Ks}
          <span class="home-daily__label">โบนัสเหรียญ</span>
          <strong class="home-daily__amount">${c.bonus}</strong>
        </li>
      </ul>
      <a class="coin-pack__buy" href="/coins" data-link>${Bt}<span>เติมเหรียญ</span></a>`}const r=us(),o=e&&r&&!r.alreadyExchanged&&r.canExchange?`<div class="checkin-actions"><button class="btn btn-primary" type="button" data-exchange-promo="${l(r.promo.id)}">แลกรับเหรียญ</button></div>`:"",s=r?`<section class="home-daily__box home-daily__box--wide" data-home-key-promo>
            <h2>${fr('กิจกรรมพิเศษ "Happy new year"')}</h2>
            ${o}
            ${St({keys:r.keys,need:r.keysRequired,name:r.promo.keyName,style:r.promo.keyStyle||"rainbow",image:r.promo.keyImage})}
            <p class="home-daily__rule">${wt(Fi)}</p>
            <p class="home-daily__rule">${wt(Hi)}</p>
          </section>`:"";return`
    <section class="home-daily" aria-label="เช็คอินและเติมเหรียญ">
      <div class="container">
        <div class="home-daily__grid">
          <section class="home-daily__box" data-home-checkin>
            <h2>เช็คอินรายวัน</h2>
            ${n}
            <p class="home-daily__rule">${wt(Mi)}</p>
          </section>
          <section class="home-daily__box" data-home-topup>
            <h2>กระเป๋าเหรียญ</h2>
            ${a}
          </section>
          ${s}
        </div>
      </div>
    </section>
  `}function $n(e){const t=new Date(e);if(Number.isNaN(t.getTime()))return"";const n=new Intl.DateTimeFormat("th-TH",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"Asia/Bangkok"}).format(t).replace(".",":");return R(`${ce(t)} ${n}`)}function yr(e,t){return!e||!e.messages.length?'<p class="report-chat__empty">พิมพ์ข้อความด้านล่างเพื่อเริ่มแจ้งปัญหา</p>':e.messages.map(n=>{const a=t==="author"?n.role==="author":n.role==="reader";return`
      <div class="chat-msg chat-msg--${l(n.role)}${a?" is-mine":""}">
        <span class="chat-msg__who">${l(Ko(n,e))}</span>
        <div class="chat-msg__bubble">${hr(n.text)}</div>
        <span class="chat-msg__time">${$n(n.createdAt)}</span>
      </div>`}).join("")}function Ot({report:e,topicId:t,viewer:n}){const a=ct(e?e.topicId:t),r=n==="author"&&e?`<p class="report-chat__meta">${l(e.userName)} · ${l(e.userEmail||"")}</p>`:"",o=n==="reader"&&!e?'<a class="report-chat__change" href="/report" data-link>เปลี่ยนหัวข้อ</a>':"";return`
    <section class="report-chat" data-report-chat data-viewer="${n}" data-report-id="${e?l(e.id):""}" data-topic-id="${l(a?a.id:"")}">
      <header class="report-chat__head">
        <div>
          <h2>หัวข้อ: ${l(a?a.name:"อื่นๆ")}</h2>
          ${r}
        </div>
        ${o}
      </header>
      <div class="report-chat__log" data-chat-log role="log" aria-live="polite">${yr(e,n)}</div>
      <form class="report-chat__form" data-chat-form novalidate>
        <textarea name="text" rows="2" maxlength="${Na}" aria-label="ข้อความ" placeholder="พิมพ์ข้อความ"></textarea>
        <button class="btn btn-primary" type="submit">ส่ง</button>
      </form>
      <p class="field-error" data-chat-error hidden></p>
    </section>`}function tc(e){document.title=`แจ้งปัญหาการใช้งาน — ${b.shortName}`,S("light");const t=y(),n=new URLSearchParams(window.location.search).get("topic")||"";let a;if(e){const r=t?nn(e):null;!r||r.userId!==t.id?a=`
        <p class="empty-state">ไม่พบเรื่องที่แจ้ง</p>
        <p><a class="btn btn-ghost" href="/report" data-link>กลับไปหน้าแจ้งปัญหา</a></p>`:(ut(r.id,"reader"),a=Ot({report:r,viewer:"reader"}))}else if(ct(n))a=Ot({report:null,topicId:n,viewer:"reader"});else{const r=t?Vo(t.id):[],o=xa.map(c=>`<a class="report-topic" href="/report?topic=${encodeURIComponent(c.id)}" data-link>${l(c.name)}</a>`).join(""),s=r.length?`<section class="report-card">
          <h2>เรื่องที่แจ้งไว้</h2>
          <ul class="report-list">${r.map(c=>`
            <li>
              <a class="report-list__item" href="/report/${encodeURIComponent(c.id)}" data-link>
                <span class="report-list__topic">${l(c.topicName)}${c.readerUnread?'<span class="report-list__new">ใหม่</span>':""}</span>
                <span class="report-list__preview" data-no-wbr>${l(c.last?c.last.text.replace(/\s+/g," ").slice(0,70):"")}</span>
                <span class="report-list__time">${$n(c.lastAt)}</span>
              </a>
            </li>`).join("")}</ul>
        </section>`:"";a=`
      <section class="report-card">
        <h2>เลือกหัวข้อที่ต้องการแจ้ง</h2>
        <div class="report-topics">${o}</div>
      </section>
      ${s}`}return`
    ${N("report")}
    <main id="main" class="page-block">
      <div class="container report-page">
        <a class="back-link" href="/" data-link>← กลับหน้าแรก</a>
        <h1 class="page-title">แจ้งปัญหาการใช้งาน</h1>
        ${a}
      </div>
    </main>
    ${x()}
  `}function nc(e=""){const t=dt(),n=e?t.find(s=>s.id===e):null;n&&ut(n.id,"author");const a=t.length?t.map(s=>{const c=s.authorUnread&&s!==n;return`
        <li>
          <a class="report-list__item${n&&s.id===n.id?" is-current":""}" href="/admin?tab=reports&report=${encodeURIComponent(s.id)}" data-link>
            <span class="report-list__topic">${l(s.topicName)}${c?'<span class="report-list__new">ใหม่</span>':""}</span>
            <span class="report-list__who">${l(s.userName)}</span>
            <span class="report-list__preview" data-no-wbr>${l(s.last?s.last.text.replace(/\s+/g," ").slice(0,70):"")}</span>
            <span class="report-list__time">${$n(s.lastAt)}</span>
          </a>
        </li>`}).join(""):"",r=t.length?`<ul class="report-list">${a}</ul>`:'<p class="empty-state">ยังไม่มีเรื่องที่นักอ่านแจ้ง</p>',o=n?`<a class="back-link report-admin__back" href="/admin?tab=reports" data-link>← กลับไปรายการ</a>${Ot({report:n,viewer:"author"})}`:'<p class="empty-state report-admin__placeholder">เลือกเรื่องจากรายการเพื่อดูและตอบกลับ</p>';return`
    <section class="report-admin${n?" has-selected":""}">
      <h2 class="admin-section-title">แจ้งปัญหา</h2>
      <div class="report-admin__layout">
        <div class="report-admin__list">${r}</div>
        <div class="report-admin__chat">${o}</div>
      </div>
    </section>
  `}let Mn=!1;function Fn(e){const t=e.dataset.reportId,n=e.dataset.viewer,a=e.querySelector("[data-chat-log]");if(!t||!a)return;const r=nn(t);if(!r)return;const o=a.scrollHeight-a.scrollTop-a.clientHeight<80;a.innerHTML=yr(r,n),P(a),o&&(a.scrollTop=a.scrollHeight),ut(t,n==="author"?"author":"reader")}function Hn(){const e=document.querySelector("[data-report-chat]");if(!e)return;const t=e.dataset.viewer,n=e.querySelector("[data-chat-form]"),a=e.querySelector("[data-chat-error]"),r=e.querySelector("[data-chat-log]"),o=n.elements.text;r&&(r.scrollTop=r.scrollHeight);const s=i=>{a.textContent=i||"",a.hidden=!i},c=()=>{const i=o.value;if(!String(i).trim()){s("กรุณาพิมพ์ข้อความ");return}s("");const d=e.dataset.reportId;let u;try{d?t==="author"?u=Zo(d,i):u=Jo(d,i):u=Yo({topicId:e.dataset.topicId,text:i})}catch{s(ge);return}if(!u.ok){s(u.error);return}if(o.value="",!d){h(`/report/${u.report.id}`);return}Fn(e),r&&(r.scrollTop=r.scrollHeight)};n.addEventListener("submit",i=>{i.preventDefault(),c()}),o.addEventListener("keydown",i=>{i.key==="Enter"&&(i.ctrlKey||i.metaKey)&&(i.preventDefault(),c())}),Mn||(Mn=!0,window.addEventListener("storage",i=>{if(i.key!=="banNiyai_reports")return;const d=document.querySelector("[data-report-chat]");d&&Fn(d)}))}function ac(){return`
    <div class="coins-extras">
      <section class="coins-extra-card">
        <h2>แลกโค้ด</h2>
        <form class="redeem-form" data-redeem-form novalidate>
          <div class="field">
            <label for="redeem-code">รหัสแลกเหรียญ</label>
            <div class="redeem-form__row">
              <input id="redeem-code" name="code" type="text" required placeholder="กรอกรหัสที่นี่" autocomplete="off" />
              <button class="btn btn-primary" type="submit">แลกเหรียญ</button>
            </div>
            ${f("code")}
          </div>
        </form>
      </section>
    </div>
  `}function rc(){if(!y())return document.title=`เติมเหรียญ — ${b.shortName}`,"";document.title=`เติมเหรียญ — ${b.shortName}`,S("light"),L();const t=B(),n=!Oa(),a=De.map(s=>{const c=pa(s,{isFirstTopUp:n}),i=c.paid?Math.round(c.packageBonus*100/c.paid):0,d=[`<div class="coin-pack__row"><span class="date-part" data-no-wbr>เหรียญ</span><span class="coin-pack__amt date-part" data-no-wbr>${c.paid}</span></div>`];if(c.packageBonus&&d.push(`<div class="coin-pack__row"><span class="date-part" data-no-wbr>โบนัส ${i}%</span><span class="coin-pack__amt date-part" data-no-wbr>+${c.packageBonus}</span></div>`),c.firstTopUpBonus&&d.push(`<div class="coin-pack__row coin-pack__row--promo"><span class="date-part" data-no-wbr>โบนัสเติมครั้งแรก</span><span class="coin-pack__amt date-part" data-no-wbr>+${c.firstTopUpBonus}</span></div>`),c.promo&&c.promoBonus){let u=c.promo.firstTopUpOnly?"โปรเติมครั้งแรก":c.promo.name;c.promo.bonusType==="percent"&&(u=`${u} ${c.promo.bonusValue}%`),d.push(`<div class="coin-pack__row coin-pack__row--promo"><span class="date-part" data-no-wbr>${l(u)}</span><span class="coin-pack__amt date-part" data-no-wbr>+${c.promoBonus}</span></div>`)}return`
      <article class="coin-pack">
        <div class="coin-pack__body">
          <p class="coin-pack__pay"><span class="date-part" data-no-wbr>เติม ${s.thb}฿</span></p>
          <div class="coin-pack__rows">
            ${d.join("")}
            <div class="coin-pack__divider"></div>
            <div class="coin-pack__row coin-pack__row--total">
              <span class="date-part" data-no-wbr>รวม</span>
              <span class="coin-pack__amt date-part" data-no-wbr>${c.total} เหรียญ</span>
            </div>
          </div>
          <button class="coin-pack__buy" type="button" data-topup="${l(s.id)}"><span class="date-part" data-no-wbr>เติม ${s.thb}฿</span></button>
        </div>
      </article>
    `}).join(""),r=mt(),o=r.length?`<ul class="tx-list">${r.map(s=>{const c=s.coins>0?`+${s.coins}`:String(s.coins),i=oc(s.createdAt),d=Number(s.packageBonus||0)+Number(s.firstTopUpBonus||0)+Number(s.promoBonus||0),u=d?`<p class="tx-item__bonus">ได้รับโบนัส ${d} เหรียญ${s.promoName?` (รวม ${l(s.promoName)})`:""}</p>`:"";return`<li class="tx-item"><div><p class="tx-item__label">${l(s.label)}</p>${u}<p class="tx-item__when">${l(i)}</p></div><span class="tx-item__amount${s.coins>0?" is-plus":""}">${c}</span></li>`}).join("")}</ul>`:'<p class="empty-state">ยังไม่มีรายการเติมเหรียญหรือปลดล็อกตอน</p>';return`
    ${N("coins")}
    <main id="main" class="page-block">
      <div class="container coins-page">
        <h1 class="page-title">เติมเหรียญ</h1>
        <p class="coin-closed-loop">เหรียญในระบบนี้ใช้ได้เฉพาะสำหรับอ่านนิยายในบ้านนิยายนี้เท่านั้น ไม่สามารถโอนให้ผู้อื่น หรือแลก/ถอนเป็นเงินสดได้</p>
        <p class="coins-balance-lead">ยอดคงเหลือ <strong>${t.total}</strong> เหรียญ</p>
        <p class="coins-breakdown">${l(kt(t))}</p>
        <p class="proto-note">การชำระเงินในหน้านี้เป็นการทดลองเท่านั้น ไม่มีการตัดบัตรจริง จุดเชื่อมระบบรับชำระเงิน เช่น ChillPay หรือ Opn จะมาในภายหลัง</p>
        ${ac()}
        <div class="coin-pack-grid">${a}</div>
        <section class="tx-section" aria-labelledby="tx-heading">
          <h2 id="tx-heading">ประวัติรายการ</h2>
          ${o}
        </section>
      </div>
    </main>
    ${x()}
  `}function oc(e){const t=new Date(e);return Number.isNaN(t.getTime())?"":yn(t)}function vr(e,t){const n=y(),a=w({name:"reader",novelId:e,chapterId:t});if(!n){h({name:"login",next:a});return}const r=v(e),o=be(r,t);if(!r||!o||!ve(o))return;if(me(r,o)){h(a);return}const s=document.querySelector(".modal-backdrop");s&&s.remove();const c=te(o),i=B(),d=i.total,u=d>=c,p=document.createElement("div");p.className="modal-backdrop",p.dataset.walletModal="true",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","unlock-title");const m=u?`<button class="btn btn-primary" type="button" data-unlock-confirm>ยืนยันการปลดล็อก</button>
       <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`:`<p class="field-error">เหรียญไม่พอสำหรับปลดล็อกตอนนี้</p>
       <a class="btn btn-primary" href="/coins?next=${encodeURIComponent(a)}" data-link>ไปเติมเหรียญ</a>
       <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`;p.innerHTML=`
    <div class="modal">
      <h2 id="unlock-title">ปลดล็อกตอน</h2>
      <p>${l(r.title)} · ตอนที่ ${l(o.id)} ${l(o.title)}</p>
      <p>ราคา <strong>${c}</strong> เหรียญ · ยอดคงเหลือ <strong>${d}</strong> เหรียญ (${l(kt(i))})</p>
      <div class="modal__actions">${m}</div>
    </div>
  `,document.body.appendChild(p),P(p),p.querySelector("[data-modal-close]")?.addEventListener("click",()=>p.remove()),p.addEventListener("click",k=>{k.target===p&&p.remove()});const g=p.querySelector("[data-unlock-confirm]");g&&g.addEventListener("click",()=>{const k=ys(e,t);if(!k.ok&&k.reason==="insufficient"){p.remove(),vr(e,t);return}p.remove(),k.ok&&h(a)})}function sc(e,t){return w(t?{name:"reader",novelId:e,chapterId:t}:{name:"novel",id:e})}function Ue(e,t){const n=e?.querySelector("[data-donate-error]");n&&(n.hidden=!t,n.textContent=t||"")}function ic(){document.querySelectorAll("[data-donate-box]").forEach(e=>{const t=e.dataset.novelId,n=e.dataset.chapterId||void 0,a=(o,s)=>cc(t,n,o,s);e.querySelectorAll("[data-donate-gift]").forEach(o=>{o.addEventListener("click",s=>{if(s.target.closest(".donate-custom"))return;Ue(e,"");const c=Ge.find(i=>i.id===o.dataset.donateGift);if(c){if(c.coins==null){const i=o.querySelector(".donate-custom__input");i?.focus();const d=i?.value,u=Number(d),p=Math.round(u);if(!d||!Number.isFinite(u)||p!==u||p<=0){Ue(e,"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก");return}a(c,p);return}a(c,c.coins)}})});const r=e.querySelector(".donate-custom__input");r&&(r.addEventListener("click",o=>o.stopPropagation()),r.addEventListener("keydown",o=>{if(o.key!=="Enter")return;o.preventDefault(),Ue(e,"");const s=Number(r.value),c=Math.round(s);if(!Number.isFinite(s)||c!==s||c<=0){Ue(e,"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก");return}a(Ge.find(i=>i.id==="coin"),c)}))})}function cc(e,t,n,a){const r=y(),o=sc(e,t);if(!r){h({name:"login",next:o});return}if(!v(e)||!n)return;const c=document.querySelector(".modal-backdrop");c&&c.remove();const i=document.createElement("div");i.className="modal-backdrop",i.dataset.walletModal="true",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i);const d=()=>i.remove();i.addEventListener("click",p=>{p.target===i&&d()});const u=()=>{const p=B(),g=p.total>=a?`<button class="btn btn-primary" type="button" data-donate-send>ส่งโดเนท</button>
         <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`:`<p class="field-error">เหรียญไม่พอสำหรับโดเนทนี้</p>
         <a class="btn btn-primary" href="/coins?next=${encodeURIComponent(o)}" data-link>ไปเติมเหรียญ</a>
         <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`;i.setAttribute("aria-labelledby","donate-confirm-title"),i.innerHTML=`
      <div class="modal modal--donate">
        <h2 id="donate-confirm-title">ยืนยันการโดเนท</h2>
        <div class="donate-confirm">
          ${hn(n.id)}
          <p class="donate-confirm__name">${l(n.name)}</p>
        </div>
        <p>ใช้ <strong>${a}</strong> เหรียญ · ยอดคงเหลือ <strong>${p.total}</strong> เหรียญ (${l(kt(p))})</p>
        <div class="modal__actions">${g}</div>
      </div>`,P(i),i.querySelector("[data-modal-close]").addEventListener("click",d),i.querySelector("[data-donate-send]")?.addEventListener("click",()=>{const k=xs({novelId:e,giftId:n.id,customAmount:a,chapterId:t||void 0});if(!k.ok&&k.reason==="insufficient"){u();return}if(!k.ok){const _=i.querySelector(".modal__actions"),F=document.createElement("p");F.className="field-error",F.textContent=k.reason==="invalid"?"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก":"ไม่สามารถโดเนทได้ในขณะนี้",_?.prepend(F);return}d(),lc(n.id)})};u()}function lc(e){if($r())return;document.querySelectorAll(".fx-gift-burst").forEach(n=>n.remove());const t=document.createElement("div");t.className="fx-gift-burst",t.setAttribute("aria-hidden","true");for(let n=0;n<7;n+=1){const a=document.createElement("span");a.className="fx-gift",a.innerHTML=hn(e),a.style.left=`${12+Math.random()*76}vw`,a.style.animationDelay=`${Math.random()*.15}s`,a.style.animationDuration=`${.85+Math.random()*.35}s`,t.appendChild(a)}document.body.appendChild(t),window.setTimeout(()=>t.remove(),1600)}function $r(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Pe(e){try{sessionStorage.setItem("banNiyai_fx",e)}catch{}}function dc(){const t=[...document.querySelectorAll(".key-icon.is-filled")].at(-1);t&&(t.classList.remove("is-popping"),t.offsetWidth,t.classList.add("is-popping"),t.addEventListener("animationend",()=>t.classList.remove("is-popping"),{once:!0}))}function uc(){document.querySelectorAll(".fx-coin-rain").forEach(t=>t.remove());const e=document.createElement("div");e.className="fx-coin-rain",e.setAttribute("aria-hidden","true");for(let t=0;t<16;t+=1){const n=document.createElement("span");n.className="fx-coin",n.innerHTML=Bt,n.style.left=`${6+Math.random()*88}vw`,n.style.animationDelay=`${Math.random()*.28}s`,n.style.animationDuration=`${.95+Math.random()*.55}s`,e.appendChild(n)}document.body.appendChild(e),window.setTimeout(()=>e.remove(),1800)}function pc(){let e="";try{e=sessionStorage.getItem("banNiyai_fx")||"",sessionStorage.removeItem("banNiyai_fx")}catch{}!e||$r()||(e==="checkin"&&dc(),e==="coins"&&uc())}function mc(){document.querySelectorAll("[data-locked-chapter]").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),vr(t.dataset.novelId,t.dataset.chapterId)},!0)}),ic(),document.querySelectorAll("[data-topup]").forEach(t=>{t.addEventListener("click",()=>{gs(t.dataset.topup).ok&&(Pe("coins"),h(I()||"/coins"))})}),document.querySelectorAll("[data-checkin]").forEach(t=>{t.addEventListener("click",()=>{const n=ps();if(!n.ok&&n.reason!=="already"){n.error&&alert(n.error);return}n.ok&&Pe("checkin"),h(I()||"/")})}),document.querySelectorAll("[data-exchange-keys]").forEach(t=>{t.addEventListener("click",()=>{const n=ms();if(!n.ok){n.error&&alert(n.error);return}Pe("coins"),h(I()||"/")})}),document.querySelectorAll("[data-exchange-promo]").forEach(t=>{t.addEventListener("click",()=>{const n=fs(t.dataset.exchangePromo);if(!n.ok){n.error&&alert(n.error);return}Pe("coins"),h(I()||"/")})});const e=document.querySelector("[data-redeem-form]");e&&e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e),a=hs(n.get("code"));if(!a.ok){A(e,{code:a.error||"ไม่สามารถแลกโค้ดได้"});return}h("/coins")})}function fc(){document.querySelectorAll("[data-wallet-modal]").forEach(e=>e.remove()),se()}function se(){document.querySelectorAll("[data-guest-login-modal]").forEach(e=>e.remove()),document.body.classList.remove("guest-login-open"),se._onKey&&(document.removeEventListener("keydown",se._onKey),se._onKey=null)}function hc(){if(y())return;const e=document.querySelector("[data-guest-login-modal]");if(e){e.querySelector("#login-email")?.focus();return}const t=document.createElement("div");t.className="modal-backdrop guest-login-backdrop",t.dataset.guestLoginModal="1",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-labelledby","guest-login-title");const n=I()==="/"?void 0:I();t.innerHTML=`
    <div class="modal modal--guest-login">
      <button type="button" class="guest-login__close" data-guest-login-close aria-label="ปิด">×</button>
      <div class="modal--guest-login__inner">
        ${fn({titleId:"guest-login-title"})}
        ${er({next:n,compact:!0})}
      </div>
    </div>
  `,document.body.appendChild(t),document.body.classList.add("guest-login-open"),t.querySelector("[data-guest-login-close]").addEventListener("click",()=>se());const a=r=>{r.key==="Escape"&&se()};se._onKey=a,document.addEventListener("keydown",a),_r(),P(t),t.querySelector("#login-email")?.focus()}function gc(e){return!!e.closest("a, button, input, select, textarea, summary, label, [data-link], [role='button'], [role='tab'], [role='search']")}function bc(){if(y()||I()!=="/")return;const e=document.getElementById("app")||document.body,t=n=>{n.target.closest("[data-guest-login-modal]")||gc(n.target)&&(n.preventDefault(),n.stopPropagation(),hc())};e.addEventListener("click",t,!0),e.addEventListener("submit",t,!0)}function kr(e,t){const n=String(e||"").replace(/\r\n/g,`
`).trim();return n?n.split(/\n[ \t]*\n/).map(a=>a.replace(/^\n+|\n+$/g,"")).filter(Boolean).map(a=>{const r=a.split(`
`).map(o=>fr(o.trim())).join("<br>");return`<p class="${t}">${r}</p>`}).join(""):""}function yc(){document.title=`กิจกรรม — ${b.shortName}`,S("light"),M();const e=J(),t=e.length?e.slice().sort((n,a)=>new Date(n.startAt)-new Date(a.startAt)).map(n=>{const a=vn(n),r=n.image?`<div class="event-card__media"><img class="event-card__image" src="${l(n.image)}" alt="" /></div>`:"";return`
        <article class="event-card" id="event-${l(n.id)}">
          ${r}
          <div class="event-card__body">
            <h2 class="event-card__title">${l(n.title)}</h2>
            ${a?`<p class="event-card__dates">${a}</p>`:""}
            ${kr(n.detail,"event-card__detail")}
          </div>
        </article>`}).join(""):'<p class="empty-state">ยังไม่มีกิจกรรมในขณะนี้</p>';return`
    ${N("events")}
    <main id="main" class="page-block">
      <div class="container events-page">
        <h1 class="page-title">กิจกรรม</h1>
        <div class="events-list">${t}</div>
      </div>
    </main>
    ${x()}
  `}function vc(){document.title=`ติดตามนักเขียน — ${b.shortName}`,S("light"),Cs();const e=Ja(),t=e.length?`<ul class="follow-list">${e.map(n=>`<li><a class="follow-channel" href="${l(n.url)}" target="_blank" rel="noopener noreferrer">${l(n.name)}</a></li>`).join("")}</ul>`:'<p class="empty-state">ช่องทางติดตามนักเขียนจะเพิ่มให้ในภายหลัง</p>';return`
    ${N("follow")}
    <main id="main" class="page-block">
      <div class="container follow-page">
        <h1 class="page-title">ติดตามนักเขียน</h1>
        ${t}
      </div>
    </main>
    ${x()}
  `}function wr(e=""){M();const t=e?Fo(e):null;return`
    <section class="event-admin-section">
      <h2 class="admin-section-title">กิจกรรม</h2>
      <div class="promo-layout">
        <div>${J().slice().sort((a,r)=>new Date(r.startAt)-new Date(a.startAt)).map(a=>{const r=vn(a);return`
        <article class="promo-card" data-event-id="${l(a.id)}">
          <div>
            <h3>${l(a.title)}</h3>
            ${r?`<p class="promo-card__summary">${r}</p>`:""}
            ${kr(a.detail,"promo-card__summary")}
          </div>
          <div class="promo-card__actions">
            <button type="button" class="btn btn-ghost" data-event-edit="${l(a.id)}">แก้ไข</button>
            <button type="button" class="btn btn-ghost" data-event-delete="${l(a.id)}">ลบ</button>
          </div>
        </article>`}).join("")||'<p class="empty-state">ยังไม่มีกิจกรรม</p>'}</div>
        <article class="promo-form-card">
          <h3 id="event-form-title">${t?"แก้ไขกิจกรรม":"สร้างกิจกรรม"}</h3>
          <form class="auth-form" data-event-form novalidate>
            <input type="hidden" name="id" value="${t?l(t.id):""}" />
            <input type="hidden" name="image" value="${t?l(t.image||""):""}" data-event-image-value />
            <div class="field">
              <label for="event-title">ชื่อกิจกรรม</label>
              <input id="event-title" name="title" type="text" required value="${t?l(t.title):""}" />
              ${f("title")}
            </div>
            <div class="field-row">
              <div class="field">
                <label>วันเริ่มต้น</label>
                ${ne({id:"event-start",name:"startAt",value:t?t.startAt:"",required:!0})}
                ${f("startAt")}
              </div>
              <div class="field">
                <label>วันสิ้นสุด</label>
                ${ne({id:"event-end",name:"endAt",value:t?t.endAt:"",required:!0})}
                ${f("endAt")}
              </div>
            </div>
            <div class="field">
              <label for="event-detail">รายละเอียด</label>
              <textarea id="event-detail" name="detail" rows="5">${t?l(t.detail||""):""}</textarea>
            </div>
            <div class="field">
              <label for="event-image-url">รูปภาพ (ไม่บังคับ)</label>
              ${$("วางลิงก์รูป หรืออัปโหลดไฟล์ รูปที่อัปโหลดจะถูกเก็บในเบราว์เซอร์นี้")}
              <input id="event-image-url" type="url" inputmode="url" placeholder="https://" data-event-image-url value="${t&&t.image&&!String(t.image).startsWith("data:")?l(t.image):""}" />
              <label class="btn btn-ghost event-form__upload" for="event-image-file">อัปโหลดรูป</label>
              <input id="event-image-file" class="event-form__file" type="file" accept="image/*" data-event-image-file />
              ${f("image")}
              <img class="event-form__preview" data-event-image-preview alt="" ${t&&t.image?`src="${l(t.image)}"`:"hidden"} />
            </div>
            <div class="admin-save-row">
              <button class="btn btn-primary" type="submit">${t?"บันทึกกิจกรรม":"สร้างกิจกรรม"}</button>
              ${t?'<button class="btn btn-ghost" type="button" data-event-cancel>ยกเลิกการแก้ไข</button>':""}
            </div>
          </form>
        </article>
      </div>
    </section>
  `}function $c(e=document){const t=e.querySelector("[data-event-image-file]"),n=e.querySelector("[data-event-image-url]"),a=e.querySelector("[data-event-image-value]"),r=e.querySelector("[data-event-image-preview]"),o=e.querySelector('[data-error-for="image"]'),s=i=>{r&&(i?(r.src=i,r.hidden=!1):(r.removeAttribute("src"),r.hidden=!0))},c=i=>{o&&(o.textContent=i||"",o.hidden=!i)};t?.addEventListener("change",async()=>{const i=t.files&&t.files[0];if(!i)return;const d=await bt(i,{maxSide:1200,maxChars:4e5});if(t.value="",!d.ok){c(d.error);return}a&&(a.value=d.dataUrl),n&&(n.value=""),s(d.dataUrl),c("")}),n?.addEventListener("input",()=>{const i=n.value.trim();a&&(a.value=i),s(i),c("")})}function Sr(){$c();const e=document.querySelector("[data-event-form]");e&&e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e);let a;try{a=Ho({id:String(n.get("id")||"").trim()||void 0,title:n.get("title"),startAt:ee(n,"startAt"),endAt:ee(n,"endAt"),detail:n.get("detail"),image:n.get("image")})}catch{A(e,{image:ge});return}if(!a.ok){A(e,a.errors);return}h("/admin?tab=events")}),document.querySelectorAll("[data-event-edit]").forEach(t=>{t.addEventListener("click",()=>{const n=document.querySelector(".admin-page");if(!n)return;const a=n.querySelector(".admin-tabs")?.outerHTML||"",r=n.querySelector(".page-title")?.outerHTML||"";n.innerHTML=`${r}${a}${wr(t.dataset.eventEdit)}`,Sr(),ke(n),P(n),n.querySelector("#event-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-event-cancel]")?.addEventListener("click",()=>h("/admin?tab=events")),document.querySelectorAll("[data-event-delete]").forEach(t=>{t.addEventListener("click",()=>{confirm("ลบกิจกรรมนี้หรือไม่?")&&(jo(t.dataset.eventDelete),h("/admin?tab=events"))})})}function kc(e){const t=Ee(e?.publishedAt);return t?t.toISOString():""}function wc(e){const t=Ee(e?.publishedAt);if(!t)return l("ยังไม่กำหนดเวลา");const n=ve(e)?"เผยแพร่แล้ว":"ตั้งเวลา";return`${l(n)} ${R(yn(t))}`}function Sc(e){const t=te(e);return t<=0?"ฟรี":`${t} เหรียญ`}function D({novelId:e,newNovel:t,order:n}={}){const a=new URLSearchParams;e&&a.set("novel",e),t&&a.set("newNovel","1"),n&&a.set("order","1");const r=a.toString();return r?`/admin?${r}`:"/admin"}function _c(){const e=new URLSearchParams(window.location.search),t=e.get("novel");return t&&e.get("order")==="1"?Tc(t):t?jn(t):e.get("newNovel")==="1"?jn(null):Ac()}function Ac(){const e=ye().map(n=>`
      <a class="novel-card" href="${D({novelId:n.id})}" data-link>
        <div class="novel-card__cover" style="${Le(n.cover)}" aria-hidden="true">
          ${yt(n,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
        </div>
        <div class="novel-card__body">
          <h3 class="novel-card__title">${l(n.title)}</h3>
        </div>
      </a>`).join(""),t=`
      <a class="novel-card novel-card--add" href="${D({newNovel:!0})}" data-link aria-label="เพิ่มนิยายเรื่องใหม่">
        <div class="novel-card__cover novel-card__cover--add" aria-hidden="true">
          <span class="novel-card__plus">+</span>
        </div>
        <div class="novel-card__body">
          <h3 class="novel-card__title">เพิ่มนิยายเรื่องใหม่</h3>
        </div>
      </a>`;return`
    <section class="chapter-admin-section">
      <h2 class="admin-section-title">ระบบนักเขียน</h2>
      <div class="home-catalog-grid chapter-admin-grid">${e}${t}</div>
    </section>
  `}function Nc(e,{isNew:t=!1}={}){const n=e?.cover?.image||"",a=!!n,r=!!(!t&&e?.cover&&(e.cover.from||e.cover.motif)),o=!a&&!r,s=a||r?"เปลี่ยนรูปปก":"อัปโหลดรูปปก",c=!a&&r?`<span class="writer-cover__motif" data-cover-motif>${l(e.cover?.motif||"")}</span>`:'<span class="writer-cover__motif" data-cover-motif hidden></span>';return`
        <div class="writer-cover" data-cover-editor>
          <label class="writer-cover__frame${o?" writer-cover__frame--empty":""}" for="novel-cover-file" style="${Le(e?.cover)}">
            <span class="writer-cover__plus"${o?"":" hidden"}>+</span>
            ${c}
            <img class="writer-cover__photo" data-cover-preview alt="" ${a?`src="${l(n)}"`:"hidden"} />
          </label>
          <input id="novel-cover-file" class="writer-cover__file" type="file" accept="image/*" data-cover-file />
          <input type="hidden" name="coverImage" value="${l(n)}" data-cover-value />
          <button class="btn btn-ghost" type="button" data-cover-pick>${s}</button>
          ${f("coverImage")}
        </div>`}function xc(e,{isNew:t=!1}={}){const n=b.penNames.map(a=>{const r=!t&&e?.author===a?" checked":"";return`
            <label class="check-label">
              <input type="radio" name="author" value="${l(a)}" required${r} />
              <span>${l(a)}</span>
            </label>`}).join("");return`
        <form class="auth-form writer-details-form" data-novel-details-form novalidate>
          ${t?"":`<input type="hidden" name="novelId" value="${l(e.id)}" />`}
          ${Nc(e,{isNew:t})}
          <div class="field">
            <label for="novel-title">ชื่อเรื่อง</label>
            <input id="novel-title" name="title" type="text" required value="${l(e?.title||"")}" />
            ${f("title")}
          </div>
          <fieldset class="field">
            <legend>นามปากกา</legend>
            ${n}
            ${f("author")}
          </fieldset>
          <div class="field">
            <label for="novel-teaser">คำโปรย</label>
            <textarea id="novel-teaser" name="teaser" rows="4">${l(e?.teaser||"")}</textarea>
            ${f("teaser")}
          </div>
          <div class="field">
            <label for="novel-meb-url">ลิงก์อีบุ๊ก MEB</label>
            <input id="novel-meb-url" name="mebUrl" type="url" inputmode="url" placeholder="https://" autocomplete="off" value="${l(e?.mebUrl||"")}" />
            ${f("mebUrl")}
          </div>
          <div class="admin-save-row">
            <button class="btn btn-primary" type="submit">บันทึก</button>
            <p class="admin-status" data-details-status hidden></p>
          </div>
        </form>`}function Ec(e,t){const n=`chapter-published-${e}-${t.id}`,a=kc(t),r=!!Ee(t.publishedAt);return`
    <form class="chapter-inline-form" data-chapter-schedule-form novalidate>
      <fieldset class="field">
        <legend>การเผยแพร่</legend>
        <label class="check-label">
          <input type="radio" name="publishMode" value="now"${r?"":" checked"} data-publish-mode />
          <span>เผยแพร่ทันที</span>
        </label>
        <label class="check-label">
          <input type="radio" name="publishMode" value="schedule"${r?" checked":""} data-publish-mode />
          <span>ตั้งเวลาเผยแพร่</span>
        </label>
        <div class="chapter-admin-schedule" data-schedule-fields>
          <label>วันและเวลาที่เผยแพร่</label>
          ${ne({id:n,name:"publishedAt",value:a,required:!1})}
          ${f("publishedAt")}
        </div>
      </fieldset>
      <div class="admin-save-row">
        <button class="btn btn-primary" type="submit">บันทึก</button>
        <button class="btn btn-ghost" type="button" data-chapter-editor-cancel>ยกเลิก</button>
      </div>
    </form>`}function Ic(e){const t=String(te(e));return`
    <form class="chapter-inline-form" data-chapter-price-form novalidate>
      <div class="field">
        <label>ราคาปลดล็อก (เหรียญ)</label>
        ${$("ใส่ 0 หากต้องการให้ตอนนี้อ่านฟรี")}
        <input name="price" type="number" inputmode="numeric" min="0" step="1" required value="${l(t)}" />
        ${f("price")}
      </div>
      <div class="admin-save-row">
        <button class="btn btn-primary" type="submit">บันทึก</button>
        <button class="btn btn-ghost" type="button" data-chapter-editor-cancel>ยกเลิก</button>
      </div>
    </form>`}function jn(e){const t=!e,n=t?{id:"",title:"",author:"",teaser:"",tags:[],secondaryTags:[],chapters:[],cover:null}:v(e);if(!t&&!n)return`
    <section class="chapter-admin-section">
      <div class="writer-novel__top">
        <a class="back-link" href="${D()}" data-link>← กลับไปเลือกนิยาย</a>
      </div>
      <p class="empty-state">ไม่พบนิยายเรื่องนี้</p>
    </section>`;const r=(n.chapters||[]).map(c=>{const i=wc(c);return`
        <article class="promo-card chapter-admin-row" data-chapter-row data-novel-id="${l(n.id)}" data-chapter-id="${l(c.id)}">
          <div class="chapter-admin-row__main">
            <h3>ตอนที่ ${l(c.id)} ${l(c.title)}</h3>
            <p class="promo-card__summary">${l(Sc(c))} · ${i}</p>
          </div>
          <div class="chapter-admin-row__actions">
            <button type="button" class="btn btn-ghost" data-chapter-open="schedule">ตั้งเวลา</button>
            <button type="button" class="btn btn-ghost" data-chapter-open="price">ตั้งค่าเหรียญ</button>
            <button type="button" class="btn btn-ghost" data-delete-chapter>ลบ</button>
          </div>
          <div class="chapter-admin-row__editor" data-chapter-editor="schedule" hidden>
            ${Ec(n.id,c)}
          </div>
          <div class="chapter-admin-row__editor" data-chapter-editor="price" hidden>
            ${Ic(c)}
          </div>
        </article>`}).join("")||'<p class="empty-state">ยังไม่มีตอน</p>',o=`
        <article class="promo-form-card" id="chapter-form-card" hidden>
          <h3 id="chapter-form-title">สร้างตอนใหม่</h3>
          <form class="auth-form" data-chapter-form novalidate>
            <input type="hidden" name="novelId" value="${l(n.id)}" />
            <div class="field">
              <label for="chapter-title">ชื่อตอน</label>
              <input id="chapter-title" name="title" type="text" required />
              ${f("title")}
            </div>
            <div class="field">
              <label for="chapter-content">เนื้อหาตอน</label>
              <textarea id="chapter-content" name="content" rows="12" class="chapter-admin-body" required></textarea>
              ${f("content")}
            </div>
            <div class="admin-save-row">
              <button class="btn btn-primary" type="submit">สร้างตอน</button>
              <button class="btn btn-ghost" type="button" data-chapter-form-cancel>ยกเลิก</button>
            </div>
          </form>
        </article>`,s=t?{id:"new",title:"",author:"",tags:[],secondaryTags:[]}:n;return`
    <section class="chapter-admin-section" data-writer-novel="${l(n.id)}">
      <div class="writer-novel__top">
        <a class="back-link" href="${D()}" data-link>← กลับไปเลือกนิยาย</a>
        ${t?"":`<button type="button" class="btn btn-ghost writer-novel__delete" data-delete-novel="${l(n.id)}">ลบนิยาย</button>`}
      </div>
      ${xc(n,{isNew:t})}
      ${$i(s,{showHeading:!1,showSave:!t,idSuffix:t?"new":void 0})}
      <div class="chapter-admin-novel__head">
        <h3 class="admin-section-title">ตอน</h3>
        <div class="chapter-admin-novel__actions">
          <button class="btn btn-ghost" type="button" data-chapter-order-open>จัดลำดับตอน</button>
          <button class="btn btn-primary" type="button" data-chapter-toggle-form>เพิ่มตอน</button>
        </div>
      </div>
      ${o}
      ${r}
    </section>
  `}function Tc(e){const t=v(e);if(!t)return`
    <section class="chapter-admin-section">
      <a class="back-link" href="${D()}" data-link>← กลับไปเลือกนิยาย</a>
      <p class="empty-state">ไม่พบนิยายเรื่องนี้</p>
    </section>`;const n=(t.chapters||[]).map(a=>`
        <article class="promo-card chapter-order-row" data-chapter-order-row data-chapter-id="${l(a.id)}">
          <div class="chapter-order-row__main">
            <h3>ตอนที่ ${l(a.id)} ${l(a.title)}</h3>
          </div>
          <button type="button" class="chapter-order-handle" data-chapter-drag aria-label="ลากเพื่อย้ายตอน">
            <span class="chapter-order-handle__bars" aria-hidden="true"></span>
          </button>
        </article>`).join("")||'<p class="empty-state">ยังไม่มีตอน</p>';return`
    <section class="chapter-admin-section" data-chapter-order-view data-novel-id="${l(t.id)}">
      <h2 class="admin-section-title">จัดลำดับตอน</h2>
      <div class="chapter-order-list" data-chapter-order-list>${n}</div>
      <div class="admin-save-row">
        <button class="btn btn-primary" type="button" data-chapter-order-save>บันทึก</button>
        <a class="btn btn-ghost" href="${D({novelId:t.id})}" data-link>ยกเลิก</a>
      </div>
    </section>
  `}function Kn(e){document.querySelectorAll("[data-chapter-editor]").forEach(t=>{t!==e&&(t.hidden=!0)})}function _t(e){if(!e)return;const t=e.querySelector('[name="publishMode"]:checked')?.value||"now",n=e.querySelector("[data-schedule-fields]");n&&(n.hidden=t!=="schedule");const a=e.querySelector("[name='publishedAtDate']"),r=e.querySelector("[name='publishedAtTime']");a&&(a.required=t==="schedule"),r&&(r.required=t==="schedule")}function Dc(){const e=document.querySelector("[data-chapter-toggle-form]"),t=document.querySelector("#chapter-form-card");e&&t&&e.addEventListener("click",()=>{if(!document.querySelector("[data-writer-novel]")?.dataset.writerNovel){window.alert("กรุณาบันทึกนิยายก่อน");return}t.hidden=!t.hidden,t.hidden||(t.querySelector("[name='title']")?.focus(),t.scrollIntoView({behavior:"smooth",block:"start"}))}),document.querySelector("[data-chapter-form-cancel]")?.addEventListener("click",()=>{t&&(t.hidden=!0)}),document.querySelector("[data-chapter-order-open]")?.addEventListener("click",()=>{const a=document.querySelector("[data-writer-novel]")?.dataset.writerNovel;if(!a){window.alert("กรุณาบันทึกนิยายก่อน");return}h(D({novelId:a,order:!0}))});const n=document.querySelector("[data-chapter-form]");n&&n.addEventListener("submit",a=>{a.preventDefault();const r=new FormData(n),o=String(r.get("novelId")||"").trim(),s=Pr(o,{title:r.get("title"),content:r.get("content")});if(!s.ok){A(n,s.errors);return}h(D({novelId:o}))}),document.querySelectorAll("[data-chapter-row]").forEach(a=>{const r=a.dataset.novelId,o=a.dataset.chapterId;a.querySelectorAll("[data-chapter-open]").forEach(i=>{i.addEventListener("click",()=>{const d=a.querySelector(`[data-chapter-editor="${i.dataset.chapterOpen}"]`);if(!d)return;const u=d.hidden;if(Kn(u?d:null),d.hidden=!u,!d.hidden){const p=d.querySelector("[data-chapter-schedule-form]");p&&_t(p)}})}),a.querySelectorAll("[data-chapter-editor-cancel]").forEach(i=>{i.addEventListener("click",()=>Kn())});const s=a.querySelector("[data-chapter-schedule-form]");s&&(_t(s),s.querySelectorAll("[data-publish-mode]").forEach(i=>{i.addEventListener("change",()=>_t(s))}),s.addEventListener("submit",i=>{i.preventDefault();const d=new FormData(s),u=String(d.get("publishMode")||"now"),p=Fr(r,o,{publishMode:u,publishedAt:u==="schedule"?ee(d,"publishedAt"):void 0});if(!p.ok){A(s,p.errors);return}h(D({novelId:r}))}));const c=a.querySelector("[data-chapter-price-form]");c&&c.addEventListener("submit",i=>{i.preventDefault();const d=new FormData(c),u=Mr(r,o,d.get("price"));if(!u.ok){A(c,u.errors);return}h(D({novelId:r}))}),a.querySelector("[data-delete-chapter]")?.addEventListener("click",()=>{if(!confirm("ลบตอนนี้หรือไม่?"))return;Rr(r,o).ok&&h(D({novelId:r}))})}),qc(),document.querySelector("[data-delete-novel]")?.addEventListener("click",a=>{if(!confirm("ลบนิยายเรื่องนี้หรือไม่?"))return;const r=a.currentTarget.dataset.deleteNovel;Cr(r).ok&&h(D())})}function qc(){const e=document.querySelector("[data-chapter-order-view]");if(!e)return;const t=e.querySelector("[data-chapter-order-list]"),n=e.dataset.novelId;e.querySelector("[data-chapter-order-save]")?.addEventListener("click",()=>{const a=[...e.querySelectorAll("[data-chapter-order-row]")].map(o=>o.dataset.chapterId),r=Or(n,a);if(!r.ok){window.alert(r.error||"บันทึกลำดับไม่สำเร็จ");return}h(D({novelId:n}))}),t&&t.addEventListener("pointerdown",a=>{const r=a.target.closest("[data-chapter-drag]");if(!r||!t.contains(r)||a.pointerType==="mouse"&&a.button!==0)return;const o=r.closest("[data-chapter-order-row]");if(!o)return;a.preventDefault(),r.setPointerCapture(a.pointerId);const s=a.clientY;let c=!1,i=null,d=0;const u=m=>{if(m.pointerId!==a.pointerId)return;if(m.preventDefault(),!c){if(Math.abs(m.clientY-s)<4)return;c=!0;const _=o.getBoundingClientRect();d=s-_.top,i=document.createElement("div"),i.className="chapter-order-row chapter-order-row--placeholder",i.style.height=`${_.height}px`,o.style.width=`${_.width}px`,o.style.left=`${_.left}px`,o.style.top=`${_.top}px`,o.style.position="fixed",o.style.zIndex="30",o.style.pointerEvents="none",o.classList.add("is-dragging"),o.after(i)}o.style.top=`${m.clientY-d}px`;const g=[...t.querySelectorAll("[data-chapter-order-row]")].filter(_=>_!==o);let k=!1;for(const _ of g){const F=_.getBoundingClientRect();if(m.clientY<F.top+F.height/2){_.before(i),k=!0;break}}!k&&g.length&&g[g.length-1].after(i)},p=m=>{m.pointerId===a.pointerId&&(r.removeEventListener("pointermove",u),r.removeEventListener("pointerup",p),r.removeEventListener("pointercancel",p),r.hasPointerCapture(a.pointerId)&&r.releasePointerCapture(a.pointerId),c&&i&&i.replaceWith(o),o.classList.remove("is-dragging"),o.style.position="",o.style.left="",o.style.top="",o.style.width="",o.style.zIndex="",o.style.pointerEvents="")};r.addEventListener("pointermove",u),r.addEventListener("pointerup",p),r.addEventListener("pointercancel",p)})}function Lc(e){const t=e.querySelector("[data-cover-file]"),n=e.querySelector("[data-cover-value]"),a=e.querySelector("[data-cover-preview]");!t||!n||t.addEventListener("change",async()=>{const r=t.files?.[0];if(!r)return;const o=await bt(r,{maxSide:900,maxChars:3e5});if(t.value="",!o.ok){A(e,{coverImage:o.error});return}n.value=o.dataUrl,a&&(a.src=n.value,a.hidden=!1),e.querySelector("[data-cover-motif]")?.setAttribute("hidden","");const s=e.querySelector(".writer-cover__plus");s&&(s.hidden=!0),e.querySelector(".writer-cover__frame")?.classList.remove("writer-cover__frame--empty");const c=e.querySelector("[data-cover-pick]");c&&(c.textContent="เปลี่ยนรูปปก"),A(e,{})})}function Cc(){const e=document.querySelector("[data-novel-details-form]");e&&(Lc(e),e.querySelector("[data-cover-pick]")?.addEventListener("click",()=>{e.querySelector("[data-cover-file]")?.click()}),e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e),a=String(n.get("novelId")||"").trim(),r=document.querySelector("[data-admin-novel]"),o=r?[...r.querySelectorAll("[data-main-tag].is-on")].map(d=>d.dataset.mainTag):[],s=r?oe(r):[],c={title:n.get("title"),author:n.get("author"),teaser:n.get("teaser"),mebUrl:n.get("mebUrl"),coverImage:n.get("coverImage")};let i;try{i=a?Lr(a,c):qr({...c,tags:o,secondaryTags:s})}catch{A(e,{coverImage:ge});return}if(!i.ok){if(A(e,i.errors||{}),i.errors?.tags){const d=r?.querySelector('[data-error-for="tags"]');d&&(d.textContent=i.errors.tags,d.hidden=!1)}return}h(D({novelId:i.novel.id}))}))}function Bc(e){if(!e?.byMonth?.length&&!e?.byYear?.length)return"";const t=(e.byMonth||[]).map(a=>{const r=Ei(a.year,a.month);return`<li><span class="date-part" data-no-wbr>${l(r)}</span><span>${a.thb} บาท</span></li>`}).join(""),n=(e.byYear||[]).map(a=>{const r=Ii(a.year);return`<li><span class="date-part" data-no-wbr>${l(r)}</span><span>${a.thb} บาท</span></li>`}).join("");return`
        <div class="sales-topup-periods">
          <div>
            <h4>ยอดเติมรายเดือน (สำหรับภาษี)</h4>
            <ul class="sales-topup-period-list">${t}</ul>
          </div>
          <div>
            <h4>ยอดเติมรายปี (สำหรับภาษี)</h4>
            <ul class="sales-topup-period-list">${n}</ul>
          </div>
        </div>`}function Vn(e){return`ปลดล็อก ${e.unlocks} ครั้ง (${e.unlockCoins} เหรียญ) · โดเนท ${e.donations} ครั้ง (${e.donateCoins} เหรียญ)`}function Uc(){const e=Is(),t=e.novels.map(o=>{const s=o.chapters.map(i=>`
          <tr>
            <td data-label="ตอน">ตอนที่ ${l(i.id)} ${l(i.title)}</td>
            <td data-label="ปลดล็อก (ครั้ง)">${i.totals.unlocks}</td>
            <td data-label="เหรียญจากปลดล็อก">${i.totals.unlockCoins}</td>
            <td data-label="โดเนท (ครั้ง)">${i.totals.donations}</td>
            <td data-label="เหรียญจากโดเนท">${i.totals.donateCoins}</td>
          </tr>`).join(""),c=o.unassignedDonations.donations?`<tr>
            <td data-label="ตอน">โดเนททั้งเรื่อง (ไม่ระบุตอน)</td>
            <td data-label="ปลดล็อก (ครั้ง)">0</td>
            <td data-label="เหรียญจากปลดล็อก">0</td>
            <td data-label="โดเนท (ครั้ง)">${o.unassignedDonations.donations}</td>
            <td data-label="เหรียญจากโดเนท">${o.unassignedDonations.donateCoins}</td>
          </tr>`:"";return`
        <section class="sales-novel">
          <h3>${l(o.title)}</h3>
          <p class="muted-note">นามปากกา ${l(o.author)}</p>
          <p class="promo-card__summary">${l(Vn(o.totals))}</p>
          <div class="sales-table-wrap">
            <table class="sales-table">
              <thead>
                <tr>
                  <th>ตอน</th>
                  <th>ปลดล็อก (ครั้ง)</th>
                  <th>เหรียญจากปลดล็อก</th>
                  <th>โดเนท (ครั้ง)</th>
                  <th>เหรียญจากโดเนท</th>
                </tr>
              </thead>
              <tbody>
                ${s||'<tr><td colspan="5">ยังไม่มีตอน</td></tr>'}
                ${c}
              </tbody>
            </table>
          </div>
        </section>`}).join(""),n=Ts(),a=n.records.map(o=>{const s=o.createdAt?ce(new Date(o.createdAt)):"";return`
        <tr>
          <td data-label="วันที่">${s?R(s):"—"}</td>
          <td data-label="ชื่อนักอ่าน">${l(o.readerName)}</td>
          <td data-label="ราคาแพ็ก (฿)">${o.thb}฿</td>
          <td data-label="เหรียญ">${o.paid}</td>
          <td data-label="โบนัส 10%">${o.packageBonus}</td>
          <td data-label="โปรเติมครั้งแรก">${o.firstTopUpPromo}</td>
          <td data-label="รวมเหรียญ">${o.coins}</td>
        </tr>`}).join(""),r=n.records.length?`<div class="sales-table-wrap">
            <table class="sales-table sales-table--topup">
              <thead>
                <tr>
                  <th>วันที่</th>
                  <th>ชื่อนักอ่าน</th>
                  <th>ราคาแพ็ก (฿)</th>
                  <th>เหรียญ</th>
                  <th>โบนัส 10%</th>
                  <th>โปรเติมครั้งแรก</th>
                  <th>รวมเหรียญ</th>
                </tr>
              </thead>
              <tbody>${a}</tbody>
            </table>
          </div>`:'<p class="empty-state">ยังไม่มีการเติมเหรียญ</p>';return`
    <section class="sales-admin-section">
      <h2 class="admin-section-title">ยอดขายและโดเนท</h2>
      <article class="promo-card sales-overall">
        <div>
          <h3>ยอดรวมทั้งหมด</h3>
          <p class="promo-card__summary">${l(Vn(e.overall))}</p>
        </div>
      </article>
      <section class="sales-novel sales-topup">
        <h3>การเติมเหรียญของนักอ่าน</h3>
        <p class="promo-card__summary">ยอดเติมรวม ${n.totals.thb} บาท · ออกเหรียญทั้งหมด ${n.totals.coins} เหรียญ</p>
        ${Bc(n)}
        ${r}
      </section>
      ${t||'<p class="empty-state">ยังไม่มีข้อมูลนิยาย</p>'}
    </section>
  `}function Pc(e){fc(),bc(),document.querySelectorAll("[data-font-size]").forEach(n=>{n.addEventListener("click",()=>{const a=Number(n.dataset.fontSize);os(a);const r=document.querySelector(".reader-shell");r&&r.style.setProperty("--reader-size",`${a}px`),document.querySelectorAll("[data-font-size]").forEach(o=>{const s=Number(o.dataset.fontSize)===a;o.classList.toggle("is-active",s),o.setAttribute("aria-pressed",String(s))})})});const t=document.querySelector("[data-toggle-night]");if(t&&t.addEventListener("click",()=>{const n=Pa()==="night"?"light":"night";as(n),S(n),t.classList.toggle("is-active",n==="night"),t.setAttribute("aria-pressed",String(n==="night")),t.textContent=n==="night"?"โหมดกลางคืน: เปิด":"โหมดกลางคืน"}),e.name==="reader"&&(window.scrollTo(0,0),y()&&e.novelId&&e.chapterId)){const a=v(e.novelId),r=be(a,e.chapterId);me(a,r)&&eo(e.novelId,e.chapterId)}if(jc(),Hc(),Rc(),Kc(),_r(),di(),Yn(),window.__headerResizeBound||(window.__headerResizeBound=!0,window.addEventListener("resize",Yn)),e.name==="report"&&Hn(),e.name==="admin"){const n=new URLSearchParams(window.location.search).get("tab");n==="promos"?He():n==="events"?Sr():n==="reports"?Hn():n==="sales"||(Si(),Dc(),Cc())}ke(),mc(),ni(),P(),pc(),e.name==="events"&&window.location.hash&&document.getElementById(window.location.hash.slice(1))?.scrollIntoView({block:"start"})}function Rc(){const e=document.querySelector("[data-search-form]");if(!e)return;const t=e.querySelector(".header-search__field"),n=e.querySelector("[data-search-toggle]");e.addEventListener("submit",a=>{a.preventDefault();const r=String(new FormData(e).get("q")||"").trim();h(w({name:"search",q:r}))}),n&&t&&n.addEventListener("click",()=>{const a=!e.classList.contains("is-open");e.classList.toggle("is-open",a),n.setAttribute("aria-expanded",String(a)),n.setAttribute("aria-label",a?"ปิดช่องค้นหา":"เปิดช่องค้นหา"),a?t.focus():t.blur()})}function Oc(){const e=La();return e.length?`<ul class="header-inbox__list">${e.map(t=>{const n=t.readAt?" is-read":"",a=pr(t.createdAt);return`<li>
      <a class="inbox-item${n}" href="${l(t.href)}" data-link data-inbox-item="${l(t.id)}"${t.type==="report"?" data-inbox-report":""}>
        <span class="inbox-item__kind">${l(t.kindLabel)}</span>
        <span class="inbox-item__title">${l(t.title)}</span>
        <span class="inbox-item__body">${Li(t.body)}</span>
        ${a?`<span class="inbox-item__date">${a}</span>`:""}
      </a>
    </li>`}).join("")}</ul>`:'<p class="header-inbox__empty">ยังไม่มีการแจ้งเตือน</p>'}function Mc(){const e=Tt(),t=e>99?"99+":String(e);return`
          <div class="header-inbox" data-inbox>
            <button type="button" class="header-inbox__btn" data-inbox-toggle aria-expanded="false" aria-haspopup="true" aria-controls="inbox-panel">
              <span class="header-inbox__icon">
                ${js}
                <span class="header-inbox__badge" data-inbox-badge${e?"":" hidden"}>${e?l(t):""}</span>
              </span>
              <span class="header-inbox__label">กล่องข้อความ</span>
            </button>
            <div class="header-inbox__panel" id="inbox-panel" hidden role="region" aria-label="กล่องข้อความ">
              <p class="header-inbox__heading">กล่องข้อความ</p>
              ${Oc()}
            </div>
          </div>`}function Mt(){const e=document.querySelector("[data-inbox]");if(!e)return;const t=e.querySelector("[data-inbox-toggle]"),n=e.querySelector(".header-inbox__panel");n&&(n.hidden=!0),t&&t.setAttribute("aria-expanded","false")}function Fc(){const e=document.querySelector("[data-account-toggle]"),t=document.querySelector(".account-menu__list");t&&(t.hidden=!0),e&&e.setAttribute("aria-expanded","false")}function Yn(){const e=document.querySelector(".site-header");if(!e)return;const t=Math.round(e.getBoundingClientRect().height);t>0&&document.documentElement.style.setProperty("--header-h",`${t}px`)}function Hc(){const e=document.querySelector("[data-inbox]");if(!e)return;const t=e.querySelector("[data-inbox-toggle]"),n=e.querySelector(".header-inbox__panel"),a=e.querySelector("[data-inbox-badge]");!t||!n||(t.addEventListener("click",r=>{r.stopPropagation(),Fc();const o=n.hidden;if(n.hidden=!o,t.setAttribute("aria-expanded",String(o)),o){if(es(),a){const s=Tt();a.hidden=s===0,a.textContent=s?s>99?"99+":String(s):""}n.querySelectorAll(".inbox-item:not([data-inbox-report])").forEach(s=>s.classList.add("is-read"))}}),n.addEventListener("click",r=>{const o=r.target.closest("[data-inbox-item]");if(o&&(Qo(o.dataset.inboxItem),o.classList.add("is-read"),a)){const s=Tt();a.hidden=s===0,a.textContent=s?s>99?"99+":String(s):""}}),document.addEventListener("click",r=>{r.target.closest("[data-inbox]")||Mt()},{once:!0}),document.addEventListener("keydown",r=>{r.key==="Escape"&&Mt()},{once:!0}))}function jc(){const e=document.querySelector("[data-account-toggle]"),t=document.querySelector(".account-menu__list");e&&t&&(e.addEventListener("click",a=>{a.stopPropagation(),Mt();const r=t.hidden;t.hidden=!r,e.setAttribute("aria-expanded",String(r))}),document.addEventListener("click",a=>{a.target.closest(".account-menu")||(t.hidden=!0,e.setAttribute("aria-expanded","false"))},{once:!0}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(t.hidden=!0,e.setAttribute("aria-expanded","false"))},{once:!0}));const n=document.querySelector("[data-logout]");n&&n.addEventListener("click",()=>{Zr(),h("/")})}function Kc(){document.querySelectorAll("[data-follow]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.follow;if(!y()){gi(I());return}const n=Qr(t);if(!n.ok)return;const a=n.following;e.classList.toggle("is-following",a),e.setAttribute("aria-pressed",String(a));const r=e.querySelector("[data-follow-label]");r&&(r.textContent=a?"อยู่ในชั้นหนังสือแล้ว":"เพิ่มเข้าชั้น");const o=e.querySelector(".follow-btn__icon");o&&(o.outerHTML=a?Ga:Wa)})})}function _r(){const e=document.querySelector("[data-google-placeholder]");e&&e.addEventListener("click",()=>{const o=document.querySelector("[data-google-message]");o&&(o.hidden=!1)});const t=document.querySelector("[data-signup-form]");t&&t.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await Yr({displayName:c.get("displayName"),email:c.get("email"),password:c.get("password"),confirm:c.get("confirm"),acceptTerms:c.get("acceptTerms")==="on"});if(!i.ok){A(s,i.errors);return}cs(),h(ze())});const n=document.querySelector("[data-login-form]");n&&n.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await Jr({email:c.get("email"),password:c.get("password")});if(!i.ok){A(s,i.errors);return}h(ze())});const a=document.querySelector("[data-forgot-form]");a&&a.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await ro({email:c.get("email")});if(!i.ok){A(s,i.errors);return}or(s);const d=document.querySelector("[data-forgot-confirm]");if(!d)return;const u=i.resetPath?`<p class="forgot-mock-link">สำหรับต้นแบบนี้ ไม่มีการส่งอีเมลจริง ให้เปิด <a href="${i.resetPath}" data-link>ลิงก์ตั้งรหัสผ่านใหม่</a> เพื่อจำลองขั้นตอนจากอีเมล</p>`:'<p class="forgot-mock-link">สำหรับต้นแบบนี้ ไม่มีการส่งอีเมลจริง หากอีเมลนี้มีในระบบ ลิงก์จะปรากฏที่นี่</p>';d.hidden=!1,d.innerHTML=`
        <p class="form-success">หากอีเมลนี้มีอยู่ในระบบ ระบบจะส่งลิงก์ตั้งรหัสผ่านใหม่ให้ (ต้นแบบ: ไม่มีการส่งอีเมลจริง)</p>
        ${u}
      `});const r=document.querySelector("[data-reset-form]");r&&r.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await so({token:c.get("token"),password:c.get("password"),confirm:c.get("confirm")});if(!i.ok){A(s,i.errors);return}h("/login?reset=1")})}function Ar(e){if(ts())return!1;if(e.name==="novel"){const t=v(e.id);return!!(t&&je(t))}if(e.name==="reader"){const t=v(e.novelId);return!!(t&&je(t))}return!1}function Vc({onConfirm:e,onCancel:t}){const n=document.querySelector(".modal-backdrop");n&&n.remove();const a=document.createElement("div");a.className="modal-backdrop",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-labelledby","age-gate-title"),a.innerHTML=`
    <div class="modal">
      <span class="badge-18">18+</span>
      <h2 id="age-gate-title">เนื้อหาสำหรับผู้มีอายุ 18 ปีขึ้นไป</h2>
      <p>หมวดนิยายอีโรติกและเรื่องที่ติดป้าย 18+ ต้องยืนยันอายุก่อนเข้าอ่าน คุณมีอายุ 18 ปีขึ้นไปหรือไม่?</p>
      <div class="modal__actions">
        <button class="btn btn-primary" type="button" data-age-yes>ฉันมีอายุ 18 ปีขึ้นไป</button>
        <button class="btn btn-ghost" type="button" data-age-no>ออก</button>
      </div>
    </div>
  `,document.body.appendChild(a),a.querySelector("[data-age-yes]").focus(),a.querySelector("[data-age-yes]").addEventListener("click",()=>{ns(),a.remove(),e()}),a.querySelector("[data-age-no]").addEventListener("click",()=>{a.remove(),t()})}function Yc(e,{onNavigate:t}){e.addEventListener("click",n=>{const a=n.target.closest("a[data-link]");if(!a||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;if(a.getAttribute("aria-disabled")==="true"){n.preventDefault();return}const r=new URL(a.href,window.location.origin);r.origin===window.location.origin&&(n.preventDefault(),t(`${r.pathname}${r.search}`,a))})}function Jc(){const e=rt();L(),M({force:e}),qa({force:e}),co()}const Zc=document.getElementById("app");let Re=null;function Wc(e){return e.name==="home"?ti():e.name==="novel"?ai(e.id):e.name==="reader"?ri(e.novelId,e.chapterId):e.name==="login"?oi():e.name==="signup"?si():e.name==="bookshelf"?ii():e.name==="profile"?li():e.name==="purchases"?mi():e.name==="terms"?fi():e.name==="privacy"?hi():e.name==="forgot"?bi():e.name==="reset"?yi():e.name==="admin"?vi():e.name==="coins"?rc():e.name==="events"?yc():e.name==="follow"?vc():e.name==="search"?ei():e.name==="report"?tc(e.id):gn()}function At(e){Jc(),Zc.innerHTML=Wc(e),Pc(e)}function Xe(e,{replace:t=!1}={}){const n=new URL(e,window.location.origin),a=Oe(n.pathname),r=Xn(n.searchParams.get("next"));if((a.name==="bookshelf"||a.name==="coins"||a.name==="profile"||a.name==="purchases"||a.name==="report")&&!y()){h(`/login?next=${encodeURIComponent(n.pathname+n.search)}`,{replace:!0});return}if((a.name==="login"||a.name==="signup")&&y()){h(r,{replace:!0});return}if(Ar(a)){Re=`${n.pathname}${n.search}`,Vc({onConfirm(){const o=Re||`${n.pathname}${n.search}`;Re=null,I()!==o&&(t?history.replaceState({},"",o):history.pushState({},"",o));const s=new URL(o,window.location.origin);At(Oe(s.pathname))},onCancel(){Re=null;const o=Oe();(o.name==="novel"||o.name==="reader")&&h("/",{replace:!0})}}),window.location.pathname===n.pathname&&(a.name==="novel"||a.name==="reader")&&At({name:"home"});return}At(a)}Yc(document,{onNavigate(e,t){const n=new URL(e,window.location.origin),a=t?.dataset.novelId,r=a?v(a):null,o=Oe(n.pathname);if(!!(r&&je(r)&&Ar(o))){Xe(e);return}I()!==e&&history.pushState({},"",e),Xe(e)}});window.addEventListener("popstate",()=>{Xe(I(),{replace:!0})});S("light");jr().then(()=>{Xe(I(),{replace:!0})});
