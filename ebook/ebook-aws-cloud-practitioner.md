# Ebook AWS Cloud Practitioner – Guia Detalhado

> Versão 1.0 · Atualizado em 07/11/2025  
> Elaborado para servir como complemento aprofundado ao guia de bolso disponível no `README.md`.

---

## Como usar este ebook

1. **Leitura guiada:** avance capítulo a capítulo seguindo a sequência sugerida pela própria prova.  
2. **Consultas rápidas:** use as tabelas e quadros-resumo como fichas para revisão de última hora.  
3. **Prática ativa:** resolva as questões de autoavaliação ao final de cada capítulo e confira os comentários das respostas.  
4. **Plano de estudos:** adapte o plano de 4 semanas do capítulo final à sua agenda.  
5. **Contribua:** se este material te ajudar, considere apoiar via Pix para receber novas edições com prioridade e extras exclusivos.

---

## Sumário

1. [Fundamentos de computação em nuvem](#1-fundamentos-de-computação-em-nuvem)  
2. [Infraestrutura global da AWS](#2-infraestrutura-global-da-aws)  
3. [Modelos de responsabilidade e segurança](#3-modelos-de-responsabilidade-e-segurança)  
4. [Serviços de computação e implantação](#4-serviços-de-computação-e-implantação)  
5. [Armazenamento e distribuição de conteúdo](#5-armazenamento-e-distribuição-de-conteúdo)  
6. [Bancos de dados e analytics](#6-bancos-de-dados-e-analytics)  
7. [Gerenciamento, observabilidade e automação](#7-gerenciamento-observabilidade-e-automação)  
8. [Custos, faturamento e suporte](#8-custos-faturamento-e-suporte)  
9. [Preparação para a prova e plano de estudos](#9-preparação-para-a-prova-e-plano-de-estudos)  
10. [Apêndice A – Glossário essencial](#apêndice-a--glossário-essencial)  
11. [Apêndice B – Checklist de revisão](#apêndice-b--checklist-de-revisão)  
12. [Apêndice C – Questões comentadas](#apêndice-c--questões-comentadas)

---

## 1. Fundamentos de computação em nuvem

### 1.1 O que é computação em nuvem?

A computação em nuvem fornece recursos de TI (servidores, armazenamento, bancos de dados, redes, software) via internet sob demanda, com cobrança baseada no consumo. Os recursos são disponibilizados em minutos, de forma elástica, e gerenciados por provedores como a AWS.

### 1.2 Vantagens da nuvem

| Benefício | Descrição | Exemplo prático |
| --- | --- | --- |
| Elasticidade | Ajuste automático ou manual da capacidade de acordo com a demanda | Auto Scaling aumenta instâncias EC2 durante eventos promocionais |
| Modelo pay-as-you-go | Sem investimento inicial; paga apenas pelo que usa | Lambda cobra por invocação e tempo de execução |
| Agilidade | Provisionamento em minutos, com APIs e infraestrutura como código | CloudFormation cria um ambiente completo com um template |
| Alcance global | Regiões em diversos países para atender usuários com baixa latência | Aplicativo entrega conteúdo pela região mais próxima |
| Inovação acelerada | Serviços gerenciados reduzem tarefas operacionais | DynamoDB elimina a necessidade de gerenciar servidores de banco |

### 1.3 Modelos de implantação

- **Nuvem pública:** recursos totalmente hospedados na AWS e compartilhados de forma lógica entre diferentes clientes (ex.: workloads nativos da AWS).  
- **Nuvem privada:** infraestrutura dedicada ao cliente, em data center próprio ou com AWS Outposts.  
- **Nuvem híbrida:** integração entre ambientes on-premises e AWS (ex.: VPC + Direct Connect).

### 1.4 Modelos de serviço

- **IaaS (Infrastructure as a Service):** controle sobre servidores virtuais e redes. Ex.: EC2, EBS, VPC.  
- **PaaS (Platform as a Service):** foco no código, com plataforma gerenciada. Ex.: Elastic Beanstalk.  
- **SaaS (Software as a Service):** aplicações prontas entregues pela internet. Ex.: Amazon Connect, Amazon QuickSight.

### 1.5 Ferramentas de interação

- **AWS Management Console:** interface gráfica com navegação intuitiva.  
- **AWS CLI:** linha de comando para automação e scripts.  
- **SDKs:** bibliotecas para linguagens como Python (boto3), JavaScript, Java, Go etc.  
- **CloudShell:** terminal baseado no navegador com credenciais pré-configuradas.

---

## 2. Infraestrutura global da AWS

### 2.1 Conceitos principais

| Componente | O que é | Características |
| --- | --- | --- |
| Região | Área geográfica com múltiplas AZs | Escolha baseada em latência, compliance, custo e serviços |
| Zona de Disponibilidade (AZ) | Um ou mais data centers isolados | Conectados por redes de alta latência; usados para alta disponibilidade |
| Local Zone | Extensão da região para cidades específicas | Menor latência para workloads sensíveis (jogos, streaming) |
| Wavelength | Infraestrutura dentro de redes 5G | Latência ultrabaixa para edge computing |
| Edge Location | Pontos globais usados por CloudFront, Route 53 e Global Accelerator | Foco em cache e roteamento |

### 2.2 Critérios para escolher regiões

1. **Residência de dados e conformidade:** leis locais podem exigir processamento dentro do país.  
2. **Latência:** mantenha workloads próximos dos usuários finais.  
3. **Serviços disponíveis:** nem todo serviço está em todas as regiões.  
4. **Custos:** preços variam (América do Sul costuma ser mais cara que Virgínia do Norte).  
5. **Planos de expansão:** considere crescimento futuro de capacidade na região.

### 2.3 Estratégias de alta disponibilidade

- Use múltiplas AZs para redundância.  
- Emparelhe VPCs com load balancers regionais.  
- Utilize S3 e DynamoDB (serviços regionais com replicação interna).  
- Em soluções globais, combine múltiplas regiões com Route 53 e CloudFront para failover.

---

## 3. Modelos de responsabilidade e segurança

### 3.1 Responsabilidade compartilhada

- **AWS (segurança da nuvem):** hardware, software, instalações físicas e serviços gerenciados.  
- **Cliente (segurança na nuvem):** dados, criptografia, gerenciamento de identidades, configuração de rede e aplicação.

### 3.2 Governança básica para novas contas

1. Habilite MFA no usuário root e armazene credenciais com segurança.  
2. Crie usuário administrativo no IAM e desabilite access keys do root.  
3. Configure AWS Organizations para múltiplas contas com consolidação de faturamento.  
4. Ative CloudTrail e AWS Config desde o início.  
5. Defina políticas de senha, rotacionamento e tags obrigatórias.

### 3.3 Principais serviços de segurança

- **AWS IAM:** usuários, grupos, roles e políticas baseadas em JSON.  
- **AWS Organizations:** políticas de controle de serviço (SCPs), unidades organizacionais e faturamento consolidado.  
- **AWS KMS:** gerenciamento e auditoria de chaves criptográficas.  
- **AWS Certificate Manager (ACM):** provisionamento de certificados TLS.  
- **AWS Shield:** proteção contra DDoS.  
- **AWS WAF:** regras contra bots, SQL injection, cross-site scripting.  
- **Amazon Macie:** detecção de dados sensíveis no S3 usando machine learning.  
- **Amazon Detective:** investigação de incidentes usando dados de CloudTrail, GuardDuty e VPC Flow Logs.

### 3.4 Boas práticas

- Privilégio mínimo e separação de funções.  
- Rotacione credenciais com frequência.  
- Monitore eventos suspeitos com GuardDuty e Security Hub.  
- Faça backups e implemente estratégias de criptografia em repouso e em trânsito.  
- Documente planos de resposta a incidentes.

---

## 4. Serviços de computação e implantação

### 4.1 Amazon EC2

- Famílias de instâncias:  
  - **General purpose (t, m):** equilíbrio CPU/memória.  
  - **Compute optimized (c):** workloads intensivos em CPU.  
  - **Memory optimized (r, x, z):** bancos de dados na memória e análises.  
  - **Storage optimized (i, d, h):** alto throughput de disco.  
  - **Accelerated computing (p, g, f, inf):** GPUs, FPGA, inferência.

- **Opções de compra:** On-Demand, Reserved Instances, Savings Plans, Spot, Dedicated Hosts e Dedicated Instances.
- **Elastic Block Store (EBS):** volumes persistentes; escolha entre SSD (gp3, io2) e HDD (st1, sc1).
- **Elastic IP:** endereço IP público estático associado à conta.

### 4.2 Elastic Load Balancing (ELB)

- **Application Load Balancer (ALB):** rota por path, host, headers, WebSockets.  
- **Network Load Balancer (NLB):** latência ultrabaixa, suporte a TCP/UDP, IP estático.  
- **Gateway Load Balancer (GWLB):** integra appliances virtuais (firewalls, IDS).  
- **Classic Load Balancer:** legado, não recomendado para novos projetos.

### 4.3 Auto Scaling

- **Auto Scaling Groups (ASG):** policies baseadas em métricas (CPU, requests, custom CloudWatch metrics).  
- **Lifecycle hooks:** executam scripts ao iniciar ou encerrar instâncias.  
- **Scheduled scaling:** ajuste pré-programado para campanhas e horários de pico.

### 4.4 Opções serverless e containers

- **AWS Lambda:** suporta diversas linguagens (Node.js, Python, Java, Go, .NET, Ruby). Limite de 15 minutos por execução.  
- **Amazon API Gateway:** cria APIs REST, HTTP e WebSocket gerenciadas.  
- **AWS Step Functions:** orquestra workflows serverless com estados declarativos.  
- **Amazon EventBridge:** barramento de eventos nativo integrado a SaaS.  
- **Amazon ECS & AWS Fargate:** escolha entre modo EC2 (cluster gerenciado pelo cliente) ou Fargate (serverless).  
- **Amazon EKS:** clusters Kubernetes gerenciados; usa Fargate ou nós EC2.

### 4.5 Implantação e infraestrutura como código

- **AWS CloudFormation:** templates YAML/JSON para provisionamento repetível.  
- **AWS CDK:** infraestrutura como código usando linguagens de programação.  
- **AWS Elastic Beanstalk:** PaaS para aplicações web, automatiza infraestrutura subjacente.  
- **AWS OpsWorks:** automação baseada em Chef/Puppet.  
- **AWS Systems Manager (SSM):** automação, patching, parameter store e run command.

---

## 5. Armazenamento e distribuição de conteúdo

### 5.1 Amazon S3 em detalhes

- **Características:** durabilidade 11 9s, alta disponibilidade, versionamento, replicação (CRR, SRR), criptografia automática (SSE-S3), integração com KMS (SSE-KMS).  
- **Classes de armazenamento:** Standard, Intelligent-Tiering, Standard-IA, One Zone-IA, Glacier Instant Retrieval, Glacier Flexible Retrieval, Glacier Deep Archive.  
- **Políticas de ciclo de vida:** automatizam transição entre classes e expiração de objetos.  
- **Bloqueio de versionamento:** impede exclusão acidental (S3 Object Lock em modo Compliance/Governance).

### 5.2 Comparativo de armazenamento

| Serviço | Tipo | Casos de uso | Observações |
| --- | --- | --- | --- |
| EBS | Bloco | Volumes para EC2 | Alta performance; replicado em uma AZ |
| EFS | Arquivos | Compartilhamento entre instâncias | Escala automática; acesso simultâneo |
| FSx | Arquivos | Sistemas de arquivos específicos (Windows, Lustre, ONTAP) | Integrações com workloads especializados |
| S3 | Objetos | Data lakes, backups, distribuição de conteúdo | APIs REST, eventos nativos |
| Storage Gateway | Híbrido | Integração on-premises ↔ AWS | Modos de arquivo, volume e fitas |

### 5.3 Distribuição e borda

- **Amazon CloudFront:** CDN com suporte a Lambda@Edge, compressão automática, Origin Shield.  
- **AWS Global Accelerator:** otimiza roteamento global via rede da AWS, oferecendo IPs estáticos anycast.  
- **AWS Direct Connect + Site-to-Site VPN:** conectividade dedicada ou criptografada com ambientes locais.

---

## 6. Bancos de dados e analytics

### 6.1 Bancos de dados gerenciados

- **Amazon RDS:** MySQL, PostgreSQL, MariaDB, Oracle, SQL Server. Recursos: Multi-AZ, Read Replicas, backups automáticos, manutenção gerenciada.  
- **Amazon Aurora:** compatível com MySQL/PostgreSQL, até 5x mais rápido; storage distribuído com autoexpansão.  
- **Amazon DynamoDB:** NoSQL key-value, desempenho de milissegundos, escalabilidade automática, global tables.  
- **Amazon Neptune:** banco de grafos para dados altamente conectados.  
- **Amazon DocumentDB (compatível com MongoDB):** armazenamento de documentos JSON com escalabilidade.  
- **Amazon ElastiCache:** caches in-memory (Redis, Memcached).

### 6.2 Data warehouse e análise

- **Amazon Redshift:** data warehouse colunar com capacidade para petabytes, integração com S3 (Redshift Spectrum).  
- **Amazon Athena:** consultas SQL serverless diretamente no S3.  
- **Amazon EMR:** big data com Hadoop/Spark gerenciado.  
- **AWS Glue:** catálogos, ETL, crawlers e jobs.  
- **Amazon QuickSight:** BI serverless com dashboards interativos.  
- **Amazon Kinesis:** ingestão em tempo real (Data Streams, Firehose, Data Analytics, Video Streams).

### 6.3 Machine learning

- **Amazon SageMaker:** plataforma completa para treinar, construir e implantar modelos.  
- **Amazon Rekognition, Comprehend, Lex, Polly:** serviços AI prontos para uso.  
- **Amazon Forecast:** previsão de séries temporais com machine learning.

---

## 7. Gerenciamento, observabilidade e automação

- **Amazon CloudWatch:** métricas, logs, eventos, dashboards, Anomaly Detection.  
- **AWS CloudTrail:** registro de chamadas API, logs de auditoria; integra com S3, CloudWatch Logs, SNS.  
- **AWS Config:** inventário de recursos, avaliação de conformidade com regras.  
- **AWS Budgets & Cost Explorer:** planejamento e visão de custos.  
- **AWS Service Catalog:** catálogo interno de produtos aprovados.  
- **AWS Control Tower:** governança opinativa para múltiplas contas (landing zone).  
- **AWS Systems Manager:** Parameter Store, Patch Manager, Automation Runbooks, Session Manager (acesso sem bastion).

---

## 8. Custos, faturamento e suporte

### 8.1 Estratégias de otimização

1. **Direcionar workloads para o tipo de compra ideal:** instâncias Spot para lotes, Reserved Instances/Savings Plans para cargas previsíveis.  
2. **Dimensionar corretamente:** use AWS Compute Optimizer para recomendações.  
3. **Monitorar e automatizar:** configure budgets e alertas para evitar surpresas.  
4. **Definir tags de custo:** `Cost Allocation Tags` permitem agrupar gastos por equipe/projeto.  
5. **Usar camadas de armazenamento corretas:** transicione dados antigos para classes mais baratas.

### 8.2 Ferramentas financeiras

- **AWS Pricing Calculator:** estimativas antes de implementar workloads.  
- **AWS Budgets:** alertas por e-mail, SNS e chatbots.  
- **AWS Cost Anomaly Detection:** identifica desvios inesperados de gastos.  
- **Cur (Cost and Usage Report):** relatório detalhado em S3, integrável com Athena e QuickSight.

### 8.3 Planos de suporte resumidos

| Plano | Para quem | SLA primário | Destaques |
| --- | --- | --- | --- |
| Basic | Todos os clientes | Sem SLA | Acesso a documentação, fóruns e Trusted Advisor limitado |
| Developer | Equipes em não produção | 12h para sistemas gerais | Orientação técnica durante horário comercial |
| Business | Workloads de produção | 1h para sistemas críticos | Trusted Advisor completo, API de suporte, terceiras partes |
| Enterprise | Workloads críticos | 15 min para casos críticos | TAM dedicado, gerenciamento de eventos e roadmap |

### 8.4 Processos de suporte

- **Abertura de cases:** via console, API ou CLI.  
- **Tipos:** `Account and Billing`, `Service Limit Increase`, `Technical Support`.  
- **SLA:** varia conforme plano e severidade (Sev-1 a Sev-4).  
- **Runbooks:** mantenha procedimentos documentados para incidentes comuns.

---

## 9. Preparação para a prova e plano de estudos

### 9.1 Estrutura do exame (CLF-C02)

| Domínio | Peso | Foco |
| --- | --- | --- |
| Fundamentos de Nuvem | 27% | Princípios, benefícios e conceitos básicos |
| Segurança e Conformidade | 24% | IAM, responsabilidade compartilhada, governança |
| Tecnologia | 33% | Serviços principais, implantação, continuidade |
| Faturamento e Suporte | 16% | Precificação, modelos de cobrança e planos |

- **Formato:** 65 questões (múltipla escolha e múltipla resposta).  
- **Duração:** 90 minutos.  
- **Pontuação de aprovação:** 700 em escala de 100 a 1000.

### 9.2 Plano de estudos de 4 semanas (10h/semana)

| Semana | Objetivos | Ações sugeridas |
| --- | --- | --- |
| 1 | Fundamentos + Infraestrutura | Ler capítulos 1 e 2, assistir 2 vídeos oficiais AWS, fazer 10 questões básicas |
| 2 | Computação + Armazenamento | Estudar capítulos 4 e 5, criar fluxograma de decisão para EC2/S3, praticar 15 questões |
| 3 | Segurança + Observabilidade | Revisar capítulos 3 e 7, montar mapa mental de IAM, praticar 15 questões |
| 4 | Custos + Revisão | Ler capítulo 8, revisar resumo, fazer simulado completo e revisar erros |

### 9.3 Dicas para o dia da prova

- Chegue com 30 minutos de antecedência (prova presencial) ou teste o ambiente online com antecedência.  
- Leia com atenção as perguntas de múltipla resposta (number of answers).  
- Elimine alternativas obviamente incorretas para aumentar probabilidade de acerto.  
- Administre o tempo: 90 minutos ≈ 1 min 20 s por questão.  
- Use marcações para revisar questões duvidosas ao final.

---

## Apêndice A – Glossário essencial

| Termo | Definição concisa |
| --- | --- |
| AZ | Zona de Disponibilidade (Availability Zone) |
| Edge Location | Ponto de presença usado para cache e roteamento |
| IAM Role | Identidade com permissões temporárias assumida por serviços ou usuários |
| MFA | Autenticação multifator |
| Multi-AZ | Implantação redundante em duas AZs para alta disponibilidade |
| Region | Conjunto de pelo menos duas AZs |
| SLA | Service Level Agreement, tempo de resposta esperado |
| VPC | Virtual Private Cloud, rede virtual isolada na AWS |

---

## Apêndice B – Checklist de revisão

- [ ] Sei explicar as diferenças entre S3, EBS, EFS e FSx.  
- [ ] Entendo como funciona o modelo de responsabilidade compartilhada.  
- [ ] Reconheço quando usar ALB, NLB ou Gateway LB.  
- [ ] Consigo sugerir o plano de suporte adequado para um cenário dado.  
- [ ] Sei como otimizar custos com Savings Plans, Budgets e Cost Explorer.  
- [ ] Posso descrever estratégias de migração usando Snow Family e Direct Connect.  
- [ ] Tenho clareza dos serviços serverless mais importantes (Lambda, DynamoDB, API Gateway).  
- [ ] Assimilo as boas práticas de IAM e governos multi-contas com AWS Organizations.

---

## Apêndice C – Questões comentadas

> Utilize estas questões como autoavaliação. Leia todas as alternativas e confira a explicação detalhada.

### Questão 1
Uma startup precisa lançar rapidamente um MVP web, com equipe pequena e foco no código em vez de infraestrutura. Qual serviço facilita o deploy com mínimo gerenciamento operacional?

- A) Amazon EC2 com Auto Scaling  
- B) AWS Elastic Beanstalk  
- C) AWS Lambda com Amazon API Gateway  
- D) Amazon Lightsail

**Resposta:** B  
**Comentário:** Elastic Beanstalk automatiza provisionamento de EC2, ELB, Auto Scaling e outros recursos. Lambda também reduz o gerenciamento, porém exige arquitetura serverless. Lightsail é opção simples, mas menos integrada e flexível que Beanstalk para aplicações web tradicionais.

### Questão 2
Uma empresa quer migrar 50 TB de dados para a AWS sem depender de conexões de rede. Qual serviço atende melhor?

- A) AWS DataSync  
- B) AWS Snowball  
- C) AWS Storage Gateway  
- D) AWS Snowcone

**Resposta:** B  
**Comentário:** Snowball é indicado para dezenas de terabytes. DataSync requer rede. Storage Gateway provê armazenamento híbrido contínuo. Snowcone é limitado a 8 TB.

### Questão 3
Qual ferramenta ajuda você a controlar os gastos antes que atinjam um limite definido?

- A) AWS Budgets  
- B) AWS Cost Explorer  
- C) AWS Billing & Cost Management Dashboard  
- D) AWS Trusted Advisor

**Resposta:** A  
**Comentário:** Budgets permite definir limites e alertas pró-ativos. Cost Explorer analisa gastos depois de ocorridos. Trusted Advisor oferece recomendações, mas não alerta por orçamento.

### Questão 4
Qual serviço fornece avaliação contínua de vulnerabilidades em instâncias EC2 gerenciadas?

- A) AWS Shield  
- B) Amazon GuardDuty  
- C) AWS Security Hub  
- D) Amazon Inspector

**Resposta:** D  
**Comentário:** Inspector avalia vulnerabilidades e exposição em EC2. Shield protege contra DDoS, GuardDuty detecta ameaças com base em logs e Security Hub consolida achados de segurança.

### Questão 5
Você precisa garantir criptografia em repouso e gerenciamento centralizado de chaves para dados armazenados no S3. Qual serviço complementa o S3 nessa tarefa?

- A) AWS IAM  
- B) AWS KMS  
- C) AWS Certificate Manager  
- D) AWS Secrets Manager

**Resposta:** B  
**Comentário:** KMS fornece chaves gerenciadas integradas ao S3 (SSE-KMS). IAM controla acesso, ACM gerencia certificados TLS e Secrets Manager armazena segredos de aplicações.

---

## Concluindo

Parabéns por chegar até aqui!  
Continue revisando, praticando e compartilhando conhecimento. Conte com este material como referência e lembre-se: a melhor forma de consolidar o aprendizado é praticar no console da AWS e construir pequenos projetos.

**Apoie este trabalho via Pix** escaneando o QR Code no `README.md` e receba versões atualizadas do ebook em PDF, fichários de revisão e novos bancos de questões.  

Bons estudos e sucesso na certificação AWS Cloud Practitioner! 🚀
