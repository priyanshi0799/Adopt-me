import React from "react";
import pet from "@frontendmasters/pet";
import Carousal from "./Carousal";
import ErrorBoundary from "./ErrorBoundary";

//arrow functions dont create new contexts
class Details extends React.Component {
  constructor(props) {
    super(props);

    // Object.assign(oldState, newState)
  }
  state = {
    loading: true,
  };
  componentDidMount() {
    // throw new Error("lol");
    pet.animal(this.props.id).then(({ animal }) => {
      this.setState({
        name: animal.name,
        animal: animal.type,
        location: `${animal.contact.address.city}, ${animal.contact.address.state}`,
        description: animal.description,
        media: animal.photos,
        breed: animal.breeds.primary,
        loading: false,
      });
    }, console.error);
  }

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const { animal, name, location, description, media, breed } = this.state;
    return (
      <div className="details">
        <Carousal media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <button>Adopt {name}</button>
          <p>{description}</p>
        </div>
      </div>
    );
  }
}

export default function DetailsWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Details {...props} />
    </ErrorBoundary>
  );
}
