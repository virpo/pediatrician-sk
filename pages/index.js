import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';

import SplitItem from '/components/split-item'
import InfoBlock from '/components/info-block'

export default function Home() {
  return (
    <>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        alignItems="center"
        sx={{ my: 6 }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h3">
            Všetko o zdraví vášho
            dieťaťa na jednom mieste
          </Typography>
          <Typography variant="body1">
            The other option is to use an in the ear thermometer (tympanic), although these should not be used in babies below a month of age.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className='video-container'>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/PV0svsPnsJ8?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
        </Grid>
      </Grid>

      <Typography variant="h2">
        Čo trápi vaše dieťa?
      </Typography>

      <Grid
        container
        justifyContent="center"
        alignItems="stretch"
        sx={{ my: 2 }}
        spacing={2}
      >
        {
          [
            {title: 'Moje dieťa do 3 mesiacov', emoji: '👶', link: '#'},
            {title: 'Moje dieťa nad 3 mesiace', emoji: '👦', link: '/nad-3-mesiace'},
            {title: 'COVID-19', emoji: '🦠', link: '#'},
            {title: 'Duševné zdravie detí', emoji: '😵‍💫', link: '#'},
            {title: 'Administratívne - OČR, Potv., ...', emoji: '📄', link: '#'},
            {title: 'Horúčka u detí', emoji: '🌡', link: '/nad-3-mesiace/horucka'},
            {title: 'Nový rodič', emoji: '🫄', link: '#'},
            {title: 'Otestuj svoje vedomosti', emoji: '❓', link: '/kviz'},
          ].map((item, index) => <SplitItem title={item.title} emoji={item.emoji} link={item.link} key={index} />)
        }
      </Grid>

      <Typography variant="h2" sx={{ pt: 8 }}>
        Kedy ísť na pohotovosť alebo volať 155?
      </Typography>
      <Typography variant="h5" sx={{ mb: 6 }}>
        Zavolajte s pokojom vášmu pediatrovi, ak má dieťa ktorýkoľvek z nasledujúcich príznakov.
      </Typography>

      <Grid
        container
        spacing={2}
        justifyContent="center"
        sx={{ my: 6 }}
      >
        <Grid item xs={12} sm={4}>
          <InfoBlock color="red">
            <Typography variant="body1" sx={{ fontSize: '4rem' }}>
              👶 🍼
            </Typography>
            <Typography variant="h2">
              S dieťaťom 0-3 mesiace
            </Typography>
            <Typography variant="h5" sx={{ mb: 6 }}>
              Má vaše dieťa <strong>ktorýkoľvek</strong> z nasledujúcich príznakov?
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>Je strnulé, alebo sa minimálne pohybuje, alebo má zášklby ramien, rúk alebo noh, ktoré neprestanú, keď ich chytíte rukami.</li>
                <li>Je opakovane ťažké ho zobudiť, aj keď je čas na kŕmenie.</li>
                <li>Bledá, mramorová koža, ktorá je nezvyčajne chladná.</li>
                <li>Teplota nad 38°C (neplatí, ak bolo dieťa očkované v predchádzajúcich 48 hodinách a nemá iné červené alebo oranžové príznaky - vtedy kontaktovat telefonicky svojho primárneho pediatra).</li>
                <li>Suché plienky (dieťa nemoči) viac ako 8 hodín.</li>
                {/* <li>Výrazne stažené dýchanie, ktoré sa prejavuje neschopnostou pit, robí si prestávky v satí po niekoľkých hltoch, má nezvyčajne rýchle a plytké dýchanie, nevládze plakať, sú pritomné pauzy medzi nádychmi viac ako 10 sekúnd, má výrazné trvalé pískanie na hrudi pri dýchaní.</li>
                <li>Modrasté sfarbenie okolo úst, alebo na končekoch prstov.</li>
                <li>Na koži nové fialové fliačky, ktoré nemiznú, ak na kožu v mieste ich výskytu zatlačite skleneným pohárom, alebo ktoré vyzerajú ako malé modriny.</li>
                <li>Zvracanie zeleného obsahu.</li>
                <li>Ak máte obavy, že je Vaše dieťa v ohrození života.</li> */}
              </ul>
            </Typography>
            <Typography variant="body1">
              <Link underline="always" color="inherit" href="#">
                Zistiť viac
              </Link>
            </Typography>
          </InfoBlock>
        </Grid>

        <Grid item xs={12} sm={4}>
          <InfoBlock color="red">
            <Typography variant="body1" sx={{ fontSize: '4rem' }}>
              👦 🪁
            </Typography>
            <Typography variant="h2">
              S dieťaťom nad 3 mesiace
            </Typography>
            <Typography variant="h5" sx={{ mb: 6 }}>
              Má dieťa <strong>ktorýkoľvek</strong> z nasledujúcich príznakov?
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>Blesá, mramorová koža, ktorá je nezvyčajne chladná.</li>
                <li>Je výrazne spavé - tažké je ho prebudiť, spi nezvyčajne dlho a nepretržite neodpovedá na podnety </li>primerane ani počas bdenia, takmer sa nehýbe a nenadväzuje očný kontakt
                <li>je neutiŝiteľne nepokojné nepretržite plače, má nezvyčajný piskľavý plač.</li>
                <li>Je zmätené, dezorientované, má nezrozumiteľnú reč</li>
                <li>Nepritomnosť močenia (suché plienky) u dietata do roka veku viac ako 8 hodin, u dietata do 3 rokov viac ako 12 hodín.</li>
                {/* <li>Výrazne stažené dýchanie, ktoré sa prejavuje nepravidelným dýchaním, velmi rýchlym a plytkým dýchaním </li>mimo plaču, velmi dlhými pauzami medzi nádychmi, lapaním po dychu, ak pre cychavičnost nedokáže súvisle hovorit, jest alebo pit má výrazné trvalé pískanie na hrudi pri dýchani
                <li>Modrasté sfarbenie okolo úst, alebo na končekoch prstov</li>
                <li>Velmi výrazná a neustupujúca bolesť alebo tlak na hrudi</li>
                <li>Záchvat kŕčov (rytmické zášklby celých končatin alebo celeho tela s poruchou vedomia).</li>
                <li>Opakovane vytrvalo vracia a má výraznú bolesť hlavy, ma stuhnutú šiju (nedokáže predklanat hlavu)</li>
                <li>Nové filačiky na koži, ktoré nemiznú, ak na kožu v mieste ich výskytu zatlačite skleneným pohárom, </li>alebo ktoré vyzeraju ako malé modriny,
                <li>Nähle vzniknutá alebo výrazne sa zhoršujúca bolesť v oblasti semennikov u chlapcov</li>
                <li>Dieta utrpelo vážny úraz, alebo si spôsobilo vážne poranenie.</li>
                <li>Ak máte strach, lebo dieta vyzerá velmi choré a máte obavy, že je v ohrození života.</li> */}
              </ul>
            </Typography>

            <Typography variant="body1">
              <Link underline="always" color="inherit" href="#">
                Zistiť viac
              </Link>
            </Typography>
          </InfoBlock>
        </Grid>

        <Grid item xs={12} sm={4}>
          <InfoBlock color="red">
            <Typography variant="body1" sx={{ fontSize: '4rem' }}>
              🧑 📱
            </Typography>
            <Typography variant="h2">
              S dospievajúcim dieťatom
            </Typography>
            <Typography variant="h5" sx={{ mb: 6 }}>
              Má <strong>ktorýkoľvek</strong> z nasledujúcich príznakov?
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>Bleda, mramorová koža, ktorá je nezvyčajne chladná a pritom spotená.</li>
                <li>Výrazne stažené dýchanie, ktoré sa prejavuje nepravidelným dýchaním, veľmi rýchlym dýchaním, lapaním po dychu ak pre dýchavičnosť nedokáže súvisle hovoriť, jesť alebo pit.</li>
                <li>Šedo-modré sfarbenie kože okolo úst, na tvári alebo na končekoch prstov. Velmi výrazná neustupujúca bolesť alebo tlak na hrudi</li>
                <li>Záchvat krdov (rytmické zášklby celých končatin alebo celého tela s poruchou vedomia).</li>
                {/* <li>Zmätenosť a dezorientovanosť (ak reaguje zmätene, alebo neprimerane na podnety, alebo nereaguje vôbec, nedokáže zrozumitelne hovorit, citi mdloby a výrazné závrate.</li>
                <li>Neutšitelné vracanie a výrazná bolest hlavy.</li>
                <li>Nové fliačiky na koži, ktoré nemiznú, ak na kožu v mieste ich výskytu zatlačite skleneným pohárom, alebo ktoré vyzerajú ako malé modriny.</li>
                <li>U chlapcov náhle vzniknutá alebo výrazne sa zhoršujúca bolest v oblasti semennikov.</li>
                <li>Ak vykašliava krvavé hlierly.</li>
                <li>Utrpel vážny úraz alebo si spôsobil vážne poranenie.</li> */}
              </ul>
            </Typography>

            <Typography variant="body1">
              <Link underline="always" color="inherit" href="#">
                Zistiť viac
              </Link>
            </Typography>
          </InfoBlock>
        </Grid>
      </Grid>
    </>
  )
}
