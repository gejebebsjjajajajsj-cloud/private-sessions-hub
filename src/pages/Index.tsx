import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <main className="flex min-h-screen items-center justify-center bg-foreground text-background">
      <section className="flex flex-col items-center gap-4">
        <h1 className="text-lg font-medium tracking-wide uppercase text-muted-foreground/80">
          Entre em contato pelo WhatsApp
        </h1>
        <Button size="lg" onClick={() => navigate("/ofertas")}> 
          Chamar no WhatsApp
        </Button>
      </section>
    </main>
  );
};

export default Index;
