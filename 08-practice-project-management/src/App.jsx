import { useState } from 'react';
import noProjectImg from './assets/no-projects.png';

function App() {
  const [projectList, setProjectList] = useState([]);
  const [showWrite, setShowWrite] = useState(false);
  const [showDetail, setShowDetail] = useState(false);
  const [writeProject, setWriteProject] = useState({
    title: '',
    description: '',
    date: '',
  });
  const [activeItem, setActiveItem] = useState({});

  function createProjectBtn() {
    setShowWrite((preState) => !preState);
    setShowDetail(false);
  }

  function handleChange(event, id) {
    console.log(event.target.value);
    console.log(id);

    setWriteProject((prevState) => {
      return {
        ...prevState,
        [id]: event.target.value,
      };
    });
  }

  function handleSaveClick() {
    setProjectList((prevList) => {
      return [...prevList, writeProject];
    });
  }

  function handleModifyClick(item) {
    setActiveItem(item);
    setShowWrite(false);
    setShowDetail(true);
  }

  return (
    <>
      <div className="side-menu">
        <h2>YOUR PROJECT</h2>
        <button onClick={createProjectBtn}>+ Add Project</button>
        <ul>
          {projectList.map((item) => (
            <li onClick={() => handleModifyClick(item)}>{item.title}</li>
          ))}
        </ul>
      </div>

      <div className="projects-content">
        {/* 아무것도 없을 때 */}
        <div>
          <div>
            {/* <img src={noProjectImg} /> */}
            <p>No Project Selected</p>
            <p>Select a project or get started with a new one</p>
          </div>
          <button>Create new project</button>
        </div>
        {/* 작성 페이지 */}
        {showWrite ? (
          <div>
            <div className="btn-wrap">
              <button>Cancle</button>
              <button onClick={handleSaveClick}>Save</button>
            </div>

            <form action="#">
              <div className="input-box">
                <p>TITLE</p>
                <input
                  type="text"
                  value={writeProject.title}
                  onChange={(event) => handleChange(event, 'title')}
                />
              </div>
              <div className="input-box">
                <p>DESCRIPTION</p>
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  value={writeProject.description}
                  onChange={(event) => handleChange(event, 'description')}
                ></textarea>
              </div>
              <div className="input-box">
                <p>DUE DATE</p>

                <input
                  type="date"
                  value={writeProject.date}
                  onChange={(event) => handleChange(event, 'date')}
                />
              </div>
            </form>
          </div>
        ) : null}

        {showDetail ? (
          <div>
            <div className="board-box">
              <div className="board-header">
                <div className="title-wrap">
                  <p>{activeItem.title}</p>
                  <button>Delete</button>
                </div>
                <div>
                  <p className="date">{activeItem.date}</p>
                </div>
              </div>
              <div className="board-content">{activeItem.description}</div>
            </div>
            <div className="tasks-box">
              <div className="header">
                <div className="title-wrap">
                  <p>제목</p>
                </div>
              </div>
              <div className="tasks-content">
                <div className="input-box">
                  <input type="text" />
                  <button>Add Task</button>
                </div>
                <p></p>
              </div>
            </div>
          </div>
        ) : null}
        {/* 디테일 페이지 */}
      </div>
    </>
  );
}

export default App;
