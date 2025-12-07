import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle2, XCircle, HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Differentials = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Nossos Diferenciais</h1>
            <p className="text-xl text-blue-50">
              Descubra por que somos a melhor escolha para sua gestão de ERP
            </p>
          </div>
        </div>
      </section>

      {/* Differential 1: Direct Support */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                1. Suporte Direto: Adeus, Tickets!
              </h2>
              <p className="text-lg text-muted-foreground">
                Eliminamos a burocracia e conectamos você diretamente com quem resolve
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Traditional Support */}
              <Card className="border-2 border-destructive">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <XCircle className="h-6 w-6 text-destructive" />
                    <h3 className="font-semibold text-xl">Suporte Tradicional</h3>
                  </div>
                  <ol className="space-y-3">
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="font-semibold text-foreground">1.</span>
                      <span>Cliente abre ticket no sistema ou fala com chatbot</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="font-semibold text-foreground">2.</span>
                      <span>Ticket passa por triagem (1-2 dias de espera)</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="font-semibold text-foreground">3.</span>
                      <span>Entra em fila de prioridade (mais 2-3 dias)</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="font-semibold text-foreground">4.</span>
                      <span>Finalmente um técnico atende o chamado</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="font-semibold text-foreground">5.</span>
                      <span>Se precisar de mais informações, volta para a fila</span>
                    </li>
                  </ol>
                  <div className="mt-6 p-4 bg-destructive/10 rounded-lg">
                    <p className="font-semibold text-destructive">
                      Tempo médio de resolução: 5-7 dias
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Price Support */}
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-4">
                    <CheckCircle2 className="h-6 w-6 text-primary" />
                    <h3 className="font-semibold text-xl">Suporte Price</h3>
                  </div>
                  <ol className="space-y-3">
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="font-semibold text-foreground">1.</span>
                      <span>Cliente envia mensagem direto via WhatsApp ou Teams</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="font-semibold text-foreground">2.</span>
                      <span>Técnico especializado responde imediatamente</span>
                    </li>
                    <li className="flex gap-3 text-muted-foreground">
                      <span className="font-semibold text-foreground">3.</span>
                      <span>Problema resolvido ou agendamento feito na hora</span>
                    </li>
                  </ol>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                    <p className="font-semibold text-primary">
                      Tempo médio de primeira resposta: Menos de 1 hora
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary rounded-xl p-8 text-center">
              <p className="text-xl font-semibold mb-2">Resultado Real</p>
              <p className="text-muted-foreground">
                <span className="text-primary font-bold text-2xl">Reduzimos de 35 para 2 chamados mensais</span> nos nossos clientes. 
                Por quê? Porque resolvemos os problemas de verdade, na primeira vez.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differential 2: Cost-Benefit */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                2. Custo-Benefício Real
              </h2>
              <p className="text-lg text-muted-foreground">
                Transparência total de custos e economia comprovada
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Traditional Costs */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4">Modelo Tradicional (ERP + Suporte Avulso)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Licença ERP</span>
                      <span className="font-semibold">R$ 3.500/mês</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Suporte por chamado (média 10/mês x R$ 250)</span>
                      <span className="font-semibold">R$ 2.500/mês</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Treinamentos avulsos</span>
                      <span className="font-semibold">R$ 1.200/mês</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Ajustes e customizações</span>
                      <span className="font-semibold">R$ 800/mês</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 text-lg">
                      <span className="font-bold">Total Mensal</span>
                      <span className="font-bold text-destructive">R$ 8.000</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Price Costs */}
              <Card className="border-2 border-primary">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-xl mb-4">Modelo Price (Tudo Incluído)</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Consultoria ERP</span>
                      <span className="font-semibold">Incluído</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Suporte ilimitado direto</span>
                      <span className="font-semibold">Incluído</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Treinamentos personalizados</span>
                      <span className="font-semibold">Incluído</span>
                    </div>
                    <div className="flex justify-between items-center pb-2 border-b">
                      <span className="text-muted-foreground">Configurações e otimizações</span>
                      <span className="font-semibold">Incluído</span>
                    </div>
                    <div className="flex justify-between items-center pt-3 text-lg">
                      <span className="font-bold">Total Mensal</span>
                      <span className="font-bold text-primary">R$ 4.000</span>
                    </div>
                  </div>
                  <div className="mt-4 p-3 bg-primary/10 rounded-lg text-center">
                    <p className="font-semibold text-primary">Economia de 50%</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="bg-background rounded-xl p-8">
              <h3 className="font-semibold text-xl mb-4 text-center">Sem Surpresas</h3>
              <p className="text-muted-foreground text-center max-w-3xl mx-auto">
                Com o contrato mensal previsível da Price, você sabe exatamente quanto vai pagar. 
                Sem custos escondidos, sem cobranças por chamado, sem surpresas no fim do mês. 
                Tudo que você precisa para seu ERP funcionar perfeitamente está incluído.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Differential 3: Adaptation */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                3. Adaptação ao Seu Processo
              </h2>
              <p className="text-lg text-muted-foreground">
                O sistema trabalha para você, não o contrário
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Independência Total</h3>
                  <p className="text-muted-foreground text-sm">
                    Não somos revendedores de ERP. Trabalhamos com TOTVS, SAP, Sankhya, Ciagri e outros, 
                    sempre a favor do seu interesse.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Multi-ERP</h3>
                  <p className="text-muted-foreground text-sm">
                    Experiência em múltiplas plataformas. Se você troca de ERP, continuamos te atendendo 
                    sem problemas.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Customização Real</h3>
                  <p className="text-muted-foreground text-sm">
                    Desenvolvemos módulos e integrações sob medida quando o ERP não atende 100% sua necessidade.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary rounded-xl p-8">
              <h3 className="font-semibold text-xl mb-6 text-center">Como Adaptamos o Sistema ao Seu Processo</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Antes (Abordagem Tradicional)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Você precisa mudar seu processo para usar o ERP</span>
                    </li>
                    <li className="flex gap-2">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Excel complementa o que o sistema não faz</span>
                    </li>
                    <li className="flex gap-2">
                      <XCircle className="h-5 w-5 text-destructive flex-shrink-0 mt-0.5" />
                      <span>Sua equipe trabalha com retrabalho</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Depois (Abordagem Price)</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Configuramos o ERP para o seu processo</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Desenvolvemos o que falta para eliminar Excel</span>
                    </li>
                    <li className="flex gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Sua equipe trabalha com eficiência</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Process Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Nosso Processo Comercial
              </h2>
              <p className="text-lg text-muted-foreground">
                Transparência total: veja como funciona desde o primeiro contato até a parceria estabelecida
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card className="border-2 border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    1
                  </div>
                  <h3 className="font-bold text-lg mb-3">Contato Inicial</h3>
                  <p className="text-muted-foreground text-sm">
                    Você nos contata via site, WhatsApp ou email. Qualificamos sua necessidade
                    e agendamos uma reunião técnica.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    2
                  </div>
                  <h3 className="font-bold text-lg mb-3">Reunião Técnica</h3>
                  <p className="text-muted-foreground text-sm">
                    Conversamos sobre seu ERP atual, dores, processos e objetivos. Identificamos
                    oportunidades de melhoria.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    3
                  </div>
                  <h3 className="font-bold text-lg mb-3">Proposta</h3>
                  <p className="text-muted-foreground text-sm">
                    Apresentamos plano mensal fixo ou proposta customizada. Detalhamos escopo,
                    investimento e benefícios esperados.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 border-primary">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    4
                  </div>
                  <h3 className="font-bold text-lg mb-3">Contrato</h3>
                  <p className="text-muted-foreground text-sm">
                    Assinamos contrato mensal (sem fidelidade) e iniciamos o trabalho. Você está
                    sempre no controle.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-secondary rounded-xl p-8 mt-12 text-center">
              <p className="text-lg font-semibold mb-2">Compromisso com Transparência</p>
              <p className="text-muted-foreground">
                Sem pegadinhas, sem fidelidade forçada, sem custos escondidos. Você contrata
                porque vê valor, não porque está preso em um contrato.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perguntas Frequentes</h2>
              <p className="text-muted-foreground">
                Respostas para as principais objeções e dúvidas
              </p>
            </div>

            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">"Acho que é caro"</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Entendemos a preocupação com custos. Por isso, mostramos o custo total de propriedade (TCO) 
                  do seu ERP atual: licença + suporte + treinamentos + horas técnicas. Na maioria dos casos, 
                  nosso modelo representa uma economia de até 50%, além de oferecer muito mais valor agregado 
                  com suporte direto e ilimitado.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">"Já tenho o suporte do fornecedor"</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Perfeito! Não somos concorrentes do suporte padrão, somos complementares. Atuamos a favor 
                  do seu time, eliminando filas de chamados e dando respostas imediatas. Muitos de nossos 
                  clientes mantêm a licença com o fornecedor e o suporte conosco, tendo o melhor dos dois mundos.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">"Nosso processo é muito específico"</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Essa é exatamente a situação onde mais brilhamos! Processos específicos são nosso forte. 
                  Temos 11 anos adaptando ERPs para processos únicos do Agronegócio e da Indústria. Se o ERP 
                  não atende 100%, desenvolvemos módulos customizados ou integrações que resolvem.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">"E se eu quiser trocar de ERP?"</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sem problema! Como somos independentes e trabalhamos com múltiplas plataformas (TOTVS, SAP, 
                  Sankhya, Ciagri, etc.), continuamos te atendendo normalmente. Inclusive, podemos te ajudar 
                  no processo de migração e escolha do novo sistema.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-background rounded-lg px-6">
                <AccordionTrigger className="text-left">
                  <span className="font-semibold">"Como funciona o suporte fora do horário comercial?"</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Nosso horário padrão é de segunda a sexta, das 8h às 18h. Para situações urgentes fora 
                  desse horário, temos um canal de WhatsApp de emergência. Avaliamos a criticidade e, se 
                  necessário, acionamos a equipe imediatamente. Tudo isso sem custos extras.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Convencido? Vamos conversar!
            </h2>
            <p className="text-xl mb-8 text-blue-50">
              Agende uma análise gratuita e veja como podemos transformar sua gestão de ERP
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

export default Differentials;
