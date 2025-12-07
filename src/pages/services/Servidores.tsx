import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Server } from "lucide-react";

const Servidores = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-accent">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Server className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Servidores e Hospedagem
            </h1>
            <p className="text-xl text-orange-50 mb-8">
              Infraestrutura segura e estável para seus sistemas. Monitoramento 24/7 e suporte especializado.
            </p>
            <Link to="/contato">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Conhecer Soluções
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
              <h2 className="text-3xl font-bold mb-6">O Que Oferecemos</h2>
              <p className="text-lg text-muted-foreground">
                Hospedagem profissional com foco em estabilidade, segurança e performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Servidores Dedicados</h3>
                  <p className="text-muted-foreground text-sm">
                    Infraestrutura exclusiva para garantir máxima performance do seu ERP
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Backup Automático</h3>
                  <p className="text-muted-foreground text-sm">
                    Rotinas diárias de backup com retenção segura e testes de recuperação
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Monitoramento 24/7</h3>
                  <p className="text-muted-foreground text-sm">
                    Vigilância contínua de performance, disponibilidade e segurança
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Suporte Especializado</h3>
                  <p className="text-muted-foreground text-sm">
                    Time técnico pronto para resolver qualquer incidente rapidamente
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Por Que Hospedar com a Price?</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Especialização em ERPs</h4>
                      <p className="text-muted-foreground text-sm">
                        Diferente de data centers genéricos, entendemos as particularidades de ERPs.
                        Sabemos configurar, otimizar e manter ambientes para TOTVS, SAP, Ciagri e outros
                        sistemas críticos de gestão.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Gestão Completa</h4>
                      <p className="text-muted-foreground text-sm">
                        Não fornecemos apenas o servidor. Cuidamos de tudo: sistema operacional,
                        banco de dados, aplicação, backups, monitoramento e atualizações. Você foca
                        no seu negócio, nós cuidamos da infraestrutura.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Custo Previsível</h4>
                      <p className="text-muted-foreground text-sm">
                        Mensalidade fixa que inclui servidor, storage, backup, monitoramento e suporte.
                        Sem surpresas no fim do mês. Dimensionamos a infraestrutura ideal para sua operação.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Infraestrutura e Segurança</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3">Data Center Tier 3</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Redundância elétrica (N+1)</li>
                        <li>• Climatização redundante</li>
                        <li>• Links de internet redundantes</li>
                        <li>• Uptime de 99.98%</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3">Segurança</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Firewall dedicado por servidor</li>
                        <li>• VPN para acesso seguro</li>
                        <li>• Backups criptografados</li>
                        <li>• Monitoramento 24/7 de intrusões</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3">Backup e DR</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Backup diário automático</li>
                        <li>• Retenção configurável (30-90 dias)</li>
                        <li>• Backup offsite (georredundância)</li>
                        <li>• Testes mensais de recuperação</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-3">Monitoramento</h4>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li>• Monitoramento de CPU, RAM, Disco</li>
                        <li>• Alertas proativos de problemas</li>
                        <li>• Dashboard de performance</li>
                        <li>• Relatórios mensais de disponibilidade</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-8">
                <h3 className="font-semibold text-xl mb-4">Precificação Sob Medida</h3>
                <p className="text-muted-foreground mb-6">
                  Cada empresa tem necessidades únicas. Por isso, não trabalhamos com planos engessados.
                  Dimensionamos a infraestrutura ideal para sua operação e oferecemos um valor mensal fixo
                  que inclui tudo.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold mb-1">O que influencia o investimento?</p>
                      <p className="text-sm text-muted-foreground">
                        Número de usuários, volume de dados, necessidade de processamento, requisitos
                        de backup e alta disponibilidade.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold mb-1">O que está incluído?</p>
                      <p className="text-sm text-muted-foreground">
                        Servidor dedicado, storage, sistema operacional, banco de dados, backups diários,
                        monitoramento 24/7, atualizações e suporte técnico ilimitado.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <p className="font-semibold mb-1">Sem surpresas</p>
                      <p className="text-sm text-muted-foreground">
                        Mensalidade fixa, sem custos extras. Você sabe exatamente quanto vai pagar todo mês.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-border text-center">
                  <p className="text-sm text-muted-foreground">
                    Agende uma reunião técnica para análise do seu cenário e receba uma proposta personalizada
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Hospede com Tranquilidade</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Converse com nossos especialistas sobre a melhor infraestrutura para seu negócio
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

export default Servidores;
