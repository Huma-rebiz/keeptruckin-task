import React from "react";

const ArtistSearch = ({
  formsubmit,
  name,
  placeholder,
  inputprops,
  onChange,
  buttnlabel,
  searchKey,
  ...props
}) => {
  
  return (
    <div className="search-form">
      <form onSubmit={formsubmit}>
        <input
          type="text"
          name={name}
          value={searchKey}
          placeholder="Search artists"
          onChange={onChange}
          autoComplete="off"
        />
        
        <button type="submit">Search</button>
      </form>
      <span>e.g. shakira</span>
    </div>
  );
};

export default ArtistSearch;
