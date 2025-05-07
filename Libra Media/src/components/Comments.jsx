import React from "react";
import { useState, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addComment } from "../redux/slice/commentsSlice";
import "../scss/comments.scss"

function Comments() {
  const [commentText, setCommentText] = useState("");
  const [previewImage, setPreviewImage] = useState(null);
  const [activeTab, setActiveTab] = useState("all");
  const fileInputRef = useRef(null);

  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments.comments);
  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setPreviewImage(reader.result);
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitComment = () => {
    if (commentText.trim() === "" && !previewImage) return;

    const newComment = {
      id: Date.now(),
      name: "Gul Majid",
      text: commentText,
      timestamp: new Date(),
      image: previewImage,
    };

    dispatch(addComment(newComment));
    setCommentText("");
    setPreviewImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleRemovePreview = () => {
    setPreviewImage(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const filteredComments =
    activeTab === "all" ? comments : comments.filter((c) => c.image);

  return (
    <div className="comment-box">
      <h2>Comments</h2>

      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        placeholder="Write a comment..."
      />

      {previewImage && (
        <div className="preview">
          <img src={previewImage} alt="Preview" />
          <button onClick={handleRemovePreview}>Remove</button>
        </div>
      )}

      <input
        type="file"
        accept="image/*"
        ref={fileInputRef}
        onChange={handleFileChange}
        style={{ display: "none" }}
      />

      <div className="actions">
        <button onClick={() => fileInputRef.current.click()}>
          Upload Image
        </button>
        <button onClick={handleSubmitComment}>Post Comment</button>
      </div>

      <div className="tabs">
        <button
          className={activeTab === "all" ? "active" : ""}
          onClick={() => setActiveTab("all")}
        >
          All Comments
        </button>
        <button
          className={activeTab === "photos" ? "active" : ""}
          onClick={() => setActiveTab("photos")}
        >
          With Photos
        </button>
      </div>

      {filteredComments.length > 0 ? (
        filteredComments.map((comment) => (
          <div key={comment.id} className="comment">
            <strong>{comment.name}</strong>
            <p>{comment.text}</p>
            {comment.image && <img src={comment.image} alt="Comment" />}
            <small>{new Date(comment.timestamp).toLocaleString()}</small>
          </div>
        ))
      ) : (
        <div className="no-comments">
          No comments yet. Be the first to comment!
        </div>
      )}
    </div>
  );
}

export default Comments;
