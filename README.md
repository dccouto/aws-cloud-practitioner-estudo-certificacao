# aws-resumo-certificacao-practitioner
Resumo do estudo para a certificação AWS Practitioner


## Módulo 1 - Introdução a Nuvem AWS

A nuvem é um conjunto de servidores que ficam em outra empresa.
Os modelos de implantação de nuvem é Híbrida(on premises e nuvem), 100% Nuvem e Local(nuvem privada - virtualização do servidor local).

* Região = é o conjunto de Zona de disponibilidade (pelo menos 2)
* Zona de disponibilidade(AZ) = conjunto de Data centers que estão próximos.
* Ponto de Presença (CDN) = é uma rede inteligente de distribuição de conteúdos para acelerar a comunicação entre as AZs distantes, também faz cache.

### Como escolher uma região?
Avaliar a governaça de dados e requisitos legais, Latência, Serviços disponíveis na região e o Preço varia de acordo com a Região(no Brasil costuma ser 50% mais caro do que a Virginia. Devido a impostos, custo de energia, etc). 

### Quais os Tipos de Interação com a AWS?
Linha de comando, GUI e SDK

### Criação de conta na AWS, informações básicas.
* Pra cada sub-account, é necessário ter uma e-mail único;
* A conta padrão (root account) não deve ser usada como principal.

### Free tier
* Os serviços free são válidos por 1 ano
* VMs gratuítas são da família t2 micro e tem limite de 750 horas por mês.

### Qual a diferença entre Master Account e Root Account?
Master Account é a primeira conta criada na AWS e Root Account é o usuário dono de uma AWS Account.

## Módulo 2 - Conceitos básicos da nuvem

### O que é o EC2?
O elestic compute cloud são as máquinas virtuais dentro de um host(servidor) compartilhado.

### O que é o EC2 Auto Scaling?
é o serviço que aumenta ou reduz a escala horizontal das máquinas de acordo com a quantidade de demanda de uso.

### O que é Instâncias spot?
é o leilão de máquinas que estão ociosas na aws, o desconto chega a 90%, mas você pode perder a qualquer instante o uso dessas máquinas.

### O que é o Elastic Load Balance?
é o serviço que distribui automaticamente o tráfego entre vários  recursos, como instâncias do Amazon EC2. Ele é execudado no nível de região é escalado automaticamente, antes de enviar ele faz um healf check pra verificar se a máquina destino está up. Embora o Elastic Load Balancing e o Amazon EC2 Auto Scaling sejam serviços separados, eles trabalham juntos para que os aplicativos executados no Amazon EC2 possam fornecer alto desempenho e disponibilidade.

### Quais são os tipos de Load Balance?
* Tem o Application Load Balancer -> funciona na camada 7
* Tem o Network Load Balancer -> funciona na camada 4

### O que é o AMI?
O amazon machine image é a imagem do sistema operacional e seus softwares(se instalado na imagem)

### O que é o EBS?
O elastic block store é o disco(HD) para as máquinas virtuais(EC2)

### O que é o S3?
O simple storage service é o armazenamento para objetos (como se fosse um dropbox), tamanho unico de um objeto é de 5TB

### Quais são os tipos de armazenamentos do S3?
* Glacier Deep Archive(muito frio) -> baixíssimo pra longo prazo (7 a 10 anos) mas tempo mínimo de 180 dias e até 12h para recuperar o arquivo.
* Glacier(frio) -> baixo custo e até 3h a 5h para recuperar o arquivo tempo mínimo de permanência de 90 dias.
* S3 Standard Infrequent Access - IA (frio) -> Custo na hora de recuperar o objeto, indicado pra dados acessado com pouca frequência.
* S3 One Zone - IA (quente) -> Uma unica zona de disponibilidade e custa 20% menos que o standart.
* S3 Standart (quente) -> 3 zonas de disponibilidade ou mais
* S3 Intelligente - tiering (é mais uma funcionalidade do que camada) -> 3 ou mais zonas de disponibilidades e Move automaticamente o objeto entre as clases com base no padrão de acesso.

### O que é o Virtual Private Cloud - VPC
Rede virtual na nuvem

### O que é o grupo de segurança?
É o ip tables, um firewall da rede. Por padrão nenhum tráfego de entrada é permitido e to tráfego de saída é permitido. No grupo de segurança podemos apenas dar "Permissão", não possui regra de "Negação".

### O que é o Route53?
É o serviço de dns da aws.

### O que é o CloudWatch?
É o serviço de monitoramento de recursos da aws (uso de cpu, quantidade de vezes aque a pagina foi acessada, criar alarmes...).

### O que é o SNS?
O Simple Notification Service é o serviço de notificação e mensagens da aws (publicação/assinatura). Parecido com SQS com a diferença que também pode enviar mensagens á usuários finais e dividido em tópicos. (exemplo enviar um e-mail)

### O que é o SQS?
O Simple Queue Service é o serviço de fila da AWS que permite que envia, armazena e recebe mensagem entre componentes de software em qualquer volume sem perder mensagens.

### O que é o RDS?
O Relacionation Database Service é o serviço de banco de dados relacional (SQL) da aws. É como se fosse o EC2 com o banco de dados já configurado. O usuário só acessa a máquina toda, apenas o banco de dados.

### O que é o Amazon Aurora?
É um banco relacional de nivel empresarial, compatível com o MySQL ou o PostgreSQL, até 5x mais rápido que o MySQL padrão e 3x que o Postgre, faz backup contínuo para o S3.

### O que é o DynamoDB?
É o banco NoSQL da aws.

## Serviços de container e Servless

### O que é o AWS Lambda?
É o serviço servless da AWS. Permite fazer o upload do código, configurar o gatilho (trigger) para execução do código e aguardar a execução. Esse ambiente é altamente escalavel e auto dimensionável. Adequado para processamento de até 15 min.

### O que é o ECS?
O Amazon Elastic Container Service é um sistema de gerenciamento de contêineres (Compatível com Docker) altamente dimensionável e de alto desempenho que permite executar e dimensionar aplicativos em contêineres na AWS.

### O que é o EKS?
O Amazon Elastic Kubernetes Service é um serviço totalmente gerenciado que você pode usar para executar o Kubernetes na AWS.

### O que é o AWS Fargate?
é um mecanismo de computação sem servidor para contêineres. Ele funciona com o Amazon ECS e o Amazon EKS.
Com o AWS Fargate, você não precisa provisionar ou gerenciar servidores. O AWS Fargate gerencia sua infraestrutura de servidor para você.

## Módulo 3 - Automatize a implantação

### O que é o CloudFormation?
Ferramenta que provisiona recurso automaticamente a partir de um template yaml ou json. (parecido com o terraform)

### O que é o Elastic Beanstalk?
A gerencia da infra é toda da aws, é possível subir o código da aplicação (exe: java) e ele cria todos os recursos que é necessário. exe: banco de dados, s3 e tudo que precisar, porém o usuário não tem muito controle.


## Módulo 3 - Conecte e compartilhe seu dados

### O que é o Direct Connect?
É um serviço de link dedicado(link fisico) ligado de um datacenter a outro.(Baixa latência). É importante saber que o direct connect é para velocidade e VPN para segurança.

### O que é o Elastic File System?
É um sistema de arquivo nativo da nuvem, escalável e elastico para linux. Pode montar o diretórios em várias máquinas.

### O que é o CloudFront?
o AWS CloudFront é um serviço da web que acelera a distribuição do conteúdo estático e dinâmico da web, como arquivos .html, .css, .js e arquivos de imagem, para os usuários.

## Módulo 4 - Segurança

### Quais as boas práticas de segurança?
* Não use a conta root para subir serviços;
* Habilite o MFA (Multiplo fator de autenticação) para o root account;
* Crie contas individuais para usuários (IAM);
* Preencha  os dados de contato para "Cobranças", "Operações" e "Segurança";

### O que é o IAM?
O Identity and Access Management é o controle com segurança de acesso, pelo AIM você cria usuários.

### Qual a diferença entre role e policy?
* A role é a autorização de serviço para serviço.
* A policy é a autorização entre grupo de usuário para serviço. Policy não é para usuário e sim para grupo, ela restringe o uso de SERVIÇO.
Exemplo de policy de serviço: O grupo de usuários não podem acessar os serviços de Lambda. 

### Quais são as boas práticas de segurança?
Excluir chaves de acesso do usuário root, criar um usuário do IAM, conceder acesso de administrador e usar as credenciais do IAM para interagir com a AWS, habilitar o MFA(Autenticador de 2 fatores).

### O que é o Amazon Inspector?
Realiza a avaliação das aplicações buscando vulnerabilidades.

### O que é o AWS Shield?
É um serviço de proteção contra ataque de DDOS. A versão Stardard(free), a versão Advanced(+-$3000/mês mas se vc sofrer perdas financeiras devido o ataque, vc é ressarcido).

### O que é o AWS Artifect?
Ele fornece os relatórios de complience com os orgãos que a aws atende as leis e regulamentação.

## Módulo 5 - Definições de Preço

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

** Economize ao reservar; Pague menos usando mais.
* Armazenamento: Cobrado normamente por GB
* Transferência de dados: A saída é cobrada(download), upload não é cobrado, cobrado por GB.

## Módulo 5 - Suporte

### O que é o Trusted Advisor?
O AWS Trusted Advisor é um serviço que fornece orientação para ajudá-lo a reduzir custos, aumentar a performance e melhorar a segurança. Ele vem agregado ao suporte, então se não tiver a assinatura mensal de suporte, não terá esse serviço.

### Quais são os Planos de Suporte?
* Básico (grátis)-> Atendimento ao cliente, fóruns de suporte, Verificações de integridade de serviços.
* Desenvolvedor ($29/mês)-> tudo do basico + Orientação sobre melhores práticas, Ferramentas de diagnóstico do cliente, suporte à arquitetura básica, um contato primário para abrir chamados (case) de suporte com SLA de 12h para sistemas que não está em produção.
* Business (+-$100/mês)-> tudo do DEV + Orientação sobre arquitetura de aplicações, IAM para controlar o acesso de indivíduos ao AWS Support, AWS Trusted Advisor completo, Uma API para interagir com o Support Center e o Trusted Advisor, Suporte a Softwares de terceiro e SLA de 1h.
* Empresarial (inicial de $15,000/mês)-> tudo do Business + Orientações sobre arquitetura de aplicações, Gerenciamento de eventos de infraestrutura, Gerente técnico da conta, Encaminhamento de casos prioritário, Analises empresariais de gerenciamento.

### O que é um Suporte Case?
É uma chamado ao time de suporte. Todos os chamado são denominados Case.

### Quais os tipos de Cases que podem ser aberto no Support Center?
* Service limit increase -> Solicitações para aumentar limites de recursos. Exemplo: aumentar o limite default de 10 EC2 para 50 EC2, sempres seleciona o Region e serviço.
* Account and billing support -> Cases referente a conta e cobranças.
* Technical support (Somente pra quem paga um plano de suporte) -> Suporte técnico.

## Módulo 6 - Arquitetura

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
