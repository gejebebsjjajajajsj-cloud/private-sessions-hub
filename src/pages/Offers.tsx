import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5599999999999"; // Substitua pelo seu número no formato DDI + DDD + número

const createWhatsAppLink = (text: string) => {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

const Offers = () => {
  return (
    <main className="min-h-screen bg-foreground text-background">
      <section className="mx-auto flex min-h-screen w-full max-w-lg flex-col gap-4 px-4 py-6 sm:max-w-xl sm:px-5 sm:py-8 lg:max-w-2xl">
        <header className="space-y-1 text-center">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-muted-foreground/80 uppercase">
            Atendimento exclusivo pelo WhatsApp
          </p>
          <h1 className="text-xl font-semibold tracking-tight sm:text-2xl">
            Escolha como quer se conectar comigo
          </h1>
        </header>

        <div className="flex flex-1 flex-col gap-4 py-3">
          <section className="flex w-full flex-col gap-2 rounded-xl bg-background/10 p-3 shadow-sm ring-1 ring-border/60 sm:p-4">
            <h2 className="text-sm font-semibold tracking-tight sm:text-base">
              Fotos, vídeos e conteúdos +18
            </h2>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Conteúdos exclusivos, personalizados e enviados diretamente para você com toda a discrição.
            </p>
            <ul className="list-disc space-y-0.5 pl-4 text-xs text-muted-foreground/90 sm:text-sm">
              <li>Pacotes de fotos e vídeos sob medida</li>
              <li>Conteúdos privados e exclusivos</li>
              <li>Atendimento rápido e sigiloso</li>
            </ul>
            <div className="pt-1.5">
              <Button
                className="w-full sm:w-auto"
                size="sm"
                asChild
              >
                <a
                  href={createWhatsAppLink(
                    "Oi, vi sua página e quero saber mais sobre os conteúdos +18."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </section>

          <section className="flex w-full flex-col gap-2 rounded-xl bg-background/10 p-3 shadow-sm ring-1 ring-border/60 sm:p-4">
            <h2 className="text-sm font-semibold tracking-tight sm:text-base">
              Chamada de vídeo e encontros
            </h2>
            <p className="text-xs text-muted-foreground sm:text-sm">
              Combine chamadas de vídeo ou encontros de forma segura, clara e discreta pelo WhatsApp.
            </p>
            <ul className="list-disc space-y-0.5 pl-4 text-xs text-muted-foreground/90 sm:text-sm">
              <li>Chamadas de vídeo combinadas diretamente comigo</li>
              <li>Opções de duração e valores explicados no chat</li>
              <li>Encontros presenciais combinados com segurança</li>
            </ul>
            <div className="pt-1.5">
              <Button
                className="w-full sm:w-auto"
                size="sm"
                asChild
              >
                <a
                  href={createWhatsAppLink(
                    "Oi, vi sua página e quero combinar chamada de vídeo ou encontro."
                  )}
                  target="_blank"
                  rel="noreferrer"
                >
                  Chamar no WhatsApp
                </a>
              </Button>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default Offers;
