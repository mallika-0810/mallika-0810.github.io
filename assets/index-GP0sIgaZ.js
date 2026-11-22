(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Re(e=window.location.pathname){const t=e.replace(/\/+$/,"")||"/";if(t==="/")return{name:"home"};const n={"/login":"login","/signup":"signup","/bookshelf":"bookshelf","/terms":"terms","/privacy":"privacy","/forgot-password":"forgot","/reset-password":"reset","/admin":"admin","/coins":"coins","/search":"search","/profile":"profile","/purchases":"purchases","/events":"events","/follow":"follow","/report":"report"};if(n[t])return{name:n[t]};let a=t.match(/^\/novel\/([^/]+)$/);return a?{name:"novel",id:decodeURIComponent(a[1])}:(a=t.match(/^\/report\/([^/]+)$/),a?{name:"report",id:decodeURIComponent(a[1])}:(a=t.match(/^\/read\/([^/]+)\/([^/]+)$/),a?{name:"reader",novelId:decodeURIComponent(a[1]),chapterId:decodeURIComponent(a[2])}:{name:"notfound"}))}function w(e){if(e.name==="home")return"/";if(e.name==="login")return e.next?`/login?next=${encodeURIComponent(e.next)}`:"/login";if(e.name==="signup")return e.next?`/signup?next=${encodeURIComponent(e.next)}`:"/signup";if(e.name==="bookshelf")return"/bookshelf";if(e.name==="terms")return"/terms";if(e.name==="privacy")return"/privacy";if(e.name==="forgot")return"/forgot-password";if(e.name==="reset")return e.token?`/reset-password?token=${encodeURIComponent(e.token)}`:"/reset-password";if(e.name==="admin")return"/admin";if(e.name==="coins")return"/coins";if(e.name==="events")return"/events";if(e.name==="follow")return"/follow";if(e.name==="report")return e.id?`/report/${e.id}`:"/report";if(e.name==="profile")return"/profile";if(e.name==="purchases")return"/purchases";if(e.name==="search"){const t=e.q==null?"":String(e.q).trim();return t?`/search?q=${encodeURIComponent(t)}`:"/search"}return e.name==="novel"?`/novel/${e.id}`:e.name==="reader"?`/read/${e.novelId}/${e.chapterId}`:"/"}function T(){return`${window.location.pathname}${window.location.search}`}function g(e,{replace:t=!1}={}){const n=typeof e=="string"?e:w(e);t?history.replaceState({},"",n):history.pushState({},"",n),window.dispatchEvent(new PopStateEvent("popstate"))}const je=[{id:"teen-romance",name:"นิยายรักวัยว้าวุ่น"},{id:"romance",name:"นิยายรัก"},{id:"romantic",name:"นิยายโรมานซ์"},{id:"erotic",name:"นิยายอีโรติก",isAdult:!0}],k={name:"บ้านนิยายของ J.Jusmin และ Mali_810",shortName:"บ้านนิยาย",headerName:"บ้านนิยาย J.Jusmin",penNames:["J.Jusmin","Mali_810"]},ta=[{id:"school-bell-floor-four",title:"เสียงระฆังที่ชั้นสี่",author:"J.Jusmin",tags:["teen-romance","romance"],secondaryTags:["แอบรัก","วิศวะ","รักในรั้วมหาลัย"],teaser:"ทุกครั้งที่ระฆังดัง เธอจะยืนรออยู่ที่บันไดชั้นสี่ — แต่ปีนี้เขาเดินผ่านไปโดยไม่เหลียวหลัง",synopsis:`นับตั้งแต่มัธยมต้น บันไดหนีไฟชั้นสี่คือพื้นที่ลับของเนยกับนนท์
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

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`}]}],Kr=["มาเฟีย","วิศวะ","แอบรัก","พระเอกคลั่งรัก","คู่กัด","หวานน่ารัก","ดราม่า","คอมเมดี้","รักในรั้วมหาลัย","ระบบ","ย้อนเวลา","แฟนตาซี","CEO","บอสตัวร้าย","แพทย์","เพื่อนสนิท","ฮีลใจ","ชีวิตในวัยเรียน"];function Jt(e){return je.find(t=>t.id===e)}function be(e,t){return e?.chapters.find(n=>n.id===t)}const na="banNiyai_penNames",aa="banNiyai_categories",Zt="banNiyai_categoryOrder",ra=["J.Jusmin","Mali_810","เสี่ยวโม่ลี่","มะลิขี้เมา"];function Wt(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Ke(e,t){localStorage.setItem(e,JSON.stringify(t))}function nt(e,t){return String(e||"").replace(/\s+/g," ").trim().slice(0,t)}function oa(e,t){return String(e).toLowerCase()===String(t).toLowerCase()}function sa(){const e=new Set(ra.map(n=>n.toLowerCase())),t=[];for(const n of Wt(na,[])){const a=nt(n,40);!a||e.has(a.toLowerCase())||(e.add(a.toLowerCase()),t.push(a))}return t}function Ve(){return[...ra,...sa()]}function ia(e){const t=String(e||"").trim();return!!t&&Ve().some(n=>n===t)}function Vr(e){const t=nt(e,40);return t?t.length<2?{ok:!1,error:"นามปากกาต้องมีอย่างน้อย 2 ตัวอักษร"}:Ve().some(n=>oa(n,t))?{ok:!1,error:"นามปากกานี้มีอยู่แล้ว"}:(Ke(na,[...sa(),t]),{ok:!0,name:t,names:Ve()}):{ok:!1,error:"กรุณากรอกนามปากกา"}}function ca(){const e=new Set(je.map(a=>a.id)),t=new Set(je.map(a=>a.name.toLowerCase())),n=[];for(const a of Wt(aa,[])){const r=nt(a?.name,30),o=String(a?.id||"").trim();!r||!o||e.has(o)||t.has(r.toLowerCase())||(e.add(o),t.add(r.toLowerCase()),n.push({id:o,name:r}))}return n}function Yr(){return[...je,...ca()]}function x(){const e=Yr(),t=new Map(e.map(r=>[r.id,r])),n=new Set,a=[];for(const r of Wt(Zt,[])){const o=t.get(String(r||""));!o||n.has(o.id)||(a.push(o),n.add(o.id))}for(const r of e)n.has(r.id)||a.push(r);return a}function Jr(e,t){const n=x().map(o=>o.id),a=n.indexOf(String(e||"")),r=a+Number(t);return a<0||r<0||r>=n.length?{ok:!1,categories:x()}:([n[a],n[r]]=[n[r],n[a]],Ke(Zt,n),{ok:!0,categories:x()})}function Zr(e){return x().find(t=>t.id===e)||null}function Wr(e){const t=e.normalize("NFKD").replace(/[^\w-]+/g,"-").replace(/^-+|-+$/g,"").toLowerCase().slice(0,24)||"cat",n=new Set(x().map(o=>o.id));let a=`custom-${t}`;if(!n.has(a))return a;let r=2;for(;n.has(`${a}-${r}`);)r+=1;return`${a}-${r}`}function Gr(e){const t=nt(e,30);if(!t)return{ok:!1,error:"กรุณากรอกชื่อหมวด"};if(x().some(a=>oa(a.name,t)))return{ok:!1,error:"หมวดนี้มีอยู่แล้ว"};const n={id:Wr(t),name:t};return Ke(aa,[...ca(),n]),Ke(Zt,[...x().map(a=>a.id),n.id].filter((a,r,o)=>o.indexOf(a)===r)),{ok:!0,category:n,categories:x()}}const at="banNiyai_novelMeta",qt="banNiyai_tagSuggestions",we="banNiyai_chapters",Ae="banNiyai_customNovels",la="banNiyai_deletedNovels",xn="banNiyai_unlocks",In="banNiyai_walletTx",Tn="banNiyai_donations",Dn="banNiyai_progress";function O(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function I(e,t){localStorage.setItem(e,JSON.stringify(t))}function Ne(e){return String(e||"").trim().replace(/\s+/g," ")}function $e(){const e=O(qt,null),t=Array.isArray(e)&&e.length?e:[...Kr],n=new Set;return t.map(Ne).filter(a=>{if(!a)return!1;const r=a.toLowerCase();return n.has(r)?!1:(n.add(r),!0)})}function Gt(e){const t=Ne(e);if(!t)return $e();const n=$e();return n.some(a=>a.toLowerCase()===t.toLowerCase())||n.push(t),I(qt,n),$e()}function rt(){return O(at,{})}function zr(e){return Array.isArray(e)?{replace:!1,items:e}:e&&typeof e=="object"&&Array.isArray(e.items)?{replace:!!e.replace,items:e.items}:{replace:!1,items:[]}}function Xr(e,t){const{replace:n,items:a}=zr(t);if(n)return(a||[]).filter(i=>i&&i.id!=null&&i.id!=="").map(i=>({...i,id:String(i.id)}));const r=Array.isArray(e)?e:[],o=new Map(r.map(i=>[String(i.id),{...i}]));for(const i of a){if(!i||i.id==null||i.id==="")continue;const d=String(i.id);o.set(d,o.has(d)?{...o.get(d),...i,id:d}:{...i,id:d})}const s=new Set,c=[];for(const i of r){const d=String(i.id);c.push(o.get(d)),s.add(d)}for(const i of a){if(!i||i.id==null||i.id==="")continue;const d=String(i.id);s.has(d)||(c.push(o.get(d)),s.add(d))}return c}function qn(e,t,n){const a=t[e.id]||{};return{...e,title:a.title!=null?a.title:e.title,author:a.author!=null?a.author:e.author,teaser:a.teaser!=null?a.teaser:e.teaser,mebUrl:a.mebUrl!=null?a.mebUrl:e.mebUrl||"",cover:a.cover!=null?a.cover:e.cover,tags:Array.isArray(a.tags)?a.tags:e.tags,secondaryTags:Array.isArray(a.secondaryTags)?a.secondaryTags:e.secondaryTags||[],chapters:Xr(e.chapters,n[e.id])}}function Ee(){const e=O(Ae,[]);return Array.isArray(e)?e:[]}function da(){const e=O(la,[]);return Array.isArray(e)?e.map(String):[]}function ye(){const e=rt(),t=O(we,{}),n=new Set(da()),a=ta.map(o=>qn(o,e,t)),r=Ee().map(o=>qn(o,e,t));return[...a,...r].filter(o=>!n.has(String(o.id)))}function v(e){return ye().find(t=>t.id===e)}function Qr(e){return ye().filter(t=>t.tags.includes(e))}function Ye(e){return!!e?.tags?.some(t=>Jt(t)?.isAdult)}function eo(e,{tags:t,secondaryTags:n}){if(!v(e))return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const r=[...new Set((t||[]).filter(u=>x().some(p=>p.id===u)))];if(!r.length)return{ok:!1,error:"กรุณาเลือกหมวดหลักอย่างน้อย 1 หมวด"};const o=new Set,s=[];for(const u of n||[]){const p=Ne(u);if(!p||x().some(f=>f.name===p))continue;const m=p.toLowerCase();o.has(m)||(o.add(m),s.push(p))}const c=rt();c[e]={...c[e]||{},tags:r,secondaryTags:s},I(at,c);const i=Ee(),d=i.findIndex(u=>u.id===e);return d>=0&&(i[d]={...i[d],tags:r,secondaryTags:s},I(Ae,i)),s.forEach(u=>Gt(u)),{ok:!0,novel:v(e)}}function to(e){const t=new Set,n=[];for(const a of e||[]){const r=Ne(a);if(!r||x().some(s=>s.name===r))continue;const o=r.toLowerCase();t.has(o)||(t.add(o),n.push(r))}return n}function ua(e){const t=String(e??"").trim();if(!t)return{ok:!0,url:""};try{const n=new URL(t);if(n.protocol==="https:"||n.protocol==="http:")return{ok:!0,url:n.href}}catch{}return{ok:!1,url:""}}function no(e={}){const t=String(e.title||"").trim(),n=String(e.author||"").trim(),a={},r=ua(e.mebUrl);r.ok||(a.mebUrl="กรุณาวางลิงก์ที่ขึ้นต้นด้วย https://"),t||(a.title="กรุณากรอกชื่อเรื่อง"),ia(n)||(a.author="กรุณาเลือกนามปากกา");const o=[...new Set((e.tags||[]).filter(p=>x().some(m=>m.id===p)))];if(Object.keys(a).length)return{ok:!1,errors:a};const s=to(e.secondaryTags),c=String(e.coverImage||"").trim(),i=String(e.teaser||"").trim(),d=`n-${Date.now().toString(36)}`,u={id:d,title:t,author:n,tags:o,secondaryTags:s,teaser:i,mebUrl:r.url,synopsis:"",cover:c?{image:c,from:"#F7B3BE",to:"#8A5A9A",motif:""}:{from:"#F7B3BE",to:"#8A5A9A",motif:t},chapters:[],createdAt:new Date().toISOString()};return I(Ae,[...Ee(),u]),s.forEach(p=>Gt(p)),{ok:!0,novel:v(d)}}function Ln(e,t,n){return e?{image:e,from:t?.from||"#F7B3BE",to:t?.to||"#8A5A9A",motif:""}:t||{from:"#F7B3BE",to:"#8A5A9A",motif:n||""}}function ao(e,t={}){const n=v(e);if(!n)return{ok:!1,errors:{title:"ไม่พบนิยายเรื่องนี้"}};const a=String(t.title||"").trim(),r=String(t.author||"").trim(),o=String(t.teaser??n.teaser??"").trim(),s={},c=Object.prototype.hasOwnProperty.call(t,"mebUrl")?ua(t.mebUrl):{ok:!0,url:n.mebUrl||""};if(c.ok||(s.mebUrl="กรุณาวางลิงก์ที่ขึ้นต้นด้วย https://"),a||(s.title="กรุณากรอกชื่อเรื่อง"),!ia(r)&&r!==(n.author||"").trim()&&(s.author="กรุณาเลือกนามปากกา"),Object.keys(s).length)return{ok:!1,errors:s};let i=n.cover||Ln("",null,a);if(Object.prototype.hasOwnProperty.call(t,"coverImage")){const f=String(t.coverImage||"").trim();f&&(i=Ln(f,i,a))}const d={title:a,author:r,teaser:o,mebUrl:c.url,cover:i},u=rt();u[e]={...u[e]||{},...d},I(at,u);const p=Ee(),m=p.findIndex(f=>f.id===e);return m>=0&&(p[m]={...p[m],...d},I(Ae,p)),{ok:!0,novel:v(e)}}function ro(e){if(!v(e))return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};if(I(Ae,Ee().filter(r=>r.id!==e)),ta.some(r=>r.id===e)){const r=da();r.includes(e)||I(la,[...r,e])}const n=rt();delete n[e],I(at,n);const a=O(we,{});return delete a[e],I(we,a),{ok:!0}}function xe(e){if(!e)return null;const t=String(e).trim();if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const a=new Date(`${t}T00:00:00+07:00`);return Number.isNaN(a.getTime())?null:a}const n=new Date(t);return Number.isNaN(n.getTime())?null:n}function ve(e,t=new Date){const n=xe(e?.publishedAt);return!!(n&&n.getTime()<=t.getTime())}function zt(e,t=new Date){return(e?.chapters||[]).filter(n=>ve(n,t))}function oo(e){let t=0;for(const n of e||[]){const a=Number(n.id);Number.isInteger(a)&&a>t&&(t=a)}return String(t+1)}function ot(e,t){const n=O(we,{});n[e]={replace:!0,items:t},I(we,n)}function so(e,t){const n=O(xn,{});let a=!1;for(const u of Object.keys(n||{})){const p=n[u];if(!p||typeof p!="object")continue;const m={...p},f=[];for(const y of Object.keys(p)){const _=p[y];if(!_||!(_.novelId===e||y.startsWith(`${e}:`)))continue;const Ce=_.chapterId!=null?String(_.chapterId):y.slice(e.length+1),G=t[Ce];!G||G===Ce||(delete m[y],f.push({key:`${e}:${G}`,rec:{..._,novelId:e,chapterId:G}}),a=!0)}for(const y of f)m[y.key]=y.rec;n[u]=m}a&&I(xn,n);const r=O(In,{});let o=!1;for(const u of Object.values(r||{}))if(Array.isArray(u))for(const p of u){if(!p||p.novelId!==e||p.chapterId==null)continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,o=!0)}o&&I(In,r);const s=O(Tn,{});let c=!1;for(const u of Object.values(s||{}))if(Array.isArray(u))for(const p of u){if(!p||p.novelId!==e||p.chapterId==null||p.chapterId==="")continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,c=!0)}c&&I(Tn,s);const i=O(Dn,{});let d=!1;for(const u of Object.values(i||{})){if(!u||typeof u!="object")continue;const p=u[e];if(!p||p.chapterId==null)continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,d=!0)}d&&I(Dn,i)}function pa(e,t,n){const a=v(e),r=a?.chapters?.find(s=>String(s.id)===String(t));if(!a||!r)return{ok:!1,errors:{id:"ไม่พบตอนที่ต้องการแก้ไข"}};const o=(a.chapters||[]).map(s=>String(s.id)===String(t)?{...s,...n,id:String(t),updatedAt:new Date().toISOString()}:{...s});return ot(e,o),{ok:!0,chapter:v(e).chapters.find(s=>String(s.id)===String(t)),novel:v(e)}}function io(e,t={}){const n=v(e);if(!n)return{ok:!1,errors:{novelId:"ไม่พบนิยายเรื่องนี้"}};const a=String(t.title||"").trim(),r=String(t.content||"").trim(),o={};if(a||(o.title="กรุณากรอกชื่อตอน"),r||(o.content="กรุณากรอกเนื้อหาตอน"),Object.keys(o).length)return{ok:!1,errors:o};const s=(n.chapters||[]).map(d=>({...d})),c=oo(s),i=new Date().toISOString();return s.push({id:c,title:a,content:r,price:0,free:!0,publishedAt:"",createdAt:i,updatedAt:i}),ot(e,s),{ok:!0,chapter:v(e).chapters.find(d=>String(d.id)===c),novel:v(e)}}function co(e,t){const n=v(e);if(!n)return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const a=(n.chapters||[]).filter(r=>String(r.id)!==String(t));return a.length===(n.chapters||[]).length?{ok:!1,error:"ไม่พบตอนนี้"}:(ot(e,a),{ok:!0,novel:v(e)})}function lo(e,t){const n=v(e);if(!n)return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const a=new Map((n.chapters||[]).map(c=>[String(c.id),{...c}])),r=(t||[]).map(c=>String(c));if(r.length!==a.size||r.some(c=>!a.has(c)))return{ok:!1,error:"ลำดับตอนไม่ถูกต้อง"};const o={},s=r.map((c,i)=>{const d=String(i+1);return o[c]=d,{...a.get(c),id:d}});return ot(e,s),so(e,o),{ok:!0,novel:v(e)}}function uo(e,t,n){const a=n===""||n==null?0:Number(n);return!Number.isFinite(a)||a<0||!Number.isInteger(a)?{ok:!1,errors:{price:"กรุณากรอกราคาเป็นจำนวนเต็มไม่ติดลบ (0 = ฟรี)"}}:pa(e,t,{price:a,free:a===0})}function po(e,t,n={}){const a=n.publishMode==="schedule"?"schedule":"now";let r="";if(a==="now")r=new Date().toISOString();else{const o=xe(n.publishedAt);if(!o)return{ok:!1,errors:{publishedAt:"กรุณาเลือกวันและเวลาที่จะเผยแพร่"}};r=o.toISOString()}return pa(e,t,{publishedAt:r})}const he="banNiyai_users",Ie="banNiyai_session",st="banNiyai_follows",Xt="banNiyai_progress",Se="banNiyai_resetTokens";function V(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function H(e,t){localStorage.setItem(e,JSON.stringify(t))}function ce(e){return String(e||"").trim().toLowerCase()}async function it(e,t){const n=new TextEncoder().encode(`${ce(e)}:${t}:banNiyai-prototype`),a=await crypto.subtle.digest("SHA-256",n);return[...new Uint8Array(a)].map(r=>r.toString(16).padStart(2,"0")).join("")}function re(){return V(he,[])}function Te(e){return e?{id:e.id,displayName:e.displayName,email:e.email,avatar:e.avatar||"",isAuthor:!!e.isAuthor}:null}function b(){const e=V(Ie,null);if(!e?.userId)return null;const t=re().find(n=>n.id===e.userId);return Te(t)}function mo(e){return e?Te(re().find(t=>t.id===e)):null}function ct(e=b()){return!!e?.isAuthor}const Q={email:"author@banniyai.demo",password:"author1234",displayName:"J.Jusmin"};async function fo(){const e=re(),t=Q.email,n=e.find(r=>r.email===t),a=await it(t,Q.password);if(n){(!n.isAuthor||n.passwordHash!==a)&&(n.isAuthor=!0,n.passwordHash=a,n.displayName=n.displayName||Q.displayName,H(he,e));return}e.push({id:"demo-author",displayName:Q.displayName,email:t,passwordHash:a,isAuthor:!0,acceptedTermsAt:new Date().toISOString(),createdAt:new Date().toISOString()}),H(he,e)}function ma(e,t="/"){if(!e)return t;const n=String(e);return!n.startsWith("/")||n.startsWith("//")||n.includes("://")?t:n}function ho({displayName:e,email:t,password:n,confirm:a,acceptTerms:r}){const o={},s=String(e||"").trim(),c=ce(t);return s?s.length<2&&(o.displayName="ชื่อที่แสดงต้องมีอย่างน้อย 2 ตัวอักษร"):o.displayName="กรุณากรอกชื่อที่แสดง",c?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)||(o.email="กรุณากรอกอีเมลให้ถูกต้อง"):o.email="กรุณากรอกอีเมล",n?String(n).length<8&&(o.password="รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"):o.password="กรุณากรอกรหัสผ่าน",a?n!==a&&(o.confirm="รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน"):o.confirm="กรุณายืนยันรหัสผ่าน",r||(o.acceptTerms="กรุณายอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว"),{ok:Object.keys(o).length===0,errors:o}}function go({email:e,password:t}){const n={};return ce(e)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ce(e))||(n.email="กรุณากรอกอีเมลให้ถูกต้อง"):n.email="กรุณากรอกอีเมล",t||(n.password="กรุณากรอกรหัสผ่าน"),{ok:Object.keys(n).length===0,errors:n}}function fa(e){H(Ie,{userId:e.id,startedAt:new Date().toISOString()})}async function bo({displayName:e,email:t,password:n,confirm:a,acceptTerms:r}){const o=ho({displayName:e,email:t,password:n,confirm:a,acceptTerms:r});if(!o.ok)return{ok:!1,errors:o.errors};const s=ce(t),c=re();if(c.some(d=>d.email===s))return{ok:!1,errors:{email:"อีเมลนี้ถูกใช้สมัครแล้ว"}};const i={id:crypto.randomUUID(),displayName:String(e).trim(),email:s,passwordHash:await it(s,n),acceptedTermsAt:new Date().toISOString(),createdAt:new Date().toISOString()};return c.push(i),H(he,c),fa(i),{ok:!0,user:Te(i)}}async function yo({email:e,password:t}){const n=go({email:e,password:t});if(!n.ok)return{ok:!1,errors:n.errors};const a=ce(e),r=re().find(s=>s.email===a),o=await it(a,t);return!r||r.passwordHash!==o?{ok:!1,errors:{form:"อีเมลหรือรหัสผ่านไม่ถูกต้อง"}}:(fa(r),{ok:!0,user:Te(r)})}function vo(){localStorage.removeItem(Ie)}function $o({displayName:e,avatar:t}={}){const n=V(Ie,null);if(!n?.userId)return{ok:!1,errors:{form:"กรุณาเข้าสู่ระบบก่อน"}};const a=re(),r=a.find(s=>s.id===n.userId);if(!r)return{ok:!1,errors:{form:"ไม่พบบัญชีผู้ใช้"}};const o={};if(e!==void 0){const s=String(e||"").trim();s?s.length<2?o.displayName="ชื่อที่แสดงต้องมีอย่างน้อย 2 ตัวอักษร":r.displayName=s:o.displayName="กรุณากรอกชื่อที่แสดง"}return Object.keys(o).length?{ok:!1,errors:o}:(t!==void 0&&(r.avatar=t||""),H(he,a),{ok:!0,user:Te(r)})}function Qt(e,t){const n=b();if(!n)return null;const a=V(e,{}),r=a[n.id]||ko(e),o=t(r);return a[n.id]=o,H(e,a),o}function ko(e){return e===st?[]:e===Xt?{}:null}function ha(){const e=b();return e?V(st,{})[e.id]||[]:[]}function ga(e){return ha().some(t=>t.novelId===e)}function wo(e){return b()?(Qt(st,n=>n.some(a=>a.novelId===e)?n:[...n,{novelId:e,followedAt:new Date().toISOString()}]),{ok:!0,following:!0}):{ok:!1,reason:"auth"}}function So(e){return b()?(Qt(st,n=>n.filter(a=>a.novelId!==e)),{ok:!0,following:!1}):{ok:!1,reason:"auth"}}function _o(e){return ga(e)?So(e):wo(e)}function Ao(e,t){return b()?(Qt(Xt,a=>({...a,[e]:{chapterId:t,updatedAt:new Date().toISOString()}})),{ok:!0}):{ok:!1,reason:"auth"}}function No(){const e=b();if(!e)return[];const t=ha(),n=V(Xt,{})[e.id]||{};return t.slice().sort((a,r)=>String(r.followedAt).localeCompare(String(a.followedAt))).map(a=>({novelId:a.novelId,followedAt:a.followedAt,progress:n[a.novelId]||null}))}function Eo(e){const t={},n=ce(e);return n?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||(t.email="กรุณากรอกอีเมลให้ถูกต้อง"):t.email="กรุณากรอกอีเมล",{ok:Object.keys(t).length===0,errors:t,email:n}}function xo({password:e,confirm:t}){const n={};return e?String(e).length<8&&(n.password="รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"):n.password="กรุณากรอกรหัสผ่านใหม่",t?e!==t&&(n.confirm="รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน"):n.confirm="กรุณายืนยันรหัสผ่านใหม่",{ok:Object.keys(n).length===0,errors:n}}async function Io({email:e}){const t=Eo(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=re().find(r=>r.email===t.email);let a=null;if(n){const r=crypto.randomUUID(),o=V(Se,{});o[r]={userId:n.id,email:n.email,createdAt:new Date().toISOString(),used:!1},H(Se,o),a=`/reset-password?token=${encodeURIComponent(r)}`}return{ok:!0,resetPath:a}}function To(e){if(!e)return null;const t=V(Se,{})[e];return!t||t.used?null:t}async function Do({token:e,password:t,confirm:n}){const a=xo({password:t,confirm:n});if(!a.ok)return{ok:!1,errors:a.errors};const r=V(Se,{}),o=r[e];if(!o||o.used)return{ok:!1,errors:{form:"ลิงก์ตั้งรหัสผ่านใหม่ไม่ถูกต้องหรือถูกใช้ไปแล้ว"}};const s=re(),c=s.findIndex(i=>i.id===o.userId);return c<0?{ok:!1,errors:{form:"ลิงก์ตั้งรหัสผ่านใหม่ไม่ถูกต้องหรือถูกใช้ไปแล้ว"}}:(s[c]={...s[c],passwordHash:await it(s[c].email,t)},H(he,s),r[e]={...o,used:!0,usedAt:new Date().toISOString()},H(Se,r),localStorage.removeItem(Ie),{ok:!0})}const Je="banNiyai_promos",ee="banNiyai_bonusSettings",ba="banNiyai_redeemCodes",qo="promo-open-house",en="4h4",ya="banNiyai_seedVersion";function lt(){try{return localStorage.getItem(ya)!==en}catch{return!0}}function Lo(){localStorage.setItem(ya,en)}function j(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Y(e,t){localStorage.setItem(e,JSON.stringify(t))}function tn(e){return Number(e.thb)||Math.max(0,Number(e.coins)-Number(e.bonus||0))}function Co(e=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(e)}function me(e){if(e===""||e==null||Number(e)<=0)return null;const t=Number(e);return Number.isFinite(t)?t:null}function va(e,t){return Math.ceil(e*(Number(t)||0)/100)}function $a(e){if(!e||!e.id)return null;const t=e.packageIds==="all"||e.allPackages?"all":Array.isArray(e.packageIds)?e.packageIds.filter(Boolean):[],n=e.bonusType==="fixed"?"fixed":"percent",a=Math.max(0,Number(e.bonusValue)||0);return{id:e.id,name:String(e.name||"").trim(),packageIds:t,bonusType:n,bonusValue:a,startAt:e.startAt,endAt:e.endAt,enabled:e.enabled!==!1,firstTopUpOnly:!!e.firstTopUpOnly,bonusExpiryDays:me(e.bonusExpiryDays),image:e.image?String(e.image):"",createdAt:e.createdAt,updatedAt:e.updatedAt}}function ka(){return[{id:qo,name:"โปรเปิดบ้านนิยาย",packageIds:"all",bonusType:"percent",bonusValue:20,startAt:"2026-11-01T00:00:00+07:00",endAt:"2026-12-31T23:59:00+07:00",enabled:!0,firstTopUpOnly:!0,bonusExpiryDays:null,createdAt:"2026-11-01T00:00:00+07:00",updatedAt:"2026-11-01T00:00:00+07:00"}]}function B(){const e=lt(),t=j(Je,null);return(e||!Array.isArray(t))&&Y(Je,ka()),Na(),La(),de()}function de(){const e=j(Je,null);return(Array.isArray(e)?e:ka()).map($a).filter(Boolean)}function wa(e){return Y(Je,e),de()}function dt(e){return de().find(t=>t.id===e)||null}function Bo(e){const t={};String(e.name||"").trim()||(t.name="กรุณากรอกชื่อโปรโมชัน");const a=Number(e.bonusValue);return(!Number.isFinite(a)||a<=0)&&(t.bonusValue="กรุณากรอกจำนวนโบนัสที่มากกว่า 0"),e.bonusType==="percent"&&a>100&&(t.bonusValue="โบนัสแบบเปอร์เซ็นต์ต้องไม่เกิน 100"),e.startAt||(t.startAt="กรุณาเลือกวันและเวลาเริ่มต้น"),e.endAt||(t.endAt="กรุณาเลือกวันและเวลาสิ้นสุด"),e.startAt&&e.endAt&&new Date(e.endAt)<=new Date(e.startAt)&&(t.endAt="วันสิ้นสุดต้องอยู่หลังวันเริ่มต้น"),e.packageIds!=="all"&&(!Array.isArray(e.packageIds)||!e.packageIds.length)&&(t.packageIds="กรุณาเลือกแพ็กเกจอย่างน้อย 1 แพ็ก หรือเลือกทั้งหมด"),{ok:Object.keys(t).length===0,errors:t}}function Sa(e){const t=Bo(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=de(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=$a({...e,id:r,name:String(e.name).trim(),createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return wa(c),{ok:!0,promo:s}}function Po(e){return wa(de().filter(t=>t.id!==e)),{ok:!0}}function Uo(e,t){const n=dt(e);return n?Sa({...n,enabled:!!t}):{ok:!1,error:"ไม่พบโปรโมชัน"}}function _a(e,t=new Date){if(!e?.enabled)return!1;const n=new Date(e.startAt),a=new Date(e.endAt);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?!1:t>=n&&t<=a}function Oo(e,t){return e.packageIds==="all"?!0:Array.isArray(e.packageIds)&&e.packageIds.includes(t)}function Me(e,t){if(!e||!t)return 0;const n=tn(t);return e.bonusType==="fixed"?Math.round(Number(e.bonusValue)||0):va(n,e.bonusValue)}function Aa(e=new Date){return B(),de().filter(t=>_a(t,e))}function Ro(e,{isFirstTopUp:t=!1,now:n=new Date}={}){const a=Aa(n).filter(r=>!Oo(r,e.id)||r.firstTopUpOnly&&!t?!1:Me(r,e)>0);return a.length?a.sort((r,o)=>Me(o,e)-Me(r,e))[0]:null}const _e="v1-off",L={signup:{enabled:!0,coins:30,bonusExpiryDays:null},checkin:{enabled:!0,keysPerDay:1,keysRequired:7,coins:7,bonusExpiryDays:null},firstTopUp:{enabled:!1,bonusType:"percent",bonusValue:0,bonusExpiryDays:null}};function Lt(e){const t=e&&typeof e=="object"?e:{},n=t.signup||{},a=t.checkin||{},r=t.firstTopUp||{},o={signup:{enabled:n.enabled!==!1,coins:Math.max(0,Math.round(Number(n.coins)||0))||L.signup.coins,bonusExpiryDays:me(n.bonusExpiryDays)},checkin:{enabled:a.enabled!==!1,keysPerDay:Math.max(1,Math.round(Number(a.keysPerDay)||0))||L.checkin.keysPerDay,keysRequired:Math.max(1,Math.round(Number(a.keysRequired??a.keysPerCoin)||0))||L.checkin.keysRequired,coins:Math.max(1,Math.round(Number(a.coins)||0))||L.checkin.coins,bonusExpiryDays:me(a.bonusExpiryDays)},firstTopUp:{enabled:r.enabled===!0,bonusType:"percent",bonusValue:Math.max(0,Math.round(Number(r.bonusValue)||0)),bonusExpiryDays:me(r.bonusExpiryDays)}};return o.checkin.keysPerCoin=o.checkin.keysRequired,o}function Mo(e){if(e&&e._firstTopUpDefault===_e)return e;const t=e&&typeof e=="object"?e.firstTopUp||{}:{},n=Number(t.bonusValue)===10||t.bonusValue==null||t.bonusValue==="",a={...e&&typeof e=="object"?e:{},...L,signup:e?.signup?{...L.signup,...e.signup}:L.signup,checkin:e?.checkin?{...L.checkin,...e.checkin}:L.checkin,firstTopUp:{enabled:!1,bonusType:"percent",bonusValue:n?0:Math.max(0,Math.round(Number(t.bonusValue)||0)),bonusExpiryDays:t.bonusExpiryDays??null},_firstTopUpDefault:_e};return Y(ee,a),a}function Na(){if(lt())return Y(ee,{...L,_firstTopUpDefault:_e,_seedVersion:en}),Lt(L);const e=j(ee,null);return Mo(e),Lt(j(ee,L))}function P(){return Na()}function Fo(e,t){const n={};if(e==="firstTopUp"){const a=Number(t.bonusValue);(!Number.isFinite(a)||a<0)&&(n.bonusValue="กรุณากรอกเปอร์เซ็นต์ที่ถูกต้อง"),a>100&&(n.bonusValue="โบนัสแบบเปอร์เซ็นต์ต้องไม่เกิน 100")}else if(e==="checkin"){const a=Number(t.keysPerDay),r=Number(t.keysRequired??t.keysPerCoin),o=Number(t.coins);(!Number.isFinite(a)||a<=0)&&(n.keysPerDay="กรุณากรอกจำนวนกุญแจต่อวันที่มากกว่า 0"),(!Number.isFinite(r)||r<=0)&&(n.keysRequired="กรุณากรอกจำนวนกุญแจที่ต้องครบก่อนแลกที่มากกว่า 0"),(!Number.isFinite(o)||o<=0)&&(n.coins="กรุณากรอกจำนวนเหรียญที่ได้เมื่อแลกที่มากกว่า 0")}else{const a=Number(t.coins);(!Number.isFinite(a)||a<=0)&&(n.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0")}return{ok:Object.keys(n).length===0,errors:n}}function Ho(e,t){if(!L[e])return{ok:!1,errors:{form:"ไม่พบโปรเบื้องต้นนี้"}};const n=Fo(e,t);if(!n.ok)return{ok:!1,errors:n.errors};const a=P(),r={...a,[e]:{...a[e],...t,enabled:t.enabled!==!1&&t.enabled!=="false"&&t.enabled!=="",bonusExpiryDays:me(t.bonusExpiryDays),...e==="checkin"?{keysRequired:Number(t.keysRequired??t.keysPerCoin)||a[e].keysRequired,coins:Number(t.coins)||a[e].coins}:{}}},o=j(ee,{});return Y(ee,{...o,...Lt(r),_firstTopUpDefault:_e}),{ok:!0,settings:P()}}function jo(e,t){const n=P();if(!n[e])return{ok:!1,error:"ไม่พบโปรเบื้องต้นนี้"};const a=j(ee,{});return Y(ee,{...a,...n,[e]:{...n[e],enabled:!!t},_firstTopUpDefault:_e}),{ok:!0,settings:P()}}function Ko(e,{isFirstTopUp:t=!1}={}){if(!t||!e)return 0;const n=P();return n.firstTopUp.enabled?va(tn(e),n.firstTopUp.bonusValue):0}function Ea(e,{isFirstTopUp:t=!1,now:n=new Date}={}){B();const a=tn(e),r=Number(e.bonus||0),o=P().firstTopUp,s=Ko(e,{isFirstTopUp:t}),c=Ro(e,{isFirstTopUp:t,now:n}),i=c?Me(c,e):0;return{pack:e,paid:a,packageBonus:r,firstTopUp:s>0?o:null,firstTopUpBonus:s,promo:c,promoBonus:i,totalBonus:r+s+i,total:a+r+s+i}}function ut(e){return String(e||"").trim().toUpperCase().replace(/\s+/g,"")}function xa(e){if(!e||!e.id)return null;const t=Array.isArray(e.usedBy)?e.usedBy.filter(Boolean):[];return{id:e.id,code:ut(e.code),coins:Math.max(0,Math.round(Number(e.coins)||0)),maxUses:Math.max(1,Math.round(Number(e.maxUses)||1)),usedBy:t,expiresAt:e.expiresAt||null,enabled:e.enabled!==!1,bonusExpiryDays:me(e.bonusExpiryDays),createdAt:e.createdAt,updatedAt:e.updatedAt}}function oe(){const e=j(ba,[]);return(Array.isArray(e)?e:[]).map(xa).filter(Boolean)}function nn(e){return Y(ba,e),oe()}function an(e){return oe().find(t=>t.id===e)||null}function Vo(e){const t=ut(e);return t&&oe().find(n=>n.code===t)||null}function Yo(e){const t={},n=ut(e.code);(!n||n.length<3)&&(t.code="กรุณากรอกรหัสอย่างน้อย 3 ตัวอักษร");const a=Number(e.coins);(!Number.isFinite(a)||a<=0)&&(t.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0");const r=Number(e.maxUses);return(!Number.isFinite(r)||r<1)&&(t.maxUses="จำนวนครั้งที่ใช้ได้ต้องอย่างน้อย 1"),oe().find(s=>s.code===n&&s.id!==e.id)&&(t.code="รหัสนี้ถูกใช้แล้ว กรุณาตั้งรหัสใหม่"),e.expiresAt&&Number.isNaN(new Date(e.expiresAt).getTime())&&(t.expiresAt="วันหมดอายุไม่ถูกต้อง"),{ok:Object.keys(t).length===0,errors:t}}function Ia(e){const t=Yo(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=oe(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=xa({...o,...e,id:r,code:ut(e.code),usedBy:o?.usedBy||[],createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return nn(c),{ok:!0,code:s}}function Jo(e){return nn(oe().filter(t=>t.id!==e)),{ok:!0}}function Zo(e,t){const n=an(e);return n?Ia({...n,enabled:!!t}):{ok:!1,error:"ไม่พบรหัส"}}function Wo(e,t,n=new Date){const a=Vo(e);if(!a||!a.enabled)return{ok:!1,reason:"invalid",error:"ไม่พบรหัสนี้ หรือรหัสไม่ถูกต้อง"};if(a.expiresAt){const r=new Date(a.expiresAt);if(!Number.isNaN(r.getTime())&&r<=n)return{ok:!1,reason:"expired",error:"รหัสนี้หมดอายุแล้ว",record:a}}return t&&a.usedBy.includes(t)?{ok:!1,reason:"already",error:"คุณใช้รหัสนี้ไปแล้ว",record:a}:a.usedBy.length>=a.maxUses?{ok:!1,reason:"used-up",error:"รหัสนี้ถูกใช้ครบจำนวนแล้ว",record:a}:{ok:!0,record:a}}function Go(e,t){const a=oe().map(r=>r.id===e?{...r,usedBy:[...r.usedBy,t],updatedAt:new Date().toISOString()}:r);return nn(a),an(e)}const Ze="banNiyai_keyPromos",zo="keypromo-happy-new-year",Ta=[{id:"rainbow",name:"สีรุ้ง"},{id:"gold",name:"ทอง"},{id:"rose",name:"ชมพู"}];function Da(){return[{id:zo,name:"Happy new year",keyName:"กุญแจสายรุ้ง",keyStyle:"rainbow",keysRequired:7,coins:20,startAt:"2026-12-27T00:00:00+07:00",endAt:"2027-01-02T23:59:00+07:00",enabled:!0,createdAt:"2026-11-01T00:00:00+07:00",updatedAt:"2026-11-01T00:00:00+07:00"}]}function Xo(e){return Ta.some(t=>t.id===e)?e:"rainbow"}function qa(e){return!e||!e.id?null:{id:e.id,name:String(e.name||"").trim(),keyName:String(e.keyName||"").trim()||"กุญแจพิเศษ",keyStyle:Xo(e.keyStyle),keyImage:e.keyImage?String(e.keyImage):"",keysRequired:Math.max(1,Math.round(Number(e.keysRequired)||0)||7),coins:Math.max(1,Math.round(Number(e.coins)||0)||1),startAt:e.startAt,endAt:e.endAt,enabled:e.enabled!==!1,createdAt:e.createdAt,updatedAt:e.updatedAt}}function La(){const e=j(Ze,null);return(lt()||!Array.isArray(e))&&Y(Ze,Da()),J()}function J(){const e=j(Ze,null);return(Array.isArray(e)?e:Da()).map(qa).filter(Boolean)}function Ca(e){return Y(Ze,e),J()}function pt(e){return J().find(t=>t.id===e)||null}function rn(e,t=new Date){if(!e?.enabled)return!1;const n=new Date(e.startAt),a=new Date(e.endAt);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?!1:t>=n&&t<=a}function Ba(e,t=new Date){if(!e)return!0;const n=new Date(e.endAt);return Number.isNaN(n.getTime())?!1:t>n}function on(e=new Date){return La(),J().filter(t=>rn(t,e))}function Pa(e=new Date){return on(e).slice().sort((n,a)=>new Date(n.startAt)-new Date(a.startAt))[0]||null}function Qo(e){const t={};String(e.name||"").trim()||(t.name="กรุณากรอกชื่อโปร"),String(e.keyName||"").trim()||(t.keyName="กรุณากรอกชื่อกุญแจพิเศษ");const n=Number(e.keysRequired);(!Number.isFinite(n)||n<=0)&&(t.keysRequired="กรุณากรอกจำนวนกุญแจที่มากกว่า 0");const a=Number(e.coins);return(!Number.isFinite(a)||a<=0)&&(t.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0"),e.startAt||(t.startAt="กรุณาเลือกวันและเวลาเริ่มต้น"),e.endAt||(t.endAt="กรุณาเลือกวันและเวลาสิ้นสุด"),e.startAt&&e.endAt&&new Date(e.endAt)<=new Date(e.startAt)&&(t.endAt="วันสิ้นสุดต้องอยู่หลังวันเริ่มต้น"),{ok:Object.keys(t).length===0,errors:t}}function Ua(e){const t=Qo(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=J(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=qa({...e,id:r,name:String(e.name).trim(),keyName:String(e.keyName).trim(),createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return Ca(c),{ok:!0,promo:s}}function es(e){return Ca(J().filter(t=>t.id!==e)),{ok:!0,id:e}}function ts(e,t){const n=pt(e);return n?Ua({...n,enabled:!!t}):{ok:!1,error:"ไม่พบโปรแจกกุญแจ"}}const We="banNiyai_events",Cn="promo-open-house",ns="event-promo-open-house",as="event-keypromo-happy-new-year",rs="keypromo-happy-new-year",os=`เติมเงินครั้งแรก รับเหรียญเพิ่ม 20%
ของยอดที่เติม ใช้ได้กับทุกแพ็กเติมเหรียญ
(ให้สิทธิ์เฉพาะนักอ่านที่เติมครั้งแรกเท่านั้น)`,ss=`เช็กอินกุญแจสีรุ้งครบ 7 ดอก แลกได้ 20 เหรียญ

หมายเหตุ: หากเช็กอินไม่ครบตามระยะเวลากิจกรรม กุญแจสีรุ้งจะหมดอายุทันที ไม่สามารถสะสมไว้รอบหน้าได้`,is="/gifts/coin.png",cs="/images/keys/key-rainbow.webp";function Oa(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Ra(e,t){localStorage.setItem(e,JSON.stringify(t))}function ls(e){if(!e||!e.id)return null;const t=String(e.title||"").trim();return t?{id:String(e.id),title:t,startAt:e.startAt||"",endAt:e.endAt||"",detail:String(e.detail||"").trim(),image:e.image?String(e.image):"",promoId:e.promoId?String(e.promoId):"",createdAt:e.createdAt,updatedAt:e.updatedAt}:null}function ds(){B();const e=dt(Cn),t=new Date().toISOString();return[{id:ns,title:"โปรเปิดบ้านนิยาย",startAt:e?.startAt||"2026-11-01T00:00:00+07:00",endAt:e?.endAt||"2026-12-31T23:59:00+07:00",detail:os,image:is,promoId:Cn,createdAt:e?.createdAt||t,updatedAt:t},{id:as,title:"Happy new year",startAt:"2026-12-27T00:00:00+07:00",endAt:"2027-01-02T23:59:00+07:00",detail:ss,image:cs,promoId:rs,createdAt:t,updatedAt:t}]}function M({force:e=!1}={}){const t=Oa(We,null);return(e||!Array.isArray(t))&&Ra(We,ds()),Z()}function Z(){const e=Oa(We,null);return(Array.isArray(e)?e:[]).map(ls).filter(Boolean)}function us(e){return Z().find(t=>t.id===e)||null}function Ct({promoId:e,title:t}={}){M();const n=Z();if(e){const a=n.find(r=>r.promoId===e);if(a)return a}if(t){const a=n.find(r=>r.title===t);if(a)return a}return null}function Bt(e){return e?`/events#event-${e.id}`:"/events"}function sn(e){return Ra(We,e),Z()}function ps(e){const t={},n=String(e.title||"").trim();n||(t.title="กรุณากรอกชื่อกิจกรรม");const a=e.startAt||"",r=e.endAt||"";if(a||(t.startAt="กรุณาเลือกวันเริ่มต้น"),r||(t.endAt="กรุณาเลือกวันสิ้นสุด"),a&&r&&new Date(a)>new Date(r)&&(t.endAt="วันสิ้นสุดต้องไม่ก่อนวันเริ่มต้น"),Object.keys(t).length)return{ok:!1,errors:t};M();const o=Z(),s=new Date().toISOString(),c=String(e.id||"").trim()||`event-${Date.now()}`,i=o.find(p=>p.id===c),d={id:c,title:n,startAt:a,endAt:r,detail:String(e.detail||"").trim(),image:String(e.image||"").trim(),promoId:i?.promoId||String(e.promoId||"").trim(),createdAt:i?.createdAt||s,updatedAt:s},u=i?o.map(p=>p.id===c?d:p):[...o,d];return sn(u),{ok:!0,event:d}}function Bn(e,t){const n=String(t||"").trim();if(!e||!n)return;M();const a=Z();if(!a.some(o=>o.promoId===e))return;const r=new Date().toISOString();sn(a.map(o=>o.promoId===e?{...o,image:n,updatedAt:r}:o))}function ms(e){return M(),sn(Z().filter(t=>t.id!==e)),{ok:!0}}const Ma="banNiyai_reports",Fa=1e3,Ha=[{id:"topup",name:"ปัญหาการเติมเหรียญ"},{id:"bonus",name:"ไม่ได้รับโบนัส"},{id:"unlock",name:"ปลดล็อกแล้วเข้าอ่านไม่ได้"},{id:"login",name:"เข้าสู่ระบบไม่ได้"},{id:"checkin",name:"เช็กอินหรือแลกเหรียญไม่ได้"},{id:"balance",name:"เหรียญหายหรือยอดไม่ตรง"},{id:"display",name:"หน้าเว็บแสดงผลผิดปกติ"},{id:"other",name:"อื่นๆ"}],Pn={author:"แอดมิน J.Jusmin",bot:"แอดมินบอท"};function mt(e){return Ha.find(t=>t.id===e)||null}function ft(){try{const e=localStorage.getItem(Ma),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function cn(e){localStorage.setItem(Ma,JSON.stringify(e))}function Un(e,t){const n=(e.messages||[]).filter(a=>!t||t.includes(a.role));return n.length?n[n.length-1]:null}function pe(e){const t=new Date(e||0).getTime();return Number.isNaN(t)?0:t}function ln(e){const t=Array.isArray(e.messages)?e.messages:[],n=t[t.length-1]||null,a=Un({messages:t},["reader"]),r=Un({messages:t},["author","bot"]);return{...e,messages:t,topicName:mt(e.topicId)?.name||"อื่นๆ",lastAt:n?n.createdAt:e.createdAt,last:n,authorUnread:!!(a&&pe(a.createdAt)>pe(e.authorSeenAt)),readerUnread:!!(r&&pe(r.createdAt)>pe(e.readerSeenAt))}}function ja(e,t){return e.role==="author"?Pn.author:e.role==="bot"?Pn.bot:t?.userName||"นักอ่าน"}function Ka(e){return String(e??"").replace(/\r\n/g,`
`).trim().slice(0,Fa)}function ht(){return ft().map(ln).sort((e,t)=>pe(t.lastAt)-pe(e.lastAt))}function Va(e){return ht().filter(t=>t.userId===e)}function dn(e){return ht().find(t=>t.id===e)||null}function fs({topicId:e,text:t}={}){const n=b();if(!n)return{ok:!1,error:"กรุณาเข้าสู่ระบบก่อน"};const a=mt(e);if(!a)return{ok:!1,error:"กรุณาเลือกหัวข้อ"};const r=Ka(t);if(!r)return{ok:!1,error:"กรุณาพิมพ์ข้อความ"};const o=new Date().toISOString(),s={id:`r-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,userId:n.id,userName:n.displayName,userEmail:n.email,topicId:a.id,createdAt:o,updatedAt:o,readerSeenAt:o,authorSeenAt:null,messages:[{id:`m-${Date.now().toString(36)}`,role:"reader",text:r,createdAt:o}]};return cn([...ft(),s]),{ok:!0,report:ln(s)}}function Ya(e,t,n){const a=Ka(n);if(!a)return{ok:!1,error:"กรุณาพิมพ์ข้อความ"};const r=ft(),o=r.findIndex(d=>d.id===e);if(o<0)return{ok:!1,error:"ไม่พบเรื่องที่แจ้ง"};const s=new Date().toISOString(),c={id:`m-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,role:t,text:a,createdAt:s},i={...r[o],updatedAt:s,messages:[...r[o].messages||[],c]};return t==="reader"?i.readerSeenAt=s:t==="author"&&(i.authorSeenAt=s),r[o]=i,cn(r),{ok:!0,message:c,report:ln(i)}}function hs(e,t){const n=b(),a=dn(e);return!n||!a||a.userId!==n.id?{ok:!1,error:"ไม่พบเรื่องที่แจ้ง"}:Ya(e,"reader",t)}function gs(e,t){return ct()?Ya(e,"author",t):{ok:!1,error:"เฉพาะนักเขียนเท่านั้น"}}function gt(e,t){const n=ft(),a=n.findIndex(s=>s.id===e);if(a<0)return;const r=t==="author"?"authorSeenAt":"readerSeenAt",o=new Date().toISOString();n[a]={...n[a],[r]:o},cn(n)}function Ja(){return ht().filter(e=>e.authorUnread)}const Za="banNiyai_notifications";function bs(e){const t=Number(new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric"}).format(e).slice(0,4));return String((t+543)%100).padStart(2,"0")}function On(e){if(!e?.startAt||!e?.endAt)return"";const t=new Date(e.startAt),n=new Date(e.endAt);if(Number.isNaN(t.getTime())||Number.isNaN(n.getTime()))return"";const a={timeZone:"Asia/Bangkok"},r=s=>new Intl.DateTimeFormat("th-TH",{day:"numeric",month:"short",...a}).format(s),o=s=>`${r(s)} ${bs(s)}`;return`${o(t)} ถึง ${o(n)}`}function un(){try{const e=localStorage.getItem(Za);if(!e)return{seeded:!1,items:[]};const t=JSON.parse(e);if(Array.isArray(t))return{seeded:t.length>0,items:t};const n=Array.isArray(t?.items)?t.items:[];return{seeded:!!t?.seeded,items:n}}catch{return{seeded:!1,items:[]}}}function pn(e){localStorage.setItem(Za,JSON.stringify(e))}function ys(){const e=[],t=v("school-bell-floor-four")||ye().find(a=>a.chapters?.length)||null,n=t?.chapters?.length?t.chapters[t.chapters.length-1]:null;t&&n&&e.push({id:`seed-chapter-${t.id}-${n.id}`,type:"chapter",kindLabel:"อัปเดตตอนใหม่",title:t.title,body:`ตอนที่ ${n.id} ${n.title}`,href:w({name:"reader",novelId:t.id,chapterId:n.id}),createdAt:n.publishedAt||new Date().toISOString(),readAt:null}),B(),M();for(const a of Aa()){const r=On(a),o=Ct({promoId:a.id,title:a.name});e.push({id:`seed-promo-${a.id}`,type:"activity",kindLabel:"กิจกรรม",title:a.name,body:r?`โปรเติมเหรียญ ${r}`:"โปรเติมเหรียญ",href:o?Bt(o):w({name:"coins"}),promoId:a.id,createdAt:a.startAt||new Date().toISOString(),readAt:null})}for(const a of on()){const r=On(a),o=Ct({promoId:a.id,title:a.name});e.push({id:`seed-keypromo-${a.id}`,type:"activity",kindLabel:"กิจกรรม",title:a.name,body:r?`โปรแจกกุญแจ ${r}`:"โปรแจกกุญแจ",href:o?Bt(o):w({name:"home"}),promoId:a.id,createdAt:a.startAt||new Date().toISOString(),readAt:null})}return e.sort((a,r)=>new Date(r.createdAt)-new Date(a.createdAt)),e}function Wa({force:e=!1}={}){const t=un();if(!e&&t.seeded&&Array.isArray(t.items))return t.items;const n=ys();return pn({seeded:!0,items:n}),n}function vs(e){if(e?.type!=="activity")return e?.href;const t=Ct({promoId:e.promoId,title:e.title});return t?Bt(t):e.href}function Et(e){const t=String(e?.text||"").replace(/\s+/g," ");return t.length>60?`${t.slice(0,60)}…`:t}function $s(){if(ct())return Ja().map(t=>{const n=[...t.messages].reverse().find(a=>a.role==="reader");return{id:`report-${t.id}`,type:"report",kindLabel:"แจ้งปัญหา",title:t.topicName,body:`${t.userName}: ${Et(n)}`,href:`/admin?tab=reports&report=${encodeURIComponent(t.id)}`,createdAt:n?.createdAt||t.createdAt,readAt:null}});const e=b();return e?Va(e.id).filter(t=>t.readerUnread).map(t=>{const n=[...t.messages].reverse().find(a=>a.role==="author"||a.role==="bot");return{id:`report-${t.id}`,type:"report",kindLabel:"แจ้งปัญหา",title:t.topicName,body:n?`${ja(n,t)}: ${Et(n)}`:Et(t.last),href:`/report/${encodeURIComponent(t.id)}`,createdAt:n?.createdAt||t.updatedAt||t.createdAt,readAt:null}}):[]}function Ga(){return M(),[...$s(),...Wa()].sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt)).map(e=>e.type==="report"?e:{...e,href:vs(e)})}function Pt(){return Ga().filter(e=>!e.readAt).length}function ks(e){if(!e)return;if(String(e).startsWith("report-")){gt(String(e).slice(7),ct()?"author":"reader");return}const t=un(),n=new Date().toISOString();let a=!1;for(const r of t.items||[])r.id===e&&!r.readAt&&(r.readAt=n,a=!0);a&&pn(t)}function ws(){const e=un(),t=new Date().toISOString();let n=!1;for(const a of e.items||[])a.readAt||(a.readAt=t,n=!0);n&&pn(e)}const za="banNiyai_ageConfirmed18",Xa="banNiyai_readerTheme",Qa="banNiyai_readerFontSize";function Ss(){return localStorage.getItem(za)==="true"}function _s(){localStorage.setItem(za,"true")}function er(){return localStorage.getItem(Xa)==="night"?"night":"light"}function As(e){localStorage.setItem(Xa,e)}function Ns(){const e=Number(localStorage.getItem(Qa));return e>=16&&e<=28?e:18}function Es(e){localStorage.setItem(Qa,String(e))}const Ut="banNiyai_wallet",mn="banNiyai_walletTx",fn="banNiyai_unlocks",Ot="banNiyai_checkins",De=[{id:"pack-50",thb:50,coins:55,bonus:5},{id:"pack-100",thb:100,coins:110,bonus:10},{id:"pack-300",thb:300,coins:330,bonus:30},{id:"pack-500",thb:500,coins:550,bonus:50}];function W(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function hn(e,t){localStorage.setItem(e,JSON.stringify(t))}function D(){return b()}function tr(e,t,n){const a=D();if(!a)return null;const r=W(e,{}),o=r[a.id]??t,s=n(o);return r[a.id]=s,hn(e,r),s}function Rn(){return{purchased:0,bonuses:[]}}function qe(){const e=D();if(!e)return Rn();const n=W(Ut,{})[e.id];return typeof n=="number"?{purchased:Number(n)||0,bonuses:[]}:!n||typeof n!="object"?Rn():{purchased:Math.max(0,Number(n.purchased)||0),bonuses:Array.isArray(n.bonuses)?n.bonuses:[]}}function bt(e){const t=D();if(!t)return null;const n=W(Ut,{});return n[t.id]=e,hn(Ut,n),e}function xs(e=qe(),t=new Date){const n=t.getTime();return(e.bonuses||[]).filter(a=>{if(Number(a.remaining)<=0)return!1;if(!a.expiresAt)return!0;const r=new Date(a.expiresAt).getTime();return!Number.isNaN(r)&&r>n})}function U(){const e=qe(),t=xs(e).reduce((n,a)=>n+Number(a.remaining||0),0);return{purchased:e.purchased,bonus:t,total:e.purchased+t}}function ge(){return U().total}function nr(){return yt().some(e=>e.type==="topup")}function ar(e){const t=qe();let n=e,a=0,r=0;const o=Date.now(),c=[...t.bonuses||[]].sort((d,u)=>!d.expiresAt&&!u.expiresAt?0:d.expiresAt?u.expiresAt?new Date(d.expiresAt)-new Date(u.expiresAt):-1:1).map(d=>{if(n<=0||Number(d.remaining)<=0||d.expiresAt&&new Date(d.expiresAt).getTime()<=o)return d;const u=Math.min(Number(d.remaining),n);return n-=u,a+=u,{...d,remaining:Number(d.remaining)-u}});let i=t.purchased;if(n>0){const d=Math.min(i,n);i-=d,n-=d,r+=d}return{wallet:{purchased:i,bonuses:c},fromBonus:a,fromPurchased:r,left:n}}function yt(){const e=D();return e?(W(mn,{})[e.id]||[]).slice().reverse():[]}function ne(e){if(!e||e.free)return 0;const t=Number(e.price);return Number.isFinite(t)&&t>0?t:0}function rr(e,t){const n=D();return n?!!W(fn,{})[n.id]?.[`${e}:${t}`]:!1}function fe(e,t){return!t||!e||!ve(t)?!1:ne(t)<=0?!0:rr(e.id,t.id)}function vt(e){tr(mn,[],t=>[...t,{id:crypto.randomUUID(),createdAt:new Date().toISOString(),...e}])}function Rt(e){return e?new Date(Date.now()+Number(e)*24*60*60*1e3).toISOString():null}function Is(e,{amount:t,source:n,label:a,promoId:r,promoName:o,expiryDays:s}){return!t||t<=0?e:{...e,bonuses:[...e.bonuses||[],{id:crypto.randomUUID(),remaining:t,amount:t,source:n,label:a,promoId:r||null,promoName:o||null,expiresAt:Rt(s),createdAt:new Date().toISOString()}]}}function $t({amount:e,source:t,label:n,expiryDays:a,txType:r,extraTx:o={}}){return D()?(bt(Is(qe(),{amount:e,source:t,label:n,expiryDays:a})),vt({type:r||t,coins:e,label:`${n} +${e}`,...o}),{ok:!0,amount:e,balance:ge(),breakdown:U()}):{ok:!1,reason:"auth"}}function Ts(){if(!D())return{ok:!1,reason:"auth"};B();const t=P().signup;return t.enabled?yt().some(n=>n.type==="signup-bonus")?{ok:!1,reason:"already"}:$t({amount:t.coins,source:"signup",label:"โบนัสสมัครสมาชิก",expiryDays:t.bonusExpiryDays,txType:"signup-bonus"}):{ok:!1,reason:"disabled"}}function Ge(){return{lastDate:null,keys:0,special:{},exchanged:{}}}function or(e){const t={};if(!e||typeof e!="object")return t;for(const[n,a]of Object.entries(e)){const r=Math.max(0,Math.round(Number(a)||0));r>0&&(t[n]=r)}return t}function sr(e){const t={};if(!e||typeof e!="object")return t;for(const[n,a]of Object.entries(e))a&&(t[n]=!0);return t}function ze(e){if(!e)return Ge();const t=W(Ot,{})[e];return t?typeof t=="string"?{lastDate:t,keys:0,special:{},exchanged:{}}:{lastDate:t.lastDate||null,keys:Math.max(0,Math.round(Number(t.keys)||0)),special:or(t.special),exchanged:sr(t.exchanged)}:Ge()}function kt(e,t){const n=W(Ot,{});return n[e]={lastDate:t.lastDate||null,keys:Math.max(0,Math.round(Number(t.keys)||0)),special:or(t.special),exchanged:sr(t.exchanged)},hn(Ot,n),n[e]}const Ds="Happy new year",qs="2027-01-03T00:00:00+07:00";function gn(e){return e?.name===Ds}function ir(){return new Date(qs)}function bn(e,t=new Date){if(!e)return ze(e);B();const n=ze(e),a=new Map(J().map(s=>[s.id,s])),r={...n.special};let o=!1;for(const[s,c]of Object.entries(r)){const i=a.get(s);if(!i){delete r[s],o=!0;continue}if(gn(i)){if(t<ir()||!!!n.exchanged[i.id]&&c>=i.keysRequired)continue;delete r[s],o=!0;continue}Ba(i,t)&&(delete r[s],o=!0)}return o?kt(e,{...n,special:r}):n}function Ls(e=new Date){B();const t=J().find(c=>gn(c)&&c.enabled!==!1);if(!t)return null;const n=b(),a=n?bn(n.id,e):Ge();if(a.exchanged[t.id])return null;const r=new Date(t.startAt);if(Number.isNaN(r.getTime())||e<r)return null;const o=Number(a.special[t.id]||0),s=o>=t.keysRequired;return e>=ir()&&!s?null:{promo:t,keys:o,keysRequired:t.keysRequired,coins:t.coins,alreadyExchanged:!1,canExchange:s}}function yn(e=new Date){B();const t=P().checkin,n=t.keysPerDay,a=t.keysRequired||t.keysPerCoin,r=t.coins||a,o=a,s=D(),c=s?bn(s.id,e):Ge(),i=Co(e),d=c.lastDate===i,u=Pa(e),p=on(e).map(m=>{const f=Number(c.special[m.id]||0),y=!!c.exchanged[m.id];return{promo:m,keys:f,keysRequired:m.keysRequired,coins:m.coins,alreadyExchanged:y,canExchange:!y&&f>=m.keysRequired}});return t.enabled?{enabled:!0,keys:c.keys,keysPerDay:n,keysRequired:a,coins:r,keysPerCoin:o,checkedInToday:d,canExchange:c.keys>=a,currentKeyPromo:u,keyPromos:p,today:i}:{enabled:!1,keys:c.keys,keysPerDay:n,keysRequired:a,coins:r,keysPerCoin:o,checkedInToday:d,canExchange:!1,currentKeyPromo:u,keyPromos:p,today:i}}function Cs(e=new Date){const t=D();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนเช็คอิน"};const n=yn(e);if(!n.enabled)return{ok:!1,reason:"disabled",error:"เช็คอินรายวันยังไม่เปิดใช้"};if(n.checkedInToday)return{ok:!1,reason:"already",error:"เช็คอินวันนี้แล้ว"};const a=ze(t.id),r=Pa(e);let o=a.keys;const s={...a.special};r?s[r.id]=(s[r.id]||0)+n.keysPerDay:o+=n.keysPerDay;const c=kt(t.id,{...a,lastDate:n.today,keys:o,special:s});return{ok:!0,keys:c.keys,special:c.special,currentKeyPromo:r}}function Bs(){const e=D();if(!e)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกเหรียญ"};const t=yn();if(!t.enabled)return{ok:!1,reason:"disabled",error:"เช็คอินรายวันยังไม่เปิดใช้"};const n=t.keysRequired||t.keysPerCoin,a=t.coins||n;if(t.keys<n)return{ok:!1,reason:"short",error:`ต้องมีกุญแจเงิน ${n} ดอก จึงจะแลกได้ ${a} เหรียญ`,keys:t.keys,keysRequired:n};const r=ze(e.id),o=kt(e.id,{...r,keys:r.keys-n});return{...$t({amount:a,source:"key-exchange",label:`แลกกุญแจเงิน ${n} ดอก`,expiryDays:P().checkin.bonusExpiryDays,txType:"key-exchange"}),keys:o.keys,canExchange:o.keys>=n}}function Ps(e){const t=D();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกเหรียญ"};const n=pt(e),a=new Date,r=bn(t.id,a),o=r.special[n?.id]||0,s=!!(n&&gn(n)&&Ba(n,a)&&!r.exchanged[n.id]&&o>=n.keysRequired);if(!n||!rn(n,a)&&!s)return{ok:!1,reason:"inactive",error:"โปรแจกกุญแจนี้ยังไม่เปิดหรือหมดเขตแล้ว"};if(r.exchanged[n.id])return{ok:!1,reason:"already",error:"คุณแลกโปรนี้ไปแล้ว",keys:r.special[n.id]||0};const c=r.special[n.id]||0;if(c<n.keysRequired)return{ok:!1,reason:"short",error:`ต้องมี${n.keyName} ${n.keysRequired} อัน จึงจะแลกได้ ${n.coins} เหรียญ`,keys:c};const i={...r.special,[n.id]:c-n.keysRequired},d={...r.exchanged,[n.id]:!0},u=kt(t.id,{...r,special:i,exchanged:d});return{...$t({amount:n.coins,source:"key-promo-exchange",label:`แลก${n.keyName} ${n.keysRequired} อัน (${n.name})`,txType:"key-promo-exchange",extraTx:{keyPromoId:n.id,promoName:n.name}}),keys:u.special[n.id]||0,alreadyExchanged:!0}}function Us(e){const t=D();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกโค้ด"};const n=Wo(e,t.id);return n.ok?(Go(n.record.id,t.id),$t({amount:n.record.coins,source:"redeem",label:`แลกโค้ด ${n.record.code}`,expiryDays:n.record.bonusExpiryDays,txType:"redeem",extraTx:{code:n.record.code,redeemId:n.record.id}})):n}function Os(e){return Rs(e)}function Rs(e){if(!D())return{ok:!1,reason:"auth"};const n=De.find(c=>c.id===e);if(!n)return{ok:!1,reason:"package"};B();const a=Ea(n,{isFirstTopUp:!nr()}),r=qe(),o=[...r.bonuses||[]];if(a.packageBonus>0&&o.push({id:crypto.randomUUID(),remaining:a.packageBonus,amount:a.packageBonus,source:"package",label:"โบนัสแพ็ก",expiresAt:null,createdAt:new Date().toISOString()}),a.firstTopUpBonus>0){const c=a.firstTopUp?.bonusExpiryDays;o.push({id:crypto.randomUUID(),remaining:a.firstTopUpBonus,amount:a.firstTopUpBonus,source:"first-topup",label:"โบนัสเติมครั้งแรก",expiresAt:Rt(c),createdAt:new Date().toISOString()})}a.promoBonus>0&&a.promo&&o.push({id:crypto.randomUUID(),remaining:a.promoBonus,amount:a.promoBonus,source:"promo",promoId:a.promo.id,promoName:a.promo.name,label:a.promo.name,expiresAt:Rt(a.promo.bonusExpiryDays),createdAt:new Date().toISOString()}),bt({purchased:r.purchased+a.paid,bonuses:o});const s=[`เติม ${a.paid} เหรียญ (${n.thb} บาท) — ทดลอง`];return a.packageBonus&&s.push(`โบนัสแพ็ก +${a.packageBonus}`),a.firstTopUpBonus&&s.push(`โบนัสเติมครั้งแรก +${a.firstTopUpBonus}`),a.promoBonus&&a.promo&&s.push(`${a.promo.name} +${a.promoBonus}`),vt({type:"topup",coins:a.total,paid:a.paid,packageBonus:a.packageBonus,firstTopUpBonus:a.firstTopUpBonus,promoBonus:a.promoBonus,promoId:a.promo?.id||null,promoName:a.promo?.name||null,thb:n.thb,packageId:n.id,method:"mock-trial",label:s.join(" · ")}),{ok:!0,balance:ge(),breakdown:U(),quote:a,pack:n}}function Ms(e,t){if(!D())return{ok:!1,reason:"auth"};const a=v(e),r=be(a,t);if(!a||!r||!ve(r))return{ok:!1,reason:"notfound"};if(ne(r)<=0||rr(e,t))return{ok:!0,already:!0,balance:ge()};const o=ne(r),s=U();if(s.total<o)return{ok:!1,reason:"insufficient",balance:s.total,breakdown:s,price:o,novel:a,chapter:r};const c=ar(o);if(c.left>0)return{ok:!1,reason:"insufficient",balance:s.total,breakdown:s,price:o,novel:a,chapter:r};bt(c.wallet),tr(fn,{},d=>({...d,[`${e}:${t}`]:{novelId:e,chapterId:t,price:o,unlockedAt:new Date().toISOString()}}));const i=[];return c.fromBonus&&i.push(`ใช้โบนัส ${c.fromBonus}`),c.fromPurchased&&i.push(`ใช้เหรียญ ${c.fromPurchased}`),vt({type:"unlock",coins:-o,fromBonus:c.fromBonus,fromPurchased:c.fromPurchased,novelId:e,chapterId:t,label:`ปลดล็อก ${a.title} ตอนที่ ${r.id} ${r.title}${i.length?` (${i.join(" + ")})`:""}`}),{ok:!0,balance:ge(),breakdown:U(),price:o,fromBonus:c.fromBonus,fromPurchased:c.fromPurchased,novel:a,chapter:r}}function Fs(e,t={}){if(!D())return{ok:!1,reason:"auth"};const a=Number(e),r=Math.round(a);if(!Number.isFinite(a)||r!==a||r<=0)return{ok:!1,reason:"invalid"};const o=U();if(o.total<r)return{ok:!1,reason:"insufficient",balance:o.total,breakdown:o,amount:r};const s=ar(r);return s.left>0?{ok:!1,reason:"insufficient",balance:o.total,breakdown:o,amount:r}:(bt(s.wallet),vt({coins:-r,fromBonus:s.fromBonus,fromPurchased:s.fromPurchased,...t}),{ok:!0,amount:r,balance:ge(),breakdown:U(),fromBonus:s.fromBonus,fromPurchased:s.fromPurchased})}function Hs(){const e=W(fn,{}),t=[];for(const[n,a]of Object.entries(e||{}))if(!(!a||typeof a!="object"))for(const r of Object.values(a))!r||!r.novelId||r.chapterId==null||t.push({userId:n,novelId:r.novelId,chapterId:String(r.chapterId),coins:Number(r.price)||0,unlockedAt:r.unlockedAt||null});return t}function js(){const e=W(mn,{}),t=[];for(const[n,a]of Object.entries(e||{}))if(Array.isArray(a))for(const r of a){if(!r||r.type!=="topup")continue;const o=De.find(p=>p.id===r.packageId),s=Number(r.thb),c=Number(r.paid),i=Number(r.packageBonus),d=(Number(r.firstTopUpBonus)||0)+(Number(r.promoBonus)||0),u=Number(r.coins);t.push({id:r.id,userId:n,createdAt:r.createdAt||null,thb:Number.isFinite(s)&&s>0?s:Number(o?.thb)||0,paid:Number.isFinite(c)&&c>=0?c:Number(o?.thb)||0,packageBonus:Number.isFinite(i)&&i>=0?i:Number(o?.bonus)||0,firstTopUpPromo:d,coins:Number.isFinite(u)?u:0,packageId:r.packageId||null})}return t.sort((n,a)=>new Date(a.createdAt||0)-new Date(n.createdAt||0)),t}const Xe="banNiyai_donations",Qe=[{id:"candy",name:"อมยิ้ม",coins:1},{id:"rose",name:"ดอกกุหลาบ",coins:5},{id:"popcorn",name:"ป๊อปคอร์น",coins:10},{id:"milktea",name:"ชานมไข่มุก",coins:15},{id:"cake",name:"เค้ก",coins:20},{id:"coin",name:"เหรียญ",coins:null}],Mn="banNiyai_walletTx",Ks=[["ลูกอม","อมยิ้ม"],["เค้กชิ้นสามเหลี่ยม","เค้ก"]];function Vs(e){return`/gifts/${e}.png`}function Ys(){try{for(const[e,t]of Ks){const n=localStorage.getItem(Xe);if(n&&n.includes(e)){const r=JSON.parse(n);let o=!1;for(const s of Object.values(r||{}))if(Array.isArray(s))for(const c of s)c&&c.giftName===e&&(c.giftName=t,o=!0);o&&localStorage.setItem(Xe,JSON.stringify(r))}const a=localStorage.getItem(Mn);if(a&&a.includes(e)){const r=JSON.parse(a);let o=!1;const s=c=>{if(Array.isArray(c))for(const i of c)i&&(i.giftName===e&&(i.giftName=t,o=!0),typeof i.label=="string"&&i.label.includes(e)&&(i.label=i.label.split(e).join(t),o=!0))};Array.isArray(r)?s(r):r&&typeof r=="object"&&Object.values(r).forEach(s),o&&localStorage.setItem(Mn,JSON.stringify(r))}}}catch{}}Ys();function Js(e){return Qe.find(t=>t.id===e)||null}function cr(){try{const e=localStorage.getItem(Xe);return e?JSON.parse(e):{}}catch{return{}}}function Zs(e){localStorage.setItem(Xe,JSON.stringify(e))}function Ws({novelId:e,giftId:t,customAmount:n,chapterId:a}={}){const r=b();if(!r)return{ok:!1,reason:"auth"};const o=v(e);if(!o)return{ok:!1,reason:"notfound"};const s=Js(t);if(!s)return{ok:!1,reason:"gift"};let c=s.coins;if(s.coins==null){const f=Number(n);if(c=Math.round(f),!Number.isFinite(f)||c!==f||c<=0)return{ok:!1,reason:"invalid",gift:s,novel:o}}const i=a?be(o,a):null;if(a&&!i)return{ok:!1,reason:"notfound",gift:s,novel:o};const d=i?`โดเนท ${s.name} ให้ ${o.title} ตอนที่ ${i.id} ${i.title}`:`โดเนท ${s.name} ให้ ${o.title}`,u=Fs(c,{type:"donate",label:d,novelId:o.id,chapterId:i?i.id:null,giftId:s.id,giftName:s.name});if(!u.ok)return{...u,gift:s,novel:o,chapter:i,amount:c};const p={id:crypto.randomUUID(),userId:r.id,novelId:o.id,novelTitle:o.title,chapterId:i?i.id:null,chapterTitle:i?i.title:null,giftId:s.id,giftName:s.name,coins:c,fromBonus:u.fromBonus,fromPurchased:u.fromPurchased,createdAt:new Date().toISOString()},m=cr();return m[o.id]=[...m[o.id]||[],p],Zs(m),{ok:!0,...u,gift:s,novel:o,chapter:i,record:p}}function Gs(){const e=cr(),t=[];for(const n of Object.values(e||{}))Array.isArray(n)&&t.push(...n);return t}function Be(){return{unlocks:0,unlockCoins:0,donations:0,donateCoins:0}}function X(e,{unlocks:t=0,unlockCoins:n=0,donations:a=0,donateCoins:r=0}={}){e.unlocks+=t,e.unlockCoins+=n,e.donations+=a,e.donateCoins+=r}function zs(){const e=ye(),t=new Map(e.map(a=>{const r=(a.chapters||[]).map(o=>({id:String(o.id),title:o.title,totals:Be()}));return[a.id,{id:a.id,title:a.title,author:a.author,totals:Be(),unassignedDonations:Be(),chapters:r,chapterMap:new Map(r.map(o=>[o.id,o]))}]})),n=Be();for(const a of Hs()){const r=t.get(a.novelId);if(!r)continue;const o={unlocks:1,unlockCoins:a.coins};X(n,o),X(r.totals,o);const s=r.chapterMap.get(String(a.chapterId));s&&X(s.totals,o)}for(const a of Gs()){const r=t.get(a.novelId);if(!r)continue;const s={donations:1,donateCoins:Number(a.coins)||0};if(X(n,s),X(r.totals,s),a.chapterId!=null&&a.chapterId!==""){const c=r.chapterMap.get(String(a.chapterId));X(c?c.totals:r.unassignedDonations,s)}else X(r.unassignedDonations,s)}return{overall:n,novels:e.map(a=>{const r=t.get(a.id);return{id:r.id,title:r.title,author:r.author,totals:r.totals,unassignedDonations:r.unassignedDonations,chapters:r.chapters}})}}function Xs(){const e=js().map(s=>{const c=mo(s.userId);return{...s,readerName:(c?.displayName||"").trim()||"นักอ่าน"}}),t=e.reduce((s,c)=>({thb:s.thb+c.thb,coins:s.coins+c.coins,count:s.count+1}),{thb:0,coins:0,count:0}),n=new Map,a=new Map;for(const s of e){const c=Qs(s.createdAt);c&&(n.set(c.monthKey,(n.get(c.monthKey)||0)+s.thb),a.set(c.yearKey,(a.get(c.yearKey)||0)+s.thb))}const r=[...n.entries()].sort((s,c)=>c[0].localeCompare(s[0])).map(([s,c])=>{const[i,d]=s.split("-").map(Number);return{key:s,year:i,month:d,thb:c}}),o=[...a.entries()].sort((s,c)=>c[0].localeCompare(s[0])).map(([s,c])=>({key:s,year:Number(s),thb:c}));return{totals:t,records:e,byMonth:r,byYear:o}}function Qs(e){if(!e)return null;const t=new Date(e);if(Number.isNaN(t.getTime()))return null;const n=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit"}).formatToParts(t),a=Number(n.find(o=>o.type==="year")?.value),r=Number(n.find(o=>o.type==="month")?.value);return!a||!r?null:{year:a,month:r,yearKey:String(a),monthKey:`${a}-${String(r).padStart(2,"0")}`}}const Mt="banNiyai_followChannels";function lr(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function ei(e,t){localStorage.setItem(e,JSON.stringify(t))}function ti(e){if(!e||!e.id)return null;const t=String(e.name||"").trim(),n=String(e.url||"").trim();return!t||!n?null:{id:String(e.id),name:t,url:n,enabled:e.enabled!==!1,sortOrder:Number.isFinite(Number(e.sortOrder))?Number(e.sortOrder):0,createdAt:e.createdAt,updatedAt:e.updatedAt}}function ni(){const e=lr(Mt,null);return Array.isArray(e)||ei(Mt,[]),dr()}function dr({includeDisabled:e=!1}={}){const t=lr(Mt,null),n=(Array.isArray(t)?t:[]).map(ti).filter(Boolean);return(e?n:n.filter(r=>r.enabled)).slice().sort((r,o)=>r.sortOrder-o.sortOrder||String(r.id).localeCompare(String(o.id)))}const ai=[16,18,22],ri='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.4 12 4.8l8 6.6V20a1 1 0 0 1-1 1h-5.2v-6.2H10.2V21H5a1 1 0 0 1-1-1v-8.6Z"/></svg>',oi='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h4.2v13.5H4V5Zm5.9 2.2h4.2V18.5H9.9V7.2Zm5.9-1.4H20V18.5h-4.2V5.8ZM3 19.4h18V21H3v-1.6Z"/></svg>',si='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 5H6v14h4v2H4V3h6v2Zm4.8 3.6-1.4 1.4 2.2 2H9v2h6.6l-2.2 2 1.4 1.4L19.4 12 14.8 8.6Z"/></svg>',ii='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.4 0-8 1.7-8 5v1h16v-1c0-3.3-4.6-5-8-5Z"/></svg>',ci='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9.4L5 20.4V17H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm7 3v5h2V7h-2Zm0 6.5V15.5h2v-2h-2Z"/></svg>',li='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10l1 4H6L7 3Zm-1 6h12v12H6V9Zm3 3v2h6v-2H9Z"/></svg>',di='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.4 0-8 1.7-8 5v1h16v-1c0-3.3-4.6-5-8-5Z"/></svg>',ui='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Zm1.75 1.1 7.25 5.05 7.25-5.05V17.25c0 .41-.34.75-.75.75H5.5a.75.75 0 0 1-.75-.75V7.6Z"/></svg>',Fn='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.5 3a7.5 7.5 0 0 1 5.8 12.2l4.2 4.2-1.4 1.4-4.2-4.2A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/></svg>',ur='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 9V8a5 5 0 0 0-10 0v1H5v12h14V9h-2Zm-8-1a3 3 0 0 1 6 0v1H9V8Zm3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>',pi='<svg class="home-daily__icon home-daily__icon--bonus" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="10" width="17" height="10.5" rx="1.8" fill="#d2647a"/><rect x="3" y="7.2" width="18" height="4" rx="1.2" fill="#ec8fa3"/><rect x="11" y="7.2" width="2" height="13.3" fill="#f6d15a"/><path fill="#e8b423" d="M12 7.2c-2.4-3.4-6.2-2.4-6.2.2 0 1.5 2.4 2.5 6.2 3.4 3.8-.9 6.2-1.9 6.2-3.4 0-2.6-3.8-3.6-6.2-.2Z"/></svg>',Ft='<svg class="coin-pack__coin" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#C99212"/><circle cx="12" cy="12" r="10.15" fill="#F3C63A"/><circle cx="12" cy="12" r="8.15" fill="#E8B423"/><circle cx="12" cy="12" r="7.35" fill="none" stroke="#FFE89A" stroke-width="0.85"/><path fill="#8F6508" d="M13.05 6.35h-2.1v1.12c-1.72.28-2.92 1.42-2.92 2.98 0 1.22.76 2.16 2.18 2.56l.74.2v3.32c-.72-.2-1.2-.7-1.36-1.26H7.45c.26 1.48 1.48 2.5 2.5 2.78v1.08h2.1v-1.06c1.78-.26 3.02-1.42 3.02-3.08 0-1.28-.8-2.22-2.2-2.6l-.82-.22V8.88c.66.2 1.12.7 1.24 1.22h1.92c-.22-1.38-1.36-2.34-2.36-2.58V6.35Zm-2.1 5.55c-.7-.18-1.14-.55-1.14-1.16 0-.7.5-1.14 1.14-1.3v2.46Zm2.1 1.16v2.62c-.74.2-1.26.56-1.26 1.22 0 .7.52 1.14 1.26 1.32v-5.16Z"/></svg>',mi='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 14.93V18h-2v-1.07A4 4 0 0 1 8 14h2a2 2 0 0 0 2 2 2 2 0 0 0 0-4h-1v-2h1a2 2 0 0 0 0-4 2 2 0 0 0-2 2H8a4 4 0 0 1 3-3.93V6h2v1.07A4 4 0 0 1 16 10h-2a2 2 0 0 0-2-2 2 2 0 0 0 0 4h1v2h-1a2 2 0 0 0 0 4 2 2 0 0 0 2-2h2a4 4 0 0 1-3 3.93Z"/></svg>',pr='<svg class="icon follow-btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a1 1 0 0 1 1 1v17.2l-6-3.4-6 3.4V4a1 1 0 0 1 1-1Z"/></svg>',mr='<svg class="icon follow-btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 16.6 5 12.4l1.4-1.4 2.8 2.8 8-8L18.6 7.2 9.2 16.6Z"/></svg>',fi='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.5-5.6-5.6S8.9 6.2 12 6.2c1.8 0 3 .7 3.7 1.3l2.4-2.4C16.7 3.7 14.5 2.8 12 2.8 6.9 2.8 2.8 6.9 2.8 12S6.9 21.2 12 21.2c5.2 0 8.6-3.6 8.6-8.7 0-.6 0-1-.1-1.5H12Z"/></svg>';function l(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const hi=2*1024*1024,gi="ไฟล์ใหญ่เกินไป กรุณาเลือกรูปที่ไม่เกิน 2MB",bi="ไม่สามารถอ่านไฟล์รูปนี้ได้ กรุณาเลือกรูปอื่น",K="พื้นที่เก็บข้อมูลในเบราว์เซอร์เต็ม กรุณาเลือกรูปที่เล็กลง";async function wt(e,{maxSide:t=1024,maxChars:n=35e4,errorMessage:a}={}){if(!e||!String(e.type||"").startsWith("image/"))return{ok:!1,error:"กรุณาเลือกไฟล์ภาพ"};if(e.size>hi)return{ok:!1,error:a||gi};const r=URL.createObjectURL(e);try{const o=await new Promise((p,m)=>{const f=new Image;f.onload=()=>p(f),f.onerror=()=>m(new Error("unreadable")),f.src=r}),s=o.naturalWidth||300,c=o.naturalHeight||300;let i=Math.min(1,t/Math.max(s,c)),d=.86,u="";for(let p=0;p<6;p+=1){const m=document.createElement("canvas");m.width=Math.max(1,Math.round(s*i)),m.height=Math.max(1,Math.round(c*i));const f=m.getContext("2d");if(u=m.toDataURL("image/webp",d),u.startsWith("data:image/webp")?(f.drawImage(o,0,0,m.width,m.height),u=m.toDataURL("image/webp",d)):(f.fillStyle="#fff",f.fillRect(0,0,m.width,m.height),f.drawImage(o,0,0,m.width,m.height),u=m.toDataURL("image/jpeg",d)),u.length<=n)break;d=Math.max(.5,d-.1),i*=.82}return{ok:!0,dataUrl:u}}catch{return{ok:!1,error:bi}}finally{URL.revokeObjectURL(r)}}function vn(e){if(!e)return"";const t=String(e),n=/^\d{4}-\d{2}-\d{2}$/.test(t)?new Date(`${t}T00:00:00+07:00`):new Date(t);return Number.isNaN(n.getTime())?"":le(n)}function Le(e){if(e?.image)return"";const t=e?.from||"#F7B3BE",n=e?.to||"#8A5A9A";return`background: linear-gradient(165deg, ${t} 0%, ${n} 100%);`}function St(e,{photoClass:t,motifClass:n}={}){const a=e.cover?.image?`<img class="${t}" src="${l(e.cover.image)}" alt="" />`:"",r=e.cover?.image?"":`<span class="${n}">${l(e.cover?.motif||"")}</span>`;return`${fr(e)}${a}${r}`}function $n(e,{filledMain:t=!1,maxSecondary:n=null}={}){const a=(e.tags||[]).map(i=>Jt(i)).filter(Boolean).map(i=>`<span class="chip${t?" chip--filled":""}">${l(i.name)}</span>`);let r=e.secondaryTags||[];n!=null&&(r=r.slice(0,n));const o=r.map(i=>`<span class="chip chip--outline">${l(i)}</span>`);if(!a.length&&!o.length)return"";const s=a.length?`<div class="chips__row chips__row--main">${a.join("")}</div>`:"",c=o.length?`<div class="chips__row chips__row--secondary">${o.join("")}</div>`:"";return`<div class="chips">${s}${c}</div>`}function fr(e){return e&&(e.isAdult||e.tags&&Ye(e))?'<span class="badge-18" title="เนื้อหาสำหรับผู้มีอายุ 18 ปีขึ้นไป">18+</span>':""}function et(){return ma(new URLSearchParams(window.location.search).get("next"))}function N(e){const t=e==="home"?' aria-current="page"':"",n=e==="login"?' aria-current="page"':"",a=e==="bookshelf"?' aria-current="page"':"",r=b(),o=T()==="/login"||T()==="/signup"?"/":T(),s=w({name:"login",next:o==="/"?void 0:o});let c="";if(r){const u=e==="profile"?' aria-current="page"':"",p=e==="purchases"?' aria-current="page"':"",m=e==="report"?' aria-current="page"':"";c=`
      <div class="account-menu">
        <button class="account-menu__btn" type="button" data-account-toggle aria-expanded="false" aria-haspopup="true" aria-controls="account-menu-list" aria-label="${l(r.displayName)}">
          <span class="avatar" aria-hidden="true">${Ht(r)}</span>
        </button>
        <div class="account-menu__list" id="account-menu-list" hidden>
          <div class="account-menu__profile">
            <span class="avatar avatar--menu" aria-hidden="true">${Ht(r)}</span>
            <p class="account-menu__profile-name">${l(r.displayName)}</p>
          </div>
          <a href="/profile" data-link${u}>${ii}แก้ไขโปรไฟล์</a>
          <a href="/bookshelf" data-link${a}>${oi}ชั้นหนังสือ</a>
          <a href="/purchases" data-link${p}>${li}ประวัติการซื้อ</a>
          <a href="/report" data-link${m}>${ci}แจ้งปัญหาการใช้งาน</a>
          <button type="button" data-logout>${si}ออกจากระบบ</button>
        </div>
      </div>
    `}else c=`
      <a class="header-link" href="${s}" data-link${n}>${di}เข้าสู่ระบบ</a>
    `;const i=e==="search"&&new URLSearchParams(window.location.search).get("q")||"",d=e==="search";return`
    <a class="skip-link" href="#main">ข้ามไปเนื้อหา</a>
    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="/" data-link>
          <span class="brand__mark">บ</span>
          <span class="brand__name">
            <span class="brand__name-full">${l(k.headerName)}</span>
            <span class="brand__name-short">${l(k.shortName)}</span>
          </span>
        </a>
        <form class="header-search${d?" is-open":""}" action="/search" method="get" role="search" data-search-form>
          <button class="header-search__toggle" type="button" data-search-toggle aria-expanded="${d?"true":"false"}" aria-label="${d?"ปิดช่องค้นหา":"เปิดช่องค้นหา"}">${Fn}</button>
          <input class="header-search__field" id="header-search-q" type="search" name="q" value="${l(i)}" placeholder="ค้นหานิยาย นามปากกา หรือแท็ก" autocomplete="off" aria-label="ค้นหานิยาย นามปากกา หรือแท็ก">
          <button class="header-search__go" type="submit" aria-label="ค้นหา">${Fn}</button>
        </form>
        <nav class="header-nav" aria-label="เมนูหลัก">
          <a class="header-nav-home" href="/" data-link${t}>${ri}หน้าแรก</a>
          ${cl()}
          ${c}
        </nav>
      </div>
    </header>
  `}function E(){return`
    <footer class="site-footer">
      <div class="site-footer__inner">
        <p>© ต้นแบบเว็บบ้านนิยายของนามปากกา ${l(k.penNames.join(" และ "))} — ต้นแบบทดลองใช้งาน</p>
        <p>เนื้อหาในหน้านี้เป็นข้อความตัวอย่างทั้งหมด ยังไม่เปิดขายและยังไม่จดโดเมน</p>
        <p class="footer-links"><a href="/terms" data-link>ข้อกำหนดการใช้งาน</a> · <a href="/privacy" data-link>นโยบายความเป็นส่วนตัว</a> · <a href="/admin" data-link>หลังบ้านนักเขียน (ต้นแบบ)</a></p>
      </div>
    </footer>
  `}function hr(e){return`
    <a class="novel-card" href="${w({name:"novel",id:e.id})}" data-link data-novel-id="${l(e.id)}">
      <div class="novel-card__cover" style="${Le(e.cover)}" aria-hidden="true">
        ${St(e,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
      </div>
      <div class="novel-card__body">
        <h3 class="novel-card__title">${l(e.title)}</h3>
        <p class="novel-card__author">${l(e.author)}</p>
        ${$n(e,{maxSecondary:2})}
        <p class="novel-card__teaser">${l(e.teaser)}</p>
      </div>
    </a>
  `}function yi(e){const t=ga(e),n=t?"อยู่ในชั้นหนังสือแล้ว":"เพิ่มเข้าชั้น";return`
    <button class="follow-btn${t?" is-following":""}" type="button" data-follow="${l(e)}" aria-pressed="${t}">
      ${t?mr:pr}
      <span data-follow-label>${n}</span>
    </button>
  `}function vi(e){const t=String(e||"").trim();if(!t)return"";try{const n=new URL(t);return n.protocol==="https:"||n.protocol==="http:"?n.href:""}catch{return""}}function $i(e){const t=vi(e?.mebUrl);return t?`<a class="meb-btn" href="${l(t)}" target="_blank" rel="noopener noreferrer">ซื้ออีบุ๊กที่ MEB</a>`:""}function _t(){return'<p class="proto-note">ระบบสมาชิกนี้เป็นต้นแบบ ข้อมูลถูกเก็บเฉพาะในเบราว์เซอร์นี้ ยังไม่มีการสร้างบัญชีจริงบนเซิร์ฟเวอร์</p>'}function h(e){return`<p class="field-error" data-error-for="${e}" hidden></p>`}function gr(e){return`
    <div class="auth-divider"><span>หรือ</span></div>
    <button class="btn btn-google" type="button" data-google-placeholder>
      ${fi}
      ${e}
    </button>
    <p class="form-hint" data-google-message hidden>การเข้าสู่ระบบด้วย Google จะเปิดใช้ในเวอร์ชันถัดไป นี่เป็นเพียงตัวอย่างปุ่ม</p>
  `}function kn({titleId:e}={}){const t=P().signup,n=t.enabled&&t.coins?`<p class="auth-promo__pill-wrap"><span class="auth-promo__pill">รับทันที ${t.coins} เหรียญ</span></p>`:"";return`
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
    </div>`}function br({next:e,compact:t=!1}={}){const n=w({name:"signup",next:e&&e!=="/"?e:void 0});return`
    ${t?"":_t()}
    ${t?"":`<p class="demo-author-note">บัญชีนักเขียนตัวอย่างสำหรับเข้าหลังบ้าน: อีเมล <strong>${l(Q.email)}</strong> รหัสผ่าน <strong>${l(Q.password)}</strong></p>`}
    <form class="auth-form" data-login-form novalidate>
      <div class="field">
        <label for="login-email">อีเมล</label>
        <input id="login-email" name="email" type="email" autocomplete="email" required />
        ${h("email")}
      </div>
      <div class="field">
        <label for="login-password">รหัสผ่าน</label>
        <input id="login-password" name="password" type="password" autocomplete="current-password" required />
        ${h("password")}
        <p class="forgot-link"><a href="/forgot-password" data-link>ลืมรหัสผ่าน?</a></p>
      </div>
      <p class="field-error" data-error-for="form" hidden></p>
      <button class="btn btn-primary btn-block" type="submit">เข้าสู่ระบบ</button>
    </form>
    ${gr("เข้าสู่ระบบด้วย Google")}
    <p class="auth-switch">ยังไม่มีบัญชี? <a href="${n}" data-link>สมัครสมาชิก</a></p>
  `}function ue(e){return String(e||"").trim().toLowerCase()}function ki(e){const t=ue(e);return t?ye().filter(n=>ue(n.title).includes(t)||ue(n.author).includes(t)||(n.tags||[]).some(o=>{const s=Jt(o);return ue(o).includes(t)||s&&ue(s.name).includes(t)})?!0:(n.secondaryTags||[]).some(o=>ue(o).includes(t))):[]}function wi(){S("light");const t=(new URLSearchParams(window.location.search).get("q")||"").trim();document.title=t?`ค้นหา “${t}” — ${k.shortName}`:`ค้นหา — ${k.shortName}`;const n=ki(t);let a;t?n.length?a=`<div class="bookshelf-grid search-results">${n.map(hr).join("")}</div>`:a=`<p class="empty-state">ไม่พบนิยายที่ตรงกับ “${l(t)}”</p>`:a='<p class="empty-state">กรอกคำค้นเพื่อหานิยายจากชื่อเรื่อง นามปากกา หรือแท็ก</p>';const r=t?`ผลการค้นหา “${l(t)}” · พบ ${n.length} เรื่อง`:"ค้นหานิยาย";return`
    ${N("search")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ผลการค้นหา</h1>
        <p class="muted-note">${r}</p>
        ${a}
      </div>
    </main>
    ${E()}
  `}function Si(){document.title=k.name,S("light");const e=x(),t=e[0],n=e.map((s,c)=>{const i=c===0;return`
      <button
        class="home-tab${i?" is-active":""}"
        type="button"
        role="tab"
        id="home-tab-${s.id}"
        data-home-tab="${l(s.id)}"
        aria-selected="${i}"
        aria-controls="home-catalog"
      >${l(s.name)}${fr(s)}</button>`}).join(""),a=`
      <a class="home-tab home-tab--page" href="/events" data-link>กิจกรรม</a>
      <a class="home-tab home-tab--page" href="/follow" data-link>ติดตามนักเขียน</a>`,o=!b()?'<div class="home-welcome-login"><button type="button" class="btn btn-primary btn-login-prompt home-welcome-login__btn">เข้าสู่ระบบ</button></div>':"";return`
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
        ${o}
      </div>
      ${wc()}
      <div class="container">
        <hr class="home-divider" />
        <div class="home-tabs">
          <div class="home-tabs__cats" role="tablist" aria-label="หมวดนิยาย">${n}</div>
          ${a}
        </div>
        <section class="home-catalog" id="home-catalog" data-home-catalog role="tabpanel" aria-labelledby="home-tab-${t.id}">
          ${yr(t)}
        </section>
      </div>
    </main>
    ${E()}
  `}function yr(e){const t=Qr(e.id);return t.length?`<div class="home-catalog-grid">${t.map(hr).join("")}</div>`:'<p class="muted-note">ยังไม่มีนิยายในหมวดนี้</p>'}function _i(){const e=document.querySelector("[data-home-catalog]");e&&document.querySelectorAll("[data-home-tab]").forEach(t=>{t.addEventListener("click",()=>{const n=Zr(t.dataset.homeTab);n&&(document.querySelectorAll("[data-home-tab]").forEach(a=>{const r=a===t;a.classList.toggle("is-active",r),a.setAttribute("aria-selected",String(r))}),e.setAttribute("aria-labelledby",`home-tab-${n.id}`),e.innerHTML=yr(n),C(e))})})}function wn(e){return`<img class="gift-art" src="${Vs(e)}" alt="" width="256" height="256" />`}function vr(e,t){const n=t?` data-chapter-id="${l(t)}"`:"",a=Qe.map(r=>{const o=r.coins==null?"กำหนดเอง":`${r.coins} เหรียญ`,s=r.coins==null?'<label class="donate-custom"><span>จำนวนเหรียญ</span><input class="donate-custom__input" type="number" min="1" step="1" inputmode="numeric" name="customAmount" placeholder="เช่น 8" aria-label="จำนวนเหรียญที่ต้องการโดเนท"></label>':"";return`
      <button class="donate-gift" type="button" data-donate-gift="${l(r.id)}">
        ${wn(r.id)}
        <span class="donate-gift__name">${l(r.name)}</span>
        <span class="donate-gift__price">${o}</span>
        ${s}
      </button>`}).join("");return`
    <section class="donate-box" data-donate-box data-novel-id="${l(e)}"${n} aria-label="โดเนท">
      <div class="donate-box__row">${a}</div>
      <p class="field-error donate-box__error" data-donate-error hidden></p>
    </section>`}function Ai(e){const t=v(e);if(!t)return Sn();document.title=`${t.title} — ${k.shortName}`,S("light");const n=zt(t).map(a=>{const r=w({name:"reader",novelId:t.id,chapterId:a.id}),o=fe(t,a),s=ne(a);let c="",i="";return s<=0?c='<span class="chapter-status chapter-status--free">อ่านฟรี</span>':o?c='<span class="chapter-status chapter-status--unlocked">ปลดล็อกแล้ว</span>':(c=`<span class="chapter-status chapter-status--locked">${ur}${mi} ${s} เหรียญ</span>`,i=` data-locked-chapter data-chapter-id="${l(a.id)}"`),`
        <a class="chapter-item" href="${r}" data-link data-novel-id="${l(t.id)}"${i}>
          <div>
            <p class="chapter-item__title">ตอนที่ ${l(a.id)} ${l(a.title)}</p>
            <p class="chapter-item__sub">เผยแพร่ ${vn(a.publishedAt)}</p>
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
            ${St(t,{photoClass:"cover-lg__photo",motifClass:"cover-lg__motif"})}
          </div>
          <div class="novel-meta">
            <h1>${l(t.title)}</h1>
            <p class="novel-meta__author">โดย ${l(t.author)}</p>
            ${$n(t,{filledMain:!0})}
            <div class="novel-meta__actions">
              ${yi(t.id)}
              ${$i(t)}
            </div>
            <p class="synopsis">${Lr(t.synopsis)}</p>
          </div>
        </div>
        ${vr(t.id)}
        <section class="chapter-list" aria-labelledby="toc-heading">
          <h2 id="toc-heading">สารบัญตอน</h2>
          ${n}
        </section>
      </div>
    </main>
    ${E()}
  `}function Ni(e,t){const n=v(e),a=be(n,t);if(!n||!a||!ve(a))return Sn();document.title=`${a.title} — ${n.title}`;const r=er(),o=Ns();S(r);const s=zt(n),c=s.findIndex(z=>z.id===a.id),i=s[c-1],d=s[c+1],u=w({name:"novel",id:n.id}),p=i?w({name:"reader",novelId:n.id,chapterId:i.id}):"#",m=d?w({name:"reader",novelId:n.id,chapterId:d.id}):"#",f=ai.map(z=>`<button class="tool-btn${z===o?" is-active":""}" type="button" data-font-size="${z}" aria-pressed="${z===o}">${{16:"เล็ก",18:"กลาง",22:"ใหญ่"}[z]}</button>`).join(""),y=fe(n,a),_=ne(a),F=b(),Ce=w({name:"login",next:w({name:"reader",novelId:n.id,chapterId:a.id})});let G="";if(y)G=`<article class="chapter-body">${l(a.content)}</article>`;else{const z=F?`<button class="btn btn-primary" type="button" data-locked-chapter data-novel-id="${l(n.id)}" data-chapter-id="${l(a.id)}">ปลดล็อกด้วย ${_} เหรียญ</button>
         <p class="muted-note">ยอดคงเหลือ ${ge()} เหรียญ (${l(Nt(U()))})</p>`:`<a class="btn btn-primary btn-login-prompt" href="${Ce}" data-link>เข้าสู่ระบบเพื่อปลดล็อก</a>`;G=`
      <div class="lock-panel">
        <div class="lock-icon-lg">${ur}</div>
        <h2>ตอนนี้ถูกล็อกไว้</h2>
        ${z}
      </div>
    `}return`
    ${N()}
    <div class="reader-toolbar">
      <div class="reader-toolbar__inner">
        <div class="toolbar-group" role="group" aria-label="ขนาดตัวอักษร">
          ${f}
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
      ${G}
      <nav class="reader-nav" aria-label="ตอนก่อนหน้าและตอนถัดไป">
        <a class="nav-btn" href="${p}" ${i?`data-link data-novel-id="${l(n.id)}"${fe(n,i)?"":` data-locked-chapter data-chapter-id="${l(i.id)}"`}`:'aria-disabled="true"'}>⬅️ ตอนก่อนหน้า</a>
        <a class="nav-btn" href="${m}" ${d?`data-link data-novel-id="${l(n.id)}"${fe(n,d)?"":` data-locked-chapter data-chapter-id="${l(d.id)}"`}`:'aria-disabled="true"'}>ตอนต่อไป ➡️</a>
      </nav>
      ${vr(n.id,a.id)}
    </main>
    ${E()}
  `}function Sn(){return document.title=`ไม่พบหน้า — ${k.shortName}`,S("light"),`
    ${N()}
    <main id="main" class="page-block">
      <div class="container not-found">
        <h1>ไม่พบหน้าที่ต้องการ</h1>
        <p class="muted-note">ลิงก์นี้อาจไม่ถูกต้องหรือนิยายตัวอย่างถูกลบแล้ว</p>
        <p><a class="back-link" href="/" data-link>กลับหน้าแรก</a></p>
      </div>
    </main>
    ${E()}
  `}function S(e){document.body.classList.toggle("reader-night",e==="night")}function Ei(){if(b())return document.title=`เข้าสู่ระบบ — ${k.shortName}`,"";document.title=`เข้าสู่ระบบ — ${k.shortName}`,S("light");const t=et();return`
    ${N("login")}
    <main id="main" class="page-block">
      <div class="auth-card">
        ${kn()}
        <h1>เข้าสู่ระบบ</h1>
        ${new URLSearchParams(window.location.search).get("reset")==="1"?'<p class="form-success">ตั้งรหัสผ่านใหม่แล้ว กรุณาเข้าสู่ระบบด้วยรหัสผ่านใหม่</p>':""}
        ${br({next:t})}
      </div>
    </main>
    ${E()}
  `}function xi(){if(b())return document.title=`สมัครสมาชิก — ${k.shortName}`,"";document.title=`สมัครสมาชิก — ${k.shortName}`,S("light");const e=et(),t=w({name:"login",next:e==="/"?void 0:e});return`
    ${N("signup")}
    <main id="main" class="page-block">
      <div class="auth-card">
        ${kn()}
        <h1>สมัครสมาชิก</h1>
        ${_t()}
        <form class="auth-form" data-signup-form novalidate>
          <div class="field">
            <label for="signup-name">ชื่อที่แสดง</label>
            <input id="signup-name" name="displayName" type="text" autocomplete="name" required />
            ${h("displayName")}
          </div>
          <div class="field">
            <label for="signup-email">อีเมล</label>
            <input id="signup-email" name="email" type="email" autocomplete="email" required />
            ${h("email")}
          </div>
          <div class="field">
            <label for="signup-password">รหัสผ่าน</label>
            <input id="signup-password" name="password" type="password" autocomplete="new-password" minlength="8" required />
            ${h("password")}
          </div>
          <div class="field">
            <label for="signup-confirm">ยืนยันรหัสผ่าน</label>
            <input id="signup-confirm" name="confirm" type="password" autocomplete="new-password" minlength="8" required />
            ${h("confirm")}
          </div>
          <div class="field field--check">
            <label class="check-label">
              <input id="signup-terms" name="acceptTerms" type="checkbox" required />
              <span>ข้าพเจ้ายอมรับ <a href="/terms" data-link>ข้อกำหนดการใช้งาน</a> และ <a href="/privacy" data-link>นโยบายความเป็นส่วนตัว</a> รวมทั้งยินยอมให้เก็บและใช้ข้อมูลส่วนบุคคลตามที่ระบุในนโยบายดังกล่าว</span>
            </label>
            ${h("acceptTerms")}
          </div>
          <p class="field-error" data-error-for="form" hidden></p>
          <button class="btn btn-primary btn-block" type="submit">สมัครสมาชิก</button>
        </form>
        ${gr("สมัครด้วย Google")}
        <p class="auth-switch">มีบัญชีอยู่แล้ว? <a href="${t}" data-link>เข้าสู่ระบบ</a></p>
      </div>
    </main>
    ${E()}
  `}function Ii(){const e=b();if(!e)return document.title=`ชั้นหนังสือของฉัน — ${k.shortName}`,"";document.title=`ชั้นหนังสือของฉัน — ${k.shortName}`,S("light");const t=No();let n="";return t.length?n=`<div class="bookshelf-grid">${t.map(a=>Ti(a)).join("")}</div>`:n='<p class="empty-state">ยังไม่มีเรื่องในชั้นหนังสือ ลองกดเพิ่มเข้าชั้นจากหน้านิยายได้เลย</p>',`
    ${N("bookshelf")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ชั้นหนังสือของฉัน</h1>
        <p class="muted-note">สวัสดีคุณ ${l(e.displayName)} — เรื่องที่คุณเพิ่มเข้าชั้นจะถูกรวบรวมที่นี่</p>
        ${n}
      </div>
    </main>
    ${E()}
  `}function Ti(e){const t=v(e.novelId);if(!t)return"";const n=w({name:"novel",id:t.id}),a=zt(t),r=a[0];let o=r?`<p class="bookshelf-continue">ยังไม่เริ่มอ่าน · <a href="${w({name:"reader",novelId:t.id,chapterId:r.id})}" data-link data-novel-id="${l(t.id)}">เริ่มอ่านตอนแรก</a></p>`:'<p class="bookshelf-continue">ยังไม่มีตอนที่เผยแพร่</p>';if(e.progress){const s=a.find(c=>c.id===e.progress.chapterId)||r;s&&(o=`<p class="bookshelf-continue">อ่านต่อ · <a href="${w({name:"reader",novelId:t.id,chapterId:s.id})}" data-link data-novel-id="${l(t.id)}">ตอนที่ ${l(s.id)} ${l(s.title)}</a></p>`)}return`
    <article class="novel-card novel-card--shelf">
      <a class="novel-card__link" href="${n}" data-link data-novel-id="${l(t.id)}">
        <div class="novel-card__cover" style="${Le(t.cover)}" aria-hidden="true">
          ${St(t,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
        </div>
        <div class="novel-card__body">
          <h3 class="novel-card__title">${l(t.title)}</h3>
          <p class="novel-card__author">${l(t.author)}</p>
          ${$n(t,{maxSecondary:2})}
          <p class="novel-card__teaser">${l(t.teaser)}</p>
        </div>
      </a>
      ${o}
    </article>
  `}function Ht(e,t=""){return e?.avatar?`<img${t?` class="${t}"`:""} src="${l(e.avatar)}" alt="">`:l((e?.displayName||"").trim().charAt(0).toUpperCase()||"น")}function Di(){const e=b();if(!e)return document.title=`แก้ไขโปรไฟล์ — ${k.shortName}`,"";document.title=`แก้ไขโปรไฟล์ — ${k.shortName}`,S("light");const t=e.avatar?"เปลี่ยนรูปโปรไฟล์":"อัปโหลดรูปโปรไฟล์";let n=!1;try{n=sessionStorage.getItem("banNiyai_profileSaved")==="1",n&&sessionStorage.removeItem("banNiyai_profileSaved")}catch{}return`
    ${N("profile")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">แก้ไขโปรไฟล์</h1>
        <form class="profile-form" data-profile-form>
          <div class="profile-form__avatar">
            <span class="avatar avatar--profile" data-avatar-preview aria-hidden="true">${Ht(e)}</span>
            <div class="profile-form__avatar-actions">
              <button class="btn" type="button" data-avatar-pick>${t}</button>
              <input type="file" accept="image/*" hidden data-avatar-file />
              <p class="muted-note">ไฟล์ภาพไม่เกิน 2MB</p>
              ${h("avatar")}
            </div>
          </div>
          <label>
            ชื่อที่แสดง
            <input name="displayName" type="text" maxlength="40" value="${l(e.displayName)}" required />
          </label>
          ${h("displayName")}
          ${h("form")}
          <p class="profile-saved" data-profile-saved${n?"":" hidden"}>บันทึกแล้ว</p>
          <button class="btn btn-primary" type="submit">บันทึก</button>
        </form>
      </div>
    </main>
    ${E()}
  `}function qi(){const e=document.querySelector("[data-profile-form]");if(!e)return;const t=e.querySelector("[data-avatar-file]"),n=e.querySelector("[data-avatar-preview]"),a=e.querySelector("[data-avatar-pick]");let r;const o=(c,i)=>{const d=e.querySelector(`[data-error-for="${c}"]`);d&&(i?(d.hidden=!1,d.textContent=i):(d.hidden=!0,d.textContent=""))},s=()=>{e.querySelectorAll("[data-error-for]").forEach(c=>{c.hidden=!0,c.textContent=""})};a?.addEventListener("click",()=>t?.click()),t?.addEventListener("change",async()=>{const c=t.files?.[0];if(o("avatar",""),!c)return;const i=await wt(c,{maxSide:512,maxChars:15e4,errorMessage:"ไฟล์ภาพต้องไม่เกิน 2MB"});if(t.value="",!i.ok){o("avatar",i.error);return}r=i.dataUrl,n&&(n.innerHTML=`<img src="${r}" alt="">`),a&&(a.textContent="เปลี่ยนรูปโปรไฟล์")}),e.addEventListener("submit",c=>{c.preventDefault(),s();const i=e.querySelector("[data-profile-saved]");i&&(i.hidden=!0);const u={displayName:new FormData(e).get("displayName")};r!==void 0&&(u.avatar=r);let p;try{p=$o(u)}catch{o("avatar",K);return}if(!p.ok){Object.entries(p.errors||{}).forEach(([m,f])=>o(m,f));return}try{sessionStorage.setItem("banNiyai_profileSaved","1")}catch{}g("/profile",{replace:!0})})}function $r(e){return`<p class="empty-state">${l(e)}</p>`}function Li(e){const t=e.filter(a=>a.type==="topup");return t.length?`
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
      <td data-label="วันที่">${R(vn(a.createdAt))}</td>
      <td data-label="แพ็ก">${l(r)}</td>
      <td class="purchase-table__num" data-label="เหรียญที่ได้รับ">${l(o)}</td>
    </tr>`}).join("")}</tbody>
      </table>
    </div>
  `:$r("ยังไม่มีรายการเติมเหรียญ")}function Ci(e){const t=e.filter(a=>a.type==="unlock");return t.length?`
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
      <td data-label="วันที่">${R(vn(a.createdAt))}</td>
      <td data-label="นิยาย">${l(s)}</td>
      <td data-label="ตอน">${l(c)}</td>
      <td class="purchase-table__num" data-label="เหรียญ">${l(i)}</td>
    </tr>`}).join("")}</tbody>
      </table>
    </div>
  `:$r("ยังไม่มีรายการปลดล็อกตอน")}function Bi(){if(!b())return document.title=`ประวัติการซื้อ — ${k.shortName}`,"";document.title=`ประวัติการซื้อ — ${k.shortName}`,S("light");const t=yt();return`
    ${N("purchases")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ประวัติการซื้อ</h1>
        <section class="purchase-section">
          <h2>รายงานการเติมเหรียญ</h2>
          ${Li(t)}
        </section>
        <section class="purchase-section">
          <h2>รายงานการปลดล็อกตอน</h2>
          ${Ci(t)}
        </section>
      </div>
    </main>
    ${E()}
  `}function kr(){return'<p class="legal-draft-banner">เอกสารนี้เป็นร่างสำหรับต้นแบบเว็บ ยังไม่ได้ผ่านการตรวจสอบทางกฎหมาย และยังไม่มีผลใช้บังคับจริง</p>'}function Pi(){return document.title=`ข้อกำหนดการใช้งาน (ร่าง) — ${k.shortName}`,S("light"),`
    ${N()}
    <main id="main" class="page-block">
      <div class="container legal-page">
        <h1>ข้อกำหนดการใช้งาน</h1>
        ${kr()}
        <p>บ้านนิยายนี้เป็นบ้านหลังเล็กของนักเขียนนามปากกา ${l(k.penNames.join(" และ "))} เว็บนี้ยังอยู่ในขั้นต้นแบบทดลอง ไม่ใช่บริการที่เปิดให้ใช้จริง และยังไม่มีการรับชำระเงิน</p>
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
    ${E()}
  `}function Ui(){return document.title=`นโยบายความเป็นส่วนตัว (ร่าง) — ${k.shortName}`,S("light"),`
    ${N()}
    <main id="main" class="page-block">
      <div class="container legal-page">
        <h1>นโยบายความเป็นส่วนตัว</h1>
        ${kr()}
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
    ${E()}
  `}function wr(e){e.querySelectorAll("[data-error-for]").forEach(t=>{t.hidden=!0,t.textContent=""})}function A(e,t){wr(e),Object.entries(t).forEach(([n,a])=>{const r=e.querySelector(`[data-error-for="${n}"]`);r&&(r.textContent=a,r.hidden=!1)})}function Oi(e){const t=document.querySelector(".modal-backdrop");t&&t.remove();const n=w({name:"login",next:e}),a=w({name:"signup",next:e}),r=document.createElement("div");r.className="modal-backdrop",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby","login-prompt-title"),r.innerHTML=`
    <div class="modal">
      <h2 id="login-prompt-title">กรุณาเข้าสู่ระบบ</h2>
      <p>ต้องเข้าสู่ระบบก่อนจึงจะเพิ่มเรื่องเข้าชั้นหนังสือได้</p>
      <div class="modal__actions">
        <a class="btn btn-primary btn-login-prompt" href="${n}" data-link>เข้าสู่ระบบ</a>
        <a class="btn btn-ghost" href="${a}" data-link>สมัครสมาชิก</a>
        <button class="btn btn-ghost" type="button" data-modal-close>ปิด</button>
      </div>
    </div>
  `,document.body.appendChild(r),C(r),r.querySelector("[data-modal-close]").addEventListener("click",()=>r.remove()),r.addEventListener("click",o=>{o.target===r&&r.remove()})}function Ri(){return document.title=`ลืมรหัสผ่าน — ${k.shortName}`,S("light"),`
    ${N("login")}
    <main id="main" class="page-block">
      <div class="auth-card">
        <h1>ลืมรหัสผ่าน</h1>
        ${_t()}
        <form class="auth-form" data-forgot-form novalidate>
          <div class="field">
            <label for="forgot-email">อีเมล</label>
            <input id="forgot-email" name="email" type="email" autocomplete="email" required />
            ${h("email")}
          </div>
          <p class="field-error" data-error-for="form" hidden></p>
          <button class="btn btn-primary btn-block" type="submit">ส่งลิงก์ตั้งรหัสผ่านใหม่</button>
        </form>
        <div class="reset-confirm" data-forgot-confirm hidden></div>
        <p class="auth-switch"><a href="/login" data-link>กลับไปเข้าสู่ระบบ</a></p>
      </div>
    </main>
    ${E()}
  `}function Mi(){document.title=`ตั้งรหัสผ่านใหม่ — ${k.shortName}`,S("light");const e=new URLSearchParams(window.location.search).get("token")||"",t=To(e);let n="";return t?n=`
      <form class="auth-form" data-reset-form novalidate>
        <input type="hidden" name="token" value="${l(e)}" />
        <div class="field">
          <label for="reset-password">รหัสผ่านใหม่</label>
          <input id="reset-password" name="password" type="password" autocomplete="new-password" minlength="8" required />
          ${h("password")}
        </div>
        <div class="field">
          <label for="reset-confirm">ยืนยันรหัสผ่านใหม่</label>
          <input id="reset-confirm" name="confirm" type="password" autocomplete="new-password" minlength="8" required />
          ${h("confirm")}
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
        ${_t()}
        ${n}
      </div>
    </main>
    ${E()}
  `}function Fi(){document.title=`หลังบ้านนักเขียน — ${k.shortName}`,S("light");const e=b();if(!ct(e))return`
      ${N("admin")}
      <main id="main" class="page-block">
        <div class="container admin-gate">
          <h1>หลังบ้านนักเขียน</h1>
          <p>หน้านี้สำหรับนักเขียนเท่านั้น ในต้นแบบใช้บัญชีนักเขียนตัวอย่างด้านล่าง</p>
          <p class="demo-author-note">อีเมล <strong>${l(Q.email)}</strong><br />รหัสผ่าน <strong>${l(Q.password)}</strong></p>
          <p><a class="btn btn-primary" href="${w({name:"login",next:"/admin"})}" data-link>${e?"บัญชีนี้ไม่ใช่นักเขียน — เข้าสู่ระบบด้วยบัญชีตัวอย่าง":"เข้าสู่ระบบด้วยบัญชีนักเขียนตัวอย่าง"}</a></p>
        </div>
      </main>
      ${E()}
    `;B(),M();const t=new URLSearchParams(window.location.search).get("tab"),n=["promos","events","sales","reports"].includes(t)?t:"studio",a=n==="promos"?Fe():n==="events"?Mr():n==="sales"?rl():n==="reports"?_c(new URLSearchParams(window.location.search).get("report")||""):Yc(),r=Ja().length;return`
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
    ${E()}
  `}function Sr(){const e=x();return e.map((t,n)=>{const a=n===0?" disabled":"",r=n===e.length-1?" disabled":"";return`
        <li class="category-order__item" data-category-order-id="${l(t.id)}">
          <span class="category-order__name">${l(t.name)}</span>
          <span class="category-order__actions">
            <button class="category-order__btn" type="button" data-move-category="${l(t.id)}" data-dir="-1" aria-label="เลื่อน ${l(t.name)} ขึ้น"${a}>↑</button>
            <button class="category-order__btn" type="button" data-move-category="${l(t.id)}" data-dir="1" aria-label="เลื่อน ${l(t.name)} ลง"${r}>↓</button>
          </span>
        </li>`}).join("")}function Hn(e){const t=e.querySelector("[data-category-order]");t&&(t.innerHTML=Sr(),C(t));const n=e.querySelector("[data-main-row]");if(!n)return;const a=new Set([...n.querySelectorAll("[data-main-tag].is-on")].map(r=>r.dataset.mainTag));n.innerHTML=x().map(r=>{const o=a.has(r.id);return`<button class="admin-chip${o?" is-on":""}" type="button" data-main-tag="${l(r.id)}" aria-pressed="${o}">${l(r.name)}</button>`}).join(""),C(n)}function Hi(e,{showHeading:t=!0,showSave:n=!0,idSuffix:a}={}){const r=a||e.id,o=x().map(u=>{const p=(e.tags||[]).includes(u.id);return`<button class="admin-chip${p?" is-on":""}" type="button" data-main-tag="${l(u.id)}" aria-pressed="${p}">${l(u.name)}</button>`}).join(""),s=(e.secondaryTags||[]).map(u=>`
        <span class="admin-tag" data-secondary-name="${l(u)}">
          ${l(u)}
          <button type="button" data-remove-tag="${l(u)}" aria-label="ลบแท็ก ${l(u)}">×</button>
        </span>`).join(""),c=$e().map(u=>{const p=(e.secondaryTags||[]).some(m=>m.toLowerCase()===u.toLowerCase());return`<button class="admin-chip admin-chip--ghost${p?" is-on":""}" type="button" data-suggest-tag="${l(u)}" aria-pressed="${p}">${l(u)}</button>`}).join(""),i=t?`<h2>${l(e.title)}</h2>
      <p class="muted-note">นามปากกา ${l(e.author)}</p>`:"",d=n?`<div class="admin-save-row">
        <button class="btn btn-primary" type="button" data-save-tags>บันทึกแท็ก</button>
        <p class="admin-status" data-save-status hidden></p>
      </div>`:`${h("tags")}`;return`
    <section class="admin-novel" data-admin-novel="${l(e.id)}">
      ${i}
      <h3>หมวดหลัก</h3>
      <div class="admin-chip-row" data-main-row>${o}</div>
      <div class="list-add" data-category-add>
        <label class="admin-label" for="new-category-${l(r)}">เพิ่มหมวดใหม่</label>
        <div class="list-add__row">
          <input class="admin-new-tag" id="new-category-${l(r)}" type="text" maxlength="30" data-new-category placeholder="เช่น นิยายแฟนตาซี" />
          <button class="btn btn-ghost" type="button" data-add-category>เพิ่ม</button>
        </div>
        <p class="field-error" data-category-add-error hidden></p>
        <p class="admin-label">เรียงลำดับหมวดในหน้าแรก</p>
        <ul class="category-order" data-category-order>${Sr()}</ul>
      </div>
      <h3>แท็กรอง</h3>
      <div class="admin-selected" data-secondary-row>${s||'<span class="muted-note">ยังไม่มีแท็กรอง</span>'}</div>
      <p class="admin-label">เลือกจากรายการแนะนำ</p>
      <div class="admin-chip-row" data-suggest-row>${c}</div>
      <label class="admin-label" for="new-tag-${l(r)}">พิมพ์แท็กใหม่แล้วกด Enter</label>
      <input class="admin-new-tag" id="new-tag-${l(r)}" type="text" maxlength="30" data-new-tag placeholder="เช่น รุ่นพี่รุ่นน้อง" />
      ${d}
    </section>
  `}function se(e){return[...e.querySelectorAll("[data-secondary-name]")].map(t=>t.dataset.secondaryName)}function jt(e,t){const n=e.querySelector("[data-secondary-row]");if(!t.length){n.innerHTML='<span class="muted-note">ยังไม่มีแท็กรอง</span>';return}n.innerHTML=t.map(a=>`
        <span class="admin-tag" data-secondary-name="${l(a)}">
          ${l(a)}
          <button type="button" data-remove-tag="${l(a)}" aria-label="ลบแท็ก ${l(a)}">×</button>
        </span>`).join("")}function jn(e,t){const n=new Set(t.map(a=>a.toLowerCase()));e.querySelectorAll("[data-suggest-tag]").forEach(a=>{const r=n.has(a.dataset.suggestTag.toLowerCase());a.classList.toggle("is-on",r),a.setAttribute("aria-pressed",String(r))})}function Kn(e,t){const n=Ne(t);if(!n||x().some(r=>r.name===n))return;const a=se(e);a.some(r=>r.toLowerCase()===n.toLowerCase())||(a.push(n),jt(e,a),Gt(n),Ki())}function ji(e){return $e().map(t=>{const n=e.some(a=>a.toLowerCase()===t.toLowerCase());return`<button class="admin-chip admin-chip--ghost${n?" is-on":""}" type="button" data-suggest-tag="${l(t)}" aria-pressed="${n}">${l(t)}</button>`}).join("")}function Ki(){document.querySelectorAll("[data-admin-novel]").forEach(e=>{const t=e.querySelector("[data-suggest-row]");t&&(t.innerHTML=ji(se(e)))})}function Vi(){document.querySelectorAll("[data-admin-novel]").forEach(e=>{e.addEventListener("click",c=>{const i=c.target.closest("[data-main-tag]");if(i&&e.contains(i)){i.classList.toggle("is-on"),i.setAttribute("aria-pressed",String(i.classList.contains("is-on")));return}const d=c.target.closest("[data-suggest-tag]");if(d&&e.contains(d)){const p=d.dataset.suggestTag,m=se(e);if(m.some(f=>f.toLowerCase()===p.toLowerCase()))jt(e,m.filter(f=>f.toLowerCase()!==p.toLowerCase()));else{Kn(e,p);return}jn(e,se(e));return}const u=c.target.closest("[data-remove-tag]");if(u&&e.contains(u)){const p=u.dataset.removeTag,m=se(e).filter(f=>f.toLowerCase()!==p.toLowerCase());jt(e,m),jn(e,m)}});const t=e.querySelector("[data-new-tag]");t&&t.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),Kn(e,t.value),t.value="")});const n=e.querySelector("[data-new-category]"),a=e.querySelector("[data-category-add-error]"),r=c=>{a&&(a.textContent=c||"",a.hidden=!c)},o=()=>{if(!n)return;let c;try{c=Gr(n.value)}catch{r(K);return}if(!c.ok){r(c.error);return}r(""),n.value="";const i=e.querySelector("[data-main-row]");if(i&&![...i.querySelectorAll("[data-main-tag].is-on")].map(u=>u.dataset.mainTag).includes(c.category.id)){const u=document.createElement("button");u.className="admin-chip is-on",u.type="button",u.dataset.mainTag=c.category.id,u.setAttribute("aria-pressed","true"),u.textContent=c.category.name,i.append(u)}Hn(e)};e.querySelector("[data-add-category]")?.addEventListener("click",o),n?.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),o())}),e.querySelector("[data-category-order]")?.addEventListener("click",c=>{const i=c.target.closest("[data-move-category]");if(!i||!e.contains(i)||i.disabled)return;let d;try{d=Jr(i.dataset.moveCategory,i.dataset.dir)}catch{r(K);return}d.ok&&Hn(e)});const s=e.querySelector("[data-save-tags]");s&&s.addEventListener("click",()=>{const c=[...e.querySelectorAll("[data-main-tag].is-on")].map(u=>u.dataset.mainTag),i=eo(e.dataset.adminNovel,{tags:c,secondaryTags:se(e)}),d=e.querySelector("[data-save-status]");d&&(d.hidden=!1,i.ok?(d.textContent="บันทึกแท็กแล้ว",d.classList.remove("is-error")):(d.textContent=i.error||"บันทึกไม่สำเร็จ",d.classList.add("is-error")))})})}function Yi(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?"":new Intl.DateTimeFormat("sv-SE",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(t).replace(" ","T")}function Ji(e){if(!e)return"";const t=new Date(`${e}:00+07:00`);return Number.isNaN(t.getTime())?"":t.toISOString()}function Zi(e){const t=Yi(e);if(!t)return{date:"",time:""};const[n,a=""]=t.split("T");return{date:n,time:a}}function _n(e,t){if(!e)return"";const n=String(t||"00:00").slice(0,5);return Ji(`${e}T${n}`)}function te(e,t){return _n(e.get(`${t}Date`),e.get(`${t}Time`))}function _r(e,t){const n=_n(e,t||"00:00");return n?An(new Date(n)):""}function Ar(e){if(!e)return"เลือกวันที่";const t=_n(e,"00:00");return t?`${Er(new Date(t))} ${Wi(new Date(t))}`:"เลือกวันที่"}function Nr(e){if(!e)return"เลือกเวลา";const[t="",n=""]=String(e).split(":");return!t||!n?"เลือกเวลา":`${t}:${n} น.`}function ae({id:e,name:t,value:n="",required:a=!1}){const{date:r,time:o}=Zi(n),s=_r(r,o),c=a?" required":"";return`
    <div class="datetime-field" data-datetime-field>
      <div class="datetime-field__inputs">
        <label class="datetime-field__sub" for="${l(e)}-date">วันที่
          <span class="datetime-field__control"${r?"":' data-empty="true"'}>
            <input id="${l(e)}-date" name="${l(t)}Date" type="date" lang="th"${c} value="${l(r)}" data-datetime-date />
            <span class="datetime-field__hint" data-date-hint aria-hidden="true">${l(Ar(r))}</span>
          </span>
        </label>
        <label class="datetime-field__sub" for="${l(e)}-time">เวลา
          <span class="datetime-field__control"${o?"":' data-empty="true"'}>
            <input id="${l(e)}-time" name="${l(t)}Time" type="time" lang="th"${c} value="${l(o)}" data-datetime-time />
            <span class="datetime-field__hint" data-time-hint aria-hidden="true">${l(Nr(o))}</span>
          </span>
        </label>
      </div>
      <p class="datetime-field__preview" data-datetime-preview${s?"":" hidden"}>${s?l(s):""}</p>
    </div>`}function ke(e=document){e.querySelectorAll("[data-datetime-field]").forEach(t=>{const n=t.querySelector("[data-datetime-date]"),a=t.querySelector("[data-datetime-time]"),r=t.querySelector("[data-datetime-preview]"),o=t.querySelector("[data-date-hint]"),s=t.querySelector("[data-time-hint]");if(!n||!r)return;const c=(d,u,p)=>{if(!d||!u)return;const m=d.closest(".datetime-field__control");u.textContent=p(d.value),m&&m.toggleAttribute("data-empty",!d.value)},i=()=>{const d=_r(n.value,a?.value||"00:00");r.textContent=d,r.hidden=!d,c(n,o,Ar),c(a,s,Nr)};n.addEventListener("input",i),n.addEventListener("change",i),a?.addEventListener("input",i),a?.addEventListener("change",i),i()})}function Er(e){return new Intl.DateTimeFormat("th-TH",{day:"numeric",month:"short",timeZone:"Asia/Bangkok"}).format(e)}function At(e){const t=Number(new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric"}).format(e).slice(0,4));return String((t+543)%100).padStart(2,"0")}function Wi(e){return At(e)}function le(e){return`${Er(e)} ${At(e)}`}function xr(e,t=1,n=1){return new Date(`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}T00:00:00+07:00`)}function Gi(e,t){const n=xr(e,t);return Number.isNaN(n.getTime())?"":`${new Intl.DateTimeFormat("th-TH",{month:"short",timeZone:"Asia/Bangkok"}).format(n)} ${At(n)}`}function zi(e){const t=xr(e,1);return Number.isNaN(t.getTime())?"":`ปี ${At(t)}`}function Xi(e){return new Intl.DateTimeFormat("th-TH",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"Asia/Bangkok"}).format(e).replace(/\s*น\.?\s*$/u,"")}function An(e){return`${le(e)} ${Xi(e)}`}function R(e){const t=String(e||"").trim();return t?`<span class="date-part" data-no-wbr>${l(t)}</span>`:""}function Ir(e,t){return`${R(le(e))} ${R("ถึง")} ${R(le(t))}`}function Nn(e){if(!e?.startAt||!e?.endAt)return"";const t=new Date(e.startAt),n=new Date(e.endAt);return Number.isNaN(t.getTime())||Number.isNaN(n.getTime())?"":Ir(t,n)}function Tr(e){const t=new Date(e);return Number.isNaN(t.getTime())?"":R(le(t))}function Dr(e,t){const n=new Date(e),a=new Date(t);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?"":Ir(n,a)}const Qi="ม\\.ค\\.|ก\\.พ\\.|มี\\.ค\\.|เม\\.ย\\.|พ\\.ค\\.|มิ\\.ย\\.|ก\\.ค\\.|ส\\.ค\\.|ก\\.ย\\.|ต\\.ค\\.|พ\\.ย\\.|ธ\\.ค\\.",ec=new RegExp(`(\\d{1,2}\\s*(?:${Qi})(?:\\s+\\d{2,4})?)|(พ\\.ศ\\.\\s*\\d{2,4})`,"g");function tc(e){const t=String(e||"");if(!t)return"";let n="",a=0;for(const r of t.matchAll(ec))n+=l(t.slice(a,r.index)),n+=R(r[0]),a=r.index+r[0].length;return n+=l(t.slice(a)),n}function $(e){return`<p class="field-hint">${l(e)}</p>`}function nc(e){const t=e.bonusType==="fixed"?`${e.bonusValue} เหรียญ`:`${e.bonusValue}%`;let n;e.packageIds==="all"?n="เติมทุกแพ็ก":n=`เติมแพ็ก ${(e.packageIds||[]).map(s=>{const c=De.find(i=>i.id===s);return c?`${c.thb} บาท`:s}).join(" ")}`;const a=[l(`${n} รับเพิ่ม ${t}`)],r=Dr(e.startAt,e.endAt);return r&&a.push(r),e.firstTopUpOnly&&a.push(l("เฉพาะเติมครั้งแรก")),e.bonusExpiryDays&&a.push(l(`โบนัสใช้ได้ ${e.bonusExpiryDays} วัน`)),a.join(" · ")}function ac(e){const t=[l(`${e.code} ให้ ${e.coins} เหรียญ`),l(`ใช้แล้ว ${e.usedBy.length}/${e.maxUses}`)];return e.expiresAt&&t.push(`${l("หมดอายุ")} ${Tr(e.expiresAt)}`),e.bonusExpiryDays&&t.push(l(`โบนัสใช้ได้ ${e.bonusExpiryDays} วัน`)),t.join(" · ")}function rc(e){return e.bonus?`${e.thb} บาท · เหรียญเพิ่มของแพ็กนี้ ${e.bonus}`:`${e.thb} บาท`}const oc="input, textarea, select, option, script, style, code, pre, kbd, samp, [data-no-wbr], .thai-nowrap";function qr(e){return String(e||"").split(/(\s+)/).map(t=>t?/^\s+$/.test(t)?t:`<span class="thai-nowrap">${l(t)}</span>`:"").join("")}function Lr(e){return String(e??"").split(/\r?\n/).map(t=>sc(t)).join("<br>")}function sc(e){return e?ic(e).map(t=>/^\s+$/.test(t)?t:`<span class="thai-nowrap">${l(t)}</span>`).join(""):""}function ic(e){const t=String(e??"");if(!t)return[];if(typeof Intl>"u"||!Intl.Segmenter)return t.split(/(\s+)/).filter(Boolean);const n=new Intl.Segmenter("th",{granularity:"word"}),a=[];for(const{segment:i}of n.segment(t))i&&a.push(i);const r=/^[(\[{«“‘"']+$/u,o=/^[\p{P}\p{S}]+$/u,s=[];for(const i of a){if(/^\s+$/.test(i)){s.push(i);continue}if(o.test(i)&&!r.test(i)&&s.length&&!/^\s+$/.test(s[s.length-1])){s[s.length-1]+=i;continue}s.push(i)}const c=[];for(let i=0;i<s.length;i+=1){const d=s[i];if(o.test(d)&&r.test(d)&&i+1<s.length&&!/^\s+$/.test(s[i+1])){s[i+1]=d+s[i+1];continue}c.push(d)}return c}const cc="หมายเหตุ: กดรับครบ 7 ดอก แลกได้ 7 เหรียญ (ให้แลกได้เฉพาะนักอ่านที่เก็บครบเท่านั้น)",lc="หมายเหตุ: เก็บกุญแจสีรุ้ง ครบ 7 ดอก แลกได้ 20 เหรียญ ตั้งแต่วันที่ 27 ธ.ค. ถึง 2 ม.ค. 70",dc="(หากเก็บไม่ครบทั้ง 7 วัน จะไม่สามารถสะสมไว้แลกรับเหรียญในกิจกรรมถัดไปได้)",uc=["แลกรับเหรียญ","20 เหรียญ","7 เหรียญ","7 ดอก","7 วัน","27 ธ.ค.","2 ม.ค. 70"];function xt(e){const t=String(e??""),n=uc.slice().sort((o,s)=>s.length-o.length),a=n.map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));return(a.length?t.split(new RegExp(`(${a.join("|")})`,"g")):[t]).flatMap(o=>o?n.includes(o)?[`<span class="thai-nowrap">${l(o)}</span>`]:o.split(/(\s+)/).filter(Boolean).map(s=>/^\s+$/.test(s)?s:`<span class="thai-nowrap">${l(s)}</span>`):[]).join("")}function Vn(e){let t=e.parentElement;for(;t;){const n=getComputedStyle(t).display;if(n!=="inline"&&n!=="contents"&&n!=="inline-block")return t.clientWidth;t=t.parentElement}return 0}function Yn(e){const t=e.style.maxWidth,n=e.style.whiteSpace,a=e.style.overflow;e.style.maxWidth="none",e.style.whiteSpace="nowrap",e.style.overflow="hidden";const r=e.scrollWidth;return e.style.maxWidth=t,e.style.whiteSpace=n,e.style.overflow=a,r}function pc(e){const t=e.textContent||"";if(!t||typeof Intl>"u"||!Intl.Segmenter)return!1;const n=new Intl.Segmenter("th",{granularity:"word"}),a=[];for(const{segment:u}of n.segment(t))u&&a.push(u);const r=/^[(\[{«“‘"'<<]+$/u,o=/^[\p{P}\p{S}]+$/u,s=[];for(const u of a){if(/^\s+$/.test(u)){s.push(u);continue}if(o.test(u)&&!r.test(u)&&s.length&&!/^\s+$/.test(s[s.length-1])){s[s.length-1]+=u;continue}s.push(u)}const c=[];for(let u=0;u<s.length;u+=1){const p=s[u];if(o.test(p)&&r.test(p)&&u+1<s.length&&!/^\s+$/.test(s[u+1])){s[u+1]=p+s[u+1];continue}c.push(p)}if(c.filter(u=>!/^\s+$/.test(u)).length<=1)return!1;const d=document.createDocumentFragment();for(const u of c){if(/^\s+$/.test(u)){d.appendChild(document.createTextNode(u));continue}const p=document.createElement("span");p.className="thai-nowrap",p.dataset.thaiSplit="1",p.textContent=u,d.appendChild(p)}return e.replaceWith(d),!0}function Cr(e){if(!e)return;const t=[...e.querySelectorAll(".thai-nowrap")];for(const n of t){if(!n.isConnected)continue;const a=Vn(n);if(!(a>0))continue;if(Yn(n)<=a+1){n.classList.remove("thai-nowrap--overflow");continue}if(n.dataset.thaiSplit==="1"){n.classList.add("thai-nowrap--overflow");continue}pc(n)||n.classList.add("thai-nowrap--overflow")}e.querySelectorAll('.thai-nowrap[data-thai-split="1"]').forEach(n=>{const a=Vn(n);if(!(a>0))return;const r=Yn(n);n.classList.toggle("thai-nowrap--overflow",r>a+1)})}function Kt(){if(Kt.bound)return;Kt.bound=!0;let e=0;window.addEventListener("resize",()=>{clearTimeout(e),e=window.setTimeout(()=>{const t=document.getElementById("app")||document.body;Cr(t)},100)})}function C(e=document.getElementById("app")||document.body){if(!e)return;Kt();const t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode(r){const o=r.parentElement;return!o||o.closest(oc)||!r.nodeValue||!/[\u0E00-\u0E7F]/.test(r.nodeValue)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n=[];for(;t.nextNode();)n.push(t.currentNode);for(const r of n){const o=r.nodeValue.split(/(\s+)/),s=document.createDocumentFragment();for(const c of o){if(!c)continue;if(/^\s+$/.test(c)){s.appendChild(document.createTextNode(c));continue}const i=document.createElement("span");i.className="thai-nowrap",i.textContent=c,s.appendChild(i)}r.parentNode.replaceChild(s,r)}const a=()=>Cr(e);a(),document.fonts?.ready&&document.fonts.ready.then(a)}const mc='<svg class="key-icon__svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 14a5.5 5.5 0 1 1 5.13-7.5H22v3h-2v2h-2v2h-2.37A5.5 5.5 0 0 1 8.5 14Zm0-8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/></svg>',fc={silver:"/images/keys/key-silver.webp",rainbow:"/images/keys/key-rainbow.webp"};function hc(e,t,n=""){if(n)return`<span class="key-icon key-icon--img key-icon--custom${t?" is-filled":""}"><img src="${l(n)}" alt="" width="32" height="32" /></span>`;const a=fc[e];return a?`<span class="key-icon key-icon--img key-icon--${e}${t?" is-filled":""}"><img src="${a}" alt="" width="32" height="32" /></span>`:`<span class="key-icon key-icon--${e}${t?" is-filled":""}">${mc}</span>`}function It({keys:e=0,need:t=7,name:n="กุญแจเงิน",style:a="silver",image:r=""}={}){const o=Math.max(1,Number(t)||7),s=Math.max(0,Number(e)||0),c=Math.min(s,o),i=["rainbow","gold","rose"].includes(a)?a:"silver",d=Array.from({length:o},(u,p)=>hc(i,p<c,r)).join("");return`
    <p class="key-progress" aria-label="${l(n)} ${s}/${o}">
      <span class="key-row">${d}</span>
      <span class="key-progress__count">${l(n)} ${s}/${o}</span>
    </p>
  `}function Nt(e){return`เหรียญ ${e.purchased} / โบนัส ${e.bonus}`}function Jn(e){return e?String(e):""}function gc(){const e=P(),t=e.signup,n=e.checkin,a=e.firstTopUp;return`
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
              ${h("coins")}
            </div>
            <div class="field">
              <label for="base-signup-expiry">อายุเหรียญโบนัส (วัน)</label>
              ${$("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
              <input id="base-signup-expiry" name="bonusExpiryDays" type="number" min="1" step="1" placeholder="ไม่บังคับ" value="${l(Jn(t.bonusExpiryDays))}" />
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
              ${h("keysPerDay")}
            </div>
            <div class="field">
              <label for="base-checkin-keys-need">จำนวนกุญแจที่ต้องครบก่อนแลก</label>
              ${$("ต้องมีกุญแจเงินครบจำนวนนี้จึงจะแลกเหรียญได้")}
              <input id="base-checkin-keys-need" name="keysRequired" type="number" min="1" step="1" required value="${l(String(n.keysRequired||n.keysPerCoin))}" />
              ${h("keysRequired")}
            </div>
            <div class="field">
              <label for="base-checkin-coins">จำนวนเหรียญที่ได้เมื่อแลก</label>
              ${$("ครบจำนวนกุญแจข้างต้นแล้วจึงแลกได้เหรียญโบนัสตามจำนวนนี้")}
              <input id="base-checkin-coins" name="coins" type="number" min="1" step="1" required value="${l(String(n.coins||7))}" />
              ${h("coins")}
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
              ${h("bonusValue")}
            </div>
            <div class="field">
              <label for="base-first-expiry">อายุเหรียญโบนัส (วัน)</label>
              ${$("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
              <input id="base-first-expiry" name="bonusExpiryDays" type="number" min="1" step="1" placeholder="ไม่บังคับ" value="${l(Jn(a.bonusExpiryDays))}" />
            </div>
            <div class="admin-save-row">
              <button class="btn btn-primary" type="submit">บันทึก</button>
              <button class="btn btn-ghost" type="button" data-base-toggle="firstTopUp" data-enabled="${a.enabled?"1":"0"}">${a.enabled?"ปิดโปร":"เปิดโปร"}</button>
            </div>
          </form>
        </article>
      </div>
    </section>
  `}function bc(e=""){const t=e?an(e):null;return`
    <section class="redeem-admin-section">
      <h2 class="admin-section-title">รหัสแลกเหรียญ</h2>
      <div class="promo-layout">
        <div>${oe().map(a=>{const r=a.usedBy.length,o=a.expiresAt&&new Date(a.expiresAt)<=new Date,s=a.enabled?o?"หมดอายุ":r>=a.maxUses?"ใช้ครบแล้ว":"กำลังใช้":"ปิดอยู่",c=a.enabled&&!o&&r<a.maxUses;return`
        <article class="promo-card" data-code-id="${l(a.id)}">
          <div>
            <h3>${l(a.code)}</h3>
            <p class="promo-card__summary">${ac(a)}</p>
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
              ${h("code")}
            </div>
            <div class="field-row">
              <div class="field">
                <label for="code-coins">จำนวนเหรียญ</label>
                ${$("เหรียญโบนัสที่ได้รับเมื่อแลกสำเร็จ")}
                <input id="code-coins" name="coins" type="number" min="1" step="1" required value="${t?l(String(t.coins)):"10"}" />
                ${h("coins")}
              </div>
              <div class="field">
                <label for="code-max">ใช้ได้กี่ครั้ง</label>
                ${$("จำนวนครั้งรวมของรหัสนี้")}
                <input id="code-max" name="maxUses" type="number" min="1" step="1" required value="${t?l(String(t.maxUses)):"100"}" />
                ${h("maxUses")}
              </div>
            </div>
            <div class="field">
              <label for="code-expires">วันหมดอายุของรหัส</label>
              ${$("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
              ${ae({id:"code-expires",name:"expiresAt",value:t&&t.expiresAt?t.expiresAt:""})}
              ${h("expiresAt")}
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
  `}function yc(e){const t=Dr(e.startAt,e.endAt),n=`${e.name} · ${e.keyName} ครบ ${e.keysRequired} อัน แลกได้ ${e.coins} เหรียญ`;return`${l(n)}${t?` · ${t}`:""}`}function Br({id:e,label:t,hint:n,value:a="",fieldName:r="image"}){const o=!!a;return`
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
            </div>`}function vc(e=document,t={}){e.querySelectorAll("[data-image-upload]").forEach(n=>{if(n.dataset.bound)return;n.dataset.bound="1";const a=n.querySelector("[data-image-file]"),r=n.querySelector("[data-image-value]"),o=n.querySelector("[data-image-preview]"),s=n.querySelector("[data-image-clear]"),c=n.querySelector("label.event-form__upload"),i=n.querySelector("[data-image-error]"),d=p=>{i.textContent=p||"",i.hidden=!p},u=p=>{r.value=p,p?(o.src=p,o.hidden=!1):(o.removeAttribute("src"),o.hidden=!0),s.hidden=!p,c.textContent=p?"เปลี่ยนรูป":"อัปโหลดรูป"};a.addEventListener("change",async()=>{const p=a.files?.[0];if(!p)return;const m=await wt(p,t);if(a.value="",!m.ok){d(m.error);return}d(""),u(m.dataUrl)}),s.addEventListener("click",()=>{d(""),u("")})})}function $c(e=""){const t=e?pt(e):null,n=J().map(r=>{const o=rn(r),s=r.enabled?o?"กำลังใช้":"นอกช่วงเวลา":"ปิดอยู่";return`
        <article class="promo-card" data-key-promo-id="${l(r.id)}">
          <div>
            <h3>${l(r.name)}</h3>
            <p class="promo-card__summary">${yc(r)}</p>
            <p class="promo-status${o&&r.enabled?" is-on":""}">${l(s)}</p>
          </div>
          <div class="promo-card__actions">
            <button type="button" class="btn btn-ghost" data-key-promo-edit="${l(r.id)}">แก้ไข</button>
            <button type="button" class="btn btn-ghost" data-key-promo-toggle="${l(r.id)}" data-enabled="${r.enabled?"1":"0"}">${r.enabled?"ปิดโปร":"เปิดโปร"}</button>
            <button type="button" class="btn btn-ghost" data-key-promo-delete="${l(r.id)}">ลบ</button>
          </div>
        </article>
      `}).join("")||'<p class="empty-state">ยังไม่มีโปรแจกกุญแจ</p>',a=Ta.map(r=>`<option value="${l(r.id)}"${(t?t.keyStyle:"rainbow")===r.id?" selected":""}>${l(r.name)}</option>`).join("");return`
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
              ${h("name")}
            </div>
            <div class="field-row">
              <div class="field">
                <label for="key-promo-keyname">ชื่อกุญแจพิเศษ</label>
                ${$("เช่น กุญแจสีรุ้ง")}
                <input id="key-promo-keyname" name="keyName" type="text" required value="${t?l(t.keyName):"กุญแจสีรุ้ง"}" />
                ${h("keyName")}
              </div>
              <div class="field">
                <label for="key-promo-style">รูปแบบกุญแจ</label>
                ${$("ไอคอนที่แสดงให้ผู้อ่านเห็น")}
                <select id="key-promo-style" name="keyStyle">${a}</select>
              </div>
            </div>
            ${Br({id:"key-promo-image",label:"รูปกุญแจ (ไม่บังคับ)",hint:"ถ้าอัปโหลด จะใช้แทนไอคอนกุญแจเดิมในช่องสะสมกุญแจและการ์ดกิจกรรม",value:t&&t.keyImage||"",fieldName:"keyImage"})}
            <div class="field-row">
              <div class="field">
                <label for="key-promo-required">กุญแจที่ต้องสะสม</label>
                ${$("ครบจำนวนนี้จึงแลกได้")}
                <input id="key-promo-required" name="keysRequired" type="number" min="1" step="1" required value="${t?l(String(t.keysRequired)):"7"}" />
                ${h("keysRequired")}
              </div>
              <div class="field">
                <label for="key-promo-coins">เหรียญที่ได้เมื่อแลก</label>
                ${$("แลกได้ครั้งเดียวต่อสมาชิก")}
                <input id="key-promo-coins" name="coins" type="number" min="1" step="1" required value="${t?l(String(t.coins)):"5"}" />
                ${h("coins")}
              </div>
            </div>
            <div class="field-row">
              <div class="field">
                <label for="key-promo-start">วันเริ่มต้น</label>
                ${$("นับกุญแจเฉพาะในช่วงนี้")}
                ${ae({id:"key-promo-start",name:"startAt",value:t?t.startAt:"",required:!0})}
                ${h("startAt")}
              </div>
              <div class="field">
                <label for="key-promo-end">วันสิ้นสุด</label>
                ${$("เมื่อหมดเขต กุญแจที่ยังไม่แลกจะเป็นกุญแจเงิน")}
                ${ae({id:"key-promo-end",name:"endAt",value:t?t.endAt:"",required:!0})}
                ${h("endAt")}
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
  `}function Fe(e="",t="",n=""){const a=e?dt(e):null,r=de().map(i=>{const d=_a(i),u=i.enabled?d?"กำลังใช้":"นอกช่วงเวลา":"ปิดอยู่";return`
        <article class="promo-card" data-promo-id="${l(i.id)}">
          <div>
            <h3>${l(i.name)}</h3>
            <p class="promo-card__summary">${nc(i)}</p>
            <p class="promo-status${d&&i.enabled?" is-on":""}">${l(u)}</p>
          </div>
          <div class="promo-card__actions">
            <button type="button" class="btn btn-ghost" data-promo-edit="${l(i.id)}">แก้ไข</button>
            <button type="button" class="btn btn-ghost" data-promo-toggle="${l(i.id)}" data-enabled="${i.enabled?"1":"0"}">${i.enabled?"ปิดโปร":"เปิดโปร"}</button>
            <button type="button" class="btn btn-ghost" data-promo-delete="${l(i.id)}">ลบ</button>
          </div>
        </article>
      `}).join("")||'<p class="empty-state">ยังไม่มีโปรโมชัน</p>',o=a&&a.packageIds!=="all"?a.packageIds:[],s=!a||a.packageIds==="all",c=De.map(i=>{const d=s||o.includes(i.id);return`<label class="check-label"><input type="checkbox" name="packageIds" value="${l(i.id)}" ${d?"checked":""} /> ${l(rc(i))}</label>`}).join("");return`
    <p class="proto-note">ตั้งโปรพื้นฐาน โปรแจกกุญแจ โปรตามเทศกาล และรหัสแลกเหรียญได้ที่หน้านี้</p>
    ${gc()}
    ${$c(n)}
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
            ${h("name")}
          </div>
          ${Br({id:"promo-image",label:"รูปโปร (ไม่บังคับ)",hint:"ใช้เป็นรูปบนการ์ดกิจกรรมของโปรนี้",value:a&&a.image||""})}
          <fieldset class="field field--packs">
            <legend>ใช้กับแพ็กไหน</legend>
            ${$("เลือกได้ทุกแพ็ก หรือเฉพาะบางแพ็ก")}
            <label class="check-label"><input type="checkbox" name="allPackages" data-all-packages ${s?"checked":""} /> ทุกแพ็ก</label>
            <div class="promo-pack-options" data-pack-options>${c}</div>
            ${h("packageIds")}
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
              ${h("bonusValue")}
            </div>
          </div>
          <div class="field-row">
            <div class="field">
              <label for="promo-start">วันเริ่มต้น</label>
              ${$("วันและเวลาที่โปรเริ่มใช้")}
              ${ae({id:"promo-start",name:"startAt",value:a?a.startAt:"",required:!0})}
              ${h("startAt")}
            </div>
            <div class="field">
              <label for="promo-end">วันสิ้นสุด</label>
              ${$("วันและเวลาที่โปรหมดอายุ")}
              ${ae({id:"promo-end",name:"endAt",value:a?a.endAt:"",required:!0})}
              ${h("endAt")}
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
    ${bc(t)}
  `}function kc(e){const t=new FormData(e),a=t.get("allPackages")==="on"?"all":t.getAll("packageIds");return{id:String(t.get("id")||"").trim()||void 0,name:t.get("name"),packageIds:a,bonusType:t.get("bonusType"),bonusValue:t.get("bonusValue"),startAt:te(t,"startAt"),endAt:te(t,"endAt"),enabled:t.get("enabled")==="on",firstTopUpOnly:t.get("firstTopUpOnly")==="on",bonusExpiryDays:t.get("bonusExpiryDays"),image:String(t.get("image")||"")}}function He(){vc(document,{maxSide:1200,maxChars:4e5});const e=document.querySelector("[data-promo-form]"),t=document.querySelector("[data-all-packages]"),n=document.querySelector("[data-pack-options]");if(t&&n){const o=()=>{n.querySelectorAll("input[name=packageIds]").forEach(s=>{s.disabled=t.checked,t.checked&&(s.checked=!0)})};t.addEventListener("change",o),o()}e&&e.addEventListener("submit",o=>{o.preventDefault();const s=kc(e),c=s.id?dt(s.id):null;let i;try{i=Sa(s),i.ok&&i.promo.image&&i.promo.image!==(c?.image||"")&&Bn(i.promo.id,i.promo.image)}catch{A(e,{form:K});return}if(!i.ok){A(e,i.errors);return}g("/admin?tab=promos")}),document.querySelectorAll("[data-promo-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Fe(o.dataset.promoEdit,"","")}`,He(),ke(s),C(s),s.querySelector("#promo-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-promo-cancel]")?.addEventListener("click",()=>g("/admin?tab=promos")),document.querySelectorAll("[data-promo-toggle]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.enabled!=="1";Uo(o.dataset.promoToggle,s),g("/admin?tab=promos")})}),document.querySelectorAll("[data-promo-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบโปรโมชันนี้หรือไม่?")&&(Po(o.dataset.promoDelete),g("/admin?tab=promos"))})}),document.querySelectorAll("[data-base-form]").forEach(o=>{o.addEventListener("submit",s=>{s.preventDefault();const c=o.dataset.baseForm,i=new FormData(o),d={enabled:P()[c]?.enabled!==!1,coins:i.get("coins"),keysPerDay:i.get("keysPerDay"),keysRequired:i.get("keysRequired")||i.get("keysPerCoin"),coins:i.get("coins"),bonusValue:i.get("bonusValue"),bonusExpiryDays:i.get("bonusExpiryDays")},u=Ho(c,d);if(!u.ok){A(o,u.errors);return}g("/admin?tab=promos")})}),document.querySelectorAll("[data-base-toggle]").forEach(o=>{o.addEventListener("click",()=>{jo(o.dataset.baseToggle,o.dataset.enabled!=="1"),g("/admin?tab=promos")})});const a=document.querySelector("[data-code-form]");a&&a.addEventListener("submit",o=>{o.preventDefault();const s=new FormData(a),c=Ia({id:String(s.get("id")||"").trim()||void 0,code:s.get("code"),coins:s.get("coins"),maxUses:s.get("maxUses"),expiresAt:te(s,"expiresAt")||null,bonusExpiryDays:s.get("bonusExpiryDays"),enabled:s.get("enabled")==="on"});if(!c.ok){A(a,c.errors);return}g("/admin?tab=promos")}),document.querySelectorAll("[data-code-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Fe("",o.dataset.codeEdit,"")}`,He(),ke(s),C(s),s.querySelector("#code-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-code-cancel]")?.addEventListener("click",()=>g("/admin?tab=promos")),document.querySelectorAll("[data-code-toggle]").forEach(o=>{o.addEventListener("click",()=>{Zo(o.dataset.codeToggle,o.dataset.enabled!=="1"),g("/admin?tab=promos")})}),document.querySelectorAll("[data-code-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบรหัสนี้หรือไม่?")&&(Jo(o.dataset.codeDelete),g("/admin?tab=promos"))})});const r=document.querySelector("[data-key-promo-form]");r&&r.addEventListener("submit",o=>{o.preventDefault();const s=new FormData(r),c=String(s.get("id")||"").trim()||void 0,i=c?pt(c):null;let d;try{d=Ua({id:c,name:s.get("name"),keyName:s.get("keyName"),keyStyle:s.get("keyStyle"),keyImage:String(s.get("keyImage")||""),keysRequired:s.get("keysRequired"),coins:s.get("coins"),startAt:te(s,"startAt"),endAt:te(s,"endAt"),enabled:s.get("enabled")==="on"}),d.ok&&d.promo.keyImage&&d.promo.keyImage!==(i?.keyImage||"")&&Bn(d.promo.id,d.promo.keyImage)}catch{A(r,{form:K});return}if(!d.ok){A(r,d.errors);return}g("/admin?tab=promos")}),document.querySelectorAll("[data-key-promo-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Fe("","",o.dataset.keyPromoEdit)}`,He(),ke(s),C(s),s.querySelector("#key-promo-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-key-promo-cancel]")?.addEventListener("click",()=>g("/admin?tab=promos")),document.querySelectorAll("[data-key-promo-toggle]").forEach(o=>{o.addEventListener("click",()=>{ts(o.dataset.keyPromoToggle,o.dataset.enabled!=="1"),g("/admin?tab=promos")})}),document.querySelectorAll("[data-key-promo-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบโปรแจกกุญแจนี้หรือไม่?")&&(es(o.dataset.keyPromoDelete),g("/admin?tab=promos"))})})}function wc(){B();const e=b(),t=yn();w({name:"login",next:"/"});let n;if(!e)n=`
      <p class="home-daily__note">เข้าสู่ระบบ<wbr>เพื่อ<wbr>เช็คอิน<wbr>รายวัน รับกุญแจเงิน</p>`;else if(!t.enabled)n='<p class="home-daily__note">เช็คอินรายวันปิดอยู่ตอนนี้</p>';else{const c=t.currentKeyPromo?t.currentKeyPromo.keyName:"กุญแจเงิน",i=t.canExchange?'<button class="btn btn-primary" type="button" data-exchange-keys>แลกรับเหรียญ</button>':"",d=(t.keyPromos||[]).filter(u=>u.promo.name!=="Happy new year").map(u=>{const p=Nn(u.promo),m=u.alreadyExchanged?'<button class="btn btn-ghost" type="button" disabled>แลกไปแล้ว</button>':u.canExchange?`<button class="btn btn-primary" type="button" data-exchange-promo="${l(u.promo.id)}">แลกเหรียญ</button>`:"";return`
        <div class="home-daily__promo" data-key-promo="${l(u.promo.id)}">
          <p class="home-daily__promo-name">${l(u.promo.name)}</p>
          ${It({keys:u.keys,need:u.keysRequired,name:u.promo.keyName,style:u.promo.keyStyle,image:u.promo.keyImage})}
          ${p?`<p class="key-promo-dates">${p}</p>`:""}
          ${m}
        </div>`}).join("");n=`
      <div class="checkin-actions">
        <button class="btn ${t.checkedInToday?"btn-ghost":"btn-primary"}" type="button" data-checkin ${t.checkedInToday?"disabled":""}>${t.checkedInToday?"เช็คอินวันนี้แล้ว":`<span class="checkin-btn__text"><span class="checkin-btn__lead">เช็คอิน</span><span class="checkin-btn__rest">รับ${l(c)} +${t.keysPerDay}</span></span>`}</button>
        ${i}
      </div>
      ${It({keys:t.keys,need:t.keysRequired||t.keysPerCoin,name:"กุญแจเงิน",style:"silver"})}
      ${d}`}let a;if(!e)a=`
      <p class="home-daily__note">เข้าสู่ระบบ<wbr>เพื่อ<wbr>เติมเหรียญ</p>`;else{const c=U();a=`
      <ul class="home-daily__balances">
        <li class="home-daily__row">
          ${Ft}
          <span class="home-daily__label">เหรียญของฉัน</span>
          <strong class="home-daily__amount">${c.purchased}</strong>
        </li>
        <li class="home-daily__row">
          ${pi}
          <span class="home-daily__label">โบนัสเหรียญ</span>
          <strong class="home-daily__amount">${c.bonus}</strong>
        </li>
      </ul>
      <a class="coin-pack__buy" href="/coins" data-link>${Ft}<span>เติมเหรียญ</span></a>`}const r=Ls(),o=e&&r&&!r.alreadyExchanged&&r.canExchange?`<div class="checkin-actions"><button class="btn btn-primary" type="button" data-exchange-promo="${l(r.promo.id)}">แลกรับเหรียญ</button></div>`:"",s=r?`<section class="home-daily__box home-daily__box--wide" data-home-key-promo>
            <h2>${qr('กิจกรรมพิเศษ "Happy new year"')}</h2>
            ${o}
            ${It({keys:r.keys,need:r.keysRequired,name:r.promo.keyName,style:r.promo.keyStyle||"rainbow",image:r.promo.keyImage})}
            <p class="home-daily__rule">${xt(lc)}</p>
            <p class="home-daily__rule">${xt(dc)}</p>
          </section>`:"";return`
    <section class="home-daily" aria-label="เช็คอินและเติมเหรียญ">
      <div class="container">
        <div class="home-daily__grid">
          <section class="home-daily__box" data-home-checkin>
            <h2>เช็คอินรายวัน</h2>
            ${n}
            <p class="home-daily__rule">${xt(cc)}</p>
          </section>
          <section class="home-daily__box" data-home-topup>
            <h2>กระเป๋าเหรียญ</h2>
            ${a}
          </section>
          ${s}
        </div>
      </div>
    </section>
  `}function En(e){const t=new Date(e);if(Number.isNaN(t.getTime()))return"";const n=new Intl.DateTimeFormat("th-TH",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"Asia/Bangkok"}).format(t).replace(".",":");return R(`${le(t)} ${n}`)}function Pr(e,t){return!e||!e.messages.length?'<p class="report-chat__empty">พิมพ์ข้อความด้านล่างเพื่อเริ่มแจ้งปัญหา</p>':e.messages.map(n=>{const a=t==="author"?n.role==="author":n.role==="reader";return`
      <div class="chat-msg chat-msg--${l(n.role)}${a?" is-mine":""}">
        <span class="chat-msg__who">${l(ja(n,e))}</span>
        <div class="chat-msg__bubble">${Lr(n.text)}</div>
        <span class="chat-msg__time">${En(n.createdAt)}</span>
      </div>`}).join("")}function Vt({report:e,topicId:t,viewer:n}){const a=mt(e?e.topicId:t),r=n==="author"&&e?`<p class="report-chat__meta">${l(e.userName)} · ${l(e.userEmail||"")}</p>`:"",o=n==="reader"&&!e?'<a class="report-chat__change" href="/report" data-link>เปลี่ยนหัวข้อ</a>':"";return`
    <section class="report-chat" data-report-chat data-viewer="${n}" data-report-id="${e?l(e.id):""}" data-topic-id="${l(a?a.id:"")}">
      <header class="report-chat__head">
        <div>
          <h2>หัวข้อ: ${l(a?a.name:"อื่นๆ")}</h2>
          ${r}
        </div>
        ${o}
      </header>
      <div class="report-chat__log" data-chat-log role="log" aria-live="polite">${Pr(e,n)}</div>
      <form class="report-chat__form" data-chat-form novalidate>
        <textarea name="text" rows="2" maxlength="${Fa}" aria-label="ข้อความ" placeholder="พิมพ์ข้อความ"></textarea>
        <button class="btn btn-primary" type="submit">ส่ง</button>
      </form>
      <p class="field-error" data-chat-error hidden></p>
    </section>`}function Sc(e){document.title=`แจ้งปัญหาการใช้งาน — ${k.shortName}`,S("light");const t=b(),n=new URLSearchParams(window.location.search).get("topic")||"";let a;if(e){const r=t?dn(e):null;!r||r.userId!==t.id?a=`
        <p class="empty-state">ไม่พบเรื่องที่แจ้ง</p>
        <p><a class="btn btn-ghost" href="/report" data-link>กลับไปหน้าแจ้งปัญหา</a></p>`:(gt(r.id,"reader"),a=Vt({report:r,viewer:"reader"}))}else if(mt(n))a=Vt({report:null,topicId:n,viewer:"reader"});else{const r=t?Va(t.id):[],o=Ha.map(c=>`<a class="report-topic" href="/report?topic=${encodeURIComponent(c.id)}" data-link>${l(c.name)}</a>`).join(""),s=r.length?`<section class="report-card">
          <h2>เรื่องที่แจ้งไว้</h2>
          <ul class="report-list">${r.map(c=>`
            <li>
              <a class="report-list__item" href="/report/${encodeURIComponent(c.id)}" data-link>
                <span class="report-list__topic">${l(c.topicName)}${c.readerUnread?'<span class="report-list__new">ใหม่</span>':""}</span>
                <span class="report-list__preview" data-no-wbr>${l(c.last?c.last.text.replace(/\s+/g," ").slice(0,70):"")}</span>
                <span class="report-list__time">${En(c.lastAt)}</span>
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
    ${E()}
  `}function _c(e=""){const t=ht(),n=e?t.find(s=>s.id===e):null;n&&gt(n.id,"author");const a=t.length?t.map(s=>{const c=s.authorUnread&&s!==n;return`
        <li>
          <a class="report-list__item${n&&s.id===n.id?" is-current":""}" href="/admin?tab=reports&report=${encodeURIComponent(s.id)}" data-link>
            <span class="report-list__topic">${l(s.topicName)}${c?'<span class="report-list__new">ใหม่</span>':""}</span>
            <span class="report-list__who">${l(s.userName)}</span>
            <span class="report-list__preview" data-no-wbr>${l(s.last?s.last.text.replace(/\s+/g," ").slice(0,70):"")}</span>
            <span class="report-list__time">${En(s.lastAt)}</span>
          </a>
        </li>`}).join(""):"",r=t.length?`<ul class="report-list">${a}</ul>`:'<p class="empty-state">ยังไม่มีเรื่องที่นักอ่านแจ้ง</p>',o=n?`<a class="back-link report-admin__back" href="/admin?tab=reports" data-link>← กลับไปรายการ</a>${Vt({report:n,viewer:"author"})}`:'<p class="empty-state report-admin__placeholder">เลือกเรื่องจากรายการเพื่อดูและตอบกลับ</p>';return`
    <section class="report-admin${n?" has-selected":""}">
      <h2 class="admin-section-title">แจ้งปัญหา</h2>
      <div class="report-admin__layout">
        <div class="report-admin__list">${r}</div>
        <div class="report-admin__chat">${o}</div>
      </div>
    </section>
  `}let Zn=!1;function Wn(e){const t=e.dataset.reportId,n=e.dataset.viewer,a=e.querySelector("[data-chat-log]");if(!t||!a)return;const r=dn(t);if(!r)return;const o=a.scrollHeight-a.scrollTop-a.clientHeight<80;a.innerHTML=Pr(r,n),C(a),o&&(a.scrollTop=a.scrollHeight),gt(t,n==="author"?"author":"reader")}function Gn(){const e=document.querySelector("[data-report-chat]");if(!e)return;const t=e.dataset.viewer,n=e.querySelector("[data-chat-form]"),a=e.querySelector("[data-chat-error]"),r=e.querySelector("[data-chat-log]"),o=n.elements.text;r&&(r.scrollTop=r.scrollHeight);const s=i=>{a.textContent=i||"",a.hidden=!i},c=()=>{const i=o.value;if(!String(i).trim()){s("กรุณาพิมพ์ข้อความ");return}s("");const d=e.dataset.reportId;let u;try{d?t==="author"?u=gs(d,i):u=hs(d,i):u=fs({topicId:e.dataset.topicId,text:i})}catch{s(K);return}if(!u.ok){s(u.error);return}if(o.value="",!d){g(`/report/${u.report.id}`);return}Wn(e),r&&(r.scrollTop=r.scrollHeight)};n.addEventListener("submit",i=>{i.preventDefault(),c()}),o.addEventListener("keydown",i=>{i.key==="Enter"&&(i.ctrlKey||i.metaKey)&&(i.preventDefault(),c())}),Zn||(Zn=!0,window.addEventListener("storage",i=>{if(i.key!=="banNiyai_reports")return;const d=document.querySelector("[data-report-chat]");d&&Wn(d)}))}function Ac(){return`
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
            ${h("code")}
          </div>
        </form>
      </section>
    </div>
  `}function Nc(){if(!b())return document.title=`เติมเหรียญ — ${k.shortName}`,"";document.title=`เติมเหรียญ — ${k.shortName}`,S("light"),B();const t=U(),n=!nr(),a=De.map(s=>{const c=Ea(s,{isFirstTopUp:n}),i=c.paid?Math.round(c.packageBonus*100/c.paid):0,d=[`<div class="coin-pack__row"><span>เหรียญ</span><span class="coin-pack__amt date-part" data-no-wbr>${c.paid}</span></div>`];if(c.packageBonus&&d.push(`<div class="coin-pack__row"><span>โบนัส <span class="date-part" data-no-wbr>${i}%</span></span><span class="coin-pack__amt date-part" data-no-wbr>+${c.packageBonus}</span></div>`),c.firstTopUpBonus&&d.push(`<div class="coin-pack__row coin-pack__row--promo"><span>โบนัสเติมครั้งแรก</span><span class="coin-pack__amt date-part" data-no-wbr>+${c.firstTopUpBonus}</span></div>`),c.promo&&c.promoBonus){const u=c.promo.firstTopUpOnly?"โปรเติมครั้งแรก":c.promo.name,p=c.promo.bonusType==="percent"?` <span class="date-part" data-no-wbr>${l(String(c.promo.bonusValue))}%</span>`:"";d.push(`<div class="coin-pack__row coin-pack__row--promo"><span>${l(u)}${p}</span><span class="coin-pack__amt date-part" data-no-wbr>+${c.promoBonus}</span></div>`)}return`
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
    `}).join(""),r=yt(),o=r.length?`<ul class="tx-list">${r.map(s=>{const c=s.coins>0?`+${s.coins}`:String(s.coins),i=Ec(s.createdAt),d=Number(s.packageBonus||0)+Number(s.firstTopUpBonus||0)+Number(s.promoBonus||0),u=d?`<p class="tx-item__bonus">ได้รับโบนัส ${d} เหรียญ${s.promoName?` (รวม ${l(s.promoName)})`:""}</p>`:"";return`<li class="tx-item"><div><p class="tx-item__label">${l(s.label)}</p>${u}<p class="tx-item__when">${l(i)}</p></div><span class="tx-item__amount${s.coins>0?" is-plus":""}">${c}</span></li>`}).join("")}</ul>`:'<p class="empty-state">ยังไม่มีรายการเติมเหรียญหรือปลดล็อกตอน</p>';return`
    ${N("coins")}
    <main id="main" class="page-block">
      <div class="container coins-page">
        <h1 class="page-title">เติมเหรียญ</h1>
        <p class="coin-closed-loop">เหรียญในระบบนี้ใช้ได้เฉพาะสำหรับอ่านนิยายในบ้านนิยายนี้เท่านั้น ไม่สามารถโอนให้ผู้อื่น หรือแลก/ถอนเป็นเงินสดได้</p>
        <p class="coins-balance-lead">ยอดคงเหลือ <strong>${t.total}</strong> เหรียญ</p>
        <p class="coins-breakdown">${l(Nt(t))}</p>
        <p class="proto-note">การชำระเงินในหน้านี้เป็นการทดลองเท่านั้น ไม่มีการตัดบัตรจริง จุดเชื่อมระบบรับชำระเงิน เช่น ChillPay หรือ Opn จะมาในภายหลัง</p>
        ${Ac()}
        <div class="coin-pack-grid">${a}</div>
        <section class="tx-section" aria-labelledby="tx-heading">
          <h2 id="tx-heading">ประวัติรายการ</h2>
          ${o}
        </section>
      </div>
    </main>
    ${E()}
  `}function Ec(e){const t=new Date(e);return Number.isNaN(t.getTime())?"":An(t)}function Ur(e,t){const n=b(),a=w({name:"reader",novelId:e,chapterId:t});if(!n){g({name:"login",next:a});return}const r=v(e),o=be(r,t);if(!r||!o||!ve(o))return;if(fe(r,o)){g(a);return}const s=document.querySelector(".modal-backdrop");s&&s.remove();const c=ne(o),i=U(),d=i.total,u=d>=c,p=document.createElement("div");p.className="modal-backdrop",p.dataset.walletModal="true",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","unlock-title");const m=u?`<button class="btn btn-primary" type="button" data-unlock-confirm>ยืนยันการปลดล็อก</button>
       <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`:`<p class="field-error">เหรียญไม่พอสำหรับปลดล็อกตอนนี้</p>
       <a class="btn btn-primary" href="/coins?next=${encodeURIComponent(a)}" data-link>ไปเติมเหรียญ</a>
       <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`;p.innerHTML=`
    <div class="modal">
      <h2 id="unlock-title">ปลดล็อกตอน</h2>
      <p>${l(r.title)} · ตอนที่ ${l(o.id)} ${l(o.title)}</p>
      <p>ราคา <strong>${c}</strong> เหรียญ · ยอดคงเหลือ <strong>${d}</strong> เหรียญ (${l(Nt(i))})</p>
      <div class="modal__actions">${m}</div>
    </div>
  `,document.body.appendChild(p),C(p),p.querySelector("[data-modal-close]")?.addEventListener("click",()=>p.remove()),p.addEventListener("click",y=>{y.target===p&&p.remove()});const f=p.querySelector("[data-unlock-confirm]");f&&f.addEventListener("click",()=>{const y=Ms(e,t);if(!y.ok&&y.reason==="insufficient"){p.remove(),Ur(e,t);return}p.remove(),y.ok&&g(a)})}function xc(e,t){return w(t?{name:"reader",novelId:e,chapterId:t}:{name:"novel",id:e})}function Pe(e,t){const n=e?.querySelector("[data-donate-error]");n&&(n.hidden=!t,n.textContent=t||"")}function Ic(){document.querySelectorAll("[data-donate-box]").forEach(e=>{const t=e.dataset.novelId,n=e.dataset.chapterId||void 0,a=(o,s)=>Tc(t,n,o,s);e.querySelectorAll("[data-donate-gift]").forEach(o=>{o.addEventListener("click",s=>{if(s.target.closest(".donate-custom"))return;Pe(e,"");const c=Qe.find(i=>i.id===o.dataset.donateGift);if(c){if(c.coins==null){const i=o.querySelector(".donate-custom__input");i?.focus();const d=i?.value,u=Number(d),p=Math.round(u);if(!d||!Number.isFinite(u)||p!==u||p<=0){Pe(e,"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก");return}a(c,p);return}a(c,c.coins)}})});const r=e.querySelector(".donate-custom__input");r&&(r.addEventListener("click",o=>o.stopPropagation()),r.addEventListener("keydown",o=>{if(o.key!=="Enter")return;o.preventDefault(),Pe(e,"");const s=Number(r.value),c=Math.round(s);if(!Number.isFinite(s)||c!==s||c<=0){Pe(e,"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก");return}a(Qe.find(i=>i.id==="coin"),c)}))})}function Tc(e,t,n,a){const r=b(),o=xc(e,t);if(!r){g({name:"login",next:o});return}if(!v(e)||!n)return;const c=document.querySelector(".modal-backdrop");c&&c.remove();const i=document.createElement("div");i.className="modal-backdrop",i.dataset.walletModal="true",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i);const d=()=>i.remove();i.addEventListener("click",p=>{p.target===i&&d()});const u=()=>{const p=U(),f=p.total>=a?`<button class="btn btn-primary" type="button" data-donate-send>ส่งโดเนท</button>
         <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`:`<p class="field-error">เหรียญไม่พอสำหรับโดเนทนี้</p>
         <a class="btn btn-primary" href="/coins?next=${encodeURIComponent(o)}" data-link>ไปเติมเหรียญ</a>
         <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`;i.setAttribute("aria-labelledby","donate-confirm-title"),i.innerHTML=`
      <div class="modal modal--donate">
        <h2 id="donate-confirm-title">ยืนยันการโดเนท</h2>
        <div class="donate-confirm">
          ${wn(n.id)}
          <p class="donate-confirm__name">${l(n.name)}</p>
        </div>
        <p>ใช้ <strong>${a}</strong> เหรียญ · ยอดคงเหลือ <strong>${p.total}</strong> เหรียญ (${l(Nt(p))})</p>
        <div class="modal__actions">${f}</div>
      </div>`,C(i),i.querySelector("[data-modal-close]").addEventListener("click",d),i.querySelector("[data-donate-send]")?.addEventListener("click",()=>{const y=Ws({novelId:e,giftId:n.id,customAmount:a,chapterId:t||void 0});if(!y.ok&&y.reason==="insufficient"){u();return}if(!y.ok){const _=i.querySelector(".modal__actions"),F=document.createElement("p");F.className="field-error",F.textContent=y.reason==="invalid"?"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก":"ไม่สามารถโดเนทได้ในขณะนี้",_?.prepend(F);return}d(),Dc(n.id)})};u()}function Dc(e){if(Or())return;document.querySelectorAll(".fx-gift-burst").forEach(n=>n.remove());const t=document.createElement("div");t.className="fx-gift-burst",t.setAttribute("aria-hidden","true");for(let n=0;n<7;n+=1){const a=document.createElement("span");a.className="fx-gift",a.innerHTML=wn(e),a.style.left=`${12+Math.random()*76}vw`,a.style.animationDelay=`${Math.random()*.15}s`,a.style.animationDuration=`${.85+Math.random()*.35}s`,t.appendChild(a)}document.body.appendChild(t),window.setTimeout(()=>t.remove(),1600)}function Or(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ue(e){try{sessionStorage.setItem("banNiyai_fx",e)}catch{}}function qc(){const t=[...document.querySelectorAll(".key-icon.is-filled")].at(-1);t&&(t.classList.remove("is-popping"),t.offsetWidth,t.classList.add("is-popping"),t.addEventListener("animationend",()=>t.classList.remove("is-popping"),{once:!0}))}function Lc(){document.querySelectorAll(".fx-coin-rain").forEach(t=>t.remove());const e=document.createElement("div");e.className="fx-coin-rain",e.setAttribute("aria-hidden","true");for(let t=0;t<16;t+=1){const n=document.createElement("span");n.className="fx-coin",n.innerHTML=Ft,n.style.left=`${6+Math.random()*88}vw`,n.style.animationDelay=`${Math.random()*.28}s`,n.style.animationDuration=`${.95+Math.random()*.55}s`,e.appendChild(n)}document.body.appendChild(e),window.setTimeout(()=>e.remove(),1800)}function Cc(){let e="";try{e=sessionStorage.getItem("banNiyai_fx")||"",sessionStorage.removeItem("banNiyai_fx")}catch{}!e||Or()||(e==="checkin"&&qc(),e==="coins"&&Lc())}function Bc(){document.querySelectorAll("[data-locked-chapter]").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),Ur(t.dataset.novelId,t.dataset.chapterId)},!0)}),Ic(),document.querySelectorAll("[data-topup]").forEach(t=>{t.addEventListener("click",()=>{Os(t.dataset.topup).ok&&(Ue("coins"),g(T()||"/coins"))})}),document.querySelectorAll("[data-checkin]").forEach(t=>{t.addEventListener("click",()=>{const n=Cs();if(!n.ok&&n.reason!=="already"){n.error&&alert(n.error);return}n.ok&&Ue("checkin"),g(T()||"/")})}),document.querySelectorAll("[data-exchange-keys]").forEach(t=>{t.addEventListener("click",()=>{const n=Bs();if(!n.ok){n.error&&alert(n.error);return}Ue("coins"),g(T()||"/")})}),document.querySelectorAll("[data-exchange-promo]").forEach(t=>{t.addEventListener("click",()=>{const n=Ps(t.dataset.exchangePromo);if(!n.ok){n.error&&alert(n.error);return}Ue("coins"),g(T()||"/")})});const e=document.querySelector("[data-redeem-form]");e&&e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e),a=Us(n.get("code"));if(!a.ok){A(e,{code:a.error||"ไม่สามารถแลกโค้ดได้"});return}g("/coins")})}function Pc(){document.querySelectorAll("[data-wallet-modal]").forEach(e=>e.remove()),ie()}function ie(){document.querySelectorAll("[data-guest-login-modal]").forEach(e=>e.remove()),document.body.classList.remove("guest-login-open"),ie._onKey&&(document.removeEventListener("keydown",ie._onKey),ie._onKey=null)}function Uc(){if(b())return;const e=document.querySelector("[data-guest-login-modal]");if(e){e.querySelector("#login-email")?.focus();return}const t=document.createElement("div");t.className="modal-backdrop guest-login-backdrop",t.dataset.guestLoginModal="1",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-labelledby","guest-login-title");const n=T()==="/"?void 0:T();t.innerHTML=`
    <div class="modal modal--guest-login">
      <button type="button" class="guest-login__close" data-guest-login-close aria-label="ปิด">×</button>
      <div class="modal--guest-login__inner">
        ${kn({titleId:"guest-login-title"})}
        ${br({next:n,compact:!0})}
      </div>
    </div>
  `,document.body.appendChild(t),document.body.classList.add("guest-login-open"),t.querySelector("[data-guest-login-close]").addEventListener("click",()=>ie());const a=r=>{r.key==="Escape"&&ie()};ie._onKey=a,document.addEventListener("keydown",a),Hr(),C(t),t.querySelector("#login-email")?.focus()}function Oc(e){return!!e.closest("a, button, input, select, textarea, summary, label, [data-link], [role='button'], [role='tab'], [role='search']")}function Rc(){if(b()||T()!=="/")return;const e=document.getElementById("app")||document.body,t=n=>{n.target.closest("[data-guest-login-modal]")||Oc(n.target)&&(n.preventDefault(),n.stopPropagation(),Uc())};e.addEventListener("click",t,!0),e.addEventListener("submit",t,!0)}function Rr(e,t){const n=String(e||"").replace(/\r\n/g,`
`).trim();return n?n.split(/\n[ \t]*\n/).map(a=>a.replace(/^\n+|\n+$/g,"")).filter(Boolean).map(a=>{const r=a.split(`
`).map(o=>qr(o.trim())).join("<br>");return`<p class="${t}">${r}</p>`}).join(""):""}function Mc(){document.title=`กิจกรรม — ${k.shortName}`,S("light"),M();const e=Z(),t=e.length?e.slice().sort((n,a)=>new Date(n.startAt)-new Date(a.startAt)).map(n=>{const a=Nn(n),r=n.image?`<div class="event-card__media"><img class="event-card__image" src="${l(n.image)}" alt="" /></div>`:"";return`
        <article class="event-card" id="event-${l(n.id)}">
          ${r}
          <div class="event-card__body">
            <h2 class="event-card__title">${l(n.title)}</h2>
            ${a?`<p class="event-card__dates">${a}</p>`:""}
            ${Rr(n.detail,"event-card__detail")}
          </div>
        </article>`}).join(""):'<p class="empty-state">ยังไม่มีกิจกรรมในขณะนี้</p>';return`
    ${N("events")}
    <main id="main" class="page-block">
      <div class="container events-page">
        <h1 class="page-title">กิจกรรม</h1>
        <div class="events-list">${t}</div>
      </div>
    </main>
    ${E()}
  `}function Fc(){document.title=`ติดตามนักเขียน — ${k.shortName}`,S("light"),ni();const e=dr(),t=e.length?`<ul class="follow-list">${e.map(n=>`<li><a class="follow-channel" href="${l(n.url)}" target="_blank" rel="noopener noreferrer">${l(n.name)}</a></li>`).join("")}</ul>`:'<p class="empty-state">ช่องทางติดตามนักเขียนจะเพิ่มให้ในภายหลัง</p>';return`
    ${N("follow")}
    <main id="main" class="page-block">
      <div class="container follow-page">
        <h1 class="page-title">ติดตามนักเขียน</h1>
        ${t}
      </div>
    </main>
    ${E()}
  `}function Mr(e=""){M();const t=e?us(e):null;return`
    <section class="event-admin-section">
      <h2 class="admin-section-title">กิจกรรม</h2>
      <div class="promo-layout">
        <div>${Z().slice().sort((a,r)=>new Date(r.startAt)-new Date(a.startAt)).map(a=>{const r=Nn(a);return`
        <article class="promo-card" data-event-id="${l(a.id)}">
          <div>
            <h3>${l(a.title)}</h3>
            ${r?`<p class="promo-card__summary">${r}</p>`:""}
            ${Rr(a.detail,"promo-card__summary")}
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
              ${h("title")}
            </div>
            <div class="field-row">
              <div class="field">
                <label>วันเริ่มต้น</label>
                ${ae({id:"event-start",name:"startAt",value:t?t.startAt:"",required:!0})}
                ${h("startAt")}
              </div>
              <div class="field">
                <label>วันสิ้นสุด</label>
                ${ae({id:"event-end",name:"endAt",value:t?t.endAt:"",required:!0})}
                ${h("endAt")}
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
              ${h("image")}
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
  `}function Hc(e=document){const t=e.querySelector("[data-event-image-file]"),n=e.querySelector("[data-event-image-url]"),a=e.querySelector("[data-event-image-value]"),r=e.querySelector("[data-event-image-preview]"),o=e.querySelector('[data-error-for="image"]'),s=i=>{r&&(i?(r.src=i,r.hidden=!1):(r.removeAttribute("src"),r.hidden=!0))},c=i=>{o&&(o.textContent=i||"",o.hidden=!i)};t?.addEventListener("change",async()=>{const i=t.files&&t.files[0];if(!i)return;const d=await wt(i,{maxSide:1200,maxChars:4e5});if(t.value="",!d.ok){c(d.error);return}a&&(a.value=d.dataUrl),n&&(n.value=""),s(d.dataUrl),c("")}),n?.addEventListener("input",()=>{const i=n.value.trim();a&&(a.value=i),s(i),c("")})}function Fr(){Hc();const e=document.querySelector("[data-event-form]");e&&e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e);let a;try{a=ps({id:String(n.get("id")||"").trim()||void 0,title:n.get("title"),startAt:te(n,"startAt"),endAt:te(n,"endAt"),detail:n.get("detail"),image:n.get("image")})}catch{A(e,{image:K});return}if(!a.ok){A(e,a.errors);return}g("/admin?tab=events")}),document.querySelectorAll("[data-event-edit]").forEach(t=>{t.addEventListener("click",()=>{const n=document.querySelector(".admin-page");if(!n)return;const a=n.querySelector(".admin-tabs")?.outerHTML||"",r=n.querySelector(".page-title")?.outerHTML||"";n.innerHTML=`${r}${a}${Mr(t.dataset.eventEdit)}`,Fr(),ke(n),C(n),n.querySelector("#event-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-event-cancel]")?.addEventListener("click",()=>g("/admin?tab=events")),document.querySelectorAll("[data-event-delete]").forEach(t=>{t.addEventListener("click",()=>{confirm("ลบกิจกรรมนี้หรือไม่?")&&(ms(t.dataset.eventDelete),g("/admin?tab=events"))})})}function jc(e){const t=xe(e?.publishedAt);return t?t.toISOString():""}function Kc(e){const t=xe(e?.publishedAt);if(!t)return l("ยังไม่กำหนดเวลา");const n=ve(e)?"เผยแพร่แล้ว":"ตั้งเวลา";return`${l(n)} ${R(An(t))}`}function Vc(e){const t=ne(e);return t<=0?"ฟรี":`${t} เหรียญ`}function q({novelId:e,newNovel:t,order:n}={}){const a=new URLSearchParams;e&&a.set("novel",e),t&&a.set("newNovel","1"),n&&a.set("order","1");const r=a.toString();return r?`/admin?${r}`:"/admin"}function Yc(){const e=new URLSearchParams(window.location.search),t=e.get("novel");return t&&e.get("order")==="1"?Xc(t):t?zn(t):e.get("newNovel")==="1"?zn(null):Jc()}function Jc(){const e=ye().map(n=>`
      <a class="novel-card" href="${q({novelId:n.id})}" data-link>
        <div class="novel-card__cover" style="${Le(n.cover)}" aria-hidden="true">
          ${St(n,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
        </div>
        <div class="novel-card__body">
          <h3 class="novel-card__title">${l(n.title)}</h3>
        </div>
      </a>`).join(""),t=`
      <a class="novel-card novel-card--add" href="${q({newNovel:!0})}" data-link aria-label="เพิ่มนิยายเรื่องใหม่">
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
  `}function Zc(e,{isNew:t=!1}={}){const n=e?.cover?.image||"",a=!!n,r=!!(!t&&e?.cover&&(e.cover.from||e.cover.motif)),o=!a&&!r,s=a||r?"เปลี่ยนรูปปก":"อัปโหลดรูปปก",c=!a&&r?`<span class="writer-cover__motif" data-cover-motif>${l(e.cover?.motif||"")}</span>`:'<span class="writer-cover__motif" data-cover-motif hidden></span>';return`
        <div class="writer-cover" data-cover-editor>
          <label class="writer-cover__frame${o?" writer-cover__frame--empty":""}" for="novel-cover-file" style="${Le(e?.cover)}">
            <span class="writer-cover__plus"${o?"":" hidden"}>+</span>
            ${c}
            <img class="writer-cover__photo" data-cover-preview alt="" ${a?`src="${l(n)}"`:"hidden"} />
          </label>
          <input id="novel-cover-file" class="writer-cover__file" type="file" accept="image/*" data-cover-file />
          <input type="hidden" name="coverImage" value="${l(n)}" data-cover-value />
          <button class="btn btn-ghost" type="button" data-cover-pick>${s}</button>
          ${h("coverImage")}
        </div>`}function Wc(e,{isNew:t=!1}={}){const n=String(e?.author||"").trim(),a=Ve();n&&!a.includes(n)&&a.unshift(n);const r=[t&&!n?'<option value="" disabled selected>เลือกนามปากกา</option>':"",...a.map(o=>{const s=!t&&n===o?" selected":"";return`<option value="${l(o)}"${s}>${l(o)}</option>`})].join("");return`
        <form class="auth-form writer-details-form" data-novel-details-form novalidate>
          ${t?"":`<input type="hidden" name="novelId" value="${l(e.id)}" />`}
          ${Zc(e,{isNew:t})}
          <div class="field">
            <label for="novel-title">ชื่อเรื่อง</label>
            <input id="novel-title" name="title" type="text" required value="${l(e?.title||"")}" />
            ${h("title")}
          </div>
          <div class="field">
            <label for="novel-author">นามปากกา</label>
            <select id="novel-author" name="author" required>${r}</select>
            <div class="list-add" data-pen-add>
              <div class="list-add__row">
                <input class="admin-new-tag" type="text" maxlength="40" data-new-pen-name placeholder="เพิ่มนามปากกาใหม่" aria-label="นามปากกาใหม่" />
                <button class="btn btn-ghost" type="button" data-add-pen-name>เพิ่ม</button>
              </div>
              <p class="field-error" data-pen-add-error hidden></p>
            </div>
            ${h("author")}
          </div>
          <div class="field">
            <label for="novel-teaser">คำโปรย</label>
            <textarea id="novel-teaser" name="teaser" rows="4">${l(e?.teaser||"")}</textarea>
            ${h("teaser")}
          </div>
          <div class="field">
            <label for="novel-meb-url">ลิงก์อีบุ๊ก MEB</label>
            <input id="novel-meb-url" name="mebUrl" type="url" inputmode="url" placeholder="https://" autocomplete="off" value="${l(e?.mebUrl||"")}" />
            ${h("mebUrl")}
          </div>
          <div class="admin-save-row">
            <button class="btn btn-primary" type="submit">บันทึก</button>
            <p class="admin-status" data-details-status hidden></p>
          </div>
        </form>`}function Gc(e,t){const n=`chapter-published-${e}-${t.id}`,a=jc(t),r=!!xe(t.publishedAt);return`
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
          ${ae({id:n,name:"publishedAt",value:a,required:!1})}
          ${h("publishedAt")}
        </div>
      </fieldset>
      <div class="admin-save-row">
        <button class="btn btn-primary" type="submit">บันทึก</button>
        <button class="btn btn-ghost" type="button" data-chapter-editor-cancel>ยกเลิก</button>
      </div>
    </form>`}function zc(e){const t=String(ne(e));return`
    <form class="chapter-inline-form" data-chapter-price-form novalidate>
      <div class="field">
        <label>ราคาปลดล็อก (เหรียญ)</label>
        ${$("ใส่ 0 หากต้องการให้ตอนนี้อ่านฟรี")}
        <input name="price" type="number" inputmode="numeric" min="0" step="1" required value="${l(t)}" />
        ${h("price")}
      </div>
      <div class="admin-save-row">
        <button class="btn btn-primary" type="submit">บันทึก</button>
        <button class="btn btn-ghost" type="button" data-chapter-editor-cancel>ยกเลิก</button>
      </div>
    </form>`}function zn(e){const t=!e,n=t?{id:"",title:"",author:"",teaser:"",tags:[],secondaryTags:[],chapters:[],cover:null}:v(e);if(!t&&!n)return`
    <section class="chapter-admin-section">
      <div class="writer-novel__top">
        <a class="back-link" href="${q()}" data-link>← กลับไปเลือกนิยาย</a>
      </div>
      <p class="empty-state">ไม่พบนิยายเรื่องนี้</p>
    </section>`;const r=(n.chapters||[]).map(c=>{const i=Kc(c);return`
        <article class="promo-card chapter-admin-row" data-chapter-row data-novel-id="${l(n.id)}" data-chapter-id="${l(c.id)}">
          <div class="chapter-admin-row__main">
            <h3>ตอนที่ ${l(c.id)} ${l(c.title)}</h3>
            <p class="promo-card__summary">${l(Vc(c))} · ${i}</p>
          </div>
          <div class="chapter-admin-row__actions">
            <button type="button" class="btn btn-ghost" data-chapter-open="schedule">ตั้งเวลา</button>
            <button type="button" class="btn btn-ghost" data-chapter-open="price">ตั้งค่าเหรียญ</button>
            <button type="button" class="btn btn-ghost" data-delete-chapter>ลบ</button>
          </div>
          <div class="chapter-admin-row__editor" data-chapter-editor="schedule" hidden>
            ${Gc(n.id,c)}
          </div>
          <div class="chapter-admin-row__editor" data-chapter-editor="price" hidden>
            ${zc(c)}
          </div>
        </article>`}).join("")||'<p class="empty-state">ยังไม่มีตอน</p>',o=`
        <article class="promo-form-card" id="chapter-form-card" hidden>
          <h3 id="chapter-form-title">สร้างตอนใหม่</h3>
          <form class="auth-form" data-chapter-form novalidate>
            <input type="hidden" name="novelId" value="${l(n.id)}" />
            <div class="field">
              <label for="chapter-title">ชื่อตอน</label>
              <input id="chapter-title" name="title" type="text" required />
              ${h("title")}
            </div>
            <div class="field">
              <label for="chapter-content">เนื้อหาตอน</label>
              <textarea id="chapter-content" name="content" rows="12" class="chapter-admin-body" required></textarea>
              ${h("content")}
            </div>
            <div class="admin-save-row">
              <button class="btn btn-primary" type="submit">สร้างตอน</button>
              <button class="btn btn-ghost" type="button" data-chapter-form-cancel>ยกเลิก</button>
            </div>
          </form>
        </article>`,s=t?{id:"new",title:"",author:"",tags:[],secondaryTags:[]}:n;return`
    <section class="chapter-admin-section" data-writer-novel="${l(n.id)}">
      <div class="writer-novel__top">
        <a class="back-link" href="${q()}" data-link>← กลับไปเลือกนิยาย</a>
        ${t?"":`<button type="button" class="btn btn-ghost writer-novel__delete" data-delete-novel="${l(n.id)}">ลบนิยาย</button>`}
      </div>
      ${Wc(n,{isNew:t})}
      ${Hi(s,{showHeading:!1,showSave:!t,idSuffix:t?"new":void 0})}
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
  `}function Xc(e){const t=v(e);if(!t)return`
    <section class="chapter-admin-section">
      <a class="back-link" href="${q()}" data-link>← กลับไปเลือกนิยาย</a>
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
        <a class="btn btn-ghost" href="${q({novelId:t.id})}" data-link>ยกเลิก</a>
      </div>
    </section>
  `}function Xn(e){document.querySelectorAll("[data-chapter-editor]").forEach(t=>{t!==e&&(t.hidden=!0)})}function Tt(e){if(!e)return;const t=e.querySelector('[name="publishMode"]:checked')?.value||"now",n=e.querySelector("[data-schedule-fields]");n&&(n.hidden=t!=="schedule");const a=e.querySelector("[name='publishedAtDate']"),r=e.querySelector("[name='publishedAtTime']");a&&(a.required=t==="schedule"),r&&(r.required=t==="schedule")}function Qc(){const e=document.querySelector("[data-chapter-toggle-form]"),t=document.querySelector("#chapter-form-card");e&&t&&e.addEventListener("click",()=>{if(!document.querySelector("[data-writer-novel]")?.dataset.writerNovel){window.alert("กรุณาบันทึกนิยายก่อน");return}t.hidden=!t.hidden,t.hidden||(t.querySelector("[name='title']")?.focus(),t.scrollIntoView({behavior:"smooth",block:"start"}))}),document.querySelector("[data-chapter-form-cancel]")?.addEventListener("click",()=>{t&&(t.hidden=!0)}),document.querySelector("[data-chapter-order-open]")?.addEventListener("click",()=>{const a=document.querySelector("[data-writer-novel]")?.dataset.writerNovel;if(!a){window.alert("กรุณาบันทึกนิยายก่อน");return}g(q({novelId:a,order:!0}))});const n=document.querySelector("[data-chapter-form]");n&&n.addEventListener("submit",a=>{a.preventDefault();const r=new FormData(n),o=String(r.get("novelId")||"").trim(),s=io(o,{title:r.get("title"),content:r.get("content")});if(!s.ok){A(n,s.errors);return}g(q({novelId:o}))}),document.querySelectorAll("[data-chapter-row]").forEach(a=>{const r=a.dataset.novelId,o=a.dataset.chapterId;a.querySelectorAll("[data-chapter-open]").forEach(i=>{i.addEventListener("click",()=>{const d=a.querySelector(`[data-chapter-editor="${i.dataset.chapterOpen}"]`);if(!d)return;const u=d.hidden;if(Xn(u?d:null),d.hidden=!u,!d.hidden){const p=d.querySelector("[data-chapter-schedule-form]");p&&Tt(p)}})}),a.querySelectorAll("[data-chapter-editor-cancel]").forEach(i=>{i.addEventListener("click",()=>Xn())});const s=a.querySelector("[data-chapter-schedule-form]");s&&(Tt(s),s.querySelectorAll("[data-publish-mode]").forEach(i=>{i.addEventListener("change",()=>Tt(s))}),s.addEventListener("submit",i=>{i.preventDefault();const d=new FormData(s),u=String(d.get("publishMode")||"now"),p=po(r,o,{publishMode:u,publishedAt:u==="schedule"?te(d,"publishedAt"):void 0});if(!p.ok){A(s,p.errors);return}g(q({novelId:r}))}));const c=a.querySelector("[data-chapter-price-form]");c&&c.addEventListener("submit",i=>{i.preventDefault();const d=new FormData(c),u=uo(r,o,d.get("price"));if(!u.ok){A(c,u.errors);return}g(q({novelId:r}))}),a.querySelector("[data-delete-chapter]")?.addEventListener("click",()=>{if(!confirm("ลบตอนนี้หรือไม่?"))return;co(r,o).ok&&g(q({novelId:r}))})}),el(),document.querySelector("[data-delete-novel]")?.addEventListener("click",a=>{if(!confirm("ลบนิยายเรื่องนี้หรือไม่?"))return;const r=a.currentTarget.dataset.deleteNovel;ro(r).ok&&g(q())})}function el(){const e=document.querySelector("[data-chapter-order-view]");if(!e)return;const t=e.querySelector("[data-chapter-order-list]"),n=e.dataset.novelId;e.querySelector("[data-chapter-order-save]")?.addEventListener("click",()=>{const a=[...e.querySelectorAll("[data-chapter-order-row]")].map(o=>o.dataset.chapterId),r=lo(n,a);if(!r.ok){window.alert(r.error||"บันทึกลำดับไม่สำเร็จ");return}g(q({novelId:n}))}),t&&t.addEventListener("pointerdown",a=>{const r=a.target.closest("[data-chapter-drag]");if(!r||!t.contains(r)||a.pointerType==="mouse"&&a.button!==0)return;const o=r.closest("[data-chapter-order-row]");if(!o)return;a.preventDefault(),r.setPointerCapture(a.pointerId);const s=a.clientY;let c=!1,i=null,d=0;const u=m=>{if(m.pointerId!==a.pointerId)return;if(m.preventDefault(),!c){if(Math.abs(m.clientY-s)<4)return;c=!0;const _=o.getBoundingClientRect();d=s-_.top,i=document.createElement("div"),i.className="chapter-order-row chapter-order-row--placeholder",i.style.height=`${_.height}px`,o.style.width=`${_.width}px`,o.style.left=`${_.left}px`,o.style.top=`${_.top}px`,o.style.position="fixed",o.style.zIndex="30",o.style.pointerEvents="none",o.classList.add("is-dragging"),o.after(i)}o.style.top=`${m.clientY-d}px`;const f=[...t.querySelectorAll("[data-chapter-order-row]")].filter(_=>_!==o);let y=!1;for(const _ of f){const F=_.getBoundingClientRect();if(m.clientY<F.top+F.height/2){_.before(i),y=!0;break}}!y&&f.length&&f[f.length-1].after(i)},p=m=>{m.pointerId===a.pointerId&&(r.removeEventListener("pointermove",u),r.removeEventListener("pointerup",p),r.removeEventListener("pointercancel",p),r.hasPointerCapture(a.pointerId)&&r.releasePointerCapture(a.pointerId),c&&i&&i.replaceWith(o),o.classList.remove("is-dragging"),o.style.position="",o.style.left="",o.style.top="",o.style.width="",o.style.zIndex="",o.style.pointerEvents="")};r.addEventListener("pointermove",u),r.addEventListener("pointerup",p),r.addEventListener("pointercancel",p)})}function tl(e){const t=e.querySelector("[data-cover-file]"),n=e.querySelector("[data-cover-value]"),a=e.querySelector("[data-cover-preview]");!t||!n||t.addEventListener("change",async()=>{const r=t.files?.[0];if(!r)return;const o=await wt(r,{maxSide:900,maxChars:3e5});if(t.value="",!o.ok){A(e,{coverImage:o.error});return}n.value=o.dataUrl,a&&(a.src=n.value,a.hidden=!1),e.querySelector("[data-cover-motif]")?.setAttribute("hidden","");const s=e.querySelector(".writer-cover__plus");s&&(s.hidden=!0),e.querySelector(".writer-cover__frame")?.classList.remove("writer-cover__frame--empty");const c=e.querySelector("[data-cover-pick]");c&&(c.textContent="เปลี่ยนรูปปก"),A(e,{})})}function nl(){const e=document.querySelector("[data-novel-details-form]");if(!e)return;tl(e),e.querySelector("[data-cover-pick]")?.addEventListener("click",()=>{e.querySelector("[data-cover-file]")?.click()});const t=e.querySelector("[data-new-pen-name]"),n=e.querySelector("#novel-author"),a=e.querySelector("[data-pen-add-error]"),r=s=>{a&&(a.textContent=s||"",a.hidden=!s)},o=()=>{let s;try{s=Vr(t?.value)}catch{r(K);return}if(!s.ok){r(s.error);return}if(r(""),t&&(t.value=""),n&&![...n.options].some(c=>c.value===s.name)){const c=document.createElement("option");c.value=s.name,c.textContent=s.name,n.append(c)}n&&(n.value=s.name)};e.querySelector("[data-add-pen-name]")?.addEventListener("click",o),t?.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),o())}),e.addEventListener("submit",s=>{s.preventDefault();const c=new FormData(e),i=String(c.get("novelId")||"").trim(),d=document.querySelector("[data-admin-novel]"),u=d?[...d.querySelectorAll("[data-main-tag].is-on")].map(y=>y.dataset.mainTag):[],p=d?se(d):[],m={title:c.get("title"),author:c.get("author"),teaser:c.get("teaser"),mebUrl:c.get("mebUrl"),coverImage:c.get("coverImage")};let f;try{f=i?ao(i,m):no({...m,tags:u,secondaryTags:p})}catch{A(e,{coverImage:K});return}if(!f.ok){if(A(e,f.errors||{}),f.errors?.tags){const y=d?.querySelector('[data-error-for="tags"]');y&&(y.textContent=f.errors.tags,y.hidden=!1)}return}g(q({novelId:f.novel.id}))})}function al(e){if(!e?.byMonth?.length&&!e?.byYear?.length)return"";const t=(e.byMonth||[]).map(a=>{const r=Gi(a.year,a.month);return`<li><span class="date-part" data-no-wbr>${l(r)}</span><span>${a.thb} บาท</span></li>`}).join(""),n=(e.byYear||[]).map(a=>{const r=zi(a.year);return`<li><span class="date-part" data-no-wbr>${l(r)}</span><span>${a.thb} บาท</span></li>`}).join("");return`
        <div class="sales-topup-periods">
          <div>
            <h4>ยอดเติมรายเดือน (สำหรับภาษี)</h4>
            <ul class="sales-topup-period-list">${t}</ul>
          </div>
          <div>
            <h4>ยอดเติมรายปี (สำหรับภาษี)</h4>
            <ul class="sales-topup-period-list">${n}</ul>
          </div>
        </div>`}function Qn(e){return`ปลดล็อก ${e.unlocks} ครั้ง (${e.unlockCoins} เหรียญ) · โดเนท ${e.donations} ครั้ง (${e.donateCoins} เหรียญ)`}function rl(){const e=zs(),t=e.novels.map(o=>{const s=o.chapters.map(i=>`
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
          <p class="promo-card__summary">${l(Qn(o.totals))}</p>
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
        </section>`}).join(""),n=Xs(),a=n.records.map(o=>{const s=o.createdAt?le(new Date(o.createdAt)):"";return`
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
          <p class="promo-card__summary">${l(Qn(e.overall))}</p>
        </div>
      </article>
      <section class="sales-novel sales-topup">
        <h3>การเติมเหรียญของนักอ่าน</h3>
        <p class="promo-card__summary">ยอดเติมรวม ${n.totals.thb} บาท · ออกเหรียญทั้งหมด ${n.totals.coins} เหรียญ</p>
        ${al(n)}
        ${r}
      </section>
      ${t||'<p class="empty-state">ยังไม่มีข้อมูลนิยาย</p>'}
    </section>
  `}function ol(e){Pc(),Rc(),document.querySelectorAll("[data-font-size]").forEach(n=>{n.addEventListener("click",()=>{const a=Number(n.dataset.fontSize);Es(a);const r=document.querySelector(".reader-shell");r&&r.style.setProperty("--reader-size",`${a}px`),document.querySelectorAll("[data-font-size]").forEach(o=>{const s=Number(o.dataset.fontSize)===a;o.classList.toggle("is-active",s),o.setAttribute("aria-pressed",String(s))})})});const t=document.querySelector("[data-toggle-night]");if(t&&t.addEventListener("click",()=>{const n=er()==="night"?"light":"night";As(n),S(n),t.classList.toggle("is-active",n==="night"),t.setAttribute("aria-pressed",String(n==="night")),t.textContent=n==="night"?"โหมดกลางคืน: เปิด":"โหมดกลางคืน"}),e.name==="reader"&&(window.scrollTo(0,0),b()&&e.novelId&&e.chapterId)){const a=v(e.novelId),r=be(a,e.chapterId);fe(a,r)&&Ao(e.novelId,e.chapterId)}if(ul(),dl(),sl(),pl(),Hr(),qi(),ea(),window.__headerResizeBound||(window.__headerResizeBound=!0,window.addEventListener("resize",ea)),e.name==="report"&&Gn(),e.name==="admin"){const n=new URLSearchParams(window.location.search).get("tab");n==="promos"?He():n==="events"?Fr():n==="reports"?Gn():n==="sales"||(Vi(),Qc(),nl())}ke(),Bc(),_i(),C(),Cc(),e.name==="events"&&window.location.hash&&document.getElementById(window.location.hash.slice(1))?.scrollIntoView({block:"start"})}function sl(){const e=document.querySelector("[data-search-form]");if(!e)return;const t=e.querySelector(".header-search__field"),n=e.querySelector("[data-search-toggle]");e.addEventListener("submit",a=>{a.preventDefault();const r=String(new FormData(e).get("q")||"").trim();g(w({name:"search",q:r}))}),n&&t&&n.addEventListener("click",()=>{const a=!e.classList.contains("is-open");e.classList.toggle("is-open",a),n.setAttribute("aria-expanded",String(a)),n.setAttribute("aria-label",a?"ปิดช่องค้นหา":"เปิดช่องค้นหา"),a?t.focus():t.blur()})}function il(){const e=Ga();return e.length?`<ul class="header-inbox__list">${e.map(t=>{const n=t.readAt?" is-read":"",a=Tr(t.createdAt);return`<li>
      <a class="inbox-item${n}" href="${l(t.href)}" data-link data-inbox-item="${l(t.id)}"${t.type==="report"?" data-inbox-report":""}>
        <span class="inbox-item__kind">${l(t.kindLabel)}</span>
        <span class="inbox-item__title">${l(t.title)}</span>
        <span class="inbox-item__body">${tc(t.body)}</span>
        ${a?`<span class="inbox-item__date">${a}</span>`:""}
      </a>
    </li>`}).join("")}</ul>`:'<p class="header-inbox__empty">ยังไม่มีการแจ้งเตือน</p>'}function cl(){const e=Pt(),t=e>99?"99+":String(e);return`
          <div class="header-inbox" data-inbox>
            <button type="button" class="header-inbox__btn" data-inbox-toggle aria-expanded="false" aria-haspopup="true" aria-controls="inbox-panel">
              <span class="header-inbox__icon">
                ${ui}
                <span class="header-inbox__badge" data-inbox-badge${e?"":" hidden"}>${e?l(t):""}</span>
              </span>
              <span class="header-inbox__label">กล่องข้อความ</span>
            </button>
            <div class="header-inbox__panel" id="inbox-panel" hidden role="region" aria-label="กล่องข้อความ">
              <p class="header-inbox__heading">กล่องข้อความ</p>
              ${il()}
            </div>
          </div>`}function Yt(){const e=document.querySelector("[data-inbox]");if(!e)return;const t=e.querySelector("[data-inbox-toggle]"),n=e.querySelector(".header-inbox__panel");n&&(n.hidden=!0),t&&t.setAttribute("aria-expanded","false")}function ll(){const e=document.querySelector("[data-account-toggle]"),t=document.querySelector(".account-menu__list");t&&(t.hidden=!0),e&&e.setAttribute("aria-expanded","false")}function ea(){const e=document.querySelector(".site-header");if(!e)return;const t=Math.round(e.getBoundingClientRect().height);t>0&&document.documentElement.style.setProperty("--header-h",`${t}px`)}function dl(){const e=document.querySelector("[data-inbox]");if(!e)return;const t=e.querySelector("[data-inbox-toggle]"),n=e.querySelector(".header-inbox__panel"),a=e.querySelector("[data-inbox-badge]");!t||!n||(t.addEventListener("click",r=>{r.stopPropagation(),ll();const o=n.hidden;if(n.hidden=!o,t.setAttribute("aria-expanded",String(o)),o){if(ws(),a){const s=Pt();a.hidden=s===0,a.textContent=s?s>99?"99+":String(s):""}n.querySelectorAll(".inbox-item:not([data-inbox-report])").forEach(s=>s.classList.add("is-read"))}}),n.addEventListener("click",r=>{const o=r.target.closest("[data-inbox-item]");if(o&&(ks(o.dataset.inboxItem),o.classList.add("is-read"),a)){const s=Pt();a.hidden=s===0,a.textContent=s?s>99?"99+":String(s):""}}),document.addEventListener("click",r=>{r.target.closest("[data-inbox]")||Yt()},{once:!0}),document.addEventListener("keydown",r=>{r.key==="Escape"&&Yt()},{once:!0}))}function ul(){const e=document.querySelector("[data-account-toggle]"),t=document.querySelector(".account-menu__list");e&&t&&(e.addEventListener("click",a=>{a.stopPropagation(),Yt();const r=t.hidden;t.hidden=!r,e.setAttribute("aria-expanded",String(r))}),document.addEventListener("click",a=>{a.target.closest(".account-menu")||(t.hidden=!0,e.setAttribute("aria-expanded","false"))},{once:!0}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(t.hidden=!0,e.setAttribute("aria-expanded","false"))},{once:!0}));const n=document.querySelector("[data-logout]");n&&n.addEventListener("click",()=>{vo(),g("/")})}function pl(){document.querySelectorAll("[data-follow]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.follow;if(!b()){Oi(T());return}const n=_o(t);if(!n.ok)return;const a=n.following;e.classList.toggle("is-following",a),e.setAttribute("aria-pressed",String(a));const r=e.querySelector("[data-follow-label]");r&&(r.textContent=a?"อยู่ในชั้นหนังสือแล้ว":"เพิ่มเข้าชั้น");const o=e.querySelector(".follow-btn__icon");o&&(o.outerHTML=a?mr:pr)})})}function Hr(){const e=document.querySelector("[data-google-placeholder]");e&&e.addEventListener("click",()=>{const o=document.querySelector("[data-google-message]");o&&(o.hidden=!1)});const t=document.querySelector("[data-signup-form]");t&&t.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await bo({displayName:c.get("displayName"),email:c.get("email"),password:c.get("password"),confirm:c.get("confirm"),acceptTerms:c.get("acceptTerms")==="on"});if(!i.ok){A(s,i.errors);return}Ts(),g(et())});const n=document.querySelector("[data-login-form]");n&&n.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await yo({email:c.get("email"),password:c.get("password")});if(!i.ok){A(s,i.errors);return}g(et())});const a=document.querySelector("[data-forgot-form]");a&&a.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await Io({email:c.get("email")});if(!i.ok){A(s,i.errors);return}wr(s);const d=document.querySelector("[data-forgot-confirm]");if(!d)return;const u=i.resetPath?`<p class="forgot-mock-link">สำหรับต้นแบบนี้ ไม่มีการส่งอีเมลจริง ให้เปิด <a href="${i.resetPath}" data-link>ลิงก์ตั้งรหัสผ่านใหม่</a> เพื่อจำลองขั้นตอนจากอีเมล</p>`:'<p class="forgot-mock-link">สำหรับต้นแบบนี้ ไม่มีการส่งอีเมลจริง หากอีเมลนี้มีในระบบ ลิงก์จะปรากฏที่นี่</p>';d.hidden=!1,d.innerHTML=`
        <p class="form-success">หากอีเมลนี้มีอยู่ในระบบ ระบบจะส่งลิงก์ตั้งรหัสผ่านใหม่ให้ (ต้นแบบ: ไม่มีการส่งอีเมลจริง)</p>
        ${u}
      `});const r=document.querySelector("[data-reset-form]");r&&r.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await Do({token:c.get("token"),password:c.get("password"),confirm:c.get("confirm")});if(!i.ok){A(s,i.errors);return}g("/login?reset=1")})}function jr(e){if(Ss())return!1;if(e.name==="novel"){const t=v(e.id);return!!(t&&Ye(t))}if(e.name==="reader"){const t=v(e.novelId);return!!(t&&Ye(t))}return!1}function ml({onConfirm:e,onCancel:t}){const n=document.querySelector(".modal-backdrop");n&&n.remove();const a=document.createElement("div");a.className="modal-backdrop",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-labelledby","age-gate-title"),a.innerHTML=`
    <div class="modal">
      <span class="badge-18">18+</span>
      <h2 id="age-gate-title">เนื้อหาสำหรับผู้มีอายุ 18 ปีขึ้นไป</h2>
      <p>หมวดนิยายอีโรติกและเรื่องที่ติดป้าย 18+ ต้องยืนยันอายุก่อนเข้าอ่าน คุณมีอายุ 18 ปีขึ้นไปหรือไม่?</p>
      <div class="modal__actions">
        <button class="btn btn-primary" type="button" data-age-yes>ฉันมีอายุ 18 ปีขึ้นไป</button>
        <button class="btn btn-ghost" type="button" data-age-no>ออก</button>
      </div>
    </div>
  `,document.body.appendChild(a),a.querySelector("[data-age-yes]").focus(),a.querySelector("[data-age-yes]").addEventListener("click",()=>{_s(),a.remove(),e()}),a.querySelector("[data-age-no]").addEventListener("click",()=>{a.remove(),t()})}function fl(e,{onNavigate:t}){e.addEventListener("click",n=>{const a=n.target.closest("a[data-link]");if(!a||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;if(a.getAttribute("aria-disabled")==="true"){n.preventDefault();return}const r=new URL(a.href,window.location.origin);r.origin===window.location.origin&&(n.preventDefault(),t(`${r.pathname}${r.search}`,a))})}function hl(){const e=lt();B(),M({force:e}),Wa({force:e}),Lo()}const gl=document.getElementById("app");let Oe=null;function bl(e){return e.name==="home"?Si():e.name==="novel"?Ai(e.id):e.name==="reader"?Ni(e.novelId,e.chapterId):e.name==="login"?Ei():e.name==="signup"?xi():e.name==="bookshelf"?Ii():e.name==="profile"?Di():e.name==="purchases"?Bi():e.name==="terms"?Pi():e.name==="privacy"?Ui():e.name==="forgot"?Ri():e.name==="reset"?Mi():e.name==="admin"?Fi():e.name==="coins"?Nc():e.name==="events"?Mc():e.name==="follow"?Fc():e.name==="search"?wi():e.name==="report"?Sc(e.id):Sn()}function Dt(e){hl(),gl.innerHTML=bl(e),ol(e)}function tt(e,{replace:t=!1}={}){const n=new URL(e,window.location.origin),a=Re(n.pathname),r=ma(n.searchParams.get("next"));if((a.name==="bookshelf"||a.name==="coins"||a.name==="profile"||a.name==="purchases"||a.name==="report")&&!b()){g(`/login?next=${encodeURIComponent(n.pathname+n.search)}`,{replace:!0});return}if((a.name==="login"||a.name==="signup")&&b()){g(r,{replace:!0});return}if(jr(a)){Oe=`${n.pathname}${n.search}`,ml({onConfirm(){const o=Oe||`${n.pathname}${n.search}`;Oe=null,T()!==o&&(t?history.replaceState({},"",o):history.pushState({},"",o));const s=new URL(o,window.location.origin);Dt(Re(s.pathname))},onCancel(){Oe=null;const o=Re();(o.name==="novel"||o.name==="reader")&&g("/",{replace:!0})}}),window.location.pathname===n.pathname&&(a.name==="novel"||a.name==="reader")&&Dt({name:"home"});return}Dt(a)}fl(document,{onNavigate(e,t){const n=new URL(e,window.location.origin),a=t?.dataset.novelId,r=a?v(a):null,o=Re(n.pathname);if(!!(r&&Ye(r)&&jr(o))){tt(e);return}T()!==e&&history.pushState({},"",e),tt(e)}});window.addEventListener("popstate",()=>{tt(T(),{replace:!0})});S("light");fo().then(()=>{tt(T(),{replace:!0})});
