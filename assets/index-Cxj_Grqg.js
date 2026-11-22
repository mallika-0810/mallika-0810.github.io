(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Re(e=window.location.pathname){const t=e.replace(/\/+$/,"")||"/";if(t==="/")return{name:"home"};const n={"/login":"login","/signup":"signup","/bookshelf":"bookshelf","/terms":"terms","/privacy":"privacy","/forgot-password":"forgot","/reset-password":"reset","/admin":"admin","/coins":"coins","/search":"search","/profile":"profile","/purchases":"purchases","/events":"events","/follow":"follow","/report":"report"};if(n[t])return{name:n[t]};let a=t.match(/^\/novel\/([^/]+)$/);return a?{name:"novel",id:decodeURIComponent(a[1])}:(a=t.match(/^\/report\/([^/]+)$/),a?{name:"report",id:decodeURIComponent(a[1])}:(a=t.match(/^\/read\/([^/]+)\/([^/]+)$/),a?{name:"reader",novelId:decodeURIComponent(a[1]),chapterId:decodeURIComponent(a[2])}:{name:"notfound"}))}function w(e){if(e.name==="home")return"/";if(e.name==="login")return e.next?`/login?next=${encodeURIComponent(e.next)}`:"/login";if(e.name==="signup")return e.next?`/signup?next=${encodeURIComponent(e.next)}`:"/signup";if(e.name==="bookshelf")return"/bookshelf";if(e.name==="terms")return"/terms";if(e.name==="privacy")return"/privacy";if(e.name==="forgot")return"/forgot-password";if(e.name==="reset")return e.token?`/reset-password?token=${encodeURIComponent(e.token)}`:"/reset-password";if(e.name==="admin")return"/admin";if(e.name==="coins")return"/coins";if(e.name==="events")return"/events";if(e.name==="follow")return"/follow";if(e.name==="report")return e.id?`/report/${e.id}`:"/report";if(e.name==="profile")return"/profile";if(e.name==="purchases")return"/purchases";if(e.name==="search"){const t=e.q==null?"":String(e.q).trim();return t?`/search?q=${encodeURIComponent(t)}`:"/search"}return e.name==="novel"?`/novel/${e.id}`:e.name==="reader"?`/read/${e.novelId}/${e.chapterId}`:"/"}function I(){return`${window.location.pathname}${window.location.search}`}function g(e,{replace:t=!1}={}){const n=typeof e=="string"?e:w(e);t?history.replaceState({},"",n):history.pushState({},"",n),window.dispatchEvent(new PopStateEvent("popstate"))}const je=[{id:"teen-romance",name:"นิยายรักวัยว้าวุ่น"},{id:"romance",name:"นิยายรัก"},{id:"romantic",name:"นิยายโรมานซ์"},{id:"erotic",name:"นิยายอีโรติก",isAdult:!0}],k={name:"บ้านนิยายของ J.Jusmin และ Mali_810",shortName:"บ้านนิยาย",headerName:"บ้านนิยาย J.Jusmin",penNames:["J.Jusmin","Mali_810"]},zn=[{id:"school-bell-floor-four",title:"เสียงระฆังที่ชั้นสี่",author:"J.Jusmin",tags:["teen-romance","romance"],secondaryTags:["แอบรัก","วิศวะ","รักในรั้วมหาลัย"],teaser:"ทุกครั้งที่ระฆังดัง เธอจะยืนรออยู่ที่บันไดชั้นสี่ — แต่ปีนี้เขาเดินผ่านไปโดยไม่เหลียวหลัง",synopsis:`นับตั้งแต่มัธยมต้น บันไดหนีไฟชั้นสี่คือพื้นที่ลับของเนยกับนนท์
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

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`}]}],Fr=["มาเฟีย","วิศวะ","แอบรัก","พระเอกคลั่งรัก","คู่กัด","หวานน่ารัก","ดราม่า","คอมเมดี้","รักในรั้วมหาลัย","ระบบ","ย้อนเวลา","แฟนตาซี","CEO","บอสตัวร้าย","แพทย์","เพื่อนสนิท","ฮีลใจ","ชีวิตในวัยเรียน"];function Yt(e){return je.find(t=>t.id===e)}function be(e,t){return e?.chapters.find(n=>n.id===t)}const Xn="banNiyai_penNames",Qn="banNiyai_categories",ea=["J.Jusmin","Mali_810","เสี่ยวโม่ลี่","มะลิขี้เมา"];function ta(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function na(e,t){localStorage.setItem(e,JSON.stringify(t))}function tt(e,t){return String(e||"").replace(/\s+/g," ").trim().slice(0,t)}function aa(e,t){return String(e).toLowerCase()===String(t).toLowerCase()}function ra(){const e=new Set(ea.map(n=>n.toLowerCase())),t=[];for(const n of ta(Xn,[])){const a=tt(n,40);!a||e.has(a.toLowerCase())||(e.add(a.toLowerCase()),t.push(a))}return t}function Ke(){return[...ea,...ra()]}function oa(e){const t=String(e||"").trim();return!!t&&Ke().some(n=>n===t)}function Hr(e){const t=tt(e,40);return t?t.length<2?{ok:!1,error:"นามปากกาต้องมีอย่างน้อย 2 ตัวอักษร"}:Ke().some(n=>aa(n,t))?{ok:!1,error:"นามปากกานี้มีอยู่แล้ว"}:(na(Xn,[...ra(),t]),{ok:!0,name:t,names:Ke()}):{ok:!1,error:"กรุณากรอกนามปากกา"}}function sa(){const e=new Set(je.map(a=>a.id)),t=new Set(je.map(a=>a.name.toLowerCase())),n=[];for(const a of ta(Qn,[])){const r=tt(a?.name,30),o=String(a?.id||"").trim();!r||!o||e.has(o)||t.has(r.toLowerCase())||(e.add(o),t.add(r.toLowerCase()),n.push({id:o,name:r}))}return n}function O(){return[...je,...sa()]}function jr(e){return O().find(t=>t.id===e)||null}function Kr(e){const t=e.normalize("NFKD").replace(/[^\w-]+/g,"-").replace(/^-+|-+$/g,"").toLowerCase().slice(0,24)||"cat",n=new Set(O().map(o=>o.id));let a=`custom-${t}`;if(!n.has(a))return a;let r=2;for(;n.has(`${a}-${r}`);)r+=1;return`${a}-${r}`}function Vr(e){const t=tt(e,30);if(!t)return{ok:!1,error:"กรุณากรอกชื่อหมวด"};if(O().some(a=>aa(a.name,t)))return{ok:!1,error:"หมวดนี้มีอยู่แล้ว"};const n={id:Kr(t),name:t};return na(Qn,[...sa(),n]),{ok:!0,category:n,categories:O()}}const nt="banNiyai_novelMeta",Dt="banNiyai_tagSuggestions",we="banNiyai_chapters",Ae="banNiyai_customNovels",ia="banNiyai_deletedNovels",An="banNiyai_unlocks",Nn="banNiyai_walletTx",xn="banNiyai_donations",En="banNiyai_progress";function U(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function E(e,t){localStorage.setItem(e,JSON.stringify(t))}function Ne(e){return String(e||"").trim().replace(/\s+/g," ")}function $e(){const e=U(Dt,null),t=Array.isArray(e)&&e.length?e:[...Fr],n=new Set;return t.map(Ne).filter(a=>{if(!a)return!1;const r=a.toLowerCase();return n.has(r)?!1:(n.add(r),!0)})}function Jt(e){const t=Ne(e);if(!t)return $e();const n=$e();return n.some(a=>a.toLowerCase()===t.toLowerCase())||n.push(t),E(Dt,n),$e()}function at(){return U(nt,{})}function Yr(e){return Array.isArray(e)?{replace:!1,items:e}:e&&typeof e=="object"&&Array.isArray(e.items)?{replace:!!e.replace,items:e.items}:{replace:!1,items:[]}}function Jr(e,t){const{replace:n,items:a}=Yr(t);if(n)return(a||[]).filter(i=>i&&i.id!=null&&i.id!=="").map(i=>({...i,id:String(i.id)}));const r=Array.isArray(e)?e:[],o=new Map(r.map(i=>[String(i.id),{...i}]));for(const i of a){if(!i||i.id==null||i.id==="")continue;const d=String(i.id);o.set(d,o.has(d)?{...o.get(d),...i,id:d}:{...i,id:d})}const s=new Set,c=[];for(const i of r){const d=String(i.id);c.push(o.get(d)),s.add(d)}for(const i of a){if(!i||i.id==null||i.id==="")continue;const d=String(i.id);s.has(d)||(c.push(o.get(d)),s.add(d))}return c}function In(e,t,n){const a=t[e.id]||{};return{...e,title:a.title!=null?a.title:e.title,author:a.author!=null?a.author:e.author,teaser:a.teaser!=null?a.teaser:e.teaser,mebUrl:a.mebUrl!=null?a.mebUrl:e.mebUrl||"",cover:a.cover!=null?a.cover:e.cover,tags:Array.isArray(a.tags)?a.tags:e.tags,secondaryTags:Array.isArray(a.secondaryTags)?a.secondaryTags:e.secondaryTags||[],chapters:Jr(e.chapters,n[e.id])}}function xe(){const e=U(Ae,[]);return Array.isArray(e)?e:[]}function ca(){const e=U(ia,[]);return Array.isArray(e)?e.map(String):[]}function ye(){const e=at(),t=U(we,{}),n=new Set(ca()),a=zn.map(o=>In(o,e,t)),r=xe().map(o=>In(o,e,t));return[...a,...r].filter(o=>!n.has(String(o.id)))}function v(e){return ye().find(t=>t.id===e)}function Zr(e){return ye().filter(t=>t.tags.includes(e))}function Ve(e){return!!e?.tags?.some(t=>Yt(t)?.isAdult)}function Wr(e,{tags:t,secondaryTags:n}){if(!v(e))return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const r=[...new Set((t||[]).filter(u=>O().some(p=>p.id===u)))];if(!r.length)return{ok:!1,error:"กรุณาเลือกหมวดหลักอย่างน้อย 1 หมวด"};const o=new Set,s=[];for(const u of n||[]){const p=Ne(u);if(!p||O().some(f=>f.name===p))continue;const m=p.toLowerCase();o.has(m)||(o.add(m),s.push(p))}const c=at();c[e]={...c[e]||{},tags:r,secondaryTags:s},E(nt,c);const i=xe(),d=i.findIndex(u=>u.id===e);return d>=0&&(i[d]={...i[d],tags:r,secondaryTags:s},E(Ae,i)),s.forEach(u=>Jt(u)),{ok:!0,novel:v(e)}}function Gr(e){const t=new Set,n=[];for(const a of e||[]){const r=Ne(a);if(!r||O().some(s=>s.name===r))continue;const o=r.toLowerCase();t.has(o)||(t.add(o),n.push(r))}return n}function la(e){const t=String(e??"").trim();if(!t)return{ok:!0,url:""};try{const n=new URL(t);if(n.protocol==="https:"||n.protocol==="http:")return{ok:!0,url:n.href}}catch{}return{ok:!1,url:""}}function zr(e={}){const t=String(e.title||"").trim(),n=String(e.author||"").trim(),a={},r=la(e.mebUrl);r.ok||(a.mebUrl="กรุณาวางลิงก์ที่ขึ้นต้นด้วย https://"),t||(a.title="กรุณากรอกชื่อเรื่อง"),oa(n)||(a.author="กรุณาเลือกนามปากกา");const o=[...new Set((e.tags||[]).filter(p=>O().some(m=>m.id===p)))];if(Object.keys(a).length)return{ok:!1,errors:a};const s=Gr(e.secondaryTags),c=String(e.coverImage||"").trim(),i=String(e.teaser||"").trim(),d=`n-${Date.now().toString(36)}`,u={id:d,title:t,author:n,tags:o,secondaryTags:s,teaser:i,mebUrl:r.url,synopsis:"",cover:c?{image:c,from:"#F7B3BE",to:"#8A5A9A",motif:""}:{from:"#F7B3BE",to:"#8A5A9A",motif:t},chapters:[],createdAt:new Date().toISOString()};return E(Ae,[...xe(),u]),s.forEach(p=>Jt(p)),{ok:!0,novel:v(d)}}function Tn(e,t,n){return e?{image:e,from:t?.from||"#F7B3BE",to:t?.to||"#8A5A9A",motif:""}:t||{from:"#F7B3BE",to:"#8A5A9A",motif:n||""}}function Xr(e,t={}){const n=v(e);if(!n)return{ok:!1,errors:{title:"ไม่พบนิยายเรื่องนี้"}};const a=String(t.title||"").trim(),r=String(t.author||"").trim(),o=String(t.teaser??n.teaser??"").trim(),s={},c=Object.prototype.hasOwnProperty.call(t,"mebUrl")?la(t.mebUrl):{ok:!0,url:n.mebUrl||""};if(c.ok||(s.mebUrl="กรุณาวางลิงก์ที่ขึ้นต้นด้วย https://"),a||(s.title="กรุณากรอกชื่อเรื่อง"),!oa(r)&&r!==(n.author||"").trim()&&(s.author="กรุณาเลือกนามปากกา"),Object.keys(s).length)return{ok:!1,errors:s};let i=n.cover||Tn("",null,a);if(Object.prototype.hasOwnProperty.call(t,"coverImage")){const f=String(t.coverImage||"").trim();f&&(i=Tn(f,i,a))}const d={title:a,author:r,teaser:o,mebUrl:c.url,cover:i},u=at();u[e]={...u[e]||{},...d},E(nt,u);const p=xe(),m=p.findIndex(f=>f.id===e);return m>=0&&(p[m]={...p[m],...d},E(Ae,p)),{ok:!0,novel:v(e)}}function Qr(e){if(!v(e))return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};if(E(Ae,xe().filter(r=>r.id!==e)),zn.some(r=>r.id===e)){const r=ca();r.includes(e)||E(ia,[...r,e])}const n=at();delete n[e],E(nt,n);const a=U(we,{});return delete a[e],E(we,a),{ok:!0}}function Ee(e){if(!e)return null;const t=String(e).trim();if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const a=new Date(`${t}T00:00:00+07:00`);return Number.isNaN(a.getTime())?null:a}const n=new Date(t);return Number.isNaN(n.getTime())?null:n}function ve(e,t=new Date){const n=Ee(e?.publishedAt);return!!(n&&n.getTime()<=t.getTime())}function Zt(e,t=new Date){return(e?.chapters||[]).filter(n=>ve(n,t))}function eo(e){let t=0;for(const n of e||[]){const a=Number(n.id);Number.isInteger(a)&&a>t&&(t=a)}return String(t+1)}function rt(e,t){const n=U(we,{});n[e]={replace:!0,items:t},E(we,n)}function to(e,t){const n=U(An,{});let a=!1;for(const u of Object.keys(n||{})){const p=n[u];if(!p||typeof p!="object")continue;const m={...p},f=[];for(const y of Object.keys(p)){const _=p[y];if(!_||!(_.novelId===e||y.startsWith(`${e}:`)))continue;const Ce=_.chapterId!=null?String(_.chapterId):y.slice(e.length+1),W=t[Ce];!W||W===Ce||(delete m[y],f.push({key:`${e}:${W}`,rec:{..._,novelId:e,chapterId:W}}),a=!0)}for(const y of f)m[y.key]=y.rec;n[u]=m}a&&E(An,n);const r=U(Nn,{});let o=!1;for(const u of Object.values(r||{}))if(Array.isArray(u))for(const p of u){if(!p||p.novelId!==e||p.chapterId==null)continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,o=!0)}o&&E(Nn,r);const s=U(xn,{});let c=!1;for(const u of Object.values(s||{}))if(Array.isArray(u))for(const p of u){if(!p||p.novelId!==e||p.chapterId==null||p.chapterId==="")continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,c=!0)}c&&E(xn,s);const i=U(En,{});let d=!1;for(const u of Object.values(i||{})){if(!u||typeof u!="object")continue;const p=u[e];if(!p||p.chapterId==null)continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,d=!0)}d&&E(En,i)}function da(e,t,n){const a=v(e),r=a?.chapters?.find(s=>String(s.id)===String(t));if(!a||!r)return{ok:!1,errors:{id:"ไม่พบตอนที่ต้องการแก้ไข"}};const o=(a.chapters||[]).map(s=>String(s.id)===String(t)?{...s,...n,id:String(t),updatedAt:new Date().toISOString()}:{...s});return rt(e,o),{ok:!0,chapter:v(e).chapters.find(s=>String(s.id)===String(t)),novel:v(e)}}function no(e,t={}){const n=v(e);if(!n)return{ok:!1,errors:{novelId:"ไม่พบนิยายเรื่องนี้"}};const a=String(t.title||"").trim(),r=String(t.content||"").trim(),o={};if(a||(o.title="กรุณากรอกชื่อตอน"),r||(o.content="กรุณากรอกเนื้อหาตอน"),Object.keys(o).length)return{ok:!1,errors:o};const s=(n.chapters||[]).map(d=>({...d})),c=eo(s),i=new Date().toISOString();return s.push({id:c,title:a,content:r,price:0,free:!0,publishedAt:"",createdAt:i,updatedAt:i}),rt(e,s),{ok:!0,chapter:v(e).chapters.find(d=>String(d.id)===c),novel:v(e)}}function ao(e,t){const n=v(e);if(!n)return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const a=(n.chapters||[]).filter(r=>String(r.id)!==String(t));return a.length===(n.chapters||[]).length?{ok:!1,error:"ไม่พบตอนนี้"}:(rt(e,a),{ok:!0,novel:v(e)})}function ro(e,t){const n=v(e);if(!n)return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const a=new Map((n.chapters||[]).map(c=>[String(c.id),{...c}])),r=(t||[]).map(c=>String(c));if(r.length!==a.size||r.some(c=>!a.has(c)))return{ok:!1,error:"ลำดับตอนไม่ถูกต้อง"};const o={},s=r.map((c,i)=>{const d=String(i+1);return o[c]=d,{...a.get(c),id:d}});return rt(e,s),to(e,o),{ok:!0,novel:v(e)}}function oo(e,t,n){const a=n===""||n==null?0:Number(n);return!Number.isFinite(a)||a<0||!Number.isInteger(a)?{ok:!1,errors:{price:"กรุณากรอกราคาเป็นจำนวนเต็มไม่ติดลบ (0 = ฟรี)"}}:da(e,t,{price:a,free:a===0})}function so(e,t,n={}){const a=n.publishMode==="schedule"?"schedule":"now";let r="";if(a==="now")r=new Date().toISOString();else{const o=Ee(n.publishedAt);if(!o)return{ok:!1,errors:{publishedAt:"กรุณาเลือกวันและเวลาที่จะเผยแพร่"}};r=o.toISOString()}return da(e,t,{publishedAt:r})}const he="banNiyai_users",Ie="banNiyai_session",ot="banNiyai_follows",Wt="banNiyai_progress",Se="banNiyai_resetTokens";function K(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function H(e,t){localStorage.setItem(e,JSON.stringify(t))}function ce(e){return String(e||"").trim().toLowerCase()}async function st(e,t){const n=new TextEncoder().encode(`${ce(e)}:${t}:banNiyai-prototype`),a=await crypto.subtle.digest("SHA-256",n);return[...new Uint8Array(a)].map(r=>r.toString(16).padStart(2,"0")).join("")}function re(){return K(he,[])}function Te(e){return e?{id:e.id,displayName:e.displayName,email:e.email,avatar:e.avatar||"",isAuthor:!!e.isAuthor}:null}function b(){const e=K(Ie,null);if(!e?.userId)return null;const t=re().find(n=>n.id===e.userId);return Te(t)}function io(e){return e?Te(re().find(t=>t.id===e)):null}function it(e=b()){return!!e?.isAuthor}const X={email:"author@banniyai.demo",password:"author1234",displayName:"J.Jusmin"};async function co(){const e=re(),t=X.email,n=e.find(r=>r.email===t),a=await st(t,X.password);if(n){(!n.isAuthor||n.passwordHash!==a)&&(n.isAuthor=!0,n.passwordHash=a,n.displayName=n.displayName||X.displayName,H(he,e));return}e.push({id:"demo-author",displayName:X.displayName,email:t,passwordHash:a,isAuthor:!0,acceptedTermsAt:new Date().toISOString(),createdAt:new Date().toISOString()}),H(he,e)}function ua(e,t="/"){if(!e)return t;const n=String(e);return!n.startsWith("/")||n.startsWith("//")||n.includes("://")?t:n}function lo({displayName:e,email:t,password:n,confirm:a,acceptTerms:r}){const o={},s=String(e||"").trim(),c=ce(t);return s?s.length<2&&(o.displayName="ชื่อที่แสดงต้องมีอย่างน้อย 2 ตัวอักษร"):o.displayName="กรุณากรอกชื่อที่แสดง",c?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)||(o.email="กรุณากรอกอีเมลให้ถูกต้อง"):o.email="กรุณากรอกอีเมล",n?String(n).length<8&&(o.password="รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"):o.password="กรุณากรอกรหัสผ่าน",a?n!==a&&(o.confirm="รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน"):o.confirm="กรุณายืนยันรหัสผ่าน",r||(o.acceptTerms="กรุณายอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว"),{ok:Object.keys(o).length===0,errors:o}}function uo({email:e,password:t}){const n={};return ce(e)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ce(e))||(n.email="กรุณากรอกอีเมลให้ถูกต้อง"):n.email="กรุณากรอกอีเมล",t||(n.password="กรุณากรอกรหัสผ่าน"),{ok:Object.keys(n).length===0,errors:n}}function pa(e){H(Ie,{userId:e.id,startedAt:new Date().toISOString()})}async function po({displayName:e,email:t,password:n,confirm:a,acceptTerms:r}){const o=lo({displayName:e,email:t,password:n,confirm:a,acceptTerms:r});if(!o.ok)return{ok:!1,errors:o.errors};const s=ce(t),c=re();if(c.some(d=>d.email===s))return{ok:!1,errors:{email:"อีเมลนี้ถูกใช้สมัครแล้ว"}};const i={id:crypto.randomUUID(),displayName:String(e).trim(),email:s,passwordHash:await st(s,n),acceptedTermsAt:new Date().toISOString(),createdAt:new Date().toISOString()};return c.push(i),H(he,c),pa(i),{ok:!0,user:Te(i)}}async function mo({email:e,password:t}){const n=uo({email:e,password:t});if(!n.ok)return{ok:!1,errors:n.errors};const a=ce(e),r=re().find(s=>s.email===a),o=await st(a,t);return!r||r.passwordHash!==o?{ok:!1,errors:{form:"อีเมลหรือรหัสผ่านไม่ถูกต้อง"}}:(pa(r),{ok:!0,user:Te(r)})}function fo(){localStorage.removeItem(Ie)}function ho({displayName:e,avatar:t}={}){const n=K(Ie,null);if(!n?.userId)return{ok:!1,errors:{form:"กรุณาเข้าสู่ระบบก่อน"}};const a=re(),r=a.find(s=>s.id===n.userId);if(!r)return{ok:!1,errors:{form:"ไม่พบบัญชีผู้ใช้"}};const o={};if(e!==void 0){const s=String(e||"").trim();s?s.length<2?o.displayName="ชื่อที่แสดงต้องมีอย่างน้อย 2 ตัวอักษร":r.displayName=s:o.displayName="กรุณากรอกชื่อที่แสดง"}return Object.keys(o).length?{ok:!1,errors:o}:(t!==void 0&&(r.avatar=t||""),H(he,a),{ok:!0,user:Te(r)})}function Gt(e,t){const n=b();if(!n)return null;const a=K(e,{}),r=a[n.id]||go(e),o=t(r);return a[n.id]=o,H(e,a),o}function go(e){return e===ot?[]:e===Wt?{}:null}function ma(){const e=b();return e?K(ot,{})[e.id]||[]:[]}function fa(e){return ma().some(t=>t.novelId===e)}function bo(e){return b()?(Gt(ot,n=>n.some(a=>a.novelId===e)?n:[...n,{novelId:e,followedAt:new Date().toISOString()}]),{ok:!0,following:!0}):{ok:!1,reason:"auth"}}function yo(e){return b()?(Gt(ot,n=>n.filter(a=>a.novelId!==e)),{ok:!0,following:!1}):{ok:!1,reason:"auth"}}function vo(e){return fa(e)?yo(e):bo(e)}function $o(e,t){return b()?(Gt(Wt,a=>({...a,[e]:{chapterId:t,updatedAt:new Date().toISOString()}})),{ok:!0}):{ok:!1,reason:"auth"}}function ko(){const e=b();if(!e)return[];const t=ma(),n=K(Wt,{})[e.id]||{};return t.slice().sort((a,r)=>String(r.followedAt).localeCompare(String(a.followedAt))).map(a=>({novelId:a.novelId,followedAt:a.followedAt,progress:n[a.novelId]||null}))}function wo(e){const t={},n=ce(e);return n?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||(t.email="กรุณากรอกอีเมลให้ถูกต้อง"):t.email="กรุณากรอกอีเมล",{ok:Object.keys(t).length===0,errors:t,email:n}}function So({password:e,confirm:t}){const n={};return e?String(e).length<8&&(n.password="รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"):n.password="กรุณากรอกรหัสผ่านใหม่",t?e!==t&&(n.confirm="รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน"):n.confirm="กรุณายืนยันรหัสผ่านใหม่",{ok:Object.keys(n).length===0,errors:n}}async function _o({email:e}){const t=wo(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=re().find(r=>r.email===t.email);let a=null;if(n){const r=crypto.randomUUID(),o=K(Se,{});o[r]={userId:n.id,email:n.email,createdAt:new Date().toISOString(),used:!1},H(Se,o),a=`/reset-password?token=${encodeURIComponent(r)}`}return{ok:!0,resetPath:a}}function Ao(e){if(!e)return null;const t=K(Se,{})[e];return!t||t.used?null:t}async function No({token:e,password:t,confirm:n}){const a=So({password:t,confirm:n});if(!a.ok)return{ok:!1,errors:a.errors};const r=K(Se,{}),o=r[e];if(!o||o.used)return{ok:!1,errors:{form:"ลิงก์ตั้งรหัสผ่านใหม่ไม่ถูกต้องหรือถูกใช้ไปแล้ว"}};const s=re(),c=s.findIndex(i=>i.id===o.userId);return c<0?{ok:!1,errors:{form:"ลิงก์ตั้งรหัสผ่านใหม่ไม่ถูกต้องหรือถูกใช้ไปแล้ว"}}:(s[c]={...s[c],passwordHash:await st(s[c].email,t)},H(he,s),r[e]={...o,used:!0,usedAt:new Date().toISOString()},H(Se,r),localStorage.removeItem(Ie),{ok:!0})}const Ye="banNiyai_promos",Q="banNiyai_bonusSettings",ha="banNiyai_redeemCodes",xo="promo-open-house",zt="4h4",ga="banNiyai_seedVersion";function ct(){try{return localStorage.getItem(ga)!==zt}catch{return!0}}function Eo(){localStorage.setItem(ga,zt)}function j(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function V(e,t){localStorage.setItem(e,JSON.stringify(t))}function Xt(e){return Number(e.thb)||Math.max(0,Number(e.coins)-Number(e.bonus||0))}function Io(e=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(e)}function me(e){if(e===""||e==null||Number(e)<=0)return null;const t=Number(e);return Number.isFinite(t)?t:null}function ba(e,t){return Math.ceil(e*(Number(t)||0)/100)}function ya(e){if(!e||!e.id)return null;const t=e.packageIds==="all"||e.allPackages?"all":Array.isArray(e.packageIds)?e.packageIds.filter(Boolean):[],n=e.bonusType==="fixed"?"fixed":"percent",a=Math.max(0,Number(e.bonusValue)||0);return{id:e.id,name:String(e.name||"").trim(),packageIds:t,bonusType:n,bonusValue:a,startAt:e.startAt,endAt:e.endAt,enabled:e.enabled!==!1,firstTopUpOnly:!!e.firstTopUpOnly,bonusExpiryDays:me(e.bonusExpiryDays),image:e.image?String(e.image):"",createdAt:e.createdAt,updatedAt:e.updatedAt}}function va(){return[{id:xo,name:"โปรเปิดบ้านนิยาย",packageIds:"all",bonusType:"percent",bonusValue:20,startAt:"2026-11-01T00:00:00+07:00",endAt:"2026-12-31T23:59:00+07:00",enabled:!0,firstTopUpOnly:!0,bonusExpiryDays:null,createdAt:"2026-11-01T00:00:00+07:00",updatedAt:"2026-11-01T00:00:00+07:00"}]}function L(){const e=ct(),t=j(Ye,null);return(e||!Array.isArray(t))&&V(Ye,va()),_a(),Da(),de()}function de(){const e=j(Ye,null);return(Array.isArray(e)?e:va()).map(ya).filter(Boolean)}function $a(e){return V(Ye,e),de()}function lt(e){return de().find(t=>t.id===e)||null}function To(e){const t={};String(e.name||"").trim()||(t.name="กรุณากรอกชื่อโปรโมชัน");const a=Number(e.bonusValue);return(!Number.isFinite(a)||a<=0)&&(t.bonusValue="กรุณากรอกจำนวนโบนัสที่มากกว่า 0"),e.bonusType==="percent"&&a>100&&(t.bonusValue="โบนัสแบบเปอร์เซ็นต์ต้องไม่เกิน 100"),e.startAt||(t.startAt="กรุณาเลือกวันและเวลาเริ่มต้น"),e.endAt||(t.endAt="กรุณาเลือกวันและเวลาสิ้นสุด"),e.startAt&&e.endAt&&new Date(e.endAt)<=new Date(e.startAt)&&(t.endAt="วันสิ้นสุดต้องอยู่หลังวันเริ่มต้น"),e.packageIds!=="all"&&(!Array.isArray(e.packageIds)||!e.packageIds.length)&&(t.packageIds="กรุณาเลือกแพ็กเกจอย่างน้อย 1 แพ็ก หรือเลือกทั้งหมด"),{ok:Object.keys(t).length===0,errors:t}}function ka(e){const t=To(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=de(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=ya({...e,id:r,name:String(e.name).trim(),createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return $a(c),{ok:!0,promo:s}}function Do(e){return $a(de().filter(t=>t.id!==e)),{ok:!0}}function qo(e,t){const n=lt(e);return n?ka({...n,enabled:!!t}):{ok:!1,error:"ไม่พบโปรโมชัน"}}function wa(e,t=new Date){if(!e?.enabled)return!1;const n=new Date(e.startAt),a=new Date(e.endAt);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?!1:t>=n&&t<=a}function Lo(e,t){return e.packageIds==="all"?!0:Array.isArray(e.packageIds)&&e.packageIds.includes(t)}function Me(e,t){if(!e||!t)return 0;const n=Xt(t);return e.bonusType==="fixed"?Math.round(Number(e.bonusValue)||0):ba(n,e.bonusValue)}function Sa(e=new Date){return L(),de().filter(t=>wa(t,e))}function Co(e,{isFirstTopUp:t=!1,now:n=new Date}={}){const a=Sa(n).filter(r=>!Lo(r,e.id)||r.firstTopUpOnly&&!t?!1:Me(r,e)>0);return a.length?a.sort((r,o)=>Me(o,e)-Me(r,e))[0]:null}const _e="v1-off",q={signup:{enabled:!0,coins:30,bonusExpiryDays:null},checkin:{enabled:!0,keysPerDay:1,keysRequired:7,coins:7,bonusExpiryDays:null},firstTopUp:{enabled:!1,bonusType:"percent",bonusValue:0,bonusExpiryDays:null}};function qt(e){const t=e&&typeof e=="object"?e:{},n=t.signup||{},a=t.checkin||{},r=t.firstTopUp||{},o={signup:{enabled:n.enabled!==!1,coins:Math.max(0,Math.round(Number(n.coins)||0))||q.signup.coins,bonusExpiryDays:me(n.bonusExpiryDays)},checkin:{enabled:a.enabled!==!1,keysPerDay:Math.max(1,Math.round(Number(a.keysPerDay)||0))||q.checkin.keysPerDay,keysRequired:Math.max(1,Math.round(Number(a.keysRequired??a.keysPerCoin)||0))||q.checkin.keysRequired,coins:Math.max(1,Math.round(Number(a.coins)||0))||q.checkin.coins,bonusExpiryDays:me(a.bonusExpiryDays)},firstTopUp:{enabled:r.enabled===!0,bonusType:"percent",bonusValue:Math.max(0,Math.round(Number(r.bonusValue)||0)),bonusExpiryDays:me(r.bonusExpiryDays)}};return o.checkin.keysPerCoin=o.checkin.keysRequired,o}function Bo(e){if(e&&e._firstTopUpDefault===_e)return e;const t=e&&typeof e=="object"?e.firstTopUp||{}:{},n=Number(t.bonusValue)===10||t.bonusValue==null||t.bonusValue==="",a={...e&&typeof e=="object"?e:{},...q,signup:e?.signup?{...q.signup,...e.signup}:q.signup,checkin:e?.checkin?{...q.checkin,...e.checkin}:q.checkin,firstTopUp:{enabled:!1,bonusType:"percent",bonusValue:n?0:Math.max(0,Math.round(Number(t.bonusValue)||0)),bonusExpiryDays:t.bonusExpiryDays??null},_firstTopUpDefault:_e};return V(Q,a),a}function _a(){if(ct())return V(Q,{...q,_firstTopUpDefault:_e,_seedVersion:zt}),qt(q);const e=j(Q,null);return Bo(e),qt(j(Q,q))}function B(){return _a()}function Po(e,t){const n={};if(e==="firstTopUp"){const a=Number(t.bonusValue);(!Number.isFinite(a)||a<0)&&(n.bonusValue="กรุณากรอกเปอร์เซ็นต์ที่ถูกต้อง"),a>100&&(n.bonusValue="โบนัสแบบเปอร์เซ็นต์ต้องไม่เกิน 100")}else if(e==="checkin"){const a=Number(t.keysPerDay),r=Number(t.keysRequired??t.keysPerCoin),o=Number(t.coins);(!Number.isFinite(a)||a<=0)&&(n.keysPerDay="กรุณากรอกจำนวนกุญแจต่อวันที่มากกว่า 0"),(!Number.isFinite(r)||r<=0)&&(n.keysRequired="กรุณากรอกจำนวนกุญแจที่ต้องครบก่อนแลกที่มากกว่า 0"),(!Number.isFinite(o)||o<=0)&&(n.coins="กรุณากรอกจำนวนเหรียญที่ได้เมื่อแลกที่มากกว่า 0")}else{const a=Number(t.coins);(!Number.isFinite(a)||a<=0)&&(n.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0")}return{ok:Object.keys(n).length===0,errors:n}}function Uo(e,t){if(!q[e])return{ok:!1,errors:{form:"ไม่พบโปรเบื้องต้นนี้"}};const n=Po(e,t);if(!n.ok)return{ok:!1,errors:n.errors};const a=B(),r={...a,[e]:{...a[e],...t,enabled:t.enabled!==!1&&t.enabled!=="false"&&t.enabled!=="",bonusExpiryDays:me(t.bonusExpiryDays),...e==="checkin"?{keysRequired:Number(t.keysRequired??t.keysPerCoin)||a[e].keysRequired,coins:Number(t.coins)||a[e].coins}:{}}},o=j(Q,{});return V(Q,{...o,...qt(r),_firstTopUpDefault:_e}),{ok:!0,settings:B()}}function Oo(e,t){const n=B();if(!n[e])return{ok:!1,error:"ไม่พบโปรเบื้องต้นนี้"};const a=j(Q,{});return V(Q,{...a,...n,[e]:{...n[e],enabled:!!t},_firstTopUpDefault:_e}),{ok:!0,settings:B()}}function Ro(e,{isFirstTopUp:t=!1}={}){if(!t||!e)return 0;const n=B();return n.firstTopUp.enabled?ba(Xt(e),n.firstTopUp.bonusValue):0}function Aa(e,{isFirstTopUp:t=!1,now:n=new Date}={}){L();const a=Xt(e),r=Number(e.bonus||0),o=B().firstTopUp,s=Ro(e,{isFirstTopUp:t}),c=Co(e,{isFirstTopUp:t,now:n}),i=c?Me(c,e):0;return{pack:e,paid:a,packageBonus:r,firstTopUp:s>0?o:null,firstTopUpBonus:s,promo:c,promoBonus:i,totalBonus:r+s+i,total:a+r+s+i}}function dt(e){return String(e||"").trim().toUpperCase().replace(/\s+/g,"")}function Na(e){if(!e||!e.id)return null;const t=Array.isArray(e.usedBy)?e.usedBy.filter(Boolean):[];return{id:e.id,code:dt(e.code),coins:Math.max(0,Math.round(Number(e.coins)||0)),maxUses:Math.max(1,Math.round(Number(e.maxUses)||1)),usedBy:t,expiresAt:e.expiresAt||null,enabled:e.enabled!==!1,bonusExpiryDays:me(e.bonusExpiryDays),createdAt:e.createdAt,updatedAt:e.updatedAt}}function oe(){const e=j(ha,[]);return(Array.isArray(e)?e:[]).map(Na).filter(Boolean)}function Qt(e){return V(ha,e),oe()}function en(e){return oe().find(t=>t.id===e)||null}function Mo(e){const t=dt(e);return t&&oe().find(n=>n.code===t)||null}function Fo(e){const t={},n=dt(e.code);(!n||n.length<3)&&(t.code="กรุณากรอกรหัสอย่างน้อย 3 ตัวอักษร");const a=Number(e.coins);(!Number.isFinite(a)||a<=0)&&(t.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0");const r=Number(e.maxUses);return(!Number.isFinite(r)||r<1)&&(t.maxUses="จำนวนครั้งที่ใช้ได้ต้องอย่างน้อย 1"),oe().find(s=>s.code===n&&s.id!==e.id)&&(t.code="รหัสนี้ถูกใช้แล้ว กรุณาตั้งรหัสใหม่"),e.expiresAt&&Number.isNaN(new Date(e.expiresAt).getTime())&&(t.expiresAt="วันหมดอายุไม่ถูกต้อง"),{ok:Object.keys(t).length===0,errors:t}}function xa(e){const t=Fo(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=oe(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=Na({...o,...e,id:r,code:dt(e.code),usedBy:o?.usedBy||[],createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return Qt(c),{ok:!0,code:s}}function Ho(e){return Qt(oe().filter(t=>t.id!==e)),{ok:!0}}function jo(e,t){const n=en(e);return n?xa({...n,enabled:!!t}):{ok:!1,error:"ไม่พบรหัส"}}function Ko(e,t,n=new Date){const a=Mo(e);if(!a||!a.enabled)return{ok:!1,reason:"invalid",error:"ไม่พบรหัสนี้ หรือรหัสไม่ถูกต้อง"};if(a.expiresAt){const r=new Date(a.expiresAt);if(!Number.isNaN(r.getTime())&&r<=n)return{ok:!1,reason:"expired",error:"รหัสนี้หมดอายุแล้ว",record:a}}return t&&a.usedBy.includes(t)?{ok:!1,reason:"already",error:"คุณใช้รหัสนี้ไปแล้ว",record:a}:a.usedBy.length>=a.maxUses?{ok:!1,reason:"used-up",error:"รหัสนี้ถูกใช้ครบจำนวนแล้ว",record:a}:{ok:!0,record:a}}function Vo(e,t){const a=oe().map(r=>r.id===e?{...r,usedBy:[...r.usedBy,t],updatedAt:new Date().toISOString()}:r);return Qt(a),en(e)}const Je="banNiyai_keyPromos",Yo="keypromo-happy-new-year",Ea=[{id:"rainbow",name:"สีรุ้ง"},{id:"gold",name:"ทอง"},{id:"rose",name:"ชมพู"}];function Ia(){return[{id:Yo,name:"Happy new year",keyName:"กุญแจสายรุ้ง",keyStyle:"rainbow",keysRequired:7,coins:20,startAt:"2026-12-27T00:00:00+07:00",endAt:"2027-01-02T23:59:00+07:00",enabled:!0,createdAt:"2026-11-01T00:00:00+07:00",updatedAt:"2026-11-01T00:00:00+07:00"}]}function Jo(e){return Ea.some(t=>t.id===e)?e:"rainbow"}function Ta(e){return!e||!e.id?null:{id:e.id,name:String(e.name||"").trim(),keyName:String(e.keyName||"").trim()||"กุญแจพิเศษ",keyStyle:Jo(e.keyStyle),keyImage:e.keyImage?String(e.keyImage):"",keysRequired:Math.max(1,Math.round(Number(e.keysRequired)||0)||7),coins:Math.max(1,Math.round(Number(e.coins)||0)||1),startAt:e.startAt,endAt:e.endAt,enabled:e.enabled!==!1,createdAt:e.createdAt,updatedAt:e.updatedAt}}function Da(){const e=j(Je,null);return(ct()||!Array.isArray(e))&&V(Je,Ia()),Y()}function Y(){const e=j(Je,null);return(Array.isArray(e)?e:Ia()).map(Ta).filter(Boolean)}function qa(e){return V(Je,e),Y()}function ut(e){return Y().find(t=>t.id===e)||null}function tn(e,t=new Date){if(!e?.enabled)return!1;const n=new Date(e.startAt),a=new Date(e.endAt);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?!1:t>=n&&t<=a}function La(e,t=new Date){if(!e)return!0;const n=new Date(e.endAt);return Number.isNaN(n.getTime())?!1:t>n}function nn(e=new Date){return Da(),Y().filter(t=>tn(t,e))}function Ca(e=new Date){return nn(e).slice().sort((n,a)=>new Date(n.startAt)-new Date(a.startAt))[0]||null}function Zo(e){const t={};String(e.name||"").trim()||(t.name="กรุณากรอกชื่อโปร"),String(e.keyName||"").trim()||(t.keyName="กรุณากรอกชื่อกุญแจพิเศษ");const n=Number(e.keysRequired);(!Number.isFinite(n)||n<=0)&&(t.keysRequired="กรุณากรอกจำนวนกุญแจที่มากกว่า 0");const a=Number(e.coins);return(!Number.isFinite(a)||a<=0)&&(t.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0"),e.startAt||(t.startAt="กรุณาเลือกวันและเวลาเริ่มต้น"),e.endAt||(t.endAt="กรุณาเลือกวันและเวลาสิ้นสุด"),e.startAt&&e.endAt&&new Date(e.endAt)<=new Date(e.startAt)&&(t.endAt="วันสิ้นสุดต้องอยู่หลังวันเริ่มต้น"),{ok:Object.keys(t).length===0,errors:t}}function Ba(e){const t=Zo(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=Y(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=Ta({...e,id:r,name:String(e.name).trim(),keyName:String(e.keyName).trim(),createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return qa(c),{ok:!0,promo:s}}function Wo(e){return qa(Y().filter(t=>t.id!==e)),{ok:!0,id:e}}function Go(e,t){const n=ut(e);return n?Ba({...n,enabled:!!t}):{ok:!1,error:"ไม่พบโปรแจกกุญแจ"}}const Ze="banNiyai_events",Dn="promo-open-house",zo="event-promo-open-house",Xo="event-keypromo-happy-new-year",Qo="keypromo-happy-new-year",es=`เติมเงินครั้งแรก รับเหรียญเพิ่ม 20%
ของยอดที่เติม ใช้ได้กับทุกแพ็กเติมเหรียญ
(ให้สิทธิ์เฉพาะนักอ่านที่เติมครั้งแรกเท่านั้น)`,ts=`เช็กอินกุญแจสีรุ้งครบ 7 ดอก แลกได้ 20 เหรียญ

หมายเหตุ: หากเช็กอินไม่ครบตามระยะเวลากิจกรรม กุญแจสีรุ้งจะหมดอายุทันที ไม่สามารถสะสมไว้รอบหน้าได้`,ns="/gifts/coin.png",as="/images/keys/key-rainbow.webp";function Pa(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Ua(e,t){localStorage.setItem(e,JSON.stringify(t))}function rs(e){if(!e||!e.id)return null;const t=String(e.title||"").trim();return t?{id:String(e.id),title:t,startAt:e.startAt||"",endAt:e.endAt||"",detail:String(e.detail||"").trim(),image:e.image?String(e.image):"",promoId:e.promoId?String(e.promoId):"",createdAt:e.createdAt,updatedAt:e.updatedAt}:null}function os(){L();const e=lt(Dn),t=new Date().toISOString();return[{id:zo,title:"โปรเปิดบ้านนิยาย",startAt:e?.startAt||"2026-11-01T00:00:00+07:00",endAt:e?.endAt||"2026-12-31T23:59:00+07:00",detail:es,image:ns,promoId:Dn,createdAt:e?.createdAt||t,updatedAt:t},{id:Xo,title:"Happy new year",startAt:"2026-12-27T00:00:00+07:00",endAt:"2027-01-02T23:59:00+07:00",detail:ts,image:as,promoId:Qo,createdAt:t,updatedAt:t}]}function M({force:e=!1}={}){const t=Pa(Ze,null);return(e||!Array.isArray(t))&&Ua(Ze,os()),J()}function J(){const e=Pa(Ze,null);return(Array.isArray(e)?e:[]).map(rs).filter(Boolean)}function ss(e){return J().find(t=>t.id===e)||null}function Lt({promoId:e,title:t}={}){M();const n=J();if(e){const a=n.find(r=>r.promoId===e);if(a)return a}if(t){const a=n.find(r=>r.title===t);if(a)return a}return null}function Ct(e){return e?`/events#event-${e.id}`:"/events"}function an(e){return Ua(Ze,e),J()}function is(e){const t={},n=String(e.title||"").trim();n||(t.title="กรุณากรอกชื่อกิจกรรม");const a=e.startAt||"",r=e.endAt||"";if(a||(t.startAt="กรุณาเลือกวันเริ่มต้น"),r||(t.endAt="กรุณาเลือกวันสิ้นสุด"),a&&r&&new Date(a)>new Date(r)&&(t.endAt="วันสิ้นสุดต้องไม่ก่อนวันเริ่มต้น"),Object.keys(t).length)return{ok:!1,errors:t};M();const o=J(),s=new Date().toISOString(),c=String(e.id||"").trim()||`event-${Date.now()}`,i=o.find(p=>p.id===c),d={id:c,title:n,startAt:a,endAt:r,detail:String(e.detail||"").trim(),image:String(e.image||"").trim(),promoId:i?.promoId||String(e.promoId||"").trim(),createdAt:i?.createdAt||s,updatedAt:s},u=i?o.map(p=>p.id===c?d:p):[...o,d];return an(u),{ok:!0,event:d}}function qn(e,t){const n=String(t||"").trim();if(!e||!n)return;M();const a=J();if(!a.some(o=>o.promoId===e))return;const r=new Date().toISOString();an(a.map(o=>o.promoId===e?{...o,image:n,updatedAt:r}:o))}function cs(e){return M(),an(J().filter(t=>t.id!==e)),{ok:!0}}const Oa="banNiyai_reports",Ra=1e3,Ma=[{id:"topup",name:"ปัญหาการเติมเหรียญ"},{id:"bonus",name:"ไม่ได้รับโบนัส"},{id:"unlock",name:"ปลดล็อกแล้วเข้าอ่านไม่ได้"},{id:"login",name:"เข้าสู่ระบบไม่ได้"},{id:"checkin",name:"เช็กอินหรือแลกเหรียญไม่ได้"},{id:"balance",name:"เหรียญหายหรือยอดไม่ตรง"},{id:"display",name:"หน้าเว็บแสดงผลผิดปกติ"},{id:"other",name:"อื่นๆ"}],Ln={author:"แอดมิน J.Jusmin",bot:"แอดมินบอท"};function pt(e){return Ma.find(t=>t.id===e)||null}function mt(){try{const e=localStorage.getItem(Oa),t=e?JSON.parse(e):[];return Array.isArray(t)?t:[]}catch{return[]}}function rn(e){localStorage.setItem(Oa,JSON.stringify(e))}function Cn(e,t){const n=(e.messages||[]).filter(a=>!t||t.includes(a.role));return n.length?n[n.length-1]:null}function pe(e){const t=new Date(e||0).getTime();return Number.isNaN(t)?0:t}function on(e){const t=Array.isArray(e.messages)?e.messages:[],n=t[t.length-1]||null,a=Cn({messages:t},["reader"]),r=Cn({messages:t},["author","bot"]);return{...e,messages:t,topicName:pt(e.topicId)?.name||"อื่นๆ",lastAt:n?n.createdAt:e.createdAt,last:n,authorUnread:!!(a&&pe(a.createdAt)>pe(e.authorSeenAt)),readerUnread:!!(r&&pe(r.createdAt)>pe(e.readerSeenAt))}}function Fa(e,t){return e.role==="author"?Ln.author:e.role==="bot"?Ln.bot:t?.userName||"นักอ่าน"}function Ha(e){return String(e??"").replace(/\r\n/g,`
`).trim().slice(0,Ra)}function ft(){return mt().map(on).sort((e,t)=>pe(t.lastAt)-pe(e.lastAt))}function ja(e){return ft().filter(t=>t.userId===e)}function sn(e){return ft().find(t=>t.id===e)||null}function ls({topicId:e,text:t}={}){const n=b();if(!n)return{ok:!1,error:"กรุณาเข้าสู่ระบบก่อน"};const a=pt(e);if(!a)return{ok:!1,error:"กรุณาเลือกหัวข้อ"};const r=Ha(t);if(!r)return{ok:!1,error:"กรุณาพิมพ์ข้อความ"};const o=new Date().toISOString(),s={id:`r-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,6)}`,userId:n.id,userName:n.displayName,userEmail:n.email,topicId:a.id,createdAt:o,updatedAt:o,readerSeenAt:o,authorSeenAt:null,messages:[{id:`m-${Date.now().toString(36)}`,role:"reader",text:r,createdAt:o}]};return rn([...mt(),s]),{ok:!0,report:on(s)}}function Ka(e,t,n){const a=Ha(n);if(!a)return{ok:!1,error:"กรุณาพิมพ์ข้อความ"};const r=mt(),o=r.findIndex(d=>d.id===e);if(o<0)return{ok:!1,error:"ไม่พบเรื่องที่แจ้ง"};const s=new Date().toISOString(),c={id:`m-${Date.now().toString(36)}-${Math.random().toString(36).slice(2,5)}`,role:t,text:a,createdAt:s},i={...r[o],updatedAt:s,messages:[...r[o].messages||[],c]};return t==="reader"?i.readerSeenAt=s:t==="author"&&(i.authorSeenAt=s),r[o]=i,rn(r),{ok:!0,message:c,report:on(i)}}function ds(e,t){const n=b(),a=sn(e);return!n||!a||a.userId!==n.id?{ok:!1,error:"ไม่พบเรื่องที่แจ้ง"}:Ka(e,"reader",t)}function us(e,t){return it()?Ka(e,"author",t):{ok:!1,error:"เฉพาะนักเขียนเท่านั้น"}}function ht(e,t){const n=mt(),a=n.findIndex(s=>s.id===e);if(a<0)return;const r=t==="author"?"authorSeenAt":"readerSeenAt",o=new Date().toISOString();n[a]={...n[a],[r]:o},rn(n)}function Va(){return ft().filter(e=>e.authorUnread)}const Ya="banNiyai_notifications";function ps(e){const t=Number(new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric"}).format(e).slice(0,4));return String((t+543)%100).padStart(2,"0")}function Bn(e){if(!e?.startAt||!e?.endAt)return"";const t=new Date(e.startAt),n=new Date(e.endAt);if(Number.isNaN(t.getTime())||Number.isNaN(n.getTime()))return"";const a={timeZone:"Asia/Bangkok"},r=s=>new Intl.DateTimeFormat("th-TH",{day:"numeric",month:"short",...a}).format(s),o=s=>`${r(s)} ${ps(s)}`;return`${o(t)} ถึง ${o(n)}`}function cn(){try{const e=localStorage.getItem(Ya);if(!e)return{seeded:!1,items:[]};const t=JSON.parse(e);if(Array.isArray(t))return{seeded:t.length>0,items:t};const n=Array.isArray(t?.items)?t.items:[];return{seeded:!!t?.seeded,items:n}}catch{return{seeded:!1,items:[]}}}function ln(e){localStorage.setItem(Ya,JSON.stringify(e))}function ms(){const e=[],t=v("school-bell-floor-four")||ye().find(a=>a.chapters?.length)||null,n=t?.chapters?.length?t.chapters[t.chapters.length-1]:null;t&&n&&e.push({id:`seed-chapter-${t.id}-${n.id}`,type:"chapter",kindLabel:"อัปเดตตอนใหม่",title:t.title,body:`ตอนที่ ${n.id} ${n.title}`,href:w({name:"reader",novelId:t.id,chapterId:n.id}),createdAt:n.publishedAt||new Date().toISOString(),readAt:null}),L(),M();for(const a of Sa()){const r=Bn(a),o=Lt({promoId:a.id,title:a.name});e.push({id:`seed-promo-${a.id}`,type:"activity",kindLabel:"กิจกรรม",title:a.name,body:r?`โปรเติมเหรียญ ${r}`:"โปรเติมเหรียญ",href:o?Ct(o):w({name:"coins"}),promoId:a.id,createdAt:a.startAt||new Date().toISOString(),readAt:null})}for(const a of nn()){const r=Bn(a),o=Lt({promoId:a.id,title:a.name});e.push({id:`seed-keypromo-${a.id}`,type:"activity",kindLabel:"กิจกรรม",title:a.name,body:r?`โปรแจกกุญแจ ${r}`:"โปรแจกกุญแจ",href:o?Ct(o):w({name:"home"}),promoId:a.id,createdAt:a.startAt||new Date().toISOString(),readAt:null})}return e.sort((a,r)=>new Date(r.createdAt)-new Date(a.createdAt)),e}function Ja({force:e=!1}={}){const t=cn();if(!e&&t.seeded&&Array.isArray(t.items))return t.items;const n=ms();return ln({seeded:!0,items:n}),n}function fs(e){if(e?.type!=="activity")return e?.href;const t=Lt({promoId:e.promoId,title:e.title});return t?Ct(t):e.href}function Nt(e){const t=String(e?.text||"").replace(/\s+/g," ");return t.length>60?`${t.slice(0,60)}…`:t}function hs(){if(it())return Va().map(t=>{const n=[...t.messages].reverse().find(a=>a.role==="reader");return{id:`report-${t.id}`,type:"report",kindLabel:"แจ้งปัญหา",title:t.topicName,body:`${t.userName}: ${Nt(n)}`,href:`/admin?tab=reports&report=${encodeURIComponent(t.id)}`,createdAt:n?.createdAt||t.createdAt,readAt:null}});const e=b();return e?ja(e.id).filter(t=>t.readerUnread).map(t=>{const n=[...t.messages].reverse().find(a=>a.role==="author"||a.role==="bot");return{id:`report-${t.id}`,type:"report",kindLabel:"แจ้งปัญหา",title:t.topicName,body:n?`${Fa(n,t)}: ${Nt(n)}`:Nt(t.last),href:`/report/${encodeURIComponent(t.id)}`,createdAt:n?.createdAt||t.updatedAt||t.createdAt,readAt:null}}):[]}function Za(){return M(),[...hs(),...Ja()].sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt)).map(e=>e.type==="report"?e:{...e,href:fs(e)})}function Bt(){return Za().filter(e=>!e.readAt).length}function gs(e){if(!e)return;if(String(e).startsWith("report-")){ht(String(e).slice(7),it()?"author":"reader");return}const t=cn(),n=new Date().toISOString();let a=!1;for(const r of t.items||[])r.id===e&&!r.readAt&&(r.readAt=n,a=!0);a&&ln(t)}function bs(){const e=cn(),t=new Date().toISOString();let n=!1;for(const a of e.items||[])a.readAt||(a.readAt=t,n=!0);n&&ln(e)}const Wa="banNiyai_ageConfirmed18",Ga="banNiyai_readerTheme",za="banNiyai_readerFontSize";function ys(){return localStorage.getItem(Wa)==="true"}function vs(){localStorage.setItem(Wa,"true")}function Xa(){return localStorage.getItem(Ga)==="night"?"night":"light"}function $s(e){localStorage.setItem(Ga,e)}function ks(){const e=Number(localStorage.getItem(za));return e>=16&&e<=28?e:18}function ws(e){localStorage.setItem(za,String(e))}const Pt="banNiyai_wallet",dn="banNiyai_walletTx",un="banNiyai_unlocks",Ut="banNiyai_checkins",De=[{id:"pack-50",thb:50,coins:55,bonus:5},{id:"pack-100",thb:100,coins:110,bonus:10},{id:"pack-300",thb:300,coins:330,bonus:30},{id:"pack-500",thb:500,coins:550,bonus:50}];function Z(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function pn(e,t){localStorage.setItem(e,JSON.stringify(t))}function T(){return b()}function Qa(e,t,n){const a=T();if(!a)return null;const r=Z(e,{}),o=r[a.id]??t,s=n(o);return r[a.id]=s,pn(e,r),s}function Pn(){return{purchased:0,bonuses:[]}}function qe(){const e=T();if(!e)return Pn();const n=Z(Pt,{})[e.id];return typeof n=="number"?{purchased:Number(n)||0,bonuses:[]}:!n||typeof n!="object"?Pn():{purchased:Math.max(0,Number(n.purchased)||0),bonuses:Array.isArray(n.bonuses)?n.bonuses:[]}}function gt(e){const t=T();if(!t)return null;const n=Z(Pt,{});return n[t.id]=e,pn(Pt,n),e}function Ss(e=qe(),t=new Date){const n=t.getTime();return(e.bonuses||[]).filter(a=>{if(Number(a.remaining)<=0)return!1;if(!a.expiresAt)return!0;const r=new Date(a.expiresAt).getTime();return!Number.isNaN(r)&&r>n})}function P(){const e=qe(),t=Ss(e).reduce((n,a)=>n+Number(a.remaining||0),0);return{purchased:e.purchased,bonus:t,total:e.purchased+t}}function ge(){return P().total}function er(){return bt().some(e=>e.type==="topup")}function tr(e){const t=qe();let n=e,a=0,r=0;const o=Date.now(),c=[...t.bonuses||[]].sort((d,u)=>!d.expiresAt&&!u.expiresAt?0:d.expiresAt?u.expiresAt?new Date(d.expiresAt)-new Date(u.expiresAt):-1:1).map(d=>{if(n<=0||Number(d.remaining)<=0||d.expiresAt&&new Date(d.expiresAt).getTime()<=o)return d;const u=Math.min(Number(d.remaining),n);return n-=u,a+=u,{...d,remaining:Number(d.remaining)-u}});let i=t.purchased;if(n>0){const d=Math.min(i,n);i-=d,n-=d,r+=d}return{wallet:{purchased:i,bonuses:c},fromBonus:a,fromPurchased:r,left:n}}function bt(){const e=T();return e?(Z(dn,{})[e.id]||[]).slice().reverse():[]}function te(e){if(!e||e.free)return 0;const t=Number(e.price);return Number.isFinite(t)&&t>0?t:0}function nr(e,t){const n=T();return n?!!Z(un,{})[n.id]?.[`${e}:${t}`]:!1}function fe(e,t){return!t||!e||!ve(t)?!1:te(t)<=0?!0:nr(e.id,t.id)}function yt(e){Qa(dn,[],t=>[...t,{id:crypto.randomUUID(),createdAt:new Date().toISOString(),...e}])}function Ot(e){return e?new Date(Date.now()+Number(e)*24*60*60*1e3).toISOString():null}function _s(e,{amount:t,source:n,label:a,promoId:r,promoName:o,expiryDays:s}){return!t||t<=0?e:{...e,bonuses:[...e.bonuses||[],{id:crypto.randomUUID(),remaining:t,amount:t,source:n,label:a,promoId:r||null,promoName:o||null,expiresAt:Ot(s),createdAt:new Date().toISOString()}]}}function vt({amount:e,source:t,label:n,expiryDays:a,txType:r,extraTx:o={}}){return T()?(gt(_s(qe(),{amount:e,source:t,label:n,expiryDays:a})),yt({type:r||t,coins:e,label:`${n} +${e}`,...o}),{ok:!0,amount:e,balance:ge(),breakdown:P()}):{ok:!1,reason:"auth"}}function As(){if(!T())return{ok:!1,reason:"auth"};L();const t=B().signup;return t.enabled?bt().some(n=>n.type==="signup-bonus")?{ok:!1,reason:"already"}:vt({amount:t.coins,source:"signup",label:"โบนัสสมัครสมาชิก",expiryDays:t.bonusExpiryDays,txType:"signup-bonus"}):{ok:!1,reason:"disabled"}}function We(){return{lastDate:null,keys:0,special:{},exchanged:{}}}function ar(e){const t={};if(!e||typeof e!="object")return t;for(const[n,a]of Object.entries(e)){const r=Math.max(0,Math.round(Number(a)||0));r>0&&(t[n]=r)}return t}function rr(e){const t={};if(!e||typeof e!="object")return t;for(const[n,a]of Object.entries(e))a&&(t[n]=!0);return t}function Ge(e){if(!e)return We();const t=Z(Ut,{})[e];return t?typeof t=="string"?{lastDate:t,keys:0,special:{},exchanged:{}}:{lastDate:t.lastDate||null,keys:Math.max(0,Math.round(Number(t.keys)||0)),special:ar(t.special),exchanged:rr(t.exchanged)}:We()}function $t(e,t){const n=Z(Ut,{});return n[e]={lastDate:t.lastDate||null,keys:Math.max(0,Math.round(Number(t.keys)||0)),special:ar(t.special),exchanged:rr(t.exchanged)},pn(Ut,n),n[e]}const Ns="Happy new year",xs="2027-01-03T00:00:00+07:00";function mn(e){return e?.name===Ns}function or(){return new Date(xs)}function fn(e,t=new Date){if(!e)return Ge(e);L();const n=Ge(e),a=new Map(Y().map(s=>[s.id,s])),r={...n.special};let o=!1;for(const[s,c]of Object.entries(r)){const i=a.get(s);if(!i){delete r[s],o=!0;continue}if(mn(i)){if(t<or()||!!!n.exchanged[i.id]&&c>=i.keysRequired)continue;delete r[s],o=!0;continue}La(i,t)&&(delete r[s],o=!0)}return o?$t(e,{...n,special:r}):n}function Es(e=new Date){L();const t=Y().find(c=>mn(c)&&c.enabled!==!1);if(!t)return null;const n=b(),a=n?fn(n.id,e):We();if(a.exchanged[t.id])return null;const r=new Date(t.startAt);if(Number.isNaN(r.getTime())||e<r)return null;const o=Number(a.special[t.id]||0),s=o>=t.keysRequired;return e>=or()&&!s?null:{promo:t,keys:o,keysRequired:t.keysRequired,coins:t.coins,alreadyExchanged:!1,canExchange:s}}function hn(e=new Date){L();const t=B().checkin,n=t.keysPerDay,a=t.keysRequired||t.keysPerCoin,r=t.coins||a,o=a,s=T(),c=s?fn(s.id,e):We(),i=Io(e),d=c.lastDate===i,u=Ca(e),p=nn(e).map(m=>{const f=Number(c.special[m.id]||0),y=!!c.exchanged[m.id];return{promo:m,keys:f,keysRequired:m.keysRequired,coins:m.coins,alreadyExchanged:y,canExchange:!y&&f>=m.keysRequired}});return t.enabled?{enabled:!0,keys:c.keys,keysPerDay:n,keysRequired:a,coins:r,keysPerCoin:o,checkedInToday:d,canExchange:c.keys>=a,currentKeyPromo:u,keyPromos:p,today:i}:{enabled:!1,keys:c.keys,keysPerDay:n,keysRequired:a,coins:r,keysPerCoin:o,checkedInToday:d,canExchange:!1,currentKeyPromo:u,keyPromos:p,today:i}}function Is(e=new Date){const t=T();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนเช็คอิน"};const n=hn(e);if(!n.enabled)return{ok:!1,reason:"disabled",error:"เช็คอินรายวันยังไม่เปิดใช้"};if(n.checkedInToday)return{ok:!1,reason:"already",error:"เช็คอินวันนี้แล้ว"};const a=Ge(t.id),r=Ca(e);let o=a.keys;const s={...a.special};r?s[r.id]=(s[r.id]||0)+n.keysPerDay:o+=n.keysPerDay;const c=$t(t.id,{...a,lastDate:n.today,keys:o,special:s});return{ok:!0,keys:c.keys,special:c.special,currentKeyPromo:r}}function Ts(){const e=T();if(!e)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกเหรียญ"};const t=hn();if(!t.enabled)return{ok:!1,reason:"disabled",error:"เช็คอินรายวันยังไม่เปิดใช้"};const n=t.keysRequired||t.keysPerCoin,a=t.coins||n;if(t.keys<n)return{ok:!1,reason:"short",error:`ต้องมีกุญแจเงิน ${n} ดอก จึงจะแลกได้ ${a} เหรียญ`,keys:t.keys,keysRequired:n};const r=Ge(e.id),o=$t(e.id,{...r,keys:r.keys-n});return{...vt({amount:a,source:"key-exchange",label:`แลกกุญแจเงิน ${n} ดอก`,expiryDays:B().checkin.bonusExpiryDays,txType:"key-exchange"}),keys:o.keys,canExchange:o.keys>=n}}function Ds(e){const t=T();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกเหรียญ"};const n=ut(e),a=new Date,r=fn(t.id,a),o=r.special[n?.id]||0,s=!!(n&&mn(n)&&La(n,a)&&!r.exchanged[n.id]&&o>=n.keysRequired);if(!n||!tn(n,a)&&!s)return{ok:!1,reason:"inactive",error:"โปรแจกกุญแจนี้ยังไม่เปิดหรือหมดเขตแล้ว"};if(r.exchanged[n.id])return{ok:!1,reason:"already",error:"คุณแลกโปรนี้ไปแล้ว",keys:r.special[n.id]||0};const c=r.special[n.id]||0;if(c<n.keysRequired)return{ok:!1,reason:"short",error:`ต้องมี${n.keyName} ${n.keysRequired} อัน จึงจะแลกได้ ${n.coins} เหรียญ`,keys:c};const i={...r.special,[n.id]:c-n.keysRequired},d={...r.exchanged,[n.id]:!0},u=$t(t.id,{...r,special:i,exchanged:d});return{...vt({amount:n.coins,source:"key-promo-exchange",label:`แลก${n.keyName} ${n.keysRequired} อัน (${n.name})`,txType:"key-promo-exchange",extraTx:{keyPromoId:n.id,promoName:n.name}}),keys:u.special[n.id]||0,alreadyExchanged:!0}}function qs(e){const t=T();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกโค้ด"};const n=Ko(e,t.id);return n.ok?(Vo(n.record.id,t.id),vt({amount:n.record.coins,source:"redeem",label:`แลกโค้ด ${n.record.code}`,expiryDays:n.record.bonusExpiryDays,txType:"redeem",extraTx:{code:n.record.code,redeemId:n.record.id}})):n}function Ls(e){return Cs(e)}function Cs(e){if(!T())return{ok:!1,reason:"auth"};const n=De.find(c=>c.id===e);if(!n)return{ok:!1,reason:"package"};L();const a=Aa(n,{isFirstTopUp:!er()}),r=qe(),o=[...r.bonuses||[]];if(a.packageBonus>0&&o.push({id:crypto.randomUUID(),remaining:a.packageBonus,amount:a.packageBonus,source:"package",label:"โบนัสแพ็ก",expiresAt:null,createdAt:new Date().toISOString()}),a.firstTopUpBonus>0){const c=a.firstTopUp?.bonusExpiryDays;o.push({id:crypto.randomUUID(),remaining:a.firstTopUpBonus,amount:a.firstTopUpBonus,source:"first-topup",label:"โบนัสเติมครั้งแรก",expiresAt:Ot(c),createdAt:new Date().toISOString()})}a.promoBonus>0&&a.promo&&o.push({id:crypto.randomUUID(),remaining:a.promoBonus,amount:a.promoBonus,source:"promo",promoId:a.promo.id,promoName:a.promo.name,label:a.promo.name,expiresAt:Ot(a.promo.bonusExpiryDays),createdAt:new Date().toISOString()}),gt({purchased:r.purchased+a.paid,bonuses:o});const s=[`เติม ${a.paid} เหรียญ (${n.thb} บาท) — ทดลอง`];return a.packageBonus&&s.push(`โบนัสแพ็ก +${a.packageBonus}`),a.firstTopUpBonus&&s.push(`โบนัสเติมครั้งแรก +${a.firstTopUpBonus}`),a.promoBonus&&a.promo&&s.push(`${a.promo.name} +${a.promoBonus}`),yt({type:"topup",coins:a.total,paid:a.paid,packageBonus:a.packageBonus,firstTopUpBonus:a.firstTopUpBonus,promoBonus:a.promoBonus,promoId:a.promo?.id||null,promoName:a.promo?.name||null,thb:n.thb,packageId:n.id,method:"mock-trial",label:s.join(" · ")}),{ok:!0,balance:ge(),breakdown:P(),quote:a,pack:n}}function Bs(e,t){if(!T())return{ok:!1,reason:"auth"};const a=v(e),r=be(a,t);if(!a||!r||!ve(r))return{ok:!1,reason:"notfound"};if(te(r)<=0||nr(e,t))return{ok:!0,already:!0,balance:ge()};const o=te(r),s=P();if(s.total<o)return{ok:!1,reason:"insufficient",balance:s.total,breakdown:s,price:o,novel:a,chapter:r};const c=tr(o);if(c.left>0)return{ok:!1,reason:"insufficient",balance:s.total,breakdown:s,price:o,novel:a,chapter:r};gt(c.wallet),Qa(un,{},d=>({...d,[`${e}:${t}`]:{novelId:e,chapterId:t,price:o,unlockedAt:new Date().toISOString()}}));const i=[];return c.fromBonus&&i.push(`ใช้โบนัส ${c.fromBonus}`),c.fromPurchased&&i.push(`ใช้เหรียญ ${c.fromPurchased}`),yt({type:"unlock",coins:-o,fromBonus:c.fromBonus,fromPurchased:c.fromPurchased,novelId:e,chapterId:t,label:`ปลดล็อก ${a.title} ตอนที่ ${r.id} ${r.title}${i.length?` (${i.join(" + ")})`:""}`}),{ok:!0,balance:ge(),breakdown:P(),price:o,fromBonus:c.fromBonus,fromPurchased:c.fromPurchased,novel:a,chapter:r}}function Ps(e,t={}){if(!T())return{ok:!1,reason:"auth"};const a=Number(e),r=Math.round(a);if(!Number.isFinite(a)||r!==a||r<=0)return{ok:!1,reason:"invalid"};const o=P();if(o.total<r)return{ok:!1,reason:"insufficient",balance:o.total,breakdown:o,amount:r};const s=tr(r);return s.left>0?{ok:!1,reason:"insufficient",balance:o.total,breakdown:o,amount:r}:(gt(s.wallet),yt({coins:-r,fromBonus:s.fromBonus,fromPurchased:s.fromPurchased,...t}),{ok:!0,amount:r,balance:ge(),breakdown:P(),fromBonus:s.fromBonus,fromPurchased:s.fromPurchased})}function Us(){const e=Z(un,{}),t=[];for(const[n,a]of Object.entries(e||{}))if(!(!a||typeof a!="object"))for(const r of Object.values(a))!r||!r.novelId||r.chapterId==null||t.push({userId:n,novelId:r.novelId,chapterId:String(r.chapterId),coins:Number(r.price)||0,unlockedAt:r.unlockedAt||null});return t}function Os(){const e=Z(dn,{}),t=[];for(const[n,a]of Object.entries(e||{}))if(Array.isArray(a))for(const r of a){if(!r||r.type!=="topup")continue;const o=De.find(p=>p.id===r.packageId),s=Number(r.thb),c=Number(r.paid),i=Number(r.packageBonus),d=(Number(r.firstTopUpBonus)||0)+(Number(r.promoBonus)||0),u=Number(r.coins);t.push({id:r.id,userId:n,createdAt:r.createdAt||null,thb:Number.isFinite(s)&&s>0?s:Number(o?.thb)||0,paid:Number.isFinite(c)&&c>=0?c:Number(o?.thb)||0,packageBonus:Number.isFinite(i)&&i>=0?i:Number(o?.bonus)||0,firstTopUpPromo:d,coins:Number.isFinite(u)?u:0,packageId:r.packageId||null})}return t.sort((n,a)=>new Date(a.createdAt||0)-new Date(n.createdAt||0)),t}const ze="banNiyai_donations",Xe=[{id:"candy",name:"อมยิ้ม",coins:1},{id:"rose",name:"ดอกกุหลาบ",coins:5},{id:"popcorn",name:"ป๊อปคอร์น",coins:10},{id:"milktea",name:"ชานมไข่มุก",coins:15},{id:"cake",name:"เค้ก",coins:20},{id:"coin",name:"เหรียญ",coins:null}],Un="banNiyai_walletTx",Rs=[["ลูกอม","อมยิ้ม"],["เค้กชิ้นสามเหลี่ยม","เค้ก"]];function Ms(e){return`/gifts/${e}.png`}function Fs(){try{for(const[e,t]of Rs){const n=localStorage.getItem(ze);if(n&&n.includes(e)){const r=JSON.parse(n);let o=!1;for(const s of Object.values(r||{}))if(Array.isArray(s))for(const c of s)c&&c.giftName===e&&(c.giftName=t,o=!0);o&&localStorage.setItem(ze,JSON.stringify(r))}const a=localStorage.getItem(Un);if(a&&a.includes(e)){const r=JSON.parse(a);let o=!1;const s=c=>{if(Array.isArray(c))for(const i of c)i&&(i.giftName===e&&(i.giftName=t,o=!0),typeof i.label=="string"&&i.label.includes(e)&&(i.label=i.label.split(e).join(t),o=!0))};Array.isArray(r)?s(r):r&&typeof r=="object"&&Object.values(r).forEach(s),o&&localStorage.setItem(Un,JSON.stringify(r))}}}catch{}}Fs();function Hs(e){return Xe.find(t=>t.id===e)||null}function sr(){try{const e=localStorage.getItem(ze);return e?JSON.parse(e):{}}catch{return{}}}function js(e){localStorage.setItem(ze,JSON.stringify(e))}function Ks({novelId:e,giftId:t,customAmount:n,chapterId:a}={}){const r=b();if(!r)return{ok:!1,reason:"auth"};const o=v(e);if(!o)return{ok:!1,reason:"notfound"};const s=Hs(t);if(!s)return{ok:!1,reason:"gift"};let c=s.coins;if(s.coins==null){const f=Number(n);if(c=Math.round(f),!Number.isFinite(f)||c!==f||c<=0)return{ok:!1,reason:"invalid",gift:s,novel:o}}const i=a?be(o,a):null;if(a&&!i)return{ok:!1,reason:"notfound",gift:s,novel:o};const d=i?`โดเนท ${s.name} ให้ ${o.title} ตอนที่ ${i.id} ${i.title}`:`โดเนท ${s.name} ให้ ${o.title}`,u=Ps(c,{type:"donate",label:d,novelId:o.id,chapterId:i?i.id:null,giftId:s.id,giftName:s.name});if(!u.ok)return{...u,gift:s,novel:o,chapter:i,amount:c};const p={id:crypto.randomUUID(),userId:r.id,novelId:o.id,novelTitle:o.title,chapterId:i?i.id:null,chapterTitle:i?i.title:null,giftId:s.id,giftName:s.name,coins:c,fromBonus:u.fromBonus,fromPurchased:u.fromPurchased,createdAt:new Date().toISOString()},m=sr();return m[o.id]=[...m[o.id]||[],p],js(m),{ok:!0,...u,gift:s,novel:o,chapter:i,record:p}}function Vs(){const e=sr(),t=[];for(const n of Object.values(e||{}))Array.isArray(n)&&t.push(...n);return t}function Be(){return{unlocks:0,unlockCoins:0,donations:0,donateCoins:0}}function z(e,{unlocks:t=0,unlockCoins:n=0,donations:a=0,donateCoins:r=0}={}){e.unlocks+=t,e.unlockCoins+=n,e.donations+=a,e.donateCoins+=r}function Ys(){const e=ye(),t=new Map(e.map(a=>{const r=(a.chapters||[]).map(o=>({id:String(o.id),title:o.title,totals:Be()}));return[a.id,{id:a.id,title:a.title,author:a.author,totals:Be(),unassignedDonations:Be(),chapters:r,chapterMap:new Map(r.map(o=>[o.id,o]))}]})),n=Be();for(const a of Us()){const r=t.get(a.novelId);if(!r)continue;const o={unlocks:1,unlockCoins:a.coins};z(n,o),z(r.totals,o);const s=r.chapterMap.get(String(a.chapterId));s&&z(s.totals,o)}for(const a of Vs()){const r=t.get(a.novelId);if(!r)continue;const s={donations:1,donateCoins:Number(a.coins)||0};if(z(n,s),z(r.totals,s),a.chapterId!=null&&a.chapterId!==""){const c=r.chapterMap.get(String(a.chapterId));z(c?c.totals:r.unassignedDonations,s)}else z(r.unassignedDonations,s)}return{overall:n,novels:e.map(a=>{const r=t.get(a.id);return{id:r.id,title:r.title,author:r.author,totals:r.totals,unassignedDonations:r.unassignedDonations,chapters:r.chapters}})}}function Js(){const e=Os().map(s=>{const c=io(s.userId);return{...s,readerName:(c?.displayName||"").trim()||"นักอ่าน"}}),t=e.reduce((s,c)=>({thb:s.thb+c.thb,coins:s.coins+c.coins,count:s.count+1}),{thb:0,coins:0,count:0}),n=new Map,a=new Map;for(const s of e){const c=Zs(s.createdAt);c&&(n.set(c.monthKey,(n.get(c.monthKey)||0)+s.thb),a.set(c.yearKey,(a.get(c.yearKey)||0)+s.thb))}const r=[...n.entries()].sort((s,c)=>c[0].localeCompare(s[0])).map(([s,c])=>{const[i,d]=s.split("-").map(Number);return{key:s,year:i,month:d,thb:c}}),o=[...a.entries()].sort((s,c)=>c[0].localeCompare(s[0])).map(([s,c])=>({key:s,year:Number(s),thb:c}));return{totals:t,records:e,byMonth:r,byYear:o}}function Zs(e){if(!e)return null;const t=new Date(e);if(Number.isNaN(t.getTime()))return null;const n=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit"}).formatToParts(t),a=Number(n.find(o=>o.type==="year")?.value),r=Number(n.find(o=>o.type==="month")?.value);return!a||!r?null:{year:a,month:r,yearKey:String(a),monthKey:`${a}-${String(r).padStart(2,"0")}`}}const Rt="banNiyai_followChannels";function ir(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Ws(e,t){localStorage.setItem(e,JSON.stringify(t))}function Gs(e){if(!e||!e.id)return null;const t=String(e.name||"").trim(),n=String(e.url||"").trim();return!t||!n?null:{id:String(e.id),name:t,url:n,enabled:e.enabled!==!1,sortOrder:Number.isFinite(Number(e.sortOrder))?Number(e.sortOrder):0,createdAt:e.createdAt,updatedAt:e.updatedAt}}function zs(){const e=ir(Rt,null);return Array.isArray(e)||Ws(Rt,[]),cr()}function cr({includeDisabled:e=!1}={}){const t=ir(Rt,null),n=(Array.isArray(t)?t:[]).map(Gs).filter(Boolean);return(e?n:n.filter(r=>r.enabled)).slice().sort((r,o)=>r.sortOrder-o.sortOrder||String(r.id).localeCompare(String(o.id)))}const Xs=[16,18,22],Qs='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.4 12 4.8l8 6.6V20a1 1 0 0 1-1 1h-5.2v-6.2H10.2V21H5a1 1 0 0 1-1-1v-8.6Z"/></svg>',ei='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h4.2v13.5H4V5Zm5.9 2.2h4.2V18.5H9.9V7.2Zm5.9-1.4H20V18.5h-4.2V5.8ZM3 19.4h18V21H3v-1.6Z"/></svg>',ti='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 5H6v14h4v2H4V3h6v2Zm4.8 3.6-1.4 1.4 2.2 2H9v2h6.6l-2.2 2 1.4 1.4L19.4 12 14.8 8.6Z"/></svg>',ni='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.4 0-8 1.7-8 5v1h16v-1c0-3.3-4.6-5-8-5Z"/></svg>',ai='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M4 4h16a1 1 0 0 1 1 1v11a1 1 0 0 1-1 1H9.4L5 20.4V17H4a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1Zm7 3v5h2V7h-2Zm0 6.5V15.5h2v-2h-2Z"/></svg>',ri='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10l1 4H6L7 3Zm-1 6h12v12H6V9Zm3 3v2h6v-2H9Z"/></svg>',oi='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.4 0-8 1.7-8 5v1h16v-1c0-3.3-4.6-5-8-5Z"/></svg>',si='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Zm1.75 1.1 7.25 5.05 7.25-5.05V17.25c0 .41-.34.75-.75.75H5.5a.75.75 0 0 1-.75-.75V7.6Z"/></svg>',On='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.5 3a7.5 7.5 0 0 1 5.8 12.2l4.2 4.2-1.4 1.4-4.2-4.2A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/></svg>',lr='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 9V8a5 5 0 0 0-10 0v1H5v12h14V9h-2Zm-8-1a3 3 0 0 1 6 0v1H9V8Zm3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>',ii='<svg class="home-daily__icon home-daily__icon--bonus" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="10" width="17" height="10.5" rx="1.8" fill="#d2647a"/><rect x="3" y="7.2" width="18" height="4" rx="1.2" fill="#ec8fa3"/><rect x="11" y="7.2" width="2" height="13.3" fill="#f6d15a"/><path fill="#e8b423" d="M12 7.2c-2.4-3.4-6.2-2.4-6.2.2 0 1.5 2.4 2.5 6.2 3.4 3.8-.9 6.2-1.9 6.2-3.4 0-2.6-3.8-3.6-6.2-.2Z"/></svg>',Mt='<svg class="coin-pack__coin" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#C99212"/><circle cx="12" cy="12" r="10.15" fill="#F3C63A"/><circle cx="12" cy="12" r="8.15" fill="#E8B423"/><circle cx="12" cy="12" r="7.35" fill="none" stroke="#FFE89A" stroke-width="0.85"/><path fill="#8F6508" d="M13.05 6.35h-2.1v1.12c-1.72.28-2.92 1.42-2.92 2.98 0 1.22.76 2.16 2.18 2.56l.74.2v3.32c-.72-.2-1.2-.7-1.36-1.26H7.45c.26 1.48 1.48 2.5 2.5 2.78v1.08h2.1v-1.06c1.78-.26 3.02-1.42 3.02-3.08 0-1.28-.8-2.22-2.2-2.6l-.82-.22V8.88c.66.2 1.12.7 1.24 1.22h1.92c-.22-1.38-1.36-2.34-2.36-2.58V6.35Zm-2.1 5.55c-.7-.18-1.14-.55-1.14-1.16 0-.7.5-1.14 1.14-1.3v2.46Zm2.1 1.16v2.62c-.74.2-1.26.56-1.26 1.22 0 .7.52 1.14 1.26 1.32v-5.16Z"/></svg>',ci='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 14.93V18h-2v-1.07A4 4 0 0 1 8 14h2a2 2 0 0 0 2 2 2 2 0 0 0 0-4h-1v-2h1a2 2 0 0 0 0-4 2 2 0 0 0-2 2H8a4 4 0 0 1 3-3.93V6h2v1.07A4 4 0 0 1 16 10h-2a2 2 0 0 0-2-2 2 2 0 0 0 0 4h1v2h-1a2 2 0 0 0 0 4 2 2 0 0 0 2-2h2a4 4 0 0 1-3 3.93Z"/></svg>',dr='<svg class="icon follow-btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a1 1 0 0 1 1 1v17.2l-6-3.4-6 3.4V4a1 1 0 0 1 1-1Z"/></svg>',ur='<svg class="icon follow-btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 16.6 5 12.4l1.4-1.4 2.8 2.8 8-8L18.6 7.2 9.2 16.6Z"/></svg>',li='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.5-5.6-5.6S8.9 6.2 12 6.2c1.8 0 3 .7 3.7 1.3l2.4-2.4C16.7 3.7 14.5 2.8 12 2.8 6.9 2.8 2.8 6.9 2.8 12S6.9 21.2 12 21.2c5.2 0 8.6-3.6 8.6-8.7 0-.6 0-1-.1-1.5H12Z"/></svg>';function l(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}const di=2*1024*1024,ui="ไฟล์ใหญ่เกินไป กรุณาเลือกรูปที่ไม่เกิน 2MB",pi="ไม่สามารถอ่านไฟล์รูปนี้ได้ กรุณาเลือกรูปอื่น",ne="พื้นที่เก็บข้อมูลในเบราว์เซอร์เต็ม กรุณาเลือกรูปที่เล็กลง";async function kt(e,{maxSide:t=1024,maxChars:n=35e4,errorMessage:a}={}){if(!e||!String(e.type||"").startsWith("image/"))return{ok:!1,error:"กรุณาเลือกไฟล์ภาพ"};if(e.size>di)return{ok:!1,error:a||ui};const r=URL.createObjectURL(e);try{const o=await new Promise((p,m)=>{const f=new Image;f.onload=()=>p(f),f.onerror=()=>m(new Error("unreadable")),f.src=r}),s=o.naturalWidth||300,c=o.naturalHeight||300;let i=Math.min(1,t/Math.max(s,c)),d=.86,u="";for(let p=0;p<6;p+=1){const m=document.createElement("canvas");m.width=Math.max(1,Math.round(s*i)),m.height=Math.max(1,Math.round(c*i));const f=m.getContext("2d");if(u=m.toDataURL("image/webp",d),u.startsWith("data:image/webp")?(f.drawImage(o,0,0,m.width,m.height),u=m.toDataURL("image/webp",d)):(f.fillStyle="#fff",f.fillRect(0,0,m.width,m.height),f.drawImage(o,0,0,m.width,m.height),u=m.toDataURL("image/jpeg",d)),u.length<=n)break;d=Math.max(.5,d-.1),i*=.82}return{ok:!0,dataUrl:u}}catch{return{ok:!1,error:pi}}finally{URL.revokeObjectURL(r)}}function gn(e){if(!e)return"";const t=String(e),n=/^\d{4}-\d{2}-\d{2}$/.test(t)?new Date(`${t}T00:00:00+07:00`):new Date(t);return Number.isNaN(n.getTime())?"":le(n)}function Le(e){if(e?.image)return"";const t=e?.from||"#F7B3BE",n=e?.to||"#8A5A9A";return`background: linear-gradient(165deg, ${t} 0%, ${n} 100%);`}function wt(e,{photoClass:t,motifClass:n}={}){const a=e.cover?.image?`<img class="${t}" src="${l(e.cover.image)}" alt="" />`:"",r=e.cover?.image?"":`<span class="${n}">${l(e.cover?.motif||"")}</span>`;return`${pr(e)}${a}${r}`}function bn(e,{filledMain:t=!1,maxSecondary:n=null}={}){const a=(e.tags||[]).map(i=>Yt(i)).filter(Boolean).map(i=>`<span class="chip${t?" chip--filled":""}">${l(i.name)}</span>`);let r=e.secondaryTags||[];n!=null&&(r=r.slice(0,n));const o=r.map(i=>`<span class="chip chip--outline">${l(i)}</span>`);if(!a.length&&!o.length)return"";const s=a.length?`<div class="chips__row chips__row--main">${a.join("")}</div>`:"",c=o.length?`<div class="chips__row chips__row--secondary">${o.join("")}</div>`:"";return`<div class="chips">${s}${c}</div>`}function pr(e){return e&&(e.isAdult||e.tags&&Ve(e))?'<span class="badge-18" title="เนื้อหาสำหรับผู้มีอายุ 18 ปีขึ้นไป">18+</span>':""}function Qe(){return ua(new URLSearchParams(window.location.search).get("next"))}function N(e){const t=e==="home"?' aria-current="page"':"",n=e==="login"?' aria-current="page"':"",a=e==="bookshelf"?' aria-current="page"':"",r=b(),o=I()==="/login"||I()==="/signup"?"/":I(),s=w({name:"login",next:o==="/"?void 0:o});let c="";if(r){const u=e==="profile"?' aria-current="page"':"",p=e==="purchases"?' aria-current="page"':"",m=e==="report"?' aria-current="page"':"";c=`
      <div class="account-menu">
        <button class="account-menu__btn" type="button" data-account-toggle aria-expanded="false" aria-haspopup="true" aria-controls="account-menu-list" aria-label="${l(r.displayName)}">
          <span class="avatar" aria-hidden="true">${Ft(r)}</span>
        </button>
        <div class="account-menu__list" id="account-menu-list" hidden>
          <div class="account-menu__profile">
            <span class="avatar avatar--menu" aria-hidden="true">${Ft(r)}</span>
            <p class="account-menu__profile-name">${l(r.displayName)}</p>
          </div>
          <a href="/profile" data-link${u}>${ni}แก้ไขโปรไฟล์</a>
          <a href="/bookshelf" data-link${a}>${ei}ชั้นหนังสือ</a>
          <a href="/purchases" data-link${p}>${ri}ประวัติการซื้อ</a>
          <a href="/report" data-link${m}>${ai}แจ้งปัญหาการใช้งาน</a>
          <button type="button" data-logout>${ti}ออกจากระบบ</button>
        </div>
      </div>
    `}else c=`
      <a class="header-link" href="${s}" data-link${n}>${oi}เข้าสู่ระบบ</a>
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
          <button class="header-search__toggle" type="button" data-search-toggle aria-expanded="${d?"true":"false"}" aria-label="${d?"ปิดช่องค้นหา":"เปิดช่องค้นหา"}">${On}</button>
          <input class="header-search__field" id="header-search-q" type="search" name="q" value="${l(i)}" placeholder="ค้นหานิยาย นามปากกา หรือแท็ก" autocomplete="off" aria-label="ค้นหานิยาย นามปากกา หรือแท็ก">
          <button class="header-search__go" type="submit" aria-label="ค้นหา">${On}</button>
        </form>
        <nav class="header-nav" aria-label="เมนูหลัก">
          <a class="header-nav-home" href="/" data-link${t}>${Qs}หน้าแรก</a>
          ${al()}
          ${c}
        </nav>
      </div>
    </header>
  `}function x(){return`
    <footer class="site-footer">
      <div class="site-footer__inner">
        <p>© ต้นแบบเว็บบ้านนิยายของนามปากกา ${l(k.penNames.join(" และ "))} — ต้นแบบทดลองใช้งาน</p>
        <p>เนื้อหาในหน้านี้เป็นข้อความตัวอย่างทั้งหมด ยังไม่เปิดขายและยังไม่จดโดเมน</p>
        <p class="footer-links"><a href="/terms" data-link>ข้อกำหนดการใช้งาน</a> · <a href="/privacy" data-link>นโยบายความเป็นส่วนตัว</a> · <a href="/admin" data-link>หลังบ้านนักเขียน (ต้นแบบ)</a></p>
      </div>
    </footer>
  `}function mr(e){return`
    <a class="novel-card" href="${w({name:"novel",id:e.id})}" data-link data-novel-id="${l(e.id)}">
      <div class="novel-card__cover" style="${Le(e.cover)}" aria-hidden="true">
        ${wt(e,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
      </div>
      <div class="novel-card__body">
        <h3 class="novel-card__title">${l(e.title)}</h3>
        <p class="novel-card__author">${l(e.author)}</p>
        ${bn(e,{maxSecondary:2})}
        <p class="novel-card__teaser">${l(e.teaser)}</p>
      </div>
    </a>
  `}function mi(e){const t=fa(e),n=t?"อยู่ในชั้นหนังสือแล้ว":"เพิ่มเข้าชั้น";return`
    <button class="follow-btn${t?" is-following":""}" type="button" data-follow="${l(e)}" aria-pressed="${t}">
      ${t?ur:dr}
      <span data-follow-label>${n}</span>
    </button>
  `}function fi(e){const t=String(e||"").trim();if(!t)return"";try{const n=new URL(t);return n.protocol==="https:"||n.protocol==="http:"?n.href:""}catch{return""}}function hi(e){const t=fi(e?.mebUrl);return t?`<a class="meb-btn" href="${l(t)}" target="_blank" rel="noopener noreferrer">ซื้ออีบุ๊กที่ MEB</a>`:""}function St(){return'<p class="proto-note">ระบบสมาชิกนี้เป็นต้นแบบ ข้อมูลถูกเก็บเฉพาะในเบราว์เซอร์นี้ ยังไม่มีการสร้างบัญชีจริงบนเซิร์ฟเวอร์</p>'}function h(e){return`<p class="field-error" data-error-for="${e}" hidden></p>`}function fr(e){return`
    <div class="auth-divider"><span>หรือ</span></div>
    <button class="btn btn-google" type="button" data-google-placeholder>
      ${li}
      ${e}
    </button>
    <p class="form-hint" data-google-message hidden>การเข้าสู่ระบบด้วย Google จะเปิดใช้ในเวอร์ชันถัดไป นี่เป็นเพียงตัวอย่างปุ่ม</p>
  `}function yn({titleId:e}={}){const t=B().signup,n=t.enabled&&t.coins?`<p class="auth-promo__pill-wrap"><span class="auth-promo__pill">รับทันที ${t.coins} เหรียญ</span></p>`:"";return`
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
    </div>`}function hr({next:e,compact:t=!1}={}){const n=w({name:"signup",next:e&&e!=="/"?e:void 0});return`
    ${t?"":St()}
    ${t?"":`<p class="demo-author-note">บัญชีนักเขียนตัวอย่างสำหรับเข้าหลังบ้าน: อีเมล <strong>${l(X.email)}</strong> รหัสผ่าน <strong>${l(X.password)}</strong></p>`}
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
    ${fr("เข้าสู่ระบบด้วย Google")}
    <p class="auth-switch">ยังไม่มีบัญชี? <a href="${n}" data-link>สมัครสมาชิก</a></p>
  `}function ue(e){return String(e||"").trim().toLowerCase()}function gi(e){const t=ue(e);return t?ye().filter(n=>ue(n.title).includes(t)||ue(n.author).includes(t)||(n.tags||[]).some(o=>{const s=Yt(o);return ue(o).includes(t)||s&&ue(s.name).includes(t)})?!0:(n.secondaryTags||[]).some(o=>ue(o).includes(t))):[]}function bi(){S("light");const t=(new URLSearchParams(window.location.search).get("q")||"").trim();document.title=t?`ค้นหา “${t}” — ${k.shortName}`:`ค้นหา — ${k.shortName}`;const n=gi(t);let a;t?n.length?a=`<div class="bookshelf-grid search-results">${n.map(mr).join("")}</div>`:a=`<p class="empty-state">ไม่พบนิยายที่ตรงกับ “${l(t)}”</p>`:a='<p class="empty-state">กรอกคำค้นเพื่อหานิยายจากชื่อเรื่อง นามปากกา หรือแท็ก</p>';const r=t?`ผลการค้นหา “${l(t)}” · พบ ${n.length} เรื่อง`:"ค้นหานิยาย";return`
    ${N("search")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ผลการค้นหา</h1>
        <p class="muted-note">${r}</p>
        ${a}
      </div>
    </main>
    ${x()}
  `}function yi(){document.title=k.name,S("light");const e=O(),t=e[0],n=e.map((s,c)=>{const i=c===0;return`
      <button
        class="home-tab${i?" is-active":""}"
        type="button"
        role="tab"
        id="home-tab-${s.id}"
        data-home-tab="${l(s.id)}"
        aria-selected="${i}"
        aria-controls="home-catalog"
      >${l(s.name)}${pr(s)}</button>`}).join(""),a=`
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
      ${bc()}
      <div class="container">
        <hr class="home-divider" />
        <div class="home-tabs">
          <div class="home-tabs__cats" role="tablist" aria-label="หมวดนิยาย">${n}</div>
          ${a}
        </div>
        <section class="home-catalog" id="home-catalog" data-home-catalog role="tabpanel" aria-labelledby="home-tab-${t.id}">
          ${gr(t)}
        </section>
      </div>
    </main>
    ${x()}
  `}function gr(e){const t=Zr(e.id);return t.length?`<div class="home-catalog-grid">${t.map(mr).join("")}</div>`:'<p class="muted-note">ยังไม่มีนิยายในหมวดนี้</p>'}function vi(){const e=document.querySelector("[data-home-catalog]");e&&document.querySelectorAll("[data-home-tab]").forEach(t=>{t.addEventListener("click",()=>{const n=jr(t.dataset.homeTab);n&&(document.querySelectorAll("[data-home-tab]").forEach(a=>{const r=a===t;a.classList.toggle("is-active",r),a.setAttribute("aria-selected",String(r))}),e.setAttribute("aria-labelledby",`home-tab-${n.id}`),e.innerHTML=gr(n),C(e))})})}function vn(e){return`<img class="gift-art" src="${Ms(e)}" alt="" width="256" height="256" />`}function br(e,t){const n=t?` data-chapter-id="${l(t)}"`:"",a=Xe.map(r=>{const o=r.coins==null?"กำหนดเอง":`${r.coins} เหรียญ`,s=r.coins==null?'<label class="donate-custom"><span>จำนวนเหรียญ</span><input class="donate-custom__input" type="number" min="1" step="1" inputmode="numeric" name="customAmount" placeholder="เช่น 8" aria-label="จำนวนเหรียญที่ต้องการโดเนท"></label>':"";return`
      <button class="donate-gift" type="button" data-donate-gift="${l(r.id)}">
        ${vn(r.id)}
        <span class="donate-gift__name">${l(r.name)}</span>
        <span class="donate-gift__price">${o}</span>
        ${s}
      </button>`}).join("");return`
    <section class="donate-box" data-donate-box data-novel-id="${l(e)}"${n} aria-label="โดเนท">
      <div class="donate-box__row">${a}</div>
      <p class="field-error donate-box__error" data-donate-error hidden></p>
    </section>`}function $i(e){const t=v(e);if(!t)return $n();document.title=`${t.title} — ${k.shortName}`,S("light");const n=Zt(t).map(a=>{const r=w({name:"reader",novelId:t.id,chapterId:a.id}),o=fe(t,a),s=te(a);let c="",i="";return s<=0?c='<span class="chapter-status chapter-status--free">อ่านฟรี</span>':o?c='<span class="chapter-status chapter-status--unlocked">ปลดล็อกแล้ว</span>':(c=`<span class="chapter-status chapter-status--locked">${lr}${ci} ${s} เหรียญ</span>`,i=` data-locked-chapter data-chapter-id="${l(a.id)}"`),`
        <a class="chapter-item" href="${r}" data-link data-novel-id="${l(t.id)}"${i}>
          <div>
            <p class="chapter-item__title">ตอนที่ ${l(a.id)} ${l(a.title)}</p>
            <p class="chapter-item__sub">เผยแพร่ ${gn(a.publishedAt)}</p>
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
            ${wt(t,{photoClass:"cover-lg__photo",motifClass:"cover-lg__motif"})}
          </div>
          <div class="novel-meta">
            <h1>${l(t.title)}</h1>
            <p class="novel-meta__author">โดย ${l(t.author)}</p>
            ${bn(t,{filledMain:!0})}
            <div class="novel-meta__actions">
              ${mi(t.id)}
              ${hi(t)}
            </div>
            <p class="synopsis">${Tr(t.synopsis)}</p>
          </div>
        </div>
        ${br(t.id)}
        <section class="chapter-list" aria-labelledby="toc-heading">
          <h2 id="toc-heading">สารบัญตอน</h2>
          ${n}
        </section>
      </div>
    </main>
    ${x()}
  `}function ki(e,t){const n=v(e),a=be(n,t);if(!n||!a||!ve(a))return $n();document.title=`${a.title} — ${n.title}`;const r=Xa(),o=ks();S(r);const s=Zt(n),c=s.findIndex(G=>G.id===a.id),i=s[c-1],d=s[c+1],u=w({name:"novel",id:n.id}),p=i?w({name:"reader",novelId:n.id,chapterId:i.id}):"#",m=d?w({name:"reader",novelId:n.id,chapterId:d.id}):"#",f=Xs.map(G=>`<button class="tool-btn${G===o?" is-active":""}" type="button" data-font-size="${G}" aria-pressed="${G===o}">${{16:"เล็ก",18:"กลาง",22:"ใหญ่"}[G]}</button>`).join(""),y=fe(n,a),_=te(a),F=b(),Ce=w({name:"login",next:w({name:"reader",novelId:n.id,chapterId:a.id})});let W="";if(y)W=`<article class="chapter-body">${l(a.content)}</article>`;else{const G=F?`<button class="btn btn-primary" type="button" data-locked-chapter data-novel-id="${l(n.id)}" data-chapter-id="${l(a.id)}">ปลดล็อกด้วย ${_} เหรียญ</button>
         <p class="muted-note">ยอดคงเหลือ ${ge()} เหรียญ (${l(At(P()))})</p>`:`<a class="btn btn-primary btn-login-prompt" href="${Ce}" data-link>เข้าสู่ระบบเพื่อปลดล็อก</a>`;W=`
      <div class="lock-panel">
        <div class="lock-icon-lg">${lr}</div>
        <h2>ตอนนี้ถูกล็อกไว้</h2>
        ${G}
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
      ${W}
      <nav class="reader-nav" aria-label="ตอนก่อนหน้าและตอนถัดไป">
        <a class="nav-btn" href="${p}" ${i?`data-link data-novel-id="${l(n.id)}"${fe(n,i)?"":` data-locked-chapter data-chapter-id="${l(i.id)}"`}`:'aria-disabled="true"'}>⬅️ ตอนก่อนหน้า</a>
        <a class="nav-btn" href="${m}" ${d?`data-link data-novel-id="${l(n.id)}"${fe(n,d)?"":` data-locked-chapter data-chapter-id="${l(d.id)}"`}`:'aria-disabled="true"'}>ตอนต่อไป ➡️</a>
      </nav>
      ${br(n.id,a.id)}
    </main>
    ${x()}
  `}function $n(){return document.title=`ไม่พบหน้า — ${k.shortName}`,S("light"),`
    ${N()}
    <main id="main" class="page-block">
      <div class="container not-found">
        <h1>ไม่พบหน้าที่ต้องการ</h1>
        <p class="muted-note">ลิงก์นี้อาจไม่ถูกต้องหรือนิยายตัวอย่างถูกลบแล้ว</p>
        <p><a class="back-link" href="/" data-link>กลับหน้าแรก</a></p>
      </div>
    </main>
    ${x()}
  `}function S(e){document.body.classList.toggle("reader-night",e==="night")}function wi(){if(b())return document.title=`เข้าสู่ระบบ — ${k.shortName}`,"";document.title=`เข้าสู่ระบบ — ${k.shortName}`,S("light");const t=Qe();return`
    ${N("login")}
    <main id="main" class="page-block">
      <div class="auth-card">
        ${yn()}
        <h1>เข้าสู่ระบบ</h1>
        ${new URLSearchParams(window.location.search).get("reset")==="1"?'<p class="form-success">ตั้งรหัสผ่านใหม่แล้ว กรุณาเข้าสู่ระบบด้วยรหัสผ่านใหม่</p>':""}
        ${hr({next:t})}
      </div>
    </main>
    ${x()}
  `}function Si(){if(b())return document.title=`สมัครสมาชิก — ${k.shortName}`,"";document.title=`สมัครสมาชิก — ${k.shortName}`,S("light");const e=Qe(),t=w({name:"login",next:e==="/"?void 0:e});return`
    ${N("signup")}
    <main id="main" class="page-block">
      <div class="auth-card">
        ${yn()}
        <h1>สมัครสมาชิก</h1>
        ${St()}
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
        ${fr("สมัครด้วย Google")}
        <p class="auth-switch">มีบัญชีอยู่แล้ว? <a href="${t}" data-link>เข้าสู่ระบบ</a></p>
      </div>
    </main>
    ${x()}
  `}function _i(){const e=b();if(!e)return document.title=`ชั้นหนังสือของฉัน — ${k.shortName}`,"";document.title=`ชั้นหนังสือของฉัน — ${k.shortName}`,S("light");const t=ko();let n="";return t.length?n=`<div class="bookshelf-grid">${t.map(a=>Ai(a)).join("")}</div>`:n='<p class="empty-state">ยังไม่มีเรื่องในชั้นหนังสือ ลองกดเพิ่มเข้าชั้นจากหน้านิยายได้เลย</p>',`
    ${N("bookshelf")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ชั้นหนังสือของฉัน</h1>
        <p class="muted-note">สวัสดีคุณ ${l(e.displayName)} — เรื่องที่คุณเพิ่มเข้าชั้นจะถูกรวบรวมที่นี่</p>
        ${n}
      </div>
    </main>
    ${x()}
  `}function Ai(e){const t=v(e.novelId);if(!t)return"";const n=w({name:"novel",id:t.id}),a=Zt(t),r=a[0];let o=r?`<p class="bookshelf-continue">ยังไม่เริ่มอ่าน · <a href="${w({name:"reader",novelId:t.id,chapterId:r.id})}" data-link data-novel-id="${l(t.id)}">เริ่มอ่านตอนแรก</a></p>`:'<p class="bookshelf-continue">ยังไม่มีตอนที่เผยแพร่</p>';if(e.progress){const s=a.find(c=>c.id===e.progress.chapterId)||r;s&&(o=`<p class="bookshelf-continue">อ่านต่อ · <a href="${w({name:"reader",novelId:t.id,chapterId:s.id})}" data-link data-novel-id="${l(t.id)}">ตอนที่ ${l(s.id)} ${l(s.title)}</a></p>`)}return`
    <article class="novel-card novel-card--shelf">
      <a class="novel-card__link" href="${n}" data-link data-novel-id="${l(t.id)}">
        <div class="novel-card__cover" style="${Le(t.cover)}" aria-hidden="true">
          ${wt(t,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
        </div>
        <div class="novel-card__body">
          <h3 class="novel-card__title">${l(t.title)}</h3>
          <p class="novel-card__author">${l(t.author)}</p>
          ${bn(t,{maxSecondary:2})}
          <p class="novel-card__teaser">${l(t.teaser)}</p>
        </div>
      </a>
      ${o}
    </article>
  `}function Ft(e,t=""){return e?.avatar?`<img${t?` class="${t}"`:""} src="${l(e.avatar)}" alt="">`:l((e?.displayName||"").trim().charAt(0).toUpperCase()||"น")}function Ni(){const e=b();if(!e)return document.title=`แก้ไขโปรไฟล์ — ${k.shortName}`,"";document.title=`แก้ไขโปรไฟล์ — ${k.shortName}`,S("light");const t=e.avatar?"เปลี่ยนรูปโปรไฟล์":"อัปโหลดรูปโปรไฟล์";let n=!1;try{n=sessionStorage.getItem("banNiyai_profileSaved")==="1",n&&sessionStorage.removeItem("banNiyai_profileSaved")}catch{}return`
    ${N("profile")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">แก้ไขโปรไฟล์</h1>
        <form class="profile-form" data-profile-form>
          <div class="profile-form__avatar">
            <span class="avatar avatar--profile" data-avatar-preview aria-hidden="true">${Ft(e)}</span>
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
    ${x()}
  `}function xi(){const e=document.querySelector("[data-profile-form]");if(!e)return;const t=e.querySelector("[data-avatar-file]"),n=e.querySelector("[data-avatar-preview]"),a=e.querySelector("[data-avatar-pick]");let r;const o=(c,i)=>{const d=e.querySelector(`[data-error-for="${c}"]`);d&&(i?(d.hidden=!1,d.textContent=i):(d.hidden=!0,d.textContent=""))},s=()=>{e.querySelectorAll("[data-error-for]").forEach(c=>{c.hidden=!0,c.textContent=""})};a?.addEventListener("click",()=>t?.click()),t?.addEventListener("change",async()=>{const c=t.files?.[0];if(o("avatar",""),!c)return;const i=await kt(c,{maxSide:512,maxChars:15e4,errorMessage:"ไฟล์ภาพต้องไม่เกิน 2MB"});if(t.value="",!i.ok){o("avatar",i.error);return}r=i.dataUrl,n&&(n.innerHTML=`<img src="${r}" alt="">`),a&&(a.textContent="เปลี่ยนรูปโปรไฟล์")}),e.addEventListener("submit",c=>{c.preventDefault(),s();const i=e.querySelector("[data-profile-saved]");i&&(i.hidden=!0);const u={displayName:new FormData(e).get("displayName")};r!==void 0&&(u.avatar=r);let p;try{p=ho(u)}catch{o("avatar",ne);return}if(!p.ok){Object.entries(p.errors||{}).forEach(([m,f])=>o(m,f));return}try{sessionStorage.setItem("banNiyai_profileSaved","1")}catch{}g("/profile",{replace:!0})})}function yr(e){return`<p class="empty-state">${l(e)}</p>`}function Ei(e){const t=e.filter(a=>a.type==="topup");return t.length?`
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
      <td data-label="วันที่">${R(gn(a.createdAt))}</td>
      <td data-label="แพ็ก">${l(r)}</td>
      <td class="purchase-table__num" data-label="เหรียญที่ได้รับ">${l(o)}</td>
    </tr>`}).join("")}</tbody>
      </table>
    </div>
  `:yr("ยังไม่มีรายการเติมเหรียญ")}function Ii(e){const t=e.filter(a=>a.type==="unlock");return t.length?`
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
      <td data-label="วันที่">${R(gn(a.createdAt))}</td>
      <td data-label="นิยาย">${l(s)}</td>
      <td data-label="ตอน">${l(c)}</td>
      <td class="purchase-table__num" data-label="เหรียญ">${l(i)}</td>
    </tr>`}).join("")}</tbody>
      </table>
    </div>
  `:yr("ยังไม่มีรายการปลดล็อกตอน")}function Ti(){if(!b())return document.title=`ประวัติการซื้อ — ${k.shortName}`,"";document.title=`ประวัติการซื้อ — ${k.shortName}`,S("light");const t=bt();return`
    ${N("purchases")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ประวัติการซื้อ</h1>
        <section class="purchase-section">
          <h2>รายงานการเติมเหรียญ</h2>
          ${Ei(t)}
        </section>
        <section class="purchase-section">
          <h2>รายงานการปลดล็อกตอน</h2>
          ${Ii(t)}
        </section>
      </div>
    </main>
    ${x()}
  `}function vr(){return'<p class="legal-draft-banner">เอกสารนี้เป็นร่างสำหรับต้นแบบเว็บ ยังไม่ได้ผ่านการตรวจสอบทางกฎหมาย และยังไม่มีผลใช้บังคับจริง</p>'}function Di(){return document.title=`ข้อกำหนดการใช้งาน (ร่าง) — ${k.shortName}`,S("light"),`
    ${N()}
    <main id="main" class="page-block">
      <div class="container legal-page">
        <h1>ข้อกำหนดการใช้งาน</h1>
        ${vr()}
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
    ${x()}
  `}function qi(){return document.title=`นโยบายความเป็นส่วนตัว (ร่าง) — ${k.shortName}`,S("light"),`
    ${N()}
    <main id="main" class="page-block">
      <div class="container legal-page">
        <h1>นโยบายความเป็นส่วนตัว</h1>
        ${vr()}
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
  `}function $r(e){e.querySelectorAll("[data-error-for]").forEach(t=>{t.hidden=!0,t.textContent=""})}function A(e,t){$r(e),Object.entries(t).forEach(([n,a])=>{const r=e.querySelector(`[data-error-for="${n}"]`);r&&(r.textContent=a,r.hidden=!1)})}function Li(e){const t=document.querySelector(".modal-backdrop");t&&t.remove();const n=w({name:"login",next:e}),a=w({name:"signup",next:e}),r=document.createElement("div");r.className="modal-backdrop",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby","login-prompt-title"),r.innerHTML=`
    <div class="modal">
      <h2 id="login-prompt-title">กรุณาเข้าสู่ระบบ</h2>
      <p>ต้องเข้าสู่ระบบก่อนจึงจะเพิ่มเรื่องเข้าชั้นหนังสือได้</p>
      <div class="modal__actions">
        <a class="btn btn-primary btn-login-prompt" href="${n}" data-link>เข้าสู่ระบบ</a>
        <a class="btn btn-ghost" href="${a}" data-link>สมัครสมาชิก</a>
        <button class="btn btn-ghost" type="button" data-modal-close>ปิด</button>
      </div>
    </div>
  `,document.body.appendChild(r),C(r),r.querySelector("[data-modal-close]").addEventListener("click",()=>r.remove()),r.addEventListener("click",o=>{o.target===r&&r.remove()})}function Ci(){return document.title=`ลืมรหัสผ่าน — ${k.shortName}`,S("light"),`
    ${N("login")}
    <main id="main" class="page-block">
      <div class="auth-card">
        <h1>ลืมรหัสผ่าน</h1>
        ${St()}
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
    ${x()}
  `}function Bi(){document.title=`ตั้งรหัสผ่านใหม่ — ${k.shortName}`,S("light");const e=new URLSearchParams(window.location.search).get("token")||"",t=Ao(e);let n="";return t?n=`
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
        ${St()}
        ${n}
      </div>
    </main>
    ${x()}
  `}function Pi(){document.title=`หลังบ้านนักเขียน — ${k.shortName}`,S("light");const e=b();if(!it(e))return`
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
    `;L(),M();const t=new URLSearchParams(window.location.search).get("tab"),n=["promos","events","sales","reports"].includes(t)?t:"studio",a=n==="promos"?Fe():n==="events"?Ur():n==="sales"?Qc():n==="reports"?vc(new URLSearchParams(window.location.search).get("report")||""):Fc(),r=Va().length;return`
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
  `}function Ui(e,{showHeading:t=!0,showSave:n=!0,idSuffix:a}={}){const r=a||e.id,o=O().map(u=>{const p=(e.tags||[]).includes(u.id);return`<button class="admin-chip${p?" is-on":""}" type="button" data-main-tag="${l(u.id)}" aria-pressed="${p}">${l(u.name)}</button>`}).join(""),s=(e.secondaryTags||[]).map(u=>`
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
      </div>
      <h3>แท็กรอง</h3>
      <div class="admin-selected" data-secondary-row>${s||'<span class="muted-note">ยังไม่มีแท็กรอง</span>'}</div>
      <p class="admin-label">เลือกจากรายการแนะนำ</p>
      <div class="admin-chip-row" data-suggest-row>${c}</div>
      <label class="admin-label" for="new-tag-${l(r)}">พิมพ์แท็กใหม่แล้วกด Enter</label>
      <input class="admin-new-tag" id="new-tag-${l(r)}" type="text" maxlength="30" data-new-tag placeholder="เช่น รุ่นพี่รุ่นน้อง" />
      ${d}
    </section>
  `}function se(e){return[...e.querySelectorAll("[data-secondary-name]")].map(t=>t.dataset.secondaryName)}function Ht(e,t){const n=e.querySelector("[data-secondary-row]");if(!t.length){n.innerHTML='<span class="muted-note">ยังไม่มีแท็กรอง</span>';return}n.innerHTML=t.map(a=>`
        <span class="admin-tag" data-secondary-name="${l(a)}">
          ${l(a)}
          <button type="button" data-remove-tag="${l(a)}" aria-label="ลบแท็ก ${l(a)}">×</button>
        </span>`).join("")}function Rn(e,t){const n=new Set(t.map(a=>a.toLowerCase()));e.querySelectorAll("[data-suggest-tag]").forEach(a=>{const r=n.has(a.dataset.suggestTag.toLowerCase());a.classList.toggle("is-on",r),a.setAttribute("aria-pressed",String(r))})}function Mn(e,t){const n=Ne(t);if(!n||O().some(r=>r.name===n))return;const a=se(e);a.some(r=>r.toLowerCase()===n.toLowerCase())||(a.push(n),Ht(e,a),Jt(n),Ri())}function Oi(e){return $e().map(t=>{const n=e.some(a=>a.toLowerCase()===t.toLowerCase());return`<button class="admin-chip admin-chip--ghost${n?" is-on":""}" type="button" data-suggest-tag="${l(t)}" aria-pressed="${n}">${l(t)}</button>`}).join("")}function Ri(){document.querySelectorAll("[data-admin-novel]").forEach(e=>{const t=e.querySelector("[data-suggest-row]");t&&(t.innerHTML=Oi(se(e)))})}function Mi(){document.querySelectorAll("[data-admin-novel]").forEach(e=>{e.addEventListener("click",c=>{const i=c.target.closest("[data-main-tag]");if(i&&e.contains(i)){i.classList.toggle("is-on"),i.setAttribute("aria-pressed",String(i.classList.contains("is-on")));return}const d=c.target.closest("[data-suggest-tag]");if(d&&e.contains(d)){const p=d.dataset.suggestTag,m=se(e);if(m.some(f=>f.toLowerCase()===p.toLowerCase()))Ht(e,m.filter(f=>f.toLowerCase()!==p.toLowerCase()));else{Mn(e,p);return}Rn(e,se(e));return}const u=c.target.closest("[data-remove-tag]");if(u&&e.contains(u)){const p=u.dataset.removeTag,m=se(e).filter(f=>f.toLowerCase()!==p.toLowerCase());Ht(e,m),Rn(e,m)}});const t=e.querySelector("[data-new-tag]");t&&t.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),Mn(e,t.value),t.value="")});const n=e.querySelector("[data-new-category]"),a=e.querySelector("[data-category-add-error]"),r=c=>{a&&(a.textContent=c||"",a.hidden=!c)},o=()=>{if(!n)return;let c;try{c=Vr(n.value)}catch{r(ne);return}if(!c.ok){r(c.error);return}r(""),n.value="";const i=e.querySelector("[data-main-row]");if(i&&!i.querySelector(`[data-main-tag="${c.category.id}"]`)){const d=document.createElement("button");d.className="admin-chip is-on",d.type="button",d.dataset.mainTag=c.category.id,d.setAttribute("aria-pressed","true"),d.textContent=c.category.name,i.append(d),C(d)}};e.querySelector("[data-add-category]")?.addEventListener("click",o),n?.addEventListener("keydown",c=>{c.key==="Enter"&&(c.preventDefault(),o())});const s=e.querySelector("[data-save-tags]");s&&s.addEventListener("click",()=>{const c=[...e.querySelectorAll("[data-main-tag].is-on")].map(u=>u.dataset.mainTag),i=Wr(e.dataset.adminNovel,{tags:c,secondaryTags:se(e)}),d=e.querySelector("[data-save-status]");d&&(d.hidden=!1,i.ok?(d.textContent="บันทึกแท็กแล้ว",d.classList.remove("is-error")):(d.textContent=i.error||"บันทึกไม่สำเร็จ",d.classList.add("is-error")))})})}function Fi(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?"":new Intl.DateTimeFormat("sv-SE",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(t).replace(" ","T")}function Hi(e){if(!e)return"";const t=new Date(`${e}:00+07:00`);return Number.isNaN(t.getTime())?"":t.toISOString()}function ji(e){const t=Fi(e);if(!t)return{date:"",time:""};const[n,a=""]=t.split("T");return{date:n,time:a}}function kn(e,t){if(!e)return"";const n=String(t||"00:00").slice(0,5);return Hi(`${e}T${n}`)}function ee(e,t){return kn(e.get(`${t}Date`),e.get(`${t}Time`))}function kr(e,t){const n=kn(e,t||"00:00");return n?wn(new Date(n)):""}function wr(e){if(!e)return"เลือกวันที่";const t=kn(e,"00:00");return t?`${_r(new Date(t))} ${Ki(new Date(t))}`:"เลือกวันที่"}function Sr(e){if(!e)return"เลือกเวลา";const[t="",n=""]=String(e).split(":");return!t||!n?"เลือกเวลา":`${t}:${n} น.`}function ae({id:e,name:t,value:n="",required:a=!1}){const{date:r,time:o}=ji(n),s=kr(r,o),c=a?" required":"";return`
    <div class="datetime-field" data-datetime-field>
      <div class="datetime-field__inputs">
        <label class="datetime-field__sub" for="${l(e)}-date">วันที่
          <span class="datetime-field__control"${r?"":' data-empty="true"'}>
            <input id="${l(e)}-date" name="${l(t)}Date" type="date" lang="th"${c} value="${l(r)}" data-datetime-date />
            <span class="datetime-field__hint" data-date-hint aria-hidden="true">${l(wr(r))}</span>
          </span>
        </label>
        <label class="datetime-field__sub" for="${l(e)}-time">เวลา
          <span class="datetime-field__control"${o?"":' data-empty="true"'}>
            <input id="${l(e)}-time" name="${l(t)}Time" type="time" lang="th"${c} value="${l(o)}" data-datetime-time />
            <span class="datetime-field__hint" data-time-hint aria-hidden="true">${l(Sr(o))}</span>
          </span>
        </label>
      </div>
      <p class="datetime-field__preview" data-datetime-preview${s?"":" hidden"}>${s?l(s):""}</p>
    </div>`}function ke(e=document){e.querySelectorAll("[data-datetime-field]").forEach(t=>{const n=t.querySelector("[data-datetime-date]"),a=t.querySelector("[data-datetime-time]"),r=t.querySelector("[data-datetime-preview]"),o=t.querySelector("[data-date-hint]"),s=t.querySelector("[data-time-hint]");if(!n||!r)return;const c=(d,u,p)=>{if(!d||!u)return;const m=d.closest(".datetime-field__control");u.textContent=p(d.value),m&&m.toggleAttribute("data-empty",!d.value)},i=()=>{const d=kr(n.value,a?.value||"00:00");r.textContent=d,r.hidden=!d,c(n,o,wr),c(a,s,Sr)};n.addEventListener("input",i),n.addEventListener("change",i),a?.addEventListener("input",i),a?.addEventListener("change",i),i()})}function _r(e){return new Intl.DateTimeFormat("th-TH",{day:"numeric",month:"short",timeZone:"Asia/Bangkok"}).format(e)}function _t(e){const t=Number(new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric"}).format(e).slice(0,4));return String((t+543)%100).padStart(2,"0")}function Ki(e){return _t(e)}function le(e){return`${_r(e)} ${_t(e)}`}function Ar(e,t=1,n=1){return new Date(`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}T00:00:00+07:00`)}function Vi(e,t){const n=Ar(e,t);return Number.isNaN(n.getTime())?"":`${new Intl.DateTimeFormat("th-TH",{month:"short",timeZone:"Asia/Bangkok"}).format(n)} ${_t(n)}`}function Yi(e){const t=Ar(e,1);return Number.isNaN(t.getTime())?"":`ปี ${_t(t)}`}function Ji(e){return new Intl.DateTimeFormat("th-TH",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"Asia/Bangkok"}).format(e).replace(/\s*น\.?\s*$/u,"")}function wn(e){return`${le(e)} ${Ji(e)}`}function R(e){const t=String(e||"").trim();return t?`<span class="date-part" data-no-wbr>${l(t)}</span>`:""}function Nr(e,t){return`${R(le(e))} ${R("ถึง")} ${R(le(t))}`}function Sn(e){if(!e?.startAt||!e?.endAt)return"";const t=new Date(e.startAt),n=new Date(e.endAt);return Number.isNaN(t.getTime())||Number.isNaN(n.getTime())?"":Nr(t,n)}function xr(e){const t=new Date(e);return Number.isNaN(t.getTime())?"":R(le(t))}function Er(e,t){const n=new Date(e),a=new Date(t);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?"":Nr(n,a)}const Zi="ม\\.ค\\.|ก\\.พ\\.|มี\\.ค\\.|เม\\.ย\\.|พ\\.ค\\.|มิ\\.ย\\.|ก\\.ค\\.|ส\\.ค\\.|ก\\.ย\\.|ต\\.ค\\.|พ\\.ย\\.|ธ\\.ค\\.",Wi=new RegExp(`(\\d{1,2}\\s*(?:${Zi})(?:\\s+\\d{2,4})?)|(พ\\.ศ\\.\\s*\\d{2,4})`,"g");function Gi(e){const t=String(e||"");if(!t)return"";let n="",a=0;for(const r of t.matchAll(Wi))n+=l(t.slice(a,r.index)),n+=R(r[0]),a=r.index+r[0].length;return n+=l(t.slice(a)),n}function $(e){return`<p class="field-hint">${l(e)}</p>`}function zi(e){const t=e.bonusType==="fixed"?`${e.bonusValue} เหรียญ`:`${e.bonusValue}%`;let n;e.packageIds==="all"?n="เติมทุกแพ็ก":n=`เติมแพ็ก ${(e.packageIds||[]).map(s=>{const c=De.find(i=>i.id===s);return c?`${c.thb} บาท`:s}).join(" ")}`;const a=[l(`${n} รับเพิ่ม ${t}`)],r=Er(e.startAt,e.endAt);return r&&a.push(r),e.firstTopUpOnly&&a.push(l("เฉพาะเติมครั้งแรก")),e.bonusExpiryDays&&a.push(l(`โบนัสใช้ได้ ${e.bonusExpiryDays} วัน`)),a.join(" · ")}function Xi(e){const t=[l(`${e.code} ให้ ${e.coins} เหรียญ`),l(`ใช้แล้ว ${e.usedBy.length}/${e.maxUses}`)];return e.expiresAt&&t.push(`${l("หมดอายุ")} ${xr(e.expiresAt)}`),e.bonusExpiryDays&&t.push(l(`โบนัสใช้ได้ ${e.bonusExpiryDays} วัน`)),t.join(" · ")}function Qi(e){return e.bonus?`${e.thb} บาท · เหรียญเพิ่มของแพ็กนี้ ${e.bonus}`:`${e.thb} บาท`}const ec="input, textarea, select, option, script, style, code, pre, kbd, samp, [data-no-wbr], .thai-nowrap";function Ir(e){return String(e||"").split(/(\s+)/).map(t=>t?/^\s+$/.test(t)?t:`<span class="thai-nowrap">${l(t)}</span>`:"").join("")}function Tr(e){return String(e??"").split(/\r?\n/).map(t=>tc(t)).join("<br>")}function tc(e){return e?nc(e).map(t=>/^\s+$/.test(t)?t:`<span class="thai-nowrap">${l(t)}</span>`).join(""):""}function nc(e){const t=String(e??"");if(!t)return[];if(typeof Intl>"u"||!Intl.Segmenter)return t.split(/(\s+)/).filter(Boolean);const n=new Intl.Segmenter("th",{granularity:"word"}),a=[];for(const{segment:i}of n.segment(t))i&&a.push(i);const r=/^[(\[{«“‘"']+$/u,o=/^[\p{P}\p{S}]+$/u,s=[];for(const i of a){if(/^\s+$/.test(i)){s.push(i);continue}if(o.test(i)&&!r.test(i)&&s.length&&!/^\s+$/.test(s[s.length-1])){s[s.length-1]+=i;continue}s.push(i)}const c=[];for(let i=0;i<s.length;i+=1){const d=s[i];if(o.test(d)&&r.test(d)&&i+1<s.length&&!/^\s+$/.test(s[i+1])){s[i+1]=d+s[i+1];continue}c.push(d)}return c}const ac="หมายเหตุ: กดรับครบ 7 ดอก แลกได้ 7 เหรียญ (ให้แลกได้เฉพาะนักอ่านที่เก็บครบเท่านั้น)",rc="หมายเหตุ: เก็บกุญแจสีรุ้ง ครบ 7 ดอก แลกได้ 20 เหรียญ ตั้งแต่วันที่ 27 ธ.ค. ถึง 2 ม.ค. 70",oc="(หากเก็บไม่ครบทั้ง 7 วัน จะไม่สามารถสะสมไว้แลกรับเหรียญในกิจกรรมถัดไปได้)",sc=["แลกรับเหรียญ","20 เหรียญ","7 เหรียญ","7 ดอก","7 วัน","27 ธ.ค.","2 ม.ค. 70"];function xt(e){const t=String(e??""),n=sc.slice().sort((o,s)=>s.length-o.length),a=n.map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));return(a.length?t.split(new RegExp(`(${a.join("|")})`,"g")):[t]).flatMap(o=>o?n.includes(o)?[`<span class="thai-nowrap">${l(o)}</span>`]:o.split(/(\s+)/).filter(Boolean).map(s=>/^\s+$/.test(s)?s:`<span class="thai-nowrap">${l(s)}</span>`):[]).join("")}function Fn(e){let t=e.parentElement;for(;t;){const n=getComputedStyle(t).display;if(n!=="inline"&&n!=="contents"&&n!=="inline-block")return t.clientWidth;t=t.parentElement}return 0}function Hn(e){const t=e.style.maxWidth,n=e.style.whiteSpace,a=e.style.overflow;e.style.maxWidth="none",e.style.whiteSpace="nowrap",e.style.overflow="hidden";const r=e.scrollWidth;return e.style.maxWidth=t,e.style.whiteSpace=n,e.style.overflow=a,r}function ic(e){const t=e.textContent||"";if(!t||typeof Intl>"u"||!Intl.Segmenter)return!1;const n=new Intl.Segmenter("th",{granularity:"word"}),a=[];for(const{segment:u}of n.segment(t))u&&a.push(u);const r=/^[(\[{«“‘"'<<]+$/u,o=/^[\p{P}\p{S}]+$/u,s=[];for(const u of a){if(/^\s+$/.test(u)){s.push(u);continue}if(o.test(u)&&!r.test(u)&&s.length&&!/^\s+$/.test(s[s.length-1])){s[s.length-1]+=u;continue}s.push(u)}const c=[];for(let u=0;u<s.length;u+=1){const p=s[u];if(o.test(p)&&r.test(p)&&u+1<s.length&&!/^\s+$/.test(s[u+1])){s[u+1]=p+s[u+1];continue}c.push(p)}if(c.filter(u=>!/^\s+$/.test(u)).length<=1)return!1;const d=document.createDocumentFragment();for(const u of c){if(/^\s+$/.test(u)){d.appendChild(document.createTextNode(u));continue}const p=document.createElement("span");p.className="thai-nowrap",p.dataset.thaiSplit="1",p.textContent=u,d.appendChild(p)}return e.replaceWith(d),!0}function Dr(e){if(!e)return;const t=[...e.querySelectorAll(".thai-nowrap")];for(const n of t){if(!n.isConnected)continue;const a=Fn(n);if(!(a>0))continue;if(Hn(n)<=a+1){n.classList.remove("thai-nowrap--overflow");continue}if(n.dataset.thaiSplit==="1"){n.classList.add("thai-nowrap--overflow");continue}ic(n)||n.classList.add("thai-nowrap--overflow")}e.querySelectorAll('.thai-nowrap[data-thai-split="1"]').forEach(n=>{const a=Fn(n);if(!(a>0))return;const r=Hn(n);n.classList.toggle("thai-nowrap--overflow",r>a+1)})}function jt(){if(jt.bound)return;jt.bound=!0;let e=0;window.addEventListener("resize",()=>{clearTimeout(e),e=window.setTimeout(()=>{const t=document.getElementById("app")||document.body;Dr(t)},100)})}function C(e=document.getElementById("app")||document.body){if(!e)return;jt();const t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode(r){const o=r.parentElement;return!o||o.closest(ec)||!r.nodeValue||!/[\u0E00-\u0E7F]/.test(r.nodeValue)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n=[];for(;t.nextNode();)n.push(t.currentNode);for(const r of n){const o=r.nodeValue.split(/(\s+)/),s=document.createDocumentFragment();for(const c of o){if(!c)continue;if(/^\s+$/.test(c)){s.appendChild(document.createTextNode(c));continue}const i=document.createElement("span");i.className="thai-nowrap",i.textContent=c,s.appendChild(i)}r.parentNode.replaceChild(s,r)}const a=()=>Dr(e);a(),document.fonts?.ready&&document.fonts.ready.then(a)}const cc='<svg class="key-icon__svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 14a5.5 5.5 0 1 1 5.13-7.5H22v3h-2v2h-2v2h-2.37A5.5 5.5 0 0 1 8.5 14Zm0-8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/></svg>',lc={silver:"/images/keys/key-silver.webp",rainbow:"/images/keys/key-rainbow.webp"};function dc(e,t,n=""){if(n)return`<span class="key-icon key-icon--img key-icon--custom${t?" is-filled":""}"><img src="${l(n)}" alt="" width="32" height="32" /></span>`;const a=lc[e];return a?`<span class="key-icon key-icon--img key-icon--${e}${t?" is-filled":""}"><img src="${a}" alt="" width="32" height="32" /></span>`:`<span class="key-icon key-icon--${e}${t?" is-filled":""}">${cc}</span>`}function Et({keys:e=0,need:t=7,name:n="กุญแจเงิน",style:a="silver",image:r=""}={}){const o=Math.max(1,Number(t)||7),s=Math.max(0,Number(e)||0),c=Math.min(s,o),i=["rainbow","gold","rose"].includes(a)?a:"silver",d=Array.from({length:o},(u,p)=>dc(i,p<c,r)).join("");return`
    <p class="key-progress" aria-label="${l(n)} ${s}/${o}">
      <span class="key-row">${d}</span>
      <span class="key-progress__count">${l(n)} ${s}/${o}</span>
    </p>
  `}function At(e){return`เหรียญ ${e.purchased} / โบนัส ${e.bonus}`}function jn(e){return e?String(e):""}function uc(){const e=B(),t=e.signup,n=e.checkin,a=e.firstTopUp;return`
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
              <input id="base-signup-expiry" name="bonusExpiryDays" type="number" min="1" step="1" placeholder="ไม่บังคับ" value="${l(jn(t.bonusExpiryDays))}" />
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
              <input id="base-first-expiry" name="bonusExpiryDays" type="number" min="1" step="1" placeholder="ไม่บังคับ" value="${l(jn(a.bonusExpiryDays))}" />
            </div>
            <div class="admin-save-row">
              <button class="btn btn-primary" type="submit">บันทึก</button>
              <button class="btn btn-ghost" type="button" data-base-toggle="firstTopUp" data-enabled="${a.enabled?"1":"0"}">${a.enabled?"ปิดโปร":"เปิดโปร"}</button>
            </div>
          </form>
        </article>
      </div>
    </section>
  `}function pc(e=""){const t=e?en(e):null;return`
    <section class="redeem-admin-section">
      <h2 class="admin-section-title">รหัสแลกเหรียญ</h2>
      <div class="promo-layout">
        <div>${oe().map(a=>{const r=a.usedBy.length,o=a.expiresAt&&new Date(a.expiresAt)<=new Date,s=a.enabled?o?"หมดอายุ":r>=a.maxUses?"ใช้ครบแล้ว":"กำลังใช้":"ปิดอยู่",c=a.enabled&&!o&&r<a.maxUses;return`
        <article class="promo-card" data-code-id="${l(a.id)}">
          <div>
            <h3>${l(a.code)}</h3>
            <p class="promo-card__summary">${Xi(a)}</p>
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
  `}function mc(e){const t=Er(e.startAt,e.endAt),n=`${e.name} · ${e.keyName} ครบ ${e.keysRequired} อัน แลกได้ ${e.coins} เหรียญ`;return`${l(n)}${t?` · ${t}`:""}`}function qr({id:e,label:t,hint:n,value:a="",fieldName:r="image"}){const o=!!a;return`
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
            </div>`}function fc(e=document,t={}){e.querySelectorAll("[data-image-upload]").forEach(n=>{if(n.dataset.bound)return;n.dataset.bound="1";const a=n.querySelector("[data-image-file]"),r=n.querySelector("[data-image-value]"),o=n.querySelector("[data-image-preview]"),s=n.querySelector("[data-image-clear]"),c=n.querySelector("label.event-form__upload"),i=n.querySelector("[data-image-error]"),d=p=>{i.textContent=p||"",i.hidden=!p},u=p=>{r.value=p,p?(o.src=p,o.hidden=!1):(o.removeAttribute("src"),o.hidden=!0),s.hidden=!p,c.textContent=p?"เปลี่ยนรูป":"อัปโหลดรูป"};a.addEventListener("change",async()=>{const p=a.files?.[0];if(!p)return;const m=await kt(p,t);if(a.value="",!m.ok){d(m.error);return}d(""),u(m.dataUrl)}),s.addEventListener("click",()=>{d(""),u("")})})}function hc(e=""){const t=e?ut(e):null,n=Y().map(r=>{const o=tn(r),s=r.enabled?o?"กำลังใช้":"นอกช่วงเวลา":"ปิดอยู่";return`
        <article class="promo-card" data-key-promo-id="${l(r.id)}">
          <div>
            <h3>${l(r.name)}</h3>
            <p class="promo-card__summary">${mc(r)}</p>
            <p class="promo-status${o&&r.enabled?" is-on":""}">${l(s)}</p>
          </div>
          <div class="promo-card__actions">
            <button type="button" class="btn btn-ghost" data-key-promo-edit="${l(r.id)}">แก้ไข</button>
            <button type="button" class="btn btn-ghost" data-key-promo-toggle="${l(r.id)}" data-enabled="${r.enabled?"1":"0"}">${r.enabled?"ปิดโปร":"เปิดโปร"}</button>
            <button type="button" class="btn btn-ghost" data-key-promo-delete="${l(r.id)}">ลบ</button>
          </div>
        </article>
      `}).join("")||'<p class="empty-state">ยังไม่มีโปรแจกกุญแจ</p>',a=Ea.map(r=>`<option value="${l(r.id)}"${(t?t.keyStyle:"rainbow")===r.id?" selected":""}>${l(r.name)}</option>`).join("");return`
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
            ${qr({id:"key-promo-image",label:"รูปกุญแจ (ไม่บังคับ)",hint:"ถ้าอัปโหลด จะใช้แทนไอคอนกุญแจเดิมในช่องสะสมกุญแจและการ์ดกิจกรรม",value:t&&t.keyImage||"",fieldName:"keyImage"})}
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
  `}function Fe(e="",t="",n=""){const a=e?lt(e):null,r=de().map(i=>{const d=wa(i),u=i.enabled?d?"กำลังใช้":"นอกช่วงเวลา":"ปิดอยู่";return`
        <article class="promo-card" data-promo-id="${l(i.id)}">
          <div>
            <h3>${l(i.name)}</h3>
            <p class="promo-card__summary">${zi(i)}</p>
            <p class="promo-status${d&&i.enabled?" is-on":""}">${l(u)}</p>
          </div>
          <div class="promo-card__actions">
            <button type="button" class="btn btn-ghost" data-promo-edit="${l(i.id)}">แก้ไข</button>
            <button type="button" class="btn btn-ghost" data-promo-toggle="${l(i.id)}" data-enabled="${i.enabled?"1":"0"}">${i.enabled?"ปิดโปร":"เปิดโปร"}</button>
            <button type="button" class="btn btn-ghost" data-promo-delete="${l(i.id)}">ลบ</button>
          </div>
        </article>
      `}).join("")||'<p class="empty-state">ยังไม่มีโปรโมชัน</p>',o=a&&a.packageIds!=="all"?a.packageIds:[],s=!a||a.packageIds==="all",c=De.map(i=>{const d=s||o.includes(i.id);return`<label class="check-label"><input type="checkbox" name="packageIds" value="${l(i.id)}" ${d?"checked":""} /> ${l(Qi(i))}</label>`}).join("");return`
    <p class="proto-note">ตั้งโปรพื้นฐาน โปรแจกกุญแจ โปรตามเทศกาล และรหัสแลกเหรียญได้ที่หน้านี้</p>
    ${uc()}
    ${hc(n)}
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
          ${qr({id:"promo-image",label:"รูปโปร (ไม่บังคับ)",hint:"ใช้เป็นรูปบนการ์ดกิจกรรมของโปรนี้",value:a&&a.image||""})}
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
    ${pc(t)}
  `}function gc(e){const t=new FormData(e),a=t.get("allPackages")==="on"?"all":t.getAll("packageIds");return{id:String(t.get("id")||"").trim()||void 0,name:t.get("name"),packageIds:a,bonusType:t.get("bonusType"),bonusValue:t.get("bonusValue"),startAt:ee(t,"startAt"),endAt:ee(t,"endAt"),enabled:t.get("enabled")==="on",firstTopUpOnly:t.get("firstTopUpOnly")==="on",bonusExpiryDays:t.get("bonusExpiryDays"),image:String(t.get("image")||"")}}function He(){fc(document,{maxSide:1200,maxChars:4e5});const e=document.querySelector("[data-promo-form]"),t=document.querySelector("[data-all-packages]"),n=document.querySelector("[data-pack-options]");if(t&&n){const o=()=>{n.querySelectorAll("input[name=packageIds]").forEach(s=>{s.disabled=t.checked,t.checked&&(s.checked=!0)})};t.addEventListener("change",o),o()}e&&e.addEventListener("submit",o=>{o.preventDefault();const s=gc(e),c=s.id?lt(s.id):null;let i;try{i=ka(s),i.ok&&i.promo.image&&i.promo.image!==(c?.image||"")&&qn(i.promo.id,i.promo.image)}catch{A(e,{form:ne});return}if(!i.ok){A(e,i.errors);return}g("/admin?tab=promos")}),document.querySelectorAll("[data-promo-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Fe(o.dataset.promoEdit,"","")}`,He(),ke(s),C(s),s.querySelector("#promo-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-promo-cancel]")?.addEventListener("click",()=>g("/admin?tab=promos")),document.querySelectorAll("[data-promo-toggle]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.enabled!=="1";qo(o.dataset.promoToggle,s),g("/admin?tab=promos")})}),document.querySelectorAll("[data-promo-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบโปรโมชันนี้หรือไม่?")&&(Do(o.dataset.promoDelete),g("/admin?tab=promos"))})}),document.querySelectorAll("[data-base-form]").forEach(o=>{o.addEventListener("submit",s=>{s.preventDefault();const c=o.dataset.baseForm,i=new FormData(o),d={enabled:B()[c]?.enabled!==!1,coins:i.get("coins"),keysPerDay:i.get("keysPerDay"),keysRequired:i.get("keysRequired")||i.get("keysPerCoin"),coins:i.get("coins"),bonusValue:i.get("bonusValue"),bonusExpiryDays:i.get("bonusExpiryDays")},u=Uo(c,d);if(!u.ok){A(o,u.errors);return}g("/admin?tab=promos")})}),document.querySelectorAll("[data-base-toggle]").forEach(o=>{o.addEventListener("click",()=>{Oo(o.dataset.baseToggle,o.dataset.enabled!=="1"),g("/admin?tab=promos")})});const a=document.querySelector("[data-code-form]");a&&a.addEventListener("submit",o=>{o.preventDefault();const s=new FormData(a),c=xa({id:String(s.get("id")||"").trim()||void 0,code:s.get("code"),coins:s.get("coins"),maxUses:s.get("maxUses"),expiresAt:ee(s,"expiresAt")||null,bonusExpiryDays:s.get("bonusExpiryDays"),enabled:s.get("enabled")==="on"});if(!c.ok){A(a,c.errors);return}g("/admin?tab=promos")}),document.querySelectorAll("[data-code-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Fe("",o.dataset.codeEdit,"")}`,He(),ke(s),C(s),s.querySelector("#code-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-code-cancel]")?.addEventListener("click",()=>g("/admin?tab=promos")),document.querySelectorAll("[data-code-toggle]").forEach(o=>{o.addEventListener("click",()=>{jo(o.dataset.codeToggle,o.dataset.enabled!=="1"),g("/admin?tab=promos")})}),document.querySelectorAll("[data-code-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบรหัสนี้หรือไม่?")&&(Ho(o.dataset.codeDelete),g("/admin?tab=promos"))})});const r=document.querySelector("[data-key-promo-form]");r&&r.addEventListener("submit",o=>{o.preventDefault();const s=new FormData(r),c=String(s.get("id")||"").trim()||void 0,i=c?ut(c):null;let d;try{d=Ba({id:c,name:s.get("name"),keyName:s.get("keyName"),keyStyle:s.get("keyStyle"),keyImage:String(s.get("keyImage")||""),keysRequired:s.get("keysRequired"),coins:s.get("coins"),startAt:ee(s,"startAt"),endAt:ee(s,"endAt"),enabled:s.get("enabled")==="on"}),d.ok&&d.promo.keyImage&&d.promo.keyImage!==(i?.keyImage||"")&&qn(d.promo.id,d.promo.keyImage)}catch{A(r,{form:ne});return}if(!d.ok){A(r,d.errors);return}g("/admin?tab=promos")}),document.querySelectorAll("[data-key-promo-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Fe("","",o.dataset.keyPromoEdit)}`,He(),ke(s),C(s),s.querySelector("#key-promo-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-key-promo-cancel]")?.addEventListener("click",()=>g("/admin?tab=promos")),document.querySelectorAll("[data-key-promo-toggle]").forEach(o=>{o.addEventListener("click",()=>{Go(o.dataset.keyPromoToggle,o.dataset.enabled!=="1"),g("/admin?tab=promos")})}),document.querySelectorAll("[data-key-promo-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบโปรแจกกุญแจนี้หรือไม่?")&&(Wo(o.dataset.keyPromoDelete),g("/admin?tab=promos"))})})}function bc(){L();const e=b(),t=hn();w({name:"login",next:"/"});let n;if(!e)n=`
      <p class="home-daily__note">เข้าสู่ระบบ<wbr>เพื่อ<wbr>เช็คอิน<wbr>รายวัน รับกุญแจเงิน</p>`;else if(!t.enabled)n='<p class="home-daily__note">เช็คอินรายวันปิดอยู่ตอนนี้</p>';else{const c=t.currentKeyPromo?t.currentKeyPromo.keyName:"กุญแจเงิน",i=t.canExchange?'<button class="btn btn-primary" type="button" data-exchange-keys>แลกรับเหรียญ</button>':"",d=(t.keyPromos||[]).filter(u=>u.promo.name!=="Happy new year").map(u=>{const p=Sn(u.promo),m=u.alreadyExchanged?'<button class="btn btn-ghost" type="button" disabled>แลกไปแล้ว</button>':u.canExchange?`<button class="btn btn-primary" type="button" data-exchange-promo="${l(u.promo.id)}">แลกเหรียญ</button>`:"";return`
        <div class="home-daily__promo" data-key-promo="${l(u.promo.id)}">
          <p class="home-daily__promo-name">${l(u.promo.name)}</p>
          ${Et({keys:u.keys,need:u.keysRequired,name:u.promo.keyName,style:u.promo.keyStyle,image:u.promo.keyImage})}
          ${p?`<p class="key-promo-dates">${p}</p>`:""}
          ${m}
        </div>`}).join("");n=`
      <div class="checkin-actions">
        <button class="btn ${t.checkedInToday?"btn-ghost":"btn-primary"}" type="button" data-checkin ${t.checkedInToday?"disabled":""}>${t.checkedInToday?"เช็คอินวันนี้แล้ว":`<span class="checkin-btn__text"><span class="checkin-btn__lead">เช็คอิน</span><span class="checkin-btn__rest">รับ${l(c)} +${t.keysPerDay}</span></span>`}</button>
        ${i}
      </div>
      ${Et({keys:t.keys,need:t.keysRequired||t.keysPerCoin,name:"กุญแจเงิน",style:"silver"})}
      ${d}`}let a;if(!e)a=`
      <p class="home-daily__note">เข้าสู่ระบบ<wbr>เพื่อ<wbr>เติมเหรียญ</p>`;else{const c=P();a=`
      <ul class="home-daily__balances">
        <li class="home-daily__row">
          ${Mt}
          <span class="home-daily__label">เหรียญของฉัน</span>
          <strong class="home-daily__amount">${c.purchased}</strong>
        </li>
        <li class="home-daily__row">
          ${ii}
          <span class="home-daily__label">โบนัสเหรียญ</span>
          <strong class="home-daily__amount">${c.bonus}</strong>
        </li>
      </ul>
      <a class="coin-pack__buy" href="/coins" data-link>${Mt}<span>เติมเหรียญ</span></a>`}const r=Es(),o=e&&r&&!r.alreadyExchanged&&r.canExchange?`<div class="checkin-actions"><button class="btn btn-primary" type="button" data-exchange-promo="${l(r.promo.id)}">แลกรับเหรียญ</button></div>`:"",s=r?`<section class="home-daily__box home-daily__box--wide" data-home-key-promo>
            <h2>${Ir('กิจกรรมพิเศษ "Happy new year"')}</h2>
            ${o}
            ${Et({keys:r.keys,need:r.keysRequired,name:r.promo.keyName,style:r.promo.keyStyle||"rainbow",image:r.promo.keyImage})}
            <p class="home-daily__rule">${xt(rc)}</p>
            <p class="home-daily__rule">${xt(oc)}</p>
          </section>`:"";return`
    <section class="home-daily" aria-label="เช็คอินและเติมเหรียญ">
      <div class="container">
        <div class="home-daily__grid">
          <section class="home-daily__box" data-home-checkin>
            <h2>เช็คอินรายวัน</h2>
            ${n}
            <p class="home-daily__rule">${xt(ac)}</p>
          </section>
          <section class="home-daily__box" data-home-topup>
            <h2>กระเป๋าเหรียญ</h2>
            ${a}
          </section>
          ${s}
        </div>
      </div>
    </section>
  `}function _n(e){const t=new Date(e);if(Number.isNaN(t.getTime()))return"";const n=new Intl.DateTimeFormat("th-TH",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"Asia/Bangkok"}).format(t).replace(".",":");return R(`${le(t)} ${n}`)}function Lr(e,t){return!e||!e.messages.length?'<p class="report-chat__empty">พิมพ์ข้อความด้านล่างเพื่อเริ่มแจ้งปัญหา</p>':e.messages.map(n=>{const a=t==="author"?n.role==="author":n.role==="reader";return`
      <div class="chat-msg chat-msg--${l(n.role)}${a?" is-mine":""}">
        <span class="chat-msg__who">${l(Fa(n,e))}</span>
        <div class="chat-msg__bubble">${Tr(n.text)}</div>
        <span class="chat-msg__time">${_n(n.createdAt)}</span>
      </div>`}).join("")}function Kt({report:e,topicId:t,viewer:n}){const a=pt(e?e.topicId:t),r=n==="author"&&e?`<p class="report-chat__meta">${l(e.userName)} · ${l(e.userEmail||"")}</p>`:"",o=n==="reader"&&!e?'<a class="report-chat__change" href="/report" data-link>เปลี่ยนหัวข้อ</a>':"";return`
    <section class="report-chat" data-report-chat data-viewer="${n}" data-report-id="${e?l(e.id):""}" data-topic-id="${l(a?a.id:"")}">
      <header class="report-chat__head">
        <div>
          <h2>หัวข้อ: ${l(a?a.name:"อื่นๆ")}</h2>
          ${r}
        </div>
        ${o}
      </header>
      <div class="report-chat__log" data-chat-log role="log" aria-live="polite">${Lr(e,n)}</div>
      <form class="report-chat__form" data-chat-form novalidate>
        <textarea name="text" rows="2" maxlength="${Ra}" aria-label="ข้อความ" placeholder="พิมพ์ข้อความ"></textarea>
        <button class="btn btn-primary" type="submit">ส่ง</button>
      </form>
      <p class="field-error" data-chat-error hidden></p>
    </section>`}function yc(e){document.title=`แจ้งปัญหาการใช้งาน — ${k.shortName}`,S("light");const t=b(),n=new URLSearchParams(window.location.search).get("topic")||"";let a;if(e){const r=t?sn(e):null;!r||r.userId!==t.id?a=`
        <p class="empty-state">ไม่พบเรื่องที่แจ้ง</p>
        <p><a class="btn btn-ghost" href="/report" data-link>กลับไปหน้าแจ้งปัญหา</a></p>`:(ht(r.id,"reader"),a=Kt({report:r,viewer:"reader"}))}else if(pt(n))a=Kt({report:null,topicId:n,viewer:"reader"});else{const r=t?ja(t.id):[],o=Ma.map(c=>`<a class="report-topic" href="/report?topic=${encodeURIComponent(c.id)}" data-link>${l(c.name)}</a>`).join(""),s=r.length?`<section class="report-card">
          <h2>เรื่องที่แจ้งไว้</h2>
          <ul class="report-list">${r.map(c=>`
            <li>
              <a class="report-list__item" href="/report/${encodeURIComponent(c.id)}" data-link>
                <span class="report-list__topic">${l(c.topicName)}${c.readerUnread?'<span class="report-list__new">ใหม่</span>':""}</span>
                <span class="report-list__preview" data-no-wbr>${l(c.last?c.last.text.replace(/\s+/g," ").slice(0,70):"")}</span>
                <span class="report-list__time">${_n(c.lastAt)}</span>
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
  `}function vc(e=""){const t=ft(),n=e?t.find(s=>s.id===e):null;n&&ht(n.id,"author");const a=t.length?t.map(s=>{const c=s.authorUnread&&s!==n;return`
        <li>
          <a class="report-list__item${n&&s.id===n.id?" is-current":""}" href="/admin?tab=reports&report=${encodeURIComponent(s.id)}" data-link>
            <span class="report-list__topic">${l(s.topicName)}${c?'<span class="report-list__new">ใหม่</span>':""}</span>
            <span class="report-list__who">${l(s.userName)}</span>
            <span class="report-list__preview" data-no-wbr>${l(s.last?s.last.text.replace(/\s+/g," ").slice(0,70):"")}</span>
            <span class="report-list__time">${_n(s.lastAt)}</span>
          </a>
        </li>`}).join(""):"",r=t.length?`<ul class="report-list">${a}</ul>`:'<p class="empty-state">ยังไม่มีเรื่องที่นักอ่านแจ้ง</p>',o=n?`<a class="back-link report-admin__back" href="/admin?tab=reports" data-link>← กลับไปรายการ</a>${Kt({report:n,viewer:"author"})}`:'<p class="empty-state report-admin__placeholder">เลือกเรื่องจากรายการเพื่อดูและตอบกลับ</p>';return`
    <section class="report-admin${n?" has-selected":""}">
      <h2 class="admin-section-title">แจ้งปัญหา</h2>
      <div class="report-admin__layout">
        <div class="report-admin__list">${r}</div>
        <div class="report-admin__chat">${o}</div>
      </div>
    </section>
  `}let Kn=!1;function Vn(e){const t=e.dataset.reportId,n=e.dataset.viewer,a=e.querySelector("[data-chat-log]");if(!t||!a)return;const r=sn(t);if(!r)return;const o=a.scrollHeight-a.scrollTop-a.clientHeight<80;a.innerHTML=Lr(r,n),C(a),o&&(a.scrollTop=a.scrollHeight),ht(t,n==="author"?"author":"reader")}function Yn(){const e=document.querySelector("[data-report-chat]");if(!e)return;const t=e.dataset.viewer,n=e.querySelector("[data-chat-form]"),a=e.querySelector("[data-chat-error]"),r=e.querySelector("[data-chat-log]"),o=n.elements.text;r&&(r.scrollTop=r.scrollHeight);const s=i=>{a.textContent=i||"",a.hidden=!i},c=()=>{const i=o.value;if(!String(i).trim()){s("กรุณาพิมพ์ข้อความ");return}s("");const d=e.dataset.reportId;let u;try{d?t==="author"?u=us(d,i):u=ds(d,i):u=ls({topicId:e.dataset.topicId,text:i})}catch{s(ne);return}if(!u.ok){s(u.error);return}if(o.value="",!d){g(`/report/${u.report.id}`);return}Vn(e),r&&(r.scrollTop=r.scrollHeight)};n.addEventListener("submit",i=>{i.preventDefault(),c()}),o.addEventListener("keydown",i=>{i.key==="Enter"&&(i.ctrlKey||i.metaKey)&&(i.preventDefault(),c())}),Kn||(Kn=!0,window.addEventListener("storage",i=>{if(i.key!=="banNiyai_reports")return;const d=document.querySelector("[data-report-chat]");d&&Vn(d)}))}function $c(){return`
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
  `}function kc(){if(!b())return document.title=`เติมเหรียญ — ${k.shortName}`,"";document.title=`เติมเหรียญ — ${k.shortName}`,S("light"),L();const t=P(),n=!er(),a=De.map(s=>{const c=Aa(s,{isFirstTopUp:n}),i=c.paid?Math.round(c.packageBonus*100/c.paid):0,d=[`<div class="coin-pack__row"><span>เหรียญ</span><span class="coin-pack__amt date-part" data-no-wbr>${c.paid}</span></div>`];if(c.packageBonus&&d.push(`<div class="coin-pack__row"><span>โบนัส <span class="date-part" data-no-wbr>${i}%</span></span><span class="coin-pack__amt date-part" data-no-wbr>+${c.packageBonus}</span></div>`),c.firstTopUpBonus&&d.push(`<div class="coin-pack__row coin-pack__row--promo"><span>โบนัสเติมครั้งแรก</span><span class="coin-pack__amt date-part" data-no-wbr>+${c.firstTopUpBonus}</span></div>`),c.promo&&c.promoBonus){const u=c.promo.firstTopUpOnly?"โปรเติมครั้งแรก":c.promo.name,p=c.promo.bonusType==="percent"?` <span class="date-part" data-no-wbr>${l(String(c.promo.bonusValue))}%</span>`:"";d.push(`<div class="coin-pack__row coin-pack__row--promo"><span>${l(u)}${p}</span><span class="coin-pack__amt date-part" data-no-wbr>+${c.promoBonus}</span></div>`)}return`
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
    `}).join(""),r=bt(),o=r.length?`<ul class="tx-list">${r.map(s=>{const c=s.coins>0?`+${s.coins}`:String(s.coins),i=wc(s.createdAt),d=Number(s.packageBonus||0)+Number(s.firstTopUpBonus||0)+Number(s.promoBonus||0),u=d?`<p class="tx-item__bonus">ได้รับโบนัส ${d} เหรียญ${s.promoName?` (รวม ${l(s.promoName)})`:""}</p>`:"";return`<li class="tx-item"><div><p class="tx-item__label">${l(s.label)}</p>${u}<p class="tx-item__when">${l(i)}</p></div><span class="tx-item__amount${s.coins>0?" is-plus":""}">${c}</span></li>`}).join("")}</ul>`:'<p class="empty-state">ยังไม่มีรายการเติมเหรียญหรือปลดล็อกตอน</p>';return`
    ${N("coins")}
    <main id="main" class="page-block">
      <div class="container coins-page">
        <h1 class="page-title">เติมเหรียญ</h1>
        <p class="coin-closed-loop">เหรียญในระบบนี้ใช้ได้เฉพาะสำหรับอ่านนิยายในบ้านนิยายนี้เท่านั้น ไม่สามารถโอนให้ผู้อื่น หรือแลก/ถอนเป็นเงินสดได้</p>
        <p class="coins-balance-lead">ยอดคงเหลือ <strong>${t.total}</strong> เหรียญ</p>
        <p class="coins-breakdown">${l(At(t))}</p>
        <p class="proto-note">การชำระเงินในหน้านี้เป็นการทดลองเท่านั้น ไม่มีการตัดบัตรจริง จุดเชื่อมระบบรับชำระเงิน เช่น ChillPay หรือ Opn จะมาในภายหลัง</p>
        ${$c()}
        <div class="coin-pack-grid">${a}</div>
        <section class="tx-section" aria-labelledby="tx-heading">
          <h2 id="tx-heading">ประวัติรายการ</h2>
          ${o}
        </section>
      </div>
    </main>
    ${x()}
  `}function wc(e){const t=new Date(e);return Number.isNaN(t.getTime())?"":wn(t)}function Cr(e,t){const n=b(),a=w({name:"reader",novelId:e,chapterId:t});if(!n){g({name:"login",next:a});return}const r=v(e),o=be(r,t);if(!r||!o||!ve(o))return;if(fe(r,o)){g(a);return}const s=document.querySelector(".modal-backdrop");s&&s.remove();const c=te(o),i=P(),d=i.total,u=d>=c,p=document.createElement("div");p.className="modal-backdrop",p.dataset.walletModal="true",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","unlock-title");const m=u?`<button class="btn btn-primary" type="button" data-unlock-confirm>ยืนยันการปลดล็อก</button>
       <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`:`<p class="field-error">เหรียญไม่พอสำหรับปลดล็อกตอนนี้</p>
       <a class="btn btn-primary" href="/coins?next=${encodeURIComponent(a)}" data-link>ไปเติมเหรียญ</a>
       <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`;p.innerHTML=`
    <div class="modal">
      <h2 id="unlock-title">ปลดล็อกตอน</h2>
      <p>${l(r.title)} · ตอนที่ ${l(o.id)} ${l(o.title)}</p>
      <p>ราคา <strong>${c}</strong> เหรียญ · ยอดคงเหลือ <strong>${d}</strong> เหรียญ (${l(At(i))})</p>
      <div class="modal__actions">${m}</div>
    </div>
  `,document.body.appendChild(p),C(p),p.querySelector("[data-modal-close]")?.addEventListener("click",()=>p.remove()),p.addEventListener("click",y=>{y.target===p&&p.remove()});const f=p.querySelector("[data-unlock-confirm]");f&&f.addEventListener("click",()=>{const y=Bs(e,t);if(!y.ok&&y.reason==="insufficient"){p.remove(),Cr(e,t);return}p.remove(),y.ok&&g(a)})}function Sc(e,t){return w(t?{name:"reader",novelId:e,chapterId:t}:{name:"novel",id:e})}function Pe(e,t){const n=e?.querySelector("[data-donate-error]");n&&(n.hidden=!t,n.textContent=t||"")}function _c(){document.querySelectorAll("[data-donate-box]").forEach(e=>{const t=e.dataset.novelId,n=e.dataset.chapterId||void 0,a=(o,s)=>Ac(t,n,o,s);e.querySelectorAll("[data-donate-gift]").forEach(o=>{o.addEventListener("click",s=>{if(s.target.closest(".donate-custom"))return;Pe(e,"");const c=Xe.find(i=>i.id===o.dataset.donateGift);if(c){if(c.coins==null){const i=o.querySelector(".donate-custom__input");i?.focus();const d=i?.value,u=Number(d),p=Math.round(u);if(!d||!Number.isFinite(u)||p!==u||p<=0){Pe(e,"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก");return}a(c,p);return}a(c,c.coins)}})});const r=e.querySelector(".donate-custom__input");r&&(r.addEventListener("click",o=>o.stopPropagation()),r.addEventListener("keydown",o=>{if(o.key!=="Enter")return;o.preventDefault(),Pe(e,"");const s=Number(r.value),c=Math.round(s);if(!Number.isFinite(s)||c!==s||c<=0){Pe(e,"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก");return}a(Xe.find(i=>i.id==="coin"),c)}))})}function Ac(e,t,n,a){const r=b(),o=Sc(e,t);if(!r){g({name:"login",next:o});return}if(!v(e)||!n)return;const c=document.querySelector(".modal-backdrop");c&&c.remove();const i=document.createElement("div");i.className="modal-backdrop",i.dataset.walletModal="true",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i);const d=()=>i.remove();i.addEventListener("click",p=>{p.target===i&&d()});const u=()=>{const p=P(),f=p.total>=a?`<button class="btn btn-primary" type="button" data-donate-send>ส่งโดเนท</button>
         <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`:`<p class="field-error">เหรียญไม่พอสำหรับโดเนทนี้</p>
         <a class="btn btn-primary" href="/coins?next=${encodeURIComponent(o)}" data-link>ไปเติมเหรียญ</a>
         <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`;i.setAttribute("aria-labelledby","donate-confirm-title"),i.innerHTML=`
      <div class="modal modal--donate">
        <h2 id="donate-confirm-title">ยืนยันการโดเนท</h2>
        <div class="donate-confirm">
          ${vn(n.id)}
          <p class="donate-confirm__name">${l(n.name)}</p>
        </div>
        <p>ใช้ <strong>${a}</strong> เหรียญ · ยอดคงเหลือ <strong>${p.total}</strong> เหรียญ (${l(At(p))})</p>
        <div class="modal__actions">${f}</div>
      </div>`,C(i),i.querySelector("[data-modal-close]").addEventListener("click",d),i.querySelector("[data-donate-send]")?.addEventListener("click",()=>{const y=Ks({novelId:e,giftId:n.id,customAmount:a,chapterId:t||void 0});if(!y.ok&&y.reason==="insufficient"){u();return}if(!y.ok){const _=i.querySelector(".modal__actions"),F=document.createElement("p");F.className="field-error",F.textContent=y.reason==="invalid"?"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก":"ไม่สามารถโดเนทได้ในขณะนี้",_?.prepend(F);return}d(),Nc(n.id)})};u()}function Nc(e){if(Br())return;document.querySelectorAll(".fx-gift-burst").forEach(n=>n.remove());const t=document.createElement("div");t.className="fx-gift-burst",t.setAttribute("aria-hidden","true");for(let n=0;n<7;n+=1){const a=document.createElement("span");a.className="fx-gift",a.innerHTML=vn(e),a.style.left=`${12+Math.random()*76}vw`,a.style.animationDelay=`${Math.random()*.15}s`,a.style.animationDuration=`${.85+Math.random()*.35}s`,t.appendChild(a)}document.body.appendChild(t),window.setTimeout(()=>t.remove(),1600)}function Br(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Ue(e){try{sessionStorage.setItem("banNiyai_fx",e)}catch{}}function xc(){const t=[...document.querySelectorAll(".key-icon.is-filled")].at(-1);t&&(t.classList.remove("is-popping"),t.offsetWidth,t.classList.add("is-popping"),t.addEventListener("animationend",()=>t.classList.remove("is-popping"),{once:!0}))}function Ec(){document.querySelectorAll(".fx-coin-rain").forEach(t=>t.remove());const e=document.createElement("div");e.className="fx-coin-rain",e.setAttribute("aria-hidden","true");for(let t=0;t<16;t+=1){const n=document.createElement("span");n.className="fx-coin",n.innerHTML=Mt,n.style.left=`${6+Math.random()*88}vw`,n.style.animationDelay=`${Math.random()*.28}s`,n.style.animationDuration=`${.95+Math.random()*.55}s`,e.appendChild(n)}document.body.appendChild(e),window.setTimeout(()=>e.remove(),1800)}function Ic(){let e="";try{e=sessionStorage.getItem("banNiyai_fx")||"",sessionStorage.removeItem("banNiyai_fx")}catch{}!e||Br()||(e==="checkin"&&xc(),e==="coins"&&Ec())}function Tc(){document.querySelectorAll("[data-locked-chapter]").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),Cr(t.dataset.novelId,t.dataset.chapterId)},!0)}),_c(),document.querySelectorAll("[data-topup]").forEach(t=>{t.addEventListener("click",()=>{Ls(t.dataset.topup).ok&&(Ue("coins"),g(I()||"/coins"))})}),document.querySelectorAll("[data-checkin]").forEach(t=>{t.addEventListener("click",()=>{const n=Is();if(!n.ok&&n.reason!=="already"){n.error&&alert(n.error);return}n.ok&&Ue("checkin"),g(I()||"/")})}),document.querySelectorAll("[data-exchange-keys]").forEach(t=>{t.addEventListener("click",()=>{const n=Ts();if(!n.ok){n.error&&alert(n.error);return}Ue("coins"),g(I()||"/")})}),document.querySelectorAll("[data-exchange-promo]").forEach(t=>{t.addEventListener("click",()=>{const n=Ds(t.dataset.exchangePromo);if(!n.ok){n.error&&alert(n.error);return}Ue("coins"),g(I()||"/")})});const e=document.querySelector("[data-redeem-form]");e&&e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e),a=qs(n.get("code"));if(!a.ok){A(e,{code:a.error||"ไม่สามารถแลกโค้ดได้"});return}g("/coins")})}function Dc(){document.querySelectorAll("[data-wallet-modal]").forEach(e=>e.remove()),ie()}function ie(){document.querySelectorAll("[data-guest-login-modal]").forEach(e=>e.remove()),document.body.classList.remove("guest-login-open"),ie._onKey&&(document.removeEventListener("keydown",ie._onKey),ie._onKey=null)}function qc(){if(b())return;const e=document.querySelector("[data-guest-login-modal]");if(e){e.querySelector("#login-email")?.focus();return}const t=document.createElement("div");t.className="modal-backdrop guest-login-backdrop",t.dataset.guestLoginModal="1",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-labelledby","guest-login-title");const n=I()==="/"?void 0:I();t.innerHTML=`
    <div class="modal modal--guest-login">
      <button type="button" class="guest-login__close" data-guest-login-close aria-label="ปิด">×</button>
      <div class="modal--guest-login__inner">
        ${yn({titleId:"guest-login-title"})}
        ${hr({next:n,compact:!0})}
      </div>
    </div>
  `,document.body.appendChild(t),document.body.classList.add("guest-login-open"),t.querySelector("[data-guest-login-close]").addEventListener("click",()=>ie());const a=r=>{r.key==="Escape"&&ie()};ie._onKey=a,document.addEventListener("keydown",a),Rr(),C(t),t.querySelector("#login-email")?.focus()}function Lc(e){return!!e.closest("a, button, input, select, textarea, summary, label, [data-link], [role='button'], [role='tab'], [role='search']")}function Cc(){if(b()||I()!=="/")return;const e=document.getElementById("app")||document.body,t=n=>{n.target.closest("[data-guest-login-modal]")||Lc(n.target)&&(n.preventDefault(),n.stopPropagation(),qc())};e.addEventListener("click",t,!0),e.addEventListener("submit",t,!0)}function Pr(e,t){const n=String(e||"").replace(/\r\n/g,`
`).trim();return n?n.split(/\n[ \t]*\n/).map(a=>a.replace(/^\n+|\n+$/g,"")).filter(Boolean).map(a=>{const r=a.split(`
`).map(o=>Ir(o.trim())).join("<br>");return`<p class="${t}">${r}</p>`}).join(""):""}function Bc(){document.title=`กิจกรรม — ${k.shortName}`,S("light"),M();const e=J(),t=e.length?e.slice().sort((n,a)=>new Date(n.startAt)-new Date(a.startAt)).map(n=>{const a=Sn(n),r=n.image?`<div class="event-card__media"><img class="event-card__image" src="${l(n.image)}" alt="" /></div>`:"";return`
        <article class="event-card" id="event-${l(n.id)}">
          ${r}
          <div class="event-card__body">
            <h2 class="event-card__title">${l(n.title)}</h2>
            ${a?`<p class="event-card__dates">${a}</p>`:""}
            ${Pr(n.detail,"event-card__detail")}
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
  `}function Pc(){document.title=`ติดตามนักเขียน — ${k.shortName}`,S("light"),zs();const e=cr(),t=e.length?`<ul class="follow-list">${e.map(n=>`<li><a class="follow-channel" href="${l(n.url)}" target="_blank" rel="noopener noreferrer">${l(n.name)}</a></li>`).join("")}</ul>`:'<p class="empty-state">ช่องทางติดตามนักเขียนจะเพิ่มให้ในภายหลัง</p>';return`
    ${N("follow")}
    <main id="main" class="page-block">
      <div class="container follow-page">
        <h1 class="page-title">ติดตามนักเขียน</h1>
        ${t}
      </div>
    </main>
    ${x()}
  `}function Ur(e=""){M();const t=e?ss(e):null;return`
    <section class="event-admin-section">
      <h2 class="admin-section-title">กิจกรรม</h2>
      <div class="promo-layout">
        <div>${J().slice().sort((a,r)=>new Date(r.startAt)-new Date(a.startAt)).map(a=>{const r=Sn(a);return`
        <article class="promo-card" data-event-id="${l(a.id)}">
          <div>
            <h3>${l(a.title)}</h3>
            ${r?`<p class="promo-card__summary">${r}</p>`:""}
            ${Pr(a.detail,"promo-card__summary")}
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
  `}function Uc(e=document){const t=e.querySelector("[data-event-image-file]"),n=e.querySelector("[data-event-image-url]"),a=e.querySelector("[data-event-image-value]"),r=e.querySelector("[data-event-image-preview]"),o=e.querySelector('[data-error-for="image"]'),s=i=>{r&&(i?(r.src=i,r.hidden=!1):(r.removeAttribute("src"),r.hidden=!0))},c=i=>{o&&(o.textContent=i||"",o.hidden=!i)};t?.addEventListener("change",async()=>{const i=t.files&&t.files[0];if(!i)return;const d=await kt(i,{maxSide:1200,maxChars:4e5});if(t.value="",!d.ok){c(d.error);return}a&&(a.value=d.dataUrl),n&&(n.value=""),s(d.dataUrl),c("")}),n?.addEventListener("input",()=>{const i=n.value.trim();a&&(a.value=i),s(i),c("")})}function Or(){Uc();const e=document.querySelector("[data-event-form]");e&&e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e);let a;try{a=is({id:String(n.get("id")||"").trim()||void 0,title:n.get("title"),startAt:ee(n,"startAt"),endAt:ee(n,"endAt"),detail:n.get("detail"),image:n.get("image")})}catch{A(e,{image:ne});return}if(!a.ok){A(e,a.errors);return}g("/admin?tab=events")}),document.querySelectorAll("[data-event-edit]").forEach(t=>{t.addEventListener("click",()=>{const n=document.querySelector(".admin-page");if(!n)return;const a=n.querySelector(".admin-tabs")?.outerHTML||"",r=n.querySelector(".page-title")?.outerHTML||"";n.innerHTML=`${r}${a}${Ur(t.dataset.eventEdit)}`,Or(),ke(n),C(n),n.querySelector("#event-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-event-cancel]")?.addEventListener("click",()=>g("/admin?tab=events")),document.querySelectorAll("[data-event-delete]").forEach(t=>{t.addEventListener("click",()=>{confirm("ลบกิจกรรมนี้หรือไม่?")&&(cs(t.dataset.eventDelete),g("/admin?tab=events"))})})}function Oc(e){const t=Ee(e?.publishedAt);return t?t.toISOString():""}function Rc(e){const t=Ee(e?.publishedAt);if(!t)return l("ยังไม่กำหนดเวลา");const n=ve(e)?"เผยแพร่แล้ว":"ตั้งเวลา";return`${l(n)} ${R(wn(t))}`}function Mc(e){const t=te(e);return t<=0?"ฟรี":`${t} เหรียญ`}function D({novelId:e,newNovel:t,order:n}={}){const a=new URLSearchParams;e&&a.set("novel",e),t&&a.set("newNovel","1"),n&&a.set("order","1");const r=a.toString();return r?`/admin?${r}`:"/admin"}function Fc(){const e=new URLSearchParams(window.location.search),t=e.get("novel");return t&&e.get("order")==="1"?Jc(t):t?Jn(t):e.get("newNovel")==="1"?Jn(null):Hc()}function Hc(){const e=ye().map(n=>`
      <a class="novel-card" href="${D({novelId:n.id})}" data-link>
        <div class="novel-card__cover" style="${Le(n.cover)}" aria-hidden="true">
          ${wt(n,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
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
  `}function jc(e,{isNew:t=!1}={}){const n=e?.cover?.image||"",a=!!n,r=!!(!t&&e?.cover&&(e.cover.from||e.cover.motif)),o=!a&&!r,s=a||r?"เปลี่ยนรูปปก":"อัปโหลดรูปปก",c=!a&&r?`<span class="writer-cover__motif" data-cover-motif>${l(e.cover?.motif||"")}</span>`:'<span class="writer-cover__motif" data-cover-motif hidden></span>';return`
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
        </div>`}function Kc(e,{isNew:t=!1}={}){const n=String(e?.author||"").trim(),a=Ke();n&&!a.includes(n)&&a.unshift(n);const r=[t&&!n?'<option value="" disabled selected>เลือกนามปากกา</option>':"",...a.map(o=>{const s=!t&&n===o?" selected":"";return`<option value="${l(o)}"${s}>${l(o)}</option>`})].join("");return`
        <form class="auth-form writer-details-form" data-novel-details-form novalidate>
          ${t?"":`<input type="hidden" name="novelId" value="${l(e.id)}" />`}
          ${jc(e,{isNew:t})}
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
        </form>`}function Vc(e,t){const n=`chapter-published-${e}-${t.id}`,a=Oc(t),r=!!Ee(t.publishedAt);return`
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
    </form>`}function Yc(e){const t=String(te(e));return`
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
    </form>`}function Jn(e){const t=!e,n=t?{id:"",title:"",author:"",teaser:"",tags:[],secondaryTags:[],chapters:[],cover:null}:v(e);if(!t&&!n)return`
    <section class="chapter-admin-section">
      <div class="writer-novel__top">
        <a class="back-link" href="${D()}" data-link>← กลับไปเลือกนิยาย</a>
      </div>
      <p class="empty-state">ไม่พบนิยายเรื่องนี้</p>
    </section>`;const r=(n.chapters||[]).map(c=>{const i=Rc(c);return`
        <article class="promo-card chapter-admin-row" data-chapter-row data-novel-id="${l(n.id)}" data-chapter-id="${l(c.id)}">
          <div class="chapter-admin-row__main">
            <h3>ตอนที่ ${l(c.id)} ${l(c.title)}</h3>
            <p class="promo-card__summary">${l(Mc(c))} · ${i}</p>
          </div>
          <div class="chapter-admin-row__actions">
            <button type="button" class="btn btn-ghost" data-chapter-open="schedule">ตั้งเวลา</button>
            <button type="button" class="btn btn-ghost" data-chapter-open="price">ตั้งค่าเหรียญ</button>
            <button type="button" class="btn btn-ghost" data-delete-chapter>ลบ</button>
          </div>
          <div class="chapter-admin-row__editor" data-chapter-editor="schedule" hidden>
            ${Vc(n.id,c)}
          </div>
          <div class="chapter-admin-row__editor" data-chapter-editor="price" hidden>
            ${Yc(c)}
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
        <a class="back-link" href="${D()}" data-link>← กลับไปเลือกนิยาย</a>
        ${t?"":`<button type="button" class="btn btn-ghost writer-novel__delete" data-delete-novel="${l(n.id)}">ลบนิยาย</button>`}
      </div>
      ${Kc(n,{isNew:t})}
      ${Ui(s,{showHeading:!1,showSave:!t,idSuffix:t?"new":void 0})}
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
  `}function Jc(e){const t=v(e);if(!t)return`
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
  `}function Zn(e){document.querySelectorAll("[data-chapter-editor]").forEach(t=>{t!==e&&(t.hidden=!0)})}function It(e){if(!e)return;const t=e.querySelector('[name="publishMode"]:checked')?.value||"now",n=e.querySelector("[data-schedule-fields]");n&&(n.hidden=t!=="schedule");const a=e.querySelector("[name='publishedAtDate']"),r=e.querySelector("[name='publishedAtTime']");a&&(a.required=t==="schedule"),r&&(r.required=t==="schedule")}function Zc(){const e=document.querySelector("[data-chapter-toggle-form]"),t=document.querySelector("#chapter-form-card");e&&t&&e.addEventListener("click",()=>{if(!document.querySelector("[data-writer-novel]")?.dataset.writerNovel){window.alert("กรุณาบันทึกนิยายก่อน");return}t.hidden=!t.hidden,t.hidden||(t.querySelector("[name='title']")?.focus(),t.scrollIntoView({behavior:"smooth",block:"start"}))}),document.querySelector("[data-chapter-form-cancel]")?.addEventListener("click",()=>{t&&(t.hidden=!0)}),document.querySelector("[data-chapter-order-open]")?.addEventListener("click",()=>{const a=document.querySelector("[data-writer-novel]")?.dataset.writerNovel;if(!a){window.alert("กรุณาบันทึกนิยายก่อน");return}g(D({novelId:a,order:!0}))});const n=document.querySelector("[data-chapter-form]");n&&n.addEventListener("submit",a=>{a.preventDefault();const r=new FormData(n),o=String(r.get("novelId")||"").trim(),s=no(o,{title:r.get("title"),content:r.get("content")});if(!s.ok){A(n,s.errors);return}g(D({novelId:o}))}),document.querySelectorAll("[data-chapter-row]").forEach(a=>{const r=a.dataset.novelId,o=a.dataset.chapterId;a.querySelectorAll("[data-chapter-open]").forEach(i=>{i.addEventListener("click",()=>{const d=a.querySelector(`[data-chapter-editor="${i.dataset.chapterOpen}"]`);if(!d)return;const u=d.hidden;if(Zn(u?d:null),d.hidden=!u,!d.hidden){const p=d.querySelector("[data-chapter-schedule-form]");p&&It(p)}})}),a.querySelectorAll("[data-chapter-editor-cancel]").forEach(i=>{i.addEventListener("click",()=>Zn())});const s=a.querySelector("[data-chapter-schedule-form]");s&&(It(s),s.querySelectorAll("[data-publish-mode]").forEach(i=>{i.addEventListener("change",()=>It(s))}),s.addEventListener("submit",i=>{i.preventDefault();const d=new FormData(s),u=String(d.get("publishMode")||"now"),p=so(r,o,{publishMode:u,publishedAt:u==="schedule"?ee(d,"publishedAt"):void 0});if(!p.ok){A(s,p.errors);return}g(D({novelId:r}))}));const c=a.querySelector("[data-chapter-price-form]");c&&c.addEventListener("submit",i=>{i.preventDefault();const d=new FormData(c),u=oo(r,o,d.get("price"));if(!u.ok){A(c,u.errors);return}g(D({novelId:r}))}),a.querySelector("[data-delete-chapter]")?.addEventListener("click",()=>{if(!confirm("ลบตอนนี้หรือไม่?"))return;ao(r,o).ok&&g(D({novelId:r}))})}),Wc(),document.querySelector("[data-delete-novel]")?.addEventListener("click",a=>{if(!confirm("ลบนิยายเรื่องนี้หรือไม่?"))return;const r=a.currentTarget.dataset.deleteNovel;Qr(r).ok&&g(D())})}function Wc(){const e=document.querySelector("[data-chapter-order-view]");if(!e)return;const t=e.querySelector("[data-chapter-order-list]"),n=e.dataset.novelId;e.querySelector("[data-chapter-order-save]")?.addEventListener("click",()=>{const a=[...e.querySelectorAll("[data-chapter-order-row]")].map(o=>o.dataset.chapterId),r=ro(n,a);if(!r.ok){window.alert(r.error||"บันทึกลำดับไม่สำเร็จ");return}g(D({novelId:n}))}),t&&t.addEventListener("pointerdown",a=>{const r=a.target.closest("[data-chapter-drag]");if(!r||!t.contains(r)||a.pointerType==="mouse"&&a.button!==0)return;const o=r.closest("[data-chapter-order-row]");if(!o)return;a.preventDefault(),r.setPointerCapture(a.pointerId);const s=a.clientY;let c=!1,i=null,d=0;const u=m=>{if(m.pointerId!==a.pointerId)return;if(m.preventDefault(),!c){if(Math.abs(m.clientY-s)<4)return;c=!0;const _=o.getBoundingClientRect();d=s-_.top,i=document.createElement("div"),i.className="chapter-order-row chapter-order-row--placeholder",i.style.height=`${_.height}px`,o.style.width=`${_.width}px`,o.style.left=`${_.left}px`,o.style.top=`${_.top}px`,o.style.position="fixed",o.style.zIndex="30",o.style.pointerEvents="none",o.classList.add("is-dragging"),o.after(i)}o.style.top=`${m.clientY-d}px`;const f=[...t.querySelectorAll("[data-chapter-order-row]")].filter(_=>_!==o);let y=!1;for(const _ of f){const F=_.getBoundingClientRect();if(m.clientY<F.top+F.height/2){_.before(i),y=!0;break}}!y&&f.length&&f[f.length-1].after(i)},p=m=>{m.pointerId===a.pointerId&&(r.removeEventListener("pointermove",u),r.removeEventListener("pointerup",p),r.removeEventListener("pointercancel",p),r.hasPointerCapture(a.pointerId)&&r.releasePointerCapture(a.pointerId),c&&i&&i.replaceWith(o),o.classList.remove("is-dragging"),o.style.position="",o.style.left="",o.style.top="",o.style.width="",o.style.zIndex="",o.style.pointerEvents="")};r.addEventListener("pointermove",u),r.addEventListener("pointerup",p),r.addEventListener("pointercancel",p)})}function Gc(e){const t=e.querySelector("[data-cover-file]"),n=e.querySelector("[data-cover-value]"),a=e.querySelector("[data-cover-preview]");!t||!n||t.addEventListener("change",async()=>{const r=t.files?.[0];if(!r)return;const o=await kt(r,{maxSide:900,maxChars:3e5});if(t.value="",!o.ok){A(e,{coverImage:o.error});return}n.value=o.dataUrl,a&&(a.src=n.value,a.hidden=!1),e.querySelector("[data-cover-motif]")?.setAttribute("hidden","");const s=e.querySelector(".writer-cover__plus");s&&(s.hidden=!0),e.querySelector(".writer-cover__frame")?.classList.remove("writer-cover__frame--empty");const c=e.querySelector("[data-cover-pick]");c&&(c.textContent="เปลี่ยนรูปปก"),A(e,{})})}function zc(){const e=document.querySelector("[data-novel-details-form]");if(!e)return;Gc(e),e.querySelector("[data-cover-pick]")?.addEventListener("click",()=>{e.querySelector("[data-cover-file]")?.click()});const t=e.querySelector("[data-new-pen-name]"),n=e.querySelector("#novel-author"),a=e.querySelector("[data-pen-add-error]"),r=s=>{a&&(a.textContent=s||"",a.hidden=!s)},o=()=>{let s;try{s=Hr(t?.value)}catch{r(ne);return}if(!s.ok){r(s.error);return}if(r(""),t&&(t.value=""),n&&![...n.options].some(c=>c.value===s.name)){const c=document.createElement("option");c.value=s.name,c.textContent=s.name,n.append(c)}n&&(n.value=s.name)};e.querySelector("[data-add-pen-name]")?.addEventListener("click",o),t?.addEventListener("keydown",s=>{s.key==="Enter"&&(s.preventDefault(),o())}),e.addEventListener("submit",s=>{s.preventDefault();const c=new FormData(e),i=String(c.get("novelId")||"").trim(),d=document.querySelector("[data-admin-novel]"),u=d?[...d.querySelectorAll("[data-main-tag].is-on")].map(y=>y.dataset.mainTag):[],p=d?se(d):[],m={title:c.get("title"),author:c.get("author"),teaser:c.get("teaser"),mebUrl:c.get("mebUrl"),coverImage:c.get("coverImage")};let f;try{f=i?Xr(i,m):zr({...m,tags:u,secondaryTags:p})}catch{A(e,{coverImage:ne});return}if(!f.ok){if(A(e,f.errors||{}),f.errors?.tags){const y=d?.querySelector('[data-error-for="tags"]');y&&(y.textContent=f.errors.tags,y.hidden=!1)}return}g(D({novelId:f.novel.id}))})}function Xc(e){if(!e?.byMonth?.length&&!e?.byYear?.length)return"";const t=(e.byMonth||[]).map(a=>{const r=Vi(a.year,a.month);return`<li><span class="date-part" data-no-wbr>${l(r)}</span><span>${a.thb} บาท</span></li>`}).join(""),n=(e.byYear||[]).map(a=>{const r=Yi(a.year);return`<li><span class="date-part" data-no-wbr>${l(r)}</span><span>${a.thb} บาท</span></li>`}).join("");return`
        <div class="sales-topup-periods">
          <div>
            <h4>ยอดเติมรายเดือน (สำหรับภาษี)</h4>
            <ul class="sales-topup-period-list">${t}</ul>
          </div>
          <div>
            <h4>ยอดเติมรายปี (สำหรับภาษี)</h4>
            <ul class="sales-topup-period-list">${n}</ul>
          </div>
        </div>`}function Wn(e){return`ปลดล็อก ${e.unlocks} ครั้ง (${e.unlockCoins} เหรียญ) · โดเนท ${e.donations} ครั้ง (${e.donateCoins} เหรียญ)`}function Qc(){const e=Ys(),t=e.novels.map(o=>{const s=o.chapters.map(i=>`
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
          <p class="promo-card__summary">${l(Wn(o.totals))}</p>
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
        </section>`}).join(""),n=Js(),a=n.records.map(o=>{const s=o.createdAt?le(new Date(o.createdAt)):"";return`
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
          <p class="promo-card__summary">${l(Wn(e.overall))}</p>
        </div>
      </article>
      <section class="sales-novel sales-topup">
        <h3>การเติมเหรียญของนักอ่าน</h3>
        <p class="promo-card__summary">ยอดเติมรวม ${n.totals.thb} บาท · ออกเหรียญทั้งหมด ${n.totals.coins} เหรียญ</p>
        ${Xc(n)}
        ${r}
      </section>
      ${t||'<p class="empty-state">ยังไม่มีข้อมูลนิยาย</p>'}
    </section>
  `}function el(e){Dc(),Cc(),document.querySelectorAll("[data-font-size]").forEach(n=>{n.addEventListener("click",()=>{const a=Number(n.dataset.fontSize);ws(a);const r=document.querySelector(".reader-shell");r&&r.style.setProperty("--reader-size",`${a}px`),document.querySelectorAll("[data-font-size]").forEach(o=>{const s=Number(o.dataset.fontSize)===a;o.classList.toggle("is-active",s),o.setAttribute("aria-pressed",String(s))})})});const t=document.querySelector("[data-toggle-night]");if(t&&t.addEventListener("click",()=>{const n=Xa()==="night"?"light":"night";$s(n),S(n),t.classList.toggle("is-active",n==="night"),t.setAttribute("aria-pressed",String(n==="night")),t.textContent=n==="night"?"โหมดกลางคืน: เปิด":"โหมดกลางคืน"}),e.name==="reader"&&(window.scrollTo(0,0),b()&&e.novelId&&e.chapterId)){const a=v(e.novelId),r=be(a,e.chapterId);fe(a,r)&&$o(e.novelId,e.chapterId)}if(sl(),ol(),tl(),il(),Rr(),xi(),Gn(),window.__headerResizeBound||(window.__headerResizeBound=!0,window.addEventListener("resize",Gn)),e.name==="report"&&Yn(),e.name==="admin"){const n=new URLSearchParams(window.location.search).get("tab");n==="promos"?He():n==="events"?Or():n==="reports"?Yn():n==="sales"||(Mi(),Zc(),zc())}ke(),Tc(),vi(),C(),Ic(),e.name==="events"&&window.location.hash&&document.getElementById(window.location.hash.slice(1))?.scrollIntoView({block:"start"})}function tl(){const e=document.querySelector("[data-search-form]");if(!e)return;const t=e.querySelector(".header-search__field"),n=e.querySelector("[data-search-toggle]");e.addEventListener("submit",a=>{a.preventDefault();const r=String(new FormData(e).get("q")||"").trim();g(w({name:"search",q:r}))}),n&&t&&n.addEventListener("click",()=>{const a=!e.classList.contains("is-open");e.classList.toggle("is-open",a),n.setAttribute("aria-expanded",String(a)),n.setAttribute("aria-label",a?"ปิดช่องค้นหา":"เปิดช่องค้นหา"),a?t.focus():t.blur()})}function nl(){const e=Za();return e.length?`<ul class="header-inbox__list">${e.map(t=>{const n=t.readAt?" is-read":"",a=xr(t.createdAt);return`<li>
      <a class="inbox-item${n}" href="${l(t.href)}" data-link data-inbox-item="${l(t.id)}"${t.type==="report"?" data-inbox-report":""}>
        <span class="inbox-item__kind">${l(t.kindLabel)}</span>
        <span class="inbox-item__title">${l(t.title)}</span>
        <span class="inbox-item__body">${Gi(t.body)}</span>
        ${a?`<span class="inbox-item__date">${a}</span>`:""}
      </a>
    </li>`}).join("")}</ul>`:'<p class="header-inbox__empty">ยังไม่มีการแจ้งเตือน</p>'}function al(){const e=Bt(),t=e>99?"99+":String(e);return`
          <div class="header-inbox" data-inbox>
            <button type="button" class="header-inbox__btn" data-inbox-toggle aria-expanded="false" aria-haspopup="true" aria-controls="inbox-panel">
              <span class="header-inbox__icon">
                ${si}
                <span class="header-inbox__badge" data-inbox-badge${e?"":" hidden"}>${e?l(t):""}</span>
              </span>
              <span class="header-inbox__label">กล่องข้อความ</span>
            </button>
            <div class="header-inbox__panel" id="inbox-panel" hidden role="region" aria-label="กล่องข้อความ">
              <p class="header-inbox__heading">กล่องข้อความ</p>
              ${nl()}
            </div>
          </div>`}function Vt(){const e=document.querySelector("[data-inbox]");if(!e)return;const t=e.querySelector("[data-inbox-toggle]"),n=e.querySelector(".header-inbox__panel");n&&(n.hidden=!0),t&&t.setAttribute("aria-expanded","false")}function rl(){const e=document.querySelector("[data-account-toggle]"),t=document.querySelector(".account-menu__list");t&&(t.hidden=!0),e&&e.setAttribute("aria-expanded","false")}function Gn(){const e=document.querySelector(".site-header");if(!e)return;const t=Math.round(e.getBoundingClientRect().height);t>0&&document.documentElement.style.setProperty("--header-h",`${t}px`)}function ol(){const e=document.querySelector("[data-inbox]");if(!e)return;const t=e.querySelector("[data-inbox-toggle]"),n=e.querySelector(".header-inbox__panel"),a=e.querySelector("[data-inbox-badge]");!t||!n||(t.addEventListener("click",r=>{r.stopPropagation(),rl();const o=n.hidden;if(n.hidden=!o,t.setAttribute("aria-expanded",String(o)),o){if(bs(),a){const s=Bt();a.hidden=s===0,a.textContent=s?s>99?"99+":String(s):""}n.querySelectorAll(".inbox-item:not([data-inbox-report])").forEach(s=>s.classList.add("is-read"))}}),n.addEventListener("click",r=>{const o=r.target.closest("[data-inbox-item]");if(o&&(gs(o.dataset.inboxItem),o.classList.add("is-read"),a)){const s=Bt();a.hidden=s===0,a.textContent=s?s>99?"99+":String(s):""}}),document.addEventListener("click",r=>{r.target.closest("[data-inbox]")||Vt()},{once:!0}),document.addEventListener("keydown",r=>{r.key==="Escape"&&Vt()},{once:!0}))}function sl(){const e=document.querySelector("[data-account-toggle]"),t=document.querySelector(".account-menu__list");e&&t&&(e.addEventListener("click",a=>{a.stopPropagation(),Vt();const r=t.hidden;t.hidden=!r,e.setAttribute("aria-expanded",String(r))}),document.addEventListener("click",a=>{a.target.closest(".account-menu")||(t.hidden=!0,e.setAttribute("aria-expanded","false"))},{once:!0}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(t.hidden=!0,e.setAttribute("aria-expanded","false"))},{once:!0}));const n=document.querySelector("[data-logout]");n&&n.addEventListener("click",()=>{fo(),g("/")})}function il(){document.querySelectorAll("[data-follow]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.follow;if(!b()){Li(I());return}const n=vo(t);if(!n.ok)return;const a=n.following;e.classList.toggle("is-following",a),e.setAttribute("aria-pressed",String(a));const r=e.querySelector("[data-follow-label]");r&&(r.textContent=a?"อยู่ในชั้นหนังสือแล้ว":"เพิ่มเข้าชั้น");const o=e.querySelector(".follow-btn__icon");o&&(o.outerHTML=a?ur:dr)})})}function Rr(){const e=document.querySelector("[data-google-placeholder]");e&&e.addEventListener("click",()=>{const o=document.querySelector("[data-google-message]");o&&(o.hidden=!1)});const t=document.querySelector("[data-signup-form]");t&&t.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await po({displayName:c.get("displayName"),email:c.get("email"),password:c.get("password"),confirm:c.get("confirm"),acceptTerms:c.get("acceptTerms")==="on"});if(!i.ok){A(s,i.errors);return}As(),g(Qe())});const n=document.querySelector("[data-login-form]");n&&n.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await mo({email:c.get("email"),password:c.get("password")});if(!i.ok){A(s,i.errors);return}g(Qe())});const a=document.querySelector("[data-forgot-form]");a&&a.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await _o({email:c.get("email")});if(!i.ok){A(s,i.errors);return}$r(s);const d=document.querySelector("[data-forgot-confirm]");if(!d)return;const u=i.resetPath?`<p class="forgot-mock-link">สำหรับต้นแบบนี้ ไม่มีการส่งอีเมลจริง ให้เปิด <a href="${i.resetPath}" data-link>ลิงก์ตั้งรหัสผ่านใหม่</a> เพื่อจำลองขั้นตอนจากอีเมล</p>`:'<p class="forgot-mock-link">สำหรับต้นแบบนี้ ไม่มีการส่งอีเมลจริง หากอีเมลนี้มีในระบบ ลิงก์จะปรากฏที่นี่</p>';d.hidden=!1,d.innerHTML=`
        <p class="form-success">หากอีเมลนี้มีอยู่ในระบบ ระบบจะส่งลิงก์ตั้งรหัสผ่านใหม่ให้ (ต้นแบบ: ไม่มีการส่งอีเมลจริง)</p>
        ${u}
      `});const r=document.querySelector("[data-reset-form]");r&&r.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await No({token:c.get("token"),password:c.get("password"),confirm:c.get("confirm")});if(!i.ok){A(s,i.errors);return}g("/login?reset=1")})}function Mr(e){if(ys())return!1;if(e.name==="novel"){const t=v(e.id);return!!(t&&Ve(t))}if(e.name==="reader"){const t=v(e.novelId);return!!(t&&Ve(t))}return!1}function cl({onConfirm:e,onCancel:t}){const n=document.querySelector(".modal-backdrop");n&&n.remove();const a=document.createElement("div");a.className="modal-backdrop",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-labelledby","age-gate-title"),a.innerHTML=`
    <div class="modal">
      <span class="badge-18">18+</span>
      <h2 id="age-gate-title">เนื้อหาสำหรับผู้มีอายุ 18 ปีขึ้นไป</h2>
      <p>หมวดนิยายอีโรติกและเรื่องที่ติดป้าย 18+ ต้องยืนยันอายุก่อนเข้าอ่าน คุณมีอายุ 18 ปีขึ้นไปหรือไม่?</p>
      <div class="modal__actions">
        <button class="btn btn-primary" type="button" data-age-yes>ฉันมีอายุ 18 ปีขึ้นไป</button>
        <button class="btn btn-ghost" type="button" data-age-no>ออก</button>
      </div>
    </div>
  `,document.body.appendChild(a),a.querySelector("[data-age-yes]").focus(),a.querySelector("[data-age-yes]").addEventListener("click",()=>{vs(),a.remove(),e()}),a.querySelector("[data-age-no]").addEventListener("click",()=>{a.remove(),t()})}function ll(e,{onNavigate:t}){e.addEventListener("click",n=>{const a=n.target.closest("a[data-link]");if(!a||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;if(a.getAttribute("aria-disabled")==="true"){n.preventDefault();return}const r=new URL(a.href,window.location.origin);r.origin===window.location.origin&&(n.preventDefault(),t(`${r.pathname}${r.search}`,a))})}function dl(){const e=ct();L(),M({force:e}),Ja({force:e}),Eo()}const ul=document.getElementById("app");let Oe=null;function pl(e){return e.name==="home"?yi():e.name==="novel"?$i(e.id):e.name==="reader"?ki(e.novelId,e.chapterId):e.name==="login"?wi():e.name==="signup"?Si():e.name==="bookshelf"?_i():e.name==="profile"?Ni():e.name==="purchases"?Ti():e.name==="terms"?Di():e.name==="privacy"?qi():e.name==="forgot"?Ci():e.name==="reset"?Bi():e.name==="admin"?Pi():e.name==="coins"?kc():e.name==="events"?Bc():e.name==="follow"?Pc():e.name==="search"?bi():e.name==="report"?yc(e.id):$n()}function Tt(e){dl(),ul.innerHTML=pl(e),el(e)}function et(e,{replace:t=!1}={}){const n=new URL(e,window.location.origin),a=Re(n.pathname),r=ua(n.searchParams.get("next"));if((a.name==="bookshelf"||a.name==="coins"||a.name==="profile"||a.name==="purchases"||a.name==="report")&&!b()){g(`/login?next=${encodeURIComponent(n.pathname+n.search)}`,{replace:!0});return}if((a.name==="login"||a.name==="signup")&&b()){g(r,{replace:!0});return}if(Mr(a)){Oe=`${n.pathname}${n.search}`,cl({onConfirm(){const o=Oe||`${n.pathname}${n.search}`;Oe=null,I()!==o&&(t?history.replaceState({},"",o):history.pushState({},"",o));const s=new URL(o,window.location.origin);Tt(Re(s.pathname))},onCancel(){Oe=null;const o=Re();(o.name==="novel"||o.name==="reader")&&g("/",{replace:!0})}}),window.location.pathname===n.pathname&&(a.name==="novel"||a.name==="reader")&&Tt({name:"home"});return}Tt(a)}ll(document,{onNavigate(e,t){const n=new URL(e,window.location.origin),a=t?.dataset.novelId,r=a?v(a):null,o=Re(n.pathname);if(!!(r&&Ve(r)&&Mr(o))){et(e);return}I()!==e&&history.pushState({},"",e),et(e)}});window.addEventListener("popstate",()=>{et(I(),{replace:!0})});S("light");co().then(()=>{et(I(),{replace:!0})});
