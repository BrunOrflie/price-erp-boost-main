import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Database, Code, Server, ArrowRight } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nossos Serviços</h1>
            <p className="text-xl text-blue-50">
              Soluções completas para otimizar seus sistemas de gestão e processos de TI
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Consultoria */}
            <Card className="overflow-hidden hover:shadow-large transition-all h-full">
              <div className="h-48 bg-gradient-hero flex items-center justify-center">
                <Database className="h-20 w-20 text-white" />
              </div>
              <CardContent className="p-8 flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4">Consultoria de Sistemas (ERPs)</h2>
                <p className="text-muted-foreground mb-6">
                  Gestão completa de ERPs incluindo TOTVS, SAP, Sankhya, Ciagri e outros.
                  Suporte direto, treinamentos e configurações personalizadas.
                </p>
                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Suporte técnico imediato via WhatsApp/Teams</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Treinamentos personalizados para sua equipe</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Configurações e otimizações do sistema</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Acompanhamento contínuo do uso do ERP</span>
                  </li>
                </ul>
                <Link to="/servicos/consultoria" className="mt-auto">
                  <Button className="w-full">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Desenvolvimento */}
            <Card className="overflow-hidden hover:shadow-large transition-all h-full">
              <div className="h-48 bg-gradient-accent flex items-center justify-center">
                <Code className="h-20 w-20 text-white" />
              </div>
              <CardContent className="p-8 flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4">Desenvolvimento de Software</h2>
                <p className="text-muted-foreground mb-6">
                  Criação de módulos personalizados, integrações entre sistemas e desenvolvimento
                  de softwares sob medida para suas necessidades específicas.
                </p>
                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Módulos customizados para seu ERP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Integrações entre sistemas diferentes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Substituição de planilhas por sistemas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Desenvolvimento de sistemas do zero</span>
                  </li>
                </ul>
                <Link to="/servicos/desenvolvimento" className="mt-auto">
                  <Button variant="default" className="w-full bg-accent hover:bg-accent/90">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Banco de Dados */}
            <Card className="overflow-hidden hover:shadow-large transition-all h-full">
              <div className="h-48 bg-gradient-hero flex items-center justify-center">
                <Database className="h-20 w-20 text-white" />
              </div>
              <CardContent className="p-8 flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4">Otimização de Banco de Dados</h2>
                <p className="text-muted-foreground mb-6">
                  Análise e otimização de performance do banco de dados. Acelere rotinas críticas
                  e aumente a eficiência operacional.
                </p>
                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Análise de gargalos de performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Otimização de queries e índices</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Redução de tempo em rotinas críticas</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Manutenção preventiva de dados</span>
                  </li>
                </ul>
                <Link to="/servicos/banco-dados" className="mt-auto">
                  <Button className="w-full">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Servidores */}
            <Card className="overflow-hidden hover:shadow-large transition-all h-full">
              <div className="h-48 bg-gradient-accent flex items-center justify-center">
                <Server className="h-20 w-20 text-white" />
              </div>
              <CardContent className="p-8 flex flex-col h-full">
                <h2 className="text-2xl font-bold mb-4">Servidores e Hospedagem</h2>
                <p className="text-muted-foreground mb-6">
                  Infraestrutura segura e estável para hospedar seus sistemas. Monitoramento
                  24/7 e suporte técnico especializado.
                </p>
                <ul className="space-y-2 mb-6 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Hospedagem em servidores dedicados</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Backup automático e segurança</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Monitoramento contínuo de performance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent mt-1">•</span>
                    <span>Suporte técnico especializado</span>
                  </li>
                </ul>
                <Link to="/servicos/servidores" className="mt-auto">
                  <Button variant="default" className="w-full bg-accent hover:bg-accent/90">
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Não encontrou o que procura?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Entre em contato conosco e vamos encontrar a melhor solução para o seu negócio
            </p>
            <Link to="/contato">
              <Button size="lg">
                Fale com Nossos Especialistas
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
