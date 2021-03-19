import React, { useState } from 'react';
import trash from '../../images/garbage.png'
import edit from '../../images/edit.png'

export default function UserRule(props) {
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(props.rule_title)
    const [description, setDescription] = useState(props.rule_description)
    const [editTitle, setEditTitle] = useState(title);
    const [editDesc, setEditDesc] = useState(description);

    function renderStaticItems() {
        return (
            <>
                <p>{title}</p>
                <p>{description}</p>
            </>
        )
    }

    function renderEditItems() {
        return (
            <>
                <input type='text' placeholder={title} name='rule_title'
                    value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                <br />
                <input type='text' placeholder={description} name='rule_description'
                    value={editDesc} onChange={e => setEditDesc(e.target.value)} />
                <br />
                <button>
                    Post
                </button>
            </>
        )
    }

    return (
        <div className='rule'>
            <div className='icons'>
                <img src={trash} alt='delete' height='20px'
                    onClick={() => props.handleDeleteClicked(props.id)} />
                <img src={edit} alt='edit' height='20px'
                    onClick={() => setEditing(!editing)} />
            </div>

            {(editing === true)
                ? renderEditItems()
                : renderStaticItems()}
        </div>
    )
}