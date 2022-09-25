import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Breadcrumbs from '@mui/material/Breadcrumbs';

import NavigateNextIcon from '@mui/icons-material/NavigateNext';

import InfoBlock from '/components/info-block'

export default function Home() {
  return (
    <>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
        sx={{ mt: 3 }}
      >
        <Link underline="hover" color="inherit" href="/">
          Domov
        </Link>
        <Link
          underline="hover"
          color="inherit"
          href="/nad-3-mesiace"
        >
          Nad 3 mesiace
        </Link>
        <Link
          underline="hover"
          color="text.primary"
          href="#"
          aria-current="page"
        >
          Horúčka 🌡
        </Link>
      </Breadcrumbs>

      <Grid
        container
        columnSpacing={8}
        justifyContent="center"
        alignItems="center"
        sx={{ my: 6 }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h1" gutterBottom>
            Horúčka 🌡
          </Typography>
          <Typography variant="h5" gutterBottom sx={{ mb: 6 }}>
            Čo robiť ked má dieťa horúčku?
          </Typography>
          <Typography variant="body1">
            <strong>Horúčka je u detí veľmi častá a zvyčajne naznačuje, že vaše dieťa má infekciu.</strong> Je veľmi dôležité, aby ste dieťaťu presne zmerali teplotu - mali by ste použiť digitálny teplomer (u detí do 5 rokov pod pazuchou a u detí starších ako 5 rokov v ústach). Ďalšou možnosťou je použiť teplomer do ucha (tympanický), hoci ten by sa nemal používať u detí mladších ako jeden mesiac.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography variant="body1">
            <ul>
              <li><strong>Vírusové infekcie</strong> sú oveľa častejšie ako bakteriálne infekcie.</li>

              <li>Príznaky ako <strong>nádcha, kašeľ, sipot, bolesť hrdla, červené oči</strong> a hnačka svedčia skôr o vírusovej infekcii ako o bakteriálnej infekcii. Ak sa v tej istej domácnosti necíti dobre viacero ľudí, tiež to naznačuje vírusovú infekciu (pretože vírusové infekcie sa ľahko šíria).</li>

              <li><strong>Horúčka je u detí bežná do 48 hodín po očkovaní</strong> - ak je vaše dieťa inak v poriadku, môžete mu po očkovaní vakcínou MenB podať paracetamol bez toho, aby ste vyhľadali lekársku pomoc.</li>

              <li>Príležitostne môžu mať deti s horúčkou záchvat/záchvat. Nazýva sa to <strong>febrilný kŕč</strong> a najčastejšie sa vyskytuje u detí vo veku od 6 mesiacov do 3 rokov. Zvyčajne sa vyskytujú v 1. deň horúčky a vo väčšine prípadov nemajú žiadne dlhodobé následky.</li>

              <li><strong>Vírusové infekcie</strong> sa zvyčajne zlepšia samé a <strong>nepotrebujú liečbu antibiotikami.</strong> Antibiotiká môžu v skutočnosti spôsobiť vedľajšie účinky, ako je vyrážka a hnačka, a môžu zvýšiť riziko vzniku rezistencie na antibiotiká</li>
            </ul>
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={8}
        justifyContent="center"
        sx={{ my: 6 }}
      >
        <Grid item xs={12} sm={6}>
          <InfoBlock color="yellow">
            <Typography variant="h2" gutterBottom>
              Stav nie je urgentný ak:
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 6 }}>
              Zavolajte s pokojom vášmu pediatrovi, ak má dieťa ktorýkoľvek z nasledujúcich príznakov.
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>Ťažko sa mu dýcha</li>
                <li>Zdá sa byť dehydrovaný (zapadnuté oči, ospalý alebo nevylučoval moč 12 hodín)</li>
                <li>Je ospalé (nadmerne ospalé) alebo podráždené (nedokáže sa uspokojiť s hračkami, televízorom, jedlom alebo zdvihnutím ruky) - najmä ak zostáva ospalé alebo podráždené napriek tomu, že mu klesá horúčka</li>
                <li>Má extrémnu triašku alebo sa sťažuje na bolesť svalov</li>
                <li>V posledných dňoch prekonalo ovčie kiahne a teraz sa cíti horšie, má vysokú horúčku a šíri sa mu červená vyrážka</li>
                <li>Opuch končatiny alebo kĺbu</li>
                <li>Vaše dieťa je príliš bolestivé, aby mohlo stáť</li>
                <li>Má opuchnuté oko</li>
                <li>Sťažuje sa na silnú bolesť, ktorá sa nezlepšuje liekmi proti bolesti</li>
                <li>Je vo veku 3-6 mesiacov s teplotou 39 °C alebo vyššou (ale horúčka je bežná u detí do 2 dní po očkovaní)</li>
                <li>Má horúčku 38,0 °C alebo vyššiu viac ako 5 dní</li>
                <li>Zhoršuje sa alebo ak máte obavy</li>
              </ul>
            </Typography>
          </InfoBlock>
        </Grid>

        <Grid item xs={12} sm={6}>
          <InfoBlock color="red">
            <Typography variant="h2" gutterBottom>
              Stav je urgentný ak:
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ mb: 6 }}>
              Navštívte pohotovosť, prípadne volajte 155, ak má dieťa ktorýkoľvek z nasledujúcich príznakov.
            </Typography>
            <Typography variant="body1">
              <ul>
                <li>ťažkosti s dýchaním, modré pery</li>
                <li>prvýkrát kŕče z horúčky (febrilné kŕče)</li>
                <li>horúčku nad 40 °C</li>
                <li>horúčku nad 38 °C a je mladšie ako 2 mesiace</li>
                <li>stuhnutú šiju napr. nevie</li>
                <li>predkloniť hlavu</li>
                <li>drobné, bodkovité krvácania v koži (tzv. petéchie)</li>
                <li>nízky príjem tekutín napr. odmieta piť</li>
              </ul>
            </Typography>
          </InfoBlock>

          <InfoBlock color="green" topGap={4}>
            <Typography variant="body1">
              <strong>Ak nie sú prítomné žiadne z predošlých príznakov, je čas na samoliečbu.</strong>
            </Typography>
          </InfoBlock>

          <Typography variant="h2" gutterBottom sx={{ mt: 6 }}>
            Ako merať telesnú teplotu?
          </Typography>
          <Typography variant="body1">
            <ul>
              <li><strong>v podpazuší</strong> – axilárne horúčka je teplota <strong>vyššia ako 38°C</strong></li>
              <li><strong>v uchu</strong> – tympanálne horúčka je teplota <strong>vyššia ako 38°C</strong></li>
              <li><strong>v konečníku</strong> – rektálne horúčka je teplota <strong>vyššia ako 38,5°C</strong></li>
            </ul>
          </Typography>
        </Grid>
      </Grid>

      <Grid
        container
        columnSpacing={8}
        justifyContent="center"
        sx={{ my: 6 }}
      >
        <Grid item xs={12} sm={6}>
          <Typography variant="h2" gutterBottom sx={{ mt: 6 }}>
            Ako znižovať teplotu s liekmi?
          </Typography>
          <Typography variant="body1">
            <strong>Lieky s obsahom paracetamolu</strong>
            <ul>
              <li>sú vhodné pre všetky vekové kategórie</li>
              <li>podávajú sa podľa hmotnosti dieťaťa podávajú sa každé 4 – 6 hodín, max. 5-krát denne</li>
              <li>maximálny účinok sa dostaví po 0,5 – 2 hodinách po podaní</li>
              <li>sú nevhodné pre deti s chorobami pečene alebo poškodenou pečeňou</li>
              <li>pomáhajú pri bolesti</li>
            </ul>
          </Typography>
          <Typography variant="body1">
            <strong>Lieky s obsahom ibuprofénu</strong>
            <ul>
              <li>sú vhodné pre deti od 3 mesiacov alebo s váhou vyššou ako 7 kg</li>
              <li>podávajú sa podľa hmotnosti dieťaťa</li>
              <li>podávajú sa každých 6 – 8 hodín, maximálne 4-krát denne</li>
              <li>maximálny účinok sa dostaví po 1 – 2 hodinách po podaní nalačno</li>
              <li>sú nevhodné ak dieťa málo pije, má problémy</li>
              <li>s obličkami, vracalo alebo má hnačku</li>
              <li>počas ich používania je nutný zvýšený príjem tekutín</li>
              <li>majú tiež protizápalový účinok</li>
            </ul>
          </Typography>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h2" gutterBottom sx={{ mt: 6 }}>
            Ako znižovať horúčku bez liekov?
          </Typography>
          <Typography variant="body1">
            <ul>
              <li>Studené obklady a zábaly. Osušku namočte do vlažnej vody s teplotou 22 – 25 °C a 2 – 3-krát priložte na hruď alebo brucho na 10 minút – nie na končatiny.</li>
              <li>U starších detí je možné znižovať horúčku vlažnou sprchou</li>
              <li>Obmývanie tela vlhkou vlažnou špongiou vo vaničke s teplotou vody 29 – 32 °C po dobu 10 – 30minút v miestnosti s teplotou 24 °C.</li>
              <li>Tieto postupy použite ak liečba liekmi nepomáha, alebo je horúčka vyššia ako 39 °C.</li>
            </ul>
            <strong>POZOR:</strong> Ochladzovanie tela vlažnou vodou nerobte, ak má dieťa studené končatiny – dlane a chodidlá.
          </Typography>
        </Grid>
      </Grid>
    </>
  )
}
