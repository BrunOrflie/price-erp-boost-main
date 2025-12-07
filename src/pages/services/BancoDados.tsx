import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Database } from "lucide-react";

const BancoDados = () => {
  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <Database className="h-16 w-16 mx-auto mb-6" />
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">
              Otimização de Banco de Dados
            </h1>
            <p className="text-xl text-blue-50 mb-8">
              Acelere rotinas críticas e aumente a performance do seu sistema com análise especializada
            </p>
            <Link to="/contato">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                Acelerar Meu Sistema
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
              <h2 className="text-3xl font-bold mb-6">O Que Fazemos</h2>
              <p className="text-lg text-muted-foreground">
                Análise profunda e otimização do banco de dados para garantir máxima performance
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Análise de Gargalos</h3>
                  <p className="text-muted-foreground text-sm">
                    Identificamos queries lentas, tabelas mal indexadas e processos ineficientes
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Otimização de Queries</h3>
                  <p className="text-muted-foreground text-sm">
                    Reescrevemos consultas complexas para reduzir drasticamente o tempo de execução
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Criação de Índices</h3>
                  <p className="text-muted-foreground text-sm">
                    Implementamos índices estratégicos que aceleram as operações mais críticas
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">Manutenção Preventiva</h3>
                  <p className="text-muted-foreground text-sm">
                    Rotinas de limpeza e manutenção que previnem degradação de performance
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Por Que Otimizar o Banco de Dados?</h3>
                <div className="space-y-4">
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Rotinas Críticas Lentas</h4>
                      <p className="text-muted-foreground text-sm">
                        Processos que deveriam levar minutos estão demorando horas. Fechamento de mês,
                        cálculo de custos, geração de relatórios - otimizamos as queries para reduzir
                        drasticamente esses tempos.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Sistema Travando em Horários de Pico</h4>
                      <p className="text-muted-foreground text-sm">
                        Quando múltiplos usuários acessam simultaneamente, o sistema fica lento. Identificamos
                        e eliminamos locks, deadlocks e gargalos de concorrência.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <h4 className="font-semibold mb-2">Base de Dados Crescendo Sem Controle</h4>
                      <p className="text-muted-foreground text-sm">
                        Dados históricos acumulados que nunca foram arquivados. Implementamos estratégias
                        de particionamento, arquivamento e limpeza controlada.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h3 className="text-2xl font-bold mb-4">Bancos de Dados Suportados</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <p className="font-semibold">SQL Server</p>
                      <p className="text-xs text-muted-foreground">Microsoft</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <p className="font-semibold">Oracle</p>
                      <p className="text-xs text-muted-foreground">Database</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <p className="font-semibold">PostgreSQL</p>
                      <p className="text-xs text-muted-foreground">Open Source</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <p className="font-semibold">MySQL</p>
                      <p className="text-xs text-muted-foreground">MariaDB</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <p className="font-semibold">DB2</p>
                      <p className="text-xs text-muted-foreground">IBM</p>
                    </CardContent>
                  </Card>
                  <Card className="text-center">
                    <CardContent className="p-4">
                      <p className="font-semibold">Firebird</p>
                      <p className="text-xs text-muted-foreground">Interbase</p>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="bg-secondary rounded-xl p-8">
                <h3 className="font-semibold text-xl mb-4">Nosso Processo</h3>
                <ol className="space-y-3">
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">1.</span>
                    <span className="text-muted-foreground">Diagnóstico: Identificamos as queries mais lentas e processos críticos</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">2.</span>
                    <span className="text-muted-foreground">Análise: Estudamos o plano de execução e estrutura das tabelas</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">3.</span>
                    <span className="text-muted-foreground">Otimização: Criamos índices, reescrevemos queries e ajustamos configurações</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">4.</span>
                    <span className="text-muted-foreground">Validação: Testamos em ambiente controlado antes de aplicar em produção</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-semibold text-primary">5.</span>
                    <span className="text-muted-foreground">Monitoramento: Acompanhamos os resultados e fazemos ajustes finos</span>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">Acelere Suas Rotinas</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Agende uma análise e descubra como podemos tornar seu sistema mais rápido
            </p>
            <Link to="/contato">
              <Button size="lg">
                Solicitar Análise
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BancoDados;
