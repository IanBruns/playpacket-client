import React, { useState } from 'react';
import trash from '../../images/garbage.png'
import edit from '../../images/edit.png'
import PlayPacketApiService from '../../services/playpacket-api-service';

export default function UserRule(props) {
    const [loading, setLoading] = useState(false)
    const [editing, setEditing] = useState(false)
    const [title, setTitle] = useState(props.rule_title)
    const [description, setDescription] = useState(props.rule_description)
    const [editTitle, setEditTitle] = useState(title);
    const [editDesc, setEditDesc] = useState(description);

    const submitChanges = e => {
        e.preventDefault();
        PlayPacketApiService.updateUserRule(props.id, editDesc, editTitle)
            .then(() => {
                setTitle(editTitle);
                setDescription(editDesc);
                setLoading(false);
                setEditing(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err);
            })
    }

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
            <form onSubmit={e => submitChanges(e)}>
                <label htmlFor='rule_title'>Title:</label>
                <input type='text' placeholder={title} name='rule_title'
                    value={editTitle} onChange={e => setEditTitle(e.target.value)} />
                <br />
                <label htmlFor='rule_description'>Description:</label>
                <input type='text' placeholder={description} name='rule_description'
                    value={editDesc} onChange={e => setEditDesc(e.target.value)} />
                <br />
                <button type="submit"
                    disabled={loading}>
                    {loading
                        ? 'Woah, hang tight'
                        : 'Submit!'}
                </button>
            </form>
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