function NameBadge(props) {
    const formattedPhone = props.info.phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
    return (
      <div className="badge-container">
        <div className="name-badge">
          <header className="badge-header">
            <h2 className="header-text">Badge:</h2>
          </header>
          <h3 className="badge-info">{`Name: ${props.info.firstName} ${props.info.lastName}`}</h3>
          <h3 className="badge-info">Phone: {formattedPhone}</h3>
          <h3 className="badge-info">Place of Birth: {props.info.birthPlace}</h3>
          <h3 className="badge-info">Favorite Food: {props.info.favoriteFood}</h3>
          <h3 className="badge-info">Email: {props.info.email}</h3>
          <textarea className="badge-textarea" rows="8" value={props.info.descriptionBox} readOnly />
        </div>
      </div>
    );
  }
  
  export default NameBadge;