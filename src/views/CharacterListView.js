import React from "react";
import { connect } from "react-redux";

import { CharacterList } from "../components";
// import actions
import { getStarWars } from '../actions';

class CharacterListView extends React.Component {
  constructor(props) {
    super(props);
  }

 
  componentDidMount() {
    
    this.props.getStarWars()   
    
    console.log('Hey CDM Running with:', this.props.characters )
    // call our action
  }

  render() {
    
    return (
      <div>
        <div>
          {this.props.isFetching && (
            <h3>I'm Boba the Fett...ching</h3>
          )}
                  
        </div>
      
        <div className="CharactersList_wrapper">
          <CharacterList characters={this.props.characters} />
        </div>
      </div>
    );
  }
}

// our mapStateToProps needs to have two properties inherited from state
// the characters and the fetching boolean

// console.log('MSTP is running:' this.props.characters);

const mapStateToProps = state => ({
 
  characters: state.charsReducer.characters,
  isFetching: state.charsReducer.isFetching
})



export default connect(
  mapStateToProps,
  { getStarWars }
)(CharacterListView);
