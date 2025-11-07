---
title: "Guia AWS Cloud Practitioner 2025"
subtitle: "Do zero à certificação CLF-C02"
author: "Comunidade Cloud"
edition: "3ª edição revista e ampliada"
last_update: "2025-11-07"
license: "Todos os direitos reservados"
description: "Ebook completo com fundamentos, serviços, estratégia de estudo, simulados e checklists para a certificação AWS Certified Cloud Practitioner."
---

# Capa

**Guia AWS Cloud Practitioner 2025**  
Do zero à certificação CLF-C02  
Versão revista e ampliada • Novembro de 2025  
Disponível em: `https://github.com/...` (atualize com a URL final do projeto)

> Este ebook foi preparado para ajudar você a dominar os fundamentos da AWS e conquistar a certificação **AWS Certified Cloud Practitioner** com foco no exame **CLF-C02**. Use o material para estudos individuais, treinamentos internos ou como complemento a cursos presenciais.

---

# Como usar este ebook

- Cada capítulo termina com **resumos acionáveis**, **perguntas de revisão** e **links complementares**.  
- Use os ícones abaixo para identificar rapidamente o tipo de conteúdo:
  - 💡 **Insight**: dica prática do mercado.
  - 🛠️ **Ferramenta**: serviço ou recurso AWS.
  - ⚠️ **Atenção**: pontos que costumam aparecer na prova.
  - ✅ **Checklist**: tarefas para marcar progresso.
- Combine a leitura com laboratórios práticos (mesmo no Free Tier) e os simulados ao final do ebook.

---

# Sumário

1. [Visão Geral da Certificação](#1-visão-geral-da-certificação)
2. [Fundamentos de Computação em Nuvem](#2-fundamentos-de-computação-em-nuvem)
3. [Governança de Contas e Acesso](#3-governança-de-contas-e-acesso)
4. [Serviços Fundamentais da AWS](#4-serviços-fundamentais-da-aws)
5. [Segurança, Conformidade e Identidade](#5-segurança-conformidade-e-identidade)
6. [Cobrança, Precificação e FinOps](#6-cobrança-precificação-e-finops)
7. [Operação, Monitoramento e Automação](#7-operação-monitoramento-e-automação)
8. [Estratégia de Estudo e Plano de 30 Dias](#8-estratégia-de-estudo-e-plano-de-30-dias)
9. [Simulado Comentado (15 questões)](#9-simulado-comentado-15-questões)
10. [Checklists, Matrizes e Templates](#10-checklists-matrizes-e-templates)
11. [Glossário Essencial](#11-glossário-essencial)
12. [Referências Oficiais e Leituras Sugeridas](#12-referências-oficiais-e-leituras-sugeridas)

---

# 1. Visão Geral da Certificação

## 1.1 O que é a AWS Certified Cloud Practitioner?

| Item | Detalhe |
| --- | --- |
| Código do exame | CLF-C02 |
| Idiomas disponíveis | Inglês, Português, Espanhol, Francês, entre outros |
| Questões | 65 (múltipla escolha e múltiplas respostas) |
| Duração | 90 minutos |
| Nota de corte | Escala 100-1000 • É aprovado a partir de 700 |
| Custo | US$ 100 (vouchers disponíveis em eventos e treinamentos) |
| Validade | 3 anos |

💡 **Insight**: a certificação Cloud Practitioner serve como pré-requisito recomendado para trilhas Associate, mas não é obrigatória. É excelente para profissionais de negócios, vendas técnicas, marketing, suporte e iniciantes em TI.

## 1.2 O que mudou no exame CLF-C02 (em vigor desde 2023)

- Mais ênfase em **modelos operacionais**, **IA/ML gerenciados** e **sustentabilidade**.
- Introdução de tópicos de **Governança multi-conta** (AWS Organizations, Control Tower).
- Ampliação de perguntas sobre **finanças na nuvem** (Savings Plans, Cost Anomaly Detection).
- Inclusão de serviços de IA generativa (Amazon Bedrock, Amazon Q) em contexto conceitual.

⚠️ **Atenção**: questões situacionais continuam dominando a prova. Saiba interpretar cenários e escolher o serviço mais adequado.

## 1.3 Domínios e pesos

| Domínio | Peso | Habilidade avaliada |
| --- | --- | --- |
| 1. Conceitos de Nuvem | 26% | Princípios de nuvem, economia, modelos de implantação |
| 2. Segurança e Conformidade | 25% | IAM, proteção de dados, governança, responsabilidade compartilhada |
| 3. Tecnologia | 33% | Serviços principais, rede, computação, armazenamento, implantação |
| 4. Faturamento e Precificação | 16% | Modelos de custo, suporte, otimização financeira |

✅ **Checklist de preparação inicial**

- [ ] Definir data-alvo para a prova.  
- [ ] Criar uma conta AWS (ou solicitar acesso empresarial).  
- [ ] Habilitar MFA na conta root e criar usuário IAM administrativo.  
- [ ] Organizar agenda semanal de estudos (mínimo 5 horas).  
- [ ] Reunir materiais oficiais e anotar credenciais de acesso.

---

# 2. Fundamentos de Computação em Nuvem

## 2.1 Definições-chave

- **Computação em nuvem**: entrega sob demanda de recursos de TI via internet com pagamento conforme o uso.
- **Elasticidade**: ajuste automático de recursos para atender demanda (Auto Scaling, Fargate).
- **Escalabilidade**: capacidade de aumentar ou reduzir recursos rapidamente.
- **Agilidade**: provisionamento em minutos, experimentação rápida.
- **Modelo de custo**: CAPEX para OPEX, pagando pelo consumo.

## 2.2 Modelos de implantação

| Modelo | Descrição | Exemplo AWS |
| --- | --- | --- |
| Nuvem Pública | Recursos compartilhados entre clientes, gerenciados pela AWS | Workloads padrão em regiões AWS |
| Nuvem Privada | Recursos dedicados a um cliente, no data center ou em Outposts | AWS Outposts 1U/2U |
| Híbrido | Integração entre on-premises e AWS | Direct Connect + VPN + AWS Storage Gateway |
| Multicloud | Uso de múltiplos provedores | AWS + Azure + GCP com gerenciamento via Control Tower |

## 2.3 Ambientes globais da AWS

- **Regiões**: atualmente 33 regiões públicas e 4 militares (2025).
- **Zonas de disponibilidade (AZs)**: cada região possui 3 ou mais AZs independentes.
- **Local Zones**: reduz latência em áreas metropolitanas (São Paulo, Rio, Buenos Aires).
- **Wavelength Zones**: integração com provedores 5G para aplicações de edge computing.
- **Edge locations**: mais de 450 pontos de presença (PoPs) para CloudFront e Route 53.

💡 **Insight**: infraestrutura global é frequentemente explorada em questões sobre latência, resiliência e soberania de dados.

## 2.4 Modelos de serviço

- **IaaS (Infrastructure as a Service)**: EC2, VPC, EBS.
- **PaaS (Platform as a Service)**: Elastic Beanstalk, RDS, AWS Glue.
- **SaaS (Software as a Service)**: QuickSight, Amazon Chime.
- **Serverless**: Lambda, DynamoDB, S3 (automatiza provisionamento e escalabilidade).

---

# 3. Governança de Contas e Acesso

## 3.1 Estrutura multi-conta

- **AWS Organizations**:
  - Cria hierarquias com **Unidades Organizacionais (OUs)**.
  - Consolida faturas e aplica políticas centralizadas.
  - Permite separar ambientes (produção, teste, sandbox) e domínios por unidade de negócio.
- **Service Control Policies (SCPs)**:
  - Filtro máximo de permissões (não concede acesso por si só).
  - Pode bloquear serviços ou regiões específicas.
- **AWS Control Tower**:
  - Provisionamento opinado de landing zones multi-conta.
  - Guardrails pré-configurados (prevenção e detecção).
  - Integra com Account Factory para criar novas contas padronizadas.

## 3.2 Identidade e acesso

- **IAM (Identity and Access Management)**:
  - Usuários, grupos, políticas (JSON), funções (roles).
  - Políticas gerenciadas pela AWS vs. gerenciadas pelo cliente.
  - Princípio do privilégio mínimo.
- **IAM Identity Center (AWS SSO)**:
  - Autenticação centralizada para múltiplas contas e aplicações SaaS.
  - Integração com diretórios corporativos (AD, Azure AD, Okta).
- **Autenticação multifator (MFA)**:
  - Aplicativo autenticador, chave de segurança, dispositivo hardware.
  - Obrigatória para root, recomendada para administradores.
- **Credenciais temporárias**:
  - AWS STS, roles assumíveis, autenticação federada (SAML, OIDC).

⚠️ **Na prova**: memorize diferença entre **role** (assumida por serviço/usuário) e **policy** (documento de permissão). Há várias perguntas sobre isso.

## 3.3 Estrutura de contas empresariais

- Conta **de gerenciamento**: responsável por faturamento e definições globais.
- Contas **membro**: isolam workloads e ambientes.
- **Tagging** obrigatório para FinOps (ex.: `Owner`, `Environment`, `CostCenter`).
- **AWS Budgets e Cost Explorer** configurados na conta de gerenciamento.

---

# 4. Serviços Fundamentais da AWS

## 4.1 Computação

| Serviço | Quando usar | Benefícios | Limitações |
| --- | --- | --- | --- |
| Amazon EC2 | Workloads customizados, controle sobre SO | Flexibilidade, variedade de instâncias | Gestão manual de patch, escalabilidade on-demand |
| Auto Scaling | Ajuste automático de EC2 | Escala horizontal/preditiva | Requer métricas confiáveis |
| AWS Lambda | Funções sob demanda | Serverless, cobrança por milissegundo | 15 minutos por execução, 10 GB memória |
| AWS Fargate | Contêineres sem gerenciar servidores | Integra com ECS/EKS, paga por vCPU/memória | Custo maior que EC2 em workloads constantes |
| AWS Batch | Processamento em lote | Gerencia filas e nós automaticamente | Configuração inicial demanda planejamento |
| Amazon Lightsail | Projetos simples com orçamentos fixos | Preço previsível, stack pré-configurada | Não oferece gama completa de recursos |

💡 **Insight**: memorize as características de cada tipo de instância EC2 (General Purpose, Compute Optimized, Memory Optimized, Storage Optimized, Accelerated Computing) e exemplos de famílias (t4g, c7g, r8g, i4i, p5).

## 4.2 Armazenamento

### Armazenamento de objetos: Amazon S3

- Buckets com escopo regional e nomes globais.
- Recursos: Versionamento, Replication, Lifecycle, Object Lock, Access Points.
- Classes de armazenamento 2025:
  - **Standard**
  - **Intelligent-Tiering**
  - **Standard-IA**
  - **One Zone-IA**
  - **Glacier Instant Retrieval**
  - **Glacier Flexible Retrieval**
  - **Glacier Deep Archive**
- Segurança com políticas de bucket, ACLs, bloqueio de acesso público, criptografia padrão SSE-S3.

### Armazenamento de bloco: Amazon EBS

- Tipos principais: gp3 (padrão), io2/io2 Block Express, st1, sc1.
- Snapshots incrementais armazenados no S3.
- Volumes devem estar na mesma AZ da instância EC2.

### Arquivos: Amazon EFS e Amazon FSx

- **EFS**: NFS regional, expansão automática, performance “General Purpose” ou “Max I/O”.
- **FSx**: opções Windows, NetApp ONTAP, Lustre, OpenZFS.

### Edge e migração

- **AWS Snow Family**: Snowcone, Snowball Edge, Snowmobile.
- **AWS DataSync**: migração online com aceleração.
- **Storage Gateway**: integra aplicações locais com S3 via file, tape ou volume gateway.

## 4.3 Rede

- **Amazon VPC**: sub-redes, route tables, NACLs (stateless), security groups (stateful).
- **Elastic Load Balancing (ELB)**:
  - Application Load Balancer (HTTP/HTTPS, WebSockets, HTTP/2).
  - Network Load Balancer (TCP/UDP, baixa latência, IP fixo).
  - Gateway Load Balancer (appliances virtuais).
  - Classic Load Balancer (legado).
- **Amazon Route 53**: roteamento simples, ponderado, geolocalizado, geoproximidade, failover, latency.
- **AWS Global Accelerator**: aceleração de tráfego global via rede AWS.
- **VPN Site-to-Site** e **AWS Direct Connect** para cenários híbridos.

## 4.4 Dados e Análise

- **Amazon RDS**: bancos relacionais gerenciados (multi-AZ, read replicas).
- **Amazon Aurora**: replicação em 6 cópias, Global Database, Serverless v2.
- **Amazon DynamoDB**: NoSQL key-value, latência de milissegundos, módulos On-Demand e Provisioned.
- **Amazon Redshift**: data warehouse colunar, RA3 managed storage.
- **Amazon Athena**: consultas SQL serverless em S3 (custo por TB varrido).
- **AWS Glue**: ETL e catálogo de dados.
- **Amazon QuickSight**: BI com ML Insights, Q (perguntas em linguagem natural).
- **Amazon OpenSearch Service**: busca, análise de logs, dashboards.

## 4.5 Integração, Mensageria e Aplicações

- **Amazon SQS** (Standard e FIFO), **SNS**, **EventBridge**, **Step Functions**, **AppFlow**.
- **Amazon API Gateway**, **AppSync**, **AWS App Runner**, **AWS Amplify**.
- **Amazon Pinpoint**, **SES**, **Chime SDK** para comunicações.

## 4.6 Inteligência Artificial e Machine Learning

- **Amazon SageMaker**: Studio, Autopilot, JumpStart, Model Registry.
- **Serviços pré-treinados**: Rekognition, Comprehend, Transcribe, Translate, Polly, Textract, Fraud Detector.
- **Amazon Bedrock**: acesso a modelos generativos (Anthropic Claude, Amazon Titan, Meta Llama 3, Stability AI).
- **Amazon Q**: assistente generativo para AWS (Developer, Business).

⚠️ **Atenção**: o exame não exige saber treinar modelos, mas espera que você reconheça quando usar um serviço gerenciado de IA versus construir do zero.

---

# 5. Segurança, Conformidade e Identidade

## 5.1 Modelo de responsabilidade compartilhada

- AWS cuida da **infraestrutura** (hardware, rede, zonas de disponibilidade).
- Cliente cuida da **configuração** (sistemas operacionais, dados, identidade).
- Serviços totalmente gerenciados (RDS, DynamoDB) deslocam mais responsabilidades para a AWS.

## 5.2 Serviços-chave

- **AWS IAM**: políticas, credenciais temporárias, roles.
- **AWS Organizations + SCPs**: governança e compliance.
- **AWS Security Hub**: painel central com controles (CIS, PCI, Foundational Best Practices).
- **AWS Config**: inventário e avaliação contínua de configuração.
- **AWS CloudTrail**: auditoria de API, CloudTrail Lake para análise avançada.
- **Amazon GuardDuty**: detecção de ameaças com análise comportamental.
- **Amazon Inspector**: varredura de vulnerabilidade em EC2, ECR, Lambda.
- **AWS Shield**: Standard gratuito, Advanced opcional para proteção DDoS de alto nível.
- **AWS WAF**: regras gerenciadas, ACLs de web, integração com CloudFront e ALB.
- **AWS KMS** e **CloudHSM**: gestão de chaves e HSM dedicado.
- **AWS Macie**: detecção de dados sensíveis (PII) em buckets S3.
- **AWS Artifact**: downloads de relatórios de conformidade (ISO, SOC, HIPAA).

## 5.3 Boas práticas

- Ativar MFA para contas root e usuários privilegiados.
- Habilitar CloudTrail e Config em todas as regiões.
- Usar tags para classificar dados sensíveis e aplicar políticas adequadas.
- Automatizar respostas usando EventBridge + Lambda.
- Treinar equipes sobre phishing e engenharia social (Security Awareness).

---

# 6. Cobrança, Precificação e FinOps

## 6.1 Modelos de preços

- **Sob demanda**: flexibilidade máxima, custo mais alto por hora.
- **Instâncias reservadas (RIs)**: desconto até 72% (1 ou 3 anos, pagamento adiantado parcial ou total).
- **Savings Plans**:
  - **Compute**: flexível entre EC2, Lambda, Fargate.
  - **EC2 Instance**: vinculado a família e região específicas.
- **Instâncias Spot**: até 90% de desconto; ideal para workloads tolerantes a interrupções.
- **Hosts dedicados**: compliance com licenciamento e isolamento físico.
- **Modelos serverless**: custo por chamada/duração (Lambda), por consulta (Athena), por evento (EventBridge).
- **Transferência de dados**: saída cobra, entrada normalmente gratuita.

## 6.2 Ferramentas de controle financeiro

- **AWS Pricing Calculator** (antes da implantação).
- **Billing & Cost Management Dashboard** (custos atuais e históricos).
- **AWS Cost Explorer**: análise por serviço, tag, conta; previsões automatizadas.
- **AWS Budgets**: alertas de custo, uso ou Savings Plans.
- **Cost Anomaly Detection**: detecção de anomalias com machine learning.
- **AWS Marketplace**: contratos privados, taxas de ISVs, custo agregado.
- **Relatórios de custo e uso (CUR)**: detalhamento granular para análises customizadas.

## 6.3 Planos de suporte (2025)

| Plano | Valor | SLA principal | Benefícios extras |
| --- | --- | --- | --- |
| Basic | Gratuito | Billing 24/7 | Trusted Advisor (checks básicos) |
| Developer | US$ 29/mês | < 12h (questões gerais) | Orientação em melhores práticas para desenvolvimento |
| Business | A partir de US$ 100/mês | < 1h (sistemas críticos) | Trusted Advisor completo, suporte a software de terceiros |
| Enterprise On-Ramp | US$ 5.500/mês | < 30 min (cargas críticas) | TAM compartilhado, revisões proativas |
| Enterprise | A partir de US$ 15.000/mês | < 15 min (cargas críticas) | TAM dedicado, gerenciamento de eventos, concierge financeiro |

⚠️ **Na prova**: memorize quem pode abrir **Technical Support cases** (somente planos pagos) e quando usar **Service Limit Increase**.

---

# 7. Operação, Monitoramento e Automação

## 7.1 Observabilidade

- **Amazon CloudWatch**: métricas, logs, alarms, dashboards, Synthetics.
- **CloudWatch Logs Insights**: consultas interativas.
- **AWS X-Ray**: rastreamento de solicitações ponta a ponta.
- **AWS CloudTrail**: histórico de chamadas de API.
- **AWS Trusted Advisor**: auditoria contínua de boas práticas.

## 7.2 Gerenciamento e automação

- **AWS Systems Manager (SSM)**:
  - **Session Manager**: acesso shell seguro sem abrir portas.
  - **Run Command**: execuções remotas.
  - **Patch Manager**: automação de patches.
  - **State Manager**: gerenciamento de configuração.
  - **Parameter Store** e **Secrets Manager**: segredos e parâmetros seguros.
- **AWS CloudFormation** e **AWS CDK**: infraestrutura como código.
- **AWS Code Suite**: CodeCommit, CodeBuild, CodeDeploy, CodePipeline.
- **AWS Elastic Beanstalk**: PaaS para aplicações web.
- **AWS OpsWorks**: automação com Chef/Puppet (legado, mas ainda aparece).

## 7.3 Sustentabilidade

- Pilar adicionado ao Well-Architected Framework.
- Métricas com **Customer Carbon Footprint Tool**.
- Alternativas de baixo consumo: instâncias **Graviton**, desligar workloads ociosos, otimizar armazenamento.

---

# 8. Estratégia de Estudo e Plano de 30 Dias

## 8.1 Roteiro sugerido

| Semana | Foco principal | Atividades |
| --- | --- | --- |
| Semana 1 | Fundamentos e governança | Ler capítulos 1-3 • Criar conta AWS • Habilitar MFA • Explorar console |
| Semana 2 | Serviços principais | Estudar capítulos 4 e 5 • Fazer laboratórios no Free Tier (EC2, S3, IAM) |
| Semana 3 | Custos e operações | Revisar capítulos 6 e 7 • Configurar Budgets • Criar dashboards CloudWatch |
| Semana 4 | Revisão e simulados | Realizar simulados oficiais • Revisar erros • Preparar documentação para prova |

✅ **Checklist semanal**

- [ ] Assistir ao curso “AWS Cloud Practitioner Essentials” (AWS Skill Builder).  
- [ ] Ler FAQs dos serviços: EC2, S3, RDS, DynamoDB, Lambda, VPC.  
- [ ] Concluir um laboratório orientado (ex.: “Launch a Web App” no Skill Builder).  
- [ ] Responder a 30 questões de simulados por semana.  
- [ ] Revisar flashcards (princípios de responsabilidade, tipos de serviço).

## 8.2 Técnicas de memorização

- Use **mapas mentais** para relacionar serviço ➜ categoria ➜ caso de uso.
- Crie **histórias** envolvendo personagens e situações (ex.: “Empresa varejista quer reduzir custo de CDN → CloudFront + S3”).
- Faça **ensino reverso**: explique um tópico a um colega ou em voz alta.
- Monte **flashcards** no Anki ou Quizlet (ex.: “Qual serviço detecta dados sensíveis em S3?” → Macie).

---

# 9. Simulado Comentado (15 questões)

> As respostas e comentários estão após o bloco de questões. Recomenda-se cronometrar 20 minutos para esta atividade.

## Questões

1. Uma startup quer publicar relatórios financeiros estáticos para clientes ao redor do mundo com baixa latência e custo reduzido. Qual conjunto de serviços atende melhor?
2. A equipe de compliance precisa garantir que nenhuma conta membro crie recursos fora da região `sa-east-1`. Qual recurso usar?
3. Uma empresa deseja conectar seu data center ao ambiente AWS com link dedicado e latência consistente. Qual serviço deve ser recomendado?
4. Qual opção descreve corretamente o **AWS Shared Responsibility Model**?
5. Uma aplicação precisa processar picos repentinos de tráfego com custo otimizado, permitindo interrupções. Qual tipo de instância EC2 é mais adequado?
6. Qual serviço serverless permite executar código em resposta a eventos sem gerenciar servidores?
7. Qual ferramenta fornece visualizações de custo, filtros por tag e previsões?
8. Qual serviço detecta anomalias de segurança analisando atividade suspeita em contas AWS?
9. Para armazenar logs de auditoria imutáveis por 7 anos com menor custo, qual classe do S3 é apropriada?
10. Uma empresa quer aplicar atualizações de segurança automatizadas em instâncias EC2. Qual recurso AWS usar?
11. Qual plano de suporte oferece SLA de 15 minutos para workloads críticos e inclui Technical Account Manager dedicado?
12. Qual serviço permite criar APIs HTTP totalmente gerenciadas com poucas configurações?
13. Qual opção combina corretamente serviço e caso de uso: **(a)** AWS Glue; **(b)** Amazon CloudFront; **(c)** Amazon Macie?
14. Uma equipe quer automatizar o provisionamento de recursos usando código Python. Qual ferramenta é recomendada?
15. Qual serviço integra múltiplas fontes de eventos (SaaS, aplicações internas) para acionar regras e destinos?

## Gabarito comentado

1. **Amazon S3 + Amazon CloudFront** — Armazena conteúdo estático e distribui em edge locations com baixa latência.  
2. **Service Control Policies (SCPs) no AWS Organizations** — Permite bloquear uso de regiões nas contas membros.  
3. **AWS Direct Connect** — Conexão dedicada, baixa latência, mais previsível que VPN.  
4. **AWS protege a infraestrutura da nuvem; clientes protegem o que executam na nuvem.**  
5. **Instâncias Spot** — Custos baixos e aceitam interrupções.  
6. **AWS Lambda** — Executa código sob demanda, cobrando por tempo de execução.  
7. **AWS Cost Explorer** — Visualiza custos, aplica filtros, gera previsões.  
8. **Amazon GuardDuty** — Detecta ameaças com machine learning.  
9. **S3 Glacier Deep Archive** — Baixo custo, retenção longa, recuperação em horas.  
10. **AWS Systems Manager Patch Manager** — Automatiza aplicação de patches.  
11. **AWS Enterprise Support** — Inclui TAM dedicado e SLA de 15 minutos.  
12. **Amazon API Gateway** — Cria APIs REST/HTTP totalmente gerenciadas.  
13. **(a) ETL gerenciado; (b) CDN para baixa latência; (c) Detecção de PII em S3.**  
14. **AWS Cloud Development Kit (AWS CDK)** — Infraestrutura como código com linguagens (Python, TypeScript).  
15. **Amazon EventBridge** — Barramento de eventos com integrações SaaS e regras customizadas.

---

# 10. Checklists, Matrizes e Templates

## 10.1 Checklist de revisão final

- [ ] Consigo explicar os pilares do Well-Architected Framework.  
- [ ] Sei diferenciar S3 Standard, Intelligent-Tiering, IA, One Zone-IA e Glacier.  
- [ ] Entendo quando usar EC2, Lambda, Lightsail, Fargate.  
- [ ] Sei interpretar uma fatura AWS e usar Budgets.  
- [ ] Memorizei diferenças entre IAM user, group, role, policy.  
- [ ] Completei pelo menos dois simulados completos.  
- [ ] Testei o ambiente de prova online (sistema, webcam, microfone).  
- [ ] Tenho documento de identificação válido para o dia da prova.

## 10.2 Matriz de decisão (serviço x cenário)

| Cenário | Serviço recomendado | Motivo |
| --- | --- | --- |
| Site estático global | S3 + CloudFront | Escala global, custo baixo, integração com Route 53 |
| Processamento de vídeo sob demanda | AWS Elemental Media Services + S3 | Pipeline completo de mídia |
| Chatbot com IA generativa | Amazon Bedrock + Amazon Lex | Modelos de base + interface conversacional |
| Relatórios ad-hoc em dados em S3 | Amazon Athena + QuickSight | Consulta serverless + visualização |
| Replicação multi-região de banco relacional | Amazon Aurora Global Database | Replicação rápida e leitura local |

## 10.3 Template de plano de aula corporativo

```
Objetivo da sessão: Introdução à nuvem AWS para equipe de negócios
Duração: 90 minutos

Agenda:
1. Conceitos de nuvem (20 min)
2. Economia e modelo de custos (15 min)
3. Demonstração do console (15 min)
4. Serviços-chave (20 min)
5. Quiz interativo (10 perguntas) (15 min)
6. Perguntas e respostas (5 min)

Materiais:
- Slides baseados nos capítulos 1 e 6
- Demonstração: criação de bucket S3 e objeto público temporário
- Quiz: usar Kahoot ou formulário online
```

---

# 11. Glossário Essencial

- **AZ (Availability Zone)**: conjunto de data centers dentro de uma região.
- **Edge Location**: ponto de presença usado por CloudFront e Route 53.
- **Shared Responsibility Model**: divisão de responsabilidades entre AWS e cliente.
- **SCP (Service Control Policy)**: política em Organizations que limita permissões.
- **Graviton**: processadores ARM desenvolvidos pela AWS.
- **FinOps**: práticas de gestão financeira na nuvem.
- **Serverless**: modelo operacional em que o provedor gerencia servidores e escalabilidade.
- **Elasticidade**: capacidade de ajustar recursos automaticamente.
- **Well-Architected Framework**: conjunto de boas práticas (6 pilares).

---

# 12. Referências Oficiais e Leituras Sugeridas

1. **AWS Cloud Practitioner Exam Guide (CLF-C02)**  
   <https://aws.amazon.com/certification/certified-cloud-practitioner>
2. **AWS Skill Builder — Cloud Practitioner Essentials**  
   <https://explore.skillbuilder.aws/learn/course/external/view/elearning/134/aws-cloud-practitioner-essentials>
3. **FAQs Obrigatórias**  
   - <https://aws.amazon.com/ec2/faqs/>  
   - <https://aws.amazon.com/s3/faqs/>  
   - <https://aws.amazon.com/rds/faqs/>  
   - <https://aws.amazon.com/vpc/faqs/>
4. **AWS Pricing Calculator**  
   <https://calculator.aws>
5. **AWS Free Tier**  
   <https://aws.amazon.com/free>
6. **Documentação Well-Architected Framework**  
   <https://wa.aws.amazon.com>
7. **Série AWS re:Invent (YouTube)** — Sessões atualizadas de arquitetura e FinOps.
8. **Livros recomendados**  
   - *AWS Certified Cloud Practitioner Study Guide* (Sybex)  
   - *The AWS Well-Architected Framework in Action* (O'Reilly)  
   - *Cloud FinOps* (O'Reilly)

---

# Créditos e Aviso Legal

Este material é fornecido “como está”, sem garantias de aprovação. A AWS pode atualizar o exame a qualquer momento. Recomenda-se validar informações no site oficial da AWS antes da prova.  

Direitos autorais © 2025 — Comunidade Cloud. Todos os direitos reservados. A reprodução não autorizada, distribuição ou venda sem permissão é estritamente proibida.

---

# Sobre a autora / o autor

Profissional certificado em múltiplas trilhas AWS, com experiência em projetos de migração, arquitetura de soluções, FinOps e treinamento corporativo. Contribuinte ativo em comunidades de tecnologia e eventos educacionais. Para consultoria, treinamentos in-company ou licenciamento comercial, entre em contato pelo e-mail informado no repositório.

---

Boa prova e até a próxima certificação! 🚀
