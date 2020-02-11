import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {FaGithubAlt, FaPlus, FaSpinner} from 'react-icons/fa';

import {Form, SubmitButton, List } from './styles';

import Container from '../../components/Container';

import api from '../../services/api';

export default class Main extends Component {
   state = {
      newRepo: '',
      repositories: [],
      loading: false
   }

   //carregar os dados do localstorage
   componentDidMount(){
      const repositoriesLS = JSON.parse(localStorage.getItem('repositories'));

      if(repositoriesLS) {
         this.setState({repositories: repositoriesLS});
      }
   }

   //salvar os dados do localstorage
   componentDidUpdate(_, prevState){
      if(prevState.repositories !== this.state.repositories){
         localStorage.setItem('repositories', JSON.stringify(this.state.repositories));
      }
   }

   handleInputChange = e => {
      this.setState({newRepo: e.target.value});
   }

   handleSubmit = async e => {
      e.preventDefault();

      this.setState({loading: true});

      const response = await api.get(`/repos/${this.state.newRepo}`);

      const data = {
         name: response.data.full_name
      }

      this.setState({
         repositories: [...this.state.repositories, data],
         newRepo: '',
         loading: false
      })
   }
   
   render (){
      const {newRepo, loading, repositories} = this.state;

      return(
         <Container>
            <h1>
               <FaGithubAlt/>
               Repositórios
            </h1>

            <Form onSubmit={this.handleSubmit}>
               <input 
                  type="text"
                  placeholder="Adicionar repositório"
                  value={newRepo}
                  onChange={this.handleInputChange}
               />
               <SubmitButton loading={loading}>
                  {loading ? (
                     <FaSpinner color="#FFF" size={14} />
                  ) : (
                     <FaPlus color="#FFF" size={14} />
                  )}
               </SubmitButton>
            </Form>

            <List>
               {repositories.map(repository => (
                  <li key={repository.name}>
                     <span>{repository.name}</span>
                     <Link to={`/repository/${encodeURIComponent(repository.name)}`}>Detalhes</Link>
                  </li>
               ))}
            </List>
         </Container>
      )
   }
}
