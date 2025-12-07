import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, Database } from "lucide-react";

const Consultoria = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Database className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Consultoria de Sistemas (ERPs)
            </h1>
            <p className="text-xl text-blue-50 mb-8">
              Gestão completa de ERPs com suporte direto, treinamentos personalizados e configurações sob medida
            </p>
            <Link to="/contato">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Otimize Seu ERP Agora
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">O Que Fazemos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Suporte Direto</h3>
                  <p className="text-muted-foreground">
                    Atendimento imediato via WhatsApp ou Teams com nossos especialistas. 
                    Sem tickets, sem filas, sem burocracia.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Treinamentos Personalizados</h3>
                  <p className="text-muted-foreground">
                    Capacitação da sua equipe focada nos processos específicos do seu negócio. 
                    Sem treinamentos genéricos.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Configurações e Parametrizações</h3>
                  <p className="text-muted-foreground">
                    Ajustamos o ERP para se adaptar ao seu processo. Não forçamos seu negócio 
                    a se adaptar ao sistema.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <CheckCircle2 className="h-8 w-8 text-primary mb-4" />
                  <h3 className="font-semibold text-lg mb-2">Acompanhamento Contínuo</h3>
                  <p className="text-muted-foreground">
                    Monitoramento constante do uso do sistema, identificando melhorias e 
                    otimizações proativamente.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ERPs Supported */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">ERPs que Atendemos</h2>
            <p className="text-center text-muted-foreground mb-8 text-lg">
              Experiência comprovada com os principais sistemas do mercado
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "TOTVS Protheus", description: "Maior experiência" },
                { name: "Ciagri", description: "Especialistas em Agro" },
                { name: "SAP Business One", description: "Indústria e Serviços" },
                { name: "Sankhya", description: "Multi-empresa" },
                { name: "Senior", description: "Gestão Industrial" },
                { name: "RM Totvs", description: "RH e Folha" },
                { name: "Linx", description: "Varejo" },
                { name: "Outros", description: "Consultoria geral" },
              ].map((erp) => (
                <Card key={erp.name} className="text-center">
                  <CardContent className="p-6">
                    <h3 className="font-bold text-lg mb-1">{erp.name}</h3>
                    <p className="text-sm text-muted-foreground">{erp.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Flow */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Nosso Fluxo de Consultoria
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Processo estruturado em 5 fases para garantir o máximo aproveitamento do seu ERP
            </p>
            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      1
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Avaliações</h3>
                      <p className="text-muted-foreground mb-2">
                        Diagnóstico completo do estado atual do seu ERP e dos processos da empresa.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Mapeamento de processos</li>
                        <li>• Identificação de gargalos</li>
                        <li>• Análise de aderência do sistema</li>
                        <li>• Levantamento de necessidades</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      2
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Configurações</h3>
                      <p className="text-muted-foreground mb-2">
                        Parametrização do sistema para atender perfeitamente seu processo de negócio.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Configuração de módulos</li>
                        <li>• Parametrizações específicas</li>
                        <li>• Criação de relatórios personalizados</li>
                        <li>• Ajustes de telas e campos</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      3
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Treinamentos</h3>
                      <p className="text-muted-foreground mb-2">
                        Capacitação focada no seu processo, não em funcionalidades genéricas.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Treinamento por perfil de usuário</li>
                        <li>• Simulação de cenários reais</li>
                        <li>• Material de apoio personalizado</li>
                        <li>• Acompanhamento pós-treinamento</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      4
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Utilização</h3>
                      <p className="text-muted-foreground mb-2">
                        Suporte hands-on durante a operação real do sistema.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Suporte direto via WhatsApp/Teams</li>
                        <li>• Resolução imediata de dúvidas</li>
                        <li>• Ajuda em operações complexas</li>
                        <li>• Troubleshooting rápido</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-xl">
                      5
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-2">Acompanhamentos</h3>
                      <p className="text-muted-foreground mb-2">
                        Monitoramento contínuo e melhoria progressiva do uso do sistema.
                      </p>
                      <ul className="space-y-1 text-sm text-muted-foreground">
                        <li>• Reuniões periódicas de follow-up</li>
                        <li>• Identificação de oportunidades de melhoria</li>
                        <li>• Atualizações e novas funcionalidades</li>
                        <li>• Evolução contínua do sistema</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">Benefícios da Consultoria Price</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Redução de Retrabalho</h3>
                  <p className="text-muted-foreground text-sm">
                    Sistema configurado corretamente elimina duplicação de dados e processos manuais
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Equipe Produtiva</h3>
                  <p className="text-muted-foreground text-sm">
                    Treinamentos focados aumentam significativamente a produtividade do time
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Decisões Melhores</h3>
                  <p className="text-muted-foreground text-sm">
                    Dados confiáveis e relatórios corretos garantem decisões mais assertivas
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Menos Chamados</h3>
                  <p className="text-muted-foreground text-sm">
                    Suporte preventivo reduz drasticamente a quantidade de problemas e dúvidas
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">ROI Comprovado</h3>
                  <p className="text-muted-foreground text-sm">
                    Economia de até 50% em relação ao modelo tradicional de suporte
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-semibold mb-1">Evolução Contínua</h3>
                  <p className="text-muted-foreground text-sm">
                    Acompanhamento garante que o sistema evolua junto com seu negócio
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Pronto para otimizar seu ERP?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Agende uma análise gratuita e descubra o potencial não aproveitado do seu sistema
            </p>
            <Link to="/contato">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Agendar Análise Gratuita
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Consultoria;
