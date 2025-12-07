import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Users, Award } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Sobre a Price</h1>
            <p className="text-xl text-blue-50">
              11 anos facilitando a vida sistêmica de empresas do Agronegócio e Indústria
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-6 text-center">Nossa História</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                A Price Consultoria e Tecnologia nasceu em 2014 com uma missão clara: facilitar a vida sistêmica
                das empresas. Desde o início, percebemos que muitas organizações enfrentavam desafios similares:
                suporte lento, custos imprevisíveis e sistemas que não se adaptavam às suas necessidades.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                Ao longo de mais de uma década, construímos uma expertise sólida em gestão de ERPs, atendendo
                especialmente os setores de Agronegócio e Indústria. Nossa abordagem diferenciada nos permitiu
                crescer organicamente, sempre mantendo o foco na satisfação dos clientes.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Hoje, somos reconhecidos pela rapidez do suporte, pela independência em relação aos fornecedores
                de ERP e pelo custo-benefício que oferecemos. Não somos apenas mais uma consultoria – somos
                parceiros estratégicos do seu negócio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-hero rounded-lg flex items-center justify-center mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Missão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Facilitar a vida sistêmica das empresas, oferecendo consultoria especializada,
                  suporte direto e soluções tecnológicas que realmente se adaptam ao processo de
                  negócio dos nossos clientes.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-accent rounded-lg flex items-center justify-center mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Visão</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Ser referência nacional em consultoria e gestão de ERPs, reconhecidos pela
                  excelência no atendimento, pela independência técnica e pela capacidade de
                  adaptar qualquer sistema às necessidades do cliente.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Positioning */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nosso Posicionamento</h2>
              <p className="text-lg text-muted-foreground">
                O que nos torna únicos no mercado
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Independência Total</h3>
                  <p className="text-muted-foreground text-sm">
                    Não somos revendedores de nenhum ERP. Atuamos exclusivamente pelo interesse do cliente,
                    recomendando e otimizando o sistema que melhor atende suas necessidades.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Award className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Multi-ERP</h3>
                  <p className="text-muted-foreground text-sm">
                    Experiência comprovada em múltiplos sistemas: TOTVS Protheus, SAP Business One,
                    Sankhya, Ciagri, Senior e outros. Dominamos as melhores práticas de cada plataforma.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Foco no Processo</h3>
                  <p className="text-muted-foreground text-sm">
                    Entendemos que cada empresa tem seu processo único. Nosso trabalho é adaptar
                    a tecnologia ao seu modo de trabalhar, não o contrário.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Parceria de Longo Prazo</h3>
                  <p className="text-muted-foreground text-sm">
                    Não somos fornecedores, somos parceiros. Nosso sucesso está diretamente ligado
                    ao sucesso do seu negócio. Por isso, investimos no relacionamento duradouro.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-4">Nossa Equipe</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Profissionais experientes dedicados a facilitar sua vida sistêmica
            </p>

            <div className="space-y-6">
              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3">Time de Consultores Especializados</h3>
                      <p className="text-muted-foreground mb-4">
                        Mais de uma década de experiência prática em projetos reais de Agronegócio e Indústria.
                        Nossos consultores dominam TOTVS, SAP, Ciagri, Sankhya e outros ERPs, garantindo que você
                        fale com quem realmente entende do assunto.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">TOTVS Protheus</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">SAP Business One</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Ciagri</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Sankhya</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-accent">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-10 w-10 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3">Desenvolvedores e Integradores</h3>
                      <p className="text-muted-foreground mb-4">
                        Quando o ERP padrão não atende 100%, nossa equipe de desenvolvimento cria soluções
                        sob medida. Especialistas em AdvPL, SQL, Python e JavaScript desenvolvem módulos
                        customizados e integrações que se encaixam perfeitamente na sua operação.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">AdvPL</span>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">SQL Server / Oracle</span>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">APIs REST</span>
                        <span className="px-3 py-1 bg-accent/10 text-accent text-xs rounded-full">Python</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="h-10 w-10 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-3">Especialistas em Infraestrutura</h3>
                      <p className="text-muted-foreground mb-4">
                        DBAs e administradores de sistemas garantem que sua infraestrutura funcione com
                        máxima performance e segurança. Otimização de banco de dados, gestão de servidores
                        e monitoramento proativo para que você nunca tenha surpresas desagradáveis.
                      </p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">DBA Senior</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Otimização de Queries</span>
                        <span className="px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">Infraestrutura Cloud</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 bg-secondary rounded-xl p-8 text-center">
              <p className="text-lg font-semibold mb-2">Atendimento Humanizado</p>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quando você nos contata, fala direto com um técnico especializado. Não é chatbot, não é
                atendente de primeiro nível. É a pessoa que vai resolver o seu problema, de verdade.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Nossos Valores</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Transparência</h3>
                  <p className="text-muted-foreground">
                    Comunicação clara sobre custos, prazos e limitações. Sem surpresas desagradáveis.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Agilidade</h3>
                  <p className="text-muted-foreground">
                    Respostas rápidas e soluções eficientes. Valorizamos o tempo do cliente.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Excelência Técnica</h3>
                  <p className="text-muted-foreground">
                    Equipe altamente qualificada e em constante atualização tecnológica.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Compromisso com Resultados</h3>
                  <p className="text-muted-foreground">
                    Medimos nosso sucesso pelo sucesso do cliente. Buscamos sempre o melhor retorno sobre o investimento.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
