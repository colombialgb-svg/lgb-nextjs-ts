import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Download } from "lucide-react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Posición de LGB Colombia sobre la Ley Laura",
  description:
    "Declaración pública de LGB Colombia sobre el Proyecto de Ley 211 de 2026, conocido como Ley Laura.",
};

const SECCIONES = [
  {
    titulo: "Esta discusión también afecta a personas LGB",
    parrafos: [
      "Muchos de los niños y niñas que no encajan en los estereotipos de feminidad y masculinidad asociados a su sexo crecerán siendo gays, lesbianas o bisexuales. Por ello, las decisiones sobre su atención psicológica y médica también conciernen directamente a las personas homosexuales y bisexuales y a las organizaciones que las representan.",
      "Durante décadas, las personas homosexuales hemos luchado contra la idea de que nuestros cuerpos, gestos o maneras de amar debían corregirse para ajustarse a las expectativas sociales. Por eso nos preocupa que la inconformidad con los estereotipos sexistas se reinterprete como prueba de una identidad que requiere modificar el cuerpo. Un niño femenino no es una niña. Una niña masculina no es un niño. La forma de vestir, jugar, hablar o relacionarse no determina que una persona haya nacido en el cuerpo equivocado.",
      "En una sociedad homófoba, el deseo de pertenecer al otro sexo puede ser, en algunos casos, una manera de hacer más tolerable una atracción latente hacia el mismo sexo. Un niño que comienza a sentirse atraído por otros niños puede imaginar que ese deseo sería aceptable si él fuera una niña. Del mismo modo, una niña atraída por otras niñas puede pensar que sus sentimientos tendrían sentido si ella fuera un niño. Esto no explica todos los casos ni debe darse por supuesto, pero es una posibilidad que la atención psicológica no puede descartar de antemano.",
      "Cuando a un niño potencialmente gay se le enseña que puede ser una niña heterosexual, o a una niña potencialmente lesbiana que puede convertirse en un niño heterosexual, el menor puede llegar a entender que el problema no está en la homofobia de su entorno, sino en su propio cuerpo. Así, la transición puede reproducir una lógica semejante a la de las terapias de conversión: en lugar de ampliar las posibilidades de ser hombre o mujer, se modifica el cuerpo para ajustarlo a los mismos estereotipos que históricamente han castigado la homosexualidad.",
      "Esto no significa que toda persona que posteriormente se identifique como trans sea homosexual ni que toda intervención responda a una intención de convertir a alguien. Significa que la orientación sexual, la inconformidad con los estereotipos y otros posibles orígenes del malestar deben ser explorados cuidadosamente antes de iniciar un proceso médico.",
    ],
  },
  {
    titulo: "La evidencia exige prudencia",
    parrafos: [
      "Los bloqueadores de pubertad no son una simple “pausa” neutral. Las revisiones sistemáticas disponibles han encontrado evidencia limitada y de baja certeza sobre sus beneficios para la disforia, la salud mental y el funcionamiento psicosocial. La evidencia disponible muestra posibles efectos sobre la densidad mineral ósea y el crecimiento; asimismo, persisten dudas importantes acerca del desarrollo sexual y de otras consecuencias a largo plazo.",
      "Las hormonas sexuales cruzadas producen cambios irreversibles y pueden afectar la función sexual y la fertilidad.",
      "En cuanto a las intervenciones quirúrgicas, según la información oficial disponible, las cirugías genitales de afirmación de género están reservadas en Colombia a mayores de 18 años. No sostenemos, por tanto, que se practiquen de forma generalizada en menores. Sin embargo, el debate no se limita a estas operaciones: también comprende mastectomías y otras intervenciones quirúrgicas irreversibles. Que una práctica no sea habitual no vuelve innecesario establecer una prohibición legal clara, especialmente cuando implica retirar tejido saludable y producir cambios permanentes.",
      "Tampoco es cierto que se haya demostrado que estos tratamientos sean indispensables para prevenir el suicidio. Los estudios observacionales citados habitualmente no permiten establecer que los bloqueadores o las hormonas reduzcan por sí mismos los intentos de suicidio. Reconocer esta limitación no significa ignorar el sufrimiento de algunos adolescentes: significa exigir que ese sufrimiento sea atendido con intervenciones cuya seguridad y eficacia estén adecuadamente sustentadas.",
      "La creciente cautela adoptada por varios sistemas sanitarios europeos confirma que las dudas no son producto de una campaña política colombiana. Son parte de una discusión médica internacional sobre la calidad de la evidencia, el consentimiento y las consecuencias a largo plazo.",
    ],
  },
  {
    titulo: "El consentimiento de un menor tiene límites",
    parrafos: [
      "Un niño o adolescente puede expresar con sinceridad un sufrimiento profundo y persistente. Debe ser escuchado, acompañado y protegido. Pero comprender su propia experiencia y su malestar no equivale necesariamente a poder dimensionar y anticipar lo que significarán en su vida adulta la pérdida de fertilidad, las alteraciones de la función sexual (por ejemplo, la anorgasmia) u otros cambios corporales irreversibles.",
      "La autorización de los padres tampoco elimina este problema. Las familias necesitan información completa, independiente y comprensible, no la falsa disyuntiva entre aprobar inmediatamente la transición o condenar a su hijo al suicidio.",
      "Cuando la atención psicológica adopta un enfoque que da por establecida una identidad trans y deja de explorar otras posibles explicaciones del malestar, se corre el riesgo de inducir o incluso forzar a un menor a rechazar su homosexualidad. Si la feminidad de un niño o la masculinidad de una niña se interpretan como señales de que pertenecen al otro sexo, la posibilidad de una futura orientación homosexual puede quedar prematuramente descartada: un niño que podría crecer siendo gay pasa a entenderse como una niña atraída por hombres, y una niña que podría crecer siendo lesbiana, como un niño atraído por mujeres.",
      "La atención psicológica debe ofrecer un espacio para explorar, sin conclusiones predeterminadas, la orientación sexual, la relación con el propio cuerpo, los estereotipos sexistas, posibles experiencias traumáticas y otros problemas concurrentes. Su propósito debe ser comprender el origen del malestar y acompañar al menor sin presionarlo hacia la transición ni hacia ninguna otra identidad o desenlace.",
    ],
  },
  {
    titulo: "Nuestro llamado al Congreso",
    parrafos: [
      "Respaldamos que la Ley Laura prohíba las cirugías de afirmación de género y establezca límites a la prescripción de bloqueadores de pubertad y hormonas sexuales cruzadas en menores de edad. Al mismo tiempo, pedimos que el Congreso corrija las debilidades técnicas y jurídicas del proyecto.",
      "El proyecto acierta al exceptuar las intervenciones requeridas para tratar condiciones médicas diagnosticadas, como la pubertad precoz y determinadas alteraciones congénitas, genéticas o cromosómicas que afectan el desarrollo sexual. Durante el trámite legislativo deben conservarse estas excepciones y delimitarse con claridad. El texto también debe precisar el alcance de cada intervención prohibida, establecer qué ocurrirá con quienes ya se encuentran en tratamiento y garantizar evaluaciones clínicas completas e información expresa sobre fertilidad, función sexual, salud ósea y cambios irreversibles.",
      "Colombia necesita además un registro nacional anonimizado que permita conocer cuántas personas han recibido estas intervenciones, sus edades, las indicaciones, los medicamentos utilizados, las cirugías practicadas, las complicaciones, la pérdida de seguimiento y los casos de interrupción o detransición. Las cifras deben distinguir entre solicitudes o autorizaciones, menores atendidos, cambios realizados en documentos de identidad y procedimientos médicos efectivamente practicados.",
      "También solicitamos que gays, lesbianas y bisexuales, así como las organizaciones dedicadas específicamente a defender nuestros derechos, sean escuchados durante el trámite legislativo. La sigla “LGBTIQ+” reúne a poblaciones diferentes, pero no supone que todas compartamos los mismos intereses, experiencias o posiciones políticas. Las cuestiones relacionadas con la orientación sexual no son idénticas a las relacionadas con la identidad de género.",
      "Durante demasiado tiempo, algunas organizaciones han hablado en nombre de toda la población agrupada bajo la sigla “LGBTIQ+” y han presentado el modelo de afirmación de género como una posición compartida e incuestionable. Esa pretendida unanimidad no existe. Reconocer que las personas que se identifican como trans merecen el mismo respeto y protección legal que cualquier ciudadano no obliga a gays, lesbianas y bisexuales a respaldar la medicalización de menores ni a guardar silencio sobre sus posibles consecuencias para quienes podrían crecer siendo homosexuales.",
      "El Congreso debe escuchar la pluralidad real de posiciones existentes y no presumir que una sola organización, activista o sigla puede representar a todas estas poblaciones. Las voces de gays, lesbianas y bisexuales que planteamos objeciones fundamentadas también deben formar parte de la discusión pública y legislativa.",
    ],
  },
  {
    titulo: "Proteger sin estigmatizar",
    parrafos: [
      "Este debate no debe convertirse en una licencia para hostigar a personas trans. Tampoco puede utilizarse la acusación de odio para silenciar preguntas legítimas sobre intervenciones médicas practicadas en menores.",
      "Defender a la infancia exige aceptar que algunas respuestas todavía no se conocen, que los diagnósticos pueden cambiar y que ningún niño debe cargar con las consecuencias de una decisión irreversible tomada antes de haber completado su desarrollo.",
    ],
  },
];

export default function LeyLauraPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-neutral-50 text-neutral-900">
        <div
          className="h-2 w-full"
          aria-hidden="true"
          style={{
            background:
              "linear-gradient(90deg, #ff69b4 0 12.5%, #ff0000 12.5% 25%, #ff8e00 25% 37.5%, #ffff00 37.5% 50%, #008e00 50% 62.5%, #00c0c0 62.5% 75%, #400098 75% 87.5%, #8e008e 87.5% 100%)",
          }}
        />

        <article>
          <header className="border-b border-neutral-200 bg-white">
            <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
              <Link
                href="/recursos"
                className="inline-flex items-center gap-2 text-sm font-medium text-neutral-600 transition hover:text-neutral-950"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver a Recursos
              </Link>

              <p className="mt-10 text-sm font-semibold uppercase tracking-[0.18em] text-fuchsia-700">
                Declaración pública · Septiembre de 2026
              </p>
              <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
                Posición de LGB Colombia sobre la Ley Laura
              </h1>
              <p className="mt-5 text-xl italic text-neutral-600 sm:text-2xl">
                La infancia necesita tiempo, no medicalización
              </p>

              <a
                href="/recursos/declaracion-ley-laura.pdf"
                download
                className="mt-8 inline-flex items-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Descargar declaración en PDF
              </a>
            </div>
          </header>

          <div className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-16">
            <div className="space-y-6 text-[1.06rem] leading-8 text-neutral-800 sm:text-lg">
              <p>
                La discusión sobre los bloqueadores de pubertad, las hormonas
                sexuales cruzadas y las cirugías de afirmación de género en
                menores finalmente ha llegado al centro del debate público
                colombiano.
              </p>
              <p className="border-l-4 border-fuchsia-700 pl-5 text-xl font-medium leading-8 text-neutral-950 sm:text-2xl sm:leading-9">
                Nuestra posición es clara: apoyamos la Ley Laura porque
                rechazamos toda forma de homofobia y porque protege a niños y
                adolescentes que, al crecer, podrían ser gays, lesbianas o
                bisexuales. La inconformidad con los estereotipos asociados a su
                sexo no debe llevarlos a creer que el problema está en su cuerpo
                ni convertirse en una razón para medicalizarlos.
              </p>
              <p>
                Respaldamos el propósito general del Proyecto de Ley 211 de
                2026, conocido como Ley Laura, aunque consideramos que su
                articulado debe ser revisado y fortalecido durante el trámite
                legislativo.
              </p>
              <p>
                Nuestra posición no nace de la hostilidad hacia las personas
                trans. Toda persona, sin importar cómo se identifique, merece
                vivir libre de violencia, discriminación y arbitrariedad. Los
                adultos deben poder tomar decisiones sobre su cuerpo y su vida
                dentro del marco de la ley. Reconocer esas libertades no nos
                libera de nuestra responsabilidad, también como adultos, de
                proteger a niños y adolescentes y evitar que sean sometidos a
                prácticas médicas nocivas e innecesarias.
              </p>
            </div>

            {SECCIONES.map((seccion) => (
              <section
                key={seccion.titulo}
                className="mt-14 border-t border-neutral-200 pt-10"
              >
                <h2 className="text-2xl font-bold tracking-tight text-neutral-950 sm:text-3xl">
                  {seccion.titulo}
                </h2>
                <div className="mt-6 space-y-6 text-[1.06rem] leading-8 text-neutral-800 sm:text-lg">
                  {seccion.parrafos.map((parrafo) => (
                    <p key={parrafo}>{parrafo}</p>
                  ))}
                </div>
              </section>
            ))}

            <aside className="mt-14 rounded-3xl bg-neutral-900 px-6 py-8 text-white sm:px-10 sm:py-10">
              <p className="text-xl font-semibold leading-8 sm:text-2xl sm:leading-9">
                Los niños y adolescentes que no encajan en los estereotipos
                asociados a su sexo no necesitan que se les enseñe a desconfiar
                de su cuerpo. Necesitan tiempo, acompañamiento y libertad para
                descubrir quiénes son. Muchos de ellos crecerán siendo gays,
                lesbianas o bisexuales saludables. Sus cuerpos nunca fueron el
                problema.
              </p>
            </aside>

            <div className="mt-10 flex flex-col gap-3 border-t border-neutral-200 pt-8 sm:flex-row">
              <a
                href="/recursos/declaracion-ley-laura.pdf"
                download
                className="inline-flex items-center justify-center gap-2 rounded-2xl bg-neutral-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-neutral-700"
              >
                <Download className="h-4 w-4" aria-hidden="true" />
                Descargar PDF
              </a>
              <Link
                href="/recursos"
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-neutral-300 px-5 py-3 text-sm font-semibold transition hover:bg-white"
              >
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                Volver a Recursos
              </Link>
            </div>
          </div>
        </article>
      </main>
    </>
  );
}
