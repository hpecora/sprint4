My Next App
Este projeto é uma aplicação web desenvolvida com Next.js e TypeScript. A aplicação oferece uma série de funcionalidades e 
serviços voltados para atendimento de usuários em diversas situações, como solicitação de guincho, consultas a planos e agendamentos, entre outros.

Estrutura do Projeto
Arquivos de Configuração
next.config.js: Arquivo de configuração do Next.js, utilizado para definir opções de build, rotas e variáveis de ambiente.
tsconfig.json: Configuração do TypeScript, essencial para definir as opções de compilação do projeto.
package.json: Contém as dependências do projeto e scripts para execução.

API DO PROJETO: 
A nossa API ela fooi feita para a pessoa digitar o seu CEP na página Guincho e aparecer o local onde ela e encontrar por exempl:
CEP: 03122060
RUA: Conego Antonio Lessa
BAIRRO: Parque da Mooca
UF: SP


Diretório pages/
Este diretório contém as principais páginas da aplicação. Abaixo, estão descrições detalhadas de cada página e como elas funcionam:

index.tsx (Página Inicial): A página inicial da aplicação, onde o usuário pode encontrar links para outras seções e uma introdução aos serviços oferecidos.

home.tsx: Página que funciona como uma segunda página de boas-vindas, exibindo informações básicas sobre os serviços. Os usuários podem acessar opções como agendamento e 
informações sobre planos de assinatura.

agendamento.tsx: Página para agendar serviços. Os usuários podem escolher uma data e um horário específicos para solicitar assistência ou revisão de veículos. 
O formulário pede informações de contato e detalhes do serviço desejado.

faqs.tsx: Esta página responde a perguntas frequentes, fornecendo informações essenciais sobre o funcionamento do aplicativo, detalhes de segurança e suporte técnico.

guincho.tsx: Nesta página, os usuários podem solicitar um serviço de guincho. Após inserir seu CEP, o sistema localizará a posição do usuário 
e enviará um guincho ao local solicitado. Ideal para situações de emergência em que o usuário precisa de assistência rodoviária rapidamente.

login.tsx: Página de login para usuários. Aqui, o usuário insere suas credenciais para acessar áreas restritas da aplicação.

participantes.tsx: Exibe uma lista dos membros ou equipes que fazem parte do serviço, incluindo breve descrição e fotos dos participantes.

planos.tsx: Página que apresenta os diferentes planos de assinatura disponíveis, com detalhes sobre preços, benefícios e características de cada plano.

problema.tsx: Esta página permite que o usuário relate problemas encontrados com o veículo. O formulário detalhado ajuda a identificar a situação específica
 e a fornecer um suporte mais preciso.

registrar.tsx: Página de registro onde novos usuários podem se cadastrar, preenchendo informações como nome, e-mail e senha para criar uma conta.

revisao.tsx: Página para agendamento de revisão de veículos. Os usuários escolhem uma data e local para a revisão, ideal para manutenções periódicas.

Componentes de Estilo (*.module.css): Cada página tem um arquivo de estilo correspondente (ex.: guincho.module.css) que define o layout e a aparência dessa página específica.

IMAGENS (IMG/): Diretório com imagens usadas no projeto, incluindo logos e ilustrações para enriquecer a experiência visual
