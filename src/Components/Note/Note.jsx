import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';
import { useDispatch, useSelector } from "react-redux";
import { postDelete, selectAllPosts } from "../../store/features/postsSlice";
import DateTime from "../Date&Time/Date&Time";
import './Note.css';


const Note = () => {
    const posts = useSelector(selectAllPosts);

    const dispatch = useDispatch()

    const onDeletePost = (post) => {
        dispatch(postDelete(post))
    }

    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    const renderedPosts = orderedPosts.map((post) => (

        <div key={post.id} className="note">
            <h1>{post.title}</h1>
            <p>{post.content}</p>
            <button>
                <DeleteRoundedIcon onClick={() => onDeletePost(post)} />
            </button>
            <p><DateTime time={post.date} /></p>
        </div>

    ))
    return (
        <>
            <div className="note_divTag">
                {renderedPosts}
            </div>

        </>
    );
};

export default Note;
