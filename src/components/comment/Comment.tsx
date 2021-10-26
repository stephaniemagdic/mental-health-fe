import React, {useState} from 'react';
import './comment.scss'
import { Response } from '../../interfaces';
import PersonIcon from '@mui/icons-material/Person';

interface CommentProps {
  responseText: Response;
}

const Comment: React.FC<CommentProps> = ({ responseText }) => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // const [value, setValue] = useState('');
  

//   const onChange = () => {
//    setValue(value);
//  };

//  const handleSave = () => {
//   setIsEditing(false)
//  }

//   const handleClick = () => {
//     setIsEditing(true)
//   }

  return (
    <div className='Comment--container'>
    {!isEditing && (
      <>
        {(<span className="user--span"><PersonIcon/><p className="detail person-title"> {responseText.user && <p>{responseText.user.title}</p>}</p></span>)}
        <p>{responseText['created_at'].slice(0,10)}</p>
        <p className='CommentText--p'>{responseText.body}</p>
        {/* <button onClick={() => handleClick()}>EDIT THIS COMMENT</button> */}
      </>
      )
    }

    {/* {isEditing && 
    (
      <>
    <input type="text" value={value} onChange={onChange} placeholder={value}/>
    <button onClick={() => handleSave() }>Save Comment</button>
    </>)
    } */}
  
  </div>
    )

}

export default Comment;

