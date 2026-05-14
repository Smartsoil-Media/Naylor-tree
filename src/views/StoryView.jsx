import { Link } from 'react-router-dom'
import Cite from '../components/Cite'

export default function StoryView() {
  return (
    <article className="max-w-3xl mx-auto px-4 py-10 sm:py-14">
      <header className="pb-8 border-b border-sepia-200">
        <p className="text-xs uppercase tracking-[0.22em] text-sepia-500">A family history</p>
        <h1 className="font-serif text-4xl sm:text-5xl text-sepia-900 mt-2 leading-[1.05]">
          Our Story
        </h1>
        <p className="mt-5 font-serif text-xl sm:text-2xl text-sepia-700 italic leading-snug">
          A history of the Naylors of Bray, and how a fishing family from a small Irish cove
          became part of who we are today.
        </p>
      </header>

      <Section title="The cove at the foot of Bray Head">
        <p>
          If you walk south along the seafront at Bray, Co. Wicklow, the promenade eventually runs
          out and the cliffs of Bray Head rise up out of the sea. Tucked at the foot of those
          cliffs is a small rocky inlet. On older maps of southern Ireland it's marked clearly:
          Naylor's Cove.
        </p>
        <p>The cove takes its name from our family.</p>
        <p>
          It is thought that the Naylors had been settled in Bray for some two hundred years
          before the earliest dates in our records — the original family is believed to have come
          from England, though no one now knows why or when they crossed to Ireland.<Cite docId="memoir-bart-hughes" page={2} /> By the 1800s
          they were one of two Naylor branches in Bray, Protestant and Catholic, both of them sea
          families. Our line is the Protestant one. Despite the difference in religion, the two
          branches kept close ties, and both played a vital role in the fishing fleet sailing out
          of Bray.<Cite docId="memoir-bart-hughes" page={2} />
        </p>
        <p>This is their story, as best as we can tell it from the records that survive.</p>
      </Section>

      <Section title="The earliest Naylors we can name (1801–1849)">
        <p>
          The earliest baptisms we can trace are at St. Paul's Church, Bray, where between 1801
          and 1813 the children of a Bartholomew and Anne Naylor were christened — William, twins
          Samuel and George, two boys both named Bartholomew, and twins Sarah and Jane. The order
          is a bit confused in the register, and no birth dates were recorded, only baptism
          dates. We don't know what became of most of them.<Cite docId="stpauls-baptisms" /><Cite docId="crowther-letter-1999" page={2} />
        </p>
        <p>
          What we do know is that one of those sons grew up to be a fisherman of Bray Strand, and
          that on 1 February 1849, at St. Paul's Church, Samuel Nailor married Elizabeth Whitton.
          He was a bachelor "of the Strand," a fisherman like the men of his family. She was a
          spinster, also of the Strand, daughter of John Whitton, a labourer. The witnesses were
          Samuel Little Stevenson and Mary N. Hill.<Cite docId="stpauls-marriage-1849" />
        </p>
        <p>
          Samuel and Elizabeth's children were baptised at St. Paul's over the next sixteen
          years: Annabella (1849), Bartholomew (1 December 1852, baptised "Seashore"), Mary,
          Sarah (1861), and another Samuel (1865, of Waterside Cottage). There may have been
          others in between whose records were lost.<Cite docId="crowther-letter-1999" page={2} />
        </p>
        <p>
          It is Bartholomew, born by the sea in the winter of 1852, who carries our line forward.
        </p>
      </Section>

      <Section title="Bartholomew and Mary Anne (1878)">
        <p>
          On 3 July 1878, at Christ Church, Bray, Bartholomew Naylor — bachelor, fisherman, son
          of Samuel — married Mary Anne Hillard McMurray, a servant of 2 Florence Terrace, Bray.
          She was the daughter of William John McMurray, also a fisherman. They were both of full
          age. They made their home at Newcourt Cottage on Bray Strand, and over the next sixteen
          years they had ten children.<Cite docId="christ-church-marriage-1878" /><Cite docId="crowther-letter-1999" />
        </p>
        <p>
          Bartholomew became one of the most notable men in Bray. He was a fisherman, certainly,
          but he was also a boat builder — building not only the working fishing boats of the
          fleet but also the racing boats that competed in the famous Bray regattas, where crews
          of six or eight oarsmen raced in the waters off Bray Head. His granite-built boat house
          was still standing on the forest road in the 1950s.<Cite docId="memoir-bart-hughes" page={2} /><Cite docId="pictorial-history-bray" page={2} />
        </p>
        <p>
          And in the late 1880s, he took a lease from the Town Commissioners on the small rocky
          cove at the foot of Bray Head. He built bathing huts there and a small pier to make
          swimming and diving easier. People began calling it Naylor's Cove. The name stuck.<Cite docId="pictorial-history-bray" page={2} /> In
          1904 the Very Rev. Archdeacon Scott published a book, <em>The Stones of Bray</em>, in
          which he described the cove and Bartholomew's bathing huts. By then, the family's
          association with that piece of coastline was already well established.<Cite docId="memoir-bart-hughes" page={2} />
        </p>
        <p className="!mt-7">
          <strong className="font-serif text-sepia-900">
            Bartholomew and Mary Anne's children, born at Newcourt Cottage and baptised at St.
            Paul's:
          </strong>
        </p>
        <ul className="!mt-3 list-none space-y-1 border-l-2 border-sepia-300 pl-5 text-[17px]">
          <li>George — 3 December 1878</li>
          <li>Elizabeth — 4 January 1880</li>
          <li>Kathleen — 24 July 1882</li>
          <li>Samuel — 6 February 1884</li>
          <li>Marion McMurray — 31 October 1885</li>
          <li>Annabella — 1 April 1887</li>
          <li>William John — 19 April 1889</li>
          <li>Lydia — 16 May 1892</li>
          <li>Bartholomew and David Henry, twins — 19 October 1894</li>
        </ul>
        <p className="text-xs text-sepia-500 !mt-2 italic">
          Dates from the Bray Cualann Historical Society's reading of the church registers.<Cite docId="crowther-letter-1999" /><Cite docId="stpauls-baptisms" />
        </p>
        <p className="!mt-7">
          By the time of the 1901 census, the family had moved to house number 22 at Dock
          Terrace, Bray — one of just twenty houses on the terrace, home altogether to 111
          people. The Naylors were neighbours to Mooneys and Bernes and Currans and Dowlings, a
          tight community by the harbour.<Cite docId="census-1901" />
        </p>
      </Section>

      <Section title="A family scattered (1880s–1920s)">
        <p>The Naylor children of Newcourt Cottage took very different paths.<Cite docId="memoir-bart-hughes" page={3} /></p>
        <p>
          Samuel and Marion McMurray both emigrated to America. We know little of Samuel except
          that he was "given to understand" to have "prospered quite well." Marion stayed in
          America for a long time — long enough that no one in the family was certain whether
          she had married — and eventually returned to live in the family house on Putland Road,
          Bray.<Cite docId="memoir-bart-hughes" page={3} />
        </p>
        <p>
          George went to England and joined the Post Office, working on the telephone side until
          his retirement. He married a woman called Maggie and they settled in Barnstaple, Devon,
          raising five children: Samuel, Frederick, Bartholomew, Kathleen, and Cissie. Two of
          them, Samuel and Frederick, died young.<Cite docId="memoir-bart-hughes" page={3} />
        </p>
        <p>
          Kathleen carried with her a small purse, scratched on the inside flap with her name and
          address: <em>Kathleen Naylor, Putland Road, Bray</em>. The purse later passed to her
          sister Lydia, and through her into our family. Kathleen herself ended up living in
          Hove, on the Sussex coast, married to an engineer in the electricity industry.<Cite docId="memoir-bart-hughes" page={4} />
        </p>
        <p>
          The twins, Bartholomew and David Henry, became famous in Bray for their rowing. They
          competed in their father's racing boats in the great regattas at Bray Head, and won —
          among other prizes — a gold medal, "clearly inscribed," that was kept in the family
          for generations.<Cite docId="memoir-bart-hughes" page={5} />
        </p>
        <p className="font-serif italic text-sepia-700 text-center !mt-8">And then came the war.</p>
      </Section>

      <Section title="The Somme, 1916">
        <p>
          When the First World War broke out in 1914, men across Ireland enlisted. Among them was
          Lance Corporal Bartholomew Naylor, service number 26061, of the 10th Battalion Royal
          Dublin Fusiliers — the younger Bartholomew, the rowing twin, by then twenty-two years
          old.<Cite docId="bray-war-memorial" />
        </p>
        <p>
          He was killed on 13 November 1916, somewhere on the battlefield of the Somme. His body
          was never recovered. His name is inscribed on the Thiepval Memorial in France,
          alongside the names of more than 72,000 men of the British and South African forces who
          died in the Somme sector and have no known grave. He is also named on the Bray War
          Memorial, recorded as <em>"son of Mrs Mary Anne Naylor, Newcourt Cottage, Bray, County
          Wicklow."</em><Cite docId="cwgc-bart-naylor" /><Cite docId="bray-war-memorial" />
        </p>
        <p>
          His twin David survived him. The gold medal they had won together as young men in the
          regattas at Bray Head stayed with the family. Years later it was given by William John
          Hughes — Lydia's husband — to their daughter Marian. Where it is now, no one knows.<Cite docId="memoir-bart-hughes" page={5} />
        </p>
      </Section>

      <Section title="Lydia and William (1915–1924)">
        <p>
          In 1915, Lydia Naylor — twenty-three years old, the eighth of Bartholomew and Mary
          Anne's ten children — married William John Hughes, an Englishman six years her senior.
          The marriage took place at St. John's Church, Goose Green, in East Dulwich, London.
          William had Irish parents — his father Edward Hughes was a master printer from Dublin
          who had brought the family to England around 1894 — but he himself had grown up in
          London.<Cite docId="memoir-bart-hughes" page={5} /><Cite docId="memoir-bart-hughes" page={6} />
        </p>
        <p>
          The family story is that William had had a broken romance, and returned to Ireland to
          recover from it. He met Lydia there. The first time he saw her, she was scrubbing a
          floor.<Cite docId="memoir-bart-hughes" page={7} />
        </p>
        <p>
          They made their home at 4 Crawthew Grove, East Dulwich, where they shared the house
          with William's mother and his unmarried sister, Aunt Lillie. It was, as their son would
          later write, <em>"the best of conditions for a young husband, wife and their two
          children"</em> — but for Lydia, it was <em>"far from happy."</em> The "happy bright of
          nature" she had brought from Bray was, he wrote, "overpowered by a Victorian
          mother-in-law in her late fifties or early sixties."<Cite docId="memoir-bart-hughes" page={7} />
        </p>
        <p>
          In January 1917, their first child was born at Crawthew Grove: Bartholomew Edward
          Naylor Hughes, named for the cove and for the uncle who had died at the Somme just two
          months earlier. It was a brutal London winter — wartime shortages of food and fuel,
          snow on the ground.<Cite docId="memoir-bart-hughes" page={7} />
        </p>
        <p>
          Lydia, homesick for Bray, was determined that at least one of her children would be
          born in Ireland. So on 21 May 1921 — when her son was four years old — she travelled
          back across the Irish Sea, and Marion Lydia Hughes was born in Bray, Co. Wicklow.<Cite docId="memoir-bart-hughes" page={7} />
        </p>
        <p>They stayed in Bray for several months, then returned to London.</p>
      </Section>

      <Section title="The crab, the curtain, and the candle">
        <p>
          What we know of those years comes mostly from a memoir written by Lydia's son,
          Bartholomew, in his sixties.<Cite docId="memoir-bart-hughes" /> He remembered the crossings from Fishguard to Rosslare,
          travelling in steerage on the open deck of the ship because the family was poor, the
          sea so rough that the ship <em>"did everything apart from turning a complete
          circle."</em> He remembered arriving in Bray in the early hours of the morning and
          being met at the station by his grandmother Mary Anne — <em>"a large woman, who as a
          child I looked up to"</em> — who had hired a horse-drawn carriage to take them the
          short way to Putland Road.<Cite docId="memoir-bart-hughes" page={3} />
        </p>
        <p>
          He remembered the boat slip, climbing the rocks at Bray Head, helping the fishermen
          pull their boats up after a trip and being given some of their catch to take home. He
          remembered the Tea Rooms his grandmother ran in the small garden at the front of the
          house in Putland Road, with white-painted tables for visitors. He remembered his
          grandfather's boat house, <em>"hung with nets and the fishermen sitting outside
          repairing the nets."</em><Cite docId="memoir-bart-hughes" page={3} />
        </p>
        <p>
          And he remembered one particular day: he had caught a large crab on the beach and
          brought it home in a bucket of seawater, putting it down with great pride before being
          sent off to bed. When he came down the next morning the crab was gone, escaped in the
          night, and <em>"despite a search and many tears, it was not to be found."</em><Cite docId="memoir-bart-hughes" page={4} />
        </p>
        <p>
          There was another moment too, in those years — a near-disaster. His sister Marian was
          about two and a half, the household at Crawthew Grove was lit by gaslight, and candles
          were used for going upstairs. Somehow Marian got hold of a lit candle in its holder,
          bent down, and her hair caught alight. Aunt Lillie was nearby. She smothered the
          flames with her bare hands, and apart from the initial shock, no great harm was done.
          Aunt Lillie then went out to a singing engagement she had been on her way to.<Cite docId="memoir-bart-hughes" page={8} />
        </p>
        <p>
          But the most lasting memory of those years is darker, and it belongs to the autumn of
          1924.
        </p>
        <p>
          Bartholomew was seven, attending Friern Road Infants' School. He noticed his mother was
          in bed rather more than usual. The doctor — Dr. McGrath, an Irishman who had studied
          medicine in Dublin — began visiting daily. His father was often absent from work.
          Bartholomew was sent in each morning before school to say goodbye to her in the front
          downstairs room, which had become her bedroom.<Cite docId="memoir-bart-hughes" page={8} />
        </p>
        <p>
          This went on for some time, until one morning on his way home from school, the
          milkman's son said to him: <em>"the curtains in your house are all drawn over."</em><Cite docId="memoir-bart-hughes" page={8} />
        </p>
        <p className="!mt-7 font-serif text-xl text-sepia-900">
          Lydia Naylor died on 20 October 1924. She was 32 years old.
        </p>
        <p className="font-serif text-lg text-sepia-800">
          Her son was seven. Her daughter, Marion, had just turned three.
        </p>
        <p>
          The funeral was held at St. John's, East Dulwich — the same church where Lydia and
          William had married nine years earlier. She was buried in Norwood Cemetery in South
          London.<Cite docId="memoir-bart-hughes" page={9} />
        </p>
      </Section>

      <Section title="The next generation">
        <p>
          Marion Lydia Hughes — three years old when her mother died — grew up in England. In
          time, she married Donald Newman. Some time after the Second World War, Donald took
          the family to Australia, and the Newmans (and later the Mackays) have lived there
          ever since. Their two children, Peter (born 1951) and Anne (born 1962), were both
          raised in Australia.
        </p>
        <p>
          Anne married Mark Mackay, and they had two children of their own: David (1993) and
          Jack (1996). Peter had a daughter, Naomi. David in turn had two sons — Theodore in
          2020 and Arty in 2022 — the fourth Australian generation in the line.
        </p>
        <p>
          And so the line carries on, six generations from Samuel and Elizabeth Whitton who
          married at St. Paul's Church in 1849, seven from the Bartholomew and Anne whose
          children were christened there from 1801. The Naylors of Bray Strand became the
          Hugheses of East Dulwich, became the Newmans of Australia, became the Mackays — but
          the cove at the foot of Bray Head still bears the family name.
        </p>
      </Section>

      <Section title="The wider Naylor clan">
        <p>
          This is our direct line, but it is only one strand of the wider Naylor family that
          fished out of Bray for generations. There were others worth remembering.
        </p>
        <p>
          There was <strong>Sam Naylor Senior</strong>, "The Fumbler" — one of four brothers who
          lived together at Rose Cottage on the seafront, rowing a twenty-five-foot boat to
          Ballygannon four days a week, leaving at two in the morning to fish for codling and
          lobster and whelk and salmon. Once, in a single seine-netting haul, they brought in 120
          salmon. Sam later went deep-sea to Australia on a sailboat called the <em>Polly</em>,
          injured his hand, and retired from the sea. He worked afterwards as a water bailiff on
          the Dargle for Lord Meath, built his last boat at the age of eighty, and died at
          eighty-five. His brothers carried the nicknames Cody "The Shepherd" (afraid of dogs,
          always carried a stick bigger than himself), John "Sketch" (a handsome man whom a
          visiting lady artist always wanted to sketch), and Bert "The Snipe" (who never wore a
          coat, and was said to be as hardy as a snipe).<Cite docId="pictorial-history-bray" page={10} />
        </p>
        <p>
          There was <strong>Samuel Naylor Junior</strong>, who in September 1941 was a crewman
          on the <em>City of Waterford</em>, sailing from Cardiff with a cargo of coal. The ship
          was rammed by a Dutch tug, the <em>Thames</em>, and sank. The survivors were taken on
          board the <em>Walmer Castle</em>, which two days later was bombed in mid-Atlantic.
          Samuel was among the dead.<Cite docId="pictorial-history-bray" page={8} />
        </p>
        <p>
          There was <strong>Sammy Naylor</strong>, "one of Bray's best-known sailors" — the one
          who, when the dentist asked him where the bad tooth was, answered:{' '}
          <em>"Upper deck, Sir."</em><Cite docId="bray-people-1987" />
        </p>
        <p>
          There was <strong>Joe Naylor</strong>, born 7 May 1913, interviewed in the{' '}
          <em>Bray People</em> in 1987 at the age of 74 — Sammy's nephew, a railway man, a
          coast-watcher during the Second World War, a long-serving chairman of the local Rowing
          Club, his "great booming voice" said to carry across the water on regatta days.<Cite docId="bray-people-1987" />
        </p>
        <p>
          And there was <strong>Rose Naylor</strong>, described in one Bray pictorial book as
          "the last of the Naylors."<Cite docId="pictorial-memories-bray" />
        </p>
        <p>
          But of course she wasn't. The Naylors had already gone elsewhere by then — across the
          Irish Sea, into other names, into other lives.
        </p>
        <p className="font-serif italic text-sepia-700 text-2xl text-center !mt-8">Into ours.</p>
      </Section>

      <Section title="Sources">
        <p>
          This story is drawn from the documents listed below. Throughout the text the small{' '}
          <span className="text-ochre-600 font-sans text-xs align-super">[N]</span> markers link to
          the matching scan on the <Link to="/documents" className="underline">Documents page</Link>.
        </p>
        <ul className="!mt-3 list-disc list-outside pl-5 space-y-2 text-[17px]">
          <li>
            <SourceLink docId="crowther-letter-1999">
              A 1999 letter from Claire Crowther of the Bray Cualann Historical Society to Mrs.
              Sue Tinney
            </SourceLink>{' '}
            — reproducing baptism and marriage records from St. Paul's Church, Bray and Christ
            Church, Bray.
          </li>
          <li>
            <SourceLink docId="stpauls-baptisms">
              The Bray Churches database of births, baptisms, and confirmations
            </SourceLink>.
          </li>
          <li>
            <SourceLink docId="census-1901">
              The 1901 Census of Ireland (Dock Terrace, Bray)
            </SourceLink>.
          </li>
          <li>
            <SourceLink docId="bray-war-memorial">
              The Bray War Memorial register, First World War Special Edition
            </SourceLink>{' '}
            and the{' '}
            <SourceLink docId="cwgc-bart-naylor">Commonwealth War Graves entry for L/Cpl Bart Naylor</SourceLink>.
          </li>
          <li>
            <SourceLink docId="pictorial-history-bray">
              <em>A Pictorial History of Bray, Co. Wicklow, Volume One: The Seafront and Environs</em>
            </SourceLink>{' '}
            by Henry Cairns and Owen Gallagher.
          </li>
          <li>
            <SourceLink docId="pictorial-memories-bray">
              <em>Pictorial Memories of Bray</em>
            </SourceLink>.
          </li>
          <li>
            <SourceLink docId="bray-people-1987">
              The <em>Bray People</em> newspaper, 31 July 1987
            </SourceLink>.
          </li>
          <li>
            <SourceLink docId="memoir-bart-hughes">
              A typewritten memoir by Bartholomew Edward Naylor Hughes (1917–1977)
            </SourceLink>{' '}
            — seventeen pages, written for his children and grandchildren.
          </li>
          <li>
            <SourceLink docId="family-tree-chart">
              An "All-in-One" family-tree chart prepared by Sue Hughes / Tinney
            </SourceLink>.
          </li>
        </ul>
        <p className="!mt-6">
          Every name, date, and direct quotation in this account comes from one of these sources.
          Where the sources disagree — for example, on the precise birth date of Anna Bella, or
          on whether the Bart Naylor associated with Naylor's Cove was the elder or the younger
          Bartholomew — we have noted the discrepancy rather than smoothed it over.
        </p>
      </Section>

      <div className="mt-14">
        <p className="font-serif text-[18px] sm:text-[19px] leading-[1.75] text-sepia-800">
          The family memoir closes with these words from its author, Bartholomew Edward Naylor
          Hughes — Lydia's son, Marion's brother, writing many decades after the day the
          curtains were drawn:
        </p>

        <blockquote className="mt-6 border-l-4 border-ochre-400 pl-6 py-2 bg-cream-100/60 rounded-r-md">
          <p className="font-serif italic text-[19px] sm:text-[20px] text-sepia-800 leading-relaxed">
            "I have felt that I would like to have a record, as far as can be traced, of the
            families of Naylor, Hughes and West… I believe it may be of interest to my
            children, and grandchildren, to know something of the family background."
          </p>
          <p className="mt-4 text-xs uppercase tracking-[0.18em] text-sepia-500">
            — Bartholomew Edward Naylor Hughes
          </p>
        </blockquote>

        <p className="mt-12 text-center font-serif text-xl sm:text-2xl italic text-sepia-700">
          We've felt the same.<br className="hidden sm:inline" />
          {' '}This is for the ones who come after.
        </p>
      </div>

      <div className="mt-14 pt-6 border-t border-sepia-200 flex flex-wrap gap-3 text-sm">
        <Link to="/" className="px-3 py-1.5 rounded-md bg-sepia-100 text-sepia-800 hover:bg-sepia-200 no-underline">
          → Explore the tree
        </Link>
        <Link to="/people" className="px-3 py-1.5 rounded-md bg-sepia-100 text-sepia-800 hover:bg-sepia-200 no-underline">
          → Browse all people
        </Link>
        <Link to="/places" className="px-3 py-1.5 rounded-md bg-sepia-100 text-sepia-800 hover:bg-sepia-200 no-underline">
          → See the places
        </Link>
      </div>
    </article>
  )
}

function Section({ title, children }) {
  return (
    <section className="mt-12 sm:mt-14">
      <h2 className="font-serif text-2xl sm:text-3xl text-sepia-900 mb-5 leading-tight">
        <span className="inline-block border-b-2 border-ochre-400 pb-1">{title}</span>
      </h2>
      <div className="space-y-4 font-serif text-[18px] sm:text-[19px] leading-[1.75] text-sepia-800">
        {children}
      </div>
    </section>
  )
}

function SourceLink({ docId, children }) {
  return (
    <>
      <Link
        to={`/documents?doc=${docId}`}
        className="text-sepia-900 underline decoration-ochre-300 hover:decoration-ochre-500 underline-offset-2"
      >
        {children}
      </Link>
      <Cite docId={docId} />
    </>
  )
}
