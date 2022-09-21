import { Component } from "react";
import "./card-container.styles.css"


class CardList extends Component{
    render() {

        // destructuring monsters from this keyword
        const { monsters } = this.props;
        return (
          <div className="card-list">
            {monsters.map((monster) => (
              <div className="card-container" key= {monster.id}>
                <img alt={`monster ${monster.name}`}src={`https://robohash.org/${monster.id}?set=set2`} />
                    <h1>{monster.name}</h1>
                    <p>{monster.email }</p>
              </div>
            ))}
          </div>
        );
    }
}

export default CardList;