import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Code } from "lucide-react";

const Desenvolvimento = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Code className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Desenvolvimento de Software Sob Medida
            </h1>
            <p className="text-xl text-orange-50 mb-8">
              Criação de módulos personalizados, integrações e sistemas completos adaptados às suas necessidades
            </p>
            <Link to="/contato">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Construa Sua Solução
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">O Que Desenvolvemos</h2>
              <p className="text-lg text-muted-foreground">
                Quando o ERP padrão não atende 100% da sua necessidade, criamos a solução perfeita para você
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Módulos Customizados</h3>
                  <p className="text-muted-foreground text-sm">
                    Extensões para seu ERP existente que preenchem lacunas específicas do processo
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Integrações</h3>
                  <p className="text-muted-foreground text-sm">
                    Conectamos sistemas diferentes para eliminar retrabalho e garantir dados únicos
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Sistemas Completos</h3>
                  <p className="text-muted-foreground text-sm">
                    Desenvolvimento do zero quando nenhuma solução de mercado atende
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Quando Desenvolver Sob Medida?</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Lacunas no ERP</h4>
                      <p className="text-muted-foreground text-sm">
                        Seu sistema não tem funcionalidade para um processo crítico do seu negócio.
                        Desenvolvemos módulos que se integram perfeitamente ao ERP existente.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Substituir Excel</h4>
                      <p className="text-muted-foreground text-sm">
                        Sua equipe mantém planilhas paralelas porque o ERP não atende. Criamos sistemas
                        que eliminam essa duplicidade, integrando com o banco de dados principal.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Conectar Sistemas</h4>
                      <p className="text-muted-foreground text-sm">
                        Você usa múltiplos sistemas (ERP, CRM, e-commerce) e precisa sincronizar dados.
                        Desenvolvemos integrações robustas via API ou banco de dados.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Tecnologias Utilizadas</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <p className="font-semibold">AdvPL</p>
                      <p className="text-xs text-muted-foreground">TOTVS Protheus</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <p className="font-semibold">SQL</p>
                      <p className="text-xs text-muted-foreground">Oracle, SQL Server</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <p className="font-semibold">JavaScript</p>
                      <p className="text-xs text-muted-foreground">Node.js, React</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <p className="font-semibold">Python</p>
                      <p className="text-xs text-muted-foreground">Integrações, APIs</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Conte-nos sobre seu desafio e vamos construir a solução ideal
            </p>
            <Link to="/contato">
              <Button size="lg" className="bg-accent hover:bg-accent/90">
                Falar com Especialistas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Desenvolvimento;
