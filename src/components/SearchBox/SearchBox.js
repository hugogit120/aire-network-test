import React from 'react'

const SearchBox = ({ searchChange, categoryHandler, categories }) => {
    return (
        <div className='pa2 mb5 flex justify-center items-center'>
            <div className="mr5" >
                <input
                    className='pa3 ba bg-light-gray gray tc'
                    placeholder='search movie'
                    type='search'
                    onChange={searchChange}
                />
            </div>

            <div>
                <select className="bg-light-gray gray" onChange={categoryHandler}>
                    <option selected="" value="">todos los generos</option>
                    {categories.map(category => {
                        return (
                            <option value={category}>{category}</option>
                        )
                    })}
                </select>
            </div>

        </div>
    )
}

export default SearchBox