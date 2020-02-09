import React, {Component} from 'react';

import {FaGithubAlt, FaPlus, FaSpinner} from 'react-icons/fa';

import {Container, Form, SubmitButton} from './styles';

import api from '../../services/api';

export default class Main extends Component {
   state = {
      newRepo: '',
      repositories: [],
      loading: false
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
                  value={this.state.newRepo}
                  onChange={this.handleInputChange}
               />
               <SubmitButton loading={this.state.loading}>
                  {this.state.loading ? (
                     <FaSpinner color="#FFF" size={14} />
                  ) : (
                     <FaPlus color="#FFF" size={14} />
                  )}
               </SubmitButton>
            </Form>
         </Container>
      )
   }
}
