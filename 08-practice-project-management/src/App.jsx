function App() {
  return (
    <>
      <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1>
      <div className="side-menu">
        <h2>YOUR PROJECT</h2>
        <button>+ Add Project</button>
      </div>

      <div className="projects-content">
        {/* 아무것도 없을 때 */}
        <div>
          <div>
            <img src="" alt="" />
            <p>No Project Selected</p>
            <p>Select a project or get started with a new one</p>
          </div>
          <button>Create new project</button>
        </div>
        {/* 작성 페이지 */}
        <div>
          <div className="btn-wrap">
            <button>Cancle</button>
            <button>Save</button>
          </div>

          <form action="#">
            <div className="input-box">
              <p>TITLE</p>
              <input type="text" />
            </div>
            <div className="input-box">
              <p>DESCRIPTION</p>
              <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="input-box">
              <p>DUE DATE</p>
              <input type="date" />
            </div>
          </form>
        </div>
        {/* 디테일 페이지 */}
        <div>
          <div className="board-box">
            <div className="board-header">
              <div className="title-wrap">
                <p>제목</p>
                <button>Delete</button>
              </div>
              <div>
                <p className="date">Dec 29,2024</p>
              </div>
            </div>
            <div className="board-content"></div>
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
      </div>
    </>
  );
}

export default App;
