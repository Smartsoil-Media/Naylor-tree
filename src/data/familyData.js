// Canonical family data.
// Every person has a stable id; relationships reference ids.
// Branches: 'naylor' | 'hughes' | 'newman' | 'mackay'
// Certainty: 'confirmed' | 'likely' | 'uncertain' — applied to *parentage* links
// shown as dotted in the tree. Pre-1849 Bray Naylors are uncertain.

// ---------- PEOPLE ----------
export const people = {
  // ===== Pre-1849 Naylors (uncertain links) =====
  'bartholomew-naylor-elder': {
    id: 'bartholomew-naylor-elder',
    name: 'Bartholomew Naylor',
    nicknames: [],
    born: 'c. 1775',
    died: 'unknown',
    branch: 'naylor',
    location: 'Bray, Co. Wicklow',
    occupation: 'Unknown — likely fisherman',
    descriptor: 'Earliest confirmed ancestor, Bray',
    bio:
      'The earliest Naylor we can name. He and his wife Anne had children baptised at St. Paul\'s Church, Bray from 1801 onwards. The family had likely been in Bray for some 200 years by this point, possibly arriving originally from England.',
    parents: [],
    spouse: ['anne-naylor-elder'],
    children: [
      'william-naylor-1801',
      'samuel-nailor', // twin with george-naylor-1807
      'george-naylor-1807',
      'bartholomew-naylor-1809',
      'bartholomew-naylor-1811',
      'sarah-naylor-1813',
      'jane-naylor-1813',
    ],
    parentLinkCertainty: 'uncertain',
    stories: [],
    photos: [],
    sources: ['stpauls-baptisms', 'crowther-letter'],
    isAncestor: true,
  },
  'anne-naylor-elder': {
    id: 'anne-naylor-elder',
    name: 'Anne Naylor',
    born: 'c. 1780',
    died: 'unknown',
    branch: 'naylor',
    location: 'Bray, Co. Wicklow',
    occupation: '',
    descriptor: 'Wife of Bartholomew (early 1800s)',
    bio:
      'Only her first name survives in the St. Paul\'s Bray baptism register. Mother of at least seven children between 1801 and 1813.',
    parents: [],
    spouse: ['bartholomew-naylor-elder'],
    children: [
      'william-naylor-1801', 'samuel-nailor', 'george-naylor-1807',
      'bartholomew-naylor-1809', 'bartholomew-naylor-1811',
      'sarah-naylor-1813', 'jane-naylor-1813',
    ],
    stories: [],
    photos: [],
    sources: ['stpauls-baptisms'],
    isAncestor: true,
  },

  'william-naylor-1801': {
    id: 'william-naylor-1801', name: 'William Naylor',
    born: '1801', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Eldest known Naylor child',
    bio: 'Baptised 1801 at St. Paul\'s, Bray. Nothing else is recorded.',
    parents: ['bartholomew-naylor-elder', 'anne-naylor-elder'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
    parentLinkCertainty: 'uncertain',
  },
  'george-naylor-1807': {
    id: 'george-naylor-1807', name: 'George Naylor',
    born: '1807', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Twin of Samuel',
    bio: 'Born a twin with Samuel in 1807. Baptised at St. Paul\'s, Bray.',
    parents: ['bartholomew-naylor-elder', 'anne-naylor-elder'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
    parentLinkCertainty: 'uncertain',
  },
  'bartholomew-naylor-1809': {
    id: 'bartholomew-naylor-1809', name: 'Bartholomew Naylor',
    born: '1809', died: 'before 1811', branch: 'naylor', location: 'Bray',
    descriptor: 'Born 1809 — likely died in infancy',
    bio: 'Baptised 1809. A second Bartholomew was baptised in 1811, strongly suggesting this one died in infancy — the practice of reusing the name was common.',
    parents: ['bartholomew-naylor-elder', 'anne-naylor-elder'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
    parentLinkCertainty: 'uncertain',
  },
  'bartholomew-naylor-1811': {
    id: 'bartholomew-naylor-1811', name: 'Bartholomew Naylor',
    born: '1811', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Second of the name',
    bio: 'Baptised 1811. Likely named after his older brother of the same name who died in infancy.',
    parents: ['bartholomew-naylor-elder', 'anne-naylor-elder'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
    parentLinkCertainty: 'uncertain',
  },
  'sarah-naylor-1813': {
    id: 'sarah-naylor-1813', name: 'Sarah Naylor',
    born: '1813', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Twin of Jane',
    bio: 'Born a twin with Jane in 1813. Baptised at St. Paul\'s.',
    parents: ['bartholomew-naylor-elder', 'anne-naylor-elder'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
    parentLinkCertainty: 'uncertain',
  },
  'jane-naylor-1813': {
    id: 'jane-naylor-1813', name: 'Jane Naylor',
    born: '1813', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Twin of Sarah',
    bio: 'Born a twin with Sarah in 1813. Baptised at St. Paul\'s.',
    parents: ['bartholomew-naylor-elder', 'anne-naylor-elder'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
    parentLinkCertainty: 'uncertain',
  },

  // ===== Samuel Nailor & Elizabeth Whitton =====
  'samuel-nailor': {
    id: 'samuel-nailor',
    name: 'Samuel Nailor',
    nicknames: [],
    born: '1807',
    died: 'unknown',
    branch: 'naylor',
    location: 'The Strand, Bray',
    occupation: 'Fisherman',
    descriptor: 'Fisherman of the Strand',
    bio:
      'A fisherman, recorded simply as "of the Strand" in the marriage register. Married Elizabeth Whitton on 1 February 1849 at St. Paul\'s Church, Bray. Witnesses to the marriage were Samuel Little Stevenson and Mary N. Hill. He and Elizabeth had at least five children — Annabella (1849), Bartholomew (1852), Mary (m. Richard Leeson 1883), Sarah (1861) and Samuel (1865).\n\nThe spelling "Nailor" appears on the marriage register but the family later settled on "Naylor".',
    parents: ['bartholomew-naylor-elder', 'anne-naylor-elder'],
    spouse: ['elizabeth-whitton'],
    children: [
      'annabella-naylor-1849',
      'bartholomew-naylor-1852',
      'mary-naylor-leeson',
      'sarah-naylor-1861',
      'samuel-naylor-1865',
    ],
    parentLinkCertainty: 'uncertain',
    stories: [],
    photos: [],
    sources: ['stpauls-marriage-1849'],
    isAncestor: true,
  },
  'elizabeth-whitton': {
    id: 'elizabeth-whitton',
    name: 'Elizabeth Whitton',
    born: 'c. 1825',
    died: 'unknown',
    branch: 'naylor',
    location: 'Bray',
    occupation: '',
    descriptor: "Labourer's daughter, Bray",
    bio:
      "Daughter of John Whitton, labourer. Married Samuel Nailor on 1 February 1849 at St. Paul's Church, Bray.",
    parents: [],
    spouse: ['samuel-nailor'],
    children: [
      'annabella-naylor-1849',
      'bartholomew-naylor-1852',
      'mary-naylor-leeson',
      'sarah-naylor-1861',
      'samuel-naylor-1865',
    ],
    stories: [],
    photos: [],
    sources: ['stpauls-marriage-1849'],
    isAncestor: true,
  },

  'annabella-naylor-1849': {
    id: 'annabella-naylor-1849', name: 'Annabella Naylor',
    born: '1849', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Eldest child of Samuel & Elizabeth',
    bio: 'Born 1849, eldest child of Samuel Nailor and Elizabeth Whitton.',
    parents: ['samuel-nailor', 'elizabeth-whitton'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
  },
  'mary-naylor-leeson': {
    id: 'mary-naylor-leeson', name: 'Mary Naylor',
    born: 'unknown', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Married Richard Leeson, 1883',
    bio: 'Daughter of Samuel and Elizabeth. Married Richard Leeson in 1883.',
    parents: ['samuel-nailor', 'elizabeth-whitton'],
    spouse: ['richard-leeson'], children: [], stories: [], photos: [], sources: [],
  },
  'richard-leeson': {
    id: 'richard-leeson', name: 'Richard Leeson',
    born: 'unknown', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Married Mary Naylor 1883',
    bio: 'Husband of Mary Naylor. Married in Bray, 1883.',
    parents: [], spouse: ['mary-naylor-leeson'], children: [], stories: [], photos: [], sources: [],
  },
  'sarah-naylor-1861': {
    id: 'sarah-naylor-1861', name: 'Sarah Naylor',
    born: '1861', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Daughter of Samuel & Elizabeth',
    bio: 'Born 1861, daughter of Samuel Nailor and Elizabeth Whitton.',
    parents: ['samuel-nailor', 'elizabeth-whitton'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
  },
  'samuel-naylor-1865': {
    id: 'samuel-naylor-1865', name: 'Samuel Naylor',
    born: '1865', died: 'unknown', branch: 'naylor', location: 'Waterside Cottage, Bray',
    descriptor: 'Of Waterside Cottage, Bray',
    bio: 'Born 1865 at Waterside Cottage, Bray. Youngest son of Samuel Nailor and Elizabeth Whitton.',
    parents: ['samuel-nailor', 'elizabeth-whitton'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
  },

  // ===== Bartholomew Naylor (1852) & Mary Anne McMurray =====
  'bartholomew-naylor-1852': {
    id: 'bartholomew-naylor-1852',
    name: 'Bartholomew Naylor',
    nicknames: ['Bat'],
    born: '1 December 1852',
    died: 'unknown',
    branch: 'naylor',
    location: 'Newcourt Cottage, Bray Strand',
    occupation: 'Fisherman, boat builder',
    descriptor: 'Leased Naylor\'s Cove from the Town Commissioners',
    bio:
      'Baptised "Seashore" — a memorable register entry. Son of Samuel Nailor and Elizabeth Whitton. Married Mary Anne Hillard McMurray on 3 July 1878 at Christ Church, Bray.\n\nA fisherman and boat builder. In the late 1890s he took the lease on the cove at the foot of Bray Head from the Town Commissioners — that cove still appears on old maps as Naylor\'s Cove. He built bathing huts, a small pier, and a granite boat house (still standing in the 1950s). He built racing boats for Bray\'s famous regattas.\n\nThe 1901 Census records the household at house #22 Dock Terrace, Bray, one of twenty houses with 111 people between them.',
    parents: ['samuel-nailor', 'elizabeth-whitton'],
    spouse: ['mary-anne-mcmurray'],
    children: [
      'george-naylor-1878', 'elizabeth-naylor-1880', 'kathleen-naylor-1882',
      'samuel-naylor-1884', 'marion-mcmurray-naylor-1885', 'annabella-naylor-1887',
      'william-john-naylor-1889', 'lydia-naylor-1892',
      'bartholomew-naylor-1894', 'david-henry-naylor-1894',
    ],
    stories: ['naylors-cove-regatta'],
    photos: [],
    sources: ['stpauls-baptisms', 'christ-church-marriage-1878', 'census-1901', 'pictorial-history-bray'],
    isAncestor: true,
  },
  'mary-anne-mcmurray': {
    id: 'mary-anne-mcmurray',
    name: 'Mary Anne Hillard McMurray',
    nameVariants: ['Hilliard McMurray'],
    born: 'c. 1855',
    died: 'after 1916',
    branch: 'naylor',
    location: 'Newcourt Cottage, Bray Strand',
    occupation: 'Servant before marriage',
    descriptor: 'Of Newcourt Cottage, Bray',
    bio:
      "Daughter of William John McMurray, fisherman. At the time of her marriage in 1878 she was working as a servant at 2 Florence Terrace, Bray. She and Bartholomew lived at Newcourt Cottage, Bray Strand. Named on her son Bartholomew's Commonwealth War Graves Commission entry as 'Mrs Mary Anne Naylor, Newcourt Cottage, Bray.'",
    parents: ['william-john-mcmurray'],
    spouse: ['bartholomew-naylor-1852'],
    children: [
      'george-naylor-1878', 'elizabeth-naylor-1880', 'kathleen-naylor-1882',
      'samuel-naylor-1884', 'marion-mcmurray-naylor-1885', 'annabella-naylor-1887',
      'william-john-naylor-1889', 'lydia-naylor-1892',
      'bartholomew-naylor-1894', 'david-henry-naylor-1894',
    ],
    stories: [],
    photos: [],
    sources: ['christ-church-marriage-1878', 'cwgc-bart-naylor'],
    isAncestor: true,
  },
  'william-john-mcmurray': {
    id: 'william-john-mcmurray', name: 'William John McMurray',
    born: 'c. 1830', died: 'unknown', branch: 'naylor', location: 'Bray',
    occupation: 'Fisherman', descriptor: 'Fisherman, Bray',
    bio: 'Father of Mary Anne McMurray. A fisherman.',
    parents: [], spouse: [], children: ['mary-anne-mcmurray'],
    stories: [], photos: [], sources: ['christ-church-marriage-1878'],
  },

  // ===== Children of Bartholomew & Mary Anne =====
  'george-naylor-1878': {
    id: 'george-naylor-1878',
    name: 'George Naylor',
    born: '3 December 1878',
    died: 'unknown',
    branch: 'naylor',
    location: 'Barnstaple, Devon',
    occupation: 'Post Office (telephones)',
    descriptor: 'Settled in Devon, Post Office engineer',
    bio:
      'Eldest of the ten Bartholomew/Mary Anne children. Married a woman known to the family as "Maggie". Settled in Barnstaple, Devon, working for the Post Office on the telephone side. Five children: Samuel and Frederick (both died young), Bartholomew (followed his father into the Post Office, lived at Minehead), Kathleen (married an electrical engineer, lived at Hove) and Cissie (married, lived in the old family house at Barnstaple). Maggie kept up correspondence with Aunt Lillie at Crawthew Grove after George\'s death.',
    parents: ['bartholomew-naylor-1852', 'mary-anne-mcmurray'],
    spouse: ['maggie-naylor'],
    children: [
      'samuel-naylor-devon', 'frederick-naylor-devon',
      'bartholomew-naylor-minehead', 'kathleen-naylor-hove', 'cissie-naylor-barnstaple',
    ],
    stories: [], photos: [], sources: ['memoir-bart-hughes'],
  },
  'maggie-naylor': {
    id: 'maggie-naylor', name: 'Maggie Naylor',
    born: 'unknown', died: 'unknown', branch: 'naylor', location: 'Barnstaple, Devon',
    descriptor: 'Wife of George Naylor, Devon',
    bio: 'Wife of George Naylor. Settled with him in Barnstaple, Devon. After George\'s death she kept in regular touch with the Hughes family at Crawthew Grove.',
    parents: [], spouse: ['george-naylor-1878'],
    children: ['samuel-naylor-devon', 'frederick-naylor-devon', 'bartholomew-naylor-minehead', 'kathleen-naylor-hove', 'cissie-naylor-barnstaple'],
    stories: [], photos: [], sources: ['memoir-bart-hughes'],
  },
  'samuel-naylor-devon': {
    id: 'samuel-naylor-devon', name: 'Samuel Naylor',
    born: 'unknown', died: 'young', branch: 'naylor', location: 'Devon',
    descriptor: 'Died young',
    bio: 'Son of George Naylor and Maggie. Died young.',
    parents: ['george-naylor-1878', 'maggie-naylor'], spouse: [], children: [],
    stories: [], photos: [], sources: ['memoir-bart-hughes'],
  },
  'frederick-naylor-devon': {
    id: 'frederick-naylor-devon', name: 'Frederick Naylor',
    born: 'unknown', died: 'young', branch: 'naylor', location: 'Devon',
    descriptor: 'Died young',
    bio: 'Son of George Naylor and Maggie. Died young.',
    parents: ['george-naylor-1878', 'maggie-naylor'], spouse: [], children: [],
    stories: [], photos: [], sources: ['memoir-bart-hughes'],
  },
  'bartholomew-naylor-minehead': {
    id: 'bartholomew-naylor-minehead', name: 'Bartholomew Naylor',
    born: 'unknown', died: 'unknown', branch: 'naylor', location: 'Minehead, Somerset',
    occupation: 'Post Office',
    descriptor: 'Followed his father into the Post Office',
    bio: 'Son of George Naylor. Followed his father into the Post Office and lived in Minehead.',
    parents: ['george-naylor-1878', 'maggie-naylor'], spouse: [], children: [],
    stories: [], photos: [], sources: ['memoir-bart-hughes'],
  },
  'kathleen-naylor-hove': {
    id: 'kathleen-naylor-hove', name: 'Kathleen Naylor',
    born: 'unknown', died: 'unknown', branch: 'naylor', location: 'Hove, Sussex',
    descriptor: 'Married an electrical engineer; lived at Hove',
    bio: 'Daughter of George Naylor. Married an electrical engineer and lived in Hove, Sussex.',
    parents: ['george-naylor-1878', 'maggie-naylor'], spouse: [], children: [],
    stories: [], photos: [], sources: ['memoir-bart-hughes'],
  },
  'cissie-naylor-barnstaple': {
    id: 'cissie-naylor-barnstaple', name: 'Cissie Naylor',
    born: 'unknown', died: 'unknown', branch: 'naylor', location: 'Barnstaple, Devon',
    descriptor: 'Lived in the old family house at Barnstaple',
    bio: 'Daughter of George Naylor. Married and stayed on in the old family house at Barnstaple.',
    parents: ['george-naylor-1878', 'maggie-naylor'], spouse: [], children: [],
    stories: [], photos: [], sources: ['memoir-bart-hughes'],
  },

  'elizabeth-naylor-1880': {
    id: 'elizabeth-naylor-1880', name: 'Elizabeth Naylor',
    born: '4 January 1880', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Second child of Bartholomew & Mary Anne',
    bio: 'Born 4 January 1880 at Newcourt Cottage, Bray.',
    parents: ['bartholomew-naylor-1852', 'mary-anne-mcmurray'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
  },
  'kathleen-naylor-1882': {
    id: 'kathleen-naylor-1882', name: 'Kathleen Naylor',
    born: '24 July 1882', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Of Putland Road, Bray',
    bio: 'Born 24 July 1882. A small purse with her name and address — "Kathleen Naylor, Putland Road, Bray" — survives in the family.',
    parents: ['bartholomew-naylor-1852', 'mary-anne-mcmurray'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
  },
  'samuel-naylor-1884': {
    id: 'samuel-naylor-1884', name: 'Samuel Naylor',
    born: '6 February 1884', died: 'unknown', branch: 'naylor', location: 'America (emigrated)',
    descriptor: 'Emigrated to America; "prospered quite well"',
    bio:
      'Born 6 February 1884 at Newcourt Cottage, Bray. Emigrated to America as a young man. The family memoir records simply that he "prospered quite well" there — further detail did not survive.',
    parents: ['bartholomew-naylor-1852', 'mary-anne-mcmurray'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms', 'memoir-bart-hughes'],
  },
  'marion-mcmurray-naylor-1885': {
    id: 'marion-mcmurray-naylor-1885', name: 'Marion McMurray Naylor',
    nameVariants: ['Marian'],
    born: '31 October 1885', died: 'unknown', branch: 'naylor', location: 'Putland Road, Bray',
    descriptor: 'Emigrated to America, later returned to Bray',
    bio: 'Born 31 October 1885. Emigrated to America. Eventually returned to live in the family house on Putland Road, Bray.',
    parents: ['bartholomew-naylor-1852', 'mary-anne-mcmurray'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms', 'memoir-bart-hughes'],
  },
  'annabella-naylor-1887': {
    id: 'annabella-naylor-1887', name: 'Annabella Naylor',
    nameVariants: ['Anna Bella'],
    born: '4 March 1887', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Sixth child; date varies between sources',
    bio:
      'Baptismal register: 4 March 1887. The Naylor list in the family memoir gives 1 April 1888. We trust the church register over the memoir for dates.',
    parents: ['bartholomew-naylor-1852', 'mary-anne-mcmurray'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
  },
  'william-john-naylor-1889': {
    id: 'william-john-naylor-1889', name: 'William John Naylor',
    born: '10 April 1889', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Seventh child',
    bio: 'Born 10 April 1889 at Newcourt Cottage, Bray. Named for his maternal grandfather, William John McMurray.',
    parents: ['bartholomew-naylor-1852', 'mary-anne-mcmurray'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
  },

  // ===== Lydia Naylor — direct ancestor =====
  'lydia-naylor-1892': {
    id: 'lydia-naylor-1892',
    name: 'Lydia Naylor',
    born: '16 May 1892',
    died: '20 October 1924',
    branch: 'naylor',
    location: 'Bray → East Dulwich, London',
    occupation: '',
    descriptor: 'Mother of Bart and Marion; died aged 32',
    bio:
      "Born 16 May 1892 at Newcourt Cottage, Bray. Eighth child of Bartholomew and Mary Anne. Family story has it that William John Hughes, who would become her husband, returned to Ireland after a broken romance in England and first saw Lydia when she was scrubbing a floor.\n\nLydia and William married in 1915 at St. John's Church, Goose Green, East Dulwich. They lived at 4 Crawthew Grove, East Dulwich, sharing the house with William's mother and his elder sister Lillie — an arrangement that was \"far from happy\" for Lydia. She returned specifically to Bray for the birth of her daughter Marion in 1921.\n\nLydia died on 20 October 1924, aged 32. Her son Bart was 7, her daughter Marion only 3. She was buried at Norwood Cemetery in South London after a funeral at St. John, East Dulwich.",
    parents: ['bartholomew-naylor-1852', 'mary-anne-mcmurray'],
    spouse: ['william-john-hughes'],
    children: ['bart-edward-naylor-hughes', 'marion-lydia-hughes'],
    stories: ['lydia-death-1924'],
    photos: [],
    sources: ['stpauls-baptisms', 'memoir-bart-hughes'],
    isAncestor: true,
  },

  'bartholomew-naylor-1894': {
    id: 'bartholomew-naylor-1894',
    name: 'Bartholomew Naylor (Bart Jr.)',
    born: '19 October 1894',
    died: '13 November 1916',
    branch: 'naylor',
    location: 'Bray → killed at the Somme',
    occupation: 'L/Cpl, 10th Bn. Royal Dublin Fusiliers',
    descriptor: 'Killed at the Somme, aged 22',
    bio:
      "Twin of David Henry. L/Cpl, 26061, 10th Battalion Royal Dublin Fusiliers. Killed in action on 13 November 1916, aged 22, at the Battle of the Ancre — the closing phase of the Somme offensive. He has no known grave and is commemorated on the Thiepval Memorial in France and on the Bray War Memorial. The Commonwealth War Graves entry names him as the son of Mrs Mary Anne Naylor, Newcourt Cottage, Bray.\n\nAt home he was a celebrated oarsman in Bray's regattas. The Bray Cove Swimming Club book conflates him with his grandfather, suggesting young Bart leased the cove in the 1890s — that is clearly wrong: Bart was only 4 then. The cove was leased by his grandfather, the elder Bartholomew Naylor (b. 1852).\n\nA gold regatta medal won by him or his twin passed through the family — last known to have been held by William John Hughes, who gave it to his daughter Marion.",
    parents: ['bartholomew-naylor-1852', 'mary-anne-mcmurray'],
    spouse: [],
    children: [],
    stories: ['somme-bart-naylor', 'naylors-cove-regatta'],
    photos: [],
    sources: ['cwgc-bart-naylor', 'bray-war-memorial', 'pictorial-history-bray'],
  },
  'david-henry-naylor-1894': {
    id: 'david-henry-naylor-1894',
    name: 'David Henry Naylor',
    born: '19 October 1894',
    died: 'unknown',
    branch: 'naylor',
    location: 'Bray',
    occupation: 'Oarsman',
    descriptor: 'Twin of Bart; survived the war',
    bio:
      "Bart's twin. Survived the First World War. Like his brother he was a notable oarsman in Bray's regattas — the family's gold medal may have been his.",
    parents: ['bartholomew-naylor-1852', 'mary-anne-mcmurray'],
    spouse: [],
    children: [],
    stories: ['naylors-cove-regatta'],
    photos: [],
    sources: ['memoir-bart-hughes'],
  },

  // ===== Hughes side =====
  'edward-hughes': {
    id: 'edward-hughes',
    name: 'Edward Hughes',
    born: 'c. 1855',
    died: 'unknown',
    branch: 'hughes',
    location: 'Dublin → Wimbledon → Kensington → East Dulwich',
    occupation: 'Master printer / bookbinder',
    descriptor: 'Master printer, used gold leaf in bookbinding',
    bio:
      "Married Isabella Carroll on 6 April 1881 in Dublin — recorded in the family Bible. Their first home was Sandford Avenue, Donnybrook. A master printer, he used gold leaf in his bookbinding. The family moved to England around 1894 — first to Wimbledon (possibly Trinity Road), then 23 New Street, Kennington, and finally 4 Crawthew Grove, East Dulwich, where the family Hughes line remained until Aunt Lillie's death in January 1970.",
    parents: [], spouse: ['isabella-carroll'],
    children: [
      'annie-hughes-1882', 'edward-francis-hughes', 'maria-florence-hughes',
      'aunt-lillie-hughes', 'william-john-hughes', 'bob-hughes',
    ],
    stories: [], photos: [], sources: ['family-bible-hughes'],
    isAncestor: true,
  },
  'isabella-carroll': {
    id: 'isabella-carroll',
    name: 'Isabella Carroll',
    born: 'unknown', died: 'unknown', branch: 'hughes',
    location: 'Dublin → London',
    descriptor: 'Wife of Edward Hughes',
    bio: 'Married Edward Hughes in Dublin on 6 April 1881. Mother of six children. Lived at 4 Crawthew Grove, East Dulwich, in later years.',
    parents: [], spouse: ['edward-hughes'],
    children: [
      'annie-hughes-1882', 'edward-francis-hughes', 'maria-florence-hughes',
      'aunt-lillie-hughes', 'william-john-hughes', 'bob-hughes',
    ],
    stories: [], photos: [], sources: ['family-bible-hughes'],
    isAncestor: true,
  },
  'annie-hughes-1882': {
    id: 'annie-hughes-1882', name: 'Annie Hughes',
    born: '13 January 1882', died: '4 February 1886', branch: 'hughes',
    location: 'Dublin', descriptor: 'Died aged 4',
    bio: 'Eldest child of Edward and Isabella. Died 4 February 1886, aged 4.',
    parents: ['edward-hughes', 'isabella-carroll'], spouse: [], children: [],
    stories: [], photos: [], sources: ['family-bible-hughes'],
  },
  'edward-francis-hughes': {
    id: 'edward-francis-hughes', name: 'Edward Francis Hughes',
    born: '14 January 1883', died: '16 November 1916', branch: 'hughes',
    location: 'Dublin → Kennington, London',
    occupation: 'Engraver',
    descriptor: 'Engraver of Kennington; killed in WWI',
    bio:
      "Born 14 January 1883, eldest son of Edward and Isabella. Worked as an engraver at 23 New Street, Kennington. Married Alice May Bygrave at St. Mary Newington on 28 August 1909. Killed in the First World War on 16 November 1916 — three days after his cousin-by-marriage Bart Naylor died at the Somme. Buried in Norwood Cemetery; his name is on the war memorial at the cemetery gates.",
    parents: ['edward-hughes', 'isabella-carroll'],
    spouse: ['alice-may-bygrave'], children: [],
    stories: [], photos: [], sources: ['family-bible-hughes', 'norwood-war-memorial'],
  },
  'alice-may-bygrave': {
    id: 'alice-may-bygrave', name: 'Alice May Bygrave',
    born: 'unknown', died: 'unknown', branch: 'hughes',
    location: 'London', descriptor: 'Married Edward Francis Hughes, 1909',
    bio: 'Married Edward Francis Hughes at St. Mary Newington on 28 August 1909.',
    parents: [], spouse: ['edward-francis-hughes'], children: [],
    stories: [], photos: [], sources: ['family-bible-hughes'],
  },
  'maria-florence-hughes': {
    id: 'maria-florence-hughes', name: 'Maria Florence Hughes',
    born: '6 April 1885', died: '30 April 1886', branch: 'hughes',
    location: 'Dublin', descriptor: 'Died in infancy',
    bio: 'Born 6 April 1885, died 30 April 1886 — just three weeks past her first birthday.',
    parents: ['edward-hughes', 'isabella-carroll'], spouse: [], children: [],
    stories: [], photos: [], sources: ['family-bible-hughes'],
  },
  'aunt-lillie-hughes': {
    id: 'aunt-lillie-hughes', name: 'Elizabeth "Aunt Lillie" Hughes',
    born: '9 October 1886', died: '30 January 1970', branch: 'hughes',
    location: '4 Crawthew Grove, East Dulwich',
    descriptor: 'Lived at Crawthew Grove all her life',
    bio:
      "Born 9 October 1886. Lived at 4 Crawthew Grove, East Dulwich, all her life. After Lydia's death in 1924 she helped raise her young niece and nephew, Bart and Marion. Smothered the flames when Marion's hair caught fire from a candle — with her bare hands.",
    parents: ['edward-hughes', 'isabella-carroll'], spouse: [], children: [],
    stories: ['candle-marion-hair'], photos: [], sources: ['family-bible-hughes', 'memoir-bart-hughes'],
  },
  'william-john-hughes': {
    id: 'william-john-hughes',
    name: 'William John Hughes',
    born: '3 March 1889',
    died: '1954',
    branch: 'hughes',
    location: '4 Crawthew Grove, East Dulwich',
    occupation: "Solicitors' clerk",
    descriptor: 'Husband of Lydia; widowed in 1924',
    bio:
      "Born 3 March 1889 (recorded in the family Bible as 1890; the church register is taken as canonical). Worked in the legal profession — at Dallimore Pilbrow & Co. and later at Herbert Smith & Co. of 65 London Wall.\n\nReturned to Ireland after a broken romance and first saw Lydia Naylor scrubbing a floor. They married in 1915. He was widowed in October 1924 with two small children, and lived on at 4 Crawthew Grove until his death in 1954.",
    parents: ['edward-hughes', 'isabella-carroll'],
    spouse: ['lydia-naylor-1892'],
    children: ['bart-edward-naylor-hughes', 'marion-lydia-hughes'],
    stories: [], photos: [], sources: ['family-bible-hughes', 'memoir-bart-hughes'],
    isAncestor: true,
  },
  'bob-hughes': {
    id: 'bob-hughes', name: 'Robert Frederick "Bob" Hughes',
    born: '18 January 1898', died: '4 February 1919', branch: 'hughes',
    location: 'London → Doullens, France',
    occupation: 'Royal Flying Corps / RAF',
    descriptor: 'Died in the 1918–19 flu pandemic',
    bio:
      "Born 18 January 1898, youngest child of Edward and Isabella. Served in the Royal Flying Corps / RAF. Died on 4 February 1919, aged 21, of the 1918–19 influenza pandemic. Buried in the war cemetery at Doullens, Northern France.",
    parents: ['edward-hughes', 'isabella-carroll'], spouse: [], children: [],
    stories: [], photos: [], sources: ['family-bible-hughes'],
  },

  // ===== Bart Edward Naylor Hughes (the memoirist) =====
  'bart-edward-naylor-hughes': {
    id: 'bart-edward-naylor-hughes',
    name: 'Bartholomew Edward Naylor Hughes',
    nicknames: ['Bart'],
    born: 'January 1917',
    died: '1977',
    branch: 'hughes',
    location: '4 Crawthew Grove, East Dulwich',
    occupation: '',
    descriptor: 'Author of the family memoir',
    bio:
      "Born January 1917 at 4 Crawthew Grove. Eldest child of William John Hughes and Lydia Naylor. Lost his mother at the age of 7. The first-person voice in the family memoir — written down in the 1970s/80s — is his.\n\nMarried Marjorie Rose West (1917–2009). Two children: Susan Marjorie (1946) and Paul Naylor (1950).",
    parents: ['william-john-hughes', 'lydia-naylor-1892'],
    spouse: ['marjorie-rose-west'],
    children: ['susan-marjorie-hughes', 'paul-naylor-hughes'],
    stories: ['lydia-death-1924', 'crab-bucket', 'irish-sea-steerage'],
    photos: [], sources: ['memoir-bart-hughes'],
  },
  'marjorie-rose-west': {
    id: 'marjorie-rose-west', name: 'Marjorie Rose West',
    born: '1917', died: '2009', branch: 'hughes',
    location: 'London', descriptor: 'Wife of Bart Hughes',
    bio: 'Married Bart Edward Naylor Hughes. Mother of Susan and Paul.',
    parents: [], spouse: ['bart-edward-naylor-hughes'],
    children: ['susan-marjorie-hughes', 'paul-naylor-hughes'],
    stories: [], photos: [], sources: ['memoir-bart-hughes'],
  },
  'susan-marjorie-hughes': {
    id: 'susan-marjorie-hughes', name: 'Susan Marjorie Hughes',
    born: '1946', died: '', branch: 'hughes', location: 'England',
    descriptor: 'Daughter of Bart and Marjorie',
    bio: 'Born 1946, daughter of Bart Edward Naylor Hughes and Marjorie Rose West.',
    parents: ['bart-edward-naylor-hughes', 'marjorie-rose-west'],
    spouse: [], children: [], stories: [], photos: [], sources: [],
  },
  'paul-naylor-hughes': {
    id: 'paul-naylor-hughes', name: 'Paul Naylor Hughes',
    born: '1950', died: '', branch: 'hughes', location: 'England',
    descriptor: 'Son of Bart and Marjorie',
    bio: 'Born 1950, son of Bart Edward Naylor Hughes and Marjorie Rose West.',
    parents: ['bart-edward-naylor-hughes', 'marjorie-rose-west'],
    spouse: [], children: [], stories: [], photos: [], sources: [],
  },

  // ===== Marion Lydia Hughes — direct ancestor =====
  'marion-lydia-hughes': {
    id: 'marion-lydia-hughes',
    name: 'Marion Lydia Hughes',
    nameVariants: ['Marian'],
    born: '21 May 1921',
    died: '',
    branch: 'hughes',
    location: 'Bray (birth) → London',
    occupation: '',
    descriptor: 'Grandmother; lost her mother aged 3',
    bio:
      "Born 21 May 1921 in Bray — Lydia specifically returned to Ireland for the birth. Was only 3 when her mother died in October 1924. Survived a candle fire when her hair caught light around age 2½ — her aunt Lillie smothered the flames with her bare hands.\n\nMarried Donald Newman. Two children: Anne and Peter.",
    parents: ['william-john-hughes', 'lydia-naylor-1892'],
    spouse: ['donald-newman'],
    children: ['anne-newman', 'peter-newman'],
    stories: ['candle-marion-hair', 'lydia-death-1924'],
    photos: [], sources: ['memoir-bart-hughes'],
    isAncestor: true,
  },
  'donald-newman': {
    id: 'donald-newman', name: 'Donald Newman',
    born: 'unknown', died: '', branch: 'newman', location: 'England',
    descriptor: 'Husband of Marion Hughes',
    bio: 'Married Marion Lydia Hughes. Father of Anne and Peter.',
    parents: [], spouse: ['marion-lydia-hughes'],
    children: ['anne-newman', 'peter-newman'],
    stories: [], photos: [], sources: [], isAncestor: true,
  },
  'anne-newman': {
    id: 'anne-newman', name: 'Anne Newman',
    born: 'unknown', died: '', branch: 'newman', location: 'England',
    descriptor: 'Daughter of Marion and Donald',
    bio: 'Eldest child of Marion Lydia Hughes and Donald Newman. Married Mark Mackay. Mother of David and Jack.',
    parents: ['marion-lydia-hughes', 'donald-newman'],
    spouse: ['mark-mackay'], children: ['david-mackay', 'you'],
    stories: [], photos: [], sources: [], isAncestor: true,
  },
  'peter-newman': {
    id: 'peter-newman', name: 'Peter Newman',
    born: 'unknown', died: '', branch: 'newman', location: 'England',
    descriptor: 'Son of Marion and Donald',
    bio: 'Son of Marion Lydia Hughes and Donald Newman.',
    parents: ['marion-lydia-hughes', 'donald-newman'],
    spouse: [], children: [], stories: [], photos: [], sources: [],
  },
  'mark-mackay': {
    id: 'mark-mackay', name: 'Mark Mackay',
    born: 'unknown', died: '', branch: 'mackay', location: 'England',
    descriptor: 'Father of David and Jack',
    bio: 'Married Anne Newman. Father of David (1993) and Jack (1996).',
    parents: [], spouse: ['anne-newman'], children: ['david-mackay', 'you'],
    stories: [], photos: [], sources: [], isAncestor: true,
  },
  'david-mackay': {
    id: 'david-mackay', name: 'David Mackay',
    born: '1993', died: '', branch: 'mackay', location: '',
    descriptor: 'Elder brother of Jack',
    bio: 'Elder son of Anne Newman and Mark Mackay.',
    parents: ['anne-newman', 'mark-mackay'],
    spouse: [], children: [], stories: [], photos: [], sources: [],
  },
  'you': {
    id: 'you', name: 'Jack Mackay',
    born: '1996', died: '', branch: 'mackay', location: '',
    descriptor: 'Younger brother of David',
    bio: 'Younger son of Anne Newman and Mark Mackay. Edit this entry in src/data/familyData.js to add more.',
    parents: ['anne-newman', 'mark-mackay'],
    spouse: [], children: [],
    stories: [], photos: [], sources: [], isAncestor: true, isViewerDefault: true,
  },

  // ===== Wider Bray Naylors (group-portrait page) =====
  'sam-fumbler-naylor': {
    id: 'sam-fumbler-naylor',
    name: 'Sam Naylor Snr',
    nicknames: ['The Fumbler'],
    born: 'unknown',
    died: 'aged 85',
    branch: 'naylor',
    location: 'Rose Cottage, Bray seafront',
    occupation: 'Fisherman, water bailiff',
    descriptor: 'One of the four Naylor brothers of Rose Cottage',
    bio:
      "One of four Naylor brothers who lived together at Rose Cottage on Bray seafront. Known as \"The Fumbler\" because he was always making and repairing things.\n\nRowed a 25ft boat out to Ballygannon four days a week, leaving at 2am. Caught codling, lobster, whelk, salmon (once 120 in a single seine net shot) and herring. Later went to sea between Ireland and England, and then deep-sea on the sailboat Polly with Dan Pluck — as far as Australia. Injured his hand and retired from the sea. Took a job as water bailiff on the Dargle for Lord Meath. Built his last boat aged 80. Died aged 85.",
    parents: [], spouse: [], children: [],
    stories: ['voyage-to-australia', 'four-brothers-nicknames'],
    photos: [], sources: ['pictorial-history-bray'],
  },
  'samuel-naylor-jr-ww2': {
    id: 'samuel-naylor-jr-ww2',
    name: 'Samuel Naylor Jr',
    born: 'unknown',
    died: '21 September 1941',
    branch: 'naylor',
    location: 'Bray',
    occupation: 'Merchant seaman',
    descriptor: 'Killed in WWII, Walmer Castle sinking',
    bio:
      "A merchant seaman. His ship, the City of Waterford, was sunk by collision with the Dutch tug Thames on 19 September 1941. The crew were rescued and transferred to the Walmer Castle, which was bombed by enemy aircraft two days later. Samuel was among those killed.",
    parents: [], spouse: [], children: [],
    stories: ['walmer-castle-1941'], photos: [], sources: ['pictorial-history-bray'],
  },
  'sammy-naylor': {
    id: 'sammy-naylor',
    name: 'Sammy Naylor',
    born: 'unknown', died: 'unknown', branch: 'naylor', location: 'Bray',
    occupation: 'Sailor',
    descriptor: 'One of Bray\'s best-known sailors',
    bio:
      'One of Bray\'s best-known sailors and uncle to Joe Naylor. Family anecdote: asked by a dentist where the bad tooth was, Sammy answered "Upper deck, Sir."',
    parents: [], spouse: [], children: [],
    stories: ['sammy-upper-deck'], photos: [], sources: ['bray-people-1987'],
  },
  'joe-naylor': {
    id: 'joe-naylor',
    name: 'Joe Naylor',
    born: '7 May 1913', died: 'unknown', branch: 'naylor',
    location: 'St. Kevin\'s Square, Bray',
    occupation: 'Railway worker, builder, coast-watcher',
    descriptor: 'Featured in the Bray People, 1987',
    bio:
      "Born 7 May 1913 at St. Kevin's Square, Bray. Nephew of Sammy Naylor. Worked on the railway and in building; served in the coast-watching service during the Second World War. Chairman of the local Rowing Club. Played for Strand Rovers football, rugby with the local club, and performed with the United Bray Entertainers. Interviewed in the Bray People newspaper on 31 July 1987.",
    parents: [], spouse: [], children: [],
    stories: [], photos: [], sources: ['bray-people-1987'],
  },
  'bill-cody-naylor': {
    id: 'bill-cody-naylor', name: 'Bill "Cody" Naylor',
    born: 'unknown', died: 'unknown', branch: 'naylor', location: 'Bray',
    nicknames: ['Cody'],
    descriptor: 'Photographed at the Strand c. 1945',
    bio: 'Photographed at the Strand around 1945 with Eddie Crowe and another Sam Naylor.',
    parents: [], spouse: [], children: [], stories: [], photos: [], sources: ['pictorial-history-bray'],
  },
  'rose-naylor-donnelly': {
    id: 'rose-naylor-donnelly', name: 'Rose Naylor',
    born: 'unknown', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: '"Last of the Naylors" — married Andy Donnelly',
    bio: 'Described in a Bray pictorial book as "the last of the Naylors". Married Andy Donnelly.',
    parents: [], spouse: ['andy-donnelly'], children: [],
    stories: [], photos: [], sources: ['pictorial-history-bray'],
  },
  'andy-donnelly': {
    id: 'andy-donnelly', name: 'Andy Donnelly',
    born: 'unknown', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Married Rose Naylor',
    bio: 'Married Rose Naylor.', parents: [],
    spouse: ['rose-naylor-donnelly'], children: [], stories: [], photos: [], sources: [],
  },
};

// ---------- DIRECT-LINE / VIEWER ----------
export const viewerCandidates = [
  { id: 'you', label: 'Jack (me — default)' },
  { id: 'david-mackay', label: 'David (brother)' },
  { id: 'anne-newman', label: 'Anne Newman (mum)' },
  { id: 'peter-newman', label: 'Peter Newman (uncle)' },
  { id: 'marion-lydia-hughes', label: 'Marion Hughes (grandmother)' },
  { id: 'bart-edward-naylor-hughes', label: 'Bart Hughes (memoirist)' },
  { id: 'susan-marjorie-hughes', label: 'Susan Hughes' },
  { id: 'paul-naylor-hughes', label: 'Paul Hughes' },
];

// Computes the chain of ancestors above a viewer person (recursive).
export function ancestorsOf(personId, all = people) {
  const out = new Set();
  function walk(id) {
    const p = all[id];
    if (!p) return;
    for (const parent of p.parents || []) {
      if (out.has(parent)) continue;
      out.add(parent);
      walk(parent);
    }
  }
  walk(personId);
  return out;
}

// ---------- PLACES ----------
export const places = [
  {
    id: 'bray',
    name: 'Bray, Co. Wicklow',
    lat: 53.2027, lng: -6.1131,
    short: 'The family seat for over 200 years.',
    body:
      'The Naylors have been recorded in Bray since at least 1801, when the first of seven children was baptised at St. Paul\'s Church. The family fished out of the Strand, leased a cove at the foot of Bray Head, and lived in a series of houses along the seafront and town — Newcourt Cottage, Rose Cottage, Dock Terrace, Putland Road, Waterside Cottage, St. Kevin\'s Square. There were two distinct Bray Naylor branches — Protestant and Catholic — and relations between them were close.',
  },
  {
    id: 'naylors-cove',
    name: "Naylor's Cove",
    lat: 53.1928, lng: -6.0995,
    short: 'Leased by Bartholomew Naylor in the late 1890s.',
    body:
      "A small cove at the foot of Bray Head, leased by the elder Bartholomew Naylor (b. 1852) from the Town Commissioners in the late 1890s. He built bathing huts and a small pier for visitors, plus a granite boat house that still stood in the 1950s. The cove is still marked as Naylor's Cove on old maps of Bray.",
  },
  {
    id: 'newcourt-cottage',
    name: 'Newcourt Cottage, Bray Strand',
    lat: 53.2035, lng: -6.1075,
    short: 'Family home of Bartholomew and Mary Anne, 1878 onwards.',
    body: 'The Bray Strand home where Bartholomew and Mary Anne raised their ten children, including Lydia. The Commonwealth War Graves entry for L/Cpl Bart Naylor names this as his parents\' address.',
  },
  {
    id: 'dock-terrace',
    name: 'Dock Terrace, Bray',
    lat: 53.2058, lng: -6.1031,
    short: '1901 Census address.',
    body: 'In the 1901 Census of Ireland the family appears at house #22 Dock Terrace, Bray — one of twenty houses with 111 people between them.',
  },
  {
    id: 'putland-road',
    name: 'Putland Road, Bray',
    lat: 53.2010, lng: -6.1095,
    short: 'Later family house.',
    body: 'A small purse with "Kathleen Naylor, Putland Road, Bray" still survives in the family. Marion McMurray Naylor returned from America to live here in later life.',
  },
  {
    id: 'crawthew-grove',
    name: '4 Crawthew Grove, East Dulwich',
    lat: 51.4567, lng: -0.0699,
    short: 'Where Lydia raised her family.',
    body:
      "The Hughes family home from the 1890s through to January 1970 (when Aunt Lillie died). After her marriage in 1915, Lydia Naylor lived here with her husband William, his mother and his sister Lillie — an arrangement that was \"far from happy\". Bart and Marion were born here.",
  },
  {
    id: 'barnstaple',
    name: 'Barnstaple, Devon',
    lat: 51.0808, lng: -4.0613,
    short: 'Where George Naylor settled.',
    body: 'George Naylor (b. 1878) and his wife Maggie settled here. Their daughter Cissie stayed on in the old family house in later life.',
  },
  {
    id: 'thiepval',
    name: 'Thiepval Memorial, France',
    lat: 50.0511, lng: 2.6856,
    short: 'L/Cpl Bart Naylor commemorated here.',
    body: 'Bart Naylor (b. 1894) has no known grave; he is commemorated on the Thiepval Memorial on the Somme, alongside more than 72,000 other British and South African soldiers.',
  },
  {
    id: 'doullens',
    name: 'Doullens War Cemetery, France',
    lat: 50.1568, lng: 2.3458,
    short: 'Where Bob Hughes is buried.',
    body: 'Bob Hughes (1898–1919), RFC/RAF, died of the 1918–19 influenza pandemic and is buried at the war cemetery at Doullens, Northern France.',
  },
];

// ---------- DOCUMENTS ----------
export const documents = [
  {
    id: 'crowther-letter-1999',
    title: 'Letter from Claire Crowther, Bray Cualann Historical Society',
    date: '1999',
    image: '/images/placeholder-doc.svg',
    caption: 'A 1999 letter from the Bray Cualann Historical Society confirming the family\'s long presence in Bray and supplying the early baptism dates.',
  },
  {
    id: 'memoir-bart-hughes',
    title: 'The Bartholomew Edward Naylor Hughes Memoir',
    date: '1970s/80s',
    image: '/images/placeholder-doc.svg',
    multi: true,
    caption: 'A typescript family memoir written by Bart Hughes (1917–1977), Lydia\'s son. The first-person voice in most of the family stories. Multi-page document.',
  },
  {
    id: 'stpauls-baptisms',
    title: 'Baptism Register, St. Paul\'s Church, Bray',
    date: '1801–1894',
    image: '/images/placeholder-doc.svg',
    caption: 'Extracts from the baptism register, recording Bartholomew & Anne Naylor\'s children from 1801, Samuel & Elizabeth\'s children from 1849, and the ten children of Bartholomew & Mary Anne from 1878 to 1894.',
  },
  {
    id: 'stpauls-marriage-1849',
    title: 'Marriage Register: Samuel Nailor & Elizabeth Whitton',
    date: '1 February 1849',
    image: '/images/placeholder-doc.svg',
    caption: 'St. Paul\'s Church, Bray. Witnesses: Samuel Little Stevenson and Mary N. Hill. The spelling "Nailor" appears here.',
  },
  {
    id: 'christ-church-marriage-1878',
    title: 'Marriage Register: Bartholomew Naylor & Mary Anne McMurray',
    date: '3 July 1878',
    image: '/images/placeholder-doc.svg',
    caption: 'Christ Church, Bray. Mary Anne is listed as a servant of 2 Florence Terrace, Bray.',
  },
  {
    id: 'census-1901',
    title: '1901 Census of Ireland — Dock Terrace, Bray',
    date: '1901',
    image: '/images/placeholder-doc.svg',
    caption: 'The household at house #22 Dock Terrace — one of twenty houses with 111 people between them.',
  },
  {
    id: 'cwgc-bart-naylor',
    title: 'Commonwealth War Graves: L/Cpl Bartholomew Naylor',
    date: '13 November 1916',
    image: '/images/placeholder-doc.svg',
    caption: 'Killed in action at the Somme. Commemorated on the Thiepval Memorial. Named as the son of Mrs Mary Anne Naylor, Newcourt Cottage, Bray.',
  },
  {
    id: 'bray-war-memorial',
    title: 'Bray War Memorial: First World War Special Edition',
    date: '1914–1918',
    image: '/images/placeholder-doc.svg',
    caption: 'L/Cpl Bart Naylor\'s entry on the Bray War Memorial.',
  },
  {
    id: 'bray-people-1987',
    title: 'Bray People — "Meet the Long Servers" by Jim Brophy',
    date: '24 & 31 July 1987',
    image: '/images/placeholder-doc.svg',
    caption: 'Newspaper feature on Joe Naylor (b. 1913), nephew of Sammy Naylor.',
  },
  {
    id: 'pictorial-history-bray',
    title: 'A Pictorial History of Bray (Cairns & Gallagher)',
    date: 'Vol. 1: The Seafront and Environs',
    image: '/images/placeholder-doc.svg',
    caption: 'Photographs of Sam Naylor Snr "The Fumbler", the four Rose Cottage brothers, and Naylor\'s Cove.',
  },
  {
    id: 'family-bible-hughes',
    title: 'Hughes Family Bible',
    date: 'from 1881',
    image: '/images/placeholder-doc.svg',
    caption: 'The Hughes family Bible records Edward Hughes and Isabella Carroll\'s marriage on 6 April 1881 in Dublin, and the births and deaths of their six children.',
  },
  {
    id: 'norwood-war-memorial',
    title: 'Norwood Cemetery War Memorial',
    date: '1914–1918',
    image: '/images/placeholder-doc.svg',
    caption: 'Edward Francis Hughes is named on the war memorial at the gates of Norwood Cemetery in South London.',
  },
];

// ---------- STORIES (longer set-pieces) ----------
export const stories = {
  'lydia-death-1924': {
    id: 'lydia-death-1924',
    title: "Lydia's Death, October 1924",
    people: ['lydia-naylor-1892', 'bart-edward-naylor-hughes', 'marion-lydia-hughes', 'william-john-hughes', 'aunt-lillie-hughes'],
    body:
      "Told later by Bart, who was 7 at the time:\n\n\"I remember the milkman's son saying, as I came in from school, that the curtains in our house were all drawn over. I did not really understand. Marion was 3. My mother was 32.\"\n\nThe funeral was at St. John, East Dulwich; Lydia was buried in Norwood Cemetery, South London. The household at Crawthew Grove then settled into its long widowed shape: William, his mother, his sister Lillie, and the two small children.",
  },
  'somme-bart-naylor': {
    id: 'somme-bart-naylor',
    title: 'The Somme, November 1916',
    people: ['bartholomew-naylor-1894', 'mary-anne-mcmurray', 'david-henry-naylor-1894'],
    body:
      'On 13 November 1916, L/Cpl Bartholomew Naylor, 26061, 10th Battalion Royal Dublin Fusiliers, was killed in action at the Battle of the Ancre — the closing phase of the Somme offensive. He was 22. His twin David survived.\n\nHe has no known grave. He is commemorated on the Thiepval Memorial in France and on the Bray War Memorial at home. The Commonwealth War Graves entry names his mother — Mrs Mary Anne Naylor of Newcourt Cottage — but not his father.\n\nThree days later, on 16 November 1916, his cousin-by-marriage Edward Francis Hughes was also killed.',
  },
  'candle-marion-hair': {
    id: 'candle-marion-hair',
    title: 'The Candle and Marion\'s Hair',
    people: ['marion-lydia-hughes', 'aunt-lillie-hughes'],
    body:
      'When Marion was about 2½ — so 1923 or early 1924 — she picked up a lit candle and her hair caught fire. Aunt Lillie smothered the flames with her bare hands. The memoir says only: "No great harm done."',
  },
  'crab-bucket': {
    id: 'crab-bucket',
    title: 'The Crab That Escaped',
    people: ['bart-edward-naylor-hughes'],
    body:
      'A child\'s memory: catching a crab on Bray beach, putting it in a bucket overnight, and finding the bucket empty in the morning. The escape route was never solved.',
  },
  'naylors-cove-regatta': {
    id: 'naylors-cove-regatta',
    title: 'Naylor\'s Cove and the Regatta Medals',
    people: ['bartholomew-naylor-1852', 'bartholomew-naylor-1894', 'david-henry-naylor-1894'],
    body:
      "The elder Bartholomew (b. 1852) leased a cove at the foot of Bray Head from the Town Commissioners in the late 1890s. He built bathing huts, a small pier and a granite boat house, and built racing boats for Bray's famous regattas. The cove is still called Naylor's Cove on old maps.\n\nHis twin sons Bart and David were both celebrated oarsmen. One of them won a gold regatta medal — last known to have been held by William John Hughes, who gave it to his daughter Marion.\n\nA note on confusion: the Bray Cove Swimming Club book conflates the two Bartholomews, suggesting young Bart leased the cove. He was four at the time. The lease belongs to his grandfather.",
  },
  'voyage-to-australia': {
    id: 'voyage-to-australia',
    title: 'Sam "Fumbler" Naylor\'s Voyage to Australia',
    people: ['sam-fumbler-naylor'],
    body:
      'After years of fishing out of Bray — codling, lobster, whelk, salmon, herring — Sam went deep-sea on the sailboat Polly with Dan Pluck. They sailed as far as Australia. Sam injured his hand on the voyage and retired from the sea, taking up work as water bailiff on the Dargle for Lord Meath. He built his last boat aged 80. Died aged 85.',
  },
  'walmer-castle-1941': {
    id: 'walmer-castle-1941',
    title: 'The Sinking of the Walmer Castle, 21 September 1941',
    people: ['samuel-naylor-jr-ww2'],
    body:
      "Samuel Naylor Jr — a Bray merchant seaman — was aboard the City of Waterford when it was sunk by collision with the Dutch tug Thames on 19 September 1941. The crew were rescued and transferred to the Walmer Castle. Two days later the Walmer Castle was bombed by enemy aircraft. Samuel was among those killed.",
  },
  'irish-sea-steerage': {
    id: 'irish-sea-steerage',
    title: 'Crossing the Irish Sea in Steerage',
    people: ['bart-edward-naylor-hughes', 'lydia-naylor-1892'],
    body:
      'A childhood memory: sailing Fishguard to Rosslare as a small boy with his mother. They travelled on the open deck. The ship "did everything apart from turning a complete circle".',
  },
  'four-brothers-nicknames': {
    id: 'four-brothers-nicknames',
    title: 'The Four Brothers at Rose Cottage',
    people: ['sam-fumbler-naylor'],
    body:
      "Four Naylor brothers shared Rose Cottage on the Bray seafront. Each had a nickname:\n\n• Sam — \"The Fumbler\" — always making and repairing.\n• Cody — \"The Shepherd\" — terrified of dogs, carried a stick bigger than himself.\n• John — \"Sketch\" — once sketched by a visiting lady artist.\n• Bert — \"The Snipe\" — never wore a coat.\n\nNicknames recorded on the Strand from this period include also Bat, Coady, Ahoy and Joe.",
  },
  'sammy-upper-deck': {
    id: 'sammy-upper-deck',
    title: '"Upper Deck, Sir"',
    people: ['sammy-naylor'],
    body:
      'Sammy Naylor, one of Bray\'s best-known sailors, went to the dentist. Asked where the bad tooth was, he replied "Upper deck, Sir."',
  },
};

// ---------- TIMELINE ----------
export const timeline = [
  { year: 1801, type: 'family', label: 'William Naylor baptised at St. Paul\'s, Bray', personId: 'william-naylor-1801' },
  { year: 1807, type: 'family', label: 'Twins Samuel & George Naylor baptised', personId: 'samuel-nailor' },
  { year: 1809, type: 'family', label: 'Bartholomew Naylor (1809) baptised', personId: 'bartholomew-naylor-1809' },
  { year: 1813, type: 'family', label: 'Twins Sarah & Jane Naylor baptised', personId: 'sarah-naylor-1813' },
  { year: 1845, type: 'world', label: 'The Great Famine begins in Ireland' },
  { year: 1849, type: 'family', label: 'Samuel Nailor marries Elizabeth Whitton, St. Paul\'s Bray', personId: 'samuel-nailor' },
  { year: 1852, type: 'family', label: 'Bartholomew Naylor born — baptised "Seashore"', personId: 'bartholomew-naylor-1852' },
  { year: 1878, type: 'family', label: 'Bartholomew Naylor marries Mary Anne McMurray, Christ Church, Bray', personId: 'bartholomew-naylor-1852' },
  { year: 1878, type: 'family', label: 'George Naylor born', personId: 'george-naylor-1878' },
  { year: 1881, type: 'family', label: 'Edward Hughes marries Isabella Carroll in Dublin', personId: 'edward-hughes' },
  { year: 1884, type: 'family', label: 'Samuel Naylor born (later emigrated to America)', personId: 'samuel-naylor-1884' },
  { year: 1885, type: 'family', label: 'Marion McMurray Naylor born', personId: 'marion-mcmurray-naylor-1885' },
  { year: 1889, type: 'family', label: 'William John Hughes born', personId: 'william-john-hughes' },
  { year: 1890, type: 'family', label: 'Late 1890s: Bartholomew Naylor leases the cove at Bray Head', personId: 'bartholomew-naylor-1852' },
  { year: 1892, type: 'family', label: 'Lydia Naylor born', personId: 'lydia-naylor-1892' },
  { year: 1894, type: 'family', label: 'Hughes family moves from Dublin to England', personId: 'edward-hughes' },
  { year: 1894, type: 'family', label: 'Twins Bart and David Henry Naylor born', personId: 'bartholomew-naylor-1894' },
  { year: 1901, type: 'family', label: '1901 Census: family at Dock Terrace, Bray', personId: 'bartholomew-naylor-1852' },
  { year: 1909, type: 'family', label: 'Edward Francis Hughes marries Alice May Bygrave', personId: 'edward-francis-hughes' },
  { year: 1914, type: 'world', label: 'First World War begins' },
  { year: 1915, type: 'family', label: 'Lydia Naylor marries William John Hughes, East Dulwich', personId: 'lydia-naylor-1892' },
  { year: 1916, type: 'family', label: 'L/Cpl Bart Naylor killed at the Somme (13 Nov)', personId: 'bartholomew-naylor-1894' },
  { year: 1916, type: 'family', label: 'Edward Francis Hughes killed in WWI (16 Nov)', personId: 'edward-francis-hughes' },
  { year: 1917, type: 'family', label: 'Bart Edward Naylor Hughes born', personId: 'bart-edward-naylor-hughes' },
  { year: 1918, type: 'world', label: 'Armistice; 1918–19 flu pandemic' },
  { year: 1919, type: 'family', label: 'Bob Hughes dies of flu in Doullens, France', personId: 'bob-hughes' },
  { year: 1921, type: 'family', label: 'Marion Lydia Hughes born in Bray', personId: 'marion-lydia-hughes' },
  { year: 1924, type: 'family', label: 'Lydia Naylor dies, aged 32', personId: 'lydia-naylor-1892' },
  { year: 1939, type: 'world', label: 'Second World War begins' },
  { year: 1941, type: 'family', label: 'Samuel Naylor Jr killed: Walmer Castle bombed', personId: 'samuel-naylor-jr-ww2' },
  { year: 1954, type: 'family', label: 'William John Hughes dies', personId: 'william-john-hughes' },
  { year: 1970, type: 'family', label: 'Aunt Lillie dies; family leaves Crawthew Grove', personId: 'aunt-lillie-hughes' },
  { year: 1977, type: 'family', label: 'Bart Hughes dies (author of the family memoir)', personId: 'bart-edward-naylor-hughes' },
  { year: 1987, type: 'family', label: 'Joe Naylor interviewed in the Bray People', personId: 'joe-naylor' },
  { year: 1999, type: 'family', label: 'Claire Crowther / Bray Cualann Historical Society letter' },
  { year: 2009, type: 'family', label: 'Marjorie Rose West dies', personId: 'marjorie-rose-west' },
];

// ---------- BRANCH STYLES ----------
export const branchStyle = {
  naylor: { color: '#a98551', label: 'Naylor' },
  hughes: { color: '#3f5a44', label: 'Hughes' },
  newman: { color: '#2b3a5a', label: 'Newman' },
  mackay: { color: '#8a4a5a', label: 'Mackay' },
};

// ---------- HELPERS ----------
export function getPerson(id) {
  return people[id];
}

export function allPeople() {
  return Object.values(people);
}

// Build a hierarchical tree starting from the earliest ancestor.
// react-d3-tree expects { name, attributes, children, _data }.
export function buildTree(rootId = 'bartholomew-naylor-elder', highlightedIds = new Set()) {
  const visited = new Set();
  function node(id) {
    if (!id || visited.has(id)) return null;
    visited.add(id);
    const p = people[id];
    if (!p) return null;
    const children = (p.children || [])
      .map(node)
      .filter(Boolean);
    return {
      name: p.name,
      attributes: {
        dates: [p.born, p.died].filter(Boolean).join(' – ') || '',
        descriptor: p.descriptor || '',
      },
      _data: {
        id: p.id,
        branch: p.branch,
        highlighted: highlightedIds.has(p.id),
        uncertain: p.parentLinkCertainty === 'uncertain',
      },
      children,
    };
  }
  return node(rootId);
}
