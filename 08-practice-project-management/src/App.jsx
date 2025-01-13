import { useState } from 'react';
import noProjectImg from './assets/no-projects.png';

function App() {
  const [projectList, setProjectList] = useState([]); // 전체 데이터 관리
  const [selectedId, setSelectedId] = useState(null);
  const [show, setShow] = useState('none');
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    subTask: [],
  });
  const [newTask, setNewTask] = useState('');

  function createProjectBtn() {
    setShow('write');
  }

  function handleChange(event, id) {
    setFormData((prevState) => {
      return {
        ...prevState,
        [id]: event.target.value,
      };
    });
  }

  function handleSaveClick() {
    setProjectList((prev) => [...prev, formData]);
    setFormData(() => {
      return {
        title: '',
        description: '',
        date: '',
        subTask: [],
      };
    });
    setShow('none');
  }

  function handleModifyClick(item, i) {
    setSelectedId(i);
    setShow('detail');
  }
  const selectedProject = projectList[selectedId];

  function handleInputChange(event) {
    setNewTask(() => event.target.value);
  }

  function handleAddBtn() {
    setProjectList((prev) => {
      return prev.map((project, index) => {
        if (index === selectedId) {
          return {
            ...project,
            subTask: [...project.subTask, newTask],
          };
        }
        return project;
      });
    });
    setNewTask('');
  }

  function deleteTaskBtn(inputIndex) {
    setProjectList((prev) => {
      return prev.map((project, index) => {
        if (index === selectedId) {
          return {
            ...project,
            subTask: project.subTask.filter((task, taskIndex) => taskIndex !== inputIndex),
          };
        }
        return project;
      });
    });
  }

  return (
    <>
      <div className="side-menu">
        <h2>YOUR PROJECT</h2>
        <button onClick={createProjectBtn}>+ Add Project</button>
        <ul>
          {projectList.map((item, i) => (
            <li key={i + 1} onClick={() => handleModifyClick(item, i)}>
              {item.title}
            </li>
          ))}
        </ul>
      </div>

      <div className="projects-content">
        {/* 아무것도 없을 때 */}
        {show == 'none' ? (
          <div>
            <div>
              {/* <img src={noProjectImg} /> */}
              <p>No Project Selected</p>
              <p>Select a project or get started with a new one</p>
            </div>
            <button>Create new project</button>
          </div>
        ) : null}
        {/* 작성 페이지 */}
        {show == 'write' ? (
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
                  value={formData.title}
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
                  value={formData.description}
                  onChange={(event) => handleChange(event, 'description')}
                ></textarea>
              </div>
              <div className="input-box">
                <p>DUE DATE</p>

                <input
                  type="date"
                  value={formData.date}
                  onChange={(event) => handleChange(event, 'date')}
                />
              </div>
            </form>
          </div>
        ) : null}

        {show == 'detail' ? (
          <div>
            <div className="board-box">
              <div className="board-header">
                <div className="title-wrap">
                  <p>{selectedProject.title}</p>
                  <button>Delete</button>
                </div>
                <div>
                  <p className="date">{selectedProject.date}</p>
                </div>
              </div>
              <div className="board-content">{selectedProject.description}</div>
            </div>
            <div className="tasks-box">
              <div className="header">
                <div className="title-wrap">
                  <p>제목</p>
                </div>
              </div>
              <div className="tasks-content">
                <div className="input-box">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(event) => handleInputChange(event)}
                  />
                  <button onClick={handleAddBtn}>Add Task</button>
                </div>
                {selectedProject.subTask.map((item, i) => (
                  <p>
                    {item} <button onClick={() => deleteTaskBtn(i)}>삭제</button>
                  </p>
                ))}
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
