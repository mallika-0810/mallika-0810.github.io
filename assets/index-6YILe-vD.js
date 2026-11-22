(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const o of r)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(r){const o={};return r.integrity&&(o.integrity=r.integrity),r.referrerPolicy&&(o.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?o.credentials="include":r.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(r){if(r.ep)return;r.ep=!0;const o=n(r);fetch(r.href,o)}})();function Oe(e=window.location.pathname){const t=e.replace(/\/+$/,"")||"/";if(t==="/")return{name:"home"};const n={"/login":"login","/signup":"signup","/bookshelf":"bookshelf","/terms":"terms","/privacy":"privacy","/forgot-password":"forgot","/reset-password":"reset","/admin":"admin","/coins":"coins","/search":"search","/profile":"profile","/purchases":"purchases","/events":"events","/follow":"follow"};if(n[t])return{name:n[t]};let a=t.match(/^\/novel\/([^/]+)$/);return a?{name:"novel",id:decodeURIComponent(a[1])}:(a=t.match(/^\/read\/([^/]+)\/([^/]+)$/),a?{name:"reader",novelId:decodeURIComponent(a[1]),chapterId:decodeURIComponent(a[2])}:{name:"notfound"})}function w(e){if(e.name==="home")return"/";if(e.name==="login")return e.next?`/login?next=${encodeURIComponent(e.next)}`:"/login";if(e.name==="signup")return e.next?`/signup?next=${encodeURIComponent(e.next)}`:"/signup";if(e.name==="bookshelf")return"/bookshelf";if(e.name==="terms")return"/terms";if(e.name==="privacy")return"/privacy";if(e.name==="forgot")return"/forgot-password";if(e.name==="reset")return e.token?`/reset-password?token=${encodeURIComponent(e.token)}`:"/reset-password";if(e.name==="admin")return"/admin";if(e.name==="coins")return"/coins";if(e.name==="events")return"/events";if(e.name==="follow")return"/follow";if(e.name==="profile")return"/profile";if(e.name==="purchases")return"/purchases";if(e.name==="search"){const t=e.q==null?"":String(e.q).trim();return t?`/search?q=${encodeURIComponent(t)}`:"/search"}return e.name==="novel"?`/novel/${e.id}`:e.name==="reader"?`/read/${e.novelId}/${e.chapterId}`:"/"}function T(){return`${window.location.pathname}${window.location.search}`}function h(e,{replace:t=!1}={}){const n=typeof e=="string"?e:w(e);t?history.replaceState({},"",n):history.pushState({},"",n),window.dispatchEvent(new PopStateEvent("popstate"))}const R=[{id:"teen-romance",name:"นิยายรักวัยว้าวุ่น"},{id:"romance",name:"นิยายรัก"},{id:"romantic",name:"นิยายโรมานซ์"},{id:"erotic",name:"นิยายอีโรติก",isAdult:!0}],g={name:"บ้านนิยายของ J.Jusmin และ Mali_810",shortName:"บ้านนิยาย",headerName:"บ้านนิยาย J.Jusmin และ Mali_810",penNames:["J.Jusmin","Mali_810"]},Nn=[{id:"school-bell-floor-four",title:"เสียงระฆังที่ชั้นสี่",author:"J.Jusmin",tags:["teen-romance","romance"],secondaryTags:["แอบรัก","วิศวะ","รักในรั้วมหาลัย"],teaser:"ทุกครั้งที่ระฆังดัง เธอจะยืนรออยู่ที่บันไดชั้นสี่ — แต่ปีนี้เขาเดินผ่านไปโดยไม่เหลียวหลัง",synopsis:`นับตั้งแต่มัธยมต้น บันไดหนีไฟชั้นสี่คือพื้นที่ลับของเนยกับนนท์
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

นี่คือข้อความตัวอย่างสำหรับต้นแบบเว็บ ไม่ใช่นิยายที่เผยแพร่จริง`}]}],za=["มาเฟีย","วิศวะ","แอบรัก","พระเอกคลั่งรัก","คู่กัด","หวานน่ารัก","ดราม่า","คอมเมดี้","รักในรั้วมหาลัย","ระบบ","ย้อนเวลา","แฟนตาซี","CEO","บอสตัวร้าย","แพทย์","เพื่อนสนิท","ฮีลใจ","ชีวิตในวัยเรียน"];function Dt(e){return R.find(t=>t.id===e)}function he(e,t){return e?.chapters.find(n=>n.id===t)}const Ge="banNiyai_novelMeta",gt="banNiyai_tagSuggestions",$e="banNiyai_chapters",Se="banNiyai_customNovels",xn="banNiyai_deletedNovels",on="banNiyai_unlocks",sn="banNiyai_walletTx",cn="banNiyai_donations",ln="banNiyai_progress";function P(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function x(e,t){localStorage.setItem(e,JSON.stringify(t))}function _e(e){return String(e||"").trim().replace(/\s+/g," ")}function ye(){const e=P(gt,null),t=Array.isArray(e)&&e.length?e:[...za],n=new Set;return t.map(_e).filter(a=>{if(!a)return!1;const r=a.toLowerCase();return n.has(r)?!1:(n.add(r),!0)})}function It(e){const t=_e(e);if(!t)return ye();const n=ye();return n.some(a=>a.toLowerCase()===t.toLowerCase())||n.push(t),x(gt,n),ye()}function Xe(){return P(Ge,{})}function Ga(e){return Array.isArray(e)?{replace:!1,items:e}:e&&typeof e=="object"&&Array.isArray(e.items)?{replace:!!e.replace,items:e.items}:{replace:!1,items:[]}}function Xa(e,t){const{replace:n,items:a}=Ga(t);if(n)return(a||[]).filter(i=>i&&i.id!=null&&i.id!=="").map(i=>({...i,id:String(i.id)}));const r=Array.isArray(e)?e:[],o=new Map(r.map(i=>[String(i.id),{...i}]));for(const i of a){if(!i||i.id==null||i.id==="")continue;const d=String(i.id);o.set(d,o.has(d)?{...o.get(d),...i,id:d}:{...i,id:d})}const s=new Set,c=[];for(const i of r){const d=String(i.id);c.push(o.get(d)),s.add(d)}for(const i of a){if(!i||i.id==null||i.id==="")continue;const d=String(i.id);s.has(d)||(c.push(o.get(d)),s.add(d))}return c}function dn(e,t,n){const a=t[e.id]||{};return{...e,title:a.title!=null?a.title:e.title,author:a.author!=null?a.author:e.author,teaser:a.teaser!=null?a.teaser:e.teaser,cover:a.cover!=null?a.cover:e.cover,tags:Array.isArray(a.tags)?a.tags:e.tags,secondaryTags:Array.isArray(a.secondaryTags)?a.secondaryTags:e.secondaryTags||[],chapters:Xa(e.chapters,n[e.id])}}function Ae(){const e=P(Se,[]);return Array.isArray(e)?e:[]}function En(){const e=P(xn,[]);return Array.isArray(e)?e.map(String):[]}function be(){const e=Xe(),t=P($e,{}),n=new Set(En()),a=Nn.map(o=>dn(o,e,t)),r=Ae().map(o=>dn(o,e,t));return[...a,...r].filter(o=>!n.has(String(o.id)))}function b(e){return be().find(t=>t.id===e)}function Qa(e){return be().filter(t=>t.tags.includes(e))}function Fe(e){return!!e?.tags?.some(t=>Dt(t)?.isAdult)}function er(e,{tags:t,secondaryTags:n}){if(!b(e))return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const r=[...new Set((t||[]).filter(u=>R.some(p=>p.id===u)))];if(!r.length)return{ok:!1,error:"กรุณาเลือกหมวดหลักอย่างน้อย 1 หมวด"};const o=new Set,s=[];for(const u of n||[]){const p=_e(u);if(!p||R.some(k=>k.name===p))continue;const m=p.toLowerCase();o.has(m)||(o.add(m),s.push(p))}const c=Xe();c[e]={...c[e]||{},tags:r,secondaryTags:s},x(Ge,c);const i=Ae(),d=i.findIndex(u=>u.id===e);return d>=0&&(i[d]={...i[d],tags:r,secondaryTags:s},x(Se,i)),s.forEach(u=>It(u)),{ok:!0,novel:b(e)}}function tr(e){const t=new Set,n=[];for(const a of e||[]){const r=_e(a);if(!r||R.some(s=>s.name===r))continue;const o=r.toLowerCase();t.has(o)||(t.add(o),n.push(r))}return n}function nr(e={}){const t=String(e.title||"").trim(),n=String(e.author||"").trim(),a={};t||(a.title="กรุณากรอกชื่อเรื่อง"),g.penNames.includes(n)||(a.author="กรุณาเลือกนามปากกา");const r=[...new Set((e.tags||[]).filter(u=>R.some(p=>p.id===u)))];if(Object.keys(a).length)return{ok:!1,errors:a};const o=tr(e.secondaryTags),s=String(e.coverImage||"").trim(),c=String(e.teaser||"").trim(),i=`n-${Date.now().toString(36)}`,d={id:i,title:t,author:n,tags:r,secondaryTags:o,teaser:c,synopsis:"",cover:s?{image:s,from:"#F7B3BE",to:"#8A5A9A",motif:""}:{from:"#F7B3BE",to:"#8A5A9A",motif:t},chapters:[],createdAt:new Date().toISOString()};return x(Se,[...Ae(),d]),o.forEach(u=>It(u)),{ok:!0,novel:b(i)}}function un(e,t,n){return e?{image:e,from:t?.from||"#F7B3BE",to:t?.to||"#8A5A9A",motif:""}:t||{from:"#F7B3BE",to:"#8A5A9A",motif:n||""}}function ar(e,t={}){const n=b(e);if(!n)return{ok:!1,errors:{title:"ไม่พบนิยายเรื่องนี้"}};const a=String(t.title||"").trim(),r=String(t.author||"").trim(),o=String(t.teaser??n.teaser??"").trim(),s={};if(a||(s.title="กรุณากรอกชื่อเรื่อง"),g.penNames.includes(r)||(s.author="กรุณาเลือกนามปากกา"),Object.keys(s).length)return{ok:!1,errors:s};let c=n.cover||un("",null,a);if(Object.prototype.hasOwnProperty.call(t,"coverImage")){const m=String(t.coverImage||"").trim();m&&(c=un(m,c,a))}const i={title:a,author:r,teaser:o,cover:c},d=Xe();d[e]={...d[e]||{},...i},x(Ge,d);const u=Ae(),p=u.findIndex(m=>m.id===e);return p>=0&&(u[p]={...u[p],...i},x(Se,u)),{ok:!0,novel:b(e)}}function rr(e){if(!b(e))return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};if(x(Se,Ae().filter(r=>r.id!==e)),Nn.some(r=>r.id===e)){const r=En();r.includes(e)||x(xn,[...r,e])}const n=Xe();delete n[e],x(Ge,n);const a=P($e,{});return delete a[e],x($e,a),{ok:!0}}function Ne(e){if(!e)return null;const t=String(e).trim();if(/^\d{4}-\d{2}-\d{2}$/.test(t)){const a=new Date(`${t}T00:00:00+07:00`);return Number.isNaN(a.getTime())?null:a}const n=new Date(t);return Number.isNaN(n.getTime())?null:n}function ge(e,t=new Date){const n=Ne(e?.publishedAt);return!!(n&&n.getTime()<=t.getTime())}function qt(e,t=new Date){return(e?.chapters||[]).filter(n=>ge(n,t))}function or(e){let t=0;for(const n of e||[]){const a=Number(n.id);Number.isInteger(a)&&a>t&&(t=a)}return String(t+1)}function Qe(e,t){const n=P($e,{});n[e]={replace:!0,items:t},x($e,n)}function sr(e,t){const n=P(on,{});let a=!1;for(const u of Object.keys(n||{})){const p=n[u];if(!p||typeof p!="object")continue;const m={...p},k=[];for(const $ of Object.keys(p)){const S=p[$];if(!S||!(S.novelId===e||$.startsWith(`${e}:`)))continue;const qe=S.chapterId!=null?String(S.chapterId):$.slice(e.length+1),Z=t[qe];!Z||Z===qe||(delete m[$],k.push({key:`${e}:${Z}`,rec:{...S,novelId:e,chapterId:Z}}),a=!0)}for(const $ of k)m[$.key]=$.rec;n[u]=m}a&&x(on,n);const r=P(sn,{});let o=!1;for(const u of Object.values(r||{}))if(Array.isArray(u))for(const p of u){if(!p||p.novelId!==e||p.chapterId==null)continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,o=!0)}o&&x(sn,r);const s=P(cn,{});let c=!1;for(const u of Object.values(s||{}))if(Array.isArray(u))for(const p of u){if(!p||p.novelId!==e||p.chapterId==null||p.chapterId==="")continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,c=!0)}c&&x(cn,s);const i=P(ln,{});let d=!1;for(const u of Object.values(i||{})){if(!u||typeof u!="object")continue;const p=u[e];if(!p||p.chapterId==null)continue;const m=t[String(p.chapterId)];!m||m===String(p.chapterId)||(p.chapterId=m,d=!0)}d&&x(ln,i)}function Tn(e,t,n){const a=b(e),r=a?.chapters?.find(s=>String(s.id)===String(t));if(!a||!r)return{ok:!1,errors:{id:"ไม่พบตอนที่ต้องการแก้ไข"}};const o=(a.chapters||[]).map(s=>String(s.id)===String(t)?{...s,...n,id:String(t),updatedAt:new Date().toISOString()}:{...s});return Qe(e,o),{ok:!0,chapter:b(e).chapters.find(s=>String(s.id)===String(t)),novel:b(e)}}function ir(e,t={}){const n=b(e);if(!n)return{ok:!1,errors:{novelId:"ไม่พบนิยายเรื่องนี้"}};const a=String(t.title||"").trim(),r=String(t.content||"").trim(),o={};if(a||(o.title="กรุณากรอกชื่อตอน"),r||(o.content="กรุณากรอกเนื้อหาตอน"),Object.keys(o).length)return{ok:!1,errors:o};const s=(n.chapters||[]).map(d=>({...d})),c=or(s),i=new Date().toISOString();return s.push({id:c,title:a,content:r,price:0,free:!0,publishedAt:"",createdAt:i,updatedAt:i}),Qe(e,s),{ok:!0,chapter:b(e).chapters.find(d=>String(d.id)===c),novel:b(e)}}function cr(e,t){const n=b(e);if(!n)return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const a=(n.chapters||[]).filter(r=>String(r.id)!==String(t));return a.length===(n.chapters||[]).length?{ok:!1,error:"ไม่พบตอนนี้"}:(Qe(e,a),{ok:!0,novel:b(e)})}function lr(e,t){const n=b(e);if(!n)return{ok:!1,error:"ไม่พบนิยายเรื่องนี้"};const a=new Map((n.chapters||[]).map(c=>[String(c.id),{...c}])),r=(t||[]).map(c=>String(c));if(r.length!==a.size||r.some(c=>!a.has(c)))return{ok:!1,error:"ลำดับตอนไม่ถูกต้อง"};const o={},s=r.map((c,i)=>{const d=String(i+1);return o[c]=d,{...a.get(c),id:d}});return Qe(e,s),sr(e,o),{ok:!0,novel:b(e)}}function dr(e,t,n){const a=n===""||n==null?0:Number(n);return!Number.isFinite(a)||a<0||!Number.isInteger(a)?{ok:!1,errors:{price:"กรุณากรอกราคาเป็นจำนวนเต็มไม่ติดลบ (0 = ฟรี)"}}:Tn(e,t,{price:a,free:a===0})}function ur(e,t,n={}){const a=n.publishMode==="schedule"?"schedule":"now";let r="";if(a==="now")r=new Date().toISOString();else{const o=Ne(n.publishedAt);if(!o)return{ok:!1,errors:{publishedAt:"กรุณาเลือกวันและเวลาที่จะเผยแพร่"}};r=o.toISOString()}return Tn(e,t,{publishedAt:r})}const pe="banNiyai_users",xe="banNiyai_session",et="banNiyai_follows",Lt="banNiyai_progress",ke="banNiyai_resetTokens";function j(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function F(e,t){localStorage.setItem(e,JSON.stringify(t))}function ie(e){return String(e||"").trim().toLowerCase()}async function tt(e,t){const n=new TextEncoder().encode(`${ie(e)}:${t}:banNiyai-prototype`),a=await crypto.subtle.digest("SHA-256",n);return[...new Uint8Array(a)].map(r=>r.toString(16).padStart(2,"0")).join("")}function ne(){return j(pe,[])}function Ee(e){return e?{id:e.id,displayName:e.displayName,email:e.email,avatar:e.avatar||"",isAuthor:!!e.isAuthor}:null}function y(){const e=j(xe,null);if(!e?.userId)return null;const t=ne().find(n=>n.id===e.userId);return Ee(t)}function pr(e){return e?Ee(ne().find(t=>t.id===e)):null}function mr(e=y()){return!!e?.isAuthor}const G={email:"author@banniyai.demo",password:"author1234",displayName:"J.Jusmin"};async function fr(){const e=ne(),t=G.email,n=e.find(r=>r.email===t),a=await tt(t,G.password);if(n){(!n.isAuthor||n.passwordHash!==a)&&(n.isAuthor=!0,n.passwordHash=a,n.displayName=n.displayName||G.displayName,F(pe,e));return}e.push({id:"demo-author",displayName:G.displayName,email:t,passwordHash:a,isAuthor:!0,acceptedTermsAt:new Date().toISOString(),createdAt:new Date().toISOString()}),F(pe,e)}function Dn(e,t="/"){if(!e)return t;const n=String(e);return!n.startsWith("/")||n.startsWith("//")||n.includes("://")?t:n}function hr({displayName:e,email:t,password:n,confirm:a,acceptTerms:r}){const o={},s=String(e||"").trim(),c=ie(t);return s?s.length<2&&(o.displayName="ชื่อที่แสดงต้องมีอย่างน้อย 2 ตัวอักษร"):o.displayName="กรุณากรอกชื่อที่แสดง",c?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c)||(o.email="กรุณากรอกอีเมลให้ถูกต้อง"):o.email="กรุณากรอกอีเมล",n?String(n).length<8&&(o.password="รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"):o.password="กรุณากรอกรหัสผ่าน",a?n!==a&&(o.confirm="รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน"):o.confirm="กรุณายืนยันรหัสผ่าน",r||(o.acceptTerms="กรุณายอมรับข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว"),{ok:Object.keys(o).length===0,errors:o}}function br({email:e,password:t}){const n={};return ie(e)?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(ie(e))||(n.email="กรุณากรอกอีเมลให้ถูกต้อง"):n.email="กรุณากรอกอีเมล",t||(n.password="กรุณากรอกรหัสผ่าน"),{ok:Object.keys(n).length===0,errors:n}}function In(e){F(xe,{userId:e.id,startedAt:new Date().toISOString()})}async function gr({displayName:e,email:t,password:n,confirm:a,acceptTerms:r}){const o=hr({displayName:e,email:t,password:n,confirm:a,acceptTerms:r});if(!o.ok)return{ok:!1,errors:o.errors};const s=ie(t),c=ne();if(c.some(d=>d.email===s))return{ok:!1,errors:{email:"อีเมลนี้ถูกใช้สมัครแล้ว"}};const i={id:crypto.randomUUID(),displayName:String(e).trim(),email:s,passwordHash:await tt(s,n),acceptedTermsAt:new Date().toISOString(),createdAt:new Date().toISOString()};return c.push(i),F(pe,c),In(i),{ok:!0,user:Ee(i)}}async function yr({email:e,password:t}){const n=br({email:e,password:t});if(!n.ok)return{ok:!1,errors:n.errors};const a=ie(e),r=ne().find(s=>s.email===a),o=await tt(a,t);return!r||r.passwordHash!==o?{ok:!1,errors:{form:"อีเมลหรือรหัสผ่านไม่ถูกต้อง"}}:(In(r),{ok:!0,user:Ee(r)})}function vr(){localStorage.removeItem(xe)}function $r({displayName:e,avatar:t}={}){const n=j(xe,null);if(!n?.userId)return{ok:!1,errors:{form:"กรุณาเข้าสู่ระบบก่อน"}};const a=ne(),r=a.find(s=>s.id===n.userId);if(!r)return{ok:!1,errors:{form:"ไม่พบบัญชีผู้ใช้"}};const o={};if(e!==void 0){const s=String(e||"").trim();s?s.length<2?o.displayName="ชื่อที่แสดงต้องมีอย่างน้อย 2 ตัวอักษร":r.displayName=s:o.displayName="กรุณากรอกชื่อที่แสดง"}return Object.keys(o).length?{ok:!1,errors:o}:(t!==void 0&&(r.avatar=t||""),F(pe,a),{ok:!0,user:Ee(r)})}function Ct(e,t){const n=y();if(!n)return null;const a=j(e,{}),r=a[n.id]||kr(e),o=t(r);return a[n.id]=o,F(e,a),o}function kr(e){return e===et?[]:e===Lt?{}:null}function qn(){const e=y();return e?j(et,{})[e.id]||[]:[]}function Ln(e){return qn().some(t=>t.novelId===e)}function wr(e){return y()?(Ct(et,n=>n.some(a=>a.novelId===e)?n:[...n,{novelId:e,followedAt:new Date().toISOString()}]),{ok:!0,following:!0}):{ok:!1,reason:"auth"}}function Sr(e){return y()?(Ct(et,n=>n.filter(a=>a.novelId!==e)),{ok:!0,following:!1}):{ok:!1,reason:"auth"}}function _r(e){return Ln(e)?Sr(e):wr(e)}function Ar(e,t){return y()?(Ct(Lt,a=>({...a,[e]:{chapterId:t,updatedAt:new Date().toISOString()}})),{ok:!0}):{ok:!1,reason:"auth"}}function Nr(){const e=y();if(!e)return[];const t=qn(),n=j(Lt,{})[e.id]||{};return t.slice().sort((a,r)=>String(r.followedAt).localeCompare(String(a.followedAt))).map(a=>({novelId:a.novelId,followedAt:a.followedAt,progress:n[a.novelId]||null}))}function xr(e){const t={},n=ie(e);return n?/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(n)||(t.email="กรุณากรอกอีเมลให้ถูกต้อง"):t.email="กรุณากรอกอีเมล",{ok:Object.keys(t).length===0,errors:t,email:n}}function Er({password:e,confirm:t}){const n={};return e?String(e).length<8&&(n.password="รหัสผ่านต้องมีอย่างน้อย 8 ตัวอักษร"):n.password="กรุณากรอกรหัสผ่านใหม่",t?e!==t&&(n.confirm="รหัสผ่านและยืนยันรหัสผ่านไม่ตรงกัน"):n.confirm="กรุณายืนยันรหัสผ่านใหม่",{ok:Object.keys(n).length===0,errors:n}}async function Tr({email:e}){const t=xr(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=ne().find(r=>r.email===t.email);let a=null;if(n){const r=crypto.randomUUID(),o=j(ke,{});o[r]={userId:n.id,email:n.email,createdAt:new Date().toISOString(),used:!1},F(ke,o),a=`/reset-password?token=${encodeURIComponent(r)}`}return{ok:!0,resetPath:a}}function Dr(e){if(!e)return null;const t=j(ke,{})[e];return!t||t.used?null:t}async function Ir({token:e,password:t,confirm:n}){const a=Er({password:t,confirm:n});if(!a.ok)return{ok:!1,errors:a.errors};const r=j(ke,{}),o=r[e];if(!o||o.used)return{ok:!1,errors:{form:"ลิงก์ตั้งรหัสผ่านใหม่ไม่ถูกต้องหรือถูกใช้ไปแล้ว"}};const s=ne(),c=s.findIndex(i=>i.id===o.userId);return c<0?{ok:!1,errors:{form:"ลิงก์ตั้งรหัสผ่านใหม่ไม่ถูกต้องหรือถูกใช้ไปแล้ว"}}:(s[c]={...s[c],passwordHash:await tt(s[c].email,t)},F(pe,s),r[e]={...o,used:!0,usedAt:new Date().toISOString()},F(ke,r),localStorage.removeItem(xe),{ok:!0})}const He="banNiyai_promos",X="banNiyai_bonusSettings",Cn="banNiyai_redeemCodes",qr="promo-open-house",Bt="4h4",Bn="banNiyai_seedVersion";function nt(){try{return localStorage.getItem(Bn)!==Bt}catch{return!0}}function Lr(){localStorage.setItem(Bn,Bt)}function H(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function K(e,t){localStorage.setItem(e,JSON.stringify(t))}function Pt(e){return Number(e.thb)||Math.max(0,Number(e.coins)-Number(e.bonus||0))}function Cr(e=new Date){return new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit"}).format(e)}function de(e){if(e===""||e==null||Number(e)<=0)return null;const t=Number(e);return Number.isFinite(t)?t:null}function Pn(e,t){return Math.ceil(e*(Number(t)||0)/100)}function On(e){if(!e||!e.id)return null;const t=e.packageIds==="all"||e.allPackages?"all":Array.isArray(e.packageIds)?e.packageIds.filter(Boolean):[],n=e.bonusType==="fixed"?"fixed":"percent",a=Math.max(0,Number(e.bonusValue)||0);return{id:e.id,name:String(e.name||"").trim(),packageIds:t,bonusType:n,bonusValue:a,startAt:e.startAt,endAt:e.endAt,enabled:e.enabled!==!1,firstTopUpOnly:!!e.firstTopUpOnly,bonusExpiryDays:de(e.bonusExpiryDays),createdAt:e.createdAt,updatedAt:e.updatedAt}}function Rn(){return[{id:qr,name:"โปรเปิดบ้านนิยาย",packageIds:"all",bonusType:"percent",bonusValue:20,startAt:"2026-11-01T00:00:00+07:00",endAt:"2026-12-31T23:59:00+07:00",enabled:!0,firstTopUpOnly:!0,bonusExpiryDays:null,createdAt:"2026-11-01T00:00:00+07:00",updatedAt:"2026-11-01T00:00:00+07:00"}]}function L(){const e=nt(),t=H(He,null);return(e||!Array.isArray(t))&&K(He,Rn()),jn(),zn(),ce()}function ce(){const e=H(He,null);return(Array.isArray(e)?e:Rn()).map(On).filter(Boolean)}function Mn(e){return K(He,e),ce()}function Ot(e){return ce().find(t=>t.id===e)||null}function Br(e){const t={};String(e.name||"").trim()||(t.name="กรุณากรอกชื่อโปรโมชัน");const a=Number(e.bonusValue);return(!Number.isFinite(a)||a<=0)&&(t.bonusValue="กรุณากรอกจำนวนโบนัสที่มากกว่า 0"),e.bonusType==="percent"&&a>100&&(t.bonusValue="โบนัสแบบเปอร์เซ็นต์ต้องไม่เกิน 100"),e.startAt||(t.startAt="กรุณาเลือกวันและเวลาเริ่มต้น"),e.endAt||(t.endAt="กรุณาเลือกวันและเวลาสิ้นสุด"),e.startAt&&e.endAt&&new Date(e.endAt)<=new Date(e.startAt)&&(t.endAt="วันสิ้นสุดต้องอยู่หลังวันเริ่มต้น"),e.packageIds!=="all"&&(!Array.isArray(e.packageIds)||!e.packageIds.length)&&(t.packageIds="กรุณาเลือกแพ็กเกจอย่างน้อย 1 แพ็ก หรือเลือกทั้งหมด"),{ok:Object.keys(t).length===0,errors:t}}function Un(e){const t=Br(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=ce(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=On({...e,id:r,name:String(e.name).trim(),createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return Mn(c),{ok:!0,promo:s}}function Pr(e){return Mn(ce().filter(t=>t.id!==e)),{ok:!0}}function Or(e,t){const n=Ot(e);return n?Un({...n,enabled:!!t}):{ok:!1,error:"ไม่พบโปรโมชัน"}}function Fn(e,t=new Date){if(!e?.enabled)return!1;const n=new Date(e.startAt),a=new Date(e.endAt);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?!1:t>=n&&t<=a}function Rr(e,t){return e.packageIds==="all"?!0:Array.isArray(e.packageIds)&&e.packageIds.includes(t)}function Re(e,t){if(!e||!t)return 0;const n=Pt(t);return e.bonusType==="fixed"?Math.round(Number(e.bonusValue)||0):Pn(n,e.bonusValue)}function Hn(e=new Date){return L(),ce().filter(t=>Fn(t,e))}function Mr(e,{isFirstTopUp:t=!1,now:n=new Date}={}){const a=Hn(n).filter(r=>!Rr(r,e.id)||r.firstTopUpOnly&&!t?!1:Re(r,e)>0);return a.length?a.sort((r,o)=>Re(o,e)-Re(r,e))[0]:null}const we="v1-off",q={signup:{enabled:!0,coins:30,bonusExpiryDays:null},checkin:{enabled:!0,keysPerDay:1,keysRequired:7,coins:7,bonusExpiryDays:null},firstTopUp:{enabled:!1,bonusType:"percent",bonusValue:0,bonusExpiryDays:null}};function yt(e){const t=e&&typeof e=="object"?e:{},n=t.signup||{},a=t.checkin||{},r=t.firstTopUp||{},o={signup:{enabled:n.enabled!==!1,coins:Math.max(0,Math.round(Number(n.coins)||0))||q.signup.coins,bonusExpiryDays:de(n.bonusExpiryDays)},checkin:{enabled:a.enabled!==!1,keysPerDay:Math.max(1,Math.round(Number(a.keysPerDay)||0))||q.checkin.keysPerDay,keysRequired:Math.max(1,Math.round(Number(a.keysRequired??a.keysPerCoin)||0))||q.checkin.keysRequired,coins:Math.max(1,Math.round(Number(a.coins)||0))||q.checkin.coins,bonusExpiryDays:de(a.bonusExpiryDays)},firstTopUp:{enabled:r.enabled===!0,bonusType:"percent",bonusValue:Math.max(0,Math.round(Number(r.bonusValue)||0)),bonusExpiryDays:de(r.bonusExpiryDays)}};return o.checkin.keysPerCoin=o.checkin.keysRequired,o}function Ur(e){if(e&&e._firstTopUpDefault===we)return e;const t=e&&typeof e=="object"?e.firstTopUp||{}:{},n=Number(t.bonusValue)===10||t.bonusValue==null||t.bonusValue==="",a={...e&&typeof e=="object"?e:{},...q,signup:e?.signup?{...q.signup,...e.signup}:q.signup,checkin:e?.checkin?{...q.checkin,...e.checkin}:q.checkin,firstTopUp:{enabled:!1,bonusType:"percent",bonusValue:n?0:Math.max(0,Math.round(Number(t.bonusValue)||0)),bonusExpiryDays:t.bonusExpiryDays??null},_firstTopUpDefault:we};return K(X,a),a}function jn(){if(nt())return K(X,{...q,_firstTopUpDefault:we,_seedVersion:Bt}),yt(q);const e=H(X,null);return Ur(e),yt(H(X,q))}function C(){return jn()}function Fr(e,t){const n={};if(e==="firstTopUp"){const a=Number(t.bonusValue);(!Number.isFinite(a)||a<0)&&(n.bonusValue="กรุณากรอกเปอร์เซ็นต์ที่ถูกต้อง"),a>100&&(n.bonusValue="โบนัสแบบเปอร์เซ็นต์ต้องไม่เกิน 100")}else if(e==="checkin"){const a=Number(t.keysPerDay),r=Number(t.keysRequired??t.keysPerCoin),o=Number(t.coins);(!Number.isFinite(a)||a<=0)&&(n.keysPerDay="กรุณากรอกจำนวนกุญแจต่อวันที่มากกว่า 0"),(!Number.isFinite(r)||r<=0)&&(n.keysRequired="กรุณากรอกจำนวนกุญแจที่ต้องครบก่อนแลกที่มากกว่า 0"),(!Number.isFinite(o)||o<=0)&&(n.coins="กรุณากรอกจำนวนเหรียญที่ได้เมื่อแลกที่มากกว่า 0")}else{const a=Number(t.coins);(!Number.isFinite(a)||a<=0)&&(n.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0")}return{ok:Object.keys(n).length===0,errors:n}}function Hr(e,t){if(!q[e])return{ok:!1,errors:{form:"ไม่พบโปรเบื้องต้นนี้"}};const n=Fr(e,t);if(!n.ok)return{ok:!1,errors:n.errors};const a=C(),r={...a,[e]:{...a[e],...t,enabled:t.enabled!==!1&&t.enabled!=="false"&&t.enabled!=="",bonusExpiryDays:de(t.bonusExpiryDays),...e==="checkin"?{keysRequired:Number(t.keysRequired??t.keysPerCoin)||a[e].keysRequired,coins:Number(t.coins)||a[e].coins}:{}}},o=H(X,{});return K(X,{...o,...yt(r),_firstTopUpDefault:we}),{ok:!0,settings:C()}}function jr(e,t){const n=C();if(!n[e])return{ok:!1,error:"ไม่พบโปรเบื้องต้นนี้"};const a=H(X,{});return K(X,{...a,...n,[e]:{...n[e],enabled:!!t},_firstTopUpDefault:we}),{ok:!0,settings:C()}}function Kr(e,{isFirstTopUp:t=!1}={}){if(!t||!e)return 0;const n=C();return n.firstTopUp.enabled?Pn(Pt(e),n.firstTopUp.bonusValue):0}function Kn(e,{isFirstTopUp:t=!1,now:n=new Date}={}){L();const a=Pt(e),r=Number(e.bonus||0),o=C().firstTopUp,s=Kr(e,{isFirstTopUp:t}),c=Mr(e,{isFirstTopUp:t,now:n}),i=c?Re(c,e):0;return{pack:e,paid:a,packageBonus:r,firstTopUp:s>0?o:null,firstTopUpBonus:s,promo:c,promoBonus:i,totalBonus:r+s+i,total:a+r+s+i}}function at(e){return String(e||"").trim().toUpperCase().replace(/\s+/g,"")}function Vn(e){if(!e||!e.id)return null;const t=Array.isArray(e.usedBy)?e.usedBy.filter(Boolean):[];return{id:e.id,code:at(e.code),coins:Math.max(0,Math.round(Number(e.coins)||0)),maxUses:Math.max(1,Math.round(Number(e.maxUses)||1)),usedBy:t,expiresAt:e.expiresAt||null,enabled:e.enabled!==!1,bonusExpiryDays:de(e.bonusExpiryDays),createdAt:e.createdAt,updatedAt:e.updatedAt}}function ae(){const e=H(Cn,[]);return(Array.isArray(e)?e:[]).map(Vn).filter(Boolean)}function Rt(e){return K(Cn,e),ae()}function Mt(e){return ae().find(t=>t.id===e)||null}function Vr(e){const t=at(e);return t&&ae().find(n=>n.code===t)||null}function Yr(e){const t={},n=at(e.code);(!n||n.length<3)&&(t.code="กรุณากรอกรหัสอย่างน้อย 3 ตัวอักษร");const a=Number(e.coins);(!Number.isFinite(a)||a<=0)&&(t.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0");const r=Number(e.maxUses);return(!Number.isFinite(r)||r<1)&&(t.maxUses="จำนวนครั้งที่ใช้ได้ต้องอย่างน้อย 1"),ae().find(s=>s.code===n&&s.id!==e.id)&&(t.code="รหัสนี้ถูกใช้แล้ว กรุณาตั้งรหัสใหม่"),e.expiresAt&&Number.isNaN(new Date(e.expiresAt).getTime())&&(t.expiresAt="วันหมดอายุไม่ถูกต้อง"),{ok:Object.keys(t).length===0,errors:t}}function Yn(e){const t=Yr(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=ae(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=Vn({...o,...e,id:r,code:at(e.code),usedBy:o?.usedBy||[],createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return Rt(c),{ok:!0,code:s}}function Jr(e){return Rt(ae().filter(t=>t.id!==e)),{ok:!0}}function Zr(e,t){const n=Mt(e);return n?Yn({...n,enabled:!!t}):{ok:!1,error:"ไม่พบรหัส"}}function Wr(e,t,n=new Date){const a=Vr(e);if(!a||!a.enabled)return{ok:!1,reason:"invalid",error:"ไม่พบรหัสนี้ หรือรหัสไม่ถูกต้อง"};if(a.expiresAt){const r=new Date(a.expiresAt);if(!Number.isNaN(r.getTime())&&r<=n)return{ok:!1,reason:"expired",error:"รหัสนี้หมดอายุแล้ว",record:a}}return t&&a.usedBy.includes(t)?{ok:!1,reason:"already",error:"คุณใช้รหัสนี้ไปแล้ว",record:a}:a.usedBy.length>=a.maxUses?{ok:!1,reason:"used-up",error:"รหัสนี้ถูกใช้ครบจำนวนแล้ว",record:a}:{ok:!0,record:a}}function zr(e,t){const a=ae().map(r=>r.id===e?{...r,usedBy:[...r.usedBy,t],updatedAt:new Date().toISOString()}:r);return Rt(a),Mt(e)}const je="banNiyai_keyPromos",Gr="keypromo-happy-new-year",Jn=[{id:"rainbow",name:"สีรุ้ง"},{id:"gold",name:"ทอง"},{id:"rose",name:"ชมพู"}];function Zn(){return[{id:Gr,name:"Happy new year",keyName:"กุญแจสายรุ้ง",keyStyle:"rainbow",keysRequired:7,coins:20,startAt:"2026-12-27T00:00:00+07:00",endAt:"2027-01-02T23:59:00+07:00",enabled:!0,createdAt:"2026-11-01T00:00:00+07:00",updatedAt:"2026-11-01T00:00:00+07:00"}]}function Xr(e){return Jn.some(t=>t.id===e)?e:"rainbow"}function Wn(e){return!e||!e.id?null:{id:e.id,name:String(e.name||"").trim(),keyName:String(e.keyName||"").trim()||"กุญแจพิเศษ",keyStyle:Xr(e.keyStyle),keysRequired:Math.max(1,Math.round(Number(e.keysRequired)||0)||7),coins:Math.max(1,Math.round(Number(e.coins)||0)||1),startAt:e.startAt,endAt:e.endAt,enabled:e.enabled!==!1,createdAt:e.createdAt,updatedAt:e.updatedAt}}function zn(){const e=H(je,null);return(nt()||!Array.isArray(e))&&K(je,Zn()),V()}function V(){const e=H(je,null);return(Array.isArray(e)?e:Zn()).map(Wn).filter(Boolean)}function Gn(e){return K(je,e),V()}function Ut(e){return V().find(t=>t.id===e)||null}function Ft(e,t=new Date){if(!e?.enabled)return!1;const n=new Date(e.startAt),a=new Date(e.endAt);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?!1:t>=n&&t<=a}function Xn(e,t=new Date){if(!e)return!0;const n=new Date(e.endAt);return Number.isNaN(n.getTime())?!1:t>n}function Ht(e=new Date){return zn(),V().filter(t=>Ft(t,e))}function Qn(e=new Date){return Ht(e).slice().sort((n,a)=>new Date(n.startAt)-new Date(a.startAt))[0]||null}function Qr(e){const t={};String(e.name||"").trim()||(t.name="กรุณากรอกชื่อโปร"),String(e.keyName||"").trim()||(t.keyName="กรุณากรอกชื่อกุญแจพิเศษ");const n=Number(e.keysRequired);(!Number.isFinite(n)||n<=0)&&(t.keysRequired="กรุณากรอกจำนวนกุญแจที่มากกว่า 0");const a=Number(e.coins);return(!Number.isFinite(a)||a<=0)&&(t.coins="กรุณากรอกจำนวนเหรียญที่มากกว่า 0"),e.startAt||(t.startAt="กรุณาเลือกวันและเวลาเริ่มต้น"),e.endAt||(t.endAt="กรุณาเลือกวันและเวลาสิ้นสุด"),e.startAt&&e.endAt&&new Date(e.endAt)<=new Date(e.startAt)&&(t.endAt="วันสิ้นสุดต้องอยู่หลังวันเริ่มต้น"),{ok:Object.keys(t).length===0,errors:t}}function ea(e){const t=Qr(e);if(!t.ok)return{ok:!1,errors:t.errors};const n=new Date().toISOString(),a=V(),r=e.id||crypto.randomUUID(),o=a.find(i=>i.id===r),s=Wn({...e,id:r,name:String(e.name).trim(),keyName:String(e.keyName).trim(),createdAt:o?.createdAt||n,updatedAt:n}),c=o?a.map(i=>i.id===r?s:i):[...a,s];return Gn(c),{ok:!0,promo:s}}function eo(e){return Gn(V().filter(t=>t.id!==e)),{ok:!0,id:e}}function to(e,t){const n=Ut(e);return n?ea({...n,enabled:!!t}):{ok:!1,error:"ไม่พบโปรแจกกุญแจ"}}const Ke="banNiyai_events",pn="promo-open-house",no="event-promo-open-house",ao="event-keypromo-happy-new-year",ro="keypromo-happy-new-year",oo=`เติมเงินครั้งแรก รับเหรียญเพิ่ม 20%
ของยอดที่เติม ใช้ได้กับทุกแพ็กเติมเหรียญ
(ให้สิทธิ์เฉพาะนักอ่านที่เติมครั้งแรกเท่านั้น)`,so=`เช็กอินกุญแจสีรุ้งครบ 7 ดอก แลกได้ 20 เหรียญ

หมายเหตุ: หากเช็กอินไม่ครบตามระยะเวลากิจกรรม กุญแจสีรุ้งจะหมดอายุทันที ไม่สามารถสะสมไว้รอบหน้าได้`,io="/gifts/coin.png",co="/images/keys/key-rainbow.webp";function ta(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function na(e,t){localStorage.setItem(e,JSON.stringify(t))}function lo(e){if(!e||!e.id)return null;const t=String(e.title||"").trim();return t?{id:String(e.id),title:t,startAt:e.startAt||"",endAt:e.endAt||"",detail:String(e.detail||"").trim(),image:e.image?String(e.image):"",promoId:e.promoId?String(e.promoId):"",createdAt:e.createdAt,updatedAt:e.updatedAt}:null}function uo(){L();const e=Ot(pn),t=new Date().toISOString();return[{id:no,title:"โปรเปิดบ้านนิยาย",startAt:e?.startAt||"2026-11-01T00:00:00+07:00",endAt:e?.endAt||"2026-12-31T23:59:00+07:00",detail:oo,image:io,promoId:pn,createdAt:e?.createdAt||t,updatedAt:t},{id:ao,title:"Happy new year",startAt:"2026-12-27T00:00:00+07:00",endAt:"2027-01-02T23:59:00+07:00",detail:so,image:co,promoId:ro,createdAt:t,updatedAt:t}]}function Y({force:e=!1}={}){const t=ta(Ke,null);return(e||!Array.isArray(t))&&na(Ke,uo()),re()}function re(){const e=ta(Ke,null);return(Array.isArray(e)?e:[]).map(lo).filter(Boolean)}function po(e){return re().find(t=>t.id===e)||null}function vt({promoId:e,title:t}={}){Y();const n=re();if(e){const a=n.find(r=>r.promoId===e);if(a)return a}if(t){const a=n.find(r=>r.title===t);if(a)return a}return null}function $t(e){return e?`/events#event-${e.id}`:"/events"}function aa(e){return na(Ke,e),re()}function mo(e){const t={},n=String(e.title||"").trim();n||(t.title="กรุณากรอกชื่อกิจกรรม");const a=e.startAt||"",r=e.endAt||"";if(a||(t.startAt="กรุณาเลือกวันเริ่มต้น"),r||(t.endAt="กรุณาเลือกวันสิ้นสุด"),a&&r&&new Date(a)>new Date(r)&&(t.endAt="วันสิ้นสุดต้องไม่ก่อนวันเริ่มต้น"),Object.keys(t).length)return{ok:!1,errors:t};Y();const o=re(),s=new Date().toISOString(),c=String(e.id||"").trim()||`event-${Date.now()}`,i=o.find(p=>p.id===c),d={id:c,title:n,startAt:a,endAt:r,detail:String(e.detail||"").trim(),image:String(e.image||"").trim(),promoId:i?.promoId||String(e.promoId||"").trim(),createdAt:i?.createdAt||s,updatedAt:s},u=i?o.map(p=>p.id===c?d:p):[...o,d];return aa(u),{ok:!0,event:d}}function fo(e){return Y(),aa(re().filter(t=>t.id!==e)),{ok:!0}}const ra="banNiyai_notifications";function ho(e){const t=Number(new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric"}).format(e).slice(0,4));return String((t+543)%100).padStart(2,"0")}function mn(e){if(!e?.startAt||!e?.endAt)return"";const t=new Date(e.startAt),n=new Date(e.endAt);if(Number.isNaN(t.getTime())||Number.isNaN(n.getTime()))return"";const a={timeZone:"Asia/Bangkok"},r=s=>new Intl.DateTimeFormat("th-TH",{day:"numeric",month:"short",...a}).format(s),o=s=>`${r(s)} ${ho(s)}`;return`${o(t)} ถึง ${o(n)}`}function jt(){try{const e=localStorage.getItem(ra);if(!e)return{seeded:!1,items:[]};const t=JSON.parse(e);if(Array.isArray(t))return{seeded:t.length>0,items:t};const n=Array.isArray(t?.items)?t.items:[];return{seeded:!!t?.seeded,items:n}}catch{return{seeded:!1,items:[]}}}function Kt(e){localStorage.setItem(ra,JSON.stringify(e))}function bo(){const e=[],t=b("school-bell-floor-four")||be().find(a=>a.chapters?.length)||null,n=t?.chapters?.length?t.chapters[t.chapters.length-1]:null;t&&n&&e.push({id:`seed-chapter-${t.id}-${n.id}`,type:"chapter",kindLabel:"อัปเดตตอนใหม่",title:t.title,body:`ตอนที่ ${n.id} ${n.title}`,href:w({name:"reader",novelId:t.id,chapterId:n.id}),createdAt:n.publishedAt||new Date().toISOString(),readAt:null}),L(),Y();for(const a of Hn()){const r=mn(a),o=vt({promoId:a.id,title:a.name});e.push({id:`seed-promo-${a.id}`,type:"activity",kindLabel:"กิจกรรม",title:a.name,body:r?`โปรเติมเหรียญ ${r}`:"โปรเติมเหรียญ",href:o?$t(o):w({name:"coins"}),promoId:a.id,createdAt:a.startAt||new Date().toISOString(),readAt:null})}for(const a of Ht()){const r=mn(a),o=vt({promoId:a.id,title:a.name});e.push({id:`seed-keypromo-${a.id}`,type:"activity",kindLabel:"กิจกรรม",title:a.name,body:r?`โปรแจกกุญแจ ${r}`:"โปรแจกกุญแจ",href:o?$t(o):w({name:"home"}),promoId:a.id,createdAt:a.startAt||new Date().toISOString(),readAt:null})}return e.sort((a,r)=>new Date(r.createdAt)-new Date(a.createdAt)),e}function oa({force:e=!1}={}){const t=jt();if(!e&&t.seeded&&Array.isArray(t.items))return t.items;const n=bo();return Kt({seeded:!0,items:n}),n}function go(e){if(e?.type!=="activity")return e?.href;const t=vt({promoId:e.promoId,title:e.title});return t?$t(t):e.href}function sa(){return Y(),oa().slice().sort((e,t)=>new Date(t.createdAt)-new Date(e.createdAt)).map(e=>({...e,href:go(e)}))}function yo(){return sa().filter(e=>!e.readAt).length}function vo(e){if(!e)return;const t=jt(),n=new Date().toISOString();let a=!1;for(const r of t.items||[])r.id===e&&!r.readAt&&(r.readAt=n,a=!0);a&&Kt(t)}function $o(){const e=jt(),t=new Date().toISOString();let n=!1;for(const a of e.items||[])a.readAt||(a.readAt=t,n=!0);n&&Kt(e)}const ia="banNiyai_ageConfirmed18",ca="banNiyai_readerTheme",la="banNiyai_readerFontSize";function ko(){return localStorage.getItem(ia)==="true"}function wo(){localStorage.setItem(ia,"true")}function da(){return localStorage.getItem(ca)==="night"?"night":"light"}function So(e){localStorage.setItem(ca,e)}function _o(){const e=Number(localStorage.getItem(la));return e>=16&&e<=28?e:18}function Ao(e){localStorage.setItem(la,String(e))}const kt="banNiyai_wallet",Vt="banNiyai_walletTx",Yt="banNiyai_unlocks",wt="banNiyai_checkins",Te=[{id:"pack-50",thb:50,coins:55,bonus:5},{id:"pack-100",thb:100,coins:110,bonus:10},{id:"pack-300",thb:300,coins:330,bonus:30},{id:"pack-500",thb:500,coins:550,bonus:50}];function J(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Jt(e,t){localStorage.setItem(e,JSON.stringify(t))}function D(){return y()}function ua(e,t,n){const a=D();if(!a)return null;const r=J(e,{}),o=r[a.id]??t,s=n(o);return r[a.id]=s,Jt(e,r),s}function fn(){return{purchased:0,bonuses:[]}}function De(){const e=D();if(!e)return fn();const n=J(kt,{})[e.id];return typeof n=="number"?{purchased:Number(n)||0,bonuses:[]}:!n||typeof n!="object"?fn():{purchased:Math.max(0,Number(n.purchased)||0),bonuses:Array.isArray(n.bonuses)?n.bonuses:[]}}function rt(e){const t=D();if(!t)return null;const n=J(kt,{});return n[t.id]=e,Jt(kt,n),e}function No(e=De(),t=new Date){const n=t.getTime();return(e.bonuses||[]).filter(a=>{if(Number(a.remaining)<=0)return!1;if(!a.expiresAt)return!0;const r=new Date(a.expiresAt).getTime();return!Number.isNaN(r)&&r>n})}function B(){const e=De(),t=No(e).reduce((n,a)=>n+Number(a.remaining||0),0);return{purchased:e.purchased,bonus:t,total:e.purchased+t}}function me(){return B().total}function pa(){return ot().some(e=>e.type==="topup")}function ma(e){const t=De();let n=e,a=0,r=0;const o=Date.now(),c=[...t.bonuses||[]].sort((d,u)=>!d.expiresAt&&!u.expiresAt?0:d.expiresAt?u.expiresAt?new Date(d.expiresAt)-new Date(u.expiresAt):-1:1).map(d=>{if(n<=0||Number(d.remaining)<=0||d.expiresAt&&new Date(d.expiresAt).getTime()<=o)return d;const u=Math.min(Number(d.remaining),n);return n-=u,a+=u,{...d,remaining:Number(d.remaining)-u}});let i=t.purchased;if(n>0){const d=Math.min(i,n);i-=d,n-=d,r+=d}return{wallet:{purchased:i,bonuses:c},fromBonus:a,fromPurchased:r,left:n}}function ot(){const e=D();return e?(J(Vt,{})[e.id]||[]).slice().reverse():[]}function ee(e){if(!e||e.free)return 0;const t=Number(e.price);return Number.isFinite(t)&&t>0?t:0}function fa(e,t){const n=D();return n?!!J(Yt,{})[n.id]?.[`${e}:${t}`]:!1}function ue(e,t){return!t||!e||!ge(t)?!1:ee(t)<=0?!0:fa(e.id,t.id)}function st(e){ua(Vt,[],t=>[...t,{id:crypto.randomUUID(),createdAt:new Date().toISOString(),...e}])}function St(e){return e?new Date(Date.now()+Number(e)*24*60*60*1e3).toISOString():null}function xo(e,{amount:t,source:n,label:a,promoId:r,promoName:o,expiryDays:s}){return!t||t<=0?e:{...e,bonuses:[...e.bonuses||[],{id:crypto.randomUUID(),remaining:t,amount:t,source:n,label:a,promoId:r||null,promoName:o||null,expiresAt:St(s),createdAt:new Date().toISOString()}]}}function it({amount:e,source:t,label:n,expiryDays:a,txType:r,extraTx:o={}}){return D()?(rt(xo(De(),{amount:e,source:t,label:n,expiryDays:a})),st({type:r||t,coins:e,label:`${n} +${e}`,...o}),{ok:!0,amount:e,balance:me(),breakdown:B()}):{ok:!1,reason:"auth"}}function Eo(){if(!D())return{ok:!1,reason:"auth"};L();const t=C().signup;return t.enabled?ot().some(n=>n.type==="signup-bonus")?{ok:!1,reason:"already"}:it({amount:t.coins,source:"signup",label:"โบนัสสมัครสมาชิก",expiryDays:t.bonusExpiryDays,txType:"signup-bonus"}):{ok:!1,reason:"disabled"}}function Ve(){return{lastDate:null,keys:0,special:{},exchanged:{}}}function ha(e){const t={};if(!e||typeof e!="object")return t;for(const[n,a]of Object.entries(e)){const r=Math.max(0,Math.round(Number(a)||0));r>0&&(t[n]=r)}return t}function ba(e){const t={};if(!e||typeof e!="object")return t;for(const[n,a]of Object.entries(e))a&&(t[n]=!0);return t}function Ye(e){if(!e)return Ve();const t=J(wt,{})[e];return t?typeof t=="string"?{lastDate:t,keys:0,special:{},exchanged:{}}:{lastDate:t.lastDate||null,keys:Math.max(0,Math.round(Number(t.keys)||0)),special:ha(t.special),exchanged:ba(t.exchanged)}:Ve()}function ct(e,t){const n=J(wt,{});return n[e]={lastDate:t.lastDate||null,keys:Math.max(0,Math.round(Number(t.keys)||0)),special:ha(t.special),exchanged:ba(t.exchanged)},Jt(wt,n),n[e]}const To="Happy new year",Do="2027-01-03T00:00:00+07:00";function Zt(e){return e?.name===To}function ga(){return new Date(Do)}function Wt(e,t=new Date){if(!e)return Ye(e);L();const n=Ye(e),a=new Map(V().map(s=>[s.id,s])),r={...n.special};let o=!1;for(const[s,c]of Object.entries(r)){const i=a.get(s);if(!i){delete r[s],o=!0;continue}if(Zt(i)){if(t<ga()||!!!n.exchanged[i.id]&&c>=i.keysRequired)continue;delete r[s],o=!0;continue}Xn(i,t)&&(delete r[s],o=!0)}return o?ct(e,{...n,special:r}):n}function Io(e=new Date){L();const t=V().find(c=>Zt(c)&&c.enabled!==!1);if(!t)return null;const n=y(),a=n?Wt(n.id,e):Ve();if(a.exchanged[t.id])return null;const r=new Date(t.startAt);if(Number.isNaN(r.getTime())||e<r)return null;const o=Number(a.special[t.id]||0),s=o>=t.keysRequired;return e>=ga()&&!s?null:{promo:t,keys:o,keysRequired:t.keysRequired,coins:t.coins,alreadyExchanged:!1,canExchange:s}}function zt(e=new Date){L();const t=C().checkin,n=t.keysPerDay,a=t.keysRequired||t.keysPerCoin,r=t.coins||a,o=a,s=D(),c=s?Wt(s.id,e):Ve(),i=Cr(e),d=c.lastDate===i,u=Qn(e),p=Ht(e).map(m=>{const k=Number(c.special[m.id]||0),$=!!c.exchanged[m.id];return{promo:m,keys:k,keysRequired:m.keysRequired,coins:m.coins,alreadyExchanged:$,canExchange:!$&&k>=m.keysRequired}});return t.enabled?{enabled:!0,keys:c.keys,keysPerDay:n,keysRequired:a,coins:r,keysPerCoin:o,checkedInToday:d,canExchange:c.keys>=a,currentKeyPromo:u,keyPromos:p,today:i}:{enabled:!1,keys:c.keys,keysPerDay:n,keysRequired:a,coins:r,keysPerCoin:o,checkedInToday:d,canExchange:!1,currentKeyPromo:u,keyPromos:p,today:i}}function qo(e=new Date){const t=D();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนเช็คอิน"};const n=zt(e);if(!n.enabled)return{ok:!1,reason:"disabled",error:"เช็คอินรายวันยังไม่เปิดใช้"};if(n.checkedInToday)return{ok:!1,reason:"already",error:"เช็คอินวันนี้แล้ว"};const a=Ye(t.id),r=Qn(e);let o=a.keys;const s={...a.special};r?s[r.id]=(s[r.id]||0)+n.keysPerDay:o+=n.keysPerDay;const c=ct(t.id,{...a,lastDate:n.today,keys:o,special:s});return{ok:!0,keys:c.keys,special:c.special,currentKeyPromo:r}}function Lo(){const e=D();if(!e)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกเหรียญ"};const t=zt();if(!t.enabled)return{ok:!1,reason:"disabled",error:"เช็คอินรายวันยังไม่เปิดใช้"};const n=t.keysRequired||t.keysPerCoin,a=t.coins||n;if(t.keys<n)return{ok:!1,reason:"short",error:`ต้องมีกุญแจเงิน ${n} ดอก จึงจะแลกได้ ${a} เหรียญ`,keys:t.keys,keysRequired:n};const r=Ye(e.id),o=ct(e.id,{...r,keys:r.keys-n});return{...it({amount:a,source:"key-exchange",label:`แลกกุญแจเงิน ${n} ดอก`,expiryDays:C().checkin.bonusExpiryDays,txType:"key-exchange"}),keys:o.keys,canExchange:o.keys>=n}}function Co(e){const t=D();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกเหรียญ"};const n=Ut(e),a=new Date,r=Wt(t.id,a),o=r.special[n?.id]||0,s=!!(n&&Zt(n)&&Xn(n,a)&&!r.exchanged[n.id]&&o>=n.keysRequired);if(!n||!Ft(n,a)&&!s)return{ok:!1,reason:"inactive",error:"โปรแจกกุญแจนี้ยังไม่เปิดหรือหมดเขตแล้ว"};if(r.exchanged[n.id])return{ok:!1,reason:"already",error:"คุณแลกโปรนี้ไปแล้ว",keys:r.special[n.id]||0};const c=r.special[n.id]||0;if(c<n.keysRequired)return{ok:!1,reason:"short",error:`ต้องมี${n.keyName} ${n.keysRequired} อัน จึงจะแลกได้ ${n.coins} เหรียญ`,keys:c};const i={...r.special,[n.id]:c-n.keysRequired},d={...r.exchanged,[n.id]:!0},u=ct(t.id,{...r,special:i,exchanged:d});return{...it({amount:n.coins,source:"key-promo-exchange",label:`แลก${n.keyName} ${n.keysRequired} อัน (${n.name})`,txType:"key-promo-exchange",extraTx:{keyPromoId:n.id,promoName:n.name}}),keys:u.special[n.id]||0,alreadyExchanged:!0}}function Bo(e){const t=D();if(!t)return{ok:!1,reason:"auth",error:"กรุณาเข้าสู่ระบบก่อนแลกโค้ด"};const n=Wr(e,t.id);return n.ok?(zr(n.record.id,t.id),it({amount:n.record.coins,source:"redeem",label:`แลกโค้ด ${n.record.code}`,expiryDays:n.record.bonusExpiryDays,txType:"redeem",extraTx:{code:n.record.code,redeemId:n.record.id}})):n}function Po(e){return Oo(e)}function Oo(e){if(!D())return{ok:!1,reason:"auth"};const n=Te.find(c=>c.id===e);if(!n)return{ok:!1,reason:"package"};L();const a=Kn(n,{isFirstTopUp:!pa()}),r=De(),o=[...r.bonuses||[]];if(a.packageBonus>0&&o.push({id:crypto.randomUUID(),remaining:a.packageBonus,amount:a.packageBonus,source:"package",label:"โบนัสแพ็ก",expiresAt:null,createdAt:new Date().toISOString()}),a.firstTopUpBonus>0){const c=a.firstTopUp?.bonusExpiryDays;o.push({id:crypto.randomUUID(),remaining:a.firstTopUpBonus,amount:a.firstTopUpBonus,source:"first-topup",label:"โบนัสเติมครั้งแรก",expiresAt:St(c),createdAt:new Date().toISOString()})}a.promoBonus>0&&a.promo&&o.push({id:crypto.randomUUID(),remaining:a.promoBonus,amount:a.promoBonus,source:"promo",promoId:a.promo.id,promoName:a.promo.name,label:a.promo.name,expiresAt:St(a.promo.bonusExpiryDays),createdAt:new Date().toISOString()}),rt({purchased:r.purchased+a.paid,bonuses:o});const s=[`เติม ${a.paid} เหรียญ (${n.thb} บาท) — ทดลอง`];return a.packageBonus&&s.push(`โบนัสแพ็ก +${a.packageBonus}`),a.firstTopUpBonus&&s.push(`โบนัสเติมครั้งแรก +${a.firstTopUpBonus}`),a.promoBonus&&a.promo&&s.push(`${a.promo.name} +${a.promoBonus}`),st({type:"topup",coins:a.total,paid:a.paid,packageBonus:a.packageBonus,firstTopUpBonus:a.firstTopUpBonus,promoBonus:a.promoBonus,promoId:a.promo?.id||null,promoName:a.promo?.name||null,thb:n.thb,packageId:n.id,method:"mock-trial",label:s.join(" · ")}),{ok:!0,balance:me(),breakdown:B(),quote:a,pack:n}}function Ro(e,t){if(!D())return{ok:!1,reason:"auth"};const a=b(e),r=he(a,t);if(!a||!r||!ge(r))return{ok:!1,reason:"notfound"};if(ee(r)<=0||fa(e,t))return{ok:!0,already:!0,balance:me()};const o=ee(r),s=B();if(s.total<o)return{ok:!1,reason:"insufficient",balance:s.total,breakdown:s,price:o,novel:a,chapter:r};const c=ma(o);if(c.left>0)return{ok:!1,reason:"insufficient",balance:s.total,breakdown:s,price:o,novel:a,chapter:r};rt(c.wallet),ua(Yt,{},d=>({...d,[`${e}:${t}`]:{novelId:e,chapterId:t,price:o,unlockedAt:new Date().toISOString()}}));const i=[];return c.fromBonus&&i.push(`ใช้โบนัส ${c.fromBonus}`),c.fromPurchased&&i.push(`ใช้เหรียญ ${c.fromPurchased}`),st({type:"unlock",coins:-o,fromBonus:c.fromBonus,fromPurchased:c.fromPurchased,novelId:e,chapterId:t,label:`ปลดล็อก ${a.title} ตอนที่ ${r.id} ${r.title}${i.length?` (${i.join(" + ")})`:""}`}),{ok:!0,balance:me(),breakdown:B(),price:o,fromBonus:c.fromBonus,fromPurchased:c.fromPurchased,novel:a,chapter:r}}function Mo(e,t={}){if(!D())return{ok:!1,reason:"auth"};const a=Number(e),r=Math.round(a);if(!Number.isFinite(a)||r!==a||r<=0)return{ok:!1,reason:"invalid"};const o=B();if(o.total<r)return{ok:!1,reason:"insufficient",balance:o.total,breakdown:o,amount:r};const s=ma(r);return s.left>0?{ok:!1,reason:"insufficient",balance:o.total,breakdown:o,amount:r}:(rt(s.wallet),st({coins:-r,fromBonus:s.fromBonus,fromPurchased:s.fromPurchased,...t}),{ok:!0,amount:r,balance:me(),breakdown:B(),fromBonus:s.fromBonus,fromPurchased:s.fromPurchased})}function Uo(){const e=J(Yt,{}),t=[];for(const[n,a]of Object.entries(e||{}))if(!(!a||typeof a!="object"))for(const r of Object.values(a))!r||!r.novelId||r.chapterId==null||t.push({userId:n,novelId:r.novelId,chapterId:String(r.chapterId),coins:Number(r.price)||0,unlockedAt:r.unlockedAt||null});return t}function Fo(){const e=J(Vt,{}),t=[];for(const[n,a]of Object.entries(e||{}))if(Array.isArray(a))for(const r of a){if(!r||r.type!=="topup")continue;const o=Te.find(p=>p.id===r.packageId),s=Number(r.thb),c=Number(r.paid),i=Number(r.packageBonus),d=(Number(r.firstTopUpBonus)||0)+(Number(r.promoBonus)||0),u=Number(r.coins);t.push({id:r.id,userId:n,createdAt:r.createdAt||null,thb:Number.isFinite(s)&&s>0?s:Number(o?.thb)||0,paid:Number.isFinite(c)&&c>=0?c:Number(o?.thb)||0,packageBonus:Number.isFinite(i)&&i>=0?i:Number(o?.bonus)||0,firstTopUpPromo:d,coins:Number.isFinite(u)?u:0,packageId:r.packageId||null})}return t.sort((n,a)=>new Date(a.createdAt||0)-new Date(n.createdAt||0)),t}const Je="banNiyai_donations",Ze=[{id:"candy",name:"อมยิ้ม",coins:1},{id:"rose",name:"ดอกกุหลาบ",coins:5},{id:"popcorn",name:"ป๊อปคอร์น",coins:10},{id:"milktea",name:"ชานมไข่มุก",coins:15},{id:"cake",name:"เค้ก",coins:20},{id:"coin",name:"เหรียญ",coins:null}],hn="banNiyai_walletTx",Ho=[["ลูกอม","อมยิ้ม"],["เค้กชิ้นสามเหลี่ยม","เค้ก"]];function jo(e){return`/gifts/${e}.png`}function Ko(){try{for(const[e,t]of Ho){const n=localStorage.getItem(Je);if(n&&n.includes(e)){const r=JSON.parse(n);let o=!1;for(const s of Object.values(r||{}))if(Array.isArray(s))for(const c of s)c&&c.giftName===e&&(c.giftName=t,o=!0);o&&localStorage.setItem(Je,JSON.stringify(r))}const a=localStorage.getItem(hn);if(a&&a.includes(e)){const r=JSON.parse(a);let o=!1;const s=c=>{if(Array.isArray(c))for(const i of c)i&&(i.giftName===e&&(i.giftName=t,o=!0),typeof i.label=="string"&&i.label.includes(e)&&(i.label=i.label.split(e).join(t),o=!0))};Array.isArray(r)?s(r):r&&typeof r=="object"&&Object.values(r).forEach(s),o&&localStorage.setItem(hn,JSON.stringify(r))}}}catch{}}Ko();function Vo(e){return Ze.find(t=>t.id===e)||null}function ya(){try{const e=localStorage.getItem(Je);return e?JSON.parse(e):{}}catch{return{}}}function Yo(e){localStorage.setItem(Je,JSON.stringify(e))}function Jo({novelId:e,giftId:t,customAmount:n,chapterId:a}={}){const r=y();if(!r)return{ok:!1,reason:"auth"};const o=b(e);if(!o)return{ok:!1,reason:"notfound"};const s=Vo(t);if(!s)return{ok:!1,reason:"gift"};let c=s.coins;if(s.coins==null){const k=Number(n);if(c=Math.round(k),!Number.isFinite(k)||c!==k||c<=0)return{ok:!1,reason:"invalid",gift:s,novel:o}}const i=a?he(o,a):null;if(a&&!i)return{ok:!1,reason:"notfound",gift:s,novel:o};const d=i?`โดเนท ${s.name} ให้ ${o.title} ตอนที่ ${i.id} ${i.title}`:`โดเนท ${s.name} ให้ ${o.title}`,u=Mo(c,{type:"donate",label:d,novelId:o.id,chapterId:i?i.id:null,giftId:s.id,giftName:s.name});if(!u.ok)return{...u,gift:s,novel:o,chapter:i,amount:c};const p={id:crypto.randomUUID(),userId:r.id,novelId:o.id,novelTitle:o.title,chapterId:i?i.id:null,chapterTitle:i?i.title:null,giftId:s.id,giftName:s.name,coins:c,fromBonus:u.fromBonus,fromPurchased:u.fromPurchased,createdAt:new Date().toISOString()},m=ya();return m[o.id]=[...m[o.id]||[],p],Yo(m),{ok:!0,...u,gift:s,novel:o,chapter:i,record:p}}function Zo(){const e=ya(),t=[];for(const n of Object.values(e||{}))Array.isArray(n)&&t.push(...n);return t}function Le(){return{unlocks:0,unlockCoins:0,donations:0,donateCoins:0}}function z(e,{unlocks:t=0,unlockCoins:n=0,donations:a=0,donateCoins:r=0}={}){e.unlocks+=t,e.unlockCoins+=n,e.donations+=a,e.donateCoins+=r}function Wo(){const e=be(),t=new Map(e.map(a=>{const r=(a.chapters||[]).map(o=>({id:String(o.id),title:o.title,totals:Le()}));return[a.id,{id:a.id,title:a.title,author:a.author,totals:Le(),unassignedDonations:Le(),chapters:r,chapterMap:new Map(r.map(o=>[o.id,o]))}]})),n=Le();for(const a of Uo()){const r=t.get(a.novelId);if(!r)continue;const o={unlocks:1,unlockCoins:a.coins};z(n,o),z(r.totals,o);const s=r.chapterMap.get(String(a.chapterId));s&&z(s.totals,o)}for(const a of Zo()){const r=t.get(a.novelId);if(!r)continue;const s={donations:1,donateCoins:Number(a.coins)||0};if(z(n,s),z(r.totals,s),a.chapterId!=null&&a.chapterId!==""){const c=r.chapterMap.get(String(a.chapterId));z(c?c.totals:r.unassignedDonations,s)}else z(r.unassignedDonations,s)}return{overall:n,novels:e.map(a=>{const r=t.get(a.id);return{id:r.id,title:r.title,author:r.author,totals:r.totals,unassignedDonations:r.unassignedDonations,chapters:r.chapters}})}}function zo(){const e=Fo().map(s=>{const c=pr(s.userId);return{...s,readerName:(c?.displayName||"").trim()||"นักอ่าน"}}),t=e.reduce((s,c)=>({thb:s.thb+c.thb,coins:s.coins+c.coins,count:s.count+1}),{thb:0,coins:0,count:0}),n=new Map,a=new Map;for(const s of e){const c=Go(s.createdAt);c&&(n.set(c.monthKey,(n.get(c.monthKey)||0)+s.thb),a.set(c.yearKey,(a.get(c.yearKey)||0)+s.thb))}const r=[...n.entries()].sort((s,c)=>c[0].localeCompare(s[0])).map(([s,c])=>{const[i,d]=s.split("-").map(Number);return{key:s,year:i,month:d,thb:c}}),o=[...a.entries()].sort((s,c)=>c[0].localeCompare(s[0])).map(([s,c])=>({key:s,year:Number(s),thb:c}));return{totals:t,records:e,byMonth:r,byYear:o}}function Go(e){if(!e)return null;const t=new Date(e);if(Number.isNaN(t.getTime()))return null;const n=new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit"}).formatToParts(t),a=Number(n.find(o=>o.type==="year")?.value),r=Number(n.find(o=>o.type==="month")?.value);return!a||!r?null:{year:a,month:r,yearKey:String(a),monthKey:`${a}-${String(r).padStart(2,"0")}`}}const _t="banNiyai_followChannels";function va(e,t){try{const n=localStorage.getItem(e);return n?JSON.parse(n):t}catch{return t}}function Xo(e,t){localStorage.setItem(e,JSON.stringify(t))}function Qo(e){if(!e||!e.id)return null;const t=String(e.name||"").trim(),n=String(e.url||"").trim();return!t||!n?null:{id:String(e.id),name:t,url:n,enabled:e.enabled!==!1,sortOrder:Number.isFinite(Number(e.sortOrder))?Number(e.sortOrder):0,createdAt:e.createdAt,updatedAt:e.updatedAt}}function es(){const e=va(_t,null);return Array.isArray(e)||Xo(_t,[]),$a()}function $a({includeDisabled:e=!1}={}){const t=va(_t,null),n=(Array.isArray(t)?t:[]).map(Qo).filter(Boolean);return(e?n:n.filter(r=>r.enabled)).slice().sort((r,o)=>r.sortOrder-o.sortOrder||String(r.id).localeCompare(String(o.id)))}const ts=[16,18,22],ns='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 11.4 12 4.8l8 6.6V20a1 1 0 0 1-1 1h-5.2v-6.2H10.2V21H5a1 1 0 0 1-1-1v-8.6Z"/></svg>',as='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 5h4.2v13.5H4V5Zm5.9 2.2h4.2V18.5H9.9V7.2Zm5.9-1.4H20V18.5h-4.2V5.8ZM3 19.4h18V21H3v-1.6Z"/></svg>',rs='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10 5H6v14h4v2H4V3h6v2Zm4.8 3.6-1.4 1.4 2.2 2H9v2h6.6l-2.2 2 1.4 1.4L19.4 12 14.8 8.6Z"/></svg>',os='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.4 0-8 1.7-8 5v1h16v-1c0-3.3-4.6-5-8-5Z"/></svg>',ss='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10l1 4H6L7 3Zm-1 6h12v12H6V9Zm3 3v2h6v-2H9Z"/></svg>',is='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a4 4 0 1 0-4-4 4 4 0 0 0 4 4Zm0 2c-3.4 0-8 1.7-8 5v1h16v-1c0-3.3-4.6-5-8-5Z"/></svg>',cs='<svg class="nav-icon" viewBox="0 0 24 24" aria-hidden="true"><path fill-rule="evenodd" d="M3 6.5A1.5 1.5 0 0 1 4.5 5h15A1.5 1.5 0 0 1 21 6.5v11A1.5 1.5 0 0 1 19.5 19h-15A1.5 1.5 0 0 1 3 17.5v-11Zm1.75 1.1 7.25 5.05 7.25-5.05V17.25c0 .41-.34.75-.75.75H5.5a.75.75 0 0 1-.75-.75V7.6Z"/></svg>',bn='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M10.5 3a7.5 7.5 0 0 1 5.8 12.2l4.2 4.2-1.4 1.4-4.2-4.2A7.5 7.5 0 1 1 10.5 3Zm0 2a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/></svg>',ka='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M17 9V8a5 5 0 0 0-10 0v1H5v12h14V9h-2Zm-8-1a3 3 0 0 1 6 0v1H9V8Zm3 6.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z"/></svg>',ls='<svg class="home-daily__icon home-daily__icon--bonus" viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="10" width="17" height="10.5" rx="1.8" fill="#d2647a"/><rect x="3" y="7.2" width="18" height="4" rx="1.2" fill="#ec8fa3"/><rect x="11" y="7.2" width="2" height="13.3" fill="#f6d15a"/><path fill="#e8b423" d="M12 7.2c-2.4-3.4-6.2-2.4-6.2.2 0 1.5 2.4 2.5 6.2 3.4 3.8-.9 6.2-1.9 6.2-3.4 0-2.6-3.8-3.6-6.2-.2Z"/></svg>',At='<svg class="coin-pack__coin" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="11" fill="#C99212"/><circle cx="12" cy="12" r="10.15" fill="#F3C63A"/><circle cx="12" cy="12" r="8.15" fill="#E8B423"/><circle cx="12" cy="12" r="7.35" fill="none" stroke="#FFE89A" stroke-width="0.85"/><path fill="#8F6508" d="M13.05 6.35h-2.1v1.12c-1.72.28-2.92 1.42-2.92 2.98 0 1.22.76 2.16 2.18 2.56l.74.2v3.32c-.72-.2-1.2-.7-1.36-1.26H7.45c.26 1.48 1.48 2.5 2.5 2.78v1.08h2.1v-1.06c1.78-.26 3.02-1.42 3.02-3.08 0-1.28-.8-2.22-2.2-2.6l-.82-.22V8.88c.66.2 1.12.7 1.24 1.22h1.92c-.22-1.38-1.36-2.34-2.36-2.58V6.35Zm-2.1 5.55c-.7-.18-1.14-.55-1.14-1.16 0-.7.5-1.14 1.14-1.3v2.46Zm2.1 1.16v2.62c-.74.2-1.26.56-1.26 1.22 0 .7.52 1.14 1.26 1.32v-5.16Z"/></svg>',ds='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 14.93V18h-2v-1.07A4 4 0 0 1 8 14h2a2 2 0 0 0 2 2 2 2 0 0 0 0-4h-1v-2h1a2 2 0 0 0 0-4 2 2 0 0 0-2 2H8a4 4 0 0 1 3-3.93V6h2v1.07A4 4 0 0 1 16 10h-2a2 2 0 0 0-2-2 2 2 0 0 0 0 4h1v2h-1a2 2 0 0 0 0 4 2 2 0 0 0 2-2h2a4 4 0 0 1-3 3.93Z"/></svg>',wa='<svg class="icon follow-btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h10a1 1 0 0 1 1 1v17.2l-6-3.4-6 3.4V4a1 1 0 0 1 1-1Z"/></svg>',Sa='<svg class="icon follow-btn__icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M9.2 16.6 5 12.4l1.4-1.4 2.8 2.8 8-8L18.6 7.2 9.2 16.6Z"/></svg>',us='<svg class="icon" viewBox="0 0 24 24" aria-hidden="true"><path fill="#EA4335" d="M12 10.2v3.6h5.1c-.2 1.2-1.5 3.6-5.1 3.6-3.1 0-5.6-2.5-5.6-5.6S8.9 6.2 12 6.2c1.8 0 3 .7 3.7 1.3l2.4-2.4C16.7 3.7 14.5 2.8 12 2.8 6.9 2.8 2.8 6.9 2.8 12S6.9 21.2 12 21.2c5.2 0 8.6-3.6 8.6-8.7 0-.6 0-1-.1-1.5H12Z"/></svg>';function l(e){return String(e).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;")}function Gt(e){if(!e)return"";const t=String(e),n=/^\d{4}-\d{2}-\d{2}$/.test(t)?new Date(`${t}T00:00:00+07:00`):new Date(t);return Number.isNaN(n.getTime())?"":fe(n)}function Ie(e){if(e?.image)return"";const t=e?.from||"#F7B3BE",n=e?.to||"#8A5A9A";return`background: linear-gradient(165deg, ${t} 0%, ${n} 100%);`}function lt(e,{photoClass:t,motifClass:n}={}){const a=e.cover?.image?`<img class="${t}" src="${l(e.cover.image)}" alt="" />`:"",r=e.cover?.image?"":`<span class="${n}">${l(e.cover?.motif||"")}</span>`;return`${_a(e)}${a}${r}`}function Xt(e,{filledMain:t=!1,maxSecondary:n=null}={}){const a=(e.tags||[]).map(i=>Dt(i)).filter(Boolean).map(i=>`<span class="chip${t?" chip--filled":""}">${l(i.name)}</span>`);let r=e.secondaryTags||[];n!=null&&(r=r.slice(0,n));const o=r.map(i=>`<span class="chip chip--outline">${l(i)}</span>`);if(!a.length&&!o.length)return"";const s=a.length?`<div class="chips__row chips__row--main">${a.join("")}</div>`:"",c=o.length?`<div class="chips__row chips__row--secondary">${o.join("")}</div>`:"";return`<div class="chips">${s}${c}</div>`}function _a(e){return e&&(e.isAdult||e.tags&&Fe(e))?'<span class="badge-18" title="เนื้อหาสำหรับผู้มีอายุ 18 ปีขึ้นไป">18+</span>':""}function We(){return Dn(new URLSearchParams(window.location.search).get("next"))}function A(e){const t=e==="home"?' aria-current="page"':"",n=e==="login"?' aria-current="page"':"",a=e==="bookshelf"?' aria-current="page"':"",r=y(),o=T()==="/login"||T()==="/signup"?"/":T(),s=w({name:"login",next:o==="/"?void 0:o});let c="";if(r){const u=e==="profile"?' aria-current="page"':"",p=e==="purchases"?' aria-current="page"':"";c=`
      <div class="account-menu">
        <button class="account-menu__btn" type="button" data-account-toggle aria-expanded="false" aria-haspopup="true" aria-controls="account-menu-list" aria-label="${l(r.displayName)}">
          <span class="avatar" aria-hidden="true">${Nt(r)}</span>
        </button>
        <div class="account-menu__list" id="account-menu-list" hidden>
          <div class="account-menu__profile">
            <span class="avatar avatar--menu" aria-hidden="true">${Nt(r)}</span>
            <p class="account-menu__profile-name">${l(r.displayName)}</p>
          </div>
          <a href="/profile" data-link${u}>${os}แก้ไขโปรไฟล์</a>
          <a href="/bookshelf" data-link${a}>${as}ชั้นหนังสือ</a>
          <a href="/purchases" data-link${p}>${ss}ประวัติการซื้อ</a>
          <button type="button" data-logout>${rs}ออกจากระบบ</button>
        </div>
      </div>
    `}else c=`
      <a class="header-link" href="${s}" data-link${n}>${is}เข้าสู่ระบบ</a>
    `;const i=e==="search"&&new URLSearchParams(window.location.search).get("q")||"",d=e==="search";return`
    <a class="skip-link" href="#main">ข้ามไปเนื้อหา</a>
    <header class="site-header">
      <div class="site-header__inner">
        <a class="brand" href="/" data-link>
          <span class="brand__mark">บ</span>
          <span class="brand__name">
            <span class="brand__name-full">${l(g.headerName)}</span>
            <span class="brand__name-short">${l(g.shortName)}</span>
          </span>
        </a>
        <form class="header-search${d?" is-open":""}" action="/search" method="get" role="search" data-search-form>
          <button class="header-search__toggle" type="button" data-search-toggle aria-expanded="${d?"true":"false"}" aria-label="${d?"ปิดช่องค้นหา":"เปิดช่องค้นหา"}">${bn}</button>
          <input class="header-search__field" id="header-search-q" type="search" name="q" value="${l(i)}" placeholder="ค้นหานิยาย นามปากกา หรือแท็ก" autocomplete="off" aria-label="ค้นหานิยาย นามปากกา หรือแท็ก">
          <button class="header-search__go" type="submit" aria-label="ค้นหา">${bn}</button>
        </form>
        <nav class="header-nav" aria-label="เมนูหลัก">
          <a class="header-nav-home" href="/" data-link${t}>${ns}หน้าแรก</a>
          ${Xi()}
          ${c}
        </nav>
      </div>
    </header>
  `}function N(){return`
    <footer class="site-footer">
      <div class="site-footer__inner">
        <p>© ต้นแบบเว็บบ้านนิยายของนามปากกา ${l(g.penNames.join(" และ "))} — ต้นแบบทดลองใช้งาน</p>
        <p>เนื้อหาในหน้านี้เป็นข้อความตัวอย่างทั้งหมด ยังไม่เปิดขายและยังไม่จดโดเมน</p>
        <p class="footer-links"><a href="/terms" data-link>ข้อกำหนดการใช้งาน</a> · <a href="/privacy" data-link>นโยบายความเป็นส่วนตัว</a> · <a href="/admin" data-link>หลังบ้านนักเขียน (ต้นแบบ)</a></p>
      </div>
    </footer>
  `}function Aa(e){return`
    <a class="novel-card" href="${w({name:"novel",id:e.id})}" data-link data-novel-id="${l(e.id)}">
      <div class="novel-card__cover" style="${Ie(e.cover)}" aria-hidden="true">
        ${lt(e,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
      </div>
      <div class="novel-card__body">
        <h3 class="novel-card__title">${l(e.title)}</h3>
        <p class="novel-card__author">${l(e.author)}</p>
        ${Xt(e,{maxSecondary:2})}
        <p class="novel-card__teaser">${l(e.teaser)}</p>
      </div>
    </a>
  `}function ps(e){const t=Ln(e),n=t?"อยู่ในชั้นหนังสือแล้ว":"เพิ่มเข้าชั้น";return`
    <button class="follow-btn${t?" is-following":""}" type="button" data-follow="${l(e)}" aria-pressed="${t}">
      ${t?Sa:wa}
      <span data-follow-label>${n}</span>
    </button>
  `}function dt(){return'<p class="proto-note">ระบบสมาชิกนี้เป็นต้นแบบ ข้อมูลถูกเก็บเฉพาะในเบราว์เซอร์นี้ ยังไม่มีการสร้างบัญชีจริงบนเซิร์ฟเวอร์</p>'}function f(e){return`<p class="field-error" data-error-for="${e}" hidden></p>`}function Na(e){return`
    <div class="auth-divider"><span>หรือ</span></div>
    <button class="btn btn-google" type="button" data-google-placeholder>
      ${us}
      ${e}
    </button>
    <p class="form-hint" data-google-message hidden>การเข้าสู่ระบบด้วย Google จะเปิดใช้ในเวอร์ชันถัดไป นี่เป็นเพียงตัวอย่างปุ่ม</p>
  `}function Qt({titleId:e}={}){const t=C().signup,n=t.enabled&&t.coins?`<p class="auth-promo__pill-wrap"><span class="auth-promo__pill">รับทันที ${t.coins} เหรียญ</span></p>`:"";return`
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
    </div>`}function xa({next:e,compact:t=!1}={}){const n=w({name:"signup",next:e&&e!=="/"?e:void 0});return`
    ${t?"":dt()}
    ${t?"":`<p class="demo-author-note">บัญชีนักเขียนตัวอย่างสำหรับเข้าหลังบ้าน: อีเมล <strong>${l(G.email)}</strong> รหัสผ่าน <strong>${l(G.password)}</strong></p>`}
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
    ${Na("เข้าสู่ระบบด้วย Google")}
    <p class="auth-switch">ยังไม่มีบัญชี? <a href="${n}" data-link>สมัครสมาชิก</a></p>
  `}function le(e){return String(e||"").trim().toLowerCase()}function ms(e){const t=le(e);return t?be().filter(n=>le(n.title).includes(t)||le(n.author).includes(t)||(n.tags||[]).some(o=>{const s=Dt(o);return le(o).includes(t)||s&&le(s.name).includes(t)})?!0:(n.secondaryTags||[]).some(o=>le(o).includes(t))):[]}function fs(){_("light");const t=(new URLSearchParams(window.location.search).get("q")||"").trim();document.title=t?`ค้นหา “${t}” — ${g.shortName}`:`ค้นหา — ${g.shortName}`;const n=ms(t);let a;t?n.length?a=`<div class="bookshelf-grid search-results">${n.map(Aa).join("")}</div>`:a=`<p class="empty-state">ไม่พบนิยายที่ตรงกับ “${l(t)}”</p>`:a='<p class="empty-state">กรอกคำค้นเพื่อหานิยายจากชื่อเรื่อง นามปากกา หรือแท็ก</p>';const r=t?`ผลการค้นหา “${l(t)}” · พบ ${n.length} เรื่อง`:"ค้นหานิยาย";return`
    ${A("search")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ผลการค้นหา</h1>
        <p class="muted-note">${r}</p>
        ${a}
      </div>
    </main>
    ${N()}
  `}function hs(){document.title=g.name,_("light");const e=R[0],t=R.map((o,s)=>{const c=s===0;return`
      <button
        class="home-tab${c?" is-active":""}"
        type="button"
        role="tab"
        id="home-tab-${o.id}"
        data-home-tab="${l(o.id)}"
        aria-selected="${c}"
        aria-controls="home-catalog"
      >${l(o.name)}${_a(o)}</button>`}).join(""),n=`
      <a class="home-tab home-tab--page" href="/events" data-link>กิจกรรม</a>
      <a class="home-tab home-tab--page" href="/follow" data-link>ติดตามนักเขียน</a>`,r=!y()?'<div class="home-welcome-login"><button type="button" class="btn btn-primary btn-login-prompt home-welcome-login__btn">เข้าสู่ระบบ</button></div>':"";return`
    ${A("home")}
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
      ${fi()}
      <div class="container">
        <hr class="home-divider" />
        <div class="home-tabs">
          <div class="home-tabs__cats" role="tablist" aria-label="หมวดนิยาย">${t}</div>
          ${n}
        </div>
        <section class="home-catalog" id="home-catalog" data-home-catalog role="tabpanel" aria-labelledby="home-tab-${e.id}">
          ${Ea(e)}
        </section>
      </div>
    </main>
    ${N()}
  `}function Ea(e){const t=Qa(e.id);return t.length?`<div class="home-catalog-grid">${t.map(Aa).join("")}</div>`:'<p class="muted-note">ยังไม่มีนิยายในหมวดนี้</p>'}function bs(){const e=document.querySelector("[data-home-catalog]");e&&document.querySelectorAll("[data-home-tab]").forEach(t=>{t.addEventListener("click",()=>{const n=R.find(a=>a.id===t.dataset.homeTab);n&&(document.querySelectorAll("[data-home-tab]").forEach(a=>{const r=a===t;a.classList.toggle("is-active",r),a.setAttribute("aria-selected",String(r))}),e.setAttribute("aria-labelledby",`home-tab-${n.id}`),e.innerHTML=Ea(n),O(e))})})}function en(e){return`<img class="gift-art" src="${jo(e)}" alt="" width="256" height="256" />`}function Ta(e,t){const n=t?` data-chapter-id="${l(t)}"`:"",a=Ze.map(r=>{const o=r.coins==null?"กำหนดเอง":`${r.coins} เหรียญ`,s=r.coins==null?'<label class="donate-custom"><span>จำนวนเหรียญ</span><input class="donate-custom__input" type="number" min="1" step="1" inputmode="numeric" name="customAmount" placeholder="เช่น 8" aria-label="จำนวนเหรียญที่ต้องการโดเนท"></label>':"";return`
      <button class="donate-gift" type="button" data-donate-gift="${l(r.id)}">
        ${en(r.id)}
        <span class="donate-gift__name">${l(r.name)}</span>
        <span class="donate-gift__price">${o}</span>
        ${s}
      </button>`}).join("");return`
    <section class="donate-box" data-donate-box data-novel-id="${l(e)}"${n} aria-label="โดเนท">
      <div class="donate-box__row">${a}</div>
      <p class="field-error donate-box__error" data-donate-error hidden></p>
    </section>`}function gs(e){const t=b(e);if(!t)return tn();document.title=`${t.title} — ${g.shortName}`,_("light");const n=qt(t).map(a=>{const r=w({name:"reader",novelId:t.id,chapterId:a.id}),o=ue(t,a),s=ee(a);let c="",i="";return s<=0?c='<span class="chapter-status chapter-status--free">อ่านฟรี</span>':o?c='<span class="chapter-status chapter-status--unlocked">ปลดล็อกแล้ว</span>':(c=`<span class="chapter-status chapter-status--locked">${ka}${ds} ${s} เหรียญ</span>`,i=` data-locked-chapter data-chapter-id="${l(a.id)}"`),`
        <a class="chapter-item" href="${r}" data-link data-novel-id="${l(t.id)}"${i}>
          <div>
            <p class="chapter-item__title">ตอนที่ ${l(a.id)} ${l(a.title)}</p>
            <p class="chapter-item__sub">เผยแพร่ ${Gt(a.publishedAt)}</p>
          </div>
          ${c}
        </a>
      `}).join("");return`
    ${A()}
    <main id="main" class="page-block">
      <div class="container">
        <a class="back-link" href="/" data-link>← กลับหน้าแรก</a>
        <div class="novel-hero">
          <div class="cover-lg" style="${Ie(t.cover)}">
            ${lt(t,{photoClass:"cover-lg__photo",motifClass:"cover-lg__motif"})}
          </div>
          <div class="novel-meta">
            <h1>${l(t.title)}</h1>
            <p class="novel-meta__author">โดย ${l(t.author)}</p>
            ${Xt(t,{filledMain:!0})}
            <div class="novel-meta__actions">
              ${ps(t.id)}
            </div>
            <p class="synopsis">${Xs(t.synopsis)}</p>
          </div>
        </div>
        ${Ta(t.id)}
        <section class="chapter-list" aria-labelledby="toc-heading">
          <h2 id="toc-heading">สารบัญตอน</h2>
          ${n}
        </section>
      </div>
    </main>
    ${N()}
  `}function ys(e,t){const n=b(e),a=he(n,t);if(!n||!a||!ge(a))return tn();document.title=`${a.title} — ${n.title}`;const r=da(),o=_o();_(r);const s=qt(n),c=s.findIndex(W=>W.id===a.id),i=s[c-1],d=s[c+1],u=w({name:"novel",id:n.id}),p=i?w({name:"reader",novelId:n.id,chapterId:i.id}):"#",m=d?w({name:"reader",novelId:n.id,chapterId:d.id}):"#",k=ts.map(W=>`<button class="tool-btn${W===o?" is-active":""}" type="button" data-font-size="${W}" aria-pressed="${W===o}">${{16:"เล็ก",18:"กลาง",22:"ใหญ่"}[W]}</button>`).join(""),$=ue(n,a),S=ee(a),M=y(),qe=w({name:"login",next:w({name:"reader",novelId:n.id,chapterId:a.id})});let Z="";if($)Z=`<article class="chapter-body">${l(a.content)}</article>`;else{const W=M?`<button class="btn btn-primary" type="button" data-locked-chapter data-novel-id="${l(n.id)}" data-chapter-id="${l(a.id)}">ปลดล็อกด้วย ${S} เหรียญ</button>
         <p class="muted-note">ยอดคงเหลือ ${me()} เหรียญ (${l(pt(B()))})</p>`:`<a class="btn btn-primary btn-login-prompt" href="${qe}" data-link>เข้าสู่ระบบเพื่อปลดล็อก</a>`;Z=`
      <div class="lock-panel">
        <div class="lock-icon-lg">${ka}</div>
        <h2>ตอนนี้ถูกล็อกไว้</h2>
        ${W}
      </div>
    `}return`
    ${A()}
    <div class="reader-toolbar">
      <div class="reader-toolbar__inner">
        <div class="toolbar-group" role="group" aria-label="ขนาดตัวอักษร">
          ${k}
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
      ${Z}
      <nav class="reader-nav" aria-label="ตอนก่อนหน้าและตอนถัดไป">
        <a class="nav-btn" href="${p}" ${i?`data-link data-novel-id="${l(n.id)}"${ue(n,i)?"":` data-locked-chapter data-chapter-id="${l(i.id)}"`}`:'aria-disabled="true"'}>⬅️ ตอนก่อนหน้า</a>
        <a class="nav-btn" href="${m}" ${d?`data-link data-novel-id="${l(n.id)}"${ue(n,d)?"":` data-locked-chapter data-chapter-id="${l(d.id)}"`}`:'aria-disabled="true"'}>ตอนต่อไป ➡️</a>
      </nav>
      ${Ta(n.id,a.id)}
    </main>
    ${N()}
  `}function tn(){return document.title=`ไม่พบหน้า — ${g.shortName}`,_("light"),`
    ${A()}
    <main id="main" class="page-block">
      <div class="container not-found">
        <h1>ไม่พบหน้าที่ต้องการ</h1>
        <p class="muted-note">ลิงก์นี้อาจไม่ถูกต้องหรือนิยายตัวอย่างถูกลบแล้ว</p>
        <p><a class="back-link" href="/" data-link>กลับหน้าแรก</a></p>
      </div>
    </main>
    ${N()}
  `}function _(e){document.body.classList.toggle("reader-night",e==="night")}function vs(){if(y())return document.title=`เข้าสู่ระบบ — ${g.shortName}`,"";document.title=`เข้าสู่ระบบ — ${g.shortName}`,_("light");const t=We();return`
    ${A("login")}
    <main id="main" class="page-block">
      <div class="auth-card">
        ${Qt()}
        <h1>เข้าสู่ระบบ</h1>
        ${new URLSearchParams(window.location.search).get("reset")==="1"?'<p class="form-success">ตั้งรหัสผ่านใหม่แล้ว กรุณาเข้าสู่ระบบด้วยรหัสผ่านใหม่</p>':""}
        ${xa({next:t})}
      </div>
    </main>
    ${N()}
  `}function $s(){if(y())return document.title=`สมัครสมาชิก — ${g.shortName}`,"";document.title=`สมัครสมาชิก — ${g.shortName}`,_("light");const e=We(),t=w({name:"login",next:e==="/"?void 0:e});return`
    ${A("signup")}
    <main id="main" class="page-block">
      <div class="auth-card">
        ${Qt()}
        <h1>สมัครสมาชิก</h1>
        ${dt()}
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
        ${Na("สมัครด้วย Google")}
        <p class="auth-switch">มีบัญชีอยู่แล้ว? <a href="${t}" data-link>เข้าสู่ระบบ</a></p>
      </div>
    </main>
    ${N()}
  `}function ks(){const e=y();if(!e)return document.title=`ชั้นหนังสือของฉัน — ${g.shortName}`,"";document.title=`ชั้นหนังสือของฉัน — ${g.shortName}`,_("light");const t=Nr();let n="";return t.length?n=`<div class="bookshelf-grid">${t.map(a=>ws(a)).join("")}</div>`:n='<p class="empty-state">ยังไม่มีเรื่องในชั้นหนังสือ ลองกดเพิ่มเข้าชั้นจากหน้านิยายได้เลย</p>',`
    ${A("bookshelf")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ชั้นหนังสือของฉัน</h1>
        <p class="muted-note">สวัสดีคุณ ${l(e.displayName)} — เรื่องที่คุณเพิ่มเข้าชั้นจะถูกรวบรวมที่นี่</p>
        ${n}
      </div>
    </main>
    ${N()}
  `}function ws(e){const t=b(e.novelId);if(!t)return"";const n=w({name:"novel",id:t.id}),a=qt(t),r=a[0];let o=r?`<p class="bookshelf-continue">ยังไม่เริ่มอ่าน · <a href="${w({name:"reader",novelId:t.id,chapterId:r.id})}" data-link data-novel-id="${l(t.id)}">เริ่มอ่านตอนแรก</a></p>`:'<p class="bookshelf-continue">ยังไม่มีตอนที่เผยแพร่</p>';if(e.progress){const s=a.find(c=>c.id===e.progress.chapterId)||r;s&&(o=`<p class="bookshelf-continue">อ่านต่อ · <a href="${w({name:"reader",novelId:t.id,chapterId:s.id})}" data-link data-novel-id="${l(t.id)}">ตอนที่ ${l(s.id)} ${l(s.title)}</a></p>`)}return`
    <article class="novel-card novel-card--shelf">
      <a class="novel-card__link" href="${n}" data-link data-novel-id="${l(t.id)}">
        <div class="novel-card__cover" style="${Ie(t.cover)}" aria-hidden="true">
          ${lt(t,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
        </div>
        <div class="novel-card__body">
          <h3 class="novel-card__title">${l(t.title)}</h3>
          <p class="novel-card__author">${l(t.author)}</p>
          ${Xt(t,{maxSecondary:2})}
          <p class="novel-card__teaser">${l(t.teaser)}</p>
        </div>
      </a>
      ${o}
    </article>
  `}function Nt(e,t=""){return e?.avatar?`<img${t?` class="${t}"`:""} src="${l(e.avatar)}" alt="">`:l((e?.displayName||"").trim().charAt(0).toUpperCase()||"น")}function Ss(){const e=y();if(!e)return document.title=`แก้ไขโปรไฟล์ — ${g.shortName}`,"";document.title=`แก้ไขโปรไฟล์ — ${g.shortName}`,_("light");const t=e.avatar?"เปลี่ยนรูปโปรไฟล์":"อัปโหลดรูปโปรไฟล์";let n=!1;try{n=sessionStorage.getItem("banNiyai_profileSaved")==="1",n&&sessionStorage.removeItem("banNiyai_profileSaved")}catch{}return`
    ${A("profile")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">แก้ไขโปรไฟล์</h1>
        <form class="profile-form" data-profile-form>
          <div class="profile-form__avatar">
            <span class="avatar avatar--profile" data-avatar-preview aria-hidden="true">${Nt(e)}</span>
            <div class="profile-form__avatar-actions">
              <button class="btn" type="button" data-avatar-pick>${t}</button>
              <input type="file" accept="image/*" hidden data-avatar-file />
              <p class="muted-note">ไฟล์ภาพไม่เกิน 400 KB</p>
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
    ${N()}
  `}function _s(){const e=document.querySelector("[data-profile-form]");if(!e)return;const t=e.querySelector("[data-avatar-file]"),n=e.querySelector("[data-avatar-preview]"),a=e.querySelector("[data-avatar-pick]");let r;const o=(c,i)=>{const d=e.querySelector(`[data-error-for="${c}"]`);d&&(i?(d.hidden=!1,d.textContent=i):(d.hidden=!0,d.textContent=""))},s=()=>{e.querySelectorAll("[data-error-for]").forEach(c=>{c.hidden=!0,c.textContent=""})};a?.addEventListener("click",()=>t?.click()),t?.addEventListener("change",()=>{const c=t.files?.[0];if(o("avatar",""),!c)return;if(!c.type.startsWith("image/")){o("avatar","กรุณาเลือกไฟล์ภาพ"),t.value="";return}if(c.size>400*1024){o("avatar","ไฟล์ภาพต้องไม่เกิน 400 KB"),t.value="";return}const i=new FileReader;i.onload=()=>{r=String(i.result||""),n&&(n.innerHTML=`<img src="${r}" alt="">`),a&&(a.textContent="เปลี่ยนรูปโปรไฟล์")},i.readAsDataURL(c)}),e.addEventListener("submit",c=>{c.preventDefault(),s();const i=e.querySelector("[data-profile-saved]");i&&(i.hidden=!0);const u={displayName:new FormData(e).get("displayName")};r!==void 0&&(u.avatar=r);const p=$r(u);if(!p.ok){Object.entries(p.errors||{}).forEach(([m,k])=>o(m,k));return}try{sessionStorage.setItem("banNiyai_profileSaved","1")}catch{}h("/profile",{replace:!0})})}function Da(e){return`<p class="empty-state">${l(e)}</p>`}function As(e){const t=e.filter(a=>a.type==="topup");return t.length?`
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
      <td data-label="วันที่">${U(Gt(a.createdAt))}</td>
      <td data-label="แพ็ก">${l(r)}</td>
      <td class="purchase-table__num" data-label="เหรียญที่ได้รับ">${l(o)}</td>
    </tr>`}).join("")}</tbody>
      </table>
    </div>
  `:Da("ยังไม่มีรายการเติมเหรียญ")}function Ns(e){const t=e.filter(a=>a.type==="unlock");return t.length?`
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
        <tbody>${t.map(a=>{const r=b(a.novelId),o=r?he(r,a.chapterId):null,s=r?.title||"นิยายที่ถูกลบแล้ว",c=o?`ตอนที่ ${o.id} ${o.title}`:a.chapterId?`ตอนที่ ${a.chapterId}`:"—",i=String(Math.abs(Number(a.coins)||0));return`<tr>
      <td data-label="วันที่">${U(Gt(a.createdAt))}</td>
      <td data-label="นิยาย">${l(s)}</td>
      <td data-label="ตอน">${l(c)}</td>
      <td class="purchase-table__num" data-label="เหรียญ">${l(i)}</td>
    </tr>`}).join("")}</tbody>
      </table>
    </div>
  `:Da("ยังไม่มีรายการปลดล็อกตอน")}function xs(){if(!y())return document.title=`ประวัติการซื้อ — ${g.shortName}`,"";document.title=`ประวัติการซื้อ — ${g.shortName}`,_("light");const t=ot();return`
    ${A("purchases")}
    <main id="main" class="page-block">
      <div class="container">
        <h1 class="page-title">ประวัติการซื้อ</h1>
        <section class="purchase-section">
          <h2>รายงานการเติมเหรียญ</h2>
          ${As(t)}
        </section>
        <section class="purchase-section">
          <h2>รายงานการปลดล็อกตอน</h2>
          ${Ns(t)}
        </section>
      </div>
    </main>
    ${N()}
  `}function Ia(){return'<p class="legal-draft-banner">เอกสารนี้เป็นร่างสำหรับต้นแบบเว็บ ยังไม่ได้ผ่านการตรวจสอบทางกฎหมาย และยังไม่มีผลใช้บังคับจริง</p>'}function Es(){return document.title=`ข้อกำหนดการใช้งาน (ร่าง) — ${g.shortName}`,_("light"),`
    ${A()}
    <main id="main" class="page-block">
      <div class="container legal-page">
        <h1>ข้อกำหนดการใช้งาน</h1>
        ${Ia()}
        <p>บ้านนิยายนี้เป็นบ้านหลังเล็กของนักเขียนนามปากกา ${l(g.penNames.join(" และ "))} เว็บนี้ยังอยู่ในขั้นต้นแบบทดลอง ไม่ใช่บริการที่เปิดให้ใช้จริง และยังไม่มีการรับชำระเงิน</p>
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
    ${N()}
  `}function Ts(){return document.title=`นโยบายความเป็นส่วนตัว (ร่าง) — ${g.shortName}`,_("light"),`
    ${A()}
    <main id="main" class="page-block">
      <div class="container legal-page">
        <h1>นโยบายความเป็นส่วนตัว</h1>
        ${Ia()}
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
    ${N()}
  `}function qa(e){e.querySelectorAll("[data-error-for]").forEach(t=>{t.hidden=!0,t.textContent=""})}function E(e,t){qa(e),Object.entries(t).forEach(([n,a])=>{const r=e.querySelector(`[data-error-for="${n}"]`);r&&(r.textContent=a,r.hidden=!1)})}function Ds(e){const t=document.querySelector(".modal-backdrop");t&&t.remove();const n=w({name:"login",next:e}),a=w({name:"signup",next:e}),r=document.createElement("div");r.className="modal-backdrop",r.setAttribute("role","dialog"),r.setAttribute("aria-modal","true"),r.setAttribute("aria-labelledby","login-prompt-title"),r.innerHTML=`
    <div class="modal">
      <h2 id="login-prompt-title">กรุณาเข้าสู่ระบบ</h2>
      <p>ต้องเข้าสู่ระบบก่อนจึงจะเพิ่มเรื่องเข้าชั้นหนังสือได้</p>
      <div class="modal__actions">
        <a class="btn btn-primary btn-login-prompt" href="${n}" data-link>เข้าสู่ระบบ</a>
        <a class="btn btn-ghost" href="${a}" data-link>สมัครสมาชิก</a>
        <button class="btn btn-ghost" type="button" data-modal-close>ปิด</button>
      </div>
    </div>
  `,document.body.appendChild(r),O(r),r.querySelector("[data-modal-close]").addEventListener("click",()=>r.remove()),r.addEventListener("click",o=>{o.target===r&&r.remove()})}function Is(){return document.title=`ลืมรหัสผ่าน — ${g.shortName}`,_("light"),`
    ${A("login")}
    <main id="main" class="page-block">
      <div class="auth-card">
        <h1>ลืมรหัสผ่าน</h1>
        ${dt()}
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
    ${N()}
  `}function qs(){document.title=`ตั้งรหัสผ่านใหม่ — ${g.shortName}`,_("light");const e=new URLSearchParams(window.location.search).get("token")||"",t=Dr(e);let n="";return t?n=`
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
    ${A("login")}
    <main id="main" class="page-block">
      <div class="auth-card">
        <h1>ตั้งรหัสผ่านใหม่</h1>
        ${dt()}
        ${n}
      </div>
    </main>
    ${N()}
  `}function Ls(){document.title=`หลังบ้านนักเขียน — ${g.shortName}`,_("light");const e=y();if(!mr(e))return`
      ${A("admin")}
      <main id="main" class="page-block">
        <div class="container admin-gate">
          <h1>หลังบ้านนักเขียน</h1>
          <p>หน้านี้สำหรับนักเขียนเท่านั้น ในต้นแบบใช้บัญชีนักเขียนตัวอย่างด้านล่าง</p>
          <p class="demo-author-note">อีเมล <strong>${l(G.email)}</strong><br />รหัสผ่าน <strong>${l(G.password)}</strong></p>
          <p><a class="btn btn-primary" href="${w({name:"login",next:"/admin"})}" data-link>${e?"บัญชีนี้ไม่ใช่นักเขียน — เข้าสู่ระบบด้วยบัญชีตัวอย่าง":"เข้าสู่ระบบด้วยบัญชีนักเขียนตัวอย่าง"}</a></p>
        </div>
      </main>
      ${N()}
    `;L(),Y();const t=new URLSearchParams(window.location.search).get("tab"),n=["promos","events","sales"].includes(t)?t:"studio",a=n==="promos"?Me():n==="events"?Ya():n==="sales"?Zi():Pi();return`
    ${A("admin")}
    <main id="main" class="page-block">
      <div class="container admin-page">
        <h1 class="page-title">หลังบ้านนักเขียน</h1>
        <nav class="admin-tabs" aria-label="ส่วนหลังบ้าน">
          <a href="/admin" data-link${n==="studio"?' aria-current="page"':""}>ระบบนักเขียน</a>
          <a href="/admin?tab=sales" data-link${n==="sales"?' aria-current="page"':""}>ยอดขายและโดเนท</a>
          <a href="/admin?tab=promos" data-link${n==="promos"?' aria-current="page"':""}>จัดโปรโมชัน</a>
          <a href="/admin?tab=events" data-link${n==="events"?' aria-current="page"':""}>กิจกรรม</a>
        </nav>
        ${a}
      </div>
    </main>
    ${N()}
  `}function Cs(e,{showHeading:t=!0,showSave:n=!0,idSuffix:a}={}){const r=a||e.id,o=R.map(u=>{const p=(e.tags||[]).includes(u.id);return`<button class="admin-chip${p?" is-on":""}" type="button" data-main-tag="${l(u.id)}" aria-pressed="${p}">${l(u.name)}</button>`}).join(""),s=(e.secondaryTags||[]).map(u=>`
        <span class="admin-tag" data-secondary-name="${l(u)}">
          ${l(u)}
          <button type="button" data-remove-tag="${l(u)}" aria-label="ลบแท็ก ${l(u)}">×</button>
        </span>`).join(""),c=ye().map(u=>{const p=(e.secondaryTags||[]).some(m=>m.toLowerCase()===u.toLowerCase());return`<button class="admin-chip admin-chip--ghost${p?" is-on":""}" type="button" data-suggest-tag="${l(u)}" aria-pressed="${p}">${l(u)}</button>`}).join(""),i=t?`<h2>${l(e.title)}</h2>
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
  `}function oe(e){return[...e.querySelectorAll("[data-secondary-name]")].map(t=>t.dataset.secondaryName)}function xt(e,t){const n=e.querySelector("[data-secondary-row]");if(!t.length){n.innerHTML='<span class="muted-note">ยังไม่มีแท็กรอง</span>';return}n.innerHTML=t.map(a=>`
        <span class="admin-tag" data-secondary-name="${l(a)}">
          ${l(a)}
          <button type="button" data-remove-tag="${l(a)}" aria-label="ลบแท็ก ${l(a)}">×</button>
        </span>`).join("")}function gn(e,t){const n=new Set(t.map(a=>a.toLowerCase()));e.querySelectorAll("[data-suggest-tag]").forEach(a=>{const r=n.has(a.dataset.suggestTag.toLowerCase());a.classList.toggle("is-on",r),a.setAttribute("aria-pressed",String(r))})}function yn(e,t){const n=_e(t);if(!n||R.some(r=>r.name===n))return;const a=oe(e);a.some(r=>r.toLowerCase()===n.toLowerCase())||(a.push(n),xt(e,a),It(n),Ps())}function Bs(e){return ye().map(t=>{const n=e.some(a=>a.toLowerCase()===t.toLowerCase());return`<button class="admin-chip admin-chip--ghost${n?" is-on":""}" type="button" data-suggest-tag="${l(t)}" aria-pressed="${n}">${l(t)}</button>`}).join("")}function Ps(){document.querySelectorAll("[data-admin-novel]").forEach(e=>{const t=e.querySelector("[data-suggest-row]");t&&(t.innerHTML=Bs(oe(e)))})}function Os(){document.querySelectorAll("[data-admin-novel]").forEach(e=>{e.addEventListener("click",a=>{const r=a.target.closest("[data-main-tag]");if(r&&e.contains(r)){r.classList.toggle("is-on"),r.setAttribute("aria-pressed",String(r.classList.contains("is-on")));return}const o=a.target.closest("[data-suggest-tag]");if(o&&e.contains(o)){const c=o.dataset.suggestTag,i=oe(e);if(i.some(d=>d.toLowerCase()===c.toLowerCase()))xt(e,i.filter(d=>d.toLowerCase()!==c.toLowerCase()));else{yn(e,c);return}gn(e,oe(e));return}const s=a.target.closest("[data-remove-tag]");if(s&&e.contains(s)){const c=s.dataset.removeTag,i=oe(e).filter(d=>d.toLowerCase()!==c.toLowerCase());xt(e,i),gn(e,i)}});const t=e.querySelector("[data-new-tag]");t&&t.addEventListener("keydown",a=>{a.key==="Enter"&&(a.preventDefault(),yn(e,t.value),t.value="")});const n=e.querySelector("[data-save-tags]");n&&n.addEventListener("click",()=>{const a=[...e.querySelectorAll("[data-main-tag].is-on")].map(s=>s.dataset.mainTag),r=er(e.dataset.adminNovel,{tags:a,secondaryTags:oe(e)}),o=e.querySelector("[data-save-status]");o&&(o.hidden=!1,r.ok?(o.textContent="บันทึกแท็กแล้ว",o.classList.remove("is-error")):(o.textContent=r.error||"บันทึกไม่สำเร็จ",o.classList.add("is-error")))})})}function Rs(e){if(!e)return"";const t=new Date(e);return Number.isNaN(t.getTime())?"":new Intl.DateTimeFormat("sv-SE",{timeZone:"Asia/Bangkok",year:"numeric",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit",hour12:!1}).format(t).replace(" ","T")}function Ms(e){if(!e)return"";const t=new Date(`${e}:00+07:00`);return Number.isNaN(t.getTime())?"":t.toISOString()}function Us(e){const t=Rs(e);if(!t)return{date:"",time:""};const[n,a=""]=t.split("T");return{date:n,time:a}}function nn(e,t){if(!e)return"";const n=String(t||"00:00").slice(0,5);return Ms(`${e}T${n}`)}function Q(e,t){return nn(e.get(`${t}Date`),e.get(`${t}Time`))}function La(e,t){const n=nn(e,t||"00:00");return n?an(new Date(n)):""}function Ca(e){if(!e)return"เลือกวันที่";const t=nn(e,"00:00");return t?`${Pa(new Date(t))} ${Fs(new Date(t))}`:"เลือกวันที่"}function Ba(e){if(!e)return"เลือกเวลา";const[t="",n=""]=String(e).split(":");return!t||!n?"เลือกเวลา":`${t}:${n} น.`}function te({id:e,name:t,value:n="",required:a=!1}){const{date:r,time:o}=Us(n),s=La(r,o),c=a?" required":"";return`
    <div class="datetime-field" data-datetime-field>
      <div class="datetime-field__inputs">
        <label class="datetime-field__sub" for="${l(e)}-date">วันที่
          <span class="datetime-field__control"${r?"":' data-empty="true"'}>
            <input id="${l(e)}-date" name="${l(t)}Date" type="date" lang="th"${c} value="${l(r)}" data-datetime-date />
            <span class="datetime-field__hint" data-date-hint aria-hidden="true">${l(Ca(r))}</span>
          </span>
        </label>
        <label class="datetime-field__sub" for="${l(e)}-time">เวลา
          <span class="datetime-field__control"${o?"":' data-empty="true"'}>
            <input id="${l(e)}-time" name="${l(t)}Time" type="time" lang="th"${c} value="${l(o)}" data-datetime-time />
            <span class="datetime-field__hint" data-time-hint aria-hidden="true">${l(Ba(o))}</span>
          </span>
        </label>
      </div>
      <p class="datetime-field__preview" data-datetime-preview${s?"":" hidden"}>${s?l(s):""}</p>
    </div>`}function ve(e=document){e.querySelectorAll("[data-datetime-field]").forEach(t=>{const n=t.querySelector("[data-datetime-date]"),a=t.querySelector("[data-datetime-time]"),r=t.querySelector("[data-datetime-preview]"),o=t.querySelector("[data-date-hint]"),s=t.querySelector("[data-time-hint]");if(!n||!r)return;const c=(d,u,p)=>{if(!d||!u)return;const m=d.closest(".datetime-field__control");u.textContent=p(d.value),m&&m.toggleAttribute("data-empty",!d.value)},i=()=>{const d=La(n.value,a?.value||"00:00");r.textContent=d,r.hidden=!d,c(n,o,Ca),c(a,s,Ba)};n.addEventListener("input",i),n.addEventListener("change",i),a?.addEventListener("input",i),a?.addEventListener("change",i),i()})}function Pa(e){return new Intl.DateTimeFormat("th-TH",{day:"numeric",month:"short",timeZone:"Asia/Bangkok"}).format(e)}function ut(e){const t=Number(new Intl.DateTimeFormat("en-CA",{timeZone:"Asia/Bangkok",year:"numeric"}).format(e).slice(0,4));return String((t+543)%100).padStart(2,"0")}function Fs(e){return ut(e)}function fe(e){return`${Pa(e)} ${ut(e)}`}function Oa(e,t=1,n=1){return new Date(`${e}-${String(t).padStart(2,"0")}-${String(n).padStart(2,"0")}T00:00:00+07:00`)}function Hs(e,t){const n=Oa(e,t);return Number.isNaN(n.getTime())?"":`${new Intl.DateTimeFormat("th-TH",{month:"short",timeZone:"Asia/Bangkok"}).format(n)} ${ut(n)}`}function js(e){const t=Oa(e,1);return Number.isNaN(t.getTime())?"":`ปี ${ut(t)}`}function Ks(e){return new Intl.DateTimeFormat("th-TH",{hour:"2-digit",minute:"2-digit",hour12:!1,timeZone:"Asia/Bangkok"}).format(e).replace(/\s*น\.?\s*$/u,"")}function an(e){return`${fe(e)} ${Ks(e)}`}function U(e){const t=String(e||"").trim();return t?`<span class="date-part" data-no-wbr>${l(t)}</span>`:""}function Ra(e,t){return`${U(fe(e))} ${U("ถึง")} ${U(fe(t))}`}function rn(e){if(!e?.startAt||!e?.endAt)return"";const t=new Date(e.startAt),n=new Date(e.endAt);return Number.isNaN(t.getTime())||Number.isNaN(n.getTime())?"":Ra(t,n)}function Ma(e){const t=new Date(e);return Number.isNaN(t.getTime())?"":U(fe(t))}function Ua(e,t){const n=new Date(e),a=new Date(t);return Number.isNaN(n.getTime())||Number.isNaN(a.getTime())?"":Ra(n,a)}const Vs="ม\\.ค\\.|ก\\.พ\\.|มี\\.ค\\.|เม\\.ย\\.|พ\\.ค\\.|มิ\\.ย\\.|ก\\.ค\\.|ส\\.ค\\.|ก\\.ย\\.|ต\\.ค\\.|พ\\.ย\\.|ธ\\.ค\\.",Ys=new RegExp(`(\\d{1,2}\\s*(?:${Vs})(?:\\s+\\d{2,4})?)|(พ\\.ศ\\.\\s*\\d{2,4})`,"g");function Js(e){const t=String(e||"");if(!t)return"";let n="",a=0;for(const r of t.matchAll(Ys))n+=l(t.slice(a,r.index)),n+=U(r[0]),a=r.index+r[0].length;return n+=l(t.slice(a)),n}function v(e){return`<p class="field-hint">${l(e)}</p>`}function Zs(e){const t=e.bonusType==="fixed"?`${e.bonusValue} เหรียญ`:`${e.bonusValue}%`;let n;e.packageIds==="all"?n="เติมทุกแพ็ก":n=`เติมแพ็ก ${(e.packageIds||[]).map(s=>{const c=Te.find(i=>i.id===s);return c?`${c.thb} บาท`:s}).join(" ")}`;const a=[l(`${n} รับเพิ่ม ${t}`)],r=Ua(e.startAt,e.endAt);return r&&a.push(r),e.firstTopUpOnly&&a.push(l("เฉพาะเติมครั้งแรก")),e.bonusExpiryDays&&a.push(l(`โบนัสใช้ได้ ${e.bonusExpiryDays} วัน`)),a.join(" · ")}function Ws(e){const t=[l(`${e.code} ให้ ${e.coins} เหรียญ`),l(`ใช้แล้ว ${e.usedBy.length}/${e.maxUses}`)];return e.expiresAt&&t.push(`${l("หมดอายุ")} ${Ma(e.expiresAt)}`),e.bonusExpiryDays&&t.push(l(`โบนัสใช้ได้ ${e.bonusExpiryDays} วัน`)),t.join(" · ")}function zs(e){return e.bonus?`${e.thb} บาท · เหรียญเพิ่มของแพ็กนี้ ${e.bonus}`:`${e.thb} บาท`}const Gs="input, textarea, script, style, code, pre, kbd, samp, [data-no-wbr], .thai-nowrap";function Fa(e){return String(e||"").split(/(\s+)/).map(t=>t?/^\s+$/.test(t)?t:`<span class="thai-nowrap">${l(t)}</span>`:"").join("")}function Xs(e){return String(e??"").split(/\r?\n/).map(t=>Qs(t)).join("<br>")}function Qs(e){return e?ei(e).map(t=>/^\s+$/.test(t)?t:`<span class="thai-nowrap">${l(t)}</span>`).join(""):""}function ei(e){const t=String(e??"");if(!t)return[];if(typeof Intl>"u"||!Intl.Segmenter)return t.split(/(\s+)/).filter(Boolean);const n=new Intl.Segmenter("th",{granularity:"word"}),a=[];for(const{segment:i}of n.segment(t))i&&a.push(i);const r=/^[(\[{«“‘"']+$/u,o=/^[\p{P}\p{S}]+$/u,s=[];for(const i of a){if(/^\s+$/.test(i)){s.push(i);continue}if(o.test(i)&&!r.test(i)&&s.length&&!/^\s+$/.test(s[s.length-1])){s[s.length-1]+=i;continue}s.push(i)}const c=[];for(let i=0;i<s.length;i+=1){const d=s[i];if(o.test(d)&&r.test(d)&&i+1<s.length&&!/^\s+$/.test(s[i+1])){s[i+1]=d+s[i+1];continue}c.push(d)}return c}const ti="หมายเหตุ: กดรับครบ 7 ดอก แลกได้ 7 เหรียญ (ให้แลกได้เฉพาะนักอ่านที่เก็บครบเท่านั้น)",ni="หมายเหตุ: เก็บกุญแจสีรุ้ง ครบ 7 ดอก แลกได้ 20 เหรียญ ตั้งแต่วันที่ 27 ธ.ค. ถึง 2 ม.ค. 70",ai="(หากเก็บไม่ครบทั้ง 7 วัน จะไม่สามารถสะสมไว้แลกรับเหรียญในกิจกรรมถัดไปได้)",ri=["แลกรับเหรียญ","20 เหรียญ","7 เหรียญ","7 ดอก","7 วัน","27 ธ.ค.","2 ม.ค. 70"];function mt(e){const t=String(e??""),n=ri.slice().sort((o,s)=>s.length-o.length),a=n.map(o=>o.replace(/[.*+?^${}()|[\]\\]/g,"\\$&"));return(a.length?t.split(new RegExp(`(${a.join("|")})`,"g")):[t]).flatMap(o=>o?n.includes(o)?[`<span class="thai-nowrap">${l(o)}</span>`]:o.split(/(\s+)/).filter(Boolean).map(s=>/^\s+$/.test(s)?s:`<span class="thai-nowrap">${l(s)}</span>`):[]).join("")}function vn(e){let t=e.parentElement;for(;t;){const n=getComputedStyle(t).display;if(n!=="inline"&&n!=="contents"&&n!=="inline-block")return t.clientWidth;t=t.parentElement}return 0}function $n(e){const t=e.style.maxWidth,n=e.style.whiteSpace,a=e.style.overflow;e.style.maxWidth="none",e.style.whiteSpace="nowrap",e.style.overflow="hidden";const r=e.scrollWidth;return e.style.maxWidth=t,e.style.whiteSpace=n,e.style.overflow=a,r}function oi(e){const t=e.textContent||"";if(!t||typeof Intl>"u"||!Intl.Segmenter)return!1;const n=new Intl.Segmenter("th",{granularity:"word"}),a=[];for(const{segment:u}of n.segment(t))u&&a.push(u);const r=/^[(\[{«“‘"'<<]+$/u,o=/^[\p{P}\p{S}]+$/u,s=[];for(const u of a){if(/^\s+$/.test(u)){s.push(u);continue}if(o.test(u)&&!r.test(u)&&s.length&&!/^\s+$/.test(s[s.length-1])){s[s.length-1]+=u;continue}s.push(u)}const c=[];for(let u=0;u<s.length;u+=1){const p=s[u];if(o.test(p)&&r.test(p)&&u+1<s.length&&!/^\s+$/.test(s[u+1])){s[u+1]=p+s[u+1];continue}c.push(p)}if(c.filter(u=>!/^\s+$/.test(u)).length<=1)return!1;const d=document.createDocumentFragment();for(const u of c){if(/^\s+$/.test(u)){d.appendChild(document.createTextNode(u));continue}const p=document.createElement("span");p.className="thai-nowrap",p.dataset.thaiSplit="1",p.textContent=u,d.appendChild(p)}return e.replaceWith(d),!0}function Ha(e){if(!e)return;const t=[...e.querySelectorAll(".thai-nowrap")];for(const n of t){if(!n.isConnected)continue;const a=vn(n);if(!(a>0))continue;if($n(n)<=a+1){n.classList.remove("thai-nowrap--overflow");continue}if(n.dataset.thaiSplit==="1"){n.classList.add("thai-nowrap--overflow");continue}oi(n)||n.classList.add("thai-nowrap--overflow")}e.querySelectorAll('.thai-nowrap[data-thai-split="1"]').forEach(n=>{const a=vn(n);if(!(a>0))return;const r=$n(n);n.classList.toggle("thai-nowrap--overflow",r>a+1)})}function Et(){if(Et.bound)return;Et.bound=!0;let e=0;window.addEventListener("resize",()=>{clearTimeout(e),e=window.setTimeout(()=>{const t=document.getElementById("app")||document.body;Ha(t)},100)})}function O(e=document.getElementById("app")||document.body){if(!e)return;Et();const t=document.createTreeWalker(e,NodeFilter.SHOW_TEXT,{acceptNode(r){const o=r.parentElement;return!o||o.closest(Gs)||!r.nodeValue||!/[\u0E00-\u0E7F]/.test(r.nodeValue)?NodeFilter.FILTER_REJECT:NodeFilter.FILTER_ACCEPT}}),n=[];for(;t.nextNode();)n.push(t.currentNode);for(const r of n){const o=r.nodeValue.split(/(\s+)/),s=document.createDocumentFragment();for(const c of o){if(!c)continue;if(/^\s+$/.test(c)){s.appendChild(document.createTextNode(c));continue}const i=document.createElement("span");i.className="thai-nowrap",i.textContent=c,s.appendChild(i)}r.parentNode.replaceChild(s,r)}const a=()=>Ha(e);a(),document.fonts?.ready&&document.fonts.ready.then(a)}const si='<svg class="key-icon__svg" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.5 14a5.5 5.5 0 1 1 5.13-7.5H22v3h-2v2h-2v2h-2.37A5.5 5.5 0 0 1 8.5 14Zm0-8a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"/></svg>',ii={silver:"/images/keys/key-silver.webp",rainbow:"/images/keys/key-rainbow.webp"};function ci(e,t){const n=ii[e];return n?`<span class="key-icon key-icon--img key-icon--${e}${t?" is-filled":""}"><img src="${n}" alt="" width="32" height="32" /></span>`:`<span class="key-icon key-icon--${e}${t?" is-filled":""}">${si}</span>`}function ft({keys:e=0,need:t=7,name:n="กุญแจเงิน",style:a="silver"}={}){const r=Math.max(1,Number(t)||7),o=Math.max(0,Number(e)||0),s=Math.min(o,r),c=["rainbow","gold","rose"].includes(a)?a:"silver",i=Array.from({length:r},(d,u)=>ci(c,u<s)).join("");return`
    <p class="key-progress" aria-label="${l(n)} ${o}/${r}">
      <span class="key-row">${i}</span>
      <span class="key-progress__count">${l(n)} ${o}/${r}</span>
    </p>
  `}function pt(e){return`เหรียญ ${e.purchased} / โบนัส ${e.bonus}`}function kn(e){return e?String(e):""}function li(){const e=C(),t=e.signup,n=e.checkin,a=e.firstTopUp;return`
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
              ${v("จำนวนที่ให้เมื่อสมัครสำเร็จ")}
              <input id="base-signup-coins" name="coins" type="number" min="1" step="1" required value="${l(String(t.coins))}" />
              ${f("coins")}
            </div>
            <div class="field">
              <label for="base-signup-expiry">อายุเหรียญโบนัส (วัน)</label>
              ${v("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
              <input id="base-signup-expiry" name="bonusExpiryDays" type="number" min="1" step="1" placeholder="ไม่บังคับ" value="${l(kn(t.bonusExpiryDays))}" />
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
              ${v("สมาชิกรับกุญแจเงินได้วันละครั้งเมื่อเช็คอิน ช่วงโปรแจกกุญแจจะได้กุญแจพิเศษแทน")}
              <input id="base-checkin-keys-day" name="keysPerDay" type="number" min="1" step="1" required value="${l(String(n.keysPerDay))}" />
              ${f("keysPerDay")}
            </div>
            <div class="field">
              <label for="base-checkin-keys-need">จำนวนกุญแจที่ต้องครบก่อนแลก</label>
              ${v("ต้องมีกุญแจเงินครบจำนวนนี้จึงจะแลกเหรียญได้")}
              <input id="base-checkin-keys-need" name="keysRequired" type="number" min="1" step="1" required value="${l(String(n.keysRequired||n.keysPerCoin))}" />
              ${f("keysRequired")}
            </div>
            <div class="field">
              <label for="base-checkin-coins">จำนวนเหรียญที่ได้เมื่อแลก</label>
              ${v("ครบจำนวนกุญแจข้างต้นแล้วจึงแลกได้เหรียญโบนัสตามจำนวนนี้")}
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
              ${v("เช่น 10 หมายถึงเพิ่ม 10% ของจำนวนที่จ่าย")}
              <input id="base-first-value" name="bonusValue" type="number" min="0" max="100" step="1" required value="${l(String(a.bonusValue))}" />
              ${f("bonusValue")}
            </div>
            <div class="field">
              <label for="base-first-expiry">อายุเหรียญโบนัส (วัน)</label>
              ${v("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
              <input id="base-first-expiry" name="bonusExpiryDays" type="number" min="1" step="1" placeholder="ไม่บังคับ" value="${l(kn(a.bonusExpiryDays))}" />
            </div>
            <div class="admin-save-row">
              <button class="btn btn-primary" type="submit">บันทึก</button>
              <button class="btn btn-ghost" type="button" data-base-toggle="firstTopUp" data-enabled="${a.enabled?"1":"0"}">${a.enabled?"ปิดโปร":"เปิดโปร"}</button>
            </div>
          </form>
        </article>
      </div>
    </section>
  `}function di(e=""){const t=e?Mt(e):null;return`
    <section class="redeem-admin-section">
      <h2 class="admin-section-title">รหัสแลกเหรียญ</h2>
      <div class="promo-layout">
        <div>${ae().map(a=>{const r=a.usedBy.length,o=a.expiresAt&&new Date(a.expiresAt)<=new Date,s=a.enabled?o?"หมดอายุ":r>=a.maxUses?"ใช้ครบแล้ว":"กำลังใช้":"ปิดอยู่",c=a.enabled&&!o&&r<a.maxUses;return`
        <article class="promo-card" data-code-id="${l(a.id)}">
          <div>
            <h3>${l(a.code)}</h3>
            <p class="promo-card__summary">${Ws(a)}</p>
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
              ${v("รหัสที่ผู้อ่านกรอกเพื่อรับเหรียญ เช่น HOUSE10")}
              <input id="code-value" name="code" type="text" required minlength="3" value="${t?l(t.code):""}" placeholder="เช่น HOUSE10" />
              ${f("code")}
            </div>
            <div class="field-row">
              <div class="field">
                <label for="code-coins">จำนวนเหรียญ</label>
                ${v("เหรียญโบนัสที่ได้รับเมื่อแลกสำเร็จ")}
                <input id="code-coins" name="coins" type="number" min="1" step="1" required value="${t?l(String(t.coins)):"10"}" />
                ${f("coins")}
              </div>
              <div class="field">
                <label for="code-max">ใช้ได้กี่ครั้ง</label>
                ${v("จำนวนครั้งรวมของรหัสนี้")}
                <input id="code-max" name="maxUses" type="number" min="1" step="1" required value="${t?l(String(t.maxUses)):"100"}" />
                ${f("maxUses")}
              </div>
            </div>
            <div class="field">
              <label for="code-expires">วันหมดอายุของรหัส</label>
              ${v("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
              ${te({id:"code-expires",name:"expiresAt",value:t&&t.expiresAt?t.expiresAt:""})}
              ${f("expiresAt")}
            </div>
            <div class="field">
              <label for="code-expiry-days">อายุเหรียญโบนัสหลังแลก (วัน)</label>
              ${v("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
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
  `}function ui(e){const t=Ua(e.startAt,e.endAt),n=`${e.name} · ${e.keyName} ครบ ${e.keysRequired} อัน แลกได้ ${e.coins} เหรียญ`;return`${l(n)}${t?` · ${t}`:""}`}function pi(e=""){const t=e?Ut(e):null,n=V().map(r=>{const o=Ft(r),s=r.enabled?o?"กำลังใช้":"นอกช่วงเวลา":"ปิดอยู่";return`
        <article class="promo-card" data-key-promo-id="${l(r.id)}">
          <div>
            <h3>${l(r.name)}</h3>
            <p class="promo-card__summary">${ui(r)}</p>
            <p class="promo-status${o&&r.enabled?" is-on":""}">${l(s)}</p>
          </div>
          <div class="promo-card__actions">
            <button type="button" class="btn btn-ghost" data-key-promo-edit="${l(r.id)}">แก้ไข</button>
            <button type="button" class="btn btn-ghost" data-key-promo-toggle="${l(r.id)}" data-enabled="${r.enabled?"1":"0"}">${r.enabled?"ปิดโปร":"เปิดโปร"}</button>
            <button type="button" class="btn btn-ghost" data-key-promo-delete="${l(r.id)}">ลบ</button>
          </div>
        </article>
      `}).join("")||'<p class="empty-state">ยังไม่มีโปรแจกกุญแจ</p>',a=Jn.map(r=>`<option value="${l(r.id)}"${(t?t.keyStyle:"rainbow")===r.id?" selected":""}>${l(r.name)}</option>`).join("");return`
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
              ${v("เช่น Happy new year")}
              <input id="key-promo-name" name="name" type="text" required value="${t?l(t.name):""}" />
              ${f("name")}
            </div>
            <div class="field-row">
              <div class="field">
                <label for="key-promo-keyname">ชื่อกุญแจพิเศษ</label>
                ${v("เช่น กุญแจสีรุ้ง")}
                <input id="key-promo-keyname" name="keyName" type="text" required value="${t?l(t.keyName):"กุญแจสีรุ้ง"}" />
                ${f("keyName")}
              </div>
              <div class="field">
                <label for="key-promo-style">รูปแบบกุญแจ</label>
                ${v("ไอคอนที่แสดงให้ผู้อ่านเห็น")}
                <select id="key-promo-style" name="keyStyle">${a}</select>
              </div>
            </div>
            <div class="field-row">
              <div class="field">
                <label for="key-promo-required">กุญแจที่ต้องสะสม</label>
                ${v("ครบจำนวนนี้จึงแลกได้")}
                <input id="key-promo-required" name="keysRequired" type="number" min="1" step="1" required value="${t?l(String(t.keysRequired)):"7"}" />
                ${f("keysRequired")}
              </div>
              <div class="field">
                <label for="key-promo-coins">เหรียญที่ได้เมื่อแลก</label>
                ${v("แลกได้ครั้งเดียวต่อสมาชิก")}
                <input id="key-promo-coins" name="coins" type="number" min="1" step="1" required value="${t?l(String(t.coins)):"5"}" />
                ${f("coins")}
              </div>
            </div>
            <div class="field-row">
              <div class="field">
                <label for="key-promo-start">วันเริ่มต้น</label>
                ${v("นับกุญแจเฉพาะในช่วงนี้")}
                ${te({id:"key-promo-start",name:"startAt",value:t?t.startAt:"",required:!0})}
                ${f("startAt")}
              </div>
              <div class="field">
                <label for="key-promo-end">วันสิ้นสุด</label>
                ${v("เมื่อหมดเขต กุญแจที่ยังไม่แลกจะเป็นกุญแจเงิน")}
                ${te({id:"key-promo-end",name:"endAt",value:t?t.endAt:"",required:!0})}
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
  `}function Me(e="",t="",n=""){const a=e?Ot(e):null,r=ce().map(i=>{const d=Fn(i),u=i.enabled?d?"กำลังใช้":"นอกช่วงเวลา":"ปิดอยู่";return`
        <article class="promo-card" data-promo-id="${l(i.id)}">
          <div>
            <h3>${l(i.name)}</h3>
            <p class="promo-card__summary">${Zs(i)}</p>
            <p class="promo-status${d&&i.enabled?" is-on":""}">${l(u)}</p>
          </div>
          <div class="promo-card__actions">
            <button type="button" class="btn btn-ghost" data-promo-edit="${l(i.id)}">แก้ไข</button>
            <button type="button" class="btn btn-ghost" data-promo-toggle="${l(i.id)}" data-enabled="${i.enabled?"1":"0"}">${i.enabled?"ปิดโปร":"เปิดโปร"}</button>
            <button type="button" class="btn btn-ghost" data-promo-delete="${l(i.id)}">ลบ</button>
          </div>
        </article>
      `}).join("")||'<p class="empty-state">ยังไม่มีโปรโมชัน</p>',o=a&&a.packageIds!=="all"?a.packageIds:[],s=!a||a.packageIds==="all",c=Te.map(i=>{const d=s||o.includes(i.id);return`<label class="check-label"><input type="checkbox" name="packageIds" value="${l(i.id)}" ${d?"checked":""} /> ${l(zs(i))}</label>`}).join("");return`
    <p class="proto-note">ตั้งโปรพื้นฐาน โปรแจกกุญแจ โปรตามเทศกาล และรหัสแลกเหรียญได้ที่หน้านี้</p>
    ${li()}
    ${pi(n)}
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
            ${v("ชื่อที่แสดงให้ผู้อ่านเห็น")}
            <input id="promo-name" name="name" type="text" required value="${a?l(a.name):""}" />
            ${f("name")}
          </div>
          <fieldset class="field field--packs">
            <legend>ใช้กับแพ็กไหน</legend>
            ${v("เลือกได้ทุกแพ็ก หรือเฉพาะบางแพ็ก")}
            <label class="check-label"><input type="checkbox" name="allPackages" data-all-packages ${s?"checked":""} /> ทุกแพ็ก</label>
            <div class="promo-pack-options" data-pack-options>${c}</div>
            ${f("packageIds")}
          </fieldset>
          <div class="field-row">
            <div class="field">
              <label for="promo-type">ประเภทโบนัส</label>
              ${v("คิดจากจำนวนที่จ่าย หรือให้เป็นจำนวนเหรียญคงที่")}
              <select id="promo-type" name="bonusType">
                <option value="percent"${!a||a.bonusType==="percent"?" selected":""}>เปอร์เซ็นต์ของจำนวนที่จ่าย</option>
                <option value="fixed"${a&&a.bonusType==="fixed"?" selected":""}>จำนวนเหรียญคงที่</option>
              </select>
            </div>
            <div class="field">
              <label for="promo-value">จำนวนโบนัส</label>
              ${v("ถ้าเป็นเปอร์เซ็นต์ ให้ใส่เช่น 15")}
              <input id="promo-value" name="bonusValue" type="number" min="1" step="1" required value="${a?l(String(a.bonusValue)):"15"}" />
              ${f("bonusValue")}
            </div>
          </div>
          <div class="field-row">
            <div class="field">
              <label for="promo-start">วันเริ่มต้น</label>
              ${v("วันและเวลาที่โปรเริ่มใช้")}
              ${te({id:"promo-start",name:"startAt",value:a?a.startAt:"",required:!0})}
              ${f("startAt")}
            </div>
            <div class="field">
              <label for="promo-end">วันสิ้นสุด</label>
              ${v("วันและเวลาที่โปรหมดอายุ")}
              ${te({id:"promo-end",name:"endAt",value:a?a.endAt:"",required:!0})}
              ${f("endAt")}
            </div>
          </div>
          <div class="field">
            <label for="promo-expiry">อายุเหรียญโบนัส (วัน)</label>
            ${v("เว้นว่างไว้ถ้าไม่กำหนดวันหมดอายุ")}
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
    ${di(t)}
  `}function mi(e){const t=new FormData(e),a=t.get("allPackages")==="on"?"all":t.getAll("packageIds");return{id:String(t.get("id")||"").trim()||void 0,name:t.get("name"),packageIds:a,bonusType:t.get("bonusType"),bonusValue:t.get("bonusValue"),startAt:Q(t,"startAt"),endAt:Q(t,"endAt"),enabled:t.get("enabled")==="on",firstTopUpOnly:t.get("firstTopUpOnly")==="on",bonusExpiryDays:t.get("bonusExpiryDays")}}function Ue(){const e=document.querySelector("[data-promo-form]"),t=document.querySelector("[data-all-packages]"),n=document.querySelector("[data-pack-options]");if(t&&n){const o=()=>{n.querySelectorAll("input[name=packageIds]").forEach(s=>{s.disabled=t.checked,t.checked&&(s.checked=!0)})};t.addEventListener("change",o),o()}e&&e.addEventListener("submit",o=>{o.preventDefault();const s=Un(mi(e));if(!s.ok){E(e,s.errors);return}h("/admin?tab=promos")}),document.querySelectorAll("[data-promo-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Me(o.dataset.promoEdit,"","")}`,Ue(),ve(s),O(s),s.querySelector("#promo-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-promo-cancel]")?.addEventListener("click",()=>h("/admin?tab=promos")),document.querySelectorAll("[data-promo-toggle]").forEach(o=>{o.addEventListener("click",()=>{const s=o.dataset.enabled!=="1";Or(o.dataset.promoToggle,s),h("/admin?tab=promos")})}),document.querySelectorAll("[data-promo-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบโปรโมชันนี้หรือไม่?")&&(Pr(o.dataset.promoDelete),h("/admin?tab=promos"))})}),document.querySelectorAll("[data-base-form]").forEach(o=>{o.addEventListener("submit",s=>{s.preventDefault();const c=o.dataset.baseForm,i=new FormData(o),d={enabled:C()[c]?.enabled!==!1,coins:i.get("coins"),keysPerDay:i.get("keysPerDay"),keysRequired:i.get("keysRequired")||i.get("keysPerCoin"),coins:i.get("coins"),bonusValue:i.get("bonusValue"),bonusExpiryDays:i.get("bonusExpiryDays")},u=Hr(c,d);if(!u.ok){E(o,u.errors);return}h("/admin?tab=promos")})}),document.querySelectorAll("[data-base-toggle]").forEach(o=>{o.addEventListener("click",()=>{jr(o.dataset.baseToggle,o.dataset.enabled!=="1"),h("/admin?tab=promos")})});const a=document.querySelector("[data-code-form]");a&&a.addEventListener("submit",o=>{o.preventDefault();const s=new FormData(a),c=Yn({id:String(s.get("id")||"").trim()||void 0,code:s.get("code"),coins:s.get("coins"),maxUses:s.get("maxUses"),expiresAt:Q(s,"expiresAt")||null,bonusExpiryDays:s.get("bonusExpiryDays"),enabled:s.get("enabled")==="on"});if(!c.ok){E(a,c.errors);return}h("/admin?tab=promos")}),document.querySelectorAll("[data-code-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Me("",o.dataset.codeEdit,"")}`,Ue(),ve(s),O(s),s.querySelector("#code-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-code-cancel]")?.addEventListener("click",()=>h("/admin?tab=promos")),document.querySelectorAll("[data-code-toggle]").forEach(o=>{o.addEventListener("click",()=>{Zr(o.dataset.codeToggle,o.dataset.enabled!=="1"),h("/admin?tab=promos")})}),document.querySelectorAll("[data-code-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบรหัสนี้หรือไม่?")&&(Jr(o.dataset.codeDelete),h("/admin?tab=promos"))})});const r=document.querySelector("[data-key-promo-form]");r&&r.addEventListener("submit",o=>{o.preventDefault();const s=new FormData(r),c=ea({id:String(s.get("id")||"").trim()||void 0,name:s.get("name"),keyName:s.get("keyName"),keyStyle:s.get("keyStyle"),keysRequired:s.get("keysRequired"),coins:s.get("coins"),startAt:Q(s,"startAt"),endAt:Q(s,"endAt"),enabled:s.get("enabled")==="on"});if(!c.ok){E(r,c.errors);return}h("/admin?tab=promos")}),document.querySelectorAll("[data-key-promo-edit]").forEach(o=>{o.addEventListener("click",()=>{const s=document.querySelector(".admin-page");if(!s)return;const c=s.querySelector(".admin-tabs")?.outerHTML||"",i=s.querySelector(".page-title")?.outerHTML||"";s.innerHTML=`${i}${c}${Me("","",o.dataset.keyPromoEdit)}`,Ue(),ve(s),O(s),s.querySelector("#key-promo-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-key-promo-cancel]")?.addEventListener("click",()=>h("/admin?tab=promos")),document.querySelectorAll("[data-key-promo-toggle]").forEach(o=>{o.addEventListener("click",()=>{to(o.dataset.keyPromoToggle,o.dataset.enabled!=="1"),h("/admin?tab=promos")})}),document.querySelectorAll("[data-key-promo-delete]").forEach(o=>{o.addEventListener("click",()=>{confirm("ลบโปรแจกกุญแจนี้หรือไม่?")&&(eo(o.dataset.keyPromoDelete),h("/admin?tab=promos"))})})}function fi(){L();const e=y(),t=zt();w({name:"login",next:"/"});let n;if(!e)n=`
      <p class="home-daily__note">เข้าสู่ระบบ<wbr>เพื่อ<wbr>เช็คอิน<wbr>รายวัน รับกุญแจเงิน</p>`;else if(!t.enabled)n='<p class="home-daily__note">เช็คอินรายวันปิดอยู่ตอนนี้</p>';else{const c=t.currentKeyPromo?t.currentKeyPromo.keyName:"กุญแจเงิน",i=t.canExchange?'<button class="btn btn-primary" type="button" data-exchange-keys>แลกรับเหรียญ</button>':"",d=(t.keyPromos||[]).filter(u=>u.promo.name!=="Happy new year").map(u=>{const p=rn(u.promo),m=u.alreadyExchanged?'<button class="btn btn-ghost" type="button" disabled>แลกไปแล้ว</button>':u.canExchange?`<button class="btn btn-primary" type="button" data-exchange-promo="${l(u.promo.id)}">แลกเหรียญ</button>`:"";return`
        <div class="home-daily__promo" data-key-promo="${l(u.promo.id)}">
          <p class="home-daily__promo-name">${l(u.promo.name)}</p>
          ${ft({keys:u.keys,need:u.keysRequired,name:u.promo.keyName,style:u.promo.keyStyle})}
          ${p?`<p class="key-promo-dates">${p}</p>`:""}
          ${m}
        </div>`}).join("");n=`
      <div class="checkin-actions">
        <button class="btn ${t.checkedInToday?"btn-ghost":"btn-primary"}" type="button" data-checkin ${t.checkedInToday?"disabled":""}>${t.checkedInToday?"เช็คอินวันนี้แล้ว":`<span class="checkin-btn__text"><span class="checkin-btn__lead">เช็คอิน</span><span class="checkin-btn__rest">รับ${l(c)} +${t.keysPerDay}</span></span>`}</button>
        ${i}
      </div>
      ${ft({keys:t.keys,need:t.keysRequired||t.keysPerCoin,name:"กุญแจเงิน",style:"silver"})}
      ${d}`}let a;if(!e)a=`
      <p class="home-daily__note">เข้าสู่ระบบ<wbr>เพื่อ<wbr>เติมเหรียญ</p>`;else{const c=B();a=`
      <ul class="home-daily__balances">
        <li class="home-daily__row">
          ${At}
          <span class="home-daily__label">เหรียญของฉัน</span>
          <strong class="home-daily__amount">${c.purchased}</strong>
        </li>
        <li class="home-daily__row">
          ${ls}
          <span class="home-daily__label">โบนัสเหรียญ</span>
          <strong class="home-daily__amount">${c.bonus}</strong>
        </li>
      </ul>
      <a class="coin-pack__buy" href="/coins" data-link>${At}<span>เติมเหรียญ</span></a>`}const r=Io(),o=e&&r&&!r.alreadyExchanged&&r.canExchange?`<div class="checkin-actions"><button class="btn btn-primary" type="button" data-exchange-promo="${l(r.promo.id)}">แลกรับเหรียญ</button></div>`:"",s=r?`<section class="home-daily__box home-daily__box--wide" data-home-key-promo>
            <h2>${Fa('กิจกรรมพิเศษ "Happy new year"')}</h2>
            ${o}
            ${ft({keys:r.keys,need:r.keysRequired,name:r.promo.keyName,style:r.promo.keyStyle||"rainbow"})}
            <p class="home-daily__rule">${mt(ni)}</p>
            <p class="home-daily__rule">${mt(ai)}</p>
          </section>`:"";return`
    <section class="home-daily" aria-label="เช็คอินและเติมเหรียญ">
      <div class="container">
        <div class="home-daily__grid">
          <section class="home-daily__box" data-home-checkin>
            <h2>เช็คอินรายวัน</h2>
            ${n}
            <p class="home-daily__rule">${mt(ti)}</p>
          </section>
          <section class="home-daily__box" data-home-topup>
            <h2>กระเป๋าเหรียญ</h2>
            ${a}
          </section>
          ${s}
        </div>
      </div>
    </section>
  `}function hi(){return`
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
  `}function bi(){if(!y())return document.title=`เติมเหรียญ — ${g.shortName}`,"";document.title=`เติมเหรียญ — ${g.shortName}`,_("light"),L();const t=B(),n=!pa(),a=Te.map(s=>{const c=Kn(s,{isFirstTopUp:n}),i=c.paid?Math.round(c.packageBonus*100/c.paid):0,d=[`<div class="coin-pack__row"><span class="date-part" data-no-wbr>เหรียญ</span><span class="coin-pack__amt date-part" data-no-wbr>${c.paid}</span></div>`];if(c.packageBonus&&d.push(`<div class="coin-pack__row"><span class="date-part" data-no-wbr>โบนัส ${i}%</span><span class="coin-pack__amt date-part" data-no-wbr>+${c.packageBonus}</span></div>`),c.firstTopUpBonus&&d.push(`<div class="coin-pack__row coin-pack__row--promo"><span class="date-part" data-no-wbr>โบนัสเติมครั้งแรก</span><span class="coin-pack__amt date-part" data-no-wbr>+${c.firstTopUpBonus}</span></div>`),c.promo&&c.promoBonus){let u=c.promo.firstTopUpOnly?"โปรเติมครั้งแรก":c.promo.name;c.promo.bonusType==="percent"&&(u=`${u} ${c.promo.bonusValue}%`),d.push(`<div class="coin-pack__row coin-pack__row--promo"><span class="date-part" data-no-wbr>${l(u)}</span><span class="coin-pack__amt date-part" data-no-wbr>+${c.promoBonus}</span></div>`)}return`
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
    `}).join(""),r=ot(),o=r.length?`<ul class="tx-list">${r.map(s=>{const c=s.coins>0?`+${s.coins}`:String(s.coins),i=gi(s.createdAt),d=Number(s.packageBonus||0)+Number(s.firstTopUpBonus||0)+Number(s.promoBonus||0),u=d?`<p class="tx-item__bonus">ได้รับโบนัส ${d} เหรียญ${s.promoName?` (รวม ${l(s.promoName)})`:""}</p>`:"";return`<li class="tx-item"><div><p class="tx-item__label">${l(s.label)}</p>${u}<p class="tx-item__when">${l(i)}</p></div><span class="tx-item__amount${s.coins>0?" is-plus":""}">${c}</span></li>`}).join("")}</ul>`:'<p class="empty-state">ยังไม่มีรายการเติมเหรียญหรือปลดล็อกตอน</p>';return`
    ${A("coins")}
    <main id="main" class="page-block">
      <div class="container coins-page">
        <h1 class="page-title">เติมเหรียญ</h1>
        <p class="coin-closed-loop">เหรียญในระบบนี้ใช้ได้เฉพาะสำหรับอ่านนิยายในบ้านนิยายนี้เท่านั้น ไม่สามารถโอนให้ผู้อื่น หรือแลก/ถอนเป็นเงินสดได้</p>
        <p class="coins-balance-lead">ยอดคงเหลือ <strong>${t.total}</strong> เหรียญ</p>
        <p class="coins-breakdown">${l(pt(t))}</p>
        <p class="proto-note">การชำระเงินในหน้านี้เป็นการทดลองเท่านั้น ไม่มีการตัดบัตรจริง จุดเชื่อมระบบรับชำระเงิน เช่น ChillPay หรือ Opn จะมาในภายหลัง</p>
        ${hi()}
        <div class="coin-pack-grid">${a}</div>
        <section class="tx-section" aria-labelledby="tx-heading">
          <h2 id="tx-heading">ประวัติรายการ</h2>
          ${o}
        </section>
      </div>
    </main>
    ${N()}
  `}function gi(e){const t=new Date(e);return Number.isNaN(t.getTime())?"":an(t)}function ja(e,t){const n=y(),a=w({name:"reader",novelId:e,chapterId:t});if(!n){h({name:"login",next:a});return}const r=b(e),o=he(r,t);if(!r||!o||!ge(o))return;if(ue(r,o)){h(a);return}const s=document.querySelector(".modal-backdrop");s&&s.remove();const c=ee(o),i=B(),d=i.total,u=d>=c,p=document.createElement("div");p.className="modal-backdrop",p.dataset.walletModal="true",p.setAttribute("role","dialog"),p.setAttribute("aria-modal","true"),p.setAttribute("aria-labelledby","unlock-title");const m=u?`<button class="btn btn-primary" type="button" data-unlock-confirm>ยืนยันการปลดล็อก</button>
       <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`:`<p class="field-error">เหรียญไม่พอสำหรับปลดล็อกตอนนี้</p>
       <a class="btn btn-primary" href="/coins?next=${encodeURIComponent(a)}" data-link>ไปเติมเหรียญ</a>
       <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`;p.innerHTML=`
    <div class="modal">
      <h2 id="unlock-title">ปลดล็อกตอน</h2>
      <p>${l(r.title)} · ตอนที่ ${l(o.id)} ${l(o.title)}</p>
      <p>ราคา <strong>${c}</strong> เหรียญ · ยอดคงเหลือ <strong>${d}</strong> เหรียญ (${l(pt(i))})</p>
      <div class="modal__actions">${m}</div>
    </div>
  `,document.body.appendChild(p),O(p),p.querySelector("[data-modal-close]")?.addEventListener("click",()=>p.remove()),p.addEventListener("click",$=>{$.target===p&&p.remove()});const k=p.querySelector("[data-unlock-confirm]");k&&k.addEventListener("click",()=>{const $=Ro(e,t);if(!$.ok&&$.reason==="insufficient"){p.remove(),ja(e,t);return}p.remove(),$.ok&&h(a)})}function yi(e,t){return w(t?{name:"reader",novelId:e,chapterId:t}:{name:"novel",id:e})}function Ce(e,t){const n=e?.querySelector("[data-donate-error]");n&&(n.hidden=!t,n.textContent=t||"")}function vi(){document.querySelectorAll("[data-donate-box]").forEach(e=>{const t=e.dataset.novelId,n=e.dataset.chapterId||void 0,a=(o,s)=>$i(t,n,o,s);e.querySelectorAll("[data-donate-gift]").forEach(o=>{o.addEventListener("click",s=>{if(s.target.closest(".donate-custom"))return;Ce(e,"");const c=Ze.find(i=>i.id===o.dataset.donateGift);if(c){if(c.coins==null){const i=o.querySelector(".donate-custom__input");i?.focus();const d=i?.value,u=Number(d),p=Math.round(u);if(!d||!Number.isFinite(u)||p!==u||p<=0){Ce(e,"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก");return}a(c,p);return}a(c,c.coins)}})});const r=e.querySelector(".donate-custom__input");r&&(r.addEventListener("click",o=>o.stopPropagation()),r.addEventListener("keydown",o=>{if(o.key!=="Enter")return;o.preventDefault(),Ce(e,"");const s=Number(r.value),c=Math.round(s);if(!Number.isFinite(s)||c!==s||c<=0){Ce(e,"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก");return}a(Ze.find(i=>i.id==="coin"),c)}))})}function $i(e,t,n,a){const r=y(),o=yi(e,t);if(!r){h({name:"login",next:o});return}if(!b(e)||!n)return;const c=document.querySelector(".modal-backdrop");c&&c.remove();const i=document.createElement("div");i.className="modal-backdrop",i.dataset.walletModal="true",i.setAttribute("role","dialog"),i.setAttribute("aria-modal","true"),document.body.appendChild(i);const d=()=>i.remove();i.addEventListener("click",p=>{p.target===i&&d()});const u=()=>{const p=B(),k=p.total>=a?`<button class="btn btn-primary" type="button" data-donate-send>ส่งโดเนท</button>
         <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`:`<p class="field-error">เหรียญไม่พอสำหรับโดเนทนี้</p>
         <a class="btn btn-primary" href="/coins?next=${encodeURIComponent(o)}" data-link>ไปเติมเหรียญ</a>
         <button class="btn btn-ghost" type="button" data-modal-close>ยกเลิก</button>`;i.setAttribute("aria-labelledby","donate-confirm-title"),i.innerHTML=`
      <div class="modal modal--donate">
        <h2 id="donate-confirm-title">ยืนยันการโดเนท</h2>
        <div class="donate-confirm">
          ${en(n.id)}
          <p class="donate-confirm__name">${l(n.name)}</p>
        </div>
        <p>ใช้ <strong>${a}</strong> เหรียญ · ยอดคงเหลือ <strong>${p.total}</strong> เหรียญ (${l(pt(p))})</p>
        <div class="modal__actions">${k}</div>
      </div>`,O(i),i.querySelector("[data-modal-close]").addEventListener("click",d),i.querySelector("[data-donate-send]")?.addEventListener("click",()=>{const $=Jo({novelId:e,giftId:n.id,customAmount:a,chapterId:t||void 0});if(!$.ok&&$.reason==="insufficient"){u();return}if(!$.ok){const S=i.querySelector(".modal__actions"),M=document.createElement("p");M.className="field-error",M.textContent=$.reason==="invalid"?"กรุณากรอกจำนวนเหรียญเป็นจำนวนเต็มบวก":"ไม่สามารถโดเนทได้ในขณะนี้",S?.prepend(M);return}d(),ki(n.id)})};u()}function ki(e){if(Ka())return;document.querySelectorAll(".fx-gift-burst").forEach(n=>n.remove());const t=document.createElement("div");t.className="fx-gift-burst",t.setAttribute("aria-hidden","true");for(let n=0;n<7;n+=1){const a=document.createElement("span");a.className="fx-gift",a.innerHTML=en(e),a.style.left=`${12+Math.random()*76}vw`,a.style.animationDelay=`${Math.random()*.15}s`,a.style.animationDuration=`${.85+Math.random()*.35}s`,t.appendChild(a)}document.body.appendChild(t),window.setTimeout(()=>t.remove(),1600)}function Ka(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function Be(e){try{sessionStorage.setItem("banNiyai_fx",e)}catch{}}function wi(){const t=[...document.querySelectorAll(".key-icon.is-filled")].at(-1);t&&(t.classList.remove("is-popping"),t.offsetWidth,t.classList.add("is-popping"),t.addEventListener("animationend",()=>t.classList.remove("is-popping"),{once:!0}))}function Si(){document.querySelectorAll(".fx-coin-rain").forEach(t=>t.remove());const e=document.createElement("div");e.className="fx-coin-rain",e.setAttribute("aria-hidden","true");for(let t=0;t<16;t+=1){const n=document.createElement("span");n.className="fx-coin",n.innerHTML=At,n.style.left=`${6+Math.random()*88}vw`,n.style.animationDelay=`${Math.random()*.28}s`,n.style.animationDuration=`${.95+Math.random()*.55}s`,e.appendChild(n)}document.body.appendChild(e),window.setTimeout(()=>e.remove(),1800)}function _i(){let e="";try{e=sessionStorage.getItem("banNiyai_fx")||"",sessionStorage.removeItem("banNiyai_fx")}catch{}!e||Ka()||(e==="checkin"&&wi(),e==="coins"&&Si())}function Ai(){document.querySelectorAll("[data-locked-chapter]").forEach(t=>{t.addEventListener("click",n=>{n.preventDefault(),n.stopPropagation(),ja(t.dataset.novelId,t.dataset.chapterId)},!0)}),vi(),document.querySelectorAll("[data-topup]").forEach(t=>{t.addEventListener("click",()=>{Po(t.dataset.topup).ok&&(Be("coins"),h(T()||"/coins"))})}),document.querySelectorAll("[data-checkin]").forEach(t=>{t.addEventListener("click",()=>{const n=qo();if(!n.ok&&n.reason!=="already"){n.error&&alert(n.error);return}n.ok&&Be("checkin"),h(T()||"/")})}),document.querySelectorAll("[data-exchange-keys]").forEach(t=>{t.addEventListener("click",()=>{const n=Lo();if(!n.ok){n.error&&alert(n.error);return}Be("coins"),h(T()||"/")})}),document.querySelectorAll("[data-exchange-promo]").forEach(t=>{t.addEventListener("click",()=>{const n=Co(t.dataset.exchangePromo);if(!n.ok){n.error&&alert(n.error);return}Be("coins"),h(T()||"/")})});const e=document.querySelector("[data-redeem-form]");e&&e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e),a=Bo(n.get("code"));if(!a.ok){E(e,{code:a.error||"ไม่สามารถแลกโค้ดได้"});return}h("/coins")})}function Ni(){document.querySelectorAll("[data-wallet-modal]").forEach(e=>e.remove()),se()}function se(){document.querySelectorAll("[data-guest-login-modal]").forEach(e=>e.remove()),document.body.classList.remove("guest-login-open"),se._onKey&&(document.removeEventListener("keydown",se._onKey),se._onKey=null)}function xi(){if(y())return;const e=document.querySelector("[data-guest-login-modal]");if(e){e.querySelector("#login-email")?.focus();return}const t=document.createElement("div");t.className="modal-backdrop guest-login-backdrop",t.dataset.guestLoginModal="1",t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-labelledby","guest-login-title");const n=T()==="/"?void 0:T();t.innerHTML=`
    <div class="modal modal--guest-login">
      <button type="button" class="guest-login__close" data-guest-login-close aria-label="ปิด">×</button>
      <div class="modal--guest-login__inner">
        ${Qt({titleId:"guest-login-title"})}
        ${xa({next:n,compact:!0})}
      </div>
    </div>
  `,document.body.appendChild(t),document.body.classList.add("guest-login-open"),t.querySelector("[data-guest-login-close]").addEventListener("click",()=>se());const a=r=>{r.key==="Escape"&&se()};se._onKey=a,document.addEventListener("keydown",a),Za(),O(t),t.querySelector("#login-email")?.focus()}function Ei(e){return!!e.closest("a, button, input, select, textarea, summary, label, [data-link], [role='button'], [role='tab'], [role='search']")}function Ti(){if(y()||T()!=="/")return;const e=document.getElementById("app")||document.body,t=n=>{n.target.closest("[data-guest-login-modal]")||Ei(n.target)&&(n.preventDefault(),n.stopPropagation(),xi())};e.addEventListener("click",t,!0),e.addEventListener("submit",t,!0)}function Va(e,t){const n=String(e||"").replace(/\r\n/g,`
`).trim();return n?n.split(/\n[ \t]*\n/).map(a=>a.replace(/^\n+|\n+$/g,"")).filter(Boolean).map(a=>{const r=a.split(`
`).map(o=>Fa(o.trim())).join("<br>");return`<p class="${t}">${r}</p>`}).join(""):""}function Di(){document.title=`กิจกรรม — ${g.shortName}`,_("light"),Y();const e=re(),t=e.length?e.slice().sort((n,a)=>new Date(n.startAt)-new Date(a.startAt)).map(n=>{const a=rn(n),r=n.image?`<div class="event-card__media"><img class="event-card__image" src="${l(n.image)}" alt="" /></div>`:"";return`
        <article class="event-card" id="event-${l(n.id)}">
          ${r}
          <div class="event-card__body">
            <h2 class="event-card__title">${l(n.title)}</h2>
            ${a?`<p class="event-card__dates">${a}</p>`:""}
            ${Va(n.detail,"event-card__detail")}
          </div>
        </article>`}).join(""):'<p class="empty-state">ยังไม่มีกิจกรรมในขณะนี้</p>';return`
    ${A("events")}
    <main id="main" class="page-block">
      <div class="container events-page">
        <h1 class="page-title">กิจกรรม</h1>
        <div class="events-list">${t}</div>
      </div>
    </main>
    ${N()}
  `}function Ii(){document.title=`ติดตามนักเขียน — ${g.shortName}`,_("light"),es();const e=$a(),t=e.length?`<ul class="follow-list">${e.map(n=>`<li><a class="follow-channel" href="${l(n.url)}" target="_blank" rel="noopener noreferrer">${l(n.name)}</a></li>`).join("")}</ul>`:'<p class="empty-state">ช่องทางติดตามนักเขียนจะเพิ่มให้ในภายหลัง</p>';return`
    ${A("follow")}
    <main id="main" class="page-block">
      <div class="container follow-page">
        <h1 class="page-title">ติดตามนักเขียน</h1>
        ${t}
      </div>
    </main>
    ${N()}
  `}function Ya(e=""){Y();const t=e?po(e):null;return`
    <section class="event-admin-section">
      <h2 class="admin-section-title">กิจกรรม</h2>
      <div class="promo-layout">
        <div>${re().slice().sort((a,r)=>new Date(r.startAt)-new Date(a.startAt)).map(a=>{const r=rn(a);return`
        <article class="promo-card" data-event-id="${l(a.id)}">
          <div>
            <h3>${l(a.title)}</h3>
            ${r?`<p class="promo-card__summary">${r}</p>`:""}
            ${Va(a.detail,"promo-card__summary")}
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
                ${te({id:"event-start",name:"startAt",value:t?t.startAt:"",required:!0})}
                ${f("startAt")}
              </div>
              <div class="field">
                <label>วันสิ้นสุด</label>
                ${te({id:"event-end",name:"endAt",value:t?t.endAt:"",required:!0})}
                ${f("endAt")}
              </div>
            </div>
            <div class="field">
              <label for="event-detail">รายละเอียด</label>
              <textarea id="event-detail" name="detail" rows="5">${t?l(t.detail||""):""}</textarea>
            </div>
            <div class="field">
              <label for="event-image-url">รูปภาพ (ไม่บังคับ)</label>
              ${v("วางลิงก์รูป หรืออัปโหลดไฟล์ รูปที่อัปโหลดจะถูกเก็บในเบราว์เซอร์นี้")}
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
  `}function qi(e=document){const t=e.querySelector("[data-event-image-file]"),n=e.querySelector("[data-event-image-url]"),a=e.querySelector("[data-event-image-value]"),r=e.querySelector("[data-event-image-preview]"),o=e.querySelector('[data-error-for="image"]'),s=i=>{r&&(i?(r.src=i,r.hidden=!1):(r.removeAttribute("src"),r.hidden=!0))},c=i=>{o&&(o.textContent=i||"",o.hidden=!i)};t?.addEventListener("change",()=>{const i=t.files&&t.files[0];if(!i)return;if(i.size>400*1024){c("ไฟล์ใหญ่เกินไป กรุณาเลือกรูปที่ไม่เกิน 400KB"),t.value="";return}const d=new FileReader;d.onload=()=>{const u=String(d.result||"");a&&(a.value=u),n&&(n.value=""),s(u),c("")},d.readAsDataURL(i)}),n?.addEventListener("input",()=>{const i=n.value.trim();a&&(a.value=i),s(i),c("")})}function Ja(){qi();const e=document.querySelector("[data-event-form]");e&&e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e),a=mo({id:String(n.get("id")||"").trim()||void 0,title:n.get("title"),startAt:Q(n,"startAt"),endAt:Q(n,"endAt"),detail:n.get("detail"),image:n.get("image")});if(!a.ok){E(e,a.errors);return}h("/admin?tab=events")}),document.querySelectorAll("[data-event-edit]").forEach(t=>{t.addEventListener("click",()=>{const n=document.querySelector(".admin-page");if(!n)return;const a=n.querySelector(".admin-tabs")?.outerHTML||"",r=n.querySelector(".page-title")?.outerHTML||"";n.innerHTML=`${r}${a}${Ya(t.dataset.eventEdit)}`,Ja(),ve(n),O(n),n.querySelector("#event-form-title")?.scrollIntoView({behavior:"smooth",block:"start"})})}),document.querySelector("[data-event-cancel]")?.addEventListener("click",()=>h("/admin?tab=events")),document.querySelectorAll("[data-event-delete]").forEach(t=>{t.addEventListener("click",()=>{confirm("ลบกิจกรรมนี้หรือไม่?")&&(fo(t.dataset.eventDelete),h("/admin?tab=events"))})})}function Li(e){const t=Ne(e?.publishedAt);return t?t.toISOString():""}function Ci(e){const t=Ne(e?.publishedAt);if(!t)return l("ยังไม่กำหนดเวลา");const n=ge(e)?"เผยแพร่แล้ว":"ตั้งเวลา";return`${l(n)} ${U(an(t))}`}function Bi(e){const t=ee(e);return t<=0?"ฟรี":`${t} เหรียญ`}function I({novelId:e,newNovel:t,order:n}={}){const a=new URLSearchParams;e&&a.set("novel",e),t&&a.set("newNovel","1"),n&&a.set("order","1");const r=a.toString();return r?`/admin?${r}`:"/admin"}function Pi(){const e=new URLSearchParams(window.location.search),t=e.get("novel");return t&&e.get("order")==="1"?Hi(t):t?wn(t):e.get("newNovel")==="1"?wn(null):Oi()}function Oi(){const e=be().map(n=>`
      <a class="novel-card" href="${I({novelId:n.id})}" data-link>
        <div class="novel-card__cover" style="${Ie(n.cover)}" aria-hidden="true">
          ${lt(n,{photoClass:"novel-card__photo",motifClass:"novel-card__motif"})}
        </div>
        <div class="novel-card__body">
          <h3 class="novel-card__title">${l(n.title)}</h3>
        </div>
      </a>`).join(""),t=`
      <a class="novel-card novel-card--add" href="${I({newNovel:!0})}" data-link aria-label="เพิ่มนิยายเรื่องใหม่">
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
  `}function Ri(e,{isNew:t=!1}={}){const n=e?.cover?.image||"",a=!!n,r=!!(!t&&e?.cover&&(e.cover.from||e.cover.motif)),o=!a&&!r,s=a||r?"เปลี่ยนรูปปก":"อัปโหลดรูปปก",c=!a&&r?`<span class="writer-cover__motif" data-cover-motif>${l(e.cover?.motif||"")}</span>`:'<span class="writer-cover__motif" data-cover-motif hidden></span>';return`
        <div class="writer-cover" data-cover-editor>
          <label class="writer-cover__frame${o?" writer-cover__frame--empty":""}" for="novel-cover-file" style="${Ie(e?.cover)}">
            <span class="writer-cover__plus"${o?"":" hidden"}>+</span>
            ${c}
            <img class="writer-cover__photo" data-cover-preview alt="" ${a?`src="${l(n)}"`:"hidden"} />
          </label>
          <input id="novel-cover-file" class="writer-cover__file" type="file" accept="image/*" data-cover-file />
          <input type="hidden" name="coverImage" value="${l(n)}" data-cover-value />
          <button class="btn btn-ghost" type="button" data-cover-pick>${s}</button>
          ${f("coverImage")}
        </div>`}function Mi(e,{isNew:t=!1}={}){const n=g.penNames.map(a=>{const r=!t&&e?.author===a?" checked":"";return`
            <label class="check-label">
              <input type="radio" name="author" value="${l(a)}" required${r} />
              <span>${l(a)}</span>
            </label>`}).join("");return`
        <form class="auth-form writer-details-form" data-novel-details-form novalidate>
          ${t?"":`<input type="hidden" name="novelId" value="${l(e.id)}" />`}
          ${Ri(e,{isNew:t})}
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
          <div class="admin-save-row">
            <button class="btn btn-primary" type="submit">บันทึก</button>
            <p class="admin-status" data-details-status hidden></p>
          </div>
        </form>`}function Ui(e,t){const n=`chapter-published-${e}-${t.id}`,a=Li(t),r=!!Ne(t.publishedAt);return`
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
          ${te({id:n,name:"publishedAt",value:a,required:!1})}
          ${f("publishedAt")}
        </div>
      </fieldset>
      <div class="admin-save-row">
        <button class="btn btn-primary" type="submit">บันทึก</button>
        <button class="btn btn-ghost" type="button" data-chapter-editor-cancel>ยกเลิก</button>
      </div>
    </form>`}function Fi(e){const t=String(ee(e));return`
    <form class="chapter-inline-form" data-chapter-price-form novalidate>
      <div class="field">
        <label>ราคาปลดล็อก (เหรียญ)</label>
        ${v("ใส่ 0 หากต้องการให้ตอนนี้อ่านฟรี")}
        <input name="price" type="number" inputmode="numeric" min="0" step="1" required value="${l(t)}" />
        ${f("price")}
      </div>
      <div class="admin-save-row">
        <button class="btn btn-primary" type="submit">บันทึก</button>
        <button class="btn btn-ghost" type="button" data-chapter-editor-cancel>ยกเลิก</button>
      </div>
    </form>`}function wn(e){const t=!e,n=t?{id:"",title:"",author:"",teaser:"",tags:[],secondaryTags:[],chapters:[],cover:null}:b(e);if(!t&&!n)return`
    <section class="chapter-admin-section">
      <div class="writer-novel__top">
        <a class="back-link" href="${I()}" data-link>← กลับไปเลือกนิยาย</a>
      </div>
      <p class="empty-state">ไม่พบนิยายเรื่องนี้</p>
    </section>`;const r=(n.chapters||[]).map(c=>{const i=Ci(c);return`
        <article class="promo-card chapter-admin-row" data-chapter-row data-novel-id="${l(n.id)}" data-chapter-id="${l(c.id)}">
          <div class="chapter-admin-row__main">
            <h3>ตอนที่ ${l(c.id)} ${l(c.title)}</h3>
            <p class="promo-card__summary">${l(Bi(c))} · ${i}</p>
          </div>
          <div class="chapter-admin-row__actions">
            <button type="button" class="btn btn-ghost" data-chapter-open="schedule">ตั้งเวลา</button>
            <button type="button" class="btn btn-ghost" data-chapter-open="price">ตั้งค่าเหรียญ</button>
            <button type="button" class="btn btn-ghost" data-delete-chapter>ลบ</button>
          </div>
          <div class="chapter-admin-row__editor" data-chapter-editor="schedule" hidden>
            ${Ui(n.id,c)}
          </div>
          <div class="chapter-admin-row__editor" data-chapter-editor="price" hidden>
            ${Fi(c)}
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
        <a class="back-link" href="${I()}" data-link>← กลับไปเลือกนิยาย</a>
        ${t?"":`<button type="button" class="btn btn-ghost writer-novel__delete" data-delete-novel="${l(n.id)}">ลบนิยาย</button>`}
      </div>
      ${Mi(n,{isNew:t})}
      ${Cs(s,{showHeading:!1,showSave:!t,idSuffix:t?"new":void 0})}
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
  `}function Hi(e){const t=b(e);if(!t)return`
    <section class="chapter-admin-section">
      <a class="back-link" href="${I()}" data-link>← กลับไปเลือกนิยาย</a>
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
        <a class="btn btn-ghost" href="${I({novelId:t.id})}" data-link>ยกเลิก</a>
      </div>
    </section>
  `}function Sn(e){document.querySelectorAll("[data-chapter-editor]").forEach(t=>{t!==e&&(t.hidden=!0)})}function ht(e){if(!e)return;const t=e.querySelector('[name="publishMode"]:checked')?.value||"now",n=e.querySelector("[data-schedule-fields]");n&&(n.hidden=t!=="schedule");const a=e.querySelector("[name='publishedAtDate']"),r=e.querySelector("[name='publishedAtTime']");a&&(a.required=t==="schedule"),r&&(r.required=t==="schedule")}function ji(){const e=document.querySelector("[data-chapter-toggle-form]"),t=document.querySelector("#chapter-form-card");e&&t&&e.addEventListener("click",()=>{if(!document.querySelector("[data-writer-novel]")?.dataset.writerNovel){window.alert("กรุณาบันทึกนิยายก่อน");return}t.hidden=!t.hidden,t.hidden||(t.querySelector("[name='title']")?.focus(),t.scrollIntoView({behavior:"smooth",block:"start"}))}),document.querySelector("[data-chapter-form-cancel]")?.addEventListener("click",()=>{t&&(t.hidden=!0)}),document.querySelector("[data-chapter-order-open]")?.addEventListener("click",()=>{const a=document.querySelector("[data-writer-novel]")?.dataset.writerNovel;if(!a){window.alert("กรุณาบันทึกนิยายก่อน");return}h(I({novelId:a,order:!0}))});const n=document.querySelector("[data-chapter-form]");n&&n.addEventListener("submit",a=>{a.preventDefault();const r=new FormData(n),o=String(r.get("novelId")||"").trim(),s=ir(o,{title:r.get("title"),content:r.get("content")});if(!s.ok){E(n,s.errors);return}h(I({novelId:o}))}),document.querySelectorAll("[data-chapter-row]").forEach(a=>{const r=a.dataset.novelId,o=a.dataset.chapterId;a.querySelectorAll("[data-chapter-open]").forEach(i=>{i.addEventListener("click",()=>{const d=a.querySelector(`[data-chapter-editor="${i.dataset.chapterOpen}"]`);if(!d)return;const u=d.hidden;if(Sn(u?d:null),d.hidden=!u,!d.hidden){const p=d.querySelector("[data-chapter-schedule-form]");p&&ht(p)}})}),a.querySelectorAll("[data-chapter-editor-cancel]").forEach(i=>{i.addEventListener("click",()=>Sn())});const s=a.querySelector("[data-chapter-schedule-form]");s&&(ht(s),s.querySelectorAll("[data-publish-mode]").forEach(i=>{i.addEventListener("change",()=>ht(s))}),s.addEventListener("submit",i=>{i.preventDefault();const d=new FormData(s),u=String(d.get("publishMode")||"now"),p=ur(r,o,{publishMode:u,publishedAt:u==="schedule"?Q(d,"publishedAt"):void 0});if(!p.ok){E(s,p.errors);return}h(I({novelId:r}))}));const c=a.querySelector("[data-chapter-price-form]");c&&c.addEventListener("submit",i=>{i.preventDefault();const d=new FormData(c),u=dr(r,o,d.get("price"));if(!u.ok){E(c,u.errors);return}h(I({novelId:r}))}),a.querySelector("[data-delete-chapter]")?.addEventListener("click",()=>{if(!confirm("ลบตอนนี้หรือไม่?"))return;cr(r,o).ok&&h(I({novelId:r}))})}),Ki(),document.querySelector("[data-delete-novel]")?.addEventListener("click",a=>{if(!confirm("ลบนิยายเรื่องนี้หรือไม่?"))return;const r=a.currentTarget.dataset.deleteNovel;rr(r).ok&&h(I())})}function Ki(){const e=document.querySelector("[data-chapter-order-view]");if(!e)return;const t=e.querySelector("[data-chapter-order-list]"),n=e.dataset.novelId;e.querySelector("[data-chapter-order-save]")?.addEventListener("click",()=>{const a=[...e.querySelectorAll("[data-chapter-order-row]")].map(o=>o.dataset.chapterId),r=lr(n,a);if(!r.ok){window.alert(r.error||"บันทึกลำดับไม่สำเร็จ");return}h(I({novelId:n}))}),t&&t.addEventListener("pointerdown",a=>{const r=a.target.closest("[data-chapter-drag]");if(!r||!t.contains(r)||a.pointerType==="mouse"&&a.button!==0)return;const o=r.closest("[data-chapter-order-row]");if(!o)return;a.preventDefault(),r.setPointerCapture(a.pointerId);const s=a.clientY;let c=!1,i=null,d=0;const u=m=>{if(m.pointerId!==a.pointerId)return;if(m.preventDefault(),!c){if(Math.abs(m.clientY-s)<4)return;c=!0;const S=o.getBoundingClientRect();d=s-S.top,i=document.createElement("div"),i.className="chapter-order-row chapter-order-row--placeholder",i.style.height=`${S.height}px`,o.style.width=`${S.width}px`,o.style.left=`${S.left}px`,o.style.top=`${S.top}px`,o.style.position="fixed",o.style.zIndex="30",o.style.pointerEvents="none",o.classList.add("is-dragging"),o.after(i)}o.style.top=`${m.clientY-d}px`;const k=[...t.querySelectorAll("[data-chapter-order-row]")].filter(S=>S!==o);let $=!1;for(const S of k){const M=S.getBoundingClientRect();if(m.clientY<M.top+M.height/2){S.before(i),$=!0;break}}!$&&k.length&&k[k.length-1].after(i)},p=m=>{m.pointerId===a.pointerId&&(r.removeEventListener("pointermove",u),r.removeEventListener("pointerup",p),r.removeEventListener("pointercancel",p),r.hasPointerCapture(a.pointerId)&&r.releasePointerCapture(a.pointerId),c&&i&&i.replaceWith(o),o.classList.remove("is-dragging"),o.style.position="",o.style.left="",o.style.top="",o.style.width="",o.style.zIndex="",o.style.pointerEvents="")};r.addEventListener("pointermove",u),r.addEventListener("pointerup",p),r.addEventListener("pointercancel",p)})}function Vi(e){const t=e.querySelector("[data-cover-file]"),n=e.querySelector("[data-cover-value]"),a=e.querySelector("[data-cover-preview]");!t||!n||t.addEventListener("change",()=>{const r=t.files?.[0],o={};if(!r)return;if(r.type.startsWith("image/")?r.size>400*1024&&(o.coverImage="ไฟล์ใหญ่เกินไป กรุณาเลือกรูปที่ไม่เกิน 400KB"):o.coverImage="กรุณาเลือกรูปภาพ",o.coverImage){E(e,o),t.value="",n.value="",a&&(a.removeAttribute("src"),a.hidden=!0);return}const s=new FileReader;s.onload=()=>{n.value=String(s.result||""),a&&(a.src=n.value,a.hidden=!1),e.querySelector("[data-cover-motif]")?.setAttribute("hidden","");const c=e.querySelector(".writer-cover__plus");c&&(c.hidden=!0),e.querySelector(".writer-cover__frame")?.classList.remove("writer-cover__frame--empty");const i=e.querySelector("[data-cover-pick]");i&&(i.textContent="เปลี่ยนรูปปก"),E(e,{})},s.readAsDataURL(r)})}function Yi(){const e=document.querySelector("[data-novel-details-form]");e&&(Vi(e),e.querySelector("[data-cover-pick]")?.addEventListener("click",()=>{e.querySelector("[data-cover-file]")?.click()}),e.addEventListener("submit",t=>{t.preventDefault();const n=new FormData(e),a=String(n.get("novelId")||"").trim(),r=document.querySelector("[data-admin-novel]"),o=r?[...r.querySelectorAll("[data-main-tag].is-on")].map(d=>d.dataset.mainTag):[],s=r?oe(r):[],c={title:n.get("title"),author:n.get("author"),teaser:n.get("teaser"),coverImage:n.get("coverImage")},i=a?ar(a,c):nr({...c,tags:o,secondaryTags:s});if(!i.ok){if(E(e,i.errors||{}),i.errors?.tags){const d=r?.querySelector('[data-error-for="tags"]');d&&(d.textContent=i.errors.tags,d.hidden=!1)}return}h(I({novelId:i.novel.id}))}))}function Ji(e){if(!e?.byMonth?.length&&!e?.byYear?.length)return"";const t=(e.byMonth||[]).map(a=>{const r=Hs(a.year,a.month);return`<li><span class="date-part" data-no-wbr>${l(r)}</span><span>${a.thb} บาท</span></li>`}).join(""),n=(e.byYear||[]).map(a=>{const r=js(a.year);return`<li><span class="date-part" data-no-wbr>${l(r)}</span><span>${a.thb} บาท</span></li>`}).join("");return`
        <div class="sales-topup-periods">
          <div>
            <h4>ยอดเติมรายเดือน (สำหรับภาษี)</h4>
            <ul class="sales-topup-period-list">${t}</ul>
          </div>
          <div>
            <h4>ยอดเติมรายปี (สำหรับภาษี)</h4>
            <ul class="sales-topup-period-list">${n}</ul>
          </div>
        </div>`}function _n(e){return`ปลดล็อก ${e.unlocks} ครั้ง (${e.unlockCoins} เหรียญ) · โดเนท ${e.donations} ครั้ง (${e.donateCoins} เหรียญ)`}function Zi(){const e=Wo(),t=e.novels.map(o=>{const s=o.chapters.map(i=>`
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
          <p class="promo-card__summary">${l(_n(o.totals))}</p>
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
        </section>`}).join(""),n=zo(),a=n.records.map(o=>{const s=o.createdAt?fe(new Date(o.createdAt)):"";return`
        <tr>
          <td data-label="วันที่">${s?U(s):"—"}</td>
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
          <p class="promo-card__summary">${l(_n(e.overall))}</p>
        </div>
      </article>
      <section class="sales-novel sales-topup">
        <h3>การเติมเหรียญของนักอ่าน</h3>
        <p class="promo-card__summary">ยอดเติมรวม ${n.totals.thb} บาท · ออกเหรียญทั้งหมด ${n.totals.coins} เหรียญ</p>
        ${Ji(n)}
        ${r}
      </section>
      ${t||'<p class="empty-state">ยังไม่มีข้อมูลนิยาย</p>'}
    </section>
  `}function Wi(e){Ni(),Ti(),document.querySelectorAll("[data-font-size]").forEach(n=>{n.addEventListener("click",()=>{const a=Number(n.dataset.fontSize);Ao(a);const r=document.querySelector(".reader-shell");r&&r.style.setProperty("--reader-size",`${a}px`),document.querySelectorAll("[data-font-size]").forEach(o=>{const s=Number(o.dataset.fontSize)===a;o.classList.toggle("is-active",s),o.setAttribute("aria-pressed",String(s))})})});const t=document.querySelector("[data-toggle-night]");if(t&&t.addEventListener("click",()=>{const n=da()==="night"?"light":"night";So(n),_(n),t.classList.toggle("is-active",n==="night"),t.setAttribute("aria-pressed",String(n==="night")),t.textContent=n==="night"?"โหมดกลางคืน: เปิด":"โหมดกลางคืน"}),e.name==="reader"&&(window.scrollTo(0,0),y()&&e.novelId&&e.chapterId)){const a=b(e.novelId),r=he(a,e.chapterId);ue(a,r)&&Ar(e.novelId,e.chapterId)}if(tc(),ec(),zi(),nc(),Za(),_s(),An(),window.__headerResizeBound||(window.__headerResizeBound=!0,window.addEventListener("resize",An)),e.name==="admin"){const n=new URLSearchParams(window.location.search).get("tab");n==="promos"?Ue():n==="events"?Ja():n==="sales"||(Os(),ji(),Yi())}ve(),Ai(),bs(),O(),_i(),e.name==="events"&&window.location.hash&&document.getElementById(window.location.hash.slice(1))?.scrollIntoView({block:"start"})}function zi(){const e=document.querySelector("[data-search-form]");if(!e)return;const t=e.querySelector(".header-search__field"),n=e.querySelector("[data-search-toggle]");e.addEventListener("submit",a=>{a.preventDefault();const r=String(new FormData(e).get("q")||"").trim();h(w({name:"search",q:r}))}),n&&t&&n.addEventListener("click",()=>{const a=!e.classList.contains("is-open");e.classList.toggle("is-open",a),n.setAttribute("aria-expanded",String(a)),n.setAttribute("aria-label",a?"ปิดช่องค้นหา":"เปิดช่องค้นหา"),a?t.focus():t.blur()})}function Gi(){const e=sa();return e.length?`<ul class="header-inbox__list">${e.map(t=>{const n=t.readAt?" is-read":"",a=Ma(t.createdAt);return`<li>
      <a class="inbox-item${n}" href="${l(t.href)}" data-link data-inbox-item="${l(t.id)}">
        <span class="inbox-item__kind">${l(t.kindLabel)}</span>
        <span class="inbox-item__title">${l(t.title)}</span>
        <span class="inbox-item__body">${Js(t.body)}</span>
        ${a?`<span class="inbox-item__date">${a}</span>`:""}
      </a>
    </li>`}).join("")}</ul>`:'<p class="header-inbox__empty">ยังไม่มีการแจ้งเตือน</p>'}function Xi(){const e=yo(),t=e>99?"99+":String(e);return`
          <div class="header-inbox" data-inbox>
            <button type="button" class="header-inbox__btn" data-inbox-toggle aria-expanded="false" aria-haspopup="true" aria-controls="inbox-panel">
              <span class="header-inbox__icon">
                ${cs}
                <span class="header-inbox__badge" data-inbox-badge${e?"":" hidden"}>${e?l(t):""}</span>
              </span>
              <span class="header-inbox__label">กล่องข้อความ</span>
            </button>
            <div class="header-inbox__panel" id="inbox-panel" hidden role="region" aria-label="กล่องข้อความ">
              <p class="header-inbox__heading">กล่องข้อความ</p>
              ${Gi()}
            </div>
          </div>`}function Tt(){const e=document.querySelector("[data-inbox]");if(!e)return;const t=e.querySelector("[data-inbox-toggle]"),n=e.querySelector(".header-inbox__panel");n&&(n.hidden=!0),t&&t.setAttribute("aria-expanded","false")}function Qi(){const e=document.querySelector("[data-account-toggle]"),t=document.querySelector(".account-menu__list");t&&(t.hidden=!0),e&&e.setAttribute("aria-expanded","false")}function An(){const e=document.querySelector(".site-header");if(!e)return;const t=Math.round(e.getBoundingClientRect().height);t>0&&document.documentElement.style.setProperty("--header-h",`${t}px`)}function ec(){const e=document.querySelector("[data-inbox]");if(!e)return;const t=e.querySelector("[data-inbox-toggle]"),n=e.querySelector(".header-inbox__panel"),a=e.querySelector("[data-inbox-badge]");!t||!n||(t.addEventListener("click",r=>{r.stopPropagation(),Qi();const o=n.hidden;n.hidden=!o,t.setAttribute("aria-expanded",String(o)),o&&($o(),a&&(a.hidden=!0,a.textContent=""),n.querySelectorAll(".inbox-item").forEach(s=>s.classList.add("is-read")))}),n.addEventListener("click",r=>{const o=r.target.closest("[data-inbox-item]");o&&(vo(o.dataset.inboxItem),o.classList.add("is-read"))}),document.addEventListener("click",r=>{r.target.closest("[data-inbox]")||Tt()},{once:!0}),document.addEventListener("keydown",r=>{r.key==="Escape"&&Tt()},{once:!0}))}function tc(){const e=document.querySelector("[data-account-toggle]"),t=document.querySelector(".account-menu__list");e&&t&&(e.addEventListener("click",a=>{a.stopPropagation(),Tt();const r=t.hidden;t.hidden=!r,e.setAttribute("aria-expanded",String(r))}),document.addEventListener("click",a=>{a.target.closest(".account-menu")||(t.hidden=!0,e.setAttribute("aria-expanded","false"))},{once:!0}),document.addEventListener("keydown",a=>{a.key==="Escape"&&(t.hidden=!0,e.setAttribute("aria-expanded","false"))},{once:!0}));const n=document.querySelector("[data-logout]");n&&n.addEventListener("click",()=>{vr(),h("/")})}function nc(){document.querySelectorAll("[data-follow]").forEach(e=>{e.addEventListener("click",()=>{const t=e.dataset.follow;if(!y()){Ds(T());return}const n=_r(t);if(!n.ok)return;const a=n.following;e.classList.toggle("is-following",a),e.setAttribute("aria-pressed",String(a));const r=e.querySelector("[data-follow-label]");r&&(r.textContent=a?"อยู่ในชั้นหนังสือแล้ว":"เพิ่มเข้าชั้น");const o=e.querySelector(".follow-btn__icon");o&&(o.outerHTML=a?Sa:wa)})})}function Za(){const e=document.querySelector("[data-google-placeholder]");e&&e.addEventListener("click",()=>{const o=document.querySelector("[data-google-message]");o&&(o.hidden=!1)});const t=document.querySelector("[data-signup-form]");t&&t.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await gr({displayName:c.get("displayName"),email:c.get("email"),password:c.get("password"),confirm:c.get("confirm"),acceptTerms:c.get("acceptTerms")==="on"});if(!i.ok){E(s,i.errors);return}Eo(),h(We())});const n=document.querySelector("[data-login-form]");n&&n.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await yr({email:c.get("email"),password:c.get("password")});if(!i.ok){E(s,i.errors);return}h(We())});const a=document.querySelector("[data-forgot-form]");a&&a.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await Tr({email:c.get("email")});if(!i.ok){E(s,i.errors);return}qa(s);const d=document.querySelector("[data-forgot-confirm]");if(!d)return;const u=i.resetPath?`<p class="forgot-mock-link">สำหรับต้นแบบนี้ ไม่มีการส่งอีเมลจริง ให้เปิด <a href="${i.resetPath}" data-link>ลิงก์ตั้งรหัสผ่านใหม่</a> เพื่อจำลองขั้นตอนจากอีเมล</p>`:'<p class="forgot-mock-link">สำหรับต้นแบบนี้ ไม่มีการส่งอีเมลจริง หากอีเมลนี้มีในระบบ ลิงก์จะปรากฏที่นี่</p>';d.hidden=!1,d.innerHTML=`
        <p class="form-success">หากอีเมลนี้มีอยู่ในระบบ ระบบจะส่งลิงก์ตั้งรหัสผ่านใหม่ให้ (ต้นแบบ: ไม่มีการส่งอีเมลจริง)</p>
        ${u}
      `});const r=document.querySelector("[data-reset-form]");r&&r.addEventListener("submit",async o=>{o.preventDefault();const s=o.currentTarget,c=new FormData(s),i=await Ir({token:c.get("token"),password:c.get("password"),confirm:c.get("confirm")});if(!i.ok){E(s,i.errors);return}h("/login?reset=1")})}function Wa(e){if(ko())return!1;if(e.name==="novel"){const t=b(e.id);return!!(t&&Fe(t))}if(e.name==="reader"){const t=b(e.novelId);return!!(t&&Fe(t))}return!1}function ac({onConfirm:e,onCancel:t}){const n=document.querySelector(".modal-backdrop");n&&n.remove();const a=document.createElement("div");a.className="modal-backdrop",a.setAttribute("role","dialog"),a.setAttribute("aria-modal","true"),a.setAttribute("aria-labelledby","age-gate-title"),a.innerHTML=`
    <div class="modal">
      <span class="badge-18">18+</span>
      <h2 id="age-gate-title">เนื้อหาสำหรับผู้มีอายุ 18 ปีขึ้นไป</h2>
      <p>หมวดนิยายอีโรติกและเรื่องที่ติดป้าย 18+ ต้องยืนยันอายุก่อนเข้าอ่าน คุณมีอายุ 18 ปีขึ้นไปหรือไม่?</p>
      <div class="modal__actions">
        <button class="btn btn-primary" type="button" data-age-yes>ฉันมีอายุ 18 ปีขึ้นไป</button>
        <button class="btn btn-ghost" type="button" data-age-no>ออก</button>
      </div>
    </div>
  `,document.body.appendChild(a),a.querySelector("[data-age-yes]").focus(),a.querySelector("[data-age-yes]").addEventListener("click",()=>{wo(),a.remove(),e()}),a.querySelector("[data-age-no]").addEventListener("click",()=>{a.remove(),t()})}function rc(e,{onNavigate:t}){e.addEventListener("click",n=>{const a=n.target.closest("a[data-link]");if(!a||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey)return;if(a.getAttribute("aria-disabled")==="true"){n.preventDefault();return}const r=new URL(a.href,window.location.origin);r.origin===window.location.origin&&(n.preventDefault(),t(`${r.pathname}${r.search}`,a))})}function oc(){const e=nt();L(),Y({force:e}),oa({force:e}),Lr()}const sc=document.getElementById("app");let Pe=null;function ic(e){return e.name==="home"?hs():e.name==="novel"?gs(e.id):e.name==="reader"?ys(e.novelId,e.chapterId):e.name==="login"?vs():e.name==="signup"?$s():e.name==="bookshelf"?ks():e.name==="profile"?Ss():e.name==="purchases"?xs():e.name==="terms"?Es():e.name==="privacy"?Ts():e.name==="forgot"?Is():e.name==="reset"?qs():e.name==="admin"?Ls():e.name==="coins"?bi():e.name==="events"?Di():e.name==="follow"?Ii():e.name==="search"?fs():tn()}function bt(e){oc(),sc.innerHTML=ic(e),Wi(e)}function ze(e,{replace:t=!1}={}){const n=new URL(e,window.location.origin),a=Oe(n.pathname),r=Dn(n.searchParams.get("next"));if((a.name==="bookshelf"||a.name==="coins"||a.name==="profile"||a.name==="purchases")&&!y()){h(`/login?next=${encodeURIComponent(n.pathname+n.search)}`,{replace:!0});return}if((a.name==="login"||a.name==="signup")&&y()){h(r,{replace:!0});return}if(Wa(a)){Pe=`${n.pathname}${n.search}`,ac({onConfirm(){const o=Pe||`${n.pathname}${n.search}`;Pe=null,T()!==o&&(t?history.replaceState({},"",o):history.pushState({},"",o));const s=new URL(o,window.location.origin);bt(Oe(s.pathname))},onCancel(){Pe=null;const o=Oe();(o.name==="novel"||o.name==="reader")&&h("/",{replace:!0})}}),window.location.pathname===n.pathname&&(a.name==="novel"||a.name==="reader")&&bt({name:"home"});return}bt(a)}rc(document,{onNavigate(e,t){const n=new URL(e,window.location.origin),a=t?.dataset.novelId,r=a?b(a):null,o=Oe(n.pathname);if(!!(r&&Fe(r)&&Wa(o))){ze(e);return}T()!==e&&history.pushState({},"",e),ze(e)}});window.addEventListener("popstate",()=>{ze(T(),{replace:!0})});_("light");fr().then(()=>{ze(T(),{replace:!0})});
