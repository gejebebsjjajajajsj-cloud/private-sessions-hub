import { Button } from "@/components/ui/button";

const WHATSAPP_NUMBER = "5599999999999"; // Substitua pelo seu número no formato DDI + DDD + número

const createWhatsAppLink = (text: string) => {
  const encoded = encodeURIComponent(text);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
};

const Offers = () => {
  return (
    <main className="min-h-screen bg-foreground text-background">
      <section className="mx-auto flex w-full max-w-xl flex-col gap-4 px-4 py-4 sm:px-5 sm:py-6">
        <header className="space-y-2 text-center">
          <p className="text-[10px] font-semibold tracking-[0.25em] text-background/70 uppercase">
            Atendimento exclusivo pelo WhatsApp
          </p>
          <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
            Escolha como quer se conectar comigo
          </h1>
          <p className="mx-auto max-w-md text-[11px] text-background/80 sm:text-xs">
            Tudo acontece direto no meu WhatsApp, com <span className="font-semibold text-background">sigilo total</span> e do jeitinho que você prefere: conteúdos +18, chamadas de vídeo e encontros combinados comigo.
          </p>
        </header>

        <div className="flex flex-1 flex-col gap-3 py-2">
          <section className="flex w-full flex-col gap-2 rounded-2xl bg-background/10 p-3 shadow-sm ring-1 ring-border/70 transition hover:bg-background/15 hover:ring-border">
            <div className="space-y-1">
              <p className="inline-flex items-center rounded-full bg-background/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-background/70">
                Conteúdo +18
              </p>
              <h2 className="text-sm font-bold tracking-tight sm:text-base">
                Fotos, vídeos e conteúdos +18
              </h2>
            </div>
            <p className="text-[11px] text-background/80 sm:text-xs">
              <span className="font-semibold text-background">Conteúdos exclusivos e personalizados</span>, enviados diretamente para você com toda a discrição.
            </p>
            <ul className="list-disc space-y-0.5 pl-4 text-[11px] text-background/70 sm:text-xs">
              <li>
                <span className="font-semibold text-background">Pacotes sob medida</span> com fotos e vídeos do jeitinho que você gosta
              </li>
              <li>
                <span className="font-semibold text-background">Conteúdos privados</span> e feitos especialmente para você
              </li>
              <li>
                <span className="font-semibold text-background">Atendimento rápido</span> e totalmente sigiloso
              </li>
            </ul>
            <div className="pt-1.5">
              <Button className="w-full sm:w-auto" size="sm" asChild>
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

          <section className="flex w-full flex-col gap-2 rounded-2xl bg-background/10 p-3 shadow-sm ring-1 ring-border/70 transition hover:bg-background/15 hover:ring-border">
            <div className="space-y-1">
              <p className="inline-flex items-center rounded-full bg-background/10 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-background/70">
                Chamada & encontros
              </p>
              <h2 className="text-sm font-bold tracking-tight sm:text-base">
                Chamada de vídeo e encontros
              </h2>
            </div>
            <p className="text-[11px] text-background/80 sm:text-xs">
              <span className="font-semibold text-background">Combine tudo direto comigo pelo WhatsApp</span>, de forma segura, clara e discreta.
            </p>
            <ul className="list-disc space-y-0.5 pl-4 text-[11px] text-background/70 sm:text-xs">
              <li>
                <span className="font-semibold text-background">Chamadas de vídeo</span> combinadas diretamente comigo
              </li>
              <li>
                <span className="font-semibold text-background">Duração e valores</span> explicados com calma no chat
              </li>
              <li>
                <span className="font-semibold text-background">Encontros presenciais</span> combinados com toda segurança
              </li>
            </ul>
            <div className="pt-1.5">
              <Button className="w-full sm:w-auto" size="sm" asChild>
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
