import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Leaf, Factory } from "lucide-react";

const Segments = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nossos Segmentos</h1>
            <p className="text-xl text-blue-50">
              11 anos de experiência atendendo os setores mais exigentes do mercado
            </p>
          </div>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <Link to="/segmentos/agronegocio">
              <Card className="overflow-hidden hover:shadow-large transition-all cursor-pointer h-full group">
                <div className="h-64 bg-gradient-to-br from-green-500 to-green-600 flex items-center justify-center group-hover:from-green-600 group-hover:to-green-700 transition-all">
                  <Leaf className="h-32 w-32 text-white" />
                </div>
                <CardContent className="p-8 flex flex-col h-full">
                  <h2 className="font-semibold text-3xl mb-4">Agronegócio</h2>
                  <p className="text-muted-foreground mb-4 text-lg">
                    Especialização em propriedades acima de 2.000 hectares. Dominamos Ciagri
                    e sistemas de gestão rural nas regiões de MT, GO e MG.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Gestão de grandes áreas e culturas</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Controle de safra e custos por hectare</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Gestão de frota e maquinário agrícola</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-green-600 mt-1">✓</span>
                      <span>Pecuária e confinamento</span>
                    </li>
                  </ul>
                  <span className="text-green-600 font-medium inline-flex items-center mt-auto group-hover:translate-x-2 transition-transform">
                    Conheça nossas soluções <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </CardContent>
              </Card>
            </Link>

            <Link to="/segmentos/industria">
              <Card className="overflow-hidden hover:shadow-large transition-all cursor-pointer h-full group">
                <div className="h-64 bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center group-hover:from-blue-600 group-hover:to-blue-700 transition-all">
                  <Factory className="h-32 w-32 text-white" />
                </div>
                <CardContent className="p-8 flex flex-col h-full">
                  <h2 className="font-semibold text-3xl mb-4">Indústria</h2>
                  <p className="text-muted-foreground mb-4 text-lg">
                    Experiência em empresas de médio e grande porte com TOTVS, SAP e Sankhya.
                    Gestão completa da produção em SP e GO.
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>Controle de produção e PCP</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>Gestão de múltiplas filiais</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>Apuração de custos industriais</span>
                    </li>
                    <li className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary mt-1">✓</span>
                      <span>Estoque, logística e rastreabilidade</span>
                    </li>
                  </ul>
                  <span className="text-primary font-medium inline-flex items-center mt-auto group-hover:translate-x-2 transition-transform">
                    Conheça nossas soluções <ArrowRight className="ml-2 h-5 w-5" />
                  </span>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Specialization */}
      <section className="py-8 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Por que Especialização?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Nossa experiência focada em Agronegócio e Indústria nos permite entender
              profundamente os desafios de cada setor. Não somos generalistas – somos
              especialistas que falam a sua língua.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">11</div>
                <p className="text-muted-foreground">Anos de experiência setorial</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">100+</div>
                <p className="text-muted-foreground">Projetos entregues</p>
              </div>
              <div className="bg-background rounded-lg p-6">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <p className="text-muted-foreground">Taxa de satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Segments;
