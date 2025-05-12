const ImageComponent = function (props) {
  return (
    <>
      <div className="imagine">
        <img src={props.src} alt={props.alt} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat distinctio enim exercitationem aspernatur eaque voluptates earum doloribus qui,
          beatae illo, eius fugiat itaque, ipsam quasi incidunt omnis temporibus quibusdam odit!
        </p>
      </div>
    </>
  );
};
