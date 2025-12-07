import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, TrendingUp, Shield, Users } from "lucide-react";

const Agronegocio = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Leaf className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Consultoria de ERP para o Agronegócio
            </h1>
            <p className="text-xl text-green-50 mb-8">
              Especialização em propriedades acima de 2.000 hectares. Dominamos Ciagri 
              e sistemas de gestão rural.
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
              Desafios do Agronegócio que Conhecemos Profundamente
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Gestão de Grandes Áreas</h3>
                  <p className="text-muted-foreground">
                    Controle de múltiplas fazendas, talhões e culturas em propriedades 
                    com milhares de hectares. Rastreabilidade completa da produção.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Controle de Safra</h3>
                  <p className="text-muted-foreground">
                    Planejamento de safra, controle de insumos, acompanhamento de custos 
                    de produção por hectare e análise de rentabilidade.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Maquinário e Manutenção</h3>
                  <p className="text-muted-foreground">
                    Gestão de frota agrícola, controle de manutenções preventivas e 
                    corretivas, consumo de combustível e produtividade de máquinas.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-3">Pecuária e Confinamento</h3>
                  <p className="text-muted-foreground">
                    Gestão de rebanho, controle de GPD (Ganho de Peso Diário), rastreamento 
                    individual, controle sanitário e nutrição animal.
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
              Nossa Expertise no Setor
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Sistema Ciagri</h3>
                <p className="text-muted-foreground">
                  Experiência consolidada no ERP líder do Agronegócio brasileiro. 
                  Configuração, otimização e suporte especializado.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Gestão de Custos</h3>
                <p className="text-muted-foreground">
                  Implementação de centro de custos por cultura, talhão e atividade. 
                  Análise de rentabilidade e tomada de decisão baseada em dados.
                </p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="h-10 w-10 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3">Rastreabilidade</h3>
                <p className="text-muted-foreground">
                  Atendimento a normativas de rastreabilidade, controle fitossanitário 
                  e certificações (Soja Plus, Rainforest, etc.).
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
              Nosso ICP no Agronegócio está concentrado nas principais regiões produtoras:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="border-2 border-green-500">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">Mato Grosso</h3>
                  <p className="text-muted-foreground">
                    Maior produtor de grãos do Brasil. Expertise em grandes propriedades 
                    de soja, milho e algodão.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-green-500">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">Goiás</h3>
                  <p className="text-muted-foreground">
                    Forte presença na região do Cerrado. Atendimento a produtores de 
                    grãos e pecuária intensiva.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-2 border-green-500">
                <CardContent className="p-6 text-center">
                  <h3 className="font-bold text-xl mb-2">Minas Gerais</h3>
                  <p className="text-muted-foreground">
                    Especialização em cafeicultura, pecuária leiteira e produção 
                    diversificada do Cerrado mineiro.
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
              Resultados Reais no Campo
            </h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Users className="h-12 w-12 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Propriedade de 15.000 hectares - MT</h3>
                      <p className="text-muted-foreground mb-4">
                        Implementação completa do Ciagri com foco em controle de custos por talhão. 
                        Redução de 30% no tempo de fechamento de safra e aumento de 15% na 
                        visibilidade de rentabilidade por cultura.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Soja
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Milho
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Ciagri
                        </span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-8">
                  <div className="flex items-start gap-4">
                    <Users className="h-12 w-12 text-green-500 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-xl mb-2">Confinamento 8.000 cabeças - GO</h3>
                      <p className="text-muted-foreground mb-4">
                        Customização do sistema para controle individual de animais, gestão de dietas 
                        e rastreabilidade completa. Redução de 40% no retrabalho manual e ganho de 
                        precisão no controle de GPD.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Pecuária
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Confinamento
                        </span>
                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
                          Rastreabilidade
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
      <section className="py-20 bg-gradient-to-br from-green-600 to-green-700">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Pronto para otimizar sua gestão rural?
            </h2>
            <p className="text-xl mb-8 text-green-50">
              Fale com especialistas que entendem do campo e de tecnologia
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

export default Agronegocio;
