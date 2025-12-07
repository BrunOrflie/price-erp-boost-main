import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  Headphones, 
  DollarSign, 
  Settings,
  Database,
  Code,
  Server,
  Briefcase,
  CheckCircle2
} from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Seu ERP, sem burocracia
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-50 leading-relaxed">
              Suporte técnico imediato, custos até 50% menores e adaptação total ao seu processo de negócio
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contato">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-6">
                  Agende sua Reunião Técnica
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/diferenciais">
                <Button size="lg" variant="hero" className="w-full sm:w-auto text-lg px-8 py-6">
                  Conheça Nossos Diferenciais
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ERP Logos Section */}
      <section className="py-12 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Experiência prática nos principais ERPs do mercado
            </h2>
            <p className="text-muted-foreground">
              11 anos trabalhando com as plataformas mais utilizadas no Brasil
            </p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-8 max-w-4xl mx-auto opacity-70">
            <div className="text-2xl font-bold text-primary">Ciagri</div>
            <div className="text-2xl font-bold text-primary">TOTVS</div>
            <div className="text-2xl font-bold text-primary">Sankhya</div>
            <div className="text-2xl font-bold text-primary">SAP</div>
            <div className="text-2xl font-bold text-primary">Senior</div>
            <div className="text-2xl font-bold text-primary">Oracle</div>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Seu ERP está sendo um gargalo?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Empresas de médio e grande porte enfrentam desafios diários com seus ERPs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Headphones className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Suporte lento do ERP?</h3>
                <p className="text-muted-foreground text-sm">
                  Dias de espera para resolver problemas simples que travam sua operação
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Sistema rígido e inflexível?</h3>
                <p className="text-muted-foreground text-sm">
                  Seu processo precisa se adaptar ao sistema ao invés do contrário
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Custos imprevisíveis?</h3>
                <p className="text-muted-foreground text-sm">
                  Treinamentos, ajustes e horas técnicas que explodem o orçamento
                </p>
              </CardContent>
            </Card>
            <Card className="border-2 hover:border-primary transition-colors">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Equipe depende de "heróis"?</h3>
                <p className="text-muted-foreground text-sm">
                  Dependência de pessoas-chave e controles paralelos em Excel
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Soluções completas para otimizar seus sistemas de gestão
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link to="/servicos/consultoria">
              <Card className="h-full hover:shadow-large transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Consultoria de ERPs</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Gestão completa de TOTVS, SAP, Sankhya, Ciagri e mais
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link to="/servicos/desenvolvimento">
              <Card className="h-full hover:shadow-large transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Desenvolvimento</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Software sob medida para suas necessidades específicas
                  </p>
                  <span className="text-accent text-sm font-medium inline-flex items-center">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link to="/servicos/banco-dados">
              <Card className="h-full hover:shadow-large transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-hero rounded-lg flex items-center justify-center mb-4">
                    <Database className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Otimização de BD</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Acelere rotinas e processos críticos do seu negócio
                  </p>
                  <span className="text-primary text-sm font-medium inline-flex items-center">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link to="/servicos/servidores">
              <Card className="h-full hover:shadow-large transition-all hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4">
                    <Server className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-2">Servidores</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    Hospedagem segura e estável para seus sistemas
                  </p>
                  <span className="text-accent text-sm font-medium inline-flex items-center">
                    Saiba mais <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Segments Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Especialistas nos Segmentos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              11 anos de experiência atendendo os setores mais exigentes
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link to="/segmentos/agronegocio">
              <Card className="overflow-hidden hover:shadow-large transition-all cursor-pointer h-full">
                <div className="h-48 bg-gradient-to-br from-green-500 to-green-600"></div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-2xl mb-2">Agronegócio</h3>
                  <p className="text-muted-foreground mb-4">
                    Especialização em propriedades acima de 2.000 hectares. Dominamos Ciagri e sistemas de gestão rural.
                  </p>
                  <span className="text-primary font-medium inline-flex items-center">
                    Conheça nossas soluções <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
            <Link to="/segmentos/industria">
              <Card className="overflow-hidden hover:shadow-large transition-all cursor-pointer h-full">
                <div className="h-48 bg-gradient-to-br from-blue-500 to-blue-600"></div>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-2xl mb-2">Indústria</h3>
                  <p className="text-muted-foreground mb-4">
                    Experiência em empresas de médio e grande porte com TOTVS, SAP e Sankhya. Gestão completa da produção.
                  </p>
                  <span className="text-primary font-medium inline-flex items-center">
                    Conheça nossas soluções <ArrowRight className="ml-1 h-4 w-4" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Nossa solução é direta e adaptável
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              3 pilares que tornam a Price única no mercado
            </p>
          </div>
          <div className="space-y-12 max-w-6xl mx-auto">
            {/* Diferencial 1: Suporte Direto - DESTAQUE OURO */}
            <Card className="border-4 border-primary shadow-large bg-gradient-to-br from-background to-primary/5">
              <CardContent className="p-8 lg:p-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="inline-block px-4 py-1 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-4">
                      DIFERENCIAL #1
                    </div>
                    <h3 className="font-bold text-3xl lg:text-4xl mb-4 text-foreground">
                      Suporte Direto e Imediato
                    </h3>
                    <p className="text-lg text-muted-foreground mb-6">
                      Fale com um técnico sênior por WhatsApp, Teams ou Skype. 
                      <span className="font-semibold text-foreground"> Sem chatbots, sem filas.</span>
                    </p>
                    <div className="bg-primary/10 border-l-4 border-primary p-6 rounded-lg mb-6">
                      <p className="font-bold text-primary text-xl mb-2">
                        Prova Real:
                      </p>
                      <p className="text-foreground text-lg">
                        Em um cliente do Agronegócio, <span className="font-bold text-primary">reduzimos de 35 chamados/mês para apenas 2</span>
                      </p>
                    </div>
                    <Link to="/diferenciais">
                      <Button size="lg" className="w-full sm:w-auto">
                        Veja como funciona
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                  <div className="bg-background rounded-xl p-6 shadow-medium">
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 p-4 bg-destructive/10 rounded-lg">
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-destructive">Suporte Tradicional</p>
                          <p className="text-xs text-muted-foreground">Chatbot → Triagem → Fila → Técnico</p>
                          <p className="text-2xl font-bold text-destructive mt-1">5-7 dias</p>
                        </div>
                      </div>
                      <div className="flex items-center justify-center">
                        <ArrowRight className="h-8 w-8 text-primary rotate-90" />
                      </div>
                      <div className="flex items-center gap-4 p-4 bg-primary/10 rounded-lg">
                        <div className="flex-1">
                          <p className="font-semibold text-sm text-primary">Suporte Price</p>
                          <p className="text-xs text-muted-foreground">Cliente → Técnico Direto</p>
                          <p className="text-2xl font-bold text-primary mt-1">Mesmo dia</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Diferenciais 2 e 3 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="border-2 hover:border-accent transition-all hover:shadow-large">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-6">
                    <DollarSign className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">Custo Total Competitivo</h3>
                  <p className="text-muted-foreground mb-4">
                    Economize até <span className="font-bold text-accent">50%</span> em relação aos fornecedores de ERP. 
                    Nossos contratos mensais dão previsibilidade, incluindo suporte e treinamentos.
                  </p>
                  <div className="bg-accent/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-accent">
                      Substitua custos avulsos por mensalidade fixa
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-primary transition-all hover:shadow-large">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Settings className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-2xl mb-4">Adaptação ao Seu Processo</h3>
                  <p className="text-muted-foreground mb-4">
                    Não forçamos seu negócio a se adaptar ao ERP. 
                    <span className="font-semibold text-foreground"> Nós adaptamos o sistema ao seu fluxo.</span>
                  </p>
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <p className="text-sm font-semibold text-primary">
                      Multi-ERP: independentes de fornecedores
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Pronto para otimizar sua operação?
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Agende sua Reunião Técnica gratuita e descubra o que podemos fazer pelo seu sistema.
            </p>
            <Link to="/contato">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Agendar Reunião Técnica
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
