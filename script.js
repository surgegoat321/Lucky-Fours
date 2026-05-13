/* ──────────────────────────────────────────────────────────────
   LUCKY FOURS — Maison interactions
   Catalogue · modal · cart · wishlist · checkout · search ·
   account · gifts · women filter
   ────────────────────────────────────────────────────────────── */

const WATCHES = {
  caspian: { no:'I', name:'Caspian', ref:'04.CSP.OBSDN', type:'Automatic', price:79, finishes:6,
    img:'https://luckyfours.com/cdn/shop/files/1_e971742e-9f36-4b2a-a076-90523bb1fb60.webp?v=1760567187&width=1400',
    epi:'The reference that built the maison.',
    desc:'A sapphire dome over a hand-brushed obsidian dial. Quiet, unflashy, relentlessly precise — designed in Lyon, assembled in Tokyo, regulated before it leaves the bench.',
    specs:[['Case','39 mm · 316L surgical steel'],['Crystal','Sapphire · anti-reflective'],['Movement','Miyota 9015 automatic'],['Reserve','42 hours'],['Water','50 metres'],['Strap','Steel bracelet · 20 mm']],
    colors:['#1c1c1c','#1a3550','#2a5d3f','#8b6a3a','#a8a39a','#c9a961'],
    colorNames:['Obsidian','Ocean','Emerald','Bronze','Iron','Champagne'] },
  santos: { no:'II', name:'Santos', ref:'04.SNT.GLD', type:'Automatic', price:129, finishes:15,
    img:'https://luckyfours.com/cdn/shop/files/Santos.webp?v=1755722483&width=1400',
    epi:'Fifteen colourways. One geometry.',
    desc:"Squared bezel, exposed screws, integrated bracelet. The Santos is the maison's boardroom piece — designed in 2019, refined every season since. A watch that doesn't forget the weekend.",
    specs:[['Case','40 mm · brushed & polished'],['Crystal','Sapphire · double-domed'],['Movement','Miyota 8215 automatic'],['Reserve','40 hours'],['Water','50 metres'],['Strap','Integrated bracelet']],
    colors:['#c9a961','#1c1c1c','#a8a39a','#8b3a3a','#2c4a3e','#1a3550'],
    colorNames:['Champagne','Obsidian','Iron','Claret','Forest','Ocean'] },
  tourbillon: { no:'III', name:'Tourbillon', ref:'04.TBN.SKEL', type:'Mechanical · Skeleton', price:99, finishes:10,
    img:'https://luckyfours.com/cdn/shop/files/9_5dbf82bf-d70a-4688-bc87-c768789981b4.webp?v=1762198745&width=1400',
    epi:'The closest the house gets to showing off.',
    desc:'An open-heart skeletonised dial. Through the sapphire, the rotor moves in slow weight; through the caseback, the same. Built for those who watch the mechanism as often as the time.',
    specs:[['Case','41 mm · polished steel'],['Crystal','Sapphire · front & back'],['Movement','Seagull ST2130 skeleton'],['Reserve','40 hours'],['Water','30 metres'],['Strap','Polished bracelet · 22 mm']],
    colors:['#1c1c1c','#c9a961','#8b6a3a','#2c3e5c','#a8a39a'],
    colorNames:['Obsidian','Champagne','Bronze','Midnight','Iron'] },
  spine: { no:'IV', name:'Spine', ref:'04.SPN.IRN', type:'Imperial · Limited', price:149, finishes:4,
    img:'https://luckyfours.com/cdn/shop/files/2_13bef93d-6195-4886-8050-db54b99c0585.webp?v=1762198893&width=1400',
    epi:'The flagship. The heirloom.',
    desc:"Iron, platinum, gold. Four colourways, four hundred pieces a year. The maison's most considered reference — built for an heir who hasn't been born yet, and the man who hopes to wear it long enough to hand it down.",
    specs:[['Case','42 mm · hand-finished'],['Crystal','Box sapphire · A.R.-coated'],['Movement','Miyota 9015 · refinished'],['Reserve','42 hours'],['Edition','400 pieces / annum'],['Strap','Steel · gold-accent option']],
    colors:['#1c1c1c','#c9a961','#a8a39a','#8b6a3a'],
    colorNames:['Iron','Gold','Platinum','Bronze'] },
  brone: { no:'V', name:'Brone', ref:'04.BRN.OBSDN', type:'Quartz', price:79, finishes:10,
    img:'https://luckyfours.com/cdn/shop/files/7_d547bd28-ca75-4352-89f3-6981105a3628.webp?v=1763225151&width=1200',
    epi:'The daily driver.',
    desc:"Slim profile, applied indices, soft-edged case. Ten colourways covering everything from boardroom to barbecue — the maison's most versatile reference.",
    specs:[['Case','38 mm · brushed steel'],['Crystal','Sapphire · A.R.'],['Movement','Miyota 2035 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Steel bracelet · 20 mm']],
    colors:['#1c1c1c','#c9a961','#a8a39a','#8b6a3a','#2c4a3e','#1a3550'],
    colorNames:['Obsidian','Champagne','Iron','Bronze','Forest','Ocean'] },
  oceanus: { no:'VI', name:'Oceanus', ref:'04.OCN.DPBL', type:'Dive · 200 m', price:79, finishes:7,
    img:'https://luckyfours.com/cdn/shop/files/11_8efc79f5-04de-468f-b9ab-768eedb2060c.webp?v=1760564925&width=1200',
    epi:'For where the maison began.',
    desc:'Unidirectional dive bezel, lumed indices, screw-down crown. Two hundred metres of water resistance — engineered for the depths, dressed for the surface.',
    specs:[['Case','42 mm · brushed steel'],['Crystal','Sapphire · A.R.'],['Movement','Miyota 8215 automatic'],['Reserve','40 hours'],['Water','200 metres'],['Strap','Steel bracelet · rubber alt.']],
    colors:['#1a3550','#1c1c1c','#2a5d3f','#a8a39a','#c9a961'],
    colorNames:['Deep Blue','Obsidian','Emerald','Iron','Champagne'] },
  fortuno: { no:'VII', name:'Fortuno', ref:'04.FRT.EMRD', type:'Quartz', price:79, finishes:6,
    img:'https://luckyfours.com/cdn/shop/files/18_970a7064-18dd-420e-b0c8-1b70b96b45e5.webp?v=1777474807&width=1200',
    epi:'Colour, refined.',
    desc:"Six saturated dial colours: emerald, ocean, ice, obsidian, gold, claret. A piece that doesn't apologise for its colour, but doesn't shout about it either.",
    specs:[['Case','39 mm · polished steel'],['Crystal','Sapphire · domed'],['Movement','Miyota 2035 quartz'],['Battery','3 years'],['Water','50 metres'],['Strap','Integrated bracelet']],
    colors:['#2a5d3f','#1a3550','#dddbd0','#1c1c1c','#c9a961','#7c1f24'],
    colorNames:['Emerald','Ocean','Ice','Obsidian','Champagne','Claret'] },
  baretta: { no:'VIII', name:'Baretta', ref:'04.BRT.PNDA', type:'Chronograph', price:129, finishes:7,
    img:'https://luckyfours.com/cdn/shop/files/1x1_6f20463e-b6fb-4ff3-a6a4-81b318445deb.webp?v=1777217336&width=1200',
    epi:'Three sub-dials. One conviction.',
    desc:'Mechanical chronograph with tachymeter bezel. Built for the man who actually times things — and the man who likes that his watch could.',
    specs:[['Case','41 mm · brushed & polished'],['Crystal','Sapphire · A.R.'],['Movement','Seagull ST1901 chrono'],['Reserve','45 hours'],['Water','50 metres'],['Strap','Steel · leather alt.']],
    colors:['#1c1c1c','#dddbd0','#8b6a3a','#1a3550','#2c4a3e','#7c1f24','#a8a39a'],
    colorNames:['Panda','Ice','Bronze','Ocean','Forest','Claret','Iron'] },
  ronin: { no:'IX', name:'Ronin', ref:'04.RNN.ROSE', type:'Quartz', price:79, finishes:6,
    img:'https://luckyfours.com/cdn/shop/files/6_9bf62c3e-a05a-493a-9ce9-ee9509bdee82.webp?v=1771444819&width=1200',
    epi:'Solitary by design.',
    desc:"Square case, vertical brushing, no second hand. The maison's quietest piece — the one for the man who keeps his own counsel.",
    specs:[['Case','36 mm · brushed steel'],['Crystal','Sapphire'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Leather · 18 mm']],
    colors:['#1c1c1c','#d6a098','#a8a39a','#8b6a3a','#c9a961','#1a3550'],
    colorNames:['Obsidian','Rose','Iron','Bronze','Champagne','Ocean'] },
  chronometer: { no:'X', name:'Chronometer', ref:'04.CHR.STL', type:'Chronograph', price:89, finishes:8,
    img:'https://luckyfours.com/cdn/shop/files/11_cefec56b-0eb3-41c5-a6e8-ba72bd1e348e.webp?v=1771448705&width=1200',
    epi:'Precision, worn plainly.',
    desc:"Quartz chronograph with three sub-dials and date complication. The most accessible mechanical-feeling piece in the catalogue — and the maison's best-seller.",
    specs:[['Case','42 mm · polished steel'],['Crystal','Mineral · domed'],['Movement','Miyota OS20 chrono'],['Battery','2 years'],['Water','50 metres'],['Strap','Steel bracelet']],
    colors:['#1c1c1c','#c9a961','#a8a39a','#8b6a3a','#2c3e5c','#dddbd0'],
    colorNames:['Obsidian','Champagne','Iron','Bronze','Midnight','Ice'] },
  atlas: { no:'XI', name:'Atlas', ref:'04.ATL.GLD', type:'Quartz · World-time', price:79, finishes:9,
    img:'https://luckyfours.com/cdn/shop/files/5_4f8e3947-912d-4d56-bfc6-f1de743db1fe.webp?v=1773851541&width=1200',
    epi:'Continents, but quieter.',
    desc:"World-time dial with city names at the bezel. A travel watch for the man who keeps his second time-zone in his head — but appreciates that it's also on his wrist.",
    specs:[['Case','40 mm · two-tone'],['Crystal','Sapphire'],['Movement','Miyota GL30 quartz'],['Battery','3 years'],['Water','50 metres'],['Strap','Two-tone bracelet']],
    colors:['#c9a961','#a8a39a','#8b6a3a','#1c1c1c','#dddbd0','#1a3550'],
    colorNames:['Champagne','Iron','Bronze','Obsidian','Ice','Ocean'] },
  prague: { no:'XII', name:'Prague', ref:'04.PRG.SLV', type:'Quartz · Dress', price:89, finishes:8,
    img:'https://luckyfours.com/cdn/shop/files/7_e0328f1f-ff13-4835-9082-a41f8d0a35d2.webp?v=1762198743&width=1200',
    epi:'A dress watch, made for the morning.',
    desc:"Slim case, leather strap, Roman numerals. The maison's dress piece — for the wedding, the funeral, and everything in between.",
    specs:[['Case','38 mm · polished steel'],['Crystal','Sapphire'],['Movement','Miyota 9T quartz'],['Battery','4 years'],['Water','30 metres'],['Strap','Leather · 20 mm']],
    colors:['#a8a39a','#c9a961','#1c1c1c','#8b6a3a','#dddbd0'],
    colorNames:['Silver','Champagne','Obsidian','Bronze','Ice'] },
  voyager: { no:'XIII', name:'Voyager', ref:'04.VYG.GMT', type:'GMT · Travel', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/Untitled_design_299472f8-42b4-45cb-85bb-30a677c49b9a.webp?v=1762198749&width=1200',
    epi:'Two time-zones. One wrist.',
    desc:'GMT hand, 24-hour bezel, lumed indices. The travel companion — designed for the man whose appointments rarely sit in the same time-zone.',
    specs:[['Case','40 mm · brushed steel'],['Crystal','Sapphire · A.R.'],['Movement','Miyota 8285 GMT'],['Reserve','42 hours'],['Water','100 metres'],['Strap','NATO · steel alt.']],
    colors:['#1c1c1c','#1a3550','#2a5d3f','#a8a39a','#8b6a3a'],
    colorNames:['Obsidian','Ocean','Emerald','Iron','Bronze'] },
  aurelios: { no:'XIV', name:'Aurèlios', ref:'04.AUR.RGLD', type:'Quartz', price:79, finishes:11,
    img:'https://luckyfours.com/cdn/shop/files/10_ab8d2040-d2a8-4cd9-9e96-cd86fc5629c2.webp?v=1762198711&width=1200',
    epi:'Roman. Refined. Recurrent.',
    desc:'Eleven dial finishes — the broadest in the catalogue — across a single timeless case. Rose gold, obsidian, mother-of-pearl, and eight more.',
    specs:[['Case','36 mm · polished'],['Crystal','Sapphire'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Mesh bracelet · 18 mm']],
    colors:['#d6a098','#1c1c1c','#dddbd0','#a8a39a','#8b6a3a','#c9a961','#7c1f24'],
    colorNames:['Rose Gold','Obsidian','Pearl','Iron','Bronze','Champagne','Claret'] },
  wraith: { no:'XV', name:'Wraith', ref:'04.WRT.OBSDN', type:'Quartz · PVD', price:79, finishes:4,
    img:'https://luckyfours.com/cdn/shop/files/Main.webp?v=1760562155&width=1200',
    epi:'Black on black on black.',
    desc:'The most reductive piece in the catalogue. PVD-coated case, black dial, blacked-out indices. For the man who believes a watch should be read in shadow.',
    specs:[['Case','42 mm · PVD-coated'],['Crystal','Sapphire · A.R.'],['Movement','Miyota OS10 quartz'],['Battery','3 years'],['Water','50 metres'],['Strap','PVD bracelet']],
    colors:['#1c1c1c','#2c3e5c','#2a5d3f','#7c1f24'],
    colorNames:['Obsidian','Midnight','Forest','Claret'] },
  summit: { no:'XVI', name:'Summit', ref:'04.SMT.SLV', type:'Chronograph · Sport', price:99, finishes:4,
    img:'https://luckyfours.com/cdn/shop/files/4_b158b50a-b459-4afb-9d33-361bb4a9b844.webp?v=1762198324&width=1200',
    epi:'Built for altitude.',
    desc:"Chronograph with elapsed-time bezel and oversized indices. The Summit climbs where the Voyager travels — the maison's most weather-resistant piece.",
    specs:[['Case','44 mm · brushed steel'],['Crystal','Sapphire · 2.5 mm'],['Movement','Miyota JS25 chrono'],['Battery','2 years'],['Water','200 metres'],['Strap','Steel · rubber alt.']],
    colors:['#a8a39a','#1c1c1c','#1a3550','#c9a961'],
    colorNames:['Silver','Obsidian','Ocean','Champagne'] },

  /* ── additional men's ── */
  jaxon: { no:'XVII', name:'Jaxon', ref:'04.JXN.NBLA', type:'Quartz', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/24_96edf2f9-eae5-4339-b675-4392a97177c4.webp?v=1777475680&width=1200',
    epi:'Contemporary tone.',
    desc:"Modern proportions, applied indices, five contemporary colourways. The maison's most forward piece — including the signature Nebula and Regalia tones.",
    specs:[['Case','40 mm · brushed steel'],['Crystal','Mineral · A.R.'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','50 metres'],['Strap','Steel bracelet · 20 mm']],
    colors:['#1c1c1c','#1a3550','#a8a39a','#c9a961','#7c1f24'],
    colorNames:['Obsidian','Nebula','Iron','Regalia','Claret'] },
  nassau: { no:'XVIII', name:'Nassau', ref:'04.NSU.ICE', type:'Quartz', price:79, finishes:4,
    img:'https://luckyfours.com/cdn/shop/files/4_13b42498-c1bd-471f-a75d-39c05d304334.webp?v=1762198755&width=1200',
    epi:'Resort hours.',
    desc:'Bright dial, slim bezel, four crystalline finishes. The piece for the man who keeps a different hour at the pool than at the office.',
    specs:[['Case','40 mm · polished steel'],['Crystal','Sapphire'],['Movement','Miyota 2035 quartz'],['Battery','3 years'],['Water','50 metres'],['Strap','Mesh bracelet · 20 mm']],
    colors:['#dddbd0','#a8a39a','#c9a961','#1c1c1c'],
    colorNames:['Ice','Silver','Champagne','Obsidian'] },
  princeoak: { no:'XIX', name:'Prince Oak', ref:'04.PRO.FRGD', type:'Mechanical · Integrated', price:99, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_a60b097c-8f74-4f99-b5d3-57e723e00c19.webp?v=1762198509&width=1200',
    epi:'Forged. Refined.',
    desc:"Octagonal bezel with integrated bracelet — the maison's most considered silhouette. Forged green, forged blue, obsidian, rose gold, and silver.",
    specs:[['Case','41 mm · forged & polished'],['Crystal','Sapphire · A.R.'],['Movement','Seiko NH35 automatic'],['Reserve','41 hours'],['Water','100 metres'],['Strap','Integrated bracelet']],
    colors:['#2c4a3e','#1a3550','#1c1c1c','#d6a098','#a8a39a'],
    colorNames:['Forged Green','Forged Blue','Obsidian','Rose Gold','Silver'] },
  aura: { no:'XX', name:'Aura', ref:'04.AUR.MNCH', type:'Quartz · Slim', price:79, finishes:2,
    img:'https://luckyfours.com/cdn/shop/files/2_1553554d-343c-417a-aa46-f1391cbe5a29.webp?v=1762198875&width=1200',
    epi:'Two finishes. One philosophy.',
    desc:"The maison's most reductive piece. Two finishes — Monarch (gold) and Midnight (steel). Designed in 36mm to wear elegant on any wrist.",
    specs:[['Case','36 mm · polished'],['Crystal','Mineral'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Mesh · 18 mm']],
    colors:['#c9a961','#1c1c1c'],
    colorNames:['Monarch','Midnight'] },

  /* ── women's collection (19) ── */
  calista: { no:'W·I', name:'Calista', ref:'04.CST.PRL', type:'Quartz', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/4_028469d1-371b-4f20-b62f-11adbccf0b61.webp?v=1762198322&width=1200',
    epi:'Stars of the morning.',
    desc:'A 32mm case with applied pavé indices and a mother-of-pearl dial. Light catches differently here — the way it does on water at six in the morning.',
    specs:[['Case','32 mm · polished steel'],['Crystal','Sapphire'],['Movement','Miyota 1L45 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Mesh bracelet · 14 mm']],
    colors:['#dddbd0','#d6a098','#c9a961','#a8a39a','#1c1c1c'],
    colorNames:['Pearl','Rose','Champagne','Silver','Obsidian'] },
  lyra: { no:'W·II', name:'Lyra', ref:'04.LYR.STAR', type:'Quartz · Pavé', price:79, finishes:6,
    img:'https://luckyfours.com/cdn/shop/files/6_0f45fe3e-7fbc-46fc-9bae-3ae4a4dd026e.webp?v=1762198752&width=1200',
    epi:'Constellation, condensed.',
    desc:"Pavé indices around a celestial dial. Six finishes — including the maison's signature Stardust gradient.",
    specs:[['Case','34 mm · polished steel'],['Crystal','Sapphire'],['Movement','Miyota 1L45 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Mesh bracelet · 16 mm']],
    colors:['#1a3550','#1c1c1c','#dddbd0','#c9a961','#d6a098','#a8a39a'],
    colorNames:['Midnight','Obsidian','Pearl','Champagne','Rose','Silver'] },
  venoria: { no:'W·III', name:'Venoria', ref:'04.VNR.MOP', type:'Quartz', price:89, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_7087b413-13c7-4e2f-85e2-8568413afb92.webp?v=1762198565&width=1200',
    epi:'Quiet glamour.',
    desc:'Curved sapphire over a mother-of-pearl dial. Subdued, unhurried, designed in 34mm for any wrist.',
    specs:[['Case','34 mm · brushed steel'],['Crystal','Sapphire · domed'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Mesh bracelet · 16 mm']],
    colors:['#dddbd0','#c9a961','#d6a098','#1c1c1c','#a8a39a'],
    colorNames:['Pearl','Champagne','Rose','Obsidian','Silver'] },
  thea: { no:'W·IV', name:'Thea', ref:'04.THE.RGLD', type:'Quartz · Pavé', price:99, finishes:4,
    img:'https://luckyfours.com/cdn/shop/files/6_06aaa7fe-b367-4043-872a-509351ac1692.webp?v=1762198753&width=1200',
    epi:'Goddess of light.',
    desc:"The maison's dressiest women's reference. Diamond-look pavé bezel, 30mm case, four refined finishes for the evening.",
    specs:[['Case','30 mm · polished rose-gold'],['Crystal','Sapphire'],['Movement','Miyota 1L45 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Mesh bracelet · 14 mm']],
    colors:['#d6a098','#dddbd0','#c9a961','#1c1c1c'],
    colorNames:['Rose Gold','Pearl','Champagne','Obsidian'] },
  surmen: { no:'W·V', name:'Surmen', ref:'04.SRM.IVR', type:'Quartz', price:79, finishes:4,
    img:'https://luckyfours.com/cdn/shop/files/5_9de0cb67-3a43-4c63-884a-0836d900ff4e.webp?v=1762198821&width=1200',
    epi:'Modern with intention.',
    desc:"A 36mm everyday piece with clean indices and a contemporary integrated bracelet. The women's daily driver.",
    specs:[['Case','36 mm · brushed steel'],['Crystal','Sapphire · A.R.'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','50 metres'],['Strap','Integrated bracelet']],
    colors:['#dddbd0','#1c1c1c','#a8a39a','#c9a961'],
    colorNames:['Ivory','Obsidian','Iron','Champagne'] },
  maso: { no:'W·VI', name:'Maso', ref:'04.MSO.TT', type:'Quartz · Two-tone', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_8407687b-4096-44eb-a1ad-2dd1a815422e.webp?v=1762198824&width=1200',
    epi:'Sculpted profile.',
    desc:'Two-tone case with sculpted lugs. Five finishes alternating brushed silver with polished gold — the maison\'s most architectural women\'s piece.',
    specs:[['Case','34 mm · two-tone'],['Crystal','Sapphire'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Two-tone bracelet']],
    colors:['#c9a961','#dddbd0','#d6a098','#1c1c1c','#a8a39a'],
    colorNames:['Champagne','Pearl','Rose','Obsidian','Silver'] },
  leto: { no:'W·VII', name:'Leto', ref:'04.LTO.ROM', type:'Quartz · Dress', price:89, finishes:6,
    img:'https://luckyfours.com/cdn/shop/files/1_11833a79-a341-4d7c-bc8c-f483e5aa5f12.webp?v=1762198753&width=1200',
    epi:"The maison's mother.",
    desc:"Roman numerals on a slim 32mm case with a leather strap. Six finishes — the maison's most classical women's reference.",
    specs:[['Case','32 mm · polished steel'],['Crystal','Sapphire'],['Movement','Miyota 9T quartz'],['Battery','4 years'],['Water','30 metres'],['Strap','Leather · 14 mm']],
    colors:['#dddbd0','#c9a961','#d6a098','#1c1c1c','#8b6a3a','#a8a39a'],
    colorNames:['Pearl','Champagne','Rose','Obsidian','Caramel','Silver'] },
  francesca: { no:'W·VIII', name:'Francesca', ref:'04.FRA.PNK', type:'Quartz', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_872aeb5f-f847-4107-8be9-cd9075d943e1.webp?v=1762198818&width=1200',
    epi:'Italian poise.',
    desc:"Curved case with a softened bezel. Five seasonal finishes — including the maison's signature Aurora Pink.",
    specs:[['Case','32 mm · polished steel'],['Crystal','Sapphire · domed'],['Movement','Miyota 1L45 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Leather · 14 mm']],
    colors:['#d6a098','#dddbd0','#c9a961','#1c1c1c','#a8a39a'],
    colorNames:['Aurora','Pearl','Champagne','Obsidian','Silver'] },
  lora: { no:'W·IX', name:'Lora', ref:'04.LRA.MNT', type:'Quartz', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_04393797-5280-4752-84f4-e9f908c8f008.webp?v=1762198818&width=1200',
    epi:'Daily, beautifully.',
    desc:'A 36mm everyday piece with applied indices and mesh bracelet. Five finishes from boardroom to brunch.',
    specs:[['Case','36 mm · brushed steel'],['Crystal','Sapphire'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','50 metres'],['Strap','Mesh bracelet · 16 mm']],
    colors:['#2c4a3e','#dddbd0','#c9a961','#1c1c1c','#a8a39a'],
    colorNames:['Mint','Pearl','Champagne','Obsidian','Silver'] },
  runa: { no:'W·X', name:'Runa', ref:'04.RNA.ENG', type:'Quartz', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_73aa30f1-a9ce-4fd7-b1e9-06b5a625f432.webp?v=1762198817&width=1200',
    epi:'Inscribed in steel.',
    desc:'An engraved case-back with maison hallmarks. 34mm, five finishes, leather or mesh strap options.',
    specs:[['Case','34 mm · polished steel'],['Crystal','Sapphire'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Mesh · 16 mm']],
    colors:['#1c1c1c','#dddbd0','#c9a961','#d6a098','#a8a39a'],
    colorNames:['Obsidian','Pearl','Champagne','Rose','Silver'] },
  tyla: { no:'W·XI', name:'Tyla', ref:'04.TYL.EMR', type:'Quartz', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_c6ea52f5-d850-407f-94b9-eee587b4402c.webp?v=1762198826&width=1200',
    epi:'Effortless edge.',
    desc:"A vibrant dial in five saturated colourways. 36mm with an integrated bracelet — the maison's most contemporary women's piece.",
    specs:[['Case','36 mm · brushed steel'],['Crystal','Sapphire'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','50 metres'],['Strap','Integrated bracelet']],
    colors:['#2a5d3f','#1a3550','#7c1f24','#1c1c1c','#dddbd0'],
    colorNames:['Emerald','Ocean','Claret','Obsidian','Pearl'] },
  kera: { no:'W·XII', name:'Kera', ref:'04.KRA.GEO', type:'Quartz · Geometric', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_5fc036f3-3d5b-49de-acbf-2b98a1f9df81.webp?v=1762198822&width=1200',
    epi:'Architectural lines.',
    desc:"A geometric case shape with faceted lugs. Five finishes — the maison's most sculptural women's reference.",
    specs:[['Case','34 mm · polished steel'],['Crystal','Sapphire'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Polished bracelet · 16 mm']],
    colors:['#c9a961','#dddbd0','#1c1c1c','#a8a39a','#d6a098'],
    colorNames:['Champagne','Pearl','Obsidian','Silver','Rose'] },
  gracie: { no:'W·XIII', name:'Gracie', ref:'04.GRA.IVR', type:'Quartz · Dress', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_83909173-b65d-4565-a007-86fd7c93eccc.webp?v=1762198822&width=1200',
    epi:'Refined posture.',
    desc:'A classical 32mm dress piece with Roman numerals and a slim profile. Five finishes for ceremony and everyday.',
    specs:[['Case','32 mm · polished steel'],['Crystal','Sapphire'],['Movement','Miyota 9T quartz'],['Battery','4 years'],['Water','30 metres'],['Strap','Leather · 14 mm']],
    colors:['#dddbd0','#c9a961','#d6a098','#1c1c1c','#a8a39a'],
    colorNames:['Ivory','Champagne','Rose','Obsidian','Silver'] },
  nyx: { no:'W·XIV', name:'Nyx', ref:'04.NYX.OBS', type:'Quartz', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_a542ad28-c3f7-4943-852f-cc89e2c78993.webp?v=1762198819&width=1200',
    epi:"The night's piece.",
    desc:"An obsidian dial with applied gold indices. The maison's most dramatic women's piece — for the woman who reads time by moonlight.",
    specs:[['Case','34 mm · polished steel'],['Crystal','Sapphire · A.R.'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Mesh bracelet · 16 mm']],
    colors:['#1c1c1c','#2c3e5c','#7c1f24','#1a3550','#c9a961'],
    colorNames:['Obsidian','Midnight','Claret','Ocean','Champagne'] },
  mila: { no:'W·XV', name:'Mila', ref:'04.MIL.PRL', type:'Quartz', price:69, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_6df6f3e6-2fe4-4a56-9d6c-9391535bbf81.webp?v=1762198819&width=1200',
    epi:'Soft brilliance.',
    desc:"A 32mm mother-of-pearl piece in five seasonal finishes. The maison's most affordable women's reference — and a popular gift.",
    specs:[['Case','32 mm · polished steel'],['Crystal','Sapphire'],['Movement','Miyota 1L45 quartz'],['Battery','3 years'],['Water','30 metres'],['Strap','Mesh bracelet · 14 mm']],
    colors:['#dddbd0','#d6a098','#c9a961','#1c1c1c','#a8a39a'],
    colorNames:['Pearl','Rose','Champagne','Obsidian','Silver'] },
  phila: { no:'W·XVI', name:'Phila', ref:'04.PHL.ROM', type:'Quartz · Dress', price:89, finishes:6,
    img:'https://luckyfours.com/cdn/shop/files/5_d03f134c-8664-47b3-9120-38a19c79e65e.webp?v=1762198825&width=1200',
    epi:'Crowned in light.',
    desc:"Roman numerals on a two-tone case. Six finishes — the maison's most regal women's piece.",
    specs:[['Case','34 mm · two-tone'],['Crystal','Sapphire'],['Movement','Miyota 9T quartz'],['Battery','4 years'],['Water','30 metres'],['Strap','Two-tone bracelet']],
    colors:['#c9a961','#dddbd0','#d6a098','#1c1c1c','#a8a39a','#8b6a3a'],
    colorNames:['Champagne','Pearl','Rose','Obsidian','Silver','Bronze'] },
  milo: { no:'W·XVII', name:'Milo', ref:'04.MLO.SLM', type:'Quartz · Slim', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_35cb47b1-da13-43bc-8ec7-e9f800c4ef5b.webp?v=1762198824&width=1200',
    epi:'Quiet movement.',
    desc:'A slim 34mm profile with a refined sweep second. Five finishes — the maison\'s lightest women\'s piece.',
    specs:[['Case','34 mm · slim polished'],['Crystal','Sapphire'],['Movement','Miyota 9T quartz'],['Battery','4 years'],['Water','30 metres'],['Strap','Mesh · 16 mm']],
    colors:['#dddbd0','#c9a961','#1c1c1c','#d6a098','#a8a39a'],
    colorNames:['Pearl','Champagne','Obsidian','Rose','Silver'] },
  loressa: { no:'W·XVIII', name:'Loressa', ref:'04.LRS.HRL', type:'Quartz · Dress', price:89, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_83ab6e10-3bc4-4d78-a660-da68f8eb7b6e.webp?v=1762198821&width=1200',
    epi:'Heirloom in waiting.',
    desc:"A 36mm gold-tone case on a polished bracelet. Five finishes — the maison's most dressed women's piece, designed to be handed down.",
    specs:[['Case','36 mm · gold-tone polished'],['Crystal','Sapphire · A.R.'],['Movement','Miyota 9T quartz'],['Battery','4 years'],['Water','50 metres'],['Strap','Polished bracelet · 18 mm']],
    colors:['#c9a961','#d6a098','#dddbd0','#1c1c1c','#a8a39a'],
    colorNames:['Champagne','Rose','Pearl','Obsidian','Silver'] },
  humir: { no:'W·XIX', name:'Humir', ref:'04.HMR.IRN', type:'Quartz', price:79, finishes:5,
    img:'https://luckyfours.com/cdn/shop/files/5_5063d5aa-86d4-4b0c-a56d-42b45d743504.webp?v=1762198825&width=1200',
    epi:'Soft strength.',
    desc:"A 36mm brushed steel case with applied indices. Five finishes — the maison's most utilitarian women's piece.",
    specs:[['Case','36 mm · brushed steel'],['Crystal','Sapphire'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','50 metres'],['Strap','Steel bracelet · 18 mm']],
    colors:['#a8a39a','#1c1c1c','#c9a961','#1a3550','#dddbd0'],
    colorNames:['Iron','Obsidian','Champagne','Ocean','Pearl'] },
};

const WOMEN_SLUGS = ['caspian','brone','fortuno','ronin','atlas','prague','aurelios'];

(() => {
  'use strict';

  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => r.querySelectorAll(s);

  // ── STATE ─────────────────────────────────────────────────
  const cart = new Map();           // slug → { qty, finish }
  const wishlist = new Set();       // slug
  let currentModalSlug = null;
  let currentFinishIdx = 0;
  let lastModalTrigger = null;
  let signedInName = null;

  // ── HELPERS ───────────────────────────────────────────────
  const showToast = (msg) => {
    const t = $('#toast');
    if (!t) return;
    t.querySelector('.toast__msg').textContent = msg;
    t.classList.add('on');
    clearTimeout(t._timer);
    t._timer = setTimeout(() => t.classList.remove('on'), 2400);
  };
  const lockBody = () => {
    document.documentElement.style.setProperty(
      '--scrollbar-w',
      `${window.innerWidth - document.documentElement.clientWidth}px`
    );
  };
  const scrollToSection = (id) => {
    if (id === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const el = document.getElementById(id);
    if (!el) return;
    const headerH = $('.mast')?.getBoundingClientRect().height || 80;
    const y = el.getBoundingClientRect().top + window.scrollY - headerH - 20;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  // ── CART ──────────────────────────────────────────────────
  const cartTotalItems = () => { let n = 0; cart.forEach(v => n += v.qty); return n; };
  const computeTotals = () => {
    const flat = [];
    cart.forEach((v, slug) => { for (let i = 0; i < v.qty; i++) flat.push({ slug, price: WATCHES[slug].price }); });
    flat.sort((a, b) => b.price - a.price);
    let subtotal = 0, discount = 0;
    flat.forEach((it, idx) => { subtotal += it.price; if (idx % 2 === 1) { it.free = true; discount += it.price; } });
    return { items: flat, subtotal, discount, total: subtotal - discount };
  };
  const addItem = (slug, finishIdx = 0) => {
    const ex = cart.get(slug);
    if (ex) { ex.qty += 1; ex.finish = finishIdx; }
    else cart.set(slug, { qty: 1, finish: finishIdx });
    updateBagCount();
    renderCart();
    showToast(`${WATCHES[slug].name} added to bag`);
  };
  const changeQty = (slug, d) => {
    const c = cart.get(slug); if (!c) return;
    c.qty += d; if (c.qty <= 0) cart.delete(slug);
    updateBagCount(); renderCart();
  };
  const removeItem = (slug) => { cart.delete(slug); updateBagCount(); renderCart(); };

  const updateBagCount = () => {
    const n = cartTotalItems();
    $$('.bag-count, #cart-count').forEach(el => {
      el.textContent = n;
      el.setAttribute('data-zero', n === 0 ? 'true' : 'false');
    });
    $$('.bag-count').forEach(el => {
      el.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.45)' }, { transform: 'scale(1)' }],
        { duration: 420, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
    });
  };

  const renderCart = () => {
    const body = $('#cart-body'), foot = $('#cart-foot'), totalsEl = $('#cart-totals');
    if (!body || !foot || !totalsEl) return;

    if (cart.size === 0) {
      foot.style.display = 'none';
      body.innerHTML = `
        <div class="cart__empty">
          <span class="cart__empty-icon">
            <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M5 7h14l-1.5 13H6.5L5 7z"/><path d="M9 7V5a3 3 0 1 1 6 0v2"/></svg>
          </span>
          <p class="cart__empty-msg">Your bag is empty.</p>
          <p class="cart__empty-sub">Discover the catalogue — twenty-four references await.</p>
          <a href="#bestsellers" class="link-arrow link-arrow--red" data-cart-close>
            <span>Browse the catalogue</span><span class="link-arrow__sep" aria-hidden="true"></span>
          </a>
        </div>`;
      return;
    }
    foot.style.display = '';

    let html = '';
    cart.forEach((v, slug) => {
      const w = WATCHES[slug];
      const finishName = w.colorNames?.[v.finish] || '';
      html += `
        <article class="ci">
          <a href="#" class="ci__img" data-watch="${slug}">
            <img src="${w.img}" alt="${w.name}" loading="lazy" />
          </a>
          <div class="ci__body">
            <div class="ci__top">
              <h3 class="ci__name">${w.name}</h3>
              <span class="ci__price">$${w.price * v.qty}</span>
            </div>
            <span class="ci__meta">${finishName ? finishName + ' · ' : ''}Ref. ${w.ref}</span>
            <div class="ci__bottom">
              <div class="ci__qty" role="group" aria-label="Quantity">
                <button type="button" data-qty="-1" data-slug="${slug}" aria-label="Decrease">−</button>
                <span>${v.qty}</span>
                <button type="button" data-qty="1" data-slug="${slug}" aria-label="Increase">+</button>
              </div>
              <button type="button" class="ci__remove" data-remove="${slug}">Remove</button>
            </div>
          </div>
        </article>`;
    });
    body.innerHTML = html;

    const { subtotal, discount, total } = computeTotals();
    let t = `<div class="t-row"><span class="t-row__lbl">Subtotal</span><span>$${subtotal}.00</span></div>`;
    if (discount > 0) t += `<div class="t-row t-row--save"><span class="t-row__lbl">Mother's Day Gift</span><span>−$${discount}.00</span></div>`;
    t += `<div class="t-row"><span class="t-row__lbl">Shipping</span><span>Complimentary</span></div>`;
    t += `<div class="t-row t-row--total"><span>Total</span><span><span class="t-total">$${total}</span><small>USD</small></span></div>`;
    totalsEl.innerHTML = t;
  };

  const openCart = () => {
    lockBody(); renderCart();
    $('#cart').classList.add('is-open');
    $('#cart').setAttribute('aria-hidden', 'false');
    document.body.classList.add('cart-open');
  };
  const closeCart = () => {
    $('#cart').classList.remove('is-open');
    $('#cart').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cart-open');
  };

  // ── WISHLIST ─────────────────────────────────────────────
  const updateWishCount = () => {
    const n = wishlist.size;
    $$('.wish-count, #wish-count-num').forEach(el => {
      el.textContent = n;
      el.setAttribute('data-zero', n === 0 ? 'true' : 'false');
    });
    $$('.wish-count').forEach(el => {
      el.animate(
        [{ transform: 'scale(1)' }, { transform: 'scale(1.45)' }, { transform: 'scale(1)' }],
        { duration: 380, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' }
      );
    });
  };
  const toggleWish = (slug) => {
    if (wishlist.has(slug)) { wishlist.delete(slug); showToast(`${WATCHES[slug].name} removed from wishlist`); }
    else { wishlist.add(slug); showToast(`${WATCHES[slug].name} saved to wishlist`); }
    updateWishCount();
    renderWishlist();
    // sync the modal heart if currently open
    if (currentModalSlug === slug) {
      $('#modal-fav')?.classList.toggle('is-on', wishlist.has(slug));
    }
  };
  const renderWishlist = () => {
    const body = $('#wishlist-body');
    if (!body) return;
    if (wishlist.size === 0) {
      body.innerHTML = `
        <div class="cart__empty">
          <span class="cart__empty-icon">
            <svg viewBox="0 0 22 22" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M11 19s-7-4.5-7-10a4 4 0 0 1 7-2.7A4 4 0 0 1 18 9c0 5.5-7 10-7 10z"/></svg>
          </span>
          <p class="cart__empty-msg">No favourites yet.</p>
          <p class="cart__empty-sub">Tap the heart on any reference to save it for later.</p>
          <a href="#bestsellers" class="link-arrow link-arrow--red" data-wishlist-close>
            <span>Browse the catalogue</span><span class="link-arrow__sep" aria-hidden="true"></span>
          </a>
        </div>`;
      return;
    }
    let html = '';
    wishlist.forEach((slug) => {
      const w = WATCHES[slug];
      html += `
        <article class="wi">
          <div class="wi__img" data-watch="${slug}">
            <img src="${w.img}" alt="${w.name}" loading="lazy" />
          </div>
          <div class="wi__body">
            <div class="wi__top">
              <h3 class="wi__name">${w.name}</h3>
              <span class="wi__price">$${w.price}</span>
            </div>
            <span class="wi__meta">${w.type} · Ref. ${w.ref}</span>
            <div class="wi__actions">
              <button type="button" class="wi__add" data-wish-add="${slug}">Add to bag</button>
              <button type="button" class="wi__remove" data-wish-remove="${slug}">Remove</button>
            </div>
          </div>
        </article>`;
    });
    body.innerHTML = html;
  };
  const openWishlist = () => {
    lockBody(); renderWishlist();
    $('#wishlist').classList.add('is-open');
    $('#wishlist').setAttribute('aria-hidden', 'false');
    document.body.classList.add('cart-open');
  };
  const closeWishlist = () => {
    $('#wishlist').classList.remove('is-open');
    $('#wishlist').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cart-open');
  };

  // ── SEARCH ───────────────────────────────────────────────
  const renderSearchResults = (q) => {
    const resultsEl = $('#search-results');
    const tagsEl = $('#search-tags');
    if (!resultsEl) return;
    q = q.trim().toLowerCase();
    if (!q) {
      resultsEl.innerHTML = `<p class="search__hint">Twenty-four references across four collections.<br/>Try <em>Caspian</em>, <em>tourbillon</em>, <em>obsidian</em>, or <em>chronograph</em>.</p>`;
      if (tagsEl) tagsEl.style.display = 'flex';
      return;
    }
    if (tagsEl) tagsEl.style.display = 'none';

    const matches = [];
    Object.entries(WATCHES).forEach(([slug, w]) => {
      const hay = `${w.name} ${w.ref} ${w.type} ${w.epi} ${w.desc} ${w.colorNames.join(' ')}`.toLowerCase();
      if (hay.includes(q)) matches.push({ slug, w });
    });

    if (matches.length === 0) {
      resultsEl.innerHTML = `
        <p class="search__no-results">No references match <em>"${q}"</em>.<br/>Try a different term — name, material, or movement.</p>`;
      return;
    }

    resultsEl.innerHTML = `
      <div class="search__results-grid">
        ${matches.map(({ slug, w }) => `
          <button class="s-result" type="button" data-watch="${slug}">
            <div class="s-result__img"><img src="${w.img}" alt="${w.name}" /></div>
            <h4 class="s-result__name">${w.name}</h4>
            <span class="s-result__meta">${w.type}</span>
            <span class="s-result__price">From $${w.price}</span>
          </button>
        `).join('')}
      </div>
    `;
  };
  const openSearch = () => {
    lockBody();
    $('#search').classList.add('is-open');
    $('#search').setAttribute('aria-hidden', 'false');
    document.body.classList.add('cart-open');
    setTimeout(() => $('#search-input')?.focus(), 100);
  };
  const closeSearch = () => {
    $('#search').classList.remove('is-open');
    $('#search').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cart-open');
    $('#search-input').value = '';
    renderSearchResults('');
    $('#search-clear').style.display = 'none';
  };

  // ── ACCOUNT MODAL ────────────────────────────────────────
  const openAccount = () => {
    lockBody();
    $('#account').classList.add('is-open');
    $('#account').setAttribute('aria-hidden', 'false');
    document.body.classList.add('cart-open');
  };
  const closeAccount = () => {
    $('#account').classList.remove('is-open');
    $('#account').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cart-open');
  };
  const switchAcctTab = (tab) => {
    $$('.acct__tab').forEach(t => t.classList.toggle('is-on', t.dataset.tab === tab));
    $$('.acct__form').forEach(f => { f.hidden = f.dataset.form !== tab; });
  };

  // ── GIFTS MODAL ──────────────────────────────────────────
  const GIFT_TIERS = {
    'under-100': { lbl: 'Under $100', filter: (w) => w.price < 100 },
    'under-150': { lbl: '$100 — $150', filter: (w) => w.price >= 100 && w.price <= 150 },
    'imperial':  { lbl: 'Imperial', filter: (w) => w.type.includes('Imperial') || w.price >= 149 },
  };
  const renderGifts = (tier) => {
    const grid = $('#gifts-grid');
    if (!grid) return;
    const filterFn = GIFT_TIERS[tier].filter;
    const matches = Object.entries(WATCHES).filter(([, w]) => filterFn(w));
    grid.innerHTML = matches.map(([slug, w]) => `
      <button type="button" class="g-card" data-watch="${slug}">
        <div class="g-card__img"><img src="${w.img}" alt="${w.name}" /></div>
        <h4 class="g-card__name">${w.name}</h4>
        <span class="g-card__meta">${w.type}</span>
        <span class="g-card__price">From $${w.price}</span>
      </button>
    `).join('');
  };
  const openGifts = () => {
    lockBody();
    renderGifts('under-100');
    $$('.gifts__tab').forEach(t => t.classList.toggle('is-on', t.dataset.giftTab === 'under-100'));
    $('#gifts').classList.add('is-open');
    $('#gifts').setAttribute('aria-hidden', 'false');
    document.body.classList.add('cart-open');
  };
  const closeGifts = () => {
    $('#gifts').classList.remove('is-open');
    $('#gifts').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('cart-open');
  };
  const switchGiftTab = (tab) => {
    $$('.gifts__tab').forEach(t => t.classList.toggle('is-on', t.dataset.giftTab === tab));
    renderGifts(tab);
  };

  // ── WOMEN FILTER ─────────────────────────────────────────
  const applyWomen = (on) => {
    document.body.classList.toggle('women-only', on);
    $$('.nav-link[data-women]').forEach(l => l.classList.toggle('is-active', on));
    $('#all-overline').textContent = on ? 'Women’s Collection' : 'All References';
    if (on) {
      setTimeout(() => scrollToSection('bestsellers'), 60);
    }
  };

  // ── CHECKOUT (kept) ──────────────────────────────────────
  const renderCheckoutSummary = () => {
    const itemsEl = $('#check-items'), totalsEl = $('#check-totals');
    if (!itemsEl || !totalsEl) return;
    let html = '';
    cart.forEach((v, slug) => {
      const w = WATCHES[slug];
      const finishName = w.colorNames?.[v.finish] || '';
      html += `
        <div class="cs-item">
          <div class="cs-item__img"><img src="${w.img}" alt="" /><span class="cs-item__qty">${v.qty}</span></div>
          <div class="cs-item__info">
            <strong>${w.name}</strong>
            <span class="cs-item__meta">${finishName ? finishName + ' · ' : ''}${w.ref}</span>
          </div>
          <span class="cs-item__price">$${w.price * v.qty}</span>
        </div>`;
    });
    itemsEl.innerHTML = html;
    const { subtotal, discount, total } = computeTotals();
    let t = `<div class="t-row"><span class="t-row__lbl">Subtotal</span><span>$${subtotal}.00</span></div>`;
    if (discount > 0) t += `<div class="t-row t-row--save"><span class="t-row__lbl">Mother's Day Gift</span><span>−$${discount}.00</span></div>`;
    t += `<div class="t-row"><span class="t-row__lbl">Shipping</span><span>Complimentary</span></div>`;
    t += `<div class="t-row t-row--total"><span>Total</span><span><span class="t-total">$${total}</span><small>USD</small></span></div>`;
    totalsEl.innerHTML = t;
    $('#check-total').textContent = `$${total}`;
  };
  const openCheckout = () => {
    if (cart.size === 0) { showToast('Your bag is empty'); return; }
    closeCart();
    renderCheckoutSummary();
    $('#checkout').classList.add('is-open');
    $('#checkout').setAttribute('aria-hidden', 'false');
    document.body.classList.add('checkout-open');
    lockBody();
    window.scrollTo(0, 0); $('#checkout').scrollTo({ top: 0 });
  };
  const closeCheckout = () => {
    $('#checkout').classList.remove('is-open');
    $('#checkout').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('checkout-open');
  };
  const validateCheckout = () => {
    const form = $('#checkout-form');
    let ok = true;
    $$('.field.has-error', form).forEach(f => f.classList.remove('has-error'));
    $$('input[required], select[required]', form).forEach(input => {
      const val = input.value.trim();
      if (!val) { input.closest('.field').classList.add('has-error'); ok = false; }
      else if (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val)) {
        input.closest('.field').classList.add('has-error'); ok = false;
      }
    });
    const card = $('#cf-card');
    if (card && card.value.replace(/\s/g, '').length < 13) {
      card.closest('.field').classList.add('has-error'); ok = false;
    }
    return ok;
  };
  const placeOrder = () => {
    const { total } = computeTotals();
    const first = $('#cf-first').value.trim() || 'friend';
    const email = $('#cf-email').value.trim();
    const orderNo = `LF-2026-${String(Math.floor(10000 + Math.random() * 89999))}`;
    const days = 2 + Math.floor(Math.random() * 4);
    const date = new Date(Date.now() + days * 86400000);
    const dateStr = date.toLocaleDateString('en-US', { weekday:'long', month:'long', day:'numeric' });
    $('#success-name').textContent = first;
    $('#success-no').textContent = orderNo;
    $('#success-email').textContent = email;
    $('#success-delivery').textContent = dateStr;
    $('#success-total').textContent = `$${total} USD`;
    closeCheckout();
    $('#success').classList.add('is-open');
    $('#success').setAttribute('aria-hidden', 'false');
    document.body.classList.add('checkout-open');
    cart.clear(); updateBagCount();
    $('#checkout-form').reset();
  };
  const closeSuccess = () => {
    $('#success').classList.remove('is-open');
    $('#success').setAttribute('aria-hidden', 'true');
    document.body.classList.remove('checkout-open');
  };

  // ── INPUT FORMATTERS ─────────────────────────────────────
  const formatCardNumber = (e) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 16);
    e.target.value = v.replace(/(.{4})/g, '$1 ').trim();
  };
  const formatExpiry = (e) => {
    let v = e.target.value.replace(/\D/g, '').slice(0, 4);
    if (v.length >= 3) v = `${v.slice(0, 2)} / ${v.slice(2)}`;
    e.target.value = v;
  };
  const formatCvc = (e) => { e.target.value = e.target.value.replace(/\D/g, '').slice(0, 4); };

  // ── DETAIL MODAL ─────────────────────────────────────────
  const modal = $('#modal');
  const els = {
    name: $('#modal-title'), no: $('#modal-no'), epi: $('#modal-epi'),
    desc: $('#modal-desc'), img: $('#modal-img'), price: $('#modal-price'),
    plateNo: $('#modal-plate-no'), plateRef: $('#modal-plate-ref'),
    specs: $('#modal-specs'), swatches: $('#modal-swatches'),
    finishesLbl: $('#modal-finishes-lbl'),
    add: $('#modal-add'), fav: $('#modal-fav'),
  };
  const openModal = (slug) => {
    const w = WATCHES[slug];
    if (!w || !modal) return;
    currentModalSlug = slug;
    currentFinishIdx = 0;
    els.name.textContent = w.name.toUpperCase();
    els.no.textContent = `N° ${w.no}`;
    els.plateNo.textContent = `Plate ${w.no}`;
    els.plateRef.textContent = w.ref;
    els.epi.textContent = `“${w.epi}”`;
    els.desc.textContent = w.desc;
    els.price.textContent = `$${w.price}`;
    els.img.classList.add('is-loading');
    els.img.src = w.img;
    els.img.alt = `${w.name} by Lucky Fours`;
    els.img.onload = () => els.img.classList.remove('is-loading');
    const plural = w.finishes === 1 ? '' : 's';
    els.finishesLbl.textContent = `Choose finish · ${w.finishes} colourway${plural}`;
    els.swatches.innerHTML = '';
    w.colors.forEach((c, i) => {
      const sw = document.createElement('button');
      sw.type = 'button'; sw.className = 'm-sw';
      sw.style.setProperty('--c', c);
      sw.setAttribute('aria-label', w.colorNames?.[i] || `Colourway ${i + 1}`);
      sw.title = w.colorNames?.[i] || `Colourway ${i + 1}`;
      if (i === 0) sw.classList.add('is-on');
      sw.addEventListener('click', () => {
        els.swatches.querySelectorAll('.m-sw').forEach(s => s.classList.remove('is-on'));
        sw.classList.add('is-on'); currentFinishIdx = i;
      });
      els.swatches.appendChild(sw);
    });
    if (w.finishes > w.colors.length) {
      const extra = document.createElement('span');
      extra.className = 'm-sw-extra';
      extra.textContent = `+${w.finishes - w.colors.length} more`;
      els.swatches.appendChild(extra);
    }
    els.specs.innerHTML = '';
    w.specs.forEach(([k, v]) => {
      const wrap = document.createElement('div');
      wrap.innerHTML = `<dt>${k}</dt><dd>${v}</dd>`;
      els.specs.appendChild(wrap);
    });
    els.add.classList.remove('is-added');
    els.add.querySelector('span').textContent = 'Add to bag';
    els.fav.classList.toggle('is-on', wishlist.has(slug));
    lockBody();
    document.body.classList.add('modal-open');
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden', 'false');
    $('.modal__body')?.scrollTo({ top: 0 });
    setTimeout(() => $('.modal__close', modal)?.focus(), 80);
  };
  const closeModal = () => {
    if (!modal) return;
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.classList.remove('modal-open');
    currentModalSlug = null;
    if (lastModalTrigger) {
      try { lastModalTrigger.focus({ preventScroll: true }); } catch (_) {}
      lastModalTrigger = null;
    }
  };

  // ── GLOBAL CLICK DELEGATION ──────────────────────────────
  document.addEventListener('click', (e) => {
    // close handlers — priority order
    if (e.target.closest('[data-close]'))           { closeModal();    return; }
    if (e.target.closest('[data-cart-close]'))      { closeCart();     return; }
    if (e.target.closest('[data-checkout-close]'))  { e.preventDefault(); closeCheckout(); return; }
    if (e.target.closest('[data-success-close]'))   { e.preventDefault(); closeSuccess(); return; }
    if (e.target.closest('[data-search-close]'))    { closeSearch();   return; }
    if (e.target.closest('[data-wishlist-close]'))  { closeWishlist(); return; }
    if (e.target.closest('[data-account-close]'))   { e.preventDefault(); closeAccount(); return; }
    if (e.target.closest('[data-gifts-close]'))     { closeGifts();    return; }

    // open handlers
    if (e.target.closest('[data-open-cart]'))       { e.preventDefault(); openCart();     return; }
    if (e.target.closest('[data-open-search]'))     { e.preventDefault(); openSearch();   return; }
    if (e.target.closest('[data-open-wishlist]'))   { e.preventDefault(); openWishlist(); return; }
    if (e.target.closest('[data-open-account]'))    { e.preventDefault(); openAccount();  return; }
    if (e.target.closest('[data-open-gifts]'))      { e.preventDefault(); openGifts();    return; }

    // cart qty / remove
    const qtyBtn = e.target.closest('[data-qty]');
    if (qtyBtn) { e.preventDefault(); changeQty(qtyBtn.dataset.slug, parseInt(qtyBtn.dataset.qty, 10)); return; }
    const removeBtn = e.target.closest('[data-remove]');
    if (removeBtn) { e.preventDefault(); removeItem(removeBtn.dataset.remove); return; }

    // wishlist add to bag / remove
    const wishAdd = e.target.closest('[data-wish-add]');
    if (wishAdd) {
      e.preventDefault();
      const slug = wishAdd.dataset.wishAdd;
      addItem(slug, 0);
      // also open cart after add
      closeWishlist();
      setTimeout(openCart, 250);
      return;
    }
    const wishRemove = e.target.closest('[data-wish-remove]');
    if (wishRemove) { e.preventDefault(); toggleWish(wishRemove.dataset.wishRemove); return; }

    // search tag click → fill input
    const tag = e.target.closest('.s-tag');
    if (tag) {
      e.preventDefault();
      $('#search-input').value = tag.dataset.q;
      $('#search-clear').style.display = '';
      renderSearchResults(tag.dataset.q);
      $('#search-input').focus();
      return;
    }
    // search clear
    if (e.target.closest('#search-clear')) {
      $('#search-input').value = '';
      renderSearchResults('');
      $('#search-clear').style.display = 'none';
      $('#search-input').focus();
      return;
    }

    // account tabs
    const acctTab = e.target.closest('.acct__tab');
    if (acctTab) { e.preventDefault(); switchAcctTab(acctTab.dataset.tab); return; }

    // gifts tabs
    const giftTab = e.target.closest('.gifts__tab');
    if (giftTab) { e.preventDefault(); switchGiftTab(giftTab.dataset.giftTab); return; }

    // women filter
    if (e.target.closest('[data-women]:not(.ref)')) {
      e.preventDefault();
      applyWomen(true);
      return;
    }
    if (e.target.closest('[data-clear-women]')) {
      e.preventDefault();
      applyWomen(false);
      return;
    }

    // smooth scroll
    const scrollLink = e.target.closest('[data-scroll]');
    if (scrollLink) {
      e.preventDefault();
      // any nav click that isn't the women filter clears it
      if (document.body.classList.contains('women-only') && !scrollLink.hasAttribute('data-women')) {
        applyWomen(false);
      }
      scrollToSection(scrollLink.dataset.scroll);
      return;
    }

    // open detail modal via [data-watch] (last so others get priority)
    const trigger = e.target.closest('[data-watch]');
    if (trigger) {
      const slug = trigger.dataset.watch;
      if (WATCHES[slug]) {
        e.preventDefault();
        lastModalTrigger = trigger;
        // close any overlays that should yield to modal
        if (document.body.classList.contains('cart-open')) {
          closeCart(); closeWishlist(); closeSearch(); closeGifts();
        }
        openModal(slug);
      }
    }
  });

  // ── ESC ──────────────────────────────────────────────────
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape') return;
    if ($('#modal').classList.contains('is-open'))    { closeModal(); return; }
    if ($('#search').classList.contains('is-open'))   { closeSearch(); return; }
    if ($('#account').classList.contains('is-open'))  { closeAccount(); return; }
    if ($('#gifts').classList.contains('is-open'))    { closeGifts(); return; }
    if ($('#wishlist').classList.contains('is-open')) { closeWishlist(); return; }
    if ($('#cart').classList.contains('is-open'))     { closeCart(); return; }
    if ($('#success').classList.contains('is-open'))  { closeSuccess(); return; }
    if ($('#checkout').classList.contains('is-open')) { closeCheckout(); return; }
  });

  // ── Modal Add to bag ─────────────────────────────────────
  els.add?.addEventListener('click', () => {
    if (!currentModalSlug) return;
    addItem(currentModalSlug, currentFinishIdx);
    els.add.classList.add('is-added');
    els.add.querySelector('span').textContent = 'Added ✓';
    setTimeout(() => { closeModal(); openCart(); }, 600);
  });

  // ── Modal heart → wishlist ───────────────────────────────
  els.fav?.addEventListener('click', () => {
    if (!currentModalSlug) return;
    toggleWish(currentModalSlug);
  });

  // ── Cart checkout button ─────────────────────────────────
  $('#cart-checkout')?.addEventListener('click', openCheckout);

  // ── Checkout submit ──────────────────────────────────────
  $('#checkout-form')?.addEventListener('submit', (e) => {
    e.preventDefault();
    if (!validateCheckout()) {
      showToast('Please complete required fields');
      $('.field.has-error input, .field.has-error select')?.focus();
      return;
    }
    const btn = $('#check-submit');
    btn.disabled = true;
    btn.querySelector('span').textContent = 'Processing…';
    setTimeout(() => { placeOrder(); btn.disabled = false; }, 1100);
  });

  // ── Input formatters ─────────────────────────────────────
  $('#cf-card')?.addEventListener('input', formatCardNumber);
  $('#cf-exp')?.addEventListener('input', formatExpiry);
  $('#cf-cvc')?.addEventListener('input', formatCvc);
  $$('#checkout-form input, #checkout-form select').forEach((input) => {
    input.addEventListener('input', () => input.closest('.field')?.classList.remove('has-error'));
  });

  // ── Search input ─────────────────────────────────────────
  $('#search-input')?.addEventListener('input', (e) => {
    const v = e.target.value;
    $('#search-clear').style.display = v ? '' : 'none';
    renderSearchResults(v);
  });

  // ── Account form submission ──────────────────────────────
  $('#acct-signin')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = $('#ai-email').value.trim();
    const pass = $('#ai-pass').value.trim();
    if (!email || !pass) { showToast('Please complete both fields'); return; }
    signedInName = email.split('@')[0];
    closeAccount();
    showToast(`Welcome back, ${signedInName}`);
  });
  $('#acct-register')?.addEventListener('submit', (e) => {
    e.preventDefault();
    const first = $('#ar-first').value.trim();
    if (!first) { showToast('Please complete the form'); return; }
    signedInName = first;
    closeAccount();
    showToast(`Welcome to the Maison, ${first}`);
  });

  // ── Initial setup ────────────────────────────────────────
  updateBagCount();
  updateWishCount();

  // ── Nav stuck ────────────────────────────────────────────
  const mast = $('.mast');
  if (mast) {
    const onScroll = () => mast.classList.toggle('is-stuck', window.scrollY > 8);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  // ── Scroll reveals ───────────────────────────────────────
  const fadeTargets = $$('.edit, .cols-head, .chapter, .all__head, .ref, .gift, .maison, .serv, .news, .foot__top');
  fadeTargets.forEach(el => el.classList.add('in'));
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver(
      (entries) => entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add('is-in'); io.unobserve(en.target); }
      }),
      { threshold: 0.08, rootMargin: '0px 0px -6% 0px' }
    );
    fadeTargets.forEach(el => io.observe(el));
  } else { fadeTargets.forEach(el => el.classList.add('is-in')); }

  // ── Hero parallax (desktop) ──────────────────────────────
  const heroImg = $('.hero__figure img');
  const heroFig = $('.hero__figure');
  if (heroImg && heroFig && window.matchMedia('(hover: hover) and (min-width: 901px)').matches) {
    heroFig.addEventListener('mousemove', (e) => {
      const r = heroFig.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      heroImg.style.transform = `scale(1.02) translate3d(${x * -10}px, ${y * -8}px, 0)`;
    });
    heroFig.addEventListener('mouseleave', () => { heroImg.style.transform = ''; });
  }

  // debug exposure
  window.LF = { cart, wishlist, WATCHES, openCart, openCheckout, openModal, openSearch, openWishlist, openAccount, openGifts, applyWomen };
})();
