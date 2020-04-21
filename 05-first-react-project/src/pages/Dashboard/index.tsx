import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import { Title, Form, Repositories } from './styles';

import logo from '../../assets/logo.svg';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logo} alt="Logo" />
      <Title>Explore repositórios no Github</Title>
      <Form>
        <input type="text" placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/49873623?s=460&u=9899fe9d9c921a010e08ad0d8878cacf123920cd&v=4"
            alt="Takao"
          />
          <div>
            <strong>recketseat/unform</strong>
            <p>Descrição do repositorio</p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars3.githubusercontent.com/u/49873623?s=460&u=9899fe9d9c921a010e08ad0d8878cacf123920cd&v=4"
            alt="Takao"
          />
          <div>
            <strong>recketseat/unform</strong>
            <p>Descrição do repositorio</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
