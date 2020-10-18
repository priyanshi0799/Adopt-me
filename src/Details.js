import React from "react";
import pet from "@frontendmasters/pet";
import Carousal from "./Carousal";
import ErrorBoundary from "./ErrorBoundary";
import ThemeContext from "./ThemeContext";
import Modal from "./Modal";
import { navigate } from "@reach/router";

//arrow functions dont create new contexts
class Details extends React.Component {
  constructor(props) {
    super(props);

    // Object.assign(oldState, newState)
  }
  state = {
    loading: true,
    showModal: false,
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
        url: animal.url,
        loading: false,
      });
    }, console.error);
  }

  toggleModal = () => {
    this.setState({
      showModal: !this.state.showModal,
    });
  };

  adopt = () => navigate(this.state.url);

  render() {
    if (this.state.loading) {
      return <h1>Loading...</h1>;
    }

    const {
      animal,
      name,
      location,
      description,
      media,
      breed,
      showModal,
    } = this.state;
    return (
      <div className="details">
        <Carousal media={media} />
        <div>
          <h1>{name}</h1>
          <h2>{`${animal} - ${breed} - ${location}`}</h2>
          <ThemeContext.Consumer>
            {(themeHook) => (
              <button
                style={{ backgroundColor: themeHook[0] }}
                onClick={this.toggleModal}
              >
                Adopt {name}
              </button>
            )}
          </ThemeContext.Consumer>

          <p>{description}</p>
          {showModal ? (
            <Modal>
              <div>
                <h1>Would you like to adopt {name}?</h1>
                <div className="buttons">
                  <button onClick={this.adopt}>Yes</button>
                  <button onClick={this.toggleModal}>No, I am a monster</button>
                </div>
              </div>
            </Modal>
          ) : null}
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
