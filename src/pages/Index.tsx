import { Link } from "react-router-dom";
import { ArrowRight, BarChart3, Boxes, CheckCircle2, Clock3, Database, Headphones, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const services = [
  {
    title: "Consultoria completa",
    description: "Mapeamento de processos, parametrização e entregas rápidas para destravar o ERP",
    icon: Boxes,
    link: "/servicos/consultoria"
  },
  {
    title: "Desenvolvimento sob medida",
    description: "Extensões, integrações e automações alinhadas ao seu fluxo de negócio",
    icon: Database,
    link: "/servicos/desenvolvimento"
  },
  {
    title: "Performance e infraestrutura",
    description: "Ajustes finos, tuning de banco e gestão de servidores para alta disponibilidade",
    icon: ShieldCheck,
    link: "/servicos/servidores"
  }
];

const segments = [
  {
    title: "Agronegócio",
    description: "Gestão de safras, estoques, contratos e rastreabilidade para produtores e tradings",
    link: "/segmentos/agronegocio"
  },
  {
    title: "Indústria",
    description: "Planejamento de produção, custos e cadeia de suprimentos com indicadores em tempo real",
    link: "/segmentos/industria"
  }
];

const proofPoints = [
  {
    title: "Suporte imediato",
    description: "Atendimento técnico sem burocracia e com contato direto dos especialistas",
    icon: Headphones
  },
  {
    title: "Menos custo surpresa",
    description: "Planejamento transparente, contratos claros e redução média de 50% em horas externas",
    icon: BarChart3
  },
  {
    title: "Implantações seguras",
    description: "Governança de mudanças, backups validados e planos de contingência testados",
    icon: ShieldCheck
  },
  {
    title: "Resultados mensuráveis",
    description: "Dashboards e SLAs acompanhados mês a mês com indicadores combinados",
    icon: CheckCircle2
  }
];

const onboardingSteps = [
  {
    title: "Diagnóstico em 30 minutos",
    description: "Entendimento dos gargalos do ERP e priorização das demandas críticas da operação",
    icon: Headphones
  },
  {
    title: "Plano de ataque em 72h",
    description: "Roadmap com responsáveis definidos, backlog inicial e janelas de implantação alinhadas",
    icon: Clock3
  },
  {
    title: "V0 em produção",
    description: "Squad dedicado para ajustes, monitoramento e estabilização da primeira versão",
    icon: ShieldCheck
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/80 to-blue-600 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.08),transparent_25%)]" />
        <div className="container mx-auto px-4 py-16 lg:py-24 relative">
          <div className="max-w-4xl space-y-6">
            <Badge variant="secondary" className="text-primary font-semibold">
              ERP sem fila de suporte
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Atendimento técnico imediato e evoluções que acompanham seu negócio
            </h1>
            <p className="text-lg lg:text-xl text-blue-50 max-w-3xl">
              A Price Consultoria combina experiência prática em ERP, infraestrutura e desenvolvimento para manter sua operação rodando sem gargalos.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link to="/contato">
                <Button size="lg" variant="secondary">
                  Falar com um especialista
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/diferenciais">
                <Button size="lg" className="bg-white text-primary hover:bg-blue-50">
                  Ver como trabalhamos
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-4 text-blue-100">
              <div className="flex items-center gap-2">
                <Clock3 className="h-5 w-5" />
                <span>Tempo médio de resposta: minutos</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5" />
                <span>Mais de 11 anos em projetos de ERP</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary/40">
        <div className="container mx-auto px-4 grid gap-6 lg:grid-cols-3">
          <Card className="lg:col-span-1 border-primary/30">
            <CardContent className="p-6 space-y-4">
              <p className="text-sm uppercase tracking-wide text-primary font-semibold">Foco em continuidade</p>
              <h2 className="text-2xl font-bold">Trabalhamos lado a lado com sua equipe</h2>
              <p className="text-muted-foreground">
                Squad com consultores, desenvolvedores e DBAs dedicados ao seu cenário: TOTVS, SAP, Sankhya, Senior, Oracle ou CIAGRI.
              </p>
              <Separator />
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Onboarding técnico em até 10 dias</p>
                <p>• Acompanhamento semanal de demandas</p>
                <p>• Planos de melhorias contínuas</p>
              </div>
            </CardContent>
          </Card>

          {services.map((service) => (
            <Card key={service.title} className="border-border hover:border-primary transition-colors">
              <CardContent className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <service.icon className="h-10 w-10 text-primary" />
                  <div>
                    <p className="text-sm font-medium text-primary">Serviço</p>
                    <h3 className="text-xl font-semibold">{service.title}</h3>
                  </div>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
                <Link to={service.link} className="inline-flex items-center text-primary font-medium">
                  Ver detalhes
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-14 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div>
              <Badge variant="outline" className="text-primary border-primary">Segmentos</Badge>
              <h2 className="text-3xl font-bold mt-3">Especialistas em operação crítica</h2>
              <p className="text-muted-foreground max-w-2xl mt-2">
                Projetos conduzidos por consultores que já atuaram em chão de fábrica e em fazendas, falando a linguagem do negócio e do TI.
              </p>
            </div>
            <Link to="/segmentos">
              <Button variant="outline" className="border-primary text-primary">
                Ver todos os segmentos
              </Button>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {segments.map((segment) => (
              <Card key={segment.title} className="border-border hover:border-primary transition-colors">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-primary">{segment.title}</Badge>
                  </div>
                  <p className="text-muted-foreground">{segment.description}</p>
                  <Link to={segment.link} className="inline-flex items-center text-primary font-medium">
                    Explorar a atuação
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-primary/5">
        <div className="container mx-auto px-4 space-y-8">
          <div className="max-w-3xl space-y-3">
            <Badge variant="secondary" className="text-primary bg-primary/10">
              Pronto para subir no V0
            </Badge>
            <h2 className="text-3xl font-bold">Processo rápido para liberar a primeira versão</h2>
            <p className="text-muted-foreground">
              Estruturamos o início do projeto para colocar seu ERP em operação estável o quanto antes, sem burocracia e com
              comunicação direta com o time responsável.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {onboardingSteps.map((step) => (
              <Card key={step.title} className="border-primary/20 bg-background">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <step.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-10 space-y-3">
            <Badge variant="outline" className="text-primary border-primary">Por que a Price?</Badge>
            <h2 className="text-3xl font-bold">Time único para ERP, dados e infraestrutura</h2>
            <p className="text-muted-foreground">
              Integramos consultoria funcional, desenvolvimento e DBAs para entregar soluções completas sem repassar o problema para outros fornecedores.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {proofPoints.map((item) => (
              <Card key={item.title} className="border-border bg-background">
                <CardContent className="p-6 space-y-3">
                  <div className="flex items-center gap-3">
                    <item.icon className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
