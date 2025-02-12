import { useState} from "react";

function SearchBar(props) {

    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [type, setType] = useState("");
    const [brand, setBrand] = useState("");

    const SearchButtonPresssed = () =>  {
        props.callback({ name: name, price: price, type: type, brand: brand});
    };
    return (
        <div>
            <h2>Search for an item</h2>
            <form>
                <label for="name-field">Name:</label>
                <input 
                    id="name-field"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <label for="price-field">Max price:</label>
                <input id="price-field" type="number" value={price} onChange={(e) => setPrice(e.target.value)}/>
                <label for="type-field">Type:</label>
                <input id="type-field" type="text" value={type} onChange={(e) => setType(e.target.value)}/>
                <label for="brand-field">Brand:</label>
                <input id="brand-field" type="text" value={brand} onChange={(e) => setBrand(e.target.value)}/>
                <button type="button" onClick ={SearchButtonPresssed}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar