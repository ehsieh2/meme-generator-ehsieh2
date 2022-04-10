import PropTypes from "prop-types";

function Output(props) {
  const { displayData } = props;

  return (
    <section className="section is-medium pt-0 pb-6 has-text-centered">
      <article className="message is-medium">
        <div className="message-body" id="output">
          <div className="meme">
            <img
              id="img"
              width="800rem"
              height="auto"
              src={displayData.image}
              alt=""
            />

            <h2 id="top-text" className="top">
              {displayData.topText}
            </h2>
            <h2 id="bottom-text" className="bottom">
              {displayData.bottomText}
            </h2>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Output;

Output.propTypes = {
  displayData: PropTypes.object.isRequired,
};