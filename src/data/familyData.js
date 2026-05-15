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
      'Baptised "Seashore" — a memorable register entry. Son of Samuel Nailor and Elizabeth Whitton. Married Mary Anne Hillard McMurray on 3 July 1878 at Christ Church, Bray.\n\nA fisherman and boat builder. In the late 1880s he took the lease on the cove at the foot of Bray Head from the Town Commissioners — that cove still appears on old maps as Naylor\'s Cove. He built bathing huts, a small pier, and a granite boat house (still standing in the 1950s). He built racing boats for Bray\'s famous regattas.\n\nThe 1901 Census records the household at house #22 Dock Terrace, Bray, one of twenty houses with 111 people between them.',
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
    born: '1 April 1887', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Sixth child; date varies between sources',
    bio:
      'Baptismal register: 1 April 1887. The Naylor list in the family memoir gives 1 April 1888. We trust the church register over the memoir for dates.',
    parents: ['bartholomew-naylor-1852', 'mary-anne-mcmurray'],
    spouse: [], children: [], stories: [], photos: [], sources: ['stpauls-baptisms'],
  },
  'william-john-naylor-1889': {
    id: 'william-john-naylor-1889', name: 'William John Naylor',
    born: '19 April 1889', died: 'unknown', branch: 'naylor', location: 'Bray',
    descriptor: 'Seventh child',
    bio: 'Born 19 April 1889 at Newcourt Cottage, Bray (memoir date; the Bray Churches register gives a baptism of 7 June 1889). Named for his maternal grandfather, William John McMurray.',
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
    location: 'Bray (birth) → London → Australia',
    occupation: '',
    descriptor: 'Lost her mother aged 3; emigrated to Australia after WWII',
    bio:
      "Born 21 May 1921 in Bray — Lydia specifically returned to Ireland for the birth. Was only 3 when her mother died in October 1924. Survived a candle fire when her hair caught light around age 2½ — her aunt Lillie smothered the flames with her bare hands.\n\nMarried Donald Newman; two children, Peter (b. 1951) and Anne (b. 1962). Some time after the Second World War, Marion and Donald emigrated to Australia, where both children were raised — the family has lived in Australia ever since.",
    parents: ['william-john-hughes', 'lydia-naylor-1892'],
    spouse: ['donald-newman'],
    children: ['anne-newman', 'peter-newman'],
    stories: ['candle-marion-hair', 'lydia-death-1924'],
    photos: [], sources: ['memoir-bart-hughes'],
    isAncestor: true,
  },
  'donald-newman': {
    id: 'donald-newman', name: 'Donald Newman',
    born: 'unknown', died: '', branch: 'newman', location: 'England → Australia',
    descriptor: 'Took the family to Australia after the war',
    bio: 'Married Marion Lydia Hughes. Father of Peter (b. 1951) and Anne (b. 1962). Some time after the Second World War, Donald emigrated to Australia with Marion — the Newmans (and later the Mackays) have lived in Australia ever since.',
    parents: [], spouse: ['marion-lydia-hughes'],
    children: ['anne-newman', 'peter-newman'],
    stories: [], photos: [], sources: [], isAncestor: true,
  },
  'anne-newman': {
    id: 'anne-newman', name: 'Anne Newman',
    born: '1962', died: '', branch: 'newman', location: 'Australia',
    descriptor: 'Daughter of Marion and Donald',
    bio: "Born 1962 in Australia, after Marion and Donald had emigrated. Younger child of Marion Lydia Hughes and Donald Newman.\n\nFrom her first marriage, two children: Luke Buxton (b. 1984) and Sara Buxton (b. 1988). Later married Mark Mackay and had two more sons: David (b. 1993) and Jack (b. 1996).",
    parents: ['marion-lydia-hughes', 'donald-newman'],
    spouse: ['mark-mackay'], children: ['luke-buxton', 'sara-buxton', 'david-mackay', 'you'],
    stories: [], photos: [], sources: [], isAncestor: true,
    media: [
      { src: '/images/people/anne-with-children.jpg', type: 'image', caption: 'Anne with her four children — David, Sara, Luke and Jack.' },
      { src: '/images/people/anne-newman.jpg', type: 'image', caption: 'On the beach at sunset, May 2026.' },
    ],
  },
  'peter-newman': {
    id: 'peter-newman', name: 'Peter Newman',
    born: '1951', died: '', branch: 'newman', location: 'Australia',
    descriptor: 'Son of Marion and Donald',
    bio: 'Born 1951, son of Marion Lydia Hughes and Donald Newman. Raised in Australia after his parents emigrated. Father of Naomi, who married Michael Bauer.',
    parents: ['marion-lydia-hughes', 'donald-newman'],
    spouse: [], children: ['naomi-newman'], stories: [], photos: [], sources: [],
  },
  'naomi-newman': {
    id: 'naomi-newman', name: 'Naomi Bauer',
    nicknames: ['née Newman'],
    born: 'unknown', died: '', branch: 'newman', location: 'Australia',
    descriptor: 'Daughter of Peter; mother of Jasmin and Alex',
    bio: 'Daughter of Peter Newman; granddaughter of Marion Lydia Hughes and Donald Newman. Married Michael Bauer (from Germany); two children together, Jasmin and Alex.',
    parents: ['peter-newman'],
    spouse: ['michael-bauer'], children: ['jasmin-bauer', 'alex-bauer'],
    stories: [], photos: [], sources: [],
  },
  'michael-bauer': {
    id: 'michael-bauer', name: 'Michael Bauer',
    born: 'unknown', died: '', branch: 'bauer', location: 'Germany',
    descriptor: 'Married Naomi; father of Jasmin and Alex',
    bio: 'From Germany. Married Naomi Newman; father of Jasmin and Alex.',
    parents: [], spouse: ['naomi-newman'], children: ['jasmin-bauer', 'alex-bauer'],
    stories: [], photos: [], sources: [],
  },
  'jasmin-bauer': {
    id: 'jasmin-bauer', name: 'Jasmin Bauer',
    born: 'unknown', died: '', branch: 'bauer', location: '',
    descriptor: 'Child of Naomi and Michael',
    bio: 'Child of Naomi Bauer (née Newman) and Michael Bauer.',
    parents: ['naomi-newman', 'michael-bauer'],
    spouse: [], children: [], stories: [], photos: [], sources: [],
  },
  'alex-bauer': {
    id: 'alex-bauer', name: 'Alex Bauer',
    born: 'unknown', died: '', branch: 'bauer', location: '',
    descriptor: 'Child of Naomi and Michael',
    bio: 'Child of Naomi Bauer (née Newman) and Michael Bauer.',
    parents: ['naomi-newman', 'michael-bauer'],
    spouse: [], children: [], stories: [], photos: [], sources: [],
  },
  'mark-mackay': {
    id: 'mark-mackay', name: 'Mark Mackay',
    born: 'unknown', died: '', branch: 'mackay', location: 'Australia',
    descriptor: 'Father of David and Jack',
    bio: 'Married Anne Newman. Father of David (1993) and Jack (1996). The Mackays have lived in Australia throughout.',
    parents: [], spouse: ['anne-newman'], children: ['david-mackay', 'you'],
    stories: [], photos: [], sources: [], isAncestor: true,
  },
  'david-mackay': {
    id: 'david-mackay', name: 'David Mackay',
    born: '1993', died: '', branch: 'mackay', location: 'Australia',
    descriptor: 'Elder brother of Jack; father of Theo and Arty',
    bio: 'Elder son of Anne Newman and Mark Mackay. Father of Theodore (2020) and Arty (2022). Married Grace Bandcroft on 18 April 2026.',
    parents: ['anne-newman', 'mark-mackay'],
    spouse: ['grace-bandcroft'], children: ['theodore-mackay', 'arty-mackay'],
    stories: [], photos: [], sources: [],
    media: [
      { src: '/images/people/anne-with-children.jpg', type: 'image', caption: 'Far left, with his mother and siblings.' },
    ],
  },
  'grace-bandcroft': {
    id: 'grace-bandcroft', name: 'Grace Bandcroft',
    born: 'unknown', died: '', branch: 'bandcroft', location: 'Australia',
    descriptor: 'Married David Mackay',
    bio: 'Married David Mackay on 18 April 2026.',
    parents: [], spouse: ['david-mackay'], children: [],
    stories: [], photos: [], sources: [],
  },
  'theodore-mackay': {
    id: 'theodore-mackay', name: 'Theodore Mackay',
    nicknames: ['Theo'],
    born: '2020', died: '', branch: 'mackay', location: 'Australia',
    descriptor: 'Elder son of David Mackay',
    bio: 'Born 2020, elder child of David Mackay.',
    parents: ['david-mackay'],
    spouse: [], children: [], stories: [], photos: [], sources: [],
    media: [
      { src: '/images/people/oden-theodore.mp4', type: 'video', caption: "With Oden at David and Grace's wedding, 18 April 2026." },
    ],
  },
  'arty-mackay': {
    id: 'arty-mackay', name: 'Arty Mackay',
    born: '2022', died: '', branch: 'mackay', location: 'Australia',
    descriptor: 'Younger son of David Mackay',
    bio: 'Born 2022, younger child of David Mackay.',
    parents: ['david-mackay'],
    spouse: [], children: [], stories: [], photos: [], sources: [],
    media: [
      { src: '/images/people/arty-mackay.jpg', type: 'image', caption: 'On the back of the ute, April 2026.' },
    ],
  },
  'you': {
    id: 'you', name: 'Jack Mackay',
    born: '1996', died: '', branch: 'mackay', location: 'Australia',
    descriptor: 'Younger brother of David',
    bio: 'Younger son of Anne Newman and Mark Mackay.',
    parents: ['anne-newman', 'mark-mackay'],
    spouse: [], children: [],
    stories: [], photos: [], sources: [], isAncestor: true,
    media: [
      { src: '/images/people/jack-mackay.jpg', type: 'image', caption: "At David and Grace's wedding with his dog Kimab, 18 April 2026." },
      { src: '/images/people/anne-with-children.jpg', type: 'image', caption: 'Far right, with his mother and siblings.' },
    ],
  },
  'luke-buxton': {
    id: 'luke-buxton', name: 'Luke Buxton',
    born: '1984', died: '', branch: 'buxton', location: 'Australia',
    descriptor: "Anne's eldest, from her first marriage",
    bio: "Born 1984 in Australia. Eldest of Anne's children, from her first marriage. Half-brother to Sara, David and Jack.",
    parents: ['anne-newman'],
    spouse: [], children: [],
    stories: [], photos: [], sources: [],
    media: [
      { src: '/images/people/anne-with-children.jpg', type: 'image', caption: 'Second from right, with his mother and siblings.' },
    ],
  },
  'sara-buxton': {
    id: 'sara-buxton', name: 'Sara Buxton',
    born: '1988', died: '', branch: 'buxton', location: 'Australia',
    descriptor: 'Mother of Dru and Oden',
    bio: "Born 1988 in Australia, eight years older than her half-brother Jack. From Anne's first marriage. Mother of Dru Urban and Oden Figet.",
    parents: ['anne-newman'],
    spouse: [], children: ['dru-urban', 'oden-figet'],
    stories: [], photos: [], sources: [],
    media: [
      { src: '/images/people/anne-with-children.jpg', type: 'image', caption: 'Second from left, with her mother and brothers.' },
    ],
  },
  'dru-urban': {
    id: 'dru-urban', name: 'Dru Urban',
    born: 'unknown', died: '', branch: 'buxton', location: 'Australia',
    descriptor: 'Child of Sara Buxton',
    bio: 'Child of Sara Buxton; grandchild of Anne Newman.',
    parents: ['sara-buxton'],
    spouse: [], children: [],
    stories: [], photos: [], sources: [],
    media: [
      { src: '/images/people/dru-urban.jpg', type: 'image', caption: "Napping next to Jack's dog Kimab." },
    ],
  },
  'oden-figet': {
    id: 'oden-figet', name: 'Oden Figet',
    born: 'unknown', died: '', branch: 'buxton', location: 'Australia',
    descriptor: 'Child of Sara Buxton',
    bio: 'Child of Sara Buxton; grandchild of Anne Newman.',
    parents: ['sara-buxton'],
    spouse: [], children: [],
    stories: [], photos: [], sources: [],
    media: [
      { src: '/images/people/oden-theodore.mp4', type: 'video', caption: "With his cousin Theo at David and Grace's wedding, 18 April 2026." },
    ],
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
    location: '27 St. Kevin\'s Square, Bray',
    occupation: 'Railway worker, builder, coast-watcher',
    descriptor: 'Featured in the Bray People, 1987',
    bio:
      "Born 7 May 1913 on the Bray Strand. Lived at 27 St. Kevin's Square, Bray. Nephew of Sammy Naylor. Worked on the railway and in building; served in the coast-watching service during the Second World War. Chairman of the local Rowing Club. Played for Strand Rovers football, rugby with the local club, and performed with the United Bray Entertainers. Sister 'Brody' was still alive at the time of his 1987 newspaper feature. Interviewed in the Bray People newspaper on 31 July 1987.",
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
// Order: oldest generation alive in the line first, then down to today's children.
export const viewerCandidates = [
  { id: 'peter-newman', label: 'Peter Newman' },
  { id: 'anne-newman', label: 'Anne Newman' },
  { id: 'naomi-newman', label: 'Naomi Bauer' },
  { id: 'luke-buxton', label: 'Luke Buxton' },
  { id: 'sara-buxton', label: 'Sara Buxton' },
  { id: 'david-mackay', label: 'David Mackay' },
  { id: 'you', label: 'Jack Mackay' },
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
    short: 'Leased by Bartholomew Naylor in the late 1880s.',
    body:
      "A small cove at the foot of Bray Head, leased by the elder Bartholomew Naylor (b. 1852) from the Town Commissioners in the late 1880s. He built bathing huts and a small pier for visitors, plus a granite boat house that still stood in the 1950s. The cove is still marked as Naylor's Cove on old maps of Bray.",
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
  {
    id: 'australia',
    name: 'Australia',
    lat: -33.8688, lng: 151.2093,
    short: 'Home of the Newmans and Mackays since after WWII.',
    body:
      "Some time after the Second World War, Donald Newman emigrated to Australia with his wife Marion Lydia Hughes — Lydia Naylor's daughter, born in Bray. Their children Peter (1951) and Anne (1962) were raised there. Peter's daughter Naomi later married Michael Bauer of Germany; two children, Jasmin and Alex. Anne had two children from her first marriage — Luke Buxton (1984) and Sara Buxton (1988) — and two more with her second husband Mark Mackay: David (1993) and Jack (1996). The youngest generation — Theodore (2020), Arty (2022), Jasmin and Alex Bauer, and Sara's children Dru Urban and Oden Figet — are the fourth Australian-descended generation in the line.",
  },
];

// ---------- DOCUMENTS ----------
// `images` is an ordered list of page scans. First image is the cover thumbnail.
// Documents with no scan yet leave `images` empty and fall back to the SVG placeholder.
const SRC = '/images/sources';
export const documents = [
  {
    id: 'crowther-letter-1999',
    title: 'Letter from Claire Crowther, Bray Cualann Historical Society',
    date: '7 October 1999',
    caption:
      "A two-page typed letter from Claire Crowther to Mrs. Sue Tinney, prepared at the Bray Heritage Centre. Confirms the 1878 marriage of Bartholomew Naylor & Mary Anne McMurray at Christ Church, Bray, the 1849 marriage of Samuel Nailor & Elizabeth Whitton at St. Paul's, and lists the children of both marriages with their baptism dates. Highlights mark Lydia Naylor (1892) and the twins Bartholomew & David Henry (1894).",
    images: [`${SRC}/IMG_3805.jpg`, `${SRC}/IMG_3806.jpg`],
  },
  {
    id: 'memoir-bart-hughes',
    title: 'The Bartholomew Edward Naylor Hughes Memoir',
    date: 'written c. 1980s',
    caption:
      "Seventeen typed pages by Bart Hughes (b. 1917), Lydia Naylor's eldest son. Covers the Naylor, Hughes and West families — the cove at Bray Head, the family's move from Dublin to London, his mother's death in 1924, his own boyhood, the choir at Christ Church, Hove, his apprenticeship as a printer at Shaw & Co., and his RAF service through the Battle of Britain and Coastal Command. The first-person voice in most of the family stories.",
    images: [
      `${SRC}/IMG_3808.jpg`, // p1
      `${SRC}/IMG_3809.jpg`, // p2
      `${SRC}/IMG_3810.jpg`, // p3
      `${SRC}/IMG_3811.jpg`, // p4
      `${SRC}/IMG_3812.jpg`, // p5
      `${SRC}/IMG_3813.jpg`, // p6
      `${SRC}/IMG_3814.jpg`, // p7
      `${SRC}/IMG_3815.jpg`, // p8
      `${SRC}/IMG_3830.jpg`, // p9
      `${SRC}/IMG_3831.jpg`, // p10
      `${SRC}/IMG_3832.jpg`, // p11
      `${SRC}/IMG_3833.jpg`, // p12
      `${SRC}/IMG_3834.jpg`, // p13
      `${SRC}/IMG_3835.jpg`, // p14
      `${SRC}/IMG_3836.jpg`, // p15
      `${SRC}/IMG_3837.jpg`, // p16
      `${SRC}/IMG_3829.jpg`, // p17
    ],
  },
  {
    id: 'family-tree-chart',
    title: 'All-in-One Family Tree Chart',
    date: 'compiled by Sue (Hughes) Tinney',
    caption:
      "A printed family-tree diagram centred on Bartholomew Edward Naylor Hughes, showing his Naylor grandparents (Bartholomew Naylor 1852 & Mary Anne McMurray and their nine surviving children), the Hughes grandparents (Edward Hughes & Isabella Carroll), the West in-laws (Percy Dudley West & Rosetta Maud Cokes), and Bart's own children Susan Marjorie (1946) and Paul Naylor (1950). Handwritten note from Sue addressed to 'Peter'.",
    images: [`${SRC}/IMG_3807.jpg`],
  },
  {
    id: 'stpauls-baptisms',
    title: 'Bray Churches Index — Naylor/Nailor entries',
    date: '1801–1898',
    caption:
      "A printout from the Bray Churches Births/Baptisms/Marriages/Burials database, with every Naylor, Nailor and Nailer entry from 1801 to 1898. Pink highlights mark the direct ancestors: Lydia Naylor (b. 16 May 1892, bap. 12 June 1892), Bartholomew Naylor and David Henry Naylor (twins, b. 19 Oct 1894, bap. 2 Dec 1894), all of Newcourt Cottage, Strand.",
    images: [`${SRC}/IMG_3816.jpg`, `${SRC}/IMG_3817.jpg`],
  },
  {
    id: 'stpauls-marriage-1849',
    title: 'Marriage Register: Samuel Nailor & Elizabeth Whitton',
    date: '1 February 1849',
    caption:
      "St. Paul's Church, Bray. Witnesses: Samuel Little Stevenson and Mary N. Hill. The spelling \"Nailor\" appears here. Transcribed in the Crowther letter — original register not yet photographed.",
    images: [`${SRC}/IMG_3806.jpg`],
  },
  {
    id: 'christ-church-marriage-1878',
    title: 'Marriage Register: Bartholomew Naylor & Mary Anne McMurray',
    date: '3 July 1878',
    caption:
      "Christ Church, Bray. Mary Anne is listed as a servant of 2 Florence Terrace, Bray. Transcribed in the Crowther letter — original register not yet photographed.",
    images: [`${SRC}/IMG_3805.jpg`],
  },
  {
    id: 'census-1901',
    title: '1901 Census of Ireland — Dock Terrace, Bray',
    date: '1901',
    caption:
      "Surname index of all 111 people living in the twenty houses of Dock Terrace, Bray. The Naylors are at house #22 (highlighted). Neighbours include Barnes (#21), Curran, Dowling and Fortune (#23).",
    images: [`${SRC}/IMG_3818.jpg`],
  },
  {
    id: 'cwgc-bart-naylor',
    title: 'Commonwealth War Graves: L/Cpl Bartholomew Naylor',
    date: '13 November 1916',
    caption:
      "Bray War Memorial entry. L/Cpl Bartholomew Naylor, 26961, 10th Bn. Royal Dublin Fusiliers, died 13.11.1916, age 22. Son of Mrs Mary Anne Naylor, Newcourt Cottage, Bray, Co. Wicklow. Thiepval Memorial, Somme, France.",
    images: [`${SRC}/IMG_3828.jpg`],
  },
  {
    id: 'bray-war-memorial',
    title: 'Bray War Memorial: First World War Special Edition',
    date: '1914–1918',
    caption:
      "The page listing five Bray-born men killed in 1916–1918, including L/Cpl Bart Naylor (13 Nov 1916), Sgt John McKenna of the Gordon Highlanders, Signaller Thomas Neill, Pte Robert Howlett Nicholson and Pte James Nolan.",
    images: [`${SRC}/IMG_3828.jpg`],
  },
  {
    id: 'bray-people-1987',
    title: 'Bray People — "Joe is still a very lively man"',
    date: '31 July 1987',
    caption:
      'Newspaper feature by Jim Brophy on Joe Naylor, then 74, of 27 St. Kevin\'s Square, Bray. Born 7 May 1913 on the Strand. Joined the coast-watching service in 1939, served through WWII, then a long stint with Bray Rowing Club and the United Bray Entertainers. Mentions his uncle Sammy Naylor ("Upper deck, Sir") and the late Tom Naylor. Companion piece "Anne\'s many vivid memories of Bray" appears alongside.',
    images: [`${SRC}/IMG_3822.jpg`, `${SRC}/IMG_3823.jpg`, `${SRC}/IMG_3824.jpg`],
  },
  {
    id: 'pictorial-history-bray',
    title: 'A Pictorial History of Bray (Cairns & Gallagher)',
    date: 'Vol. 1: The Seafront and Environs',
    caption:
      'Extracts from Henry Cairns and Owen Gallagher\'s pictorial history. Includes the Bray Cove Swimming Club / Naylor\'s Cove article, the Sam Naylor Snr profile and his 1923 fishing licence, the Sam Naylor Jr / Walmer Castle story, the 1860 harbour map, photographs of Naylor\'s Cove in the 1890s and 1928, the old bridge that collapsed in 1983, the 1937 Bray Cove SC membership card, and many group portraits of Bray fishermen and the Strand community.',
    images: [
      `${SRC}/IMG_3839.jpg`, // book cover
      `${SRC}/IMG_3819.jpg`, // Bray Cove Swimming Club / Naylor's Cove article
      `${SRC}/IMG_3825.jpg`, // The Cove in its glory / 1928 before the pools
      `${SRC}/IMG_3826.jpg`, // 1860 harbour map
      `${SRC}/IMG_3827.jpg`, // Naylor's Cove in the 1890s
      `${SRC}/IMG_3838.jpg`, // 1937 Bray Cove SC membership card
      `${SRC}/IMG_3820.jpg`, // ALCASHIA + crew portraits c.1920
      `${SRC}/IMG_3840.jpg`, // Sam Naylor Junior — Walmer Castle 1941
      `${SRC}/IMG_3841.jpg`, // Sam Naylor + Sheila Ryan + Dockside Recital
      `${SRC}/IMG_3842.jpg`, // Sam Naylor Snr + 1923 fishing licence
      `${SRC}/IMG_3843.jpg`, // group photos: Snowie Gallagher, Sam Naylor, etc.
      `${SRC}/IMG_3844.jpg`, // Old bridge collapse 1983
      `${SRC}/IMG_3845.jpg`, // Bill "Cody" Naylor + Sam Naylor at Dock Terrace
    ],
  },
  {
    id: 'pictorial-memories-bray',
    title: 'Pictorial Memories of Bray — "Little Bray"',
    date: 'Chapter 1',
    caption:
      "Page from another Bray local-history book. Portraits of Rose Naylor (\"last of the Naylors\") and Andy Donnelly; the 1959 Bray Christian Mothers' outing to Mellifont Abbey; Walter Slater (Visitor of the Year, 1962); the Moran family of 72 Beech Road, c.1953.",
    images: [`${SRC}/IMG_3821.jpg`],
  },
  {
    id: 'family-bible-hughes',
    title: 'Hughes Family Bible',
    date: 'from 1881',
    caption:
      "Records Edward Hughes and Isabella Carroll's marriage on 6 April 1881 in Dublin, and the births and deaths of their six children: Annie (1882–1886), Edward Francis (1883–1916), Maria Florence (1885–1886), Elizabeth \"Aunt Lillie\" (1886–1970), William John (1890) and Robert Frederick (1898–1919). The Bible itself has not been photographed; this page of Bart Hughes's memoir transcribes the Bible entries verbatim — \"This is taken from the family bible, and is the earliest date that I can go back to.\"",
    images: [`${SRC}/IMG_3812.jpg`],
  },
  {
    id: 'norwood-war-memorial',
    title: 'Norwood Cemetery War Memorial',
    date: '1914–1918',
    caption:
      "Edward Francis Hughes (1883–1916), Lydia Naylor's brother-in-law, is named on the war memorial at the gates of West Norwood Cemetery, South London. We don't have a photograph of the memorial itself — the source for it is page 6 of Bart Hughes's memoir, in which he writes: \"…sadly he died on the 16th November 1916, he was in the army, and is buried in Norwood Cemetary in South London. His name is to be found on the War Memorial just inside the gates to the cemetary.\"",
    images: [`${SRC}/IMG_3813.jpg`],
  },
];

// ---------- QUESTS ----------
// Real-world places, memorials and addresses pulled from the source documents.
// Each one is a chance to go and stand somewhere the family stood.
// `region` groups them on the page; `quote` is the source-doc passage that
// names the location; `quoteSource` and `citations` point into documents[].
export const quests = [
  // ---- France: WWI ----
  {
    id: 'thiepval-bart-naylor',
    title: "Find Bart Naylor's name on the Thiepval Memorial",
    region: 'France',
    location: 'Thiepval Memorial, Somme, France',
    summary:
      "Lance Corporal Bartholomew Naylor, of the 10th Battalion Royal Dublin Fusiliers, has no known grave. He is commemorated alongside more than 72,000 other British and South African soldiers of the Somme. Killed 13 November 1916, age 22 — three days before his cousin Edward Francis Hughes died of war wounds in London.",
    quote:
      'L/Cpl Bartholomew Naylor, service 26961, 10th Bn. Royal Dublin Fusiliers. Died 13 November 1916, age 22. Son of Mrs Mary Anne Naylor, Newcourt Cottage, Bray Co. Wicklow. Thiepval Memorial, Somme France.',
    quoteSource: { docId: 'cwgc-bart-naylor', label: 'Commonwealth War Graves entry' },
    citations: [
      { docId: 'cwgc-bart-naylor' },
      { docId: 'bray-war-memorial' },
    ],
  },
  {
    id: 'doullens-bob-hughes',
    title: "Find Bob Hughes's grave at Doullens",
    region: 'France',
    location: 'Doullens War Cemetery, Northern France',
    summary:
      "Robert Frederick \"Bob\" Hughes, William John's younger brother, served in the Royal Flying Corps / RAF. He survived the war itself but died of the 1918–19 influenza pandemic on 4 February 1919, age 21, and is buried at Doullens.",
    quote:
      "ROBERT FREDERICK | 18 Jan 1898 | 4 Feb 1919 | Died in WWI (RAF / 1918–19 flu, Doullens)",
    quoteSource: { docId: 'family-bible-hughes', label: 'Hughes Family Bible record' },
    citations: [
      { docId: 'memoir-bart-hughes' },
      { docId: 'family-bible-hughes' },
    ],
  },

  // ---- Bray, Co. Wicklow ----
  {
    id: 'naylors-cove',
    title: "Stand at Naylor's Cove",
    region: 'Bray · Co. Wicklow',
    location: 'Foot of Bray Head, Co. Wicklow',
    summary:
      "A small cove at the foot of Bray Head, still marked on old maps as Naylor's Cove. The elder Bartholomew (b. 1852) leased it from the Town Commissioners in the late 1880s, built bathing huts and a small pier for visitors, plus a granite boat house that was still standing in the 1950s.",
    quote:
      "In the late 1880's Bart Naylor, a local fisherman and boat builder from the strand took a lease on the cove from the Towns Commissioners. He erected bathing boxes and a small pier to facilitate bathing and diving.",
    quoteSource: { docId: 'pictorial-history-bray', label: 'A Pictorial History of Bray' },
    citations: [{ docId: 'pictorial-history-bray' }],
  },
  {
    id: 'newcourt-cottage',
    title: 'Visit Newcourt Cottage on the Strand',
    region: 'Bray · Co. Wicklow',
    location: 'Bray Strand, Co. Wicklow',
    summary:
      "Home of Bartholomew and Mary Anne and the ten children they raised together — including Lydia. The same address is recorded for L/Cpl Bart Naylor on his Commonwealth War Graves entry, decades later.",
    quote:
      'Son of Mrs Mary Anne Naylor, Newcourt Cottage, Bray Co. Wicklow.',
    quoteSource: { docId: 'cwgc-bart-naylor', label: 'CWGC entry, 1916' },
    citations: [
      { docId: 'stpauls-baptisms' },
      { docId: 'cwgc-bart-naylor' },
    ],
  },
  {
    id: 'christ-church-bray',
    title: 'Find Bartholomew and Mary Anne in the Christ Church register',
    region: 'Bray · Co. Wicklow',
    location: 'Christ Church, Main Street, Bray',
    summary:
      "Where Bartholomew Naylor married Mary Anne Hillard McMurray on 3 July 1878. Mary Anne was working as a servant at 2 Florence Terrace; Bart was a fisherman of the Strand. Every grandchild on the direct line descends from this marriage.",
    quote:
      'BARTHOLOMEW NAYLOR, The Strand, Bray, Bachelor, full age, Fisherman, son of SAMUEL NAYLOR, Fisherman. MARY ANNE HILLARD McMURRAY, 2 Florence Tce., Bray, Spinster, full age, Servant, daughter of WILLIAM JOHN McMURRAY, Fisherman.',
    quoteSource: { docId: 'christ-church-marriage-1878', label: 'Marriage register, 3 July 1878' },
    citations: [
      { docId: 'christ-church-marriage-1878' },
      { docId: 'crowther-letter-1999' },
    ],
  },
  {
    id: 'st-pauls-bray',
    title: "Find the family in the St. Paul's registers",
    region: 'Bray · Co. Wicklow',
    location: "St. Paul's Church, Main Street, Bray",
    summary:
      "Where Samuel Nailor married Elizabeth Whitton on 1 February 1849, and where every Naylor baptism between 1801 and the 1890s is recorded. The oldest entry of all is the 1801 baptism of \"William, 1st son of Batey [Bartholomew] and Anne Naylor, Fisherman of the sea\" — the furthest-back link we have.",
    quote:
      'WILLIAM, 1st son, baptism 10 June 1801 — of Batey [Bartholomew] and Anne Naylor, Fisherman of the sea.',
    quoteSource: { docId: 'stpauls-baptisms', label: "St. Paul's baptism register, 1801" },
    citations: [
      { docId: 'stpauls-marriage-1849' },
      { docId: 'stpauls-baptisms' },
    ],
  },
  {
    id: 'bray-war-memorial-bart',
    title: "Find Bart Naylor on the Bray War Memorial",
    region: 'Bray · Co. Wicklow',
    location: 'Bray War Memorial, Co. Wicklow',
    summary:
      "Bray remembers its own. The town's war memorial lists five Bray-born men killed in the First World War, with Bart Naylor first among them. A second pilgrimage point alongside the Thiepval Memorial in France.",
    quote:
      'Bray-born WWI dead listed: L/Cpl Bartholomew Naylor (13 Nov 1916), Sgt John McKenna (Gordon Highlanders, 18 Aug 1916), Signaller Thomas Neill, Pte Robert Howlett Nicholson, Pte James Nolan.',
    quoteSource: { docId: 'bray-war-memorial', label: 'Bray War Memorial, FWW Special Edition' },
    citations: [{ docId: 'bray-war-memorial' }],
  },
  {
    id: 'dock-terrace-22',
    title: 'Walk to 22 Dock Terrace',
    region: 'Bray · Co. Wicklow',
    location: '22 Dock Terrace, Bray',
    summary:
      "Where the family lived at the 1901 Census of Ireland — one of twenty houses on the terrace, holding 111 people between them. Neighbours included Barnes (#21), Curran, Dowling and Fortune (#23).",
    quote:
      'Surname index of 20 houses with 111 persons. House #22 = Naylor (highlighted).',
    quoteSource: { docId: 'census-1901', label: '1901 Census, Dock Terrace, Bray' },
    citations: [{ docId: 'census-1901' }],
  },
  {
    id: 'rose-cottage-bray',
    title: 'Find Rose Cottage on the seafront',
    region: 'Bray · Co. Wicklow',
    location: 'Bray seafront, Co. Wicklow',
    summary:
      "Where the Catholic-side Naylor brothers all lived together with their sister — Sam, John \"Sketch\", Bert \"The Snipe\" and a fourth brother. Sam rowed a 25-foot boat to Ballygannon at 2am, four days a week, fishing codling, lobster, whelk, salmon and herring.",
    quote:
      "Sam Naylor was one of four brothers — all fishermen; they all lived with their sister at Rose Cottage, Bray.",
    quoteSource: { docId: 'pictorial-history-bray', label: 'A Pictorial History of Bray' },
    citations: [{ docId: 'pictorial-history-bray' }],
  },

  // ---- London ----
  {
    id: 'norwood-edward-francis',
    title: "Photograph Edward Francis's name on the Norwood war memorial",
    region: 'London',
    location: 'West Norwood Cemetery (gates), South London',
    summary:
      "Lydia's brother-in-law Edward Francis Hughes — Bart's father's eldest brother — was killed on 16 November 1916, three days after his cousin Bart Naylor died at the Somme. He's buried at Norwood, and his name is on the war memorial just inside the cemetery gates.",
    quote:
      '…sadly he died on the 16th November 1916, he was in the army, and is buried in Norwood Cemetary in South London. His name is to be found on the War Memorial just inside the gates to the cemetary.',
    quoteSource: { docId: 'memoir-bart-hughes', page: 6, label: 'Bart Hughes memoir, p.6' },
    citations: [
      { docId: 'memoir-bart-hughes', page: 6 },
      { docId: 'norwood-war-memorial' },
    ],
  },
  {
    id: 'norwood-lydia',
    title: "Visit Lydia's grave at Norwood Cemetery",
    region: 'London',
    location: 'West Norwood Cemetery, South London',
    summary:
      "Lydia Naylor — Bray-born, mother of Bart and Marion — died on 20 October 1924, in her early thirties. She was buried at Norwood. Bart was seven at the time; Marion was three.",
    quote:
      "my Mother, Lydia, 20th October 1924.",
    quoteSource: { docId: 'memoir-bart-hughes', label: 'Bart Hughes memoir' },
    citations: [{ docId: 'memoir-bart-hughes' }],
  },
  {
    id: 'crawthew-grove',
    title: 'Knock on the door of 4 Crawthew Grove',
    region: 'London',
    location: '4 Crawthew Grove, East Dulwich SE22',
    summary:
      "The Hughes family home from c.1900 right through to January 1970 — three generations under one roof for the longest stretch. Lydia moved in with William John, his mother and his sister Lillie after their marriage in 1915. Bart and Marion were both born here. Aunt Lillie lived there alone until her death in 1970.",
    quote:
      'ELIZABETH ("Aunt Lillie") | 9 Oct 1886 | 30 Jan 1970 | Lived at Crawthew Grove all her life.',
    quoteSource: { docId: 'memoir-bart-hughes', label: 'Bart Hughes memoir' },
    citations: [{ docId: 'memoir-bart-hughes' }],
  },
  {
    id: 'kennington-new-street',
    title: 'Stand outside 23 New Street, Kennington',
    region: 'London',
    location: '23 New Street, Kennington, SE London',
    summary:
      "The Hughes family home before East Dulwich. Edward Francis ran his engraving business out of this address, and was married from here in 1909. The whole family came over from Donnybrook to Wimbledon to Kennington in the 1890s before settling at Crawthew Grove.",
    quote:
      'Edward Francis Hughes married Alice May Bygrave at St. Mary Newington on 28 Aug 1909. He worked as an engraver out of 23 New Street, Kennington.',
    quoteSource: { docId: 'memoir-bart-hughes', label: 'Bart Hughes memoir' },
    citations: [{ docId: 'memoir-bart-hughes' }],
  },
  {
    id: 'st-john-goose-green',
    title: "Find St. John's at Goose Green",
    region: 'London',
    location: "St. John the Evangelist, Goose Green, East Dulwich",
    summary:
      "Where Lydia married William John Hughes in 1915 — and where her funeral was held in 1924. Both ends of the marriage, in the same parish church.",
    quote:
      'Married 1915, St. John\'s, Goose Green, East Dulwich.',
    quoteSource: { docId: 'memoir-bart-hughes', label: 'Bart Hughes memoir' },
    citations: [{ docId: 'memoir-bart-hughes' }],
  },
  {
    id: 'st-mary-newington',
    title: 'Visit the Hughes parish at St. Mary Newington',
    region: 'London',
    location: "St. Mary Newington, SE London",
    summary:
      "The Hughes family's parish church in the Kennington years. William John (Bart's father) was in the choir. His older brother Edward Francis married Alice May Bygrave here in 1909.",
    quote:
      'Local parish: St. Mary Newington — grandmother taught Sunday school, William John Hughes (Bart\'s father) was in the choir.',
    quoteSource: { docId: 'memoir-bart-hughes', label: 'Bart Hughes memoir' },
    citations: [{ docId: 'memoir-bart-hughes' }],
  },

  // ---- Dublin & Devon ----
  {
    id: 'donnybrook-sandford',
    title: 'Find Sandford Avenue in Donnybrook',
    region: 'Dublin',
    location: 'Sandford Avenue, Donnybrook, Dublin',
    summary:
      "The first Hughes family home of record. Edward Hughes (master printer and bookbinder) and Isabella Carroll began married life here in 1881, before the family crossed the Irish Sea — first to Wimbledon, then to Kennington and East Dulwich.",
    quote:
      'Edward Hughes & Isabella Carroll (married 6 April 1881 in Dublin)… Lived first at Sandford Avenue, Donnybrook, Dublin.',
    quoteSource: { docId: 'memoir-bart-hughes', label: 'Bart Hughes memoir' },
    citations: [{ docId: 'memoir-bart-hughes' }],
  },
  {
    id: 'barnstaple-george',
    title: 'The Naylors of Barnstaple',
    region: 'Devon',
    location: 'Barnstaple, Devon',
    summary:
      "George Naylor (b. 1878), eldest of Bart and Mary Anne's ten, eventually settled in Barnstaple with his wife Maggie. His daughter Cissie stayed on in the old family house. The English county branches — Barnstaple, Hove, Minehead — fan out from him.",
    quote:
      'Barnstaple, Devon — where George Naylor (b. 1878) settled; his daughter Cissie remained in the old family house.',
    quoteSource: { docId: 'memoir-bart-hughes', label: 'Bart Hughes memoir' },
    citations: [{ docId: 'memoir-bart-hughes' }],
  },
];

// Display order for region groupings on the Quests page.
export const questRegions = [
  'Bray · Co. Wicklow',
  'London',
  'France',
  'Dublin',
  'Devon',
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
      "The elder Bartholomew (b. 1852) leased a cove at the foot of Bray Head from the Town Commissioners in the late 1880s. He built bathing huts, a small pier and a granite boat house, and built racing boats for Bray's famous regattas. The cove is still called Naylor's Cove on old maps.\n\nHis twin sons Bart and David were both celebrated oarsmen. One of them won a gold regatta medal — last known to have been held by William John Hughes, who gave it to his daughter Marion.\n\nA note on confusion: the Bray Cove Swimming Club book conflates the two Bartholomews, suggesting young Bart leased the cove. He was four at the time. The lease belongs to his grandfather.",
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
  { year: 1888, type: 'family', label: 'Late 1880s: Bartholomew Naylor leases the cove at Bray Head', personId: 'bartholomew-naylor-1852' },
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
  { year: 1945, type: 'world', label: 'Second World War ends' },
  { year: 1950, type: 'family', label: 'Donald & Marion Newman emigrate to Australia (sometime after WWII)', personId: 'donald-newman' },
  { year: 1954, type: 'family', label: 'William John Hughes dies', personId: 'william-john-hughes' },
  { year: 1970, type: 'family', label: 'Aunt Lillie dies; family leaves Crawthew Grove', personId: 'aunt-lillie-hughes' },
  { year: 1977, type: 'family', label: 'Bart Hughes dies (author of the family memoir)', personId: 'bart-edward-naylor-hughes' },
  { year: 1951, type: 'family', label: 'Peter Newman born', personId: 'peter-newman' },
  { year: 1962, type: 'family', label: 'Anne Newman born', personId: 'anne-newman' },
  { year: 1987, type: 'family', label: 'Joe Naylor interviewed in the Bray People', personId: 'joe-naylor' },
  { year: 1984, type: 'family', label: 'Luke Buxton born', personId: 'luke-buxton' },
  { year: 1988, type: 'family', label: 'Sara Buxton born', personId: 'sara-buxton' },
  { year: 1993, type: 'family', label: 'David Mackay born', personId: 'david-mackay' },
  { year: 1996, type: 'family', label: 'Jack Mackay born', personId: 'you' },
  { year: 1999, type: 'family', label: 'Claire Crowther / Bray Cualann Historical Society letter' },
  { year: 2009, type: 'family', label: 'Marjorie Rose West dies', personId: 'marjorie-rose-west' },
  { year: 2020, type: 'family', label: 'Theodore "Theo" Mackay born', personId: 'theodore-mackay' },
  { year: 2022, type: 'family', label: 'Arty Mackay born', personId: 'arty-mackay' },
  { year: 2026, type: 'family', label: 'David Mackay marries Grace Bandcroft', personId: 'david-mackay' },
];

// ---------- BRANCH STYLES ----------
export const branchStyle = {
  naylor: { color: '#a98551', label: 'Naylor' },
  hughes: { color: '#3f5a44', label: 'Hughes' },
  newman: { color: '#2b3a5a', label: 'Newman' },
  mackay: { color: '#8a4a5a', label: 'Mackay' },
  buxton: { color: '#506b7e', label: 'Buxton' },
  bauer: { color: '#4a3a6b', label: 'Bauer' },
  bandcroft: { color: '#9e6675', label: 'Bandcroft' },
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
