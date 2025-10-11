import { useState } from 'react'
import Toolbar from './Toolbar.jsx'
import ProjectList from './ProjectList.jsx'
import projects from '../projectObj.jsx'

const filters = ['All', 'Websites', 'Flayers', 'Business Cards']

function Portfolio() {

  let [filter, setFilter] = useState('All')

  const onSelectFilter = evt => setFilter(evt.target.dataset.filter)
    
  const filteredProjects = (arr, filter) => {
    return filter === 'All' ? arr : arr.filter(item => item.category === filter)
  }
  
  return (
    <div className="container">
      <Toolbar
        filters={filters}
        selected={filter}
        onSelectFilter={onSelectFilter}/>
      <ProjectList projects={filteredProjects(projects, filter)}/>
    </div>
  )
}

export default Portfolio

/*-----Class-----*/

/*
import { Component } from 'react'

export default class Portfolio extends Component {

  state = {
    filter: 'All'
  }

  onSelectFilter = evt => this.setState({ filter: evt.target.dataset.filter })

  filteredProjects = (arr, filter) => {
    return filter === 'All' ? arr : arr.filter(item => item.category === filter)
  }

  render() {

    return( 
      <div className="container">
        <Toolbar
          filters={filters}
          selected={this.state.filter}
          onSelectFilter={this.onSelectFilter}/>
        <ProjectList projects={this.filteredProjects(projects, this.state.filter)}/>
      </div>
    )
  
  }

}
*/