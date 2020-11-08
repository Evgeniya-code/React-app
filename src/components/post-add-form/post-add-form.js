import React from 'react';

import './post-add-form.css';

const PostAddForm = () => {
    return (
        <form className="bottom-panel d-flex">
            <input
                type="text"
                placeholder="what are you thinking about?"
                className="form-control new-post-label"
            />
            <button 
                type="submit"
                className="btn btn-outline-secondary">
                Add a new post
            </button>
        </form>
    ) 
}
export default PostAddForm;