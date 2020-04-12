import React, {useState, useEffect} from 'react';

import Header from './components/Header';

import './App.css';

import api from './services/api';

function App(){
   const [projects, setProjects] = useState([]);

   useEffect(() => {
      api.get('projects').then(response => {
         setProjects(response.data);
      })
   }, [])
   
   async function handleAdd(){
      const response = await api.post('projects', 
      {
         title: `Novo projeto ${Date.now()}`,
         owner: "Renato T M Lima"
      });
      
      setProjects([...projects, response.data]);
   }
   
   return (
      <>
         <Header title="Home page"/>
         <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
         </ul>

         <button type="button" onClick={handleAdd}>Adicionar projeto</button>
      </>
   )
}

export default App;