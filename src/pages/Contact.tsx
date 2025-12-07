import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    cnpj: "",
    email: "",
    phone: "",
    segment: "",
    erp: "",
    units: "",
    users: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Mensagem enviada!",
      description: "Entraremos em contato em breve.",
    });
    setFormData({
      name: "",
      company: "",
      cnpj: "",
      email: "",
      phone: "",
      segment: "",
      erp: "",
      units: "",
      users: "",
      message: "",
    });
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6">Agende sua Reunião Técnica</h1>
            <p className="text-xl text-blue-50">
              Sem compromisso. Vamos analisar seu cenário atual e identificar pontos de otimização no seu ERP.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Formulário de Qualificação</h2>
              <p className="text-muted-foreground mb-6">
                Preencha os dados abaixo para que possamos entender melhor suas necessidades.
              </p>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name">Nome Completo *</Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="company">Empresa *</Label>
                    <Input
                      id="company"
                      value={formData.company}
                      onChange={(e) => handleChange("company", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="cnpj">CNPJ</Label>
                    <Input
                      id="cnpj"
                      value={formData.cnpj}
                      onChange={(e) => handleChange("cnpj", e.target.value)}
                      placeholder="00.000.000/0000-00"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleChange("email", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefone / WhatsApp *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleChange("phone", e.target.value)}
                      required
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="segment">Segmento *</Label>
                  <Select value={formData.segment} onValueChange={(value) => handleChange("segment", value)}>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Selecione seu segmento" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="agronegocio">Agronegócio</SelectItem>
                      <SelectItem value="industria">Indústria</SelectItem>
                      <SelectItem value="cooperativa">Cooperativa</SelectItem>
                      <SelectItem value="outro">Outro</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="erp">Qual ERP utiliza hoje?</Label>
                  <Input
                    id="erp"
                    value={formData.erp}
                    onChange={(e) => handleChange("erp", e.target.value)}
                    placeholder="Ex: TOTVS, SAP, Ciagri, Sankhya..."
                    className="mt-2"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="units">Nº de Unidades/Filiais (Aprox.)</Label>
                    <Input
                      id="units"
                      type="number"
                      value={formData.units}
                      onChange={(e) => handleChange("units", e.target.value)}
                      placeholder="Ex: 3"
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="users">Nº de Usuários do Sistema (Aprox.)</Label>
                    <Input
                      id="users"
                      type="number"
                      value={formData.users}
                      onChange={(e) => handleChange("users", e.target.value)}
                      placeholder="Ex: 25"
                      className="mt-2"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message">Descreva seu principal desafio *</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    required
                    rows={5}
                    className="mt-2"
                    placeholder="Conte-nos sobre seus desafios atuais com o ERP, gargalos operacionais ou necessidades específicas..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Agendar Reunião Técnica
                </Button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-6">
              <div>
                <h2 className="text-3xl font-bold mb-6">Prefere outro canal?</h2>
                <p className="text-muted-foreground mb-8">
                  Entre em contato diretamente pelos nossos canais. Estamos disponíveis 
                  para atender suas necessidades de forma rápida e eficiente.
                </p>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">E-mail</h3>
                        <p className="text-muted-foreground">contato@price.com.br</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Telefone</h3>
                        <p className="text-muted-foreground">(XX) XXXXX-XXXX</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MessageSquare className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">WhatsApp / MS Teams / Skype</h3>
                        <p className="text-muted-foreground">
                          Suporte direto via mensagens instantâneas
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">Localização</h3>
                        <p className="text-muted-foreground">São Paulo, SP</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="bg-secondary rounded-lg p-6 mt-8">
                <h3 className="font-semibold text-lg mb-3">Horário de Atendimento</h3>
                <p className="text-muted-foreground">
                  Segunda a Sexta: 8h às 18h<br />
                  Suporte urgente: Disponível via WhatsApp
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
