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
  humir: { no:'W·XIX', name:'Humir', ref:'04.HMR.IRN', type:'Quartz', price:79, finishes:1,
    img:'https://luckyfours.com/cdn/shop/files/5_5063d5aa-86d4-4b0c-a56d-42b45d743504.webp?v=1762198825&width=1200',
    epi:'Soft strength.',
    desc:"A 36mm brushed steel case with applied indices — the maison's most utilitarian women's piece.",
    specs:[['Case','36 mm · brushed steel'],['Crystal','Sapphire'],['Movement','Miyota 2025 quartz'],['Battery','3 years'],['Water','50 metres'],['Strap','Steel bracelet · 18 mm']],
    colors:['#a8a39a'],
    colorNames:['Iron'] },
};

/* ──────────────────────────────────────────────────────────────
   REAL VARIANTS (scraped from luckyfours.com)
   Format: { n: variant name, u: filename + ?v= query (relative to VARIANT_BASE) }
   ────────────────────────────────────────────────────────────── */
const VARIANT_BASE = 'https://cdn.shopify.com/s/files/1/0758/5333/2777/files/';

const VARIANTS = {
  // ── MEN'S ──
  caspian: [
    { n:'Emerald',  u:'1_e971742e-9f36-4b2a-a076-90523bb1fb60.webp?v=1760567187' },
    { n:'Ocean',    u:'4_0fc33264-fbe3-47c9-9b51-93cfbc68b5f3.webp?v=1763224474' },
    { n:'Iron',     u:'2_f8ea0ef2-f200-4835-9d42-08fae1786fd4.webp?v=1763224474' },
    { n:'Ice',      u:'3_ab304bb1-4abc-47a7-8f13-470e5178d0ef.webp?v=1763224474' },
    { n:'Obsidian', u:'1x1_fa1dac23-6cb8-4970-b46f-f6282cd8c6ba.webp?v=1776241792' },
    { n:'Gold',     u:'1x1_9034fb4a-1922-4cba-a3d7-004c178b01e0.webp?v=1777476603' },
  ],
  santos: [
    { n:'Crimson',         u:'Santos.webp?v=1755722483' },
    { n:'Emerald',         u:'GREEN.webp?v=1755878297' },
    { n:'Ocean',           u:'BLUE.webp?v=1755878297' },
    { n:'Rosé',            u:'PINK.webp?v=1755878297' },
    { n:'Amethyst',        u:'PURPLE.webp?v=1755878297' },
    { n:'Tiffany Blue',    u:'TIFFANNY.webp?v=1755878297' },
    { n:'Saffron',         u:'ORANGE.webp?v=1755878297' },
    { n:'Pearl',           u:'WHITE.webp?v=1755878297' },
    { n:'Iron',            u:'BLACK.webp?v=1755878297' },
    { n:'Mocha Rootbeer',  u:'ROSE_GOLD.webp?v=1755878297' },
    { n:'Gold Crimson',    u:'GOLD_RED.webp?v=1755878297' },
    { n:'Gold Iron',       u:'GOLD_BLACK.webp?v=1755878297' },
    { n:'Gold Pearl',      u:'GOLD_WHITE.webp?v=1755878297' },
    { n:'Gold',            u:'GOLD_GOLD.webp?v=1755878297' },
    { n:'Obsidian',        u:'1x1_3d71cfa7-08a6-4dbf-8cc0-3970fb6c7120.webp?v=1775321338' },
  ],
  tourbillon: [
    { n:'Silver Ocean',       u:'9_5dbf82bf-d70a-4688-bc87-c768789981b4.webp?v=1762198745' },
    { n:'Silver Ice',         u:'6_a2ffb774-a1ff-4d24-91da-4c215e1410b8.webp?v=1743566544' },
    { n:'Silver Obsidian',    u:'5_98392f17-f81a-4d70-a82c-f4f71b4522f0.webp?v=1743566544' },
    { n:'Silver Ocean Steel', u:'8_905028eb-cf5d-4c34-99e9-914eb8076054.webp?v=1743566544' },
    { n:'Obsidian Steel',     u:'7_ad52740b-2d33-4147-a0f2-4dec17d7e70f.webp?v=1743566544' },
    { n:'Rose Gold Ice',      u:'4_d943876f-3b1c-4164-8b7d-f8e668e8090d.webp?v=1743566544' },
    { n:'Rose Gold Obsidian', u:'3_a1294cee-767f-4f50-baa5-afdcaf65c6dd.webp?v=1743566544' },
    { n:'Ocean Obsidian',     u:'1_993172f2-d6a5-48bf-b553-a86496faf67d.webp?v=1743566544' },
    { n:'Obsidian',           u:'2_a5cda0b1-d50a-4303-bf3c-f2f1648a5cac.webp?v=1743566544' },
  ],
  spine: [
    { n:'Iron',      u:'2_13bef93d-6195-4886-8050-db54b99c0585.webp?v=1762198893' },
    { n:'Platinum',  u:'3_b7cd430a-5ecd-4e12-8b9b-3119b5c81c26.webp?v=1' },
    { n:'Obsidian',  u:'5_ece82541-97d9-4916-8e49-575d1d077361.webp?v=1' },
    { n:'Gold Iron', u:'1_911932fe-6dc3-4f42-9273-070571969636.webp?v=1' },
  ],
  brone: [
    { n:'Obsidian',     u:'7_d547bd28-ca75-4352-89f3-6981105a3628.webp?v=1763225151' },
    { n:'Champagne',    u:'11_5.webp?v=1763225151' },
    { n:'Ocean',        u:'8_a8c5b5cd-d542-4f9f-ac9d-22fb61710e39.webp?v=1763225151' },
    { n:'Platinum',     u:'2_a908caff-1cc1-497a-a6e1-708f03836092.webp?v=1763225151' },
    { n:'Iron',         u:'9_ba593ca5-27e8-46ca-91c0-1f984c799517.webp?v=1763225151' },
    { n:'Gold',         u:'4_bc96794b-e387-4c41-a616-79cf257f2a0f.webp?v=1763225151' },
    { n:'Emerald Gold', u:'5_023f22be-2a94-4a1d-b69d-717f13d5a861.webp?v=1763225151' },
    { n:'Ocean Gold',   u:'6_83091788-76e7-4c5f-b527-c8f81084c9f3.webp?v=1763225151' },
    { n:'Iron Gold',    u:'1_d6f1a29c-eb68-4132-8869-4d3ad5296d9d.webp?v=1763225151' },
    { n:'Platinum Gold',u:'3_bb782718-79bb-4d43-a822-3e0945df3f2f.webp?v=1763225151' },
  ],
  oceanus: [
    { n:'Ocean',           u:'11_8efc79f5-04de-468f-b9ab-768eedb2060c.webp?v=1760564925' },
    { n:'Ice',             u:'2_061f4c00-c7d5-475e-acc8-551f6f287cbb.webp?v=1760564925' },
    { n:'Iron',            u:'1_07bf03cd-cbeb-4274-849c-8c2f5e0b8a57.webp?v=1760564925' },
    { n:'Ocean Rose Gold', u:'3_46a0e865-b46f-4fa4-9709-1f9124c3d2da.webp?v=1760564925' },
    { n:'Ice Rose Gold',   u:'4_deff88e4-9e20-4660-b560-6825a5a17253.webp?v=1760564925' },
    { n:'Iron Rose Gold',  u:'5_9b83922c-6eba-43a7-8fbe-b8036cb1a298.webp?v=1760564925' },
    { n:'Obsidian',        u:'6_e4b70ff4-fdeb-4118-9ce9-ca791f7d4112.webp?v=1760564925' },
  ],
  fortuno: [
    { n:'Emerald', u:'18_970a7064-18dd-420e-b0c8-1b70b96b45e5.webp?v=1777474807' },
    { n:'Ocean',   u:'19_db3d1221-b43e-4bf4-856e-fd97f0a96ac8.webp?v=1777474809' },
    { n:'Ice',     u:'20_69b3c26b-10ac-4671-a66b-286642dc243c.webp?v=1777474808' },
    { n:'Iron',    u:'21_19510156-36d1-410f-ad35-58fa61324923.webp?v=1777474808' },
    { n:'Gold',    u:'22_ac7dfa13-7385-4973-9dad-a84dc32808f6.webp?v=1777474809' },
  ],
  baretta: [
    { n:'Emerald',       u:'1x1_6f20463e-b6fb-4ff3-a6a4-81b318445deb.webp?v=1777217336' },
    { n:'Ocean',         u:'10_ee3e8702-e15f-4543-898a-e0876a517550.webp?v=1777227348' },
    { n:'Noir',          u:'2_54527f4c-c17d-430b-b846-56a6c22685c4.webp?v=1777227349' },
    { n:'Emerald Noir',  u:'16_5b03ee69-f97c-4ea3-ad4e-ba8388f95fb9.webp?v=1777227349' },
    { n:'Ocean Noir',    u:'8_f658a167-6c62-4799-8a98-b33b9fdc48d4.webp?v=1777227349' },
    { n:'Sterling',      u:'14_414f4744-4806-44bd-ab02-4568eeab0d05.webp?v=1777227348' },
    { n:'Obsidian',      u:'4_0d9d0928-d3a6-4100-9185-a51796a57046.webp?v=1777227348' },
  ],
  ronin: [
    { n:'Obsidian',           u:'6_9bf62c3e-a05a-493a-9ce9-ee9509bdee82.webp?v=1771444819' },
    { n:'Ocean',              u:'3_1d7054f8-3854-4590-a177-1ea25579b2ba.webp?v=1773853453' },
    { n:'Silver Ocean',       u:'13_f269693d-b67f-4077-8e84-8a7b893ed76b.webp?v=1773853453' },
    { n:'Silver Obsidian',    u:'9_bafa025c-4eb6-4711-9e7d-8c532130a881.webp?v=1773853453' },
    { n:'Rose Gold Ocean',    u:'7_913ceb08-4697-4a54-9d34-93ca4ea2cf24.webp?v=1773853453' },
    { n:'Rose Gold Obsidian', u:'8_e737507f-f740-42d0-bfdf-25678db0cd88.webp?v=1773853453' },
  ],
  chronometer: [
    { n:'Silver Ice',      u:'11_cefec56b-0eb3-41c5-a6e8-ba72bd1e348e.webp?v=1771448705' },
    { n:'Silver Obsidian', u:'8_7b3bc75a-0be6-415d-b975-38081a16816e.webp?v=1773854253' },
    { n:'Silver Ocean',    u:'13_7f223813-cf40-4f6d-8d50-b509248b9a5c.webp?v=1773854253' },
    { n:'Gold Obsidian',   u:'14_ef1b3277-b90e-429e-9b85-12e9f4c8afbf.webp?v=1773854253' },
    { n:'Gold Ocean',      u:'9_4cf3725a-4e6a-46d6-8cc2-db1bdc08ea1c.webp?v=1773854253' },
    { n:'Gold Emerald',    u:'10_0fae7949-99db-4dcc-aefb-66b95ef923a7.webp?v=1773854253' },
    { n:'Gold Ice',        u:'12_902073fa-1478-4219-90d7-77b2a83eccae.webp?v=1773854253' },
  ],
  atlas: [
    { n:'Rose Gold Ice',      u:'5_4f8e3947-912d-4d56-bfc6-f1de743db1fe.webp?v=1773851541' },
    { n:'Rose Gold Obsidian', u:'3_bf463679-99cf-4aa7-91c4-e089ca10b117.webp?v=1773851541' },
    { n:'Rose Gold Emerald',  u:'4_2c90ab3a-6f64-4b37-b934-1c400655eb80.webp?v=1773851541' },
    { n:'Rose Gold Ocean',    u:'6_b49b526d-2ae3-4dc5-ba2a-048d2b660ea4.webp?v=1773851541' },
    { n:'Silver Ice',         u:'2_841c62c9-61fb-4135-8d78-902f1adb1c91.webp?v=1773685838' },
    { n:'Silver Obsidian',    u:'1_75dcdd7e-d936-49d9-818b-4be4ff28bd97.webp?v=1773851541' },
    { n:'Silver Emerald',     u:'1x1_c2da89df-2cfb-4238-9d4f-5f734c602ea2.webp?v=1773851541' },
    { n:'Silver Ocean',       u:'10_849967b4-2737-4a26-b854-880312e2c27d.webp?v=1773851541' },
  ],
  prague: [
    { n:'Gold Obsidian',       u:'7_e0328f1f-ff13-4835-9082-a41f8d0a35d2.webp?v=1762198743' },
    { n:'Gold Ocean',          u:'3_9b68881a-4e96-40ea-8bb1-494eb8e671f9.webp?v=1743566352' },
    { n:'Gold Ocean Steel',    u:'6_da33f22e-09e2-4a6e-be47-a84e49c258b9.webp?v=1743566352' },
    { n:'Gold Emerald',        u:'5_324d1a85-ff4f-458f-81f0-9db11eea4a5a.webp?v=1743566352' },
    { n:'Silver Obsidian',     u:'1_66526f59-9e43-4851-a89e-0aa383cbf202.webp?v=1743566352' },
    { n:'Silver Ocean',        u:'2_f2c70853-50a1-4da4-ac37-fa2e65331790.webp?v=1743566352' },
    { n:'Silver Obsidian Steel', u:'4_47e20109-92e4-40df-9921-0f9ed8ddfa83.webp?v=1743566352' },
  ],
  voyager: [
    { n:'Default', u:'Untitled_design_299472f8-42b4-45cb-85bb-30a677c49b9a.webp?v=1762198749' },
  ],
  aurelios: [
    { n:'Ice',                u:'10_ab8d2040-d2a8-4cd9-9e96-cd86fc5629c2.webp?v=1762198711' },
    { n:'Ocean',              u:'8_bccc8473-df32-4406-9c49-94b221c2457c.webp?v=1745091500' },
    { n:'Iron',               u:'9_574d9ef7-3878-4f3e-83d2-72a2baf248d2.webp?v=1745091500' },
    { n:'Root Beer',          u:'7_b1bcf8c8-3fc3-4bd7-bfe7-5e19d5cc0154.webp?v=1745091500' },
    { n:'Obsidian – Ice',     u:'5_1dae6110-e452-41f2-a493-1d6f83a9fdb5.webp?v=1745091500' },
    { n:'Obsidian – Ocean',   u:'6_fa9e926d-0c7a-4c6a-8f7f-09ffec01600e.webp?v=1745091500' },
    { n:'Obsidian – Iron',    u:'3_fd95a10a-2c3e-4bf6-9277-5351c65e1746.webp?v=1745091500' },
    { n:'Rose Gold – Ice',    u:'1_874558f6-fdb4-420c-af3e-e505dbced1f8.webp?v=1745091500' },
    { n:'Rose Gold – Iron',   u:'4_84003613-11e3-40de-8266-16a188f8b80b.webp?v=1745091500' },
    { n:'Rose Gold – Rootbeer', u:'2_064a8e52-043a-446c-8559-2a512154c9c7.webp?v=1745091500' },
  ],
  wraith: [
    { n:'Obsidian', u:'Main.webp?v=1760562155' },
    { n:'Ocean',    u:'11_1_d472193d-99bf-454a-8aa8-79905679ca81.webp?v=1763224053' },
    { n:'Ice',      u:'1_feb23a7e-19bf-4005-b2fd-b448578223f9.webp?v=1763224053' },
    { n:'Emerald',  u:'2_bea3fb13-93b4-4cdc-8fc5-1dcf1e018981.webp?v=1763224053' },
  ],
  summit: [
    { n:'Midnight Rose', u:'4_b158b50a-b459-4afb-9d33-361bb4a9b844.webp?v=1762198324' },
    { n:'Black Chrome',  u:'1_c85c939a-4266-4c0e-b353-bd0c18fa981a.webp?v=1743729767' },
    { n:'Fire Red',      u:'3_c1b99a38-3ef8-425a-85d2-70a6e63ded38.webp?v=1743729767' },
    { n:'Coral Glow',    u:'2_a80ed094-09fb-42a2-bb2d-4038de1a4b8a.webp?v=1743729767' },
  ],
  jaxon: [
    { n:'Frostbite',   u:'24_96edf2f9-eae5-4339-b675-4392a97177c4.webp?v=1777475680' },
    { n:'Chrome Noir', u:'25_3fa9deb6-c351-49f3-9bf5-32d043ed81d7.webp?v=1' },
    { n:'Nebula',      u:'26_e9a24b8b-b898-4979-90e3-ac4a5744fcf0.webp?v=1' },
    { n:'Regalia',     u:'28_d8591951-4243-4c13-92d7-bb8338bf0053.webp?v=1' },
    { n:'Gold',        u:'27_ead0abbe-4d91-4623-9238-33d12f84d7b6.webp?v=1' },
  ],
  nassau: [
    { n:'Silver Ice',      u:'4_13b42498-c1bd-471f-a75d-39c05d304334.webp?v=1762198755' },
    { n:'Silver Obsidian', u:'1_64e71be7-5550-45fa-abc8-a5e1d87f2939.webp?v=1739251588' },
    { n:'Gold Ice',        u:'2_18095d26-dbbf-430c-900b-f25a4aeb8d96.webp?v=1739251588' },
    { n:'Gold Obsidian',   u:'3_016e12d4-0e48-4248-9e6f-51d5e9a0e086.webp?v=1739251588' },
  ],
  princeoak: [
    { n:'Forged Obsidian', u:'5_a60b097c-8f74-4f99-b5d3-57e723e00c19.webp?v=1762198509' },
    { n:'Rose Obsidian',   u:'3_f94a9b13-0a63-4956-a081-c6d30e160432.webp?v=1744328033' },
    { n:'Obsidian',        u:'4_9c79b7ae-d2de-4226-9960-fc830ddb2075.webp?v=1744328033' },
    { n:'Rose Ice',        u:'1_bd010145-cbd6-4ebb-97e3-681af93c6feb.webp?v=1744328033' },
    { n:'Nautilus',        u:'2_6032b1ac-c740-4855-865a-5662c2079079.webp?v=1744328033' },
  ],
  aura: [
    { n:'Monarch',  u:'2_1553554d-343c-417a-aa46-f1391cbe5a29.webp?v=1762198875' },
    { n:'Midnight', u:'1_dc9d6b2c-9cb2-4ff5-83cb-3748bd9b0391.webp?v=1' },
  ],

  // ── WOMEN'S ──
  calista: [
    { n:'Gold',          u:'4_028469d1-371b-4f20-b62f-11adbccf0b61.webp?v=1762198322' },
    { n:'Silver',        u:'2_f38ba7a6-543c-4002-ad74-2672fc467c24.webp?v=1739258445' },
    { n:'Gold Diamond',  u:'3_f1116b49-8a5d-425e-88e6-4b90d0a76284.webp?v=1739258445' },
    { n:'Silver Diamond',u:'1_d07ac0e0-61c2-48a7-8044-72085844196e.webp?v=1739258445' },
  ],
  lyra: [
    { n:'Rose',     u:'6_0f45fe3e-7fbc-46fc-9bae-3ae4a4dd026e.webp?v=1762198752' },
    { n:'Ice',      u:'5_a737683f-804e-4b35-9234-fbef73c2940e.webp?v=1739251970' },
    { n:'Emerald',  u:'4_a2fa1928-84d3-4ddc-942f-d423fc9c8976.webp?v=1739251970' },
    { n:'Obsidian', u:'3_2598277f-5eff-4959-a199-507e31da1b41.webp?v=1739251970' },
    { n:'Ocean',    u:'1_405ec954-c028-4a07-99f3-6f3848ec8283.webp?v=1739251970' },
    { n:'Aqua',     u:'2_e9843a21-58d7-42c6-b32b-ec510d89fce5.webp?v=1739251970' },
  ],
  venoria: [
    { n:'Sterling Gold', u:'5_7087b413-13c7-4e2f-85e2-8568413afb92.webp?v=1762198565' },
    { n:'Sterling Rose', u:'3_7b50f4e3-ccd1-46c5-b7d3-c7b74d0b5c20.webp?v=1739257547' },
    { n:'Gold',          u:'4_e1ca0260-b5c4-473e-8709-688d3f013fb1.webp?v=1739257547' },
    { n:'White Silver',  u:'1_1ed38de6-1e11-4a19-8d97-5b9c0de0c2a4.webp?v=1739257547' },
    { n:'Black Silver',  u:'2_64c28a5e-85dc-413f-935a-9b65cd4fc710.webp?v=1739257547' },
  ],
  thea: [
    { n:'Rose Gold Ice',   u:'6_06aaa7fe-b367-4043-872a-509351ac1692.webp?v=1762198753' },
    { n:'Silver Ice',      u:'3_c5d62386-1273-41a7-8e51-c109fecca2dc.webp?v=1739251670' },
    { n:'Silver Obsidian', u:'2_889c215c-eba8-40a4-8520-d6a296bdd595.webp?v=1739251670' },
    { n:'Silver Ocean',    u:'1_966c3354-8478-4a2e-a977-25c9358ea6ef.webp?v=1739251670' },
    { n:'Gold Obsidian',   u:'4_3b49ab46-3eb8-4226-873a-db95ba35d4ad.webp?v=1739251670' },
    { n:'Gold Ocean',      u:'5.webp?v=1739251670' },
  ],
  surmen: [
    { n:'Gold',   u:'5_9de0cb67-3a43-4c63-884a-0836d900ff4e.webp?v=1762198821' },
    { n:'Silver', u:'5_725c13fa-c88f-4b9a-8b0e-7f3ac1f53810.webp?v=1741178516' },
  ],
  maso: [
    { n:'Gold',   u:'5_8407687b-4096-44eb-a1ad-2dd1a815422e.webp?v=1762198824' },
    { n:'Silver', u:'5_e0cad628-223a-4bc6-93d2-e9414e7b5a00.webp?v=1741174685' },
  ],
  leto: [
    { n:'Rose Gold Ice', u:'2_086dfe63-b411-4e83-b4e7-e1c92a93a710.webp?v=1739251748' },
    { n:'Rose Gold',     u:'1_11833a79-a341-4d7c-bc8c-f483e5aa5f12.webp?v=1762198753' },
  ],
  francesca: [
    { n:'Gold',   u:'5_872aeb5f-f847-4107-8be9-cd9075d943e1.webp?v=1762198818' },
    { n:'Silver', u:'5_1617fd19-016e-4f72-bbf1-3adac867ffb5.webp?v=1741174125' },
  ],
  lora: [
    { n:'Gold',   u:'5_04393797-5280-4752-84f4-e9f908c8f008.webp?v=1762198818' },
    { n:'Silver', u:'5_59228e8d-5401-4ba8-8402-998115b1900e.webp?v=1741173523' },
  ],
  runa: [
    { n:'Gold',   u:'5_73aa30f1-a9ce-4fd7-b1e9-06b5a625f432.webp?v=1762198817' },
    { n:'Silver', u:'5_d513a5a2-5134-4ee2-8fa7-de3843d285b1.webp?v=1741173805' },
  ],
  tyla: [
    { n:'Gold',   u:'5_c6ea52f5-d850-407f-94b9-eee587b4402c.webp?v=1762198826' },
    { n:'Silver', u:'5_1a48a4fd-09df-4768-85a4-ecdc701665f4.webp?v=1741175864' },
  ],
  kera: [
    { n:'Gold',   u:'5_5fc036f3-3d5b-49de-acbf-2b98a1f9df81.webp?v=1762198822' },
    { n:'Silver', u:'5_3361b22c-2651-45bc-83da-9910328ac757.webp?v=1741174962' },
  ],
  gracie: [
    { n:'Default', u:'5_83909173-b65d-4565-a007-86fd7c93eccc.webp?v=1762198822' },
  ],
  nyx: [
    { n:'Gold',   u:'5_a542ad28-c3f7-4943-852f-cc89e2c78993.webp?v=1762198819' },
    { n:'Silver', u:'5_ac691508-1ae9-451e-9c16-207b634cee75.webp?v=1741174336' },
  ],
  mila: [
    { n:'Default', u:'5_6df6f3e6-2fe4-4a56-9d6c-9391535bbf81.webp?v=1762198819' },
  ],
  phila: [
    { n:'Gold',   u:'5_d03f134c-8664-47b3-9120-38a19c79e65e.webp?v=1762198825' },
    { n:'Silver', u:'5_e4ded02b-9c33-410c-a5d7-c866e998014f.webp?v=1741175521' },
  ],
  milo: [
    { n:'Default', u:'5_35cb47b1-da13-43bc-8ec7-e9f800c4ef5b.webp?v=1762198824' },
  ],
  loressa: [
    { n:'Default', u:'5_83ab6e10-3bc4-4d78-a660-da68f8eb7b6e.webp?v=1762198821' },
  ],
  humir: [
    { n:'Default', u:'5_5063d5aa-86d4-4b0c-a56d-42b45d743504.webp?v=1762198825' },
  ],
};

const varImg = (v, w) => `${VARIANT_BASE}${v.u}&width=${w}`;

/* ──────────────────────────────────────────────────────────────
   CATALOGUE — display order + optional badge per reference
   Format: [slug, gender, badge?]
   ────────────────────────────────────────────────────────────── */
const CATALOGUE = [
  // Men's (20)
  ['caspian',     'men',   'Best Seller'],
  ['santos',      'men',   '15 Colourways'],
  ['tourbillon',  'men',   'Mechanical'],
  ['spine',       'men',   'Imperial'],
  ['brone',       'men'],
  ['oceanus',     'men',   '200m Dive'],
  ['fortuno',     'men'],
  ['baretta',     'men',   'Chronograph'],
  ['ronin',       'men'],
  ['chronometer', 'men'],
  ['atlas',       'men',   'World-time'],
  ['prague',      'men'],
  ['voyager',     'men',   'GMT'],
  ['aurelios',    'men'],
  ['wraith',      'men',   'PVD'],
  ['summit',      'men'],
  ['jaxon',       'men',   'New'],
  ['nassau',      'men'],
  ['princeoak',   'men',   'Mechanical'],
  ['aura',        'men',   '36 mm'],
  // Women's (19)
  ['calista',     'women', 'Pavé'],
  ['lyra',        'women'],
  ['venoria',     'women'],
  ['thea',        'women', 'Pavé'],
  ['surmen',      'women'],
  ['maso',        'women'],
  ['leto',        'women', 'Dress'],
  ['francesca',   'women'],
  ['lora',        'women'],
  ['runa',        'women'],
  ['tyla',        'women'],
  ['kera',        'women'],
  ['gracie',      'women', 'Dress'],
  ['nyx',         'women'],
  ['mila',        'women'],
  ['phila',       'women'],
  ['milo',        'women'],
  ['loressa',     'women', 'Heirloom'],
  ['humir',       'women'],
];

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
      const variant = VARIANTS[slug]?.[v.finish];
      const finishName = variant && variant.n !== 'Default' ? variant.n : '';
      const itemImg = variant?.u ? varImg(variant, 200) : w.img;
      html += `
        <article class="ci">
          <a href="#" class="ci__img" data-watch="${slug}">
            <img src="${itemImg}" alt="${w.name}" loading="lazy" />
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
      const variant = VARIANTS[slug]?.[v.finish];
      const finishName = variant && variant.n !== 'Default' ? variant.n : '';
      const itemImg = variant?.u ? varImg(variant, 200) : w.img;
      html += `
        <div class="cs-item">
          <div class="cs-item__img"><img src="${itemImg}" alt="" /><span class="cs-item__qty">${v.qty}</span></div>
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
    const variants = VARIANTS[slug] || [{ n: 'Default', u: '' }];

    els.img.classList.add('is-loading');
    const firstVar = variants[0];
    els.img.src = firstVar.u ? varImg(firstVar, 1400) : w.img;
    els.img.alt = `${w.name} — ${firstVar.n}`;
    els.img.onload = () => els.img.classList.remove('is-loading');

    const plural = variants.length === 1 ? '' : 's';
    const isSingleDefault = variants.length === 1 && variants[0].n === 'Default';
    els.finishesLbl.textContent = isSingleDefault
      ? 'A single, considered finish.'
      : `Choose finish · ${variants.length} colourway${plural}`;

    els.swatches.innerHTML = '';
    variants.forEach((v, i) => {
      if (isSingleDefault) return;
      const sw = document.createElement('button');
      sw.type = 'button';
      sw.className = 'v-sw';
      sw.setAttribute('aria-label', v.n);
      if (i === 0) sw.classList.add('is-on');
      const im = document.createElement('img');
      im.src = varImg(v, 120);
      im.alt = v.n;
      im.loading = 'lazy';
      sw.appendChild(im);
      const lbl = document.createElement('span');
      lbl.className = 'v-sw__lbl';
      lbl.textContent = v.n;
      sw.appendChild(lbl);
      sw.addEventListener('click', () => {
        els.swatches.querySelectorAll('.v-sw').forEach(s => s.classList.remove('is-on'));
        sw.classList.add('is-on');
        currentFinishIdx = i;
        els.img.classList.add('is-loading');
        els.img.src = varImg(v, 1400);
        els.img.alt = `${w.name} — ${v.n}`;
        els.img.onload = () => els.img.classList.remove('is-loading');
      });
      els.swatches.appendChild(sw);
    });
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
    // ── quick-add (must run BEFORE [data-watch] check) ──
    const quickAdd = e.target.closest('[data-quick-add]');
    if (quickAdd) {
      e.preventDefault();
      const slug = quickAdd.dataset.quickAdd;
      addItem(slug, 0);
      quickAdd.classList.add('is-added');
      quickAdd.querySelector('span').textContent = 'Added ✓';
      setTimeout(() => {
        quickAdd.classList.remove('is-added');
        quickAdd.querySelector('span').textContent = 'Add to Bag';
      }, 1600);
      return;
    }

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

  // ── Render catalogue grid ────────────────────────────────
  function renderCatalogue() {
    const grid = document.getElementById('all-grid');
    if (!grid) return;
    grid.innerHTML = CATALOGUE.map(([slug, gender, badge]) => {
      const w = WATCHES[slug];
      if (!w) return '';
      const variants = VARIANTS[slug] || [{ n: 'Default', u: '' }];
      const isSingle = variants.length === 1 && variants[0].n === 'Default';
      const finishesLbl = isSingle
        ? 'Single finish'
        : `${variants.length} colourway${variants.length === 1 ? '' : 's'}`;
      const firstVar = variants[0];
      const imgUrl = firstVar.u ? varImg(firstVar, 700) : w.img;
      const badgeMod = badge === 'Imperial' ? ' ref__badge--imperial' : '';
      const badgeHtml = badge ? `<span class="ref__badge${badgeMod}">${badge}</span>` : '';
      return `
        <article class="ref" data-watch="${slug}" data-gender="${gender}">
          <a href="#" class="ref__media" data-watch="${slug}" aria-label="View ${w.name}">
            <img src="${imgUrl}" alt="${w.name}" loading="lazy" />
            ${badgeHtml}
            <button type="button" class="ref__add" data-quick-add="${slug}" aria-label="Add ${w.name} to bag">
              <span>Add to Bag</span>
            </button>
          </a>
          <div class="ref__body">
            <h4 class="ref__name">${w.name}</h4>
            <span class="ref__meta">${w.type} · ${finishesLbl}</span>
            <div class="ref__row">
              <span class="ref__price">From <strong>$${w.price}</strong></span>
              <span class="ref__discover" data-watch="${slug}">Discover<span class="ref__arrow" aria-hidden="true">→</span></span>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // ── Initial setup ────────────────────────────────────────
  renderCatalogue();
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
