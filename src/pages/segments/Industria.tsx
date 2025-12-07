import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Factory, TrendingUp, Shield, Users } from "lucide-react";

const Industria = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Factory className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Otimização de Sistemas para a Indústria
            </h1>
            <p className="text-xl text-blue-50 mb-8">
              Experiência em empresas de médio e grande porte com TOTVS, SAP e Sankhya. 
              Gestão completa da produção.
            </p>
            <Link to="/contato">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Fale com Nossos Especialistas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Desafios da Indústria que Resolvemos
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Controle de Produção</h3>
                  <p className="text-muted-foreground">
                    Gestão de ordens de produção, controle de qualidade, rastreabilidade 
                    de lotes e apontamento de mão de obra em chão de fábrica.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Múltiplas Filiais</h3>
                  <p className="text-muted-foreground">
                    Consolidação de informações de múltiplos CNPJs, transferências entre 
                    filiais e visão gerencial unificada da operação.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Custos Industriais</h3>
                  <p className="text-muted-foreground">
                    Apuração de custos de produção (diretos e indiretos), análise de 
                    rentabilidade por produto e controle de perdas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Estoque e Logística</h3>
                  <p className="text-muted-foreground">
                    Gestão de estoque (MP, PA e PA), WMS, controle de validade, inventários 
                    e otimização de armazenamento.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Experiência em ERPs Industriais
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Factory className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3">TOTVS Protheus</h3>
                <p className="text-muted-foreground">
                  Maior experiência com o ERP mais usado na indústria brasileira. Módulos 
                  de Produção, PCP, Custos e Qualidade.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3">SAP Business One</h3>
                <p className="text-muted-foreground">
                  Implementação e suporte do SAP para indústrias de médio porte. 
                  Integração com sistemas legados.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Sankhya</h3>
                <p className="text-muted-foreground">
                  Experiência com Sankhya W e Sankhya Omni. Foco em indústrias 
                  com operação multi-empresa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Focus */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">
              Atuação Regional Focada
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-lg">
              Concentramos nossa atuação nos principais polos industriais:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">São Paulo</h3>
                  <p className="text-muted-foreground">
                    Grande ABC, interior paulista e região metropolitana. Indústrias 
                    de transformação, metalúrgicas e alimentícias.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">Goiás</h3>
                  <p className="text-muted-foreground">
                    Região metropolitana de Goiânia e Anápolis. Foco em indústrias 
                    de alimentos, farmacêuticas e automotivas.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12">
              Resultados Reais na Indústria
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Users className="h-12 w-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Indústria Alimentícia - 3 Filiais - SP</h3>
                      <p className="text-muted-foreground mb-4">
                        Unificação de processos entre 3 CNPJs no TOTVS Protheus. Implementação 
                        de controle de rastreabilidade completo (da MP ao produto acabado). Redução 
                        de 50% no tempo de apuração de custos mensais.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          Alimentos
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          TOTVS
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          Rastreabilidade
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Users className="h-12 w-12 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Metalúrgica de Médio Porte - GO</h3>
                      <p className="text-muted-foreground mb-4">
                        Migração de sistema legado para SAP Business One. Implementação de PCP 
                        integrado com chão de fábrica. Aumento de 35% na precisão do estoque e 
                        redução de 25% no tempo de setup de produção.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          Metalúrgica
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          SAP
                        </span>
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                          PCP
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Pronto para otimizar sua produção?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Fale com especialistas que entendem da indústria e de sistemas ERP
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

export default Industria;
