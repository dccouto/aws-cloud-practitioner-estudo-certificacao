Se este repositório te ajudou, considere apoiar a manutenção e evolução deste guia 🙌  
<a href="https://user-images.githubusercontent.com/53017748/175069759-6bf2473d-6f3c-4b0d-a694-2d86f46d39c4.png">
  <img src="https://img.icons8.com/?size=100&id=gjCwHrMX83X5&format=png&color=000000" alt="QR Code" width="30"/>
</a>

# Guia de bolso AWS Certified Cloud Practitioner (2025)

Bem-vindo(a) ao guia rápido e atualizado para a certificação **AWS Certified Cloud Practitioner (CLF-C02)**. O objetivo é oferecer uma referência prática para revisar os principais conceitos do exame, com foco em quem está iniciando sua jornada na nuvem AWS.

- **Última atualização**: novembro de 2025  
- **Versão do exame coberta**: CLF-C02 (lançado em 2023, atualmente em vigor)  
- **Formato**: 65 questões (múltipla escolha e múltiplas respostas) • 90 minutos • US$ 100 • Disponível em português

> ✅ Utilize este README como resumo rápido e acesse o eBook incluído no repositório para aprofundar cada tópico, roteiros de estudo e exercícios de revisão.

---

## Sumário
- [1. Fundamentos de computação em nuvem](#1-fundamentos-de-computação-em-nuvem)
- [2. Estrutura do exame CLF-C02](#2-estrutura-do-exame-clf-c02)
- [3. Governança de contas e acesso](#3-governança-de-contas-e-acesso)
- [4. Principais serviços por domínio](#4-principais-serviços-por-domínio)
- [5. Segurança e conformidade](#5-segurança-e-conformidade)
- [6. Precificação, faturamento e suporte](#6-precificação-faturamento-e-suporte)
- [7. Observabilidade e gerenciamento](#7-observabilidade-e-gerenciamento)
- [8. Arquitetura e boas práticas](#8-arquitetura-e-boas-práticas)
- [9. Preparação e recursos de estudo](#9-preparação-e-recursos-de-estudo)
- [10. Ebook complementar](#10-ebook-complementar)

---

## 1. Fundamentos de computação em nuvem

- **Computação em nuvem**: entrega sob demanda de recursos de TI pela internet, com pagamento conforme o uso.
- **Modelos de implantação**:
  - **Nuvem pública**: recursos na AWS, totalmente gerenciados pela AWS.
  - **Nuvem privada**: recursos dedicados a um cliente, podendo usar AWS Outposts para rodar serviços AWS on-premises.
  - **Nuvem híbrida**: integra ambientes on-premises e AWS (Direct Connect + VPN, por exemplo).
  - **Multicloud**: uso combinado de AWS com outras nuvens públicas (não é foco do exame, mas pode ser citado).
- **Modelos de responsabilidade compartilhada**:
  - AWS mantém a **segurança da nuvem** (infraestrutura, hardware, serviços gerenciados).
  - Cliente mantém a **segurança na nuvem** (configuração de dados, redes, controles de acesso).

### Conceitos globais
- **Regiões**: conjuntos de zonas de disponibilidade (AZs) em uma área geográfica isolada.
- **Zonas de disponibilidade (AZs)**: data centers discretos dentro de uma mesma região, com baixa latência entre si.
- **Local Zones**: estendem serviços de região para áreas metropolitanas, reduzindo latência.
- **Edge locations**: pontos de presença para serviços de borda (CloudFront, Route 53, Global Accelerator).

### Como escolher a região correta?
- **Requisitos legais e compliance** (LGPD, GDPR etc.).
- **Latência percebida** pelo usuário final.
- **Disponibilidade de serviços** (nem todos os serviços estão em todas as regiões).
- **Custos** (refletindo impostos locais, energia e câmbio).

### Maneiras de interagir com a AWS
- **Console de Gerenciamento da AWS (GUI)**
- **AWS CLI** (linha de comando; suporta AWS CloudShell no navegador)
- **SDKs e APIs** para automação e integração
- **Infraestrutura como código** (CloudFormation, CDK, Terraform)

### Conta AWS e nível gratuito (Free Tier)
- É obrigatório um **e-mail único** para cada conta.
- **Conta root**: acesso ilimitado, deve ser protegida com MFA e usada apenas para tarefas críticas.
- **Free Tier**:
  - 12 meses gratuitos para serviços selecionados (ex.: 750 horas/mês de EC2 t2.micro ou t4g.micro).
  - Ofertas “Always Free” (ex.: 1 milhão de solicitações Lambda/mês, 25 GB de armazenamento S3 Glacier Deep Archive).
  - Ofertas de testes por curto período (ex.: Amazon SageMaker Studio Lab).
  - Confira sempre a página oficial: [https://aws.amazon.com/free](https://aws.amazon.com/free)
- Créditos promocionais podem ser obtidos em programas como **AWS Educate**, **Activate**, treinamentos oficiais e eventos.

---

## 2. Estrutura do exame CLF-C02

| Domínio | Peso | Tópicos chave |
| --- | --- | --- |
| 1. Conceitos de Nuvem | 26% | Benefícios, princípios de arquitetura, modelos operacionais |
| 2. Segurança e Conformidade | 25% | IAM, segurança, governança, compliance |
| 3. Tecnologia | 33% | Principais serviços, implantação, recursos de suporte |
| 4. Faturamento e Precificação | 16% | Modelos de preço, suporte, ferramentas de gestão |

### Estrutura típica das questões
- Situações do dia a dia de empresas de todos os portes.
- Cobrança por entender **quando** e **por que** escolher um serviço, mais do que sua configuração.
- Atenção especial a cenários de segurança, responsabilidades, custo e resiliência.

### Estratégia de estudo sugerida
1. Revisar fundamentos (nuvem, regiões, segurança compartilhada).
2. Mapear serviços principais por domínio.
3. Praticar com quizzes oficiais e simulados.
4. Revisar cenários de faturamento e suporte.
5. Agendar a prova com antecedência (disponível em Pearson VUE, PSI ou online proctored).

---

## 3. Governança de contas e acesso

- **AWS Organizations**: agrupa várias contas, consolida faturamento, aplica políticas (SCPs).
- **Service Control Policies (SCPs)**: definem permissões máximas por conta ou unidade organizacional.
- **Conta de gerenciamento (antiga master)** coordena contas-membro; não é igual à conta root.
- **IAM (Identity and Access Management)**:
  - **Usuários**: identidades individuais.
  - **Grupos**: coleção de usuários com permissões comuns.
  - **Políticas (policies)**: documento JSON que define permissões (Allow/Deny).
  - **Funções (roles)**: permissões atribuídas a serviços ou identidades federadas (ex.: EC2 acessando S3).
- **IAM Identity Center (antigo AWS SSO)**: autenticação centralizada para múltiplas contas e aplicações.
- **MFA** obrigatório para root; recomendado para usuários privilegiados.
- **AWS Control Tower**: provisiona ambientes multi-conta com guardrails pré-configurados.

---

## 4. Principais serviços por domínio

### Computação
- **Amazon EC2**: instâncias virtuais com classes diversas (geral, computação otimizada, memória, Graviton).
- **EC2 Auto Scaling**: escala horizontal automaticamente com políticas preditivas e baseadas em métricas.
- **Amazon Lightsail**: instâncias simplificadas para workloads pequenos (blogs, sites estáticos).
- **AWS Elastic Beanstalk**: PaaS gerenciado para aplicações web.
- **AWS Lambda**: funções serverless (até 15 minutos, 10 GB memória, 6 vCPUs).
- **AWS Fargate**: execução de contêineres serverless (integra com ECS e EKS).
- **Amazon ECS / EKS / ECR**: orquestração e registro de contêineres.
- **AWS Batch**: processamento em lote gerenciado.
- **AWS Outposts / Snow Family**: serviços e infraestrutura AWS no local.

### Rede e entrega de conteúdo
- **Amazon VPC**: rede virtual gerenciável (sub-redes públicas/privadas, route tables, NACLs).
- **Elastic Load Balancing**: Application (Camada 7), Network (Camada 4), Gateway (appliances), Classic (legado).
- **Amazon Route 53**: DNS global com roteamento geopolítico, latency-based e health checks.
- **AWS Global Accelerator**: melhora latência com rede global da AWS.
- **AWS Direct Connect** e **Site-to-Site VPN**: conectividade privada/híbrida.

### Armazenamento
- **Amazon S3**: armazenamento de objetos (até 5 TB por objeto); integração com S3 Object Lambda, Storage Lens.
- **Classes do S3 (2025)**:
  - Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval, Glacier Deep Archive.
- **Amazon EBS**: volumes de bloco para EC2 (gp3 padrão, io2/io2 Block Express para alta performance).
- **Amazon EFS**: sistema de arquivos NFS totalmente gerenciado, regional.
- **AWS Backup**: centraliza políticas de backup para múltiplos serviços.
- **Amazon FSx**: sistemas de arquivos gerenciados (NetApp ONTAP, Windows File Server, OpenZFS, Lustre).
- **Instance Store**: armazenamento efêmero acoplado ao host físico.

### Bancos de dados e análise
- **Amazon RDS**: bancos relacionais gerenciados (MySQL, PostgreSQL, MariaDB, Oracle, SQL Server, Amazon Aurora).
- **Amazon Aurora**: compatível com MySQL/PostgreSQL com replicação distribuída em 6 cópias.
- **Amazon DynamoDB**: NoSQL serverless, latência de milissegundos.
- **Amazon ElastiCache**: Redis/Memcached gerenciados.
- **Amazon Redshift**: data warehouse em larga escala.
- **Amazon Athena**: consultas interativas em S3 com SQL (paga por TB varrido).
- **AWS Glue**: catálogo de dados, ETL serverless.
- **Amazon OpenSearch Service**: busca, análise de logs, machine learning.
- **Amazon Neptune**: banco de grafos.

### Integração e mensageria
- **Amazon SQS**: filas (Standard e FIFO).
- **Amazon SNS**: mensageria pub/sub (HTTP/S, e-mail, SMS, Lambda).
- **Amazon EventBridge**: barramento de eventos (integra com SaaS, eventos customizados).
- **AWS Step Functions**: orquestração serverless com fluxos de trabalho visuais.
- **Amazon MQ**: brokers gerenciados para ActiveMQ e RabbitMQ.

### Aplicações e conteúdo
- **Amazon CloudFront**: CDN global com suporte a TLS moderno, Lambda@Edge, CloudFront Functions.
- **AWS AppSync**: APIs GraphQL gerenciadas.
- **Amazon API Gateway**: proxy de APIs REST e HTTP, websockets.
- **Amazon QuickSight**: BI como serviço, com ML Insights.
- **Amazon Pinpoint**: comunicação omnichannel (e-mail, SMS, push).

### Inteligência artificial e machine learning (alta visibilidade no exame)
- **Amazon SageMaker**: plataforma completa de machine learning.
- **Amazon Rekognition, Comprehend, Transcribe, Polly, Textract**: serviços de IA pré-treinados.
- **Amazon Bedrock**: plataforma de modelos de base (Generative AI) totalmente gerenciada.
- **Amazon Q**: assistente generativo lançado em 2024 (conceitos podem aparecer em perguntas exploratórias).

---

## 5. Segurança e conformidade

- **Boas práticas essenciais**:
  - MFA para contas privilegiadas.
  - Principais políticas em IAM: privilégio mínimo, separação de funções, rotação de credenciais.
  - Habilitar **AWS Config** e **Security Hub** para visibilidade de conformidade.
- **Serviços de segurança**:
  - **AWS Shield** (Standard gratuito e Advanced pago) contra DDoS.
  - **AWS WAF**: firewall de camada 7 com regras gerenciadas.
  - **AWS KMS** e **AWS CloudHSM**: gerenciamento de chaves.
  - **AWS Secrets Manager** e **SSM Parameter Store**: gestão de segredos.
  - **Amazon GuardDuty**: detecção de ameaças com machine learning.
  - **Amazon Inspector**: análise contínua de vulnerabilidades em EC2, ECR, Lambda.
  - **AWS Macie**: detecção de dados sensíveis em S3.
  - **AWS Artifact**: repositório de relatórios de conformidade (ISO, SOC, PCI etc.).
  - **IAM Access Analyzer**: detecta acessos públicos ou externos inadvertidos.
- **Log e auditoria**:
  - **AWS CloudTrail**: trilha de auditoria em todas as contas (habilitar multi-região).
  - **CloudTrail Lake**: armazenamento otimizado para análise.

---

## 6. Precificação, faturamento e suporte

- **Modelos de cobrança**:
  - **Sob demanda (on-demand)**: paga conforme o uso, sem compromisso.
  - **Instâncias reservadas** (RDS, Redshift, DynamoDB, EC2) com 1 ou 3 anos, descontos maiores.
  - **Savings Plans** (Compute e EC2 Instance) com flexibilidade maior que RI.
  - **Instâncias Spot**: descontadas, com interrupção possível em 2 minutos.
  - **Hosts dedicados**: servidores físicos exclusivos.
  - **Serviços serverless**: cobram por número de execuções, duração ou volume processado.
  - **Transferência de dados**: saída (data egress) é cobrada; entrada geralmente é gratuita.
- **Ferramentas financeiras**:
  - **AWS Pricing Calculator**: estimativas antes de implantações.
  - **Billing & Cost Management**: painel consolidado de custos.
  - **AWS Cost Explorer**: análises visuais, filtros por tag, reservados vs on-demand.
  - **AWS Budgets**: alertas de custo/uso, integra com SNS e Chatbot.
  - **Cost Anomaly Detection**: identifica desvios de custo com machine learning.
- **Planos de suporte (valores aproximados de 2025)**:
  - **Basic (gratuito)**: suporte 24/7 para problemas de faturamento, Trusted Advisor básico.
  - **Developer (US$ 29/mês)**: orientação de melhores práticas, tempo de resposta < 12h para sistemas não críticos.
  - **Business (a partir de US$ 100/mês)**: SLA 24/7 < 1h para cargas críticas, acesso completo ao Trusted Advisor, suporte a softwares de terceiros.
  - **Enterprise On-Ramp (US$ 5.500/mês)**: TAM designado, revisões proativas, SLA 30 minutos.
  - **Enterprise (a partir de US$ 15.000/mês)**: TAM dedicado, gerenciamento de eventos, SLA 15 minutos para workloads críticos.
- **Tipos de chamados (cases)**:
  - **Account and Billing Support**
  - **Service Limit Increase**
  - **Technical Support** (requer plano pago)

---

## 7. Observabilidade e gerenciamento

- **Amazon CloudWatch**: métricas, logs, alarms, dashboards e eventos.
- **CloudWatch Logs Insights**: consultas em logs.
- **AWS CloudTrail**: auditoria de API (inclui Insights para anomalias).
- **AWS X-Ray**: rastreamento distribuído (APM).
- **AWS Trusted Advisor**: recomendações de custo, segurança, performance e limites.
- **AWS Systems Manager**:
  - **Session Manager**: acesso seguro a instâncias.
  - **Run Command**, **Patch Manager**, **Change Manager**, **Parameter Store**.
- **AWS Well-Architected Tool**: revisão contínua da arquitetura pelos 6 pilares (Operacional, Segurança, Confiabilidade, Performance, Eficiência de custos, Sustentabilidade).

---

## 8. Arquitetura e boas práticas

- **Well-Architected Framework**:
  1. **Excelência Operacional**
  2. **Segurança**
  3. **Confiabilidade**
  4. **Eficiência de Performance**
  5. **Otimização de Custos**
  6. **Sustentabilidade** (introduzido como pilar em 2021)
- **AWS CAF (Cloud Adoption Framework)**: Perspectivas de Negócios, Pessoas, Governança, Plataforma, Segurança e Operações.
- **Modelos de migração**: rehost (lift-and-shift), replatform, refactor, repurchase, retire, retain (6 R’s).
- **Estratégias de modernização**: uso de serviços gerenciados, serverless, containers.
- **Disaster Recovery**:
  - Backup & Restore
  - Pilot Light
  - Warm Standby
  - Multi-site / Active-Active
- **Sustentabilidade**: reduzir desperdícios, escolher instâncias Graviton, desligar recursos ociosos.

---

## 9. Preparação e recursos de estudo

- **Trilhas oficiais AWS Skill Builder** (gratuitas e pagas).
- **AWS Cloud Quest e AWS Jam** para prática gamificada.
- **Documentação e FAQs oficiais** (quase sempre aparecem em perguntas).
- **Prática com laboratórios (CloudAcademy, A Cloud Guru, Coursera, Udemy)**.
- **Simulados CLF-C02**: utilize cronômetro e revise justificativas das respostas.
- **Checklist pré-prova**:
  - Domínios revisados e anotações atualizadas.
  - Compreensão clara de responsabilidades compartilhadas.
  - Prática de interpretar perguntas situacionais.
  - Teste suas configurações do ambiente de prova (online) com antecedência.

---

## 10. Ebook complementar

Para expandir o conteúdo, roteiros de estudo e incluir exercícios + listas de verificação, acesse o ebook em `ebook/guia-aws-cloud-practitioner-2025.md`.  
Você pode converter o material para PDF/EPUB usando ferramentas como `pandoc`:

```
pandoc ebook/guia-aws-cloud-practitioner-2025.md -o guia-aws-cloud-practitioner-2025.pdf
```

---

### Como vender este ebook
- Execute a landing page em `public/` com `npm start` e personalize a chave Pix real no modal de pagamento.
- Gere códigos de acesso após confirmar o pagamento com `npm run add-payment -- --email cliente@exemplo.com`.
- Consulte `docs/venda-ebook.md` para o passo a passo completo de operação, segurança e customização.

---

### Contribuições
Sinta-se à vontade para abrir issues ou pull requests com melhorias, correções ou novos tópicos. Seu apoio ajuda a manter este guia relevante e gratuito para a comunidade.

Boa prova! 🚀
