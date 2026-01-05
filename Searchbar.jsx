function Searchbar({placeholder= "Search..."}) {
    return (
        <input type="text"
        className="form-control w-50"
        placeholder= {placeholder} 
        />
    );
}

export default Searchbar;