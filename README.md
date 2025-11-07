![Banner AWS Cloud Practitioner](https://user-images.githubusercontent.com/53017748/179562013-35c6d771-cb11-4d3d-89c0-f15dba44878b.png)

# Guia de Bolso da Certificação AWS Cloud Practitioner

> Aprenda os conceitos essenciais da AWS de forma objetiva, entenda como a prova é estruturada e tenha em mãos um plano de estudo atualizado.

## Como este repositório ajuda
- resumo rápido em português com os termos mais cobrados no exame
- mapa dos serviços fundamentais, organizados por área da prova
- material de apoio para iniciantes que nunca trabalharam com AWS
- ebook detalhado com aprofundamento, exemplos e exercícios

## Como navegar
- `README.md`: guia de bolso, perfeito para revisões rápidas
- `ebook/ebook-aws-cloud-practitioner.md`: ebook completo em formato Markdown, fácil de converter para PDF
- `comando sqs.txt`: bloco de anotações com comandos úteis de SQS

## Apoie via Pix e receba o ebook detalhado

**Quer receber a versão mais completa do material, com atualizações prioritárias e extras exclusivos?**  
Contribua via Pix escaneando o QR Code abaixo:

<a href="https://user-images.githubusercontent.com/53017748/175069759-6bf2473d-6f3c-4b0d-a694-2d86f46d39c4.png">
  <img src="https://img.icons8.com/?size=100&id=gjCwHrMX83X5&format=png&color=000000" alt="QR Code para contribuição via Pix" width="160"/>
</a>

- após contribuir, envie o comprovante abrindo uma issue ou comentário no repositório (não esqueça seu e-mail de contato);
- em até 24 horas você recebe o ebook completo em PDF, com fichas de revisão e banco de questões;
- todo apoio financeiro ajuda a manter o conteúdo atualizado e gratuito para a comunidade.

---

## Mapa rápido dos tópicos

| Área da prova | O que você encontra aqui | Onde aprofundar |
| --- | --- | --- |
| Fundamentos de nuvem | Conceitos básicos, modelos de implantação e infraestrutura global | Seção 1 do README e Capítulo 2 do ebook |
| Tecnologia AWS | EC2, ELB, VPC, serviços serverless e data analytics | Seções 3 a 6 do README e Capítulos 3 e 4 do ebook |
| Segurança | Modelo de responsabilidade, IAM, serviços de proteção e conformidade | Seção 7 do README e Capítulo 5 do ebook |
| Faturamento e Suporte | Estrutura de preços, planos de suporte, orçamentos e billing | Seção 9 do README e Capítulo 6 do ebook |
| Preparação para a prova | Peso dos domínios, estratégias de estudo e checklists | Seção 11 do README e Capítulo 7 do ebook |

---

## 1. Fundamentos da Nuvem AWS

- **O que é computação em nuvem?** Uso de recursos de computação sob demanda, com pagamento conforme o uso, provisionados pela AWS.
- **Modelos de implantação:** nuvem pública (100% AWS), nuvem privada (virtualização local) e nuvem híbrida (combina data center local e AWS).
- **Infraestrutura global:**  
  - *Região:* conjunto de zonas de disponibilidade independentes.  
  - *Zona de disponibilidade (AZ):* datacenter isolado dentro da região, projetado para alta disponibilidade.  
  - *Pontos de Presença (Edge Locations):* rede de distribuição (CDN) usada pelo CloudFront para reduzir latência e armazenar cache.

### Como escolher a região correta?
- cumpra requisitos legais e de residência de dados
- minimize latência para seus usuários finais
- verifique se os serviços necessários estão disponíveis
- compare preços (no Brasil, costuma ser até 50% mais caro que Virgínia)

### Como interagir com a AWS?
- **AWS Management Console:** interface gráfica via navegador
- **AWS CLI:** linha de comando multiplataforma
- **SDKs e APIs:** integração programática com diferentes linguagens

### Criando sua conta
- cada subconta precisa de um e-mail único
- proteja a conta root, usando MFA e evitando operações diárias com esse usuário
- use AWS Organizations para gerenciar várias contas

### Free Tier
- clientes novos têm acesso ao nível gratuito por 12 meses em serviços selecionados
- créditos promocionais de até US$ 200 podem aparecer conforme campanhas
- só há cobrança se você ultrapassar os limites do Free Tier ou optar por planos pagos  
  [Saiba mais](https://aws.amazon.com/pt/free/)

---

## 2. Estrutura de contas e governança

- **Master account x Root user:** a conta mestre é a primeira criada em uma organização; o usuário root possui privilégios totais dentro de uma conta e deve ser usado apenas para tarefas críticas.
- **Boas práticas iniciais:** habilite MFA, crie usuários IAM individuais, preencha contatos de cobrança/segurança e configure auditoria com CloudTrail desde o primeiro dia.

---

## 3. Serviços de computação

### Amazon EC2
- máquinas virtuais escaláveis em diversas famílias de instância
- pagamento por hora ou segundo (Linux)

### EC2 Auto Scaling
- dimensiona horizontalmente a quantidade de instâncias com base em métricas
- trabalha em conjunto com o Elastic Load Balancing

### Tipos de capacidade
- **On-Demand:** paga apenas pelo tempo utilizado, ideal para cargas imprevisíveis
- **Reserved Instances:** compromisso de 1 ou 3 anos com desconto de até 75%
- **Savings Plans:** flexibilidade entre EC2, Fargate e Lambda com até 72% de desconto
- **Spot Instances:** compra capacidade ociosa com até 90% de desconto, sujeita a interrupções
- **Dedicated Hosts:** hardware dedicado para requisitos de licenciamento ou compliance

### Elastic Load Balancing (ELB)
- distribui tráfego entre instâncias em múltiplas AZs
- realiza health checks antes de encaminhar requisições
- tipos principais:
  - *Application Load Balancer (ALB):* camada 7 (HTTP/HTTPS)
  - *Network Load Balancer (NLB):* camada 4 (TCP/UDP)

### Amazon Machine Image (AMI)
- imagens pré-configuradas com sistema operacional e softwares opcionais

---

## 4. Rede, conectividade e entrega

### Amazon VPC
- rede virtual privada na AWS com sub-redes públicas e privadas

### Internet Gateway e NAT
- **Internet Gateway:** conecta a VPC à internet pública
- **NAT Gateway/Instance:** permite que sub-redes privadas façam chamadas de saída com segurança

### AWS Direct Connect
- conexão física dedicada entre seu data center e a AWS
- menor latência e custos previsíveis de transferência

### Security Groups e NACLs
- **Security Group:** firewall de nível de instância, apenas regras de permissão
- **Network ACL:** firewall de nível de sub-rede com regras de permissão e negação

### Amazon Route 53
- serviço de DNS gerenciado, suportando roteamento geográfico, failover e latência

### Amazon CloudFront
- CDN global com cache em edge locations
- integra-se ao Route 53 e pode proteger conteúdo com AWS Shield e WAF

### Amazon CloudSearch
- motor de busca gerenciado para aplicações web

---

## 5. Armazenamento

### Amazon S3
- armazenamento de objetos com durabilidade de 99.999999999%
- tamanho máximo de objeto: 5 TB
- classes principais:
  - *Standard:* acesso frequente, 3 AZs
  - *Intelligent-Tiering:* movimentação automática entre camadas conforme o padrão de acesso
  - *Standard-IA:* acesso esporádico, custo baixo de armazenamento e cobrança por recuperação
  - *One Zone-IA:* hospedagem em uma única AZ, 20% mais barato
  - *Glacier, Glacier Deep Archive:* retenção longa com tempos de recuperação maiores

### Amazon EBS
- armazenamento em blocos para EC2 na mesma AZ
- snapshots incrementais para backup e replicação

### Amazon EFS
- sistema de arquivos distribuído e escalável disponível em múltiplas AZs
- acesso simultâneo por várias instâncias EC2 ou workloads on-premises

### Instance Store
- armazenamento físico acoplado à instância EC2, perde dados ao encerrar

---

## 6. Serverless, containers e analytics

### AWS Lambda
- execução de código sem gerenciar servidores
- billing por invocação e tempo de execução (até 15 minutos)

### Amazon ECS
- orquestração de contêineres compatível com Docker
- integra com Fargate (serverless) ou EC2 (self-managed)

### Amazon EKS
- Kubernetes gerenciado com cluster control plane operado pela AWS

### AWS Fargate
- execução de contêineres sem provisionar servidores

### AWS Outposts
- extensão da infraestrutura AWS para seu data center local

### Amazon Athena
- consultas SQL diretamente no Amazon S3, cobrança por volume lido

### Amazon Kinesis
- ingestão e processamento de streams em tempo real

### AWS Glue
- ETL serverless, catálogo de dados e jobs para preparação analítica

---

## 7. Segurança, identidade e conformidade

### Modelo de responsabilidade compartilhada
- **AWS:** segurança *da* nuvem (infraestrutura, hardware, software gerenciado)
- **Cliente:** segurança *na* nuvem (configuração, acesso, dados, aplicações)

![Responsabilidade compartilhada](https://user-images.githubusercontent.com/53017748/171906239-338c4e21-a287-44a8-993c-577f7bfb5db9.png)

### Boas práticas
- remover chaves de acesso do usuário root
- habilitar MFA para todas as contas críticas
- aplicar princípio do menor privilégio com políticas IAM
- organizar usuários em grupos e usar roles para serviços

### Serviços importantes
- **IAM:** gerenciamento de identidades, políticas e roles
- **AWS Organizations:** consolidação de contas, faturamento e SCPs
- **AWS KMS:** criação e gerenciamento de chaves de criptografia
- **AWS Artifact:** relatórios de compliance e auditoria sob demanda
- **AWS Inspector:** avaliação automatizada de vulnerabilidades
- **Amazon GuardDuty:** detecção inteligente de ameaças
- **AWS Shield:** proteção contra ataques DDoS (Standard e Advanced)
- **AWS WAF:** firewall de aplicação web

---

## 8. Monitoramento e observabilidade

- **Amazon CloudWatch:** métricas, logs, dashboards e alarmes
- **AWS CloudTrail:** trilha de auditoria de chamadas de API, com recurso CloudTrail Insights para detectar padrões anômalos
- **AWS Trusted Advisor:** recomendações de custo, performance, segurança, limites de serviço e tolerância a falhas (alguns checks gratuitos, todos os checks com planos Business/Enterprise)

---

## 9. Custos, faturamento e suporte

### Estrutura de preços
- **Pague conforme o uso:** cobrança por hora/segundo em serviços de computação
- **Economia ao reservar:** Savings Plans e instâncias reservadas reduzem custos mediante compromisso
- **Instâncias Spot:** descontos altos com risco de interrupção
- **Transferência de dados:** saída (download) é cobrada; entrada (upload) não
- **Armazenamento:** cobrança por GB armazenado e, em algumas classes, por recuperação

### Ferramentas financeiras
- **AWS Budgets:** orçamentos customizados com alertas (atualização até 3 vezes ao dia)
- **AWS Cost Explorer:** relatórios interativos de custos e uso, com filtros e agrupamentos

### Planos de suporte
- **Básico (gratuito):** atendimento ao cliente, fóruns e monitoramento básico
- **Developer (a partir de US$ 29/mês):** melhores práticas, diagnóstico, SLA de 12h
- **Business (aprox. US$ 100/mês):** suporte para produção, Trusted Advisor completo, SLA de 1h
- **Enterprise (a partir de US$ 15.000/mês):** gerente técnico dedicado, resposta crítica em 15 minutos

### Abertura de cases
- **Service limit increase:** aumento de limites de recursos por região/serviço
- **Account and billing:** dúvidas de cobrança e gerenciamento
- **Technical support:** disponível nos planos pagos

---

## 10. Arquitetura e migração

### AWS Well-Architected Framework
- cinco pilares: excelência operacional, segurança, confiabilidade, eficiência de performance e otimização de custos
- use milestones para acompanhar evolução e gerar relatórios

### AWS Cloud Adoption Framework (CAF)
- perspectivas de negócio, pessoas, governança, plataforma, segurança e operações para planejar adoção de nuvem

### AWS Snow Family
- **Snowcone (8 TB), Snowball (80 TB) e Snowmobile (até 100 PB)** para transferência física de grandes volumes de dados

### Amazon QuickSight
- serviço de BI escalável com painéis interativos, semelhante ao Power BI

---

## 11. Preparação para a prova

- **Domínios da certificação AWS Cloud Practitioner (CLF-C02):**
  - Fundamentos da Nuvem (27%)
  - Segurança e Conformidade (24%)
  - Tecnologia (33%)
  - Faturamento e Suporte (16%)

### Como estudar
1. Leia o guia de exame oficial e anote objetivos de cada domínio.
2. Utilize este README para revisar conceitos rapidamente.
3. Acesse o ebook detalhado para aprofundar e resolver exercícios.
4. Faça simulados oficiais e acompanhe seus resultados por domínio.
5. Anote dúvidas e valide na documentação AWS ou whitepapers.

### Checklist pré-prova
- [ ] Entende o modelo de responsabilidade compartilhada na prática?
- [ ] Sabe diferenciar classes de armazenamento S3 e cenários ideais?
- [ ] Consegue explicar tipos de preços (On-Demand, Reserved, Spot, Savings Plans)?
- [ ] Reconhece quando usar IAM roles, policies e contas separadas?
- [ ] Consegue propor uma arquitetura básica altamente disponível em duas AZs?

---

## Próximos passos
- Leia o `ebook/ebook-aws-cloud-practitioner.md` para aprofundar cada tópico.
- Faça anotações personalizadas ao lado deste guia para reforçar memorização.
- Compartilhe o repositório com colegas que também estão estudando.
- Contribua via Pix para receber atualizações prioritárias e materiais extras.

Bom estudo e boa prova! 🚀
