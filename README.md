Se este repositório te ajudou 🙌 <br>
<a href="https://user-images.githubusercontent.com/53017748/175069759-6bf2473d-6f3c-4b0d-a694-2d86f46d39c4.png">
  <img src="https://img.icons8.com/?size=100&id=gjCwHrMX83X5&format=png&color=000000" alt="QR Code" width="30"/>
</a>


# Guia de bolso para certificação AWS Cloud Practitioner

## Introdução a Nuvem AWS

A nuvem é um conjunto de servidores que ficam em outra empresa e você paga somente pelo que utiliza.
Os modelos de implantação de nuvem é Híbrida(on premises e nuvem), 100% Nuvem e Local(nuvem privada - virtualização do servidor local).

* Região = é o conjunto de Zona de disponibilidade (pelo menos 2), são áreas geograficamente isoladas.
* Zona de disponibilidade(AZ) = Uma Zona de Disponibilidade é um único data center ou um grupo de data centers em uma Região. As Zonas de Disponibilidade estão localizadas a dezenas de quilômetros de distância umas das outras. A proximidade é suficiente para haver baixa latência.
* Ponto de Presença - CDN (Edge Locations) = é uma rede inteligente de distribuição de conteúdos para acelerar a comunicação entre as AZs distantes, também faz cache.

### Como escolher uma região?
Avaliar a governança de dados e requisitos legais, Latência, Serviços disponíveis na região(nem todos os serviços estão disponíveis em todas as regiões) e o Preço varia de acordo com a Região(no Brasil costuma ser 50% mais caro do que a Virginia. Devido a impostos, custo de energia, etc). 

### Quais os Tipos de Interação com a AWS?
Linha de comando (console), GUI (Site da AWS) e SDK

### Criação de conta na AWS, informações básicas.
* Pra cada sub-account, é necessário ter uma e-mail único;
* A conta padrão (root account) não deve ser usada como principal.

### Free tier

* Novos clientes da AWS podem começar gratuitamente com o Nível Gratuito da AWS.
Receba US$ 100 em créditos ao se cadastrar e ganhe até mais US$ 100 conforme explora os principais serviços da plataforma.
Você pode testar os serviços da AWS por até 6 meses com o plano gratuito, sem custo ou compromisso.
Não haverá cobrança, a menos que opte pelo plano pago, que oferece escalabilidade para suas operações e acesso completo a mais de 150 serviços da AWS.
  [Saiba mais no site oficial da AWS](https://aws.amazon.com/pt/free/)

### Qual a diferença entre Master Account e Root Account?
Master Account é a primeira conta criada na AWS e Root Account é o usuário dono de uma AWS Account.

## Conceitos básicos da nuvem

### O que é o EC2?
O elestic compute cloud são as máquinas virtuais dentro de um host(servidor) compartilhado.

### O que é o EC2 Auto Scaling?
é o serviço que aumenta ou reduz a escala horizontal das máquinas de acordo com a quantidade de demanda de uso.

### O que é Instâncias spot?
é o leilão de máquinas que estão ociosas na aws, o desconto chega a 90%, mas você pode perder a qualquer instante o uso dessas máquinas.

### O que é o Elastic Load Balance (ELB)?
é o serviço que distribui automaticamente o tráfego entre vários  recursos, como instâncias do Amazon EC2. Ele é execudado no nível de região é escalado automaticamente, antes de enviar ele faz um healf check pra verificar se a máquina destino está up. Embora o Elastic Load Balancing e o Amazon EC2 Auto Scaling sejam serviços separados, eles trabalham juntos para que os aplicativos executados no Amazon EC2 possam fornecer alto desempenho e disponibilidade.
__Ele faz o balanceamento dentro da mesma Região entre AZs__. Com isso ele força a __Alta disponibilidade__.

### Quais são os tipos de Load Balance (ELB)?
* Tem o Application Load Balancer -> funciona na camada 7 (http e https)
* Tem o Network Load Balancer -> funciona na camada 4 (tcp nível de rede)

### O que é o AMI?
O amazon machine image é a imagem do sistema operacional e seus softwares(se instalado na imagem)

### O que é o Virtual Private Cloud - VPC
Rede virtual privada(vpn) na nuvem, que pode ser feito sub-redes públicas e privadas.

### O que é o Gateway da Internet?
Um gateway da internet é uma conexão entre uma VPC e a internet.

### O que é o AWS Direct Connect?
É uma conexão física(fibra) exclusiva, dedicada e privada conectada do seu servidor a AWS.

### O que é o grupo de segurança (Security Group)?
É o ip tables, um __firewall__ da rede. Por padrão nenhum tráfego de entrada é permitido e to tráfego de saída é permitido. No grupo de segurança podemos apenas dar "Permissão", não possui regra de "Negação".

### O que é o Route53?
É o serviço de dns da aws.

### O que é o SNS?
O Simple Notification Service é o serviço de notificação e mensagens da aws (publicação/assinatura). Parecido com SQS com a diferença que também pode enviar mensagens á usuários finais e dividido em tópicos. (exemplo enviar um e-mail)

### O que é o SQS?
O Simple Queue Service é o serviço de fila da AWS que permite que envia, armazena e recebe mensagem entre componentes de software em qualquer volume sem perder mensagens.

### O que é o SES?
é um provedor de serviços de e-mail na nuvem que pode ser integrado a qualquer aplicação para envio de e-mails em massa. (Pode ser usado para email marketing)

## Serviços de container e Servless

### O que é o AWS Lambda?
É o serviço servless da AWS. Permite fazer o upload do código, configurar o gatilho (trigger) para execução do código e aguardar a execução. Esse ambiente é altamente escalavel e auto dimensionável. Adequado para processamento de até no máximo 15 min.

### O que é o ECS?
O Amazon Elastic Container Service é um sistema de gerenciamento de contêineres (Compatível com Docker) altamente dimensionável e de alto desempenho que permite executar e dimensionar aplicativos em contêineres na AWS.

### O que é o EKS?
O Amazon Elastic Kubernetes Service é um serviço totalmente gerenciado que você pode usar para executar o Kubernetes na AWS.

### O que é o AWS Fargate?
é um mecanismo de computação sem servidor para contêineres. Ele funciona com o Amazon ECS e o Amazon EKS.
Com o AWS Fargate, você não precisa provisionar ou gerenciar servidores. O AWS Fargate gerencia sua infraestrutura de servidor para você.

### O que é o AWS Outposts?
É o serviço da AWS que estender a infraestrutura e os serviços AWS para seu data center local.

### O Amazon Athena?
é um serviço de consultas interativas que facilita a análise de dados no Amazon S3 usando SQL padrão. O Athena não precisa de servidor. Portanto, não há infraestrutura para gerenciar e você paga apenas pelas consultas executadas. O Athena é fácil de usar.

### O que é Kinesis?
é um serviço de streaming de dados em tempo real.

### O que é AWS Glue?
é um serviço que oferece todos os recursos necessários para a integração dos dados, e assim é possível começar a analisar seus dados e usá-los em minutos, em vez de meses. A integração de dados é o processo de preparar e combinar os dados para análise, machine learning e desenvolvimento de aplicações.

## Armazenamento

### O que é o EBS?
O elastic block store é o disco(HD) para as máquinas virtuais(EC2), não estão vinculados dentro da instância do EC2, então se encerrar uma instância do EC2, os dados no "HD" do EBS permanecem inalterados. Uma caracteristica é que ele não é dimensionável, caso ele esgote o tamanho terá que criar um outro. A AWS fornece a opção de backup incremental denominada Snapshot. OBS: O EC2 e o EBS PRECISAM estar dentro da MESMA AZ.

### O que é o EFS?
É um sistema de arquivos escalável usado com os serviços de nuvem AWS e recursos locais. À medida que você adiciona e remove arquivos, o Amazon EFS expande e retrai automaticamente. Ele pode dimensionar sob demanda para petabytes sem interromper os aplicativos. 

### Comparação entre o Amazon EBS e o Amazon EFS:
Um volume do __Amazon EBS__ armazena dados em uma _única_ Zona de Disponibilidade. Para anexar uma instância do Amazon EC2 a um volume do EBS, tanto a instância do Amazon EC2 quanto o volume do EBS devem residir na mesma Zona de Disponibilidade.
O __Amazon EFS__ é um serviço regional. Ele armazena dados em _várias_ Zonas de Disponibilidade e entre elas. O armazenamento duplicado permite que você acesse dados simultaneamente de todas as Zonas de Disponibilidade na Região em que um sistema de arquivos está localizado. Além disso, os servidores locais podem acessar o Amazon EFS usando o AWS Direct Connect.

### O que é o Elastic File System?
É um sistema de arquivo nativo da nuvem, escalável e elastico para linux. Pode montar o diretórios em várias máquinas.

### O que é o Instance Store?
São "HDs" vinculados diretamente na instancia do EC2 em execução, se a instância for encerrada, os dados são perdidos.

### O que é o S3?
O simple storage service é o armazenamento para objetos (como se fosse um dropbox), tamanho máximo de um unico objeto é de 5TB

### Quais são os tipos de armazenamentos do S3?
* Glacier Deep Archive(muito frio) -> baixíssimo pra longo prazo (7 a 10 anos) mas tempo mínimo de 180 dias e até 12h para recuperar o arquivo.
* Glacier(frio) -> baixo custo e até 3h a 5h para recuperar o arquivo tempo mínimo de permanência de 90 dias. Há também o __Instant Retrieval__(recupera o arquivo em segundos, mas custa caro quando isso é necessário)
* S3 Standard Infrequent Access - IA (frio) -> Custo na hora de recuperar o objeto, indicado pra dados acessado com pouca frequência.
* S3 One Zone - IA (quente) -> Uma unica zona de disponibilidade e custa 20% menos que o standart.
* S3 Standart (quente) -> 3 zonas de disponibilidade ou mais
* S3 Intelligente - tiering (é mais uma funcionalidade do que camada) -> 3 ou mais zonas de disponibilidades e Move automaticamente o objeto entre as clases com base no padrão de acesso.

## Banco de Dados

### O que é o RDS?
O Relacionation Database Service é o serviço de banco de dados relacional (SQL) da aws. É como se fosse o EC2 com o banco de dados já configurado. O usuário não acessa a máquina toda, apenas o banco de dados. O Amazon RDS é um serviço gerenciado que automatiza tarefas como provisionamento de hardware, configuração de banco de dados, patch e backups.

### O que é o Amazon Aurora?
É um banco relacional de nivel empresarial, compatível com o MySQL ou o PostgreSQL, até 5x mais rápido que o MySQL padrão e 3x que o Postgre, faz backup contínuo para o S3. O preço é 1/10 do custo de bases de dados comerciais

### O que é o DynamoDB?
É o banco NoSQL da aws, serveless, autogerenciável, autoescalável e tem de resposta muito rápido.

### O que é o Amazon Redshift?
O Amazon Redshift é serviço de data warehouse que você pode usar para análise de big data. Ele oferece a capacidade de coletar dados de muitas fontes além de ajudar a entender relações e tendências em todos os seus dados.

### O que é Amazon Neptune?
é um serviço de banco de dados de grafos rápido, confiável e totalmente gerenciado que facilita a criação e a execução de aplicativos.

### O que é o AWS DMS?
O AWS Database Migration Service permite migrar bancos de dados relacionais e não relacionais e outros tipos de armazenamentos de dados para a AWS.
Com o AWS DMS, você __move dados entre bancos de dados de origem e de destino__. Os bancos de dados de origem e de destino podem ser do __mesmo tipo ou de tipos diferentes__. Durante a migração, o banco de dados de origem permanece operacional, reduzindo o tempo de inatividade em qualquer aplicativo que dependa do banco de dados. 

## Conecte e compartilhe seu dados

### O que é o Direct Connect?
É um serviço de link dedicado(link fisico) ligado de um datacenter a outro.(Baixa latência). É importante saber que o direct connect é para velocidade e VPN para segurança.

### O que é o CloudFront?
o AWS CloudFront é um serviço de CDN da web que acelera a distribuição do conteúdo estático e dinâmico da web, como arquivos .html, .css, .js e arquivos de imagem, para os usuários.
Ela usa pontos de presença (Edge locations) espalhados pelo mundo pra ajudar a acelerar a comunicação. Elas estão fora das regions. Elas também realizam o serviço de DNS(Route 53).

### O Amazon CloudSearch 
é um serviço gerenciado na nuvem AWS com o qual é possível configurar, gerenciar e dimensionar uma solução de pesquisa para o seu site ou aplicativo de forma simples e econômica.

## Automatize a implantação

### O que é o CloudFormation?
Ferramenta que provisiona recurso automaticamente a partir de um template yaml ou json(parecido com o terraform). Ele trata infraestrutura como código.

### O que é o Elastic Beanstalk?
A gerencia da infra é toda da aws, é possível subir o código da aplicação (exe: java, php...) e ele cria todos os recursos que é necessário. exemplo: banco de dados, s3 e tudo que precisar, porém o usuário não tem muito controle. O Serviço do Beanstalk não é cobrado $, o que é cobrado é os recursos de infraestrutura que ele provisonar. 

### Diferença entre o CloudFormation e o Elastic Beanstalk?
O CloudFormation provisiona infraestrutura para qualquer serviço dentro da AWS.
O Elastic Beanstalk é feito para provisionar infraestrutura para aplicações WEB.

## Segurança

### Quais os conceitos de resposabilidade compartilhada?
O Usuário é responsável pela segurnaca __na__ nuvem.
A AWS é responsável pela segurnaca __da__ nuvem.
![image](https://user-images.githubusercontent.com/53017748/171906239-338c4e21-a287-44a8-993c-577f7bfb5db9.png)


### Quais as boas práticas de segurança?
* Não use a conta root para subir serviços;
* Habilite o MFA (Multiplo fator de autenticação) para o root account;
* Crie contas individuais para usuários (IAM);
* Preencha  os dados de contato para "Cobranças", "Operações" e "Segurança";

### O que é o IAM?
O Identity and Access Management é o controle com segurança de acesso, nele você diz quem vai acessar o quê. 
Pelo AIM você cria e gerencia usuários, policy e roles.

### Qual a diferença entre role e policy?
* A __role__ é a autorização de serviço para serviço.Ela não é associada a usuários ou grupo, É simplesmente uma regra que diz que um __serviço A pode acessar os recursos do serviço B__.
* A __policy__ é a autorização entre grupo de usuário para serviço. Policy não é para usuário e sim para grupo, ela restringe o uso de SERVIÇO.
Exemplo de policy de serviço: O grupo de usuários não podem acessar os serviços de Lambda. 

### Quais são as boas práticas de segurança?
Excluir chaves de acesso do usuário root, criar um usuário do IAM, conceder acesso de administrador e usar as credenciais do IAM para interagir com a AWS, habilitar o MFA(Autenticador de 2 fatores).

### O que é o Amazon Inspector?
Realiza a avaliação das aplicações buscando vulnerabilidades.

### O que é o Amazon GuardDuty?
O Amazon GuardDuty é um serviço que fornece detecção inteligente de ameaças para sua infraestrutura e seus recursos AWS. Ele identifica ameaças monitorando continuamente a atividade da rede e o comportamento da conta no seu ambiente AWS.

### O que é o AWS Shield?
É um serviço de proteção contra ataque de DDOS. A versão Stardard(free), a versão Advanced(+-$3000/mês mas se vc sofrer perdas financeiras devido o ataque, vc é ressarcido).

### O que é o AWS WAF?
Firewall de aplicação web para filtar o tráfego de entrada detectando rastros de agentes mal intencionados.

### O que é o AWS KMS?
O AWS Key Management Service (AWS KMS) permite que você execute operações de criptografia pelo uso de chaves de criptografia.
Você pode usar o AWS KMS para criar, gerenciar e usar chaves de criptografia. 

### O que é o AWS Artifect?
Ele fornece os relatórios de conformidade com os orgãos que a aws atende as leis e regulamentação.

### O que é o AWS Organizations?
É um local central para gerenciar várias contas da AWS, consolidar faturamento e agrupar hieraquicarmente as contas.

## Monitoramento e Análise

### O que é o CloudWatch?
É o serviço de monitoramento de recursos da aws (uso de cpu, quantidade de vezes aque a pagina foi acessada, criar alarmes...), gerenciar várias métricas e configurar ações de alarme de acordo com os dados dessas métricas.

### O que é o AWS CloudTrail?
O AWS CloudTrail registra as chamadas de API realizadas na sua conta. As informações gravadas são identidade do chamador da API, hora da chamada da API, endereço IP de origem do chamador da API e muito mais. Você pode pensar no CloudTrail como uma “trilha” de migalhas de pão (ou um log de ações) que alguém deixou para trás.

Lembre-se de que você pode usar chamadas de API para provisionar, gerenciar e configurar seus recursos AWS. Com o CloudTrail, você pode visualizar um histórico completo de atividades do usuário e chamadas de API de seus aplicativos e recursos. 
* O que é CloudTrail Insights? Esse recurso opcional permite que o CloudTrail detecte automaticamente atividades de API incomuns em sua conta AWS.

### O que é o Trusted Advisor?
O AWS Trusted Advisor é um serviço que fornece orientação para ajudá-lo a reduzir custos, aumentar a performance, melhorar a segurança, verifica a tolerância a falhas e os limites de serviço. Alguns recursos dele é gratuíta e outros vem agregado ao plano de suporte(a partir do Business), então se não tiver a assinatura mensal de suporte, não terá esse serviço.

## Suporte e Definição de Preços

### Quais são os Planos de Suporte?
* Básico (grátis)-> Atendimento ao cliente, fóruns de suporte, Verificações de integridade de serviços.
* Desenvolvedor ($29/mês)-> tudo do basico + Orientação sobre melhores práticas, Ferramentas de diagnóstico do cliente, suporte à arquitetura básica, um contato primário para abrir chamados (case) de suporte com SLA de 12h para sistemas que não está em produção e 24h para suporte geral.
* Business (+-$100/mês)-> tudo do DEV + Orientação sobre arquitetura de aplicações, IAM para controlar o acesso de indivíduos ao AWS Support, AWS Trusted Advisor completo, Uma API para interagir com o Support Center e o Trusted Advisor, Suporte a Softwares de terceiro e SLA de 1h.
* Empresarial (inicial de $15,000/mês)-> tudo do Business + Orientações sobre arquitetura de aplicações, Gerenciamento de eventos de infraestrutura, Gerente técnico da conta, Encaminhamento de casos prioritário, Analises empresariais de gerenciamento. SLA de 15 minutos para carga de trabalho crítica.

### O que é um Suporte Case?
É uma chamado ao time de suporte. Todos os chamado são denominados Case.

### Quais os tipos de Cases que podem ser aberto no Support Center?
* Service limit increase -> Solicitações para aumentar limites de recursos. Exemplo: aumentar o limite default de 10 EC2 para 50 EC2, sempres seleciona o Region e serviço.
* Account and billing support -> Cases referente a conta e cobranças.
* Technical support (Somente pra quem paga um plano de suporte) -> Suporte técnico.

### Como você paga a AWS?
#### Computação
##### Pague conforme o uso
EC2 Cobrado por hora ou segundo*(*somente linux).
##### Savings Plans
Preço mais baixo pro EC2, AWS lambda e AWS Fargate, diante de um compromisso de uso de 1 ou 3 anos. Nesse modelo, pode chegar numa economia de até 72% do custo de computação da AWS.
##### Instâncias Reservadas
Indicadas para utilização de recursos previsíveis, com desconto de até 75%. Deve se comprometer com um prazo de 1 a 3 anos, e há 3 opções de pagamento, tudo adiantado, adiantado parcialmente, ou sem adiantamento.
##### Instâncias Spot
Elas permite solicitar EC2 com desconto de até 90%, mas a AWS pode solicitar a qualquer momento a instância de volta, dando um tempo de 2 minutos.
##### Host Dedicados
São hosts físicos dedicados sem compartilhamento com outros usuários.

*Economize ao reservar; Pague menos usando mais.
* Armazenamento: Cobrado normamente por GB
* Transferência de dados: A saída é cobrada(download), upload não é cobrado, cobrado por GB.

### O que é a AWS Budgets?
No AWS Budgets, você pode criar orçamentos para planejar o uso do serviço, os custos de serviço e as reservas de instâncias.
As informações do AWS Budgets são atualizadas três vezes por dia. Isso ajuda você a definir com precisão a proximidade entre seu uso e os valores orçados ou limites de nível gratuito da AWS.
No AWS Budgets, você também pode definir alertas personalizados para quando seu uso exceder (ou estiver prestes a exceder) o valor orçado.

### O que é o AWS Cost Explorer?
O AWS Cost Explorer é uma ferramenta que permite visualizar, interpretar e gerenciar seus custos e uso da AWS ao longo do tempo.
O AWS Cost Explorer inclui um relatório básico dos custos e do uso dos cinco principais serviços da AWS de acúmulo de custos. Você pode aplicar filtros e grupos personalizados para analisar seus dados. Por exemplo, você pode exibir o uso de recursos no nível por hora.

## Arquitetura

### O que é o Well-Architected Framework?
É um conjunto de boas práticas que me guiam no projeto de infraestrutura.
É um questionário que contém perguntas sobre o seu ambiente da aws e que no final será emitido um relatório com os níveis de risco que você tem dentro da aws.
São dicas separado e pilares (*Excelencia operacional, Segurança, Confiabilidade, Performance, Otimização de custo*) para melhorar seu ambiente da aws.
Pode-se fazer uma Tag (Milestone) para marcar e medir pontos a partir que for evoluindo e melhorando a arquitetura. O Milestone é importante para acompanhar as evoluções da arquitetura a medida que vai respondendo o "formulário" do well-architected. É possível também gerar um relatório bem detalhado do momento atual.

### Quais são os cinco pilares da estrutura?
* Excelência Operacional
* Segurança
* Confiabilidade
* Eficiência de performance
* Otimização de custo

## Migração e Inovação

###  O que é o AWS CAF?
O AWS Cloud Adoption Framework (AWS CAF) organiza orientações em seis áreas de foco chamadas __perspectivas__. Cada perspectiva aborda responsabilidades distintas. O processo de planejamento ajuda as pessoas certas em toda a organização a se prepararem para as mudanças futuras.

Em geral, as perspectivas de __negócio, pessoas e governança__ se concentram nas capacidades comerciais, enquanto as perspectivas de __plataforma, segurança e operações__ se concentram em capacidades técnicas.

### O que é o AWS Snow Family?
A AWS Snow Family é uma coleção de dispositivos físicos para transporte físico de até exabytes de dados para dentro e para fora da AWS. 
A AWS Snow Family consiste nos serviços __AWS Snowcone__(Capacidade de 8TB), __AWS Snowball__(Capacidade de 80TB) e __AWS Snowmobile__(100 petabytes).

# O que é o Amazon QuickSight?
É um serviço de business intelligence (BI) em escala de nuvem que você pode usar para fornecer easy-to-understandinsights para as pessoas com quem você trabalha, onde quer que estejam. Tipo um power BI

# Preparação para a prova
### Divisão de perguntas
![image](https://user-images.githubusercontent.com/53017748/179562013-35c6d771-cb11-4d3d-89c0-f15dba44878b.png)
