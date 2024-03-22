import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";
import { useState, } from "react";
import { useDispatch } from "react-redux";
import { postAdd } from "../../store/features/postsSlice";
import "./CreateNotes.css";


const CreateNotes = () => {
  const [expanded, setExpanded] = useState(false);

  const expand = () => {
    setExpanded(true);
  };

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChanged = (e) => {
    setTitle(e.target.value);
  };
  const onContentChanged = (e) => {
    setContent(e.target.value);
  };


  const dispatch = useDispatch();

  const onPostClicked = () => {
    if (title && content) {
      dispatch(postAdd(title, content));
    }
    setTitle("");
    setContent("");
    setExpanded(false);

  };

  const canSave = title && content;

  return (
    <>
      <div className="">
        <form className="border-2 border-gray-500 create_note">
          {expanded && (
            <input
              type="text"
              placeholder="Title"
              value={title}
              onChange={onTitleChanged}
              className="inputTag"
            />
          )}

          <textarea
            name="content"
            placeholder="Take a note"
            onClick={expand}
            value={content}
            onChange={onContentChanged}
            className="textareaTag"
            rows={expanded ? 3 : 1}
          />

          {/* <h3>
            Title : {title} <br />
            Content : {content}
          </h3> */}

          <Zoom in={() => { expanded }}>
            <Fab onClick={onPostClicked} disabled={!canSave}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    </>
  );
};

export default CreateNotes;
